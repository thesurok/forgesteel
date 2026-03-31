import { Hero } from '@/models/hero';

export const wodeElfTroubadour = {
	id: 'HVPFufs9Uv4PWrKi',
	name: 'Лліаріон',
	picture: null,
	folder: '',
	settingIDs: [
		'',
		'orden'
	],
	ancestry: {
		id: 'ancestry-wode-elf',
		name: 'Ельф (вуд)',
		description: 'Діти лісових небожителів і господарі лісів, які називаються вудами, вудські ельфи вважають усі ліси своєю спадщиною. Вони знають і насолоджуються своєю репутацією серед людей за викрадення дітей, які заходять занадто далеко в ліс. Люди повинні боятися дерев.',
		features: [
			{
				id: 'wode-elf-feature-1',
				name: 'Вудська ельфійська чарівність',
				description: 'Ви можете магічно змінювати свою зовнішність, щоб краще зливатися з оточенням. Ви отримуєте перевагу на випробуваннях, зроблених для приховування та крадіжки, а випробування, зроблені для пошуку вас, поки ви приховані, отримують шкоду.',
				type: 'Текст',
				data: null
			},
			{
				id: 'wode-elf-feature-2',
				name: 'Риси вудського ельфа',
				description: '',
				type: 'Вибір',
				data: {
					options: [
						{
							feature: {
								id: 'wode-elf-feature-2-1',
								name: 'Лісова хода',
								description: 'Ви можете зміщуватися в і під час перебування в складній місцевості.',
								type: 'Текст',
								data: null
							},
							value: 1
						},
						{
							feature: {
								id: 'wode-elf-feature-2-2',
								name: 'Повернення до спогадів',
								description: 'Доступ до спогадів для вас такий же легкий, як і життя в теперішньому. Ви отримуєте перевагу на випробуваннях, зроблених для згадування знань.',
								type: 'Текст',
								data: null
							},
							value: 1
						},
						{
							feature: {
								id: 'wode-elf-feature-2-3',
								name: 'Швидкий',
								description: '',
								type: 'Швидкість',
								data: {
									speed: 6
								}
							},
							value: 1
						},
						{
							feature: {
								id: 'wode-elf-feature-2-4',
								name: 'Іншосвітова грація',
								description: 'Ваше ельфійське тіло та розум не можуть бути стримані надовго. Коли ви робите рятувальний кидок, ви успішно проходите на результаті 5 або вище.',
								type: 'Текст',
								data: null
							},
							value: 2
						},
						{
							feature: {
								id: 'wode-elf-feature-2-5',
								name: 'Вуд захищається',
								description: 'Колючі лози зʼявляються і намагаються звʼязати вашого ворога.',
								type: 'Здібність',
								data: {
									ability: {
										id: 'wode-elf-feature-2-5',
										name: 'Вуд захищається',
										description: 'Колючі лози зʼявляються і намагаються звʼязати вашого ворога.',
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
											'Дальній',
											'Удар'
										],
										distance: [
											{
												type: 'Дальній',
												value: 10,
												value2: 0,
												within: 0,
												special: '',
												qualifier: ''
											}
										],
										target: 'Одна істота',
										cost: 'signature',
										repeatable: false,
										minLevel: 1,
										sections: [
											{
												type: 'roll',
												roll: {
													characteristic: [
														'Сила',
														'Ловкість'
													],
													bonus: 0,
													tier1: '2 + С або Л шкоди; Л < [слабкий], уповільнений (рят. кидок закінчує)',
													tier2: '3 + С або Л шкоди; Л < [середній], уповільнений (рят. кидок закінчує)',
													tier3: '5 + С або Л шкоди; Л < [сильний], сковування (рят. кидок закінчує)'
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
							value: 2
						},
						{
							feature: {
								id: 'wode-elf-feature-2-6',
								name: 'Швидкий і жорстокий',
								description: 'Коли ви завдаєте критичного удару, ви можете виконати додаткову основну дію та додаткову дію переміщення замість лише основної дії.',
								type: 'Текст',
								data: null
							},
							value: 1
						}
					],
					count: 'ancestry',
					selected: [
						{
							id: 'wode-elf-feature-2-4',
							name: 'Іншосвітова грація',
							description: 'Ваше ельфійське тіло та розум не можуть бути стримані надовго. Коли ви робите рятувальний кидок, ви успішно проходите на результаті 5 або вище.',
							type: 'Текст',
							data: null
						},
						{
							id: 'wode-elf-feature-2-3',
							name: 'Швидкий',
							description: '',
							type: 'Швидкість',
							data: {
								speed: 6
							}
						}
					]
				}
			}
		],
		ancestryPoints: 3
	},
	culture: {
		id: 'culture-bespoke-culture',
		name: 'Авторська культура',
		description: 'Оберіть будь-яке середовище, організацію та виховання.',
		type: 'Авторська',
		language: {
			id: 'culture-language',
			name: 'Мова',
			description: '',
			type: 'Вибір мови',
			data: {
				options: [],
				count: 1,
				selected: ['Іллірик (Yllyric)']
			}
		},
		languages: [],
		environment: {
			id: 'env-wilderness',
			name: 'Дика місцевість',
			description: 'Культура дикої місцевості не намагається підкорити природу, в якій живе — це може бути пустеля, ліс, болото, тундра, океан чи інші екзотичні місця. Люди такої культури процвітають серед природи, отримуючи їжу й притулок від землі. Це може бути коло друїдів, що охороняють віддалений гай, банда розбійників у печерах пустелі чи табір орків-найманців у горах. Люди дикої культури вчаться використовувати землю для всього необхідного, зазвичай виготовляючи власні інструменти, одяг тощо.',
			type: 'Вибір навички',
			data: {
				options: [],
				listOptions: [
					'Ремесло',
					'Дослідження'
				],
				count: 1,
				selected: [
					'Гімнастика'
				]
			}
		},
		organization: {
			id: 'org-bureaucratic',
			name: 'Бюрократична',
			description: 'Бюрократичні культури пронизані офіційним керівництвом і формально записаними законами. Члени такої культури часто мають ранг згідно з цими законами, а влада належить невеликій групі людей за правом народження, голосуванням чи іншим офіційним критерієм. У багатьох бюрократичних спільнотах є одна особа на вершині, хоча інші можуть керуватися радою. Торгова гільдія з гільдмайстром, скарбником, секретарем і статутом; феодал, що керує лицарями, які, у свою чергу, керують селянами; і мілітаристське суспільство з чіткими рангами та правилами — усе це приклади бюрократичних культур. Ті, хто процвітає в бюрократичних культурах, не просто дотримуються правил, а вміють використовувати їх на свою користь, змінюючи чи тлумачачи політику для власної вигоди. Вміння спілкуватися з тими, хто створює закони, часто є ключем до успіху. Інші ж спеціалізуються на тому, щоб діяти поза суворими правилами, не потрапляючи під покарання.',
			type: 'Вибір навички',
			data: {
				options: [],
				listOptions: [
					'Міжособистісні',
					'Інтриги'
				],
				count: 1,
				selected: [
					'Крастись'
				]
			}
		},
		upbringing: {
			id: 'up-creative',
			name: 'Творча',
			description: 'Герой із творчим вихованням виріс серед людей, які створюють мистецтво чи інші цінні для обміну речі. Творча культура може виробляти витончене мистецтво — танець, музику, скульптуру — або практичні речі: вози, зброю, інструменти, будівлі. Люди в таких культурах цінують якісну майстерність і увагу до деталей.',
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
					'Музика'
				]
			}
		}
	},
	class: {
		id: '9y3Jx3koKZipiPh1',
		name: 'Трубадур',
		description: 'Весь світ театр, і кожен на ньому актор. Ніхто не знає цього краще, ніж трубадур. Ви знаходите енергію в драмі повсякденного життя і знаєте, як витягти спектакль навіть з найпобутовіших ситуацій. Ви підкреслюєте висоти і поглиблюєте низини на користь тих, хто може стати свідком вашого виступу.\n\nЯк трубадур, ви переслідуєте драму. Непереборні небезпеки світу можуть змусити багатьох героїв тремтіти. Але ви виходите на світову сцену не з наміром померти, а щоб дізнатися, чи справді ви живі.\n\n“Історія — це казка. Кожен з нас — це просто історія, яку ми розповідаємо собі. Змініть історію, і ви зміните світ.”\nJackson Bootblack',
		type: 'standard',
		subclassName: 'Амплуа',
		subclassCount: 1,
		primaryCharacteristicsOptions: [
			[
				'Ловкість',
				'Присутність'
			]
		],
		primaryCharacteristics: [
			'Ловкість',
			'Присутність'
		],
		featuresByLevel: [
			{
				level: 1,
				features: [
					{
						id: '3G7nEekJVbHgJJNl',
						name: 'Витривалість',
						description: '',
						type: 'Бонус',
						data: {
							field: 'Витривалість',
							value: 18,
							valueCharacteristics: [],
							valueCharacteristicMultiplier: 1,
							valuePerLevel: 6,
							valuePerEchelon: 0
						}
					},
					{
						id: 'drlPj8moDZL1c8D1',
						name: 'Відновлення',
						description: '',
						type: 'Бонус',
						data: {
							field: 'Recoveries',
							value: 8,
							valueCharacteristics: [],
							valueCharacteristicMultiplier: 1,
							valuePerLevel: 0,
							valuePerEchelon: 0
						}
					},
					{
						id: 'UH5m1URtvSjZqfQb',
						name: 'Навичка взаємодії',
						description: '',
						type: 'Вибір навички',
						data: {
							options: [],
							listOptions: [
								'Міжособистісні'
							],
							count: 1,
							selected: [
								'Вихваляння'
							]
						}
					},
					{
						id: 'GjD2ZwdbvEIZOKQV',
						name: 'Навички взаємодії',
						description: '',
						type: 'Вибір навички',
						data: {
							options: [],
							listOptions: [
								'Міжособистісні'
							],
							count: 2,
							selected: [
								'Флірт',
								'Переконання'
							]
						}
					},
					{
						id: 'WpHiobCwPhxC5q2g',
						name: 'Навичка: Інтрига / Знання',
						description: '',
						type: 'Вибір навички',
						data: {
							options: [],
							listOptions: [
								'Інтриги',
								'Знання'
							],
							count: 1,
							selected: [
								'Сховатись'
							]
						}
					},
					{
						id: 'tS1DEkc8ZWqFRIxE',
						name: 'Драма',
						description: '',
						type: 'Героїчний ресурс',
						data: {
							type: 'heroic',
							gains: [
								{
									tag: 'start',
									trigger: 'На початку вашого ходу',
									value: '1d3'
								},
								{
									tag: '',
									trigger: 'Вперше, коли три або більше героїв використовують здібність у той самий хід',
									value: '2'
								},
								{
									tag: '',
									trigger: 'Вперше, коли будь-який герой стає захеканим під час зустрічі',
									value: '2'
								},
								{
									tag: '',
									trigger: 'Вперше, коли істота у вашій зоні впливу кидає натуральну 19 або 20',
									value: '3'
								},
								{
									tag: '',
									trigger: 'Коли ви або інший герой помирає',
									value: '10'
								}
							],
							details: 'Коли ви мертвий, ви продовжуєте отримувати драму під час бою, поки ваше тіло ціле. Якщо у вас є 30 драми під час зустрічі, в якій ви померли, ви можете повернутися до життя з 1 Витривалістю та 0 драми (дія не потрібна). Якщо ви все ще мертві після зустрічі, в якій ви померли, ви не можете отримувати драму під час майбутніх зустрічей.',
							canBeNegative: false,
							value: 0
						}
					},
					{
						id: '3rwc3gnUTZ6Ta7a0',
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
									id: 'kit-swashbuckler',
									name: 'Бретер',
									description: 'Якщо ви хочете бути рухливими й завдавати багато шкоди ближніми ударами, вам підійде набір «Бретер». Це чудовий набір для героїв, які прагнуть стати майстрами дуелі.',
									type: '',
									armor: [
										'Легка броня'
									],
									weapon: [
										'Середня зброя'
									],
									stamina: 3,
									speed: 3,
									stability: 0,
									meleeDamage: {
										tier1: 2,
										tier2: 2,
										tier3: 2
									},
									rangedDamage: null,
									meleeDistance: 0,
									rangedDistance: 0,
									disengage: 1,
									features: [
										{
											id: 'kit-swashbuckler-signature',
											name: 'Вишукані па',
											description: 'Кожен бій - це танець, і ведете в ньому саме ви.',
											type: 'Здібність',
											data: {
												ability: {
													id: 'kit-swashbuckler-signature',
													name: 'Вишукані па',
													description: 'Кожен бій - це танець, і ведете в ньому саме ви.',
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
													cost: 'signature',
													repeatable: false,
													minLevel: 1,
													sections: [
														{
															type: 'roll',
															roll: {
																characteristic: [
																	'Сила',
																	'Ловкість'
																],
																bonus: 0,
																tier1: '3 + С або Л шкоди',
																tier2: '5 + С або Л шкоди; штовхнути на 1',
																tier3: '8 + С або Л шкоди; штовхнути на 2'
															}
														},
														{
															type: 'Текст',
															text: 'Після того як ви штовхнули ціль, ви можете зміститися в будь-яку клітинку, яку вона залишила.'
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
						id: 'q9DC0wXzaL4f1EeU',
						name: 'Партнер по сцені',
						description: 'Щоразу, коли ви досягаєте успіху на випробуванні взаємодії з NPC, використовуючи навичку з міжособистісної групи, ви можете встановити звʼязок із цим NPC. Коли ви вступаєте в переговори зі звʼязаним NPC, його терпіння зростає на 1 (до максимуму 5). Крім того, уперше під час переговорів, коли ви особисто наводите аргумент, який збільшив би зацікавленість звʼязаного NPC на 1, ви натомість збільшуєте її на 2 (до максимуму 5).\n\nВи можете мати одночасно кількість звʼязків, що дорівнює вашому рівню. Коли ви формуєте звʼязок із новим NPC, що перевищує цей ліміт, ви мусите обрати, який з активних звʼязків утрачаєте.',
						type: 'Текст',
						data: null
					},
					{
						id: 'MTcRnLoVfzQkQw7T',
						name: 'Рутини',
						description: 'Ви входите в кожну битву з набором готових здібностей виступу. Виступи - це магічні презентації (такі як пісні, танці, поеми або гімнастичні трюки), в яких можуть брати участь ваші союзники. Ці здібності мають ключове слово «Виступ». На початку кожного раунду бою, поки ви не приголомшені, не мертві або не здивовані, ви можете або вибрати новий виступ, або підтримувати свій поточний виступ (дія не потрібна). Ваш виступ триває до тих пір, поки ви не зможете його підтримувати або до кінця зустрічі.',
						type: 'Текст',
						data: null
					},
					{
						id: 'DY5KgVsjM9G2b1eP',
						name: 'Хореографія',
						description: 'Топи, удари, кроки. Все це «хореографія».',
						type: 'Здібність',
						data: {
							ability: {
								id: 'DY5KgVsjM9G2b1eP',
								name: 'Хореографія',
								description: 'Топи, удари, кроки. Все це «хореографія».',
								type: {
									usage: 'Без дії',
									free: false,
									trigger: '',
									time: '',
									qualifiers: [],
									freeStrike: false
								},
								keywords: [
									'Зона',
									'Магія',
									'Виступ'
								],
								distance: [
									{
										type: 'Аура',
										value: 5,
										value2: 0,
										within: 0,
										special: '',
										qualifier: ''
									}
								],
								target: 'На себе і кожного союзника в зоні впливу',
								cost: 0,
								repeatable: false,
								minLevel: 1,
								sections: [
									{
										type: 'Текст',
										text: 'Поки цей виступ активний, кожна ціль, яка починає свій хід у зоні, отримує бонус +2 до швидкості до кінця свого ходу.'
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
						id: 'uqp9td9gJ5c4tKKQ',
						name: 'Оживляючий лимерик',
						description: 'Жив-був чоловік із столиці…',
						type: 'Здібність',
						data: {
							ability: {
								id: 'uqp9td9gJ5c4tKKQ',
								name: 'Оживляючий лимерик',
								description: 'Жив-був чоловік із столиці…',
								type: {
									usage: 'Без дії',
									free: false,
									trigger: '',
									time: '',
									qualifiers: [],
									freeStrike: false
								},
								keywords: [
									'Зона',
									'Магія',
									'Виступ'
								],
								distance: [
									{
										type: 'Аура',
										value: 5,
										value2: 0,
										within: 0,
										special: '',
										qualifier: ''
									}
								],
								target: 'На себе і кожного союзника в зоні впливу',
								cost: 0,
								repeatable: false,
								minLevel: 1,
								sections: [
									{
										type: 'Текст',
										text: 'Наприкінці кожного вашого ходу, поки цей виступ активний, ви можете обрати до кількості цілей, що дорівнює вашому показнику Присутності. Кожна обрана ціль може витратити Відновлення.'
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
						id: 'JEPrmTnFwNbi7kWO',
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
								'oklqgAHvGNBYvZ6Y'
							]
						}
					},
					{
						id: 'cCfz5o1dUmzOYVPL',
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
								'48Ek5173XbbcaIuv'
							]
						}
					},
					{
						id: 'smLIhr6BGJPZscJG',
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
								'MKhak5HyGbRZdhWy'
							]
						}
					}
				]
			},
			{
				level: 2,
				features: [
					{
						id: 'TzNcWWXAnI5bvPk9',
						name: 'Звернення до муз',
						description: 'Ви можете виголосити надихаючу промову, звернутися до своїх натхнень або підняти бойовий дух товаришів, звертаючись до муз, щоб підсилити драму битви. Однак іронія може передати вашу удачу лиходієві заради тієї ж драми.\n\nПеред тим як кинути на отримання драми на початку свого ходу, ви можете звернутися до муз (дія не потрібна). Якщо ви це робите, ваш кидок отримує такі додаткові ефекти:\n* Якщо випадає 1, ви отримуєте 1 додаткову драму. Директор отримує 1d3 Злоби.\n* Якщо випадає 2, ви отримуєте 1 героїчний ресурс, який можете залишити собі або віддати союзнику в межах дистанції вашого виступу. Директор отримує 1 Злобу.\n* Якщо випадає 3, ви отримуєте 2 героїчних ресурси, які можете розподілити між собою та будь-якими союзниками в межах дистанції вашого виступу.',
						type: 'Текст',
						data: null
					},
					{
						id: 'WagqmAOErEbwOMUA',
						name: 'Інвокація',
						description: 'У вас є особливий стиль, що визначає вашу присутність на полі бою. Оберіть одну з наступних особливостей.',
						type: 'Вибір',
						data: {
							options: [
								{
									feature: {
										id: 'Ojd2syAahwIuMZ7E',
										name: 'Дозвольте представити сьогоднішніх гравців',
										description: '',
										type: 'Здібність',
										data: {
											ability: {
												id: 'Ojd2syAahwIuMZ7E',
												name: 'Дозвольте представити сьогоднішніх гравців',
												description: '',
												type: {
													usage: 'Основна дія',
													free: false,
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
												cost: 0,
												repeatable: false,
												minLevel: 1,
												sections: [
													{
														type: 'Текст',
														text: 'Щоразу, коли ви ходите першим у бойовій зустрічі, ви можете основною дією представити себе та своїх союзників супротивникам. Кожен союзник може зміститися на свою швидкість, а кидки здібностей проти них отримують подвійну шкоду до кінця раунду. Крім того, будь-який застигнутий зненацька ворог більше не вважається застигнутим.'
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
										id: '3TpougOk43FTEYlT',
										name: 'Формальні представлення',
										description: 'Під час відпочинку ви можете написати повідомлення про свій прихід (наприклад, візитівку або офіційного листа), адресоване ворогу. Ви можете вручити його особисто, якщо перебуваєте поруч, надіслати курʼєром або залишити у таємному місці для знаходження. Можна мати лише одне активне повідомлення.\n\nДиректор визначає, коли ціль отримає повідомлення. Коли це стається, ворог насторожується й вживає відчайдушних заходів, щоб вас зупинити. Директор отримує 1 додаткову Злобу за кожен раунд бою з цією ціллю. Герої починають таку зустріч із 2 додатковими жетонами героя, які зникають після завершення зустрічі.',
										type: 'Текст',
										data: null
									},
									value: 1
								},
								{
									feature: {
										id: 'vAsAdX1lzAwxKC0z',
										name: 'Моя репутація випереджає мене',
										description: 'На початку соціальної взаємодії з одним або кількома NPC, які вас не знають, ви можете використати свою репутацію, автоматично створивши звʼязок з одним із цих NPC, як за допомогою особливості «Партнер по сцені». Цей звʼязок враховується у ліміті активних звʼязків. Поки звʼязок активний, усі герої вважають свою Відомість на 2 вищою для переговорів із цим NPC.\n\nДиректор може дати героям 1 жетон, щоб зробити вас сумнозвісним серед цієї групи істот і не дозволити створити звʼязок. Поки ви не покращите репутацію, усі герої отримують шкоду на випробуваннях взаємодії з цією групою навичками міжособистісної групи. Ви все ще можете шукати союзників через «Партнер по сцені».',
										type: 'Текст',
										data: null
									},
									value: 1
								}
							],
							count: 1,
							selected: []
						}
					},
					{
						id: 'tknnoxNMdhRdiF1e',
						name: 'Перк: Міжособистісні / Знання / Надприродне',
						description: '',
						type: 'Перевага',
						data: {
							lists: [
								'Міжособистісні',
								'Знання',
								'Надприродне'
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
						id: 'yoKyUfQEMwhyC4Ze',
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
						id: 'bEgiUgVeMGaONxTn',
						name: 'Ловкість',
						description: '',
						type: 'Бонус характеристики',
						data: {
							characteristic: 'Ловкість',
							value: 1
						}
					},
					{
						id: 'N00Uu7tYlbZh5mLR',
						name: 'Присутність',
						description: '',
						type: 'Бонус характеристики',
						data: {
							characteristic: 'Присутність',
							value: 1
						}
					},
					{
						id: 'eMWbssNB1OSeIFmj',
						name: 'Мелодрама',
						description: '',
						type: 'Вибір',
						data: {
							options: [
								{
									feature: {
										id: 'bPZ0jgAHVi08ZX2X',
										name: 'Мелодрама №1',
										description: '',
										type: 'Отримання героїчного ресурсу',
										data: {
											tag: '',
											trigger: 'Щоразу, коли істота викидає натуральну 2 на кидку сили.',
											value: '2',
											replacesTags: []
										}
									},
									value: 1
								},
								{
									feature: {
										id: 'Jlp0a0yANrSIoeXp',
										name: 'Мелодрама №2',
										description: '',
										type: 'Отримання героїчного ресурсу',
										data: {
											tag: '',
											trigger: 'Вперше за раунд, коли Директор завдає герою шкоди дією Лиходія або здібністю, що коштує Злоби.',
											value: '2',
											replacesTags: []
										}
									},
									value: 1
								},
								{
									feature: {
										id: '05FGfz1LetwQOlGm',
										name: 'Мелодрама №3',
										description: '',
										type: 'Отримання героїчного ресурсу',
										data: {
											tag: '',
											trigger: 'Вперше за раунд, коли герой недобровільно падає на 5 або більше клітинок.',
											value: '2',
											replacesTags: []
										}
									},
									value: 1
								},
								{
									feature: {
										id: 'bnEzQSbTNyay2M51',
										name: 'Мелодрама №4',
										description: '',
										type: 'Отримання героїчного ресурсу',
										data: {
											tag: '',
											trigger: 'Вперше, коли герой завдає шкоди з 3 сплесками.',
											value: '2',
											replacesTags: []
										}
									},
									value: 1
								},
								{
									feature: {
										id: 'lbGOgNoNt9SsiBDB',
										name: 'Мелодрама №5',
										description: '',
										type: 'Отримання героїчного ресурсу',
										data: {
											tag: '',
											trigger: 'Щоразу, коли герой витрачає своє останнє Відновлення.',
											value: '2',
											replacesTags: []
										}
									},
									value: 1
								},
								{
									feature: {
										id: 'AOgAXA0Z2YZWf0Be',
										name: 'Інша мелодрама',
										description: 'Ви можете відмовитися від вибору нової події, щоб обрати одну подію, яку вже маєте, включно з подією, отриманою через цю рису. Щоразу, коли обрана подія дає вам драму, ви отримуєте 1 додаткову драму.',
										type: 'Текст',
										data: null
									},
									value: 1
								}
							],
							count: 2,
							selected: []
						}
					},
					{
						id: 'c8wilO6exppZ8lk0',
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
						id: 'pBD0Fhn5vO1A26aB',
						name: 'Навичка',
						description: '',
						type: 'Вибір навички',
						data: {
							options: [],
							listOptions: [
								'Ремесло',
								'Дослідження',
								'Міжособистісні',
								'Інтриги',
								'Знання'
							],
							count: 1,
							selected: []
						}
					},
					{
						id: 'faVh7riGGaN0uOHR',
						name: 'Дух часу',
						description: 'Ви завжди тримаєте вухо до землі й руку на пульсі. Коли ви починаєте або завершуєте перепочинок, оберіть один із наступних ефектів:\n### Передвістя\n\nВи можете попросити Директора дати дві підказки щодо майбутньої зустрічі або переговорів. Одна з підказок може бути хибною.\n\n### Слухайте, слухайте!\n\nВихвалянням, залякуванням, лідерством або брехнею ви намагаєтесь поширити одну інформацію на місцевість довкола. Зробіть тест Присутності:\n\n| Кидок | Ефект |\n|:------|:------|\n| ≤ 11 | Ваша інформація нікого не досягає. |\n| 12 - 16 | Ваша інформація досягає найближчого населеного пункту розміром із місто або більшого. Ви та кожен союзник, присутній під час тесту, отримуєте перевагу на тести Присутності в цій місцевості, доки хтось із вас не витратить Відновлення. |\n| ≥ 17 | Ваша інформація досягає найближчого населеного пункту розміром із місто або більшого, а також наступного найближчого такого місця. Ви та союзники, присутні під час тесту, отримуєте перевагу на тести Присутності в цих місцевостях до початку вашого наступного перепочинку. |\n\n### Останні плітки\n\nВи можете попросити Директора про три чутки щодо місцевості, у якій перебуваєте, або місцевості, до якої плануєте ввійти до наступного перепочинку. Одна з чуток може бути хибною.',
						type: 'Текст',
						data: null
					}
				]
			},
			{
				level: 5,
				features: [
					{
						id: 'ExlOitsyzbnBbNA2',
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
						id: 'ywf7fUdThUpCdF6J',
						name: 'Перк: Міжособистісні / Знання / Надприродне',
						description: '',
						type: 'Перевага',
						data: {
							lists: [
								'Міжособистісні',
								'Знання',
								'Надприродне'
							],
							count: 1,
							selected: []
						}
					},
					{
						id: 'KFi7rVE3i9lrpXic',
						name: 'У центрі уваги',
						description: 'Глядачі дивляться, тож краще влаштуйте їм виставу.',
						type: 'Здібність',
						data: {
							ability: {
								id: 'KFi7rVE3i9lrpXic',
								name: 'У центрі уваги',
								description: 'Глядачі дивляться, тож краще влаштуйте їм виставу.',
								type: {
									usage: 'Без дії',
									free: false,
									trigger: '',
									time: '',
									qualifiers: [],
									freeStrike: false
								},
								keywords: [
									'Зона',
									'Магія',
									'Виступ'
								],
								distance: [
									{
										type: 'Аура',
										value: 5,
										value2: 0,
										within: 0,
										special: '',
										qualifier: ''
									}
								],
								target: 'На себе і кожного союзника в зоні впливу',
								cost: 0,
								repeatable: false,
								minLevel: 1,
								sections: [
									{
										type: 'Текст',
										text: 'Поки цей виступ активний, кожна ціль, яка починає свій хід у зоні, отримує 1 одиницю свого Героїчного Ресурсу. Цей Героїчний Ресурс зникає наприкінці ходу цілі, якщо вона його не витратить.'
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
				level: 7,
				features: [
					{
						id: 'grnE5hFyVyLylxC2',
						name: 'Сила',
						description: '',
						type: 'Бонус характеристики',
						data: {
							characteristic: 'Сила',
							value: 1
						}
					},
					{
						id: 'LNpO0wUO8Eevov6c',
						name: 'Ловкість',
						description: '',
						type: 'Бонус характеристики',
						data: {
							characteristic: 'Ловкість',
							value: 1
						}
					},
					{
						id: 'JszVRV1fs7lyz7yF',
						name: 'Розум',
						description: '',
						type: 'Бонус характеристики',
						data: {
							characteristic: 'Розум',
							value: 1
						}
					},
					{
						id: 'u8XAyI9vpwIPsJXi',
						name: 'Інтуїція',
						description: '',
						type: 'Бонус характеристики',
						data: {
							characteristic: 'Інтуїція',
							value: 1
						}
					},
					{
						id: 'cuvMsaNuv1KvGvUF',
						name: 'Присутність',
						description: '',
						type: 'Бонус характеристики',
						data: {
							characteristic: 'Присутність',
							value: 1
						}
					},
					{
						id: 'HRzXpQyzYdOU4f3r',
						name: 'Рівні ролі',
						description: 'Ви можете використати свою рису «Партнер по сцені», щоб сформувати звʼязок з одним охочим героєм замість NPC, з яким взаємодієте через випробування. Якщо ви формуєте звʼязок з іншим героєм, то втрачаєте наявний звʼязок із героєм.\n\nДодатково, ви та істоти, з якими ви звʼязані, отримуєте бонус +1 до рятувальних кидків. Щоразу, коли ви або звʼязана істота успішно проходите рятувальний кидок, ви та кожна звʼязана з вами істота отримуєте тимчасову Витривалість, що дорівнює вашому рівню.',
						type: 'Текст',
						data: null
					},
					{
						id: 'JRIAGwr5xwIXZdG5',
						name: 'Муза для муз',
						description: '',
						type: 'Отримання героїчного ресурсу',
						data: {
							tag: 'start 2',
							trigger: 'На початку вашого ходу',
							value: '1d3 + 1',
							replacesTags: [
								'start'
							]
						}
					},
					{
						id: 'A7CsaTimMURrXg0M',
						name: 'Навичка',
						description: '',
						type: 'Вибір навички',
						data: {
							options: [],
							listOptions: [
								'Ремесло',
								'Дослідження',
								'Міжособистісні',
								'Інтриги',
								'Знання'
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
						id: 'rm84D6UDOw6SNSVm',
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
						id: 'wAOl8UZ3VTUdA67Z',
						name: 'Здібність',
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
						id: 'b4oYpDkEydG3CTOD',
						name: 'Рев натовпу',
						description: 'Вас підсилює ваша аудиторія, близька й далека. Вас не можна налякати, а якщо ви розпластані, то можете підвестися як безкоштовний маневр.\n\nДодатково, щоразу, коли ви витрачаєте Відновлення, ви можете відмовитися від відновлення Витривалості, щоб викликати рев невидимої аудиторії, яка аплодує. Ви та кожен союзник у межах 3 клітинок від вас отримуєте тимчасову Витривалість, що дорівнює 10 + кількість активних звʼязків від вашої риси «Партнер по сцені» + або ваша Кількість Перемог, або кількість гравців у грі, залежно від того, що більше.',
						type: 'Текст',
						data: null
					}
				]
			},
			{
				level: 10,
				features: [
					{
						id: 'GYcwgp374s2e3GiY',
						name: 'Оплески',
						description: '',
						type: 'Героїчний ресурс',
						data: {
							type: 'heroic',
							gains: [
								{
									tag: '',
									trigger: 'Після завершення перепочинку',
									value: 'Отримання досвіду'
								}
							],
							details: '',
							canBeNegative: false,
							value: 0
						}
					},
					{
						id: 'nkOnWwzyFh2QZOnV',
						name: 'Ловкість',
						description: '',
						type: 'Бонус характеристики',
						data: {
							characteristic: 'Ловкість',
							value: 1
						}
					},
					{
						id: 'KyTOfWVz1Htc6DAr',
						name: 'Присутність',
						description: '',
						type: 'Бонус характеристики',
						data: {
							characteristic: 'Присутність',
							value: 1
						}
					},
					{
						id: 'SvXvD5JZWWIMcMGv',
						name: 'Драматургія',
						description: 'Щоразу, коли ви використовуєте рису «Звернення до муз», ви отримуєте 1 додаткову драму або інший Героїчний Ресурс. Додатково, ваші виступи більше не мають дистанції, але можуть впливати на будь-яку ціль на мапі зустрічі в межах вашої лінії ефекту.',
						type: 'Текст',
						data: null
					},
					{
						id: 'kN2tUhuHAbfRxOM3',
						name: 'Найвеличніший усіх часів',
						description: 'Щоразу, коли ви досягаєте успіху на випробуванні, показник Враження кожного NPC у межах вашої лінії ефекту зменшується на 4 під час переговорів (до мінімуму 1), а кожен союзник у межах 3 клітинок від вас отримує перевагу на своє наступне випробування. Ці ефекти тривають до початку вашого наступного перепочинку.',
						type: 'Текст',
						data: null
					},
					{
						id: 'MJlch8xy0BmtjEAz',
						name: 'Перк: Міжособистісні / Знання / Надприродне',
						description: '',
						type: 'Перевага',
						data: {
							lists: [
								'Міжособистісні',
								'Знання',
								'Надприродне'
							],
							count: 1,
							selected: []
						}
					},
					{
						id: 'gIVmDrETVg4F0eTC',
						name: 'Skill',
						description: '',
						type: 'Вибір навички',
						data: {
							options: [],
							listOptions: [
								'Ремесло',
								'Дослідження',
								'Міжособистісні',
								'Інтриги',
								'Знання'
							],
							count: 1,
							selected: []
						}
					}
				]
			}
		],
		abilities: [
			{
				id: 'gEzZJ1hBo5YTQZVL',
				name: 'Artful Flourish',
				description: 'And they said practicing fencing was a waste!',
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
				target: 'Two creatures or objects',
				cost: 'signature',
				repeatable: false,
				minLevel: 1,
				sections: [
					{
						type: 'roll',
						roll: {
							characteristic: [
								'Ловкість'
							],
							bonus: 0,
							tier1: '2 шкоди',
							tier2: '5 шкоди',
							tier3: '7 шкоди'
						}
					},
					{
						type: 'Текст',
						text: 'You can shift up to 3 squares.'
					},
					{
						type: 'field',
						name: 'Spend',
						value: 2,
						repeatable: true,
						effect: 'You can target one additional creature or object for every 2 drama spent.'
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
				id: 'aiH7V95hu1z7bvnJ',
				name: 'Cutting Sarcasm',
				description: 'There you are, radiating your usual charisma.',
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
					'Дальній',
					'Удар',
					'Зброя'
				],
				distance: [
					{
						type: 'Дальній',
						value: 10,
						value2: 0,
						within: 0,
						special: '',
						qualifier: ''
					}
				],
				target: 'Одна істота',
				cost: 'signature',
				repeatable: false,
				minLevel: 1,
				sections: [
					{
						type: 'roll',
						roll: {
							characteristic: [
								'Presence'
							],
							bonus: 0,
							tier1: '2 + П психічної шкоди; П < [слабкий], кровотеча (рят. кидок завершує)',
							tier2: '5 + П психічної шкоди; П < [середній], кровотеча (рят. кидок завершує)',
							tier3: '7 + П психічної шкоди; П < [сильний], кровотеча (рят. кидок завершує)'
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
				id: 'Dq8W50f8RkS1gCZR',
				name: 'Instigator',
				description: 'I didn’t do it! What?',
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
				cost: 'signature',
				repeatable: false,
				minLevel: 1,
				sections: [
					{
						type: 'roll',
						roll: {
							characteristic: [
								'Presence'
							],
							bonus: 0,
							tier1: '3 + П шкоди',
							tier2: '6 + П шкоди',
							tier3: '9 + П шкоди'
						}
					},
					{
						type: 'Текст',
						text: 'The target is taunted by you or a willing ally adjacent to you until the end of the target’s next turn.'
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
				id: 'oklqgAHvGNBYvZ6Y',
				name: 'Witty Banter',
				description: 'A lyrical (and physical) jab insults an enemy and inspires an ally.',
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
					'Дальній',
					'Удар'
				],
				distance: [
					{
						type: 'Ближній бій',
						value: 1,
						value2: 0,
						within: 0,
						special: '',
						qualifier: ''
					},
					{
						type: 'Дальній',
						value: 5,
						value2: 0,
						within: 0,
						special: '',
						qualifier: ''
					}
				],
				target: 'Одна істота',
				cost: 'signature',
				repeatable: false,
				minLevel: 1,
				sections: [
					{
						type: 'roll',
						roll: {
							characteristic: [
								'Presence'
							],
							bonus: 0,
							tier1: '4 + П психічної шкоди',
							tier2: '5 + П психічної шкоди',
							tier3: '7 + П психічної шкоди'
						}
					},
					{
						type: 'Текст',
						text: 'One ally within 10 squares of you can end one effect on them that is ended by a saving throw or that ends at the end of their turn.'
					},
					{
						type: 'field',
						name: 'Spend',
						value: 1,
						repeatable: false,
						effect: 'The chosen ally can spend a Recovery.'
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
				id: 'wuGWNezovUaXNrhz',
				name: 'Harsh Critic',
				description: 'Just one bad review will ruin their day.',
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
					'Дальній',
					'Удар'
				],
				distance: [
					{
						type: 'Ближній бій',
						value: 1,
						value2: 0,
						within: 0,
						special: '',
						qualifier: ''
					},
					{
						type: 'Дальній',
						value: 10,
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
								'Presence'
							],
							bonus: 0,
							tier1: '7 + П звукової шкоди',
							tier2: '10 + П звукової шкоди',
							tier3: '13 + П звукової шкоди'
						}
					},
					{
						type: 'Текст',
						text: 'The first time the target uses an ability before the start of your next turn, any effects from the ability’s tier outcomes other than damage are negated for all targets. Ability effects that always happen regardless of the power roll work as usual. '
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
				id: '48Ek5173XbbcaIuv',
				name: 'Hypnotic Overtones',
				description: 'You produce an entrancing note that twists the senses in a spectacular fashion.',
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
				cost: 3,
				repeatable: false,
				minLevel: 1,
				sections: [
					{
						type: 'roll',
						roll: {
							characteristic: [
								'Presence'
							],
							bonus: 0,
							tier1: 'Зсунути 1; І < [слабкий], приголомшений (рят. кидок завершує)',
							tier2: 'Зсунути 1; І < [середній], приголомшений (рят. кидок завершує)',
							tier3: 'Зсунути 2; І < [сильний], приголомшений (рят. кидок завершує)'
						}
					},
					{
						type: 'field',
						name: 'Spend',
						value: 2,
						repeatable: true,
						effect: 'The size of the burst increases by 1 for every 2 drama spent.'
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
				id: 'D27ycyqsuILS0KXt',
				name: 'Quick Rewrite',
				description: 'You write something unexpected into the scene that hinders your enemy.',
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
						value: 3,
						value2: 0,
						within: 10,
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
								'Presence'
							],
							bonus: 0,
							tier1: '4 шкоди; П < [слабкий], сповільнений (рят. кидок завершує)',
							tier2: '5 шкоди; П < [середній], сповільнений (рят. кидок завершує)',
							tier3: '6 шкоди; П < [сильний], скутий (рят. кидок завершує)'
						}
					},
					{
						type: 'Текст',
						text: 'The area is difficult terrain for enemies.'
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
				id: 'amyFFfmA2oAoiO8P',
				name: 'Upstage',
				description: 'As you bob and weave through the crowd, you can’t help but leave the audience wanting more.',
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
				target: 'Себе',
				cost: 3,
				repeatable: false,
				minLevel: 1,
				sections: [
					{
						type: 'Текст',
						text: 'You shift up to your speed. You make one power roll that targets each enemy you move adjacent to during this shift.'
					},
					{
						type: 'roll',
						roll: {
							characteristic: [
								'Ловкість',
								'Presence'
							],
							bonus: 0,
							tier1: 'Спровокований (до кінця ходу); Л < [слабкий], розпластаний',
							tier2: 'Спровокований (до кінця ходу); Л < [середній], розпластаний',
							tier3: 'Спровокований (до кінця ходу); Л < [сильний], розпластаний і не може встати (до кінця ходу)'
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
				id: 'MKhak5HyGbRZdhWy',
				name: 'Dramatic Reversal',
				description: 'Give the audience a surprise.',
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
				target: 'На себе і кожного союзника в зоні впливу',
				cost: 5,
				repeatable: false,
				minLevel: 1,
				sections: [
					{
						type: 'roll',
						roll: {
							characteristic: [
								'Presence'
							],
							bonus: 0,
							tier1: 'Ціль може зміститися на 1 клітинку і зробити безкоштовний удар.',
							tier2: 'Ціль може зміститися до 2 клітинок і зробити безкоштовний удар з перевагою.',
							tier3: 'Ціль може зміститися до 3 клітинок і зробити безкоштовний удар з перевагою, а потім може витратити Відновлення.'
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
				id: 'y4twMNJioffMnTAp',
				name: 'Fake Your Death',
				description: 'O happy dagger, this is thy sheath!',
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
				cost: 5,
				repeatable: false,
				minLevel: 1,
				sections: [
					{
						type: 'Текст',
						text: ' You turn invisible and create a magical illusion of your corpse falling in your space. While you are invisible, you gain a +3 bonus to speed and you ignore difficult terrain. The illusion and your invisibility last until the end of your next turn, or until the illusion is interacted with, you take damage, or you use a основна дія or a маневр.'
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
				id: 'wkTaIiJ4JOVGjFkE',
				name: 'Flip the Script',
				description: 'You try a different take on events, justifying the new locations everyone ended up in.',
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
				target: 'На себе і кожного союзника в зоні впливу',
				cost: 5,
				repeatable: false,
				minLevel: 1,
				sections: [
					{
						type: 'Текст',
						text: 'Each target can teleport up to 5 squares. Any teleported target who was slowed is no longer slowed.'
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
				id: 'lHLPt6cUuyXcCdb0',
				name: 'Method Acting',
				description: 'They’re so hurt by your performance, you start to believe it yourself. ',
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
								'Ловкість'
							],
							bonus: 0,
							tier1: '6 + Л шкоди; П < [слабкий], ослаблений (рят. кидок закінчує)',
							tier2: '10 + Л шкоди; П < [слабкий], ослаблений (рят. кидок закінчує)',
							tier3: '14 + Л шкоди; П < [слабкий], ослаблений (рят. кидок закінчує)'
						}
					},
					{
						type: 'Текст',
						text: 'You can become bleeding (save ends) to deal an extra 5 corruption damage to the target.'
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
				id: 'BlO52My4D7X4wdVh',
				name: 'Extensive Rewrites',
				description: 'No, this isn’t right. That foe was over there!',
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
						type: 'Burst',
						value: 4,
						value2: 0,
						within: 0,
						special: '',
						qualifier: ''
					}
				],
				target: 'Кожен ворог у зоні',
				cost: 7,
				repeatable: false,
				minLevel: 1,
				sections: [
					{
						type: 'roll',
						roll: {
							characteristic: [
								'Presence'
							],
							bonus: 0,
							tier1: 'Зсунути на 3; П < [слабкий], цей зсув ігнорує стійкість цілі',
							tier2: 'Зсунути на 5; П < [середній], цей зсув ігнорує стійкість цілі',
							tier3: 'Зсунути на 7; П < [сильний], цей зсув ігнорує стійкість цілі'
						}
					},
					{
						type: 'Текст',
						text: 'Instead of sliding a target, you can swap their location with another target as long as each can fit into the other’s space. You can’t slide targets into other creatures or objects using this ability.'
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
				id: '7vm0VdMiqgrZtpcu',
				name: 'Infernal Gavotte',
				description: 'A spicy performance lights a fire under your allies’ feet',
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
				cost: 7,
				repeatable: false,
				minLevel: 1,
				sections: [
					{
						type: 'roll',
						roll: {
							characteristic: [
								'Presence'
							],
							bonus: 0,
							tier1: '5 вогняної шкоди; Л < [слабкий], ослаблений (рят. кидок закінчує)',
							tier2: '7 вогняної шкоди; Л < [середній], ослаблений (рят. кидок закінчує)',
							tier3: '10 вогняної шкоди; Л < [сильний], ослаблений (рят. кидок закінчує)'
						}
					},
					{
						type: 'Текст',
						text: 'Each ally in the area can shift up to 2 squares.'
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
				id: '7vm0VdMiqgrZtpcu2',
				name: 'Star Solo',
				description: 'Your performance travels and doesn’t stop moving until your audience is completely rocked.',
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
					'Дальній',
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
					},
					{
						type: 'Дальній',
						value: 10,
						value2: 0,
						within: 0,
						special: '',
						qualifier: ''
					}
				],
				target: 'Одна істота або предмет',
				cost: 7,
				repeatable: false,
				minLevel: 1,
				sections: [
					{
						type: 'roll',
						roll: {
							characteristic: [
								'Presence'
							],
							bonus: 0,
							tier1: '5 + П шкоди',
							tier2: '8 + П шкоди; відштовхнути на 3',
							tier3: '11 + П шкоди; відштовхнути на 5'
						}
					},
					{
						type: 'Текст',
						text: 'You can choose to have this ability deal sonic damage. Additionally, you can use this ability against the same target for the next 2 combat rounds without spending drama.'
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
				id: '7vm0VdMiqgrZtpcu3',
				name: 'We Meet at Last',
				description: 'You magically intertwine your fate with another creature—for better or worse.',
				type: {
					usage: 'Маневр',
					free: false,
					trigger: '',
					time: '',
					qualifiers: [],
					freeStrike: false
				},
				keywords: [
					'Магія',
					'Дальній'
				],
				distance: [
					{
						type: 'Дальній',
						value: 10,
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
						text: '\nUntil the end of the encounter, both you and the target can target each other with abilities even if you are beyond distance, with the distance of this ability replacing those abilities’ distances. The target can’t be force moved by an ability used beyond distance this way.\n\nAdditionally, once on each of your turns, you can use a безкоштовний маневр to communicate a motivating or dispiriting message to the target, either granting them 2 surges or forcing them to take a bane on the next ability roll they make before the start of your next turn.'
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
				id: 'fyx732V0Vlq49a1N',
				name: 'Action Hero',
				description: 'You wield your weapon at blistering speed, leaving everyone around you fighting for their lives.',
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
						value: 3,
						value2: 0,
						within: 0,
						special: '',
						qualifier: ''
					}
				],
				target: 'Кожен ворог у зоні',
				cost: 9,
				repeatable: false,
				minLevel: 1,
				sections: [
					{
						type: 'roll',
						roll: {
							characteristic: [
								'Ловкість'
							],
							bonus: 0,
							tier1: '10 шкоди',
							tier2: '14 шкоди',
							tier3: '20 шкоди'
						}
					},
					{
						type: 'Текст',
						text: 'Unless you score a critical hit, this ability can’t reduce a non-minion target below 1 Stamina.'
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
				id: 'HeBr76EpA6RIMDSX',
				name: 'Continuity Error',
				description: 'Your subject is written into two places at once.',
				type: {
					usage: 'Маневр',
					free: false,
					trigger: '',
					time: '',
					qualifiers: [],
					freeStrike: false
				},
				keywords: [
					'Магія',
					'Дальній'
				],
				distance: [
					{
						type: 'Дальній',
						value: 10,
						value2: 0,
						within: 0,
						special: '',
						qualifier: ''
					}
				],
				target: 'One enemy or object',
				cost: 9,
				repeatable: false,
				minLevel: 1,
				sections: [
					{
						type: 'Текст',
						text: 'The target is split into two separate entities, one of which remains in the target’s space while the other appears in an unoccupied space of your choice within distance. If the target is a creature, this creates a new creature under the Director’s control. Each entity has half the original target’s Stamina, is weakened, and takes 1d6 corruption damage at the start of each of their turns. If either entity is reduced to 0 Stamina, the other entity persists as the original entity and this effect ends. The effect also ends if both entities occupy the same space, causing them to automatically merge and combine their current Stamina.'
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
				id: 'Q5GrFFZc8YjRIJjL',
				name: 'Love Song',
				description: 'You play a small ditty that plants you inside your target’s heart.',
				type: {
					usage: 'Маневр',
					free: false,
					trigger: '',
					time: '',
					qualifiers: [],
					freeStrike: false
				},
				keywords: [
					'Магія',
					'Дальній'
				],
				distance: [
					{
						type: 'Дальній',
						value: 10,
						value2: 0,
						within: 0,
						special: '',
						qualifier: ''
					}
				],
				target: 'Одна істота або предмет',
				cost: 9,
				repeatable: false,
				minLevel: 1,
				sections: [
					{
						type: 'Текст',
						text: 'The target gains 20 temporary Stamina. Until the end of the encounter, whenever the target takes damage while you’re within distance, you can choose to take the damage instead of the target.'
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
				id: 'ZrTkbAu3EcZ0C6Di',
				name: 'Patter Song',
				description: 'Dazzle them with your fancy patter and they forget where they were.',
				type: {
					usage: 'Маневр',
					free: false,
					trigger: '',
					time: '',
					qualifiers: [],
					freeStrike: false
				},
				keywords: [
					'Магія',
					'Дальній'
				],
				distance: [
					{
						type: 'Дальній',
						value: 10,
						value2: 0,
						within: 0,
						special: '',
						qualifier: ''
					}
				],
				target: 'Особливе',
				cost: 9,
				repeatable: false,
				minLevel: 1,
				sections: [
					{
						type: 'roll',
						roll: {
							characteristic: [
								'Presence'
							],
							bonus: 0,
							tier1: 'Один союзник у межах дистанції може зробити свій хід одразу після вашого.',
							tier2: 'Двоє союзників у межах дистанції можуть зробити свої ходи одразу після вашого в будь-якому порядку.',
							tier3: 'Троє союзників у межах дистанції можуть зробити свої ходи одразу після вашого в будь-якому порядку. Один із цих союзників міг уже робити хід у цьому раунді бою.'
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
				id: 'SRHmnFY5rDCiCRuR',
				name: 'Dramatic Reveal',
				description: 'A little stage trickery, and where once stood a foe, now stands a friend!',
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
						text: 'Until the end of the encounter, whenever you reduce a creature to 0 Stamina using an ability, you can use a безкоштовна тригерна дія to teleport an ally within distance of that ability into the creature’s space in a plume of rose petals. You or the teleported ally can then make a melee free strike.'
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
				id: '0rmeKAGMyn9Q6YMf',
				name: 'Power Ballad',
				description: 'A song for the brokenhearted wraps itself around the target and blossoms into a ward of thorns.',
				type: {
					usage: 'Маневр',
					free: false,
					trigger: '',
					time: '',
					qualifiers: [],
					freeStrike: false
				},
				keywords: [
					'Магія',
					'Дальній'
				],
				distance: [
					{
						type: 'Дальній',
						value: 10,
						value2: 0,
						within: 0,
						special: '',
						qualifier: ''
					}
				],
				target: 'На себе або одного союзника',
				cost: 11,
				repeatable: false,
				minLevel: 1,
				sections: [
					{
						type: 'Текст',
						text: 'Until the end of the encounter, whenever the target takes damage while winded, they can use a безкоштовна тригерна дія to deal half the damage they took to the source of the damage.'
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
				id: '2XIhjJCLHQuNte5I',
				name: 'Saved in the Edit',
				description: 'You shout a word of power that allows you to rewrite reality to your whims.',
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
						text: 'Until the end of the encounter, whenever you deal rolled damage to a creature or object, or enable a creature to spend a Recovery, you can use a безкоштовна тригерна дія to give that creature or object one of the following effects until the start of your next turn. If this ability is triggered by multiple targets taking damage or multiple creatures spending Recoveries simultaneously, each target receives the same effect:\n* The target has damage weakness equal to your Presence score against any magic, psionic, or weapon ability.\n* The target has damage immunity equal to your Presence score.\n* The target has a bonus to stability and a penalty to speed equal to your Presence score.\n* The target has a bonus to speed and a penalty to stability equal to your Presence score.'
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
				id: 'zrzbOjJnBZb8eWUQ',
				name: 'The Show Must Go On',
				description: 'You shine a bright light on the players on the stage and compel them to finish the performance.',
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
								'Presence'
							],
							bonus: 0,
							tier1: '6 шкоди; П < [слабкий], ціль не може добровільно покинути зону (до кінця ходу)',
							tier2: '8 шкоди; П < [середній], ціль не може добровільно покинути зону (рят. кидок закінчує)',
							tier3: '12 шкоди; ціль не може добровільно покинути зону (до кінця ходу); якщо П < [сильний], вона не може добровільно покинути зону (рят. кидок закінчує)'
						}
					},
					{
						type: 'Текст',
						text: 'Each ally within distance can’t obtain lower than a tier 2 outcome on the next test they make before the start of your next turn.'
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
				id: 'u3JAwbvGQEHPi6cY',
				name: 'Auteur',
				description: 'You seek drama from story and recount, using your magic to manipulate the sequence of events unfolding before you.',
				featuresByLevel: [
					{
						level: 1,
						features: [
							{
								id: '63GSnAtLidKQThSw',
								name: 'Interpersonal Skill',
								description: '',
								type: 'Вибір навички',
								data: {
									options: [],
									listOptions: [
										'Міжособистісні'
									],
									count: 1,
									selected: [
										'Вихваляння'
									]
								}
							},
							{
								id: 'VM5qLsp8pXpYt180',
								name: 'Blocking',
								description: 'No, no, no, you lose the audience that way. Try it like this …',
								type: 'Здібність',
								data: {
									ability: {
										id: 'VM5qLsp8pXpYt180',
										name: 'Blocking',
										description: 'No, no, no, you lose the audience that way. Try it like this …',
										type: {
											usage: 'Без дії',
											free: false,
											trigger: '',
											time: '',
											qualifiers: [],
											freeStrike: false
										},
										keywords: [
											'Area',
											'Магія',
											'Виступ'
										],
										distance: [
											{
												type: 'Aura',
												value: 2,
												value2: 0,
												within: 0,
												special: '',
												qualifier: ''
											}
										],
										target: 'Кожна істота в зоні',
										cost: 0,
										repeatable: false,
										minLevel: 1,
										sections: [
											{
												type: 'Текст',
												text: 'At the end of each of your turns while this performance is active, you can choose up to a number of targets equal to your Presence score and teleport those targets to unoccupied spaces in the area. A target can’t be teleported in a way that would harm them (such as over a cliff), leave them dying, or result in them suffering a condition or other negative effect. '
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
								id: 'WLhzen5TMIS87eap',
								name: 'Dramatic Monologue',
								description: 'It doesn’t need to make sense. Just say it with emotion.',
								type: 'Здібність',
								data: {
									ability: {
										id: 'WLhzen5TMIS87eap',
										name: 'Dramatic Monologue',
										description: 'It doesn’t need to make sense. Just say it with emotion.',
										type: {
											usage: 'Маневр',
											free: false,
											trigger: '',
											time: '',
											qualifiers: [],
											freeStrike: false
										},
										keywords: [
											'Магія',
											'Дальній'
										],
										distance: [
											{
												type: 'Дальній',
												value: 10,
												value2: 0,
												within: 0,
												special: '',
												qualifier: ''
											}
										],
										target: 'Особливе',
										cost: 0,
										repeatable: false,
										minLevel: 1,
										sections: [
											{
												type: 'Текст',
												text: ' Choose one of the following effects:\n* You orate a rousing tale of victory. One ally within distance gains an edge on the next power roll they make before the start of your next turn.\n* You weave a tale of high-stakes heroics. One ally within distance gains 1 surge.\n* You insult a foe where they’re most vulnerable. One enemy within distance takes a bane on the next power roll they make before the end of their next turn.'
											},
											{
												type: 'field',
												name: 'Spend',
												value: 1,
												repeatable: false,
												effect: 'You can choose two targets for the chosen effect.'
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
								id: 'MUMrI7zMhGiDF6an',
								name: 'Turnabout Is Fair Play',
								description: 'All’s fair in love and whatever.',
								type: 'Здібність',
								data: {
									ability: {
										id: 'MUMrI7zMhGiDF6an',
										name: 'Turnabout Is Fair Play',
										description: 'All’s fair in love and whatever.',
										type: {
											usage: 'Тригерна дія',
											free: false,
											trigger: 'The target makes an ability roll that has an edge, a double edge, a bane, or a double bane.',
											time: '',
											qualifiers: [],
											freeStrike: false
										},
										keywords: [
											'Дальній'
										],
										distance: [
											{
												type: 'Дальній',
												value: 10,
												value2: 0,
												within: 0,
												special: '',
												qualifier: ''
											}
										],
										target: 'Одна істота',
										cost: 0,
										repeatable: false,
										minLevel: 1,
										sections: [
											{
												type: 'Текст',
												text: 'An edge on the triggering roll becomes a bane, or a double edge becomes an edge. A bane becomes an edge, or a double bane becomes a bane.'
											},
											{
												type: 'field',
												name: 'Spend',
												value: 3,
												repeatable: false,
												effect: 'An edge on the triggering roll becomes a double bane, or a double edge is negated. A bane becomes a double edge, or a double bane is negated.'
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
								id: 'NR3KiD1HgYdQ5KHv',
								name: 'Choice',
								description: '',
								type: 'Вибір',
								data: {
									options: [
										{
											feature: {
												id: 'wbcpRLxbH1FXK30r',
												name: 'Guest Star',
												description: 'We offered them a percentage of the gross. So they’re working for free!',
												type: 'Здібність',
												data: {
													ability: {
														id: 'wbcpRLxbH1FXK30r',
														name: 'Guest Star',
														description: 'We offered them a percentage of the gross. So they’re working for free!',
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
															'Дальній'
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
														target: 'Особливе',
														cost: 5,
														repeatable: false,
														minLevel: 1,
														sections: [
															{
																type: 'Текст',
																text: 'A guest star appears to help you during the encounter: either a bystander within distance uplifted by your magic, or a mysterious new hero who appears in an unoccupied space within distance. This guest star is controlled by you, has their own turn, and shares your characteristics. Their Stamina maximum is half yours. They have no abilities other than your melee and ranged free strikes. At the end of the encounter, or when the guest star is reduced to 0 Stamina, they retreat or revert to a bystander. The same bystander can’t be uplifted this way more than once during an encounter. '
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
												id: 'xun0HqS4EyDtB40D',
												name: 'Twist at the End',
												description: 'You didn’t see that coming, did you?!',
												type: 'Здібність',
												data: {
													ability: {
														id: 'xun0HqS4EyDtB40D',
														name: 'Twist at the End',
														description: 'You didn’t see that coming, did you?!',
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
															'Дальній'
														],
														distance: [
															{
																type: 'Дальній',
																value: 10,
																value2: 0,
																within: 0,
																special: '',
																qualifier: ''
															}
														],
														target: 'One dead enemy',
														cost: 5,
														repeatable: false,
														minLevel: 1,
														sections: [
															{
																type: 'Текст',
																text: 'A target who is not a leader or solo creature comes back to life with half their Stamina and becomes an ally under the Director’s control. The players can work with the Director to determine when the target takes their turn each combat round. At the end of the encounter, the target turns to dust and is blown away.'
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
								id: '8mgJuIOaJ89ei7An',
								name: 'Missed Cue',
								description: 'If you aren’t surprised at the start of an encounter, you can choose one enemy within your line of effect who is not a leader or solo creature. The Director temporarily removes the chosen creature from the encounter. The chosen creature enters the encounter at the start of the second combat round. You must earn 3 Victories before you can use this feature again.',
								type: 'Текст',
								data: null
							}
						]
					},
					{
						level: 4,
						features: []
					},
					{
						level: 5,
						features: [
							{
								id: 'z5ajGRuxCgWGBqkY',
								name: 'Choice',
								description: '',
								type: 'Вибір',
								data: {
									options: [
										{
											feature: {
												id: 'V532EvelvtngOBm5',
												name: 'Fix It in Post',
												description: 'Once on each of your turns, you can use a безкоштовний маневр to change one condition affecting a creature within distance of your Dramatic Monologue ability. Choose one of the following conditions on the target: bleeding, frightened, prone, slowed, or taunted. You change that condition to another of those conditions, maintaining the duration and origin of the original condition. A target who is no longer prone can stand up.',
												type: 'Текст',
												data: null
											},
											value: 1
										},
										{
											feature: {
												id: 'blD6AhJ1qRfFDLGB',
												name: 'Take Two!',
												description: 'One more, and this time make it interesting.',
												type: 'Здібність',
												data: {
													ability: {
														id: 'blD6AhJ1qRfFDLGB',
														name: 'Take Two!',
														description: 'One more, and this time make it interesting.',
														type: {
															usage: 'Без дії',
															free: false,
															trigger: '',
															time: '',
															qualifiers: [],
															freeStrike: false
														},
														keywords: [
															'Area',
															'Магія',
															'Виступ'
														],
														distance: [
															{
																type: 'Aura',
																value: 5,
																value2: 0,
																within: 0,
																special: '',
																qualifier: ''
															}
														],
														target: 'На себе і кожного союзника в зоні впливу',
														cost: 0,
														repeatable: false,
														minLevel: 1,
														sections: [
															{
																type: 'Текст',
																text: 'While this performance is active, each target who starts their turn in the area can reroll the first power roll that turn that obtains a tier 2 outcome. They must use the new roll.'
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
						level: 6,
						features: [
							{
								id: 'CwUQTsffxHIfqd1R',
								name: 'Choice',
								description: '',
								type: 'Вибір',
								data: {
									options: [
										{
											feature: {
												id: '0Gh84KaW8ivImayH',
												name: 'Here’s How Your Story Ends',
												description: 'You give away the ending of this battle, and it’s not great for them.',
												type: 'Здібність',
												data: {
													ability: {
														id: '0Gh84KaW8ivImayH',
														name: 'Here’s How Your Story Ends',
														description: 'You give away the ending of this battle, and it’s not great for them.',
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
																value: 5,
																value2: 0,
																within: 0,
																special: '',
																qualifier: ''
															}
														],
														target: 'Кожен ворог у зоні',
														cost: 9,
														repeatable: false,
														minLevel: 1,
														sections: [
															{
																type: 'roll',
																roll: {
																	characteristic: [
																		'Presence'
																	],
																	bonus: 0,
																	tier1: '2 психічної шкоди; П < [слабкий], зляканий (рят. кидок закінчує)',
																	tier2: '5 психічної шкоди; П < [середній], зляканий (рят. кидок закінчує)',
																	tier3: '7 психічної шкоди; П < [сильний], зляканий (рят. кидок закінчує)'
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
												id: '756Ynw8Qoy8v7gPo',
												name: 'You’re All My Understudies',
												description: 'It’s important for everyone to know each other’s lines, just in case …',
												type: 'Здібність',
												data: {
													ability: {
														id: '756Ynw8Qoy8v7gPo',
														name: 'You’re All My Understudies',
														description: 'It’s important for everyone to know each other’s lines, just in case …',
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
																type: 'Burst',
																value: 5,
																value2: 0,
																within: 0,
																special: '',
																qualifier: ''
															}
														],
														target: 'Кожен союзник у зоні',
														cost: 9,
														repeatable: false,
														minLevel: 1,
														sections: [
															{
																type: 'Текст',
																text: 'Until the end of the encounter, each target gains the speed bonus, weapon distance bonus, disengage bonus, and stability bonus of your currently equipped kit in addition to their own kit’s bonuses.'
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
						features: []
					},
					{
						level: 8,
						features: [
							{
								id: 'oyvdzACJtFq8WHn7',
								name: 'Deleted Scene',
								description: 'Whenever a creature within distance of your Dramatic Monologue ability makes a power roll, you can spend 1 drama as a безкоштовна тригерна дія to use Dramatic Monologue, targeting only one creature.',
								type: 'Текст',
								data: null
							}
						]
					},
					{
						level: 9,
						features: [
							{
								id: 'gPzNIv7yp4ELiJSz',
								name: 'Choice',
								description: '',
								type: 'Вибір',
								data: {
									options: [
										{
											feature: {
												id: 'vHIxEUa7yuxQSjDO',
												name: 'Epic',
												description: 'Your story tells a tale of the villain’s waning power and how the heroes rose to the occasion to stop them.',
												type: 'Здібність',
												data: {
													ability: {
														id: 'vHIxEUa7yuxQSjDO',
														name: 'Epic',
														description: 'Your story tells a tale of the villain’s waning power and how the heroes rose to the occasion to stop them.',
														type: {
															usage: 'Маневр',
															free: false,
															trigger: '',
															time: '',
															qualifiers: [],
															freeStrike: false
														},
														keywords: [
															'Магія',
															'Ближній бій',
															'Дальній'
														],
														distance: [
															{
																type: 'Ближній бій',
																value: 1,
																value2: 0,
																within: 0,
																special: '',
																qualifier: ''
															},
															{
																type: 'Дальній',
																value: 10,
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
																		'Presence'
																	],
																	bonus: 0,
																	tier1: 'Ціль отримує шкоду на кидки здібностей (рят. кидок закінчує).',
																	tier2: 'Ціль отримує подвійну шкоду на кидки здібностей (рят. кидок закінчує).',
																	tier3: 'Ціль отримує подвійну шкоду на кидки сили (рят. кидок закінчує).'
																}
															},
															{
																type: 'Текст',
																text: 'Choose one ally within distance. While the target is affected by this ability, each time they use an ability, that ally can make a free strike against them after the ability is resolved.'
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
												id: 'nqibjR3wWOCxaYIk',
												name: 'Rising Tension',
												description: 'You narrate the tension of the scene and put all hope into your protagonist to turn things around.',
												type: 'Здібність',
												data: {
													ability: {
														id: 'nqibjR3wWOCxaYIk',
														name: 'Rising Tension',
														description: 'You narrate the tension of the scene and put all hope into your protagonist to turn things around.',
														type: {
															usage: 'Маневр',
															free: false,
															trigger: '',
															time: '',
															qualifiers: [],
															freeStrike: false
														},
														keywords: [
															'Магія',
															'Дальній'
														],
														distance: [
															{
																type: 'Дальній',
																value: 10,
																value2: 0,
																within: 0,
																special: '',
																qualifier: ''
															}
														],
														target: 'Один союзник',
														cost: 11,
														repeatable: false,
														minLevel: 1,
														sections: [
															{
																type: 'Текст',
																text: 'The target gains 3 of their Heroic Resource, has a double edge on a power roll of their choice made during their next turn, is no longer slowed or weakened if they were before, and can immediately take their turn after yours if they have not taken their turn already this round.'
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
						features: []
					}
				],
				abilities: [],
				selected: false
			},
			{
				id: 'O51GO1EdIggJHj40',
				name: 'Duelist',
				description: 'Drama infuses your every movement done in tandem with another. You perform dances of death, putting trust in your opponent to return your passion in kind.',
				featuresByLevel: [
					{
						level: 1,
						features: [
							{
								id: '1NhlI9WCQUCKkX0u',
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
										'Гімнастика'
									]
								}
							},
							{
								id: 'gTezUhLaizAfbmXy',
								name: 'Acrobatics',
								description: 'Folks love a good tumble.',
								type: 'Здібність',
								data: {
									ability: {
										id: 'gTezUhLaizAfbmXy',
										name: 'Acrobatics',
										description: 'Folks love a good tumble.',
										type: {
											usage: 'Без дії',
											free: false,
											trigger: '',
											time: '',
											qualifiers: [],
											freeStrike: false
										},
										keywords: [
											'Area',
											'Магія',
											'Виступ'
										],
										distance: [
											{
												type: 'Aura',
												value: 5,
												value2: 0,
												within: 0,
												special: '',
												qualifier: ''
											}
										],
										target: 'На себе і кожного союзника в зоні впливу',
										cost: 0,
										repeatable: false,
										minLevel: 1,
										sections: [
											{
												type: 'Текст',
												text: 'While this performance is active, each target who starts their turn in the area can automatically obtain a tier 3 outcome on one test made to jump, tumble, or climb as part of their movement before the end of their turn.'
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
								id: 'vS4O8NKJgdBVoVjj',
								name: 'Star Power',
								description: 'Your years of practicing fencing and dancing pay off on the battlefield.',
								type: 'Здібність',
								data: {
									ability: {
										id: 'vS4O8NKJgdBVoVjj',
										name: 'Star Power',
										description: 'Your years of practicing fencing and dancing pay off on the battlefield.',
										type: {
											usage: 'Маневр',
											free: false,
											trigger: '',
											time: '',
											qualifiers: [],
											freeStrike: false
										},
										keywords: [],
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
										cost: 1,
										repeatable: false,
										minLevel: 1,
										sections: [
											{
												type: 'Текст',
												text: 'You gain a +2 bonus to speed until the end of your turn. Additionally, the next power roll you make this turn can’t have an outcome lower than tier 2.'
											},
											{
												type: 'field',
												name: 'Spend',
												value: 1,
												repeatable: false,
												effect: 'You gain a +4 bonus to speed instead.'
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
								id: 'uWQCoI4iBOhFpHgW',
								name: 'Riposte',
								description: '“I’d have brought treats had I known I’d be fighting a dog.”',
								type: 'Здібність',
								data: {
									ability: {
										id: 'uWQCoI4iBOhFpHgW',
										name: 'Riposte',
										description: '“I’d have brought treats had I known I’d be fighting a dog.”',
										type: {
											usage: 'Тригерна дія',
											free: false,
											trigger: 'The target takes damage from a melee strike.',
											time: '',
											qualifiers: [],
											freeStrike: false
										},
										keywords: [
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
										target: 'На себе або одного союзника',
										cost: 0,
										repeatable: false,
										minLevel: 1,
										sections: [
											{
												type: 'Текст',
												text: 'The target makes a free strike against the creature who made the triggering strike.'
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
								id: 'lAPeP3iSpt8PqQJI',
								name: 'Choice',
								description: '',
								type: 'Вибір',
								data: {
									options: [
										{
											feature: {
												id: 'FViXbLCcsCb1xdHQ',
												name: 'Classic Chandelier Stunt',
												description: 'Audiences love this bit.',
												type: 'Здібність',
												data: {
													ability: {
														id: 'FViXbLCcsCb1xdHQ',
														name: 'Classic Chandelier Stunt',
														description: 'Audiences love this bit.',
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
														target: 'Self and one willing ally',
														cost: 5,
														repeatable: false,
														minLevel: 1,
														sections: [
															{
																type: 'Текст',
																text: 'Each target can shift up to 5 squares, including vertically, but must end this movement adjacent to the other target and on solid ground. Each target can then make a melee free strike that deals extra damage equal to twice their highest characteristic score.'
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
												id: 'MRR7Ag6ujfREe9A8',
												name: 'En Garde!',
												description: 'Wait, it’s … Guard! Turn! Parry! Dodge! Spin! Thrust! Ha!',
												type: 'Здібність',
												data: {
													ability: {
														id: 'MRR7Ag6ujfREe9A8',
														name: 'En Garde!',
														description: 'Wait, it’s … Guard! Turn! Parry! Dodge! Spin! Thrust! Ha!',
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
																		'Ловкість'
																	],
																	bonus: 0,
																	tier1: '7 + Л шкоди',
																	tier2: '11 + Л шкоди',
																	tier3: '16 + Л шкоди'
																}
															},
															{
																type: 'Текст',
																text: 'The target can make a melee free strike against you. If they do, you can make a melee free strike against the target.'
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
								id: 'TkRYPzOk7E7KosGI',
								name: 'Foil',
								description: 'At the start of an encounter, choose one creature within your line of effect. You have a double edge on power rolls made against or in\ncompetition with that creature. The chosen creature also has a double edge on power rolls made against or in competition with you. If the chosen creature is reduced to 0 Stamina, you can choose a new foil at the start of the next combat round. ',
								type: 'Текст',
								data: null
							}
						]
					},
					{
						level: 4,
						features: []
					},
					{
						level: 5,
						features: [
							{
								id: 'AYG8ODq4Xvn4vWMr',
								name: 'Choice',
								description: '',
								type: 'Вибір',
								data: {
									options: [
										{
											feature: {
												id: 'EpJ6mBFE2kfCK1IY',
												name: 'Verbal Duel',
												description: 'Once on each of your turns while the target of your Foil feature is adjacent to you, you can use a безкоштовний маневр to exchange words with them. Make an opposed Presence test with the target. Whoever gets the higher result can make a free strike, which deals psychic damage instead of its usual damage.',
												type: 'Текст',
												data: null
											},
											value: 1
										},
										{
											feature: {
												id: 'TqxhltwD22GJjGkU',
												name: 'We Can’t Be Upstaged!',
												description: 'Swordplay so graceful it looks like you all practiced this.',
												type: 'Здібність',
												data: {
													ability: {
														id: 'TqxhltwD22GJjGkU',
														name: 'We Can’t Be Upstaged!',
														description: 'Swordplay so graceful it looks like you all practiced this.',
														type: {
															usage: 'Без дії',
															free: false,
															trigger: '',
															time: '',
															qualifiers: [],
															freeStrike: false
														},
														keywords: [
															'Area',
															'Магія',
															'Виступ'
														],
														distance: [
															{
																type: 'Aura',
																value: 5,
																value2: 0,
																within: 0,
																special: '',
																qualifier: ''
															}
														],
														target: 'На себе і кожного союзника в зоні впливу',
														cost: 0,
														repeatable: false,
														minLevel: 1,
														sections: [
															{
																type: 'Текст',
																text: 'While this performance is active, a target who starts their turn in the area gains a bonus to the distance they can shift equal to your Presence score until the end of their turn.'
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
						level: 6,
						features: [
							{
								id: 'AkvymN5wTwBpvJk6',
								name: 'Choice',
								description: '',
								type: 'Вибір',
								data: {
									options: [
										{
											feature: {
												id: 'gCxHNxuFdPtoWOSw',
												name: 'Blood on the Stage',
												description: 'It’s love and blood or drama and blood. Either way, there’s always blood.',
												type: 'Здібність',
												data: {
													ability: {
														id: 'gCxHNxuFdPtoWOSw',
														name: 'Blood on the Stage',
														description: 'It’s love and blood or drama and blood. Either way, there’s always blood.',
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
														cost: 9,
														repeatable: false,
														minLevel: 1,
														sections: [
															{
																type: 'roll',
																roll: {
																	characteristic: [
																		'Ловкість'
																	],
																	bonus: 0,
																	tier1: '12 + Л шкоди; С < [слабкий], кровотеча (рят. кидок закінчує)',
																	tier2: '18 + Л шкоди; С < [середній], кровотеча (рят. кидок закінчує)',
																	tier3: '24 + Л шкоди; кровотеча (до кінця ходу), або якщо С < [сильний], кровотеча (рят. кидок закінчує)'
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
												id: 'yzRbbBkrzCSPBh1w',
												name: 'Fight Choreography',
												description: 'You and your partner make a flashy show of derring-do, then get back to your corners.',
												type: 'Здібність',
												data: {
													ability: {
														id: 'yzRbbBkrzCSPBh1w',
														name: 'Fight Choreography',
														description: 'You and your partner make a flashy show of derring-do, then get back to your corners.',
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
																type: 'Текст',
																text: 'You and the target each make a melee free strike that targets each enemy within 3 squares of either of you, dividing the enemies between each of you. You choose which enemies your free strike targets and which enemies the target creature’s free strike targets. You then slide the target 5 squares, ignoring stability.'
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
						features: []
					},
					{
						level: 8,
						features: [
							{
								id: 'FwA0rbxGHrD7Oj2H',
								name: 'Masterwork',
								description: 'Choose one of your signature abilities and name it after yourself. You always have this ability available, even if it is sourced from a kit you switch out. Whenever you use this ability, you gain an edge and 1 surge that you can use only on this ability.\n\nAdditionally, when your named signature ability is the last ability you use in an encounter, you can immediately use the Hear Ye, Hear Ye! effect of your Zeitgeist feature to tell tales of your exploits after the encounter ends',
								type: 'Текст',
								data: null
							}
						]
					},
					{
						level: 9,
						features: [
							{
								id: 'qIMKE6V6R4w2teMf',
								name: 'Choice',
								description: '',
								type: 'Вибір',
								data: {
									options: [
										{
											feature: {
												id: '4LyAtdASe3AEJaon',
												name: 'Expert Fencer',
												description: 'If you can land the strike, the crowd goes wild.',
												type: 'Здібність',
												data: {
													ability: {
														id: '4LyAtdASe3AEJaon',
														name: 'Expert Fencer',
														description: 'If you can land the strike, the crowd goes wild.',
														type: {
															usage: 'Основна дія',
															free: false,
															trigger: '',
															time: '',
															qualifiers: [],
															freeStrike: false
														},
														keywords: [
															'Ривок',
															'Ближній бій',
															'Удар',
															'Зброя'
														],
														distance: [
															{
																type: 'Ближній бій',
																value: 3,
																value2: 0,
																within: 0,
																special: '',
																qualifier: ''
															}
														],
														target: 'Одна істота або предмет',
														cost: 11,
														repeatable: false,
														minLevel: 1,
														sections: [
															{
																type: 'roll',
																roll: {
																	characteristic: [
																		'Ловкість'
																	],
																	bonus: 0,
																	tier1: '15 + Л шкоди',
																	tier2: '21 + Л шкоди',
																	tier3: '28 + Л шкоди; С < [сильний], кровотеча (рят. кидок закінчує)'
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
												id: 'IZCTPQBJer4fFuKi',
												name: 'Renegotiated Contract',
												description: 'No, no. You don’t die until the sequel.',
												type: 'Здібність',
												data: {
													ability: {
														id: 'IZCTPQBJer4fFuKi',
														name: 'Renegotiated Contract',
														description: 'No, no. You don’t die until the sequel.',
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
																type: 'Текст',
																text: 'Add your current Stamina to your target’s current Stamina, then you have half that total Stamina and the target has the remainder. If either of you would gain more Stamina this way than their Stamina maximum, the difference in Stamina between what that creature would gain and their maximum is gained by the other creature. Neither of you can gain more Stamina than your maximum this way. You then make a power roll.'
															},
															{
																type: 'roll',
																roll: {
																	characteristic: [
																		'Presence'
																	],
																	bonus: 0,
																	tier1: 'Ви і ціль можете кожен завершити на собі один ефект, який закінчується рят. кидком або наприкінці вашого ходу.',
																	tier2: 'Ви і ціль можете завершити на собі будь-які ефекти, які закінчуються рят. кидком або наприкінці вашого ходу.',
																	tier3: 'Ви можете обрати будь-які поточні ефекти на собі й цілі, які закінчуються рят. кидком або наприкінці вашого ходу, застосувати обрані ефекти до цілі й завершити решту.'
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
						level: 10,
						features: []
					}
				],
				abilities: [],
				selected: false
			},
			{
				id: 'tWBfpTKQXZ12jGsU',
				name: 'Virtuoso',
				description: 'You find drama in music and song, weaving magic between vibrations and filling the audience with your pathos.',
				featuresByLevel: [
					{
						level: 1,
						features: [
							{
								id: 'zVuRuelOOMRXxCgG',
								name: 'Interpersonal Skill',
								description: '',
								type: 'Вибір навички',
								data: {
									options: [],
									listOptions: [
										'Міжособистісні'
									],
									count: 1,
									selected: [
										'Зчитування людини'
									]
								}
							},
							{
								id: '8OR9gvPtJN7cIZhh',
								name: 'Power Chord',
								description: 'Your instrument rings true and your music blows everyone away.',
								type: 'Здібність',
								data: {
									ability: {
										id: '8OR9gvPtJN7cIZhh',
										name: 'Power Chord',
										description: 'Your instrument rings true and your music blows everyone away.',
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
												type: 'Burst',
												value: 2,
												value2: 0,
												within: 0,
												special: '',
												qualifier: ''
											}
										],
										target: 'Кожен ворог у зоні',
										cost: 0,
										repeatable: false,
										minLevel: 1,
										sections: [
											{
												type: 'roll',
												roll: {
													characteristic: [
														'Presence'
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
							{
								id: 'zVLsFRY0V10dNuaA',
								name: 'Virtuoso Performances',
								description: 'You have the following performance abilities, which are usable with\nyour Routines feature.',
								type: 'Набір особливостей',
								data: {
									features: [
										{
											id: 'K0mQdfUHeiaVSsMN',
											name: '“Thunder Mother”',
											description: 'All for thunder motherrr! ♪ Run and hide for coverrr! ♪',
											type: 'Здібність',
											data: {
												ability: {
													id: 'K0mQdfUHeiaVSsMN',
													name: '“Thunder Mother”',
													description: 'All for thunder motherrr! ♪ Run and hide for coverrr! ♪',
													type: {
														usage: 'Без дії',
														free: false,
														trigger: '',
														time: '',
														qualifiers: [],
														freeStrike: false
													},
													keywords: [
														'Магія',
														'Виступ',
														'Дальній',
														'Удар'
													],
													distance: [
														{
															type: 'Дальній',
															value: 10,
															value2: 0,
															within: 0,
															special: '',
															qualifier: ''
														}
													],
													target: 'Одна істота',
													cost: 0,
													repeatable: false,
													minLevel: 1,
													sections: [
														{
															type: 'Текст',
															text: 'At the end of each combat round while this performance is active, you can make a power roll against the target that ignores cover. You can’t target the same creature twice with this effect.'
														},
														{
															type: 'roll',
															roll: {
																characteristic: [
																	'Presence'
																],
																bonus: 0,
																tier1: 'Блискавичної шкоди, рівної вашому рівню',
																tier2: 'Блискавичної шкоди, рівної 5 + ваш рівень',
																tier3: 'Блискавичної шкоди, рівної 10 + ваш рівень'
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
										{
											id: 'T2lumbD5GNggb7kX',
											name: '“Ballad of the Beast”',
											description: 'Teeth are bare! ♪ Eyes black! ♪ No escaping the beast! ♪',
											type: 'Здібність',
											data: {
												ability: {
													id: 'T2lumbD5GNggb7kX',
													name: '“Ballad of the Beast”',
													description: 'Teeth are bare! ♪ Eyes black! ♪ No escaping the beast! ♪',
													type: {
														usage: 'Без дії',
														free: false,
														trigger: '',
														time: '',
														qualifiers: [],
														freeStrike: false
													},
													keywords: [
														'Area',
														'Магія',
														'Виступ'
													],
													distance: [
														{
															type: 'Aura',
															value: 5,
															value2: 0,
															within: 0,
															special: '',
															qualifier: ''
														}
													],
													target: 'На себе і кожного союзника в зоні впливу',
													cost: 0,
													repeatable: false,
													minLevel: 1,
													sections: [
														{
															type: 'Текст',
															text: 'While this performance is active, each target who starts their turn in the area gains 1 surge.'
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
							},
							{
								id: 'WcIsMpwQBuTdLdmv',
								name: 'Harmonize',
								description: 'Give the chorus a little punch.',
								type: 'Здібність',
								data: {
									ability: {
										id: 'WcIsMpwQBuTdLdmv',
										name: 'Harmonize',
										description: 'Give the chorus a little punch.',
										type: {
											usage: 'Тригерна дія',
											free: false,
											trigger: 'The target uses an ability that targets only one enemy and costs 3 or fewer of their Heroic Resource.',
											time: '',
											qualifiers: [],
											freeStrike: false
										},
										keywords: [
											'Дальній'
										],
										distance: [
											{
												type: 'Дальній',
												value: 5,
												value2: 0,
												within: 0,
												special: '',
												qualifier: ''
											}
										],
										target: 'Один союзник',
										cost: 3,
										repeatable: false,
										minLevel: 1,
										sections: [
											{
												type: 'Текст',
												text: 'The target can choose one additional target for the triggering ability. Any damage dealt to the additional target is sonic damage.'
											},
											{
												type: 'field',
												name: 'Spend',
												value: 1,
												repeatable: true,
												effect: 'You can trigger this ability when a target uses an ability that has a Heroic Resource cost of 3 + each additional drama spent.'
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
								id: 'DWhLWnP0bwuHQ2qy',
								name: 'Choice',
								description: '',
								type: 'Вибір',
								data: {
									options: [
										{
											feature: {
												id: 'U3IGzrqBjqxWKD9K',
												name: 'Encore',
												description: 'Again! Again!',
												type: 'Здібність',
												data: {
													ability: {
														id: 'U3IGzrqBjqxWKD9K',
														name: 'Encore',
														description: 'Again! Again!',
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
															'Удар'
														],
														distance: [
															{
																type: 'Особливе',
																value: 0,
																value2: 0,
																within: 0,
																special: '',
																qualifier: ''
															}
														],
														target: 'Особливе',
														cost: 5,
														repeatable: false,
														minLevel: 1,
														sections: [
															{
																type: 'Текст',
																text: 'You use an ability that you have observed being used this combat round. The ability must have the Strike keyword, cost 5 or fewer of a Heroic Resource, and cost no Malice. When you make the strike, you use your Presence score for any power rolls, and any damage you deal is sonic damage.'
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
												id: '3eWhJl6vthKu3RY3',
												name: 'Tough Crowd',
												description: 'Your fans don’t seem to like the opening act …',
												type: 'Здібність',
												data: {
													ability: {
														id: '3eWhJl6vthKu3RY3',
														name: 'Tough Crowd',
														description: 'Your fans don’t seem to like the opening act …',
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
																value: 3,
																value2: 0,
																within: 10,
																special: '',
																qualifier: ''
															}
														],
														target: 'Особливе',
														cost: 5,
														repeatable: false,
														minLevel: 1,
														sections: [
															{
																type: 'Текст',
																text: 'The area is haunted by a swirling horde of phantoms until the end of the encounter. Allies can enter any square of the area without spending movement. At the end of each of your turns, you can make one power roll that targets each enemy in the area.'
															},
															{
																type: 'roll',
																roll: {
																	characteristic: [
																		'Presence'
																	],
																	bonus: 0,
																	tier1: '5 шкоди від скверни; С < [слабкий], притягнути на 1 до центру зони',
																	tier2: '9 шкоди від скверни; С < [середній], притягнути на 2 до центру зони',
																	tier3: '12 шкоди від скверни; С < [сильний], притягнути на 3 до центру зони'
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
								id: 'gMLn35ehmeBT1RYV',
								name: 'Second Album',
								description: 'You have the following performance abilities, which are usable with your Routines feature.',
								type: 'Набір особливостей',
								data: {
									features: [
										{
											id: 'mWeNhxpEVJMjKcU8',
											name: '“Fire Up the Night”',
											description: 'Maybe you and I ♪ We can still bring the light! ♪',
											type: 'Здібність',
											data: {
												ability: {
													id: 'mWeNhxpEVJMjKcU8',
													name: '“Fire Up the Night”',
													description: 'Maybe you and I ♪ We can still bring the light! ♪',
													type: {
														usage: 'Без дії',
														free: false,
														trigger: '',
														time: '',
														qualifiers: [],
														freeStrike: false
													},
													keywords: [
														'Area',
														'Магія',
														'Виступ'
													],
													distance: [
														{
															type: 'Aura',
															value: 5,
															value2: 0,
															within: 0,
															special: '',
															qualifier: ''
														}
													],
													target: 'На себе і кожного союзника в зоні впливу',
													cost: 0,
													repeatable: false,
													minLevel: 1,
													sections: [
														{
															type: 'Текст',
															text: 'While this performance is active, each target who starts their turn in the area doesn’t take a bane on strikes against creatures with concealment. Once during their turn, they can search for hidden creatures as a безкоштовний маневр.'
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
											id: 'lDpZJV6xP89zFb8e',
											name: '“Never-Ending Hero”',
											description: 'And toniiight we can truly say ♪ They will alllways find a way! ♪',
											type: 'Здібність',
											data: {
												ability: {
													id: 'lDpZJV6xP89zFb8e',
													name: '“Never-Ending Hero”',
													description: 'And toniiight we can truly say ♪ They will alllways find a way! ♪',
													type: {
														usage: 'Без дії',
														free: false,
														trigger: '',
														time: '',
														qualifiers: [],
														freeStrike: false
													},
													keywords: [
														'Area',
														'Магія',
														'Виступ'
													],
													distance: [
														{
															type: 'Aura',
															value: 5,
															value2: 0,
															within: 0,
															special: '',
															qualifier: ''
														}
													],
													target: 'На себе і кожного союзника в зоні впливу',
													cost: 0,
													repeatable: false,
													minLevel: 1,
													sections: [
														{
															type: 'Текст',
															text: 'While this performance is active, each target who starts their turn dying while in the area gains an edge on power rolls and ignores the effects of bleeding until the end of their turn.'
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
							}
						]
					},
					{
						level: 4,
						features: []
					},
					{
						level: 5,
						features: [
							{
								id: 'suMDtEOQggORQzn4',
								name: 'Choice',
								description: '',
								type: 'Вибір',
								data: {
									options: [
										{
											feature: {
												id: 'Qcz0plE7f3m2oMpE',
												name: 'Bolstering Banter',
												description: 'Once on each of your turns, you can use a безкоштовний маневр to exchange words with a target of your current performance, other than yourself. The target can spend a Recovery to gain temporary Stamina equal to their recovery value.',
												type: 'Текст',
												data: null
											},
											value: 1
										},
										{
											feature: {
												id: 'k1vcKIoLARGr6Lsr',
												name: 'Medley',
												description: 'You can maintain two performances at a time using your Routines feature.',
												type: 'Текст',
												data: null
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
						level: 6,
						features: [
							{
								id: 'VD8b06zsDjeJpzlX',
								name: 'Choice',
								description: '',
								type: 'Вибір',
								data: {
									options: [
										{
											feature: {
												id: 'KVEuxjzQu7tvcsxH',
												name: 'Feedback',
												description: 'Your music pounds the crowd to the beat until their hearts can’t stand it anymore.',
												type: 'Здібність',
												data: {
													ability: {
														id: 'KVEuxjzQu7tvcsxH',
														name: 'Feedback',
														description: 'Your music pounds the crowd to the beat until their hearts can’t stand it anymore.',
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
																type: 'Особливе',
																value: 0,
																value2: 0,
																within: 0,
																special: 'Три куби 3 в межах 1',
																qualifier: ''
															}
														],
														target: 'Кожен ворог у зоні',
														cost: 9,
														repeatable: false,
														minLevel: 1,
														sections: [
															{
																type: 'Текст',
																text: 'A prone target ignores this ability.'
															},
															{
																type: 'roll',
																roll: {
																	characteristic: [
																		'Presence'
																	],
																	bonus: 0,
																	tier1: '7 звукової шкоди; П < [слабкий], розпластаний',
																	tier2: '10 звукової шкоди; П < [середній], розпластаний',
																	tier3: '13 звукової шкоди; П < [сильний], розпластаний'
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
												id: 'uPEJe3YMCKQ5no95',
												name: 'Legendary Drum Fill',
												description: 'You start a drumroll that roars like thunder with every impact the heroes make.',
												type: 'Здібність',
												data: {
													ability: {
														id: 'uPEJe3YMCKQ5no95',
														name: 'Legendary Drum Fill',
														description: 'You start a drumroll that roars like thunder with every impact the heroes make.',
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
																type: 'Burst',
																value: 4,
																value2: 0,
																within: 0,
																special: '',
																qualifier: ''
															}
														],
														target: 'На себе і кожного союзника в зоні впливу',
														cost: 9,
														repeatable: false,
														minLevel: 1,
														sections: [
															{
																type: 'Текст',
																text: 'Each target gains 1 surge, then gains 1 surge at the start of each combat round until the end of the encounter.'
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
						features: []
					},
					{
						level: 8,
						features: [
							{
								id: '17EPB8FMDm0rbPtb',
								name: 'Crowd Favorites',
								description: 'You have the following performance abilities, which are usable with your Routines feature.',
								type: 'Набір особливостей',
								data: {
									features: [
										{
											id: 'cCAwy3SGtXi1BAgF',
											name: 'Moonlight Sonata',
											description: 'Music pours out of your heart, filling the area with the utmost delicacy and without damper.',
											type: 'Здібність',
											data: {
												ability: {
													id: 'cCAwy3SGtXi1BAgF',
													name: 'Moonlight Sonata',
													description: 'Music pours out of your heart, filling the area with the utmost delicacy and without damper.',
													type: {
														usage: 'Без дії',
														free: false,
														trigger: '',
														time: '',
														qualifiers: [],
														freeStrike: false
													},
													keywords: [
														'Area',
														'Магія',
														'Виступ'
													],
													distance: [
														{
															type: 'Aura',
															value: 5,
															value2: 0,
															within: 0,
															special: '',
															qualifier: ''
														}
													],
													target: 'Кожен союзник у зоні',
													cost: 0,
													repeatable: false,
													minLevel: 1,
													sections: [
														{
															type: 'Текст',
															text: 'While this performance is active, each target who is dead can choose to continue taking turns after death. On each of their turns, a target can move and use either a основна дія or a маневр, but can’t spend Recoveries or use тригерні дії. At the end of the encounter, each target who chose to take turns this way turns to dust and blows away.'
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
											id: 'uPCAVJRpZCks52hw',
											name: 'Radical Fantasia',
											description: '♪ Viras, my Viras, will you hold their hands as they cryyy-aaaiigh? ♪',
											type: 'Здібність',
											data: {
												ability: {
													id: 'uPCAVJRpZCks52hw',
													name: 'Radical Fantasia',
													description: '♪ Viras, my Viras, will you hold their hands as they cryyy-aaaiigh? ♪',
													type: {
														usage: 'Без дії',
														free: false,
														trigger: '',
														time: '',
														qualifiers: [],
														freeStrike: false
													},
													keywords: [
														'Area',
														'Магія',
														'Виступ'
													],
													distance: [
														{
															type: 'Aura',
															value: 5,
															value2: 0,
															within: 0,
															special: '',
															qualifier: ''
														}
													],
													target: 'На себе і кожного союзника в зоні впливу',
													cost: 0,
													repeatable: false,
													minLevel: 1,
													sections: [
														{
															type: 'Текст',
															text: 'While this performance is active, each target who starts their turn in the area ignores difficult terrain, and any ability they use that imposes forced movement gains a +2 bonus to the forced movement distance until the end of their turn. Additionally, once per combat round, each target can use a тригерна дія as a безкоштовна тригерна дія.'
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
							}
						]
					},
					{
						level: 9,
						features: [
							{
								id: 'H8CN7zqO4hRni29m',
								name: 'Choice',
								description: '',
								type: 'Вибір',
								data: {
									options: [
										{
											feature: {
												id: 'ZDIrJmxVMJMwBES0',
												name: 'Jam Session',
												description: 'Your jam session creates new genres that compel everyone to get up and move.',
												type: 'Здібність',
												data: {
													ability: {
														id: 'ZDIrJmxVMJMwBES0',
														name: 'Jam Session',
														description: 'Your jam session creates new genres that compel everyone to get up and move.',
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
																value: 5,
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
																		'Presence'
																	],
																	bonus: 0,
																	tier1: '8 звукової шкоди',
																	tier2: '11 звукової шкоди',
																	tier3: '15 звукової шкоди'
																}
															},
															{
																type: 'Текст',
																text: 'Each creature within distance gains a +5 bonus to speed until the end of their next turn. While under this effect, each target must use their full movement during their turn.'
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
												id: 'eY09PeFg3MJJSua6',
												name: 'Melt Their Faces',
												description: 'The power of music rips through the reality around the target and blows them away.',
												type: 'Здібність',
												data: {
													ability: {
														id: 'eY09PeFg3MJJSua6',
														name: 'Melt Their Faces',
														description: 'The power of music rips through the reality around the target and blows them away.',
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
															'Магія',
															'Дальній',
															'Удар'
														],
														distance: [
															{
																type: 'Ближній бій',
																value: 1,
																value2: 0,
																within: 0,
																special: '',
																qualifier: ''
															},
															{
																type: 'Дальній',
																value: 10,
																value2: 0,
																within: 0,
																special: '',
																qualifier: ''
															}
														],
														target: 'Одна істота або предмет',
														cost: 11,
														repeatable: false,
														minLevel: 1,
														sections: [
															{
																type: 'roll',
																roll: {
																	characteristic: [
																		'Presence'
																	],
																	bonus: 0,
																	tier1: '12 + П звукової шкоди; відштовхнути на 5',
																	tier2: '16 + П звукової шкоди; відштовхнути на 10',
																	tier3: '22 + П звукової шкоди; відштовхнути на 15'
																}
															},
															{
																type: 'Текст',
																text: 'Forced movement from this ability ignores stability.'
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
						features: []
					}
				],
				abilities: [],
				selected: true
			}
		],
		level: 1,
		characteristics: [
			{
				characteristic: 'Might',
				value: 1
			},
			{
				characteristic: 'Ловкість',
				value: 2
			},
			{
				characteristic: 'Reason',
				value: 1
			},
			{
				characteristic: 'Intuition',
				value: -1
			},
			{
				characteristic: 'Presence',
				value: 2
			}
		]
	},
	career: {
		id: 'career-performer',
		name: 'Performer',
		description: 'You can sing, act, or dance well enough that people actually pay to see you do it. Imagine that!',
		features: [
			{
				id: 'performer-feature-1',
				name: 'Skill',
				description: '',
				type: 'Вибір навички',
				data: {
					options: [
						'Музика',
						'Виступ'
					],
					listOptions: [],
					count: 1,
					selected: [
						'Виступ'
					]
				}
			},
			{
				id: 'performer-feature-2',
				name: 'Interpersonal Skills',
				description: '',
				type: 'Вибір навички',
				data: {
					options: [],
					listOptions: [
						'Міжособистісні'
					],
					count: 2,
					selected: [
						'Чутки',
						'Суспільство'
					]
				}
			},
			{
				id: 'performer-feature-3',
				name: 'Renown',
				description: '',
				type: 'Бонус',
				data: {
					field: 'Renown',
					value: 2,
					valueCharacteristics: [],
					valueCharacteristicMultiplier: 1,
					valuePerLevel: 0,
					valuePerEchelon: 0
				}
			},
			{
				id: 'performer-feature-4',
				name: 'Interpersonal Perk',
				description: '',
				type: 'Перевага',
				data: {
					lists: [
						'Міжособистісні'
					],
					count: 1,
					selected: [
						{
							id: 'perk-harmonizer',
							name: 'Harmonizer',
							description: 'Ви можете робити випробування Присутності, використовуючи навичку Музика, щоб впливати на істот, які не мають емоцій або не можуть вас зрозуміти. Крім того, один раз під час переговорів, коли союзник наводить аргумент, ви можете заграти музику, щоб дати цьому союзникові перевагу на його випробування.',
							type: 'Текст',
							data: null,
							list: 'Міжособистісні'
						}
					]
				}
			}
		],
		incitingIncidents: {
			options: [
				{
					id: 'career-performer-ii-1',
					name: 'Cursed Audience',
					description: 'During a performance, you watched in horror as the audience was suddenly overcome by a curse that caused them to disintegrate before your eyes. You aren’t sure what happened, but seeking an answer quickly led you to places where only heroes dare to go.'
				},
				{
					id: 'career-performer-ii-2',
					name: 'False Accolades',
					description: 'After a poor performance, you found a script to a well-written play left in your dressing room. The accompanying note asked that if you performed the play, you should give the author credit. But after a commanding performance, you claimed to be star and playwright both - and the curse hidden on those pages activated. A small portion of your skin has begun to transform into undead flesh, and the only cure is to prove you have become selfless.'
				},
				{
					id: 'career-performer-ii-3',
					name: 'Fame and Fortune',
					description: 'You thought you were famous - then that hero came to your show. Suddenly, all eyes were on the dragon-slaying brute instead of on the stage where they belonged. The audience even gave them a standing ovation when they entered the room. All you got was polite applause. Fine. If people want a hero so much, then a hero you shall be.'
				},
				{
					id: 'career-performer-ii-4',
					name: 'Songs to the Dead',
					description: 'Your performances have always been tinged with a bit of melancholy. During a particularly soulful performance, spirits disturbed the living audience and sat in their chairs. They begged you to prevent their demise, providing no other details before disappearing. You set out to see if you could help your most dedicated fans.'
				},
				{
					id: 'career-performer-ii-5',
					name: 'Speechless',
					description: 'A heckler’s mocking words left you utterly speechless during a performance, stinging your pride and stirring your arrogance. The incident strained your legendary voice, and you could only speak in soft whispers. The heckler was a fey trickster who stole your voice, promising to give it back after you accomplished real good in the world.'
				},
				{
					id: 'career-performer-ii-6',
					name: 'Tragic Lesson',
					description: 'When a producer who once shortchanged you shouted out on the street for you to stop a thief who had picked their pocket, your spite toward the producer inspired you to let the thief run right on by. But that decision led to tragedy when the thief later harmed someone you loved. From that moment on, you made it your responsibility to protect others.'
				}
			],
			selected: {
				id: 'career-performer-ii-6',
				name: 'Tragic Lesson',
				description: 'When a producer who once shortchanged you shouted out on the street for you to stop a thief who had picked their pocket, your spite toward the producer inspired you to let the thief run right on by. But that decision led to tragedy when the thief later harmed someone you loved. From that moment on, you made it your responsibility to protect others.'
			},
			selectedID: 'career-performer-ii-6'
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
} as Hero;
