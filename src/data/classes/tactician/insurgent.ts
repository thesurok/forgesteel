import { AbilityKeyword } from '@/enums/ability-keyword';
import { Characteristic } from '@/enums/characteristic';
import { FactoryLogic } from '@/logic/factory-logic';
import { SkillList } from '@/enums/skill-list';
import { SubClass } from '@/models/subclass';

export const insurgent: SubClass = {
	id: 'tactician-sub-1',
	name: 'Повстанець',
	description: 'Виконувати свій обовʼязок, чесно грати й шляхетно вмирати в бою — справа ваших супротивників. Ви зробите все можливе, щоб зберегти життя своїх союзників.',
	featuresByLevel: [
		{
			level: 1,
			features: [
				FactoryLogic.feature.createSkillChoice({
					id: 'tactician-sub-1-1-1',
					listOptions: [SkillList.Intrigue]
				}),
				FactoryLogic.feature.create({
					id: 'tactician-sub-1-1-2',
					name: 'Таємні операції',
					description: `
Поки ви поруч або дієте за вашими планами, кожен із ваших союзників отримує перевагу на перевірках, що використовують будь-яку навичку з групи інтриги. Крім того, ви можете використовувати навичку Лідерство, щоб допомогти іншій істоті в будь-якій перевірці, що використовує навичку з групи інтриги.

На розсуд Директора ви та ваші союзники можете використовувати навички з групи інтриги для проведення досліджень або розвідки під час переговорів, а не лише поза ними.`
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'tactician-sub-1-1-3',
						name: 'Вдосконалена тактика',
						description: 'Ваше лідерство допомагає союзнику.',
						type: FactoryLogic.type.createTrigger('Ціль завдає шкоди іншій істоті.'),
						keywords: [AbilityKeyword.Ranged],
						distance: [FactoryLogic.distance.createRanged(10)],
						target: 'Один союзник',
						sections: [
							FactoryLogic.createAbilitySectionText('Ціль отримує 2 сплески, які вона може витратити на тригерну шкоду.'),
							FactoryLogic.createAbilitySectionSpend({
								effect: 'Якщо шкода має повʼязаний із нею ефект потужності, потужність збільшується на 1.'
							})

						]
					})
				})
			]
		},
		{
			level: 2,
			features: [
				FactoryLogic.feature.create({
					id: 'tactician-sub-1-2-1',
					name: 'Тактика інфільтрації',
					description: 'Ви натренували свій загін працювати разом, зберігати тишу та чекати слушного моменту для удару. Коли ви або будь‑який союзник у радіусі 10 клітинок стає прихованим, та істота отримує 1 сплеск.'
				}),
				FactoryLogic.feature.createChoice({
					id: 'tactician-sub-1-2-2',
					name: 'Здібність доктрини 2-го рівня',
					options: [
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'tactician-sub-1-2-2a',
									name: 'Туман війни',
									description: 'Ваша нестандартна стратегія змушує ворогів панікувати й безрозсудно нападати, не звертаючи уваги, кого вони можуть атакувати.',
									type: FactoryLogic.type.createManeuver(),
									keywords: [AbilityKeyword.Ranged],
									distance: [FactoryLogic.distance.createRanged(10)],
									target: 'Дві істоти',
									cost: 5,
									sections: [
										FactoryLogic.createAbilitySectionText('Кожну ціль ви позначаєте, і вона має негайно виконати вільний удар по істоті на ваш вибір у радіусі 5 клітинок.'),
										FactoryLogic.createAbilitySectionField({
											name: 'Перевага мітки',
											effect: 'До кінця сутички, коли ви або будь‑який союзник завдає удару по істоті, позначеній вами, ви можете витратити 2 фокусу, щоб змусити ту ціль виконати вільний удар по істоті на ваш вибір у радіусі 5 клітинок.'
										})
									]
								})
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'tactician-sub-1-2-2b',
									name: 'Спробуй напасти на мене',
									description: '«Спробуй напасти на когось мого розміру.»',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
									distance: [FactoryLogic.distance.createSelf()],
									target: 'Одна істота',
									cost: 5,
									sections: [
										FactoryLogic.createAbilitySectionText('Ви зсуваєтесь на відстань до своєї швидкості прямо до союзника, закінчуючи поруч із ним, а потім міняєтесь місцями з тим союзником, якщо ви вміщаєтесь у простір один одного. Союзник може витратити Відновлення, а ви можете виконати наступний удар зброєю з дистанцією ближнього бою 1 по істоті.'),
										FactoryLogic.createAbilitySectionRoll(
											FactoryLogic.createPowerRoll({
												characteristic: [Characteristic.Reason],
												tier1: '2 + Р шкоди; Р < [слабкий], зляканий (рят. кидок закінчує)',
												tier2: '3 + Р шкоди; Р < [середній], зляканий (рят. кидок закінчує)',
												tier3: '4 + Р шкоди; Р < [сильний], зляканий (рят. кидок закінчує)'
											})
										)
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
				FactoryLogic.feature.create({
					id: 'tactician-sub-1-5-1',
					name: 'Відволікання',
					description: 'Ви опанували мистецтво відволікати ворогів, що дозволяє вам і вашим союзникам скористатися їхніми прогалинами уваги. Коли ви або будь‑який союзник намагається сховатися, істота, позначена вами, не вважається спостерігачем. Крім того, ви та ваші союзники можете використовувати інших союзників як прикриття для приховування.'
				}),
				FactoryLogic.feature.create({
					id: 'tactician-sub-1-5-2',
					name: 'Не залишай слідів',
					description: 'Ви та будь‑який союзник у радіусі 10 клітинок можете рухатися повною швидкістю під час приховування. Крім того, вороги у радіусі 10 клітинок отримують штраф (bane) до перевірок пошуку вас або ваших союзників, поки хтось із вас прихований.'
				})
			]
		},
		{
			level: 6,
			features: [
				FactoryLogic.feature.createChoice({
					id: 'tactician-sub-1-6-1',
					name: 'Здібність доктрини 6-го рівня',
					options: [
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'tactician-sub-1-6-1a',
									name: 'Скоординоване виконання',
									description: 'Ви наказуєте союзнику нанести фатальний удар.',
									type: FactoryLogic.type.createTrigger('Ціль використовує здібність, щоб завдати кинутої шкоди істоті, перебуваючи прихованою.', { free: true }),
									keywords: [AbilityKeyword.Ranged],
									distance: [FactoryLogic.distance.createRanged(10)],
									target: 'Один союзник',
									cost: 9,
									sections: [
										FactoryLogic.createAbilitySectionText('Якщо ціль тригерної здібності не є лідером або одиничною істотою, вона зводиться до 0 Витривалості. Якщо ціллю є міньйон, увесь загін вбито. Якщо ціль — лідер або одиниця, кидок сили тригерної здібності автоматично отримує результат рівня 3.')
									]
								})
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'tactician-sub-1-6-1b',
									name: 'Паніка в їхніх лавах',
									description: 'Ви дезорієнтуєте ворогів, змушуючи їх нападати один на одного.',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Melee, AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon],
									distance: [
										FactoryLogic.distance.createMelee(),
										FactoryLogic.distance.createRanged(5)
									],
									target: 'Дві істоти',
									cost: 9,
									sections: [
										FactoryLogic.createAbilitySectionRoll(
											FactoryLogic.createPowerRoll({
												characteristic: Characteristic.Might,
												tier1: '6 + С шкоди; зсунутися на 1',
												tier2: '9 + С шкоди; зсунутися на 3',
												tier3: '13 + С шкоди; зсунутися на 5'
											})
										),
										FactoryLogic.createAbilitySectionText('Якщо ціль примусово переміщується в іншу істоту, вона має виконати вільний удар по цій істоті.')
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
					id: 'tactician-sub-1-7-1',
					name: 'Асиметрична війна',
					description: 'Ви вдосконалили навички підривної діяльності й тепер керуєте стратегічними та логістичними аспектами поля бою. Під час монтажного тесту або переговорів ви можете отримати одну автоматичну успіхову результативність на перевірку, виконану з використанням навички з групи інтриги. Крім того, ви можете використовувати навички з групи інтриги для приховування великих груп людей, наприклад втікаючих цивільних чи загонів партизан.'
				})
			]
		},
		{
			level: 8,
			features: [
				FactoryLogic.feature.createPackageContent({
					id: 'tactician-sub-1-8-1',
					name: 'Приманка та засідка',
					description: 'Коли ви або будь‑який союзник завдає удару по істоті, позначеній вами, ви можете витратити 2 фокусу, щоб дозволити тому, хто завдає удар, зсунутися на кількість клітинок, рівну вашому показнику Розуму, і один раз під час пересування використати маневр Приховування як безкоштовний маневр. Істота може зсунутися до або після розвʼязання удару.',
					tag: 'mark'
				})
			]
		},
		{
			level: 9,
			features: [
				FactoryLogic.feature.createChoice({
					id: 'tactician-sub-1-9-1',
					name: 'Здібність доктрини 9-го рівня',
					options: [
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'tactician-sub-1-9-1a',
									name: 'Загін! Удар і втеча!',
									description: 'Мені довелося вивідкрутити цей секрет з тіньових колегій.',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Ranged],
									distance: [FactoryLogic.distance.createRanged(10)],
									target: 'Себе і двох союзників',
									cost: 11,
									sections: [
										FactoryLogic.createAbilitySectionText('Кожна ціль отримує 2 сплески і може використати безкоштовну тригерну дію, щоб застосувати сигнатурну здібність, яка отримує перевагу. Після розвʼязання їхньої здібності кожна ціль може зсунутися до 2 клітинок і стати прихованою, навіть якщо вона не має укриття або прихованості, або якщо її бачать.'),
									]
								})
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'tactician-sub-1-9-1b',
									name: 'Їхня розсіяність — їхня загибель',
									description: 'Ви вводите ворогів в оману, змушуючи їх атакувати один на одного та залишаєте їх збентеженими після цього.',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged, AbilityKeyword.Weapon],
									distance: [FactoryLogic.distance.createRanged(10)],
									target: 'Три вороги',
									cost: 11,
									sections: [
										FactoryLogic.createAbilitySectionText('Кожна ціль використовує сигнатурну здібність проти однієї або кількох цілей за вашим вибором, причому кожна така здібність автоматично отримує результат рівня 3 на кидку сили. Після розвʼязання здібностей цілей ви робите кидок сили проти кожної початкової цілі.'),
										FactoryLogic.createAbilitySectionRoll(
											FactoryLogic.createPowerRoll({
												characteristic: Characteristic.Might,
												tier1: 'Р < [слабкий], приголомшений (рят. кидок закінчує)',
												tier2: 'Р < [середній], приголомшений (рят. кидок закінчує)',
												tier3: 'Р < [сильний], приголомшений (рят. кидок закінчує)'
											})
										)
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
