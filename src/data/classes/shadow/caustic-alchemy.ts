import { AbilityDistanceType } from '@/enums/ability-distance-type';
import { AbilityKeyword } from '@/enums/ability-keyword';
import { Characteristic } from '@/enums/characteristic';
import { FactoryLogic } from '@/logic/factory-logic';
import { SubClass } from '@/models/subclass';

export const causticAlchemy: SubClass = {
	id: 'shadow-sub-2',
	name: 'Коледж Каустичної Алхімії',
	description: 'Коледж Каустичної Алхімії навчає студентів рецептам кислот, бомб і отрут, що використовуються в їхній похмурій роботі. Випускники коледжу — надзвичайні вбивці.',
	featuresByLevel: [
		{
			level: 1,
			features: [
				FactoryLogic.feature.createSkillChoice({
					id: 'shadow-sub-2-1-1',
					selected: ['Alchemy']
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'shadow-sub-2-1-2',
						name: 'Покриття клинка',
						description: 'Трохи отрути дає значний ефект.',
						type: FactoryLogic.type.createManeuver(),
						distance: [FactoryLogic.distance.createSelf()],
						target: 'Себе',
						sections: [
							FactoryLogic.createAbilitySectionText('Ви отримуєте два сплески. Крім того, коли ви використовуєте сплеск до кінця сутички, ви можете обрати, щоб він завдав отруйного пошкодження.'),
							FactoryLogic.createAbilitySectionSpend({
								repeatable: true,
								effect: 'За кожну витрачену Прозорливість ви отримуєте 1 додатковий сплеск.'
							})
						]
					})
				}),
				FactoryLogic.feature.create({
					id: 'shadow-sub-2-1-3',
					name: 'Димова бомба',
					description: 'Ви завжди носите запас димових бомб для відволікання та швидкого відступу. Ви можете виконати маневр «Сховатися», навіть якщо вас помітили й спочатку немає укриття або маскування. При цьому ви можете зміститися на число клітинок, рівне вашому показнику Ловкості. Якщо ви завершуєте це переміщення в укритті або під маскуванням, ви автоматично стаєте схованим.'
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'shadow-sub-2-1-4',
						name: 'Захисний перекат',
						description: 'Коли ворог атакує, ви згладжуєте удар, щоб зменшити завдану шкоду.',
						type: FactoryLogic.type.createTrigger('Інша істота завдає вам шкоди.'),
						distance: [FactoryLogic.distance.createSelf()],
						target: 'Себе',
						sections: [
							FactoryLogic.createAbilitySectionText('Ви отримуєте половину шкоди від тригерної дії, після чого можете зміститися до 2 клітинок після вирішення тригерного ефекту. Якщо ви завершуєте це зміщення в маскуванні або укритті, ви можете виконати маневр «Сховатися», навіть якщо вас помітили.'),
							FactoryLogic.createAbilitySectionSpend({
								effect: 'Потужність будь-яких ефектів, повʼязаних із цією шкодою, для вас зменшується на 1.'
							})
						]
					})
				})
			]
		},
		{
			level: 2,
			features: [
				FactoryLogic.feature.createChoice({
					id: 'shadow-sub-2-2-1',
					name: 'Здібність коледжу 2-го рівня',
					options: [
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'shadow-sub-2-2-1a',
									name: 'Прикріпна бомба',
									description: 'Вибухівку найкраще прикріплювати до ворога.',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Ranged],
									distance: [FactoryLogic.distance.createRanged(10)],
									target: 'Одна істота',
									cost: 5,
									sections: [
										FactoryLogic.createAbilitySectionText('Ви прикріплюєте невелику бомбу до істоти. Якщо ви сховані від цієї істоти, вона не помічає бомбу, і ви лишаєтеся схованим. В іншому разі істота зауважує бомбу і може роззняти її та зняти як основну дію. Якщо не знімає, наприкінці вашого наступного ходу бомба детонує. Коли бомба детонує, ви робите кидок сили, спрямований на кожного ворога в межах 2 клітинок від неї.'),
										FactoryLogic.createAbilitySectionRoll(
											FactoryLogic.createPowerRoll({
												characteristic: [Characteristic.Agility],
												tier1: '4 + Л вогняне пошкодження',
												tier2: '7 + Л вогняне пошкодження',
												tier3: '11 + Л вогняне пошкодження'
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
									id: 'shadow-sub-2-2-1b',
									name: 'Смердюча бомба',
									description: 'З бомби, яку ви кидаєте, виривається гнильний жовтий газ.',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Area, AbilityKeyword.Ranged],
									distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Cube, value: 3, within: 10 })],
									target: 'Кожна істота в зоні',
									cost: 5,
									sections: [
										FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
											characteristic: [Characteristic.Agility],
											tier1: '2 отруйне пошкодження',
											tier2: '5 отруйне пошкодження',
											tier3: '7 отруйне пошкодження'
										})),
										FactoryLogic.createAbilitySectionText('Газ залишається в зоні до кінця сутички. Будь-яка істота, яка починає свій хід у зоні і має С < [середній], стає ослабленою (рят. кидок закінчує).')
									]
								})
							}),
							value: 1
						}
					]
				}),
				FactoryLogic.feature.create({
					id: 'shadow-sub-2-2-2',
					name: 'Тренований вбивця',
					description: 'Ви знаєте, де саме завдати удару ворогу. Коли ви завдаєте удару, який не має шкоди або подвійної шкоди і який включає один або більше сплесків, ви отримуєте один додатковий сплеск, який можна використати лише для цього удару.'
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
					id: 'shadow-sub-2-5-1',
					name: 'Нестабільні реагенти',
					description: `
Коли ви отримуєте шкоду, кожен ворог, що стоїть поруч, отримує вогняне, кислотне або отруйне пошкодження (на ваш вибір) рівне вашому показнику Ловкості.

Крім того, ваша здатність «Захисний перекат» тепер дозволяє зміститися до 5 клітинок, включно з вертикальним переміщенням. Якщо ви не завершуєте це переміщення на твердому ґрунті і не літаєте, ви падаєте.`
				})
			]
		},
		{
			level: 6,
			features: [
				FactoryLogic.feature.createChoice({
					id: 'shadow-sub-2-6-1',
					name: 'Здібність коледжу 6-го рівня',
					options: [
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'shadow-sub-2-6-1a',
									name: 'Одна ампула робить вас кращими',
									description: 'Своєчасний кидок еліксиру допомагає вашим союзникам залишатися в бою.',
									type: FactoryLogic.type.createManeuver(),
									keywords: [AbilityKeyword.Ranged],
									distance: [FactoryLogic.distance.createRanged(10)],
									target: 'Три істоти',
									cost: 9,
									sections: [
										FactoryLogic.createAbilitySectionText(`
Ви готуєте, передаєте або кидаєте еліксир кожній цілі; ціль може негайно випити еліксир (без необхідності виконувати дію). Якщо вона не випиває еліксир одразу, їй доведеться використати маневр «Вжити витратний предмет», щоб спожити його пізніше. Еліксир втрачає свою потужність наприкінці сутички.

Істота, що випила еліксир, може витратити до 2 Відновлень і отримує імунітет до кислоти, вогню або отрути (на її вибір), рівний вашому рівню до кінця сутички.`)
									]
								})
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'shadow-sub-2-6-1b',
									name: 'Одна ампула робить вас швидшими',
									description: 'Кожен союзник, який ловить кинутий вами еліксир, може підняти ефективність у бою.',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Ranged],
									distance: [
										FactoryLogic.distance.createRanged(10)
									],
									target: 'Три істоти',
									cost: 9,
									sections: [
										FactoryLogic.createAbilitySectionText(`
Ви готуєте, передаєте або кидаєте еліксир кожній цілі; ціль може негайно випити еліксир (без необхідності виконувати дію). Якщо вона не випиває еліксир одразу, їй доведеться використати маневр «Вжити витратний предмет», щоб спожити його пізніше. Еліксир втрачає свою потужність наприкінці сутички.

Істота, що випила еліксир, отримує ефекти залежно від результату вашого кидка сили.`),
										FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
											characteristic: [Characteristic.Agility],
											tier1: 'Швидкість істоти збільшується на 2 до кінця сутички.',
											tier2: 'Істота може літати до кінця сутички.',
											tier3: 'Істота стає невидимою до кінця свого наступного ходу.'
										}))
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
					id: 'shadow-sub-2-8-1',
					name: 'Часова бомба',
					description: 'Ви маєте імунітет до шкоди від зональних здібностей та ефектів у розмірі, рівному вашому показнику Ловкості.'
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'shadow-sub-2-8-2',
						name: 'Часова бомба',
						description: 'Чим довше готується, тим сильніший вибух.',
						type: FactoryLogic.type.createManeuver({ free: true }),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Ranged],
						distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Cube, value: 2, within: 10 })],
						target: 'Кожен ворог у зоні',
						sections: [
							FactoryLogic.createAbilitySectionText(`
Кожна ціль отримує кислотне, вогняне або отруйне пошкодження (на ваш вибір), рівне вашому показнику Ловкості.

За кожен раунд бою, що минув з моменту останнього використання цієї здібності в поточній сутичці, розмір зони збільшується на 1, і ви отримуєте 1 сплеск, який має бути використаний з цією здібністю. Після використання здібності або в кінці сутички її зона та сплески скидаються.`),
							FactoryLogic.createAbilitySectionSpend({
								value: 2,
								repeatable: true,
								effect: 'За кожні 2 витрачені Прозорливості ви збільшуєте розмір куба на 1 і отримуєте 1 сплеск, який можна використати лише з цією здібністю.'
							})
						]
					})
				})
			]
		},
		{
			level: 9,
			features: [
				FactoryLogic.feature.createChoice({
					id: 'shadow-sub-2-9-1',
					name: 'Здібність коледжу 9-го рівня',
					options: [
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'shadow-sub-2-9-1a',
									name: 'Ланцюгова реакція',
									description: 'Один вибух — напад. Три вибухи — штурм. Девʼять вибухів — святкування.',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Ranged],
									distance: [
										FactoryLogic.distance.createRanged(10)
									],
									target: 'Одна істота або предмет',
									cost: 11,
									sections: [
										FactoryLogic.createAbilitySectionText('Кожен ворог у межах 3 клітинок від цілі, який наразі не є мішенню цієї здібності, також стає її мішенню. Цей ефект триває, поки є доступні цілі. Здібність завдає кислотного, вогняного або отруйного пошкодження (на ваш вибір).'),
										FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
											characteristic: [Characteristic.Agility],
											tier1: '7 пошкодження',
											tier2: '10 пошкодження',
											tier3: '15 пошкодження'
										}))
									]
								})
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'shadow-sub-2-9-1b',
									name: 'До зірок',
									description: 'Ви прикріплюєте найпотужнішу вибухівку до ворога. За менш напружених обставин ви, напевно, могли б відправити його на орбіту.',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Melee, AbilityKeyword.Ranged, AbilityKeyword.Strike],
									distance: [
										FactoryLogic.distance.createMelee(),
										FactoryLogic.distance.createRanged(10)
									],
									target: 'Одна істота або предмет',
									cost: 11,
									sections: [
										FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
											characteristic: [Characteristic.Agility],
											tier1: '4 + Л вогняне пошкодження; вертикальний поштовх 8',
											tier2: '7 + Л вогняне пошкодження; вертикальний поштовх 10',
											tier3: '11 + Л вогняне пошкодження; вертикальний поштовх 15'
										})),
										FactoryLogic.createAbilitySectionText('Ґрунт під областю розміром 3 куби навколо початкової позиції цілі вважається важкодоступною місцевістю.')
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
