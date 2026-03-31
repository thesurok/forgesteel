import { AbilityDistanceType } from '@/enums/ability-distance-type';
import { AbilityKeyword } from '@/enums/ability-keyword';
import { Characteristic } from '@/enums/characteristic';
import { DamageModifierType } from '@/enums/damage-modifier-type';
import { DamageType } from '@/enums/damage-type';
import { FactoryLogic } from '@/logic/factory-logic';
import { MonsterGroup } from '@/models/monster-group';
import { MonsterOrganizationType } from '@/enums/monster-organization-type';
import { MonsterRoleType } from '@/enums/monster-role-type';
import { StatBlockIcon } from '@/enums/stat-block-icon';

export const angulotl: MonsterGroup = {
	id: 'monster-group-angulotl',
	name: 'Ангулотл',
	description: `Ангулотли (ангва-ЛА-тули), яких можна зустріти в прісноводних болотах, річках і дощових лісах, це дрібні яскраво забарвлені земноводні гуманоїди. Замість того щоб захищати свої поселення й місця розмноження від ворожих істот, ці отруйні жаболюди воліють облаштовувати домівки в місцях, які іншим гуманоїдам майже неможливо знайти, наприклад у підводних печерах та інших замкнених просторах, куди можна дістатися лише водою. Ангулотли залюбки ховаються й спостерігають, як гурт галасливих шукачів пригод проходить повз вхід до їхньої кладки, нічого не помітивши. Але хоч вони й уникають бою, під загрозою або під тиском ангулотли стають смертельно небезпечними.

*Вони люблять людей! Дорослі їх трохи лякають. Мені здається, вони не розуміють, що високі люди й маленькі люди належать до одного виду!*
Пінна, польова відьма, Ґрейвсфорд`,
	picture: null,
	information: [
		{
			id: 'angulotl-info-1',
			name: 'Смертельні токсини',
			description: 'Ангулотли — отруйні істоти, і це чудово відповідає їхньому прагненню уникати агресії, бо їм це просто не потрібно! Контактний токсин, який виділяє їхня шкіра, дає їм перевагу в ближньому бою, а ще вони переганяють цей токсин у сильніші форми, якими вкривають леза та наконечники дротиків.'
		},
		{
			id: 'angulotl-info-2',
			name: 'Індикаторний вид',
			description: 'Фізіологія ангулотлів дуже чутлива до балансу, і порушити його зовсім неважко. Хоч токсини їх не вбивають, на забруднення у воді вони все одно реагують. Тривале отруєння їхнього середовища може спотворити ангулотлів, зробивши їх агресивними, розгубленими та лютими. Більшість ангулотлів, уражених забрудненням, зрештою нападають на будь-яку істоту, що трапиться їм на шляху, навіть на інших ангулотлів! Найдужче на них, схоже, впливають стоки від магічних експериментів, інколи навіть наділяючи їх дивними здібностями.'
		},
		{
			id: 'angulotl-info-3',
			name: 'Залежні від вологи',
			description: 'Ангулотли дихають через шкіру, тож мусять залишатися вологими, інакше задихнуться. Вони часто уникають подорожей сухими місцями й воліють не відходити далеко від джерел прісної води, якщо тільки не йде дощ.'
		},
		{
			id: 'angulotl-info-4',
			name: 'Кігтериба',
			description: 'Відома ангулотлам як qʼukutxal (ку-УК-ут-шааль), кігтериба схожа на мурену з вісьмома плазуновими лапами. Ці малі тварини звиваються крізь траву й деруться на дерева майже так само вправно, як ковзають у річковій течії. Ангулотли навчають їх не лише тягнути плоти, а й кмітливо битися, хапаючи ворогів і бʼючи їх струмом.'
		},
		{
			id: 'angulotl-info-5',
			name: 'Мови ангулотлів',
			description: 'Більшість ангулотлів говорять Філліариком (Filliaric).'
		},
		{
			id: 'angulotl-info-6',
			name: 'Мокрий',
			description: 'Ангулотли користуються унікальним ефектом під назвою «Мокрий». Поки ангулотл мокрий, його рух не провокує атак можливості. Водночас будь-яка істота, що не є ангулотлом, якщо вона мокра й завершує свій хід без залишку руху, посковзується й падає долілиць. Кілька здібностей ангулотлів можуть накладати цей ефект, але істота в зустрічі з ангулотлами також може стати мокрою, увійшовши у воду, як вирішить Директор.'
		}
	],
	malice: [
		FactoryLogic.feature.createMalice({
			id: 'angulotl-malice-1',
			name: 'Жабʼяча чехарда',
			cost: 3,
			icon: StatBlockIcon.Trait,
			sections: [
				'До кінця раунду, коли ангулотл проходить крізь простір неактивного ангулотла, той неактивний ангулотл може використати безкоштовну тригерну дію, щоб стрибнути на 3 клітинки.'
			]
		}),
		FactoryLogic.feature.createMalice({
			id: 'angulotl-malice-2',
			name: 'Резонансне квакання',
			cost: 5,
			icon: StatBlockIcon.AuraBurst,
			sections: [
				'Кожен ангулотл у зустрічі роздуває горло й починає гучно гудіти. Кожна істота, що не є ангулотлом і стоїть поруч з ангулотлом, робить **випробування Інтуїції**.',
				FactoryLogic.createPowerRoll({
					characteristic: Characteristic.Intuition,
					tier1: '5 звукової шкоди; сповільнений (до кінця ходу)',
					tier2: '4 звукової шкоди',
					tier3: 'Без ефекту'
				})
			]
		}),
		FactoryLogic.feature.createMalice({
			id: 'angulotl-malice-3',
			name: 'Злива',
			cost: 7,
			icon: StatBlockIcon.SpecialArea,
			sections: [
				'Ангулотл закликає хмари, що вкривають мапу зустрічі, й проливає дощ до кінця раунду. Будь-яка істота чи обʼєкт, відкриті небу, підпадають під ефект «Мокрий» до кінця зустрічі.'
			]
		})
	],
	monsters: [
		FactoryLogic.createMonster({
			id: 'angulotl-1',
			name: 'Ангулотл Рубака',
			level: 1,
			role: FactoryLogic.createMonsterRole(MonsterOrganizationType.Minion, MonsterRoleType.Ambusher),
			keywords: ['Angulotl', 'Humanoid'],
			encounterValue: 3,
			size: FactoryLogic.createSize(1, 'S'),
			speed: FactoryLogic.createSpeed(6, 'плавання, лазіння'),
			stamina: 4,
			stability: 0,
			freeStrikeDamage: 2,
			withCaptain: '+1 до шкоди ударами',
			characteristics: FactoryLogic.createCharacteristics(0, 2, 0, 1, 0),
			features: [
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'angulotl-1-feature-1',
						name: 'Стриб і рубай',
						type: FactoryLogic.type.createMain(),
						cost: 'signature',
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [FactoryLogic.distance.createMelee()],
						target: 'Одна істота або обʼєкт за кожного міньйона',
						sections: [
							FactoryLogic.createAbilitySectionRoll(
								FactoryLogic.createPowerRoll({
									bonus: 2,
									tier1: '2 шкоди',
									tier2: '4 шкоди',
									tier3: '5 шкоди'
								})
							),
							FactoryLogic.createAbilitySectionText('Рубака стрибає до 4 клітинок до або після цього удару.')
						]
					})
				}),
				FactoryLogic.feature.create({
					id: 'angulotl-1-feature-2',
					name: 'Отруйна шкіра',
					description: 'Щоразу, коли сусідній ворог схоплює рубаку або використовує проти нього ближню здібність, той ворог отримує 1 отруйної шкоди.'
				}),
				FactoryLogic.feature.createDamageModifier({
					id: 'angulotl-1-feature-3',
					modifiers: [FactoryLogic.damageModifier.create({ damageType: DamageType.Poison, modifierType: DamageModifierType.Immunity, value: 2 })]
				})
			]
		}),
		FactoryLogic.createMonster({
			id: 'angulotl-2',
			name: 'Ангулотл Пуголовок',
			level: 1,
			role: FactoryLogic.createMonsterRole(MonsterOrganizationType.Minion, MonsterRoleType.Harrier),
			keywords: ['Angulotl', 'Humanoid'],
			encounterValue: 3,
			size: FactoryLogic.createSize(1, 'S'),
			speed: FactoryLogic.createSpeed(6, 'плавання, лазіння'),
			stamina: 4,
			stability: 0,
			freeStrikeDamage: 1,
			withCaptain: '+2 до швидкості',
			characteristics: FactoryLogic.createCharacteristics(0, 2, -2, -2, 0),
			features: [
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'angulotl-2-feature-1',
						name: 'Кусь',
						type: FactoryLogic.type.createMain(),
						cost: 'signature',
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [FactoryLogic.distance.createMelee()],
						target: 'Одна істота за кожного міньйона',
						sections: [
							FactoryLogic.createAbilitySectionRoll(
								FactoryLogic.createPowerRoll({
									bonus: 2,
									tier1: '1 шкоди',
									tier2: '2 отруйної шкоди; пуголовок може зміститися на 1 клітинку',
									tier3: '3 отруйної шкоди; пуголовок може зміститися до 3 клітинок'
								})
							)
						]
					})
				}),
				FactoryLogic.feature.create({
					id: 'angulotl-2-feature-2',
					name: 'Швидкий перекус',
					description: 'Будь-який ангулотл, який може націлити пуголовка ближнім безкоштовним ударом, може зʼїсти його як маневр. Ангулотл відновлює 4 Витривалості й стає мокрим до кінця свого наступного ходу.'
				}),
				FactoryLogic.feature.createDamageModifier({
					id: 'angulotl-2-feature-3',
					modifiers: [FactoryLogic.damageModifier.create({ damageType: DamageType.Poison, modifierType: DamageModifierType.Immunity, value: 2 })]
				})
			]
		}),
		FactoryLogic.createMonster({
			id: 'angulotl-3',
			name: 'Ангулотл Дротик',
			level: 1,
			role: FactoryLogic.createMonsterRole(MonsterOrganizationType.Minion, MonsterRoleType.Artillery),
			keywords: ['Angulotl', 'Humanoid'],
			encounterValue: 3,
			size: FactoryLogic.createSize(1, 'S'),
			speed: FactoryLogic.createSpeed(5, 'плавання, лазіння'),
			stamina: 3,
			stability: 0,
			freeStrikeDamage: 2,
			withCaptain: '+4 до дальності дистанційних здібностей',
			characteristics: FactoryLogic.createCharacteristics(0, 2, 1, 0, 0),
			features: [
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'angulotl-3-feature-1',
						name: 'Отруйний дротик',
						type: FactoryLogic.type.createMain(),
						cost: 'signature',
						keywords: [AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [FactoryLogic.distance.createRanged(8)],
						target: 'Одна істота за кожного міньйона',
						sections: [
							FactoryLogic.createAbilitySectionRoll(
								FactoryLogic.createPowerRoll({
									bonus: 2,
									tier1: '2 шкоди',
									tier2: '4 отруйної шкоди',
									tier3: '5 отруйної шкоди'
								})
							),
							FactoryLogic.createAbilitySectionText('Дротик здобуває перевагу на цю здібність проти будь-якої цілі, чия Витривалість не повна.')
						]
					})
				}),
				FactoryLogic.feature.create({
					id: 'angulotl-3-feature-2',
					name: 'Отруйна шкіра',
					description: 'Щоразу, коли сусідній ворог схоплює дротика або використовує проти нього ближню здібність, той ворог отримує 1 отруйної шкоди.'
				}),
				FactoryLogic.feature.createDamageModifier({
					id: 'angulotl-3-feature-3',
					modifiers: [FactoryLogic.damageModifier.create({ damageType: DamageType.Poison, modifierType: DamageModifierType.Immunity, value: 2 })]
				})
			]
		}),
		FactoryLogic.createMonster({
			id: 'angulotl-4',
			name: 'Кігтериба',
			level: 1,
			role: FactoryLogic.createMonsterRole(MonsterOrganizationType.Minion, MonsterRoleType.Brute),
			keywords: ['Angulotl', 'Animal'],
			encounterValue: 3,
			size: FactoryLogic.createSize(1, 'S'),
			speed: FactoryLogic.createSpeed(5, 'плавання, лазіння'),
			stamina: 5,
			stability: 0,
			freeStrikeDamage: 2,
			withCaptain: 'Перевага на удари',
			characteristics: FactoryLogic.createCharacteristics(0, 2, -3, -2, 1),
			features: [
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'angulotl-4-feature-1',
						name: 'Кіготь-гачок',
						type: FactoryLogic.type.createMain(),
						cost: 'signature',
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [FactoryLogic.distance.createMelee()],
						target: 'Одна істота або обʼєкт за кожного міньйона',
						sections: [
							FactoryLogic.createAbilitySectionRoll(
								FactoryLogic.createPowerRoll({
									bonus: 2,
									tier1: '2 шкоди',
									tier2: '4 шкоди',
									tier3: '5 шкоди; схоплений'
								})
							),
							FactoryLogic.createAbilitySectionText('Будь-яка ціль, схоплена таким чином, отримує 2 електричної шкоди на початку кожного свого ходу.')
						]
					})
				}),
				FactoryLogic.feature.create({
					id: 'angulotl-4-feature-2',
					name: 'Електрошок',
					description: 'На початку кожного свого ходу кігтериба завдає 2 електричної шкоди кожному мокрому ворогу в межах 2 клітинок.'
				}),
				FactoryLogic.feature.createDamageModifier({
					id: 'angulotl-4-feature-3',
					modifiers: [
						FactoryLogic.damageModifier.create({ damageType: DamageType.Poison, modifierType: DamageModifierType.Immunity, value: 2 }),
						FactoryLogic.damageModifier.create({ damageType: DamageType.Lightning, modifierType: DamageModifierType.Immunity, value: 3 })
					]
				})
			]
		}),
		FactoryLogic.createMonster({
			id: 'angulotl-5',
			name: 'Ангулотл Голкар',
			level: 1,
			role: FactoryLogic.createMonsterRole(MonsterOrganizationType.Horde, MonsterRoleType.Artillery),
			keywords: ['Angulotl', 'Humanoid'],
			encounterValue: 3,
			size: FactoryLogic.createSize(1, 'S'),
			speed: FactoryLogic.createSpeed(5, 'плавання, лазіння'),
			stamina: 10,
			stability: 0,
			freeStrikeDamage: 2,
			characteristics: FactoryLogic.createCharacteristics(0, 2, 1, 0, -1),
			features: [
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'angulotl-5-feature-1',
						name: 'Духова трубка',
						type: FactoryLogic.type.createMain(),
						cost: 'signature',
						keywords: [AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [FactoryLogic.distance.createRanged(15)],
						target: 'Одна істота',
						sections: [
							FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
								bonus: 2,
								tier1: '4 отруйної шкоди',
								tier2: '6 отруйної шкоди',
								tier3: '7 отруйної шкоди'
							})),
							FactoryLogic.createAbilitySectionSpend({
								name: 'Злоба:',
								value: 2,
								effect: 'Ціль із <code>С < 2</code> ослаблена (рят. кидок закінчує). Ціль, ослаблена таким чином, отримує 2 отруйної шкоди на початку кожного свого ходу.'
							})
						]
					})
				}),
				FactoryLogic.feature.create({
					id: 'angulotl-5-feature-2',
					name: 'Отруйна шкіра',
					description: 'Щоразу, коли сусідній ворог схоплює голкаря або використовує проти нього ближню здібність, той ворог отримує 2 отруйної шкоди.'
				}),
				FactoryLogic.feature.createDamageModifier({
					id: 'angulotl-5-feature-3',
					modifiers: [FactoryLogic.damageModifier.create({ damageType: DamageType.Poison, modifierType: DamageModifierType.Immunity, value: 2 })]
				})
			]
		}),
		FactoryLogic.createMonster({
			id: 'angulotl-6',
			name: 'Ангулотл Крадун',
			level: 1,
			role: FactoryLogic.createMonsterRole(MonsterOrganizationType.Horde, MonsterRoleType.Ambusher),
			keywords: ['Angulotl', 'Humanoid'],
			encounterValue: 3,
			size: FactoryLogic.createSize(1, 'S'),
			speed: FactoryLogic.createSpeed(5, 'плавання, лазіння'),
			stamina: 15,
			stability: 0,
			freeStrikeDamage: 2,
			characteristics: FactoryLogic.createCharacteristics(1, 2, 0, 0, 0),
			features: [
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'angulotl-6-feature-1',
						name: 'Батіг язика',
						type: FactoryLogic.type.createMain(),
						cost: 'signature',
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [FactoryLogic.distance.createMelee(6)],
						target: 'Одна істота або обʼєкт',
						sections: [
							FactoryLogic.createAbilitySectionRoll(
								FactoryLogic.createPowerRoll({
									bonus: 2,
									tier1: '4 шкоди; притягнути на 2',
									tier2: '6 шкоди; притягнути на 4',
									tier3: '7 шкоди; притягнути на 6'
								})
							),
							FactoryLogic.createAbilitySectionText('Ціль мокра (рят. кидок закінчує). Будь-який союзник, на якого націлилися цією здібністю, ігнорує шкоду, стає мокрим до кінця зустрічі й притягується до 6 клітинок, ігноруючи стабільність.')
						]
					})
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'angulotl-6-feature-2',
						name: 'Плигай!',
						cost: 2,
						type: FactoryLogic.type.createManeuver(),
						distance: [FactoryLogic.distance.createSelf()],
						target: 'Себе',
						sections: [
							FactoryLogic.createAbilitySectionText('Крадун стрибає до 3 клітинок. Якщо після приземлення він має укриття або прихованість, то може спробувати сховатися.')
						]
					})
				}),
				FactoryLogic.feature.create({
					id: 'angulotl-6-feature-3',
					name: 'Отруйна шкіра',
					description: 'Щоразу, коли сусідній ворог схоплює крадуна або використовує проти нього ближню здібність, той ворог отримує 2 отруйної шкоди.'
				}),
				FactoryLogic.feature.create({
					id: 'angulotl-6-feature-4',
					name: 'Клейкий слиз',
					description: 'Наприкінці кожного свого ходу крадун виділяє липкий слиз у свою клітинку. Будь-яка істота, що не є ангулотлом, яка входить у цю клітинку або залишає її, застрягає й мусить використати маневр, щоб вирватися, інакше буде скута до кінця свого ходу. Обʼєкти так само підпадають під цей ефект, і істота мусить використати маневр, щоб прибрати обʼєкт із цієї клітинки.'
				}),
				FactoryLogic.feature.createDamageModifier({
					id: 'angulotl-6-feature-5',
					modifiers: [FactoryLogic.damageModifier.create({ damageType: DamageType.Poison, modifierType: DamageModifierType.Immunity, value: 2 })]
				})
			]
		}),
		FactoryLogic.createMonster({
			id: 'angulotl-7',
			name: 'Ангулотл Хвиля',
			level: 1,
			role: FactoryLogic.createMonsterRole(MonsterOrganizationType.Horde, MonsterRoleType.Controller),
			keywords: ['Angulotl', 'Humanoid'],
			encounterValue: 3,
			size: FactoryLogic.createSize(1, 'S'),
			speed: FactoryLogic.createSpeed(5, 'плавання, лазіння'),
			stamina: 10,
			stability: 0,
			freeStrikeDamage: 1,
			characteristics: FactoryLogic.createCharacteristics(0, 0, 0, 2, 2),
			features: [
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'angulotl-7-feature-1',
						name: 'Сяйливі промені',
						type: FactoryLogic.type.createMain(),
						cost: 'signature',
						keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged, AbilityKeyword.Strike],
						distance: [FactoryLogic.distance.createRanged(8)],
						target: 'Дві істоти або обʼєкти',
						sections: [
							FactoryLogic.createAbilitySectionRoll(
								FactoryLogic.createPowerRoll({
									bonus: 2,
									tier1: '3 священної шкоди',
									tier2: '4 священної шкоди; Р < 1 освітлена (рят. кидок закінчує)',
									tier3: '5 священної шкоди; Р < 2 освітлена (рят. кидок закінчує)'
								})
							),
							FactoryLogic.createAbilitySectionText('Будь-яка освітлена ціль не може ховатися чи ставати невидимою, а будь-який удар по освітленій цілі здобуває перевагу.')
						]
					})
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'angulotl-7-feature-2',
						name: 'Отруйна бульбашка',
						cost: 2,
						type: FactoryLogic.type.createMain(),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Magic, AbilityKeyword.Ranged],
						distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Cube, value: 2, within: 10, qualifier: 'незайнятий простір' })],
						target: 'Особливе',
						sections: [
							FactoryLogic.createAbilitySectionText('Область наповнює бульбашка токсичного газу, готова луснути. Якщо будь-яка істота чи обʼєкт торкнуться бульбашки або якщо бульбашка зазнає шкоди, вона вибухає. Кожен ангулотл поруч із бульбашкою стає мокрим до кінця зустрічі, а кожен ворог поруч із бульбашкою робить **випробування Сили**.'),
							FactoryLogic.createAbilitySectionRoll(
								FactoryLogic.createPowerRoll({
									characteristic: Characteristic.Might,
									tier1: '3 отруйної шкоди; ціль мокра й ослаблена (рят. кидок закінчує)',
									tier2: '2 отруйної шкоди; ціль мокра (рят. кидок закінчує)',
									tier3: '1 отруйної шкоди; ціль мокра (до кінця ходу)'
								})
							)
						]
					})
				}),
				FactoryLogic.feature.create({
					id: 'angulotl-7-feature-3',
					name: 'Отруйна шкіра',
					description: 'Щоразу, коли сусідній ворог схоплює хвилю або використовує проти неї ближню здібність, той ворог отримує 2 отруйної шкоди.'
				}),
				FactoryLogic.feature.createDamageModifier({
					id: 'angulotl-7-feature-4',
					modifiers: [FactoryLogic.damageModifier.create({ damageType: DamageType.Poison, modifierType: DamageModifierType.Immunity, value: 2 })]
				})
			]
		}),
		FactoryLogic.createMonster({
			id: 'angulotl-8',
			name: 'Ангулотл Світанконосець',
			level: 1,
			role: FactoryLogic.createMonsterRole(MonsterOrganizationType.Leader),
			keywords: ['Angulotl', 'Humanoid'],
			encounterValue: 12,
			size: FactoryLogic.createSize(1, 'M'),
			speed: FactoryLogic.createSpeed(5, 'лазіння, плавання'),
			stamina: 80,
			stability: 1,
			freeStrikeDamage: 4,
			characteristics: FactoryLogic.createCharacteristics(3, 2, 0, 2, 0),
			features: [
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'angulotl-8-feature-1',
						name: 'Кислотний хват',
						type: FactoryLogic.type.createMain(),
						cost: 'signature',
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [FactoryLogic.distance.createMelee()],
						target: 'Дві істоти або обʼєкти',
						sections: [
							FactoryLogic.createAbilitySectionRoll(
								FactoryLogic.createPowerRoll({
									bonus: 3,
									tier1: '7 кислотної шкоди; Л < 1 приголомшений (рят. кидок закінчує)',
									tier2: '10 кислотної шкоди; Л < 2 приголомшений (рят. кидок закінчує)',
									tier3: '13 кислотної шкоди; Л < 3 приголомшений (рят. кидок закінчує)'
								})
							),
							FactoryLogic.createAbilitySectionText('Наступного разу, коли ціль завдає удару по світанконосцю, після розвʼязання цього удару вона отримує 4 кислотної шкоди.'),
							FactoryLogic.createAbilitySectionSpend({
								effect: 'Світанконосець стрибає до 3 клітинок до або після використання цієї здібності.'
							})
						]
					})
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'angulotl-8-feature-2',
						name: 'Сонячний ліхтар',
						type: FactoryLogic.type.createManeuver(),
						distance: [FactoryLogic.distance.createSelf()],
						target: 'Себе',
						sections: [
							FactoryLogic.createAbilitySectionText('Світанконосець роздуває горло, щоб воно скидалося на сонце, до початку свого наступного ходу. Протягом цього часу кожен ангулотл, який починає свій хід у межах 10 клітинок від світанконосця, відновлює 5 Витривалості й отримує +3 до швидкості до кінця свого ходу.')
						]
					})
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'angulotl-8-feature-3',
						name: 'Ляпас язиком',
						type: FactoryLogic.type.createTrigger('Ціль завдає удару по світанконосцю або союзнику, і цей удар не є критичним влучанням.'),
						distance: [FactoryLogic.distance.createMelee(5)],
						target: 'Одна істота',
						sections: [
							FactoryLogic.createAbilitySectionText('Результат кидка сили для цього удару зменшується на один рівень.'),
							FactoryLogic.createAbilitySectionSpend({
								value: 2,
								effect: 'Після розвʼязання удару ціль притягується до 4 клітинок.'
							})
						]
					})
				}),
				FactoryLogic.feature.create({
					id: 'angulotl-8-feature-4',
					name: 'Зволожувальний побічний ефект',
					description: 'Наприкінці кожного свого ходу світанконосець може або отримати 5 шкоди, або завершити ефект «Мокрий» на сусідній істоті, щоби завершити на собі один ефект, який можна завершити рят. кидком. Цю шкоду не можна зменшити жодним способом.'
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'angulotl-8-feature-5',
						name: 'Новий світанок',
						type: FactoryLogic.type.createVillainAction(1),
						distance: [FactoryLogic.distance.createRanged(10)],
						target: 'Особливе',
						sections: [
							FactoryLogic.createAbilitySectionText('Чотири **ангулотли-пуголовки** вириваються зі спини світанконосця й перевальцем заходять у незайняті клітинки в межах дистанції.')
						]
					})
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'angulotl-8-feature-6',
						name: 'Жабʼяча навала',
						type: FactoryLogic.type.createVillainAction(2),
						distance: [
							FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 8 })
						],
						target: 'На себе і кожного союзника в зоні впливу',
						sections: [
							FactoryLogic.createAbilitySectionText('Кожна ціль може стрибнути до 4 клітинок. Кожна ціль, що не є міньйоном, може зробити безкоштовний удар наприкінці цього стрибка.')
						]
					})
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'angulotl-8-feature-7',
						name: 'День настав',
						type: FactoryLogic.type.createVillainAction(3),
						distance: [FactoryLogic.distance.createSpecial('')],
						target: 'Особливе',
						sections: [
							FactoryLogic.createAbilitySectionText('Мапа зустрічі висихає, і кожен ворог та обʼєкт на ній стають освітленими до кінця зустрічі. Будь-яка освітлена ціль не може ховатися чи ставати невидимою, а будь-який удар по освітленій цілі здобуває перевагу. Крім того, на кожному ворогові в зустрічі, який мокрий, цей ефект завершується, і той ворог отримує 6 кислотної шкоди. Кожен ангулотл у зустрічі отримує подвійну перевагу на свій наступний удар.')
						]
					})
				}),
				FactoryLogic.feature.create({
					id: 'angulotl-8-feature-8',
					name: 'Отруйна шкіра',
					description: 'Щоразу, коли сусідній ворог схоплює світанконосця або використовує проти нього ближню здібність, той ворог отримує 3 отруйної шкоди.'
				}),
				FactoryLogic.feature.createDamageModifier({
					id: 'angulotl-8-feature-9',
					modifiers: [FactoryLogic.damageModifier.create({ damageType: DamageType.Poison, modifierType: DamageModifierType.Immunity, value: 3 })]
				})
			]
		})
	],
	addOns: []
};
