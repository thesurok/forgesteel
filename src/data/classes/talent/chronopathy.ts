import { AbilityDistanceType } from '@/enums/ability-distance-type';
import { AbilityKeyword } from '@/enums/ability-keyword';
import { Characteristic } from '@/enums/characteristic';
import { FactoryLogic } from '@/logic/factory-logic';
import { SubClass } from '@/models/subclass';

export const chronopathy: SubClass = {
	id: 'talent-sub-1',
	name: 'Хронопатія',
	description: 'Здібності хронопатії дозволяють вам бачити майбутні й минулі події та маніпулювати часом, щоб допомагати союзникам і перешкоджати ворогам.',
	featuresByLevel: [
		{
			level: 1,
			features: [
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'talent-sub-1-1-1',
						name: 'Прискорення',
						description: 'Для вашого союзника здається, ніби світ уповільнився.',
						type: FactoryLogic.type.createManeuver(),
						keywords: [AbilityKeyword.Psionic, AbilityKeyword.Ranged],
						distance: [FactoryLogic.distance.createRanged(10)],
						target: 'На себе або одну істоту',
						sections: [
							FactoryLogic.createAbilitySectionText('Ціль переміщується на кількість клітинок, рівну вашому показнику Розуму.'),
							FactoryLogic.createAbilitySectionSpend({
								value: 2,
								effect: 'Ціль може виконати маневр.'
							})
						]
					})
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'talent-sub-1-1-2',
						name: 'Ще раз',
						description: 'Ви відкотитеся на мить назад, щоб побачити, чи складеться все трохи інакше.',
						type: FactoryLogic.type.createTrigger('Ціль робить кидок здібності.'),
						keywords: [AbilityKeyword.Psionic, AbilityKeyword.Ranged],
						distance: [FactoryLogic.distance.createRanged(10)],
						target: 'На себе або одну істоту',
						sections: [
							FactoryLogic.createAbilitySectionText('Ви можете використати цю здібність після того, як побачите результат кидка-тригера. Ціль мусить перебросити кидок сили та використати новий результат.')
						]
					})
				})
			]
		},
		{
			level: 2,
			features: [
				FactoryLogic.feature.create({
					id: 'talent-sub-1-2-1',
					name: 'Полегшення годин',
					description: 'Ви можете збільшити кількість раундів у тесті монтажу на 1, якщо тест завершився б до досягнення героями ліміту успіхів.'
				}),
				FactoryLogic.feature.createChoice({
					id: 'talent-sub-1-2-2',
					name: 'Здібність традиції 2 рівня',
					options: [
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'talent-sub-1-2-2a',
									name: 'Прикладна хронометрія',
									description: 'Час сповільнюється навколо вас. Ваше серцебиття — єдиний показник додаткових миттєвостей, які ви отримали.',
									type: FactoryLogic.type.createManeuver(),
									keywords: [AbilityKeyword.Chronopathy, AbilityKeyword.Psionic, AbilityKeyword.Ranged],
									distance: [FactoryLogic.distance.createRanged(10)],
									target: 'Особливе',
									cost: 5,
									sections: [
										FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
											characteristic: [Characteristic.Presence],
											tier1: 'Ви обираєте дві істоти, одна з яких може бути ви',
											tier2: 'Ви обираєте три істоти, одна з яких може бути ви',
											tier3: 'Ви обираєте чотири істоти, одна з яких може бути ви'
										})),
										FactoryLogic.createAbilitySectionText('До початку вашого наступного ходу кожна ціль отримує +5 до швидкості, її не можна зробити приголомшеною, і вона може виконати додатковий маневр у своєму ході. Якщо ціль уже приголомшена, цей стан для неї припиняється.'),
										FactoryLogic.createAbilitySectionField({
											name: 'Виснажений',
											effect: 'Ваша швидкість зменшується наполовину до кінця бою.'
										})
									]
								})
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'talent-sub-1-2-2b',
									name: 'Сповільнення',
									description: 'Можливо, вони дивуються, чому всі інші рухаються так швидко?',
									type: FactoryLogic.type.createManeuver(),
									keywords: [AbilityKeyword.Chronopathy, AbilityKeyword.Psionic, AbilityKeyword.Ranged],
									distance: [FactoryLogic.distance.createRanged(10)],
									target: 'Три істоти або обʼєкти',
									cost: 5,
									sections: [
										FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
											characteristic: [Characteristic.Presence],
											tier1: 'Швидкість цілі зменшується наполовину (рят. кидок закінчує), або якщо П < [слабкий], ціль сповільнюється (рят. кидок закінчує).',
											tier2: 'Ціль сповільнюється (рят. кидок закінчує), або якщо П < [середній], швидкість цілі стає 0 (рят. кидок закінчує).',
											tier3: 'Ціль сповільнюється (рят. кидок закінчує), або якщо П < [сильний], швидкість цілі стає 0 (рят. кидок закінчує).'
										})),
										FactoryLogic.createAbilitySectionText('Ціль не може використовувати тригерні дії, поки її швидкість знижена таким чином.'),
										FactoryLogic.createAbilitySectionField({
											name: 'Виснажений',
											effect: 'Потужність цієї здібності збільшується на 1 і ви отримуєте 1d6 пошкодження. На початку кожного раунду бою, поки будь-яка ціль під впливом цієї здібності, ви отримуєте 1d6 пошкодження. Ви можете припинити ефект на всіх уражених цілях у будь-який момент (без дії).'
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
					id: 'talent-sub-1-5-1',
					name: 'Часова деформація',
					description: 'Поки ви не вмираєте, час поводиться нерегулярно навколо вас в аурі 3. Та область є важкопрохідною для ворогів. Крім того, коли союзник вперше за раунд бою входить у цю область або починає там свій хід, він отримує +2 до швидкості до кінця ходу.'
				}),
				FactoryLogic.feature.create({
					id: 'talent-sub-1-5-2',
					name: 'Швидкість думки',
					description: 'Раз за раунд бою, поки ви не вмираєте, ви можете витратити 2 ясності, коли використовуєте тригерну дію, щоб зробити її безкоштовною тригерною дією.'
				})
			]
		},
		{
			level: 6,
			features: [
				FactoryLogic.feature.createChoice({
					id: 'talent-sub-1-6-1',
					name: 'Здібність традиції 6 рівня',
					options: [
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'talent-sub-1-6-1a',
									name: 'Доля',
									description: 'Ваш ворог бачить проблиск того, як усе для нього завершиться.',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Chronopathy, AbilityKeyword.Psionic, AbilityKeyword.Melee],
									distance: [FactoryLogic.distance.createMelee(2)],
									target: 'Один ворог',
									cost: 9,
									sections: [
										FactoryLogic.createAbilitySectionText('Ціль має вразливість до шкоди 5 до кінця вашого наступного ходу. Коли ціль отримує пошкодження, маючи цю вразливість, її збиває з ніг.'),
										FactoryLogic.createAbilitySectionField({
											name: 'Виснажений',
											effect: 'Ця здібність набуває ключового слова Удар, оскільки бачення шкодить психіці цілі. Ви робите кидок сили, після чого ви стаєте ослабленими (рят. кидок закінчує).'
										}),
										FactoryLogic.createAbilitySectionRoll(
											FactoryLogic.createPowerRoll({
												characteristic: Characteristic.Presence,
												tier1: '8 + П психічної шкоди',
												tier2: '13 + П психічної шкоди',
												tier3: '17 + П психічної шкоди'
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
									id: 'talent-sub-1-6-1b',
									name: 'Стазове поле',
									description: 'Залиште все як було. Ігноруйте все, що буде.',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Area, AbilityKeyword.Chronopathy, AbilityKeyword.Psionic, AbilityKeyword.Ranged],
									distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Cube, value: 4, within: 10 })],
									target: 'Кожна істота та обʼєкт в області',
									cost: 9,
									sections: [
										FactoryLogic.createAbilitySectionText(`
Область заморожена в часі до початку вашого наступного ходу. Кожний обʼєкт в області скуттий і не може впасти, поки ефект не закінчиться. До завершення ефекту істоти в області, які знижені до 0 Витривалості або мали б померти, залишаються живими, а обʼєкти в області, які знижені до 0 Витривалості, залишаються не зруйнованими.

Здійсніть кидок сили, що таргетує кожного ворога в області.`),
										FactoryLogic.createAbilitySectionRoll(
											FactoryLogic.createPowerRoll({
												characteristic: Characteristic.Presence,
												tier1: 'П < [слабкий], ціль сповільнюється до завершення ефекту',
												tier2: 'П < [середній], швидкість цілі стає 0 до завершення ефекту',
												tier3: 'П < [сильний], ціль скутa до завершення ефекту'
											})
										),
										FactoryLogic.createAbilitySectionField({
											name: 'Виснажений',
											effect: 'Будь-яка істота або обʼєкт, примусово переміщені в області, отримує 2 шкоди скверни за кожну клітинку області, яку вони входять. Істоти та обʼєкти, скуті в області, можуть бути примусово переміщені. Ви скуті до завершення ефекту.'
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
					id: 'talent-sub-1-8-1',
					name: 'Подвоєння годин',
					description: 'Поки у вас 5 або більше Перемог, під час відпочинку ви можете виконати ще одну дію відпочинку.'
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'talent-sub-1-8-2',
						name: 'Стазовий щит',
						description: 'Ви заморожуєте час настільки, щоб перемістити ціль у безпечне місце!',
						type: FactoryLogic.type.createTrigger('Ціль отримує пошкодження.'),
						keywords: [AbilityKeyword.Psionic, AbilityKeyword.Ranged],
						distance: [FactoryLogic.distance.createRanged(10)],
						target: 'На себе або одну істоту чи обʼєкт',
						cost: 3,
						sections: [
							FactoryLogic.createAbilitySectionText('Ціль телепортується на незайняту клітинку поруч із вами, не отримуючи пошкоджень і не зазнаючи додаткових ефектів, якщо це переміщення виводить її з зони небезпеки.'),
							FactoryLogic.createAbilitySectionField({
								name: 'Виснажений',
								effect: 'Ви не можете націлитись на себе, і ви отримуєте пошкодження та будь-які додаткові ефекти замість цілі.'
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
					id: 'talent-sub-1-9-1',
					name: 'Здібність традиції 9 рівня',
					options: [
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'talent-sub-1-9-1a',
									name: 'Поле прискорення',
									description: 'Ви примусово втискаєте більше миттєвостей у критичну точку часу, добре знаючи, що, можливо, доведеться вкрасти частину власних.',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Chronopathy, AbilityKeyword.Psionic, AbilityKeyword.Ranged],
									distance: [FactoryLogic.distance.createRanged(5)],
									target: 'Три союзники',
									cost: 11,
									sections: [
										FactoryLogic.createAbilitySectionText('Кожна ціль може використати будь-яку доступну їй основну дію як безкоштовну тригерну дію, але вона втрачає свою основну дію в наступному ході.'),
										FactoryLogic.createAbilitySectionField({
											name: 'Виснажений',
											effect: 'Зробіть кидок сили, що таргетує вас та кожного ворога в межах дистанції.'
										}),
										FactoryLogic.createAbilitySectionRoll(
											FactoryLogic.createPowerRoll({
												characteristic: Characteristic.Presence,
												tier1: '4 шкоди скверни; сповільнений (рят. кидок закінчує)',
												tier2: '6 шкоди скверни; сповільнений (рят. кидок закінчує)',
												tier3: '10 шкоди скверни; сповільнений (рят. кидок закінчує)'
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
									id: 'talent-sub-1-9-1b',
									name: 'Запозичити у майбутнього',
									description: 'Ви покладаєтесь на майбутні героїчні вчинки, щоб допомогти собі зараз.',
									type: FactoryLogic.type.createManeuver(),
									keywords: [AbilityKeyword.Area, AbilityKeyword.Chronopathy, AbilityKeyword.Psionic],
									distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 2 })],
									target: 'Кожен союзник у зоні',
									cost: 11,
									sections: [
										FactoryLogic.createAbilitySectionText('Цілі ділять між собою 6 одиниць свого Героїчного ресурсу за вашим розсудом. Жодна ціль не може отримати більше ніж 3 одиниці свого Героїчного ресурсу таким способом. Після використання цієї здібності ви не можете отримувати ясність до кінця наступного раунду бою.')
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
