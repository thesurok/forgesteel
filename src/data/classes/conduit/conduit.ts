import { AbilityDistanceType } from '@/enums/ability-distance-type';
import { AbilityKeyword } from '@/enums/ability-keyword';
import { Characteristic } from '@/enums/characteristic';
import { FactoryLogic } from '@/logic/factory-logic';
import { FeatureField } from '@/enums/feature-field';
import { HeroClass } from '@/models/class';
import { KitArmor } from '@/enums/kit-armor';
import { KitWeapon } from '@/enums/kit-weapon';
import { PerkList } from '@/enums/perk-list';
import { SkillList } from '@/enums/skill-list';

export const conduit: HeroClass = {
	id: 'class-conduit',
	name: 'Провідник',
	description: `
Сила богів тече через вас! Як посудина божественної сили, ви не просто підтримуєте союзників у бою. Ви робите їх ефективнішими, одночасно посилаючи божественну енергію на ворогів. Хоч божество або святий, якому ви служите, може мати інших вірних і кліриків, ви особливі серед поклонників і отримуєте здібності від найвищого джерела.

Як провідник, ви зціляєте й підсилюєте союзників і послаблюєте ворогів, караючи їх божественною магією. Іскра божественності в вас сяє, наповнюючи ворогів благоговінням та роблячи вас уважнішим і обізнанішим.`,
	type: 'standard',
	subclassName: '',
	subclassCount: 0,
	primaryCharacteristicsOptions: [
		[Characteristic.Intuition]
	],
	primaryCharacteristics: [],
	featuresByLevel: [
		{
			level: 1,
			features: [
				FactoryLogic.feature.createBonus({
					id: 'conduit-stamina',
					field: FeatureField.Stamina,
					value: 18,
					valuePerLevel: 6
				}),
				FactoryLogic.feature.createBonus({
					id: 'conduit-recoveries',
					field: FeatureField.Recoveries,
					value: 8
				}),
				FactoryLogic.feature.createHeroicResource({
					id: 'conduit-resource',
					name: 'Благочестя',
					gains: [
						{
							tag: 'start',
							trigger: 'Початок вашого ходу',
							value: '1d3'
						}
					]
				}),
				FactoryLogic.feature.createSkillChoice({
					id: 'conduit-1-1',
					listOptions: [SkillList.Interpersonal, SkillList.Lore],
					count: 2
				}),
				FactoryLogic.feature.createDomainChoice({
					id: 'conduit-1-2',
					count: 2
				}),
				FactoryLogic.feature.createPackage({
					id: 'conduit-1-3b',
					name: 'Молитва',
					description: `
Ви можете отримати більше благочестя, молячись богам — але будьте обережні! Це легко може викликати їхнє обурення, адже богам не подобається, коли їх дратують. Перед тим як кидати кістки для отримання благочестя на початку вашого ходу, ви можете помолитися (дій не вимагається). Якщо ви це зробите, ваш кидок отримує такі додаткові ефекти:

* Якщо випадає 1, ви отримуєте на 1 благочестя більше, але розгнівуєте богів! Ви отримуєте психічну шкоду в розмірі 1d6 + ваш рівень, яку неможливо зменшити будь-яким чином.
* Якщо випадає 2, ви отримуєте на 1 благочестя більше.
* Якщо випадає 3, ви отримуєте на 2 благочестя більше і можете активувати будь-який ефект домену на ваш вибір.`,
					tag: 'conduit-prayer'
				}),
				FactoryLogic.feature.createDomainFeature({
					id: 'conduit-1-4',
					name: 'Особливість домену 1-го рівня',
					level: 1
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'conduit-1-5',
						name: 'Благодать зцілення',
						description: 'Ваша божественна енергія відновлює праведних.',
						type: FactoryLogic.type.createManeuver(),
						keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged],
						distance: [FactoryLogic.distance.createRanged(10)],
						target: 'На себе або одного союзника',
						sections: [
							FactoryLogic.createAbilitySectionText('Ціль може витратити Відновлення.'),
							FactoryLogic.createAbilitySectionSpend({
								repeatable: true,
								effect: `
		За кожне витрачене благочестя ви можете обрати одне з наступних посилень:

		* Ви можете націлитися на одного додаткового союзника в межах дистанції.
		* Ви можете припинити один ефект на цілі, який припиняється рят. кидком або який закінчується наприкінці її ходу.
		* Персонаж, що лежить, може піднятися.
		* Ціль може витратити ще 1 Відновлення.`
							})
						]
					})
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'conduit-1-6',
						name: 'Промінь гніву',
						description: 'Ви випускаєте спалах священного світла на ворога.',
						type: FactoryLogic.type.createMain({ qualifiers: ['can be used as a ranged free strike'], freeStrike: true }),
						keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged, AbilityKeyword.Strike],
						distance: [FactoryLogic.distance.createRanged(10)],
						target: 'Одна істота або предмет',
						sections: [
							FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
								characteristic: [Characteristic.Intuition],
								tier1: '2 + І шкоди',
								tier2: '4 + І шкоди',
								tier3: '6 + І шкоди'
							})),
							FactoryLogic.createAbilitySectionText('Ця здатність може наносити священну шкоду.')
						]
					})
				}),
				FactoryLogic.feature.createChoice({
					id: 'conduit-1-7',
					name: 'Тригерна дія',
					options: [
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'conduit-1-7a',
									name: 'Слово керівництва',
									description: 'Ви наповнюєте божественною енергією союзника, який атакує.',
									type: FactoryLogic.type.createTrigger('Ціль робить кидок для здібності, що завдає шкоди.'),
									keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged],
									distance: [FactoryLogic.distance.createRanged(10)],
									target: 'Один союзник',
									sections: [
										FactoryLogic.createAbilitySectionText('Кидок сили отримує перевагу.'),
										FactoryLogic.createAbilitySectionSpend({
											effect: 'Кидок сили має подвійну перевагу.'
										})
									]
								})
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'conduit-1-7b',
									name: 'Слово суду',
									description: 'Ваше священне слово ослаблює силу атакуючого ворога.',
									type: FactoryLogic.type.createTrigger('Ціль могла б отримати шкоду від здібності, яка використовує кидок сили.'),
									keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged],
									distance: [FactoryLogic.distance.createRanged(10)],
									target: 'Один союзник',
									sections: [
										FactoryLogic.createAbilitySectionText('Кидок сили отримує шкоду (bane) проти цілі.'),
										FactoryLogic.createAbilitySectionSpend({
											effect: 'Кидок сили має подвійну шкоду (double bane) проти цілі.'
										})
									]
								})
							}),
							value: 1
						}
					]
				}),
				FactoryLogic.feature.createChoice({
					id: 'conduit-1-8',
					name: 'Молитва',
					options: [
						{
							feature: FactoryLogic.feature.createAbilityDamage({
								id: 'conduit-1-8a',
								name: 'Молитва руйнування',
								description: 'Ваш бог наповнює вас гнівом.',
								keywords: [AbilityKeyword.Magic],
								value: 1
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createAbilityDistance({
								id: 'conduit-1-8b',
								name: 'Молитва дальності',
								description: 'Ваш бог благословляє вас здатністю розширювати дію вашої божественної магії.',
								keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged],
								value: 2
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createMultiple({
								id: 'conduit-1-8c',
								name: 'Молитва військової майстерності',
								description: 'Ваш бог дає вашому розуму тренування солдата. Ви можете одягати легку броню і ефективно володіти легкою зброєю, навіть якщо у вас немає набору. Ви можете використовувати скарби з легкою бронею та легкими зброями. Якщо у вас є набір, ви не можете взяти це благословення.',
								features: [
									FactoryLogic.feature.create({
										id: 'conduit-1-8da',
										name: 'Молитва військової майстерності',
										description: 'Поки ви володієте легкою зброєю, ви отримуєте +1 до шкоди від здатностей зі зброєю, включно з безкоштовними ударами.'
									}),
									FactoryLogic.feature.createBonus({
										id: 'conduit-1-8db',
										field: FeatureField.Stamina,
										valuePerEchelon: 3
									}),
									FactoryLogic.feature.createProficiency({
										id: 'conduit-1-8dc',
										weapons: [KitWeapon.Light],
										armor: [KitArmor.Light]
									})
								]
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createMultiple({
								id: 'conduit-1-8d',
								name: 'Молитва швидкості',
								description: 'Ваш бог благословляє ваше тіло і наповнює його божественною швидкістю.',
								features: [
									FactoryLogic.feature.createBonus({
										id: 'conduit-1-8ca',
										field: FeatureField.Speed,
										value: 1
									}),
									FactoryLogic.feature.createBonus({
										id: 'conduit-1-8cb',
										field: FeatureField.Disengage,
										value: 1
									})
								]
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createMultiple({
								id: 'conduit-1-8e',
								name: 'Молитва сталі',
								description: 'Ваш бог наповнює ваше тіло світлом творіння, роблячи вас менш вразливим до пошкоджень і переміщення.',
								features: [
									FactoryLogic.feature.createBonus({
										id: 'conduit-1-8ea',
										field: FeatureField.Stamina,
										valuePerEchelon: 6
									}),
									FactoryLogic.feature.createBonus({
										id: 'conduit-1-8eb',
										field: FeatureField.Stability,
										value: 1
									})
								]
							}),
							value: 1
						}
					]
				}),
				FactoryLogic.feature.createChoice({
					id: 'conduit-1-9',
					name: 'Оберіг Провідника',
					options: [
						{
							feature: FactoryLogic.feature.create({
								id: 'conduit-1-9a',
								name: 'Бастіонний оберіг',
								description: 'Ваш бог дарує вам священний вигляд, що захищає вас постійно. Ви отримуєте +1 до рятувальних кидків.'
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.create({
								id: 'conduit-1-9b',
								name: 'Оберіг швидкості',
								description: 'Боги наділяють вас божественною швидкістю. Коли сусідня істота завдає вам шкоди, після завдання шкоди ви можете зміститися на число клітин, рівне вашому показнику Інтуїції.'
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.create({
								id: 'conduit-1-9c',
								name: 'Оберіг притулку',
								description: 'У відповідь на агресію ворога ваш бог захищає вас. Коли інша істота завдає вам шкоди, ця істота не може цілитися по вам ударом, поки ви не зашкодите їй або одному з її союзників, або до кінця її наступного ходу.'
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.create({
								id: 'conduit-1-9d',
								name: 'Оберіг духа',
								description: 'Невидимі духи оточують вас, якщо вам завдано шкоди. Коли сусідня істота завдає вам шкоди, вона отримує шкоду скверною, рівну вашому показнику Інтуїції.'
							}),
							value: 1
						}
					]
				}),
				FactoryLogic.feature.createClassAbilityChoice({
					id: 'conduit-1-10',
					cost: 'signature',
					count: 2
				}),
				FactoryLogic.feature.createClassAbilityChoice({
					id: 'conduit-1-11',
					cost: 3
				}),
				FactoryLogic.feature.createClassAbilityChoice({
					id: 'conduit-1-12',
					cost: 5
				})
			]
		},
		{
			level: 2,
			features: [
				FactoryLogic.feature.create({
					id: 'conduit-2-1',
					name: 'Небесні списки',
					description: 'Божество усвідомлює ваш зростаючий вплив, що полегшує привернення його уваги і сили, коли ви зцілюєте союзників. Коли ви дозволяєте іншій істоті витратити відновлення, ви також можете витратити відновлення.'
				}),
				FactoryLogic.feature.createPerk({
					id: 'conduit-2-2',
					lists: [PerkList.Crafting, PerkList.Lore, PerkList.Supernatural]
				}),
				FactoryLogic.feature.createDomainFeature({
					id: 'conduit-2-3',
					name: 'Особливість домену 2-го рівня',
					description: 'Ви отримуєте особливість домену 1-го рівня і можливість вибрати навичку для домену, який ви обрали на 1-му рівні, але особливість якого ви тоді не взяли.',
					level: 1
				}),
				FactoryLogic.feature.createDomainFeature({
					id: 'conduit-2-4',
					name: 'Здібність домену 2-го рівня',
					level: 2
				})
			]
		},
		{
			level: 3,
			features: [
				FactoryLogic.feature.create({
					id: 'conduit-3-1',
					name: 'Мале диво',
					description: `
Як діяльність під час відпочинку ви можете виконати релігійний ритуал і благати богів відновити мертву істоту до життя. Ви повинні мати принаймні половину останків істоти, і вона має померти протягом останніх 24 годин від ефекту, що не пов'язаний зі старістю. Душа істоти повинна бути готова повернутися до життя, щоб ритуал спрацював. Якщо вона не готова, ви інтуїтивно відчуєте це на початку виконання ритуалу і можете відразу припинити його.

Істота з готовою душею повертається до життя в кінці відпочинку з повною Витривалістю і половиною своїх Відновлень. Ви відновлюєте тільки половину своїх Відновлень в кінці відпочинку.`,
				}),
				FactoryLogic.feature.createClassAbilityChoice({
					id: 'conduit-3-2',
					cost: 7
				})
			]
		},
		{
			level: 4,
			features: [
				FactoryLogic.feature.create({
					id: 'conduit-4-1',
					name: 'Благословенний домен',
					description: 'Коли ви отримуєте благочестя від ефекту домену, ви отримуєте додаткове 1 благочестя.'
				}),
				FactoryLogic.feature.createCharacteristicBonus({
					id: 'conduit-4-1a',
					name: 'Збільшення характеристики: Інтуїція',
					description: 'Ваш показник Інтуїції збільшується до 3.',
					characteristic: Characteristic.Intuition,
					value: 1
				}),
				FactoryLogic.feature.createChoice({
					id: 'conduit-4-1b',
					name: 'Збільшення характеристики: Додатковий вибір',
					description: 'Крім того, ви можете збільшити один із показників ваших характеристик на 1, до максимуму 3.',
					options: [
						{
							feature: FactoryLogic.feature.createCharacteristicBonus({
								id: 'conduit-4-1b-1',
								characteristic: Characteristic.Agility,
								value: 1
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createCharacteristicBonus({
								id: 'conduit-4-1b-2',
								characteristic: Characteristic.Might,
								value: 1
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createCharacteristicBonus({
								id: 'conduit-4-1b-3',
								characteristic: Characteristic.Reason,
								value: 1
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createCharacteristicBonus({
								id: 'conduit-4-1b-4',
								characteristic: Characteristic.Presence,
								value: 1
							}),
							value: 1
						}
					]
				}),
				FactoryLogic.feature.createPerk({
					id: 'conduit-4-2'
				}),
				FactoryLogic.feature.createSkillChoice({
					id: 'conduit-4-3',
					listOptions: [SkillList.Crafting, SkillList.Exploration, SkillList.Interpersonal, SkillList.Intrigue, SkillList.Lore],
					count: 1
				}),
				FactoryLogic.feature.createDomainFeature({
					id: 'conduit-4-4',
					name: 'Особливість домену 4-го рівня',
					level: 4
				})
			]
		},
		{
			level: 5,
			features: [
				FactoryLogic.feature.createDomainFeature({
					id: 'conduit-5-1',
					name: 'Особливість домену 5-го рівня',
					description: 'Ви отримуєте особливість домену 4-го рівня для домену, особливість якого ви не вибрали на тому рівні.',
					level: 4
				}),
				FactoryLogic.feature.createClassAbilityChoice({
					id: 'conduit-5-2',
					cost: 9
				})
			]
		},
		{
			level: 6,
			features: [
				FactoryLogic.feature.create({
					id: 'conduit-6-1',
					name: 'Зростаючий святий',
					description: `
Вас наповнює сила, яку ваше божество зберігає для своїх найгідніших інструментів. Ви маєте такі переваги:

* Ви отримуєте перевагу на перевірках Присутності для взаємодії з іншими істотами.
* Коли ви завдаєте шкоди ворогу, ви можете витратити Відновлення.
* Ви маєте імунітет до скверни 10 або імунітет до священної шкоди 10 (на ваш вибір).
* Ваш одяг і спорядження змінюються так, щоб відображати ваш статус обраного чемпіона вашого божества, наприклад звичайні ризи стають золотими шатами, або простий кинджал перетворюється на витончено оздоблений клинок.`
				}),
				FactoryLogic.feature.createPerk({
					id: 'conduit-6-2',
					lists: [PerkList.Crafting, PerkList.Lore, PerkList.Supernatural]
				}),
				FactoryLogic.feature.createDomainFeature({
					id: 'conduit-6-3',
					name: 'Здібність домену 6-го рівня',
					level: 6
				})
			]
		},
		{
			level: 7,
			features: [
				FactoryLogic.feature.createCharacteristicBonus({
					id: 'conduit-7-1a',
					characteristic: Characteristic.Might,
					value: 1
				}),
				FactoryLogic.feature.createCharacteristicBonus({
					id: 'conduit-7-1b',
					characteristic: Characteristic.Agility,
					value: 1
				}),
				FactoryLogic.feature.createCharacteristicBonus({
					id: 'conduit-7-1c',
					characteristic: Characteristic.Reason,
					value: 1
				}),
				FactoryLogic.feature.createCharacteristicBonus({
					id: 'conduit-7-1d',
					characteristic: Characteristic.Intuition,
					value: 1
				}),
				FactoryLogic.feature.createCharacteristicBonus({
					id: 'conduit-7-1e',
					characteristic: Characteristic.Presence,
					value: 1
				}),
				FactoryLogic.feature.createHeroicResourceGain({
					id: 'conduit-7-2',
					name: 'Нагорода вірних',
					tag: 'start 2',
					trigger: 'Початок вашого ходу',
					value: '1d3 + 1'
				}),
				FactoryLogic.feature.createSkillChoice({
					id: 'conduit-7-3',
					listOptions: [SkillList.Crafting, SkillList.Exploration, SkillList.Interpersonal, SkillList.Intrigue, SkillList.Lore]
				}),
				FactoryLogic.feature.createDomainFeature({
					id: 'conduit-7-4',
					name: 'Особливість домену 7-го рівня',
					level: 7
				})
			]
		},
		{
			level: 8,
			features: [
				FactoryLogic.feature.createPerk({
					id: 'conduit-8-1'
				}),
				FactoryLogic.feature.createDomainFeature({
					id: 'conduit-8-2',
					name: 'Особливість домену 8-го рівня',
					description: 'Ви отримуєте особливість домену 7-го рівня для домену, особливість якого ви не вибрали на тому рівні.',
					level: 7
				}),
				FactoryLogic.feature.createClassAbilityChoice({
					id: 'conduit-8-3',
					cost: 11
				})
			]
		},
		{
			level: 9,
			features: [
				FactoryLogic.feature.create({
					id: 'conduit-9-1',
					name: 'Меч віри',
					description: 'Кожного разу, коли ви завершите відпочинок, ви можете вибрати охочого героя-союзника, який завершив відпочинок разом з вами. Цей союзник отримує переваги вашої особливості "Зростаючий святий" до того моменту, коли ви завершите наступний відпочинок. Крім того, ви можете витратити благочестя як безкоштовний маневр, щоб дати герою 1 одиницю їхнього героїчного ресурсу за кожні 2 витрачені благочестя.'
				}),
				FactoryLogic.feature.create({
					id: 'conduit-9-2',
					name: 'Освячений',
					description: 'Ваш бог підносить силу, що тече через вас. Ваші показники характеристик вважаються на 1 вищими при протистоянні потужностям. Крім того, поки у вас 5 або більше Перемог, ви говорите голосом вашого божества. Ви маєте подвійну перевагу на перевірках Присутності для впливу на інших істот.'
				}),
				FactoryLogic.feature.createDomainFeature({
					id: 'conduit-9-3',
					name: 'Здібність домену 9-го рівня',
					level: 9
				})
			]
		},
		{
			level: 10,
			features: [
				FactoryLogic.feature.create({
					id: 'conduit-10-1',
					name: 'Аватар',
					description: `
Ви тепер аватар вашого божества! Коли ви використовуєте здатність "Молитва", на вас може впливати до трьох молитов одночасно, і ви можете змінювати усі ці молитви та свій оберіг як діяльність під час відпочинку. Ви також можете використати маневр, щоб активувати один із ефектів вашого домену без потреби молитися.

Крім того, коли ви берете відпочинок, ви можете відкрити портал, щоб відпочити в присутності вашого божества та взяти з собою союзників. Коли ви це робите, ви можете поставити вашому божеству три питання, на які Директор повинен відповісти чесно, якщо ваше божество знає відповіді (хоча воно може відповісти загадково або неповно). Коли ви завершуєте відпочинок, ви та ваші союзники можете з'явитися в будь-якому місці часопростору, де хтось поклоняється вашому божеству.`
				}),
				FactoryLogic.feature.createCharacteristicBonus({
					id: 'conduit-10-2a',
					name: 'Збільшення характеристики: Інтуїція',
					description: 'Ваш показник Інтуїції збільшується до 5.',
					characteristic: Characteristic.Intuition,
					value: 1
				}),
				FactoryLogic.feature.createChoice({
					id: 'conduit-10-2b',
					name: 'Збільшення характеристики: Додатковий вибір',
					description: 'Крім того, ви можете збільшити один із показників ваших характеристик на 1, до максимуму 5.',
					options: [
						{
							feature: FactoryLogic.feature.createCharacteristicBonus({
								id: 'shadow-10-1b-1',
								characteristic: Characteristic.Might,
								value: 1
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createCharacteristicBonus({
								id: 'shadow-10-1b-2',
								characteristic: Characteristic.Agility,
								value: 1
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createCharacteristicBonus({
								id: 'shadow-10-1b-3',
								characteristic: Characteristic.Reason,
								value: 1
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createCharacteristicBonus({
								id: 'shadow-10-1b-4',
								characteristic: Characteristic.Presence,
								value: 1
							}),
							value: 1
						}
					]
				}),
				FactoryLogic.feature.createHeroicResource({
					id: 'conduit-10-3',
					name: 'Божественна сила',
					type: 'epic',
					gains: [
						{
							tag: '',
							trigger: 'Завершення відпочинку',
							value: 'Отримання досвіду'
						}
					],
					description: `
Ви можете витрачати Божественну силу на свої здібності так само, як благочестя.

Крім того, ви можете витрачати Божественну силу як благочестя, щоб використовувати будь-які здібності провідника, яких у вас немає, оскільки боги відповідають на ваші молитви тимчасовими та унікальними дарами. Якщо ви використовуєте здібність провідника, якої у вас немає, і яка зазвичай не коштує благочестя, ви повинні витратити 1 одиницю Божественної сили, щоб її використати.

Божественна сила зберігається, поки ви її не витратите.`
				}),
				FactoryLogic.feature.create({
					id: 'conduit-10-4',
					name: 'Найбільш благочестивий',
					description: 'Коли на початку вашого ходу в бою ви кидаєте на благочестя і молитесь, ви отримуєте +1 благочестя.'
				}),
				FactoryLogic.feature.createPerk({
					id: 'conduit-10-5',
					lists: [PerkList.Crafting, PerkList.Lore, PerkList.Supernatural]
				}),
				FactoryLogic.feature.createSkillChoice({
					id: 'conduit-10-6',
					listOptions: [SkillList.Crafting, SkillList.Exploration, SkillList.Interpersonal, SkillList.Intrigue, SkillList.Lore]
				})
			]
		}
	],
	abilities: [
		FactoryLogic.createAbility({
			id: 'conduit-ability-1',
			name: 'Благодатне світло',
			description: 'Палаюче сяйво падає на вашого ворога, передаючи частину його енергії ближньому союзнику.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged, AbilityKeyword.Strike],
			distance: [FactoryLogic.distance.createRanged(10)],
			target: 'Одна істота або предмет',
			cost: 'signature',
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Intuition],
						tier1: '3 + І священної шкоди',
						tier2: '5 + І священної шкоди',
						tier3: '8 + І священної шкоди'
					})
				),
				FactoryLogic.createAbilitySectionText('Один союзник у межах дистанції отримує кількість сплесків, рівну рівню результату вашого кидка сили.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'conduit-ability-2',
			name: 'Висмоктування',
			description: 'Ви відсмоктуєте енергію з цілі і відновлюєте здоров’я собі або союзнику.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Magic, AbilityKeyword.Melee, AbilityKeyword.Strike],
			distance: [FactoryLogic.distance.createMelee()],
			target: 'Одна істота',
			cost: 'signature',
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Intuition],
						tier1: '2 + І шкоди скверною',
						tier2: '5 + І шкоди скверною',
						tier3: '7 + І шкоди скверною'
					})
				),
				FactoryLogic.createAbilitySectionText('Ви або один союзник у межах дистанції може витратити Відновлення.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'conduit-ability-3',
			name: 'Священний хлист',
			description: 'Щупальце божественної енергії виривається вперед, щоб притягнути вашого ворога.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged, AbilityKeyword.Strike],
			distance: [FactoryLogic.distance.createRanged(10)],
			target: 'Одна істота або предмет',
			cost: 'signature',
			sections: [
				FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
					characteristic: [Characteristic.Intuition],
					tier1: '3 + І священної шкоди; вертикальне притягнення 2',
					tier2: '5 + І священної шкоди; вертикальне притягнення 3',
					tier3: '8 + І священної шкоди; вертикальне притягнення 4'
				}))
			]
		}),
		FactoryLogic.createAbility({
			id: 'conduit-ability-4',
			name: 'Падіння світла',
			description: 'Дощ священного світла обпікає ваших ворогів і переміщує союзників.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
			distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 2 })],
			target: 'Кожен ворог у зоні',
			cost: 'signature',
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Intuition],
						tier1: '2 священної шкоди',
						tier2: '3 священної шкоди',
						tier3: '5 священної шкоди'
					})
				),
				FactoryLogic.createAbilitySectionText('Ви можете телепортувати себе та кожного союзника в зоні на незайняті клітини цієї зони.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'conduit-ability-5',
			name: 'Жертовна пропозиція',
			description: 'Божественна магія терзає вашого ворога і захищає ближнього союзника.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged, AbilityKeyword.Strike],
			distance: [FactoryLogic.distance.createRanged(10)],
			target: 'Одна істота',
			cost: 'signature',
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Intuition],
						tier1: '2 + І шкоди скверною',
						tier2: '4 + І шкоди скверною',
						tier3: '6 + І шкоди скверною'
					})
				),
				FactoryLogic.createAbilitySectionText('Виберіть себе або одного союзника у межах дистанції. Цей персонаж може накласти шкоду (bane) на один кидок сили, зроблений проти нього до кінця його наступного ходу.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'conduit-ability-6',
			name: 'Приголомшливе прокляття',
			description: 'Удар суду дезорієнтує вашого ворога.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Magic, AbilityKeyword.Melee, AbilityKeyword.Strike],
			distance: [FactoryLogic.distance.createMelee()],
			target: 'Одна істота або предмет',
			cost: 'signature',
			sections: [
				FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
					characteristic: [Characteristic.Intuition],
					tier1: '3 + І священної шкоди; зсув 1',
					tier2: '5 + І священної шкоди; зсув 2',
					tier3: '8 + І священної шкоди; зсув 3'
				}))
			]
		}),
		FactoryLogic.createAbility({
			id: 'conduit-ability-7',
			name: 'Молитва воїна',
			description: 'Ваша швидка молитва надає агресивну божественну енергію союзнику, який веде ближній бій.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged, AbilityKeyword.Strike],
			distance: [FactoryLogic.distance.createRanged(10)],
			target: 'Одна істота',
			cost: 'signature',
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Intuition],
						tier1: '3 + І священної шкоди',
						tier2: '6 + І священної шкоди',
						tier3: '9 + І священної шкоди'
					})
				),
				FactoryLogic.createAbilitySectionText('Ви або один союзник у межах дистанції отримує тимчасову Витривалість, рівну вашому показнику Інтуїції.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'conduit-ability-8',
			name: 'Згасання',
			description: 'Промінь священної енергії висмоктує життя з ворога.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged, AbilityKeyword.Strike],
			distance: [FactoryLogic.distance.createRanged(10)],
			target: 'Одна істота або предмет',
			cost: 'signature',
			sections: [
				FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
					characteristic: [Characteristic.Intuition],
					tier1: '3 + І шкоди скверною; П < [слабкий], ціль отримує шкоду (bane) на свій наступний кидок сили',
					tier2: '6 + І шкоди скверною; П < [середній], ціль отримує шкоду (bane) на свій наступний кидок сили',
					tier3: '9 + І шкоди скверною; П < [сильний], ціль отримує шкоду (bane) на свій наступний кидок сили'
				}))
			]
		}),
		FactoryLogic.createAbility({
			id: 'conduit-ability-9',
			name: 'Заклик грому',
			description: 'Ви просите свого святого про грім, і ваша молитва почута.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Area, AbilityKeyword.Magic, AbilityKeyword.Ranged],
			distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Cube, value: 3, within: 10 })],
			target: 'Кожен ворог у зоні',
			cost: 3,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Intuition],
						tier1: '2 звукової шкоди; штовх 1',
						tier2: '3 звукової шкоди; штовх 2',
						tier3: '5 звукової шкоди; штовх 3'
					})
				),
				FactoryLogic.createAbilitySectionText('Ви можете штовхнути кожного охочого союзника в зоні на ту саму відстань, ігноруючи стійкість.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'conduit-ability-10',
			name: 'Джерело гніву',
			description: 'Сяючий стовп священного світла з’являється на полі бою, вражаючи сусідніх ворогів.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged],
			distance: [FactoryLogic.distance.createRanged(10)],
			target: 'Особливе',
			cost: 3,
			sections: [
				FactoryLogic.createAbilitySectionText('Ви викликаєте духа розміру 2, якому не можна завдати шкоди, і який з’являється на незайнятій клітині в межах дистанції. Дух триває до кінця вашого наступного ходу. Ви та ваші союзники можете рухатися через клітину духа, а вороги не можуть. Будь-який ворог, який уперше за раунд бою переміщується в межі 2 клітин від духа або починає там свій хід, отримує священну шкоду, рівну вашому показнику Інтуїції.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'conduit-ability-11',
			name: 'Молот суду',
			description: 'Ваша божественна лють — молот, що падає на неправедників.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged, AbilityKeyword.Strike],
			distance: [FactoryLogic.distance.createRanged(10)],
			target: 'Одна істота або предмет',
			cost: 3,
			sections: [
				FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
					characteristic: [Characteristic.Intuition],
					tier1: '3 + I holy damage; Л < [слабкий], prone',
					tier2: '6 + I holy damage; Л < [середній], prone',
					tier3: '9 + I holy damage; Л < [сильний], prone and can’t stand (save ends)'
				}))
			]
		}),
		FactoryLogic.createAbility({
			id: 'conduit-ability-12',
			name: 'Насильство не допоможе',
			description: 'Після удару священної блискавки ваш ворог подумає двічі, перш ніж наступного разу атакувати.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged, AbilityKeyword.Strike],
			distance: [FactoryLogic.distance.createRanged(10)],
			target: 'Одна істота',
			cost: 3,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Intuition],
						tier1: '3 + І блискавичної шкоди',
						tier2: '6 + І блискавичної шкоди',
						tier3: '9 + І блискавичної шкоди'
					})
				),
				FactoryLogic.createAbilitySectionText('Перший раз у ході, коли ціль завдає шкоди іншій істоті, ціль цієї здатності отримує 1d10 блискавичної шкоди (рят. кидок припиняє).')
			]
		}),
		FactoryLogic.createAbility({
			id: 'conduit-ability-13',
			name: 'Прокляття скверни',
			description: 'Проклятий вами, ваш ворог отримує більше шкоди від ваших союзників.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged, AbilityKeyword.Strike],
			distance: [FactoryLogic.distance.createRanged(10)],
			target: 'Одна істота або предмет',
			cost: 5,
			sections: [
				FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
					characteristic: [Characteristic.Intuition],
					tier1: '3 + І шкоди скверною; С < [слабкий], вразливість до шкоди 5 (рят. кидок припиняє)',
					tier2: '6 + І шкоди скверною; С < [середній], вразливість до шкоди 5 (рят. кидок припиняє)',
					tier3: '9 + І шкоди скверною; С < [сильний], вразливість до шкоди 5 (рят. кидок припиняє)'
				}))
			]
		}),
		FactoryLogic.createAbility({
			id: 'conduit-ability-14',
			name: 'Прокляття жаху',
			description: 'Страх божественного суду переповнює вашого ворога.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged, AbilityKeyword.Strike],
			distance: [FactoryLogic.distance.createRanged(10)],
			target: 'Одна істота',
			cost: 5,
			sections: [
				FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
					characteristic: [Characteristic.Intuition],
					tier1: '6 + І священної шкоди; І < [слабкий], переляканий (рят. кидок припиняє)',
					tier2: '9 + І священної шкоди; І < [середній], переляканий (рят. кидок припиняє)',
					tier3: '13 + І священної шкоди; І < [сильний], переляканий (рят. кидок припиняє)'
				}))
			]
		}),
		FactoryLogic.createAbility({
			id: 'conduit-ability-15',
			name: 'Віра — наша броня',
			description: 'Броня героїв сяє золотистим світлом, надаючи божественний захист.',
			type: FactoryLogic.type.createManeuver(),
			keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged],
			distance: [FactoryLogic.distance.createRanged(10)],
			target: 'Чотири союзники',
			cost: 5,
			sections: [
				FactoryLogic.createAbilitySectionText('Ви можете спрямувати цю здатність на себе замість одного союзника.'),
				FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
					characteristic: [Characteristic.Intuition],
					tier1: 'Ціль отримує 5 тимчасової Витривалості',
					tier2: 'Ціль отримує 10 тимчасової Витривалості',
					tier3: 'Ціль отримує 15 тимчасової Витривалості'
				}))
			]
		}),
		FactoryLogic.createAbility({
			id: 'conduit-ability-16',
			name: 'Проповідь благодаті',
			description: 'Ви надихаєте союзників оповідями про великі діла вашого святого.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
			distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 4 })],
			target: 'Кожен союзник у зоні',
			cost: 5,
			sections: [
				FactoryLogic.createAbilitySectionText('Кожна ціль може витратити Відновлення. Крім того, кожна ціль може використати безкоштовну тригерну дію, щоб завершити один ефект на собі, який завершується рят. кидком або наприкінці їхнього ходу, або щоб піднятися, якщо лежить.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'conduit-ability-17',
			name: 'Страх богів',
			description: 'Ваша божественна магія змушує істоту з’являтися в образі того, чого найбільше бояться ваші вороги.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Area, AbilityKeyword.Magic, AbilityKeyword.Ranged],
			distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Cube, value: 5, within: 10 })],
			target: 'Кожен ворог у зоні',
			cost: 7,
			sections: [
				FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
					characteristic: [Characteristic.Intuition],
					tier1: '6 психічної шкоди; І < [слабкий], переляканий (рят. кидок припиняє)',
					tier2: '9 психічної шкоди; І < [середній], переляканий (рят. кидок припиняє)',
					tier3: '13 психічної шкоди; І < [сильний], переляканий (рят. кидок припиняє)'
				})),
				FactoryLogic.createAbilitySectionText('Кожна ціль перелякана вами або істотою на ваш вибір у межах дистанції.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'conduit-ability-18',
			name: 'Мантія святого',
			description: 'Союзник отримує посилений золотий плащ.',
			type: FactoryLogic.type.createManeuver(),
			keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged],
			distance: [FactoryLogic.distance.createRanged(10)],
			target: 'Один союзник',
			cost: 7,
			sections: [
				FactoryLogic.createAbilitySectionText('Ціль отримує 20 тимчасової Витривалості і 3 сплески.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'conduit-ability-19',
			name: 'Відсмоктування душі',
			description: 'Промінь енергії зв’язує ворога та друга, висмоктуючи життя з одного, щоб зцілити іншого.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged, AbilityKeyword.Strike],
			distance: [FactoryLogic.distance.createRanged(10)],
			target: 'Один ворог',
			cost: 7,
			sections: [
				FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
					characteristic: [Characteristic.Intuition],
					tier1: '7 + І шкоди скверною',
					tier2: '10 + І шкоди скверною',
					tier3: '15 + І шкоди скверною'
				})),
				FactoryLogic.createAbilitySectionText('Один союзник у межах дистанції може витратити будь-яку кількість Відновлень.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'conduit-ability-20',
			name: 'Слова гніву і благодаті',
			description: 'Ваш святий дарує вашим ворогам видіння болю і наповнює союзників лікувальною енергією.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
			distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 5 })],
			target: 'Кожен ворог у зоні',
			cost: 7,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Intuition],
						tier1: '2 священної шкоди',
						tier2: '5 священної шкоди',
						tier3: '7 священної шкоди'
					})
				),
				FactoryLogic.createAbilitySectionText('Кожен союзник у зоні може витратити Відновлення.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'conduit-ability-21',
			name: 'Маяк благодаті',
			description: 'Ви підпалюєте ворога священним сяйвом, винагороджуючи союзників, які атакують його.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged, AbilityKeyword.Strike],
			distance: [FactoryLogic.distance.createRanged(10)],
			target: 'Одна істота',
			cost: 9,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Intuition],
						tier1: '8 + І священної шкоди',
						tier2: '13 + І священної шкоди',
						tier3: '17 + І священної шкоди'
					})
				),
				FactoryLogic.createAbilitySectionText('До кінця зустрічі кожного разу, коли ви або будь-який союзник завдає шкоди цілі за допомогою здатності, та істота може витратити Відновлення. Якщо ціль буде зведена до 0 Витривалості до кінця зустрічі, ви можете використати безкоштовну тригерну дію, щоб перемістити цей ефект на іншу істоту в межах дистанції.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'conduit-ability-22',
			name: 'Покаяння',
			description: '«Якщо ти не вклонешся, боги змусять тебе.»',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Area, AbilityKeyword.Magic, AbilityKeyword.Ranged],
			distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Cube, value: 4, within: 10 })],
			target: 'Кожен ворог у зоні',
			cost: 9,
			sections: [
				FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
					characteristic: [Characteristic.Intuition],
					tier1: '4 шкоди скверною; І < [слабкий], повалений і не може встати (рят. кидок припиняє)',
					tier2: '7 шкоди скверною; І < [середній], повалений і не може встати (рят. кидок припиняє)',
					tier3: '11 шкоди скверною; І < [сильний], повалений і не може встати (рят. кидок припиняє)'
				}))
			]
		}),
		FactoryLogic.createAbility({
			id: 'conduit-ability-23',
			name: 'Святилище',
			description: 'Ви відсилаєте себе або союзника до божественного порталу, щоб миттєво відновити здоров’я.',
			type: FactoryLogic.type.createManeuver(),
			keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged],
			distance: [FactoryLogic.distance.createRanged(10)],
			target: 'На себе або одного союзника',
			cost: 9,
			sections: [
				FactoryLogic.createAbilitySectionText('Ціль видаляється з карти зустрічі до початку їхнього наступного ходу і може витратити будь-яку кількість Відновлень. На початку їхнього ходу ціль з’являється в клітині, яку покинула, або в найближчій незайнятій клітині за її вибором.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'conduit-ability-24',
			name: 'Посудина відплати',
			description: 'Ви наповнюєте себе або союзника відплатною енергією богів, готовою до звільнення.',
			type: FactoryLogic.type.createManeuver(),
			keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged],
			distance: [FactoryLogic.distance.createRanged(10)],
			target: 'На себе або одного союзника',
			cost: 9,
			sections: [
				FactoryLogic.createAbilitySectionText('Вперше, коли ціль опиняється вмираючою або захеканою до кінця зустрічі, кожен ворог у межах 5 клітин від неї отримує 15 священної шкоди.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'conduit-ability-25',
			name: 'Встань!',
			description: 'Ваше божество винагороджує вас або союзника на межі поразки чудесним сплеском сили і рішучості.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged],
			distance: [FactoryLogic.distance.createRanged(10)],
			target: 'На себе або одного союзника',
			cost: 11,
			sections: [
				FactoryLogic.createAbilitySectionText('Ціль може витратити будь-яку кількість Відновлень, може завершити будь-які ефекти на собі, які завершуються рят. кидком або наприкінці її ходу, і може встати, якщо лежить. Крім того, на початку кожного її ходу до кінця зустрічі або поки вона не опиниться вмираючою, ціль отримує 3 сплески.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'conduit-ability-26',
			name: 'Благословення сталі',
			description: 'Захисна аура оберігає ваших союзників від шкоди.',
			type: FactoryLogic.type.createManeuver(),
			keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
			distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Aura, value: 5 })],
			target: 'На себе і кожного союзника в зоні впливу',
			cost: 11,
			sections: [
				FactoryLogic.createAbilitySectionText('До кінця зустрічі будь-який кидок здатності, зроблений проти цілі, отримує bane, а кожна ціль має імунітет до шкоди 5.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'conduit-ability-27',
			name: 'Благословення клинка',
			description: '«Сила богів у вас, друзі. Дозвольте мені її звільнити.»',
			type: FactoryLogic.type.createManeuver(),
			keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
			distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Aura, value: 5 })],
			target: 'На себе і кожного союзника в зоні впливу',
			cost: 11,
			sections: [
				FactoryLogic.createAbilitySectionText('Наприкінці кожного вашого ходу до кінця зустрічі або доки ви не опинитесь вмираючим, кожна ціль отримує 3 сплески.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'conduit-ability-28',
			name: 'Притягнути негідних',
			description: 'Ви викликаєте ангела, який пересуває ворога і лікує ваших союзників.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged, AbilityKeyword.Strike],
			distance: [FactoryLogic.distance.createRanged(10)],
			target: 'Одна істота або предмет',
			cost: 11,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Intuition],
						tier1: '9 + І священної шкоди; зсув 3',
						tier2: '13 + І священної шкоди; зсув 4',
						tier3: '17 + І священної шкоди; зсув 6'
					})
				),
				FactoryLogic.createAbilitySectionText('Кожен союзник, до якого ціль наближається під час примусового переміщення, може витратити Відновлення.')
			]
		})
	],
	subclasses: [],
	level: 1,
	characteristics: []
};
