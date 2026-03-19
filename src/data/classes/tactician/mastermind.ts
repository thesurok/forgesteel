import { AbilityDistanceType } from '@/enums/ability-distance-type';
import { AbilityKeyword } from '@/enums/ability-keyword';
import { Characteristic } from '@/enums/characteristic';
import { FactoryLogic } from '@/logic/factory-logic';
import { SkillList } from '@/enums/skill-list';
import { SubClass } from '@/models/subclass';

export const mastermind: SubClass = {
	id: 'tactician-sub-2',
	name: 'Майстер стратегії',
	description: 'Ви маєте енциклопедичні знання про ведення війни: бачите поле бою як ігрову дошку та добиваєтесь перемоги, передбачаючи ходи супротивників.',
	featuresByLevel: [
		{
			level: 1,
			features: [
				FactoryLogic.feature.createSkillChoice({
					id: 'tactician-sub-2-1-1',
					listOptions: [SkillList.Lore]
				}),
				FactoryLogic.feature.create({
					id: 'tactician-sub-2-1-2',
					name: 'Досвідчений командир',
					description: `
Ваші енциклопедичні знання з історії битв дозволяють застосовувати їх до поточних викликів. Поки ви присутні, кожний герой поряд із вами трактує проект «Discover Lore», пов'язаний з війною або битвою, на одну категорію дешевше. Це робить проекти пошуку загальних відомостей безкоштовними, але такі проекти все одно вимагають дії перепочинку для завершення.

Крім того, якщо до бойового зіткнення або переговорів залишилось 24 години або більше, і у вас є одна або кілька підказок чи чуток щодо зіткнення або переговорів, ви можете виконати перевірку Розуму як дію перепочинку.

Результати перевірки для бойового зіткнення:

| Roll    | Effect                                                                                                           |
|:--------|:-----------------------------------------------------------------------------------------------------------------|
| ≤ 11    | Директор повідомляє вам кількість істот у зіткненні.                                                              |
| 12 - 16 | Директор повідомляє кількість та рівень істот у зіткненні.                                                       |
| ≥ 17    | Директор повідомляє інформацію рівня 2, і коли зіткнення починається, усі вороги застаються зненацька.            |

Результати перевірки для переговорів:

| Roll    | Effect                                                                                                                                                       |
|:--------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ≤ 11    | Директор дає вам три мотивації, одна з яких належить NPC у переговорі.                                                                                         |
| 12 - 16 | Директор дає вам одну мотивацію для NPC у переговорі.                                                                                                         |
| ≥ 17    | Директор повідомляє інформацію рівня 2, і ви та кожний ваш союзник отримуєте перевагу в перевірках на вплив NPC під час переговорів.                            |

Ви можете здійснити цю перевірку лише один раз для будь-якого зіткнення або переговорів.`,
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'tactician-sub-2-1-3',
						name: 'На варті',
						description: 'Під вашим керівництвом союзник чекає найкращого моменту для удару.',
						type: FactoryLogic.type.createTrigger('Ціль рухається.'),
						keywords: [AbilityKeyword.Ranged],
						distance: [FactoryLogic.distance.createRanged(10)],
						target: 'Одна істота',
						sections: [
							FactoryLogic.createAbilitySectionText('У будь-який момент під час руху цілі один союзник може виконати вільну атаку по ній.'),
							FactoryLogic.createAbilitySectionSpend({
								effect: 'Якщо ціль має Р < [середній], вона уповільнена (до кінця ходу).'
							})
						]
					})
				})
			]
		},
		{
			level: 2,
			features: [
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'tactician-sub-2-2-1',
						name: 'Провокування',
						description: 'Ви навчились використовувати психологію ваших мічених ворогів і провокувати їх до дій раніше, ніж вони тактично готові.',
						type: FactoryLogic.type.createTrigger('Істота, позначена вами, використовує удар, що націлюється на вас або будь-якого союзника у межах вашої лінії дії.', { free: true }),
						distance: [FactoryLogic.distance.createSelf()],
						target: 'Себе',
						sections: [
							FactoryLogic.createAbilitySectionText('Ви можете змінити одну ціль удару на себе або іншого союзника в межах вашої лінії дії. Нова ціль повинна бути в межах дальності здатності та в межах лінії дії істоти, що її використовує.')
						]
					})
				}),
				FactoryLogic.feature.createChoice({
					id: 'tactician-sub-2-2-2',
					name: 'Здібність доктрини 2-го рівня',
					options: [
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'tactician-sub-2-2-2a',
									name: 'Я прикриваю твою спину',
									description: 'Ваш ворог подумає двічі, перш ніж атакувати вашого товариша.',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon],
									distance: [FactoryLogic.distance.createRanged(5)],
									target: 'Одна істота',
									cost: 5,
									sections: [
										FactoryLogic.createAbilitySectionRoll(
											FactoryLogic.createPowerRoll({
												characteristic: [Characteristic.Reason],
												tier1: '5 + Р шкоди; спровокований (до кінця ходу)',
												tier2: '9 + Р шкоди; спровокований (до кінця ходу)',
												tier3: '12 + Р шкоди; спровокований (до кінця ходу)'
											})
										),
										FactoryLogic.createAbilitySectionText('Один союзник поруч із ціллю може витратити Відновлення.')
									]
								})
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'tactician-sub-2-2-2b',
									name: 'Мішені нагоди',
									description: 'Ви вказуєте друзям легкі цілі, дозволяючи їм включати більше ворогів у свої атаки.',
									type: FactoryLogic.type.createManeuver(),
									keywords: [AbilityKeyword.Ranged],
									distance: [FactoryLogic.distance.createRanged(5)],
									target: 'Дві істоти',
									cost: 5,
									sections: [
										FactoryLogic.createAbilitySectionText('Кожна ціль позначена вами, і ви отримуєте два сплески.'),
										FactoryLogic.createAbilitySectionField({
											name: 'Перевага маркування',
											effect: 'До кінця зіткнення, коли ви або будь-який союзник завдає удару по істоті, позначеній вами, ви можете витратити 2 фокусу, щоб додати одну додаткову ціль до удару.'
										})
									]
								})
							}),
							value: 1
						}
					]
				})
			]
		},
		{
			level: 3,
			features: []
		},
		{
			level: 4,
			features: []
		},
		{
			level: 5,
			features: [
				FactoryLogic.feature.createPackageContent({
					id: 'tactician-sub-2-5-1',
					name: 'Передбачення',
					description: 'Ви навчились діяти більш випереджувально на полі бою, думаючи на кілька ходів наперед порівняно з супротивниками. Ви можете націлити дві істоти своєю здатністю маркування.',
					tag: 'mark'
				}),
				FactoryLogic.feature.create({
					id: 'tactician-sub-2-5-2',
					name: 'Я це передбачив',
					description: 'Ваші знання історії та легенд дозволяють вам і вашим союзникам випереджати супротивників у сучасних умовах. Ви та будь-який союзник у межах 10 клітинок отримують перевагу в перевірках Розуму.'
				})
			]
		},
		{
			level: 6,
			features: [
				FactoryLogic.feature.createChoice({
					id: 'tactician-sub-2-6-1',
					name: 'Здібність доктрини 6-го рівня',
					options: [
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'tactician-sub-2-6-1a',
									name: 'Бойовий план',
									description: 'З новим розумінням супротивників ви створюєте ідеальний план для перемоги в бою.',
									type: FactoryLogic.type.createManeuver(),
									keywords: [AbilityKeyword.Ranged],
									distance: [FactoryLogic.distance.createRanged(10)],
									target: '3 Істоти',
									cost: 9,
									sections: [
										FactoryLogic.createAbilitySectionText('Кожна ціль позначена вами. Негайно і до кінця зіткнення Директор повідомляє вам, чи мають позначені вами істоти імунітет або вразливість до шкоди та значення цього імунітету або вразливості. Крім того, ви та кожний союзник у межах 3 клітинок отримують 2 сплески.'),
										FactoryLogic.createAbilitySectionField({
											name: 'Перевага маркування',
											effect: 'До кінця зіткнення, коли ви або будь-який союзник завдає удару по істоті, позначеній вами, ви можете витратити 2 фокусу, щоб змусити удар ігнорувати імунітет до шкоди та завдавати додаткову шкоду, рівну трьом разам вашого значення Розуму.'
										})
									]
								})
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'tactician-sub-2-6-1b',
									name: 'Вперед!',
									description: 'Ви та ваші союзники координуєтесь, щоб сформувати нову бойову лінію.',
									type: FactoryLogic.type.createManeuver(),
									keywords: [AbilityKeyword.Area],
									distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 2 })],
									target: 'На себе і кожного союзника в зоні впливу',
									cost: 9,
									sections: [
										FactoryLogic.createAbilitySectionText('Ви позначаєте двох ворогів у межах 10 клітинок від вас. Кожна ціль може зміститися на відстань до своєї швидкості. Ви та кожна ціль отримують по 2 сплески.')
									]
								})
							}),
							value: 1
						}
					]
				})
			]
		},
		{
			level: 7,
			features: [
				FactoryLogic.feature.create({
					id: 'tactician-sub-2-7-1',
					name: 'Велика стратегія',
					description: 'Ви розвинули свої навички в стратегії, володіючи складними тактиками й планами на полі бою. Під час монтажного тесту або переговорів ви можете отримати один автоматичний успіх у перевірці, зробленій навичкою з групи знань. Крім того, коли ви берете перепочинок, ви можете виконати перевірку проекту для дослідницького проекту поряд із іншою дією перепочинку.'
				})
			]
		},
		{
			level: 8,
			features: [
				FactoryLogic.feature.createPackageContent({
					id: 'tactician-sub-1-8-1',
					name: 'Клещовий маневр',
					description: 'Коли ви або будь-який союзник атакує істоту, позначену вами, ви можете витратити 2 фокусу, щоб персонаж, що здійснює атаку, змістився на кількість клітинок, рівну вашому значенню Розуму, перед тим як атака буде виконана. Якщо ви не здійснювали атаку, ви також можете зробити це зміщення. Якщо ви здійснили атаку, один союзник у межах 10 клітинок від вас також може виконати це зміщення.',
					tag: 'mark'
				})
			]
		},
		{
			level: 9,
			features: [
				FactoryLogic.feature.createChoice({
					id: 'tactician-sub-2-9-1',
					name: 'Здібність доктрини 9-го рівня',
					options: [
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'tactician-sub-2-9-1a',
									name: 'Затьмарити сонце!',
									description: 'Що робить хорошого солдата? Здатність вести вогонь чотири постріли на хвилину в будь-яку погоду.',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Area],
									distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 3 })],
									target: 'На себе і кожного союзника в зоні впливу',
									cost: 11,
									sections: [
										FactoryLogic.createAbilitySectionText('Кожна ціль може виконати дистанційну вільну атаку, яка отримує перевагу проти будь-якого ворога, позначеного вами, у межах дальності її дистанційної вільної атаки. Ціль ігнорує шкоди (Bane) і подвійні шкоди при виконанні цієї атаки.')
									]
								})
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'tactician-sub-2-9-1b',
									name: 'Контрстратегія',
									description: 'Я знайшов спосіб нейтралізувати їхні сильні сторони.',
									type: FactoryLogic.type.createMain(),
									distance: [FactoryLogic.distance.createSelf()],
									target: 'Себе',
									cost: 11,
									sections: [
										FactoryLogic.createAbilitySectionText('Ви отримуєте 6 сплесків. До кінця зіткнення або поки ви не помрете, коли Директор витрачає Злість, виберіть себе або одного союзника в межах 10 клітинок. Обраний персонаж отримує 2 своїх Героїчних Ресурсів.')
									]
								})
							}),
							value: 1
						}
					]
				})
			]
		},
		{
			level: 10,
			features: []
		}
	],
	abilities: [],
	selected: false
};
