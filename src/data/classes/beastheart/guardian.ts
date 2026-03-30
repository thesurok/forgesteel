import { AbilityDistanceType } from '@/enums/ability-distance-type';
import { AbilityKeyword } from '@/enums/ability-keyword';
import { Characteristic } from '@/enums/characteristic';
import { FactoryLogic } from '@/logic/factory-logic';
import { PerkData } from '@/data/perk-data';
import { SubClass } from '@/models/subclass';

export const guardian: SubClass = {
	id: 'beastheart-sub-1',
	name: 'Страж',
	description: 'Ви безстрашний захисник своєї зграї: кожен, хто завдає їй шкоди, мусить пройти через вас.',
	featuresByLevel: [
		{
			level: 1,
			features: [
				FactoryLogic.feature.createSkillChoice({
					id: 'beastheart-sub-1-1-1',
					selected: ['Зчитування людини']
				}),
				FactoryLogic.feature.createPackageContent({
					id: 'beastheart-sub-1-1-2',
					name: 'Перевага дикої природи',
					description: 'Ціль спровокована вашим компаньйоном до початку вашого наступного ходу.',
					tag: 'feral-strike'
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'beastheart-sub-1-1-3',
						name: 'Не хвилюйся, я поруч',
						description: 'Ви відтягуєте чужий біль на себе й витримуєте його самі.',
						type: FactoryLogic.type.createTrigger('Сусідній союзник отримує шкоду.'),
						keywords: [AbilityKeyword.Magic],
						distance: [FactoryLogic.distance.createMelee()],
						target: 'Один союзник',
						sections: [
							FactoryLogic.createAbilitySectionText('Тригерна шкода для союзника зменшується вдвічі.'),
							FactoryLogic.createAbilitySectionSpend({
								effect: 'Ви витрачаєте одне зі своїх Відновлень; союзник відновлює Витривалість замість вас.'
							})
						]
					})
				})
			]
		},
		{
			level: 2,
			features: [
				FactoryLogic.feature.createPerk({
					id: 'beastheart-sub-1-2-1a',
					selected: [PerkData.peopleSense]
				}),
				FactoryLogic.feature.create({
					id: 'beastheart-sub-1-2-1b',
					name: 'Сторожовий інстинкт',
					description: 'Ви й ваш компаньйон ніколи не буваєте захоплені зненацька.'
				}),
				FactoryLogic.feature.createChoice({
					id: 'beastheart-sub-1-2-2',
					name: 'Здібність стража',
					options: [
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'beastheart-sub-1-2-2a',
									name: 'Черево звіра',
									description: 'Що це в тебе в пащі? Ні! Поганий хлопчик!',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Companion, AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
									distance: [FactoryLogic.distance.createMelee()],
									target: 'Одна схоплена істота, не більша за вашого компаньйона',
									cost: 5,
									sections: [
										FactoryLogic.createAbilitySectionRoll(
											FactoryLogic.createPowerRoll({
												characteristic: Characteristic.Might,
												tier1: '6 + С шкоди; С < [слабкий], проковтнутий',
												tier2: '10 + С шкоди; С < [середній], проковтнутий',
												tier3: '14 + С шкоди; С < [сильний], проковтнутий'
											})
										),
										FactoryLogic.createAbilitySectionText('Проковтнута істота ділить простір вашого компаньйона, є схопленою та скутою і має лінію ефекту лише до вашого компаньйона. Ніщо не має лінії ефекту до проковтнутої істоти. На початку кожного вашого ходу проковтнута істота отримує кислотну шкоду, рівну 1 + показнику Сили вашого компаньйона. Якщо істота виривається із захоплення, компаньйон негайно вивергає її; вона падає розпластаною в сусідню незайняту клітинку й більше не є схопленою або скутою. Ваш компаньйон також може вивергнути істоту як безкоштовний маневр. Одночасно ваш компаньйон може мати проковтнутою лише одну істоту.')
									]
								})
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'beastheart-sub-1-2-2b',
									name: 'Апорт!',
									description: 'Ваш компаньйон зникає й повертається з гостем, якого ви особливо хотіли побачити.',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Companion, AbilityKeyword.Magic, AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
									distance: [FactoryLogic.distance.createMelee()],
									target: 'Одна істота або предмет',
									cost: 5,
									sections: [
										FactoryLogic.createAbilitySectionText(`
Ваш компаньйон телепортується на відстань до 5 клітинок до та після атаки. Замість того щоб схопити цільову істоту, ваш компаньйон може утримувати цільовий предмет, менший за нього. Використовуючи цю здібність, ви можете відмовитися від завдання шкоди.

Телепортуючись після атаки, ваш компаньйон може телепортуватися разом зі схопленою істотою або утримуваним предметом, якщо в місці призначення достатньо простору; ви вирішуєте, у які сусідні з компаньйоном клітинки вони телепортуються.`),
										FactoryLogic.createAbilitySectionRoll(
											FactoryLogic.createPowerRoll({
												characteristic: Characteristic.Might,
												tier1: '6 + С шкоди; С < [слабкий], схоплений',
												tier2: '8 + С шкоди; С < [середній], схоплений',
												tier3: '12 + С шкоди; С < [сильний], схоплений'
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
					id: 'beastheart-sub-1-5-1',
					name: 'Заспокійливі вправи',
					description: 'Коли ви використовуєте «Не хвилюйся, я поруч», щоб витратити Відновлення, і ви, і ціль отримуєте користь від цього Відновлення.'
				})
			]
		},
		{
			level: 6,
			features: [
				FactoryLogic.feature.createChoice({
					id: 'beastheart-sub-1-6-1',
					name: 'Здібність стража',
					options: [
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'beastheart-sub-1-6-1a',
									name: 'Фас!',
									description: 'Ваш компаньйон кидається вперед, щоб захистити вас від небезпечного ворога.',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Charge, AbilityKeyword.Companion, AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
									distance: [FactoryLogic.distance.createMelee()],
									target: 'Одна істота',
									cost: 'signature',
									sections: [
										FactoryLogic.createAbilitySectionRoll(
											FactoryLogic.createPowerRoll({
												characteristic: Characteristic.Might,
												tier1: '11 + С шкоди; спровокований (рят. кидок закінчує); С < [слабкий], розпластаний',
												tier2: '16 + С шкоди; спровокований (рят. кидок закінчує); С < [середній], розпластаний',
												tier3: '21 + С шкоди; спровокований (рят. кидок закінчує); С < [сильний], розпластаний і не може встати (до кінця ходу)'
											})
										),
										FactoryLogic.createAbilitySectionSpend({
											value: 2,
											effect: 'Ваш компаньйон може використати цю здібність як тригерну дію проти ворога, який завдає вам шкоди.'
										})
									]
								})
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'beastheart-sub-1-6-1b',
									name: 'Свердлячий погляд',
									description: 'Ваш компаньйон впивається поглядом у ворога, навʼязуючи йому свою волю й кидаючи виклик навіть поворухнутися.',
									type: FactoryLogic.type.createManeuver(),
									keywords: [AbilityKeyword.Companion, AbilityKeyword.Magic, AbilityKeyword.Ranged],
									distance: [FactoryLogic.distance.createRanged(5)],
									target: 'Одна істота',
									cost: 'signature',
									sections: [
										FactoryLogic.createAbilitySectionText('Уперше, коли ціль до початку вашого наступного ходу використовує рух, основну дію, маневр або тригерну дію, перед тим як діяти, вона провокує наведений нижче кидок сили. На початку наступного ходу, якщо ціль не спровокувала цей кидок сили, вона стає зляканою (рят. кидок закінчує).'),
										FactoryLogic.createAbilitySectionRoll(
											FactoryLogic.createPowerRoll({
												characteristic: Characteristic.Intuition,
												tier1: '9 + І психічної шкоди; І < [слабкий], ослаблений (рят. кидок закінчує)',
												tier2: '13 + І психічної шкоди; І < [середній], ослаблений (рят. кидок закінчує)',
												tier3: '18 + І психічної шкоди; І < [сильний], ослаблений (рят. кидок закінчує)'
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
			level: 7,
			features: []
		},
		{
			level: 8,
			features: [
				FactoryLogic.feature.create({
					id: 'beastheart-sub-1-8-1',
					name: 'Зона контролю',
					description: 'Ваші вільні удари та вільні удари вашого компаньйона завдають додаткової шкоди, рівної вашому показнику Інтуїції. Ви або ваш компаньйон можете здійснити атаку за нагоди щоразу, коли сусідній ворог рухається в клітинку, яка вже не є сусідньою, навіть якщо ворог зміщувався, телепортувався, був примусово переміщений або використав іншу рису, що зазвичай не провокує атаки за нагоди.'
				})
			]
		},
		{
			level: 9,
			features: [
				FactoryLogic.feature.createChoice({
					id: 'beastheart-sub-1-9-1',
					name: 'Здібність стража',
					options: [
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'beastheart-sub-1-9-1a',
									name: 'Виття банші',
									description: 'Виття, вереск, рев або психічна еманація вашого компаньйона віщують смерть тим, хто це чує.',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Area, AbilityKeyword.Companion, AbilityKeyword.Magic],
									distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 3 })],
									target: 'Кожен ворог у зоні',
									cost: 11,
									sections: [
										FactoryLogic.createAbilitySectionRoll(
											FactoryLogic.createPowerRoll({
												characteristic: Characteristic.Intuition,
												tier1: '5 звукової шкоди; І < [слабкий], зляканий (рят. кидок закінчує)',
												tier2: '10 звукової шкоди; І < [середній], зляканий (рят. кидок закінчує)',
												tier3: '15 звукової шкоди; І < [сильний], зляканий (рят. кидок закінчує)'
											})
										),
										FactoryLogic.createAbilitySectionText('Поки істота злякана цією здібністю, вона отримує 10 психічної шкоди на початку кожного вашого ходу.'),
										FactoryLogic.createAbilitySectionSpend({
											effect: 'Ця здібність також впливає на вибух 3 навколо вас. Ворог, який перебуває в обох зонах, зазнає її впливу лише один раз.'
										})
									]
								})
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'beastheart-sub-1-9-1b',
									name: 'Вороги до смерті',
									description: 'Ваш компаньйон кидається на ворога, прикриваючи союзників власним тілом.',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Companion, AbilityKeyword.Charge, AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
									distance: [FactoryLogic.distance.createMelee()],
									target: 'Один ворог',
									cost: 11,
									sections: [
										FactoryLogic.createAbilitySectionRoll(
											FactoryLogic.createPowerRoll({
												characteristic: Characteristic.Intuition,
												tier1: '11 + С шкоди; П < [слабкий], спровокований (рят. кидок закінчує)',
												tier2: '17 + С шкоди; П < [середній], спровокований (рят. кидок закінчує)',
												tier3: '22 + С шкоди; П < [сильний], спровокований (рят. кидок закінчує)'
											})
										),
										FactoryLogic.createAbilitySectionText('Поки ціль спровокована цією здібністю, усі істоти, крім вашого компаньйона, мають імунітет 10 до шкоди, яку завдає ця ціль.')
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
