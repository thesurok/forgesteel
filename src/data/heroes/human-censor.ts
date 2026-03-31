import { Hero } from '@/models/hero';

export const humanCensor = {
	id: 'qrjxZPFJhWdJiZyk',
	name: 'Дженнет',
	picture: null,
	folder: '',
	settingIDs: [
		'',
		'orden'
	],
	ancestry: {
		id: 'ancestry-human',
		name: 'Людина',
		description: 'Люди належать до світу так, як інші розмовляючі народи — ні. Ви можете відчувати присутність надприродного — той … маслянистий запах у повітрі, як я чув, його описують. А присутність безсмертних змушує волосся на вашій шиї ставати дибки. Або чому, як ви думаєте, кладовища так на вас впливають? Що б не було магією, її вплив на вас легкий. Що б не керувало безсмертними, ваша природа повстає проти цього.',
		features: [
			{
				id: 'human-feature-1',
				name: 'Виявлення надприродного',
				description: 'Ви відкриваєте свою свідомість, щоб виявити надприродних істот і явища.',
				type: 'Здібність',
				data: {
					ability: {
						id: 'human-feature-1',
						name: 'Виявлення надприродного',
						description: 'Ви відкриваєте свою свідомість, щоб виявити надприродних істот і явища.',
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
						cost: 0,
						repeatable: false,
						minLevel: 1,
						sections: [
							{
								type: 'Текст',
								text: 'До кінця вашого наступного ходу ви знаєте місцезнаходження будь-якого надприродного об’єкта, нежиті, конструкта або істоти з іншого світу в межах 5 клітинок, навіть якщо у вас немає лінії впливу на цей об’єкт або істоту. Ви знаєте, чи виявляєте ви предмет або істоту, і знаєте природу будь-якої істоти, яку ви виявляєте.'
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
				id: 'human-feature-2',
				name: 'Риси людини',
				description: '',
				type: 'Вибір',
				data: {
					options: [
						{
							feature: {
								id: 'human-feature-2-1',
								name: 'Не піддається впливу',
								description: 'Ваш зв’язок із природним світом дозволяє вам протистояти певним надприродним ефектам. Ви ігноруєте тимчасову складну місцевість, створену магічними та псіонічними здібностями. Крім того, коли вас змушують рухатися магічною або псіонічною здатністю, ви можете зменшити відстань примусового переміщення на 1.',
								type: 'Текст',
								data: null
							},
							value: 1
						},
						{
							feature: {
								id: 'human-feature-2-2',
								name: 'Наполегливість',
								description: 'Здаватися — це для інших людей. Ви отримуєте перевагу на випробуваннях, зроблених за допомогою навички Витривалість. Крім того, коли ви уповільнені, ваша швидкість зменшується до 3 замість 2.',
								type: 'Текст',
								data: null
							},
							value: 1
						},
						{
							feature: {
								id: 'human-feature-2-3',
								name: 'Протистояти неприродному',
								description: 'Ваша інстинктивна стійкість захищає вас від травм, які виходять за межі звичайного.',
								type: 'Здібність',
								data: {
									ability: {
										id: 'human-feature-2-3',
										name: 'Протистояти неприродному',
										description: 'Ваша інстинктивна стійкість захищає вас від травм, які виходять за межі звичайного.',
										type: {
											usage: 'Тригерна дія',
											free: false,
											trigger: 'Ви отримуєте шкоду, яка не є нетиповою',
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
												text: 'Ви зменшуєте шкоду наполовину.'
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
								id: 'human-feature-2-4',
								name: 'Рішучість',
								description: 'Толерантність до болю та стресу дозволяє вам долати складні ситуації.',
								type: 'Здібність',
								data: {
									ability: {
										id: 'human-feature-2-4',
										name: 'Рішучість',
										description: 'Толерантність до болю та стресу дозволяє вам долати складні ситуації.',
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
										cost: 0,
										repeatable: false,
										minLevel: 1,
										sections: [
											{
												type: 'Текст',
												text: 'Ви негайно припиняєте один із станів: переляк, уповільнення або ослаблення.'
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
								id: 'human-feature-2-5',
								name: 'Стійкість',
								description: 'Ваша людська фізіологія дозволяє вам битися, бігати та не спати довше за інших.',
								type: 'Бонус',
								data: {
									field: 'Відновлення',
									value: 2,
									valueCharacteristics: [],
									valueCharacteristicMultiplier: 1,
									valuePerLevel: 0,
									valuePerEchelon: 0
								}
							},
							value: 2
						}
					],
					count: 'ancestry',
					selected: [
						{
							id: 'human-feature-2-3',
							name: 'Протистояти неприродному',
							description: 'Ваша інстинктивна стійкість захищає вас від травм, які виходять за межі звичайного.',
							type: 'Здібність',
							data: {
								ability: {
									id: 'human-feature-2-3',
									name: 'Протистояти неприродному',
									description: 'Ваша інстинктивна стійкість захищає вас від травм, які виходять за межі звичайного.',
									type: {
										usage: 'Тригерна дія',
										free: false,
										trigger: 'Ви отримуєте шкоду, яка не є нетиповою',
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
											text: 'Ви зменшуєте шкоду наполовину.'
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
							id: 'human-feature-2-5',
							name: 'Стійкість',
							description: 'Ваша людська фізіологія дозволяє вам битися, бігати та не спати довше за інших.',
							type: 'Бонус',
							data: {
								field: 'Відновлення',
								value: 2,
								valueCharacteristics: [],
								valueCharacteristicMultiplier: 1,
								valuePerLevel: 0,
								valuePerEchelon: 0
							}
						}
					]
				}
			}
		],
		ancestryPoints: 3
	},
	culture: {
		id: 'culture-human',
		name: 'Людина',
		description: 'Міський, комунальний, праця.',
		type: 'Походження',
		language: {
			id: 'culture-language',
			name: 'Мова',
			description: '',
			type: 'Вибір мови',
			data: {
				options: [],
				count: 1,
				selected: ['Васлоріан (Vaslorian)']
			}
		},
		languages: [],
		environment: {
			id: 'env-urban',
			name: 'Міська',
			description: 'Міська культура завжди зосереджена в місті. Вона може виникнути у стінах великого мегаполіса, у мережі печер підземного міста чи будь-де, де велика кількість людей живе поруч. Люди міських культур часто вчаться майстерно обходити інших, щоб орієнтуватися у натовпі та політичних інтригах, які супроводжують міське життя.',
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
		organization: {
			id: 'org-communal',
			name: 'Комунальна',
			description: 'Комунальна культура — це місце, де всі члени спільноти вважаються рівними. Громада разом приймає важливі рішення, що впливають на більшість, і обирає лідерів для організації спільних зусиль. Кожен має відносно рівне право голосу, і всі допомагають громаді виживати й процвітати. Люди часто ділять між собою тягарі управління, фізичної праці, догляду за дітьми та інші обов’язки. Колектив фермерів, що разом обробляють землю без пана, місто піратів, де кожен робить, що хоче, або мандрівна театральна трупа, де всі голосують щодо рішень — це приклади комунальних культур. Багато таких культур існують поза межами поселень: у дикій природі, окремих районах міст, каналізаціях, руїнах чи інших ізольованих місцях. Навіть якщо ці культури безпечні, їхні члени знають, що чужинці можуть спробувати нав’язати їм свої правила, тому вони прагнуть захищати себе й уникати небезпеки від інших груп.',
			type: 'Вибір навички',
			data: {
				options: [],
				listOptions: [
					'Ремесло',
					'Дослідження'
				],
				count: 1,
				selected: [
					'Лазіння'
				]
			}
		},
		upbringing: {
			id: 'up-labor',
			name: 'Праці',
			description: 'Ваш герой виріс у культурі, де люди заробляють на життя працею. Це могли бути землероби, що вирощують врожай чи худобу, або ті, хто добуває природні ресурси — полюванням, риболовлею, лісозаготівлею чи шахтарством. Або ж це могли бути майстри ручної праці, пов’язаної з будівництвом, перевезенням, навантаженням тощо. Люди з таким вихованням цінують важку працю.',
			type: 'Вибір навички',
			data: {
				options: [
					'Ковальство',
					'Догляд за тваринами'
				],
				listOptions: [
					'Дослідження'
				],
				count: 1,
				selected: [
					'Витривалість'
				]
			}
		}
	},
	class: {
		id: 'class-censor',
		name: 'Цензор',
		description: '\nДемони й безсмертні бояться вас. Злочинці тікають, щойно бачать вашу тінь. Агенти хаосу, богохульники та єретики тремтять від звуку вашого голосу. Ви несете силу богів, озброєні гнівом і послані у світ, щоб спершу розшукати, а тоді засудити тих, чиї вчинки або навіть саме існування є анафемою для вашої церкви.\n\nЯк цензор, ви найкраще проявляєте себе проти найсильніших ворогів. Ваш суд жахає єретиків, зупиняє ворогів на місці й навіть відкидає їх через усе поле бою.',
		type: 'standard',
		subclassName: 'Орден',
		subclassCount: 1,
		primaryCharacteristicsOptions: [
			[
				'Сила',
				'Присутність'
			]
		],
		primaryCharacteristics: [
			'Сила',
			'Присутність'
		],
		featuresByLevel: [
			{
				level: 1,
				features: [
					{
						id: 'censor-stamina',
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
						id: 'censor-recoveries',
						name: 'Відновлення',
						description: '',
						type: 'Бонус',
						data: {
							field: 'Відновлення',
							value: 12,
							valueCharacteristics: [],
							valueCharacteristicMultiplier: 1,
							valuePerLevel: 0,
							valuePerEchelon: 0
						}
					},
					{
						id: 'censor-resource',
						name: 'Гнів',
						description: '',
						type: 'Героїчний ресурс',
						data: {
							type: 'heroic',
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
							],
							details: '',
							canBeNegative: false,
							value: 0
						}
					},
					{
						id: 'censor-1-1',
						name: 'Навички: Міжособистісні / Знання',
						description: '',
						type: 'Вибір навички',
						data: {
							options: [],
							listOptions: [
								'Міжособистісні',
								'Знання'
							],
							count: 2,
							selected: [
								'Зчитування людини',
								'Релігія'
							]
						}
					},
					{
						id: 'censor-1-2',
						name: 'Домен',
						description: '',
						type: 'Домен',
						data: {
							count: 1,
							selected: [
								{
									id: 'domain-war',
									name: 'Війна',
									description: 'Домена Війни.',
									featuresByLevel: [
										{
											level: 1,
											features: [
												{
													id: 'domain-war-1',
													name: 'Освячена зброя, навичка дослідження',
													description: 'Освячена зброя, навичка дослідження',
													type: 'Набір особливостей',
													data: {
														features: [
															{
																id: 'domain-war-1-1',
																name: 'Освячена зброя',
																description: 'Під час відпочинку ти можеш благословити зброю. Будь-яка істота, яка володіє цією зброєю, отримує +1 до кидка шкоди здібностями, що використовують цю зброю. Цей бонус триває до наступного відпочинку.',
																type: 'Текст',
																data: null
															},
															{
																id: 'domain-war-1-2',
																name: 'Навичка дослідження',
																description: '',
																type: 'Вибір навички',
																data: {
																	options: [],
																	listOptions: [
																		'Дослідження'
																	],
																	count: 1,
																	selected: []
																}
															}
														]
													}
												}
											]
										},
										{
											level: 2,
											features: [
												{
													id: 'domain-war-2',
													name: 'Благословення прозорливості',
													description: 'Боги дарують прозорливість, що відкриває найкращі місця для удару по ворогах.',
													type: 'Здібність',
													data: {
														ability: {
															id: 'domain-war-2',
															name: 'Благословення прозорливості',
															description: 'Боги дарують прозорливість, що відкриває найкращі місця для удару по ворогах.',
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
															target: 'Ти та кожен союзник',
															cost: 5,
															repeatable: false,
															minLevel: 1,
															sections: [
																{
																	type: 'Текст',
																	text: 'До кінця сутички або поки ти не вмираєш, кожна ціль отримує 1 сплеск наприкінці кожного твого ходу.'
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
											level: 3,
											features: []
										},
										{
											level: 4,
											features: [
												{
													id: 'domain-war-4',
													name: 'Покращена освячена зброя',
													description: 'Зброя, покращена твоєю властивістю "Освячена зброя", дає +3 до кидка шкоди замість +1.',
													type: 'Текст',
													data: null
												}
											]
										},
										{
											level: 5,
											features: []
										},
										{
											level: 6,
											features: [
												{
													id: 'domain-war-6',
													name: 'Клинок небес',
													description: 'Великий меч спускається з неба, загрожуючи приголомшити ворога.',
													type: 'Здібність',
													data: {
														ability: {
															id: 'domain-war-6',
															name: 'Клинок небес',
															description: 'Великий меч спускається з неба, загрожуючи приголомшити ворога.',
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
																	value: 5,
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
																			'Інтуїція'
																		],
																		bonus: 0,
																		tier1: '8 + І шкоди; Л < [слабка], повалена та скута (рят. кидок завершує)',
																		tier2: '12 + І шкоди; Л < [середня], повалена та скута (рят. кидок завершує)',
																		tier3: '16 + І шкоди; Л < [сильна], повалена та скута (рят. кидок завершує)'
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
										},
										{
											level: 7,
											features: [
												{
													id: 'domain-war-7',
													name: 'Твої тріумфи памʼятають',
													description: 'Боги дозволяють тобі та твоїм супутникам купатися у славі минулих перемог. Коли ти завершуєш відпочинок, ти та інші герої, які відпочивали з тобою, відновлюєте 1 Перемогу після того, як Перемоги перетворюються на досвід. Ця Перемога не перетворюється на досвід після наступного відпочинку.',
													type: 'Текст',
													data: null
												}
											]
										},
										{
											level: 8,
											features: []
										},
										{
											level: 9,
											features: [
												{
													id: 'domain-war-9',
													name: 'Праведна фаланга',
													description: 'Стіна з обертових мечів і ножів зʼявляється там, де ти забажаєш.',
													type: 'Здібність',
													data: {
														ability: {
															id: 'domain-war-9',
															name: 'Праведна фаланга',
															description: 'Стіна з обертових мечів і ножів зʼявляється там, де ти забажаєш.',
															type: {
																usage: 'Основна дія',
																free: false,
																trigger: '',
																time: '',
																qualifiers: [],
																freeStrike: false
															},
															keywords: [
																'Зона',
																'Магія',
																'Дальній'
															],
															distance: [
																{
																	type: 'Стіна',
																	value: 15,
																	value2: 0,
																	within: 10,
																	special: '',
																	qualifier: ''
																}
															],
															target: 'Особлива',
															cost: 11,
															repeatable: false,
															minLevel: 1,
															sections: [
																{
																	type: 'Текст',
																	text: 'Стіна триває до кінця сутички або поки ти не вмираєш, і може бути розміщена на зайнятих клітинках. Істоти можуть входити та проходити крізь стіну. Кожен ворог, який вперше входить у зону під час раунду бою або починає там свій хід, отримує 15 шкоди.'
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
											level: 10,
											features: []
										}
									],
									resourceGains: [
										{
											resource: 'Благочестя',
											tag: '',
											trigger: 'Вперше за сутичку, коли ти або істота в межах 10 клітинок отримує шкоду, що перевищує 10 + твій рівень за один хід.',
											value: '2'
										}
									],
									defaultFeatures: [
										{
											id: 'war-default-1',
											name: 'Ефект молитви Війни',
											description: 'Обери до трьох союзників у межах 10 клітинок від себе або обери себе замість одного союзника. Кожна ціль отримує 2 сплески.',
											type: 'Вміст пакета',
											data: {
												tag: 'conduit-prayer'
											}
										}
									]
								}
							]
						}
					},
					{
						id: 'censor-1-4',
						name: 'Суд',
						description: 'Ви вимовляєте молитву, що окреслює вашого ворога священною енергією.',
						type: 'Здібність',
						data: {
							ability: {
								id: 'censor-1-4',
								name: 'Суд',
								description: 'Ви вимовляєте молитву, що окреслює вашого ворога священною енергією.',
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
								target: 'Один ворог',
								cost: 0,
								repeatable: false,
								minLevel: 1,
								sections: [
									{
										type: 'Текст',
										text: 'Ціль перебуває під вашим судом до кінця зустрічі, доки ви не використаєте цю здібність знову, добровільно не припините цей ефект (дія не потрібна), або доки інший цензор не засудить цю ціль.\n\nКоли істота, засуджена вами, виконує основну дію і знаходиться у вашій лінії впливу, ви можете використати безкоштовну тригерну дію, щоб завдати їй священної шкоди, рівної подвоєному показнику вашої Присутності.\n\nЯкщо істота, засуджена вами, знижується до 0 Витривалості, ви можете використати безкоштовну тригерну дію, щоб спрямувати цю здібність на нову ціль.\n\nКрім того, ви можете витратити 1 гнів, щоб виконати одну з наведених нижче безкоштовних тригерних дій:\n\n* Коли сусідня істота, засуджена вами, починає зрушуватися, ви робите проти неї безкоштовний удар у ближньому бою, і її швидкість стає 0 до кінця поточного ходу, запобігаючи зрушенню.\n* Коли істота, засуджена вами, у межах 10 клітинок робить кидок сили, ви накладаєте на цей кидок шкоду (bane).\n* Коли істота, засуджена вами, у межах 10 клітинок використовує здібність з потужністю, що цілиться тільки в одну істоту, потужність для тієї істоти зменшується на 1.\n* Якщо ви пошкодите засуджену вами істоту ближньою здібністю, ця істота буде висміяна вами до кінця її наступного ходу.\n\nВи можете вибрати тільки один варіант безкоштовної тригерної дії одночасно, навіть якщо кілька варіантів спрацьовують від того самого ефекту.'
									},
									{
										type: 'Пакет',
										tag: 'censor-judgment'
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
						id: 'censor-1-5',
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
									id: 'kit-mountain',
									name: 'Mountain',
									description: 'Набір «Гора» робить саме те, що обіцяє назва. Ви вдягаєте важку броню й піднімаєте важку зброю, щоб непохитно стояти проти ворогів і швидко трощити їх, коли настає ваша черга бити.',
									type: '',
									armor: [
										'Важка броня'
									],
									weapon: [
										'Важка зброя'
									],
									stamina: 9,
									speed: 0,
									stability: 2,
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
											id: 'kit-mountain-signature',
											name: 'Біль за біль',
											description: 'Ворог, який завдав вам шкоди, за це заплатить.',
											type: 'Здібність',
											data: {
												ability: {
													id: 'kit-mountain-signature',
													name: 'Біль за біль',
													description: 'Ворог, який завдав вам шкоди, за це заплатить.',
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
																tier1: '3 шкоди + С або Л шкоди',
																tier2: '5 шкоди + С або Л шкоди',
																tier3: '9 шкоди + С або Л шкоди'
															}
														},
														{
															type: 'Текст',
															text: 'Якщо ціль завдавала вам шкоди від кінця вашого останнього ходу, цей удар завдає додаткової шкоди, що дорівнює вашому показнику Сили або Ловкості на ваш вибір.'
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
						id: 'censor-1-6',
						name: 'Моє життя за твоє',
						description: 'Ви спрямовуєте частину своєї життєвої сили, щоб надати собі або союзнику більшу витривалість.',
						type: 'Здібність',
						data: {
							ability: {
								id: 'censor-1-6',
								name: 'Моє життя за твоє',
								description: 'Ви спрямовуєте частину своєї життєвої сили, щоб надати собі або союзнику більшу витривалість.',
								type: {
									usage: 'Тригерна дія',
									free: false,
									trigger: 'Ціль починає свій хід або отримує шкоду.',
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
								cost: 0,
								repeatable: false,
								minLevel: 1,
								sections: [
									{
										type: 'Текст',
										text: 'Ви витрачаєте Відновлення, і ціль відновлює Витривалість, рівну вашому значенню Відновлення.'
									},
									{
										type: 'field',
										name: 'Витрата',
										value: 1,
										repeatable: false,
										effect: 'Ви можете завершити один ефект на цілі, який закінчується рятівним кидком або який закінчується в кінці її ходу, або лежача ціль може підвестися.'
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
						id: 'censor-1-7',
						name: 'Особливість домену 1 рівня',
						description: '',
						type: 'Особливість домену',
						data: {
							level: 1,
							count: 1,
							selected: [
								{
									id: 'domain-war-1',
									name: 'Освячена зброя, навичка дослідження',
									description: 'Освячена зброя, навичка дослідження',
									type: 'Набір особливостей',
									data: {
										features: [
											{
												id: 'domain-war-1-1',
												name: 'Освячена зброя',
												description: 'Під час відпочинку ти можеш благословити зброю. Будь-яка істота, яка володіє цією зброєю, отримує +1 до кидка шкоди здібностями, що використовують цю зброю. Цей бонус триває до наступного відпочинку.',
												type: 'Текст',
												data: null
											},
											{
												id: 'domain-war-1-2',
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
														'Стрибки'
													]
												}
											}
										]
									}
								}
							]
						}
					},
					{
						id: 'censor-1-8',
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
								'censor-ability-4'
							]
						}
					},
					{
						id: 'censor-1-9',
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
								'censor-ability-7'
							]
						}
					},
					{
						id: 'censor-1-10',
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
								'censor-ability-9'
							]
						}
					}
				]
			},
			{
				level: 2,
				features: [
					{
						id: 'censor-2-1',
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
						id: 'censor-3-1',
						name: 'Поглянь на мою працю і впади у відчай',
						description: 'Ваш суд збільшився в божественній силі, вселяючи страх у тих, кого ви засуджуєте. Коли ви використовуєте здібність Суд, ви можете витратити 1 гнів; якщо ціль має П < [середній], вона злякається вас (рят. кидок). Крім того, коли істота, засуджена вами, знижується до 0 Витривалості і ви використовуєте Суд як безкоштовну тригерну дію, якщо нова ціль має П < [сильний], вона злякається вас (рят. кидок). Якщо ціль уже злякана вами, вона замість цього отримує священну шкоду, рівну подвоєному вашому показнику Присутності.',
						type: 'Текст',
						data: null
					},
					{
						id: 'censor-3-2',
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
						id: 'censor-4-1a',
						name: 'Might',
						description: '',
						type: 'Бонус характеристики',
						data: {
							characteristic: 'Might',
							value: 1
						}
					},
					{
						id: 'censor-4-1b',
						name: 'Presence',
						description: '',
						type: 'Бонус характеристики',
						data: {
							characteristic: 'Presence',
							value: 1
						}
					},
					{
						id: 'censor-4-2',
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
						id: 'censor-4-3',
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
					},
					{
						id: 'censor-4-4',
						name: 'Гнів понад гнів',
						description: '',
						type: 'Отримання героїчного ресурсу',
						data: {
							tag: 'deal-damage 2',
							trigger: 'Уперше за раунд, коли ви завдаєте шкоди істоті, яку засудили',
							value: '2',
							replacesTags: [
								'deal-damage'
							]
						}
					},
					{
						id: 'censor-4-5',
						name: 'Вибір особливості домену',
						description: '',
						type: 'Особливість домену',
						data: {
							level: 4,
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
						id: 'censor-5-1',
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
						id: 'censor-6-1',
						name: 'Знаряддя гніву',
						description: 'Щоразу, коли ви завершуєте перепочинок, ви можете обрати зброю одного героя, зокрема свою власну, щоб спрямувати в неї надприродну силу як у знаряддя гніву вашого божества. Зброя стає магічною й до вашого наступного перепочинку отримує такі переваги:\n\n* Удари цією зброєю завдають додаткової священної шкоди, що дорівнює найвищому показнику характеристики її власника.\n* Будь-яка істота, вражена цією зброєю, яка має вразливість до священної шкоди й П < [сильний], стає зляканою й ослабленою (рят. кидок закінчує).\n* Будь-який міньйон, націлений ударом цією зброєю, гине. Максимум Витривалості цього міньйона вилучається зі спільного запасу Витривалості загону до того, як шкода буде застосована до решти загону.\n* Власника зброї не можна злякати.',
						type: 'Текст',
						data: null
					},
					{
						id: 'censor-6-2',
						name: 'Перевага: Міжособистісні / Знання / Надприродне',
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
				level: 7,
				features: [
					{
						id: 'censor-7-1a',
						name: 'Might',
						description: '',
						type: 'Бонус характеристики',
						data: {
							characteristic: 'Might',
							value: 1
						}
					},
					{
						id: 'censor-7-1b',
						name: 'Ловкість',
						description: '',
						type: 'Бонус характеристики',
						data: {
							characteristic: 'Ловкість',
							value: 1
						}
					},
					{
						id: 'censor-7-1c',
						name: 'Reason',
						description: '',
						type: 'Бонус характеристики',
						data: {
							characteristic: 'Reason',
							value: 1
						}
					},
					{
						id: 'censor-7-1d',
						name: 'Intuition',
						description: '',
						type: 'Бонус характеристики',
						data: {
							characteristic: 'Intuition',
							value: 1
						}
					},
					{
						id: 'censor-7-1e',
						name: 'Presence',
						description: '',
						type: 'Бонус характеристики',
						data: {
							characteristic: 'Presence',
							value: 1
						}
					},
					{
						id: 'censor-7-2',
						name: 'Вибір особливості домену',
						description: '',
						type: 'Особливість домену',
						data: {
							level: 7,
							count: 1,
							selected: []
						}
					},
					{
						id: 'censor-7-3',
						name: 'Зосереджений гнів',
						description: '',
						type: 'Отримання героїчного ресурсу',
						data: {
							tag: 'start 2',
							trigger: 'Start of your turn',
							value: '2',
							replacesTags: [
								'start'
							]
						}
					},
					{
						id: 'censor-7-4',
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
						id: 'censor-8-1',
						name: 'Перевага',
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
						id: 'censor-8-2',
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
						id: 'censor-9-1',
						name: 'Поліпшене знаряддя гніву',
						description: 'Зброя, яку ви обрали для особливості «Знаряддя гніву», отримує такі додаткові переваги:\n\n* Власник зброї й кожен союзник поруч із ним отримують бонус +2 до рят. кидків.\n* Наприкінці кожного ходу власника зброї кожен союзник поруч із ним робить рят. кидок проти кожного ефекту на собі, який завершується рят. кидком.\n* Власник зброї має імунітет до Скверни 10.',
						type: 'Текст',
						data: null
					}
				]
			},
			{
				level: 10,
				features: [
					{
						id: 'censor-10-1a',
						name: 'Might',
						description: '',
						type: 'Бонус характеристики',
						data: {
							characteristic: 'Might',
							value: 1
						}
					},
					{
						id: 'censor-10-1b',
						name: 'Presence',
						description: '',
						type: 'Бонус характеристики',
						data: {
							characteristic: 'Presence',
							value: 1
						}
					},
					{
						id: 'censor-10-2',
						name: 'Перевага: Ремесло / Знання / Надприродне',
						description: '',
						type: 'Перевага',
						data: {
							lists: [
								'Ремесло',
								'Знання',
								'Надприродне'
							],
							count: 1,
							selected: []
						}
					},
					{
						id: 'censor-10-3',
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
						id: 'censor-10-4',
						name: 'Тамплієр',
						description: 'Ви є найвищим уособленням справедливості свого божества в часовому просторі. Щоразу, коли ви використовуєте свою здібність «Суд», ви можете використати безкоштовну тригерну дію, щоб застосувати ефект домену провідника, повʼязаний з обраним вами доменом або доменом, до якого ви отримали доступ через Чесноту. Якщо ефект вимагає використання вашого показника Інтуїції, натомість використовуйте показник Присутності. Якщо ефект використовує рівень провідника, натомість використовуйте рівень цензора.\n\nКрім того, щоразу, коли ви робите перепочинок, ви можете відкрити портал, щоб відпочити в присутності свого божества, і взяти з собою будь-яких союзників. Коли ви це робите, то можете поставити своєму божеству три запитання, на які Режисер мусить відповісти чесно, якщо божество знає відповіді, хоча вони можуть бути подані загадково або неповно. Коли ви завершуєте перепочинок, ви й ваші союзники можете зʼявитися в будь-якому місці часопростору, де хтось поклоняється вашому божеству.\n\nПоки ви відпочиваєте в його присутності, ваше божество може також дати вам пріоритетні цілі для звершення правосуддя. Ви й ваші союзники маєте подвійну перевагу на кидки сили проти таких цілей. Якщо ви спробуєте знову відкрити портал до свого божества, перш ніж переможете пріоритетні цілі, ви зазнаєте гніву свого божества, як визначить Режисер.',
						type: 'Текст',
						data: null
					},
					{
						id: 'censor-10-5',
						name: 'Чеснота',
						description: '\nВи можете витратити 3 Чесноти, щоб отримати доступ до одного з доменів свого божества, до якого зазвичай не маєте доступу. Коли ви це робите, то можете використовувати особливості цього домену, доки не завершите наступний перепочинок.\n\nЧеснота зберігається, доки ви її не витратите.',
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
						id: 'censor-10-6',
						name: 'Гнів богів',
						description: '',
						type: 'Отримання героїчного ресурсу',
						data: {
							tag: 'start 3',
							trigger: 'Початок вашого ходу',
							value: '4',
							replacesTags: [
								'start',
								'start 2'
							]
						}
					}
				]
			}
		],
		abilities: [
			{
				id: 'censor-ability-1',
				name: 'Назад, блюзніре!',
				description: 'Ви спрямовуєте силу крізь свою зброю, щоб відкинути ворогів.',
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
						type: 'Cube',
						value: 2,
						value2: 0,
						within: 1,
						special: '',
						qualifier: ''
					}
				],
				target: 'Кожен ворог у зоні',
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
							tier1: '2 священної шкоди; відштовхнути на 1',
							tier2: '4 священної шкоди; відштовхнути на 2',
							tier3: '6 священної шкоди; відштовхнути на 3'
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
				id: 'censor-ability-2',
				name: 'Кожен крок... смерть!',
				description: 'Ви показуєте ворогу проблиск його долі після смерті.',
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
								'Presence'
							],
							bonus: 0,
							tier1: '5 + П психічної шкоди',
							tier2: '7 + П психічної шкоди',
							tier3: '10 + П психічної шкоди'
						}
					},
					{
						type: 'Текст',
						text: 'Щоразу, коли ціль добровільно рухається до кінця вашого наступного ходу, вона отримує 1 психічної шкоди за кожну клітинку, яку проходить.'
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
				id: 'censor-ability-3',
				name: 'Стій, лиходію!',
				description: 'Ви насичуєте свою зброю святою магією, яка ускладнює ворогові втечу.',
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
							tier1: '2 + С священної шкоди; П < [слабкий], сповільнений (рят. кидок закінчує)',
							tier2: '5 + С священної шкоди; П < [середній], сповільнений (рят. кидок закінчує)',
							tier3: '7 + С священної шкоди; П < [сильний], сповільнений (рят. кидок закінчує)'
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
				id: 'censor-ability-4',
				name: 'Твої союзники тебе не врятують!',
				description: 'Ваш магічний удар перетворює провину ворога на спалах святої сили.',
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
							tier1: '3 + С священної шкоди',
							tier2: '5 + С священної шкоди',
							tier3: '8 + С священної шкоди'
						}
					},
					{
						type: 'Текст',
						text: 'Кожного ворога поруч із ціллю відштовхує від неї на кількість клітинок, що дорівнює вашому показнику Присутності.'
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
				id: 'censor-ability-5',
				name: 'Ось щит віри!',
				description: 'Могутній удар перетворює життєву силу ворога на святе світло, що огортає вас і союзника та відбиває в охочих нападати.',
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
							tier1: '3 + С священної шкоди',
							tier2: '6 + С священної шкоди',
							tier3: '9 + С священної шкоди'
						}
					},
					{
						type: 'Текст',
						text: 'До початку вашого наступного ходу вороги мають шкоду на кидки здібностей проти вас і кожного союзника поруч із вами.'
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
				id: 'censor-ability-6',
				name: 'Наступальний натиск',
				description: 'Відтісняючи ворога своєю зброєю, ви використовуєте віру, щоб триматися поряд.',
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
							tier1: '3 + С шкоди; відштовхнути на 1',
							tier2: '6 + С шкоди; відштовхнути на 3',
							tier3: '9 + С шкоди; відштовхнути на 5'
						}
					},
					{
						type: 'Текст',
						text: 'Після того як ви відштовхуєте ціль, ви можете зміститися на відстань до своєї швидкості по прямій у її бік.'
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
				id: 'censor-ability-7',
				name: 'Боги карають і боронять',
				description: 'Ви спрямовуєте святу силу, щоб уразити ворога й зцілити союзника.',
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
							tier1: '5 + С священної шкоди',
							tier2: '8 + С священної шкоди',
							tier3: '11 + С священної шкоди'
						}
					},
					{
						type: 'Текст',
						text: 'Ви можете витратити Відновлення, щоб дозволити собі або одному союзникові в межах 10 клітинок відновити Витривалість, що дорівнює вашому значенню відновлення.'
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
				id: 'censor-ability-8',
				name: 'Покайся!',
				description: 'Ви закликаєте спогади про гріхи ворога, щоб терзати його.',
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
							tier1: '5 + П священної шкоди; І < [слабкий], приголомшений (рят. кидок закінчує)',
							tier2: '8 + П священної шкоди; І < [середній], приголомшений (рят. кидок закінчує)',
							tier3: '11 + П священної шкоди; І < [сильний], приголомшений (рят. кидок закінчує)'
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
				id: 'censor-ability-9',
				name: 'Арешт',
				description: '«Попався, покидьку».',
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
							tier1: '6 + С священної шкоди; схоплений',
							tier2: '9 + С священної шкоди; схоплений',
							tier3: '13 + С священної шкоди; схоплений'
						}
					},
					{
						type: 'Текст',
						text: 'Якщо ціль робить удар по істоті, поки її схоплено таким чином, ви можете витратити 3 Гніву, щоб завдати їй священної шкоди, що дорівнює вашому показнику Присутності, а потім змінити ціль цього удару на іншу ціль у межах дальності удару.'
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
				id: 'censor-ability-10',
				name: 'Поглянь в обличчя правосуддя!',
				description: 'Ви атакуєте ворога, і ваші противники бачать видіння справжньої природи вашої рішучості.',
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
								'Might'
							],
							bonus: 0,
							tier1: '3 + С священної шкоди; якщо ціль має П < [слабкий], кожен ворог у межах 2 клітинок від неї зляканий вами (рят. кидок закінчує)',
							tier2: '5 + С священної шкоди; якщо ціль має П < [середній], кожен ворог у межах 2 клітинок від неї зляканий вами (рят. кидок закінчує)',
							tier3: '8 + С священної шкоди; якщо ціль має П < [сильний], кожен ворог у межах 2 клітинок від неї зляканий вами (рят. кидок закінчує)'
						}
					},
					{
						type: 'Текст',
						text: 'Кожного ворога, зляканого цією здібністю, відштовхує на 2 клітинки від цілі, і він отримує психічну шкоду, що дорівнює вашому показнику Присутності.'
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
				id: 'censor-ability-11',
				name: 'Засуджено',
				description: 'Суд відбувся, вирок винесено.',
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
							tier1: '2 + С священної шкоди',
							tier2: '3 + С священної шкоди',
							tier3: '5 + С священної шкоди'
						}
					},
					{
						type: 'Текст',
						text: 'Коли ця здібність робить захеканою ціль, що не є ватажком або одинаком, її Витривалість зводиться до 0.'
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
				id: 'censor-ability-12',
				name: 'Очищувальний вогонь',
				description: 'Боги судять, а вогонь очищує.',
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
								'Might'
							],
							bonus: 0,
							tier1: '5 + С священної шкоди; С < [слабкий], ціль має вразливість 3 до вогняної шкоди (рят. кидок закінчує)',
							tier2: '9 + С священної шкоди; С < [середній], ціль має вразливість 5 до вогняної шкоди (рят. кидок закінчує)',
							tier3: '12 + С священної шкоди; С < [сильний], ціль має вразливість 7 до вогняної шкоди (рят. кидок закінчує)'
						}
					},
					{
						type: 'Текст',
						text: 'Поки ціль має вразливість до вогню від цієї здібності, ви можете обрати, щоб ваші здібності завдавали їй вогняної, а не священної шкоди.'
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
				id: 'censor-ability-13',
				name: 'Едикт руйнівної ізоляції',
				description: 'Зло всередині ваших ворогів вибухає святим вогнем, що палить лише винних.',
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
						value: 2,
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
						type: 'Текст',
						text: 'До кінця зіткнення або доки ви не почнете вмирати кожна ціль наприкінці кожного вашого ходу отримує священну шкоду, що дорівнює вашому показнику Присутності. Ціль отримує додатково 2d6 священної шкоди, якщо її засудили ви або якщо вона стоїть поруч із будь-яким ворогом.'
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
				id: 'censor-ability-14',
				name: 'Edict of Perfect Order',
				description: 'Within the area of your divine presence, your enemies will regret using their fell abilities.',
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
						value: 2,
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
						type: 'Текст',
						text: 'Until the end of the encounter or until you are dying, whenever a target uses an ability that costs Malice, they take holy damage equal to three times your Presence score. A target judged by you takes an extra 2d6 holy damage.'
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
				id: 'censor-ability-15',
				name: 'Edict of Purifying Pacifism',
				description: 'You shed a righteous energy that punishes enemies who would harm you or your allies.',
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
						value: 2,
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
						type: 'Текст',
						text: 'Until the end of the encounter or until you are dying, whenever a target makes a strike, they take holy damage equal to twice your Presence score. A target judged by you takes an extra 2d6 holy damage.'
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
				id: 'censor-ability-16',
				name: 'Edict of Stillness',
				description: 'The holy aura you project makes it painful for evil-doers to leave your reach.',
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
						value: 2,
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
						type: 'Текст',
						text: 'Until the end of the encounter or until you are dying, whenever a target moves or is force moved out of the area, they take holy damage equal to twice your Presence score. A target judged by you who moves willingly takes an extra 2d6 holy damage.'
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
				id: 'censor-ability-17',
				name: 'Gods Grant Thee Strength',
				description: 'You channel divine force for movement that cannot be stopped.',
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
				cost: 9,
				repeatable: false,
				minLevel: 1,
				sections: [
					{
						type: 'Текст',
						text: 'The target ends any condition or effect on them that is ended by a saving throw or that ends at the end of their turn, or a prone target can stand up. The target then gains 2 surges, can shift up to their speed while ignoring difficult terrain, and can use a strike signature ability as a безкоштовна тригерна дія.'
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
				id: 'censor-ability-18',
				name: 'Orison of Victory',
				description: 'You channel your god’s will to overcome hardship and inflict pain.',
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
							tier1: 'Кожна ціль отримує 1 сплеск.',
							tier2: 'Кожна ціль отримує 2 сплески.',
							tier3: 'Кожна ціль отримує 3 сплески.'
						}
					},
					{
						type: 'Текст',
						text: 'A target can end one effect on them that is ended by a saving throw or that ends at the end of their turn, or a prone target can stand up.'
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
				id: 'censor-ability-19',
				name: 'Righteous Judgment',
				description: 'You amplify the power of your judgment.',
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
							tier1: '10 + С шкоди',
							tier2: '14 + С шкоди',
							tier3: '20 + С шкоди'
						}
					},
					{
						type: 'Текст',
						text: 'Until the end of the encounter, whenever any ally deals damage to a target judged by you, that ally gains 1 surge.'
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
				id: 'censor-ability-20',
				name: 'Shield of the Righteous',
				description: 'You strike a foe and create a fleet of divine shields that protect your allies.',
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
							tier1: '10 + С шкоди; ви й кожен союзник, суміжний із вами, отримуєте 10 тимчасової Витривалості',
							tier2: '14 + С шкоди; ви й кожен союзник, суміжний із вами, отримуєте 15 тимчасової Витривалості',
							tier3: '20 + С шкоди; ви й кожен союзник, суміжний із вами, отримуєте 20 тимчасової Витривалості'
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
				id: 'censor-ability-21',
				name: 'Excommunication',
				description: 'You curse your foe to become a bane to their allies.',
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
							tier1: '9 + С шкоди; І < [слабкий], ослаблений (рят. кидок закінчує)',
							tier2: '13 + С шкоди; І < [середній], ослаблений (рят. кидок закінчує)',
							tier3: '18 + С шкоди; І < [сильний], ослаблений (рят. кидок закінчує)'
						}
					},
					{
						type: 'Текст',
						text: 'At the end of each of your turns, a target weakened this way deals holy damage equal to twice your Presence score to each enemy within 2 squares of them. Additionally, a target weakened this way can’t be targeted by their allies’ abilities.'
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
				id: 'censor-ability-22',
				name: 'Hand of the Gods',
				description: 'You use your foe as a tool against your enemies.',
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
								'Might'
							],
							bonus: 0,
							tier1: '10 + С шкоди',
							tier2: '15 + С шкоди',
							tier3: '21 + С шкоди'
						}
					},
					{
						type: 'Текст',
						text: 'Until the end of the encounter, while the target is judged by you, you can choose to make them the source of any of your abilities. Additionally, the target counts as an ally for the purpose of flanking.'
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
				id: 'censor-ability-23',
				name: 'Pillar of Holy Fire',
				description: 'Your enemy’s guilt fuels a holy flame that burns your foes.',
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
							tier1: '9 + С шкоди; І < [слабкий], приголомшений (рят. кидок закінчує)',
							tier2: '13 + С шкоди; І < [середній], приголомшений (рят. кидок закінчує)',
							tier3: '18 + С шкоди; І < [сильний], приголомшений (рят. кидок закінчує)'
						}
					},
					{
						type: 'Текст',
						text: 'At the end of each of your turns, a target dazed this way deals holy damage equal to twice your Presence score to each enemy within 2 squares of them.'
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
				id: 'censor-ability-24',
				name: 'Your Allies Turn on You!',
				description: 'You turn your enemies’ ire to the target.',
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
							tier1: '5 + П шкоди; І < [слабкий], сповільнений (рят. кидок закінчує)',
							tier2: '9 + П шкоди; І < [середній], сповільнений (рят. кидок закінчує)',
							tier3: '12 + П шкоди; І < [сильний], сповільнений (рят. кидок закінчує)'
						}
					},
					{
						type: 'Текст',
						text: 'While the target is slowed this way, each of their allies who starts their turn within 5 squares of them must use a безкоштовний маневр to make a free strike against the target. Additionally, while the target is slowed this way, each of their allies within 5 squares of them who can make a triggered free strike against a different creature must make the free strike against the target instead.'
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
				id: 'censor-sub-1',
				name: 'Exorcist',
				description: 'You specialize in hunting your order’s hidden enemies, knowing that an open mind is an unguarded fortress. You have the Read Person skill.',
				featuresByLevel: [
					{
						level: 1,
						features: [
							{
								id: 'censor-sub-1-1-1',
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
								id: 'censor-sub-1-1-2',
								name: 'Judgment Order Benefit',
								description: 'You can teleport up to a number of squares equal to twice your Presence score. This movement must take you closer to the judged creature. You do not need line of effect to your destination.',
								type: 'Вміст пакета',
								data: {
									tag: 'censor-judgment'
								}
							}
						]
					},
					{
						level: 2,
						features: [
							{
								id: 'censor-sub-1-2-1',
								name: 'Saint\'s Vigilance',
								description: 'You have honed your ability to detect sin and can use it to find those who hide from justice. Any creature judged by you can’t use the Hide маневр. Additionally, you gain an edge when searching for hidden creatures. If you find a hidden creature, you can use your Judgment ability against them as a безкоштовна тригерна дія.',
								type: 'Текст',
								data: null
							},
							{
								id: 'censor-sub-1-2-2',
								name: 'A Sense for Truth',
								description: 'You are trained in secret techniques from your order that allow you to discern the truth with supernatural precision. If a creature is of a lower level than you, you automatically know when they are lying, though you don’t necessarily know the actual truth behind their lie. Additionally, you gain an edge on tests made to detect lies or hidden motives.',
								type: 'Текст',
								data: null
							},
							{
								id: 'censor-sub-1-2-3',
								name: 'Choice',
								description: '',
								type: 'Вибір',
								data: {
									options: [
										{
											feature: {
												id: 'censor-sub-1-2-3a',
												name: 'It Is Justice You Fear',
												description: 'I am but a vessel. Your own deeds weigh upon you.',
												type: 'Здібність',
												data: {
													ability: {
														id: 'censor-sub-1-2-3a',
														name: 'It Is Justice You Fear',
														description: 'I am but a vessel. Your own deeds weigh upon you.',
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
																	tier1: '8 + С священної шкоди; П < [слабкий], зляканий (рят. кидок закінчує)',
																	tier2: '12 + С священної шкоди; П < [середній], зляканий (рят. кидок закінчує)',
																	tier3: '15 + С священної шкоди; П < [сильний], зляканий (рят. кидок закінчує)'
																}
															},
															{
																type: 'Текст',
																text: 'If the target is already frightened of you or another creature and this ability would frighten them again, they instead take psychic damage equal to twice your Presence score.'
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
												id: 'censor-sub-1-2-3b',
												name: 'Revelator',
												description: 'You channel holy energy to harm unbelievers and reveal those hidden from your judgment.',
												type: 'Здібність',
												data: {
													ability: {
														id: 'censor-sub-1-2-3b',
														name: 'Revelator',
														description: 'You channel holy energy to harm unbelievers and reveal those hidden from your judgment.',
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
																value: 3,
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
																type: 'Текст',
																text: 'Each target takes holy damage equal to twice your Presence score. Additionally, each hidden target is automatically revealed and can’t become hidden again until the start of your next turn. You can then use your Judgment ability against one target as a безкоштовна тригерна дія.'
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
								id: 'censor-sub-1-3-1',
								name: 'Evil Revealed',
								description: 'Your order has taught you methods to discern the disguises of both mortals and monsters. You automatically see through disguises and illusions created by creatures of your level or lower, and you gain an edge on tests made to see through the disguises and illusions of more powerful creatures. Whenever you see through a creature’s disguise or illusion, you can use your Judgment ability against them as a безкоштовна тригерна дія.',
								type: 'Текст',
								data: null
							}
						]
					},
					{
						level: 6,
						features: [
							{
								id: 'censor-sub-1-4-1',
								name: 'Choice',
								description: '',
								type: 'Вибір',
								data: {
									options: [
										{
											feature: {
												id: 'censor-sub-1-4-1a',
												name: 'Begone',
												description: 'You terrify your enemies into retreating, creating chaos in their ranks.',
												type: 'Здібність',
												data: {
													ability: {
														id: 'censor-sub-1-4-1a',
														name: 'Begone',
														description: 'You terrify your enemies into retreating, creating chaos in their ranks.',
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
																	tier1: '4 психічної шкоди; зсунути на 3',
																	tier2: '6 психічної шкоди; зсунути на 5',
																	tier3: '8 психічної шкоди; зсунути на 7'
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
												id: 'censor-sub-1-4-1b',
												name: 'Pain of Your Own Making',
												description: 'You reverse the effects from an evildoer.',
												type: 'Здібність',
												data: {
													ability: {
														id: 'censor-sub-1-4-1b',
														name: 'Pain of Your Own Making',
														description: 'You reverse the effects from an evildoer.',
														type: {
															usage: 'Тригерна дія',
															free: true,
															trigger: 'The target gains a condition or effect that is ended by a saving throw or that ends at the end of their turn.',
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
														cost: 9,
														repeatable: false,
														minLevel: 1,
														sections: [
															{
																type: 'Текст',
																text: 'The effect ends on the target and is applied to the creature who imposed the effect on them. That creature also takes damage equal to three times your Presence score.'
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
								id: 'censor-sub-1-5-1',
								name: 'Demonologist',
								description: 'Найезотеричніші таємниці вашого ордену вчать, що, аби здолати ворога, його треба зрозуміти. Коли ви маєте справу з демонами, дияволами та іншими агентами хаосу, ваша Відомість вважається на 2 вищою за звичайну. Якщо ви успішно завершуєте переговори з однією з цих істот, ви отримуєте перевагу на кидки сили проти неї й можете використати проти неї свою здібність Judgment як безкоштовну тригерну дію до початку сутички.',
								type: 'Текст',
								data: null
							}
						]
					},
					{
						level: 9,
						features: [
							{
								id: 'censor-sub-1-6-1',
								name: 'Choice',
								description: '',
								type: 'Вибір',
								data: {
									options: [
										{
											feature: {
												id: 'censor-sub-1-6-1a',
												name: 'Banish',
												description: 'You sever the target’s tenuous connection to the world.',
												type: 'Здібність',
												data: {
													ability: {
														id: 'censor-sub-1-6-1a',
														name: 'Banish',
														description: 'You sever the target’s tenuous connection to the world.',
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
																	tier1: '5 + С шкоди; П < [слабкий], ціль is banished (рят. кидок закінчує)',
																	tier2: '8 + С шкоди; П < [середній], ціль is banished (рят. кидок закінчує)',
																	tier3: '11 + С шкоди; П < [сильний], ціль is banished (рят. кидок закінчує)'
																}
															},
															{
																type: 'Текст',
																text: 'This ability gains an edge against demons, devils, undead, and creatures not native to your current world. If you know the target’s true name, this ability has a double edge. While banished, the target is sent to another manifold in the timescape and removed from the encounter map. A banished target can do nothing but make saving throws, and takes 10 holy damage each time they do so. If the target is reduced to 0 Stamina while banished, they are lost to the timescape.'
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
												id: 'censor-sub-1-6-1b',
												name: 'Terror Manifest',
												description: '“I know what you fear.”',
												type: 'Здібність',
												data: {
													ability: {
														id: 'censor-sub-1-6-1b',
														name: 'Terror Manifest',
														description: '“I know what you fear.”',
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
																	tier1: '7 + П психічної шкоди; П < [слабкий], зляканий (рят. кидок закінчує)',
																	tier2: '10 + П психічної шкоди; П < [середній], зляканий (рят. кидок закінчує)',
																	tier3: '12 + П психічної шкоди; П < [сильний], зляканий (рят. кидок закінчує)'
																}
															},
															{
																type: 'Текст',
																text: 'While frightened this way, if a target who is a leader or solo creature is winded, they take an extra 25 psychic damage. If a target frightened this way is not a leader or solo creature and is winded, they are reduced to 0 Stamina.'
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
				id: 'censor-sub-2',
				name: 'Oracle',
				description: 'Corruption has deep tendrils that can be missed, leading you to specialize in uncovering clandestine threats to your order. You have the Magic skill.',
				featuresByLevel: [
					{
						level: 1,
						features: [
							{
								id: 'censor-sub-2-1-1',
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
										'Магія'
									]
								}
							},
							{
								id: 'censor-sub-2-1-2',
								name: 'Judgment Order Benefit',
								description: 'You can deal holy damage equal to twice your Presence score to the judged creature.',
								type: 'Вміст пакета',
								data: {
									tag: 'censor-judgment'
								}
							}
						]
					},
					{
						level: 2,
						features: [
							{
								id: 'censor-sub-2-2-1',
								name: 'It Was Foretold',
								description: 'Your order has trained you to understand fragments of the visions granted to you by your deity, giving you a momentary advantage in challenging situations. At the start of an encounter, you can take one основна дія before any other creature and before your first turn. Additionally, whenever the Director calls for a montage test, you can make one free test before the montage begins, which counts as an earned success or failure as usual.',
								type: 'Текст',
								data: null
							},
							{
								id: 'censor-sub-2-2-2',
								name: 'Judge of Character',
								description: 'Your focus on your fragmentary visions grants divine insight into the world and its creatures beyond your usual senses. Whenever you would make an Intuition test, you can make a Presence test instead.',
								type: 'Текст',
								data: null
							},
							{
								id: 'censor-sub-2-2-3',
								name: 'Choice',
								description: '',
								type: 'Вибір',
								data: {
									options: [
										{
											feature: {
												id: 'censor-sub-2-2-3a',
												name: 'Prescient Grace',
												description: 'Gifted by a prescient vision, you warn an ally of an impending attack.',
												type: 'Здібність',
												data: {
													ability: {
														id: 'censor-sub-2-2-3a',
														name: 'Prescient Grace',
														description: 'Gifted by a prescient vision, you warn an ally of an impending attack.',
														type: {
															usage: 'Тригерна дія',
															free: false,
															trigger: 'An enemy within 10 squares starts their turn.',
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
														cost: 5,
														repeatable: false,
														minLevel: 1,
														sections: [
															{
																type: 'Текст',
																text: 'You can spend a Recovery to allow the target to regain Stamina equal to your recovery value. The target can then take their turn immediately before the triggering enemy.'
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
												id: 'censor-sub-2-2-3b',
												name: 'With My Blessing',
												description: 'A word in prayer, and the gods show the way.',
												type: 'Здібність',
												data: {
													ability: {
														id: 'censor-sub-2-2-3b',
														name: 'With My Blessing',
														description: 'A word in prayer, and the gods show the way.',
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
														target: 'На себе або одного союзника',
														cost: 5,
														repeatable: false,
														minLevel: 1,
														sections: [
															{
																type: 'Текст',
																text: 'The target can use a безкоштовна тригерна дія to use a strike signature ability or a strike heroic ability, and has a double edge on that ability. If a heroic ability is chosen, reduce its Heroic Resource cost by 3 (to a minimum cost of 0).'
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
								id: 'censor-sub-2-3-1',
								name: 'Prophecy',
								description: 'You can better sift through the constant fragmentary visions from your deity and act to make them manifest. Each time you earn 1 or more Victories, you can make a number of 2d10 rolls equal to the number of Victories you earned. Record each roll in order. Then whenever you or a creature within 10 squares makes a power roll, you can use a безкоштовна тригерна дія to replace the total on the dice with your first recorded roll.\n\nYou discard each roll as it is used, and each time you earn Victories, you\nadd new rolls to the bottom of the list. Any unused rolls are discarded\nwhen you finish a respite.\n\t\t\t\t\t',
								type: 'Текст',
								data: null
							}
						]
					},
					{
						level: 6,
						features: [
							{
								id: 'censor-sub-2-4-1',
								name: 'Choice',
								description: '',
								type: 'Вибір',
								data: {
									options: [
										{
											feature: {
												id: 'censor-sub-2-4-1a',
												name: 'Burden of Evil',
												description: 'You reveal a vision of your enemies’ fate that causes them to scramble as it staggers them.',
												type: 'Здібність',
												data: {
													ability: {
														id: 'censor-sub-2-4-1a',
														name: 'Burden of Evil',
														description: 'You reveal a vision of your enemies’ fate that causes them to scramble as it staggers them.',
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
														target: 'Три вороги',
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
																	tier1: 'Зсунути на 3; І < [слабкий], приголомшений (рят. кидок закінчує)',
																	tier2: 'Зсунути на 5; І < [середній], приголомшений (рят. кидок закінчує)',
																	tier3: 'Зсунути на 7; І < [сильний], приголомшений (рят. кидок закінчує)'
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
												id: 'censor-sub-2-4-1b',
												name: 'Edict of Peace',
												description: 'You anticipate your foes’ moves and deny them.',
												type: 'Здібність',
												data: {
													ability: {
														id: 'censor-sub-2-4-1b',
														name: 'Edict of Peace',
														description: 'You anticipate your foes’ moves and deny them.',
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
														target: 'Кожен ворог у зоні',
														cost: 9,
														repeatable: false,
														minLevel: 1,
														sections: [
															{
																type: 'Текст',
																text: 'Until the end of the encounter or until you are dying, whenever any target takes a тригерна дія or a безкоштовна тригерна дія, that action is negated and the target takes holy damage equal to your Presence score.'
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
								id: 'censor-sub-2-5-1',
								name: 'Their Past Revealed',
								description: 'Your constant fragmentary visions become clearer, and can be honed to understand the past of creatures you interact with. While speaking with any creature, you can make a medium Presence test to see visions from their past. On a success, you see a clear view of any subject related to the creature’s past that you wish to understand. On a success with a consequence, you see two visions, one false and one true. On a failure, you lose 2d6 Stamina.',
								type: 'Текст',
								data: null
							}
						]
					},
					{
						level: 9,
						features: [
							{
								id: 'censor-sub-2-6-1',
								name: 'Choice',
								description: '',
								type: 'Вибір',
								data: {
									options: [
										{
											feature: {
												id: 'censor-sub-2-6-1a',
												name: 'Blessing and a Curse',
												description: 'The gods bless and damn in equal measure.',
												type: 'Здібність',
												data: {
													ability: {
														id: 'censor-sub-2-6-1a',
														name: 'Blessing and a Curse',
														description: 'The gods bless and damn in equal measure.',
														type: {
															usage: 'Тригерна дія',
															free: false,
															trigger: 'The target makes a power roll.',
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
														cost: 11,
														repeatable: false,
														minLevel: 1,
														sections: [
															{
																type: 'Текст',
																text: 'The target obtains a tier 1 or tier 3 outcome on their power roll (your choice). You can then choose another target within distance, who obtains the opposite outcome on their next power roll.'
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
												id: 'censor-sub-2-6-1b',
												name: 'Fulfill Your Destiny',
												description: 'You have looked at various futures, and only this one works.',
												type: 'Здібність',
												data: {
													ability: {
														id: 'censor-sub-2-6-1b',
														name: 'Fulfill Your Destiny',
														description: 'You have looked at various futures, and only this one works.',
														type: {
															usage: 'Тригерна дія',
															free: false,
															trigger: 'You or another hero ends their turn.',
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
																text: 'The target takes their turn after the triggering hero, and immediately removes all conditions and negative effects on themself. During their turn, the target has a double edge on power rolls.'
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
				id: 'censor-sub-3',
				name: 'Paragon',
				description: 'Without a strong example and a firm hand, the weak will be corrupted. You specialize in setting an example for your order. You have the Lead skill.',
				featuresByLevel: [
					{
						level: 1,
						features: [
							{
								id: 'censor-sub-3-1-1',
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
										'Допит'
									]
								}
							},
							{
								id: 'censor-sub-3-1-2',
								name: 'Judgment Order Benefit',
								description: 'You can vertical pull the judged creature up to a number of squares equal to twice your Presence score.',
								type: 'Вміст пакета',
								data: {
									tag: 'censor-judgment'
								}
							}
						]
					},
					{
						level: 2,
						features: [
							{
								id: 'censor-sub-3-2-1',
								name: 'Lead by Example',
								description: 'Your devotion to your deity allows you to take command of the battlefield, letting your allies benefit from your wisdom. While you are adjacent to a creature, your allies gain the benefits of flanking against that creature. Additionally, your allies gain an edge on tests made to aid other creatures with their tests.',
								type: 'Текст',
								data: null
							},
							{
								id: 'censor-sub-3-2-2',
								name: 'Stalwart Example',
								description: 'You exhibit a small spark of your deity’s power, causing creatures to trust or fear you, depending on what you need. You gain an edge on tests made to intimidate or persuade others.',
								type: 'Текст',
								data: null
							},
							{
								id: 'censor-sub-3-2-3',
								name: 'Choice',
								description: '',
								type: 'Вибір',
								data: {
									options: [
										{
											feature: {
												id: 'censor-sub-3-2-3a',
												name: 'Blessing of the Faithful',
												description: 'The gods reward your faith.',
												type: 'Здібність',
												data: {
													ability: {
														id: 'censor-sub-3-2-3a',
														name: 'Blessing of the Faithful',
														description: 'The gods reward your faith.',
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
														target: 'На себе і кожного союзника в зоні впливу',
														cost: 5,
														repeatable: false,
														minLevel: 1,
														sections: [
															{
																type: 'Текст',
																text: 'Until the end of the encounter or until you are dying, each target in the aura gains 1 surge at the end of each of your turns.'
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
												id: 'censor-sub-3-2-3b',
												name: 'Sentenced',
												description: 'The shock of your condemnation freezes your enemy in their boots.',
												type: 'Здібність',
												data: {
													ability: {
														id: 'censor-sub-3-2-3b',
														name: 'Sentenced',
														description: 'The shock of your condemnation freezes your enemy in their boots.',
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
																	tier1: '5 + П шкоди; П < [слабкий], скутий (рят. кидок закінчує)',
																	tier2: '9 + П шкоди; П < [середній], скутий (рят. кидок закінчує)',
																	tier3: '12 + П шкоди; П < [сильний], скутий (рят. кидок закінчує)'
																}
															},
															{
																type: 'Текст',
																text: 'While the target is restrained this way, your abilities that impose forced movement can still move them.'
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
								id: 'censor-sub-3-3-1',
								name: 'Stand Fast!',
								description: 'Your divine spark grows in power, allowing you and your allies to focus and endure. At the start of each of your turns, you can spend 1d6 Stamina to end one effect on you that is ended by a saving throw or that ends at the end of your turn. Any ally who starts their turn within 5 squares of you can also spend Stamina to gain this benefit.',
								type: 'Текст',
								data: null
							}
						]
					},
					{
						level: 6,
						features: [
							{
								id: 'censor-sub-3-4-1',
								name: 'Choice',
								description: '',
								type: 'Вибір',
								data: {
									options: [
										{
											feature: {
												id: 'censor-sub-3-4-1a',
												name: 'Congregation',
												description: 'You focus your allies’ wrath on a chosen foe.',
												type: 'Здібність',
												data: {
													ability: {
														id: 'censor-sub-3-4-1a',
														name: 'Congregation',
														description: 'You focus your allies’ wrath on a chosen foe.',
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
																	tier1: '8 + С шкоди; як безкоштовна тригерна дія, один союзник у межах 10 клітинок від цілі може використати сигнатурну здібність-удар проти цілі',
																	tier2: '12 + С шкоди; як безкоштовна тригерна дія, один союзник у межах 10 клітинок від цілі може використати сигнатурну здібність-удар з перевагою проти цілі',
																	tier3: '16 + С шкоди; як безкоштовна тригерна дія, двоє союзників у межах 10 клітинок від цілі можуть кожен використати сигнатурну здібність-удар з перевагою проти цілі'
																}
															},
															{
																type: 'Текст',
																text: 'Each ally can shift up to 2 squares and gains 2 surges before making the strike.'
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
												id: 'censor-sub-3-4-1b',
												name: 'Intercede',
												description: 'You take your ally’s place.',
												type: 'Здібність',
												data: {
													ability: {
														id: 'censor-sub-3-4-1b',
														name: 'Intercede',
														description: 'You take your ally’s place.',
														type: {
															usage: 'Тригерна дія',
															free: true,
															trigger: 'A creature makes a strike against the target.',
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
														cost: 9,
														repeatable: false,
														minLevel: 1,
														sections: [
															{
																type: 'Текст',
																text: 'The target is unaffected by the strike and you become the target instead, even if you aren’t a valid target for it. You take half the damage from the strike, and the target gains 3 surges.'
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
								id: 'censor-sub-3-5-1',
								name: 'Vow',
								description: 'Your words take on the power of your deity, with all the authority that entails. If you convince a creature to take an oath, they can’t break it for 7 days. If you take an oath, you can’t break it for 7 days.',
								type: 'Текст',
								data: null
							}
						]
					},
					{
						level: 9,
						features: [
							{
								id: 'censor-sub-3-6-1',
								name: 'Choice',
								description: '',
								type: 'Вибір',
								data: {
									options: [
										{
											feature: {
												id: 'censor-sub-3-6-1a',
												name: 'Apostate',
												description: 'You channel holy energy to seal an enemy’s fate.',
												type: 'Здібність',
												data: {
													ability: {
														id: 'censor-sub-3-6-1a',
														name: 'Apostate',
														description: 'You channel holy energy to seal an enemy’s fate.',
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
																	tier1: '13 + С священної шкоди',
																	tier2: '19 + С священної шкоди',
																	tier3: '26 + С священної шкоди'
																}
															},
															{
																type: 'Текст',
																text: 'Until the end of the encounter or until you are dying, the target has damage weakness 10.'
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
												id: 'censor-sub-3-6-1b',
												name: 'Edict of Unyielding Resolve',
												description: 'You and your allies are clad in shimmering armor.',
												type: 'Здібність',
												data: {
													ability: {
														id: 'censor-sub-3-6-1b',
														name: 'Edict of Unyielding Resolve',
														description: 'You and your allies are clad in shimmering armor.',
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
																type: 'Aura',
																value: 2,
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
																text: 'Until the end of the encounter or until you are dying, each target who starts their turn in the area gains 10 temporary Stamina.'
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
				value: -1
			},
			{
				characteristic: 'Reason',
				value: 1
			},
			{
				characteristic: 'Intuition',
				value: 1
			},
			{
				characteristic: 'Presence',
				value: 2
			}
		]
	},
	career: {
		id: 'career-watch-officer',
		name: 'Watch Officer',
		description: 'You served as an officer of the law for a local government. You might have been a single person in a much larger city watch or the only constable patrolling a small village.',
		features: [
			{
				id: 'career-watch-officer-feature-1',
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
				id: 'career-watch-officer-feature-2',
				name: 'Intrigue Skills',
				description: '',
				type: 'Вибір навички',
				data: {
					options: [],
					listOptions: [
						'Інтриги'
					],
					count: 2,
					selected: [
						'Пошук',
						'Підйом'
					]
				}
			},
			{
				id: 'career-watch-officer-feature-3',
				name: 'Languages',
				description: '',
				type: 'Вибір мови',
				data: {
					options: [],
					count: 2,
					selected: [
						'Сзетч (Szetch)',
						'Заліак (Zaliac)'
					]
				}
			},
			{
				id: 'career-watch-officer-feature-4',
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
							id: 'perk-team-leader',
							name: 'Team Leader',
							description: 'At the start of a group test or montage test, you can spend a hero token. If you do, all participants make tests as if they also had any skill you have from the exploration group.',
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
					id: 'career-watch-officer-ii-1',
					name: 'Bigger Fish',
					description: 'You grew bored and disillusioned with chasing down petty thieves and imprisoning folks just trying to survive. Surely there are greater threats in the world. You will find that evil wherever it may lurk, and you’ll be the one to stop it.'
				},
				{
					id: 'career-watch-officer-ii-2',
					name: 'Corruption Within',
					description: 'You joined the force to help the helpless and bring justice to those wronged. You weren’t prepared for the rampant corruption reaching the top of your organization. You refused to cover for your fellow officers and were told in no simple terms to leave town or face the consequences. Now you travel as a hero, acting as the protector you always wanted to be.'
				},
				{
					id: 'career-watch-officer-ii-3',
					name: 'Frame Job',
					description: 'Your partner was murdered. That much is irrefutable. But you didn’t do it, despite what the evidence implies. When it became clear you’d take the fall, you fled, leaving everything behind. Not content to cower in the shadows, you decided to adventure under a new name while you work to clear your own.'
				},
				{
					id: 'career-watch-officer-ii-4',
					name: 'Missing Mentor',
					description: 'You learned everything you know about the job from someone you always looked up to in a corrupt organization. One night, they sent you a cryptic message saying they had discovered “something big,” but before you found out more, they disappeared. No longer sure who you could trust, you slipped away and sought a new life. Now you do what good you can and search to find the truth.'
				},
				{
					id: 'career-watch-officer-ii-5',
					name: 'One That Got Away',
					description: 'A particularly violent or depraved criminal began targeting you - perhaps stealing something personal or hurting someone you love - after slipping through your grasp. You left your career to pursue the criminal, but the trail has gone cold … for now. Might as well help folk in the meantime.'
				},
				{
					id: 'career-watch-officer-ii-6',
					name: 'Powerful Enemies',
					description: 'You made it your responsibility to root out and bring down the region’s foremost crime syndicate. They sent goons to burn down your home and teach you a lesson, leaving you bleeding in the street with nothing left except your life. You’ve since taken on the life of a hero to gain the power and influence you need to destroy the syndicate once and for all.'
				}
			],
			selected: {
				id: 'career-watch-officer-ii-1',
				name: 'Bigger Fish',
				description: 'You grew bored and disillusioned with chasing down petty thieves and imprisoning folks just trying to survive. Surely there are greater threats in the world. You will find that evil wherever it may lurk, and you’ll be the one to stop it.'
			},
			selectedID: 'career-watch-officer-ii-1'
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
