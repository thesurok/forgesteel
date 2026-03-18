import { AbilityDistanceType } from '@/enums/ability-distance-type';
import { AbilityKeyword } from '@/enums/ability-keyword';
import { Characteristic } from '@/enums/characteristic';
import { FactoryLogic } from '@/logic/factory-logic';
import { SubClass } from '@/models/subclass';

export const stormwight: SubClass = {
	id: 'fury-sub-3',
	name: 'Штормовий воїн',
	description: 'Ви спрямовуєте свою лють у форму тварин та первісних бур.',
	featuresByLevel: [
		{
			level: 1,
			features: [
				FactoryLogic.feature.createSkillChoice({
					id: 'fury-sub-3-1-1',
					selected: ['Track']
				}),
				FactoryLogic.feature.createKitChoice({
					id: 'fury-sub-3-1-2',
					name: 'Форма звіра',
					types: ['Stormwight']
				}),
				FactoryLogic.feature.create({
					id: 'fury-sub-3-1-3',
					name: 'Невпинний мисливець',
					description: 'Ви отримуєте перевагу при тестах, виконаних із використанням навику Track.'
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'fury-sub-3-1-4',
						name: 'Люте перевтілення',
						description: 'У люті ви повертаєтесь до більш звірячої форми.',
						type: FactoryLogic.type.createTrigger('Ви втрачаєте Витривалість і не вмираєте.'),
						distance: [FactoryLogic.distance.createSelf()],
						target: 'Себе',
						sections: [
							FactoryLogic.createAbilitySectionText('Ви отримуєте тимчасову Витривалість, рівну вашому показнику Сили (Might), і можете перейти у форму тварини або гібридну форму.'),
							FactoryLogic.createAbilitySectionSpend({
								effect: 'Якщо ви не вмираєте, ви можете витратити Відновлення.'
							})
						]
					})
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'fury-sub-3-1-5',
						name: 'Аспект дикості',
						description: 'Ви набуваєте форму тварини, яка каналізує вашу лютость.',
						keywords: [AbilityKeyword.Magic],
						type: FactoryLogic.type.createManeuver(),
						distance: [FactoryLogic.distance.createSelf()],
						target: 'Себе',
						sections: [
							FactoryLogic.createAbilitySectionText('Ви можете перевтілитися в тварину, визначену вашим набором штормового воїна, у гібридну форму або повернутися до своєї істинної форми. Поки ви у формі тварини або гібриді, ви можете говорити як зазвичай і також спілкуватися з тваринами, що мають таку ж форму. Якщо ви ведете переговори з твариною в формі тварини, ваш Renown вважається на 2 вищим, ніж зазвичай.'),
							FactoryLogic.createAbilitySectionSpend({
								effect: 'Як безкоштовний маневр, ви можете перевтілитися вдруге, або в іншу форму тварини, або в свою гібридну форму, або повернутися до своєї істинної форми.'
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
					id: 'fury-sub-3-2-1',
					name: 'Зуби та кігті',
					description: 'Наприкінці кожного вашого ходу кожен ворог поруч отримує ушкодження, рівні вашому показнику Сили (Might).'
				}),
				FactoryLogic.feature.createChoice({
					id: 'fury-sub-3-2-2',
					name: 'Здібність Аспекту 2-го рівня',
					options: [
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'fury-sub-3-2-2a',
									name: 'Вершинний хижак',
									description: 'Я вполюю тебе.',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
									distance: [FactoryLogic.distance.createMelee()],
									target: 'Одна істота',
									cost: 5,
									sections: [
										FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
											characteristic: [Characteristic.Might],
											tier1: '4 + С шкоди; І < [слабкий], сповільнений (рят. кидок закінчує)',
											tier2: '6 + С шкоди; І < [середній], сповільнений (рят. кидок закінчує)',
											tier3: '10 + С шкоди; І < [сильний], сповільнений (рят. кидок закінчує)'
										})),
										FactoryLogic.createAbilitySectionText('Ціль не може ховатися від вас протягом 24 годин. До кінця зустрічі, коли ця ціль добровільно рухається, ви можете виконати переміщення як безкоштовну тригерну дію.')
									]
								})
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'fury-sub-3-2-2b',
									name: 'Інстинктивний рик',
									description: 'Звук бурі всередині вас приголомшує супротивників.',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
									distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 2 })],
									target: 'Кожна істота в зоні',
									cost: 5,
									sections: [
										FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
											characteristic: [Characteristic.Might],
											tier1: '2 шкоди; відштовхнути на 1 клітину; С < [слабкий], приголомшений (рят. кидок закінчує)',
											tier2: '5 шкоди; відштовхнути на 2 клітини; С < [середній], приголомшений (рят. кидок закінчує)',
											tier3: '7 шкоди; відштовхнути на 3 клітини; С < [сильний], приголомшений (рят. кидок закінчує)'
										})),
										FactoryLogic.createAbilitySectionText('Ця здібність завдає ушкоджень вашого первісного типу.')
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
					name: 'Лицар Природи',
					description: `
Ви можете говорити з тваринами та елементалями. Крім того, ви автоматично відчуваєте присутність тварин і елементалів у межах 10 клітин від вас, навіть якщо вони приховані.

Коли ви перебуваєте в переговорі з твариною або елементалем, ваш Renown вважається на 1 вищим, ніж зазвичай. Це сумується з підвищенням вашого ефективного Renown у переговорах з твариною вашого типу, коли ви у формі тварини.`
				})
			]
		},
		{
			level: 5,
			features: [
				FactoryLogic.feature.create({
					id: 'fury-sub-3-5-1',
					name: 'Народжений штормом',
					description: 'Ви та кожен союзник у межах 5 клітин ігноруєте негативні ефекти від негоди, такі як банси або ушкодження від довкілля. Крім того, ви можете використовувати Blessing of Fortunate Weather так, ніби ви були провідником 1-го рівня (див. 1st-Level Domain Feature у розділі Conduit).'
				})
			]
		},
		{
			level: 6,
			features: [
				FactoryLogic.feature.createChoice({
					id: 'fury-sub-3-6-1',
					name: 'Здібність аспекту 6-го рівня',
					options: [
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'fury-sub-3-6-1a',
									name: 'Стрибок',
									description: 'Ви вражаєте ціль, як справжній вершний хижак.',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Magic, AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
									distance: [FactoryLogic.distance.createMelee()],
									target: 'Одна істота',
									cost: 9,
									sections: [
										FactoryLogic.createAbilitySectionRoll(
											FactoryLogic.createPowerRoll({
												characteristic: [Characteristic.Might],
												tier1: '8 шкоди; С < [слабкий], схоплений',
												tier2: '13 шкоди; С < [середній], схоплений',
												tier3: '17 шкоди; С < [сильний], схоплений'
											})
										),
										FactoryLogic.createAbilitySectionText('Ви можете зсунутися на відстань до 4 клітин, перемістивши ціль разом із собою. Поки ціль утримується таким чином, вона отримує ушкодження, рівні двом вашим показникам Сили, на початку кожного вашого ходу.')
									]
								})
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'fury-sub-3-6-1b',
									name: 'Вершники шторму',
									description: 'Ви концентруєте свій зв’язок із Первісним Хаосом у киплячу бурю.',
									type: FactoryLogic.type.createManeuver(),
									keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
									distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Aura, value: 3 })],
									target: 'Кожна істота в зоні',
									cost: 9,
									sections: [
										FactoryLogic.createAbilitySectionText('До кінця зустрічі або поки ви не станете вмираючим, кожна ворожа ціль отримує ушкодження вашого первісного типу, рівні двом вашим показникам Сили, наприкінці кожного вашого ходу. Крім того, поки аура активна, ви можете літати. Кожен союзник, який починає або завершує свій хід у зоні, також може літати до початку свого наступного ходу або поки ефект не завершиться.'),
										FactoryLogic.createAbilitySectionText('Коли ви використовуєте цю здібність поза боєм, не витрачаючи люті, ви мусите провести 1 безперервну хвилину, викликаючи первісну бурю, яка заповнює зону, і отримуєте 1d6 ушкоджень перед тим, як здібність набирає чинності. Буря триває 1 годину або до початку бою.')
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
			level: 8,
			features: [
				FactoryLogic.feature.create({
					id: 'fury-sub-3-8-1',
					name: 'Менажерія',
					description: 'Ви можете використовувати всі набори штормового воїна. Під час перепочинку ви можете обрати заміну свого набору штормового воїна та все ще виконати іншу дію перепочинку. Ваша здатність «Лицар Природи» тепер дозволяє автоматично відчувати присутність тварин у межах 1 милі від вас. Крім того, коли ви робите перевірку для відстеження істоти, ви можете кинути три кубики та обрати, які два використовувати.'
				})
			]
		},
		{
			level: 9,
			features: [
				FactoryLogic.feature.createChoice({
					id: 'fury-sub-3-9-1',
					name: 'Здібність аспекту 9-го рівня',
					options: [
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'fury-sub-3-9-1a',
									name: 'Смертельний хрип',
									description: 'Ви випускаєте потойбічний крик, який розриває ваших ворогів, вбиваючи найслабших серед них.',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
									distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 3 })],
									target: 'Кожен ворог у зоні',
									cost: 11,
									sections: [
										FactoryLogic.createAbilitySectionRoll(
											FactoryLogic.createPowerRoll({
												characteristic: [Characteristic.Might],
												tier1: '4 психічної шкоди; будь-яка ціль, що є міньйоном, зводиться до 0 Витривалості',
												tier2: '6 психічної шкоди; будь-яка ціль, що є міньйоном, зводиться до 0 Витривалості; додатково одна захекана ціль, яка не є лідером або одиничною істотою, також зводиться до 0 Витривалості',
												tier3: '10 психічної шкоди; кожна ціль, яка не є лідером або одиничною істотою, стає захеканою; будь-яка ціль, що є міньййоном, зводиться до 0 Витривалості; додатково одна захекана ціль, яка не є лідером або одиничною істотою, також зводиться до 0 Витривалості'
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
									id: 'fury-sub-3-9-1b',
									name: 'Потоп',
									description: 'Ви викликаєте свою первісну бурю.',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Area, AbilityKeyword.Magic, AbilityKeyword.Ranged],
									distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Cube, value: 5, within: 10 })],
									target: 'Кожен ворог у зоні',
									cost: 11,
									sections: [
										FactoryLogic.createAbilitySectionRoll(
											FactoryLogic.createPowerRoll({
												characteristic: [Characteristic.Might],
												tier1: '7 шкоди',
												tier2: '10 шкоди',
												tier3: '15 шкоди'
											})
										),
										FactoryLogic.createAbilitySectionText('Ця здібність завдає ушкоджень вашого первісного типу та ігнорує імунітет до ушкоджень.')
									]
								})
							}),
							value: 1
						}
					]
				})
			]
		}
	],
	abilities: [],
	selected: false
};
