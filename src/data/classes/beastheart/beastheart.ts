import { AbilityDistanceType } from '@/enums/ability-distance-type';
import { AbilityKeyword } from '@/enums/ability-keyword';
import { Characteristic } from '@/enums/characteristic';
import { DamageModifierType } from '@/enums/damage-modifier-type';
import { DamageType } from '@/enums/damage-type';
import { FactoryLogic } from '@/logic/factory-logic';
import { FeatureField } from '@/enums/feature-field';
import { HeroClass } from '@/models/class';
import { MonsterOrganizationType } from '@/enums/monster-organization-type';
import { PerkList } from '@/enums/perk-list';
import { SkillList } from '@/enums/skill-list';
import { guardian } from '@/data/classes/beastheart/guardian';
import { prowler } from '@/data/classes/beastheart/prowler';
import { punisher } from '@/data/classes/beastheart/punisher';
import { spark } from '@/data/classes/beastheart/spark';

// Translated strings
export const beastheart: HeroClass = {
	id: 'class-beastheart',
	name: 'Звіросерце',
	description: `
Звіросерце ніколи не бореться на самоті! Ви подорожуєте з лютим звіром поруч — не прирученим улюбленцем, а диким створінням, таким як вовк, василіск або навіть молодий дракон. Пов’язані з вами первісним зв’язком, ваш компаньйон виконує ваші бажання, так само як ви керуєтеся інстинктами вашого компаньйона. Але будьте обережні: у розпалі битви ваш компаньйон може втратити контроль і впасти в криваву лють, нападаючи як на ворогів, так і на друзів.

Грайте за звіросерце, якщо хочете протистояти небезпекам світу з можетем диким компаньйоном поруч, кидаючись у гущу бою, щоб кинути виклик ворожим чемпіонам, або крадучись по краях, щоб знищити вразливих ворогів.`,
	type: 'standard',
	subclassName: 'Дика природа',
	subclassCount: 1,
	primaryCharacteristicsOptions: [
		[Characteristic.Might, Characteristic.Intuition]
	],
	primaryCharacteristics: [],
	featuresByLevel: [
		{
			level: 1,
			features: [
				FactoryLogic.feature.createBonus({
					id: 'beastheart-stamina',
					field: FeatureField.Stamina,
					value: 21,
					valuePerLevel: 12
				}),
				FactoryLogic.feature.createBonus({
					id: 'beastheart-recoveries',
					field: FeatureField.Recoveries,
					value: 12
				}),
				FactoryLogic.feature.createHeroicResource({
					id: 'beastheart-resource',
					name: 'Лють',
					gains: [
						{
							tag: 'start',
							trigger: 'На початку вашого ходу',
							value: '1d3'
						},
						{
							tag: 'deal-damage-self',
							trigger: 'Вперше за раунд, коли ви завдаєте шкоди',
							value: '1'
						},
						{
							tag: 'deal-damage-companion',
							trigger: 'Вперше за раунд, коли ваш компаньйон завдає шкоди',
							value: '1'
						}
					]
				}),
				FactoryLogic.feature.createSkillChoice({
					id: 'beastheart-1-1a',
					selected: ['Догляд за тваринами']
				}),
				FactoryLogic.feature.createSkillChoice({
					id: 'beastheart-1-1b',
					listOptions: [SkillList.Exploration, SkillList.Intrigue],
					count: 2
				}),
				FactoryLogic.feature.createSummonChoice({
					id: 'beastheart-1-2a',
					name: 'Компаньйон',
					description: 'Ви отримуєте компаньйона — дикого звіра, який подорожує разом з вами. Ваш компаньйон — це не ваш улюбленець, а створіння, з яким ви маєте містичний зв’язок, що дозволяє вам ділитися відчуттями та інстинктами.',
					options: [
						FactoryLogic.createSummon({
							monster: FactoryLogic.createMonster({
								id: 'beastheart-1-2a-1',
								name: 'Василіск',
								level: 0,
								role: FactoryLogic.createMonsterRole(MonsterOrganizationType.Companion),
								keywords: ['Тварина'],
								encounterValue: 0,
								size: FactoryLogic.createSize(1, 'L'),
								speed: FactoryLogic.createSpeed(5),
								stamina: 0,
								stability: 2,
								freeStrikeDamage: 1,
								characteristics: FactoryLogic.createCharacteristics(2, 1, -1, 2, 2),
								features: [
									FactoryLogic.feature.createBonus({
										id: 'beastheart-1-2a-1-1',
										field: FeatureField.Stamina,
										valueFromController: FeatureField.Stamina
									}),
									FactoryLogic.feature.createBonus({
										id: 'beastheart-1-2a-1-2',
										field: FeatureField.FreeStrikeDamage,
										valueCharacteristics: [Characteristic.Might]
									}),
									FactoryLogic.feature.createDamageModifier({
										id: 'beastheart-1-2a-1-3',
										modifiers: [
											FactoryLogic.damageModifier.create({
												damageType: DamageType.Poison,
												modifierType: DamageModifierType.Immunity,
												value: 3
											})
										]
									}),
									FactoryLogic.feature.createAbility({
										ability: FactoryLogic.createAbility({
											id: 'beastheart-1-2a-1-4',
											name: 'Перетворення на камінь',
											description: 'Під впливом магічного погляду або отруйних кігтів василіска тіло ворога починає кам’яніти.',
											type: FactoryLogic.type.createManeuver(),
											keywords: [AbilityKeyword.Companion, AbilityKeyword.Melee, AbilityKeyword.Magic, AbilityKeyword.Ranged, AbilityKeyword.Weapon],
											distance: [
												FactoryLogic.distance.createMelee(),
												FactoryLogic.distance.createRanged(5)
											],
											target: 'Один ворог',
											sections: [
												FactoryLogic.createAbilitySectionText('2 + С шкоди від розкладу; скам’янілий (до кінця ходу)'),
												FactoryLogic.createAbilitySectionSpend({
													effect: 'Поки скам’янілий, ціль уповільнена.'
												})
											]
										})
									}),
									FactoryLogic.feature.create({
										id: 'beastheart-1-2a-1-5',
										name: 'Скіміній',
										description: 'Середній відчуттям може викликати у васіній умови. До кінця умови, вороги, які не виконують умови, втрачають відчуття. Кожен раз, коли ворог не виконує умови, вони приймають коріння, які не можуть бути зменшеними. Ворог, який втрачає 0 Стаміні, або який завдає шкоди, що викликає у ворога умови, перетворюється на камінь, поки не буде відновлено життя магічними засобами.'
									})
								]
							}),
							isSignature: false,
							cost: 0,
							count: 1,
							level3: [
								FactoryLogic.feature.create({
									id: 'beastheart-1-2a-1-3-1',
									name: 'Фізічні вороги',
									description: 'Коли василіск бити з ворогом, вороги стають скам’янілими (зберігаються).'
								})
							],
							level6: [
								FactoryLogic.feature.create({
									id: 'beastheart-1-2a-1-6-1',
									name: 'Кам’яній біль',
									description: 'Коли василіск бити з ворогом, ви завдаєте додаткову шкоду, яка дорівнює двом вашим Містам.'
								})
							],
							level10: [
								FactoryLogic.feature.create({
									id: 'beastheart-1-2a-1-10-1',
									name: 'Серце каменя',
									description: 'Коли василіск бити з ворогом, ви і василіск стаєте живими статуями, неперевірними до більшості шкоди. Ви і василіск маєте імунітет 10.'
								})
							]
						}),
						FactoryLogic.createSummon({
							monster: FactoryLogic.createMonster({
								id: 'beastheart-1-2a-2',
								name: 'Ведмідь',
								level: 0,
								role: FactoryLogic.createMonsterRole(MonsterOrganizationType.Companion),
								keywords: ['Тварина'],
								encounterValue: 0,
								size: FactoryLogic.createSize(1, 'L'),
								speed: FactoryLogic.createSpeed(5, 'climb'),
								stamina: 0,
								stability: 2,
								freeStrikeDamage: 2,
								characteristics: FactoryLogic.createCharacteristics(2, 1, -1, 2, 2),
								features: [
									FactoryLogic.feature.createBonus({
										id: 'beastheart-1-2a-2-1',
										field: FeatureField.Stamina,
										valueFromController: FeatureField.Stamina
									}),
									FactoryLogic.feature.createBonus({
										id: 'beastheart-1-2a-2-2',
										field: FeatureField.FreeStrikeDamage,
										valueCharacteristics: [Characteristic.Might]
									}),
									FactoryLogic.feature.createSkillChoice({
										id: 'beastheart-1-2a-2-3',
										selected: ['Залякування']
									}),
									FactoryLogic.feature.createAbility({
										ability: FactoryLogic.createAbility({
											id: 'beastheart-1-2a-2-4',
											name: 'Удар навідліг',
											description: 'Ведмідь недбало відкидає набридливого ворога світ за очі.',
											type: FactoryLogic.type.createManeuver(),
											keywords: [AbilityKeyword.Companion, AbilityKeyword.Melee, AbilityKeyword.Weapon],
											distance: [FactoryLogic.distance.createMelee()],
											target: 'Один іншій',
											sections: [
												FactoryLogic.createAbilitySectionText('3 + С шкоди; зсунути на 2'),
												FactoryLogic.createAbilitySectionSpend({
													effect: 'Ціль можна зсунути ще на кількість клітинок, рівну показнику Сили ведмедя.'
												})
											]
										})
									}),
									FactoryLogic.feature.create({
										id: 'beastheart-1-2a-2-5',
										name: 'Спільна стійкість',
										description: 'Звіросерце отримує +1 до Стійкості.'
									})
								]
							}),
							isSignature: false,
							cost: 0,
							count: 1,
							level3: [
								FactoryLogic.feature.create({
									id: 'beastheart-1-2a-2-3-1',
									name: 'Молотар ворогів',
									description: 'Коли ведмідь влучає ударом по істоті, поки лютує, він може відштовхнути її на кількість клітинок, рівну показнику Сили ведмедя, якщо цей удар інакше не примушує ціль рухатися.'
								})
							],
							level6: [
								FactoryLogic.feature.create({
									id: 'beastheart-1-2a-2-6-1',
									name: 'Ведмежа подоба',
									description: 'Поки ведмідь лютує, ви маєте імунітет до шкоди 5, а ваш розмір змінюється відповідно до розміру ведмедя (максимум 2). Якщо навколо недостатньо вільного простору, щоб збільшити ваш розмір, він збільшиться, щойно простору стане достатньо.'
								})
							],
							level10: [
								FactoryLogic.feature.create({
									id: 'beastheart-1-2a-2-10-1',
									name: 'Два колоси',
									description: 'Поки ведмідь лютує, дальність ваших здібностей ближнього бою та зброї зростає на 1, ваш розмір змінюється відповідно до розміру ведмедя (максимум 3), а ваші удари завдають додаткові 5 шкоди.'
								})
							]
						}),
						FactoryLogic.createSummon({
							monster: FactoryLogic.createMonster({
								id: 'beastheart-1-2a-3',
								name: 'Кабан',
								level: 0,
								role: FactoryLogic.createMonsterRole(MonsterOrganizationType.Companion),
								keywords: ['Тварина'],
								encounterValue: 0,
								size: FactoryLogic.createSize(1, 'M'),
								speed: FactoryLogic.createSpeed(5),
								stamina: 0,
								stability: 2,
								freeStrikeDamage: 1,
								characteristics: FactoryLogic.createCharacteristics(2, 1, -1, 2, 2),
								features: [
									FactoryLogic.feature.createBonus({
										id: 'beastheart-1-2a-3-1',
										field: FeatureField.Stamina,
										valueFromController: FeatureField.Stamina
									}),
									FactoryLogic.feature.createBonus({
										id: 'beastheart-1-2a-3-2',
										field: FeatureField.FreeStrikeDamage,
										valueCharacteristics: [Characteristic.Might]
									}),
									FactoryLogic.feature.createSkillChoice({
										id: 'beastheart-1-2a-3-3',
										selected: ['Пошук']
									}),
									FactoryLogic.feature.createAbility({
										ability: FactoryLogic.createAbility({
											id: 'beastheart-1-2a-3-4',
											name: 'Розпорювання',
											description: 'З лютим рохканням кабан кидається вперед, розпанахуючи ворогів іклами.',
											type: FactoryLogic.type.createManeuver(),
											keywords: [AbilityKeyword.Companion, AbilityKeyword.Melee, AbilityKeyword.Weapon],
											distance: [FactoryLogic.distance.createMelee()],
											target: 'Один іншій',
											sections: [
												FactoryLogic.createAbilitySectionText('Кабан рухається на відстань до своєї швидкості по прямій, а потім може завдати 2 + С шкоди суміжній цілі. Якщо під час цього руху кабан наблизився до цілі, він завдає додаткової шкоди, рівної показнику своєї Сили.'),
												FactoryLogic.createAbilitySectionSpend({
													effect: 'Ціль отримує кровотечу (до кінця ходу).'
												})
											]
										})
									}),
									FactoryLogic.feature.create({
										id: 'beastheart-1-2a-3-5',
										name: 'Злостива витривалість',
										description: 'Поки кабан захеканий, він отримує імунітет до шкоди, рівний показнику своєї Сили, і ігнорує шкоду від стану Кровотеча.'
									})
								]
							}),
							isSignature: false,
							cost: 0,
							count: 1,
							level3: [
								FactoryLogic.feature.create({
									id: 'beastheart-1-2a-3-3-1',
									name: 'Слизький кабан',
									description: 'Поки кабан лютує, він отримує +2 до швидкості та подвійну перевагу на маневр «Вивільнитися з захоплення».'
								})
							],
							level6: [
								FactoryLogic.feature.create({
									id: 'beastheart-1-2a-3-6-1',
									name: 'Дикий ривок',
									description: 'Поки кабан лютує, ви можете використовувати маневр «Розпорювання», і коли будь-хто з вас використовує основну дію «Ривок» або маневр «Розпорювання», ви можете зрушитися замість руху.'
								})
							],
							level10: [
								FactoryLogic.feature.create({
									id: 'beastheart-1-2a-3-10-1',
									name: 'Безсмертна лють',
									description: 'Поки кабан лютує, коли хтось із вас використовує здібність, що завдає шкоди, ви отримуєте 10 тимчасової Витривалості.'
								})
							]
						}),
						FactoryLogic.createSummon({
							monster: FactoryLogic.createMonster({
								id: 'beastheart-1-2a-4',
								name: 'Кондор',
								level: 0,
								role: FactoryLogic.createMonsterRole(MonsterOrganizationType.Companion),
								keywords: ['Тварина'],
								encounterValue: 0,
								size: FactoryLogic.createSize(1, 'M'),
								speed: FactoryLogic.createSpeed(7, 'fly'),
								stamina: 0,
								stability: 0,
								freeStrikeDamage: 1,
								characteristics: FactoryLogic.createCharacteristics(2, 2, -1, 2, 1),
								features: [
									FactoryLogic.feature.createBonus({
										id: 'beastheart-1-2a-4-1',
										field: FeatureField.Stamina,
										valueFromController: FeatureField.Stamina
									}),
									FactoryLogic.feature.createBonus({
										id: 'beastheart-1-2a-4-2',
										field: FeatureField.FreeStrikeDamage,
										valueCharacteristics: [Characteristic.Might]
									}),
									FactoryLogic.feature.createSkillChoice({
										id: 'beastheart-1-2a-4-3',
										selected: ['Пильність']
									}),
									FactoryLogic.feature.createAbility({
										ability: FactoryLogic.createAbility({
											id: 'beastheart-1-2a-4-4',
											name: 'Шквал крил',
											description: 'Я не можу прицілитися, коли це кляте птаство ляскає крилами просто перед обличчям!',
											type: FactoryLogic.type.createManeuver(),
											keywords: [AbilityKeyword.Companion, AbilityKeyword.Melee, AbilityKeyword.Weapon],
											distance: [FactoryLogic.distance.createMelee()],
											target: 'Один ворог',
											sections: [
												FactoryLogic.createAbilitySectionText('2 + С шкоди; до кінця вашого наступного ходу кожен ворог, суміжний із кондором, ослаблений.'),
												FactoryLogic.createAbilitySectionSpend({
													effect: 'Коли ця здібність мала б ослабити ворога, він натомість стає спровокованим.'
												})
											]
										})
									}),
									FactoryLogic.feature.create({
										id: 'beastheart-1-2a-4-5',
										name: 'Рухома ціль',
										description: 'Дальні атаки проти кондора отримують шкоду, поки він летить і має швидкість більше 0.'
									})
								]
							}),
							isSignature: false,
							cost: 0,
							count: 1,
							level3: [
								FactoryLogic.feature.create({
									id: 'beastheart-1-2a-4-3-1',
									name: 'Пікірування',
									description: 'Коли кондор завдає удару, поки лютує, він завдає додаткової шкоди, рівної кількості клітинок, які вже пролетів у свій хід, максимум 5.'
								})
							],
							level6: [
								FactoryLogic.feature.create({
									id: 'beastheart-1-2a-4-6-1',
									name: 'Піднесений у повітря',
									description: 'Поки кондор лютує, у вас виростають крила. Ви можете літати й отримуєте +2 до швидкості під час польоту. Коли цей політ закінчується, ви безпечно опускаєтеся вниз.'
								})
							],
							level10: [
								FactoryLogic.feature.create({
									id: 'beastheart-1-2a-4-10-1',
									name: 'Політ кондора',
									description: 'Поки кондор лютує, швидкість кожного з вас зростає на 5.'
								})
							]
						}),
						FactoryLogic.createSummon({
							monster: FactoryLogic.createMonster({
								id: 'beastheart-1-2a-5',
								name: 'Дейноніх',
								level: 0,
								role: FactoryLogic.createMonsterRole(MonsterOrganizationType.Companion),
								keywords: ['Тварина'],
								encounterValue: 0,
								size: FactoryLogic.createSize(1, 'M'),
								speed: FactoryLogic.createSpeed(7),
								stamina: 0,
								stability: 1,
								freeStrikeDamage: 1,
								characteristics: FactoryLogic.createCharacteristics(2, 2, -1, 2, 1),
								features: [
									FactoryLogic.feature.createBonus({
										id: 'beastheart-1-2a-5-1',
										field: FeatureField.Stamina,
										valueFromController: FeatureField.Stamina
									}),
									FactoryLogic.feature.createBonus({
										id: 'beastheart-1-2a-5-2',
										field: FeatureField.FreeStrikeDamage,
										valueCharacteristics: [Characteristic.Might]
									}),
									FactoryLogic.feature.createSkillChoice({
										id: 'beastheart-1-2a-5-3',
										selected: ['Відстеження']
									}),
									FactoryLogic.feature.createAbility({
										ability: FactoryLogic.createAbility({
											id: 'beastheart-1-2a-5-4',
											name: 'Страшний кіготь',
											description: 'Дейноніх бʼє здобич ногою й розтинає її своїми лютими кігтями.',
											type: FactoryLogic.type.createManeuver(),
											keywords: [AbilityKeyword.Companion, AbilityKeyword.Melee, AbilityKeyword.Weapon],
											distance: [FactoryLogic.distance.createMelee()],
											target: 'Один ворог',
											sections: [
												FactoryLogic.createAbilitySectionText('2 + С шкоди; кровотеча (до кінця ходу)'),
												FactoryLogic.createAbilitySectionSpend({
													effect: 'Ціль отримує кровотечу (рят. кидок закінчує) замість кровотечі до кінця ходу.'
												})
											]
										})
									}),
									FactoryLogic.feature.create({
										id: 'beastheart-1-2a-5-5',
										name: 'Криваве шаленство',
										description: 'Дейноніх отримує сплеск, коли завдає шкоди істоті з кровотечею.'
									})
								]
							}),
							isSignature: false,
							cost: 0,
							count: 1,
							level3: [
								FactoryLogic.feature.create({
									id: 'beastheart-1-2a-5-3-1',
									name: 'Роздеру тебе на клапті',
									description: 'Коли дейноніх вражає істоту, поки лютує, ціль отримує кровотечу (рят. кидок закінчує). Поки цей стан триває, ціль також сповільнена.'
								})
							],
							level6: [
								FactoryLogic.feature.create({
									id: 'beastheart-1-2a-5-6-1',
									name: 'Втамую спрагу кровʼю',
									description: 'Поки дейноніх лютує, коли ви використовуєте дію, що завдає киданої шкоди істоті з кровотечею, ви отримуєте 2 сплески.'
								})
							],
							level10: [
								FactoryLogic.feature.create({
									id: 'beastheart-1-2a-5-10-1',
									name: 'Жниварський серп',
									description: 'Кігті дейноніха косять істот під ногами. Поки він лютує, коли вперше за хід дейноніх переміщується суміжно з ворогом або входить у його простір, ворог отримує шкоду, рівну показнику Сили дейноніха.'
								})
							]
						}),
						FactoryLogic.createSummon({
							monster: FactoryLogic.createMonster({
								id: 'beastheart-1-2a-6',
								name: 'Дрейк',
								level: 0,
								role: FactoryLogic.createMonsterRole(MonsterOrganizationType.Companion),
								keywords: ['Тварина'],
								encounterValue: 0,
								size: FactoryLogic.createSize(1, 'M'),
								speed: FactoryLogic.createSpeed(5, 'fly'),
								stamina: 0,
								stability: 1,
								freeStrikeDamage: 1,
								characteristics: FactoryLogic.createCharacteristics(2, 1, -1, 2, 2),
								features: [
									FactoryLogic.feature.createBonus({
										id: 'beastheart-1-2a-6-1',
										field: FeatureField.Stamina,
										valueFromController: FeatureField.Stamina
									}),
									FactoryLogic.feature.createBonus({
										id: 'beastheart-1-2a-6-2',
										field: FeatureField.FreeStrikeDamage,
										valueCharacteristics: [Characteristic.Might]
									}),
									FactoryLogic.feature.createAbility({
										ability: FactoryLogic.createAbility({
											id: 'beastheart-1-2a-6-3',
											name: 'Дихання дрейка',
											description: 'Дрейк видихає вибух енергії, що плавить плоть.',
											type: FactoryLogic.type.createManeuver(),
											keywords: [AbilityKeyword.Companion, AbilityKeyword.Area],
											distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Cube, value: 1, within: 1 })],
											target: 'Кожна істота в зоні',
											sections: [
												FactoryLogic.createAbilitySectionText('С шкоди налаштованого типу (див. «Стихійне налаштування»)'),
												FactoryLogic.createAbilitySectionSpend({
													repeatable: true,
													effect: 'За кожну витрачену лють (макс. 4) шкода збільшується на 1, а розмір куба збільшується на 1.'
												})
											]
										})
									}),
									FactoryLogic.feature.create({
										id: 'beastheart-1-2a-6-4',
										name: 'Стихійне налаштування',
										description: 'Коли ви отримуєте цього компаньйона, оберіть тип шкоди: кислота, холод, скверна, вогонь, блискавка, отрута або звук. Дрейк налаштований на цей тип шкоди. Його інші особливості залежать від обраного типу шкоди.'
									}),
									FactoryLogic.feature.create({
										id: 'beastheart-1-2a-6-5',
										name: 'Спільний імунітет',
										description: 'Ви отримуєте імунітет 3 до налаштованого типу шкоди дрейка.'
									})
								]
							}),
							isSignature: false,
							cost: 0,
							count: 1,
							level3: [
								FactoryLogic.feature.create({
									id: 'beastheart-1-2a-6-3-1',
									name: 'Нескінченне дихання',
									description: 'Коли дрейк використовує «Дихання дрейка», йому не потрібно витрачати лють, щоб змінювати його розмір і шкоду.'
								})
							],
							level6: [
								FactoryLogic.feature.create({
									id: 'beastheart-1-2a-6-6-1',
									name: 'У мені палає вогонь',
									description: `
Поки дрейк лютує, у вас виростають драконячі крила. Ви можете літати. Коли цей політ закінчується, ви безпечно опускаєтеся вниз.

Крім того, ви можете використовувати «Дихання дрейка». Вам не потрібно витрачати лють, щоб змінювати його розмір і шкоду.`
								})
							],
							level10: [
								FactoryLogic.feature.create({
									id: 'beastheart-1-2a-6-10-1',
									name: 'Стихійний аватар',
									description: 'Поки дрейк лютує, ви та ваш компаньйон отримуєте імунітет до налаштованого типу шкоди дрейка, а коли ви або дрейк влучаєте атакою по істоті, вона опиняється під печаттю дракона (рят. кидок закінчує). Поки на істоті печать дракона, вона має вразливість 10 до налаштованого типу шкоди дрейка.'
								})
							]
						}),
						FactoryLogic.createSummon({
							monster: FactoryLogic.createMonster({
								id: 'beastheart-1-2a-7',
								name: 'Желейна куля',
								level: 0,
								role: FactoryLogic.createMonsterRole(MonsterOrganizationType.Companion),
								keywords: ['Тварина'],
								encounterValue: 0,
								size: FactoryLogic.createSize(1, 'L'),
								speed: FactoryLogic.createSpeed(5),
								stamina: 0,
								stability: 2,
								freeStrikeDamage: 1,
								characteristics: FactoryLogic.createCharacteristics(2, 2, -1, 2, 1),
								features: [
									FactoryLogic.feature.createBonus({
										id: 'beastheart-1-2a-7-1',
										field: FeatureField.Stamina,
										valueFromController: FeatureField.Stamina
									}),
									FactoryLogic.feature.createBonus({
										id: 'beastheart-1-2a-7-2',
										field: FeatureField.FreeStrikeDamage,
										valueCharacteristics: [Characteristic.Might]
									}),
									FactoryLogic.feature.createDamageModifier({
										id: 'beastheart-1-2a-7-3',
										modifiers: [
											FactoryLogic.damageModifier.create({
												damageType: DamageType.Acid,
												modifierType: DamageModifierType.Immunity,
												value: 3
											})
										]
									}),
									FactoryLogic.feature.createAbility({
										ability: FactoryLogic.createAbility({
											id: 'beastheart-1-2a-7-4',
											name: 'Поглинання',
											description: 'З огидним хлюпанням сфера розтікається навколо своєї безпорадної здобичі.',
											type: FactoryLogic.type.createManeuver(),
											keywords: [AbilityKeyword.Companion, AbilityKeyword.Melee, AbilityKeyword.Weapon],
											distance: [FactoryLogic.distance.createMelee()],
											target: 'Один ворог',
											sections: [
												FactoryLogic.createAbilitySectionText('2 + С кислотної шкоди; Л < [середній], сфера переміщується в простір цілі. Якщо ціль повністю опиняється в просторі сфери, вона схоплена.'),
												FactoryLogic.createAbilitySectionSpend({
													effect: 'Поки захоплення не закінчиться, істота наприкінці кожного ходу сфери отримує кислотну шкоду, рівну показнику Сили сфери.'
												})
											]
										})
									}),
									FactoryLogic.feature.create({
										id: 'beastheart-1-2a-7-5',
										name: 'Желеподібна',
										description: 'Сфера може перебувати в тому самому просторі, що й істота. Поки сфера ділить простір з істотою, вона має до неї лінію ефекту. Якщо істота повністю перебуває в просторі сфери, вона має лінію ефекту лише до сфери. Простір сфери вважається складною місцевістю.'
									}),
									FactoryLogic.feature.create({
										id: 'beastheart-1-2a-7-6',
										name: 'Прокоти це',
										description: 'Коли сфера мала б отримати стан Розпластаний, вона може натомість зрушитися на 1 клітинку.'
									}),
									FactoryLogic.feature.create({
										id: 'beastheart-1-2a-7-7',
										name: 'Напівпрозора',
										description: 'Сфера прихована, доки не почне діяти.'
									})
								]
							}),
							isSignature: false,
							cost: 0,
							count: 1,
							level3: [
								FactoryLogic.feature.create({
									id: 'beastheart-1-2a-7-3-1',
									name: 'Затягни всередину',
									description: 'Коли сфера вражає істоту, поки лютує, ціль притягується до 3 клітинок у простір сфери. Якщо після цього руху істота повністю опиняється всередині сфери, вона схоплена.'
								})
							],
							level6: [
								FactoryLogic.feature.create({
									id: 'beastheart-1-2a-7-6-1',
									name: 'Усередині все палає',
									description: 'Поки сфера лютує, ваші руки й ноги стають вʼязкими та тягучими. Ваша швидкість і дальність ближнього бою отримують +2.'
								})
							],
							level10: [
								FactoryLogic.feature.create({
									id: 'beastheart-1-2a-7-10-1',
									name: 'Неконтрольоване розростання',
									description: 'Поки сфера лютує, щоразу, коли істота всередині неї знижується до 0 Витривалості, розмір сфери збільшується на 1, максимум до 5. Розмір сфери не може збільшуватися таким чином частіше ніж раз за хід, а коли лють закінчується, сфера повертається до свого справжнього розміру. Крім того, ви та сфера отримуєте імунітет до кислоти 10.'
								})
							]
						}),
						FactoryLogic.createSummon({
							monster: FactoryLogic.createMonster({
								id: 'beastheart-1-2a-8',
								name: 'Пекельний гончак',
								level: 0,
								role: FactoryLogic.createMonsterRole(MonsterOrganizationType.Companion),
								keywords: ['Тварина'],
								encounterValue: 0,
								size: FactoryLogic.createSize(1, 'M'),
								speed: FactoryLogic.createSpeed(7),
								stamina: 0,
								stability: 1,
								freeStrikeDamage: 1,
								characteristics: FactoryLogic.createCharacteristics(2, 2, -1, 2, 1),
								features: [
									FactoryLogic.feature.createBonus({
										id: 'beastheart-1-2a-8-1',
										field: FeatureField.Stamina,
										valueFromController: FeatureField.Stamina
									}),
									FactoryLogic.feature.createBonus({
										id: 'beastheart-1-2a-8-2',
										field: FeatureField.FreeStrikeDamage,
										valueCharacteristics: [Characteristic.Might]
									}),
									FactoryLogic.feature.createDamageModifier({
										id: 'beastheart-1-2a-8-3',
										modifiers: [
											FactoryLogic.damageModifier.create({
												damageType: DamageType.Fire,
												modifierType: DamageModifierType.Immunity,
												value: 3
											})
										]
									}),
									FactoryLogic.feature.createSkillChoice({
										id: 'beastheart-1-2a-8-4',
										selected: ['Залякування']
									}),
									FactoryLogic.feature.createAbility({
										ability: FactoryLogic.createAbility({
											id: 'beastheart-1-2a-8-5',
											name: 'Вогняне дихання',
											description: 'Пекельний гончак видихає пекельне полумʼя.',
											type: FactoryLogic.type.createManeuver(),
											keywords: [AbilityKeyword.Companion, AbilityKeyword.Melee],
											distance: [FactoryLogic.distance.createMelee(2)],
											target: 'Один іншій',
											sections: [
												FactoryLogic.createAbilitySectionText('2 + С шкоди вогнем'),
												FactoryLogic.createAbilitySectionSpend({
													effect: 'Пекельний гончак додає свій показник Інтуїції або до шкоди, або до дальності.'
												})
											]
										})
									}),
									FactoryLogic.feature.create({
										id: 'beastheart-1-2a-8-6',
										name: 'Пекельний пакт',
										description: 'Ви отримуєте імунітет до вогню, рівний імунітету до вогню пекельного гончака.'
									})
								]
							}),
							isSignature: false,
							cost: 0,
							count: 1,
							level3: [
								FactoryLogic.feature.create({
									id: 'beastheart-1-2a-8-3-1',
									name: 'Пекельне явлення',
									description: 'Коли пекельний гончак вражає істоту, поки лютує, ціль із П < [середній] стає зляканою.'
								})
							],
							level6: [
								FactoryLogic.feature.create({
									id: 'beastheart-1-2a-8-6-1',
									name: 'Шалений пес',
									description: 'Поки пекельний гончак лютує, ваші щелепи вкриваються кислотною піною. Коли ви вражаєте істоту, ви завдаєте додаткової кислотної шкоди, рівної вашому показнику Сили.'
								})
							],
							level10: [
								FactoryLogic.feature.create({
									id: 'beastheart-1-2a-8-10-1',
									name: 'Оповитий полумʼям',
									description: 'Поки пекельний гончак лютує, ви та гончак оточені аурою полумʼя. Вороги, які починають свій хід суміжно з вами або пекельним гончаком, отримують шкоду вогнем, рівну показнику Сили гончака.'
								})
							]
						}),
						FactoryLogic.createSummon({
							monster: FactoryLogic.createMonster({
								id: 'beastheart-1-2a-9',
								name: 'Світлозгин',
								level: 0,
								role: FactoryLogic.createMonsterRole(MonsterOrganizationType.Companion),
								keywords: ['Тварина'],
								encounterValue: 0,
								size: FactoryLogic.createSize(1, 'L'),
								speed: FactoryLogic.createSpeed(7),
								stamina: 0,
								stability: 2,
								freeStrikeDamage: 1,
								characteristics: FactoryLogic.createCharacteristics(2, 1, -1, 2, 2),
								features: [
									FactoryLogic.feature.createBonus({
										id: 'beastheart-1-2a-9-1',
										field: FeatureField.Stamina,
										valueFromController: FeatureField.Stamina
									}),
									FactoryLogic.feature.createBonus({
										id: 'beastheart-1-2a-9-2',
										field: FeatureField.FreeStrikeDamage,
										valueCharacteristics: [Characteristic.Might]
									}),
									FactoryLogic.feature.createSkillChoice({
										id: 'beastheart-1-2a-9-3',
										selected: ['Ховання']
									}),
									FactoryLogic.feature.createAbility({
										ability: FactoryLogic.createAbility({
											id: 'beastheart-1-2a-9-4',
											name: 'Іскристий удар хвостом',
											description: 'Світлозгин змахує хвостом, жбурляючи ворогу в обличчя снопи іскор.',
											type: FactoryLogic.type.createManeuver(),
											keywords: [AbilityKeyword.Companion, AbilityKeyword.Melee, AbilityKeyword.Weapon],
											distance: [FactoryLogic.distance.createMelee()],
											target: 'Один ворог',
											sections: [
												FactoryLogic.createAbilitySectionText(`
2 + С шкоди; І < [середній], засліплений (до кінця ходу)

Засліплена істота не може мати лінію ефекту до цілей, які не суміжні з нею.`),
												FactoryLogic.createAbilitySectionSpend({
													effect: 'Засліплена істота також отримує шкоду на удари.'
												})
											]
										})
									}),
									FactoryLogic.feature.create({
										id: 'beastheart-1-2a-9-5',
										name: 'Ухильність',
										description: 'Світлозгин завжди трактує ефекти «рят. кидок закінчує» як ефекти до кінця ходу.'
									})
								]
							}),
							isSignature: false,
							cost: 0,
							count: 1,
							level3: [
								FactoryLogic.feature.create({
									id: 'beastheart-1-2a-9-3-1',
									name: 'Удар і втеча',
									description: 'Коли світлозгин вражає істоту, поки лютує, він може телепортуватися до 5 клітинок і використати маневр «Сховатися».'
								})
							],
							level6: [
								FactoryLogic.feature.create({
									id: 'beastheart-1-2a-9-6-1',
									name: 'Світлоносець',
									description: 'Поки світлозгин лютує, ви можете безкоштовним маневром спалахнути сліпучим світлом або згасити це сяйво. Сяйво згасає, коли лють закінчується. Поки ви сяєте, ваша шкіра освітлює простір на 10 клітинок, а удари проти вас отримують шкоду.'
								})
							],
							level10: [
								FactoryLogic.feature.create({
									id: 'beastheart-1-2a-9-10-1',
									name: 'Скрізь і ніде',
									description: 'Поки світлозгин лютує, ваша хватка за просторову реальність слабшає. Раз за кожен ваш хід ви або світлозгин можете безкоштовним маневром телепортуватися до 3 клітинок. Крім того, удари ворогів, що цілиться у вас або світлозгина, автоматично отримують результат на один рівень нижчий, мінімум 1.'
								})
							]
						}),
						FactoryLogic.createSummon({
							monster: FactoryLogic.createMonster({
								id: 'beastheart-1-2a-10',
								name: 'Пантера',
								level: 0,
								role: FactoryLogic.createMonsterRole(MonsterOrganizationType.Companion),
								keywords: ['Тварина'],
								encounterValue: 0,
								size: FactoryLogic.createSize(1, 'M'),
								speed: FactoryLogic.createSpeed(7, 'climb'),
								stamina: 0,
								stability: 1,
								freeStrikeDamage: 1,
								characteristics: FactoryLogic.createCharacteristics(2, 2, -1, 2, 1),
								features: [
									FactoryLogic.feature.createBonus({
										id: 'beastheart-1-2a-10-1',
										field: FeatureField.Stamina,
										valueFromController: FeatureField.Stamina
									}),
									FactoryLogic.feature.createBonus({
										id: 'beastheart-1-2a-10-2',
										field: FeatureField.FreeStrikeDamage,
										valueCharacteristics: [Characteristic.Might]
									}),
									FactoryLogic.feature.createSkillChoice({
										id: 'beastheart-1-2a-10-3',
										selected: ['Крадіжка']
									}),
									FactoryLogic.feature.createAbility({
										ability: FactoryLogic.createAbility({
											id: 'beastheart-1-2a-10-4',
											name: 'Стрибок',
											description: 'Пантера збирається в клубок, а потім розгортається у смертельний стрибок.',
											type: FactoryLogic.type.createManeuver(),
											keywords: [AbilityKeyword.Companion, AbilityKeyword.Melee, AbilityKeyword.Weapon],
											distance: [FactoryLogic.distance.createMelee()],
											target: 'Один ворог',
											sections: [
												FactoryLogic.createAbilitySectionText('2 + С шкоди; С < [середній], розпластаний'),
												FactoryLogic.createAbilitySectionSpend({
													effect: 'Пантера може стрибнути на відстань до своєї швидкості перед використанням цієї здібності. Якщо під час цього вона стрибнула щонайменше на 1 клітинку, ціль із С < [сильний] стає розпластаною.'
												})
											]
										})
									}),
									FactoryLogic.feature.create({
										id: 'beastheart-1-2a-10-5',
										name: 'Могутній стрибок',
										description: 'Коли пантера виконує дію руху «Просування» або основну дію «Ривок», у межах цього руху вона може стрибнути на відстань до своєї швидкості в будь-якому напрямку, зокрема вертикально.'
									})
								]
							}),
							isSignature: false,
							cost: 0,
							count: 1,
							level3: [
								FactoryLogic.feature.create({
									id: 'beastheart-1-2a-10-3-1',
									name: 'Первісний стрибок',
									description: 'Коли пантера вражає істоту, поки лютує, ціль стає розпластаною.'
								})
							],
							level6: [
								FactoryLogic.feature.create({
									id: 'beastheart-1-2a-10-6-1',
									name: 'Одним стрибком',
									description: 'Поки пантера лютує, раз за ваш хід ви можете безкоштовним маневром стрибнути на кількість клітинок, рівну вашій швидкості.'
								})
							],
							level10: [
								FactoryLogic.feature.create({
									id: 'beastheart-1-2a-10-10-1',
									name: 'Дух пантери',
									description: 'Поки пантера лютує, ви та пантера стаєте невидимими й можете проходити крізь предмети та місцевість так, ніби це складна місцевість. Істота, яка в такий спосіб завершує хід усередині твердого обʼєкта, телепортується в останній порожній простір, який займала.'
								})
							]
						}),
						FactoryLogic.createSummon({
							monster: FactoryLogic.createMonster({
								id: 'beastheart-1-2a-11',
								name: 'Павук',
								level: 0,
								role: FactoryLogic.createMonsterRole(MonsterOrganizationType.Companion),
								keywords: ['Тварина'],
								encounterValue: 0,
								size: FactoryLogic.createSize(1, 'M'),
								speed: FactoryLogic.createSpeed(5, 'climb'),
								stamina: 0,
								stability: 1,
								freeStrikeDamage: 1,
								characteristics: FactoryLogic.createCharacteristics(2, 2, -1, 2, 1),
								features: [
									FactoryLogic.feature.createBonus({
										id: 'beastheart-1-2a-11-1',
										field: FeatureField.Stamina,
										valueFromController: FeatureField.Stamina
									}),
									FactoryLogic.feature.createBonus({
										id: 'beastheart-1-2a-11-2',
										field: FeatureField.FreeStrikeDamage,
										valueCharacteristics: [Characteristic.Might]
									}),
									FactoryLogic.feature.createSkillChoice({
										id: 'beastheart-1-2a-11-3',
										selected: ['Крадіжка']
									}),
									FactoryLogic.feature.createAbility({
										ability: FactoryLogic.createAbility({
											id: 'beastheart-1-2a-11-4',
											name: 'Павутинний постріл',
											description: 'Павук випускає клубок липкого шовку.',
											type: FactoryLogic.type.createManeuver(),
											keywords: [AbilityKeyword.Companion, AbilityKeyword.Ranged, AbilityKeyword.Weapon],
											distance: [FactoryLogic.distance.createRanged(5)],
											target: 'Один ворог',
											sections: [
												FactoryLogic.createAbilitySectionText('С < [середній], скутий (до кінця ходу)'),
												FactoryLogic.createAbilitySectionSpend({
													effect: 'С < [сильний], скутий (рят. кидок закінчує)'
												})
											]
										})
									}),
									FactoryLogic.feature.create({
										id: 'beastheart-1-2a-11-5',
										name: 'Заходь до моєї оселі',
										description: 'Коли павук вражає скуту істоту, він завдає додаткової шкоди отрутою, рівної подвоєному показнику Інтуїції павука.'
									})
								]
							}),
							isSignature: false,
							cost: 0,
							count: 1,
							level3: [
								FactoryLogic.feature.create({
									id: 'beastheart-1-2a-11-3-1',
									name: 'Отруйні ікла',
									description: 'Коли павук вражає істоту ударом, поки лютує, ціль отримує шкоду отрутою, рівну показнику Сили павука.'
								})
							],
							level6: [
								FactoryLogic.feature.create({
									id: 'beastheart-1-2a-11-6-1',
									name: 'Метальник павутини',
									description: 'Поки павук лютує, раз за ваш хід ви можете безкоштовним маневром вистрілити павутиною в стелю, стіну або міцний предмет над вами в межах 5 клітинок. Після цього ви можете пролетіти по прямій до будь-якого простору в межах 5 клітинок від цього предмета.'
								})
							],
							level10: [
								FactoryLogic.feature.create({
									id: 'beastheart-1-2a-11-10-1',
									name: 'Життєпивець',
									description: 'Поки павук лютує, коли ви або павук атакуєте маневром, що завдає шкоди, атакувальник відновлює Витривалість, рівну завданій шкоді.'
								})
							]
						}),
						FactoryLogic.createSummon({
							monster: FactoryLogic.createMonster({
								id: 'beastheart-1-2a-12',
								name: 'Споровик',
								level: 0,
								role: FactoryLogic.createMonsterRole(MonsterOrganizationType.Companion),
								keywords: ['Тварина'],
								encounterValue: 0,
								size: FactoryLogic.createSize(1, 'S'),
								speed: FactoryLogic.createSpeed(5),
								stamina: 0,
								stability: 0,
								freeStrikeDamage: 1,
								characteristics: FactoryLogic.createCharacteristics(2, 2, -1, 2, 1),
								features: [
									FactoryLogic.feature.createBonus({
										id: 'beastheart-1-2a-12-1',
										field: FeatureField.Stamina,
										valueFromController: FeatureField.Stamina
									}),
									FactoryLogic.feature.createBonus({
										id: 'beastheart-1-2a-12-2',
										field: FeatureField.FreeStrikeDamage,
										valueCharacteristics: [Characteristic.Might]
									}),
									FactoryLogic.feature.createDamageModifier({
										id: 'beastheart-1-2a-12-3',
										modifiers: [
											FactoryLogic.damageModifier.create({
												damageType: DamageType.Poison,
												modifierType: DamageModifierType.Immunity,
												value: 3
											})
										]
									}),
									FactoryLogic.feature.createSkillChoice({
										id: 'beastheart-1-2a-12-4',
										selected: ['Ховання']
									}),
									FactoryLogic.feature.createAbility({
										ability: FactoryLogic.createAbility({
											id: 'beastheart-1-2a-12-5',
											name: 'Спорова хмара',
											description: 'Споровик видихає хмару дезорієнтувальних випарів.',
											type: FactoryLogic.type.createManeuver(),
											keywords: [AbilityKeyword.Companion, AbilityKeyword.Melee, AbilityKeyword.Weapon],
											distance: [FactoryLogic.distance.createMelee()],
											target: 'Один ворог',
											sections: [
												FactoryLogic.createAbilitySectionText('2 + С шкоди отрутою; споровик невидимий для ворога до кінця свого наступного ходу або доки не завдасть йому шкоди.'),
												FactoryLogic.createAbilitySectionSpend({
													effect: 'Ворог, уражений «Споровою хмарою», який має С < [сильний], стає приголомшеним (до кінця ходу).'
												})
											]
										})
									}),
									FactoryLogic.feature.create({
										id: 'beastheart-1-2a-12-6',
										name: 'Потайник',
										description: 'Споровик може завершувати свій рух у просторах союзників. Поки він перебуває в просторі союзника, то має укриття.'
									})
								]
							}),
							isSignature: false,
							cost: 0,
							count: 1,
							level3: [
								FactoryLogic.feature.create({
									id: 'beastheart-1-2a-12-3-1',
									name: 'Спори уповільнення',
									description: 'Коли споровик вражає істоту ударом, поки лютує, ціль стає сповільненою (до кінця ходу).'
								})
							],
							level6: [
								FactoryLogic.feature.create({
									id: 'beastheart-1-2a-12-6-1',
									name: 'Хода рослинами',
									description: 'Поки споровик лютує, раз за ваш хід ви можете безкоштовним маневром телепортуватися в простір у межах 15 клітинок, якщо цей простір або суміжний із ним простір містить вашого компаньйона чи рослини або гриби розміру 1S чи більше. Після цього ви отримуєте перевагу на наступний удар, який здійсните до кінця ходу.'
								})
							],
							level10: [
								FactoryLogic.feature.create({
									id: 'beastheart-1-2a-12-10-1',
									name: 'Тягучий міцелій',
									description: 'Поки споровик лютує, ваші кінцівки та кінцівки споровика вкриваються коренеподібним міцелієм, що чіпко тримається за поверхні. Поки споровик лютує, вас і споровика не можна примусово перемістити або зробити розпластаними, а коли ви або споровик вражаєте істоту з С < [сильний], ціль стає схопленою.'
								})
							]
						}),
						FactoryLogic.createSummon({
							monster: FactoryLogic.createMonster({
								id: 'beastheart-1-2a-13',
								name: 'Вовк',
								level: 0,
								role: FactoryLogic.createMonsterRole(MonsterOrganizationType.Companion),
								keywords: ['Тварина'],
								encounterValue: 0,
								size: FactoryLogic.createSize(1, 'M'),
								speed: FactoryLogic.createSpeed(7),
								stamina: 0,
								stability: 1,
								freeStrikeDamage: 1,
								characteristics: FactoryLogic.createCharacteristics(2, 2, -1, 2, 1),
								features: [
									FactoryLogic.feature.createBonus({
										id: 'beastheart-1-2a-13-1',
										field: FeatureField.Stamina,
										valueFromController: FeatureField.Stamina
									}),
									FactoryLogic.feature.createBonus({
										id: 'beastheart-1-2a-13-2',
										field: FeatureField.FreeStrikeDamage,
										valueCharacteristics: [Characteristic.Might]
									}),
									FactoryLogic.feature.createSkillChoice({
										id: 'beastheart-1-2a-13-3',
										selected: ['Відстеження']
									}),
									FactoryLogic.feature.createAbility({
										ability: FactoryLogic.createAbility({
											id: 'beastheart-1-2a-13-4',
											name: 'Мертва хватка щелеп',
											description: 'З моторошним гарчанням вовк впивається могутніми зубами у свою здобич.',
											type: FactoryLogic.type.createManeuver(),
											keywords: [AbilityKeyword.Companion, AbilityKeyword.Melee, AbilityKeyword.Weapon],
											distance: [FactoryLogic.distance.createMelee()],
											target: 'Один ворог',
											sections: [
												FactoryLogic.createAbilitySectionText('2 + С шкоди; С < [середній], схоплений'),
												FactoryLogic.createAbilitySectionSpend({
													effect: 'С < [сильний], схоплений'
												})
											]
										})
									}),
									FactoryLogic.feature.create({
										id: 'beastheart-1-2a-13-5',
										name: 'Тягун',
										description: 'Вовк може рухатися на повній швидкості, поки тримає істоту схопленою, незалежно від розміру цієї істоти.'
									})
								]
							}),
							isSignature: false,
							cost: 0,
							count: 1,
							level3: [
								FactoryLogic.feature.create({
									id: 'beastheart-1-2a-13-3-1',
									name: 'Ого, які в тебе великі зуби',
									description: 'Коли вовк вражає істоту ударом, поки лютує, ціль стає схопленою.'
								})
							],
							level6: [
								FactoryLogic.feature.create({
									id: 'beastheart-1-2a-13-6-1',
									name: 'Поклик дикої природи',
									description: 'Поки вовк лютує, кожен із вас отримує +2 до швидкості, а істоти в межах 5 клітинок не можуть бути прихованими або замаскованими від вас чи вашого компаньйона.'
								})
							],
							level10: [
								FactoryLogic.feature.create({
									id: 'beastheart-1-2a-13-10-1',
									name: 'Лютововк',
									description: 'Поки вовк лютує, вас і вовка оточує аура жаху. Вороги, які починають свій хід суміжно з вами або вовком і мають П < [сильний], стають зляканими (до кінця ходу).'
								})
							]
						})
					]
				}),
				FactoryLogic.feature.create({
					id: 'beastheart-1-2b',
					name: 'Компаньйони в бою',
					description: `
**Витривалість і Відновлення компаньйона**. Максимум Витривалості вашого компаньйона дорівнює вашому максимуму Витривалості. Власних Відновлень компаньйон не має. Натомість, якщо ефект дозволяє компаньйонові витратити Відновлення, він витрачає одне з ваших Відновлень.

**Дії компаньйона**. Компаньйон є вашим союзником, але виконує свій хід як частину вашого ходу. Для ефектів, що закінчуються наприкінці ходу компаньйона, а також для будь-яких інших правил, що залежать від початку або кінця ходу істоти, початок і кінець вашого ходу також вважаються початком і кінцем ходу компаньйона.

У вас і вашого компаньйона окремі дії руху. У вас є одна тригерна дія, яку може виконати або ви, або компаньйон. Ви ділите між собою маневр і основну дію: якщо ви виконуєте основну дію, то не можете виконати маневр, але це може зробити компаньйон. Якщо ви виконуєте маневр, то не можете виконати основну дію, але це може зробити компаньйон.

**Спільні маневри**. Коли ви або ваш компаньйон виконуєте один із таких маневрів, ви можете обрати, щоб користь від нього отримали ви обидва: «Перехопити подих», «Втекти з захвату», «Сховатися», «Піднятися».

**Дальні вільні удари**. У компаньйона немає дальнього вільного удару.

**Спільні здібності**. Деякі здібності, які надає клас звіросерця, може використовувати лише звіросерце, деякі лише компаньйон, а деякі може використовувати будь-хто з вас. Якщо здібність звіросерця має ключове слово Beastheart, її може використовувати лише звіросерце. Якщо вона має ключове слово Companion, її може використовувати лише компаньйон. Якщо здібність може використати будь-хто з вас, то слово “ви” в її тексті означає того, хто її використовує, а слово “партнер” означає того з вас, хто її не використовував. Фрази на кшталт “ви обидва” та “кожен із вас” стосуються вас і вашого компаньйона.

**Спільні чуття**. Поки ви перебуваєте в межах 1 милі один від одного, ви можете спілкуватися телепатично так, наче маєте спільну мову, хоча це спілкування складається з нечітких образів і відчуттів, а не зі слів.

**Спільні навички**. Ваш компаньйон має всі навички, які маєте ви, і навпаки. Водночас, які б навички він не мав, компаньйон не може виконувати дій, які суперечать його фізіології (наприклад, вовк не може відмикати замки).

**Спільний простір**. Ви обоє можете вільно проходити крізь простори один одного й зупинятися в них.

**Спільні перки й титули**. Якщо ви отримуєте перевагу, здобувши перк або титул, ваш компаньйон отримує ту саму перевагу. Компаньйон може використовувати лише ті переваги, які логічно доступні тварині: наприклад, тварина не може крафтити, а отже не може скористатися перком Handy.

**Сплески**. Сплески, отримані компаньйоном, додаються до вашого спільного пулу сплесків. Компаньйон може витрачати ваші сплески так само, як і ви. Якщо той самий ефект мав би надати сплески вам обом, ви все одно отримуєте їх лише один раз.

**Зміна компаньйона**. Як діяльність під час відпочинку ви можете відпустити поточного компаньйона й отримати нового компаньйона іншого виду або знову призвати компаньйона, якого раніше відпустили.

**Один герой**. Ви та ваш компаньйон вважаєтеся одним героєм для визначення складності боїв, випробувань монтажу тощо.`
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'beastheart-1-3',
						name: 'Серце звіра',
						description: '«Краще відвернися, це буде не з приємних.»',
						type: FactoryLogic.type.createManeuver(),
						keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged],
						distance: [FactoryLogic.distance.createSelf()],
						target: 'Себе',
						sections: [
							FactoryLogic.createAbilitySectionText('Ви витрачаєте Відновлення, і ваш партнер проривається назовні з ваших грудей або вибирається з ваших неприродно широких щелеп. Ваш партнер телепортується у ваш простір на будь-якій відстані, навіть якщо не має до вас лінії ефекту. Ваш партнер отримує тимчасову Витривалість, рівну своєму значенню Відновлення.'),
							FactoryLogic.createAbilitySectionSpend({
								effect: '(Лише звіросерце) Ви вириваєте своє серце з грудей і кидаєте його на відстань до 10 клітинок у незайнятий простір. Потім ваше серце перетворюється на компаньйона, телепортуючи його в цей простір замість вашого.'
							}),
							FactoryLogic.createAbilitySectionSpend({
								repeatable: true,
								effect: 'Телепортована істота отримує додаткову тимчасову Витривалість, рівну своєму значенню Відновлення, помноженому на кількість Люті, витраченої в такий спосіб (макс. 3). Якщо вона мертва, ви можете витратити 3 Люті, щоб повернути її до життя з 1 Витривалістю, навіть якщо її тіло було знищене, але тимчасової Витривалості вона не отримує.'
							})
						]
					})
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'beastheart-1-4',
						name: 'Дикий удар',
						description: 'Ваш компаньйон кидається в гущу бою, дико атакуючи зубами, кігтями чи іншою зброєю.',
						type: FactoryLogic.type.createMain(),
						keywords: [AbilityKeyword.Companion, AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [FactoryLogic.distance.createMelee()],
						target: 'Один ворог',
						sections: [
							FactoryLogic.createAbilitySectionText('Перш ніж виконати цю дію, ваш компаньйон рухається на кількість клітинок, рівну його показнику Інтуїції, прямо до найближчого ворога, про якого знає, уникаючи небезпечної місцевості й завершуючи рух, коли опиняється суміжно з ворогом. Якщо наприкінці цього руху ворог перебуває в межах досяжності, компаньйон виконує такий кидок сили.'),
							FactoryLogic.createAbilitySectionRoll(
								FactoryLogic.createPowerRoll({
									characteristic: Characteristic.Might,
									tier1: '2 + С шкоди',
									tier2: '4 + С шкоди',
									tier3: '7 + С шкоди'
								})
							),
							FactoryLogic.createAbilitySectionPackage('feral-strike')
						]
					})
				}),
				FactoryLogic.feature.createPackage({
					id: 'beastheart-1-5',
					name: 'Шаленство',
					description: `
Поки ваша Лють загострює вбивчий інстинкт, вона також може вкинути компаньйона у шаленство, через яке він кидається на друзів і ворогів однаково, у кривавому бойовому несамовитстві. У міру того як його шаленство зростає, компаньйон стає чимось більшим, ніж смертний супутник, уособлюючи первісний дух руйнування.

У вашого компаньйона є ресурс, що називається шаленством. Щоразу, коли ви або ваш компаньйон витрачаєте Лють, компаньйон накопичує стільки шаленства, скільки Люті було витрачено. Наприкінці зустрічі компаньйон втрачає все своє шаленство і всі його ефекти.

Компаньйон не витрачає шаленство, щоб активувати здібності. Натомість, коли він накопичує 8 шаленства, то шаленіє. Коли шаленство компаньйона зростає, він отримує ефекти з таблиці «Шаленство». Ефекти накопичуються.

| Шаленство   | Ефект |
|:============|:======|
| 8           | Наприкінці кожного вашого ходу компаньйон повинен використати «Дикий удар» як безкоштовний маневр. Кожна істота в межах дальності здібності отримує шкоду, рівну показнику Сили компаньйона. Ви отримуєте 1 сплеск за кожного союзника, якому ця здібність завдала шкоди. |
| 12          | Компаньйон має імунітет до шкоди, рівний його Інтуїції. Безкоштовним маневром компаньйон може збільшити свій розмір на 1 або повернутися до справжнього розміру. Коли шаленство закінчується, він повертається до справжнього розміру. |
| 16 (рів. 4) | Коли компаньйон використовує «Дикий удар», він завдає кожній істоті в межах дальності здібності додаткової шкоди, рівної показнику Інтуїції компаньйона. Ви отримуєте ще 1 сплеск за кожного союзника, якому ця здібність завдала шкоди. |
| 20 (рів. 7) | Поки розмір компаньйона збільшений, його Стійкість, Потужність і Швидкість зростають на 2, а дальність «Дикого удару» зростає на 1. |
| 24 (рів. 10) | Коли компаньйон збільшує свій розмір, він може збільшити його на 1 або 2. Поки його розмір 3 або більше, під час кидка сили він може кинути 3d10 і відкинути найнижчий результат. |`,
					tag: 'rampage'
				}),
				FactoryLogic.feature.createKitChoice({
					id: 'beastheart-1-6a',
					types: ['Beastheart']
				}),
				FactoryLogic.feature.create({
					id: 'beastheart-1-6b',
					name: 'Звіросерця та магічні скарби',
					description: `
**Витратні предмети**: Хоч ваш компаньйон не може користуватися всіма витратними предметами, з вашою допомогою він може отримати користь від їстівного або питного витратного предмета, такого як Healing Potion. Поки він носить комплект, то також може отримувати користь від витратного предмета, що підсилює зброю, наприклад Lachomp Tooth. Поки ви суміжні з компаньйоном, коли використовуєте один із таких витратних предметів, ви можете надати його користь компаньйонові замість себе. Ви все одно витрачаєте дію, потрібну для використання предмета; компаньйон не витрачає жодної дії.

**Дрібнички**: Більшість дрібничок призначені для носіння двоногими істотами (як-от плащі, маски та капелюхи) або потребують слів чи жестів для активації. Ваш компаньйон не може користуватися такими дрібничками. Втім, він може отримувати користь від одного намиста, підвіски, нашийника чи іншої дрібнички з ключовим словом Neck, яка не потребує жодної дії для активації, наприклад Necklace of the Bayou або однієї з нових магічних дрібничок, поданих у цьому документі. Хоч компаньйон може носити лише один предмет із ключовим словом Neck, він не мусить носити його саме на шиї: кондор може обгорнути намисто навколо кігтя, а желейна куля може тримати його підвішеним усередині свого тіла!

**Рівневі предмети**: Хоч компаньйон і не може орудувати мечем, він усе ж може отримати користь від магічного клинка! Коли ви володієте рівневою зброєю, обладунком, імплементом або іншим рівневим предметом, компаньйон отримує переваги цього магічного скарбу так, ніби сам ним володіє. Як і для будь-якого персонажа, кожен із вас отримує користь від магічної зброї або обладунку, якими можна володіти, лише якщо їхні ключові слова відповідають вашому комплекту.`
				}),
				FactoryLogic.feature.createClassAbilityChoice({
					id: 'beastheart-1-7',
					cost: 'signature'
				}),
				FactoryLogic.feature.createClassAbilityChoice({
					id: 'beastheart-1-8',
					cost: 3
				}),
				FactoryLogic.feature.createClassAbilityChoice({
					id: 'beastheart-1-9',
					cost: 5
				})
			]
		},
		{
			level: 2,
			features: [
				FactoryLogic.feature.createPerk({
					id: 'beastheart-2-1',
					name: 'Перк',
					lists: [PerkList.Exploration, PerkList.Intrigue, PerkList.Interpersonal]
				}),
				FactoryLogic.feature.create({
					id: 'beastheart-2-2',
					name: 'Своєчасна допомога',
					description: 'Ваш компаньйон, може, і не надто балакучий, зате має за плечима ціле життя виживання серед смертельних небезпек дикої природи. Він може допомогти майже за будь-яких обставин: провести виснажених мандрівників правильним шляхом, вивести переляканих селян із палаючої будівлі або вчасно ткнутися носом, щоб підбадьорити. Раз за раунд під час випробування монтажу, коли ви або інший персонаж виконуєте тест, ви можете дозволити компаньйонові підвищити рівень результату на одну сходинку, максимум до 3.'
				})
			]
		},
		{
			level: 3,
			features: [
				FactoryLogic.feature.createClassAbilityChoice({
					id: 'beastheart-3-1',
					cost: 7
				})
			]
		},
		{
			level: 4,
			features: [
				FactoryLogic.feature.createCharacteristicBonus({
					id: 'beastheart-4-1a',
					characteristic: Characteristic.Might,
					value: 1
				}),
				FactoryLogic.feature.createCharacteristicBonus({
					id: 'beastheart-4-1b',
					characteristic: Characteristic.Intuition,
					value: 1
				}),
				FactoryLogic.feature.createPerk({
					id: 'beastheart-4-2'
				}),
				FactoryLogic.feature.createSkillChoice({
					id: 'beastheart-4-3'
				}),
				FactoryLogic.feature.createHeroicResourceGain({
					id: 'beastheart-4-4a',
					name: 'Нестримна лють',
					tag: 'deal-damage-self 2',
					trigger: 'Вперше за раунд, коли ви завдаєте шкоди',
					value: '2',
					replacesTags: ['deal-damage-self']
				}),
				FactoryLogic.feature.createHeroicResourceGain({
					id: 'beastheart-4-4b',
					name: 'Нестримна лють',
					tag: 'deal-damage-companion 2',
					trigger: 'Вперше за раунд, коли ваш компаньйон завдає шкоди',
					value: '2',
					replacesTags: ['deal-damage-companion']
				})
			]
		},
		{
			level: 5,
			features: [
				FactoryLogic.feature.createClassAbilityChoice({
					id: 'beastheart-5-1',
					cost: 9
				})
			]
		},
		{
			level: 6,
			features: [
				FactoryLogic.feature.createPerk({
					id: 'beastheart-6-1',
					name: 'Перк',
					lists: [PerkList.Exploration, PerkList.Interpersonal, PerkList.Intrigue]
				})
			]
		},
		{
			level: 7,
			features: [
				FactoryLogic.feature.createCharacteristicBonus({
					id: 'beastheart-7-1a',
					characteristic: Characteristic.Might,
					value: 1
				}),
				FactoryLogic.feature.createCharacteristicBonus({
					id: 'beastheart-7-1b',
					characteristic: Characteristic.Agility,
					value: 1
				}),
				FactoryLogic.feature.createCharacteristicBonus({
					id: 'beastheart-7-1c',
					characteristic: Characteristic.Reason,
					value: 1
				}),
				FactoryLogic.feature.createCharacteristicBonus({
					id: 'beastheart-7-1d',
					characteristic: Characteristic.Intuition,
					value: 1
				}),
				FactoryLogic.feature.createCharacteristicBonus({
					id: 'beastheart-7-1e',
					characteristic: Characteristic.Presence,
					value: 1
				}),
				FactoryLogic.feature.createHeroicResourceGain({
					id: 'beastheart-7-2',
					name: 'Більша лють',
					tag: 'start 2',
					trigger: 'На початку вашого ходу',
					value: '1d3 +1',
					replacesTags: ['start']
				}),
				FactoryLogic.feature.createSkillChoice({
					id: 'beastheart-7-3'
				})
			]
		},
		{
			level: 8,
			features: [
				FactoryLogic.feature.createPerk({
					id: 'beastheart-8-1'
				}),
				FactoryLogic.feature.createClassAbilityChoice({
					id: 'beastheart-8-2',
					cost: 11
				})
			]
		},
		{
			level: 9,
			features: [
				FactoryLogic.feature.create({
					id: 'beastheart-9-1a',
					name: 'Мудрість природи',
					description: 'Ваш компаньйон перевершив звірину природу. Хоч він і далі залишається вашим вірним другом, він також стає вмістилищем мудрості та памʼяті природи. Показник Розуму компаньйона зростає до 1, і він вивчає всі мови, які знаєте ви. Компаньйон може телепатично спілкуватися з будь-якою істотою в межах 10 клітинок, передаючи і мову, і образи, і почуття.'
				}),
				FactoryLogic.feature.createSkillChoice({
					id: 'beastheart-9-1b',
					selected: ['Природа']
				}),
				FactoryLogic.feature.createSkillChoice({
					id: 'beastheart-9-1c',
					listOptions: [SkillList.Lore]
				})
			]
		},
		{
			level: 10,
			features: [
				FactoryLogic.feature.createCharacteristicBonus({
					id: 'beastheart-10-1a',
					characteristic: Characteristic.Might,
					value: 1
				}),
				FactoryLogic.feature.createCharacteristicBonus({
					id: 'beastheart-10-1b',
					characteristic: Characteristic.Intuition,
					value: 1
				}),
				FactoryLogic.feature.createHeroicResourceGain({
					id: 'beastheart-10-2',
					name: 'Гаряча кров',
					tag: 'start 3',
					trigger: 'На початку вашого ходу',
					value: '1d3 +2',
					replacesTags: ['start', 'start 2']
				}),
				FactoryLogic.feature.createPerk({
					id: 'beastheart-10-3',
					name: 'Перк',
					lists: [PerkList.Exploration, PerkList.Interpersonal, PerkList.Intrigue]
				}),
				FactoryLogic.feature.createHeroicResource({
					id: 'beastheart-10-4',
					name: 'Первісна сила',
					type: 'epic',
					gains: [
						{
							tag: '',
							trigger: 'Завершення відпочинку',
							value: 'Отримання досвіду'
						}
					],
					description: 'Ви можете витратити 1 первісну силу як безкоштовний маневр, щоб дозволити кожному з вас виконати основну дію у свій хід замість основної дії та маневру. Для цього ходу вартість героїчних здібностей у Люті зменшується на 1.'
				}),
				FactoryLogic.feature.createSkillChoice({
					id: 'beastheart-10-5',
					name: 'Навичка'
				})
			]
		}
	],
	abilities: [
		FactoryLogic.createAbility({
			id: 'beastheart-ability-1',
			name: 'Палаюча лють',
			description: 'Списи первісної енергії зриваються з вас і вашого компаньйона, щоб обпалити, розчавити або заморозити ворога.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Beastheart, AbilityKeyword.Magic, AbilityKeyword.Melee, AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [
				FactoryLogic.distance.createMelee(),
				FactoryLogic.distance.createRanged(5)
			],
			target: 'Один ворог',
			cost: 'signature',
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: Characteristic.Might,
						tier1: '2 + С холодної, вогняної, блискавичної або звукової шкоди',
						tier2: '4 + С холодної, вогняної, блискавичної або звукової шкоди',
						tier3: '6 + С холодної, вогняної, блискавичної або звукової шкоди'
					})
				),
				FactoryLogic.createAbilitySectionText('Ви можете витратити сплеск, щоб дозволити партнерові використати цю здібність як безкоштовну тригерну дію, націливши її на іншу ціль з тим самим кидком сили й без використання цього ефекту.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'beastheart-ability-2',
			name: 'Прикривальний вогонь',
			description: 'Голову вниз, а то її й знесе!',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Beastheart, AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [FactoryLogic.distance.createRanged(5)],
			target: 'Один ворог',
			cost: 'signature',
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: Characteristic.Intuition,
						tier1: '2 + І шкоди',
						tier2: '4 + І шкоди',
						tier3: '6 + І шкоди'
					})
				),
				FactoryLogic.createAbilitySectionText('Якщо ціль не лежить, вона мусить використати безкоштовну тригерну дію, щоб стати лежачою, або отримати додаткову шкоду, рівну подвоєному показнику вашої Інтуїції. Ваш компаньйон може зміститися на кількість клітинок, рівну його показнику Інтуїції.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'beastheart-ability-3',
			name: 'Розсійтеся!',
			description: 'Ви обрушуєте шквал атак, а тоді відступаєте.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Beastheart, AbilityKeyword.Melee, AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [
				FactoryLogic.distance.createMelee(),
				FactoryLogic.distance.createRanged(5)
			],
			target: 'Один ворог',
			cost: 'signature',
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: Characteristic.Might,
						tier1: '2 + С шкоди',
						tier2: '3 + С шкоди',
						tier3: '4 + С шкоди'
					})
				),
				FactoryLogic.createAbilitySectionText('Ваш компаньйон завдає вільного удару. Ви обоє зміщуєтеся на кількість клітинок, рівну вашому показнику Інтуїції.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'beastheart-ability-4',
			name: 'Підміни мене!',
			description: 'Покликавши первісну магію, ви чарівно міняєтеся місцями із союзником, даючи йому перепочинок, поки самі завдаєте раптового удару.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Beastheart, AbilityKeyword.Magic, AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [FactoryLogic.distance.createMelee()],
			target: 'Один ворог',
			cost: 'signature',
			sections: [
				FactoryLogic.createAbilitySectionText('Якщо ви і союзник, що згоден, стоїте на землі в межах 10 клітинок один від одного, ви можете телепортуватися й помінятися місцями. Якщо робите це, то отримуєте перевагу на кидок сили цієї здібності.'),
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: Characteristic.Intuition,
						tier1: '3 + І шкоди',
						tier2: '5 + І шкоди',
						tier3: '7 + І шкоди'
					})
				)
			]
		}),
		FactoryLogic.createAbility({
			id: 'beastheart-ability-5',
			name: 'Зжени отару',
			description: 'Ваш компаньйон кружляє навколо ворога, виманюючи його з позиції оманливими проривами й непередбачуваними атаками.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Companion, AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [FactoryLogic.distance.createMelee()],
			target: 'Один ворог',
			cost: 3,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: Characteristic.Might,
						tier1: '5 + С шкоди; зсунути на 1; І < [слабкий], ослаблений (рят. кидок закінчує)',
						tier2: '8 + С шкоди; зсунути на 2; І < [середній], ослаблений (рят. кидок закінчує)',
						tier3: '11 + С шкоди; зсунути на 4; І < [сильний], ослаблений (рят. кидок закінчує)'
					})
				),
				FactoryLogic.createAbilitySectionText('Ви й ваш компаньйон можете зміститися на кількість клітинок, рівну числу клітинок, на яке перемістили ціль.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'beastheart-ability-6',
			name: 'Згори і знизу',
			description: 'Ви й ваш компаньйон оточуєте ворога, щоб збити його з ніг.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Companion, AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [FactoryLogic.distance.createMelee()],
			target: 'Один ворог',
			cost: 3,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: Characteristic.Might,
						tier1: '5 + С шкоди; відштовхнути на 2',
						tier2: '8 + С шкоди; відштовхнути на 4',
						tier3: '11 + С шкоди; відштовхнути на 6'
					})
				),
				FactoryLogic.createAbilitySectionText('Відштовхування цієї здібності може пройти крізь ваш простір, але не може в ньому закінчитися. Якщо воно проходить крізь ваш простір, ціль падає лежачи й отримує додаткову шкоду, рівну вашому показнику Інтуїції.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'beastheart-ability-7',
			name: 'Голодний як вовк',
			description: 'Кров ворога тече, мов вино, бадьорячи вашого компаньйона.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Companion, AbilityKeyword.Magic, AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [FactoryLogic.distance.createMelee()],
			target: 'Один ворог',
			cost: 3,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: Characteristic.Might,
						tier1: '4 + С шкоди; ваш компаньйон може витратити Відновлення',
						tier2: '7 + С шкоди; кожен із вас може витратити Відновлення',
						tier3: '11 + С шкоди; Л < [сильний], кровотеча (до кінця ходу); кожен із вас може витратити Відновлення і зміститися до 2 клітинок'
					})
				)
			]
		}),
		FactoryLogic.createAbility({
			id: 'beastheart-ability-8',
			name: 'Могутній рев',
			description: 'Ваш компаньйон випускає нищівний рев, вереск або виття, що жахає ворогів або принаймні привертає їхню увагу.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Area, AbilityKeyword.Companion, AbilityKeyword.Magic],
			distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 2 })],
			target: 'Кожен ворог у зоні',
			cost: 3,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: Characteristic.Intuition,
						tier1: '3 звукової шкоди; відштовхнути на 1; П < [слабкий], спровокований (рят. кидок закінчує)',
						tier2: '5 звукової шкоди; відштовхнути на 2; П < [середній], спровокований (рят. кидок закінчує)',
						tier3: '7 звукової шкоди; відштовхнути на 3; П < [сильний], спровокований (рят. кидок закінчує)'
					})
				),
				FactoryLogic.createAbilitySectionSpend({
					effect: 'Ця здібність також впливає на спалах 2 навколо вас. Ворог у обох зонах зазнає ефекту лише один раз.'
				})
			]
		}),
		FactoryLogic.createAbility({
			id: 'beastheart-ability-9',
			name: 'Кровожерний удар',
			description: 'Підбадьорений запахом крові, ви завдаєте лютого удару.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Beastheart, AbilityKeyword.Melee, AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [
				FactoryLogic.distance.createMelee(),
				FactoryLogic.distance.createRanged(5)
			],
			target: 'Один ворог',
			cost: 5,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: Characteristic.Might,
						tier1: '8 + С шкоди',
						tier2: '12 + С шкоди',
						tier3: '16 + С шкоди; С < [сильний], кровотеча (рят. кидок закінчує)'
					})
				),
				FactoryLogic.createAbilitySectionText('Якщо після атаки ціль перебуває в стані захеканості або кровотечі, ви отримуєте 2 сплески.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'beastheart-ability-10',
			name: 'Ну ж бо!',
			description: 'Хай вони всі йдуть уперед і розбиваються об вашу міць!',
			type: FactoryLogic.type.createManeuver(),
			keywords: [AbilityKeyword.Area, AbilityKeyword.Beastheart],
			distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 3 })],
			target: 'Кожен ворог у зоні',
			cost: 5,
			sections: [
				FactoryLogic.createAbilitySectionText('Ви можете витратити Відновлення. Кожен ворог у зоні стає спровокованим до кінця ходу. Ви отримуєте 3 тимчасової Витривалості за кожного ворога в зоні.'),
				FactoryLogic.createAbilitySectionSpend({
					effect: 'Ця здібність також впливає на спалах 3 навколо вашого компаньйона. Істоти в цьому другому спалаху спровоковані компаньйоном. Ворог у обох зонах спровокований лише вами.'
				})
			]
		}),
		FactoryLogic.createAbility({
			id: 'beastheart-ability-11',
			name: 'Дружній вогонь',
			description: 'Поки ваші стріли падають на ворогів, навколо компаньйона закручуються язики полум’я, підпалюючи їх.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Area, AbilityKeyword.Beastheart, AbilityKeyword.Weapon],
			distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Cube, value: 3, within: 5 })],
			target: 'Кожен ворог у зоні',
			cost: 5,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: Characteristic.Might,
						tier1: '3 шкоди',
						tier2: '5 шкоди',
						tier3: '8 шкоди'
					})
				),
				FactoryLogic.createAbilitySectionText('Якщо ваш компаньйон перебуває в зоні, він завдає кожному ворогу в зоні вогняної шкоди, рівної своєму показнику Інтуїції.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'beastheart-ability-12',
			name: 'Нечесна перевага',
			description: 'Дика природа не знає, що таке чесна гра.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Beastheart, AbilityKeyword.Charge, AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [FactoryLogic.distance.createMelee()],
			target: 'Один ворог',
			cost: 5,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: Characteristic.Might,
						tier1: '8 + С шкоди; С < [слабкий], схоплений',
						tier2: '12 + С шкоди; С < [середній], схоплений',
						tier3: '16 + С шкоди; С < [сильний], схоплений'
					})
				),
				FactoryLogic.createAbilitySectionText('Якщо ви хапаєте ціль, поки ваш компаньйон суміжний із нею, ваш компаньйон може завдати їй ближнього вільного удару.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'beastheart-ability-13',
			name: 'Пожирач сердець',
			description: 'Кістки тріщать, коли кривава постать вистрибує з трупа вашого ворога.',
			type: FactoryLogic.type.createTrigger('Ви використовуєте здібність, що зводить істоту до 0 Витривалості.'),
			keywords: [AbilityKeyword.Beastheart, AbilityKeyword.Magic, AbilityKeyword.Ranged],
			distance: [FactoryLogic.distance.createRanged(10)],
			target: 'Один ворог',
			cost: 7,
			sections: [
				FactoryLogic.createAbilitySectionText('Істота помирає, а ваш компаньйон проривається назовні з її тіла. Ваш компаньйон телепортується в простір істоти, зміщується на кількість клітинок, рівну його Силі, а потім може завдати ближнього вільного удару. Після цього компаньйон один раз виконує такий кидок сили, націлюючи його на кожного ворога в межах 5 клітинок від цілі:'),
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: Characteristic.Might,
						tier1: 'П < [слабкий], зляканий (рят. кидок закінчує)',
						tier2: '4 психічної шкоди; П < [середній], зляканий (рят. кидок закінчує)',
						tier3: '8 психічної шкоди; П < [сильний], зляканий (рят. кидок закінчує)'
					})
				)
			]
		}),
		FactoryLogic.createAbility({
			id: 'beastheart-ability-14',
			name: 'Безрозсудний удар головою',
			description: 'Ваш кривавий удар лобом вганяє компаньйона у шаленство.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Beastheart, AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [FactoryLogic.distance.createMelee()],
			target: 'Один ворог',
			cost: 7,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: Characteristic.Intuition,
						tier1: '13 + С шкоди; П < [слабкий], приголомшений (рят. кидок закінчує)',
						tier2: '19 + С шкоди; П < [середній], приголомшений (рят. кидок закінчує)',
						tier3: '25 + С шкоди; П < [сильний], приголомшений (рят. кидок закінчує)'
					})
				),
				FactoryLogic.createAbilitySectionText('Ви кровоточите (рят. кидок закінчує). Поки кровотеча на вас не закінчиться, ваш компаньйон має перевагу на кидках сили.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'beastheart-ability-15',
			name: 'Первісні щелепи',
			description: 'Спектральні щелепи пастки змикаються на ворогові, приковуючи його до вас і висмоктуючи життєву есенцію.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Beastheart, AbilityKeyword.Magic, AbilityKeyword.Melee, AbilityKeyword.Ranged],
			distance: [
				FactoryLogic.distance.createMelee(),
				FactoryLogic.distance.createRanged(5)
			],
			target: 'Один ворог',
			cost: 7,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: Characteristic.Might,
						tier1: '7 + І шкоди; П < [слабкий], ослаблений (рят. кидок закінчує)',
						tier2: '10 + І шкоди; П < [середній], ослаблений (рят. кидок закінчує)',
						tier3: '14 + І шкоди; П < [сильний], ослаблений (рят. кидок закінчує)'
					})
				),
				FactoryLogic.createAbilitySectionText('Коли ціль, ослаблена цією здібністю, провалює рятівний кидок проти неї, перебуваючи далі ніж за 3 клітинки від вас, ви можете безкоштовною тригерною дією притягнути ціль на кількість клітинок, рівну вашому показнику Інтуїції.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'beastheart-ability-16',
			name: 'Підготовчий удар',
			description: 'Ваш удар готує жорстоку комбінацію.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Beastheart, AbilityKeyword.Melee, AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [
				FactoryLogic.distance.createMelee(),
				FactoryLogic.distance.createRanged(5)
			],
			target: 'Один ворог',
			cost: 7,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: Characteristic.Might,
						tier1: '9 + С шкоди',
						tier2: '14 + С шкоди',
						tier3: '19 + С шкоди'
					})
				),
				FactoryLogic.createAbilitySectionText('Наступна істота, що завдасть цілі шкоди до початку вашого наступного ходу, отримує 3 сплески.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'beastheart-ability-17',
			name: 'Навалитися гуртом',
			description: 'Ви й союзники оточуєте ворога наче зграя вовків, навалюєтесь на нього й валите додолу.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Beastheart, AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [FactoryLogic.distance.createMelee()],
			target: 'Один ворог',
			cost: 9,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: Characteristic.Might,
						tier1: '10 + С шкоди; С < [слабкий], схоплений і розпластаний',
						tier2: '15 + С шкоди; С < [середній], схоплений і розпластаний',
						tier3: '20 + С шкоди; С < [сильний], схоплений і розпластаний'
					})
				),
				FactoryLogic.createAbilitySectionText('Кожен союзник поруч із ціллю може використати тригерну вільну дію, щоб завдати цілі шкоди, рівної найвищій характеристиці цього союзника.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'beastheart-ability-18',
			name: 'Милосердя мисливця',
			description: 'Ви робите єдиний постріл, що обриває життя вашої здобичі.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Beastheart, AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [FactoryLogic.distance.createRanged(15)],
			target: 'Один ворог',
			cost: 9,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: Characteristic.Intuition,
						tier1: '12 + І шкоди',
						tier2: '18 + І шкоди',
						tier3: '30 + І шкоди'
					})
				),
				FactoryLogic.createAbilitySectionText('Якщо ви приховані, то після атаки залишаєтеся прихованими.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'beastheart-ability-19',
			name: 'Могутній кидок',
			description: 'З допомогою компаньйона ви здатні підіймати неймовірний тягар.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Beastheart, AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [FactoryLogic.distance.createMelee()],
			target: 'Один ворог',
			cost: 9,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: Characteristic.Might,
						tier1: '10 + С шкоди; вертикально відштовхнути на 4; розпластаний',
						tier2: '15 + С шкоди; вертикально відштовхнути на 6; розпластаний',
						tier3: '20 + С шкоди; вертикально відштовхнути на 8; розпластаний'
					})
				),
				FactoryLogic.createAbilitySectionText('Якщо ваш компаньйон суміжний із ціллю, ви можете ігнорувати її Стійкість.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'beastheart-ability-20',
			name: 'Роздерти надвоє',
			description: 'У моторошному видовищі ви та ваш компаньйон відриваєте знерухомленому ворогові кінцівку чи іншу частину тіла й відкидаєте її геть.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [FactoryLogic.distance.createMelee()],
			target: 'Один ворог',
			cost: 9,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: Characteristic.Might,
						tier1: '11 + С шкоди; С < [слабкий], кровотеча (рят. кидок закінчує)',
						tier2: '17 + С шкоди; С < [середній], кровотеча (рят. кидок закінчує)',
						tier3: '22 + С шкоди; С < [сильний], кровотеча (рят. кидок закінчує)'
					})
				),
				FactoryLogic.createAbilitySectionText('Якщо ціль схоплена вашим партнером, вона отримує додаткову шкоду, рівну сумі вашого показника Сили та показника Сили компаньйона. Якщо ця здібність зводить ціль до 0 Витривалості, кожен ворог у межах 2 клітинок із П < [середній] стає наляканим (рят. кидок закінчує).')
			]
		}),
		FactoryLogic.createAbility({
			id: 'beastheart-ability-21',
			name: 'Закривавлені клинок і кіготь',
			description: 'Підживлені болем і відчаєм бою, ви й компаньйон витрачаєте останні сили в шаленому шквалі атак.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Beastheart, AbilityKeyword.Melee, AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [
				FactoryLogic.distance.createMelee(),
				FactoryLogic.distance.createRanged(5)
			],
			target: 'Один ворог',
			cost: 11,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: Characteristic.Intuition,
						tier1: '5 + С шкоди',
						tier2: '15 + С шкоди',
						tier3: '25 + С шкоди'
					})
				),
				FactoryLogic.createAbilitySectionText('Ваш компаньйон може повторити атаку як ближню атаку, роблячи власний кидок сили. Обидва кидки сили мають перевагу, якщо хтось із вас кровоточить, вмирає або захеканий, а ваш кидок сили має подвійну перевагу, якщо компаньйон мертвий або з іншої причини не може діяти.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'beastheart-ability-22',
			name: 'Спали світ до попелу',
			description: 'Вириваючи силу з первісного зв’язку, ви вивільняєте руйнівний вибух стихійної енергії, яким не здатні керувати.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Area, AbilityKeyword.Beastheart, AbilityKeyword.Magic],
			distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 2 })],
			target: 'Кожен ворог у зоні',
			cost: 11,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: Characteristic.Intuition,
						tier1: '10 холодної, вогняної, блискавичної або звукової шкоди',
						tier2: '18 холодної, вогняної, блискавичної або звукової шкоди',
						tier3: '26 холодної, вогняної, блискавичної або звукової шкоди'
					})
				),
				FactoryLogic.createAbilitySectionSpend({
					value: 2,
					repeatable: true,
					effect: 'Ви можете витратити до 6 додаткової Люті. За кожні 2 додаткової Люті, які ви витрачаєте, розмір спалаху збільшується на 1, до кидка сили додається 2, а ви отримуєте 5 шкоди, яку неможливо зменшити жодним способом. Ви можете вирішити, скільки Люті витратите, уже після кидка сили.'
				})
			]
		}),
		FactoryLogic.createAbility({
			id: 'beastheart-ability-23',
			name: 'Подвійний клопіт',
			description: 'Ваші вороги, може, й сильніші за вас, але саме тому ви не самі.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Beastheart],
			distance: [FactoryLogic.distance.createSelf()],
			target: 'Себе',
			cost: 11,
			sections: [
				FactoryLogic.createAbilitySectionText('Кожен із вас використовує різну здібність, що коштує 9 або менше Люті та потребує маневру або основної дії. Ці здібності не коштують Люті. Якщо здібність дозволяє витрачати додаткову Лють за посилений ефект, так робити не можна.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'beastheart-ability-24',
			name: 'Рана, що п’є життя',
			description: 'Коли ваш удар знаходить ціль, життєва сила ворога, що витікає, тягнеться до союзників багряними нитками.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Beastheart, AbilityKeyword.Magic, AbilityKeyword.Melee, AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [
				FactoryLogic.distance.createMelee(),
				FactoryLogic.distance.createRanged(5)
			],
			target: 'Один ворог',
			cost: 11,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: Characteristic.Might,
						tier1: '12 + С шкоди',
						tier2: '18 + С шкоди',
						tier3: '24 + С шкоди'
					})
				),
				FactoryLogic.createAbilitySectionText('До трьох істот у межах 2 клітинок від цілі отримують тимчасову Витривалість, рівну половині завданої вами шкоди.')
			]
		})
	],
	subclasses: [
		guardian,
		prowler,
		punisher,
		spark
	],
	level: 1,
	characteristics: []
};
