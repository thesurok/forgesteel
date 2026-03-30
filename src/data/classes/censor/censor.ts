import { AbilityDistanceType } from '@/enums/ability-distance-type';
import { AbilityKeyword } from '@/enums/ability-keyword';
import { Characteristic } from '@/enums/characteristic';
import { FactoryLogic } from '@/logic/factory-logic';
import { FeatureField } from '@/enums/feature-field';
import { HeroClass } from '@/models/class';
import { PerkList } from '@/enums/perk-list';
import { SkillList } from '@/enums/skill-list';
import { exorcist } from '@/data/classes/censor/exorcist';
import { oracle } from '@/data/classes/censor/oracle';
import { paragon } from '@/data/classes/censor/paragon';

export const censor: HeroClass = {
	id: 'class-censor',
	name: 'Цензор',
	description: `
Демони й безсмертні бояться вас. Злочинці тікають, щойно бачать вашу тінь. Агенти хаосу, богохульники та єретики тремтять від звуку вашого голосу. Ви несете силу богів, озброєні гнівом і послані у світ, щоб спершу розшукати, а тоді засудити тих, чиї вчинки або навіть саме існування є анафемою для вашої церкви.

Як цензор, ви найкраще проявляєте себе проти найсильніших ворогів. Ваш суд жахає єретиків, зупиняє ворогів на місці й навіть відкидає їх через усе поле бою.`,
	type: 'standard',
	subclassName: 'Орден',
	subclassCount: 1,
	primaryCharacteristicsOptions: [
		[Characteristic.Might, Characteristic.Presence]
	],
	primaryCharacteristics: [],
	featuresByLevel: [
		{
			level: 1,
			features: [
				FactoryLogic.feature.createBonus({
					id: 'censor-stamina',
					field: FeatureField.Stamina,
					value: 21,
					valuePerLevel: 9
				}),
				FactoryLogic.feature.createBonus({
					id: 'censor-recoveries',
					field: FeatureField.Recoveries,
					value: 12
				}),
				FactoryLogic.feature.createHeroicResource({
					id: 'censor-resource',
					name: 'Гнів',
					gains: [
						{
							tag: 'start',
							trigger: 'На початку вашого ходу',
							value: '2'
						},
						{
							tag: 'take-damage',
							trigger: 'Вперше за раунд, коли істота під вашим судом завдає вам шкоди',
							value: '1'
						},
						{
							tag: 'deal-damage',
							trigger: 'Вперше за раунд, коли ви завдаєте шкоди істоті під вашим судом',
							value: '1'
						}
					]
				}),
				FactoryLogic.feature.createSkillChoice({
					id: 'censor-1-1',
					listOptions: [SkillList.Interpersonal, SkillList.Lore],
					count: 2
				}),
				FactoryLogic.feature.createDomainChoice({
					id: 'censor-1-2',
					characteristic: Characteristic.Presence,
					levels: [1, 4, 7]
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'censor-1-4',
						name: 'Суд',
						description: 'Ви вимовляєте молитву, що окреслює вашого ворога священною енергією.',
						type: FactoryLogic.type.createManeuver(),
						keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged],
						distance: [FactoryLogic.distance.createRanged(10)],
						target: 'Один ворог',
						sections: [
							FactoryLogic.createAbilitySectionText(`Ціль перебуває під вашим судом до кінця зустрічі, доки ви не використаєте цю здібність знову, добровільно не припините цей ефект (дія не потрібна), або доки інший цензор не засудить цю ціль.

Коли істота, засуджена вами, виконує основну дію і знаходиться у вашій лінії впливу, ви можете використати безкоштовну тригерну дію, щоб завдати їй священної шкоди, рівної подвоєному показнику вашої Присутності.

Якщо істота, засуджена вами, знижується до 0 Витривалості, ви можете використати безкоштовну тригерну дію, щоб спрямувати цю здібність на нову ціль.

Крім того, ви можете витратити 1 гнів, щоб виконати одну з наведених нижче безкоштовних тригерних дій:

* Коли сусідня істота, засуджена вами, починає зрушуватися, ви робите проти неї безкоштовний удар у ближньому бою, і її швидкість стає 0 до кінця поточного ходу, запобігаючи зрушенню.
* Коли істота, засуджена вами, у межах 10 клітинок робить кидок сили, ви накладаєте на цей кидок шкоду (bane).
* Коли істота, засуджена вами, у межах 10 клітинок використовує здібність з потужністю, що цілиться тільки в одну істоту, потужність для тієї істоти зменшується на 1.
* Якщо ви пошкодите засуджену вами істоту ближньою здібністю, ця істота буде висміяна вами до кінця її наступного ходу.

Ви можете вибрати тільки один варіант безкоштовної тригерної дії одночасно, навіть якщо кілька варіантів спрацьовують від того самого ефекту.`),
							FactoryLogic.createAbilitySectionPackage('censor-judgment')
						]
					})
				}),
				FactoryLogic.feature.createKitChoice({
					id: 'censor-1-5'
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'censor-1-6',
						name: 'Моє життя за твоє',
						description: 'Ви спрямовуєте частину своєї життєвої сили, щоб надати собі або союзнику більшу витривалість.',
						type: FactoryLogic.type.createTrigger('Ціль починає свій хід або отримує шкоду.'),
						keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged],
						distance: [FactoryLogic.distance.createRanged(10)],
						target: 'Ви або один союзник',
						sections: [
							FactoryLogic.createAbilitySectionText('Ви витрачаєте Відновлення, і ціль відновлює Витривалість, рівну вашому значенню Відновлення.'),
							FactoryLogic.createAbilitySectionSpend({
								effect: 'Ви можете завершити один ефект на цілі, який закінчується рятівним кидком або який закінчується в кінці її ходу, або лежача ціль може підвестися.'
							})
						]
					})
				}),
				FactoryLogic.feature.createDomainFeature({
					id: 'censor-1-7',
					name: 'Особливість домену 1 рівня',
					level: 1
				}),
				FactoryLogic.feature.createClassAbilityChoice({
					id: 'censor-1-8',
					cost: 'signature'
				}),
				FactoryLogic.feature.createClassAbilityChoice({
					id: 'censor-1-9',
					cost: 3
				}),
				FactoryLogic.feature.createClassAbilityChoice({
					id: 'censor-1-10',
					cost: 5
				})
			]
		},
		{
			level: 2,
			features: [
				FactoryLogic.feature.createPerk({
					id: 'censor-2-1',
					lists: [PerkList.Interpersonal, PerkList.Lore, PerkList.Supernatural]
				})
			]
		},
		{
			level: 3,
			features: [
				FactoryLogic.feature.create({
					id: 'censor-3-1',
					name: 'Поглянь на мою працю і впади у відчай',
					description: `Ваш суд збільшився в божественній силі, вселяючи страх у тих, кого ви засуджуєте. Коли ви використовуєте здібність Суд, ви можете витратити 1 гнів; якщо ціль має П < [середній], вона злякається вас (рят. кидок). Крім того, коли істота, засуджена вами, знижується до 0 Витривалості і ви використовуєте Суд як безкоштовну тригерну дію, якщо нова ціль має П < [сильний], вона злякається вас (рят. кидок). Якщо ціль уже злякана вами, вона замість цього отримує священну шкоду, рівну подвоєному вашому показнику Присутності.`
				}),
				FactoryLogic.feature.createClassAbilityChoice({
					id: 'censor-3-2',
					cost: 7
				})
			]
		},
		{
			level: 4,
			features: [
				FactoryLogic.feature.createCharacteristicBonus({
					id: 'censor-4-1a',
					characteristic: Characteristic.Might,
					value: 1
				}),
				FactoryLogic.feature.createCharacteristicBonus({
					id: 'censor-4-1b',
					characteristic: Characteristic.Presence,
					value: 1
				}),
				FactoryLogic.feature.createPerk({
					id: 'censor-4-2',
					lists: [PerkList.Crafting, PerkList.Exploration, PerkList.Interpersonal, PerkList.Intrigue, PerkList.Lore, PerkList.Supernatural]
				}),
				FactoryLogic.feature.createSkillChoice({
					id: 'censor-4-3',
					listOptions: [SkillList.Crafting, SkillList.Exploration, SkillList.Interpersonal, SkillList.Lore, SkillList.Intrigue]
				}),
				FactoryLogic.feature.createHeroicResourceGain({
					id: 'censor-4-4',
					name: 'Гнів понад гнів',
					tag: 'deal-damage 2',
					trigger: 'Вперше за раунд, коли ви завдаєте шкоди істоті під вашим судом',
					value: '2',
					replacesTags: ['deal-damage']
				}),
				FactoryLogic.feature.createDomainFeature({
					id: 'censor-4-5',
					name: 'Особливість домену 4 рівня',
					level: 4
				})
			]
		},
		{
			level: 5,
			features: [
				FactoryLogic.feature.createClassAbilityChoice({
					id: 'censor-5-1',
					cost: 9
				})
			]
		},
		{
			level: 6,
			features: [
				FactoryLogic.feature.create({
					id: 'censor-6-1',
					name: 'Знаряддя гніву',
					description: `Кожного разу, коли ви завершуєте відпочинок, ви можете вибрати зброю одного героя, включно зі своєю, щоб спрямувати через неї надприродну силу як знаряддя гніву вашого бога. Зброя стає магічною та отримує наступні переваги до вашого наступного відпочинку:

* Удари цією зброєю завдають додаткової священної шкоди, рівної найвищому показнику характеристики носія.
* Будь-яка істота, вражена цією зброєю, яка має вразливість до священного та має П < [сильний], стає зляканою й ослабленою (рят. кидок).
* Будь-який міньйон, уражений ударом цієї зброї, гине. Максимум Витривалості того міньйона вилучається з пулу міньйонів перед будь-яким нанесенням шкоди решті загону.
* Носія зброї неможливо зробити зляканим.`
				}),
				FactoryLogic.feature.createPerk({
					id: 'censor-6-2',
					lists: [PerkList.Interpersonal, PerkList.Lore, PerkList.Supernatural]
				})
			]
		},
		{
			level: 7,
			features: [
				FactoryLogic.feature.createCharacteristicBonus({
					id: 'censor-7-1a',
					characteristic: Characteristic.Might,
					value: 1
				}),
				FactoryLogic.feature.createCharacteristicBonus({
					id: 'censor-7-1b',
					characteristic: Characteristic.Agility,
					value: 1
				}),
				FactoryLogic.feature.createCharacteristicBonus({
					id: 'censor-7-1c',
					characteristic: Characteristic.Reason,
					value: 1
				}),
				FactoryLogic.feature.createCharacteristicBonus({
					id: 'censor-7-1d',
					characteristic: Characteristic.Intuition,
					value: 1
				}),
				FactoryLogic.feature.createCharacteristicBonus({
					id: 'censor-7-1e',
					characteristic: Characteristic.Presence,
					value: 1
				}),
				FactoryLogic.feature.createDomainFeature({
					id: 'censor-7-2',
					name: 'Особливість домену 7 рівня',
					level: 7
				}),
				FactoryLogic.feature.createHeroicResourceGain({
					id: 'censor-7-3',
					name: 'Сфокусований гнів',
					tag: 'start 2',
					trigger: 'На початку вашого ходу',
					value: '3',
					replacesTags: ['start']
				}),
				FactoryLogic.feature.createSkillChoice({
					id: 'censor-7-4',
					listOptions: [SkillList.Crafting, SkillList.Exploration, SkillList.Interpersonal, SkillList.Lore, SkillList.Intrigue]
				})
			]
		},
		{
			level: 8,
			features: [
				FactoryLogic.feature.createPerk({
					id: 'censor-8-1',
					lists: [PerkList.Crafting, PerkList.Exploration, PerkList.Interpersonal, PerkList.Intrigue, PerkList.Lore, PerkList.Supernatural]
				}),
				FactoryLogic.feature.createClassAbilityChoice({
					id: 'censor-8-2',
					cost: 11
				})
			]
		},
		{
			level: 9,
			features: [
				FactoryLogic.feature.create({
					id: 'censor-9-1',
					name: 'Покращене знаряддя гніву',
					description: `Зброя, яку ви вибираєте за допомогою знаряддя гніву, отримує такі додаткові переваги:

* Носій зброї та кожен союзник поруч отримують +2 до рятівних кидків.
* Наприкінці кожного ходу носія зброї кожен союзник поруч робить рятівний кидок проти кожного ефекту на собі, який завершується рятівним кидком.
* Носій зброї має імунітет до корупції 10.`
				})
			]
		},
		{
			level: 10,
			features: [
				FactoryLogic.feature.createCharacteristicBonus({
					id: 'censor-10-1a',
					characteristic: Characteristic.Might,
					value: 1
				}),
				FactoryLogic.feature.createCharacteristicBonus({
					id: 'censor-10-1b',
					characteristic: Characteristic.Presence,
					value: 1
				}),
				FactoryLogic.feature.createPerk({
					id: 'censor-10-2',
					lists: [PerkList.Crafting, PerkList.Lore, PerkList.Supernatural]
				}),
				FactoryLogic.feature.createSkillChoice({
					id: 'censor-10-3',
					listOptions: [SkillList.Crafting, SkillList.Exploration, SkillList.Interpersonal, SkillList.Lore, SkillList.Intrigue]
				}),
				FactoryLogic.feature.create({
					id: 'censor-10-4',
					name: 'Тамплієр',
					description: `Ви є втіленням правосуддя вашого бога у часовому просторі. Коли ви використовуєте здібність Суд, ви можете виконати безкоштовну тригерну дію, щоб активувати ефект домену проводу, пов’язаний з вашим вибраним доменом, або домен, до якого ви отримали доступ за доблестю. Якщо ефект вимагає використання вашого показника Інтуїції, використовуйте замість нього показник Присутності. Якщо ефект використовує рівень проводу, використовуйте рівень цензора замість цього.

Крім того, коли ви берете відпочинок, ви можете відкрити портал, щоб відпочити у присутності своєї божества і привести із собою союзників. Коли ви це робите, ви можете поставити божеству три питання; Директор має відповісти чесно, якщо божество знає відповіді (хоча відповіді можуть бути криптичними або неповними). Коли ви закінчуєте відпочинок, ви й ваші союзники можете з’явитися в будь-якому місці часової течії, де хтось поклоняється вашому божеству.

Під час відпочинку у присутності божества ваше божество може також надати пріоритетні цілі для здійснення правосуддя. Ви та ваші союзники отримуєте подвійний бонус на кидки сили проти таких цілей. Якщо ви намагаєтесь відкрити портал до вашого божества знову, перш ніж ви знищите пріоритетні цілі, ви зазнаєте гніву вашого бога, як вирішить Директор.`
				}),
				FactoryLogic.feature.createHeroicResource({
					id: 'censor-10-5',
					name: 'Доблесть',
					type: 'epic',
					gains: [
						{
							tag: '',
							trigger: 'Закінчення відпочинку',
							value: 'Отримання досвіду'
						}
					],
					description: `
Ви можете витратити 3 доблесті, щоб отримати доступ до одного з доменів вашого божества, до якого зазвичай не маєте доступу. Коли ви це робите, ви можете використовувати функції того домену, доки не завершите інший відпочинок.

Доблесть зберігається, поки ви її не витратите.`
				}),
				FactoryLogic.feature.createHeroicResourceGain({
					id: 'censor-10-6',
					name: 'Гнів богів',
					tag: 'start 3',
					trigger: 'Початок вашого ходу',
					value: '4',
					replacesTags: ['start', 'start 2']
				})
			]
		}
	],
	abilities: [
		FactoryLogic.createAbility({
			id: 'censor-ability-1',
			name: 'Геть, богохульнику!',
			description: 'Ви спрямовуєте силу через свою зброю, щоб відштовхнути ворогів.',
			type: FactoryLogic.type.createMain(),
			cost: 'signature',
			keywords: [AbilityKeyword.Area, AbilityKeyword.Magic, AbilityKeyword.Melee, AbilityKeyword.Weapon],
			distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Cube, value: 2, within: 1 })],
			target: 'Кожен ворог у зоні',
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Presence],
						tier1: '2 священної шкоди; штовх 1',
						tier2: '4 священної шкоди; штовх 2',
						tier3: '6 священної шкоди; штовх 3'
					})
				)
			]
		}),
		FactoryLogic.createAbility({
			id: 'censor-ability-2',
			name: 'Кожен крок... смерть!',
			description: 'Ви показуєте ворогу проблиск його долі після смерті.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged, AbilityKeyword.Strike],
			distance: [FactoryLogic.distance.createRanged(10)],
			target: 'Одна істота',
			cost: 'signature',
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Presence],
						tier1: '5 + П психічної шкоди',
						tier2: '7 + П психічної шкоди',
						tier3: '10 + П психічної шкоди'
					})
				),
				FactoryLogic.createAbilitySectionText('Кожного разу, коли ціль добровільно рухається до кінця вашого наступного ходу, вона отримує 1 психічну шкоду за кожну клітинку, яку пройшла.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'censor-ability-3',
			name: 'Зупинись, негіднику!',
			description: 'Ви наповнюєте свою зброю священною магією, що ускладнює ворогу втечу.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [FactoryLogic.distance.createMelee()],
			target: 'Одна істота або об’єкт',
			cost: 'signature',
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Might],
						tier1: '2 + С священної шкоди; П < [слабкий], сповільнений (рят. кидок)',
						tier2: '5 + С священної шкоди; П < [середній], сповільнений (рят. кидок)',
						tier3: '7 + С священної шкоди; П < [сильний], сповільнений (рят. кидок)'
					})
				)
			]
		}),
		FactoryLogic.createAbility({
			id: 'censor-ability-4',
			name: 'Твої союзники не врятують тебе!',
			description: 'Ваш магічний удар перетворює провину ворога на вибух священної сили',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [FactoryLogic.distance.createMelee()],
			target: 'Одна істота або об’єкт',
			cost: 'signature',
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Might],
						tier1: '3 + С священної шкоди',
						tier2: '5 + С священної шкоди',
						tier3: '8 + С священної шкоди'
					})
				),
				FactoryLogic.createAbilitySectionText('Кожен ворог, що знаходиться поруч із ціллю, штовхається від цілі на число клітинок, рівне вашому показнику Присутності.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'censor-ability-5',
			name: 'Ось щит віри!',
			description: 'Потужний удар перетворює життєву силу ворога на священне сяйво, що огортає вас і союзника, відлякуючи ворогів, які можуть напасти.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [FactoryLogic.distance.createMelee()],
			target: 'Одна істота або об’єкт',
			cost: 3,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Might],
						tier1: '3 + С священної шкоди',
						tier2: '6 + С священної шкоди',
						tier3: '9 + С священної шкоди'
					})
				),
				FactoryLogic.createAbilitySectionText('До початку вашого наступного ходу вороги мають шкоду (bane) на кидках здібностей, зроблених проти вас і кожного союзника, що знаходиться поруч із вами.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'censor-ability-6',
			name: 'Рішучий наступ',
			description: 'Коли ви відкидаєте ворога своєю зброєю, ви використовуєте віру, щоб залишатися поруч.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [FactoryLogic.distance.createMelee()],
			target: 'Одна істота або об’єкт',
			cost: 3,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Might],
						tier1: '3 + С шкоди; штовх 1',
						tier2: '6 + С шкоди; штовх 3',
						tier3: '9 + С шкоди; штовх 5'
					})
				),
				FactoryLogic.createAbilitySectionText('Після штовхання ви можете зрушити в прямій лінії до цілі на відстань до вашої швидкості.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'censor-ability-7',
			name: 'Боги карають і захищають',
			description: 'Ви спрямовуєте священну енергію, щоб уразити ворога та зцілити союзника.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Magic, AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [FactoryLogic.distance.createMelee()],
			target: 'Одна істота або об’єкт',
			cost: 3,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Might],
						tier1: '5 + С священної шкоди',
						tier2: '8 + С священної шкоди',
						tier3: '11 + С священної шкоди'
					})
				),
				FactoryLogic.createAbilitySectionText('Ви можете витратити Відновлення, щоб дозволити собі або одному союзнику в межах 10 клітинок відновити Витривалість, рівну вашому значенню Відновлення.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'censor-ability-8',
			name: 'Покайся!',
			description: 'Ви викликаєте спогади про їхні гріхи, щоб терзати своїх ворогів.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged, AbilityKeyword.Strike],
			distance: [FactoryLogic.distance.createRanged(10)],
			target: 'Одна істота',
			cost: 3,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Presence],
						tier1: '5 + П священної шкоди; І < [слабкий], приголомшений (рят. кидок)',
						tier2: '8 + П священної шкоди; І < [середній], приголомшений (рят. кидок)',
						tier3: '11 + П священної шкоди; І < [сильний], приголомшений (рят. кидок)'
					})
				)
			]
		}),
		FactoryLogic.createAbility({
			id: 'censor-ability-9',
			name: 'Затримай',
			description: '«Я впіймав тебе, виродку.»',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Magic, AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [FactoryLogic.distance.createMelee()],
			target: 'Одна істота',
			cost: 5,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Might],
						tier1: '6 + С священної шкоди; схоплений',
						tier2: '9 + С священної шкоди; схоплений',
						tier3: '13 + С священної шкоди; схоплений'
					})
				),
				FactoryLogic.createAbilitySectionText('Якщо ціль робить удар по істоті, будучи схопленою таким чином, ви можете витратити 3 гніву, щоб завдати їй священної шкоди, рівної вашому показнику Присутності, а потім змінити ціль удару на іншу ціль у межах дальності цього удару.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'censor-ability-10',
			name: 'Ось обличчя правосуддя!',
			description: 'Ви атакуєте ворога, і ваші вороги бачать видіння істинної природи вашої рішучості.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Magic, AbilityKeyword.Melee, AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [
				FactoryLogic.distance.createMelee(),
				FactoryLogic.distance.createRanged(5)
			],
			target: 'Одна істота',
			cost: 5,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Might],
						tier1: '3 + С священної шкоди; якщо ціль має П < [слабкий], кожен ворог у межах 2 клітинок від неї зляканий вами (рят. кидок)',
						tier2: '5 + С священної шкоди; якщо ціль має П < [середній], кожен ворог у межах 2 клітинок від неї зляканий вами (рят. кидок)',
						tier3: '8 + С священної шкоди; якщо ціль має П < [сильний], кожен ворог у межах 2 клітинок від неї зляканий вами (рят. кидок)'
					})
				),
				FactoryLogic.createAbilitySectionText('Кожен ворог, наляканий цією здібністю, штовхається на 2 клітинки від цілі і отримує психічну шкоду, рівну вашому показнику Присутності.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'censor-ability-11',
			name: 'Осуджено',
			description: 'Ось — осуджено й покарано.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [FactoryLogic.distance.createMelee()],
			target: 'Одна істота',
			cost: 5,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Might],
						tier1: '2 + С священної шкоди',
						tier2: '3 + С священної шкоди',
						tier3: '5 + С священної шкоди'
					})
				),
				FactoryLogic.createAbilitySectionText('Коли ціль, що не є лідером або соло-істотою, стає захеканою через цю здібність, вона знижується до 0 Витривалості.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'censor-ability-12',
			name: 'Очищувальний вогонь',
			description: 'Боги судять, вогонь очищає.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Magic, AbilityKeyword.Melee, AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [
				FactoryLogic.distance.createMelee(),
				FactoryLogic.distance.createRanged(5)
			],
			target: 'Одна істота',
			cost: 5,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Might],
						tier1: '5 + С священної шкоди; С < [слабкий], ціль має вогняну вразливість 3 (рят. кидок)',
						tier2: '9 + С священної шкоди; С < [середній], ціль має вогняну вразливість 5 (рят. кидок)',
						tier3: '12 + С священної шкоди; С < [сильний], ціль має вогняну вразливість 7 (рят. кидок)'
					})
				),
				FactoryLogic.createAbilitySectionText('Поки ціль має вогняну вразливість від цієї здібності, ви можете обрати, щоб ваші здібності завдавали цілі вогняної шкоди замість священної.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'censor-ability-13',
			name: 'Едикт руйнівної ізоляції',
			description: 'Зло всередині ваших ворогів вибухає священним вогнем, що палає лише винних.',
			type: FactoryLogic.type.createManeuver(),
			keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
			distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Aura, value: 2 })],
			target: 'Кожен ворог у зоні',
			cost: 7,
			sections: [
				FactoryLogic.createAbilitySectionText('До кінця зустрічі або поки ви не опинитесь у стані вмирання, кожна ціль отримує священну шкоду, рівну вашому показнику Присутності, наприкінці кожного вашого ходу. Ціль отримує додаткові 2d6 священної шкоди, якщо вона засуджена вами або якщо перебуває поруч із будь-яким ворогом.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'censor-ability-14',
			name: 'Едикт досконалого порядку',
			description: 'У межах вашої божественної присутності вороги пошкодують про використання своїх злих здібностей.',
			type: FactoryLogic.type.createManeuver(),
			keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
			distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Aura, value: 2 })],
			target: 'Кожен ворог у зоні',
			cost: 7,
			sections: [
				FactoryLogic.createAbilitySectionText('До кінця зустрічі або поки ви не опинитесь у стані вмирання, коли ціль використовує здібність, що коштує Злоби, вона отримує священну шкоду, рівну тричі вашому показнику Присутності. Ціль, засуджена вами, отримує додаткові 2d6 священної шкоди.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'censor-ability-15',
			name: 'Едикт очищаючого пацифізму',
			description: 'Ви випромінюєте праведну енергію, яка карає ворогів, що намагаються завдати шкоди вам або вашим союзникам.',
			type: FactoryLogic.type.createManeuver(),
			keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
			distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Aura, value: 2 })],
			target: 'Кожен ворог у зоні',
			cost: 7,
			sections: [
				FactoryLogic.createAbilitySectionText('До кінця зустрічі або поки ви не опинитесь у стані вмирання, коли ціль робить удар, вона отримує священну шкоду, рівну подвоєному вашому показнику Присутності. Ціль, засуджена вами, отримує додаткові 2d6 священної шкоди.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'censor-ability-16',
			name: 'Едикт нерухомості',
			description: 'Священна аура, що ви розгортаєте, робить болючим для злочинців покидати вашу досяжність.',
			type: FactoryLogic.type.createManeuver(),
			keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
			distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Aura, value: 2 })],
			target: 'Кожен ворог у зоні',
			cost: 7,
			sections: [
				FactoryLogic.createAbilitySectionText('До кінця зустрічі або поки ви не опинитесь у стані вмирання, коли ціль рухається або примусово переміщується за межі зони, вона отримує священну шкоду, рівну подвоєному вашому показнику Присутності. Ціль, засуджена вами, яка рухається добровільно, отримує додаткові 2d6 священної шкоди.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'censor-ability-17',
			name: 'Боги дарують тобі силу',
			description: 'Ви спрямовуєте божественну силу для руху, який неможливо зупинити.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Ranged],
			distance: [FactoryLogic.distance.createRanged(10)],
			target: 'Ви або один союзник',
			cost: 9,
			sections: [
				FactoryLogic.createAbilitySectionText('Ціль знімає будь-який стан або ефект, який знімається рятівним кидком або який закінчується в кінці її ходу, або лежача ціль може підвестися. Потім ціль отримує 2 сплески, може зрушити до своєї швидкості, ігноруючи важкопрохідну місцевість, і може використати підписову ударну здібність як безкоштовну тригерну дію.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'censor-ability-18',
			name: 'Молитва перемоги',
			description: 'Ви спрямовуєте волю свого бога, щоб подолати труднощі та завдати болю.',
			type: FactoryLogic.type.createManeuver(),
			keywords: [AbilityKeyword.Area],
			distance: [
				FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 1 })
			],
			target: 'Ви та кожен союзник у зоні',
			cost: 9,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Presence],
						tier1: 'Кожна ціль отримує 1 сплеск.',
						tier2: 'Кожна ціль отримує 2 сплески.',
						tier3: 'Кожна ціль отримує 3 сплески.'
					})
				),
				FactoryLogic.createAbilitySectionText('Ціль може завершити один ефект на собі, який завершується рятівним кидком або закінчується в кінці її ходу, або лежача ціль може підвестися.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'censor-ability-19',
			name: 'Праведний суд',
			description: 'Ви підсилюєте силу свого суду.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [
				FactoryLogic.distance.createMelee()
			],
			target: 'Одна істота',
			cost: 9,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Might],
						tier1: '10 + С шкоди',
						tier2: '14 + С шкоди',
						tier3: '20 + С шкоди'
					})
				),
				FactoryLogic.createAbilitySectionText('До кінця зустрічі, коли будь-який союзник завдає шкоди цілі, засудженій вами, цей союзник отримує 1 сплеск.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'censor-ability-20',
			name: 'Щит праведних',
			description: 'Ви вражаєте ворога й створюєте сузір’я божественних щитів, що захищають ваших союзників.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [
				FactoryLogic.distance.createMelee()
			],
			target: 'Одна істота',
			cost: 9,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Might],
						tier1: '10 + С шкоди; ви та кожен союзник поруч отримують 10 тимчасової Витривалості',
						tier2: '14 + С шкоди; ви та кожен союзник поруч отримують 15 тимчасової Витривалості',
						tier3: '20 + С шкоди; ви та кожен союзник поруч отримують 20 тимчасової Витривалості'
					})
				)
			]
		}),
		FactoryLogic.createAbility({
			id: 'censor-ability-21',
			name: 'Екскомунікація',
			description: 'Ви проклинаєте ворога, щоб він став караючим для своїх союзників.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [
				FactoryLogic.distance.createMelee()
			],
			target: 'Одна істота',
			cost: 11,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Might],
						tier1: '9 + С шкоди; І < [слабкий], ослаблений (рят. кидок)',
						tier2: '13 + С шкоди; І < [середній], ослаблений (рят. кидок)',
						tier3: '18 + С шкоди; І < [сильний], ослаблений (рят. кидок)'
					})
				),
				FactoryLogic.createAbilitySectionText('Наприкінці кожного вашого ходу ціль, ослаблена таким чином, завдає священної шкоди, рівної подвоєному вашому показнику Присутності, кожному ворогу в межах 2 клітинок від неї. Крім того, ціль, ослаблена таким чином, не може бути обрана цілями здібностей її союзників.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'censor-ability-22',
			name: 'Рука богів',
			description: 'Ви використовуєте свого ворога як інструмент проти супротивників.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [
				FactoryLogic.distance.createRanged(10)
			],
			target: 'Одна істота',
			cost: 11,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Might],
						tier1: '10 + С шкоди',
						tier2: '15 + С шкоди',
						tier3: '21 + С шкоди'
					})
				),
				FactoryLogic.createAbilitySectionText('До кінця зустрічі, поки ціль засуджена вами, ви можете вирішити зробити її джерелом будь-якої вашої здібності. Додатково, така ціль рахується союзником для цілей фланговання.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'censor-ability-23',
			name: 'Стовп священного вогню',
			description: 'Вина вашого ворога підживлює священний вогонь, що палить ваших ворогів.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [
				FactoryLogic.distance.createMelee()
			],
			target: 'Одна істота',
			cost: 11,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Might],
						tier1: '9 + С шкоди; І < [слабкий], приголомшений (рят. кидок)',
						tier2: '13 + С шкоди; І < [середній], приголомшений (рят. кидок)',
						tier3: '18 + С шкоди; І < [сильний], приголомшений (рят. кидок)'
					})
				),
				FactoryLogic.createAbilitySectionText('Наприкінці кожного вашого ходу ціль, приголомшена таким чином, завдає священної шкоди, рівної подвоєному вашому показнику Присутності, кожному ворогу в межах 2 клітинок від неї.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'censor-ability-24',
			name: 'Твої союзники обертаються проти тебе!',
			description: 'Ви спрямовуєте лють ваших ворогів на ціль.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [
				FactoryLogic.distance.createRanged(10)
			],
			target: 'Одна істота',
			cost: 11,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Presence],
						tier1: '5 + П шкоди; І < [слабкий], сповільнений (рят. кидок)',
						tier2: '9 + П шкоди; І < [середній], сповільнений (рят. кидок)',
						tier3: '12 + П шкоди; І < [сильний], сповільнений (рят. кидок)'
					})
				),
				FactoryLogic.createAbilitySectionText('Поки ціль сповільнена таким чином, кожен її союзник, який починає свій хід у межах 5 клітинок від неї, повинен використати безкоштовний маневр, щоб зробити безкоштовний удар по цілі. Додатково, поки ціль сповільнена таким чином, кожен її союзник у межах 5 клітинок, який може виконати тригерний безкоштовний удар проти іншої істоти, повинен замість цього зробити удар по цілі.')
			]
		})
	],
	subclasses: [
		exorcist,
		oracle,
		paragon
	],
	level: 1,
	characteristics: []
};
