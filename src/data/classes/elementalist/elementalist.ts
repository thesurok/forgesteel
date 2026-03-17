import { AbilityDistanceType } from '@/enums/ability-distance-type';
import { AbilityKeyword } from '@/enums/ability-keyword';
import { Characteristic } from '@/enums/characteristic';
import { DamageModifierType } from '@/enums/damage-modifier-type';
import { DamageType } from '@/enums/damage-type';
import { FactoryLogic } from '@/logic/factory-logic';
import { FeatureField } from '@/enums/feature-field';
import { HeroClass } from '@/models/class';
import { KitArmor } from '@/enums/kit-armor';
import { KitWeapon } from '@/enums/kit-weapon';
import { PerkList } from '@/enums/perk-list';
import { SkillList } from '@/enums/skill-list';
import { earth } from '@/data/classes/elementalist/earth';
import { fire } from '@/data/classes/elementalist/fire';
import { green } from '@/data/classes/elementalist/green';
import { voidSubclass } from '@/data/classes/elementalist/void';

export const elementalist: HeroClass = {
	id: 'class-elementalist',
	name: 'Елементаліст',
	description: `
Повітря — для руху. Земля — для стійкості. Вогонь — для руйнування. Вода — для змін. Зелень — для зростання. Гниль — для смерті. Пустота — для таємниці. Роки навчання, практики та вивчення томів дали вам одкровення, що дозволяють маніпулювати цими будівельними блоками реальності. Тепер ви використовуєте своє володіння сімома елементами, щоб руйнувати, творити й викривляти світ магією.

Як елементаліст, ви можете обрушити свою лють на поле ворогів, ставити ворога саме туди, куди хочете, ослаблювати супротивників шкідливими ефектами, оберігати себе та союзників від небезпеки, змінювати місцевість, викривляти простір і багато іншого. Вибір елементальної спеціалізації визначає, у чому ви найсильніші.`,
	type: 'standard',
	subclassName: 'Elemental Specialization',
	subclassCount: 1,
	primaryCharacteristicsOptions: [
		[Characteristic.Reason]
	],
	primaryCharacteristics: [],
	featuresByLevel: [
		{
			level: 1,
			features: [
				FactoryLogic.feature.createBonus({
					id: 'elementalist-stamina',
					field: FeatureField.Stamina,
					value: 18,
					valuePerLevel: 6
				}),
				FactoryLogic.feature.createBonus({
					id: 'elementalist-recoveries',
					field: FeatureField.Recoveries,
					value: 8
				}),
				FactoryLogic.feature.createHeroicResource({
					id: 'elementalist-resource',
					name: 'Есенція',
					gains: [
						{
							tag: 'start',
							trigger: 'На початку вашого ходу',
							value: '2'
						},
						{
							tag: 'take-damage',
							trigger: 'Першого разу в раунді, коли ви або істота в межах 10 клітинок від вас отримує пошкодження, яке не є безтиповим або святим',
							value: '1'
						}
					]
				}),
				FactoryLogic.feature.createSkillChoice({
					id: 'elementalist-1-1',
					selected: ['Magic']
				}),
				FactoryLogic.feature.createSkillChoice({
					id: 'elementalist-1-2',
					listOptions: [SkillList.Crafting, SkillList.Lore],
					count: 3
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'elementalist-1-4',
						name: 'Кидок стихії',
						description: 'Ви метаєте кулю стихійної енергії в нічого не підозрюючого ворога.',
						type: FactoryLogic.type.createMain({ qualifiers: ['can be used as a ranged free strike'], freeStrike: true }),
						keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged, AbilityKeyword.Strike],
						distance: [FactoryLogic.distance.createRanged(10)],
						target: 'Одна істота або предмет',
						sections: [
							FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
								characteristic: [Characteristic.Reason],
								tier1: '2 + Р шкоди',
								tier2: '4 + Р шкоди',
								tier3: '6 + Р шкоди'
							})),
							FactoryLogic.createAbilitySectionText('Коли ви наносите цей удар, оберіть тип шкоди з одного з наступних варіантів: кислотна шкода, холодна шкода, шкода скверни, вогняна шкода, блискавична шкода, отруйна шкода або звукова шкода.')
						]
					})
				}),
				FactoryLogic.feature.create({
					id: 'elementalist-1-5',
					name: 'Постійна Магія',
					description: `
	Деякі ваші героїчні здібності мають запис про постійний ефект. Наприклад, здібність «Миттєве Викопування» може мати позначку «Постійний 1». Коли ви використовуєте постійну здібність, ви вирішуєте, чи підтримуватимете її, і починаєте підтримку відразу після першого використання. Якщо ви підтримуєте постійну здібність у бою, кількість есенції, яку ви отримуєте на початку свого ходу, зменшується на значення, рівне постійному значенню цієї здібності, що й дає їй її постійний ефект. Всі ваші активні постійні здібності завершуються в кінці сутички.

	Ви не можете підтримувати здібності, які призвели б до отримання відʼємної кількості есенції на початку ходу. Ви можете припинити підтримку здібності в будь-який момент (дія не потрібна).

	Якщо ви підтримуєте одну й ту саму здібність на кількох цілях і її ефект включає кидок сили, ви виконуєте цей кидок один раз і застосовуєте результат до всіх цілей. Істота не може бути під впливом декількох екземплярів однієї й тієї ж постійної здібності.

	Якщо ви отримуєте пошкодження, що дорівнює або перевищує пʼятикратне значення вашого Розуму за один хід, ви припиняєте підтримку всіх постійних здібностей. Наприклад, якщо ваш Розум дорівнює 2 і ви підтримуєте «Миттєве Викопування», отримання 10 або більше пошкодження за один хід змусить вас припинити підтримку цієї здібності.` }),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'elementalist-1-6',
						name: 'Практична Магія',
						description: 'Ваша майстерність стихій дозволяє налаштовувати ваші заклинання.',
						type: FactoryLogic.type.createManeuver(),
						keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged],
						distance: [FactoryLogic.distance.createSelf()],
						target: 'Себе',
						sections: [
							FactoryLogic.createAbilitySectionText(`
Виберіть один із наступних ефектів:

* Ви використовуєте маневр Knockback, але його відстань стає рівною дальності вашої здібності "Кидок стихії", і для кидка сили ви використовуєте Розум замість Сили.
				* Ви обираєте істоту в межах дальності вашої здібності "Кидок стихії" та один із типів шкоди: кислотна шкода, холодна шкода, шкода скверни, вогняна шкода, блискавична шкода, отруйна шкода або звукова шкода. Та істота отримує шкоду вибраного типу, рівну вашому показникові Розуму.
* Ви телепортуєтеся на відстань до числа клітинок, що дорівнює вашому показникові Розуму. Якщо ви обираєте цю опцію, ви можете витратити есенцію, щоб телепортуватися на 1 додаткову клітинку за кожну витрачену есенцію.
							`)
						]
					})
				}),
				FactoryLogic.feature.createChoice({
					id: 'elementalist-1-7',
					name: 'Зачарування',
					options: [
						{
							feature: FactoryLogic.feature.createMultiple({
								id: 'elementalist-1-7a',
								name: 'Зачарування Бою',
								description: 'Ви можете носити легку броню й ефективно володіти легкою зброєю, навіть якщо у вас немає набору.',
								features: [
									FactoryLogic.feature.createBonus({
										id: 'elementalist-1-7aa',
										field: FeatureField.Stamina,
										valuePerEchelon: 3
									}),
									FactoryLogic.feature.create({
										id: 'elementalist-1-7ab',
										name: 'Зачарування Бою',
										description: 'Ви можете носити легку броню й ефективно володіти легкою зброєю, навіть якщо у вас немає набору. Поки ви тримаєте легку зброю, ви отримуєте +1 до шкоди від здібностей зі зброєю, включно з безкоштовними ударами. Ви можете використовувати скарби легкої броні та легкої зброї. Якщо у вас є набір, ви не можете взяти це зачарування.'
									}),
									FactoryLogic.feature.createProficiency({
										id: 'elementalist-1-7ac',
										weapons: [KitWeapon.Light],
										armor: [KitArmor.Light]
									})
								]
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createMultiple({
								id: 'elementalist-1-7b',
								name: 'Зачарування Швидкості',
								description: 'Ви отримуєте бонус до швидкості та до відстані, яку можете змістити під час дії «Відступ».',
								features: [
									FactoryLogic.feature.createBonus({
										id: 'elementalist-1-7ba',
										field: FeatureField.Speed,
										value: 1
									}),
									FactoryLogic.feature.createBonus({
										id: 'elementalist-1-7bb',
										field: FeatureField.Disengage,
										value: 1
									})
								]
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createAbilityDamage({
								id: 'elementalist-1-7c',
								name: 'Зачарування Руйнування',
								description: 'Ви отримуєте бонус до завданої шкоди від магічних здібностей.',
								keywords: [AbilityKeyword.Magic],
								value: 1
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createAbilityDistance({
								id: 'elementalist-1-7d',
								name: 'Зачарування Дальності',
								description: 'Ви маєте бонус до дальності ваших далекобійних магічних здібностей.',
								keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged],
								value: 2
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createMultiple({
								id: 'elementalist-1-7e',
								name: 'Зачарування Постійності',
								features: [
									FactoryLogic.feature.createBonus({
										id: 'elementalist-1-7e-1',
										field: FeatureField.Stamina,
										valuePerEchelon: 6
									}),
									FactoryLogic.feature.createBonus({
										id: 'elementalist-1-7e-2',
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
					id: 'elementalist-1-8',
					name: 'Оберіг Елементаліста',
					options: [
						{
							feature: FactoryLogic.feature.create({
								id: 'elementalist-1-8a',
								name: 'Оберіг Приємних Наслідків',
								description: 'Захисне поле пустотної магії поглинає насильство, спрямоване на вас, а потім дозволяє повернути його ворогам. Першого разу в кожному раунді, коли ви отримуєте пошкодження, ви отримуєте 1 сплеск.'
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createChoice({
								id: 'elementalist-1-8b',
								name: 'Оберіг Відмінного Захисту',
								description: 'Ви виткаєте навколо себе щит, що поєднує силу всіх стихій. Ви маєте імунітет до пошкоджень наступних типів: кислотна шкода, холодна шкода, шкода скверни, вогняна шкода, блискавична шкода, отруйна шкода або звукова шкода у значенні, рівному вашому показникові Розуму.',
								options: [
									{
										feature: FactoryLogic.feature.createDamageModifier({
											id: 'elementalist-1-8ba',
											modifiers: [
												FactoryLogic.damageModifier.createCharacteristic({
													damageType: DamageType.Acid,
													modifierType: DamageModifierType.Immunity,
													characteristics: [Characteristic.Reason]
												})
											]
										}),
										value: 1
									},
									{
										feature: FactoryLogic.feature.createDamageModifier({
											id: 'elementalist-1-8bb',
											modifiers: [
												FactoryLogic.damageModifier.createCharacteristic({
													damageType: DamageType.Cold,
													modifierType: DamageModifierType.Immunity,
													characteristics: [Characteristic.Reason]
												})
											]
										}),
										value: 1
									},
									{
										feature: FactoryLogic.feature.createDamageModifier({
											id: 'elementalist-1-8bc',
											modifiers: [
												FactoryLogic.damageModifier.createCharacteristic({
													damageType: DamageType.Corruption,
													modifierType: DamageModifierType.Immunity,
													characteristics: [Characteristic.Reason]
												})
											]
										}),
										value: 1
									},
									{
										feature: FactoryLogic.feature.createDamageModifier({
											id: 'elementalist-1-8bd',
											modifiers: [
												FactoryLogic.damageModifier.createCharacteristic({
													damageType: DamageType.Fire,
													modifierType: DamageModifierType.Immunity,
													characteristics: [Characteristic.Reason]
												})
											]
										}),
										value: 1
									},
									{
										feature: FactoryLogic.feature.createDamageModifier({
											id: 'elementalist-1-8be',
											modifiers: [
												FactoryLogic.damageModifier.createCharacteristic({
													damageType: DamageType.Lightning,
													modifierType: DamageModifierType.Immunity,
													characteristics: [Characteristic.Reason]
												})
											]
										}),
										value: 1
									},
									{
										feature: FactoryLogic.feature.createDamageModifier({
											id: 'elementalist-1-8bf',
											modifiers: [
												FactoryLogic.damageModifier.createCharacteristic({
													damageType: DamageType.Poison,
													modifierType: DamageModifierType.Immunity,
													characteristics: [Characteristic.Reason]
												})
											]
										}),
										value: 1
									},
									{
										feature: FactoryLogic.feature.createDamageModifier({
											id: 'elementalist-1-8bg',
											modifiers: [
												FactoryLogic.damageModifier.createCharacteristic({
													damageType: DamageType.Sonic,
													modifierType: DamageModifierType.Immunity,
													characteristics: [Characteristic.Reason]
												})
											]
										}),
										value: 1
									}
								]
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'elementalist-1-8c',
									name: 'Оберіг Природної Лагоди',
									description: 'Ви накопичуєте зелену енергію в тілі, що дозволяє створювати потужні лози, коли ви опиняєтесь у небезпеці.',
									type: FactoryLogic.type.createTrigger('A creature within a number of squares equal to your Reason score deals damage to you,', { free: true }),
									distance: [FactoryLogic.distance.createSelf()],
									target: 'Себе',
									sections: [
										FactoryLogic.createAbilitySectionText('Ви зсуваєте атакуючу істоту на відстань до числа клітинок, рівного вашому показникові Розуму.')
									]
								})
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'elementalist-1-8d',
									name: 'Оберіг Несподіваної Реактивності',
									description: 'Ви використовуєте вогняну магію, щоб створити оберіг вибухової енергії.',
									type: FactoryLogic.type.createTrigger('An adjacent creature deals damage to you.', { free: true }),
									distance: [FactoryLogic.distance.createSelf()],
									target: 'Себе',
									sections: [
										FactoryLogic.createAbilitySectionText('Ви відштовхуєте цю істоту на відстань, рівну подвоєному вашому показникові Розуму.')
									]
								})
							}),
							value: 1
						}
					]
				}),
				FactoryLogic.feature.createClassAbilityChoice({
					id: 'elementalist-1-9',
					cost: 'signature',
					count: 2
				}),
				FactoryLogic.feature.createClassAbilityChoice({
					id: 'elementalist-1-10',
					cost: 3
				}),
				FactoryLogic.feature.createClassAbilityChoice({
					id: 'elementalist-1-11',
					cost: 5
				})
			]
		},
		{
			level: 2,
			features: [
				FactoryLogic.feature.createPerk({
					id: 'elementalist-2-1',
					lists: [PerkList.Crafting, PerkList.Lore, PerkList.Supernatural]
				}),
				FactoryLogic.feature.createClassAbilityChoice({
					id: 'elementalist-2-2',
					cost: 5,
					minLevel: 2
				})
			]
		},
		{
			level: 3,
			features: [
				FactoryLogic.feature.createClassAbilityChoice({
					id: 'elementalist-3-1',
					cost: 7,
					minLevel: 3
				})
			]
		},
		{
			level: 4,
			features: [
				FactoryLogic.feature.createCharacteristicBonus({
					id: 'elementalist-4-1a',
					name: 'Підвищення характеристики: Розум',
					characteristic: Characteristic.Reason,
					value: 1
				}),
				FactoryLogic.feature.createChoice({
					id: 'elementalist-4-1b',
					name: 'Підвищення характеристики: Додатковий вибір',
					options: [
						{
							feature: FactoryLogic.feature.createCharacteristicBonus({
								id: 'elementalist-4-1ba',
								characteristic: Characteristic.Might,
								value: 1
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createCharacteristicBonus({
								id: 'elementalist-4-1bb',
								characteristic: Characteristic.Agility,
								value: 1
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createCharacteristicBonus({
								id: 'elementalist-4-1bc',
								characteristic: Characteristic.Reason,
								value: 1
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createCharacteristicBonus({
								id: 'elementalist-4-1bd',
								characteristic: Characteristic.Intuition,
								value: 1
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createCharacteristicBonus({
								id: 'elementalist-4-1be',
								characteristic: Characteristic.Presence,
								value: 1
							}),
							value: 1
						}
					]
				}),
				FactoryLogic.feature.createHeroicResourceGain({
					id: 'elementalist-4-2',
					name: 'Джерело Есенції',
					tag: 'take-damage 2',
					trigger: 'The first time in a round that you or a creature within 10 of you takes damage that isn’t untyped or holy',
					value: '2',
					replacesTags: ['take-damage']
				}),
				FactoryLogic.feature.createPerk({
					id: 'elementalist-4-3',
					lists: [PerkList.Interpersonal, PerkList.Crafting, PerkList.Lore, PerkList.Supernatural, PerkList.Intrigue, PerkList.Exploration]
				}),
				FactoryLogic.feature.createSkillChoice({
					id: 'elementalist-4-4',
					listOptions: [SkillList.Crafting, SkillList.Exploration, SkillList.Interpersonal, SkillList.Lore, SkillList.Intrigue]
				})
			]
		},
		{
			level: 5,
			features: [
				FactoryLogic.feature.createClassAbilityChoice({
					id: 'elementalist-5-1',
					cost: 9,
					minLevel: 5
				})
			]
		},
		{
			level: 6,
			features: [
				FactoryLogic.feature.createPerk({
					id: 'elementalist-6-1',
					lists: [PerkList.Crafting, PerkList.Lore, PerkList.Supernatural]
				}),
				FactoryLogic.feature.create({
					id: 'elementalist-6-2',
					name: 'Вирдінг',
					description: `Ви можете витратити 10 неперервних хвилин, щоб створити вільно оформлене чарівне заклинання для різних ситуацій. Оберіть один із наступних магічних ефектів:

* Ви створюєте буденний обʼєкт розміру, рівного вашому показникові Розуму, або менший.
* Ви споруджуєте притулок, придатний для двадцяти істот, що триває 24 години й не може бути виявлений ворогами.
* Ви відновлюєте всю Витривалість у буденному обʼєкті розміру, рівного вашому показникові Розуму, або меншим.
* Оберіть куб розміром до вашого показника Розуму в межах 5 клітин. Ви можете заповнити цю область важкопрохідною місцевістю або природними явищами, такими як вогонь, вода чи рослинність, або очистити її від них.
* Ви можете зберегти труп або до 5 фунтів їжі протягом тижня, або ж спричинити, щоб труп або ця кількість їжі миттєво згнили.
* Ви створюєте печатку на поверхні, яку ніхто, крім вас, не може побачити чи відчути. Коли істота наблизиться до поверхні, ви можете бачити та чути через печатку доти, доки істота залишається поруч із нею. При створенні печатки ви можете обмежити кількість істот, які її активують, обравши ключове слово істоти (наприклад, Undead), конкретне імʼя (наприклад, Ajax the Invincible) або організацію (наприклад, Black Iron Pact). Якщо ви це зробите, печатка сповіщає вас лише тоді, коли проходять істоти з вказаним ключовим словом, імʼям або належністю. Якщо ви створите другу печатку, перша зникне. Ви можете скасувати печатку будь-коли (дія не потрібна).`
				}),
				FactoryLogic.feature.createClassAbilityChoice({
					id: 'elementalist-6-3',
					cost: 9,
					minLevel: 6
				})
			]
		},
		{
			level: 7,
			features: [
				FactoryLogic.feature.createCharacteristicBonus({
					id: 'elementalist-7-1a',
					characteristic: Characteristic.Might,
					value: 1
				}),
				FactoryLogic.feature.createCharacteristicBonus({
					id: 'elementalist-7-1b',
					characteristic: Characteristic.Agility,
					value: 1
				}),
				FactoryLogic.feature.createCharacteristicBonus({
					id: 'elementalist-7-1c',
					characteristic: Characteristic.Reason,
					value: 1
				}),
				FactoryLogic.feature.createCharacteristicBonus({
					id: 'elementalist-7-1d',
					characteristic: Characteristic.Intuition,
					value: 1
				}),
				FactoryLogic.feature.createCharacteristicBonus({
					id: 'elementalist-7-1e',
					characteristic: Characteristic.Presence,
					value: 1
				}),
				FactoryLogic.feature.createHeroicResourceGain({
					id: 'elementalist-7-2',
					name: 'Приплив Есенції',
					tag: 'start 2',
					trigger: 'На початку вашого ходу',
					value: '3',
					replacesTags: ['start']
				}),
				FactoryLogic.feature.createSkillChoice({
					id: 'elementalist-7-3',
					listOptions: [SkillList.Crafting, SkillList.Exploration, SkillList.Interpersonal, SkillList.Intrigue, SkillList.Lore]
				})
			]
		},
		{
			level: 8,
			features: [
				FactoryLogic.feature.createPerk({
					id: 'elementalist-8-1',
					lists: [PerkList.Exploration, PerkList.Interpersonal, PerkList.Intrigue, PerkList.Crafting, PerkList.Lore, PerkList.Supernatural]
				}),
				FactoryLogic.feature.createClassAbilityChoice({
					id: 'elementalist-8-2',
					cost: 11,
					minLevel: 8
				})
			]
		},
		{
			level: 9,
			features: [
				FactoryLogic.feature.create({
					id: 'elementalist-9-1',
					name: 'Великий Вирдінг',
					description: `
		Ви опанували магію формування вирду і можете використовувати функцію Вирдінг як основну дію.

		Додатково, коли у вас 5 або більше Перемог, оберіть один із наступних типів шкоди: кислотна шкода, холодна шкода, шкода скверни, вогняна шкода, блискавична шкода, отруйна шкода або звукова шкода. Ви маєте імунітет до цього типу.`
				}),
				FactoryLogic.feature.createClassAbilityChoice({
					id: 'elementalist-9-2',
					cost: 11,
					minLevel: 9
				})
			]
		},
		{
			level: 10,
			features: [
				FactoryLogic.feature.createHeroicResource({
					id: 'elementalist-10-1',
					name: 'Дихання',
					type: 'epic',
					gains: [
						{
							tag: '',
							trigger: 'Після завершення перепочинку',
							value: 'XP gained'
						}
					],
					description: `
Ви можете витрачати будь- яку кількість дихання, щоб отримати есенцію(дія не потрібна).Коли ви це робите, 1 дихання стає 3 есенції.

Дихання зберігається, доки ви не перетворите його на есенцію.`
				}),
				FactoryLogic.feature.createCharacteristicBonus({
					id: 'elementalist-10-2',
					name: 'Підвищення характеристики: Розум',
					characteristic: Characteristic.Reason,
					value: 1
				}),
				FactoryLogic.feature.createChoice({
					id: 'elementalist-10-3',
					name: 'Підвищення характеристики: Додатковий вибір',
					options: [
						{
							feature: FactoryLogic.feature.createCharacteristicBonus({
								id: 'elementalist-10-3-1',
								characteristic: Characteristic.Might,
								value: 1
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createCharacteristicBonus({
								id: 'elementalist-10-3-2',
								characteristic: Characteristic.Agility,
								value: 1
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createCharacteristicBonus({
								id: 'elementalist-10-3-4',
								characteristic: Characteristic.Intuition,
								value: 1
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createCharacteristicBonus({
								id: 'elementalist-10-3-5',
								characteristic: Characteristic.Presence,
								value: 1
							}),
							value: 1
						}
					]
				}),
				FactoryLogic.feature.createHeroicResourceGain({
					id: 'elementalist-10-4',
					name: 'Сутність Есенції',
					tag: 'start 3',
					trigger: 'На початку вашого ходу',
					value: '4',
					replacesTags: ['start', 'start 2']
				}),
				FactoryLogic.feature.createPerk({
					id: 'elementalist-10-5',
					lists: [PerkList.Crafting, PerkList.Lore, PerkList.Supernatural]
				}),
				FactoryLogic.feature.createSkillChoice({
					id: 'elementalist-10-6',
					listOptions: [SkillList.Crafting, SkillList.Exploration, SkillList.Interpersonal, SkillList.Intrigue, SkillList.Lore]
				})
			]
		}
	],
	abilities: [
		FactoryLogic.createAbility({
			id: 'elementalist-ability-1',
			name: 'Накликати Плідну Гнилизну',
			description: 'Ваше прокляття змушує плоть ворога гнити, утворюючи спори, що допомагають вашим союзникам.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Green, AbilityKeyword.Rot, AbilityKeyword.Magic, AbilityKeyword.Ranged, AbilityKeyword.Strike],
			distance: [FactoryLogic.distance.createRanged(10)],
			target: 'Одна істота',
			cost: 'signature',
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Reason],
						tier1: '2 + Р шкоди скверни',
						tier2: '4 + Р шкоди скверни',
						tier3: '6 + Р шкоди скверни'
					})
				),
				FactoryLogic.createAbilitySectionText('Оберіть себе або одного союзника в межах дистанції. Цей персонаж може припинити один ефект на собі, який припиняється спас-кидком або завершується в кінці їхнього ходу.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'elementalist-ability-2',
			name: 'Поділене Спалення',
			description: 'Два потоки полумʼя вириваються за вашим наказом.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Fire, AbilityKeyword.Magic, AbilityKeyword.Ranged, AbilityKeyword.Strike],
			distance: [FactoryLogic.distance.createRanged(10)],
			target: 'Дві істоти або предмети',
			cost: 'signature',
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Reason],
						tier1: '2 вогняної шкоди',
						tier2: '4 вогняної шкоди',
						tier3: '6 вогняної шкоди'
					})
				)
			]
		}),
		FactoryLogic.createAbility({
			id: 'elementalist-ability-3',
			name: 'Хватка Потойбіччя',
			description: 'Ви поглинаєте життєву енергію іншої істоти і використовуєте її для телепортації.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Magic, AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Void],
			distance: [FactoryLogic.distance.createMelee()],
			target: 'Одна істота',
			cost: 'signature',
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Reason],
						tier1: '3 + Р шкоди скверни',
						tier2: '6 + Р шкоди скверни',
						tier3: '9 + Р шкоди скверни'
					})
				),
				FactoryLogic.createAbilitySectionText('Ви можете телепортуватися на відстань до числа клітинок, рівного вашому показникові Розуму.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'elementalist-ability-4',
			name: 'Зелень Всередині, Зелень Зовні',
			description: 'Хлисткі лози вириваються з тіла ворога і хапають іншого неподалік.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Green, AbilityKeyword.Magic, AbilityKeyword.Ranged, AbilityKeyword.Strike],
			distance: [FactoryLogic.distance.createRanged(10)],
			target: 'Одна істота',
			cost: 'signature',
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Reason],
						tier1: '2 + Р шкоди',
						tier2: '5 + Р шкоди',
						tier3: '7 + Р шкоди'
					})
				),
				FactoryLogic.createAbilitySectionText('Ви зсуваєте одну істоту, що знаходиться в межах 10 клітинок від цілі, на до 2 клітинок.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'elementalist-ability-5',
			name: 'Метеоритне Знайомство',
			description: 'Ви наносите ворогу легкий поштовх — ніби від удару астероїда.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Earth, AbilityKeyword.Magic, AbilityKeyword.Melee, AbilityKeyword.Strike],
			distance: [FactoryLogic.distance.createMelee()],
			target: 'Одна істота або предмет',
			cost: 'signature',
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Reason],
						tier1: '3 + Р шкоди; відштовхнути 2',
						tier2: '5 + Р шкоди; відштовхнути 3',
						tier3: '8 + Р шкоди; відштовхнути 4'
					})
				)
			]
		}),
		FactoryLogic.createAbility({
			id: 'elementalist-ability-6',
			name: 'Промінь Болісного Саморефлексування',
			description: 'Ви завдаєте болю й сієте сумніви в рівній мірі.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Void],
			distance: [FactoryLogic.distance.createRanged(10)],
			target: 'Одна істота або предмет',
			cost: 'signature',
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Reason],
						tier1: '2 + Р шкоди скверни; Р < [weak], сповільнений (рят. кидок)',
						tier2: '4 + Р шкоди скверни; Р < [average], сповільнений (рят. кидок)',
						tier3: '6 + Р шкоди скверни; Р < [strong], сповільнений (рят. кидок)'
					})
				)
			]
		}),
		FactoryLogic.createAbility({
			id: 'elementalist-ability-7',
			name: 'Неспокійна Земля',
			description: 'Раптова буря уламків атакує ваших ворогів і ускладнює їхній рух.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Area, AbilityKeyword.Earth, AbilityKeyword.Magic, AbilityKeyword.Ranged],
			distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Cube, value: 2, within: 10 })],
			target: 'Кожен ворог у зоні',
			cost: 'signature',
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Reason],
						tier1: '2 шкоди',
						tier2: '5 шкоди',
						tier3: '7 шкоди'
					})
				),
				FactoryLogic.createAbilitySectionText('Ґрунт під зоною стає важкопрохідною місцевістю для ворогів.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'elementalist-ability-8',
			name: 'Вʼязке Полумʼя',
			description: 'У місці вашого удару виривається потужний струмінь густого вогню.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Fire, AbilityKeyword.Magic, AbilityKeyword.Ranged, AbilityKeyword.Strike],
			distance: [FactoryLogic.distance.createRanged(10)],
			target: 'Одна істота або предмет',
			cost: 'signature',
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Reason],
						tier1: '2 + Р вогняної шкоди; відштовхнути 2',
						tier2: '5 + Р вогняної шкоди; відштовхнути 3',
						tier3: '7 + Р вогняної шкоди; відштовхнути 4'
					})
				)
			]
		}),
		FactoryLogic.createAbility({
			id: 'elementalist-ability-9',
			name: 'Споглядай Таємницю',
			description: 'Ви відкриваєте розлом у пустоту, щоб дошкуляти ворогам.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Area, AbilityKeyword.Magic, AbilityKeyword.Ranged, AbilityKeyword.Void],
			distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Cube, value: 3, within: 10 })],
			target: 'Кожен ворог у зоні',
			cost: 3,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Reason],
						tier1: '2 psychic шкоди',
						tier2: '4 psychic шкоди',
						tier3: '6 psychic шкоди'
					})
				),
				FactoryLogic.createAbilitySectionSpend({
					name: 'Утримання',
					effect: 'На початку вашого ходу ви можете як маневр використати цю здібність ще раз без витрати есенції.'
				})
			]
		}),
		FactoryLogic.createAbility({
			id: 'elementalist-ability-10',
			name: 'Плоть — Горнило',
			description: 'Вогонь огортає вашу ціль і продовжує нищити її.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Fire, AbilityKeyword.Magic, AbilityKeyword.Ranged, AbilityKeyword.Strike],
			distance: [FactoryLogic.distance.createRanged(10)],
			target: 'Одна істота або предмет',
			cost: 3,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Reason],
						tier1: '5 + Р вогняної шкоди',
						tier2: '8 + Р вогняної шкоди',
						tier3: '11 + Р вогняної шкоди'
					})
				),
				FactoryLogic.createAbilitySectionSpend({
					name: 'Утримання',
					effect: 'Якщо ціль знаходиться в межах дистанції на початку вашого ходу, виконайте кидок сили для цієї здібності ще раз.'
				})
			]
		}),
		FactoryLogic.createAbility({
			id: 'elementalist-ability-11',
			name: 'Оживляючий Ріст',
			description: 'З ворога виростають гриби, що висмоктують його життєві сили й поширюють зміцнювальні спори.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Green, AbilityKeyword.Magic, AbilityKeyword.Ranged, AbilityKeyword.Strike],
			distance: [FactoryLogic.distance.createRanged(10)],
			target: 'Одна істота',
			cost: 3,
			sections: [
				FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
					characteristic: [Characteristic.Reason],
					tier1: '4 + Р отруйної шкоди',
					tier2: '7 + Р отруйної шкоди',
					tier3: '11 + Р отруйної шкоди'
				})),
				FactoryLogic.createAbilitySectionText('Гриби покривають тіло цілі. Поки вони на цілі, ви та будь-який союзник, що перебуває поруч із ціллю, отримуєте 1 сплеск щоразу, коли ціль отримує пошкодження. Гриби можна зняти самій цілі або істотою поруч як основну дію.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'elementalist-ability-12',
			name: 'Хвилі в Землі',
			description: 'Як камінь, кинутий у ставок, хвилі в землі поширюються від вас.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Area, AbilityKeyword.Earth, AbilityKeyword.Magic],
			distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 2 })],
			target: 'Кожен ворог у зоні',
			cost: 3,
			sections: [
				FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
					characteristic: [Characteristic.Reason],
					tier1: '3 шкоди',
					tier2: '5 шкоди',
					tier3: '8 шкоди; С < [strong], повалений'
				})),
				FactoryLogic.createAbilitySectionText('Ви повинні торкатися ґрунту, щоб використати цю здібність. Додатково ви можете обрати клітинку ґрунту в зоні, яка порожня або зайнята вами чи союзником. У цій клітинці піднімається стовп землі висотою до вашого показника Розуму в клітинках. Стовп не може врізатися в інших істот або об’єкти і не може змусити піднятих ним істот стикатися з іншими істотами чи об’єктами.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'elementalist-ability-13',
			name: 'Полумʼяна Буря',
			description: 'На ваших ворогів зійде буря вогню.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Area, AbilityKeyword.Fire, AbilityKeyword.Magic, AbilityKeyword.Ranged],
			distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Cube, value: 3, within: 10 })],
			target: 'Кожен ворог у зоні',
			cost: 5,
			sections: [
				FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
					characteristic: [Characteristic.Reason],
					tier1: '4 вогняної шкоди',
					tier2: '6 вогняної шкоди',
					tier3: '10 вогняної шкоди'
				})),
				FactoryLogic.createAbilitySectionSpend({
					name: 'Утримання',
					value: 2,
					effect: 'На початку вашого ходу ви можете як маневр використати цю здібність ще раз без витрати есенції.'
				})
			]
		}),
		FactoryLogic.createAbility({
			id: 'elementalist-ability-14',
			name: 'Миттєве Викопування',
			description: 'Поверхня світу навколо вас відкривається за вашим наказом.',
			type: FactoryLogic.type.createManeuver(),
			keywords: [AbilityKeyword.Earth, AbilityKeyword.Magic, AbilityKeyword.Ranged],
			distance: [FactoryLogic.distance.createRanged(10)],
			target: 'Special',
			cost: 5,
			sections: [
				FactoryLogic.createAbilitySectionText('Ви відкриваєте дві ями з отворами розміром 1 клітинка й глибиною 4 клітинки, які можна розмістити на будь-якій звичайній поверхні в межах дистанції. Ви можете розмістити ці ями поруч, щоб утворити менше ям з ширшими отворами. Коли ями відкриваються, зробіть окремий кидок сили для кожної істоти на поверхні над ямою, яка достатньо мала, щоб впасти. (Ви не можете отримати критичний успіх цією здібністю, оскільки вона використовує маневр.)'),
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Reason],
						tier1: 'The target can shift 1 square from the edge of the hole to the nearest unoccupied space of their choice.',
						tier2: 'The target falls into the hole.',
						tier3: 'The target falls into the hole and can’t reduce the height of the fall.'
					})
				),
				FactoryLogic.createAbilitySectionSpend({
					name: 'Утримання',
					effect: 'На початку вашого ходу ви відкриваєте ще одну яму й робите кидок сили проти кожної істоти, яка могла б впасти в неї при відкритті, без витрати есенції.'
				})
			]
		}),
		FactoryLogic.createAbility({
			id: 'elementalist-ability-15',
			name: 'Лише Бриз',
			description: 'Матеріальна сутність істоти розʼїдається за вашим наказом.',
			type: FactoryLogic.type.createManeuver(),
			keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged, AbilityKeyword.Void],
			distance: [FactoryLogic.distance.createRanged(10)],
			target: 'На себе або одного союзника',
			cost: 5,
			sections: [
				FactoryLogic.createAbilitySectionText('До початку вашого наступного ходу ціль може рухатися крізь тверду матерію, ігнорує важкопрохідну місцевість, а її рух не провокує випадкові атаки. Якщо ціль завершує свій хід всередині твердої матерії, її виштовхують у клітинку, через яку вона увійшла, і цей ефект завершиться.'),
				FactoryLogic.createAbilitySectionSpend({
					name: 'Утримання',
					effect: 'The effect lasts until the start of your next turn.'
				})
			]
		}),
		FactoryLogic.createAbility({
			id: 'elementalist-ability-16',
			name: 'Випробування Дощу',
			description: 'Ви викликаєте дощ, що пече ворогів і відновлює союзників.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Area, AbilityKeyword.Green, AbilityKeyword.Magic, AbilityKeyword.Ranged],
			distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Cube, value: 3, within: 10 })],
			target: 'Кожен ворог у зоні',
			cost: 5,
			sections: [
				FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
					characteristic: [Characteristic.Reason],
					tier1: '4 кислотної шкоди',
					tier2: '6 кислотної шкоди',
					tier3: '10 кислотної шкоди'
				})),
				FactoryLogic.createAbilitySectionText('Ви можете припинити один ефект на собі, який припиняється спас-кидком або завершується в кінці вашого ходу. Кожний союзник у зоні також отримує цю перевагу.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'elementalist-ability-17',
			name: 'Квітко, допоможи; Земле, захисти',
			description: 'Оживляючі рослини та гострі камені виростають, допомагаючи союзникам і перешкоджаючи ворогам.',
			type: FactoryLogic.type.createManeuver(),
			keywords: [AbilityKeyword.Area, AbilityKeyword.Earth, AbilityKeyword.Green, AbilityKeyword.Magic, AbilityKeyword.Ranged],
			distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Cube, value: 3, within: 10 })],
			target: 'Special',
			cost: 5,
			minLevel: 2,
			sections: [
				FactoryLogic.createAbilitySectionText(`
До початку вашого наступного ходу зона набуває таких ефектів:

* Один раз як безкоштовний маневр на початку вашого ходу ви даєте собі та кожному союзнику в зоні можливість витратити будь - яку кількість відновлень(Recoveries).
* Зона є важкопрохідною для ворогів.
* Кожний ворог, який вперше входить у зону в бойовому раунді або починає там свій хід, отримує пошкодження, рівне вашому показникові Розуму.`),
				FactoryLogic.createAbilitySectionSpend({
					name: 'Утримання',
					effect: 'The area remains until the start of your next turn. As a maneuver, you can move the area up to 5 squares. This ability ends if the area is ever not within your line of effect.'
				})
			]
		}),
		FactoryLogic.createAbility({
			id: 'elementalist-ability-18',
			name: 'Підпорядкувати Зелене Всередині',
			description: 'Грибні спори проростають у мозку ворога, дозволяючи вам контролювати його дії.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Green, AbilityKeyword.Magic, AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Void],
			distance: [FactoryLogic.distance.createRanged(10)],
			target: 'Одна істота',
			cost: 5,
			minLevel: 2,
			sections: [
				FactoryLogic.createAbilitySectionText('Ціль використовує свою сигнатурну здатність проти істоти на ваш вибір. Ця сигнатурна здатність може цілитися по істоті навіть якщо зазвичай не може. Після цього ви робите кидок сили проти цілі цієї здатності.'),
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Reason],
						tier1: '5 + Р отруйної шкоди',
						tier2: '9 + Р отруйної шкоди',
						tier3: '12 + Р отруйної шкоди'
					})
				)
			]
		}),
		FactoryLogic.createAbility({
			id: 'elementalist-ability-19',
			name: 'Перенесений Через Полумʼя',
			description: 'Ваш союзник зникає, а потім зʼявляється в спалаху вогню!',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Fire, AbilityKeyword.Magic, AbilityKeyword.Ranged, AbilityKeyword.Void],
			distance: [FactoryLogic.distance.createRanged(10)],
			target: 'На себе або одного союзника',
			cost: 5,
			minLevel: 2,
			sections: [
				FactoryLogic.createAbilitySectionText('Ціль телепортується в іншу клітинку в межах дистанції. Зробіть кидок сили, який зачіпає кожного ворога, що перебуває поруч із новим місцем розташування цілі.'),
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Reason],
						tier1: '3 вогняної шкоди',
						tier2: '5 вогняної шкоди',
						tier3: '8 вогняної шкоди'
					})
				)
			]
		}),
		FactoryLogic.createAbility({
			id: 'elementalist-ability-20',
			name: 'Обійми Вулкана',
			description: 'Окутайте їх вогнем і плавленим каменем.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Earth, AbilityKeyword.Fire, AbilityKeyword.Magic, AbilityKeyword.Ranged, AbilityKeyword.Strike],
			distance: [FactoryLogic.distance.createRanged(10)],
			target: 'Одна істота',
			cost: 5,
			minLevel: 2,
			sections: [
				FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
					characteristic: [Characteristic.Reason],
					tier1: '5 + Р вогняної шкоди; Л < [weak], скутаний (рят. кидок)',
					tier2: '9 + Р вогняної шкоди; Л < [average], скутаний (рят. кидок)',
					tier3: '12 + Р вогняної шкоди; Л < [strong], скутаний (рят. кидок)'
				}))
			]
		}),
		FactoryLogic.createAbility({
			id: 'elementalist-ability-21',
			name: 'Викреслити',
			description: 'За помахом руки ви переводите істот поза існування.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Void],
			distance: [FactoryLogic.distance.createRanged(10)],
			target: 'Special',
			cost: 7,
			minLevel: 3,
			sections: [
				FactoryLogic.createAbilitySectionText('Кількість істот, яких ви обираєте цією здібністю, визначається вашим кидком сили.'),
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Reason],
						tier1: 'Одна істота',
						tier2: 'Two creatures',
						tier3: 'Three creatures'
					})
				),
				FactoryLogic.createAbilitySectionText('Кожна ціль починає зникати з існування (припиняється спас-кидком). На їхньому першому ході, поки вони зникають, ціль отримує бан до кидків сили. Наприкінці першого ходу бан стає подвійним. Наприкінці другого ходу ціль зникає з існування на 1 годину, після чого з’являється у своєму початковому місці або в найближчій незайнятій клітинці.'),
			]
		}),
		FactoryLogic.createAbility({
			id: 'elementalist-ability-22',
			name: 'Паща Землі',
			description: 'Ви розкриваєте землю, випускаючи дощ каменів та уламків.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Area, AbilityKeyword.Earth, AbilityKeyword.Magic, AbilityKeyword.Ranged],
			distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Cube, value: 3, within: 10 })],
			target: 'Кожен ворог у зоні',
			cost: 7,
			minLevel: 3,
			sections: [
				FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
					characteristic: [Characteristic.Reason],
					tier1: '5 шкоди',
					tier2: '9 шкоди',
					tier3: '12 шкоди'
				})),
				FactoryLogic.createAbilitySectionText('Ґрунт у зоні або безпосередньо під нею провалюється на 3 клітинки.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'elementalist-ability-23',
			name: 'Рій Духів',
			description: 'Охоронні духи тварин оточують вас, дошкуляючи ворогам і підсилюючи союзників.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Area, AbilityKeyword.Green, AbilityKeyword.Magic],
			distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Aura, value: 3 })],
			target: 'Кожен ворог у зоні',
			cost: 7,
			minLevel: 3,
			sections: [
				FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
					characteristic: [Characteristic.Reason],
					tier1: '3 шкоди',
					tier2: '6 шкоди',
					tier3: '9 шкоди'
				})),
				FactoryLogic.createAbilitySectionText('До кінця вашого наступного ходу кожний союзник у зоні має кожний свій показник характеристики вважатися на 1 вищим при протидії потужним ефектам і отримує +1 до спас-кидків.'),
				FactoryLogic.createAbilitySectionSpend({
					name: 'Утримання',
					effect: 'You make the power roll again to target each enemy in the area without spending essence, and the effect lasts until the start of your next turn.'
				})
			]
		}),
		FactoryLogic.createAbility({
			id: 'elementalist-ability-24',
			name: 'Стіна Вогню',
			description: 'Палаюче, вишукано впорядковане пекло виникає за вашим наказом.',
			type: FactoryLogic.type.createManeuver(),
			keywords: [AbilityKeyword.Area, AbilityKeyword.Fire, AbilityKeyword.Magic, AbilityKeyword.Ranged],
			distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Wall, value: 10, within: 10 })],
			target: 'Special',
			cost: 7,
			minLevel: 3,
			sections: [
				FactoryLogic.createAbilitySectionText('Стіна триває до початку вашого наступного ходу та може бути розміщена в зайнятих клітинках. Істоти можуть входити та проходити через стіну. Кожний ворог, який вперше входить у зону в бойовому раунді або починає там свій хід, отримує вогняне пошкодження, рівне вашому показникові Розуму, за кожну клітинку зони, в якій він починає свій хід або яку входить.'),
				FactoryLogic.createAbilitySectionSpend({
					name: 'Утримання',
					effect: 'The wall lasts until the start of your next turn, and you can add a number of squares to the wall equal to your Reason score.'
				})
			]
		}),
		FactoryLogic.createAbility({
			id: 'elementalist-ability-25',
			name: 'Відкладене Горіння',
			description: 'Ваші полумʼя танцюють з однієї іскри на іншу.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Fire, AbilityKeyword.Magic, AbilityKeyword.Ranged, AbilityKeyword.Strike],
			distance: [FactoryLogic.distance.createRanged(10)],
			target: 'Одна істота або предмет',
			cost: 9,
			minLevel: 5,
			sections: [
				FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
					characteristic: [Characteristic.Reason],
					tier1: '8 + С вогняної шкоди',
					tier2: '13 + С вогняної шкоди',
					tier3: '17 + С вогняної шкоди'
				})),
				FactoryLogic.createAbilitySectionText('Коли ціль завершує свій наступний хід або якщо вона впаде до 0 Витривалості раніше, кожний ворог поруч із нею отримує вогняне пошкодження, рівне подвоєному вашому показникові Розуму. Кожен постраждалий ворог потім отримує цей самий ефект.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'elementalist-ability-26',
			name: 'Буря Пісків',
			description: 'Ґрунт і уламки закручуються у темний пульсуючий ураган.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Area, AbilityKeyword.Magic, AbilityKeyword.Earth, AbilityKeyword.Ranged],
			distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Cube, value: 4, within: 10 })],
			target: 'Кожен ворог у зоні',
			cost: 9,
			minLevel: 5,
			sections: [
				FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
					characteristic: [Characteristic.Reason],
					tier1: '2 шкоди',
					tier2: '5 шкоди',
					tier3: '7 шкоди'
				})),
				FactoryLogic.createAbilitySectionText('Зона триває до початку вашого наступного ходу. Вона є важкопрохідною для ворогів, і ви та ваші союзники маєте прикриття, перебуваючи в зоні.'),
				FactoryLogic.createAbilitySectionSpend({
					name: 'Утримання',
					effect: 'The area remains until the start of your next turn, and you can move it up to 5 squares (no action required). As a maneuver, you can make the power roll again without spending essence.'
				})
			]
		}),
		FactoryLogic.createAbility({
			id: 'elementalist-ability-27',
			name: 'Підрив Сприйняття Простору',
			description: 'Ви розриваєте світ ворога на дві частини.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Void, AbilityKeyword.Magic, AbilityKeyword.Ranged, AbilityKeyword.Strike],
			distance: [FactoryLogic.distance.createRanged(10)],
			target: 'Одна істота або предмет',
			cost: 9,
			minLevel: 5,
			sections: [
				FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
					characteristic: [Characteristic.Reason],
					tier1: '9 + Р шкоди скверни',
					tier2: '10 + Р шкоди скверни; ціль має лінію дії тільки до істот і предметів у межах 4 клітинок від неї до початку вашого наступного ходу',
					tier3: '15 + Р шкоди скверни; ціль має лінію дії тільки до сусідніх істот і предметів до початку вашого наступного ходу'
				})),
				FactoryLogic.createAbilitySectionSpend({
					name: 'Утримання',
					effect: 'The target’s limited line of effect lasts until the start of your next turn.'
				})
			]
		}),
		FactoryLogic.createAbility({
			id: 'elementalist-ability-28',
			name: 'Сітка Минулого',
			description: 'Нитки ваших пригод утворюють яскраву перлинну сітку.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Area, AbilityKeyword.Magic, AbilityKeyword.Green, AbilityKeyword.Ranged],
			distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Cube, value: 4, within: 10 })],
			target: 'Кожен ворог у зоні',
			cost: 9,
			minLevel: 5,
			sections: [
				FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
					characteristic: [Characteristic.Reason],
					tier1: '2 шкоди скверни; Л < [weak], скутаний (рят. кидок)',
					tier2: '3 шкоди скверни; Л < [average], скутаний (рят. кидок)',
					tier3: '5 шкоди скверни; Л < [strong], скутаний (рят. кидок)'
				})),
				FactoryLogic.createAbilitySectionText('Зона є важкопрохідною до початку вашого наступного ходу. Кожний ворог, який завершує свій хід у зоні, стає скутим (припиняється спас-кидком).'),
				FactoryLogic.createAbilitySectionSpend({
					name: 'Утримання',
					effect: 'The area remains until the start of your next turn.'
				})
			]
		}),
		FactoryLogic.createAbility({
			id: 'elementalist-ability-29',
			name: 'Сяючий Чемпіон У Небі',
			description: 'Вони сяють яскраво, немов прекрасний діамант у нічному небі.',
			type: FactoryLogic.type.createManeuver(),
			keywords: [AbilityKeyword.Fire, AbilityKeyword.Green, AbilityKeyword.Magic, AbilityKeyword.Ranged, AbilityKeyword.Void],
			distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Cube, value: 4, within: 10 })],
			target: 'На себе або одного союзника',
			cost: 9,
			minLevel: 6,
			sections: [
				FactoryLogic.createAbilitySectionText('Ціль отримує +3 до швидкості, може літати, а її здібності ігнорують прикриття. Додатково, щоразу коли ціль отримує свій Героїчний ресурс, вона отримує ще 1 Героїчний ресурс. Цей ефект триває до початку вашого наступного ходу.'),
				FactoryLogic.createAbilitySectionSpend({
					name: 'Утримання',
					effect: 'The effect lasts until the start of your next turn.'
				})
			]
		}),
		FactoryLogic.createAbility({
			id: 'elementalist-ability-30',
			name: 'Титан Магми',
			description: 'Їхнє тіло набрякає лавою, багном і силою, здіймаючись над ворогами.',
			type: FactoryLogic.type.createManeuver(),
			keywords: [AbilityKeyword.Fire, AbilityKeyword.Green, AbilityKeyword.Magic, AbilityKeyword.Ranged, AbilityKeyword.Earth],
			distance: [FactoryLogic.distance.createRanged(10)],
			target: 'На себе або одного союзника',
			cost: 9,
			minLevel: 6,
			sections: [
				FactoryLogic.createAbilitySectionText(`До початку вашого наступного ходу ціль має такі переваги:

* Її розмір і стійкість збільшуються на 2; будь - яка істота розміру 1 стає розміру 3. Кожна істота, що перебуває в новому просторі цілі, ковзає до найближчої незайнятої клітинки, ігноруючи стійкість.Якщо у цілі немає достатньо місця для зростання, вона зростає настільки, наскільки може, і стає скутою до кінця ефекту.
* Має імунітет до вогню 10.
			* Її удари завдають додаткове вогняне пошкодження, рівне подвоєному вашому показникові Розуму.
* Коли ціль примусово переміщує істоту або обʼєкт, дальність примусового переміщення отримує бонус + 2.
			* Вона може використовувати свою найвищу характеристику замість Сили для кидків сили, які залежать від Сили.`),
				FactoryLogic.createAbilitySectionSpend({
					name: 'Утримання',
					value: 2,
					effect: 'The effect lasts until the start of your next turn. Additionally, at the start of your turn, the target can spend 2 Recoveries.'
				})
			]
		}),
		FactoryLogic.createAbility({
			id: 'elementalist-ability-31',
			name: 'Метеор',
			description: 'Ви телепортуєте ціль у повітря і дозволяєте землі та вогню зробити решту.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Earth, AbilityKeyword.Fire, AbilityKeyword.Magic, AbilityKeyword.Void, AbilityKeyword.Ranged],
			distance: [FactoryLogic.distance.createRanged(10)],
			target: 'Одна істота або предмет',
			cost: 9,
			minLevel: 6,
			sections: [
				FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
					characteristic: [Characteristic.Reason],
					tier1: 'You teleport the target up to 4 squares.',
					tier2: 'You teleport the target up to 6 squares.',
					tier3: 'You teleport the target up to 8 squares.'
				})),
				FactoryLogic.createAbilitySectionText('Якщо ціль телепортується в клітинку, де вона впаде, вона негайно падає, вважаючи падіння таким, ніби її показник Спритності дорівнює 0. Ціль отримує вогняне пошкодження від падіння, а кожний ворог у межах 3 клітинок від місця приземлення отримує таку ж кількість вогняного пошкодження. Ґрунт у межах 3 клітинок від місця приземлення стає важкопрохідною місцевістю.'),
			]
		}),
		FactoryLogic.createAbility({
			id: 'elementalist-ability-32',
			name: 'Ліс Памʼятає і Повертає',
			description: 'Ви створюєте тераріум, що простягається від верхівок до підліску.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Area, AbilityKeyword.Green, AbilityKeyword.Magic, AbilityKeyword.Earth, AbilityKeyword.Void],
			distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 4 })],
			target: 'Special',
			cost: 9,
			minLevel: 6,
			sections: [
				FactoryLogic.createAbilitySectionText('Зона стає темною й порослою деревами та рослинністю в порожніх клітинках до початку вашого наступного ходу. Зона є важкопрохідною для ворогів, і будь-який союзник, що завершує свій хід у зоні, має прикриття.'),
				FactoryLogic.createAbilitySectionSpend({
					name: 'Утримання',
					value: 2,
					effect: 'The area remains until the start of your next turn. Additionally, at the start of your turn, each ally in the area can spend a Recovery.'
				})
			]
		}),
		FactoryLogic.createAbility({
			id: 'elementalist-ability-33',
			name: 'Серце Лісу',
			description: 'Ви викликаєте один зі шматків Великого Дерева, щоб задовольнити свої потреби.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Green, AbilityKeyword.Magic, AbilityKeyword.Ranged],
			distance: [FactoryLogic.distance.createRanged(10)],
			target: 'Special',
			cost: 11,
			minLevel: 8,
			sections: [
				FactoryLogic.createAbilitySectionText(`У порожній клітинці в межах дистанції зʼявляється дерево розміру 5. Дерево має 100 Витривалості і не може бути примусово переміщене.Ви та будь - який союзник можете торкнутися дерева, щоб використати маневр Catch Breath як безкоштовний маневр.Додатково, коли ви починаєте хід з лінією ефекту до дерева, ви можете припинити один ефект на собі, який припиняється спас - кидком або завершується в кінці вашого ходу, або ви можете встати, якщо ви лежите.Кожний союзник у межах дистанції також отримує цю користь.
Кожний ворог, який завершує свій хід у межах 3 клітинок від дерева, стає скутим до кінця свого наступного ходу.Істота, скута таким чином, може використати основну дію, щоб припинити ефект раніше.`)
			]
		}),
		FactoryLogic.createAbility({
			id: 'elementalist-ability-34',
			name: 'Муза Вогню',
			description: 'Вогонь палає так гаряче, що може обпекти лице будь-якого бога, що спостерігає.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Earth, AbilityKeyword.Fire, AbilityKeyword.Magic, AbilityKeyword.Void, AbilityKeyword.Ranged],
			distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Cube, value: 5, within: 10 })],
			target: 'Кожен ворог у зоні',
			cost: 11,
			minLevel: 8,
			sections: [
				FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
					characteristic: [Characteristic.Reason],
					tier1: '7 вогняної шкоди; Директор втрачає 2 очки Злоб',
					tier2: '10 вогняної шкоди; Директор втрачає 3 очки Злоб',
					tier3: '15 вогняної шкоди; Директор втрачає 4 очки Злоб'
				})),
				FactoryLogic.createAbilitySectionText('Злоба Директора може стати відʼємною внаслідок цієї здібності.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'elementalist-ability-35',
			name: 'Повернення в Забуття',
			description: 'Ви створюєте розрив у реальності, що може поглинути все.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Area, AbilityKeyword.Magic, AbilityKeyword.Void, AbilityKeyword.Ranged],
			distance: [FactoryLogic.distance.createRanged(10)],
			target: 'Special',
			cost: 11,
			minLevel: 8,
			sections: [
				FactoryLogic.createAbilitySectionText('Ви створюєте вихор розміру 1L, що триває до кінця сутички. На початку кожного бойового раунду, доки вихор порожній, вихор вертикально притягує на 3 клітинки кожного ворога в межах 5 клітинок від нього. Кожний ворог, який входить у вихор або починає там свій хід, повалений (prone). Наприкінці раунду, якщо знесилений ворог, який не є лідером або соло-сутністю, знаходиться у вихорі, він миттєво знищується.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'elementalist-ability-36',
			name: 'Світ Розірваний',
			description: 'Ви топаєте ногою і сколихуєте увесь світ.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Area, AbilityKeyword.Magic, AbilityKeyword.Earth],
			distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 5 })],
			target: 'Кожен ворог у зоні',
			cost: 11,
			minLevel: 8,
			sections: [
				FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
					characteristic: [Characteristic.Reason],
					tier1: 'M < [weak]; prone',
					tier2: 'M < [average]; prone',
					tier3: 'M < [strong]; prone'
				})),
				FactoryLogic.createAbilitySectionText('Ви створюєте тріщину в землі поруч із вами розміром 10 × 2 і глибиною 6 клітинок. Кожна істота в зоні, яка лежить і має розмір 2 або менший, падає в неї. Інші істоти можуть входити в тріщину або зсовуватися до найближчої незайнятої клітинки поза нею.'),
			]
		}),
		FactoryLogic.createAbility({
			id: 'elementalist-ability-37',
			name: 'Земля Відкидає Тебе',
			description: 'Усіх і все знесе вибухом каміння та уламків.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Area, AbilityKeyword.Magic, AbilityKeyword.Earth, AbilityKeyword.Ranged],
			distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Cube, value: 5, within: 10 })],
			target: 'Кожен ворог та обʼєкт у зоні',
			cost: 11,
			minLevel: 9,
			sections: [
				FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
					characteristic: [Characteristic.Reason],
					tier1: '6 шкоди',
					tier2: '9 шкоди',
					tier3: '13 шкоди'
				})),
				FactoryLogic.createAbilitySectionSpend({
					name: 'Утримання',
					value: 2,
					effect: 'At the start of your turn, you can use a maneuver to use this ability again without spending essence.'
				})
			]
		}),
		FactoryLogic.createAbility({
			id: 'elementalist-ability-38',
			name: 'Зелень Захищає Своїх Слуг',
			description: 'Сяючий зелений щит відкриває свою справжню красу, тим більше тріскаючись.',
			type: FactoryLogic.type.createManeuver(),
			keywords: [AbilityKeyword.Green, AbilityKeyword.Magic, AbilityKeyword.Ranged],
			distance: [FactoryLogic.distance.createRanged(10)],
			target: 'На себе або одного союзника',
			cost: 11,
			minLevel: 9,
			sections: [
				FactoryLogic.createAbilitySectionText('Ви створюєте тріщину в землі поруч із вами розміром 10 × 2 і глибиною 6 клітинок. Кожна істота в зоні, яка лежить і має розмір 2 або менший, падає в неї. Інші істоти можуть входити в тріщину або зсовуватися до найближчої незайнятої клітинки поза нею.'),
				FactoryLogic.createAbilitySectionSpend({
					name: 'Утримання',
					value: 2,
					effect: 'At the start of your turn, you can use a maneuver to use this ability again without spending essence.'
				})
			]
		}),
		FactoryLogic.createAbility({
			id: 'elementalist-ability-39',
			name: 'Призма',
			description: 'Ви розділяєте свою есенцію, дозволяючи накласти кілька ефектів одночасно.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Magic, AbilityKeyword.Void],
			distance: [FactoryLogic.distance.createSelf()],
			target: 'Себе',
			cost: 11,
			minLevel: 9,
			sections: [
				FactoryLogic.createAbilitySectionText('Ви використовуєте до трьох героїчних здібностей, сумарна вартість есенції яких не перевищує 11, не витрачаючи додаткової есенції понад вартість цієї здібності. Ви можете зсунутися до 2 клітинок між використаннями кожної здібності.'),
			]
		}),
		FactoryLogic.createAbility({
			id: 'elementalist-ability-40',
			name: 'Непогасиме Полумʼя',
			description: 'Ви випускаєте вогняний снаряд, сплетений із чистої первісної енергії.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Fire, AbilityKeyword.Magic, AbilityKeyword.Strike, AbilityKeyword.Ranged],
			distance: [FactoryLogic.distance.createRanged(10)],
			target: 'Одна ціль або предмет',
			cost: 11,
			minLevel: 9,
			sections: [
				FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
					characteristic: [Characteristic.Reason],
					tier1: '13 + Р вогняної шкоди; І < [weak], приголомшений (рят. кидок)',
					tier2: '18 + Р вогняної шкоди; І < [average], приголомшений (рят. кидок)',
					tier3: '25 + Р вогняної шкоди; І < [strong], приголомшений (рят. кидок)'
				})),
				FactoryLogic.createAbilitySectionText('Це пошкодження ігнорує імунітет.')
			]
		})

	],
	subclasses: [
		earth,
		fire,
		green,
		voidSubclass
	],
	level: 1,
	characteristics: []
};
