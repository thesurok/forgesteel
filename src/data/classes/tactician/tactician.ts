import { AbilityDistanceType } from '@/enums/ability-distance-type';
import { AbilityKeyword } from '@/enums/ability-keyword';
import { Characteristic } from '@/enums/characteristic';
import { FactoryLogic } from '@/logic/factory-logic';
import { FeatureField } from '@/enums/feature-field';
import { HeroClass } from '@/models/class';
import { PerkList } from '@/enums/perk-list';
import { SkillList } from '@/enums/skill-list';
import { insurgent } from '@/data/classes/tactician/insurgent';
import { mastermind } from '@/data/classes/tactician/mastermind';
import { vanguard } from '@/data/classes/tactician/vanguard';

export const tactician: HeroClass = {
	id: 'class-tactician',
	name: 'Тактик',
	description: `
Стратег. Захисник. Лідер. З мечем у руці ви ведете союзників у вир битви, віддаєте накази, що надихають товаришів діяти швидше й завдавати точніших ударів. Водночас ви стоїте між товаришами і небезпекою, викликаючи ворогів спробувати перевершити вас, якщо ті на те здатні.

Як тактик, ви маєте здібності, що лікують союзників і надають їм підвищену шкоду, рухливість та атаки.`,
	type: 'standard',
	subclassName: 'Тактична доктрина',
	subclassCount: 1,
	primaryCharacteristicsOptions: [
		[Characteristic.Might, Characteristic.Reason]
	],
	primaryCharacteristics: [],
	featuresByLevel: [
		{
			level: 1,
			features: [
				FactoryLogic.feature.createBonus({
					id: 'tatician-stamina',
					field: FeatureField.Stamina,
					value: 21,
					valuePerLevel: 9
				}),
				FactoryLogic.feature.createBonus({
					id: 'tactician-recoveries',
					field: FeatureField.Recoveries,
					value: 10
				}),
				FactoryLogic.feature.createHeroicResource({
					id: 'tactician-resource',
					name: 'Фокус',
					gains: [
						{
							tag: 'start',
							trigger: 'Початок вашого ходу',
							value: '2'
						},
						{
							tag: 'deal-damage',
							trigger: 'Перший раз у кожному раунді, коли ви або союзник завдаєте шкоди істоті, позначеній вами',
							value: '1'
						},
						{
							tag: 'ability',
							trigger: 'Перший раз у раунді, коли союзник у межах 10 клітин від вас використовує героїчну здібність',
							value: '1'
						}
					]
				}),
				FactoryLogic.feature.createSkillChoice({
					id: 'tactician-1-1',
					selected: ['Лідерство']
				}),
				FactoryLogic.feature.createSkillChoice({
					id: 'tactician-1-2',
					options: ['Пильність', 'Архітектура', 'Ковальство', 'Вихваляння', 'Культура', 'Емпатія', 'Стрільництво', 'Механіка', 'Монстри', 'Пошук', 'Стратегія'],
					listOptions: [SkillList.Exploration],
					count: 2
				}),
				FactoryLogic.feature.createKitChoice({
					id: 'tactician-1-4',
					name: 'Польовий арсенал',
					description: 'Ви тренувалися з широким набором зброї та обладунків і розробили техніки для їхнього оптимального використання. Ви можете користуватися й отримувати переваги двох комплектів, включно з їхніми фірмовими здібностями. Коли ви обираєте або змінюєте один комплект, ви можете також обрати або змінити другий.',
					count: 2
				}),
				FactoryLogic.feature.createMultiple({
					id: 'tactician-1-5',
					name: 'Мітка',
					features: [
						FactoryLogic.feature.createAbility({
							ability: FactoryLogic.createAbility({
								id: 'tactician-1-5a',
								name: 'Мітка',
								description: 'Ви привертаєте увагу союзників до певного ворога — з руйнівним ефектом.',
								type: FactoryLogic.type.createManeuver(),
								keywords: [AbilityKeyword.Ranged],
								distance: [FactoryLogic.distance.createRanged(10)],
								target: 'Одна істота',
								sections: [
									FactoryLogic.createAbilitySectionText(`
			Ціль позначається вами до кінця сутички, поки ви не опинитесь у вмираючому стані або не використаєте цю здібність знову. Ви можете добровільно зняти мітку з істоти (без дії), а якщо інший тактик позначить ту саму істоту, ваша мітка з неї знімається. Коли істота, позначена вами, знижується до 0 Витривалості, ви можете використати безкоштовну тригерну дію, щоб позначити нову ціль у межах дистанції.

			Спочатку ви можете позначити лише одну істоту за допомогою цієї здібності, хоча інші здібності тактика дозволяють позначати додаткові цілі одночасно.

			Поки позначена вами істота знаходиться у вашій лінії ефекту, ви та союзники в цій лінії отримують перевагу на кидках сили проти цієї істоти.`),
									FactoryLogic.createAbilitySectionPackage('mark')
								]
							})
						}),
						FactoryLogic.feature.createAbility({
							ability: FactoryLogic.createAbility({
								id: 'tactician-1-5b',
								name: 'Мітка: Тригер',
								type: FactoryLogic.type.createTrigger('Ви або будь-який союзник використовує здібність, щоб завдати киданої шкоди істоті, позначеній вами', { free: true }),
								distance: [FactoryLogic.distance.createSpecial('Особливе')],
								target: 'Особливе',
								cost: 1,
								sections: [
									FactoryLogic.createAbilitySectionText(`
			Ви отримуєте один із наведених нижче ефектів:

			* Здібність завдає додаткової шкоди, рівної подвоєному значенню вашої Розумності.
			* Істота, яка завдає шкоди, може витратити Відновлення.
			* Істота, яка завдає шкоди, може зсунутися на кількість клітинок, рівну вашій Розумності.
			* Якщо ви пошкоджуєте позначену вами істоту вблизи (melee), ця істота стає підбуреною вами до кінця їхнього наступного ходу.

			Ви не можете отримати більше одного ефекту з одного тригера.`),
									FactoryLogic.createAbilitySectionPackage('mark')
								]
							})
						})
					]
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'tactician-1-6',
						name: '«Удар зараз!»',
						description: 'Ворог залишив отвір. Ви вказуєте на нього союзнику!',
						type: FactoryLogic.type.createMain(),
						keywords: [AbilityKeyword.Ranged],
						distance: [FactoryLogic.distance.createRanged(10)],
						target: 'Один союзник',
						sections: [
							FactoryLogic.createAbilitySectionText('Ціль може використати фірмову здібність як безкоштовну тригерну дію.'),
							FactoryLogic.createAbilitySectionSpend({
								value: 5,
								effect: 'Ви націлюєтеся на двох союзників замість одного.'
							})
						]
					})
				}),
				FactoryLogic.feature.createClassAbilityChoice({
					id: 'tactician-1-7',
					cost: 3
				}),
				FactoryLogic.feature.createClassAbilityChoice({
					id: 'tactician-1-8',
					cost: 5
				})
			]
		},
		{
			level: 2,
			features: [
				FactoryLogic.feature.createPerk({
					id: 'tactician-2-1',
					lists: [PerkList.Exploration, PerkList.Interpersonal, PerkList.Intrigue]
				})
			]
		},
		{
			level: 3,
			features: [
				FactoryLogic.feature.create({
					id: 'tactician-3-1',
					name: 'Поза позицією',
					description: 'Ще до початку бою вороги не встигають за вашими тактиками. На початку сутички ви можете використати безкоштовну тригерну дію, щоб застосувати свою здібність "Мітка" проти одного ворога, в якого у вас є лінія ефекту, навіть якщо ви були зненацька. Ви можете потім пересунути позначену ціль до 3 клітин, ігноруючи стабільність. Ціль не може бути переміщена так, щоб завдати їй шкоди (наприклад через обрив), залишити її вмираючою або спричинити стан чи інший негативний ефект.'
				}),
				FactoryLogic.feature.createClassAbilityChoice({
					id: 'tactician-3-2',
					cost: 7
				})
			]
		},
		{
			level: 4,
			features: [
				FactoryLogic.feature.createCharacteristicBonus({
					id: 'tactician-4-1a',
					characteristic: Characteristic.Might,
					value: 1
				}),
				FactoryLogic.feature.createCharacteristicBonus({
					id: 'tactician-4-1b',
					characteristic: Characteristic.Reason,
					value: 1
				}),
				FactoryLogic.feature.createHeroicResourceGain({
					id: 'tactician-4-2',
					name: 'Фокус на їхню слабкість',
					tag: 'deal-damage 2',
					trigger: 'Перший раз у кожному раунді, коли ви або союзник завдаєте шкоди істоті, позначеній вами',
					value: '2',
					replacesTags: ['deal-damage']
				}),
				FactoryLogic.feature.create({
					id: 'tactician-4-3',
					name: 'Удосконалений польовий арсенал',
					description: 'Ваша майстерність зі зброєю зросла. Коли ви використовуєте фірмову здібність одного з ваших обладнаних комплектів або робите вільний удар зброєю з одного з них, ви отримуєте перевагу.'
				}),
				FactoryLogic.feature.createPerk({
					id: 'tactician-4-4'
				}),
				FactoryLogic.feature.createSkillChoice({
					id: 'tactician-4-5'
				})
			]
		},
		{
			level: 5,
			features: [
				FactoryLogic.feature.createClassAbilityChoice({
					id: 'tactician-5-1',
					cost: 9
				})
			]
		},
		{
			level: 6,
			features: [
				FactoryLogic.feature.create({
					id: 'tactician-6-1',
					name: 'Майстер зброї',
					description: 'Ваша майстерність у володінні зброєю досягла істинного досконалості. Коли ви використовуєте фірмову здібність одного з ваших обладнаних комплектів або робите вільний удар зброєю з одного з них, ви можете скасувати штраф (bane) на кидку сили або зменшити подвійний штраф до одиничного.'
				}),
				FactoryLogic.feature.createPerk({
					id: 'tactician-6-2',
					lists: [PerkList.Exploration, PerkList.Interpersonal, PerkList.Intrigue]
				})
			]
		},
		{
			level: 7,
			features: [
				FactoryLogic.feature.createCharacteristicBonus({
					id: 'tactician-7-1a',
					characteristic: Characteristic.Might,
					value: 1
				}),
				FactoryLogic.feature.createCharacteristicBonus({
					id: 'tactician-7-1b',
					characteristic: Characteristic.Agility,
					value: 1
				}),
				FactoryLogic.feature.createCharacteristicBonus({
					id: 'tactician-7-1c',
					characteristic: Characteristic.Reason,
					value: 1
				}),
				FactoryLogic.feature.createCharacteristicBonus({
					id: 'tactician-7-1d',
					characteristic: Characteristic.Intuition,
					value: 1
				}),
				FactoryLogic.feature.createCharacteristicBonus({
					id: 'tactician-7-1e',
					characteristic: Characteristic.Presence,
					value: 1
				}),
				FactoryLogic.feature.createHeroicResourceGain({
					id: 'tactician-7-2',
					name: 'Посилений фокус',
					tag: 'start 2',
					trigger: 'Початок вашого ходу',
					value: '3',
					replacesTags: ['start']
				}),
				FactoryLogic.feature.create({
					id: 'tactician-7-3',
					name: 'Захопити ініціативу',
					description: 'Якщо на початку сутички ви не були зненацька, ваша сторона ходить першою. Якщо ворог має здібність, яка дозволяє їхній стороні ходити першою, порядок визначається звичайним кидком.'
				}),
				FactoryLogic.feature.createSkillChoice({
					id: 'tactician-7-4'
				})
			]
		},
		{
			level: 8,
			features: [
				FactoryLogic.feature.createPerk({
					id: 'tactician-8-1'
				}),
				FactoryLogic.feature.createClassAbilityChoice({
					id: 'tactician-8-2',
					cost: 11
				})
			]
		},
		{
			level: 9,
			features: [
				FactoryLogic.feature.create({
					id: 'tactician-9-1',
					name: 'Грандмайстер зброї',
					description: 'Ваша майстерність зі зброєю зросла до справжньої досконалості. Коли ви використовуєте фірмову здібність одного з ваших обладнаних комплектів або робите безкоштовний удар зброєю з одного з них, ви автоматично отримуєте результат рівня 3 у кидку потужності. Ви все ще можете кинути, щоб визначити, чи завдаєте критичний удар.'
				})
			]
		},
		{
			level: 10,
			features: [
				FactoryLogic.feature.createCharacteristicBonus({
					id: 'tactician-10-1a',
					characteristic: Characteristic.Might,
					value: 1
				}),
				FactoryLogic.feature.createCharacteristicBonus({
					id: 'tactician-10-1b',
					characteristic: Characteristic.Reason,
					value: 1
				}),
				FactoryLogic.feature.createHeroicResource({
					id: 'tactician-10-2',
					name: 'Наказ',
					type: 'epic',
					gains: [
						{
							tag: '',
							trigger: 'Після завершення відпочинку',
							value: 'Отримання досвіду'
						}
					],
					description: `
Коли ви або будь-який союзник використовує здібність, щоб завдати киданої шкоди істоті, позначеній вами, ви можете витратити 1 наказ як безкоштовну тригерну дію, щоб підвищити рівень результату кидка сили для тієї цілі на один рівень. Коли ворог, позначений вами, робить перевірку здібності, ви можете витратити 1 наказ як безкоштовну тригерну дію, щоб знизити рівень результату кидка сили на один рівень.

Наказ зберігається, доки ви його не витратите.`
				}),
				FactoryLogic.feature.createPerk({
					id: 'tactician-10-3',
					name: 'Перевага',
					lists: [PerkList.Exploration, PerkList.Interpersonal, PerkList.Intrigue]
				}),
				FactoryLogic.feature.createSkillChoice({
					id: 'tactician-10-4',
					name: 'Навичка'
				}),
				FactoryLogic.feature.createHeroicResourceGain({
					id: 'tactician-10-5',
					name: 'Справжній фокус',
					tag: 'start 3',
					trigger: 'Початок вашого ходу',
					value: '4',
					replacesTags: ['start', 'start 2']
				}),
				FactoryLogic.feature.create({
					id: 'tactician-10-6',
					name: 'Воєначальник',
					description: `
Ви оволоділи всіма можливими стратегіями та тактиками. Коли ви або будь-який союзник робить перевірку здібності проти цілі, позначеної вами, виконавець кидка може кинути три кубики і вибрати, які два використати.

Крім того, коли союзник використовує героїчну здібність, що спрямована на одну або більше істот, позначених вами, витрати їхнього Героїчного ресурсу на цю здібність зменшуються на 2 (мінімум 1).`
				})
			]
		}
	],
	abilities: [
		FactoryLogic.createAbility({
			id: 'tactician-ability-1',
			name: 'Боєвий клич',
			description: 'Ви вигукуєте слова, що надихають вашу команду.',
			type: FactoryLogic.type.createManeuver(),
			keywords: [AbilityKeyword.Ranged],
			distance: [FactoryLogic.distance.createRanged(10)],
			target: 'Троє союзників',
			cost: 3,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Reason],
						tier1: 'Кожна ціль отримує 1 сплеск.',
						tier2: 'Кожна ціль отримує 2 сплески.',
						tier3: 'Кожна ціль отримує 3 сплески.'
					})
				)
			]
		}),
		FactoryLogic.createAbility({
			id: 'tactician-ability-2',
			name: 'Оглушливий удар',
			description: 'Ваш точний удар лишає ворога нездатним адекватно відповісти.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [
				FactoryLogic.distance.createMelee(),
				FactoryLogic.distance.createRanged(5)
			],
			target: 'Одна істота або предмет',
			cost: 3,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Might],
						tier1: '3 + С шкоди; M < [слабкий], приголомшений (рят. кидок закінчує)',
						tier2: '5 + С шкоди; M < [середній], приголомшений (рят. кидок закінчує)',
						tier3: '8 + С шкоди; M < [сильний], приголомшений (рят. кидок закінчує)'
					})
				)
			]
		}),
		FactoryLogic.createAbility({
			id: 'tactician-ability-3',
			name: 'Надихаючий удар',
			description: 'Ваша атака вселяє надію в союзника.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [
				FactoryLogic.distance.createMelee(),
				FactoryLogic.distance.createRanged(5)
			],
			target: 'Одна істота або предмет',
			cost: 3,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Might],
						tier1: '3 + С шкоди; ви або один союзник у межах 10 клітин від вас може витратити Відновлення',
						tier2: '5 + С шкоди; ви або один союзник у межах 10 клітин від вас може витратити Відновлення',
						tier3: '8 + С шкоди; ви та один союзник у межах 10 клітин від вас можуть витратити Відновлення, і кожен з вас отримує перевагу на наступну перевірку здібності під час сутички'
					})
				)
			]
		}),
		FactoryLogic.createAbility({
			id: 'tactician-ability-4',
			name: 'Загін! Вперед!',
			description: 'За вашим наказом ви й союзники відтісняєте ворожу лінію.',
			type: FactoryLogic.type.createManeuver(),
			keywords: [AbilityKeyword.Ranged],
			distance: [FactoryLogic.distance.createRanged(10)],
			target: 'Себе і двох союзників',
			cost: 3,
			sections: [
				FactoryLogic.createAbilitySectionText('Кожна ціль може переміститися на відстань, що дорівнює її швидкості.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'tactician-ability-5',
			name: 'Молот і наковальня',
			description: '«Не сперечаймося, хто молот, а хто наковальня!»',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [
				FactoryLogic.distance.createMelee(),
				FactoryLogic.distance.createRanged(5)
			],
			target: 'Одна істота або предмет',
			cost: 5,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Might],
						tier1: '5 + С шкоди; один союзник у межах 10 клітин від вас може використати фірмову здібність удару проти цілі як безкоштовну тригерну дію',
						tier2: '9 + С шкоди; один союзник у межах 10 клітин від вас може використати фірмову здібність удару, яка отримує перевагу проти цілі, як безкоштовну тригерну дію',
						tier3: '12 + С шкоди; два союзники у межах 10 клітин від вас можуть кожен використати фірмову здібність удару, яка отримує перевагу проти цілі, як безкоштовну тригерну дію'
					})
				),
				FactoryLogic.createAbilitySectionText('Якщо ціль знижується до 0 Витривалості до того, як один або обидва обрані союзники здійснять свій удар, ці союзники можуть вибрати іншу ціль.'),
			]
		}),
		FactoryLogic.createAbility({
			id: 'tactician-ability-6',
			name: 'Гра розуму',
			description: 'Ваша атака деморалізує ворога. Союзники починають вірити, що ви можете перемогти.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [
				FactoryLogic.distance.createMelee(),
				FactoryLogic.distance.createRanged(5)
			],
			target: 'Одна істота або предмет',
			cost: 5,
			sections: [
				FactoryLogic.createAbilitySectionText('Ви позначаєте ціль.'),
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Might],
						tier1: '4 + С шкоди; Р < [слабкий], ослаблений (рят. кидок закінчує)',
						tier2: '6 + С шкоди; Р < [середній], ослаблений (рят. кидок закінчує)',
						tier3: '10 + С шкоди; Р < [сильний], ослаблений (рят. кидок закінчує)'
					})
				),
				FactoryLogic.createAbilitySectionText('До початку вашого наступного ходу перший раз, коли будь-який союзник завдасть шкоди цілі, позначеній вами, цей союзник може витратити Відновлення.'),
			]
		}),
		FactoryLogic.createAbility({
			id: 'tactician-ability-7',
			name: 'Зараз!',
			description: 'Союзники чекають вашого наказу — і тоді наносять смертельний удар!',
			type: FactoryLogic.type.createManeuver(),
			keywords: [AbilityKeyword.Ranged],
			distance: [FactoryLogic.distance.createRanged(10)],
			target: 'Троє союзників',
			cost: 5,
			sections: [
				FactoryLogic.createAbilitySectionText('Кожна ціль може виконати вільний удар.'),
			]
		}),
		FactoryLogic.createAbility({
			id: 'tactician-ability-8',
			name: 'Ось для чого ми готувалися',
			description: 'Усі ті вправи з координації, які ви проводили, нарешті дають результат.',
			type: FactoryLogic.type.createManeuver(),
			keywords: [AbilityKeyword.Ranged],
			distance: [FactoryLogic.distance.createRanged(10)],
			target: 'Двоє союзників',
			cost: 5,
			sections: [
				FactoryLogic.createAbilitySectionText('Кожна ціль, яка ще не діяла в цьому боєвому раунді, може виконати свій хід у будь-якому порядку одразу після вашого.'),
			]
		}),
		FactoryLogic.createAbility({
			id: 'tactician-ability-9',
			name: 'Фронтальний штурм',
			description: 'Мета штурму — зламати їхній моральний дух і змусити відступити.',
			type: FactoryLogic.type.createManeuver(),
			distance: [FactoryLogic.distance.createSelf()],
			target: 'Себе',
			cost: 7,
			sections: [
				FactoryLogic.createAbilitySectionText('До кінця сутички або поки ви не опинитесь у вмираючому стані, перший раз у ході, коли ви або будь-який союзник завдає шкоди цілі, позначеній вами, істота, яка завдала шкоди, може штовхнути ціль на до 2 клітин і потім зсунутися до 2 клітин. Крім того, будь-який союзник, який використовує головну дію "Штурм" (Штурм) проти істоти, позначеної вами, може використати фірмову або героїчну здібність удару вблизи замість вільного удару вблизи.'),
			]
		}),
		FactoryLogic.createAbility({
			id: 'tactician-ability-10',
			name: 'Вдарте їх сильно!',
			description: 'Ваші союзники бачать переваги атак по цілях, які ви обираєте.',
			type: FactoryLogic.type.createManeuver(),
			distance: [FactoryLogic.distance.createSelf()],
			target: 'Себе',
			cost: 7,
			sections: [
				FactoryLogic.createAbilitySectionText('До кінця сутички або поки ви не опинитесь у вмираючому стані, коли ви або будь-який союзник завдає шкоди цілі, позначеній вами, ця істота отримує 2 сплески (сплеск), які може використати негайно.'),
			]
		}),
		FactoryLogic.createAbility({
			id: 'tactician-ability-11',
			name: 'Розгром',
			description: 'Хід битви починає змінюватися.',
			type: FactoryLogic.type.createManeuver(),
			distance: [FactoryLogic.distance.createSelf()],
			target: 'Себе',
			cost: 7,
			sections: [
				FactoryLogic.createAbilitySectionText('До кінця сутички або поки ви не опинитесь у вмираючому стані, коли ви або будь-який союзник завдає шкоди цілі, позначеній вами, яка має Р < [середній], ця ціль боїться істоту, яка завдала шкоди (рятувальний кидок закінчує).'),
			]
		}),
		FactoryLogic.createAbility({
			id: 'tactician-ability-12',
			name: 'Тримайтеся і зосередьтесь!',
			description: 'Ми зможемо це зробити! Зберігайте віру і стійте міцно!',
			type: FactoryLogic.type.createManeuver(),
			distance: [FactoryLogic.distance.createSelf()],
			target: 'Себе',
			cost: 7,
			sections: [
				FactoryLogic.createAbilitySectionText('До кінця сутички або поки ви не опинитесь у вмираючому стані, коли ви або будь-який союзник завдає шкоди цілі, позначеній вами, істота, що завдала шкоди, може витратити Відновлення.'),
			]
		}),
		FactoryLogic.createAbility({
			id: 'tactician-ability-13',
			name: 'Загін! Перевірка спорядження!',
			description: 'Ви відволікаєте ворога, поки ваші союзники закріплюють захисне спорядження.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [FactoryLogic.distance.createMelee()],
			target: 'Одна істота',
			cost: 9,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: Characteristic.Might,
						tier1: '9 + С шкоди',
						tier2: '13 + С шкоди',
						tier3: '18 + С шкоди'
					})
				),
				FactoryLogic.createAbilitySectionText('Ви та кожен союзник, що знаходиться поруч із ціллю, отримуєте 10 тимчасової Витривалості.'),
			]
		}),
		FactoryLogic.createAbility({
			id: 'tactician-ability-14',
			name: 'Загін! Памʼятайте тренування!',
			description: 'Ви нагадуєте союзникам, як найкраще користуватися своїм спорядженням.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Ranged],
			distance: [FactoryLogic.distance.createRanged(10)],
			target: 'Себе і двох союзників',
			cost: 9,
			sections: [
				FactoryLogic.createAbilitySectionText('Кожна ціль отримує 1 сплеск і може використати фірмову здібність, яка має подвійний ефект (подвійний ефект).'),
			]
		}),
		FactoryLogic.createAbility({
			id: 'tactician-ability-15',
			name: 'Переможемо сьогодні!',
			description: 'Ви надихаєте союзників відновитися та зібрати сили.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Area],
			distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 3 })],
			target: 'На себе і кожного союзника в зоні впливу',
			cost: 9,
			sections: [
				FactoryLogic.createAbilitySectionText('Кожна ціль отримує 2 сплески. Крім того, вони можуть витратити Відновлення, зняти будь-які стани або ефекти з себе та піднятися, якщо були лежачими.'),
			]
		}),
		FactoryLogic.createAbility({
			id: 'tactician-ability-16',
			name: 'У тебе ще є сили',
			description: 'Ви підштовхуєте союзника використати героїчну здібність раніше, ніж зазвичай.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Ranged],
			distance: [FactoryLogic.distance.createRanged(10)],
			target: 'Один союзник',
			cost: 9,
			sections: [
				FactoryLogic.createAbilitySectionText('Ціль використовує героїчну здібність з ключовим словом Strike як безкоштовну тригерну дію і завдає додаткової шкоди цією здібністю, рівної вашому значенню Розумності. Вартість цієї здібності у Героїчному ресурсі зменшується на 1 + ваше значення Розумності (мінімум 0).'),
			]
		}),
		FactoryLogic.createAbility({
			id: 'tactician-ability-17',
			name: 'Іди зараз і швидко!',
			description: 'Ви спрямовуєте атаку так, щоб вона вразила точно.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Ranged],
			distance: [FactoryLogic.distance.createRanged(10)],
			target: 'На себе або одного союзника',
			cost: 11,
			sections: [
				FactoryLogic.createAbilitySectionText('Ціль отримує 2 сплески і може використати фірмову або героїчну здібність як безкоштовну тригерну дію. Ця здібність має подвійний ефект на кидку сили, ігнорує імунітети до шкоди та збільшує потужність будь-яких ефектів потужності на 1.'),
			]
		}),
		FactoryLogic.createAbility({
			id: 'tactician-ability-18',
			name: 'Добий їх!',
			description: 'Ви вказуєте союзнику вразливе місце, щоб він міг нанести смертельний удар.',
			type: FactoryLogic.type.createTrigger('Ціль не є лідером або одиничною істотою і стає захеканою.', { free: true }),
			keywords: [AbilityKeyword.Ranged],
			distance: [FactoryLogic.distance.createRanged(10)],
			target: 'Одна істота',
			cost: 11,
			sections: [
				FactoryLogic.createAbilitySectionText('Ціль вбита. Крім того, істота, яка призвела ціль до стану "Захеканий" (захеканий), може витратити Відновлення.'),
			]
		}),
		FactoryLogic.createAbility({
			id: 'tactician-ability-19',
			name: 'Шлюзи відкриті',
			description: 'Ви наказуєте загону вдарити одночасно з руйнівним ефектом.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Ranged],
			distance: [FactoryLogic.distance.createRanged(10)],
			target: 'Троє союзників',
			cost: 11,
			sections: [
				FactoryLogic.createAbilitySectionText('Кожна ціль отримує 1 сплеск і може використати фірмову здібність як безкоштовну тригерну дію. Та здібність отримує перевагу на кидку сили та збільшує потужність будь-яких ефектів потужності на 1.'),
			]
		}),
		FactoryLogic.createAbility({
			id: 'tactician-ability-20',
			name: 'Я відкрию, ти закриєш',
			description: 'Ви створюєте прорив для союзника.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [
				FactoryLogic.distance.createMelee(),
				FactoryLogic.distance.createRanged(5)
			],
			target: 'Одна істота',
			cost: 11,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: Characteristic.Might,
						tier1: '6 + С шкоди',
						tier2: '10 + С шкоди',
						tier3: '14 + С шкоди'
					})
				),
				FactoryLogic.createAbilitySectionText('Один союзник у межах 10 клітин від вас може використати героїчну здібність проти цілі як безкоштовну тригерну дію без витрачання свого Героїчного ресурсу, за умови що в нього достатньо ресурсу для оплати здібності. Якщо ціль знижується до 0 Витривалості до того, як обраний союзник використає свою здібність, союзник може вибрати іншу ціль.'),
			]
		})
	],
	subclasses: [
		insurgent,
		mastermind,
		vanguard
	],
	level: 1,
	characteristics: []
};
