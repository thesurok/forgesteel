import { AbilityDistanceType } from '@/enums/ability-distance-type';
import { AbilityKeyword } from '@/enums/ability-keyword';
import { Characteristic } from '@/enums/characteristic';
import { FactoryLogic } from '@/logic/factory-logic';
import { SubClass } from '@/models/subclass';

export const virtuoso: SubClass = {
	id: 'tWBfpTKQXZ12jGsU',
	name: 'Віртуоз',
	description: 'Ви знаходите драму в музиці та пісні, переплітаючи магію між вібраціями та наповнюючи аудиторію своїм пафосом.',
	featuresByLevel: [
		{
			level: 1,
			features: [
				FactoryLogic.feature.createSkillChoice({
					id: 'zVuRuelOOMRXxCgG',
					selected: [ 'Music' ]
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: '8OR9gvPtJN7cIZhh',
						name: 'Потужний акорд',
						description: 'Ваш інструмент звучить справжньо, і ваша музика вражає всіх.',
						type: FactoryLogic.type.createManeuver(),
						keywords: [ AbilityKeyword.Area, AbilityKeyword.Magic ],
						distance: [ FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 2 }) ],
						target: 'Кожен ворог у зоні',
						sections: [
							FactoryLogic.createAbilitySectionRoll(
								FactoryLogic.createPowerRoll({
									characteristic: [ Characteristic.Presence ],
									tier1: 'Відштовхування 1',
									tier2: 'Відштовхування 2',
									tier3: 'Відштовхування 3'
								})
							)
						]
					})
				}),
				FactoryLogic.feature.createMultiple({
					id: 'zVLsFRY0V10dNuaA',
					name: 'Виступи Віртуоза',
					description: 'Ви маєте наступні здібності виступу, які можна використовувати з вашою функцією Рутини.',
					features: [
						FactoryLogic.feature.createAbility({
							ability: FactoryLogic.createAbility({
								id: 'K0mQdfUHeiaVSsMN',
								name: '“Thunder Mother”',
								description: 'Всі за грім, матінко! ♪ Біжіть і ховайтеся! ♪',
								type: FactoryLogic.type.createNoAction(),
								keywords: [ AbilityKeyword.Magic, AbilityKeyword.Performance, AbilityKeyword.Ranged, AbilityKeyword.Strike ],
								distance: [ FactoryLogic.distance.createRanged(10) ],
								target: 'Одна істота',
								sections: [
									FactoryLogic.createAbilitySectionText('Наприкінці кожного раунду бою, поки цей виступ активний, ви можете зробити кидок сили по цілі, ігноруючи укриття. Ви не можете цілити одну й ту ж істоту цим ефектом двічі.'),
									FactoryLogic.createAbilitySectionRoll(
										FactoryLogic.createPowerRoll({
											characteristic: [ Characteristic.Presence ],
											tier1: 'Шкода блискавки, рівна вашому рівню',
											tier2: 'Шкода блискавки, рівна 5 + вашому рівню',
											tier3: 'Шкода блискавки, рівна 10 + вашому рівню'
										})
									)
								]
							})
						}),
						FactoryLogic.feature.createAbility({
							ability: FactoryLogic.createAbility({
								id: 'T2lumbD5GNggb7kX',
								name: '“Балада про Звіра”',
								description: 'Зуби оголені! ♪ Очі чорні! ♪ Від чудовиська не втекти! ♪',
								type: FactoryLogic.type.createNoAction(),
								keywords: [ AbilityKeyword.Area, AbilityKeyword.Magic, AbilityKeyword.Performance ],
								distance: [ FactoryLogic.distance.create({ type: AbilityDistanceType.Aura, value: 5 }) ],
								target: 'Ви та кожний союзник у зоні',
								sections: [
									FactoryLogic.createAbilitySectionText('Поки цей виступ активний, кожна ціль, яка починає свій хід у зоні, отримує 1 імпульс.')
								]
							})
						})
					]
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'WcIsMpwQBuTdLdmv',
						name: 'Гармонізація',
						description: 'Додайте трохи удару до хору.',
						type: FactoryLogic.type.createTrigger('Ціль використовує здібність, яка націлена лише на одного ворога і коштує 3 або менше їхнього героїчного ресурсу.'),
						keywords: [ AbilityKeyword.Ranged ],
						distance: [ FactoryLogic.distance.createRanged(5) ],
						target: 'Один союзник',
						cost: 3,
						sections: [
							FactoryLogic.createAbilitySectionText('Ціль може обрати ще одну додаткову ціль для тригерної здібності. Будь-яка шкода, завдана цій додатковій цілі, є звуковою.'),
							FactoryLogic.createAbilitySectionSpend({
								repeatable: true,
								effect: 'Ви можете активувати цю здібність, коли ціль використовує здібність, яка має вартість героїчного ресурсу 3 + кожен додатковий витрачений драм.'
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
					id: 'DWhLWnP0bwuHQ2qy',
					name: 'Здібність класу 2 рівня',
					options: [
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'U3IGzrqBjqxWKD9K',
									name: 'На біс!',
									description: 'Знову! Знову!',
									type: FactoryLogic.type.createMain(),
									keywords: [ AbilityKeyword.Magic, AbilityKeyword.Strike ],
									distance: [ FactoryLogic.distance.createSpecial('') ],
									target: 'Special',
									cost: 5,
									sections: [
										FactoryLogic.createAbilitySectionText('Ви використовуєте здібність, яку спостерігали цього раунду бою. Вона повинна мати ключове слово "Удар", коштувати 5 або менше героїчного ресурсу і не коштувати Злоби. Коли ви робите удар, ви використовуєте свій показник Присутності для всіх кидків сили, а вся завдана вами шкода є звуковою.')
									]
								})
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: '3eWhJl6vthKu3RY3',
									name: 'Складна аудиторія',
									description: 'Ваші фанати, здається, не дуже люблять відкриваючий акт …',
									type: FactoryLogic.type.createMain(),
									keywords: [ AbilityKeyword.Area, AbilityKeyword.Magic, AbilityKeyword.Ranged ],
									distance: [ FactoryLogic.distance.create({ type: AbilityDistanceType.Cube, value: 3, within: 10 }) ],
									target: 'Special',
									cost: 5,
									sections: [
										FactoryLogic.createAbilitySectionText('Зону населяє вируюча орда фантомів до кінця зустрічі. Союзники можуть входити в будь-яку клітинку зони без витрати переміщення. Наприкінці кожного вашого ходу ви можете зробити один кидок сили, який цілить у кожного ворога в зоні.'),
										FactoryLogic.createAbilitySectionRoll(
											FactoryLogic.createPowerRoll({
												characteristic: [ Characteristic.Presence ],
												tier1: '5 шкоди від скверни; С < [слабкий], притягнути 1 до центру зони',
												tier2: '9 шкоди від скверни; С < [середній], притягнути 2 до центру зони',
												tier3: '12 шкоди від скверни; С < [сильний], притягнути 3 до центру зони'
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
				FactoryLogic.feature.createMultiple({
					id: 'gMLn35ehmeBT1RYV',
					name: 'Другий альбом',
					description: 'У вас є наступні здібності виступу, які можна використовувати з вашою функцією Рутини.',
					features: [
						FactoryLogic.feature.createAbility({
							ability: FactoryLogic.createAbility({
								id: 'mWeNhxpEVJMjKcU8',
								name: '“Запалити ніч”',
								description: 'Можливо, ти і я ♪ Ми все ще можемо принести світло! ♪',
								type: FactoryLogic.type.createNoAction(),
								keywords: [ AbilityKeyword.Area, AbilityKeyword.Magic, AbilityKeyword.Performance ],
								distance: [ FactoryLogic.distance.create({ type: AbilityDistanceType.Aura, value: 5 }) ],
								target: 'На себе та кожного союзника в зоні',
								sections: [
									FactoryLogic.createAbilitySectionText('Поки цей виступ активний, кожна ціль, яка починає свій хід у зоні, не отримує перешкоди на ударах по істотах із маскуванням. Один раз за хід вони можуть шукати прихованих істот як безкоштовний маневр.')
								]
							})
						}),
						FactoryLogic.feature.createAbility({
							ability: FactoryLogic.createAbility({
								id: 'lDpZJV6xP89zFb8e',
								name: '“Незламний герой”',
								description: 'І сьогодні вночі ми можемо справді сказати ♪ Вони завжди знайдуть шлях! ♪',
								type: FactoryLogic.type.createNoAction(),
								keywords: [ AbilityKeyword.Area, AbilityKeyword.Magic, AbilityKeyword.Performance ],
								distance: [ FactoryLogic.distance.create({ type: AbilityDistanceType.Aura, value: 5 }) ],
								target: 'На себе та кожного союзника в зоні',
								sections: [
									FactoryLogic.createAbilitySectionText('Поки цей виступ активний, кожна ціль, яка починає свій хід у зоні в стані вмирання, отримує перевагу на кидках сили і ігнорує ефекти кровотечі до кінця свого ходу.')
								]
							})
						})
					]
				})
			]
		},
		{
			level: 4,
			features: []
		},
		{
			level: 5,
			features: [
				FactoryLogic.feature.createChoice({
					id: 'suMDtEOQggORQzn4',
					name: '5-й рівень функції класу',
					options: [
						{
							feature: FactoryLogic.feature.create({
								id: 'Qcz0plE7f3m2oMpE',
								name: 'Підбадьорюючий жарт',
								description: 'Одного разу на кожному з ваших ходів ви можете використати безкоштовний маневр, щоб обмінятися словами з ціллю вашого поточного виступу, крім себе. Ціль може витратити Відновлення, щоб отримати тимчасову Витривалість, рівну їх значенню відновлення.'
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.create({
								id: 'k1vcKIoLARGr6Lsr',
								name: 'Попурі',
								description: 'Ви можете підтримувати два виступи одночасно, використовуючи вашу функцію Рутини.'
							}),
							value: 1
						}
					]
				})
			]
		},
		{
			level: 6,
			features: [
				FactoryLogic.feature.createChoice({
					id: 'VD8b06zsDjeJpzlX',
					name: '6-й рівень функції класу',
					options: [
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'KVEuxjzQu7tvcsxH',
									name: 'Відгук',
									description: 'Ваша музика бʼє по натовпу в ритмі, поки їхні серця більше не витримують.',
									type: FactoryLogic.type.createMain(),
									keywords: [ AbilityKeyword.Area, AbilityKeyword.Magic ],
									distance: [ FactoryLogic.distance.createSpecial('Three 3 cubes within 1') ],
									target: 'Кожен ворог у зоні',
									cost: 9,
									sections: [
										FactoryLogic.createAbilitySectionText('Ця здібність не впливає на ціль, яка лежить.'),
										FactoryLogic.createAbilitySectionRoll(
											FactoryLogic.createPowerRoll({
												characteristic: [ Characteristic.Presence ],
												tier1: '7 звукової шкоди; П < [слабкий], розпластаний',
												tier2: '10 звукової шкоди; П < [середній], розпластаний',
												tier3: '13 звукової шкоди; П < [сильний], розпластаний'
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
									id: 'uPEJe3YMCKQ5no95',
									name: 'Легендарний Барабанний перехід',
									description: 'Ви починаєте барабанне соло, яке гримить як грім з кожним ударом героїв.',
									type: FactoryLogic.type.createManeuver(),
									keywords: [ AbilityKeyword.Area, AbilityKeyword.Magic ],
									distance: [ FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 4 }) ],
									target: 'На себе та кожного союзника в зоні',
									cost: 9,
									sections: [
										FactoryLogic.createAbilitySectionText('Кожна ціль отримує 1 імпульс, а потім отримує ще 1 імпульс на початку кожного раунду бою до кінця зустрічі.')
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
				FactoryLogic.feature.createMultiple({
					id: '17EPB8FMDm0rbPtb',
					name: 'Улюбленці натовпу',
					description: 'Ви маєте наступні здібності виступу, які можна використовувати з вашою функцією Рутини.',
					features: [
						FactoryLogic.feature.createAbility({
							ability: FactoryLogic.createAbility({
								id: 'cCAwy3SGtXi1BAgF',
								name: 'Місячна соната',
								description: 'Музика ллється з вашого серця, заповнюючи область найтоншою делікатністю і без приглушення.',
								type: FactoryLogic.type.createNoAction(),
								keywords: [ AbilityKeyword.Area, AbilityKeyword.Magic, AbilityKeyword.Performance ],
								distance: [ FactoryLogic.distance.create({ type: AbilityDistanceType.Aura, value: 5 }) ],
								target: 'Кожен союзник у зоні',
								sections: [
									FactoryLogic.createAbilitySectionText('Поки цей виступ активний, кожна ціль, яка мертва, може обрати продовжити ходити після смерті. На кожному своєму ході така ціль може переміщатися і використовувати або основну дію, або маневр, але не може витрачати Відновлення чи використовувати тригерні дії. Наприкінці зустрічі кожна ціль, яка обрала ходити таким чином, перетворюється на порох і розвіюється.')
								]
							})
						}),
						FactoryLogic.feature.createAbility({
							ability: FactoryLogic.createAbility({
								id: 'uPCAVJRpZCks52hw',
								name: 'Радикальна Фантазія',
								description: '♪ Вірас, мій Вірас, чи тримаєш ти їхні руки, коли вони плачуть? ♪',
								type: FactoryLogic.type.createNoAction(),
								keywords: [ AbilityKeyword.Area, AbilityKeyword.Magic, AbilityKeyword.Performance ],
								distance: [ FactoryLogic.distance.create({ type: AbilityDistanceType.Aura, value: 5 }) ],
								target: 'На себе та кожного союзника в зоні',
								sections: [
									FactoryLogic.createAbilitySectionText('Поки цей виступ активний, кожна ціль, яка починає свій хід у зоні, ігнорує важкопрохідну місцевість, а будь-яка здібність, яку вона використовує і яка накладає примусове переміщення, отримує +2 до дистанції цього переміщення до кінця її ходу. Крім того, раз за раунд бою кожна ціль може використати тригерну дію як безкоштовну.')
								]
							})
						})
					]
				})
			]
		},
		{
			level: 9,
			features: [
				FactoryLogic.feature.createChoice({
					id: 'H8CN7zqO4hRni29m',
					name: 'Здібність класу 9-го рівня',
					options: [
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'ZDIrJmxVMJMwBES0',
									name: 'Джем-сесія',
									description: 'Ваша джем-сесія створює нові жанри, які змушують всіх вставати і рухатися.',
									type: FactoryLogic.type.createMain(),
									keywords: [ AbilityKeyword.Area, AbilityKeyword.Magic ],
									distance: [ FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 5 }) ],
									target: 'Кожен ворог у зоні',
									cost: 11,
									sections: [
										FactoryLogic.createAbilitySectionRoll(
											FactoryLogic.createPowerRoll({
												characteristic: [ Characteristic.Presence ],
												tier1: '8 звукової шкоди',
												tier2: '11 звукової шкоди',
												tier3: '15 звукової шкоди'
											})
										),
										FactoryLogic.createAbilitySectionText('Кожна істота в межах дистанції отримує +5 до швидкості до кінця свого наступного ходу. Під цим ефектом кожна ціль повинна використати всю свою швидкість під час свого ходу.')
									]
								})
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'eY09PeFg3MJJSua6',
									name: 'Розплавити їхні обличчя',
									description: 'Сила музики проривається через реальність навколо цілі і зносить її.',
									type: FactoryLogic.type.createMain(),
									keywords: [ AbilityKeyword.Melee, AbilityKeyword.Magic, AbilityKeyword.Ranged, AbilityKeyword.Strike ],
									distance: [
										FactoryLogic.distance.createMelee(),
										FactoryLogic.distance.createRanged(10)
									],
									target: 'Одна істота або обʼєкт',
									cost: 11,
									sections: [
										FactoryLogic.createAbilitySectionRoll(
											FactoryLogic.createPowerRoll({
												characteristic: [ Characteristic.Presence ],
												tier1: '12 + П звукової шкоди; Відштовхування 5',
												tier2: '16 + П звукової шкоди; Відштовхування 10',
												tier3: '22 + П звукової шкоди; Відштовхування 15'
											})
										),
										FactoryLogic.createAbilitySectionText('Примусове переміщення від цієї здібності ігнорує стійкість.')
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
