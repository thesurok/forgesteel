import { AbilityDistanceType } from '@/enums/ability-distance-type';
import { AbilityKeyword } from '@/enums/ability-keyword';
import { Characteristic } from '@/enums/characteristic';
import { FactoryLogic } from '@/logic/factory-logic';
import { FeatureField } from '@/enums/feature-field';
import { HeroClass } from '@/models/class';
import { PerkList } from '@/enums/perk-list';
import { SkillList } from '@/enums/skill-list';
import { berserker } from '@/data/classes/fury/berserker';
import { reaver } from '@/data/classes/fury/reaver';
import { stormwight } from '@/data/classes/fury/stormwight';

export const fury: HeroClass = {
	id: 'class-fury',
	name: 'Фурія',
	description: `
Ви не вгамовуєте жар битви всередині себе. Ви звільняєте його! Досвід життя в дикій природі відкрив вам секрети хижаків, і тепер, як яструб, пантера чи вовк, ви спрямовуєте невтримну лють у бойову майстерність. Первісний Хаос — ваш союзник. Нехай інші використовують тонкість, щоб прибирати руїни, що лишаються по вашому сліду.

Як фурія, ви нищите ворогів приголомшливою міццю, кидаєте себе й супротивників по полю бою та стаєте сильнішими, коли зростає ваша лють. Природа не знає поняття справедливості — і ви також.`,
	type: 'standard',
	subclassName: 'Primordial Aspect',
	subclassCount: 1,
	primaryCharacteristicsOptions: [
		[Characteristic.Might, Characteristic.Agility]
	],
	primaryCharacteristics: [],
	featuresByLevel: [
		{
			level: 1,
			features: [
				FactoryLogic.feature.createBonus({
					id: 'fury-stamina',
					field: FeatureField.Stamina,
					value: 21,
					valuePerLevel: 9
				}),
				FactoryLogic.feature.createBonus({
					id: 'fury-recoveries',
					field: FeatureField.Recoveries,
					value: 10
				}),
				FactoryLogic.feature.createHeroicResource({
					id: 'fury-resource',
					name: 'Лють',
					gains: [
						{
							tag: 'start',
							trigger: 'Початок вашого ходу',
							value: '1d3'
						},
						{
							tag: 'take-damage',
							trigger: 'Першого разу в кожному раунді бою, коли ви отримуєте шкоду',
							value: '1'
						},
						{
							tag: 'winded',
							trigger: 'Першого разу, коли ви стаєте захеканим або вмираючим у зустрічі',
							value: '1d3'
						}
					]
				}),
				FactoryLogic.feature.createSkillChoice({
					id: 'fury-1-1',
					selected: ['Nature']
				}),
				FactoryLogic.feature.createSkillChoice({
					id: 'fury-1-2',
					listOptions: [SkillList.Exploration, SkillList.Intrigue],
					count: 2
				}),
				FactoryLogic.feature.create({
					id: 'fury-1-4',
					name: 'Потужні стрибки',
					description: 'Під час перевірки Сили для стрибка ви не можете отримати результат нижчий за рівень 2.'
				}),
				FactoryLogic.feature.createClassAbilityChoice({
					id: 'fury-1-5',
					cost: 'signature'
				}),
				FactoryLogic.feature.createClassAbilityChoice({
					id: 'fury-1-6',
					cost: 3
				}),
				FactoryLogic.feature.createClassAbilityChoice({
					id: 'fury-1-7',
					cost: 5
				})
			]
		},
		{
			level: 2,
			features: [
				FactoryLogic.feature.createPerk({
					id: 'fury-2-1',
					lists: [PerkList.Crafting, PerkList.Exploration, PerkList.Intrigue]
				})
			]
		},
		{
			level: 3,
			features: [
				FactoryLogic.feature.createClassAbilityChoice({
					id: 'fury-3-1',
					cost: 7
				})
			]
		},
		{
			level: 4,
			features: [
				FactoryLogic.feature.createCharacteristicBonus({
					id: 'fury-4-1a',
					characteristic: Characteristic.Might,
					value: 1
				}),
				FactoryLogic.feature.createCharacteristicBonus({
					id: 'fury-4-1b',
					characteristic: Characteristic.Agility,
					value: 1
				}),
				FactoryLogic.feature.createHeroicResourceGain({
					id: 'fury-4-2',
					name: 'Руйнівна лють',
					tag: 'take-damage 2',
					trigger: 'Першого разу в кожному раунді бою, коли ви отримуєте шкоду',
					value: '2',
					replacesTags: ['take-damage']
				}),
				FactoryLogic.feature.createPerk({
					id: 'fury-4-3'
				}),
				FactoryLogic.feature.create({
					id: 'fury-4-4',
					name: 'Первісне налаштування',
					description: 'Коли ваша лють проявляє стихійні сили, створені Первісним Хаосом, ви відчуваєте, як елементальна сила взаємодіє з оточенням. Ви автоматично визначаєте, чи має будь-яка істота в межах 10 клітин імунітет або слабкість до кислотного, холодного, корупційного, вогняного, блискавичного, отруйного або звукового типу ушкоджень, дізнаючись про наявність імунітету чи слабкості, значення цієї стійкості або вразливості та конкретний тип ушкодження. Додатково ви автоматично відчуваєте джерело одного з цих типів ушкоджень у межах 10 клітин, наприклад вогонь або джерело стихійної сили.'
				}),
				FactoryLogic.feature.create({
					id: 'fury-4-5',
					name: 'Первісний удар',
					description: 'Ви можете виявити свою лють безпосередньо як стихійну силу, створену Первісним Хаосом. Як частина будь-якого удару ви можете витратити 1 одиницю люті, щоб отримати 1 сплеск, який має бути використаний саме для цього удару. Додаткова шкода від сплеску може бути кислотною, холодною, корупційною, вогняною, блискавичною, отруйною або звуковою (на ваш вибір).'
				}),
				FactoryLogic.feature.createSkillChoice({
					id: 'fury-4-6'
				})
			]
		},
		{
			level: 5,
			features: [
				FactoryLogic.feature.createClassAbilityChoice({
					id: 'fury-5-1',
					cost: 9
				})
			]
		},
		{
			level: 6,
			features: [
				FactoryLogic.feature.create({
					id: 'fury-6-1',
					name: 'Мародер Первісного Хаосу',
					description: `
Коли ваш зв'язок із силою Первісного Хаосу стає сильнішим, ви автоматично відчуваєте будь-яких стихійних істот або магічні джерела стихійної сили, такі як потік лави або озеро, що накладається на Квінтесенцію, в межах 1 милі від вас.

Крім того, ви можете спілкуватися зі стихійними істотами, і під час переговорів зі стихією ваше Визнання (Renown) враховується як на 1 більше, ніж зазвичай. Це сумується зі збільшенням ефективного Визнання, яке надає аспект Рицаря природи (див. здібності 3-го рівня). Коли будь-яка стихійна істота вперше усвідомлює вашу присутність у бою, якщо в неї P < [середній], вона стає налякана вами (рят. кидок закінчує).`
				}),
				FactoryLogic.feature.create({
					id: 'fury-6-2',
					name: 'Первісний портал',
					description: `
Як основну дію ви можете торкнутися магічного джерела стихійної сили і використати його для створення порталу до Квінтесенції. Потім ви можете використати основну дію, щоб телепортувати себе та будь-яких охочих істот у межах 10 клітин через портал на безпечний острів у Квінтесенції або повернутися назад. Ви можете підтримувати кількість порталів, рівну вашому показнику Сили (Might), кожен з яких веде на той самий безпечний острів у Квінтесенції. Якщо портал у вашій мережі буде знищено, він більше не належить мережі. Ви можете видалити портал із мережі незалежно від вашої відстані від нього, включно з різними світами (додаткових дій не потрібно).

(Дослідження Квінтесенції можливе з вашого острова, але постійна безпека не гарантована.)`
				}),
				FactoryLogic.feature.createPerk({
					id: 'fury-6-3',
					lists: [PerkList.Crafting, PerkList.Exploration, PerkList.Intrigue]
				})
			]
		},
		{
			level: 7,
			features: [
				FactoryLogic.feature.createCharacteristicBonus({
					id: 'fury-7-1a',
					characteristic: Characteristic.Might,
					value: 1
				}),
				FactoryLogic.feature.createCharacteristicBonus({
					id: 'fury-7-1b',
					characteristic: Characteristic.Agility,
					value: 1
				}),
				FactoryLogic.feature.createCharacteristicBonus({
					id: 'fury-7-1c',
					characteristic: Characteristic.Reason,
					value: 1
				}),
				FactoryLogic.feature.createCharacteristicBonus({
					id: 'fury-7-1d',
					characteristic: Characteristic.Intuition,
					value: 1
				}),
				FactoryLogic.feature.createCharacteristicBonus({
					id: 'fury-7-1e',
					characteristic: Characteristic.Presence,
					value: 1
				}),
				FactoryLogic.feature.create({
					id: 'fury-7-2',
					name: 'Форма Стихії',
					description: `
Ви дедалі сильніше виявляєте ознаки того, як сила Первісного Хаосу тече всередині вас. Коли ви відчуваєте сильні емоції або ваша лють зростає, елементальні частинки, налаштовані на ваш настрій, кружляють навколо вас, а ваша шкіра змінює вигляд, відображаючи обраний вами елемент.

Крім того, якщо ви — берсеркер або рейвер, ви маєте імунітет до кислотного, холодного, корупційного, вогняного, блискавичного, отруйного та звукового ушкоджень, рівний вашому показнику Сили (Might). Якщо ви — штормовий воїн (stormwight), ви маєте імунітет до типу ушкоджень вашої здібності Первісної Бурі (Primordial Storm), рівний двічі вашому показнику Сили.`
				}),
				FactoryLogic.feature.createHeroicResourceGain({
					id: 'fury-7-3',
					name: 'Посилена лють',
					tag: 'start 2',
					trigger: 'Початок вашого ходу',
					value: '1d3 + 1',
					replacesTags: ['start']
				}),
				FactoryLogic.feature.createSkillChoice({
					id: 'fury-7-4'
				})
			]
		},
		{
			level: 8,
			features: [
				FactoryLogic.feature.createPerk({
					id: 'fury-8-1'
				}),
				FactoryLogic.feature.createClassAbilityChoice({
					id: 'fury-8-2',
					cost: 11
				})
			]
		},
		{
			level: 9,
			features: [
				FactoryLogic.feature.create({
					id: 'fury-9-1',
					name: 'Провісник Первісного Хаосу',
					description: 'Ви можете створити тимчасове джерело стихійної сили як діяльність під час відпочинку. Це джерело стихійної сили діє 24 години після створення і може бути використане для створення порталу до Квінтесенції за допомогою вашої здатності Первісний портал. Якщо ви це зробите, джерело стихійної сили діє стільки, скільки портал підтримується у вашій мережі.'
				})
			]
		},
		{
			level: 10,
			features: [
				FactoryLogic.feature.create({
					id: 'fury-10-1',
					name: 'Втілення Хаосу',
					description: `
Ваше володіння стихійними силами захищає і підбадьорює вас. Якщо ви — берсеркер або рейвер, ви маєте імунітет до кислотного, холодного, корупційного, вогняного, блискавичного, отруйного та звукового ушкоджень, рівний подвійній величині вашого показника Сили (Might). Якщо ви — штормовий воїн (stormwight), ваш імунітет від ушкоджень від здібності Первісна Буря збільшується до трьохкратного значення вашого показника Сили.

Коли будь-яка стихійна істота або інша істота, чії здібності завдають кислотного, холодного, корупційного, вогняного, блискавичного, отруйного або звукового ушкодження, вперше помічає вас у бою, якщо в неї P < [сильний], вона наляканa вами (рят. кидок закінчує).

Додатково, коли ви використовуєте Первісний удар (Primordial Strike), ви можете витратити до 3 одиниць люті, отримуючи по 1 сплеску за кожну витрачену одиницю люті, які можна використати для цього удару.`
				}),
				FactoryLogic.feature.createCharacteristicBonus({
					id: 'fury-10-2a',
					characteristic: Characteristic.Might,
					value: 1
				}),
				FactoryLogic.feature.createCharacteristicBonus({
					id: 'fury-10-2b',
					characteristic: Characteristic.Agility,
					value: 1
				}),
				FactoryLogic.feature.createPerk({
					id: 'fury-10-3'
				}),
				FactoryLogic.feature.createHeroicResourceGain({
					id: 'fury-10-4',
					name: 'Первісна лють',
					tag: 'take-damage 3',
					trigger: 'The first time each combat round that you take damage',
					value: '3',
					replacesTags: ['take-damage', 'take-damage 2']
				}),
				FactoryLogic.feature.createHeroicResource({
					id: 'fury-10-5',
					name: 'Первісна сила',
					type: 'epic',
					gains: [
						{
							tag: '',
							trigger: 'Завершення відпочинку',
							value: 'Отримання досвіду'
						}
					],
					description: `
Ви можете витратити будь-яку кількість первісної сили як безкоштовний маневр, припиняючи один ефект на собі за кожну витрачену одиницю первісної сили.

Ви також можете витратити 3 одиниці первісної сили, щоб створити портал до Квінтесенції без необхідності в джерелі стихійної сили.

Первісна сила зберігається, поки ви її не витратите.`
				}),
				FactoryLogic.feature.createSkillChoice({
					id: 'fury-10-6'
				})
			]
		}
	],
	abilities: [
		FactoryLogic.createAbility({
			id: 'fury-ability-1',
			name: 'Жорстокий Удар',
			description: 'Сильні удари вашої зброї відкидають ворогів назад.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [FactoryLogic.distance.createMelee()],
			target: 'Одна істота або предмет',
			cost: 'signature',
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Might],
						tier1: '3 + С ушкоджень; відштовхнути на 1 клітину',
						tier2: '6 + С ушкоджень; відштовхнути на 2 клітини',
						tier3: '9 + С ушкоджень; відштовхнути на 4 клітини'
					})
				)
			]
		}),
		FactoryLogic.createAbility({
			id: 'fury-ability-2',
			name: 'Удар і Втеча',
			description: 'Постійний рух допомагає вам виходити з досяжності після жорсткого нападу.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [FactoryLogic.distance.createMelee()],
			target: 'Одна істота або предмет',
			cost: 'signature',
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Might],
						tier1: '2 + С ушкоджень',
						tier2: '5 + С ушкоджень',
						tier3: '7 + С ушкоджень; A < [сильний], сповільнений (рят. кидок закінчує)'
					})
				),
				FactoryLogic.createAbilitySectionText('Ви можете зміститися на 1 клітину.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'fury-ability-3',
			name: 'Проколотий!',
			description: 'Ви нанизуєте ворога, як кабана на шампур.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [FactoryLogic.distance.createMelee()],
			target: 'Одна істота вашого розміру або менша',
			cost: 'signature',
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Might],
						tier1: '2 + С ушкоджень; С < [слабкий], схоплений',
						tier2: '5 + С ушкоджень; С < [середній], схоплений',
						tier3: '7 + С ушкоджень; С < [сильний], схоплений'
					})
				)
			]
		}),
		FactoryLogic.createAbility({
			id: 'fury-ability-4',
			name: 'До Смерті!',
			description: 'Ваша безрозсудна атака робить вас тактично вразливим.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [FactoryLogic.distance.createMelee()],
			target: 'Одна істота або предмет',
			cost: 'signature',
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Might],
						tier1: '3 + С ушкоджень',
						tier2: '6 + С ушкоджень',
						tier3: '9 + С ушкоджень'
					})
				),
				FactoryLogic.createAbilitySectionText('Ви отримуєте 2 сплески, і ціль може зробити атаку нагоди проти вас як безкоштовну тригерну дію.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'fury-ability-5',
			name: 'Назад!',
			description: 'Ви рубаєте навколо себе могутньою зброєю, відкидаючи ворогів назад.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Area, AbilityKeyword.Melee, AbilityKeyword.Weapon],
			distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 1 })],
			target: 'Кожен ворог у зоні',
			cost: 3,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Might],
						tier1: '5 ушкоджень',
						tier2: '8 ушкоджень; відштовхнути на 1 клітину',
						tier3: '11 ушкоджень; відштовхнути на 3 клітини'
					})
				)
			]
		}),
		FactoryLogic.createAbility({
			id: 'fury-ability-6',
			name: 'Геть з дороги!',
			description: 'Вороги розчистять вам шлях — хочуть вони того чи ні.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [FactoryLogic.distance.createMelee()],
			target: 'Одна істота',
			cost: 3,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Might],
						tier1: '3 + С ушкоджень; зсунути на 2 клітини',
						tier2: '5 + С ушкоджень; зсунути на 3 клітини',
						tier3: '8 + С ушкоджень; зсунути на 5 клітин'
					})
				),
				FactoryLogic.createAbilitySectionText('Коли ви зсуваєте ціль (slide), ви можете переміститися в будь-яку клітину, яку вона залишає. Якщо ви отримуєте шкоду від атаки нагоди через таке пересування, ціль отримує таку ж шкоду.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'fury-ability-7',
			name: 'Приплив Смерті',
			description: 'Покажіть їм нерозумність шикуватись у ряд перед вами.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Weapon],
			distance: [FactoryLogic.distance.createSelf()],
			target: 'Себе (див. нижче)',
			cost: 3,
			sections: [
				FactoryLogic.createAbilitySectionText('Ви рухаєтесь до своєї швидкості по прямій лінії, і клітини ворогів не вважаються важкою місцевістю для цього руху. Ви можете завершити цей рух у клітині істоти та перемістити її в суміжну незайняту клітину. Ви робите один кидок Сили, що націлений на кожного ворога, простір якого ви проходите.'),
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Might],
						tier1: '2 ушкодження',
						tier2: '3 ушкодження',
						tier3: '5 ушкоджень'
					})
				),
				FactoryLogic.createAbilitySectionText('Остання ціль, якій ви завдаєте шкоди, отримує додаткову шкоду, рівну вашому показнику Сили, за кожну атаку нагоди, яку ви спричиняєте під час руху.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'fury-ability-8',
			name: 'Твої нутрощі — твої сліди!',
			description: 'Їм важко боротися, коли вони зайняті тримати свої нутрощі.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [FactoryLogic.distance.createMelee()],
			target: 'Одна істота або предмет',
			cost: 3,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Might],
						tier1: '3 + С ушкоджень; С < [слабкий], кровотеча (рят. кидок закінчує)',
						tier2: '5 + С ушкоджень; С < [середній], кровотеча (рят. кидок закінчує)',
						tier3: '8 + С ушкоджень; С < [сильний], кровотеча (рят. кидок закінчує)'
					})
				),
				FactoryLogic.createAbilitySectionText('Поки ціль кровоточить таким чином, вона отримує шкоду, рівну вашому показнику Сили, наприкінці ваших ходів.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'fury-ability-9',
			name: 'Кров за кров!',
			description: 'Побачимо, як вони битимуться після того, як ви висмоктали з них кров.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [FactoryLogic.distance.createMelee()],
			target: 'Одна істота або предмет',
			cost: 5,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Might],
						tier1: '4 + С ушкоджень; С < [слабкий], кровотеча та ослаблення (рят. кидок закінчує)',
						tier2: '6 + С ушкоджень; С < [середній], кровотеча та ослаблення (рят. кидок закінчує)',
						tier3: '10 + С ушкоджень; С < [сильний], кровотеча та ослаблення (рят. кидок закінчує)'
					})
				),
				FactoryLogic.createAbilitySectionText('Ви можете завдати собі 1d6 шкоди, щоб завдати додатково 1d6 ушкодження цілі.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'fury-ability-10',
			name: 'Помирися зі своїм богом!',
			description: 'Гнів — це енергія.',
			type: FactoryLogic.type.createManeuver({ free: true }),
			distance: [FactoryLogic.distance.createSelf()],
			target: 'Себе',
			cost: 5,
			sections: [
				FactoryLogic.createAbilitySectionText('Ви отримуєте 1 сплеск, і наступний кидок здібності, який ви зробите цього ходу, автоматично отримує результат рівня 3.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'fury-ability-11',
			name: 'Громовий рев',
			description: 'Ви випускаєте виття, що відкидає ворогів назад.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Area, AbilityKeyword.Melee, AbilityKeyword.Weapon],
			distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Line, value: 5, value2: 1, within: 1 })],
			target: 'Кожен ворог у зоні',
			cost: 5,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Might],
						tier1: '6 ушкоджень; відштовхнути на 2 клітини',
						tier2: '9 ушкоджень; відштовхнути на 4 клітини',
						tier3: '13 ушкоджень; відштовхнути на 6 клітин'
					})
				),
				FactoryLogic.createAbilitySectionText('Цілі переміщуються примусово по одній, починаючи з цілі, найближчої до вас, і можуть бути штовхнуті в інші цілі на тій же лінії.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'fury-ability-12',
			name: 'До самого кінця',
			description: 'Ви віддаєте свою життєву силу, щоб забезпечити загибель ворога.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [FactoryLogic.distance.createMelee()],
			target: 'Одна істота',
			cost: 5,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Might],
						tier1: '7 + С ушкоджень',
						tier2: '11 + С ушкоджень',
						tier3: '16 + С ушкоджень'
					})
				),
				FactoryLogic.createAbilitySectionSpend({
					repeatable: true,
					effect: 'While you are winded, this ability deals an extra 1d6 damage for each ferocity spent. While you are dying, it deals an extra 1d10 damage for each ferocity spent. In either case, you lose 1d6 Stamina after making this strike.'
				})
			]
		}),
		FactoryLogic.createAbility({
			id: 'fury-ability-13',
			name: 'Випущений демон',
			description: 'Супротивники тремтять при погляді на вас.',
			type: FactoryLogic.type.createManeuver(),
			keywords: [AbilityKeyword.Magic],
			distance: [FactoryLogic.distance.createSelf()],
			target: 'Себе',
			cost: 7,
			sections: [
				FactoryLogic.createAbilitySectionText('До кінця зустрічі або поки ви не станете вмираючим, кожен ворог, який починає свій хід поруч з вами і має P < [сильний], стає переляканим до кінця свого ходу.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'fury-ability-14',
			name: 'Стій перед бурею!',
			description: 'Шоковані вашою відвертою жорстокістю, інстинкти ворога беруть гору.',
			type: FactoryLogic.type.createManeuver(),
			keywords: [AbilityKeyword.Magic],
			distance: [FactoryLogic.distance.createSelf()],
			target: 'Себе',
			cost: 7,
			sections: [
				FactoryLogic.createAbilitySectionText('До кінця зустрічі або поки ви не станете вмираючим, кожна істота, якій ви завдаєте удару в ближньому бою і в якої P < [середній], стає спровокованою до кінця її наступного ходу. Додатково, коли ви використовуєте здібність з кидком пошкодження проти ворога, спровокованого вами, здібність завдає додаткову шкоду, рівну двом вашим показникам Сили, і збільшує свою потужність на 1.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'fury-ability-15',
			name: 'Ламач сталі',
			description: 'Подивіться, наскільки марна їхня зброя!',
			type: FactoryLogic.type.createManeuver(),
			keywords: [AbilityKeyword.Magic],
			distance: [FactoryLogic.distance.createSelf()],
			target: 'Себе',
			cost: 7,
			sections: [
				FactoryLogic.createAbilitySectionText('Ви отримуєте 20 тимчасової Витривалості.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'fury-ability-16',
			name: 'Ти вже мертвий',
			description: 'Рубай і відходь.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [FactoryLogic.distance.createMelee()],
			target: 'Одна істота',
			cost: 7,
			sections: [
				FactoryLogic.createAbilitySectionText('Якщо ціль не є лідером або одиничною істотою, вона зводиться до 0 Витривалості наприкінці свого наступного ходу. Якщо ціль є лідером або одиничною істотою, ви отримуєте 3 сплески і можете зробити проти неї безкоштовну ударну дію в ближньому бою.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'fury-ability-17',
			name: 'Ослаблюючий удар',
			description: 'Вам потрібен лише один удар, щоб вивести ціль з ладу.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [FactoryLogic.distance.createMelee()],
			target: 'Одна істота',
			cost: 9,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Might],
						tier1: '10 + С ушкоджень; С < [слабкий], сповільнений (рят. кидок закінчує)',
						tier2: '14 + С ушкоджень; С < [середній], сповільнений (рят. кидок закінчує)',
						tier3: '20 + С ушкоджень; С < [сильний], сповільнений (рят. кидок закінчує)'
					})
				),
				FactoryLogic.createAbilitySectionText('Поки ціль сповільнена таким чином, вона отримує 1 шкоду за кожну клітину, яку вона рухається, включаючи примусове переміщення.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'fury-ability-18',
			name: 'Мій хід!',
			description: 'Ви швидко контратакуєте ворога.',
			type: FactoryLogic.type.createTrigger('Істота спричиняє, що ви стаєте захеканим або вмираючим, або завдає вам шкоди, поки ви захекані або вмираючі.'),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [FactoryLogic.distance.createMelee()],
			target: 'Ініціююча істота',
			cost: 9,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Might],
						tier1: '6 + С ушкоджень;',
						tier2: '9 + С ушкоджень;',
						tier3: '13 + С ушкоджень;'
					})
				),
				FactoryLogic.createAbilitySectionText('Ви можете витратити відновлення (Recovery).')
			]
		}),
		FactoryLogic.createAbility({
			id: 'fury-ability-19',
			name: 'Буря відскоку',
			description: 'Ви кидаєте ворогів, немов іграшки.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [FactoryLogic.distance.createMelee()],
			target: 'Дві істоти або предмети',
			cost: 9,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Might],
						tier1: '9 + С ушкоджень; відштовхнути на 3 клітини',
						tier2: '14 + С ушкоджень; відштовхнути на 5 клітин',
						tier3: '19 + С ушкоджень; відштовхнути на 7 клітин'
					})
				),
				FactoryLogic.createAbilitySectionText('Коли ціль закінчує примусове переміщення, стикаючись із істотою або предметом, вона отримує звичну шкоду, а потім відштовхується на залишкову відстань від істоти або предмета в напрямку, з якого прийшла. Якщо примусове переміщення продовжується, цей ефект повторюється при кожному новому зіткненні цілі з іншою істотою або предметом.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'fury-ability-20',
			name: 'У камінь!',
			description: 'Ви спрямовуєте Первісний Хаос у удари, що перетворюють ворога на камінь… буквально.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Magic, AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [FactoryLogic.distance.createMelee()],
			target: 'Одна істота',
			cost: 9,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Might],
						tier1: '9 + С ушкоджень; С < [слабкий], сповільнений (рят. кидок закінчує)',
						tier2: '13 + С ушкоджень; С < [середній], сповільнений (рят. кидок закінчує)',
						tier3: '18 + С ушкоджень; С < [сильний], скований (рят. кидок закінчує)'
					})
				),
				FactoryLogic.createAbilitySectionText('Поки ціль сповільнена таким чином, будь-який інший ефект, що мав би зробити ціль сповільненою, натомість накладає на неї стан скуття (restrained) цим ефектом. Додатково, істота, яка провалює рятівний кидок під час скуття таким чином, стає застиглою (петріфікованою) доти, поки їй не нададуть надприродне лікування або ви не вирішите зняти ефект (дії не потрібно).')
			]
		}),
		FactoryLogic.createAbility({
			id: 'fury-ability-21',
			name: 'Елементальна лють',
			description: 'Ваша первісна енергія забезпечує миттєву відплату.',
			type: FactoryLogic.type.createManeuver(),
			keywords: [AbilityKeyword.Magic],
			distance: [FactoryLogic.distance.createSelf()],
			target: 'Себе',
			cost: 11,
			sections: [
				FactoryLogic.createAbilitySectionText('Ви отримуєте 10 тимчасової Витривалості. Додатково оберіть один із типів ушкоджень: кислотний, холодний, корупційний, вогняний, блискавичний, отруйний або звуковий. До кінця зустрічі або поки ви не станете вмираючим, коли ворог завдає вам шкоди, він отримує 10 ушкоджень обраного типу. Якщо це ушкодження зводить ворога до 0 Витривалості, ви отримуєте 10 тимчасової Витривалості.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'fury-ability-22',
			name: 'Надмірний удар',
			description: 'Ви атакуєте так, щоб жодна нанесена шкода не пропадала дарма.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Magic, AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [FactoryLogic.distance.createMelee()],
			target: 'Одна істота',
			cost: 11,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Might],
						tier1: '6 + С ушкоджень',
						tier2: '10 + С ушкоджень',
						tier3: '14 + С ушкоджень'
					})
				),
				FactoryLogic.createAbilitySectionText('Якщо ціль є міньйоном або знаходиться в стані захеканості (winded), але не є лідером чи одиничною істотою, вона зводиться до 0 Витривалості перед тим, як завдається шкода цієї здібності. Якщо ціль вбита цим ушкодженням, ви можете перенаправити будь-яку надлишкову шкоду на іншу істоту в радіусі 5 клітин від цілі.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'fury-ability-23',
			name: 'Первісний гнів',
			description: 'Ваша лють виявляється як первісна сила.',
			type: FactoryLogic.type.createManeuver(),
			keywords: [AbilityKeyword.Magic],
			distance: [FactoryLogic.distance.createSelf()],
			target: 'Себе',
			cost: 11,
			sections: [
				FactoryLogic.createAbilitySectionText('Оберіть кислотний, холодний, корупційний, вогняний, блискавичний, отруйний або звуковий тип ушкоджень. До кінця зустрічі або поки ви не станете вмираючим, ви можете обрати одну ціль будь-якої здібності, яку ви використовуєте; ця ціль отримує додаткові 15 ушкоджень обраного типу. Додатково, коли ви отримуєте лють від отриманої шкоди, джерело цієї шкоди отримує 5 ушкоджень обраного типу.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'fury-ability-24',
			name: 'Безжальна смерть',
			description: 'Ви не уникнете своєї долі.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Magic, AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [FactoryLogic.distance.createSelf()],
			target: 'Self; see below',
			cost: 11,
			sections: [
				FactoryLogic.createAbilitySectionText('Ви зсуваєтесь на відстань до своєї швидкості. Кожен ворог, до якого ви підходите впритул під час цього руху, отримує ушкодження, рівне двом вашим показникам Сили. Потім зробіть один кидок Сили, що націлений на кожного ворога, до якого ви наблизились під час цього зсуву. Ви отримуєте 1 одиницю люті за кожну ціль, яка помирає внаслідок цієї здібності (максимум 11 люті).'),
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Might],
						tier1: 'Будь-яка ціль, чия Витривалість дорівнює або менша за 8, гине.',
						tier2: 'Будь-яка ціль, чия Витривалість дорівнює або менша за 11, гине.',
						tier3: 'Будь-яка ціль, чия Витривалість дорівнює або менша за 17, гине.'
					})
				)
			]
		})
	],
	subclasses: [
		berserker,
		reaver,
		stormwight
	],
	level: 1,
	characteristics: []
};
