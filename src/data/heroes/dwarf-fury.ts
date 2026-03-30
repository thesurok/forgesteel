import { Hero } from '@/models/hero';

export const dwarfFury = {
	id: 'ojZeuF7Jjqw66Di1',
	name: 'Кет',
	picture: null,
	folder: '',
	settingIDs: [
		'',
		'orden'
	],
	ancestry: {
		id: 'ancestry-dwarf',
		name: 'Гном',
		description: 'Гноми, володіючи силою, що суперечить їхньому вигляду, мають плоть, просякнуту каменем — силіко-органічний гібрид, що робить їх фізично щільнішими за інших гуманоїдів. Вони відомі в Ордені як кмітливі інженери й технологи завдяки знанням, успадкованим від старших братів — давно вимерлих сталевих гномів.',
		features: [
			{
				id: 'dwarf-feature-1',
				name: 'Рунне різьблення',
				description: '\nВи можете вирізати руну на своїй шкірі за 10 хвилин безперервної роботи — руна активується магією в вашому тілі. Руна визначає отримувану користь; оберіть одну з наведених:\n\n* **Виявлення**: Виберіть конкретний тип істоти (наприклад, “гобліни” або “люди”) або об’єкт (наприклад, “коштовні камені” або “зілля”). Ваша руна м’яко світиться, коли ви перебуваєте в межах 20 клітин від будь-якої істоти або об’єкта цього типу, навіть якщо у вас немає лінії ефекту. Ви можете змінити тип як маневр.\n* **Світло**: Ваша шкіра випромінює світло на 10 клітин. Ви можете вмикати і вимикати це як маневр.\n* **Голос**: Як маневр ви можете телепатично спілкуватися з охочою істотою, яку ви раніше зустрічали і яка перебуває в межах 1 милі. Ви повинні знати імʼя істоти, і вона має говорити й розуміти мову, яку ви знаєте. Ви й істота можете відповідати одне одному як при усному діалозі. Ви можете змінити руну, щоб спілкуватися з іншою істотою.\n\nВи можете мати лише одну активну руну і змінювати або видаляти руну за 10 хвилин безперервної роботи.',
				type: 'Текст',
				data: null
			},
			{
				id: 'dwarf-feature-2',
				name: 'Гномські риси',
				description: '',
				type: 'Вибір',
				data: {
					options: [
						{
							feature: {
								id: 'dwarf-feature-2-1',
								name: 'Приземлений',
								description: 'Ваш важкий камʼяний корпус і звʼязок із землею ускладнюють іншим пересувати вас.',
								type: 'Бонус',
								data: {
									field: 'Непорушність',
									value: 1,
									valueCharacteristics: [],
									valueCharacteristicMultiplier: 1,
									valuePerLevel: 0,
									valuePerEchelon: 0
								}
							},
							value: 1
						},
						{
							feature: {
								id: 'dwarf-feature-2-2',
								name: 'Непохитний',
								description: 'Ваше тіло створене, щоб витримувати удари ворогів. Ваш показник Сили вважається на 1 вищим при протистоянні потужностям, і ви отримуєте перевагу на тестах Сили, коли потрібно протистояти впливам середовища або рисам чи здібностям істоти.',
								type: 'Текст',
								data: null
							},
							value: 1
						},
						{
							feature: {
								id: 'dwarf-feature-2-3',
								name: 'Співець Каменю',
								description: 'У вас є магічний звʼязок із землею. Коли ви проводите 1 годину співу без перерв, ви можете перетворити будь-який непрацюваний звичайний камінь в межах 3 клітин. Ви не можете знищити цей камінь, але можете перемістити кожну його клітину на відстань до 3 клітин від вас, відкидаючи вбік, щоб викопати яму, або нарощуючи, щоб звести стіну.',
								type: 'Текст',
								data: null
							},
							value: 1
						},
						{
							feature: {
								id: 'dwarf-feature-2-4',
								name: 'Надзвичайна витривалість',
								description: 'Ваша тверда конституція заважає вам втрачати силу.',
								type: 'Імунітет до станів',
								data: {
									conditions: [
										'Weakened'
									]
								}
							},
							value: 2
						},
						{
							feature: {
								id: 'dwarf-feature-2-5',
								name: 'Іскри зі шкіри',
								description: 'Ваша камʼяна шкіра надає вам потужний захист.',
								type: 'Бонус',
								data: {
									field: 'Витривалість',
									value: 0,
									valueCharacteristics: [],
									valueCharacteristicMultiplier: 1,
									valuePerLevel: 0,
									valuePerEchelon: 6
								}
							},
							value: 2
						}
					],
					count: 'ancestry',
					selected: [
						{
							id: 'dwarf-feature-2-1',
							name: 'Приземлений',
							description: 'Ваш важкий камʼяний корпус і звʼязок із землею ускладнюють іншим пересувати вас.',
							type: 'Бонус',
							data: {
								field: 'Непорушність',
								value: 1,
								valueCharacteristics: [],
								valueCharacteristicMultiplier: 1,
								valuePerLevel: 0,
								valuePerEchelon: 0
							}
						},
						{
							id: 'dwarf-feature-2-5',
							name: 'Іскри зі шкіри',
							description: 'Ваша камʼяна шкіра надає вам потужний захист.',
							type: 'Бонус',
							data: {
								field: 'Витривалість',
								value: 0,
								valueCharacteristics: [],
								valueCharacteristicMultiplier: 1,
								valuePerLevel: 0,
								valuePerEchelon: 6
							}
						}
					]
				}
			}
		],
		ancestryPoints: 3
	},
	culture: {
		id: 'culture-dwarf',
		name: 'Гном',
		description: 'Відлюдний, бюрократичний, творчий.',
		type: 'Походження',
		language: {
			id: 'culture-language',
			name: 'Мова',
			description: '',
			type: 'Вибір мови',
			data: {
				options: [],
				count: 1,
				selected: ['Заліак (Zaliac)']
			}
		},
		languages: [],
		environment: {
			id: 'env-secluded',
			name: 'Усамітнений',
			description: 'Відлюдний культурний осередок базується в одному відносно тісному місці — будівлі, печері тощо — і рідко взаємодіє з іншими культурами. Такі місця часто бувають монастирями, замками або тюрмами. Люди в відлюдній культурі мають мало причин покидати свій дім або взаємодіяти з зовнішнім світом, хоча можуть усвідомлювати ті культури та події поза своєю анклавою. Коли люди живуть разом у тісноті, вони зазвичай вчаться уживатися. Вони часто проводять багато часу в навчанні або самоспогляданні, бо в усамітненні небагато іншого.',
			type: 'Вибір навички',
			data: {
				options: [],
				listOptions: [
					'Міжособистісні',
					'Знання'
				],
				count: 1,
				selected: [
					'Вихваляння'
				]
			}
		},
		organization: {
			id: 'org-bureaucratic',
			name: 'Бюрократичний',
			description: 'Бюрократичні культури просякнуті офіційним керівництвом і формально зафіксованими законами. Члени такої культури часто ранжуються за владою відповідно до цих норм, і невелика група людей може мати реальну владу правити згідно з народженням, виборами або іншим офіційним стандартом. Прикладами є гільдії з гільдмастером і статутом, феодальні володарі з підлеглими лицарями чи мілітаризовані суспільства з жорсткими рангами й правилами. Ті, хто процвітає в бюрократичних культурах, не просто слідують правилам — вони використовують їх на свою користь, змінюючи або інтерпретуючи політики, щоб просунути інтереси. Налагодження зв’язків з творцями законів часто ключове. Інші можуть спеціалізуватися на обході суворих регуляцій, не потрапляючи у пастку.',
			type: 'Вибір навички',
			data: {
				options: [],
				listOptions: [
					'Міжособистісні',
					'Інтриги'
				],
				count: 1,
				selected: [
					'Залякування'
				]
			}
		},
		upbringing: {
			id: 'up-creative',
			name: 'Творчий',
			description: 'Герой із творчим вихованням виріс серед людей, які створюють мистецтво або інші вироби, достатньо цінні для торгівлі. Креативна культура може давати витвори мистецтва, як-от танець, музика чи скульптура, або практичні товари — вози, зброю, інструменти чи будівлі. Люди в таких культурах цінують якісне ремесло та увагу до деталей.',
			type: 'Вибір навички',
			data: {
				options: [
					'Музика',
					'Виступ'
				],
				listOptions: [
					'Ремесло'
				],
				count: 1,
				selected: [
					'Ковальство'
				]
			}
		}
	},
	class: {
		id: 'class-fury',
		name: 'Фурія',
		description: '\nВи не приборкуєте жар бою всередині себе. Ви його звільняєте! Досвід у дику природі навчив вас таємниць хижаків, і тепер, як яструб, пантера чи вовк, ви спрямовуєте невгамовну лють у бойове мистецтво. Первісний Хаос — ваш союзник. Нехай інші використовують вишуканість, щоб прибирати залишки після вас.\n\nЯк фурія, ви руйнуєте ворогів приголомшливою силою, кидаєте себе й супротивників по полю бою і стаєте сильнішими з ростом вашої люті. Природа не знає поняття справедливості — і ви також.',
		type: 'standard',
		subclassName: 'Первісний аспект',
		subclassCount: 1,
		primaryCharacteristicsOptions: [
			[
				'Might',
				'Ловкість'
			]
		],
		primaryCharacteristics: [
			'Might',
			'Ловкість'
		],
		featuresByLevel: [
			{
				level: 1,
				features: [
					{
						id: 'fury-stamina',
						name: 'Витривалість',
						description: '',
						type: 'Бонус',
						data: {
							field: 'Витривалість',
							value: 21,
							valueCharacteristics: [],
							valueCharacteristicMultiplier: 1,
							valuePerLevel: 9,
							valuePerEchelon: 0
						}
					},
					{
						id: 'fury-recoveries',
						name: 'Відновлення',
						description: '',
						type: 'Бонус',
						data: {
							field: 'Recoveries',
							value: 10,
							valueCharacteristics: [],
							valueCharacteristicMultiplier: 1,
							valuePerLevel: 0,
							valuePerEchelon: 0
						}
					},
					{
						id: 'fury-resource',
						name: 'Лють',
						description: '',
						type: 'Героїчний ресурс',
						data: {
							type: 'heroic',
							gains: [
								{
									tag: 'start',
									trigger: 'Start of your turn',
									value: '1d3'
								},
								{
									tag: 'take-damage',
									trigger: 'The first time each combat round that you take damage',
									value: '1'
								},
								{
									tag: 'winded',
									trigger: 'The first time you become winded or are dying in an encounter',
									value: '1d3'
								}
							],
							details: '',
							canBeNegative: false,
							value: 0
						}
					},
					{
						id: 'fury-1-1',
						name: 'Навичка: Знання',
						description: '',
						type: 'Вибір навички',
						data: {
							options: [],
							listOptions: [
								'Знання'
							],
							count: 1,
							selected: [
								'Природа'
							]
						}
					},
					{
						id: 'fury-1-2',
						name: 'Навички: Дослідження / Інтрига',
						description: '',
						type: 'Вибір навички',
						data: {
							options: [],
							listOptions: [
								'Дослідження',
								'Інтриги'
							],
							count: 2,
							selected: [
								'Стрибки',
								'Навігація'
							]
						}
					},
					{
						id: 'fury-1-4',
						name: 'Могутні стрибки',
						description: 'Ви не можете отримати результат нижче за рівень 2 у будь-якому тесті Сили, що виконується для стрибка.',
						type: 'Текст',
						data: null
					},
					{
						id: 'fury-1-5',
						name: 'Здібність',
						description: '',
						type: 'Класова здібність',
						data: {
							cost: 'signature',
							source: {
								fromClassAbilities: true,
								fromSubclassAbilities: true,
								fromClassLevels: false,
								fromSubclassLevels: false
							},
							minLevel: 1,
							count: 1,
							selectedIDs: [
								'fury-ability-1'
							]
						}
					},
					{
						id: 'fury-1-6',
						name: 'Здібність',
						description: '',
						type: 'Класова здібність',
						data: {
							cost: 3,
							source: {
								fromClassAbilities: true,
								fromSubclassAbilities: true,
								fromClassLevels: false,
								fromSubclassLevels: false
							},
							minLevel: 1,
							count: 1,
							selectedIDs: [
								'fury-ability-5'
							]
						}
					},
					{
						id: 'fury-1-7',
						name: 'Здібність',
						description: '',
						type: 'Класова здібність',
						data: {
							cost: 5,
							source: {
								fromClassAbilities: true,
								fromSubclassAbilities: true,
								fromClassLevels: false,
								fromSubclassLevels: false
							},
							minLevel: 1,
							count: 1,
							selectedIDs: [
								'fury-ability-9'
							]
						}
					}
				]
			},
			{
				level: 2,
				features: [
					{
						id: 'fury-2-1',
						name: 'Перк: Ремесло / Дослідження / Інтрига',
						description: '',
						type: 'Перевага',
						data: {
							lists: [
								'Ремесло',
								'Дослідження',
								'Інтриги'
							],
							count: 1,
							selected: []
						}
					}
				]
			},
			{
				level: 3,
				features: [
					{
						id: 'fury-3-1',
						name: 'Здібність',
						description: '',
						type: 'Класова здібність',
						data: {
							cost: 7,
							source: {
								fromClassAbilities: true,
								fromSubclassAbilities: true,
								fromClassLevels: false,
								fromSubclassLevels: false
							},
							minLevel: 1,
							count: 1,
							selectedIDs: []
						}
					}
				]
			},
			{
				level: 4,
				features: [
					{
						id: 'fury-4-1a',
						name: 'Сила',
						description: '',
						type: 'Бонус характеристики',
						data: {
							characteristic: 'Might',
							value: 1
						}
					},
					{
						id: 'fury-4-1b',
						name: 'Ловкість',
						description: '',
						type: 'Бонус характеристики',
						data: {
							characteristic: 'Ловкість',
							value: 1
						}
					},
					{
						id: 'fury-4-2',
						name: 'Руйнівна лють',
						description: '',
						type: 'Отримання героїчного ресурсу',
						data: {
							tag: 'take-damage 2',
							trigger: 'The first time each combat round that you take damage',
							value: '2',
							replacesTags: [
								'take-damage'
							]
						}
					},
					{
						id: 'fury-4-3',
						name: 'Перк',
						description: '',
						type: 'Перевага',
						data: {
							lists: [
								'Ремесло',
								'Дослідження',
								'Міжособистісні',
								'Інтриги',
								'Знання',
								'Надприродне'
							],
							count: 1,
							selected: []
						}
					},
					{
						id: 'fury-4-4',
						name: 'Первісне налаштування',
						description: 'Коли ваша лють проявляє елементарні сили, створені Первісним Хаосом, ви відчуваєте, як елементальна сила взаємодіє з оточенням. Ви автоматично визначаєте, чи має якась істота в межах 10 клітин імунітет або слабкість до кислотного, холодного, корупційного, вогняного, блискавичного, отруйного або звукового ушкодження, дізнаючись, чи є у неї імунітет або слабкість, значення цього імунітету чи слабкості та конкретний тип ушкодження. Додатково ви автоматично відчуваєте будь-яке джерело одного з цих типів ушкоджень в межах 10 клітин, наприклад вогонь або джерело елементальної сили.',
						type: 'Текст',
						data: null
					},
					{
						id: 'fury-4-5',
						name: 'Первісний Удар',
						description: 'Ви можете проявити вашу лють безпосередньо як елементальну силу, створену Первісним Хаосом. Як частину будь-якого удару, ви можете витратити 1 одиницю люті, щоб отримати 1 сплеск, який повинен бути використаний для цього удару. Додаткова шкода від сплеску може бути кислотною, холодною, корупційною, вогняною, блискавичною, отруйною або звуковою (на ваш вибір).',
						type: 'Текст',
						data: null
					},
					{
						id: 'fury-4-6',
						name: 'Навичка',
						description: '',
						type: 'Вибір навички',
						data: {
							options: [],
							listOptions: [],
							count: 1,
							selected: []
						}
					}
				]
			},
			{
				level: 5,
				features: [
					{
						id: 'fury-5-1',
						name: 'Здібність',
						description: '',
						type: 'Класова здібність',
						data: {
							cost: 9,
							source: {
								fromClassAbilities: true,
								fromSubclassAbilities: true,
								fromClassLevels: false,
								fromSubclassLevels: false
							},
							minLevel: 1,
							count: 1,
							selectedIDs: []
						}
					}
				]
			},
			{
				level: 6,
				features: [
					{
						id: 'fury-6-1',
						name: 'Руйнівник Первісного Хаосу',
						description: '\nКоли ваш зв\'язок із силою Первісного Хаосу стає все сильнішим, ви автоматично відчуваєте будь-яких елементалів або джерела магічної елементальної енергії, такі як озеро лави чи водойма, що перетинається з Квінтессенцією, в межах 1 милі від вас.\n\nДодатково, ви можете говорити з елементалями, і коли ви ведете переговори з елементалем, ви вважаєте свою Відомість (Renown) на 1 вищою, ніж зазвичай. Це сумується зі збільшенням вашої ефективної Відомості, яке надається рисою «Рицар природи» (див. Риси 3-го рівня). Коли будь-який елементаль вперше усвідомлює вашу присутність у бою, якщо у нього П < [середній], він лякається вас (рятунок закінчує).',
						type: 'Текст',
						data: null
					},
					{
						id: 'fury-6-2',
						name: 'Первісний Портал',
						description: '\nЯк головну дію ви можете торкнутися магічного джерела елементальної сили і використати його, щоб створити портал до Квінтессенції. Потім ви можете використати головну дію, щоб телепортувати себе та будь-яких охочих створінь в межах 10 клітин від вас через портал на безпечний острів у Квінтессенції або назад. Ви можете підтримувати кількість порталів, рівну вашому показнику Сили (Might), кожен з яких веде на той самий безпечний острів у Квінтессенції. Якщо портал у вашій мережі знищено, він більше не є частиною мережі. Ви можете видалити портал із вашої мережі незалежно від відстані до нього, включно через різні світи (без дій).\n\n(Дослідження Квінтессенції можливе з вашого острова, проте постійна безпека не гарантована.)',
						type: 'Текст',
						data: null
					},
					{
						id: 'fury-6-3',
						name: 'Перк: Ремесло / Дослідження / Інтрига',
						description: '',
						type: 'Перевага',
						data: {
							lists: [
								'Ремесло',
								'Дослідження',
								'Інтриги'
							],
							count: 1,
							selected: []
						}
					}
				]
			},
			{
				level: 7,
				features: [
					{
						id: 'fury-7-1a',
						name: 'Сила',
						description: '',
						type: 'Бонус характеристики',
						data: {
							characteristic: 'Might',
							value: 1
						}
					},
					{
						id: 'fury-7-1b',
						name: 'Ловкість',
						description: '',
						type: 'Бонус характеристики',
						data: {
							characteristic: 'Ловкість',
							value: 1
						}
					},
					{
						id: 'fury-7-1c',
						name: 'Reason',
						description: '',
						type: 'Бонус характеристики',
						data: {
							characteristic: 'Reason',
							value: 1
						}
					},
					{
						id: 'fury-7-1d',
						name: 'Intuition',
						description: '',
						type: 'Бонус характеристики',
						data: {
							characteristic: 'Intuition',
							value: 1
						}
					},
					{
						id: 'fury-7-1e',
						name: 'Presence',
						description: '',
						type: 'Бонус характеристики',
						data: {
							characteristic: 'Presence',
							value: 1
						}
					},
					{
						id: 'fury-7-2',
						name: 'Elemental Form',
						description: '\nУ вас проявляються ще сильніші ознаки того, як сила Первісного Хаосу тече в вашому середині. Коли ви відчуваєте сильні емоції або збільшуєте свою лють, навколо вас кружляють елементальні частинки, налаштовані на ваш настрій, і ваша шкіра змінює вигляд, щоб відобразити обраний вами елемент.\n\nДодатково, якщо ви берсеркер або рівер, ви маєте імунітет до кислотного, холодного, корупційного, вогняного, блискавичного, отруйного та звукового ушкоджень, рівний вашому показнику Сили. Якщо ви штормовий воїн (stormwight), ваш імунітет до типу ушкоджень від риси «Первісний шторм» дорівнює двом показникам вашої Сили.',
						type: 'Текст',
						data: null
					},
					{
						id: 'fury-7-3',
						name: 'Greater Ferocity',
						description: '',
						type: 'Отримання героїчного ресурсу',
						data: {
							tag: 'start 2',
							trigger: 'Start of your turn',
							value: '1d3 + 1',
							replacesTags: [
								'start'
							]
						}
					},
					{
						id: 'fury-7-4',
						name: 'Skill',
						description: '',
						type: 'Вибір навички',
						data: {
							options: [],
							listOptions: [],
							count: 1,
							selected: []
						}
					}
				]
			},
			{
				level: 8,
				features: [
					{
						id: 'fury-8-1',
						name: 'Perk',
						description: '',
						type: 'Перевага',
						data: {
							lists: [
								'Ремесло',
								'Дослідження',
								'Міжособистісні',
								'Інтриги',
								'Знання',
								'Надприродне'
							],
							count: 1,
							selected: []
						}
					},
					{
						id: 'fury-8-2',
						name: 'Ability',
						description: '',
						type: 'Класова здібність',
						data: {
							cost: 11,
							source: {
								fromClassAbilities: true,
								fromSubclassAbilities: true,
								fromClassLevels: false,
								fromSubclassLevels: false
							},
							minLevel: 1,
							count: 1,
							selectedIDs: []
						}
					}
				]
			},
			{
				level: 9,
				features: [
					{
						id: 'fury-9-1',
						name: 'Harbinger of the Primordial Chaos',
						description: 'Ви можете створити тимчасове джерело елементальної сили під час перерви. Це джерело триває 24 години після створення і може бути використане для створення порталу до Квінтессенції за допомогою вашої риси «Первісний Портал». Якщо ви це зробите, джерело елементальної сили зберігається доти, доки портал підтримується у вашій мережі.',
						type: 'Текст',
						data: null
					}
				]
			},
			{
				level: 10,
				features: [
					{
						id: 'fury-10-1',
						name: 'Chaos Incarnate',
						description: '\nВаше володіння елементальними силами захищає й підбадьорює вас. Якщо ви берсеркер або рівер, ви маєте імунітет до кислотного, холодного, корупційного, вогняного, блискавичного, отруйного та звукового ушкоджень у розмірі двох показників вашої Сили. Якщо ви штормовий воїн, ваш імунітет від риси «Первісний шторм» збільшується до трьох показників Сили.\n\nКоли будь-який елементаль або інша істота, здібності якої завдають кислотного, холодного, корупційного, вогняного, блискавичного, отруйного або звукового ушкодження, вперше помічає вас у бою, якщо її П < [сильний], вона лякається вас (ритуал рятування закінчує дію).\n\nДодатково, коли ви використовуєте «Первісний удар» (Primordial Strike), ви можете витратити до 3 одиниць люті, отримуючи по 1 сплеску за кожну витрачену одиницю, які можна використати для цього удару.',
						type: 'Текст',
						data: null
					},
					{
						id: 'fury-10-2a',
						name: 'Might',
						description: '',
						type: 'Бонус характеристики',
						data: {
							characteristic: 'Might',
							value: 1
						}
					},
					{
						id: 'fury-10-2b',
						name: 'Ловкість',
						description: '',
						type: 'Бонус характеристики',
						data: {
							characteristic: 'Ловкість',
							value: 1
						}
					},
					{
						id: 'fury-10-3',
						name: 'Perk',
						description: '',
						type: 'Перевага',
						data: {
							lists: [
								'Ремесло',
								'Дослідження',
								'Міжособистісні',
								'Інтриги',
								'Знання',
								'Надприродне'
							],
							count: 1,
							selected: []
						}
					},
					{
						id: 'fury-10-4',
						name: 'Primordial Ferocity',
						description: '',
						type: 'Отримання героїчного ресурсу',
						data: {
							tag: 'take-damage 3',
							trigger: 'The first time each combat round that you take damage',
							value: '3',
							replacesTags: [
								'take-damage',
								'take-damage 2'
							]
						}
					},
					{
						id: 'fury-10-5',
						name: 'Primordial Power',
						description: '\nВи можете витратити будь-яку кількість первісної сили як вільний маневр, завершуючи один ефект на собі за кожну витрачену одиницю первісної сили.\n\nВи також можете витратити 3 одиниці первісної сили, щоб створити портал до Квінтессенції без потреби у джерелі елементальної сили.\n\nПервісна сила зберігається, доки ви її не витратите.',
						type: 'Героїчний ресурс',
						data: {
							type: 'epic',
							gains: [
								{
									tag: '',
									trigger: 'Finish a respite',
									value: 'Отримання досвіду'
								}
							],
							details: '',
							canBeNegative: false,
							value: 0
						}
					},
					{
						id: 'fury-10-6',
						name: 'Skill',
						description: '',
						type: 'Вибір навички',
						data: {
							options: [],
							listOptions: [],
							count: 1,
							selected: []
						}
					}
				]
			}
		],
		abilities: [
			{
				id: 'fury-ability-1',
				name: 'Сокрушальний Удар',
				description: 'Могутній удар вашої зброї відкидає ворогів назад.',
				type: {
					usage: 'Основна дія',
					free: false,
					trigger: '',
					time: '',
					qualifiers: [],
					freeStrike: false
				},
				keywords: [
					'Ближній бій',
					'Удар',
					'Зброя'
				],
				distance: [
					{
						type: 'Ближній бій',
						value: 1,
						value2: 0,
						within: 0,
						special: '',
						qualifier: ''
					}
				],
				target: 'Одна істота або предмет',
				cost: 'signature',
				repeatable: false,
				minLevel: 1,
				sections: [
					{
						type: 'roll',
						roll: {
							characteristic: [
								'Might'
							],
							bonus: 0,
							tier1: '3 + С пошкодження; відкинути 1',
							tier2: '6 + С пошкодження; відкинути 2',
							tier3: '9 + С пошкодження; відкинути 4'
						}
					}
				],
				preEffect: '',
				powerRoll: null,
				test: null,
				effect: '',
				strained: '',
				alternateEffects: [],
				spend: [],
				persistence: []
			},
			{
				id: 'fury-ability-2',
				name: 'Удар і Втеча',
				description: 'Тримання постійного руху допомагає вам вирватися з досяжності після жорстокого нападу.',
				type: {
					usage: 'Основна дія',
					free: false,
					trigger: '',
					time: '',
					qualifiers: [],
					freeStrike: false
				},
				keywords: [
					'Ближній бій',
					'Удар',
					'Зброя'
				],
				distance: [
					{
						type: 'Ближній бій',
						value: 1,
						value2: 0,
						within: 0,
						special: '',
						qualifier: ''
					}
				],
				target: 'Одна істота або предмет',
				cost: 'signature',
				repeatable: false,
				minLevel: 1,
				sections: [
					{
						type: 'roll',
						roll: {
							characteristic: [
								'Might'
							],
							bonus: 0,
							tier1: '2 + С пошкодження',
							tier2: '5 + С пошкодження',
							tier3: '7 + С пошкодження; Л < [сильний], сповільнений (рятівний кидок закінчує дію)'
						}
					},
					{
						type: 'Текст',
						text: 'Ви можете зсунутись на 1 клітину.'
					}
				],
				preEffect: '',
				powerRoll: null,
				test: null,
				effect: '',
				strained: '',
				alternateEffects: [],
				spend: [],
				persistence: []
			},
			{
				id: 'fury-ability-3',
				name: 'Насаджено!',
				description: 'Ви насаджуєте ворога, немов на вертел.',
				type: {
					usage: 'Основна дія',
					free: false,
					trigger: '',
					time: '',
					qualifiers: [],
					freeStrike: false
				},
				keywords: [
					'Ближній бій',
					'Удар',
					'Зброя'
				],
				distance: [
					{
						type: 'Ближній бій',
						value: 1,
						value2: 0,
						within: 0,
						special: '',
						qualifier: ''
					}
				],
				target: 'Одна істота вашого розміру або менша',
				cost: 'signature',
				repeatable: false,
				minLevel: 1,
				sections: [
					{
						type: 'roll',
						roll: {
							characteristic: [
								'Might'
							],
							bonus: 0,
							tier1: '2 + С пошкодження; С < [слабкий], схоплений',
							tier2: '5 + С пошкодження; С < [середній], схоплений',
							tier3: '7 + С пошкодження; С < [сильний], схоплений'
						}
					}
				],
				preEffect: '',
				powerRoll: null,
				test: null,
				effect: '',
				strained: '',
				alternateEffects: [],
				spend: [],
				persistence: []
			},
			{
				id: 'fury-ability-4',
				name: 'До Смерті!',
				description: 'Ваша безрозсудна атака залишає вас тактично вразливим.',
				type: {
					usage: 'Основна дія',
					free: false,
					trigger: '',
					time: '',
					qualifiers: [],
					freeStrike: false
				},
				keywords: [
					'Ближній бій',
					'Удар',
					'Зброя'
				],
				distance: [
					{
						type: 'Ближній бій',
						value: 1,
						value2: 0,
						within: 0,
						special: '',
						qualifier: ''
					}
				],
				target: 'Одна істота або предмет',
				cost: 'signature',
				repeatable: false,
				minLevel: 1,
				sections: [
					{
						type: 'roll',
						roll: {
							characteristic: [
								'Might'
							],
							bonus: 0,
							tier1: '3 + С пошкодження',
							tier2: '6 + С пошкодження',
							tier3: '9 + С пошкодження'
						}
					},
					{
						type: 'Текст',
						text: 'Ви отримуєте 2 сплески, і ціль може виконати можливу атаку проти вас як безкоштовну спрацьовану дію.'
					}
				],
				preEffect: '',
				powerRoll: null,
				test: null,
				effect: '',
				strained: '',
				alternateEffects: [],
				spend: [],
				persistence: []
			},
			{
				id: 'fury-ability-5',
				name: 'Назад!',
				description: 'Ви розсікаєте навколо себе могутньою зброєю, відкидаючи ворогів назад.',
				type: {
					usage: 'Основна дія',
					free: false,
					trigger: '',
					time: '',
					qualifiers: [],
					freeStrike: false
				},
				keywords: [
					'Area',
					'Ближній бій',
					'Зброя'
				],
				distance: [
					{
						type: 'Burst',
						value: 1,
						value2: 0,
						within: 0,
						special: '',
						qualifier: ''
					}
				],
				target: 'Кожен ворог у зоні',
				cost: 3,
				repeatable: false,
				minLevel: 1,
				sections: [
					{
						type: 'roll',
						roll: {
							characteristic: [
								'Might'
							],
							bonus: 0,
							tier1: '5 пошкодження',
							tier2: '8 пошкодження; відкинути 1',
							tier3: '11 пошкодження; відкинути 3'
						}
					}
				],
				preEffect: '',
				powerRoll: null,
				test: null,
				effect: '',
				strained: '',
				alternateEffects: [],
				spend: [],
				persistence: []
			},
			{
				id: 'fury-ability-6',
				name: 'Геть із шляху!',
				description: 'Ваші вороги розчистять вам шлях — хочуть того чи ні.',
				type: {
					usage: 'Основна дія',
					free: false,
					trigger: '',
					time: '',
					qualifiers: [],
					freeStrike: false
				},
				keywords: [
					'Ближній бій',
					'Удар',
					'Зброя'
				],
				distance: [
					{
						type: 'Ближній бій',
						value: 1,
						value2: 0,
						within: 0,
						special: '',
						qualifier: ''
					}
				],
				target: 'Одна істота',
				cost: 3,
				repeatable: false,
				minLevel: 1,
				sections: [
					{
						type: 'roll',
						roll: {
							characteristic: [
								'Might'
							],
							bonus: 0,
							tier1: '3 + С пошкодження; зсунути 2',
							tier2: '5 + С пошкодження; зсунути 3',
							tier3: '8 + С пошкодження; зсунути 5'
						}
					},
					{
						type: 'Текст',
						text: 'Коли ви ковзаєте ціль, ви можете зайняти будь-яку клітину, яку вона залишає. Якщо ви отримуєте пошкодження від можливого удару через такий рух, ціль отримує те саме пошкодження.'
					}
				],
				preEffect: '',
				powerRoll: null,
				test: null,
				effect: '',
				strained: '',
				alternateEffects: [],
				spend: [],
				persistence: []
			},
			{
				id: 'fury-ability-7',
				name: 'Приплив Смерті',
				description: 'Навчіть їх марності шикуватися для вас.',
				type: {
					usage: 'Основна дія',
					free: false,
					trigger: '',
					time: '',
					qualifiers: [],
					freeStrike: false
				},
				keywords: [
					'Ближній бій',
					'Зброя'
				],
				distance: [
					{
						type: 'Себе',
						value: 0,
						value2: 0,
						within: 0,
						special: '',
						qualifier: ''
					}
				],
				target: 'Self; see below',
				cost: 3,
				repeatable: false,
				minLevel: 1,
				sections: [
					{
						type: 'Текст',
						text: 'Ви рухаєтеся по прямій лінії на відстань до вашої швидкості, і клітини ворогів не вважаються важкопрохідною місцевістю для цього руху. Ви можете завершити цей рух у клітині істоти і перемістити її в сусідню вільну клітину. Ви виконуєте один силовий кидок, спрямований на кожного ворога, простір якого ви проходите.'
					},
					{
						type: 'roll',
						roll: {
							characteristic: [
								'Might'
							],
							bonus: 0,
							tier1: '2 пошкодження',
							tier2: '3 пошкодження',
							tier3: '5 пошкодження'
						}
					},
					{
						type: 'Текст',
						text: 'Остання ціль, якій ви завдаєте шкоди, отримує додаткову шкоду, рівну вашому показнику Сили за кожну можливу атаку, яку ви викликаєте під час руху.'
					}
				],
				preEffect: '',
				powerRoll: null,
				test: null,
				effect: '',
				strained: '',
				alternateEffects: [],
				spend: [],
				persistence: []
			},
			{
				id: 'fury-ability-8',
				name: 'Твої нутрощі — твої прикраси!',
				description: 'Важко їм битися, коли вони зайняті утриманням своїх нутрощів.',
				type: {
					usage: 'Основна дія',
					free: false,
					trigger: '',
					time: '',
					qualifiers: [],
					freeStrike: false
				},
				keywords: [
					'Ближній бій',
					'Удар',
					'Зброя'
				],
				distance: [
					{
						type: 'Ближній бій',
						value: 1,
						value2: 0,
						within: 0,
						special: '',
						qualifier: ''
					}
				],
				target: 'Одна істота або предмет',
				cost: 3,
				repeatable: false,
				minLevel: 1,
				sections: [
					{
						type: 'roll',
						roll: {
							characteristic: [
								'Might'
							],
							bonus: 0,
							tier1: '3 + С пошкодження; С < [слабкий], кровоточить (рятівний кидок закінчує дію)',
							tier2: '5 + С пошкодження; С < [середній], кровоточить (рятівний кидок закінчує дію)',
							tier3: '8 + С пошкодження; С < [сильний], кровоточить (рятівний кидок закінчує дію)'
						}
					},
					{
						type: 'Текст',
						text: 'Поки ціль кровоточить таким чином, вона отримує пошкодження, рівне вашому показнику Сили, в кінці ваших ходів.'
					}
				],
				preEffect: '',
				powerRoll: null,
				test: null,
				effect: '',
				strained: '',
				alternateEffects: [],
				spend: [],
				persistence: []
			},
			{
				id: 'fury-ability-9',
				name: 'Кров за кров!',
				description: 'Побачте, як вони б’ються після того, як ви їх висмоктали.',
				type: {
					usage: 'Основна дія',
					free: false,
					trigger: '',
					time: '',
					qualifiers: [],
					freeStrike: false
				},
				keywords: [
					'Ближній бій',
					'Удар',
					'Зброя'
				],
				distance: [
					{
						type: 'Ближній бій',
						value: 1,
						value2: 0,
						within: 0,
						special: '',
						qualifier: ''
					}
				],
				target: 'Одна істота або предмет',
				cost: 5,
				repeatable: false,
				minLevel: 1,
				sections: [
					{
						type: 'roll',
						roll: {
							characteristic: [
								'Might'
							],
							bonus: 0,
							tier1: '4 + С пошкодження; С < [слабкий], кровоточить і ослаблений (рятівний кидок закінчує дію)',
							tier2: '6 + С пошкодження; С < [середній], кровоточить і ослаблений (рятівний кидок закінчує дію)',
							tier3: '10 + С пошкодження; С < [сильний], кровоточить і ослаблений (рятівний кидок закінчує дію)'
						}
					},
					{
						type: 'Текст',
						text: 'Ви можете завдати собі 1d6 пошкодження, щоб завдати додаткових 1d6 пошкодження цілі.'
					}
				],
				preEffect: '',
				powerRoll: null,
				test: null,
				effect: '',
				strained: '',
				alternateEffects: [],
				spend: [],
				persistence: []
			},
			{
				id: 'fury-ability-10',
				name: 'Примирись зі своїм Богом!',
				description: 'Гнів — це енергія.',
				type: {
					usage: 'Маневр',
					free: true,
					trigger: '',
					time: '',
					qualifiers: [],
					freeStrike: false
				},
				keywords: [],
				distance: [
					{
						type: 'Себе',
						value: 0,
						value2: 0,
						within: 0,
						special: '',
						qualifier: ''
					}
				],
				target: 'Себе',
				cost: 5,
				repeatable: false,
				minLevel: 1,
				sections: [
					{
						type: 'Текст',
						text: 'Ви отримуєте 1 сплеск, і наступний кидок здібності цього ходу автоматично має результат 3-го рівня.'
					}
				],
				preEffect: '',
				powerRoll: null,
				test: null,
				effect: '',
				strained: '',
				alternateEffects: [],
				spend: [],
				persistence: []
			},
			{
				id: 'fury-ability-11',
				name: 'Гримовий рев',
				description: 'Ви випускаєте виття, що відкидає ваших ворогів.',
				type: {
					usage: 'Основна дія',
					free: false,
					trigger: '',
					time: '',
					qualifiers: [],
					freeStrike: false
				},
				keywords: [
					'Area',
					'Ближній бій',
					'Зброя'
				],
				distance: [
					{
						type: 'Line',
						value: 5,
						value2: 1,
						within: 1,
						special: '',
						qualifier: ''
					}
				],
				target: 'Кожен ворог у зоні',
				cost: 5,
				repeatable: false,
				minLevel: 1,
				sections: [
					{
						type: 'roll',
						roll: {
							characteristic: [
								'Might'
							],
							bonus: 0,
							tier1: '6 шкоди; відштовхнути на 2',
							tier2: '9 шкоди; відштовхнути на 4',
							tier3: '13 шкоди; відштовхнути на 6'
						}
					},
					{
						type: 'Текст',
						text: 'Цілі примусово переміщуються по одній, починаючи з найближчої до вас, і можуть бути відкинуті у інші цілі тієї самої лінії.'
					}
				],
				preEffect: '',
				powerRoll: null,
				test: null,
				effect: '',
				strained: '',
				alternateEffects: [],
				spend: [],
				persistence: []
			},
			{
				id: 'fury-ability-12',
				name: 'До крайньої межі',
				description: 'Ви жертвуєте життєвою силою, щоб забезпечити загибель ворога.',
				type: {
					usage: 'Основна дія',
					free: false,
					trigger: '',
					time: '',
					qualifiers: [],
					freeStrike: false
				},
				keywords: [
					'Ближній бій',
					'Удар',
					'Зброя'
				],
				distance: [
					{
						type: 'Ближній бій',
						value: 1,
						value2: 0,
						within: 0,
						special: '',
						qualifier: ''
					}
				],
				target: 'Одна істота',
				cost: 5,
				repeatable: false,
				minLevel: 1,
				sections: [
					{
						type: 'roll',
						roll: {
							characteristic: [
								'Might'
							],
							bonus: 0,
							tier1: '7 + С шкоди',
							tier2: '11 + С шкоди',
							tier3: '16 + С шкоди'
						}
					},
					{
						type: 'field',
						name: 'Spend',
						value: 1,
						repeatable: false,
						effect: 'While you are winded, this ability deals an extra 1d6 damage for each ferocity spent. While you are dying, it deals an extra 1d10 damage for each ferocity spent. In either case, you lose 1d6 Stamina after making this strike.'
					}
				],
				preEffect: '',
				powerRoll: null,
				test: null,
				effect: '',
				strained: '',
				alternateEffects: [],
				spend: [],
				persistence: []
			},
			{
				id: 'fury-ability-13',
				name: 'Демон розв\'язаний',
				description: 'Вороги тремтять при вигляді вас.',
				type: {
					usage: 'Маневр',
					free: false,
					trigger: '',
					time: '',
					qualifiers: [],
					freeStrike: false
				},
				keywords: [
					'Магія'
				],
				distance: [
					{
						type: 'Себе',
						value: 0,
						value2: 0,
						within: 0,
						special: '',
						qualifier: ''
					}
				],
				target: 'Себе',
				cost: 7,
				repeatable: false,
				minLevel: 1,
				sections: [
					{
						type: 'Текст',
						text: 'До кінця зустрічі або доки ви не будете вмирати, кожен ворог, який починає свій хід поруч із вами і має П < [сильний], лякається до кінця свого ходу.'
					}
				],
				preEffect: '',
				powerRoll: null,
				test: null,
				effect: '',
				strained: '',
				alternateEffects: [],
				spend: [],
				persistence: []
			},
			{
				id: 'fury-ability-14',
				name: 'Стій перед бурею!',
				description: 'Шоковані вашою оголеною жорстокістю, інстинкти ворога беруть гору.',
				type: {
					usage: 'Маневр',
					free: false,
					trigger: '',
					time: '',
					qualifiers: [],
					freeStrike: false
				},
				keywords: [
					'Магія'
				],
				distance: [
					{
						type: 'Себе',
						value: 0,
						value2: 0,
						within: 0,
						special: '',
						qualifier: ''
					}
				],
				target: 'Себе',
				cost: 7,
				repeatable: false,
				minLevel: 1,
				sections: [
					{
						type: 'Текст',
						text: 'До кінця зустрічі або доки ви не будете вмирати, кожна істота, якій ви завдаєте рукопашної атаки і яка має П < [середній], стає провокованою до кінця її наступного ходу. Додатково, коли ви використовуєте здібність, яка завдає кидкової шкоди проти будь-якого ворога, якого ви провокуєте, здібність завдає додаткової шкоди, рівної подвоєному вашому показнику Сили, і збільшує свою потужність на 1.'
					}
				],
				preEffect: '',
				powerRoll: null,
				test: null,
				effect: '',
				strained: '',
				alternateEffects: [],
				spend: [],
				persistence: []
			},
			{
				id: 'fury-ability-15',
				name: 'Руйнівник сталі',
				description: 'Погляньте, як марні їхні зброї!',
				type: {
					usage: 'Маневр',
					free: false,
					trigger: '',
					time: '',
					qualifiers: [],
					freeStrike: false
				},
				keywords: [
					'Магія'
				],
				distance: [
					{
						type: 'Себе',
						value: 0,
						value2: 0,
						within: 0,
						special: '',
						qualifier: ''
					}
				],
				target: 'Себе',
				cost: 7,
				repeatable: false,
				minLevel: 1,
				sections: [
					{
						type: 'Текст',
						text: 'Ви отримуєте 20 тимчасової Витривалості.'
					}
				],
				preEffect: '',
				powerRoll: null,
				test: null,
				effect: '',
				strained: '',
				alternateEffects: [],
				spend: [],
				persistence: []
			},
			{
				id: 'fury-ability-16',
				name: 'Ти вже мертвий',
				description: 'Нанеси удар. Іди геть.',
				type: {
					usage: 'Основна дія',
					free: false,
					trigger: '',
					time: '',
					qualifiers: [],
					freeStrike: false
				},
				keywords: [
					'Ближній бій',
					'Удар',
					'Зброя'
				],
				distance: [
					{
						type: 'Ближній бій',
						value: 1,
						value2: 0,
						within: 0,
						special: '',
						qualifier: ''
					}
				],
				target: 'Одна істота',
				cost: 7,
				repeatable: false,
				minLevel: 1,
				sections: [
					{
						type: 'Текст',
						text: 'Якщо ціль не є лідером або сольною істотою, вона зменшується до 0 Витривалості наприкінці свого наступного ходу. Якщо ціль є лідером або сольною істотою, ви отримуєте 3 сплески і можете виконати рукопашну безкоштовну атаку проти неї.'
					}
				],
				preEffect: '',
				powerRoll: null,
				test: null,
				effect: '',
				strained: '',
				alternateEffects: [],
				spend: [],
				persistence: []
			},
			{
				id: 'fury-ability-17',
				name: 'Ослаблюючий удар',
				description: 'Вам достатньо одного удару, щоб підірвати ціль.',
				type: {
					usage: 'Основна дія',
					free: false,
					trigger: '',
					time: '',
					qualifiers: [],
					freeStrike: false
				},
				keywords: [
					'Ближній бій',
					'Удар',
					'Зброя'
				],
				distance: [
					{
						type: 'Ближній бій',
						value: 1,
						value2: 0,
						within: 0,
						special: '',
						qualifier: ''
					}
				],
				target: 'Одна істота',
				cost: 9,
				repeatable: false,
				minLevel: 1,
				sections: [
					{
						type: 'roll',
						roll: {
							characteristic: [
								'Might'
							],
							bonus: 0,
							tier1: '10 + С шкоди; С < [слабкий], сповільнений (рят. кидок закінчує)',
							tier2: '14 + С шкоди; С < [середній], сповільнений (рят. кидок закінчує)',
							tier3: '20 + С шкоди; С < [сильний], сповільнений (рят. кидок закінчує)'
						}
					},
					{
						type: 'Текст',
						text: 'Поки ціль сповільнена цим способом, вона отримує 1 пошкодження за кожну клітину, яку рухається, включно з примусовим рухом.'
					}
				],
				preEffect: '',
				powerRoll: null,
				test: null,
				effect: '',
				strained: '',
				alternateEffects: [],
				spend: [],
				persistence: []
			},
			{
				id: 'fury-ability-18',
				name: 'Мій хід!',
				description: 'Ви швидко відповідаєте ударом ворогу.',
				type: {
					usage: 'Тригерна дія',
					free: false,
					trigger: 'A creature causes you to be winded or dying, or damages you while you are winded or dying.',
					time: '',
					qualifiers: [],
					freeStrike: false
				},
				keywords: [
					'Ближній бій',
					'Удар',
					'Зброя'
				],
				distance: [
					{
						type: 'Ближній бій',
						value: 1,
						value2: 0,
						within: 0,
						special: '',
						qualifier: ''
					}
				],
				target: 'Ініціююча істота',
				cost: 9,
				repeatable: false,
				minLevel: 1,
				sections: [
					{
						type: 'roll',
						roll: {
							characteristic: [
								'Might'
							],
							bonus: 0,
							tier1: '6 + С шкоди;',
							tier2: '9 + С шкоди;',
							tier3: '13 + С шкоди;'
						}
					},
					{
						type: 'Текст',
						text: 'Ви можете витратити Відновлення.'
					}
				],
				preEffect: '',
				powerRoll: null,
				test: null,
				effect: '',
				strained: '',
				alternateEffects: [],
				spend: [],
				persistence: []
			},
			{
				id: 'fury-ability-19',
				name: 'Буря відскоку',
				description: 'Ви відкидаєте ворогів, мов іграшки.',
				type: {
					usage: 'Основна дія',
					free: false,
					trigger: '',
					time: '',
					qualifiers: [],
					freeStrike: false
				},
				keywords: [
					'Ближній бій',
					'Удар',
					'Зброя'
				],
				distance: [
					{
						type: 'Ближній бій',
						value: 1,
						value2: 0,
						within: 0,
						special: '',
						qualifier: ''
					}
				],
				target: 'Дві істоти або обʼєкти',
				cost: 9,
				repeatable: false,
				minLevel: 1,
				sections: [
					{
						type: 'roll',
						roll: {
							characteristic: [
								'Might'
							],
							bonus: 0,
							tier1: '9 + С шкоди; відштовхнути на 3',
							tier2: '14 + С шкоди; відштовхнути на 5',
							tier3: '19 + С шкоди; відштовхнути на 7'
						}
					},
					{
						type: 'Текст',
						text: 'Коли ціль завершує примусовий рух, врізавшись у істоту або обʼєкт, вона отримує звичайне пошкодження, а потім відштовхується на залишкову відстань від істоти або обʼєкта в напрямку, звідки рухалась. Поки примусовий рух триває, цей ефект продовжується, якщо ціль врізається в іншу істоту або обʼєкт.'
					}
				],
				preEffect: '',
				powerRoll: null,
				test: null,
				effect: '',
				strained: '',
				alternateEffects: [],
				spend: [],
				persistence: []
			},
			{
				id: 'fury-ability-20',
				name: 'Вокамʼяніти',
				description: 'Ви спрямовуєте Первісний Хаос у удари, що буквально окамʼянюють ворога.',
				type: {
					usage: 'Основна дія',
					free: false,
					trigger: '',
					time: '',
					qualifiers: [],
					freeStrike: false
				},
				keywords: [
					'Магія',
					'Ближній бій',
					'Удар',
					'Зброя'
				],
				distance: [
					{
						type: 'Ближній бій',
						value: 1,
						value2: 0,
						within: 0,
						special: '',
						qualifier: ''
					}
				],
				target: 'Одна істота',
				cost: 9,
				repeatable: false,
				minLevel: 1,
				sections: [
					{
						type: 'roll',
						roll: {
							characteristic: [
								'Might'
							],
							bonus: 0,
							tier1: '9 + С шкоди; С < [слабкий], сповільнений (рят. кидок закінчує)',
							tier2: '13 + С шкоди; С < [середній], сповільнений (рят. кидок закінчує)',
							tier3: '18 + С шкоди; С < [сильний], скутий (рят. кидок закінчує)'
						}
					},
					{
						type: 'Текст',
						text: 'Поки ціль сповільнена цим способом, будь-який інший ефект, що мав би сповільнити її, замість цього робить її звʼязаною цією здібністю. Додатково, істота, яка провалює рятівний кидок, будучи звʼязаною цим способом, стає окененілою до отримання надприродного лікування або поки ви не вирішите скасувати ефект (без дії).'
					}
				],
				preEffect: '',
				powerRoll: null,
				test: null,
				effect: '',
				strained: '',
				alternateEffects: [],
				spend: [],
				persistence: []
			},
			{
				id: 'fury-ability-21',
				name: 'Елементальна лють',
				description: 'Ваша первісна енергія забезпечує миттєву відплату.',
				type: {
					usage: 'Маневр',
					free: false,
					trigger: '',
					time: '',
					qualifiers: [],
					freeStrike: false
				},
				keywords: [
					'Магія'
				],
				distance: [
					{
						type: 'Себе',
						value: 0,
						value2: 0,
						within: 0,
						special: '',
						qualifier: ''
					}
				],
				target: 'Себе',
				cost: 11,
				repeatable: false,
				minLevel: 1,
				sections: [
					{
						type: 'Текст',
						text: 'Ви отримуєте 10 тимчасової Витривалості. Додатково оберіть кислотне, холодне, корупційне, вогняне, блискавичне, отруйне або звукове ушкодження. До кінця зустрічі або доки ви не будете вмирати, коли ворог завдає вам ушкодження, він отримує 10 ушкодження обраного типу. Якщо це ушкодження зменшує ворога до 0 Витривалості, ви отримуєте 10 тимчасової Витривалості.'
					}
				],
				preEffect: '',
				powerRoll: null,
				test: null,
				effect: '',
				strained: '',
				alternateEffects: [],
				spend: [],
				persistence: []
			},
			{
				id: 'fury-ability-22',
				name: 'Надлишкове вбивство',
				description: 'Ви бʼєте так, щоб жодна шкода не була марною.',
				type: {
					usage: 'Основна дія',
					free: false,
					trigger: '',
					time: '',
					qualifiers: [],
					freeStrike: false
				},
				keywords: [
					'Магія',
					'Ближній бій',
					'Удар',
					'Зброя'
				],
				distance: [
					{
						type: 'Ближній бій',
						value: 1,
						value2: 0,
						within: 0,
						special: '',
						qualifier: ''
					}
				],
				target: 'Одна істота',
				cost: 11,
				repeatable: false,
				minLevel: 1,
				sections: [
					{
						type: 'roll',
						roll: {
							characteristic: [
								'Might'
							],
							bonus: 0,
							tier1: '6 + С шкоди',
							tier2: '10 + С шкоди',
							tier3: '14 + С шкоди'
						}
					},
					{
						type: 'Текст',
						text: 'Якщо ціль є міньйоном або має стан втомленості, але не є лідером чи сольною істотою, вона зменшується до 0 Витривалості перед застосуванням шкоди цієї здібності. Якщо ціль вбита цим ушкодженням, ви можете перенаправити будь-яку надлишкову шкоду на іншу істоту в межах 5 клітин від цілі.'
					}
				],
				preEffect: '',
				powerRoll: null,
				test: null,
				effect: '',
				strained: '',
				alternateEffects: [],
				spend: [],
				persistence: []
			},
			{
				id: 'fury-ability-23',
				name: 'Первісна лють',
				description: 'Ваша лють перетворюється на первісну силу.',
				type: {
					usage: 'Маневр',
					free: false,
					trigger: '',
					time: '',
					qualifiers: [],
					freeStrike: false
				},
				keywords: [
					'Магія'
				],
				distance: [
					{
						type: 'Себе',
						value: 0,
						value2: 0,
						within: 0,
						special: '',
						qualifier: ''
					}
				],
				target: 'Себе',
				cost: 11,
				repeatable: false,
				minLevel: 1,
				sections: [
					{
						type: 'Текст',
						text: 'Оберіть кислотне, холодне, корупційне, вогняне, блискавичне, отруйне або звукове ушкодження. До кінця зустрічі або доки ви не будете вмирати, ви можете вибрати одну ціль будь-якої здібності, яку використовуєте, і ця ціль отримує додаткові 15 ушкодження обраного типу. Додатково, коли ви отримуєте лють від отриманого ушкодження, джерело цього ушкодження отримує 5 ушкодження обраного типу.'
					}
				],
				preEffect: '',
				powerRoll: null,
				test: null,
				effect: '',
				strained: '',
				alternateEffects: [],
				spend: [],
				persistence: []
			},
			{
				id: 'fury-ability-24',
				name: 'Невблаганна смерть',
				description: 'Ви не уникнете своєї долі.',
				type: {
					usage: 'Основна дія',
					free: false,
					trigger: '',
					time: '',
					qualifiers: [],
					freeStrike: false
				},
				keywords: [
					'Магія',
					'Ближній бій',
					'Удар',
					'Зброя'
				],
				distance: [
					{
						type: 'Себе',
						value: 0,
						value2: 0,
						within: 0,
						special: '',
						qualifier: ''
					}
				],
				target: 'Self; see below',
				cost: 11,
				repeatable: false,
				minLevel: 1,
				sections: [
					{
						type: 'Текст',
						text: 'Ви зсуваєтесь на відстань до вашої швидкості. Кожен ворог, якого ви підводите поруч під час цього руху, отримує пошкодження, рівне подвоєному вашому показнику Сили. Потім виконайте один силовий кидок, спрямований на кожного ворога, поруч із яким ви опинилися під час цього зсуву. Ви отримуєте 1 люті за кожну ціль, яка вмирає внаслідок цієї здібності (максимум 11 люті).'
					},
					{
						type: 'roll',
						roll: {
							characteristic: [
								'Might'
							],
							bonus: 0,
							tier1: 'Будь-яка ціль, чия Витривалість дорівнює 8 або менше, помирає.',
							tier2: 'Будь-яка ціль, чия Витривалість дорівнює 11 або менше, помирає.',
							tier3: 'Будь-яка ціль, чия Витривалість дорівнює 17 або менше, помирає.'
						}
					}
				],
				preEffect: '',
				powerRoll: null,
				test: null,
				effect: '',
				strained: '',
				alternateEffects: [],
				spend: [],
				persistence: []
			}
		],
		subclasses: [
			{
				id: 'fury-sub-1',
				name: 'Berserker',
				description: 'Ви спрямовуєте свою лють у прояви фізичної могутності, стаючи живим втіленням сил, що змінюють світ.',
				featuresByLevel: [
					{
						level: 1,
						features: [
							{
								id: 'fury-sub-1-1-1',
								name: 'Exploration Skill',
								description: '',
								type: 'Вибір навички',
								data: {
									options: [],
									listOptions: [
										'Дослідження'
									],
									count: 1,
									selected: [
										'Підйом'
									]
								}
							},
							{
								id: 'fury-sub-1-1-2',
								name: 'Набір',
								description: '',
								type: 'Набір',
								data: {
									types: [
										''
									],
									count: 1,
									selected: [
										{
											id: 'kit-panther',
											name: 'Panther',
											description: 'Якщо вам потрібен добрий баланс захисту, швидкості та шкоди, набір Пантери для вас. Цей набір підвищує вашу Витривалість не завдяки броні, а через цілеспрямовану підготовку тіла й розуму до бою, дозволяючи бути швидким і маневреним, завдаючи сильні удари важкою зброєю.',
											type: '',
											armor: [],
											weapon: [
												'Важка зброя'
											],
											stamina: 6,
											speed: 1,
											stability: 1,
											meleeDamage: {
												tier1: 0,
												tier2: 0,
												tier3: 4
											},
											rangedDamage: null,
											meleeDistance: 0,
											rangedDistance: 0,
											disengage: 0,
											features: [
												{
													id: 'kit-panther-signature',
													name: 'Руйнівний Ривок',
													description: 'Чим швидше ви рухаєтеся, тим сильніше завдаєте удару.',
													type: 'Здібність',
													data: {
														ability: {
															id: 'kit-panther-signature',
															name: 'Devastating Rush',
															description: 'Чим швидше ви рухаєтеся, тим сильніше завдаєте удару.',
															type: {
																usage: 'Основна дія',
																free: false,
																trigger: '',
																time: '',
																qualifiers: [],
																freeStrike: false
															},
															keywords: [
																'Ближній бій',
																'Удар',
																'Зброя'
															],
															distance: [
																{
																	type: 'Ближній бій',
																	value: 1,
																	value2: 0,
																	within: 0,
																	special: '',
																	qualifier: ''
																}
															],
															target: 'Одна істота або предмет',
															cost: 'signature',
															repeatable: false,
															minLevel: 1,
															sections: [
																{
																	type: 'roll',
																	roll: {
																		characteristic: [
																			'Might',
																			'Ловкість'
																		],
																		bonus: 0,
																		tier1: '3 + С або Л шкоди',
																		tier2: '6 + С або Л шкоди',
																		tier3: '9 + С або Л шкоди'
																	}
																},
																{
																	type: 'Текст',
																	text: 'Ви можете рухнутись до 3 клітин прямо до цілі перед цим ударом; удар завдає додаткової шкоди, рівної кількості клітин, які ви пройшли.'
																}
															],
															preEffect: '',
															powerRoll: null,
															test: null,
															effect: '',
															strained: '',
															alternateEffects: [],
															spend: [],
															persistence: []
														}
													}
												}
											]
										}
									]
								}
							},
							{
								id: 'fury-sub-1-1-3',
								name: 'Primordial Strength',
								description: '\nКоли ви пошкоджуєте об’єкт ударом зброї, удар завдає додаткової шкоди, рівної вашому показнику Сили. Додатково, коли ви штовхаєте істоту в об’єкт, ця істота отримує додаткову шкоду, рівну вашому показнику Сили.\n\nЗі зростанням вашої люті ви отримуєте переваги, зазначені в таблиці «Зростаюча лють Берсеркера». Переваги накопичуються, якщо покращена перевага не замінює менш значну.\n\n* **Лють 2**: Коли ви використовуєте маневр Відкидання (Knockback), примусова відстань руху отримує бонус, рівний вашому показнику Сили.\n* **Лють 4**: Перший раз, коли ви штовхаєте істоту за хід, ви отримуєте 1 сплеск.\n* **Лють 6**: Ви отримуєте перевагу на тестах Сили і при маневрі Відкидання.',
								type: 'Текст',
								data: null
							},
							{
								id: 'fury-sub-1-1-4',
								name: 'Lines of Force',
								description: 'Ви перенаправляєте енергію руху.',
								type: 'Здібність',
								data: {
									ability: {
										id: 'fury-sub-1-1-4',
										name: 'Lines of Force',
										description: 'Ви перенаправляєте енергію руху.',
										type: {
											usage: 'Тригерна дія',
											free: false,
											trigger: 'The target would be force moved.',
											time: '',
											qualifiers: [],
											freeStrike: false
										},
										keywords: [
											'Магія',
											'Ближній бій'
										],
										distance: [
											{
												type: 'Ближній бій',
												value: 1,
												value2: 0,
												within: 0,
												special: '',
												qualifier: ''
											}
										],
										target: 'На себе або одно істоту',
										cost: 0,
										repeatable: false,
										minLevel: 1,
										sections: [
											{
												type: 'Текст',
												text: 'Ви можете обрати нову ціль того самого розміру або меншого в межах дистанції для примусового переміщення. Ви стаєте джерелом примусового руху, визначаєте призначення нової цілі та можете відштовхнути ціль замість використання початкового типу примусового руху. Додатково відстань примусового руху отримує бонус, рівний вашому показнику Сили.'
											},
											{
												type: 'field',
												name: 'Spend',
												value: 1,
												repeatable: false,
												effect: 'The forced movement distance gains a bonus equal to twice your Might score instead.'
											}
										],
										preEffect: '',
										powerRoll: null,
										test: null,
										effect: '',
										strained: '',
										alternateEffects: [],
										spend: [],
										persistence: []
									}
								}
							}
						]
					},
					{
						level: 2,
						features: [
							{
								id: 'fury-sub-1-2-1',
								name: 'Unstoppable Force',
								description: 'Коли ви використовуєте головну дію «Ривок» (Charge), ви можете замість вільного удару виконати підписну ударну або героїчну ударну здатність. Додатково ви можете стрибати як частину ривка.',
								type: 'Текст',
								data: null
							},
							{
								id: 'fury-sub-1-2-2',
								name: 'Choice',
								description: '',
								type: 'Вибір',
								data: {
									options: [
										{
											feature: {
												id: 'fury-sub-1-2-2a',
												name: 'Special Delivery',
												description: 'Готові?',
												type: 'Здібність',
												data: {
													ability: {
														id: 'fury-sub-1-2-2a',
														name: 'Special Delivery',
														description: 'Готові?',
														type: {
															usage: 'Маневр',
															free: false,
															trigger: '',
															time: '',
															qualifiers: [],
															freeStrike: false
														},
														keywords: [
															'Ближній бій',
															'Зброя'
														],
														distance: [
															{
																type: 'Ближній бій',
																value: 1,
																value2: 0,
																within: 0,
																special: '',
																qualifier: ''
															}
														],
														target: 'One willing ally',
														cost: 5,
														repeatable: false,
														minLevel: 1,
														sections: [
															{
																type: 'Текст',
																text: 'Ви вертикально підкидаєте ціль до 4 клітин. Цей примусовий рух ігнорує стійкість цілі, і ціль не отримує пошкодження від зіткнення з істотами або обʼєктами. Наприкінці цього руху ціль може зробити безкоштовну атаку, що завдає додаткової шкоди, рівної вашому показнику Сили.'
															}
														],
														preEffect: '',
														powerRoll: null,
														test: null,
														effect: '',
														strained: '',
														alternateEffects: [],
														spend: [],
														persistence: []
													}
												}
											},
											value: 1
										},
										{
											feature: {
												id: 'fury-sub-1-2-2b',
												name: 'Wrecking Ball',
												description: 'Руйнувати набагато простіше, ніж створювати. Насправді — значно простіше!',
												type: 'Здібність',
												data: {
													ability: {
														id: 'fury-sub-1-2-2b',
														name: 'Wrecking Ball',
														description: 'Руйнувати набагато простіше, ніж створювати. Насправді — значно простіше!',
														type: {
															usage: 'Маневр',
															free: false,
															trigger: '',
															time: '',
															qualifiers: [],
															freeStrike: false
														},
														keywords: [
															'Ближній бій',
															'Зброя'
														],
														distance: [
															{
																type: 'Себе',
																value: 0,
																value2: 0,
																within: 0,
																special: '',
																qualifier: ''
															}
														],
														target: 'Self; see below',
														cost: 5,
														repeatable: false,
														minLevel: 1,
														sections: [
															{
																type: 'Текст',
																text: '\nВи рухаєтесь на відстань до вашої швидкості по прямій лінії. Під час цього руху ви можете проходити через буденні конструкції, включно зі стінами, які для вас є важкопрохідною місцевістю. Ви автоматично знищуєте кожну клітину конструкції, через яку проходите, залишаючи на її місці клітину важкопрохідної місцевості.\n\nДодатково, ви робите один силовий кидок, спрямований на кожного ворога, поруч із яким ви опинитесь під час цього руху.'
															},
															{
																type: 'roll',
																roll: {
																	characteristic: [
																		'Might'
																	],
																	bonus: 0,
																	tier1: 'Відштовхнути на 1',
																	tier2: 'Відштовхнути на 2',
																	tier3: 'Відштовхнути на 3'
																}
															}
														],
														preEffect: '',
														powerRoll: null,
														test: null,
														effect: '',
														strained: '',
														alternateEffects: [],
														spend: [],
														persistence: []
													}
												}
											},
											value: 1
										}
									],
									count: 1,
									selected: []
								}
							}
						]
					},
					{
						level: 3,
						features: [
							{
								id: 'fury-sub-1-3-1',
								name: 'Immovable Object',
								description: 'До вашого ефективного розміру додається ваш рівень для взаємодії з істотами та обʼєктами, включно з визначенням, чи можете ви підняти предмет, чи впливає на вас примусовий рух тощо. Це не впливає на те, чи можуть вас схопити.',
								type: 'Текст',
								data: null
							},
							{
								id: 'fury-sub-1-3-2',
								name: 'Непорушність',
								description: '',
								type: 'Бонус',
								data: {
									field: 'Непорушність',
									value: 0,
									valueCharacteristics: [
										'Might'
									],
									valueCharacteristicMultiplier: 1,
									valuePerLevel: 0,
									valuePerEchelon: 0
								}
							}
						]
					},
					{
						level: 4,
						features: [
							{
								id: 'fury-sub-1-4-1',
								name: 'Growing Ferocity Improvement',
								description: '**8 Лють:** Першого разу за хід, коли ви штовхаєте істоту, ви отримуєте 2 сплески.',
								type: 'Текст',
								data: null
							}
						]
					},
					{
						level: 5,
						features: [
							{
								id: 'fury-sub-1-5-1',
								name: 'Bounder',
								description: 'Ваша відстань і висота стрибка подвоюються. Додатково, коли ви падаєте, ви зменшуєте ефективну висоту падіння на кількість клітин, рівну вашій відстані стрибка, для визначення шкоди та того, чи опинитеся ви лежачи. Ви не опиняєтеся лежачи після падіння, якщо приземлилися на іншу істоту.',
								type: 'Текст',
								data: null
							}
						]
					},
					{
						level: 6,
						features: [
							{
								id: 'fury-sub-1-6-1',
								name: 'Choice',
								description: '',
								type: 'Вибір',
								data: {
									options: [
										{
											feature: {
												id: 'fury-sub-1-6-1a',
												name: 'Avalanche Impact',
												description: 'Ви стрибаєте й з гуркотом падаєте, спричиняючи ударну хвилю, що нищить ворогів.',
												type: 'Здібність',
												data: {
													ability: {
														id: 'fury-sub-1-6-1a',
														name: 'Avalanche Impact',
														description: 'Ви стрибаєте й з гуркотом падаєте, спричиняючи ударну хвилю, що нищить ворогів.',
														type: {
															usage: 'Маневр',
															free: false,
															trigger: '',
															time: '',
															qualifiers: [],
															freeStrike: false
														},
														keywords: [
															'Магія'
														],
														distance: [
															{
																type: 'Себе',
																value: 0,
																value2: 0,
																within: 0,
																special: '',
																qualifier: ''
															}
														],
														target: 'Себе',
														cost: 9,
														repeatable: false,
														minLevel: 1,
														sections: [
															{
																type: 'Текст',
																text: 'Ви стрибаєте на відстань до вашої максимальної відстані стрибка і виконуєте один силовий кидок, спрямований на кожну істоту, що знаходиться поруч із клітиною, куди ви приземляєтесь.'
															},
															{
																type: 'roll',
																roll: {
																	characteristic: [
																		'Might'
																	],
																	bonus: 0,
																	tier1: '4 шкоди; відштовхнути на 1',
																	tier2: '7 шкоди; відштовхнути на 2',
																	tier3: '11 шкоди; відштовхнути на 3'
																}
															}
														],
														preEffect: '',
														powerRoll: null,
														test: null,
														effect: '',
														strained: '',
														alternateEffects: [],
														spend: [],
														persistence: []
													}
												}
											},
											value: 1
										},
										{
											feature: {
												id: 'fury-sub-1-6-1b',
												name: 'Force of Storms',
												description: 'Ви вражаєте ворога настільки сильно, що він перетворюється на снаряд, що штовхає натовп істот.',
												type: 'Здібність',
												data: {
													ability: {
														id: 'fury-sub-1-6-1b',
														name: 'Force of Storms',
														description: 'Ви вражаєте ворога настільки сильно, що він перетворюється на снаряд, що штовхає натовп істот.',
														type: {
															usage: 'Основна дія',
															free: false,
															trigger: '',
															time: '',
															qualifiers: [],
															freeStrike: false
														},
														keywords: [
															'Ближній бій',
															'Удар',
															'Зброя'
														],
														distance: [
															{
																type: 'Ближній бій',
																value: 1,
																value2: 0,
																within: 0,
																special: '',
																qualifier: ''
															}
														],
														target: 'Одна істота',
														cost: 9,
														repeatable: false,
														minLevel: 1,
														sections: [
															{
																type: 'roll',
																roll: {
																	characteristic: [
																		'Might'
																	],
																	bonus: 0,
																	tier1: '7 + С шкоди; відштовхнути на 3',
																	tier2: '11 + С шкоди; відштовхнути на 5',
																	tier3: '16 + С шкоди; відштовхнути на 7'
																}
															},
															{
																type: 'Текст',
																text: 'Коли ціль завершує цей примусовий рух, кожна істота в межах 2 клітин від цілі відштовхується на 3 клітини.'
															}
														],
														preEffect: '',
														powerRoll: null,
														test: null,
														effect: '',
														strained: '',
														alternateEffects: [],
														spend: [],
														persistence: []
													}
												}
											},
											value: 1
										}
									],
									count: 1,
									selected: []
								}
							}
						]
					},
					{
						level: 7,
						features: [
							{
								id: 'fury-sub-1-7-1',
								name: 'Growing Ferocity Improvement',
								description: '**10 Люті:** Ви маєте подвійну перевагу на тестах Сили і при маневрі Відкидання.',
								type: 'Текст',
								data: null
							}
						]
					},
					{
						level: 8,
						features: [
							{
								id: 'fury-sub-1-8-1',
								name: 'Strongest There Is',
								description: 'Ваша сила неперевершена. Коли ви робите тест Сили, ви можете кинути три кубики і вибрати два з них. Додатково, коли ви використовуєте маневр Відкидання, примусова відстань руху отримує бонус, рівний вашому показнику Сили.',
								type: 'Текст',
								data: null
							}
						]
					},
					{
						level: 9,
						features: [
							{
								id: 'fury-sub-1-9-1',
								name: 'Choice',
								description: '',
								type: 'Вибір',
								data: {
									options: [
										{
											feature: {
												id: 'fury-sub-1-9-1a',
												name: 'Death Comes for You All!',
												description: 'Ви використовуєте свою зброю, щоб створити руйнівну ударну хвилю.',
												type: 'Здібність',
												data: {
													ability: {
														id: 'fury-sub-1-9-1a',
														name: 'Death Comes for You All!',
														description: 'Ви використовуєте свою зброю, щоб створити руйнівну ударну хвилю.',
														type: {
															usage: 'Основна дія',
															free: false,
															trigger: '',
															time: '',
															qualifiers: [],
															freeStrike: false
														},
														keywords: [
															'Area',
															'Магія',
															'Ближній бій',
															'Зброя'
														],
														distance: [
															{
																type: 'Burst',
																value: 3,
																value2: 0,
																within: 0,
																special: '',
																qualifier: ''
															}
														],
														target: 'Кожен ворог у зоні',
														cost: 11,
														repeatable: false,
														minLevel: 1,
														sections: [
															{
																type: 'roll',
																roll: {
																	characteristic: [
																		'Might'
																	],
																	bonus: 0,
																	tier1: '7 шкоди; відштовхнути на 3',
																	tier2: '10 шкоди; відштовхнути на 5',
																	tier3: '15 шкоди; відштовхнути на 7'
																}
															},
															{
																type: 'Текст',
																text: 'Якщо цей примусовий рух призводить до того, що ціль пролітає через обʼєкт, ця ціль отримує додаткові 10 пошкодження.'
															}
														],
														preEffect: '',
														powerRoll: null,
														test: null,
														effect: '',
														strained: '',
														alternateEffects: [],
														spend: [],
														persistence: []
													}
												}
											},
											value: 1
										},
										{
											feature: {
												id: 'fury-sub-1-9-1b',
												name: 'Primordial Vortex',
												description: 'Ви використовуєте силу Первісного Хаосу, щоб притягнути ворогів до себе.',
												type: 'Здібність',
												data: {
													ability: {
														id: 'fury-sub-1-9-1b',
														name: 'Primordial Vortex',
														description: 'Ви використовуєте силу Первісного Хаосу, щоб притягнути ворогів до себе.',
														type: {
															usage: 'Основна дія',
															free: false,
															trigger: '',
															time: '',
															qualifiers: [],
															freeStrike: false
														},
														keywords: [
															'Ближній бій',
															'Удар',
															'Зброя'
														],
														distance: [
															{
																type: 'Burst',
																value: 3,
																value2: 0,
																within: 0,
																special: '',
																qualifier: ''
															}
														],
														target: 'Кожен ворог у зоні',
														cost: 11,
														repeatable: false,
														minLevel: 1,
														sections: [
															{
																type: 'roll',
																roll: {
																	characteristic: [
																		'Might'
																	],
																	bonus: 0,
																	tier1: '3 шкоди; вертикально притягнути на 3',
																	tier2: '5 шкоди; вертикально притягнути на 5',
																	tier3: '8 шкоди; вертикально притягнути на 7'
																}
															},
															{
																type: 'Текст',
																text: 'Якщо цей примусовий рух призводить до того, що ціль врізається у вас, ви не отримуєте пошкодження від зіткнення, а ціль отримує пошкодження, яке мали б отримати ви.'
															}
														],
														preEffect: '',
														powerRoll: null,
														test: null,
														effect: '',
														strained: '',
														alternateEffects: [],
														spend: [],
														persistence: []
													}
												}
											},
											value: 1
										}
									],
									count: 1,
									selected: []
								}
							}
						]
					},
					{
						level: 10,
						features: [
							{
								id: 'fury-sub-1-10-1',
								name: 'Growing Ferocity Improvement',
								description: '**12 Лють:** Коли ви використовуєте героїчну здатність, ви отримуєте 10 тимчасової Витривалості. Додатково, коли ви робите силовий кидок, що примушує ціль до примусового руху, відстань примусового руху отримує бонус, рівний вашому показнику Сили.',
								type: 'Текст',
								data: null
							}
						]
					}
				],
				abilities: [],
				selected: true
			},
			{
				id: 'fury-sub-2',
				name: 'Reaver',
				description: 'Ви спрямовуєте свою лють в інстинкт і хитрість, кидаючи виклик хибному порядку цивілізації.',
				featuresByLevel: [
					{
						level: 1,
						features: [
							{
								id: 'fury-sub-2-1-1',
								name: 'Intrigue Skill',
								description: '',
								type: 'Вибір навички',
								data: {
									options: [],
									listOptions: [
										'Інтриги'
									],
									count: 1,
									selected: [
										'Сховатись'
									]
								}
							},
							{
								id: 'fury-sub-2-1-2',
								name: 'Набір',
								description: '',
								type: 'Набір',
								data: {
									types: [
										''
									],
									count: 1,
									selected: []
								}
							},
							{
								id: 'fury-sub-2-1-3',
								name: 'Primordial Cunning',
								description: '\nВи ніколи не буваєте здивовані. Додатково, коли ви примусово штовхаєте ціль, ви можете замість цього ковзнути нею.\n\nЗі зростанням вашої люті ви отримуєте переваги, зазначені в таблиці «Зростаюча лють Рівера». Переваги накопичуються, за винятком випадків, коли покращена перевага замінює менш значну.\n\n* **Лють 2**: Коли ви використовуєте маневр Відкидання, примусова відстань руху отримує бонус, рівний вашому показнику Спритності.\n* **Лють 4**: Перший раз, коли ви ковзаєте істоту за хід, ви отримуєте 1 сплеск.\n* **Лють 6**: Ви отримуєте перевагу на тести Спритності та при маневрі Відкидання.',
								type: 'Текст',
								data: null
							},
							{
								id: 'fury-sub-2-1-4',
								name: 'Unearthly Reflexes',
								description: 'Ви невловимі, як колібрі.',
								type: 'Здібність',
								data: {
									ability: {
										id: 'fury-sub-2-1-4',
										name: 'Unearthly Reflexes',
										description: 'Ви невловимі, як колібрі.',
										type: {
											usage: 'Тригерна дія',
											free: false,
											trigger: 'You take damage.',
											time: '',
											qualifiers: [],
											freeStrike: false
										},
										keywords: [],
										distance: [
											{
												type: 'Себе',
												value: 0,
												value2: 0,
												within: 0,
												special: '',
												qualifier: ''
											}
										],
										target: 'Себе',
										cost: 0,
										repeatable: false,
										minLevel: 1,
										sections: [
											{
												type: 'Текст',
												text: 'Ви отримуєте половину пошкодження від спрацьованого ефекту і можете зсунутись на кількість клітин, рівну вашому показнику Спритності.'
											},
											{
												type: 'field',
												name: 'Spend',
												value: 1,
												repeatable: false,
												effect: 'If the damage has any potency effects associated with it, the potency is reduced by 1 for you.'
											}
										],
										preEffect: '',
										powerRoll: null,
										test: null,
										effect: '',
										strained: '',
										alternateEffects: [],
										spend: [],
										persistence: []
									}
								}
							}
						]
					},
					{
						level: 2,
						features: [
							{
								id: 'fury-sub-2-2-1',
								name: 'Inescapable Wrath',
								description: 'Невблаганна лють, Швидкість',
								type: 'Набір особливостей',
								data: {
									features: [
										{
											id: 'fury-sub-2-2-1a',
											name: 'Inescapable Wrath',
											description: 'Ви ігноруєте важку місцевість.',
											type: 'Текст',
											data: null
										},
										{
											id: 'fury-sub-2-2-1b',
											name: 'Швидкість',
											description: '',
											type: 'Бонус',
											data: {
												field: 'Швидкість',
												value: 0,
												valueCharacteristics: [
													'Ловкість'
												],
												valueCharacteristicMultiplier: 1,
												valuePerLevel: 0,
												valuePerEchelon: 0
											}
										}
									]
								}
							},
							{
								id: 'fury-sub-2-2-2',
								name: 'Choice',
								description: '',
								type: 'Вибір',
								data: {
									options: [
										{
											feature: {
												id: 'fury-sub-2-2-2a',
												name: 'Death ... Deeaaath!',
												description: 'Ваша невгамовна лють вселяє їм жах у серця.',
												type: 'Здібність',
												data: {
													ability: {
														id: 'fury-sub-2-2-2a',
														name: 'Death ... Deeaaath!',
														description: 'Ваша невгамовна лють вселяє жах у їхніх серцях.',
														type: {
															usage: 'Основна дія',
															free: false,
															trigger: '',
															time: '',
															qualifiers: [],
															freeStrike: false
														},
														keywords: [
															'Ближній бій',
															'Удар',
															'Зброя'
														],
														distance: [
															{
																type: 'Ближній бій',
																value: 1,
																value2: 0,
																within: 0,
																special: '',
																qualifier: ''
															}
														],
														target: 'Одна істота',
														cost: 5,
														repeatable: false,
														minLevel: 1,
														sections: [
															{
																type: 'roll',
																roll: {
																	characteristic: [
																		'Might'
																	],
																	bonus: 0,
																	tier1: '3 + С шкоди; П < [слабкий], приголомшений і зляканий (рят. кидок закінчує)',
																	tier2: '5 + С шкоди; П < [середній], приголомшений і зляканий (рят. кидок закінчує)',
																	tier3: '8 + С шкоди; П < [сильний], приголомшений і зляканий (рят. кидок закінчує)'
																}
															}
														],
														preEffect: '',
														powerRoll: null,
														test: null,
														effect: '',
														strained: '',
														alternateEffects: [],
														spend: [],
														persistence: []
													}
												}
											},
											value: 1
										},
										{
											feature: {
												id: 'fury-sub-2-2-2b',
												name: 'Phalanx-Breaker',
												description: 'Організовувати ваші сили як безпорадні створіння Закону. Жалюгідно.',
												type: 'Здібність',
												data: {
													ability: {
														id: 'fury-sub-2-2-2b',
														name: 'Phalanx-Breaker',
														description: 'Організовувати ваші сили як безпорадні створіння Закону. Жалюгідно.',
														type: {
															usage: 'Основна дія',
															free: false,
															trigger: '',
															time: '',
															qualifiers: [],
															freeStrike: false
														},
														keywords: [
															'Ближній бій',
															'Зброя'
														],
														distance: [
															{
																type: 'Себе',
																value: 0,
																value2: 0,
																within: 0,
																special: '',
																qualifier: ''
															}
														],
														target: 'Self; see below',
														cost: 5,
														repeatable: false,
														minLevel: 1,
														sections: [
															{
																type: 'Текст',
																text: 'Ви зсуваєтесь на відстань до вашої швидкості і виконуєте один силовий кидок, спрямований до трьох ворогів, поруч із якими ви опинилися під час цього зсуву.'
															},
															{
																type: 'roll',
																roll: {
																	characteristic: [
																		'Might'
																	],
																	bonus: 0,
																	tier1: '2 шкоди; Л < [слабкий], приголомшений (рят. кидок закінчує)',
																	tier2: '4 шкоди; Л < [середній], приголомшений (рят. кидок закінчує)',
																	tier3: '6 шкоди; Л < [сильний], приголомшений (рят. кидок закінчує)'
																}
															}
														],
														preEffect: '',
														powerRoll: null,
														test: null,
														effect: '',
														strained: '',
														alternateEffects: [],
														spend: [],
														persistence: []
													}
												}
											},
											value: 1
										}
									],
									count: 1,
									selected: []
								}
							}
						]
					},
					{
						level: 3,
						features: [
							{
								id: 'fury-sub-2-3-1',
								name: 'See Through Your Tricks',
								description: 'Ви маєте подвійну перевагу на тестах для пошуку прихованих істот, виявлення прихованих мотивів або виявлення брехні. Ви також маєте подвійну перевагу на тестах, пов\'язаних із азартними іграми!',
								type: 'Текст',
								data: null
							}
						]
					},
					{
						level: 4,
						features: [
							{
								id: 'fury-sub-2-4-1',
								name: 'Growing Ferocity Improvement',
								description: '**8 Лють:** Першого разу за хід, коли ви ковзаєте істоту, ви отримуєте 2 сплески.',
								type: 'Текст',
								data: null
							}
						]
					},
					{
						level: 5,
						features: [
							{
								id: 'fury-sub-2-5-1',
								name: 'Unfettered',
								description: 'На початку вашого ходу ви можете припинити будь-який стан звʼязаності на собі. Додатково ви маєте подвійний бонус на тести, виконані щоб вирватися із увʼязнення або полону.',
								type: 'Текст',
								data: null
							}
						]
					},
					{
						level: 6,
						features: [
							{
								id: 'fury-sub-2-6-1',
								name: 'Choice',
								description: '',
								type: 'Вибір',
								data: {
									options: [
										{
											feature: {
												id: 'fury-sub-2-6-1a',
												name: 'Death Strike',
												description: 'Коли ви спробуєте кров ворога, ви стаєте ефективнішими і перетворюєте кожен вбивчий удар на можливість.',
												type: 'Здібність',
												data: {
													ability: {
														id: 'fury-sub-2-6-1a',
														name: 'Death Strike',
														description: 'Once you taste your foe’s blood, you become more efficient and turn every killing blow into an opportunity.',
														type: {
															usage: 'Тригерна дія',
															free: true,
															trigger: 'You reduce a creature to 0 Stamina with a strike.',
															time: '',
															qualifiers: [],
															freeStrike: false
														},
														keywords: [
															'Магія',
															'Удар',
															'Зброя'
														],
														distance: [
															{
																type: 'Ближній бій',
																value: 1,
																value2: 0,
																within: 0,
																special: '',
																qualifier: ''
															}
														],
														target: 'Себе',
														cost: 9,
														repeatable: false,
														minLevel: 1,
														sections: [
															{
																type: 'Текст',
																text: 'Ви націлюєтеся на істоту поруч із вами тим самим ударом, використовуючи той самий силовий кидок, що й спрацьований удар.'
															}
														],
														preEffect: '',
														powerRoll: null,
														test: null,
														effect: '',
														strained: '',
														alternateEffects: [],
														spend: [],
														persistence: []
													}
												}
											},
											value: 1
										},
										{
											feature: {
												id: 'fury-sub-2-6-1b',
												name: 'Seek and Destroy',
												description: 'Ви прориваєтесь через ворожі ряди, щоб подати приклад.',
												type: 'Здібність',
												data: {
													ability: {
														id: 'fury-sub-2-6-1b',
														name: 'Seek and Destroy',
														description: 'Ви прориваєтесь через ворожі ряди, щоб подати приклад.',
														type: {
															usage: 'Основна дія',
															free: false,
															trigger: '',
															time: '',
															qualifiers: [],
															freeStrike: false
														},
														keywords: [
															'Ближній бій',
															'Удар',
															'Зброя'
														],
														distance: [
															{
																type: 'Ближній бій',
																value: 1,
																value2: 0,
																within: 0,
																special: '',
																qualifier: ''
															}
														],
														target: 'Одна істота',
														cost: 9,
														repeatable: false,
														minLevel: 1,
														sections: [
															{
																type: 'roll',
																roll: {
																	characteristic: [
																		'Might'
																	],
																	bonus: 0,
																	tier1: '4 + С шкоди; П < [слабкий] зляканий (рят. кидок закінчує)',
																	tier2: '6 + С шкоди; П < [середній] зляканий (рят. кидок закінчує)',
																	tier3: '10 + С шкоди; П < [сильний] зляканий (рят. кидок закінчує)'
																}
															},
															{
																type: 'Текст',
																text: 'Якщо ціль, яка не є лідером або сольною істотою, стає втомленою від цього удару, вона зменшується до 0 Витривалості, і ви обираєте ворога в межах 5 клітин від себе. Якщо той ворог має П < [середній], він лякається вас (рятівний кидок закінчує ефект).'
															}
														],
														preEffect: '',
														powerRoll: null,
														test: null,
														effect: '',
														strained: '',
														alternateEffects: [],
														spend: [],
														persistence: []
													}
												}
											},
											value: 1
										}
									],
									count: 1,
									selected: []
								}
							}
						]
					},
					{
						level: 7,
						features: [
							{
								id: 'fury-sub-2-7-1',
								name: 'Growing Ferocity Improvement',
								description: '**10 Лють:** Ви маєте подвійну перевагу на тестах Спритності та при маневрі Відкидання.',
								type: 'Текст',
								data: null
							}
						]
					},
					{
						level: 8,
						features: [
							{
								id: 'fury-sub-2-8-1',
								name: 'A Step Ahead',
								description: 'Ви рухаєтеся з легендарною грацією. Коли ви робите тест Спритності, ви можете кинути три кубики і вибрати два з них. Додатково, коли ви використовуєте дію відступу, відстань, на яку ви можете зміститися, отримує бонус, рівний вашому показнику Спритності.',
								type: 'Текст',
								data: null
							}
						]
					},
					{
						level: 9,
						features: [
							{
								id: 'fury-sub-2-9-1',
								name: 'Choice',
								description: '',
								type: 'Вибір',
								data: {
									options: [
										{
											feature: {
												id: 'fury-sub-2-9-1a',
												name: 'Primordial Bane',
												description: 'Ви налаштовуєте ціль так, щоб вона стала вразливішою до певного елементу.',
												type: 'Здібність',
												data: {
													ability: {
														id: 'fury-sub-2-9-1a',
														name: 'Primordial Bane',
														description: 'Ви налаштовуєте ціль так, щоб вона стала вразливішою до певного елементу.',
														type: {
															usage: 'Основна дія',
															free: false,
															trigger: '',
															time: '',
															qualifiers: [],
															freeStrike: false
														},
														keywords: [
															'Магія',
															'Ближній бій',
															'Удар',
															'Зброя'
														],
														distance: [
															{
																type: 'Ближній бій',
																value: 1,
																value2: 0,
																within: 0,
																special: '',
																qualifier: ''
															}
														],
														target: 'Одна істота',
														cost: 11,
														repeatable: false,
														minLevel: 1,
														sections: [
															{
																type: 'roll',
																roll: {
																	characteristic: [
																		'Might'
																	],
																	bonus: 0,
																	tier1: '11 + С шкоди',
																	tier2: '16 + С шкоди',
																	tier3: '21 + С шкоди'
																}
															},
															{
																type: 'Текст',
																text: 'Оберіть кислотне, холодне, корупційне, вогняне, блискавичне, отруйне або звукове ушкодження. Ціль втрачає будь-яку імунітет до обраного типу ушкоджень і отримує слабкість 10 до обраного типу (рятівний кидок закінчує ефект).'
															}
														],
														preEffect: '',
														powerRoll: null,
														test: null,
														effect: '',
														strained: '',
														alternateEffects: [],
														spend: [],
														persistence: []
													}
												}
											},
											value: 1
										},
										{
											feature: {
												id: 'fury-sub-2-9-1b',
												name: 'Shower of Blood',
												description: 'Ви шокуєте ворогів жорстокістю свого удару, порушуючи баланс бою.',
												type: 'Здібність',
												data: {
													ability: {
														id: 'fury-sub-2-9-1b',
														name: 'Shower of Blood',
														description: 'Ви шокуєте ворогів жорстокістю свого удару, порушуючи баланс бою.',
														type: {
															usage: 'Основна дія',
															free: false,
															trigger: '',
															time: '',
															qualifiers: [],
															freeStrike: false
														},
														keywords: [
															'Ближній бій',
															'Удар',
															'Зброя'
														],
														distance: [
															{
																type: 'Ближній бій',
																value: 1,
																value2: 0,
																within: 0,
																special: '',
																qualifier: ''
															}
														],
														target: 'Одна істота',
														cost: 11,
														repeatable: false,
														minLevel: 1,
														sections: [
															{
																type: 'roll',
																roll: {
																	characteristic: [
																		'Might'
																	],
																	bonus: 0,
																	tier1: '12 + С шкоди',
																	tier2: '18 + С шкоди',
																	tier3: '24 + С шкоди'
																}
															},
															{
																type: 'Текст',
																text: 'Кожний ворог у межах 5 клітин від вас відволікається до кінця раунду. Поки істота відволікана таким чином, вона не може виконувати спрацьовані дії або безкоштовні спрацьовані дії, кидки здібностей проти неї отримують перевагу, а її характеристики вважаються на 1 нижчими при опорі потужностям.'
															}
														],
														preEffect: '',
														powerRoll: null,
														test: null,
														effect: '',
														strained: '',
														alternateEffects: [],
														spend: [],
														persistence: []
													}
												}
											},
											value: 1
										}
									],
									count: 1,
									selected: []
								}
							}
						]
					},
					{
						level: 10,
						features: [
							{
								id: 'fury-sub-2-10-1',
								name: 'Growing Ferocity Improvement',
								description: '**12 Лють:** Коли ви використовуєте героїчну здатність, ви отримуєте 10 тимчасової Витривалості. Додатково, коли ви робите силовий кидок, що примушує ціль до примусового руху, відстань примусового руху отримує бонус, рівний вашому показнику Спритності.',
								type: 'Текст',
								data: null
							}
						]
					}
				],
				abilities: [],
				selected: false
			},
			{
				id: 'fury-sub-3',
				name: 'Stormwight',
				description: 'Ви спрямовуєте свою лють у форму тварин і первісних штормів.',
				featuresByLevel: [
					{
						level: 1,
						features: [
							{
								id: 'fury-sub-3-1-1',
								name: 'Intrigue Skill',
								description: '',
								type: 'Вибір навички',
								data: {
									options: [],
									listOptions: [
										'Інтриги'
									],
									count: 1,
									selected: [
										'Відстеження'
									]
								}
							},
							{
								id: 'fury-sub-3-1-2',
								name: 'Beast Shape',
								description: '',
								type: 'Набір',
								data: {
									types: [
										'Stormwight'
									],
									count: 1,
									selected: []
								}
							},
							{
								id: 'fury-sub-3-1-3',
								name: 'Relentless Hunter',
								description: 'Ви отримуєте перевагу на тестах, що використовують навичку Відстеження.',
								type: 'Текст',
								data: null
							},
							{
								id: 'fury-sub-3-1-4',
								name: 'Furious Change',
								description: 'У гніві ви повертаєтеся до більш звірячої форми.',
								type: 'Здібність',
								data: {
									ability: {
										id: 'fury-sub-3-1-4',
										name: 'Furious Change',
										description: 'У гніві ви повертаєтеся до більш звірячої форми.',
										type: {
											usage: 'Тригерна дія',
											free: false,
											trigger: 'You lose Stamina and are not dying.',
											time: '',
											qualifiers: [],
											freeStrike: false
										},
										keywords: [],
										distance: [
											{
												type: 'Себе',
												value: 0,
												value2: 0,
												within: 0,
												special: '',
												qualifier: ''
											}
										],
										target: 'Себе',
										cost: 0,
										repeatable: false,
										minLevel: 1,
										sections: [
											{
												type: 'Текст',
												text: 'Ви отримуєте тимчасову Витривалість, рівну вашому показнику Сили, і можете перейти у тваринну або гібридну форму.'
											},
											{
												type: 'field',
												name: 'Spend',
												value: 1,
												repeatable: false,
												effect: 'If you are not dying, you can spend a Recovery.'
											}
										],
										preEffect: '',
										powerRoll: null,
										test: null,
										effect: '',
										strained: '',
										alternateEffects: [],
										spend: [],
										persistence: []
									}
								}
							},
							{
								id: 'fury-sub-3-1-5',
								name: 'Aspect of the Wild',
								description: 'Ви приймаєте форму тварини, яка каналізує вашу лють.',
								type: 'Здібність',
								data: {
									ability: {
										id: 'fury-sub-3-1-5',
										name: 'Aspect of the Wild',
										description: 'Ви приймаєте форму тварини, яка каналізує вашу лють.',
										type: {
											usage: 'Маневр',
											free: false,
											trigger: '',
											time: '',
											qualifiers: [],
											freeStrike: false
										},
										keywords: [
											'Магія'
										],
										distance: [
											{
												type: 'Себе',
												value: 0,
												value2: 0,
												within: 0,
												special: '',
												qualifier: ''
											}
										],
										target: 'Себе',
										cost: 0,
										repeatable: false,
										minLevel: 1,
										sections: [
											{
												type: 'Текст',
												text: 'Ви можете перевтілитися у тварину, визначену вашим набором штормового воїна, у гібридну форму або повернутися у свою справжню форму. Перебуваючи у тваринній або гібридній формі, ви можете говорити, як звично, і також можете спілкуватися з тваринами, що мають ту саму форму. Якщо ви перебуваєте в переговорі з твариною у тваринній формі, ви вважаєте свою Відомість на 2 вищою за звичайну.'
											},
											{
												type: 'field',
												name: 'Spend',
												value: 1,
												repeatable: false,
												effect: 'As a безкоштовний маневр, you can shapeshift a second time, either into another animal form, into your hybrid form, or back into your true form.'
											}
										],
										preEffect: '',
										powerRoll: null,
										test: null,
										effect: '',
										strained: '',
										alternateEffects: [],
										spend: [],
										persistence: []
									}
								}
							}
						]
					},
					{
						level: 2,
						features: [
							{
								id: 'fury-sub-3-2-1',
								name: 'Tooth and Claw',
								description: 'Наприкінці кожного вашого ходу кожен ворог, що знаходиться поруч із вами, отримує шкоду, рівну вашому показнику Сили.',
								type: 'Текст',
								data: null
							},
							{
								id: 'fury-sub-3-2-2',
								name: 'Choice',
								description: '',
								type: 'Вибір',
								data: {
									options: [
										{
											feature: {
												id: 'fury-sub-3-2-2a',
												name: 'Apex Predator',
												description: 'Я знайду тебе.',
												type: 'Здібність',
												data: {
													ability: {
														id: 'fury-sub-3-2-2a',
														name: 'Apex Predator',
														description: 'Я знайду тебе.',
														type: {
															usage: 'Основна дія',
															free: false,
															trigger: '',
															time: '',
															qualifiers: [],
															freeStrike: false
														},
														keywords: [
															'Ближній бій',
															'Удар',
															'Зброя'
														],
														distance: [
															{
																type: 'Ближній бій',
																value: 1,
																value2: 0,
																within: 0,
																special: '',
																qualifier: ''
															}
														],
														target: 'Одна істота',
														cost: 5,
														repeatable: false,
														minLevel: 1,
														sections: [
															{
																type: 'roll',
																roll: {
																	characteristic: [
																		'Might'
																	],
																	bonus: 0,
																	tier1: '4 + С шкоди; І < [слабкий], сповільнений (рят. кидок закінчує)',
																	tier2: '6 + С шкоди; І < [середній], сповільнений (рят. кидок закінчує)',
																	tier3: '10 + С шкоди; І < [сильний], сповільнений (рят. кидок закінчує)'
																}
															},
															{
																type: 'Текст',
																text: 'Ціль не може бути прихованою від вас протягом 24 годин. До кінця зустрічі, коли ціль добровільно рухається, ви можете використати безкоштовну спрацьовану дію, щоб переміститися.'
															}
														],
														preEffect: '',
														powerRoll: null,
														test: null,
														effect: '',
														strained: '',
														alternateEffects: [],
														spend: [],
														persistence: []
													}
												}
											},
											value: 1
										},
										{
											feature: {
												id: 'fury-sub-3-2-2b',
												name: 'Visceral Roar',
												description: 'Звук шторму всередині вас оглушує ваших супротивників.',
												type: 'Здібність',
												data: {
													ability: {
														id: 'fury-sub-3-2-2b',
														name: 'Visceral Roar',
														description: 'Звук шторму всередині вас оглушує ваших супротивників.',
														type: {
															usage: 'Основна дія',
															free: false,
															trigger: '',
															time: '',
															qualifiers: [],
															freeStrike: false
														},
														keywords: [
															'Area',
															'Магія'
														],
														distance: [
															{
																type: 'Burst',
																value: 2,
																value2: 0,
																within: 0,
																special: '',
																qualifier: ''
															}
														],
														target: 'Кожен ворог у зоні',
														cost: 5,
														repeatable: false,
														minLevel: 1,
														sections: [
															{
																type: 'roll',
																roll: {
																	characteristic: [
																		'Might'
																	],
																	bonus: 0,
																	tier1: '2 шкоди; відштовхнути на 1; С < [слабкий], приголомшений (рят. кидок закінчує)',
																	tier2: '5 шкоди; відштовхнути на 2; С < [середній], приголомшений (рят. кидок закінчує)',
																	tier3: '7 шкоди; відштовхнути на 3; С < [сильний], приголомшений (рят. кидок закінчує)'
																}
															},
															{
																type: 'Текст',
																text: 'Ця здібність завдає ушкодження вашого первісного типу.'
															}
														],
														preEffect: '',
														powerRoll: null,
														test: null,
														effect: '',
														strained: '',
														alternateEffects: [],
														spend: [],
														persistence: []
													}
												}
											},
											value: 1
										}
									],
									count: 1,
									selected: []
								}
							}
						]
					},
					{
						level: 3,
						features: [
							{
								id: 'fury-sub-1-3-1',
								name: 'Nature’s Knight',
								description: '\nВи можете говорити з тваринами та елементалями. Додатково ви автоматично відчуваєте присутність тварин і елементалів у межах 10 клітин від себе, навіть якщо вони приховані.\n\nКоли ви ведете переговори з твариною або елементалем, ви вважаєте свою Відомість на 1 вищою за звичайну. Це додається до підвищення вашої ефективної Відомості в переговорах з твариною вашого типу під час форми тварини.',
								type: 'Текст',
								data: null
							}
						]
					},
					{
						level: 5,
						features: [
							{
								id: 'fury-sub-3-5-1',
								name: 'Stormborn',
								description: 'Ви та кожен союзник у межах 5 клітин ігноруєте негативні ефекти від негоди, такі як прокляття або пошкодження середовища. Додатково, ви можете використовувати рису «Благословення сприятливої погоди» так, ніби ви є каналом 1-го рівня (див. рису 1-го рівня для Домена).',
								type: 'Текст',
								data: null
							}
						]
					},
					{
						level: 6,
						features: [
							{
								id: 'fury-sub-3-6-1',
								name: 'Choice',
								description: '',
								type: 'Вибір',
								data: {
									options: [
										{
											feature: {
												id: 'fury-sub-3-6-1a',
												name: 'Pounce',
												description: 'Ви вражаєте ціль як найвищий хижак, яким ви є.',
												type: 'Здібність',
												data: {
													ability: {
														id: 'fury-sub-3-6-1a',
														name: 'Pounce',
														description: 'Ви вражаєте ціль як найвищий хижак, яким ви є.',
														type: {
															usage: 'Основна дія',
															free: false,
															trigger: '',
															time: '',
															qualifiers: [],
															freeStrike: false
														},
														keywords: [
															'Магія',
															'Ближній бій',
															'Удар',
															'Зброя'
														],
														distance: [
															{
																type: 'Ближній бій',
																value: 1,
																value2: 0,
																within: 0,
																special: '',
																qualifier: ''
															}
														],
														target: 'Одна істота',
														cost: 9,
														repeatable: false,
														minLevel: 1,
														sections: [
															{
																type: 'roll',
																roll: {
																	characteristic: [
																		'Might'
																	],
																	bonus: 0,
																	tier1: '8 шкоди; С < [слабкий], схоплений',
																	tier2: '13 шкоди; С < [середній], схоплений',
																	tier3: '17 шкоди; С < [сильний], схоплений'
																}
															},
															{
																type: 'Текст',
																text: 'Ви зсуваєтесь до 4 клітин, беручи ціль із собою. Поки ціль утримується таким чином, вона отримує пошкодження, рівне подвоєному вашому показнику Сили, на початку кожного вашого ходу.'
															}
														],
														preEffect: '',
														powerRoll: null,
														test: null,
														effect: '',
														strained: '',
														alternateEffects: [],
														spend: [],
														persistence: []
													}
												}
											},
											value: 1
										},
										{
											feature: {
												id: 'fury-sub-3-6-1b',
												name: 'Riders on the Storm',
												description: 'Ви зосереджуєте свій зв\'язок із Первісним Хаосом у вируючий шторм.',
												type: 'Здібність',
												data: {
													ability: {
														id: 'fury-sub-3-6-1b',
														name: 'Riders on the Storm',
														description: 'Ви зосереджуєте свій зв\'язок із Первісним Хаосом у вируючий шторм.',
														type: {
															usage: 'Маневр',
															free: false,
															trigger: '',
															time: '',
															qualifiers: [],
															freeStrike: false
														},
														keywords: [
															'Area',
															'Магія'
														],
														distance: [
															{
																type: 'Aura',
																value: 3,
																value2: 0,
																within: 0,
																special: '',
																qualifier: ''
															}
														],
														target: 'Кожна істота в зоні',
														cost: 9,
														repeatable: false,
														minLevel: 1,
														sections: [
															{
																type: 'Текст',
																text: 'До кінця зустрічі або доки ви не будете вмирати, кожний ворог уражається ушкодженням вашого первісного типу, рівним подвоєному вашому показнику Сили, в кінці кожного вашого ходу. Додатково, ви можете літати, поки аура активна. Кожний союзник, що починає або завершує свій хід у зоні, також може літати до початку свого наступного ходу або до завершення ефекту.'
															},
															{
																type: 'Текст',
																text: 'Коли ви використовуєте цю здібність поза боєм без витрати люті, ви повинні провести 1 невпинну хвилину, викликаючи первісну бурю, що заповнює область, і отримуєте 1d6 пошкодження перед тим, як здібність набуде чинності. Буря триває 1 годину або до початку бою.'
															}
														],
														preEffect: '',
														powerRoll: null,
														test: null,
														effect: '',
														strained: '',
														alternateEffects: [],
														spend: [],
														persistence: []
													}
												}
											},
											value: 1
										}
									],
									count: 1,
									selected: []
								}
							}
						]
					},
					{
						level: 8,
						features: [
							{
								id: 'fury-sub-3-8-1',
								name: 'Menagerie',
								description: 'Ви можете використовувати всі набори штормового воїна (stormwight). Під час перерви ви можете обрати змінити свій набір штормового воїна і все ще взяти іншу активність перерви. Риса «Рицар природи» тепер дозволяє вам автоматично відчувати присутність тварин у межах 1 милі від вас. Додатково, коли ви робите тест для відстеження істоти, ви можете кинути три кубики і вибрати два з них.',
								type: 'Текст',
								data: null
							}
						]
					},
					{
						level: 9,
						features: [
							{
								id: 'fury-sub-3-9-1',
								name: 'Choice',
								description: '',
								type: 'Вибір',
								data: {
									options: [
										{
											feature: {
												id: 'fury-sub-3-9-1a',
												name: 'Death Rattle',
												description: 'Ви випускаєте потойбічний крик, що розриває ворогів і вбиває найслабших серед них.',
												type: 'Здібність',
												data: {
													ability: {
														id: 'fury-sub-3-9-1a',
														name: 'Death Rattle',
														description: 'Ви випускаєте потойбічний крик, що розриває ворогів і вбиває найслабших серед них.',
														type: {
															usage: 'Основна дія',
															free: false,
															trigger: '',
															time: '',
															qualifiers: [],
															freeStrike: false
														},
														keywords: [
															'Area',
															'Магія'
														],
														distance: [
															{
																type: 'Burst',
																value: 3,
																value2: 0,
																within: 0,
																special: '',
																qualifier: ''
															}
														],
														target: 'Кожен ворог у зоні',
														cost: 11,
														repeatable: false,
														minLevel: 1,
														sections: [
															{
																type: 'roll',
																roll: {
																	characteristic: [
																		'Might'
																	],
																	bonus: 0,
																	tier1: '4 психічної шкоди; any target who is a minion is reduced to 0 Витривалість',
																	tier2: '6 психічної шкоди; any target who is a minion is reduced to 0 Витривалість, as does one winded target who is not a ватажком або сольним створінням',
																	tier3: '10 психічної шкоди; each target who is not a ватажком або сольним створінням є захеканою; any target who is a minion is reduced to 0 Витривалість, as does one winded target who is not a ватажком або сольним створінням'
																}
															}
														],
														preEffect: '',
														powerRoll: null,
														test: null,
														effect: '',
														strained: '',
														alternateEffects: [],
														spend: [],
														persistence: []
													}
												}
											},
											value: 1
										},
										{
											feature: {
												id: 'fury-sub-3-9-1b',
												name: 'Deluge',
												description: 'Ви викликаєте свій первісний шторм.',
												type: 'Здібність',
												data: {
													ability: {
														id: 'fury-sub-3-9-1b',
														name: 'Deluge',
														description: 'Ви викликаєте свій первісний шторм.',
														type: {
															usage: 'Основна дія',
															free: false,
															trigger: '',
															time: '',
															qualifiers: [],
															freeStrike: false
														},
														keywords: [
															'Area',
															'Магія',
															'Дальній'
														],
														distance: [
															{
																type: 'Cube',
																value: 5,
																value2: 0,
																within: 10,
																special: '',
																qualifier: ''
															}
														],
														target: 'Кожен ворог у зоні',
														cost: 11,
														repeatable: false,
														minLevel: 1,
														sections: [
															{
																type: 'roll',
																roll: {
																	characteristic: [
																		'Might'
																	],
																	bonus: 0,
																	tier1: '7 шкоди',
																	tier2: '10 шкоди',
																	tier3: '15 шкоди'
																}
															},
															{
																type: 'Текст',
																text: 'Ця здібність завдає ушкодження вашого первісного типу і ігнорує імунітет до ушкоджень.'
															}
														],
														preEffect: '',
														powerRoll: null,
														test: null,
														effect: '',
														strained: '',
														alternateEffects: [],
														spend: [],
														persistence: []
													}
												}
											},
											value: 1
										}
									],
									count: 1,
									selected: []
								}
							}
						]
					}
				],
				abilities: [],
				selected: false
			}
		],
		level: 1,
		characteristics: [
			{
				characteristic: 'Might',
				value: 2
			},
			{
				characteristic: 'Ловкість',
				value: 2
			},
			{
				characteristic: 'Reason',
				value: -1
			},
			{
				characteristic: 'Intuition',
				value: 1
			},
			{
				characteristic: 'Presence',
				value: 1
			}
		]
	},
	career: {
		id: 'career-warden',
		name: 'Warden',
		description: 'Ви захищали дику місцевість від тих, хто хотів нашкодити їй, наприклад браконьєрів або культів, що прагнули знищити природний світ. Добре знаючи свою землю, ви також могли б служити провідником або лідером рятувальної партії для тих, хто блукає в дику природну місцевість.',
		features: [
			{
				id: 'career-warden-feature-1',
				name: 'Lore Skill',
				description: '',
				type: 'Вибір навички',
				data: {
					options: [],
					listOptions: [
						'Знання'
					],
					count: 1,
					selected: [
						'Відстеження'
					]
				}
			},
			{
				id: 'career-warden-feature-2',
				name: 'Exploration Skill',
				description: '',
				type: 'Вибір навички',
				data: {
					options: [],
					listOptions: [
						'Дослідження'
					],
					count: 1,
					selected: [
						'Лазіння'
					]
				}
			},
			{
				id: 'career-warden-feature-3',
				name: 'Intrigue Skill',
				description: '',
				type: 'Вибір навички',
				data: {
					options: [],
					listOptions: [
						'Інтриги'
					],
					count: 1,
					selected: [
						'Пильність'
					]
				}
			},
			{
				id: 'career-warden-feature-4',
				name: 'Мова',
				description: '',
				type: 'Вибір мови',
				data: {
					options: [],
					count: 1,
					selected: [
						'Васлоріан (Vaslorian)'
					]
				}
			},
			{
				id: 'career-warden-feature-5',
				name: 'Project Points',
				description: '',
				type: 'Бонус',
				data: {
					field: 'Project Points',
					value: 120,
					valueCharacteristics: [],
					valueCharacteristicMultiplier: 1,
					valuePerLevel: 0,
					valuePerEchelon: 0
				}
			},
			{
				id: 'career-warden-feature-6',
				name: 'Exploration Perk',
				description: '',
				type: 'Перевага',
				data: {
					lists: [
						'Дослідження'
					],
					count: 1,
					selected: [
						{
							id: 'perk-brawny',
							name: 'Brawny',
							description: 'Коли ви провалюєте тест Сили, ви можете втратити Витривалість у розмірі 1d6 + ваш рівень, щоб підвищити результат тесту на одну категорію. Цю перевагу можна використовувати лише один раз на тест.',
							type: 'Текст',
							data: null,
							list: 'Дослідження'
						}
					]
				}
			}
		],
		incitingIncidents: {
			options: [
				{
					id: 'career-warden-ii-1',
					name: 'Betrayed',
					description: 'Коли чужинці прийшли на ваші землі з наміром експлуатувати дику природу заради ресурсів, ви виступили проти них. Проте кілька інших захисників підтримали цих чужинців і дозволили їм руйнувати природу. Відмовившись спостерігати за руйнуванням своєї батьківщини, ви пішли. Тепер ви допомагаєте іншим уникнути такої долі.'
				},
				{
					id: 'career-warden-ii-2',
					name: 'Corruption',
					description: 'Хвороба вразила землі, які ви охороняєте, спричиняючи агресію у тварин і викривлення рослин у щось темне та зловісне. Ви пробували все — магічне й звичайне — щоб зупинити пошесть, але вона продовжує ширитися. Тому ви вирушили на пошуки лікування або незаражених земель, які можна захистити.'
				},
				{
					id: 'career-warden-ii-3',
					name: 'Exiled',
					description: 'Ви зробили помилку, яку не можна було пробачити. Інші захисники регіону вирішили вашу долю, вигнавши вас з ваших земель з наказом ніколи не повертатися.'
				},
				{
					id: 'career-warden-ii-4',
					name: 'Honor the Fallen',
					description: 'Група героїв прийшла у вашу територію із проблемами. Ви билися поруч з ними, щоб відбити зло, але сила була надто велика. Герої впали, і ваша дика місцевість була назавжди змінена. Хоча ваші землі вже не врятувати, є інші землі, яким ви можете допомогти.'
				},
				{
					id: 'career-warden-ii-5',
					name: 'Portents',
					description: 'Були ознаки. Ви намагалися їх ігнорувати, але коли велика тварина впала біля ваших ніг, ви змушені були визнати правду. Вам судилося покинути рідні землі і стати учасником битви за долю всіх земель — і тому ви відмовилися від єдиного життя, яке знали.'
				},
				{
					id: 'career-warden-ii-6',
					name: 'Theft',
					description: 'Ви відповідали за охорону чогось цінного, важливого для виживання вашого регіону. Але ви дозволили комусь увійти, і ця особа зрадила вашу довіру, вкравши те, що ви мали охороняти. Ви покинули свій вибраний регіон, щоб спокутувати свою помилку.'
				}
			],
			selected: {
				id: 'career-warden-ii-4',
				name: 'Honor the Fallen',
				description: 'Група героїв прийшла у вашу територію із проблемами. Ви билися поруч з ними, щоб відбити зло, але сила була надто велика. Герої впали, і ваша дика місцевість була назавжди змінена. Хоча ваші землі вже не врятувати, є інші землі, яким ви можете допомогти.'
			},
			selectedID: 'career-warden-ii-4'
		}
	},
	complication: null,
	features: [
		{
			id: 'default-language',
			name: 'Default Language',
			description: '',
			type: 'Вибір мови',
			data: {
				options: [],
				count: 1,
				selected: [
					'Келіан (Caelian)'
				]
			}
		}
	],
	state: {
		staminaDamage: 0,
		staminaTemp: 0,
		recoveriesUsed: 0,
		surges: 0,
		victories: 0,
		xp: 0,
		heroTokens: 0,
		renown: 0,
		wealth: 1,
		projectPoints: 0,
		conditions: [],
		inventory: [],
		projects: [],
		titles: [],
		controlledSlots: [],
		notes: '',
		encounterState: 'ready',
		hidden: false,
		defeated: false
	},
	abilityCustomizations: []
} as unknown as Hero;
