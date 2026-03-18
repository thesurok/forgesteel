import { AbilityDistanceType } from '@/enums/ability-distance-type';
import { AbilityKeyword } from '@/enums/ability-keyword';
import { Characteristic } from '@/enums/characteristic';
import { FactoryLogic } from '@/logic/factory-logic';
import { FeatureField } from '@/enums/feature-field';
import { SubClass } from '@/models/subclass';

export const berserker: SubClass = {
	id: 'fury-sub-1',
	name: 'Берсеркер',
	description: 'Ви спрямовуєте свій гнів у прояви фізичної сили, діючи як жива сила, що перетворює світ.',
	featuresByLevel: [
		{
			level: 1,
			features: [
				FactoryLogic.feature.createSkillChoice({
					id: 'fury-sub-1-1-1',
					selected: ['Підйом']
				}),
				FactoryLogic.feature.createKitChoice({
					id: 'fury-sub-1-1-2'
				}),
				FactoryLogic.feature.create({
					id: 'fury-sub-1-1-3',
					name: 'Первісна Сила',
					description: `
Кожного разу, коли ви пошкоджуєте обʼєкт ударом зброї, удар завдає додаткової шкоди, рівної вашому показникові Сили. Крім того, коли ви штовхаєте іншу істоту в обʼєкт, ця істота отримує додаткову шкоду, рівну вашому показникові Сили.

Коли ваша лють зростає, ви отримуєте переваги, зазначені в таблиці «Зростаюча Лють Берсеркера». Переваги накопичуються, окрім випадків, коли покращена перевага замінює менш потужну.

* **Лють 2**: Коли ви використовуєте маневр «Відштовхування», відстань примусового переміщення отримує бонус, рівний вашому показникові Сили.
* **Лють 4**: Першого разу в ході, коли ви штовхаєте істоту, ви отримуєте 1 сплеск.
* **Лють 6**: Ви маєте перевагу на перевірках Сили та при маневрі «Відштовхування».`
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'fury-sub-1-1-4',
						name: 'Лінії Сили',
						description: 'Ви перенаправляєте енергію руху.',
						type: FactoryLogic.type.createTrigger('Ціль мала б бути примусово переміщена.'),
						keywords: [AbilityKeyword.Magic, AbilityKeyword.Melee],
						distance: [FactoryLogic.distance.createMelee()],
						target: 'Себе або одну істоту',
						sections: [
							FactoryLogic.createAbilitySectionText('Ви можете вибрати нову ціль такого ж розміру або меншу в межах дистанції для примусового переміщення замість початкової. Ви стаєте джерелом примусового переміщення, визначаєте призначення нової цілі й можете штовхнути ціль замість використання первісного типу примусового переміщення. Додатково відстань примусового переміщення отримує бонус, рівний вашому показникові Сили.'),
							FactoryLogic.createAbilitySectionSpend({
								effect: 'Відстань примусового переміщення натомість отримує бонус, рівний подвоєному показникові вашої Сили.'
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
					id: 'fury-sub-1-2-1',
					name: 'Непереборна Сила',
					description: 'Коли ви використовуєте основну дію «Ривок», ви можете застосувати підписну або героїчну здібність удару замість безкоштовного удару. Додатково ви можете виконати стрибок у складі ривка.'
				}),
				FactoryLogic.feature.createChoice({
					id: 'fury-sub-1-2-2',
					name: 'Здібність Аспекту 2-го Рівня',
					options: [
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'fury-sub-1-2-2a',
									name: 'Спеціальна Доставка',
									description: 'Готові?',
									type: FactoryLogic.type.createManeuver(),
									keywords: [AbilityKeyword.Melee, AbilityKeyword.Weapon],
									distance: [FactoryLogic.distance.createMelee()],
									target: 'Один охочий союзник',
									cost: 5,
									sections: [
										FactoryLogic.createAbilitySectionText('Ви вертикально підштовхуєте ціль до 4 клітинок. Це примусове переміщення ігнорує стабільність цілі, і ціль не отримує шкоди від зіткнення з істотами або обʼєктами. Наприкінці цього переміщення ціль може виконати безкоштовний удар, який завдає додаткової шкоди, рівної вашому показникові Сили.')
									]
								})
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'fury-sub-1-2-2b',
									name: 'Руйнівна Куля',
									description: 'Руйнувати значно легше, ніж створювати. Насправді набагато легше!',
									type: FactoryLogic.type.createManeuver(),
									keywords: [AbilityKeyword.Melee, AbilityKeyword.Weapon],
									distance: [FactoryLogic.distance.createSelf()],
									target: 'Себе; див. нижче',
									cost: 5,
									sections: [
										FactoryLogic.createAbilitySectionText(`
Ви рухаєтеся на відстань, яка дорівнює вашій швидкості, по прямій. Під час цього руху ви можете проходити через звичайні конструкції, включаючи стіни, які для вас є важкодоступною місцевістю. Ви автоматично знищуєте кожну клітинку конструкції, через яку проходите, і залишаєте після себе клітинку важкодоступної місцевості.

Додатково ви виконуєте один кидок сили, спрямований на кожного ворога, поруч з яким ви опинилися під час цього руху.`),
										FactoryLogic.createAbilitySectionRoll(
											FactoryLogic.createPowerRoll({
												characteristic: [Characteristic.Might],
												tier1: 'Відштовхнути на 1 клітину',
												tier2: 'Відштовхнути на 2 клітини',
												tier3: 'Відштовхнути на 3 клітини'
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
			features: [
				FactoryLogic.feature.create({
					id: 'fury-sub-1-3-1',
					name: 'Нерухомий Обʼєкт',
					description: 'Ви додаєте свій рівень до вашого ефективного розміру для цілей взаємодії з істотами та обʼєктами, зокрема для визначення, чи можете ви підняти обʼєкт, чи на вас діє примусове переміщення тощо. Це не впливає на те, чи можуть вас схопити.'
				}),
				FactoryLogic.feature.createBonus({
					id: 'fury-sub-1-3-2',
					field: FeatureField.Stability,
					valueCharacteristics: [Characteristic.Might]
				})
			]
		},
		{
			level: 4,
			features: [
				FactoryLogic.feature.create({
					id: 'fury-sub-1-4-1',
					name: 'Покращення Зростаючої Люті',
					description: '**8 Лють:** Першого разу в ході, коли ви штовхаєте істоту, ви отримуєте 2 сплески.'
				})
			]
		},
		{
			level: 5,
			features: [
				FactoryLogic.feature.create({
					id: 'fury-sub-1-5-1',
					name: 'Стрибун',
					description: 'Відстань і висота вашого стрибка подвоюються (див. Розділ 10: Бій — Типи руху). Крім того, коли ви падаєте, ви зменшуєте ефективну висоту падіння на кількість клітинок, рівну вашій дистанції стрибка, для визначення шкоди та того, чи опинитесь ви лежачи (див. Падіння в Розділі 10). Ви не опиняєтесь лежачи після падіння й приземлення на іншу істоту.'
				})
			]
		},
		{
			level: 6,
			features: [
				FactoryLogic.feature.createChoice({
					id: 'fury-sub-1-6-1',
					name: 'Здібність Аспекту 6-го Рівня',
					options: [
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'fury-sub-1-6-1a',
									name: 'Лавинний Удар',
									description: 'Ви стрибаєте й потужно вдаряєтесь об землю, спричиняючи ударну хвилю, що нищить ворогів.',
									type: FactoryLogic.type.createManeuver(),
									keywords: [AbilityKeyword.Magic],
									distance: [FactoryLogic.distance.createSelf()],
									target: 'Себе',
									cost: 9,
									sections: [
										FactoryLogic.createAbilitySectionText('Ви стрибаєте на відстань, рівну вашому максимальному стрибку, і виконуєте один кидок сили, спрямований на кожну істоту, що знаходиться поруч із клітинкою, де ви приземляєтесь.'),
										FactoryLogic.createAbilitySectionRoll(
											FactoryLogic.createPowerRoll({
												characteristic: [Characteristic.Might],
												tier1: '4 шкоди; відштовхнути на 1 клітину',
												tier2: '7 шкоди; відштовхнути на 2 клітини',
												tier3: '11 шкоди; відштовхнути на 3 клітини'
											})
										)
									]
								})
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'fury-sub-1-6-1b',
									name: 'Сила Штормів',
									description: 'Ви вражаєте ворога настільки сильно, що він стає снарядом, який відштовхує групу істот.',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
									distance: [FactoryLogic.distance.createMelee()],
									target: 'Одна істота',
									cost: 9,
									sections: [
										FactoryLogic.createAbilitySectionRoll(
											FactoryLogic.createPowerRoll({
												characteristic: [Characteristic.Might],
												tier1: '7 + С шкоди; відштовхнути на 3 клітини',
												tier2: '11 + С шкоди; відштовхнути на 5 клітин',
												tier3: '16 + С шкоди; відштовхнути на 7 клітин'
											})
										),
										FactoryLogic.createAbilitySectionText('Коли ціль завершує це примусове переміщення, кожна істота в межах 2 клітинок від цілі штовхається на 3 клітинки.')
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
					id: 'fury-sub-1-7-1',
					name: 'Покращення Зростаючої Люті',
					description: '**10 Лють:** У вас подвійна перевага на перевірках Сили та при маневрі «Відштовхування». '
				})
			]
		},
		{
			level: 8,
			features: [
				FactoryLogic.feature.create({
					id: 'fury-sub-1-8-1',
					name: 'Найсильніший',
					description: 'Ваша сила неперевершена. Коли ви виконуєте перевірку Сили, ви можете кинути три кубики й обрати два з них для результату. Додатково, коли ви використовуєте маневр «Відштовхування», відстань примусового переміщення отримує бонус, рівний вашому показникові Сили.'
				})
			]
		},
		{
			level: 9,
			features: [
				FactoryLogic.feature.createChoice({
					id: 'fury-sub-1-9-1',
					name: 'Здібність Аспекту 9-го Рівня',
					options: [
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'fury-sub-1-9-1a',
									name: 'Смерть Прийде До Вас Усіх!',
									description: 'Ви використовуєте свою зброю, щоб створити руйнівну ударну хвилю.',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Area, AbilityKeyword.Magic, AbilityKeyword.Melee, AbilityKeyword.Weapon],
									distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 3 })],
									target: 'Кожен ворог у зоні',
									cost: 11,
									sections: [
										FactoryLogic.createAbilitySectionRoll(
											FactoryLogic.createPowerRoll({
												characteristic: [Characteristic.Might],
												tier1: '7 шкоди; відштовхнути на 3 клітини',
												tier2: '10 шкоди; відштовхнути на 5 клітин',
												tier3: '15 шкоди; відштовхнути на 7 клітин'
											})
										),
										FactoryLogic.createAbilitySectionText('Якщо це примусове переміщення спричиняє викидання цілі через обʼєкт, ця ціль отримує додатково 10 шкоди.')
									]
								})
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'fury-sub-1-9-1b',
									name: 'Первісний Вихор',
									description: 'Ви спрямовуєте силу Первісного Хаосу, щоб притягнути ворогів до себе.',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
									distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 3 })],
									target: 'Кожен ворог у зоні',
									cost: 11,
									sections: [
										FactoryLogic.createAbilitySectionRoll(
											FactoryLogic.createPowerRoll({
												characteristic: [Characteristic.Might],
												tier1: '3 шкоди; вертикальне притягування на 3 клітини',
												tier2: '5 шкоди; вертикальне притягування на 5 клітин',
												tier3: '8 шкоди; вертикальне притягування на 7 клітин'
											})
										),
										FactoryLogic.createAbilitySectionText('Якщо це примусове переміщення спричиняє вдаряння цілі об вас, ви не отримуєте шкоди від зіткнення, а ціль отримує ту шкоду, яку б отримали ви.')
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
			features: [
				FactoryLogic.feature.create({
					id: 'fury-sub-1-10-1',
					name: 'Покращення Зростаючої Люті',
					description: '**12 Лють:** Коли ви використовуєте героїчну здібність, ви отримуєте 10 тимчасової витривалості. Крім того, коли ви виконуєте кидок сили, який накладає примусове переміщення на ціль, відстань примусового переміщення отримує бонус, рівний вашому показникові Сили.'
				})
			]
		}
	],
	abilities: [],
	selected: false
};
