import { Hero } from '@/models/hero';

export const highElfTactician = {
	id: '7it9NqSWNlAo8JeB',
	name: 'Земля плаче — небеса розділяються',
	picture: null,
	folder: '',
	settingIDs: [
		'',
		'orden'
	],
	ancestry: {
		id: 'ancestry-high-elf',
		name: 'Високий ельф',
		description: 'Діти сонячних небожителів, створені, щоб доглядати їхні бібліотеки й служити справжнім ельфам як вісники; історія високих ельфів описує кращу епоху до приходу людей і воєн. Тоді небожителі ще були в світі, і все, що мало значення — мистецтво та краса.',
		features: [
			{
				id: 'high-elf-feature-1',
				name: 'Гламур високого ельфа',
				description: 'Магічний гламур змушує інших сприймати вас як цікаву та привабливу особу, надаючи перевагу на перевірках Присутності при використанні навичок Флірт або Переконання. Цей гламур робить ваш вигляд і голос трохи різними для кожної істоти, бо те, що приваблює одну, може не підходити іншій. Проте ви ніколи не здаєтесь кимось іншим.',
				type: 'Текст',
				data: null
			},
			{
				id: 'high-elf-feature-2',
				name: 'Риси високого ельфа',
				description: '',
				type: 'Вибір',
				data: {
					options: [
						{
							feature: {
								id: 'high-elf-feature-2-0',
								name: 'Гламур жаху',
								description: 'Коли ворог завдає удару, ви звертаєте магію свого гламура, щоб вселити страх у його серце. Кожного разу, коли ви отримуєте пошкодження від істоти, ви можете використати спрацьовану дію, щоб зробити цю істоту наляканою вами до кінця її наступного ходу.',
								type: 'Текст',
								data: null
							},
							value: 2
						},
						{
							feature: {
								id: 'high-elf-feature-2-1',
								name: 'Витончений відступ',
								description: 'Ви отримуєте бонус +1 до відстані, на яку можете зміститися під час виконання рухової дії «Відступ».',
								type: 'Бонус',
								data: {
									field: 'Відступ',
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
								id: 'high-elf-feature-2-2',
								name: 'Гострі відчуття',
								description: 'Ваші почуття особливо гострі й спостережливі. Ви отримуєте перевагу на перевірках для виявлення загроз.',
								type: 'Текст',
								data: null
							},
							value: 1
						},
						{
							feature: {
								id: 'high-elf-feature-2-4',
								name: 'Іншосвітня грація',
								description: 'Тіло й розум ельфа важко утримати. Коли ви робите рятівний кидок, ви успішні при результаті 5 або вище.',
								type: 'Текст',
								data: null
							},
							value: 2
						},
						{
							feature: {
								id: 'high-elf-feature-2-3',
								name: 'Відновлення спогадів',
								description: 'Доступ до спогадів для вас такий же простий, як життя в теперішньому. Ви отримуєте перевагу на перевірках для пригадування знань.',
								type: 'Текст',
								data: null
							},
							value: 1
						},
						{
							feature: {
								id: 'high-elf-feature-2-5',
								name: 'Нескорений розум',
								description: 'Ваш розум дозволяє вам зберігати фокус у будь-якій ситуації.',
								type: 'Імунітет до станів',
								data: {
									conditions: [
										'Dazed'
									]
								}
							},
							value: 2
						}
					],
					count: 'ancestry',
					selected: [
						{
							id: 'high-elf-feature-2-2',
							name: 'Гострі відчуття',
							description: 'Ваші відчуття особливо гострі й спостережливі. Ви отримуєте перевагу на перевірках для виявлення загроз.',
							type: 'Текст',
							data: null
						},
						{
							id: 'high-elf-feature-2-4',
							name: 'Іншосвітня грація',
							description: 'Тіло й розум ельфа важко втримати під контролем. Коли ви робите рятівний кидок, ви успішні при результаті 5 або вищому.',
							type: 'Текст',
							data: null
						}
					]
				}
			}
		],
		ancestryPoints: 3
	},
	culture: {
		id: 'culture-high-elf',
		name: 'Високий ельф',
		description: 'Відокремлена, бюрократична, військова.',
		type: 'Походження',
		language: {
			id: 'culture-language',
			name: 'Мова',
			description: '',
			type: 'Вибір мови',
			data: {
				options: [],
				count: 1,
				selected: ['Гіраллік (Hyrallic)']
			}
		},
		languages: [],
		environment: {
			id: 'env-secluded',
			name: 'Ізольований',
			description: 'Відокремлена культура базується в одному доволі тісному просторі — будівлі, печері тощо — і рідко взаємодіє з іншими культурами. Такі місця часто є монастирями, замками або в’язницями. Люди в відокремленій культурі мають мало причин залишати свій дім або спілкуватися з іншими культурами, хоч можуть знати про них та події за межами анклаву. Коли люди живуть разом близько один до одного, вони зазвичай вчаться ладнати. Вони часто проводять багато часу в навчанні чи усамітненні, бо в ізоляції небагато іншого робити.',
			type: 'Вибір навички',
			data: {
				options: [],
				listOptions: [
					'Міжособистісні',
					'Знання'
				],
				count: 1,
				selected: [
					'Переконання'
				]
			}
		},
		organization: {
			id: 'org-bureaucratic',
			name: 'Бюрократичний',
			description: 'Бюрократичні культури просякнуті офіційним керівництвом і формально зафіксованими законами. Учасники такої культури часто ранжуються за владою згідно з цими законами; невелика група людей має право керувати за походженням, виборами або іншим офіційним стандартом. Багато бюрократичних спільнот мають одну людину на вершині, інші — раду. Прикладами є торгова гільдія з гільдмастером, скарбником і статутом; феодальний лорд, що править групою лицарів, які, у свою чергу, правлять селянами; або мілітаристичне суспільство з рангами й правилами. Ті, хто процвітає в бюрократіях, не просто слідують правилам — вони вміють використовувати їх на власну користь, змінюючи або тлумачачи політику. Важливо налагодити стосунки з тими, хто творить закони. Інші ж спеціалізуються на діях поза суворими правилами, уникаючи покарання.',
			type: 'Вибір навички',
			data: {
				options: [],
				listOptions: [
					'Міжособистісні',
					'Інтриги'
				],
				count: 1,
				selected: [
					'Флірт'
				]
			}
		},
		upbringing: {
			id: 'up-martial',
			name: 'Військовий',
			description: 'Герой з військовим вихованням виріс серед воїнів — солдат регулярної армії, загону найманців, гільдії мисливців на чудовиськ або інших, чиї життя обертаються навколо бою. Герої з таким вихованням завжди готові до битви — і знають, як її завершити.',
			type: 'Вибір навички',
			data: {
				options: [
					'Ковальство',
					'Стрільництво',
					'Лазіння',
					'Витривалість',
					'Верхова їзда',
					'Залякування',
					'Пильність',
					'Відстеження',
					'Монстри',
					'Стратегія'
				],
				listOptions: [],
				count: 1,
				selected: [
					'Стратегія'
				]
			}
		}
	},
	class: {
		id: 'class-tactician',
		name: 'Тактик',
		description: '\nСтратег. Захисник. Лідер. З мечем у руці ви ведете союзників у саме горло битви, віддаючи накази, що надихають товаришів діяти швидше й бити точніше. Водночас ви стоїте між побратимами та смертю, насміхаючись над послідовниками зла, якщо вони спробують перевершити вас.\n\nЯк тактик, ви маєте здібності, що лікують союзників і дають їм додаткову шкоду, рухливість та атаки.',
		type: 'standard',
		subclassName: 'Тактична доктрина',
		subclassCount: 1,
		primaryCharacteristicsOptions: [
			[
				'Might',
				'Reason'
			]
		],
		primaryCharacteristics: [
			'Might',
			'Reason'
		],
		featuresByLevel: [
			{
				level: 1,
				features: [
					{
						id: 'tatician-stamina',
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
						id: 'tactician-recoveries',
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
						id: 'tactician-resource',
						name: 'Фокус',
						description: '',
						type: 'Героїчний ресурс',
						data: {
							type: 'heroic',
							gains: [
								{
									tag: 'start',
									trigger: 'Start of your turn',
									value: '2'
								},
								{
									tag: 'deal-damage',
									trigger: 'The first time each round that you or an ally damages a creature you have marked',
									value: '1'
								},
								{
									tag: 'ability',
									trigger: 'The first time in a round that an ally within 10 squares of you uses a heroic ability',
									value: '1'
								}
							],
							details: '',
							canBeNegative: false,
							value: 0
						}
					},
					{
						id: 'tactician-1-1',
						name: 'Міжособистісна навичка',
						description: '',
						type: 'Вибір навички',
						data: {
							options: [],
							listOptions: [
								'Міжособистісні'
							],
							count: 1,
							selected: [
								'Лідерство'
							]
						}
					},
					{
						id: 'tactician-1-2',
						name: 'Навички',
						description: '',
						type: 'Вибір навички',
						data: {
							options: [
								'Пильність',
								'Архітектура',
								'Ковальство',
								'Вихваляння',
								'Культура',
								'Емпатія',
								'Стрільництво',
								'Механіка',
								'Монстри',
								'Пошук',
								'Стратегія'
							],
							listOptions: [
								'Дослідження'
							],
							count: 2,
							selected: [
								'Пошук',
								'Монстри'
							]
						}
					},
					{
						id: 'tactician-1-4',
						name: 'Польовий арсенал',
						description: 'Ви тренувалися з широким арсеналом зброї та обладунків і розробили техніки для оптимізації їх використання. Ви можете використовувати та отримувати переваги двох наборів, включно з обома їхніми сигнатурними здібностями. Коли ви обираєте або змінюєте один набір, ви також можете обрати або змінити свій другий набір.',
						type: 'Набір',
						data: {
							types: [
								''
							],
							count: 2,
							selected: [
								{
									id: 'kit-shining-armor',
									name: 'Блискучі обладунки',
									description: 'Набір «Блискучі обладунки» дає найвищий захист для набору, надаючи меч, щит і обладунки, необхідні для гри архетипним лицарем.',
									type: '',
									armor: [
										'Важка броня',
										'Щит'
									],
									weapon: [
										'Середня зброя'
									],
									stamina: 12,
									speed: 0,
									stability: 1,
									meleeDamage: {
										tier1: 2,
										tier2: 2,
										tier3: 2
									},
									rangedDamage: null,
									meleeDistance: 0,
									rangedDistance: 0,
									disengage: 0,
									features: [
										{
											id: 'kit-shining-armor-signature',
											name: 'Оборонний напад',
											description: 'Сила вашого нападу робить неможливим для ворога ігнорувати вас.',
											type: 'Здібність',
											data: {
												ability: {
													id: 'kit-shining-armor-signature',
													name: 'Protective Attack',
													description: 'Сила вашого нападу робить неможливим для ворога ігнорувати вас.',
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
																	'Might',
																	'Ловкість'
																],
																bonus: 0,
																tier1: '3 + С або Л пошкодження',
																tier2: '6 + С або Л пошкодження',
																tier3: '9 + С або Л пошкодження'
															}
														},
														{
															type: 'Текст',
															text: 'Ціль провокується до кінця її наступного ходу.'
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
									id: 'kit-rapid-fire',
									name: 'Швидка стрільба',
									description: 'Набір «Швидка стрільба» призначений для лучників, які прагнуть завдати максимальну шкоду, випускаючи якомога більше стріл у сусідніх ворогів. З цим набором ваша техніка бою зосереджена на осипанні супротивників, перш ніж вони зможуть наблизитися для контратаки.',
									type: '',
									armor: [
										'Легка броня'
									],
									weapon: [
										'Лук'
									],
									stamina: 3,
									speed: 1,
									stability: 0,
									meleeDamage: null,
									rangedDamage: {
										tier1: 2,
										tier2: 2,
										tier3: 2
									},
									meleeDistance: 0,
									rangedDistance: 7,
									disengage: 1,
									features: [
										{
											id: 'kit-rapid-fire-signature',
											name: 'Два постріли',
											description: 'Коли ви випускаєте дві стріли підряд, обидві потрапляють у ціль.',
											type: 'Здібність',
											data: {
												ability: {
													id: 'kit-rapid-fire-signature',
													name: 'Two Shot',
													description: 'Коли ви випускаєте дві стріли підряд, обидві потрапляють у ціль.',
													type: {
														usage: 'Основна дія',
														free: false,
														trigger: '',
														time: '',
														qualifiers: [],
														freeStrike: false
													},
													keywords: [
														'Дальній',
														'Удар',
														'Зброя'
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
													target: 'Дві істоти або предмети',
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
																tier1: '2 пошкодження',
																tier2: '4 пошкодження',
																tier3: '6 пошкодження'
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
										}
									]
								}
							]
						}
					},
					{
						id: 'tactician-1-5',
						name: 'Мітка',
						description: 'Mark, Mark: Trigger',
						type: 'Набір особливостей',
						data: {
							features: [
								{
									id: 'tactician-1-5a',
									name: 'Мітка',
									description: 'Ви привертаєте увагу союзників до конкретного ворога — з руйнівним ефектом.',
									type: 'Здібність',
									data: {
										ability: {
											id: 'tactician-1-5a',
											name: 'Мітка',
											description: 'Ви привертаєте увагу союзників до конкретного ворога — з руйнівним ефектом.',
											type: {
												usage: 'Маневр',
												free: false,
												trigger: '',
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
													text: '\nЦіль відмічена вами до кінця зустрічі, доки ви не опинитеся в стані, близькому до смерті, або доки ви не використаєте цю здатність знову. Ви можете добровільно зняти свою мітку з істоти (дія не потрібна), і якщо інший тактик відмітить істоту, ваша мітка на цій істоті зникає. Коли істота з вашою міткою зменшується до 0 Витривалості, ви можете використати безкоштовну спрацьовану дію, щоб відмітити нову ціль у межах відстані.\n\nСпочатку ви можете відмітити лише одну істоту за допомогою цієї здатності, хоча інші здібності тактика дозволяють відмічати додаткові цілі одночасно.\n\nПоки істота з вашою міткою перебуває в межах вашої лінії дії, ви та союзники в межах цієї лінії отримують перевагу на кидках сили проти цієї істоти.'
												},
												{
													type: 'Пакет',
													tag: 'mark'
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
									id: 'tactician-1-5b',
									name: 'Мітка: Тригер',
									description: '',
									type: 'Здібність',
									data: {
										ability: {
											id: 'tactician-1-5b',
											name: 'Мітка: Тригер',
											description: '',
											type: {
												usage: 'Тригерна дія',
												free: true,
												trigger: 'You or any ally uses an ability to deal rolled damage to a creature marked by you',
												time: '',
												qualifiers: [],
												freeStrike: false
											},
											keywords: [],
											distance: [
												{
													type: 'Особливе',
													value: 0,
													value2: 0,
													within: 0,
													special: 'Особливий',
													qualifier: ''
												}
											],
											target: 'Особливий',
											cost: 1,
											repeatable: false,
											minLevel: 1,
											sections: [
												{
													type: 'Текст',
													text: '\nВи отримуєте один із наступних ефектів:\n\n* Здатність завдає додаткової шкоди, рівної двом вашим очкам Розуму.\n* Істота, що завдала пошкодження, може витратити Відновлення.\n* Істота, що завдала пошкодження, може зміститися на кількість клітин, рівну вашому показнику Розуму.\n* Якщо ви завдаєте шкоди істоті з вашою міткою ближньою здібністю, ця істота піддається провокації від вас до кінця її наступного ходу.\n\nВи не можете отримати більше одного ефекту від одного й того ж тригера.'
												},
												{
													type: 'Пакет',
													tag: 'mark'
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
						id: 'tactician-1-6',
						name: '«Ударяй зараз!»',
						description: 'Ворог залишив вразливе місце. Ви вказуєте на це союзникові!',
						type: 'Здібність',
						data: {
							ability: {
								id: 'tactician-1-6',
								name: '«Ударяй зараз!»',
								description: 'Ворог залишив вразливе місце. Ви вказуєте на це союзникові!',
								type: {
									usage: 'Основна дія',
									free: false,
									trigger: '',
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
								target: 'Один союзник',
								cost: 0,
								repeatable: false,
								minLevel: 1,
								sections: [
									{
										type: 'Текст',
										text: 'Ціль може використати сигнатурну здатність як безкоштовну спрацьовану дію.'
									},
									{
										type: 'field',
										name: 'Spend',
										value: 5,
										repeatable: false,
										effect: 'Ви обираєте двох союзників замість одного.'
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
						id: 'tactician-1-7',
						name: 'Ability',
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
								'tactician-ability-2'
							]
						}
					},
					{
						id: 'tactician-1-8',
						name: 'Ability',
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
								'tactician-ability-7'
							]
						}
					}
				]
			},
			{
				level: 2,
				features: [
					{
						id: 'tactician-2-1',
						name: 'Перевага: Дослідження/Міжособисте/Інтриги',
						description: '',
						type: 'Перевага',
						data: {
							lists: [
								'Дослідження',
								'Міжособистісні',
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
						id: 'tactician-3-1',
						name: 'Поза позицією',
						description: 'Ще до початку битви ваші вороги важко встигають за вашими тактиками. На початку зустрічі ви можете використати безкоштовну спрацьовану дію, щоб застосувати вашу здібність «Відмітка» до одного ворога, до якого у вас є лінія впливу, навіть якщо ви здивовані. Потім ви можете підсунути відмічену ціль на відстань до 3 клітин, ігноруючи стабільність. Ціль не можна перемістити таким чином, щоб завдати їй шкоди (наприклад через обрив), залишити її в стані, близькому до смерті, або спричинити їй отримання стану чи іншого негативного ефекту.',
						type: 'Текст',
						data: null
					},
					{
						id: 'tactician-3-2',
						name: 'Ability',
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
						id: 'tactician-4-1a',
						name: 'Сила',
						description: '',
						type: 'Бонус характеристики',
						data: {
							characteristic: 'Might',
							value: 1
						}
					},
					{
						id: 'tactician-4-1b',
						name: 'Розум',
						description: '',
						type: 'Бонус характеристики',
						data: {
							characteristic: 'Reason',
							value: 1
						}
					},
					{
						id: 'tactician-4-2',
						name: 'Зосередься на їхній слабкості',
						description: '',
						type: 'Отримання героїчного ресурсу',
						data: {
							tag: 'deal-damage 2',
							trigger: 'The first time each round that you or an ally damages a creature you have marked',
							value: '2',
							replacesTags: [
								'deal-damage'
							]
						}
					},
					{
						id: 'tactician-4-3',
						name: 'Удосконалений польовий арсенал',
						description: 'Ваша майстерність у користуванні зброєю зросла. Коли ви використовуєте сигнатурну здатність з одного з екіпірованих наборів або робите безкоштовний удар зброєю з такого набору, ви отримуєте перевагу.',
						type: 'Текст',
						data: null
					},
					{
						id: 'tactician-4-4',
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
						id: 'tactician-4-5',
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
			},
			{
				level: 5,
				features: [
					{
						id: 'tactician-5-1',
						name: 'Ability',
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
						id: 'tactician-6-1',
						name: 'Майстер зброї',
						description: 'Ваша майстерність зі зброєю досягла справжнього вищого рівня. Коли ви використовуєте сигнатурну здатність з одного з екіпірованих наборів або робите безкоштовний удар зброєю з такого набору, ви можете скасувати бан на кидку сили або зменшити подвійний бан до бану.',
						type: 'Текст',
						data: null
					},
					{
						id: 'tactician-6-2',
						name: 'Exploration / Interpersonal / Intrigue Perk',
						description: '',
						type: 'Перевага',
						data: {
							lists: [
								'Дослідження',
								'Міжособистісні',
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
						id: 'tactician-7-1a',
						name: 'Might',
						description: '',
						type: 'Бонус характеристики',
						data: {
							characteristic: 'Might',
							value: 1
						}
					},
					{
						id: 'tactician-7-1b',
						name: 'Ловкість',
						description: '',
						type: 'Бонус характеристики',
						data: {
							characteristic: 'Ловкість',
							value: 1
						}
					},
					{
						id: 'tactician-7-1c',
						name: 'Reason',
						description: '',
						type: 'Бонус характеристики',
						data: {
							characteristic: 'Reason',
							value: 1
						}
					},
					{
						id: 'tactician-7-1d',
						name: 'Intuition',
						description: '',
						type: 'Бонус характеристики',
						data: {
							characteristic: 'Intuition',
							value: 1
						}
					},
					{
						id: 'tactician-7-1e',
						name: 'Presence',
						description: '',
						type: 'Бонус характеристики',
						data: {
							characteristic: 'Presence',
							value: 1
						}
					},
					{
						id: 'tactician-7-2',
						name: 'Heightened Focus',
						description: '',
						type: 'Отримання героїчного ресурсу',
						data: {
							tag: 'start 2',
							trigger: 'Start of your turn',
							value: '3',
							replacesTags: [
								'start'
							]
						}
					},
					{
						id: 'tactician-7-3',
						name: 'Seize the Initiative',
						description: 'Якщо ви не здивовані на початку бою, ваша сторона ходить першою. Якщо у ворога є здібність, яка дозволяє їхній стороні ходити першою, ви кидаєте як звичайно, щоб визначити, хто ходить першим.',
						type: 'Текст',
						data: null
					},
					{
						id: 'tactician-7-4',
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
			},
			{
				level: 8,
				features: [
					{
						id: 'tactician-8-1',
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
						id: 'tactician-8-2',
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
						id: 'tactician-9-1',
						name: 'Вища майстерність зброї',
						description: 'Your expertise with weapons has grown to true mastery. Whenever you use a signature ability from one of your equipped kits or make a free strike using a weapon from one of your equipped kits, you automatically obtain a tier 3 outcome on the power roll. You can still roll to determine if you score a critical hit.',
						type: 'Текст',
						data: null
					}
				]
			},
			{
				level: 10,
				features: [
					{
						id: 'tactician-10-1a',
						name: 'Might',
						description: '',
						type: 'Бонус характеристики',
						data: {
							characteristic: 'Might',
							value: 1
						}
					},
					{
						id: 'tactician-10-1b',
						name: 'Reason',
						description: '',
						type: 'Бонус характеристики',
						data: {
							characteristic: 'Reason',
							value: 1
						}
					},
					{
						id: 'tactician-10-2',
						name: 'Команда',
						description: '\nКоли ви або будь-який союзник використовує здібність, щоб завдати кинутої шкоди істоті, відміченій вами, ви можете витратити 1 команду як безкоштовну спрацьовану дію, щоб підвищити результат кидка сили для тієї цілі на один рівень. Коли ворог, відмічений вами, робить кидок здібності, ви можете витратити 1 команду як безкоштовну спрацьовану дію, щоб зменшити результат кидка сили на один рівень.\n\nКоманда зберігається, доки ви не витратите її.',
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
					}
				]
			}
		],
		abilities: [
			{
				id: 'tactician-ability-1',
				name: 'Бойовий клич',
				description: 'Ви викрикуєте фразу, що надихає вашу команду.',
				type: {
					usage: 'Маневр',
					free: false,
					trigger: '',
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
				target: 'Троє союзників',
				cost: 3,
				repeatable: false,
				minLevel: 1,
				sections: [
					{
						type: 'roll',
						roll: {
							characteristic: [
								'Reason'
							],
							bonus: 0,
							tier1: 'Кожна ціль отримує 1 сплеск.',
							tier2: 'Кожна ціль отримує 2 сплески.',
							tier3: 'Кожна ціль отримує 3 сплески.'
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
				id: 'tactician-ability-2',
				name: 'Оглушливий удар',
				description: 'Ваш точний удар залишає ворога, що важко відповідає.',
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
						value: 5,
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
							tier1: '3 + С пошкодження; С < [слабкий], оглушений (рятівний кидок закінчує дію)',
							tier2: '5 + С пошкодження; С < [середній], оглушений (рятівний кидок закінчує дію)',
							tier3: '8 + С пошкодження; С < [сильний], оглушений (рятівний кидок закінчує дію)'
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
				id: 'tactician-ability-3',
				name: 'Натхненний удар',
				description: 'Ваш напад додає союзникові надії.',
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
						value: 5,
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
							tier1: '3 + С пошкодження; ви або один союзник у межах 10 клітин від вас може витратити Відновлення',
							tier2: '5 + С пошкодження; ви або один союзник у межах 10 клітин від вас може витратити Відновлення',
							tier3: '8 + С пошкодження; ви і один союзник у межах 10 клітин від вас можуть витратити Відновлення, і кожен з вас отримує перевагу на наступний кидок здібності під час зустрічі'
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
				id: 'tactician-ability-4',
				name: 'Взвод! Вперед!',
				description: 'За вашим наказом ви та ваші союзники відтіснюють ворожу лінію.',
				type: {
					usage: 'Маневр',
					free: false,
					trigger: '',
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
				target: 'Себе і двох союзників',
				cost: 3,
				repeatable: false,
				minLevel: 1,
				sections: [
					{
						type: 'Текст',
						text: 'Кожна ціль може переміститися на відстань, що дорівнює її швидкості.'
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
				id: 'tactician-ability-5',
				name: 'Молот і наковальня',
				description: '«Не сперечаймося, хто молот, а хто ковадло!"',
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
						value: 5,
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
							tier1: '5 + С пошкодження; один союзник у межах 10 клітин від вас може використати підписну ударну здібність проти цілі як безкоштовну спрацьовану дію',
							tier2: '9 + С пошкодження; один союзник у межах 10 клітин від вас може використати підписну ударну здібність, що отримує перевагу проти цілі, як безкоштовну спрацьовану дію',
							tier3: '12 + С пошкодження; двоє союзників у межах 10 клітин від вас можуть кожен використати підписну ударну здібність, що отримує перевагу проти цілі, як безкоштовну спрацьовану дію'
						}
					},
					{
						type: 'Текст',
						text: 'Якщо ціль знижена до 0 Витривалості до того, як один або обидва обрані союзники встигли зробити свій удар, союзник або союзники можуть обрати іншу ціль.'
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
				id: 'tactician-ability-6',
				name: 'Гра розуму',
				description: 'Your attack demoralizes your foe. Your allies begin to think you can win.',
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
						value: 5,
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
						type: 'Текст',
						text: 'Ви відмічаєте ціль.'
					},
					{
						type: 'roll',
						roll: {
							characteristic: [
								'Might'
							],
							bonus: 0,
							tier1: '4 + С пошкодження; Р < [слабкий], ослаблений (рятівний кидок закінчує дію)',
							tier2: '6 + С пошкодження; Р < [середній], ослаблений (рятівний кидок закінчує дію)',
							tier3: '10 + С пошкодження; Р < [сильний], ослаблений (рятівний кидок закінчує дію)'
						}
					},
					{
						type: 'Текст',
						text: 'Перш ніж почнеться ваш наступний хід, при першому випадку в ході, коли будь-який союзник завдає шкоди будь-якій цілі, відміченій вами, цей союзник може витратити Відновлення.'
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
				id: 'tactician-ability-7',
				name: 'Зараз!',
				description: 'Союзники чекають вашого наказу — потім завдають смертоносного удару!',
				type: {
					usage: 'Маневр',
					free: false,
					trigger: '',
					time: '',
					qualifiers: [],
					freeStrike: false
				},
				keywords: [
					'Дальній',
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
				target: 'Three allies',
				cost: 5,
				repeatable: false,
				minLevel: 1,
				sections: [
					{
						type: 'Текст',
						text: 'Кожна ціль може виконати безкоштовний удар.'
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
				id: 'tactician-ability-8',
				name: 'Ось на що ми готувалися',
				description: 'Усі ті вправи з координації, які ви їм наказували, нарешті окупаються.',
				type: {
					usage: 'Маневр',
					free: false,
					trigger: '',
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
				target: 'Двоє союзників',
				cost: 5,
				repeatable: false,
				minLevel: 1,
				sections: [
					{
						type: 'Текст',
						text: 'Кожна ціль, яка ще не діяла в цьому раунді бою, може виконати свій хід у будь-якому порядку негайно після вашого.'
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
				id: 'tactician-ability-9',
				name: 'Фронтальний штурм',
				description: 'Мета штурму — зламати їхню мораль і змусити до відступу.',
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
						text: 'До кінця зустрічі або поки ви не опинитеся в стані, близькому до смерті, вперше в ході, коли ви або будь-який союзник завдає шкоди цілі, відміченій вами, істота, що завдала шкоди, може штовхнути ціль до 2 клітин, а потім зміститися до 2 клітин. Крім того, будь-який союзник, який використовує основну дію Charge, щоб націлитися на істоту, відмічену вами, може замість безкоштовного удару в ближньому бою використати сигнатурну або героїчну здатність удару в ближньому бою.'
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
				id: 'tactician-ability-10',
				name: 'Вдарте їх сильно!',
				description: '',
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
						text: 'До кінця зустрічі або поки ви не опинитеся в стані, близькому до смерті, коли ви або будь-який союзник завдає шкоди цілі, відміченій вами, ця істота отримує 2 сплески, які може використати негайно.'
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
				id: 'tactician-ability-11',
				name: 'Розгром',
				description: 'Хід битви починає змінюватися.',
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
						text: 'До кінця зустрічі або поки ви не опинитеся в стані, близькому до смерті, коли ви або будь-який союзник завдає шкоди цілі, відміченій вами, яка має Р < [середній], ціль перелякана істоти, що завдала шкоди (рятунок знімає).'
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
				id: 'tactician-ability-12',
				name: 'Тримайся та зосередься!',
				description: 'Ми можемо це зробити! Зберігайте віру і тримайтеся міцно!',
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
						text: 'До кінця зустрічі або поки ви не опинитеся в стані, близькому до смерті, коли ви або будь-який союзник завдає шкоди цілі, відміченій вами, істота, що завдала шкоди, може витратити Відновлення.'
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
				id: 'tactician-ability-13',
				name: 'Взвод! Перевірка спорядження!',
				description: 'You distract a foe while your allies secure their defensive gear.',
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
						text: 'Ви та кожен союзник, що прилягає до цілі, отримуєте по 10 тимчасової Витривалості.'
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
				id: 'tactician-ability-14',
				name: 'Взвод! Пам’ятайте тренування!',
				description: 'You remind your allies how to best use their gear.',
				type: {
					usage: 'Основна дія',
					free: false,
					trigger: '',
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
				target: 'Себе і двох союзників',
				cost: 9,
				repeatable: false,
				minLevel: 1,
				sections: [
					{
						type: 'Текст',
						text: 'Кожна ціль отримує 1 сплеск і може використати сигнатурну здатність, яка має подвійний ефект.'
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
				id: 'tactician-ability-15',
				name: 'Переможімо сьогодні!',
				description: 'You inspire your allies to recover and gather their strength.',
				type: {
					usage: 'Основна дія',
					free: false,
					trigger: '',
					time: '',
					qualifiers: [],
					freeStrike: false
				},
				keywords: [
					'Area'
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
				cost: 9,
				repeatable: false,
				minLevel: 1,
				sections: [
					{
						type: 'Текст',
						text: 'Кожна ціль отримує 2 сплески. Крім того, вони можуть витратити Відновлення, зняти будь-які умови або ефекти з себе та підвестися, якщо вони лежать.'
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
				id: 'tactician-ability-16',
				name: 'У тебе ще щось лишилось',
				description: 'You push an ally to use a heroic ability sooner than they otherwise would.',
				type: {
					usage: 'Основна дія',
					free: false,
					trigger: '',
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
				target: 'Один союзник',
				cost: 9,
				repeatable: false,
				minLevel: 1,
				sections: [
					{
						type: 'Текст',
						text: 'Ціль використовує героїчну здатність з ключовим словом Strike як безкоштовну спрацьовану дію і завдає додаткової шкоди цією здатністю, рівної вашому показнику Розуму. Вартість Героїчного ресурсу цієї здібності зменшена на 1 + ваш показник Розуму (мінімальна вартість 0).'
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
				id: 'tactician-ability-17',
				name: 'Йди зараз і швидко рухайся',
				description: 'You direct an attack to strike true.',
				type: {
					usage: 'Основна дія',
					free: false,
					trigger: '',
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
				target: 'На себе або одного союзника',
				cost: 11,
				repeatable: false,
				minLevel: 1,
				sections: [
					{
						type: 'Текст',
						text: 'Ціль отримує 2 сплески і може використати сигнатурну або героїчну здатність як безкоштовну спрацьовану дію. У цієї здібності подвійний ефект на кидку сили, вона ігнорує імунітет до пошкоджень і збільшує потужність будь-яких ефектів потужності на 1.'
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
				id: 'tactician-ability-18',
				name: 'Дозаверши їх!',
				description: 'You point out an opening to your ally so they can land a killing blow.',
				type: {
					usage: 'Тригерна дія',
					free: true,
					trigger: 'The target is not a leader or solo creature, and becomes winded.',
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
				cost: 11,
				repeatable: false,
				minLevel: 1,
				sections: [
					{
						type: 'Текст',
						text: 'Ціль убита. Крім того, істота, яка спричинила знесилення цілі, може витратити Відновлення.'
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
				id: 'tactician-ability-19',
				name: 'Відкрий шлюзи',
				description: 'You direct your squad to strike in unison and with devastating effect.',
				type: {
					usage: 'Основна дія',
					free: false,
					trigger: '',
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
				target: 'Three allies',
				cost: 11,
				repeatable: false,
				minLevel: 1,
				sections: [
					{
						type: 'Текст',
						text: 'Кожна ціль отримує 1 сплеск і може використати сигнатурну здатність як безкоштовну спрацьовану дію. Та здібність отримує перевагу на кидку сили і збільшує потужність будь-яких ефектів потужності на 1.'
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
				id: 'tactician-ability-20',
				name: 'Я відкрию, ти закриєш',
				description: 'You create an opening for an ally.',
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
						value: 5,
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
						text: 'One ally within 10 squares of you can use a heroic ability against the target as a безкоштовна тригерна дія without spending any of their Heroic Resource, as long as they have enough Heroic Resource to pay for the ability. If the target is reduced to 0 Stamina before the chosen ally has used their ability, the ally can pick a different target.'
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
				id: 'tactician-sub-1',
				name: 'Повстанець',
				description: 'Doing your duty, playing fair, and dying honorably in battle is your opponent’s job. You’ll do whatever it takes to keep your allies alive.',
				featuresByLevel: [
					{
						level: 1,
						features: [
							{
								id: 'tactician-sub-1-1-1',
								name: 'Навичка інтриг',
								description: '',
								type: 'Вибір навички',
								data: {
									options: [],
									listOptions: [
										'Інтриги'
									],
									count: 1,
									selected: []
								}
							},
							{
								id: 'tactician-sub-1-1-2',
								name: 'Таємні операції',
								description: '\nWhile in your presence or working according to your plans, each of your allies gains an edge on tests using any skill from the intrigue skill group. Additionally, you can use the Lead skill to assist another creature with any test made using a skill from the intrigue group.\n\nAt the Director’s discretion, you and your allies can use skills from the intrigue skill group to attempt research or reconnaissance during a negotiation instead of outside of a negotiation.',
								type: 'Текст',
								data: null
							},
							{
								id: 'tactician-sub-1-1-3',
								name: 'Просунута тактика',
								description: 'Your leadership aids an ally.',
								type: 'Здібність',
								data: {
									ability: {
										id: 'tactician-sub-1-1-3',
										name: 'Advanced Tactics',
										description: 'Your leadership aids an ally.',
										type: {
											usage: 'Тригерна дія',
											free: false,
											trigger: 'The target deals damage to another creature.',
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
										target: 'Один союзник',
										cost: 0,
										repeatable: false,
										minLevel: 1,
										sections: [
											{
												type: 'Текст',
												text: 'The target gains 2 surges, which they can use on the triggering damage.'
											},
											{
												type: 'field',
												name: 'Spend',
												value: 1,
												repeatable: false,
												effect: 'If the damage has any potency effect associated with it, the potency is increased by 1.'
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
								id: 'tactician-sub-1-2-1',
								name: 'Тактика проникнення',
								description: 'You have trained your squad to work together, stay silent, and wait for the opportune time to strike. Whenever you or any ally within 10 squares of you becomes hidden, that creature gains 1 surge.',
								type: 'Текст',
								data: null
							},
							{
								id: 'tactician-sub-1-2-2',
								name: 'Choice',
								description: '',
								type: 'Вибір',
								data: {
									options: [
										{
											feature: {
												id: 'tactician-sub-1-2-2a',
												name: 'Туман війни',
												description: 'Your unorthodox strategy causes enemies to lash out in fear, heedless of who they might be attacking.',
												type: 'Здібність',
												data: {
													ability: {
														id: 'tactician-sub-1-2-2a',
														name: 'Fog of War',
														description: 'Your unorthodox strategy causes enemies to lash out in fear, heedless of who they might be attacking.',
														type: {
															usage: 'Маневр',
															free: false,
															trigger: '',
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
														target: 'Дві істоти',
														cost: 5,
														repeatable: false,
														minLevel: 1,
														sections: [
															{
																type: 'Текст',
																text: 'Each target is marked by you, and must immediately make a free strike against a creature of your choice within 5 squares of them.'
															},
															{
																type: 'field',
																name: 'Mark Benefit',
																value: 0,
																repeatable: false,
																effect: 'Until the end of the encounter, whenever you or any ally makes a strike against a creature marked by you, you can spend 2 focus to force that target to make a free strike against a creature of your choice within 5 squares of them.'
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
												id: 'tactician-sub-1-2-2b',
												name: 'Спробуй мене замість',
												description: '“Try picking on someone my size.”',
												type: 'Здібність',
												data: {
													ability: {
														id: 'tactician-sub-1-2-2b',
														name: 'Try Me Instead',
														description: '“Try picking on someone my size.”',
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
																type: 'Себе',
																value: 0,
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
																type: 'Текст',
																text: 'You shift up to your speed directly toward an ally, ending adjacent to them, then swapping locations with that ally as long as you can fit into each other’s spaces. The ally can spend a Recovery, and you can make the following weapon strike with a distance of melee 1 against a creature.'
															},
															{
																type: 'roll',
																roll: {
																	characteristic: [
																		'Reason'
																	],
																	bonus: 0,
																	tier1: '2 + Р шкоди; Р < [слабкий], зляканий (рят. кидок закінчує)',
																	tier2: '3 + Р шкоди; Р < [середній], зляканий (рят. кидок закінчує)',
																	tier3: '4 + Р шкоди; Р < [сильний], зляканий (рят. кидок закінчує)'
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
						features: []
					},
					{
						level: 4,
						features: []
					},
					{
						level: 5,
						features: [
							{
								id: 'tactician-sub-1-5-1',
								name: 'Відволіканий',
								description: 'You have mastered the ability to distract your foes, allowing you and your allies to take advantage of their gaps in attention. Whenever you or any ally attempts to hide, any creature marked by you doesn’t count as an observer. Additionally, you and your allies can use other allies as cover for the purpose of hiding.',
								type: 'Текст',
								data: null
							},
							{
								id: 'tactician-sub-1-5-2',
								name: 'Не лишай слідів',
								description: 'You and any ally within 10 squares of you can move at full speed while sneaking. Additionally, enemies within 10 squares of you take a bane on tests made to search for you or your allies while any of you are hidden.',
								type: 'Текст',
								data: null
							}
						]
					},
					{
						level: 6,
						features: [
							{
								id: 'tactician-sub-1-6-1',
								name: 'Choice',
								description: '',
								type: 'Вибір',
								data: {
									options: [
										{
											feature: {
												id: 'tactician-sub-1-6-1a',
												name: 'Скоординоване виконання',
												description: 'You direct your ally to make a killing blow.',
												type: 'Здібність',
												data: {
													ability: {
														id: 'tactician-sub-1-6-1a',
														name: 'Coordinated Execution',
														description: 'You direct your ally to make a killing blow.',
														type: {
															usage: 'Тригерна дія',
															free: true,
															trigger: 'The target uses an ability to deal rolled damage to a creature while hidden.',
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
														target: 'Один союзник',
														cost: 9,
														repeatable: false,
														minLevel: 1,
														sections: [
															{
																type: 'Текст',
																text: 'If the target of the triggering ability is not a leader or solo creature, they are reduced to 0 Stamina. If the target of the triggering ability is a minion, the entire squad is killed. If the target of the triggering ability is a leader or solo creature, the triggering ability’s power roll automatically obtains a tier 3 outcome.'
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
												id: 'tactician-sub-1-6-1b',
												name: 'Паніка в їх лавах',
												description: 'You confuse your foes, causing them to turn on each other.',
												type: 'Здібність',
												data: {
													ability: {
														id: 'tactician-sub-1-6-1b',
														name: 'Panic in Their Lines',
														description: 'You confuse your foes, causing them to turn on each other.',
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
																value: 5,
																value2: 0,
																within: 0,
																special: '',
																qualifier: ''
															}
														],
														target: 'Дві істоти',
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
																	tier1: '6 + С пошкодження; зсунути 1',
																	tier2: '9 + С пошкодження; зсунути 3',
																	tier3: '13 + С пошкодження; зсунути 5'
																}
															},
															{
																type: 'Текст',
																text: 'If a target is force moved into another creature, they must make a free strike against that creature.'
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
								id: 'tactician-sub-1-7-1',
								name: 'Асиметрична війна',
								description: 'You have advanced your skills in subterfuge, now directing full battlefield strategy and logistics. During a montage test or negotiation, you can obtain one automatic success on a test made using a skill from the intrigue skill group. Additionally, you can use skills from the intrigue skill group to conceal large groups of people, such as escaping civilians and groups of guerilla warriors.',
								type: 'Текст',
								data: null
							}
						]
					},
					{
						level: 8,
						features: [
							{
								id: 'tactician-sub-1-8-1',
								name: 'Намір і засідка',
								description: 'When you or any ally makes a strike against a creature marked by you, you can spend 2 focus to let the character making the strike shift up to a number of squares equal to your Reason score and use the Hide маневр as a безкоштовний маневр once during the shift. The creature can shift before or after the strike is resolved.',
								type: 'Вміст пакета',
								data: {
									tag: 'mark'
								}
							}
						]
					},
					{
						level: 9,
						features: [
							{
								id: 'tactician-sub-1-9-1',
								name: 'Choice',
								description: '',
								type: 'Вибір',
								data: {
									options: [
										{
											feature: {
												id: 'tactician-sub-1-9-1a',
												name: 'Взвод! Удар і біг',
												description: 'I had to pry this secret from the shadow colleges.',
												type: 'Здібність',
												data: {
													ability: {
														id: 'tactician-sub-1-9-1a',
														name: 'Squad! Hit and Run!',
														description: 'I had to pry this secret from the shadow colleges.',
														type: {
															usage: 'Основна дія',
															free: false,
															trigger: '',
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
														target: 'Себе і двох союзників',
														cost: 11,
														repeatable: false,
														minLevel: 1,
														sections: [
															{
																type: 'Текст',
																text: 'Each target gains 2 surges, and can use a безкоштовна тригерна дія to use a signature ability that gains an edge. After resolving their ability, each target can shift up to 2 squares and become hidden even if they have no cover or concealment, or if they are observed.'
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
												id: 'tactician-sub-1-9-1b',
												name: 'Їхня відсутність фокусу — їхня загибель',
												description: 'You trick your enemies into attacking each other and leave them confused by the aftermath.',
												type: 'Здібність',
												data: {
													ability: {
														id: 'tactician-sub-1-9-1b',
														name: 'Their Lack of Focus Is Their Undoing',
														description: 'You trick your enemies into attacking each other and leave them confused by the aftermath.',
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
														target: 'Три вороги',
														cost: 11,
														repeatable: false,
														minLevel: 1,
														sections: [
															{
																type: 'Текст',
																text: 'Each target uses a signature ability against one or more targets of your choosing, with each ability automatically obtaining a tier 3 outcome on the power roll. After resolving the targets’ abilities, you make a power roll against each original target.'
															},
															{
																type: 'roll',
																roll: {
																	characteristic: [
																		'Might'
																	],
																	bonus: 0,
																	tier1: 'Р < [слабкий], оглушений (рятівний кидок закінчує дію)',
																	tier2: 'Р < [середній], оглушений (рятівний кидок закінчує дію)',
																	tier3: 'Р < [сильний], оглушений (рятівний кидок закінчує дію)'
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
				id: 'tactician-sub-2',
				name: 'Майстер розуму',
				description: 'You have an encyclopedic knowledge of warfare, viewing the battlefield as a game board and seeking victory by thinking steps ahead of your opponents.',
				featuresByLevel: [
					{
						level: 1,
						features: [
							{
								id: 'tactician-sub-2-1-1',
								name: 'Навичка знань',
								description: '',
								type: 'Вибір навички',
								data: {
									options: [],
									listOptions: [
										'Знання'
									],
									count: 1,
									selected: []
								}
							},
							{
								id: 'tactician-sub-2-1-2',
								name: 'Вивчений командир',
								description: '\nYour encyclopedic knowledge of the history of battle lets you apply that knowledge to current challenges. While you are present, each hero with you treats the Discover Lore project related to a war or battle as one category cheaper. This makes projects seeking common lore free, but such projects still require a respite activity to complete.\n\nAdditionally, if you have 24 hours or more before a combat encounter or negotiation, and you have one or more clues or rumors regarding the encounter or negotiation, you can make a Reason test as a respite activity.\n\nThe following test outcomes apply to a combat encounter:\n\n| Roll    | Effect                                                                                                           |\n|:--------|:-----------------------------------------------------------------------------------------------------------------|\n| ≤ 11    | The Director tells you the number of creatures in the encounter.                                                 |\n| 12 - 16 | The Director tells you the number and level of the creatures in the encounter.                                   |\n| ≥ 17    | The Director tells you the tier 2 outcome information, and when the encounter begins, all enemies are surprised. |\n\nThe following test outcomes apply to a negotiation:\n\n| Roll    | Effect                                                                                                                                                       |\n|:--------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------|\n| ≤ 11    | The Director gives you three motivations, one of which belongs to an NPC in the negotiation.                                                                 |\n| 12 - 16 | The Director gives you one motivation for an NPC in the negotiation.                                                                                         |\n| ≥ 17    | The Director tells you the tier 2 outcome information, and you and each of your allies gains an edge on tests made to influence NPCs during the negotiation. |\n\nYou can make this test only once for any encounter or negotiation.',
								type: 'Текст',
								data: null
							},
							{
								id: 'tactician-sub-2-1-3',
								name: 'Нагляд',
								description: 'Under your direction, an ally waits for just the right moment to strike.',
								type: 'Здібність',
								data: {
									ability: {
										id: 'tactician-sub-2-1-3',
										name: 'Overwatch',
										description: 'Under your direction, an ally waits for just the right moment to strike.',
										type: {
											usage: 'Тригерна дія',
											free: false,
											trigger: 'The target moves.',
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
												text: 'At any time during the target’s movement, one ally can make a free strike against them.'
											},
											{
												type: 'field',
												name: 'Spend',
												value: 1,
												repeatable: false,
												effect: 'If the target has Р < [середній], they are slowed (EoT).'
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
								id: 'tactician-sub-2-2-1',
								name: 'Підбурений',
								description: 'You have learned to leverage your marked foes’ psychology and goad them into acting before they’re tactically ready.',
								type: 'Здібність',
								data: {
									ability: {
										id: 'tactician-sub-2-2-1',
										name: 'Goaded',
										description: 'You have learned to leverage your marked foes’ psychology and goad them into acting before they’re tactically ready.',
										type: {
											usage: 'Тригерна дія',
											free: true,
											trigger: 'A creature marked by you uses a strike that targets you or any ally within your line of effect.',
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
												text: 'You can change one target of the strike to you or another ally within your line of effect. The new target must be within distance of the ability and within line of effect of the creature using it.'
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
								id: 'tactician-sub-2-2-2',
								name: 'Choice',
								description: '',
								type: 'Вибір',
								data: {
									options: [
										{
											feature: {
												id: 'tactician-sub-2-2-2a',
												name: 'Я прикрию тебе',
												description: 'Your enemy will think twice about attacking your friend.',
												type: 'Здібність',
												data: {
													ability: {
														id: 'tactician-sub-2-2-2a',
														name: 'I\'ve Got Your Back',
														description: 'Your enemy will think twice about attacking your friend.',
														type: {
															usage: 'Основна дія',
															free: false,
															trigger: '',
															time: '',
															qualifiers: [],
															freeStrike: false
														},
														keywords: [
															'Дальній',
															'Удар',
															'Зброя'
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
														target: 'Одна істота',
														cost: 5,
														repeatable: false,
														minLevel: 1,
														sections: [
															{
																type: 'roll',
																roll: {
																	characteristic: [
																		'Reason'
																	],
																	bonus: 0,
																	tier1: '5 + Р пошкодження; провокований (до кінця свого ходу)',
																	tier2: '9 + Р пошкодження; провокований (до кінця свого ходу)',
																	tier3: '12 + Р пошкодження; провокований (до кінця свого ходу)'
																}
															},
															{
																type: 'Текст',
																text: 'One ally adjacent to the target can spend a Recovery.'
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
												id: 'tactician-sub-2-2-2b',
												name: 'Мішені нагоди',
												description: 'You point out easy targets to your friends, allowing them to include more enemies in their attacks.',
												type: 'Здібність',
												data: {
													ability: {
														id: 'tactician-sub-2-2-2b',
														name: 'Targets of Opportunity',
														description: 'You point out easy targets to your friends, allowing them to include more enemies in their attacks.',
														type: {
															usage: 'Маневр',
															free: false,
															trigger: '',
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
														target: 'Дві істоти',
														cost: 5,
														repeatable: false,
														minLevel: 1,
														sections: [
															{
																type: 'Текст',
																text: 'Each target is marked by you, and you gain two surges.'
															},
															{
																type: 'field',
																name: 'Mark Benefit',
																value: 0,
																repeatable: false,
																effect: 'Until the end of the encounter, whenever you or any ally makes a strike against a creature marked by you, you can spend 2 focus to add one additional target to the strike.'
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
						features: []
					},
					{
						level: 4,
						features: []
					},
					{
						level: 5,
						features: [
							{
								id: 'tactician-sub-2-5-1',
								name: 'Передбачення',
								description: 'You have learned to be more preemptive on the battlefield, thinking more steps ahead than your opponents. You can target two creatures with your Mark ability.',
								type: 'Вміст пакета',
								data: {
									tag: 'mark'
								}
							},
							{
								id: 'tactician-sub-2-5-2',
								name: 'Я це передбачив',
								description: 'Your expertise in history and lore allows you and your allies to outthink rivals in the present day. You and any ally within 10 squares of you gain an edge on Reason tests.',
								type: 'Текст',
								data: null
							}
						]
					},
					{
						level: 6,
						features: [
							{
								id: 'tactician-sub-2-6-1',
								name: 'Choice',
								description: '',
								type: 'Вибір',
								data: {
									options: [
										{
											feature: {
												id: 'tactician-sub-2-6-1a',
												name: 'Бойовий план',
												description: 'With new understanding of your foes, you create the perfect plan to win the battle.',
												type: 'Здібність',
												data: {
													ability: {
														id: 'tactician-sub-2-6-1a',
														name: 'Battle Plan',
														description: 'With new understanding of your foes, you create the perfect plan to win the battle.',
														type: {
															usage: 'Маневр',
															free: false,
															trigger: '',
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
														target: '3 Істоти',
														cost: 9,
														repeatable: false,
														minLevel: 1,
														sections: [
															{
																type: 'Текст',
																text: 'Each target is marked by you. Immediately and until the end of the encounter, the Director tells you if any creatures marked by you have damage immunity or weakness and the value of that immunity or weakness. Additionally, you and each ally within 3 squares of you gains 2 surges.'
															},
															{
																type: 'field',
																name: 'Mark Benefit',
																value: 0,
																repeatable: false,
																effect: 'Until the end of the encounter, whenever you or any ally makes a strike against a creature marked by you, you can spend 2 focus to make the strike ignore damage immunity and deal extra damage equal to three times your Reason score.'
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
												id: 'tactician-sub-2-6-1b',
												name: 'Пожвався!',
												description: 'You and your allies coordinate to form a new battle line.',
												type: 'Здібність',
												data: {
													ability: {
														id: 'tactician-sub-2-6-1b',
														name: 'Hustle!',
														description: 'You and your allies coordinate to form a new battle line.',
														type: {
															usage: 'Маневр',
															free: false,
															trigger: '',
															time: '',
															qualifiers: [],
															freeStrike: false
														},
														keywords: [
															'Area'
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
														target: 'На себе і кожного союзника в зоні впливу',
														cost: 9,
														repeatable: false,
														minLevel: 1,
														sections: [
															{
																type: 'Текст',
																text: 'You mark two enemies within 10 squares of you. Each target can shift up to their speed. You and each target gain 2 surges.'
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
								id: 'tactician-sub-2-7-1',
								name: 'Грандіозна стратегія',
								description: 'You have grown your skills in strategy, wielding intricate battlefield tactics and plans. During a montage test or negotiation, you can obtain one automatic success on a test made using a skill from the lore skill group. Additionally, when you take a respite, you can make a project roll for a research project in addition to undertaking another respite activity.',
								type: 'Текст',
								data: null
							}
						]
					},
					{
						level: 8,
						features: [
							{
								id: 'tactician-sub-1-8-1',
								name: 'Щипцевий маневр',
								description: 'When you or any ally makes a strike against a creature marked by you, you can spend 2 focus to have the character making the strike shift up to a number of squares equal to your Reason score before the strike is resolved. If you didn’t make the strike, you can make this shift as well. If you did make the strike, one ally within 10 squares of you can make this shift as well.',
								type: 'Вміст пакета',
								data: {
									tag: 'mark'
								}
							}
						]
					},
					{
						level: 9,
						features: [
							{
								id: 'tactician-sub-2-9-1',
								name: 'Choice',
								description: '',
								type: 'Вибір',
								data: {
									options: [
										{
											feature: {
												id: 'tactician-sub-2-9-1a',
												name: 'Закрий сонце!',
												description: 'What makes a good soldier? The ability to fire four shots a minute in any weather.',
												type: 'Здібність',
												data: {
													ability: {
														id: 'tactician-sub-2-9-1a',
														name: 'Blot Out the Sun!',
														description: 'What makes a good soldier? The ability to fire four shots a minute in any weather.',
														type: {
															usage: 'Основна дія',
															free: false,
															trigger: '',
															time: '',
															qualifiers: [],
															freeStrike: false
														},
														keywords: [
															'Area'
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
														cost: 11,
														repeatable: false,
														minLevel: 1,
														sections: [
															{
																type: 'Текст',
																text: 'Each target can make a ranged free strike that gains an edge against any enemy marked by you within distance of their ranged free strike. A target ignores banes and double banes when making this strike.'
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
												id: 'tactician-sub-2-9-1b',
												name: 'Контрстратегія',
												description: 'I’ve identified a way to negate their strengths.',
												type: 'Здібність',
												data: {
													ability: {
														id: 'tactician-sub-2-9-1b',
														name: 'Counterstrategy',
														description: 'I’ve identified a way to negate their strengths.',
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
														cost: 11,
														repeatable: false,
														minLevel: 1,
														sections: [
															{
																type: 'Текст',
																text: 'You gain 6 surges. Until the end of the encounter or until you are dying, whenever the Director spends Malice, choose yourself or one ally within 10 squares. The chosen character gains 2 of their Heroic Resource.'
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
				id: 'tactician-sub-3',
				name: 'Авангард',
				description: 'You have learned the stratagems of ancient heroes, letting you lead from the front lines and seek victory through sheer force of will and personality.',
				featuresByLevel: [
					{
						level: 1,
						features: [
							{
								id: 'tactician-sub-3-1-1',
								name: 'Міжособистісна навичка',
								description: '',
								type: 'Вибір навички',
								data: {
									options: [],
									listOptions: [
										'Міжособистісні'
									],
									count: 1,
									selected: [
										'Залякування'
									]
								}
							},
							{
								id: 'tactician-sub-3-1-2',
								name: 'Командна присутність',
								description: 'Ви пануєте в будь-якій кімнаті, куди заходите. Поки ви присутні під час переговорів, кожен герой поруч із вами вважає свою Славу на 2 вищою, ніж зазвичай. Крім того, кожен герой поруч із вами під час бойової зустрічі має подвійний ефект на тести, зроблені для припинення бою та початку переговорів.',
								type: 'Текст',
								data: null
							},
							{
								id: 'tactician-sub-3-1-3',
								name: 'Парірування',
								description: 'Your quick reflexes cost an enemy the precision they seek.',
								type: 'Здібність',
								data: {
									ability: {
										id: 'tactician-sub-3-1-3',
										name: 'Parry',
										description: 'Your quick reflexes cost an enemy the precision they seek.',
										type: {
											usage: 'Тригерна дія',
											free: false,
											trigger: 'A creature deals damage to the target.',
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
												value: 2,
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
												text: 'You can shift 1 square. If the target is you, or if you end this shift adjacent to the target, the target takes half the damage. If the damage has any potency effect associated with it, the potency is decreased by 1.'
											},
											{
												type: 'field',
												name: 'Spend',
												value: 1,
												repeatable: false,
												effect: 'This ability’s distance becomes Melee 1 + your Reason score, and you can shift up to a number of squares equal to your Reason score instead of 1 square.'
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
								id: 'tactician-sub-3-2-1',
								name: 'Перевага в ближньому бою',
								description: 'After constant drills, you can more accurately anticipate an enemy’s plan and thwart their attempts to move across the battlefield. Whenever you make an opportunity attack, the target’s speed is reduced to 0 until the end of the current turn.',
								type: 'Текст',
								data: null
							},
							{
								id: 'tactician-sub-3-2-1a',
								name: 'Перевага мітки',
								description: 'When a creature marked by you attempts to move or shift within distance of your melee free strike, you can use a безкоштовна тригерна дія and spend 2 focus to make a melee free strike against that creature.',
								type: 'Вміст пакета',
								data: {
									tag: 'mark'
								}
							},
							{
								id: 'tactician-sub-3-2-2',
								name: 'Choice',
								description: '',
								type: 'Вибір',
								data: {
									options: [
										{
											feature: {
												id: 'tactician-sub-3-2-2a',
												name: 'Не помирай під моїм наглядом',
												description: 'You prioritize saving an ally over your own safety.',
												type: 'Здібність',
												data: {
													ability: {
														id: 'tactician-sub-3-2-2a',
														name: 'No Dying on My Watch',
														description: 'You prioritize saving an ally over your own safety.',
														type: {
															usage: 'Тригерна дія',
															free: false,
															trigger: 'The target deals damage to an ally.',
															time: '',
															qualifiers: [],
															freeStrike: false
														},
														keywords: [
															'Дальній',
															'Удар',
															'Зброя'
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
														target: 'Один ворог',
														cost: 5,
														repeatable: false,
														minLevel: 1,
														sections: [
															{
																type: 'Текст',
																text: 'You move up to your speed toward the triggering ally, ending this movement adjacent to them or in the nearest square if you can’t reach an adjacent square. The triggering ally can spend a Recovery and gains 5 temporary Stamina for each enemy you came adjacent to during the move. You then make a power roll against the target.'
															},
															{
																type: 'roll',
																roll: {
																	characteristic: [
																		'Might'
																	],
																	bonus: 0,
																	tier1: 'Р < [слабкий], ціль злякана союзником, який спровокував здібність (рят. кидок закінчує)',
																	tier2: ' Р < [середній], ціль злякана союзником, який спровокував здібність (рят. кидок закінчує)',
																	tier3: 'Р < [сильний], ціль злякана союзником, який спровокував здібність (рят. кидок закінчує)'
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
												id: 'tactician-sub-3-2-2b',
												name: 'Взвод! До мене!',
												description: 'Together we are invincible!',
												type: 'Здібність',
												data: {
													ability: {
														id: 'tactician-sub-3-2-2b',
														name: 'Squad! On Me!',
														description: 'Together we are invincible!',
														type: {
															usage: 'Маневр',
															free: false,
															trigger: '',
															time: '',
															qualifiers: [],
															freeStrike: false
														},
														keywords: [
															'Area'
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
														target: 'На себе і кожного союзника в зоні впливу',
														cost: 5,
														repeatable: false,
														minLevel: 1,
														sections: [
															{
																type: 'Текст',
																text: 'Until the start of your next turn, each target has a bonus to stability equal to your Might score. Additionally, each target gains 2 surges.'
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
						features: []
					},
					{
						level: 4,
						features: []
					},
					{
						level: 5,
						features: [
							{
								id: 'tactician-sub-3-5-1',
								name: 'Струсіть це',
								description: 'As a безкоштовний маневр, you can spend 1d6 Stamina to ignore a consequence from a test, or to end one effect on you that is ended by a saving throw or that ends at the end of your turn. Any ally adjacent to you can also spend Stamina as a безкоштовний маневр to gain this benefit.',
								type: 'Текст',
								data: null
							},
							{
								id: 'tactician-sub-3-5-2',
								name: 'Тактична наступальна',
								description: 'When you use the Charge основна дія to attack a creature marked by you, you can use a signature or heroic ability with the Melee and Strike keywords instead of a melee free strike.',
								type: 'Текст',
								data: null
							}
						]
					},
					{
						level: 6,
						features: [
							{
								id: 'tactician-sub-3-6-1',
								name: 'Choice',
								description: '',
								type: 'Вибір',
								data: {
									options: [
										{
											feature: {
												id: 'tactician-sub-3-6-1a',
												name: 'Миттєве відплата',
												description: 'You parry with almost supernatural speed.',
												type: 'Здібність',
												data: {
													ability: {
														id: 'tactician-sub-3-6-1a',
														name: 'Instant Retaliation',
														description: 'You parry with almost supernatural speed.',
														type: {
															usage: 'Тригерна дія',
															free: true,
															trigger: 'A creature deals damage to the target.',
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
														target: 'Один союзник',
														cost: 9,
														repeatable: false,
														minLevel: 1,
														sections: [
															{
																type: 'Текст',
																text: 'The target takes half the damage. You then make a power roll against the triggering creature.'
															},
															{
																type: 'roll',
																roll: {
																	characteristic: [
																		'Might'
																	],
																	bonus: 0,
																	tier1: 'Л < [слабкий], приголомшений (рят. кидок закінчує)',
																	tier2: 'Л < [середній], приголомшений (рят. кидок закінчує)',
																	tier3: 'Л < [сильний], приголомшений (рят. кидок закінчує)'
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
												id: 'tactician-sub-3-6-1b',
												name: 'До мене, взвод!',
												description: 'You lead your allies in a charge.',
												type: 'Здібність',
												data: {
													ability: {
														id: 'tactician-sub-3-6-1b',
														name: 'To Me Squad!',
														description: 'You lead your allies in a charge.',
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
																	tier1: '6 + С шкоди; один союзник у межах 10 клітинок може використати основну дію Charge як безкоштовну тригерну дію й може використати сигнатурну здібність-удар ближнього бою замість безкоштовного удару під час Charge',
																	tier2: '9 + С шкоди; один союзник у межах 10 клітинок може використати основну дію Charge як безкоштовну тригерну дію й може використати сигнатурну здібність-удар ближнього бою з перевагою замість безкоштовного удару під час Charge',
																	tier3: '13 + С шкоди; двоє союзників у межах 10 клітинок можуть використати основну дію Charge як безкоштовну тригерну дію й кожен може використати сигнатурну здібність-удар ближнього бою з перевагою замість безкоштовного удару під час Charge'
																}
															},
															{
																type: 'Текст',
																text: 'If the target is hit with two or more strikes as part of this ability and they have Р < [сильний] , they are dazed (save ends). If the target is reduced to 0 Stamina before one or both allies has made their strike, the ally or allies can pick a different target.'
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
								id: 'tactician-sub-3-7-1',
								name: 'Шок і трепет',
								description: 'You have expanded your leadership skills, strengthening your followers’ morale and providing logistical support. During a montage test or negotiation, you can obtain one automatic success on a test made using a skill from the interpersonal skill group. Additionally, you can convince a group of people to help you with a crafting project during a respite. If these people are available when you take a respite, you can make a project roll for a crafting project in addition to undertaking another respite activity.',
								type: 'Текст',
								data: null
							}
						]
					},
					{
						level: 8,
						features: [
							{
								id: 'tactician-sub-1-8-1',
								name: 'Бачити, як твої вороги відступають перед тобою',
								description: 'When you or any ally makes a melee strike against a creature marked by you, you can spend 2 focus to have the character making the strike push the target up to a number of squares equal to your Reason score. That character can then shift up to a number of squares equal to your Reason score, ending this shift adjacent to the target.',
								type: 'Вміст пакета',
								data: {
									tag: 'mark'
								}
							}
						]
					},
					{
						level: 9,
						features: [
							{
								id: 'tactician-sub-3-9-1',
								name: 'Choice',
								description: '',
								type: 'Вибір',
								data: {
									options: [
										{
											feature: {
												id: 'tactician-sub-3-9-1a',
												name: 'Немає втечі',
												description: 'Nothing will stop you from reaching your foe.',
												type: 'Здібність',
												data: {
													ability: {
														id: 'tactician-sub-3-9-1a',
														name: 'No Escape',
														description: 'Nothing will stop you from reaching your foe.',
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
																text: 'You mark the target.'
															},
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
																text: 'If you use this ability as part of the Charge основна дія, enemies’ spaces don’t count as difficult terrain for your movement. Additionally, if you move through any creature’s space, you can slide that creature 1 square out of the path of your charge.'
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
												id: 'tactician-sub-3-9-1b',
												name: 'Цей — мій!',
												description: 'You focus on making an enemy irrelevant.',
												type: 'Здібність',
												data: {
													ability: {
														id: 'tactician-sub-3-9-1b',
														name: 'That One Is Mine!',
														description: 'You focus on making an enemy irrelevant.',
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
																value: 5,
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
																text: 'The target is marked by you.'
															},
															{
																type: 'roll',
																roll: {
																	characteristic: [
																		'Might'
																	],
																	bonus: 0,
																	tier1: '8 + С шкоди',
																	tier2: '13 + С шкоди',
																	tier3: '17 + С шкоди'
																}
															},
															{
																type: 'Текст',
																text: 'Until the end of the encounter or until you are dying, you can use a signature or heroic ability instead of a free strike against any target marked by you.'
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
				value: 2
			},
			{
				characteristic: 'Ловкість',
				value: 1
			},
			{
				characteristic: 'Reason',
				value: 2
			},
			{
				characteristic: 'Intuition',
				value: -1
			},
			{
				characteristic: 'Presence',
				value: 1
			}
		]
	},
	career: {
		id: 'career-soldier',
		name: 'Солдат',
		description: 'In your formative years, you fought tirelessly in skirmishes and campaigns against enemy forces.',
		features: [
			{
				id: 'career-soldier-feature-1',
				name: 'Навичка дослідження',
				description: '',
				type: 'Вибір навички',
				data: {
					options: [],
					listOptions: [
						'Дослідження'
					],
					count: 1,
					selected: [
						'Витривалість'
					]
				}
			},
			{
				id: 'career-soldier-feature-2',
				name: 'Навичка інтриг',
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
				id: 'career-soldier-feature-3',
				name: 'Мови',
				description: '',
				type: 'Вибір мови',
				data: {
					options: [],
					count: 2,
					selected: [
						'Сзетч (Szetch)',
						'Васлоріан (Vaslorian)'
					]
				}
			},
			{
				id: 'career-soldier-feature-4',
				name: 'Відомість',
				description: '',
				type: 'Бонус',
				data: {
					field: 'Renown',
					value: 1,
					valueCharacteristics: [],
					valueCharacteristicMultiplier: 1,
					valuePerLevel: 0,
					valuePerEchelon: 0
				}
			},
			{
				id: 'career-soldier-feature-5',
				name: 'Перевага дослідження',
				description: '',
				type: 'Перевага',
				data: {
					lists: [
						'Дослідження'
					],
					count: 1,
					selected: [
						{
							id: 'perk-put-your-back-into-it',
							name: 'Вклади силу!',
							description: 'During montage tests, whenever you make a test to assist a test and obtain a tier 1 outcome, the assisted test doesn’t take a bane. Additionally, once per montage test, you can turn an ally’s tier 1 test outcome into a tier 2 outcome.',
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
					id: 'career-soldier-ii-1',
					name: 'Наруга статусу',
					description: 'Ви вступили до армії, щоб захищати інших, але ваш командир наказав бити й вбивати цивільних. Коли ви відмовилися, ситуація стала жорстокою. Ви ледь вирвалися з бійки, що спалахнула, але тепер клянетеся допомагати людям на своїх умовах.'
				},
				{
					id: 'career-soldier-ii-2',
					name: 'Повернення з відставки',
					description: 'У вас була довга й славетна кар’єра солдата, перш ніж ви вирішили піти на спокій до простішого життя. Але коли ви повернулися до рідного дому, ви виявили, що вороги його зруйнували. Тепер навички, здобуті на полі бою, допомагають вам стати іншим типом воїна — тим, хто прагне врятувати інших від долі, що сталася з вами.'
				},
				{
					id: 'career-soldier-ii-3',
					name: 'Мир через зцілення',
					description: 'The sight of constant bloodshed took its toll on you. You seek peace through healing and dedicated yourself to ending wars before they begin, to spare those around you from the horror.'
				},
				{
					id: 'career-soldier-ii-4',
					name: 'Один виживший',
					description: 'You were the last surviving member of your unit after an arduous battle or monstrous assault, surviving only through luck. You turned away from the life of a soldier then, seeking to become a hero who could stand against such threats.'
				},
				{
					id: 'career-soldier-ii-5',
					name: 'Украдене звання',
					description: 'Tired of eking out an existence on the streets, you enrolled in the military. However, you were unable to escape your lower-status background until the officer leading your unit fell in battle. In the chaos that ensued, you assumed their identity and returned home a hero. To avoid suspicion, you took on the life of an adventurer, staying always on the move.'
				},
				{
					id: 'career-soldier-ii-6',
					name: 'Клятва жертви',
					description: 'You promised a fellow soldier that you’d protect his family if he ever fell in battle. When he did, you traveled to his village, but found its people slain or scattered by war. Driven by your vow, you have dedicated your life to finding any survivors and protecting others from a similar fate.'
				}
			],
			selected: {
				id: 'career-soldier-ii-4',
				name: 'Один виживший',
				description: 'You were the last surviving member of your unit after an arduous battle or monstrous assault, surviving only through luck. You turned away from the life of a soldier then, seeking to become a hero who could stand against such threats.'
			},
			selectedID: 'career-soldier-ii-4'
		}
	},
	complication: null,
	features: [
		{
			id: 'default-language',
			name: 'Мова за замовчуванням',
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
