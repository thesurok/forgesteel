import { AbilityDistanceType } from '@/enums/ability-distance-type';
import { AbilityKeyword } from '@/enums/ability-keyword';
import { Characteristic } from '@/enums/characteristic';
import { FactoryLogic } from '@/logic/factory-logic';
import { SubClass } from '@/models/subclass';

export const telepathy: SubClass = {
	id: 'talent-sub-3',
	name: 'Телепатія',
	description: 'Здібності телепатії дозволяють спілкуватися, читати та впливати на розуми інших істот.',
	featuresByLevel: [
		{
			level: 1,
			features: [
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'talent-sub-3-1-1',
						name: 'Петля зворотного звʼязку',
						description: 'Створення короткого психічного звʼязку між ворогом і його ціллю дозволяє тому ворогу відчути це на собі.',
						type: FactoryLogic.type.createTrigger('Ціль завдає шкоди союзнику.'),
						keywords: [AbilityKeyword.Psionic, AbilityKeyword.Ranged],
						distance: [FactoryLogic.distance.createRanged(10)],
						target: 'Одна істота',
						sections: [
							FactoryLogic.createAbilitySectionText('Ціль отримує психічну шкоду, рівну половині шкоди, спричиненої тригером.')
						]
					})
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'talent-sub-3-1-2',
						name: 'Віддалена допомога',
						description: 'Союзник отримує користь від вашого інтелекту.',
						type: FactoryLogic.type.createManeuver(),
						keywords: [AbilityKeyword.Psionic, AbilityKeyword.Ranged],
						distance: [FactoryLogic.distance.createRanged(10)],
						target: 'Одна істота або предмет',
						sections: [
							FactoryLogic.createAbilitySectionText('Наступний кидок здібності, який союзник робить проти цілі до початку вашого наступного ходу, отримує перевагу.'),
							FactoryLogic.createAbilitySectionSpend({
								effect: 'Ви обираєте одну додаткову істоту або предмет.'
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
					id: 'talent-sub-3-2-1',
					name: 'Заспокоєння розуму',
					description: 'Ви отримуєте перевагу на перевірках для припинення бою та початку переговорів. Якщо ви присутні під час переговорів, будь-який NPC з ворожим або підозрілим початковим ставленням отримує +1 до терпіння (максимум 5).'
				}),
				FactoryLogic.feature.createChoice({
					id: 'talent-sub-3-2-2',
					name: 'Здібність традиції 2-го рівня',
					options: [
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'talent-sub-3-2-2a',
									name: 'Перевантаження',
									description: 'Ви перевантажуєте їхні відчуття, перетворюючи підсвідомі думки на свідомі.',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Psionic, AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Telepathy],
									distance: [FactoryLogic.distance.createRanged(10)],
									target: 'Одна істота',
									cost: 5,
									sections: [
										FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
											characteristic: [Characteristic.Reason],
											tier1: '6 + Р психічної шкоди; І < [слабкий], сповільнений (рят. кидок завершує)',
											tier2: '10 + Р психічної шкоди; І < [середній], ослаблений (рят. кидок завершує)',
											tier3: '14 + Р психічної шкоди; І < [сильний], приголомшений (рят. кидок завершує)'
										})),
										FactoryLogic.createAbilitySectionField({
											name: 'Виснаження',
											effect: 'Ви починаєте плакати і не можете використовувати тригерні дії або виконувати вільні удари до кінця наступного ходу цілі.'
										})
									]
								})
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'talent-sub-3-2-2b',
									name: 'Синаптичний контроль',
									description: 'Ви отримуєте контроль над нервовою системою ворога — як їм пощастило.',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Psionic, AbilityKeyword.Ranged, AbilityKeyword.Telepathy],
									distance: [FactoryLogic.distance.createRanged(10)],
									target: 'Один ворог',
									cost: 5,
									sections: [
										FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
											characteristic: [Characteristic.Reason],
											tier1: 'Ціль робить вільну атаку проти одного ворога на ваш вибір.',
											tier2: 'Ціль переміщується на відстань до своєї швидкості і використовує свою фірмову здібність проти ворогів на ваш вибір.',
											tier3: 'Ціль переміщується на відстань до своєї швидкості і використовує свою фірмову здібність проти ворогів на ваш вибір.'
										})),
										FactoryLogic.createAbilitySectionText('**Ефект** Ви контролюєте рухи цілі. Ціль не може бути переміщена таким чином, щоб завдати їй шкоди (наприклад, через обрив), залишити її вмираючою або спричинити стан чи інший негативний ефект. Проте ви можете переміщати її так, щоб провокувати можливі атаки.'),
										FactoryLogic.createAbilitySectionField({
											name: 'Виснаження',
											effect: 'Ви отримуєте 1d6 шкоди і стаєте ослабленими до кінця вашого ходу.'
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
					id: 'talent-sub-3-5-1',
					name: 'Примушення',
					description: 'Коли ви отримуєте успіх у перевірці навику з групи міжособистісних навичок під час взаємодії з NPC, ви можете поставити їм питання за допомогою особливості Телепатична мова. NPC має відповісти чесно, наскільки це в їхніх силах.'
				}),
				FactoryLogic.feature.createMultiple({
					id: 'talent-sub-3-5-2',
					name: 'Віддалене підсилення',
					features: [
						FactoryLogic.feature.create({
							id: 'talent-sub-3-5-2a',
							name: 'Віддалене підсилення',
							description: 'Дальність дії вашої особливості Телепатична мова збільшується до 1 милі.'
						}),
						FactoryLogic.feature.createAbilityDistance({
							id: 'talent-sub-3-5-2b',
							keywords: [AbilityKeyword.Ranged, AbilityKeyword.Psionic],
							value: 5
						})
					]
				})
			]
		},
		{
			level: 6,
			features: [
				FactoryLogic.feature.createChoice({
					id: 'talent-sub-3-6-1',
					name: 'Здібність традиції 6-го рівня',
					options: [
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'talent-sub-3-6-1a',
									name: 'Синаптичне кондиціювання',
									description: 'Це тонка зміна мислення. Справа не в тому, що вони ваші вороги — вам просто не подобаються!',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Psionic, AbilityKeyword.Melee, AbilityKeyword.Ranged, AbilityKeyword.Telepathy],
									distance: [FactoryLogic.distance.createMelee(2)],
									target: 'Одна істота',
									cost: 9,
									sections: [
										FactoryLogic.createAbilitySectionRoll(
											FactoryLogic.createPowerRoll({
												characteristic: Characteristic.Presence,
												tier1: '10 психічної шкоди; ціль отримує перешкоду на кидки здібності, спрямовані на вас або ваших союзників (рят. кидок завершує)',
												tier2: '14 психічної шкоди; ціль має подвійну перешкоду на кидки здібності, спрямовані на вас або ваших союзників (рят. кидок завершує)',
												tier3: '20 психічної шкоди; ціль вважає вас і ваших союзників союзниками при використанні здібностей і рис (рят. кидок завершує)'
											})
										),
										FactoryLogic.createAbilitySectionField({
											name: 'Виснаження',
											effect: 'Поки ціль під дією цього ефекту, ви більше не вважаєте своїх ворогів ворогами при використанні своїх здібностей та рис.'
										})
									]
								})
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'talent-sub-3-6-1b',
									name: 'Синаптичне розсіювання',
									description: 'Ви маніпулюєте розумами ворогів і змушуєте їх сумніватися, чи взагалі ви коли-небудь тут були.',
									type: FactoryLogic.type.createManeuver(),
									keywords: [AbilityKeyword.Psionic, AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Telepathy],
									distance: [FactoryLogic.distance.createRanged(10)],
									target: 'Особливе',
									cost: 9,
									sections: [
										FactoryLogic.createAbilitySectionText('Ви обираєте кількість істот для цієї здібності, що визначається результатом вашого кидка сили. Ви та ваші союзники стаєте невидимими для кожної такої цілі до початку вашого наступного ходу.'),
										FactoryLogic.createAbilitySectionRoll(
											FactoryLogic.createPowerRoll({
												characteristic: Characteristic.Presence,
												tier1: 'Дві істоти',
												tier2: 'Три істоти',
												tier3: 'Пʼять істот'
											})
										),
										FactoryLogic.createAbilitySectionField({
											name: 'Виснаження',
											effect: 'Ефект припиняється раніше, якщо ви отримуєте пошкодження від здібності ворога.'
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
				FactoryLogic.feature.create({
					id: 'talent-sub-3-8-1',
					name: 'Ментальний звʼязок',
					description: 'Під час відпочинку ви можете вибрати число істот до вашого значення Розум, з якими ви спілкувалися за допомогою особливості Телепатична мова, створивши телепатичний звʼязок. Коли будь-яка звʼязана істота витрачає одне або більше Відновлень, кожна інша звʼязана істота може витратити одне Відновлення.'
				}),
				FactoryLogic.feature.create({
					id: 'talent-sub-3-8-2',
					name: 'Універсальне зʼєднання',
					description: 'Дальність дії вашої особливості Телепатична мова збільшується до будь-якого місця на тій самій планеті.'
				})
			]
		},
		{
			level: 9,
			features: [
				FactoryLogic.feature.createChoice({
					id: 'talent-sub-3-9-1',
					name: 'Здібність традиції 9-го рівня',
					options: [
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'talent-sub-3-9-1a',
									name: 'Резонансний розумовий укол',
									description: 'Ви випускаєте телепатичний заряд, посилений кожною свідомістю в межах досяжності, прямо в розум вашого ворога.',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Psionic, AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Telepathy],
									distance: [FactoryLogic.distance.createRanged(10)],
									target: 'Одна істота',
									cost: 11,
									sections: [
										FactoryLogic.createAbilitySectionRoll(
											FactoryLogic.createPowerRoll({
												characteristic: Characteristic.Presence,
												tier1: '15 + Р психічної шкоди',
												tier2: '24 + Р психічної шкоди',
												tier3: '28 + Р психічної шкоди'
											})
										),
										FactoryLogic.createAbilitySectionText('Ця здібність ігнорує прикриття та маскування.'),
										FactoryLogic.createAbilitySectionField({
											name: 'Виснаження',
											effect: 'Кидок здібності завдає критичний удар при натуральному 17 або вище. Ви отримуєте половину шкоди, яку отримує ціль, і не можете жодним чином зменшити цю шкоду.'
										})
									]
								})
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'talent-sub-3-9-1b',
									name: 'Синаптичний жах',
									description: 'Ви проектуєте жахливий образ у свідомість ворогів, а їхній страх психічно підживлює ваших союзників.',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Area, AbilityKeyword.Psionic, AbilityKeyword.Telepathy],
									distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 3 })],
									target: 'Кожен союзник і ворог у зоні',
									cost: 11,
									sections: [
										FactoryLogic.createAbilitySectionText('Ви та кожен союзник-ціль не можете отримати результат нижчий за рівень 2 на кидках сили до початку вашого наступного ходу. Кожна ворожа ціль підпадає під дію кидка сили цієї здібності.'),
										FactoryLogic.createAbilitySectionRoll(
											FactoryLogic.createPowerRoll({
												characteristic: Characteristic.Presence,
												tier1: 'Р < [слабкий], зляканий (рят. кидок завершує)',
												tier2: 'Р < [середній], зляканий (рят. кидок завершує)',
												tier3: 'Р < [сильний], зляканий (рят. кидок завершує)'
											})
										),
										FactoryLogic.createAbilitySectionField({
											name: 'Виснаження',
											effect: 'Ви не можете використовувати цю здібність, якщо це спричинить у вас негативну ясність.'
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
