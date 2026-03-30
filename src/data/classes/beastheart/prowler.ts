import { AbilityDistanceType } from '@/enums/ability-distance-type';
import { AbilityKeyword } from '@/enums/ability-keyword';
import { Characteristic } from '@/enums/characteristic';
import { FactoryLogic } from '@/logic/factory-logic';
import { PerkData } from '@/data/perk-data';
import { SubClass } from '@/models/subclass';

export const prowler: SubClass = {
	id: 'beastheart-sub-2',
	name: 'Скрадач',
	description: 'Ви непомітний нападник із засідки, що бʼє з тіней. Ваша здобич мертва ще до того, як зрозуміє, що ви поруч.',
	featuresByLevel: [
		{
			level: 1,
			features: [
				FactoryLogic.feature.createSkillChoice({
					id: 'beastheart-sub-2-1-1',
					selected: ['Ховання']
				}),
				FactoryLogic.feature.createPackageContent({
					id: 'beastheart-sub-2-1-2',
					name: 'Перевага дикої природи',
					description: 'Ціль ослаблена до початку вашого наступного ходу.',
					tag: 'feral-strike'
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'beastheart-sub-2-1-3',
						name: 'Поки ніхто не дивиться',
						description: 'Поки всі очі прикуті до вашого ворога, ви користуєтеся нагодою, щоб злитися з довкіллям.',
						type: FactoryLogic.type.createTrigger('Ворог завдає шкоди істоті, яка не є вами.'),
						keywords: [AbilityKeyword.Magic],
						distance: [FactoryLogic.distance.createSelf()],
						target: 'Себе',
						sections: [
							FactoryLogic.createAbilitySectionText('Ви стаєте невидимими, виконуєте маневр «Сховатися» й переміщуєтеся на кількість клітинок, рівну вашому показнику Інтуїції, у будь-якому порядку. Ви лишаєтеся невидимими до кінця вашого наступного ходу або доки не завдасте шкоди.'),
							FactoryLogic.createAbilitySectionSpend({
								effect: 'Дальність вашого пересування подвоюється, і воно ігнорує складну місцевість.'
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
					id: 'beastheart-sub-2-2-1a',
					selected: [PerkData.bornTracker]
				}),
				FactoryLogic.feature.create({
					id: 'beastheart-sub-2-2-1b',
					name: 'Гострий нюх',
					description: 'Поки істота перебуває поруч із вашим компаньйоном, вона не може бути прихованою або під маскуванням від вашого компаньйона.'
				}),
				FactoryLogic.feature.createChoice({
					id: 'beastheart-sub-2-2-2',
					name: 'Здібність скрадача',
					options: [
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'beastheart-sub-2-2-2a',
									name: 'Раптовий переляк',
									description: 'Не чекали мене побачити?',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Companion, AbilityKeyword.Area, AbilityKeyword.Magic],
									distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 2 })],
									target: 'Кожен ворог у зоні з лінією ефекту',
									cost: 5,
									sections: [
										FactoryLogic.createAbilitySectionText('Ваш компаньйон зміщується на кількість клітинок, рівну його показнику Інтуїції. Під час цього переміщення він невидимий. Потім він робить кидок сили.'),
										FactoryLogic.createAbilitySectionRoll(
											FactoryLogic.createPowerRoll({
												characteristic: Characteristic.Intuition,
												tier1: '4 шкоди; П < [слабкий], зляканий (рят. кидок закінчує)',
												tier2: '6 шкоди; П < [середній], зляканий (рят. кидок закінчує)',
												tier3: '10 шкоди; П < [сильний], зляканий (рят. кидок закінчує)'
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
									id: 'beastheart-sub-2-2-2b',
									name: 'Ближній контакт',
									description: 'Ваш компаньйон нишпорить довкола цілі, тримаючись поза досяжністю й використовуючи її як щит.',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Charge, AbilityKeyword.Companion, AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
									distance: [FactoryLogic.distance.createMelee()],
									target: 'Одна істота або предмет',
									cost: 5,
									sections: [
										FactoryLogic.createAbilitySectionRoll(
											FactoryLogic.createPowerRoll({
												characteristic: Characteristic.Might,
												tier1: '5 + С шкоди',
												tier2: '8 + С шкоди',
												tier3: '12 + С шкоди'
											})
										),
										FactoryLogic.createAbilitySectionText('Ваш компаньйон входить у простір цілі. Доки ваш компаньйон перебуває в просторі цілі, він може завершувати свій хід у просторі цілі, удари проти вашого компаньйона також зачіпають ціль, а ваші удари по цілі отримують перевагу.')
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
					id: 'beastheart-sub-2-5-1',
					name: 'Ненавиджу бути в центрі уваги',
					description: 'Ви або ваш компаньйон можете використовувати «Поки ніхто не дивиться», навіть якщо саме ви є ціллю тригерної атаки.'
				})
			]
		},
		{
			level: 6,
			features: [
				FactoryLogic.feature.createChoice({
					id: 'beastheart-sub-2-6-1',
					name: 'Здібність скрадача',
					options: [
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'beastheart-sub-2-6-1a',
									name: 'Примарна форма',
									description: 'Ваш компаньйон перетворюється на духа, від якого холоне душа.',
									type: FactoryLogic.type.createMove(),
									keywords: [AbilityKeyword.Magic],
									distance: [FactoryLogic.distance.createSelf()],
									target: 'Себе',
									cost: 9,
									sections: [
										FactoryLogic.createAbilitySectionText('Ви та ваш компаньйон зміщуєтеся на відстань до своєї швидкості. Під час цього переміщення ви обидва невидимі й можете проходити крізь ворогів, предмети та складну місцевість, не витрачаючи додаткових клітинок руху. Ви завдаєте кожному ворогу, крізь якого проходите під час цього переміщення, корупційної шкоди, рівної вашому показнику Інтуїції. Кожен із вас може завдати шкоди кожному ворогу цим способом лише один раз.')
									]
								})
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'beastheart-sub-2-6-1b',
									name: 'Роздираючий випад',
									description: 'Ваш компаньйон пірнає під захист ворога й роздирає його вразливі нутрощі, лишаючи його відкритим для подальших атак.',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Companion, AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
									distance: [FactoryLogic.distance.createMelee(2)],
									target: 'Одна істота',
									cost: 9,
									sections: [
										FactoryLogic.createAbilitySectionRoll(
											FactoryLogic.createPowerRoll({
												characteristic: Characteristic.Might,
												tier1: '10 + С шкоди; Л < [слабкий], кровотеча (рят. кидок закінчує)',
												tier2: '15 + С шкоди; Л < [середній], кровотеча (рят. кидок закінчує)',
												tier3: '20 + С шкоди; Л < [сильний], кровотеча (рят. кидок закінчує)'
											})
										),
										FactoryLogic.createAbilitySectionText('Поки ціль стікає кровʼю, вона має вразливість 5 до шкоди.')
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
					id: 'beastheart-sub-2-8-1',
					name: 'Народжені для бігу',
					description: 'Ваша швидкість і швидкість вашого компаньйона збільшуються на 2.'
				})
			]
		},
		{
			level: 9,
			features: [
				FactoryLogic.feature.createChoice({
					id: 'beastheart-sub-2-9-1',
					name: 'Здібність скрадача',
					options: [
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'beastheart-sub-2-9-1a',
									name: 'Дуель хаосу',
									description: 'Ви або ваш компаньйон затягуєте обраного ворога у шторми Первісного Хаосу.',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Companion, AbilityKeyword.Magic],
									distance: [FactoryLogic.distance.createMelee()],
									target: 'Одна істота',
									cost: 11,
									sections: [
										FactoryLogic.createAbilitySectionText(`
Ви, ваш компаньйон і ціль потрапляєте до крихітної кишені Квінтесенції. Ніхто з вас трьох не може впливати або зазнавати впливу від будь-яких істот, окрім одне одного. Істоти в цій кишені не можуть віддалитися або телепортуватися одна від одної й завжди вважаються суміжними, але інакше діють нормально.

Поки ви перебуваєте у Квінтесенції, ціль отримує 5 холодної, 5 вогняної, 5 блискавичної та 5 звукової шкоди на початку кожного вашого ходу. Ви можете завершити цей ефект як безкоштовний маневр, а ціль може робити рят. кидок наприкінці кожного свого ходу, щоб завершити ефект. Ефект також закінчується, коли хтось із вас помирає. Коли ефект закінчується, ви всі повертаєтеся до найближчої незайнятої клітинки від тієї, звідки зникли. Якщо ціль помирає в Квінтесенції, її рештки не повертаються.`)
									]
								})
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'beastheart-sub-2-9-1b',
									name: 'Кошмарне явлення',
									description: 'Ваш компаньйон зʼявляється поруч зі своєю жертвою в подобі кошмару, від якого завмирає серце.',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Companion, AbilityKeyword.Magic, AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
									distance: [FactoryLogic.distance.createMelee()],
									target: 'Одна істота',
									cost: 11,
									sections: [
										FactoryLogic.createAbilitySectionText('Ваш компаньйон телепортується на відстань до своєї швидкості.'),
										FactoryLogic.createAbilitySectionRoll(
											FactoryLogic.createPowerRoll({
												characteristic: Characteristic.Intuition,
												tier1: '13 + І психічної шкоди; П < [слабкий], зляканий (рят. кидок закінчує)',
												tier2: '20 + І психічної шкоди; П < [середній], зляканий (рят. кидок закінчує)',
												tier3: '27 + І психічної шкоди; П < [сильний], зляканий (рят. кидок закінчує)'
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
