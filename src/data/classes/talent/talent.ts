import { AbilityDistanceType } from '@/enums/ability-distance-type';
import { AbilityKeyword } from '@/enums/ability-keyword';
import { Characteristic } from '@/enums/characteristic';
import { ConditionType } from '@/enums/condition-type';
import { DamageModifierType } from '@/enums/damage-modifier-type';
import { DamageType } from '@/enums/damage-type';
import { FactoryLogic } from '@/logic/factory-logic';
import { FeatureField } from '@/enums/feature-field';
import { HeroClass } from '@/models/class';
import { KitArmor } from '@/enums/kit-armor';
import { KitWeapon } from '@/enums/kit-weapon';
import { PerkList } from '@/enums/perk-list';
import { SkillList } from '@/enums/skill-list';
import { chronopathy } from '@/data/classes/talent/chronopathy';
import { telekinesis } from '@/data/classes/talent/telekinesis';
import { telepathy } from '@/data/classes/talent/telepathy';

export const talent: HeroClass = {
	id: 'class-talent',
	name: 'Талант',
	description: `
Лише небагато людей народжуються з потенціалом володіти псіонічною силою, але лише ті, хто зазнає пробудження — значної події, що активує здібності таланту — можуть повністю розкрити силу свого розуму. Ви — один із таких: майстер псіоніки й джерело неймовірної сили, створеної чистою силою волі. Ви можете рухати й змінювати матерію, час, гравітацію, закони фізики або розум іншої істоти.

Як талант, ви обмежені лише міццю власного розуму. Проте здатність одночасно володіти кількома силами й змінювати реальність на свій розсуд — це ризик. Кожне проявлення може нашкодити вам, і таланти, що використовують забагато сили занадто швидко, платять смертельною ціною.`,
	type: 'standard',
	subclassName: 'Традиція',
	subclassCount: 1,
	primaryCharacteristicsOptions: [
		[Characteristic.Reason, Characteristic.Presence]
	],
	primaryCharacteristics: [],
	featuresByLevel: [
		{
			level: 1,
			features: [
				FactoryLogic.feature.createBonus({
					id: 'talent-stamina',
					field: FeatureField.Stamina,
					value: 18,
					valuePerLevel: 6
				}),
				FactoryLogic.feature.createBonus({
					id: 'talent-recoveries',
					field: FeatureField.Recoveries,
					value: 8
				}),
				FactoryLogic.feature.createHeroicResource({
					id: 'talent-resource',
					name: 'Ясність',
					gains: [
						{
							tag: 'start',
							trigger: 'Початок вашого ходу',
							value: '1d3'
						},
						{
							tag: 'move',
							trigger: 'Першого разу в кожному раунді бою, коли істоту примусово переміщують',
							value: '1'
						},
					],
					details: `
Ви можете витрачати ясність, якої у вас немає, доводячи цей Героїчний ресурс до відʼємних значень до максимальної відʼємної величини, рівної 1 + ваш показник Розуму. Наприкінці кожного вашого ходу ви отримуєте 1 шкоду за кожну відʼємну одиницю ясності.

Коли ваша ясність менша за 0, ви перебуваєте в стані Напруження. Деякі псіонічні здібності мають додаткові ефекти, якщо ви вже перебуваєте в Напруженні або стаєте ним під час використання здібності. Ефекти напруження можуть продовжувати впливати на вас навіть після того, як ви більше не перебуваєте в Напруженні.

Якщо ви використовуєте здібність з ефектом напруження поза боєм, ви можете прийняти 1d6 шкоди і зазнати ефекту, якщо інакше ви не зазнаєте його.`,
					canBeNegative: true
				}),
				FactoryLogic.feature.createSkillChoice({
					id: 'talent-skill-a',
					count: 2,
					selected: ['Псіоніка', 'Зчитування людини']
				}),
				FactoryLogic.feature.createSkillChoice({
					id: 'talent-skill-c',
					listOptions: [SkillList.Interpersonal, SkillList.Lore],
					count: 2
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'talent-1-2',
						name: 'Укол Розуму',
						description: 'Телепатичний болт миттєво вражає мозок істоти.',
						type: FactoryLogic.type.createMain({ qualifiers: ['can be used as a ranged free strike'], freeStrike: true }),
						keywords: [AbilityKeyword.Psionic, AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Telepathy],
						distance: [FactoryLogic.distance.createRanged(10)],
						target: 'Одна істота',
						sections: [
							FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
								characteristic: [Characteristic.Reason],
								tier1: '2 + Р психічної шкоди',
								tier2: '4 + Р психічної шкоди',
								tier3: '6 + Р психічної шкоди'
							})),
							FactoryLogic.createAbilitySectionField({
								name: 'Напруження',
								effect: 'Ціль отримує додаткові 2 одиниці психічної шкоди. Ви також отримуєте 2 одиниці психічної шкоди, які неможливо зменшити ніяким чином.'
							})
						]
					})
				}),

				FactoryLogic.feature.createLanguageChoice({
					id: 'talent-1-3',
					selected: ['Мислемова (Mindspeech)']
				}),
				FactoryLogic.feature.create({
					id: 'talent-1-4',
					name: 'Телепатичне спілкування',
					description: 'Ви можете телепатично спілкуватися з будь-якими істотами в межах дії вашої здібності Укол Розуму, якщо вони володіють мовою, спільною з вами, і ви знаєте одна одну. Коли ви так спілкуєтесь, вони можуть відповісти телепатично.'
				}),
				FactoryLogic.feature.createChoice({
					id: 'talent-1-5',
					name: 'Псіонічне підсилення',
					description: 'Через псіонічну медитацію ви створюєте канали в розумі, які покращують ваші характеристики. Виберіть одне із наведених підсилень. Ви можете змінювати підсилення разом із щитом під час псіонічної медитації як дії відпочинку.',
					options: [
						{
							feature: FactoryLogic.feature.createMultiple({
								id: 'talent-1-5a',
								name: 'Бойове підсилення',
								description: `
Ви можете носити легку броню й ефективно володіти легкою зброєю, навіть якщо у вас немає набору обладнання.

Ви можете використовувати скарби з легкою бронею та легкими видами зброї. Якщо у вас є набор (kit), ви не можете обрати це підсилення.`,
								features: [
									FactoryLogic.feature.create({
										id: 'talent-1-5aa',
										name: 'Бойове підсилення',
										description: 'Поки ви володієте легкою зброєю, ви отримуєте бонус +1 до шкоди від зброєвих здібностей, включно з безкоштовними ударами.'
									}),
									FactoryLogic.feature.createBonus({
										id: 'talent-1-5ab',
										field: FeatureField.Stamina,
										valuePerEchelon: 3
									}),
									FactoryLogic.feature.createProficiency({
										id: 'talent-1-5ac',
										weapons: [KitWeapon.Light],
										armor: [KitArmor.Light]
									})
								]
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createMultiple({
								id: 'talent-1-5b',
								name: 'Підсилення щільності',
								features: [
									FactoryLogic.feature.createBonus({
										id: 'talent-1-5ba',
										field: FeatureField.Stamina,
										valuePerEchelon: 6
									}),
									FactoryLogic.feature.createBonus({
										id: 'talent-1-5bb',
										field: FeatureField.Stability,
										value: 1
									})
								]
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createAbilityDistance({
								id: 'talent-1-5c',
								name: 'Підсилення дальності',
								keywords: [AbilityKeyword.Psionic, AbilityKeyword.Ranged],
								value: 2
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createAbilityDamage({
								id: 'talent-1-5d',
								name: 'Силове підсилення',
								keywords: [AbilityKeyword.Psionic],
								value: 1
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createMultiple({
								id: 'talent-1-5e',
								name: 'Підсилення швидкості',
								features: [
									FactoryLogic.feature.createBonus({
										id: 'talent-1-5ea',
										field: FeatureField.Speed,
										value: 1
									}),
									FactoryLogic.feature.createBonus({
										id: 'talent-1-5eb',
										field: FeatureField.Disengage,
										value: 1
									})
								]
							}),
							value: 1
						}
					]
				}),
				FactoryLogic.feature.createChoice({
					id: 'talent-1-6',
					name: 'Талантовий щит',
					description: 'Через псіонічну медитацію ви створюєте щит, що захищає вас. Виберіть один із наведених щитів. Ви можете змінювати щит разом із псіонічним підсиленням під час псіонічної медитації як дії відпочинку.',
					options: [
						{
							feature: FactoryLogic.feature.create({
								id: 'talent-1-6a',
								name: 'Щит ентропії',
								description: 'Ваш щит уповільнює час для ворогів. Коли істота завдає вам шкоди, її швидкість зменшується на величину, рівну вашому показнику Розуму, і вона не може використовувати тригерні дії до кінця свого наступного ходу.'
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'talent-1-6b',
									name: 'Відштовхувальний щит',
									description: 'Ви оточуєте себе невидимим шаром телекінетичної енергії.',
									type: FactoryLogic.type.createTrigger('An adjacent creature deals damage to you.', { free: true }),
									distance: [FactoryLogic.distance.createSelf()],
									target: 'Себе',
									sections: [
										FactoryLogic.createAbilitySectionText('Ви можете відштовхнути нападника на кількість клітинок, рівну вашому показнику Розуму.')
									]
								})
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.create({
								id: 'talent-1-6c',
								name: 'Сталевий щит',
								description: 'Ваш щит реагує на небезпеку, захищаючи вас від майбутньої шкоди. Коли ви отримуєте шкоду, після її вирішення ви отримуєте імунітет до шкоди в розмірі, рівному вашому показнику Розуму, до кінця вашого наступного ходу.'
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.create({
								id: 'talent-1-6d',
								name: 'Зникаючий щит',
								description: 'Ваш щит дозволяє втекти від загроз. Коли ви отримуєте шкоду, ви стаєте невидимим до кінця вашого наступного ходу.'
							}),
							value: 1
						}
					]
				}),
				FactoryLogic.feature.createClassAbilityChoice({
					id: 'talent-1-7',
					cost: 'signature',
					count: 2
				}),
				FactoryLogic.feature.createClassAbilityChoice({
					id: 'talent-1-8',
					cost: 3
				}),
				FactoryLogic.feature.createClassAbilityChoice({
					id: 'talent-1-9',
					cost: 5
				})
			]
		},
		{
			level: 2,
			features: [
				FactoryLogic.feature.createPerk({
					id: 'talent-2-1',
					lists: [PerkList.Interpersonal, PerkList.Lore, PerkList.Supernatural]
				})
			]
		},
		{
			level: 3,
			features: [
				FactoryLogic.feature.create({
					id: 'talent-3-1',
					name: 'Обстеження',
					description: 'Ви можете поширити свої псіонічні відчуття за межі звичайного радіусу дії. Раз на кожен ваш хід ви можете шукати прихованих істот як безкоштовний маневр. Додатково, як тільки ви встановите лінію дії до мислячої істоти в межах дальності здібності Укол Розуму, ви завжди маєте лінію дії до цієї істоти, доки вона не переміститься за межі цієї дальності.'
				}),
				FactoryLogic.feature.createClassAbilityChoice({
					id: 'talent-3-2',
					cost: 7
				})
			]
		},
		{
			level: 4,
			features: [
				FactoryLogic.feature.createCharacteristicBonus({
					id: 'talent-4-1a',
					characteristic: Characteristic.Reason,
					value: 1
				}),
				FactoryLogic.feature.createCharacteristicBonus({
					id: 'talent-4-1b',
					characteristic: Characteristic.Presence,
					value: 1
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'talent-4-2',
						name: 'Проекція розуму',
						description: 'Ви проєктуєте свій розум поза тілом.',
						type: FactoryLogic.type.createManeuver(),
						distance: [FactoryLogic.distance.createSelf()],
						target: 'Себе',
						sections: [
							FactoryLogic.createAbilitySectionText(`
Поки ви в цьому стані, ваше тіло залишається безсвідомим і лежачим, а ваш розум є окремою сутністю розміру 1T. Ваш розум автоматично має прикриття (concealment) і може вільно рухатися крізь тверду матерію. Якщо ви завершите хід усередині твердої матерії, вас викине у простір, звідки ви увійшли.

Усі здібності чи фічі, які ви використовуєте, походять від вашого розуму. І розум, і тіло можуть отримувати шкоду під час розділення, причому будь-яка така шкода застосовується до вашої Витривалості. Якщо ви отримуєте будь-яку шкоду, ваш розум миттєво повертається до тіла, і ви можете негайно повернутися до тіла як безкоштовний маневр.`)
						]
					})
				}),
				FactoryLogic.feature.createMultiple({
					id: 'talent-4-3',
					name: 'Відновлення розуму',
					features: [
						FactoryLogic.feature.create({
							id: 'talent-4-3a',
							name: 'Відновлення розуму',
							description: 'Коли ви витрачаєте Відновлення, щоб відновити Витривалість під час Напруження, ви можете відмовитися від Витривалості і натомість отримати 3 одиниці ясності.'
						}),
						FactoryLogic.feature.createHeroicResourceGain({
							id: 'talent-4-3b',
							name: 'Відновлення розуму',
							tag: 'move 2',
							trigger: 'Першого разу в кожному раунді бою, коли істоту примусово переміщують',
							value: '2',
							replacesTags: ['move']
						})
					]
				}),
				FactoryLogic.feature.createPerk({
					id: 'talent-4-4'
				}),
				FactoryLogic.feature.createSkillChoice({
					id: 'talent-4-5',
					listOptions: [SkillList.Crafting, SkillList.Exploration, SkillList.Interpersonal, SkillList.Intrigue, SkillList.Lore]
				}),
				FactoryLogic.feature.create({
					id: 'talent-4-6',
					name: 'Підвісне поле',
					description: `
Ви можете літати. Під час польоту ваша стійкість знижується до 0 і не може бути збільшена. Якщо ви вже вмієте літати, ви замість цього отримуєте бонус +2 до швидкості під час польоту.

Якщо ви перебуваєте в стані Напруження під час польоту й вас примусово переміщлять, відстань примусового переміщення отримує бонус +2.`,
				}),
			]
		},
		{
			level: 5,
			features: [
				FactoryLogic.feature.createClassAbilityChoice({
					id: 'talent-5-1',
					cost: 9
				})
			]
		},
		{
			level: 6,
			features: [
				FactoryLogic.feature.createPerk({
					id: 'talent-6-1',
					lists: [PerkList.Interpersonal, PerkList.Lore, PerkList.Supernatural]
				}),
				FactoryLogic.feature.create({
					id: 'talent-6-2',
					name: 'Псі-підсилення',
					description: `
Коли ви використовуєте здібність як основну дію або маневр з ключовим словом Psionic, ви можете витратити додаткову дисципліну, щоб застосувати до неї псіопідсилення і посилити її ефекти. Ефекти псіопідсилення тривають лише до кінця ходу, у якому здібність була вперше використана. Ви можете застосувати кілька псіопідсилень до однієї здібності, але лише по одному екземпляру кожного конкретного підсилення. Ви можете використовувати такі псіопідсилення.

**Динамічна сила** (1 Ясності) Якщо здібність примусово переміщує ціль, відстань примусового переміщення отримує бонус, рівний вашому показнику Розуму.
**Розширена сила** (3 Ясності) Якщо здібність цілиться на область, ви збільшуєте розмір області на 1. Якщо область — лінія, ви збільшуєте одну вимірність, а не обидві.
**Подовжена сила** (1 Ясності) Якщо здібність дальня, відстань отримує бонус, рівний вашому показнику Розуму. Якщо здібність ближня, відстань отримує бонус +2.
**Посилена сила** (1 Ясності) Якщо здібність завдає кинутої шкоди, вона завдає додаткової шкоди, рівної вашому показнику Розуму.
**Збільшена сила** (5 Ясностей) Якщо здібність має потужність, ви збільшуєте цю потужність на величину, рівну вашому показнику Розуму.
**Поділена сила** (5 Ясностей) Якщо здібність цілиться на індивідуальні істоти або обʼєкти, ви націлюєте ще одну істоту або обʼєкт у межах дальності.
**Загострена сила** (1 Ясності) Якщо здібність має будь-який кидок сили, цей кидок отримує edge.`
				})
			]
		},
		{
			level: 7,
			features: [
				FactoryLogic.feature.create({
					id: 'talent-7-1',
					name: 'Спадкова памʼять',
					description: 'Кожного разу, коли ви завершите відпочинок, ви можете обрати кількість навичок до вашого показника Розуму і замінити їх на рівну кількість навичок з груп Інтерперсональних та Знань. Ці заміни тривають до кінця вашого наступного відпочинку.'
				}),
				FactoryLogic.feature.create({
					id: 'talent-7-2',
					name: 'Каскадне напруження',
					description: 'Коли ви отримуєте шкоду від ефекту напруження або через відʼємну ясність, ви можете обрати одного ворога в межах дальності здібності Укол Розуму, щоб він отримав ту саму шкоду.'
				}),
				FactoryLogic.feature.createCharacteristicBonus({
					id: 'talent-7-3a',
					characteristic: Characteristic.Might,
					value: 1
				}),
				FactoryLogic.feature.createCharacteristicBonus({
					id: 'talent-7-3b',
					characteristic: Characteristic.Agility,
					value: 1
				}),
				FactoryLogic.feature.createCharacteristicBonus({
					id: 'talent-7-3c',
					characteristic: Characteristic.Reason,
					value: 1
				}),
				FactoryLogic.feature.createCharacteristicBonus({
					id: 'talent-7-3d',
					characteristic: Characteristic.Intuition,
					value: 1
				}),
				FactoryLogic.feature.createCharacteristicBonus({
					id: 'talent-7-3e',
					characteristic: Characteristic.Presence,
					value: 1
				}),
				FactoryLogic.feature.createHeroicResourceGain({
					id: 'talent-7-4',
					name: 'Ясний розум',
					tag: 'start 2',
					trigger: 'Початок вашого ходу',
					value: '1d3 + 1',
					replacesTags: ['start']
				}),
				FactoryLogic.feature.createSkillChoice({
					id: 'talent-7-5',
					listOptions: [SkillList.Crafting, SkillList.Exploration, SkillList.Interpersonal, SkillList.Intrigue, SkillList.Lore]
				})
			]
		},
		{
			level: 8,
			features: [
				FactoryLogic.feature.createPerk({
					id: 'talent-8-1'
				}),
				FactoryLogic.feature.createClassAbilityChoice({
					id: 'talent-8-2',
					cost: 11
				})
			]
		},
		{
			level: 9,
			features: [
				FactoryLogic.feature.createMultiple({
					id: 'talent-9-1',
					name: 'Фортеця Досконалої думки',
					features: [
						FactoryLogic.feature.create({
							id: 'talent-9-1a',
							name: 'Фортеця Досконалої думки',
							description: `
Ваш розум — непроникний палац, що захищає вас від небезпек. Ви отримуєте такі ефекти:

* Ви можете дихати навіть коли відсутнє придатне для дихання повітря.
* Істоти не можуть читати ваші думки, якщо ви їм цього не дозволите.
* Ваші показники Розуму та Інтуїції вважаються на 2 вищими при опорі потужності здібностей.`
						}),
						FactoryLogic.feature.createDamageModifier({
							id: 'talent-9-1b',
							modifiers: [
								FactoryLogic.damageModifier.create({
									damageType: DamageType.Psychic,
									modifierType: DamageModifierType.Immunity,
									value: 10
								})
							]
						}),
						FactoryLogic.feature.createConditionImmunity({
							id: 'talent-9-1c',
							conditions: [ConditionType.Taunted, ConditionType.Frightened]
						})
					]
				})
			]
		},
		{
			level: 10,
			features: [
				FactoryLogic.feature.createCharacteristicBonus({
					id: 'talent-10-1a',
					characteristic: Characteristic.Reason,
					value: 1
				}),
				FactoryLogic.feature.createCharacteristicBonus({
					id: 'talent-10-1b',
					characteristic: Characteristic.Presence,
					value: 1
				}),
				FactoryLogic.feature.createHeroicResourceGain({
					id: 'talent-10-2',
					name: 'Чистий розум',
					tag: 'move 3',
					trigger: 'Першого разу в кожному раунді бою, коли істоту примусово переміщують',
					value: '3',
					replacesTags: ['move', 'move 2']
				}),
				FactoryLogic.feature.createMultiple({
					id: 'talent-10-3',
					name: 'Омнічуття',
					features: [
						FactoryLogic.feature.createAbilityDistance({
							id: 'talent-10-3a',
							keywords: [AbilityKeyword.Ranged],
							value: 10
						}),
						FactoryLogic.feature.create({
							id: 'talent-10-3b',
							name: 'Омнічуття',
							description: 'Вам не потрібна лінія дії до цілі дальньої здібності, якщо ціль — мисляча істота, до якої ви раніше мали лінію дії.'
						})
					]
				}),
				FactoryLogic.feature.createPerk({
					id: 'talent-10-4',
					lists: [PerkList.Interpersonal, PerkList.Lore, PerkList.Supernatural]
				}),
				FactoryLogic.feature.createMultiple({
					id: 'talent-10-5',
					name: 'Псіон',
					features: [
						FactoryLogic.feature.createHeroicResourceGain({
							id: 'talent-10-5a',
							name: 'Псіон',
							tag: 'start 3',
							trigger: 'Початок вашого ходу',
							value: '1d3 + 2',
							replacesTags: ['start', 'start 2']
						}),
						FactoryLogic.feature.create({
							id: 'talent-10-5b',
							name: 'Псіон',
							description: 'Ви можете обрати не отримувати шкоду від відʼємної ясності. Також ви можете обрати прийняти ефект напруження будь-якої здібності, навіть якщо ви не перебуваєте в стані Напруження.'
						})
					]
				}),
				FactoryLogic.feature.createSkillChoice({
					id: 'talent-10-6',
					listOptions: [SkillList.Crafting, SkillList.Exploration, SkillList.Interpersonal, SkillList.Intrigue, SkillList.Lore]
				}),
				FactoryLogic.feature.createHeroicResource({
					id: 'talent-10-7',
					name: 'Видіння',
					type: 'epic',
					gains: [
						{
							tag: '',
							trigger: 'Завершення відпочинку',
							value: 'Отримання досвіду'
						}
					],
					details: 'Ви можете витратити видіння, щоб використати одну додаткову псіонічну здібність у вашому ході, за умови, що ви повністю оплачуєте її вартість видінням. Якщо ви обираєте використовувати псіонічну здібність, яка зазвичай не коштує ясності, ви маєте витратити 1 видіння для її використання.'
				})
			]
		}
	],
	abilities: [
		FactoryLogic.createAbility({
			id: 'talent-ability-1',
			name: 'Куля ентропії',
			description: 'Ви миттєво старите ворога на мить.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Chronopathy, AbilityKeyword.Psionic, AbilityKeyword.Ranged, AbilityKeyword.Strike],
			distance: [FactoryLogic.distance.createRanged(10)],
			target: 'Одна істота або предмет',
			cost: 'signature',
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Presence],
						tier1: '2 + П шкоди скверни; П < [слабкий], уповільнений (рятівний кидок знімає)',
						tier2: '3 + П шкоди скверни; П < [середній], уповільнений (рятівний кидок знімає)',
						tier3: '5 + П шкоди скверни; П < [сильний], уповільнений (рятівний кидок знімає)'
					})
				),
				FactoryLogic.createAbilitySectionText('Ціль отримує додаткову 1 одиницю шкоди скверни за кожен додатковий раз, коли її цілять цією здібністю під час зустрічі.'),
				FactoryLogic.createAbilitySectionField({
					name: 'Напруження',
					effect: 'Ви отримуєте 1 одиницю ясності, коли отримуєте результат рівня 2 або 3 на кидку сили.'
				})
			]
		}),
		FactoryLogic.createAbility({
			id: 'talent-ability-2',
			name: 'Іній',
			description: 'Ви вражаєте ворога імпульсом холодної енергії.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Cryokinesis, AbilityKeyword.Psionic, AbilityKeyword.Ranged, AbilityKeyword.Strike],
			distance: [FactoryLogic.distance.createRanged(10)],
			target: 'Одна істота',
			cost: 'signature',
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Reason],
						tier1: '2 + Р холодної шкоди; M < [слабкий], уповільнений (до кінця ходу)',
						tier2: '4 + Р холодної шкоди; M < [середній], уповільнений (до кінця ходу)',
						tier3: '6 + Р холодної шкоди; M < [сильний], уповільнений (до кінця ходу)'
					})
				),
				FactoryLogic.createAbilitySectionField({
					name: 'Напруження',
					effect: 'Ви уповільнені до кінця вашого наступного ходу. Крім того, ціль, уповільнена цією здібністю, замість уповільнення стає скутою.'
				})
			]
		}),
		FactoryLogic.createAbility({
			id: 'talent-ability-3',
			name: 'Випалення',
			description: 'Повітря вибухає у стовп бездимного полумʼя.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Area, AbilityKeyword.Fire, AbilityKeyword.Psionic, AbilityKeyword.Ranged, AbilityKeyword.Pyrokinesis],
			distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Cube, value: 3, within: 10 })],
			target: 'Кожен ворог у зоні',
			cost: 'signature',
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Reason],
						tier1: '2 вогняної шкоди',
						tier2: '4 вогняної шкоди',
						tier3: '6 вогняної шкоди'
					})
				),
				FactoryLogic.createAbilitySectionText('У зоні залишається стовп полумʼя до початку вашого наступного ходу. Кожен ворог, який вперше входить у цю зону під час раунду бою або починає тут свій хід, отримує 2 вогняної шкоди.'),
				FactoryLogic.createAbilitySectionField({
					name: 'Напруження',
					effect: 'Розмір куба збільшується на 2, проте вогонь згасає в кінці вашого ходу.'
				})
			]
		}),
		FactoryLogic.createAbility({
			id: 'talent-ability-4',
			name: 'Кінетичний захват',
			description: 'Ви піднімаєте і відкидаєте ворога подалі від себе.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Psionic, AbilityKeyword.Ranged, AbilityKeyword.Telekinesis],
			distance: [FactoryLogic.distance.createRanged(10)],
			target: 'Одна істота або предмет',
			cost: 'signature',
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Reason],
						tier1: 'Зсунути 2 + R',
						tier2: 'Зсунути 4 + R',
						tier3: 'Зсунути 6 + R; повалений'
					})
				),
				FactoryLogic.createAbilitySectionField({
					name: 'Напруження',
					effect: 'Ви повинні вертикально штовхнути ціль замість того, щоб зсунути її.'
				})
			]
		}),
		FactoryLogic.createAbility({
			id: 'talent-ability-5',
			name: 'Кінетичний імпульс',
			description: 'Сила вашого розуму відштовхує ворогів назад.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Area, AbilityKeyword.Psionic, AbilityKeyword.Telepathy],
			distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 1 })],
			target: 'Кожен ворог у зоні',
			cost: 'signature',
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Reason],
						tier1: '2 психічної шкоди',
						tier2: '5 психічної шкоди; штовхнути 1',
						tier3: '7 психічної шкоди; штовхнути 2'
					})
				),
				FactoryLogic.createAbilitySectionField({
					name: 'Напруження',
					effect: 'Розмір вибуху збільшується на 2, а ви кровоточите до початку вашого наступного ходу.'
				})
			]
		}),
		FactoryLogic.createAbility({
			id: 'talent-ability-6',
			name: 'Матеріалізація',
			description: 'Ви уявляєте предмет у розумі і надаєте йому форму — безпосередньо над головою супротивника.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Psionic, AbilityKeyword.Ranged, AbilityKeyword.Resopathy, AbilityKeyword.Strike],
			distance: [FactoryLogic.distance.createRanged(10)],
			target: 'Одна істота або предмет',
			cost: 'signature',
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Reason],
						tier1: '3 + Р шкоди',
						tier2: '5 + Р шкоди',
						tier3: '8 + Р шкоди'
					})
				),
				FactoryLogic.createAbilitySectionText('На ціль падає безцінний предмет розміру 1M, завдаючи шкоди, а потім котиться у сусідню незайняту клітинку за вашим вибором. Предмет зроблено з дерева, каменю або металу (на ваш вибір).'),
				FactoryLogic.createAbilitySectionField({
					name: 'Напруження',
					effect: 'Після нанесення шкоди предмет вибухає, і кожна істота поруч із ціллю отримує шкоду, рівну вашому показнику Розуму. Ви також отримуєте шкоду, рівну вашому показнику Розуму, яку неможливо зменшити ніяким чином.'
				})
			]
		}),
		FactoryLogic.createAbility({
			id: 'talent-ability-7',
			name: 'Оптичний промінь',
			description: 'Ваші очі випромінюють промені потужної знесилюючої сили.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Metamorphosis, AbilityKeyword.Psionic, AbilityKeyword.Ranged, AbilityKeyword.Strike],
			distance: [FactoryLogic.distance.createRanged(10)],
			target: 'Одна істота або предмет',
			cost: 'signature',
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Reason],
						tier1: '2 + Р шкоди; M < [слабкий], повалений',
						tier2: '4 + Р шкоди; M < [середній], повалений',
						tier3: '6 + Р шкоди; M < [сильний], повалений'
					})
				),
				FactoryLogic.createAbilitySectionText('Прицілюючись в обʼєкт з твердою відбивною поверхнею або в істоту, що носить чи має такий предмет (наприклад, дзеркало, немалёваний металевий щит або блискучу металеву броню), ви можете цілитися на одну додаткову істоту або обʼєкт у межах 3 клітинок від першої цілі.'),
				FactoryLogic.createAbilitySectionField({
					name: 'Напруження',
					effect: 'Ви отримуєте 1 сплеск, який можете використати негайно, і отримуєте шкоду, рівну вашому показнику Розуму, яку неможливо зменшити.'
				})
			]
		}),
		FactoryLogic.createAbility({
			id: 'talent-ability-8',
			name: 'Меч Духу',
			description: 'Ви формуєте клинок енергії розуму і вражаєте ціль, що підживлює вас.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Animapathy, AbilityKeyword.Melee, AbilityKeyword.Psionic, AbilityKeyword.Strike],
			distance: [FactoryLogic.distance.createMelee(2)],
			target: 'Одна істота або предмет',
			cost: 'signature',
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Presence],
						tier1: '3 + П шкоди',
						tier2: '6 + П шкоди',
						tier3: '9 + П шкоди'
					})
				),
				FactoryLogic.createAbilitySectionText('Ви отримуєте 1 сплеск.'),
				FactoryLogic.createAbilitySectionField({
					name: 'Напруження',
					effect: 'Ціль отримує додаткові 3 одиниці шкоди. Ви також отримуєте 3 одиниці шкоди, які неможливо зменшити.'
				})
			]
		}),
		FactoryLogic.createAbility({
			id: 'talent-ability-9',
			name: 'Захоплення',
			description: 'Ви поширюєте псіонічну енергію до істоти й набуваєте нового образу в її свідомості.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Psionic, AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Telepathy],
			distance: [FactoryLogic.distance.createRanged(10)],
			target: 'Одна істота',
			cost: 3,
			sections: [
				FactoryLogic.createAbilitySectionText('Якщо ви цілитеся в союзника, він отримує тимчасову Витривалість, рівну трьом вашим очкам Присутності, і може зняти один ефект, який знімається рятівним кидком або закінчується в кінці його ходу. Якщо ви цілитеся в ворога, ви робите кидок сили.'),
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Presence],
						tier1: '3 + П психічної шкоди; I < [слабкий], наляканий (рятівний кидок знімає)',
						tier2: '6 + П психічної шкоди; I < [середній], наляканий (рятівний кидок знімає)',
						tier3: '9 + П психічної шкоди; I < [сильний], наляканий (рятівний кидок знімає)'
					})
				)
			]
		}),
		FactoryLogic.createAbility({
			id: 'talent-ability-10',
			name: 'Задушення',
			description: 'Ви пережмагаєте ворога телекінетичною хваткою.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Psionic, AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Telekinesis],
			distance: [FactoryLogic.distance.createRanged(10)],
			target: 'Одна істота',
			cost: 3,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Reason],
						tier1: '3 + Р шкоди; M < [слабкий], уповільнений (рятівний кидок знімає)',
						tier2: '5 + Р шкоди; M < [середній], уповільнений (рятівний кидок знімає)',
						tier3: '8 + Р шкоди; M < [сильний], скутий (рятівний кидок знімає)'
					})
				),
				FactoryLogic.createAbilitySectionText('Ви можете вертикально підтягнути ціль до 2 клітинок. Якщо ця здібність скує ціль, це примусове переміщення ігнорує її стійкість.'),
			]
		}),
		FactoryLogic.createAbility({
			id: 'talent-ability-11',
			name: 'Передбачення',
			description: 'Ви даєте цілі проблиск майбутнього, щоб вона була готова до наступних подій.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Chronopathy, AbilityKeyword.Melee, AbilityKeyword.Psionic],
			distance: [FactoryLogic.distance.createMelee(2)],
			target: 'На себе або одного союзника',
			cost: 3,
			sections: [
				FactoryLogic.createAbilitySectionText('Кидки здібностей проти цілі отримують шкоду (bane) до початку вашого наступного ходу. Коли ціль отримує шкоду під цим ефектом, вона може використати тригерну дію, щоб зробити безкоштовний удар по джерелу шкоди.'),
			]
		}),
		FactoryLogic.createAbility({
			id: 'talent-ability-12',
			name: 'Тління',
			description: 'Дим тече з ворога як сльози, поки їхня шкіра чорніє й лущиться.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Psionic, AbilityKeyword.Pyrokinesis, AbilityKeyword.Ranged, AbilityKeyword.Strike],
			distance: [FactoryLogic.distance.createRanged(10)],
			target: 'Одна істота',
			cost: 3,
			sections: [
				FactoryLogic.createAbilitySectionText('Виберіть тип шкоди та вразливість для цієї здібності з одного з наступних: кислотна, скверна або вогняна. Ціль отримує шкоду до того, як ця здібність накладає будь-яку вразливість.'),
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Reason],
						tier1: '3 + Р шкоди; Р < [слабкий], ціль має вразливість 5 (рятівний кидок знімає)',
						tier2: '6 + Р шкоди; Р < [середній], ціль має вразливість 5 (рятівний кидок знімає)',
						tier3: '9 + Р шкоди; Р < [сильний], ціль має вразливість, рівну 5 + вашому показнику Розуму (рятівний кидок знімає)'
					})
				)
			]
		}),
		FactoryLogic.createAbility({
			id: 'talent-ability-13',
			name: 'Флешбек',
			description: 'Ціль відкидається на кілька секунд назад у часі і отримує можливість пережити все знову.',
			type: FactoryLogic.type.createManeuver(),
			keywords: [AbilityKeyword.Chronopathy, AbilityKeyword.Psionic, AbilityKeyword.Ranged],
			distance: [FactoryLogic.distance.createRanged(10)],
			target: 'На себе або одного союзника',
			cost: 5,
			sections: [
				FactoryLogic.createAbilitySectionText('Ціль використовує здібність з базовою вартістю Героїчного ресурсу 7 або менш, яку вона вже використовувала цього раунду, без необхідності витрачати базову вартість. Платити за доповнення до здібності можна як зазвичай.'),
				FactoryLogic.createAbilitySectionField({
					name: 'Напруження',
					effect: 'Ви отримуєте 1d6 шкоди і уповільнені (рятівний кидок знімає).'
				})
			]
		}),
		FactoryLogic.createAbility({
			id: 'talent-ability-14',
			name: 'Поглинання інерції',
			description: 'Ваша псіонічна енергія оточує ціль і відштовхує від неї все решта.',
			type: FactoryLogic.type.createManeuver(),
			keywords: [AbilityKeyword.Psionic, AbilityKeyword.Ranged, AbilityKeyword.Telekinesis],
			distance: [FactoryLogic.distance.createRanged(10)],
			target: 'На себе або одного союзника',
			cost: 5,
			sections: [
				FactoryLogic.createAbilitySectionText('Ціль ігнорує важку місцевість і не отримує шкоди від примусового переміщення до початку вашого наступного ходу. Коли ціль входить у клітинку під цим ефектом, вона може штовхнути одного сусіднього створіння на кількість клітинок, рівну вашому показнику Розуму. При штовханні союзника ціль може ігнорувати його стійкість. Істоту можна примусово перемістити таким чином лише раз за хід.'),
				FactoryLogic.createAbilitySectionField({
					name: 'Напруження',
					effect: 'Ви ослаблені (рятівний кидок знімає). Поки ви ослаблені таким чином, коли вас примусово переміщують, відстань примусового переміщення отримує бонус +5.'
				})
			]
		}),
		FactoryLogic.createAbility({
			id: 'talent-ability-15',
			name: 'Залізний',
			description: 'Шкіра цілі перетворюється на тверду темну металеву поверхню — непроникну й дуже щільну.',
			type: FactoryLogic.type.createManeuver(),
			keywords: [AbilityKeyword.Metamorphosis, AbilityKeyword.Psionic, AbilityKeyword.Ranged],
			distance: [FactoryLogic.distance.createRanged(10)],
			target: 'На себе або одного союзника',
			cost: 5,
			sections: [
				FactoryLogic.createAbilitySectionText('Стійкість цілі збільшується на величину, рівну вашому показнику Розуму, і вона отримує 10 тимчасової Витривалості та 2 сплески. Це збільшення стійкості триває, поки у цілі є тимчасова Витривалість від цієї здібності.'),
				FactoryLogic.createAbilitySectionField({
					name: 'Напруження',
					effect: 'Ви не можете використовувати маневри (рятівний кидок знімає).'
				})
			]
		}),
		FactoryLogic.createAbility({
			id: 'talent-ability-16',
			name: 'Досконала ясність',
			description: 'Ви очищуєте розум, залишаючи в ньому лише ціль.',
			type: FactoryLogic.type.createManeuver(),
			keywords: [AbilityKeyword.Psionic, AbilityKeyword.Ranged, AbilityKeyword.Telepathy],
			distance: [FactoryLogic.distance.createRanged(10)],
			target: 'На себе або одного союзника',
			cost: 5,
			sections: [
				FactoryLogic.createAbilitySectionText('До початку вашого наступного ходу ціль отримує бонус +3 до швидкості і має подвійний edge на наступному кидку сили, який вона зробить. Якщо ціль отримує результат рівня 3 на тому кидку, ви отримуєте 1 одиницю ясності.'),
				FactoryLogic.createAbilitySectionField({
					name: 'Напруження',
					effect: 'Ви отримуєте 1d6 шкоди і не можете використовувати тригерні дії (рятівний кидок знімає).'
				})
			]
		}),
		FactoryLogic.createAbility({
			id: 'talent-ability-17',
			name: 'Кидок у часі',
			description: 'Ви швендяєте ціль крізь аннали часу, змушуючи її одночасно пережити кожен момент власного існування.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Chronopathy, AbilityKeyword.Psionic, AbilityKeyword.Ranged, AbilityKeyword.Strike],
			distance: [FactoryLogic.distance.createRanged(10)],
			target: 'Одна істота або предмет',
			cost: 7,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Presence],
						tier1: '3 + П шкоди скверни; П < [слабкий], ослаблений (рятівний кидок знімає)',
						tier2: '5 + П шкоди скверни; ціль відкидається у часі, і якщо П < [середній], вона ослаблена (рятівний кидок знімає)',
						tier3: '8 + П шкоди скверни; ціль відкидається у часі, і якщо П < [сильний], вона ослаблена (рятівний кидок знімає)'
					})
				),
				FactoryLogic.createAbilitySectionText('Ціль, відкинута у часі, вилучається з карти зустрічі до кінця свого наступного ходу, після чого зʼявляється у своєму первісному просторі або у найближчій незайнятій клітинці.'),
				FactoryLogic.createAbilitySectionField({
					name: 'Напруження',
					effect: 'Ви отримуєте 2d6 шкоди і назавжди помітно старієте (еквівалентно 10 рокам для людини). Якщо ви отримуєте результат рівня 3 на кидку сили, ви отримуєте 2 одиниці ясності.'
				})
			]
		}),
		FactoryLogic.createAbility({
			id: 'talent-ability-18',
			name: 'Сфера сили',
			description: 'Навколо вас плавають сфери суцільної псіонічної енергії.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Psionic, AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Telekinesis],
			distance: [FactoryLogic.distance.createSelf()],
			target: 'На себе; див. нижче',
			cost: 7,
			sections: [
				FactoryLogic.createAbilitySectionText(`
Ви створюєте три сфери розміру 1T, що обертаються навколо вашого тіла. Кожна сфера дає вам накопичувальний імунітет до шкоди 1. Кожного разу, коли ви отримуєте шкоду, ви втрачаєте одну сферу.

Раз на ваш хід ви можете використати безкоштовний маневр, щоб випустити сферу по істоті або обʼєкту в межах 5 клітинок як дальній удар, втрачаючи сферу після удару.`),
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Reason],
						tier1: '2 шкоди',
						tier2: '3 шкоди',
						tier3: '5 шкоди'
					})
				),
				FactoryLogic.createAbilitySectionField({
					name: 'Напруження',
					effect: 'Ви створюєте пʼять сфер, і ви ослаблені, поки маєте активні сфери.'
				})
			]
		}),
		FactoryLogic.createAbility({
			id: 'talent-ability-19',
			name: 'Поле відбиття',
			description: 'Захисне поле змінює напрям імпульсу вхідних атак.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Area, AbilityKeyword.Psionic, AbilityKeyword.Telepathy],
			distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Aura, value: 3 })],
			target: 'Спеціальне',
			cost: 7,
			sections: [
				FactoryLogic.createAbilitySectionText('Аура триває до початку вашого наступного ходу. Коли ворог цілиться в союзника в цій зоні дальньою здібністю, здібність нейтралізується щодо союзника і відбивається назад на ворога. Здібність завдає ворогу половину шкоди, яку вона завдала б союзнику, і втрачає додаткові ефекти.'),
				FactoryLogic.createAbilitySectionField({
					name: 'Напруження',
					effect: 'Розмір аури збільшується на 1. Коли ваша аура відбиває здібність, ви отримуєте 2d6 шкоди і забуваєте спогад, визначений вами та Директором.'
				})
			]
		}),
		FactoryLogic.createAbility({
			id: 'talent-ability-20',
			name: 'Опік душі',
			description: 'Ви виштовхуєте їхню душу з тіла, залишаючи її безпомічно плаваючою над ослабленою оболонкою.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Animapathy, AbilityKeyword.Psionic, AbilityKeyword.Ranged, AbilityKeyword.Strike],
			distance: [FactoryLogic.distance.createRanged(10)],
			target: 'Одна істота',
			cost: 7,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Presence],
						tier1: '6 + П шкоди; П < [слабкий], приголомшений (рятівний кидок знімає)',
						tier2: '10 + П шкоди; П < [середній], приголомшений (рятівний кидок знімає)',
						tier3: '14 + П шкоди; П < [сильний], приголомшений (рятівний кидок знімає)'
					})
				),
				FactoryLogic.createAbilitySectionText('Ціль отримує bane до перевірок Присутності до кінця зустрічі.'),
				FactoryLogic.createAbilitySectionField({
					name: 'Напруження',
					effect: 'Потужність цієї здібності збільшується на 1. Ви отримуєте 2d6 шкоди і отримуєте 3 сплески, які можете використати негайно.'
				})
			]
		}),
		FactoryLogic.createAbility({
			id: 'talent-ability-21',
			name: 'Екзотермічний щит',
			description: 'Ви огортаєте ціль псіонічним полумʼям і дозволяєте їй блимати без страху вигоряння.',
			type: FactoryLogic.type.createManeuver(),
			keywords: [AbilityKeyword.Pyrokinesis, AbilityKeyword.Psionic, AbilityKeyword.Ranged],
			distance: [FactoryLogic.distance.createRanged(10)],
			target: 'На себе або одного союзника',
			cost: 9,
			sections: [
				FactoryLogic.createAbilitySectionText('**Ефект** До початку вашого наступного ходу ціль має імунітет до холоду 10 та імунітет до вогню 10, а її удари завдають додаткової вогняної шкоди, рівної подвоєному вашому показнику Розуму. Додатково, коли ворог використовує ближню здібність проти цілі під цим ефектом, ворог отримує 5 вогняної шкоди.'),
				FactoryLogic.createAbilitySectionField({
					name: 'Напруження',
					effect: 'Ціль отримує 2 сплески. Ви ослаблені та уповільнені (рятівний кидок знімає).'
				})
			]
		}),
		FactoryLogic.createAbility({
			id: 'talent-ability-22',
			name: 'Гіперзвуковий',
			description: 'Ви рухаєтесь настільки швидко, що встигаєте повернутися й спостерігати, як вороги відчувають наслідки.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Area, AbilityKeyword.Charge, AbilityKeyword.Psionic, AbilityKeyword.Telekinesis],
			distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Line, value: 5, value2: 2, within: 1 })],
			target: 'Кожен ворог у зоні',
			cost: 9,
			sections: [
				FactoryLogic.createAbilitySectionText('Ви телепортуєтесь на клітинку з протилежного боку зони перед виконанням кидка сили.'),
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Reason],
						tier1: '12 звукової шкоди',
						tier2: '18 звукової шкоди',
						tier3: '24 звукової шкоди'
					})
				),
				FactoryLogic.createAbilitySectionField({
					name: 'Напруження',
					effect: 'Якщо ви отримуєте результат рівня 2 або кращий, ви уповільнені до кінця вашого ходу, а кожна ціль уповільнена до кінця її ходу.'
				})
			]
		}),
		FactoryLogic.createAbility({
			id: 'talent-ability-23',
			name: 'Пастка розуму',
			description: 'Ви вчіплюєтесь у мозок здобичі і не відпускаєте — як пісня, що не виходить з голови.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Psionic, AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Telepathy],
			distance: [FactoryLogic.distance.createRanged(10)],
			target: 'Одна істота',
			cost: 9,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Presence],
						tier1: '10 + Р психічної шкоди; Р < [слабкий], уповільнений (рятівний кидок знімає)',
						tier2: '14 + Р психічної шкоди; Р < [середній], уповільнений (рятівний кидок знімає)',
						tier3: '20 + Р психічної шкоди; Р < [сильний], уповільнений (рятівний кидок знімає)'
					})
				),
				FactoryLogic.createAbilitySectionText('Поки ціль уповільнена таким чином, вона отримує 3 психічної шкоди за кожну клітинку, яку вона добровільно покидає.'),
				FactoryLogic.createAbilitySectionField({
					name: 'Напруження',
					effect: 'Поки ціль уповільнена таким чином, вона отримує 5 психічної шкоди за кожну клітинку, яку вона добровільно покидає. Ви маєте подвійну bane до кидків здібностей проти цієї цілі, поки вона уповільнена таким чином.'
				})
			]
		}),
		FactoryLogic.createAbility({
			id: 'talent-ability-24',
			name: 'Привʼязка душі',
			description: 'Ви випускаєте пронизливий болт психічної енергії, що проходить крізь двох ворогів і залишає тонку невловиму нитку між ними.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Animapathy, AbilityKeyword.Psionic, AbilityKeyword.Ranged, AbilityKeyword.Strike],
			distance: [FactoryLogic.distance.createRanged(10)],
			target: 'Двоє ворогів',
			cost: 9,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Presence],
						tier1: '8 шкоди; Л < [слабкий], ціль зшивається з іншою ціллю (рятівний кидок знімає)',
						tier2: '13 шкоди; Л < [середній], ціль зшивається з іншою ціллю (рятівний кидок знімає)',
						tier3: '17 шкоди; Л < [сильний], ціль зшивається з іншою ціллю (рятівний кидок знімає)'
					})
				),
				FactoryLogic.createAbilitySectionText('Якщо будь-яка ціль стає зшитою з іншою, обидві цілі зшиваються разом. Поки вони зшиті, ціль має bane до кидків сили, коли вона не суміжна зі створінням, з яким вона зшита. Коли зшита ціль отримує шкоду, яка не була завдана або не була також отримана іншою зшитою ціллю, кожна інша зшита ціль отримує половину шкоди від початкової.'),
				FactoryLogic.createAbilitySectionField({
					name: 'Напруження',
					effect: 'Замість цього ви націлюєте себе та трьох ворогів.'
				})
			]
		}),
		FactoryLogic.createAbility({
			id: 'talent-ability-25',
			name: 'Сумнів',
			description: 'Ви тягнете за нитки аніми ворога і розплітаєте їх, дозволяючи іншим скористатися їхнім поривом.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Animapathy, AbilityKeyword.Psionic, AbilityKeyword.Ranged, AbilityKeyword.Strike],
			distance: [FactoryLogic.distance.createRanged(10)],
			target: 'Одна істота',
			cost: 11,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Presence],
						tier1: '10 + П шкоди; П < [слабкий], ослаблений (рятівний кидок знімає)',
						tier2: '14 + П шкоди; П < [середній], ослаблений (рятівний кидок знімає)',
						tier3: '20 + П шкоди; П < [сильний], ослаблений і уповільнений (рятівний кидок знімає)'
					})
				),
				FactoryLogic.createAbilitySectionText('Ця здібність отримує перевагу проти цілі з душею. Після того як ви зробите кидок сили, ви або один союзник у межах відстані маєте подвійний edge на наступний кидок сили, який ви зробите до кінця зустрічі.'),
				FactoryLogic.createAbilitySectionField({
					name: 'Напруження',
					effect: 'Ви відчуваєте пригніченість до завершення відпочинку. Якщо ви отримуєте результат рівня 3 на кидку сили, ви та ціль маєте слабкість до шкоди 5 (рятівний кидок знімає).'
				})
			]
		}),
		FactoryLogic.createAbility({
			id: 'talent-ability-26',
			name: 'Стирання памʼяті',
			description: 'Ви намагаєтесь змусити їх забути всю свою підготовку.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Psionic, AbilityKeyword.Ranged, AbilityKeyword.Telepathy],
			distance: [FactoryLogic.distance.createMelee(2)],
			target: 'Одна істота',
			cost: 11,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Reason],
						tier1: '12 + Р шкоди; Р < [слабкий], ціль отримує bane до свого наступного кидка сили',
						tier2: '17 + Р шкоди; Р < [середній], ціль отримує bane до кидків сили (рятівний кидок знімає)',
						tier3: '23 + Р шкоди; Р < [сильний], ціль має подвійну bane до кидків сили (рятівний кидок знімає)'
					})
				),
				FactoryLogic.createAbilitySectionText('Ціль не може спілкуватися з ким-небудь до кінця зустрічі.'),
				FactoryLogic.createAbilitySectionField({
					name: 'Напруження',
					effect: 'Ви отримуєте 3d6 шкоди.'
				})
			]
		}),
		FactoryLogic.createAbility({
			id: 'talent-ability-27',
			name: 'Омолодження',
			description: 'Ви змінюєте течію часу в тілі цілі, повертаючи його до попереднього стану.',
			type: FactoryLogic.type.createManeuver(),
			keywords: [AbilityKeyword.Chronopathy, AbilityKeyword.Psionic, AbilityKeyword.Ranged],
			distance: [FactoryLogic.distance.createRanged(10)],
			target: 'Одна істота',
			cost: 11,
			sections: [
				FactoryLogic.createAbilitySectionText(`
Виберіть два з наступних ефектів:

* Ціль може витратити будь-яку кількість Відновлень.
* Ціль отримує 1 одиницю свого Героїчного ресурсу і може зняти будь-які ефекти, що знімаються рятівним кидком або закінчуються в кінці її ходу.
* Ціль отримує 2 сплески і отримує бонус +3 до швидкості до кінця зустрічі.`),
				FactoryLogic.createAbilitySectionField({
					name: 'Напруження',
					effect: 'Ви і ціль обидва назавжди помітно молодшаєте (еквівалентно 20 рокам для людини, мінімум до 18 років). Додатково, ви ослаблені та уповільнені (рятівний кидок знімає).'
				})
			]
		}),
		FactoryLogic.createAbility({
			id: 'talent-ability-28',
			name: 'Сталь',
			description: 'Шкіра цілі вкривається міцним металом.',
			type: FactoryLogic.type.createManeuver(),
			keywords: [AbilityKeyword.Metamorphosis, AbilityKeyword.Psionic, AbilityKeyword.Ranged],
			distance: [FactoryLogic.distance.createRanged(10)],
			target: 'Одна істота',
			cost: 11,
			sections: [
				FactoryLogic.createAbilitySectionText('Ціль має імунітет до шкоди 5 і не може бути уповільнена або ослаблена до початку вашого наступного ходу. Коли ціль примусово переміщує істоту або обʼєкт під цим ефектом, відстань примусового переміщення отримує бонус +5.'),
				FactoryLogic.createAbilitySectionField({
					name: 'Напруження',
					effect: 'Ви не можете використовувати маневри (рятівний кидок знімає).'
				})
			]
		})
	],
	subclasses: [
		chronopathy,
		telekinesis,
		telepathy
	],
	level: 1,
	characteristics: []
};
