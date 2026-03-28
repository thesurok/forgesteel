import { AbilityDistanceType } from '@/enums/ability-distance-type';
import { AbilityKeyword } from '@/enums/ability-keyword';
import { Characteristic } from '@/enums/characteristic';
import { FactoryLogic } from '@/logic/factory-logic';
import { SubClass } from '@/models/subclass';

export const duelist: SubClass = {
	id: 'O51GO1EdIggJHj40',
	name: 'Дуеліст',
	description: 'Драма пронизує кожен ваш рух, виконаний у парі з іншим. Ви виконуєте танці смерті, покладаючись на супротивника, що він відповість вам взаємністю.',
	featuresByLevel: [
		{
			level: 1,
			features: [
				FactoryLogic.feature.createSkillChoice({
					id: '1NhlI9WCQUCKkX0u',
					selected: ['Гімнастика']
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'gTezUhLaizAfbmXy',
						name: 'Акробатика',
						description: 'Глядачам подобається видовищний кульбіт.',
						type: FactoryLogic.type.createNoAction(),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Magic, AbilityKeyword.Performance],
						distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Aura, value: 5 })],
						target: 'Ви та кожний союзник у зоні',
						sections: [
							FactoryLogic.createAbilitySectionText('Поки цей виступ активний, кожна ціль, яка починає свій хід у зоні, може автоматично отримати результат 3-го рівня в одному випробуванні на стрибок, перекид або лазіння як частину свого переміщення до кінця свого ходу.')
						]
					})
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'vS4O8NKJgdBVoVjj',
						name: 'Зіркова сила',
						description: 'Роки практики фехтування й танців дають плоди на полі бою.',
						type: FactoryLogic.type.createManeuver(),
						distance: [FactoryLogic.distance.createMelee()],
						target: 'Ви',
						cost: 1,
						sections: [
							FactoryLogic.createAbilitySectionText('Ви отримуєте +2 до швидкості до кінця свого ходу. Крім того, наступний кидок сили, який ви зробите цього ходу, не може мати результат нижче 2-го рівня.'),
							FactoryLogic.createAbilitySectionSpend({
								effect: 'Натомість ви отримуєте +4 до швидкості.'
							})
						]
					})
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'uWQCoI4iBOhFpHgW',
						name: 'Ріпост',
						description: '«Якби я знав, що битимуся з собакою, я б приніс ласощі.»',
						type: FactoryLogic.type.createTrigger('Ціль отримує шкоду від ближнього удару.'),
						keywords: [AbilityKeyword.Melee],
						distance: [FactoryLogic.distance.createMelee()],
						target: 'Ви або один союзник',
						sections: [
							FactoryLogic.createAbilitySectionText('Ціль робить безкоштовний удар по істоті, яка завдала тригерного удару.')
						]
					})
				})
			]
		},
		{
			level: 2,
			features: [
				FactoryLogic.feature.createChoice({
					id: 'lAPeP3iSpt8PqQJI',
					name: 'Здібність класу (2 рівень)',
					options: [
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'FViXbLCcsCb1xdHQ',
									name: 'Класичний трюк з люстрою',
									description: 'Глядачам це подобається.',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
									distance: [FactoryLogic.distance.createMelee()],
									target: 'Ви та один охочий союзник',
									cost: 5,
									sections: [
										FactoryLogic.createAbilitySectionText('Кожна ціль може зміститися до 5 клітинок, включно по вертикалі, але має завершити це переміщення поруч з іншою ціллю і на твердій поверхні. Потім кожна ціль може зробити ближній безкоштовний удар, який завдає додаткової шкоди, що дорівнює подвійному значенню їхньої найвищої характеристики.')
									]
								})
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'MRR7Ag6ujfREe9A8',
									name: 'En Garde!',
									description: 'Стій! Охорона! Поворот! Парі! Ухил! Оберт! Удар! Ха!',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
									distance: [FactoryLogic.distance.createMelee()],
									target: 'Одна істота',
									cost: 5,
									sections: [
										FactoryLogic.createAbilitySectionRoll(
											FactoryLogic.createPowerRoll({
												characteristic: [Characteristic.Agility],
												tier1: '7 + Л шкоди',
												tier2: '11 + Л шкоди',
												tier3: '16 + Л шкоди'
											})
										),
										FactoryLogic.createAbilitySectionText('Ціль може зробити ближній безкоштовний удар по вам. Якщо вона це робить, ви можете зробити ближній безкоштовний удар по цілі.')
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
					id: 'TkRYPzOk7E7KosGI',
					name: 'Контрзавдання',
					description: 'На початку зустрічі оберіть одну істоту у межах вашої лінії ефекту. Ви маєте подвійну перевагу на кидках сили, спрямованих проти або у конкуренції з цією істотою. Обрана істота також має подвійну перевагу на кидках сили, спрямованих проти або у конкуренції з вами. Якщо обрана істота зменшується до 0 Витривалості, ви можете обрати нову контрзавдання на початку наступного раунду бою.'
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
					id: 'AYG8ODq4Xvn4vWMr',
					name: 'Здібність класу (5 рівень)',
					options: [
						{
							feature: FactoryLogic.feature.create({
								id: 'EpJ6mBFE2kfCK1IY',
								name: 'Словесна дуель',
								description: 'Одного разу в кожному вашому ході, поки ціль вашої риси «Контрзавдання» знаходиться поруч, ви можете використати безкоштовний маневр, щоб обмінятися словами з нею. Зробіть протиставлений тест на Присутність з ціллю. Той, хто отримає вищий результат, може зробити безкоштовний удар, який завдає психічної шкоди замість звичайної.'
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'TqxhltwD22GJjGkU',
									name: 'Нас не затьмарити!',
									description: 'Фехтування таке витончене, що здається, ніби ви всі репетирували це разом.',
									type: FactoryLogic.type.createNoAction(),
									keywords: [AbilityKeyword.Area, AbilityKeyword.Magic, AbilityKeyword.Performance],
									distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Aura, value: 5 })],
									target: 'Ви та кожний союзник у зоні',
									sections: [
										FactoryLogic.createAbilitySectionText('Поки цей виступ активний, ціль, яка починає свій хід у зоні, отримує бонус до дистанції зміщення, що дорівнює вашому показнику Присутності, до кінця свого ходу.')
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
			level: 6,
			features: [
				FactoryLogic.feature.createChoice({
					id: 'AkvymN5wTwBpvJk6',
					name: 'Здібність класу (6 рівень)',
					options: [
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'gCxHNxuFdPtoWOSw',
									name: 'Кров на сцені',
									description: 'Тут і любов, і кров, або драма й кров. У будь-якому разі — завжди кров.',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
									distance: [FactoryLogic.distance.createMelee()],
									target: 'Одна істота або обʼєкт',
									cost: 9,
									sections: [
										FactoryLogic.createAbilitySectionRoll(
											FactoryLogic.createPowerRoll({
												characteristic: [Characteristic.Agility],
												tier1: '12 + Л шкоди; С < [слабкий], кровотеча (завершується рят. кидком)',
												tier2: '18 + Л шкоди; С < [середній], кровотеча (завершується рят. кидком)',
												tier3: '24 + Л шкоди; кровотеча (до кінця ходу), або якщо С < [сильний], кровотеча (завершується рят. кидком)'
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
									id: 'yzRbbBkrzCSPBh1w',
									name: 'Хореографія бою',
									description: 'Ви та ваш партнер робите показовий яскравий виступ, а потім повертаєтесь по своїх місцях.',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
									distance: [FactoryLogic.distance.createMelee()],
									target: 'Одна істота',
									cost: 9,
									sections: [
										FactoryLogic.createAbilitySectionText('Ви і ціль кожен робите ближній безкоштовний удар, який цілить у кожного ворога в межах 3 клітинок від кожного з вас, розподіляючи ворогів між собою. Ви обираєте, яких ворогів цілить ваш удар, а яких — удар цільової істоти. Потім ви зсуваєте ціль на 5 клітинок, ігноруючи стійкість.')
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
					id: 'FwA0rbxGHrD7Oj2H',
					name: 'Шедевр',
					description: `Оберіть одну зі своїх підписних здібностей і назвіть її своїм імʼям. Ви завжди маєте цю здібність доступною, навіть якщо вона походить з набору, який ви замінюєте. Коли ви використовуєте цю здібність, ви отримуєте перевагу та 1 сплеск, який можна витратити лише на цю здібність.

Додатково, коли названа вами підписна здібність є останньою, яку ви використовуєте в зустрічі, ви можете негайно використати ефект «Hear Ye, Hear Ye!» вашої риси «Zeitgeist», щоб розповісти історії про ваші подвиги після завершення зустрічі.`
				})
			]
		},
		{
			level: 9,
			features: [
				FactoryLogic.feature.createChoice({
					id: 'qIMKE6V6R4w2teMf',
					name: 'Здібність класу (9 рівень)',
					options: [
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: '4LyAtdASe3AEJaon',
									name: 'Майстерний фехтувальник',
									description: 'Якщо вам вдасться влучити ударом, натовп шаленіє.',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Charge, AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
									distance: [FactoryLogic.distance.createMelee(3)],
									target: 'Одна істота або обʼєкт',
									cost: 11,
									sections: [
										FactoryLogic.createAbilitySectionRoll(
											FactoryLogic.createPowerRoll({
												characteristic: [Characteristic.Agility],
												tier1: '15 + Л шкоди',
												tier2: '21 + Л шкоди',
												tier3: '28 + Л шкоди; якщо С < [сильний], кровотеча (завершується рят. кидком)'
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
									id: 'IZCTPQBJer4fFuKi',
									name: 'Переговорений контракт',
									description: 'Ні, ні. Ви не вмираєте, доки не вийде сіквел.',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
									distance: [FactoryLogic.distance.createMelee()],
									target: 'Одна істота',
									cost: 11,
									sections: [
										FactoryLogic.createAbilitySectionText('Додайте вашу поточну Витривалість до поточної Витривалості цілі, потім ви маєте половину цієї суми, а ціль — залишок. Якщо хтось із вас отримує більше Витривалості, ніж його максимум, різницю отримує інша істота. Жоден із вас не може отримати більше Витривалості, ніж його максимум, цим способом. Потім ви робите кидок сили.'),
										FactoryLogic.createAbilitySectionRoll(
											FactoryLogic.createPowerRoll({
												characteristic: [Characteristic.Presence],
												tier1: 'Ви та ціль можете кожен скасувати один ефект на собі, який скасовується рятівним кидком або який закінчується наприкінці ваших ходів.',
												tier2: 'Ви та ціль можете скасувати будь-які ефекти на собі, які скасовуються рятівним кидком або які закінчуються наприкінці ваших ходів.',
												tier3: 'Ви можете обрати будь-які поточні ефекти на вас і на цілі, що скасовуються рятівним кидком або закінчуються наприкінці ходів, застосувати обрані ефекти до цілі та завершити інші.'
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
