import { AbilityDistanceType } from '@/enums/ability-distance-type';
import { AbilityKeyword } from '@/enums/ability-keyword';
import { Characteristic } from '@/enums/characteristic';
import { FactoryLogic } from '@/logic/factory-logic';
import { SubClass } from '@/models/subclass';

export const telekinesis: SubClass = {
	id: 'talent-sub-2',
	name: 'Телекінез',
	description: 'Здібності телекінезу дозволяють вам фізично маніпулювати істотами та предметами.',
	featuresByLevel: [
		{
			level: 1,
			features: [
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'talent-sub-2-1-1',
						name: 'Малий телекінез',
						description: 'Поштовхи психічної енергії помітно хвилюються навколо вашого мозку, коли ви змушуєте ціль рухатися, використовуючи лише свій розум.',
						type: FactoryLogic.type.createManeuver(),
						keywords: [AbilityKeyword.Psionic, AbilityKeyword.Ranged],
						distance: [FactoryLogic.distance.createRanged(10)],
						target: 'Себе або одну істоту чи предмет розміру 1',
						sections: [
							FactoryLogic.createAbilitySectionText('Ви зсуваєте ціль на кількість клітинок, рівну вашому показнику Р.'),
							FactoryLogic.createAbilitySectionSpend({
								value: 2,
								repeatable: true,
								effect: 'Розмір істоти або предмета, на який ви можете націлитися, збільшується на 1 за кожні 2 витрачені одиниці ясності.'
							}),
							FactoryLogic.createAbilitySectionSpend({
								value: 3,
								effect: 'Ви можете вертикально зсунути ціль.'
							})
						]
					})
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'talent-sub-2-1-2',
						name: 'Відштовхування',
						description: 'Вони нікуди не підуть, але ви — можливо!',
						type: FactoryLogic.type.createTrigger('Ціль отримує шкоду або примусово переміщується.'),
						keywords: [AbilityKeyword.Psionic, AbilityKeyword.Ranged],
						distance: [FactoryLogic.distance.createRanged(10)],
						target: 'На себе або одного союзника',
						sections: [
							FactoryLogic.createAbilitySectionText('Ціль отримує половину шкоди, що спричинила тригер, або дистанція примусового переміщення, що спричинила тригер, зменшується на кількість клітинок, рівну вашому показнику Р. Якщо ціль отримала шкоду і була примусово переміщена, ви обираєте ефект. Якщо примусове переміщення зменшено до 0 клітинок, ціль може штовхнути джерело примусового переміщення на кількість клітинок, рівну вашому показнику Р.')
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
						id: 'talent-sub-2-2-1',
						name: 'Помʼякшення падіння',
						description: '',
						type: FactoryLogic.type.createTrigger('Ви приземляєтесь після падіння, або будь-яка падаюча істота приземляється в межах 2 клітинок від вас.', { free: true }),
						distance: [FactoryLogic.distance.createSelf()],
						target: 'Себе',
						sections: [
							FactoryLogic.createAbilitySectionText('Ви зменшуєте шкоду від падіння на величину, рівну 2 + ваш показник Р.')
						]
					})
				}),
				FactoryLogic.feature.createChoice({
					id: 'talent-sub-2-2-2',
					name: 'Традиційна здібність 2-го рівня',
					options: [
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'talent-sub-2-2-2a',
									name: 'Гравітаційний сплеск',
									description: 'Усі — відстаньте від мене!',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Area, AbilityKeyword.Psionic, AbilityKeyword.Telekinesis],
									distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 1 })],
									target: 'Кожен ворог у зоні',
									cost: 5,
									sections: [
										FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
											characteristic: [Characteristic.Reason],
											tier1: '3 шкоди; вертикально відштовхнути на 2',
											tier2: '6 шкоди; вертикально відштовхнути на 4',
											tier3: '9 шкоди; вертикально відштовхнути на 6'
										})),
										FactoryLogic.createAbilitySectionField({
											name: 'Напруження',
											effect: 'Розмір вибуху збільшується на 1, і ви ослаблені до кінця вашого ходу.'
										})
									]
								})
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'talent-sub-2-2-2b',
									name: 'Легкість і тяжіння',
									description: 'Ви піднімаєте ціль у повітря, а потім притискаєте її до землі.',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Psionic, AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Telekinesis],
									distance: [FactoryLogic.distance.createRanged(10)],
									target: 'Одна істота або предмет',
									cost: 5,
									sections: [
										FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
											characteristic: [Characteristic.Reason],
											tier1: '6 + Р шкоди; С < [слабкий], розпластаний',
											tier2: '10 + Р шкоди; С < [середній], розпластаний',
											tier3: '14 + Р шкоди; С < [сильний], розпластаний і не може встати (рят. кидок завершує)'
										})),
										FactoryLogic.createAbilitySectionField({
											name: 'Напруження',
											effect: 'Ви отримуєте половину шкоди, яку отримує ціль.'
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
				FactoryLogic.feature.create({
					id: 'talent-sub-2-5-1',
					name: 'Кінетичний підсилювач',
					description: 'Коли ви примусово переміщаєте істоту, ви можете витратити до 2 сплесків. За кожний витрачений сплеск дистанція примусового переміщення отримує бонус, рівний вашому показнику Р.'
				}),
				FactoryLogic.feature.create({
					id: 'talent-sub-2-5-2',
					name: 'Тріангуляція',
					description: 'Коли союзник використовує дальню здібність, поки ви перебуваєте в її дистанції, ви можете витратити 1 ясність як безкоштовну тригерну дію, щоб дозволити йому використати здібність, ніби він перебуває у вашому просторі.'
				})
			]
		},
		{
			level: 6,
			features: [
				FactoryLogic.feature.createChoice({
					id: 'talent-sub-2-6-1',
					name: 'Традиційна здібність 6-го рівня',
					options: [
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'talent-sub-2-6-1a',
									name: 'Гравітаційна яма',
									description: 'Ви згинаєте гравітацію в тонку точку і притягуєте ворогів до неї.',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Area, AbilityKeyword.Psionic, AbilityKeyword.Ranged, AbilityKeyword.Telekinesis],
									distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Cube, value: 4, within: 10 })],
									target: 'Кожен ворог та обʼєкт у зоні',
									cost: 9,
									sections: [
										FactoryLogic.createAbilitySectionRoll(
											FactoryLogic.createPowerRoll({
												characteristic: Characteristic.Presence,
												tier1: '6 шкоди; вертикально притягнути на 5 до центру зони',
												tier2: '9 шкоди; вертикально притягнути на 7 до центру зони',
												tier3: '13 шкоди; вертикально притягнути на 10 до центру зони'
											})
										),
										FactoryLogic.createAbilitySectionText('Цілі, що ближчі до центру зони, притягуються першими.'),
										FactoryLogic.createAbilitySectionField({
											name: 'Напруження',
											effect: 'Розмір області збільшується на 2. Ви також націлюєтесь на себе та кожного союзника в межах дистанції.'
										})
									]
								})
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'talent-sub-2-6-1b',
									name: 'Посилений кінетичний захват',
									description: 'Ви піднімаєте ціль у повітря без жодних зусиль.',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Psionic, AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Telekinesis],
									distance: [FactoryLogic.distance.createRanged(10)],
									target: 'Одна істота або предмет',
									cost: 9,
									sections: [
										FactoryLogic.createAbilitySectionRoll(
											FactoryLogic.createPowerRoll({
												characteristic: Characteristic.Presence,
												tier1: 'Зсунути на 4 + Р; С < [слабкий], примусове переміщення вертикальне',
												tier2: 'Зсунути на 8 + Р; С < [середній], примусове переміщення вертикальне',
												tier3: 'Зсунути на 12 + Р; розпластаний; С < [сильний], примусове переміщення вертикальне'
											})
										),
										FactoryLogic.createAbilitySectionField({
											name: 'Напруження',
											effect: 'Примусове переміщення ігнорує стабільність. Ви отримуєте 2d6 шкоди і стаєте ослабленими (рят. кидок завершує).'
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
			level: 7,
			features: []
		},
		{
			level: 8,
			features: [
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'talent-sub-2-8-1',
						name: 'Поле левітації',
						description: 'Ви маніпулюєте повітрям навколо союзників, щоб вони могли так само вільно рухатися в небі, як і ви.',
						type: FactoryLogic.type.createManeuver(),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Psionic],
						distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 3 })],
						target: 'Кожен союзник у зоні',
						cost: 3,
						sections: [
							FactoryLogic.createAbilitySectionText('Кожна ціль може літати до початку вашого наступного ходу і може негайно зміститися на відстань до своєї швидкості. Ви також можете зміститись на відстань до своєї швидкості. Поки літає, стабільність цілі зменшена до 0 і не може бути збільшена.'),
							FactoryLogic.createAbilitySectionSpend({
								value: 5,
								effect: 'Натомість ефекти тривають 1 годину.'
							})
						]
					})
				}),
				FactoryLogic.feature.create({
					id: 'talent-sub-2-8-2',
					name: 'Мала гравітація',
					description: 'Ваш розум може нести ваше тіло у важкі часи. Ви ігноруєте важкопрохідну місцевість і не потребуєте додаткового переміщення, перебуваючи в положенні лежачи.'
				})
			]
		},
		{
			level: 9,
			features: [
				FactoryLogic.feature.createChoice({
					id: 'talent-sub-2-9-1',
					name: 'Традиційна здібність 9-го рівня',
					options: [
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'talent-sub-2-9-1a',
									name: 'Точка опори',
									description: 'Ви точно маніпулюєте істотами навколо себе.',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Area, AbilityKeyword.Psionic, AbilityKeyword.Telekinesis],
									distance: [FactoryLogic.distance.createSpecial('Особливе')],
									target: 'Кожен ворог та обʼєкт у зоні',
									cost: 11,
									sections: [
										FactoryLogic.createAbilitySectionText('Зробіть кидок сили, щоб визначити площу дії цієї здібності. Кожну ціль вертикально відштовхують на 6 клітинок. Ви можете націлюватися лише на предмети розміру 1L або менші.'),
										FactoryLogic.createAbilitySectionRoll(
											FactoryLogic.createPowerRoll({
												characteristic: Characteristic.Presence,
												tier1: '2 сплески',
												tier2: '3 сплески',
												tier3: '4 сплески'
											})
										),
										FactoryLogic.createAbilitySectionField({
											name: 'Напруження',
											effect: 'Ви можете зменшити розмір вибуху на 2 (до мінімуму 1 вибух), щоб надати дистанції примусового переміщення бонус +2. Ви отримуєте половину загальної шкоди, яку отримують усі цілі від примусового переміщення.'
										})
									]
								})
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'talent-sub-2-9-1b',
									name: 'Гравітаційна нова',
									description: 'Нестримна психічна енергія виривається з вашого тіла і спалахами поширюється назовні, відштовхуючи ваших ворогів.',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Area, AbilityKeyword.Psionic, AbilityKeyword.Telekinesis],
									distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 3 })],
									target: 'Кожен ворог та обʼєкт у зоні',
									cost: 11,
									sections: [
										FactoryLogic.createAbilitySectionRoll(
											FactoryLogic.createPowerRoll({
												characteristic: Characteristic.Presence,
												tier1: '6 шкоди; відштовхнути на 7',
												tier2: '9 шкоди; відштовхнути на 10',
												tier3: '13 шкоди; відштовхнути на 15'
											})
										),
										FactoryLogic.createAbilitySectionText('При критичному попаданні розмір зони збільшується на 3, і ця здібність завдає додаткових 10 шкоди.'),
										FactoryLogic.createAbilitySectionField({
											name: 'Напруження',
											effect: 'Ви ослаблені (рят. кидок завершує). Якщо ви завдали критичного удару цією здібністю, ви вмираєте.'
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
			level: 10,
			features: []
		}
	],
	abilities: [],
	selected: false
};
