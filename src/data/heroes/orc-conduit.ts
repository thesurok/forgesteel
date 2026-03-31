import { Hero } from '@/models/hero';

export const orcConduit = {
	id: 'peDWE02tDZH9CK2P',
	name: 'Хеттовек',
	picture: null,
	folder: '',
	settingIDs: [
		'',
		'orden'
	],
	ancestry: {
		id: 'ancestry-orc',
		name: 'Орк',
		description: 'Гнів, який неможливо приховати. Лють, яка веде їх у битві. Орки відомі у всьому світі як досконалі воїни — репутація, яку миролюбні орки вважають неприємною.',
		features: [
			{
				id: 'orc-feature-1',
				name: 'Невблаганний',
				description: 'Коли істота завдає вам шкоди, яка залишає вас вмираючим, ви можете зробити безкоштовний удар проти будь-якої істоти. Якщо істота зменшує свою Витривалість до 0 вашим ударом, ви можете витратити Відновлення.',
				type: 'Текст',
				data: null
			},
			{
				id: 'orc-feature-2',
				name: 'Риси орка',
				description: '',
				type: 'Вибір',
				data: {
					options: [
						{
							feature: {
								id: 'orc-feature-2-1',
								name: 'Кров’яний порив',
								description: 'Магія, що тече у ваших жилах, змушує вас бігти швидше в розпалі бою. Перший раз у будь-якому раунді бою, коли ви отримуєте шкоду, ви отримуєте бонус +2 до швидкості до кінця раунду.',
								type: 'Текст',
								data: null
							},
							value: 1
						},
						{
							feature: {
								id: 'orc-feature-2-2',
								name: 'Заземлений',
								description: 'Магія у вашій крові ускладнює іншим переміщення вас.',
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
								id: 'orc-feature-2-3',
								name: 'Пристрасний ремісник',
								description: 'Коли вас охоплює пристрасть до створення, ваша кров’яна магія дозволяє вам працювати довше й наполегливіше. Коли ви отримуєте свої початкові навички від вашої кар’єри, культури, класу чи іншого джерела, виберіть дві навички з групи навичок ремесла, незалежно від того, чи маєте ви ці навички. Коли ви робите кидок проєкту для ремісничого проєкту, який використовує ці навички, ви отримуєте бонус +2 до кидка.',
								type: 'Текст',
								data: null
							},
							value: 1
						},
						{
							feature: {
								id: 'orc-feature-2-4',
								name: 'Сяюче відновлення',
								description: 'Ваша кров’яна магія дозволяє вам відновлювати сили швидше за інших. Коли ви використовуєте маневр Затримати подих, ви можете витратити стільки Відновлень, скільки захочете.',
								type: 'Текст',
								data: null
							},
							value: 2
						},
						{
							feature: {
								id: 'orc-feature-2-5',
								name: 'Безперервність',
								description: 'Ваша кров’яна магія забезпечує вас постійним припливом адреналіну.',
								type: 'Імунітет до станів',
								data: {
									conditions: [
										'Slowed'
									]
								}
							},
							value: 2
						}
					],
					count: 'ancestry',
					selected: [
						{
							id: 'orc-feature-2-5',
							name: 'Безперервність',
							description: 'Ваша кров’яна магія забезпечує вас постійним припливом адреналіну.',
							type: 'Імунітет до станів',
							data: {
								conditions: [
									'Slowed'
								]
							}
						},
						{
							id: 'orc-feature-2-2',
							name: 'Заземлений',
							description: 'Магія у вашій крові ускладнює іншим переміщення вас.',
							type: 'Бонус',
							data: {
								field: 'Непорушність',
								value: 1,
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
		id: 'culture-bespoke-culture',
		name: 'Авторська культура',
		description: 'Оберіть будь-які середовище, організацію та виховання.',
		type: 'Авторська',
		language: {
			id: 'culture-language',
			name: 'Мова',
			description: '',
			type: 'Вибір мови',
			data: {
				options: [],
				count: 1,
				selected: ['Калліак (Kalliak)']
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
					'Лазіння'
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
					'Стрибки'
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
					'Виступ'
				]
			}
		}
	},
	class: {
		id: 'class-conduit',
		name: 'Провідник',
		description: '\nСила богів тече через вас! Як посудина божественної сили, ви не просто підтримуєте союзників у бою. Ви робите їх ефективнішими, одночасно посилаючи божественну енергію на ворогів. Хоч божество або святий, якому ви служите, може мати інших вірних і кліриків, ви особливі серед поклонників і отримуєте здібності від найвищого джерела.\n\nЯк провідник, ви зціляєте й підсилюєте союзників і послаблюєте ворогів, караючи їх божественною магією. Іскра божественності в вас сяє, наповнюючи ворогів благоговінням та роблячи вас уважнішим і обізнанішим.',
		type: 'standard',
		subclassName: '',
		subclassCount: 0,
		primaryCharacteristicsOptions: [
			[
				'Інтуїція'
			]
		],
		primaryCharacteristics: [
			'Інтуїція'
		],
		featuresByLevel: [
			{
				level: 1,
				features: [
					{
						id: 'conduit-stamina',
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
						id: 'conduit-recoveries',
						name: 'Відновлення',
						description: '',
						type: 'Бонус',
						data: {
							field: 'Відновлення',
							value: 8,
							valueCharacteristics: [],
							valueCharacteristicMultiplier: 1,
							valuePerLevel: 0,
							valuePerEchelon: 0
						}
					},
					{
						id: 'conduit-resource',
						name: 'Благочестя',
						description: '',
						type: 'Героїчний ресурс',
						data: {
							type: 'heroic',
							gains: [
								{
									tag: 'start',
									trigger: 'Початок вашого ходу',
									value: '1d3'
								}
							],
							details: '',
							canBeNegative: false,
							value: 0
						}
					},
					{
						id: 'conduit-1-1',
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
								'Переконання',
								'Зчитування людини'
							]
						}
					},
					{
						id: 'conduit-1-2',
						name: 'Домен',
						description: '',
						type: 'Домен',
						data: {
							count: 2,
							selected: [
								{
									id: 'domain-life',
									name: 'Life',
									description: 'The Life domain.',
									featuresByLevel: [
										{
											level: 1,
											features: [
												{
													id: 'domain-life-1',
													name: 'Revitalizing Ritual, Exploration Skill',
													description: 'Revitalizing Ritual, Exploration Skill',
													type: 'Набір особливостей',
													data: {
														features: [
															{
																id: 'domain-life-1-1',
																name: 'Revitalizing Ritual',
																description: 'Each time you finish a respite, you can choose yourself or one ally who is also finishing a respite to gain the benefit of a divine ritual. The chosen character gains a bonus to their recovery value equal to your level that lasts until you finish another respite.',
																type: 'Текст',
																data: null
															},
															{
																id: 'domain-life-1-2',
																name: 'Exploration Skill',
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
													id: 'domain-life-2',
													name: 'Wellspring of Grace',
													description: 'A holy light is emitted from your body, healing your allies.',
													type: 'Здібність',
													data: {
														ability: {
															id: 'domain-life-2',
															name: 'Wellspring of Grace',
															description: 'A holy light is emitted from your body, healing your allies.',
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
																	type: 'Aura',
																	value: 3,
																	value2: 0,
																	within: 0,
																	special: '',
																	qualifier: ''
																}
															],
															target: 'Кожен союзник у зоні',
															cost: 5,
															repeatable: false,
															minLevel: 1,
															sections: [
																{
																	type: 'Текст',
																	text: 'Until the end of the encounter or until you are dying, whenever a target starts their turn in the area, they can spend a Recovery.'
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
													id: 'domain-life-4',
													name: 'Blessing of Life',
													description: 'Your divine presence causes those you deem worthy to recover quickly from a fight. Whenever an ally within distance of your Healing Grace ability regains Stamina, they regain additional Stamina equal to your Intuition score.',
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
													id: 'domain-life-6',
													name: 'Revitalizing Grace',
													description: 'With a gesture, you restore your health and that of your allies.',
													type: 'Здібність',
													data: {
														ability: {
															id: 'domain-life-6',
															name: 'Revitalizing Grace',
															description: 'With a gesture, you restore your health and that of your allies.',
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
																	text: 'Each target can spend any number of Recoveries. Additionally, each target can end one effect on themself that is ended by a saving throw or that ends at the end of their turn, or they can stand up if prone.'
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
													id: 'domain-life-7',
													name: 'Font of Grace',
													description: 'Each time you use your Healing Grace ability, you gain 1 piety that can be spent only on that ability during the same turn. If you don’t use this piety, it is lost. Additionally, you can use your Minor Miracle feature to return a creature to life even if you don’t have their remains.',
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
													id: 'domain-life-9',
													name: 'Radiance of Grace',
													description: 'Intense light is emitted from your body, healing your allies.',
													type: 'Здібність',
													data: {
														ability: {
															id: 'domain-life-9',
															name: 'Radiance of Grace',
															description: 'Intense light is emitted from your body, healing your allies.',
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
															target: 'Чотири союзники',
															cost: 11,
															repeatable: false,
															minLevel: 1,
															sections: [
																{
																	type: 'Текст',
																	text: 'You can target yourself instead of one ally with this ability. Each target can spend any number of Recoveries, can end any effects on them that are ended by a saving throw or that end at the end of their turn, and can stand up if they are prone.'
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
											resource: 'Piety',
											tag: '',
											trigger: 'The first time in an encounter that a creature within 10 squares regains Stamina',
											value: '2'
										}
									],
									defaultFeatures: [
										{
											id: 'life-default-1',
											name: 'Life Prayer Effect',
											description: 'Choose yourself or one ally within 10 squares of you. That character can spend a Recovery, can end one effect on them that is ended by a saving throw or that end at the end of their turn, or can stand up if they are prone. Alternatively, you or one ally within 10 squares gains temporary Stamina equal to 2 times your Intuition score.',
											type: 'Вміст пакета',
											data: {
												tag: 'conduit-prayer'
											}
										}
									]
								},
								{
									id: 'domain-sun',
									name: 'Sun',
									description: 'The Sun domain.',
									featuresByLevel: [
										{
											level: 1,
											features: [
												{
													id: 'domain-sun-1',
													name: 'Inner Light, Lore Skill',
													description: 'Inner Light, Lore Skill',
													type: 'Набір особливостей',
													data: {
														features: [
															{
																id: 'domain-sun-1-1',
																name: 'Inner Light',
																description: 'Each time you finish a respite, you can choose yourself or one ally who is also finishing a respite to gain the benefit of a divine ritual. You place a ray of morning light into the chosen character’s soul, granting them a +1 bonus to saving throws that lasts until you finish another respite.',
																type: 'Текст',
																data: null
															},
															{
																id: 'domain-sun-1-2',
																name: 'Lore Skill',
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
													id: 'domain-sun-2',
													name: 'Morning Light',
													description: 'Light shines at your command, burning your foes and blessing your allies.',
													type: 'Здібність',
													data: {
														ability: {
															id: 'domain-sun-2',
															name: 'Morning Light',
															description: 'Light shines at your command, burning your foes and blessing your allies.',
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
															cost: 5,
															repeatable: false,
															minLevel: 1,
															sections: [
																{
																	type: 'roll',
																	roll: {
																		characteristic: [
																			'Intuition'
																		],
																		bonus: 0,
																		tier1: '4 вогняної шкоди',
																		tier2: '6 вогняної шкоди',
																		tier3: '10 вогняної шкоди'
																	}
																},
																{
																	type: 'Текст',
																	text: 'Each ally in the area deals fire damage equal to your Intuition score with their next strike made before the end of their next turn.'
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
													id: 'domain-sun-4',
													name: 'Light of Revelation',
													description: 'As a маневр, you make your body shine brightly, illuminating your space and each square within 5 squares. This light shines through any darkness. Hidden creatures in the area are automatically revealed, and creatures in the light, including you, can’t hide. While this feature is active, you gain an edge on tests made to notice hidden objects and entrances and to detect supernatural illusions.',
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
													id: 'domain-sun-6',
													name: 'Blessing of the Midday Sun',
													description: 'Your body emits a heat that bakes your enemies and inspires your allies.',
													type: 'Здібність',
													data: {
														ability: {
															id: 'domain-sun-6',
															name: 'Blessing of the Midday Sun',
															description: 'Your body emits a heat that bakes your enemies and inspires your allies.',
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
																	value: 4,
																	value2: 0,
																	within: 0,
																	special: '',
																	qualifier: ''
																}
															],
															target: 'Self and each creature in the area',
															cost: 9,
															repeatable: false,
															minLevel: 1,
															sections: [
																{
																	type: 'Текст',
																	text: 'Until the end of the encounter or until you are dying, each enemy in the area takes a bane on power rolls, and you and each ally in the area gain 1 surge at the end of each of your turns.'
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
													id: 'domain-sun-7',
													name: 'Light of the Burning Sun',
													description: 'Sun infuses your body. Whenever you use an ability to deal rolled damage to another creature, that ability deals an extra 5 fire damage, or an extra 15 fire damage if the creature is undead. Additionally, you have fire immunity equal to your level, which is added to any other fire immunity you have.',
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
													id: 'domain-sun-9',
													name: 'Solar Flare',
													description: 'You call down a sphere of fire that burns your foes to ash.',
													type: 'Здібність',
													data: {
														ability: {
															id: 'domain-sun-9',
															name: 'Solar Flare',
															description: 'You call down a sphere of fire that burns your foes to ash.',
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
																			'Intuition'
																		],
																		bonus: 0,
																		tier1: '9 вогняної шкоди',
																		tier2: '14 вогняної шкоди',
																		tier3: '19 вогняної шкоди'
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
											level: 10,
											features: []
										}
									],
									resourceGains: [
										{
											resource: 'Piety',
											tag: '',
											trigger: 'The first time in an encounter that an enemy within 10 squares takes fire or holy damage',
											value: '2'
										}
									],
									defaultFeatures: [
										{
											id: 'sun-default-1',
											name: 'Sun Prayer Effect',
											description: 'One enemy within 10 squares takes fire damage equal to three times your Intuition score.',
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
						id: 'conduit-1-3b',
						name: 'Молитва',
						description: '\nYou can gain more piety by praying to the gods—but beware! Doing so can easily draw their ire, as the gods hate to be annoyed. Before you roll to gain piety at the start of your turn, you can pray (no action required). If you do, your roll gains the following additional effects:\n\n* If the roll is a 1, you gain 1 additional piety but anger the gods! You take psychic damage equal to 1d6 + your level, which can’t be reduced in any way.\n* If the roll is a 2, you gain 1 additional piety.\n* If the roll is a 3, you gain 2 additional piety and can activate a domain effect of your choice.',
						type: 'Пакет',
						data: {
							tag: 'conduit-prayer'
						}
					},
					{
						id: 'conduit-1-4',
						name: '1st-Level Domain Feature',
						description: '',
						type: 'Особливість домену',
						data: {
							level: 1,
							count: 1,
							selected: [
								{
									id: 'domain-life-1',
									name: 'Revitalizing Ritual, Exploration Skill',
									description: 'Revitalizing Ritual, Exploration Skill',
									type: 'Набір особливостей',
									data: {
										features: [
											{
												id: 'domain-life-1-1',
												name: 'Revitalizing Ritual',
												description: 'Each time you finish a respite, you can choose yourself or one ally who is also finishing a respite to gain the benefit of a divine ritual. The chosen character gains a bonus to their recovery value equal to your level that lasts until you finish another respite.',
												type: 'Текст',
												data: null
											},
											{
												id: 'domain-life-1-2',
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
														'Витривалість'
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
						id: 'conduit-1-5',
						name: 'Healing Grace',
						description: 'Your divine energy restores the righteous.',
						type: 'Здібність',
						data: {
							ability: {
								id: 'conduit-1-5',
								name: 'Healing Grace',
								description: 'Your divine energy restores the righteous.',
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
								cost: 0,
								repeatable: false,
								minLevel: 1,
								sections: [
									{
										type: 'Текст',
										text: 'The target can spend a Recovery.'
									},
									{
										type: 'field',
										name: 'Spend',
										value: 1,
										repeatable: false,
										effect: '\nFor each piety spent, you can choose one of the following enhancements:\n\n* You can target one additional ally within distance.\n* You can end one effect on a target that is ended by a saving throw or that ends at the end of their turn.\n* A prone target can stand up.\n* A target can spend 1 additional Recovery.'
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
						id: 'conduit-1-6',
						name: 'Ray of Wrath',
						description: 'You unleash a blast of holy light upon your foe.',
						type: 'Здібність',
						data: {
							ability: {
								id: 'conduit-1-6',
								name: 'Ray of Wrath',
								description: 'You unleash a blast of holy light upon your foe.',
								type: {
									usage: 'Основна дія',
									free: false,
									trigger: '',
									time: '',
									qualifiers: [
										'can be used as a ranged free strike'
									]
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
								target: 'Одна істота або предмет',
								cost: 0,
								repeatable: false,
								minLevel: 1,
								sections: [
									{
										type: 'roll',
										roll: {
											characteristic: [
												'Intuition'
											],
											bonus: 0,
											tier1: '2 + І шкоди',
											tier2: '4 + І шкоди',
											tier3: '6 + І шкоди'
										}
									},
									{
										type: 'Текст',
										text: 'You can have this ability deal holy damage.'
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
						id: 'conduit-1-7',
						name: 'Тригерна дія',
						description: '',
						type: 'Вибір',
						data: {
							options: [
								{
									feature: {
										id: 'conduit-1-7a',
										name: 'Word of Guidance',
										description: 'You invigorate an attacking ally with divine energy.',
										type: 'Здібність',
										data: {
											ability: {
												id: 'conduit-1-7a',
												name: 'Word of Guidance',
												description: 'You invigorate an attacking ally with divine energy.',
												type: {
													usage: 'Тригерна дія',
													free: false,
													trigger: 'The target makes an ability roll for a damage-dealing ability.',
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
												cost: 0,
												repeatable: false,
												minLevel: 1,
												sections: [
													{
														type: 'Текст',
														text: 'The power roll gains an edge.'
													},
													{
														type: 'field',
														name: 'Spend',
														value: 1,
														repeatable: false,
														effect: 'The power roll has a double edge.'
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
										id: 'conduit-1-7b',
										name: 'Word of Judgment',
										description: 'Your holy word saps an attacking enemy’s strength.',
										type: 'Здібність',
										data: {
											ability: {
												id: 'conduit-1-7b',
												name: 'Word of Judgment',
												description: 'Your holy word saps an attacking enemy’s strength.',
												type: {
													usage: 'Тригерна дія',
													free: false,
													trigger: 'The target would take damage from an ability that uses a power roll.',
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
												cost: 0,
												repeatable: false,
												minLevel: 1,
												sections: [
													{
														type: 'Текст',
														text: 'The power roll takes a bane against the target.'
													},
													{
														type: 'field',
														name: 'Spend',
														value: 1,
														repeatable: false,
														effect: 'The power roll has a double bane against the target.'
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
							selected: [
								{
									id: 'conduit-1-7a',
									name: 'Word of Guidance',
									description: 'You invigorate an attacking ally with divine energy.',
									type: 'Здібність',
									data: {
										ability: {
											id: 'conduit-1-7a',
											name: 'Word of Guidance',
											description: 'You invigorate an attacking ally with divine energy.',
											type: {
												usage: 'Тригерна дія',
												free: false,
												trigger: 'The target makes an ability roll for a damage-dealing ability.',
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
											cost: 0,
											repeatable: false,
											minLevel: 1,
											sections: [
												{
													type: 'Текст',
													text: 'The power roll gains an edge.'
												},
												{
													type: 'field',
													name: 'Spend',
													value: 1,
													repeatable: false,
													effect: 'The power roll has a double edge.'
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
						id: 'conduit-1-8',
						name: 'Молитва',
						description: '',
						type: 'Вибір',
						data: {
							options: [
								{
									feature: {
										id: 'conduit-1-8a',
										name: 'Prayer of Destruction',
										description: 'Your god infuses wrath within your being.',
										type: 'Шкода здібності',
										data: {
											keywords: [
												'Магія'
											],
											value: 1,
											valueCharacteristics: [],
											valueCharacteristicMultiplier: 0,
											valuePerLevel: 0,
											valuePerEchelon: 0,
											damageType: 'Damage'
										}
									},
									value: 1
								},
								{
									feature: {
										id: 'conduit-1-8b',
										name: 'Prayer of Distance',
										description: 'Your god blesses you with the ability to stretch your divine magic farther.',
										type: 'Дальність здібності',
										data: {
											keywords: [
												'Магія',
												'Дальній'
											],
											value: 2,
											valueCharacteristics: [],
											valueCharacteristicMultiplier: 0,
											valuePerLevel: 0,
											valuePerEchelon: 0
										}
									},
									value: 1
								},
								{
									feature: {
										id: 'conduit-1-8c',
										name: 'Prayer of Soldier\'s Skill',
										description: 'Ваш бог наділяє ваш розум підготовкою воїна. Ви можете ефективно носити легку броню та володіти легкою зброєю, навіть якщо не маєте набору. Ви можете використовувати скарби легкої броні та легкої зброї. Якщо у вас є набір, ви не можете взяти це благословення.',
										type: 'Набір особливостей',
										data: {
											features: [
												{
													id: 'conduit-1-8da',
													name: 'Prayer of Soldier\'s Skill',
													description: 'Поки ви володієте легкою зброєю, ви отримуєте +1 до урону здібностями зброї, включно з вільними ударами.',
													type: 'Текст',
													data: null
												},
												{
													id: 'conduit-1-8db',
													name: 'Витривалість',
													description: '',
													type: 'Бонус',
													data: {
														field: 'Витривалість',
														value: 0,
														valueCharacteristics: [],
														valueCharacteristicMultiplier: 1,
														valuePerLevel: 0,
														valuePerEchelon: 3
													}
												},
												{
													id: 'conduit-1-8dc',
													name: 'Proficiency',
													description: '',
													type: 'Володіння',
													data: {
														weapons: [
															'Легка зброя'
														],
														armor: [
															'Легка броня'
														]
													}
												}
											]
										}
									},
									value: 1
								},
								{
									feature: {
										id: 'conduit-1-8d',
										name: 'Prayer of Speed',
										description: 'Your god blesses your flesh and infuses it with divine quickness.',
										type: 'Набір особливостей',
										data: {
											features: [
												{
													id: 'conduit-1-8ca',
													name: 'Швидкість',
													description: '',
													type: 'Бонус',
													data: {
														field: 'Швидкість',
														value: 1,
														valueCharacteristics: [],
														valueCharacteristicMultiplier: 1,
														valuePerLevel: 0,
														valuePerEchelon: 0
													}
												},
												{
													id: 'conduit-1-8cb',
													name: 'Відступ',
													description: '',
													type: 'Бонус',
													data: {
														field: 'Відступ',
														value: 1,
														valueCharacteristics: [],
														valueCharacteristicMultiplier: 1,
														valuePerLevel: 0,
														valuePerEchelon: 0
													}
												}
											]
										}
									},
									value: 1
								},
								{
									feature: {
										id: 'conduit-1-8e',
										name: 'Prayer of Steel',
										description: 'Your god fills your body with the light of creation, making you harder to hurt and move.',
										type: 'Набір особливостей',
										data: {
											features: [
												{
													id: 'conduit-1-8ea',
													name: 'Витривалість',
													description: '',
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
												{
													id: 'conduit-1-8eb',
													name: 'Непорушність',
													description: '',
													type: 'Бонус',
													data: {
														field: 'Непорушність',
														value: 1,
														valueCharacteristics: [],
														valueCharacteristicMultiplier: 1,
														valuePerLevel: 0,
														valuePerEchelon: 0
													}
												}
											]
										}
									},
									value: 1
								}
							],
							count: 1,
							selected: [
								{
									id: 'conduit-1-8b',
									name: 'Prayer of Distance',
									description: 'Your god blesses you with the ability to stretch your divine magic farther.',
									type: 'Дальність здібності',
									data: {
										keywords: [
											'Магія',
											'Дальній'
										],
										value: 2,
										valueCharacteristics: [],
										valueCharacteristicMultiplier: 0,
										valuePerLevel: 0,
										valuePerEchelon: 0
									}
								}
							]
						}
					},
					{
						id: 'conduit-1-9',
						name: 'Conduit Ward',
						description: '',
						type: 'Вибір',
						data: {
							options: [
								{
									feature: {
										id: 'conduit-1-9a',
										name: 'Bastion Ward',
										description: 'Your god grants you a holy countenance that protects you at all times. You gain a +1 bonus to saving throws.',
										type: 'Текст',
										data: null
									},
									value: 1
								},
								{
									feature: {
										id: 'conduit-1-9b',
										name: 'Quickness Ward',
										description: 'The gods imbue a divine swiftness within you. Whenever an adjacent creature deals damage to you, you can shift up to a number of squares equal to your Intuition score after the damage is dealt.',
										type: 'Текст',
										data: null
									},
									value: 1
								},
								{
									feature: {
										id: 'conduit-1-9c',
										name: 'Sanctuary Ward',
										description: 'In response to a foe’s aggression, your god protects you. Whenever another creature damages you, that creature can’t target you with a strike until you harm them or one of their allies, or until the end of their next turn.',
										type: 'Текст',
										data: null
									},
									value: 1
								},
								{
									feature: {
										id: 'conduit-1-9d',
										name: 'Spirit Ward',
										description: 'Invisible spirits surround you if you are harmed. Whenever an adjacent creature deals damage to you, they take corruption damage equal to your Intuition score.',
										type: 'Текст',
										data: null
									},
									value: 1
								}
							],
							count: 1,
							selected: [
								{
									id: 'conduit-1-9a',
									name: 'Bastion Ward',
									description: 'Your god grants you a holy countenance that protects you at all times. You gain a +1 bonus to saving throws.',
									type: 'Текст',
									data: null
								}
							]
						}
					},
					{
						id: 'conduit-1-10',
						name: 'Ability',
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
							count: 2,
							selectedIDs: [
								'conduit-ability-1',
								'conduit-ability-2'
							]
						}
					},
					{
						id: 'conduit-1-11',
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
								'conduit-ability-11'
							]
						}
					},
					{
						id: 'conduit-1-12',
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
								'conduit-ability-15'
							]
						}
					}
				]
			},
			{
				level: 2,
				features: [
					{
						id: 'conduit-2-1',
						name: 'The Lists of Heaven',
						description: 'Your deity is aware of your growing influence, making it easier to draw their attention and power when you heal your allies. Whenever you allow another creature to spend a Recovery, you can also spend a Recovery.',
						type: 'Текст',
						data: null
					},
					{
						id: 'conduit-2-2',
						name: 'Crafting / Lore / Supernatural Perk',
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
						id: 'conduit-2-3',
						name: '2nd-Level Domain Feature',
						description: 'You gain the 1st-level domain feature and ability to choose a skill for the domain you selected at 1st level but whose domain feature you didn’t take at that level.',
						type: 'Особливість домену',
						data: {
							level: 1,
							count: 1,
							selected: []
						}
					},
					{
						id: 'conduit-2-4',
						name: '2nd-Level Domain Ability',
						description: '',
						type: 'Особливість домену',
						data: {
							level: 2,
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
						id: 'conduit-3-1',
						name: 'Minor Miracle',
						description: '\nAs a respite activity, you can perform a religious ritual and beseech the gods to restore a dead creature to life. You must have at least half the creature’s remains, and they must have died within the last 24 hours from an effect that isn’t age related. The creature’s soul must be willing to return to life for the ritual to work. If they are not willing, you instinctively understand that as you start the respite activity and can cease it immediately.\n\nA creature with a willing soul returns to life at the end of the respite with full Stamina and half their Recoveries. You regain only half your Recoveries at the end of the respite.',
						type: 'Текст',
						data: null
					},
					{
						id: 'conduit-3-2',
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
						id: 'conduit-4-1',
						name: 'Blessed Domain',
						description: 'Whenever you gain piety from a domain feature, you gain 1 additional piety.',
						type: 'Текст',
						data: null
					},
					{
						id: 'conduit-4-1a',
						name: 'Characteristic Increase: Intuition',
						description: 'Your Intuition score increases to 3.',
						type: 'Бонус характеристики',
						data: {
							characteristic: 'Intuition',
							value: 1
						}
					},
					{
						id: 'conduit-4-1b',
						name: 'Characteristic Increase: Additional',
						description: 'Additionally, you can increase one of your characteristic scores by 1, to a maximum of 3.',
						type: 'Вибір',
						data: {
							options: [
								{
									feature: {
										id: 'conduit-4-1b-1',
										name: 'Ловкість',
										description: '',
										type: 'Бонус характеристики',
										data: {
											characteristic: 'Ловкість',
											value: 1
										}
									},
									value: 1
								},
								{
									feature: {
										id: 'conduit-4-1b-2',
										name: 'Might',
										description: '',
										type: 'Бонус характеристики',
										data: {
											characteristic: 'Might',
											value: 1
										}
									},
									value: 1
								},
								{
									feature: {
										id: 'conduit-4-1b-3',
										name: 'Reason',
										description: '',
										type: 'Бонус характеристики',
										data: {
											characteristic: 'Reason',
											value: 1
										}
									},
									value: 1
								},
								{
									feature: {
										id: 'conduit-4-1b-4',
										name: 'Presence',
										description: '',
										type: 'Бонус характеристики',
										data: {
											characteristic: 'Presence',
											value: 1
										}
									},
									value: 1
								}
							],
							count: 1,
							selected: []
						}
					},
					{
						id: 'conduit-4-2',
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
						id: 'conduit-4-3',
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
						id: 'conduit-4-4',
						name: '4th-Level Domain Feature',
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
						id: 'conduit-5-1',
						name: '5th-Level Domain Feature',
						description: 'You gain the 4th-level domain feature for the domain whose feature you didn’t select at that level.',
						type: 'Особливість домену',
						data: {
							level: 4,
							count: 1,
							selected: []
						}
					},
					{
						id: 'conduit-5-2',
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
						id: 'conduit-6-1',
						name: 'Burgeoning Saint',
						description: '\nYou are infused with the power your deity reserves for their most worthy instruments. You have the following benefits:\n\n* You gain an edge on Presence tests made to interact with other creatures.\n* Whenever you deal damage to an enemy, you can spend a Recovery.\n* You have corruption immunity 10 or holy immunity 10 (your choice).\n* Your clothing and equipment changes in a way that reflects your status as your deity’s chosen champion, such as ordinary robes turning into gold vestments or a simple dagger becoming a wicked blade with intricate etching.',
						type: 'Текст',
						data: null
					},
					{
						id: 'conduit-6-2',
						name: 'Crafting / Lore / Supernatural Perk',
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
						id: 'conduit-6-3',
						name: '6th-Level Domain Ability',
						description: '',
						type: 'Особливість домену',
						data: {
							level: 6,
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
						id: 'conduit-7-1a',
						name: 'Might',
						description: '',
						type: 'Бонус характеристики',
						data: {
							characteristic: 'Might',
							value: 1
						}
					},
					{
						id: 'conduit-7-1b',
						name: 'Ловкість',
						description: '',
						type: 'Бонус характеристики',
						data: {
							characteristic: 'Ловкість',
							value: 1
						}
					},
					{
						id: 'conduit-7-1c',
						name: 'Reason',
						description: '',
						type: 'Бонус характеристики',
						data: {
							characteristic: 'Reason',
							value: 1
						}
					},
					{
						id: 'conduit-7-1d',
						name: 'Intuition',
						description: '',
						type: 'Бонус характеристики',
						data: {
							characteristic: 'Intuition',
							value: 1
						}
					},
					{
						id: 'conduit-7-1e',
						name: 'Presence',
						description: '',
						type: 'Бонус характеристики',
						data: {
							characteristic: 'Presence',
							value: 1
						}
					},
					{
						id: 'conduit-7-2',
						name: 'Faithful’s Reward',
						description: '',
						type: 'Отримання героїчного ресурсу',
						data: {
							tag: 'start 2',
							trigger: 'Start of your turn',
							value: '1d3 + 1',
							replacesTags: []
						}
					},
					{
						id: 'conduit-7-3',
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
						id: 'conduit-7-4',
						name: '7th-Level Domain Feature',
						description: '',
						type: 'Особливість домену',
						data: {
							level: 7,
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
						id: 'conduit-8-1',
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
						id: 'conduit-8-2',
						name: '8th-Level Domain Feature',
						description: 'You gain the 7th-level domain feature for the domain whose feature you didn’t select at that level.',
						type: 'Особливість домену',
						data: {
							level: 7,
							count: 1,
							selected: []
						}
					},
					{
						id: 'conduit-8-3',
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
						id: 'conduit-9-1',
						name: 'Faith’s Sword',
						description: 'Each time you finish a respite, you can choose a willing hero ally who finished the respite with you. That ally gains the benefits of your Burgeoning Saint feature until you finish another respite. Additionally, you can spend piety as a безкоштовний маневр to give the hero 1 of their Heroic Resource for every 2 piety spent.',
						type: 'Текст',
						data: null
					},
					{
						id: 'conduit-9-2',
						name: 'Ordained',
						description: 'Your god elevates the power flowing through you. Your characteristic scores are treated as 1 higher for the purpose of resisting potencies. Additionally, while you have 5 or more Victories, you speak with the voice of your deity. You have a double edge on Presence tests made to influence other creatures.',
						type: 'Текст',
						data: null
					},
					{
						id: 'conduit-9-3',
						name: '9th-Level Domain Ability',
						description: '',
						type: 'Особливість домену',
						data: {
							level: 9,
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
						id: 'conduit-10-1',
						name: 'Avatar',
						description: '\nYou are now an avatar of your god! When you use your Prayer feature, you can be affected by up to three prayers at once, and you can change all those prayers and your ward as a respite activity. You can also use a маневр to activate one of your domain effects without needing to pray.\n\nAdditionally, whenever you take a respite, you can open a portal to rest in the presence of your deity and bring along any allies. When you do, you can ask your deity three questions, which the Director must answer honestly if your deity knows the answers (though they might answer cryptically or incompletely). When you finish your respite, you and your allies can appear at any location in the timescape where someone worships your deity.',
						type: 'Текст',
						data: null
					},
					{
						id: 'conduit-10-2a',
						name: 'Characteristic Increase: Intuition',
						description: 'Your Intuition score increases to 5.',
						type: 'Бонус характеристики',
						data: {
							characteristic: 'Intuition',
							value: 1
						}
					},
					{
						id: 'conduit-10-2b',
						name: 'Characteristic Increase: Additional',
						description: 'Additionally, you can increase one of your characteristic scores by 1, to a maximum of 5.',
						type: 'Вибір',
						data: {
							options: [
								{
									feature: {
										id: 'shadow-10-1b-1',
										name: 'Might',
										description: '',
										type: 'Бонус характеристики',
										data: {
											characteristic: 'Might',
											value: 1
										}
									},
									value: 1
								},
								{
									feature: {
										id: 'shadow-10-1b-2',
										name: 'Ловкість',
										description: '',
										type: 'Бонус характеристики',
										data: {
											characteristic: 'Ловкість',
											value: 1
										}
									},
									value: 1
								},
								{
									feature: {
										id: 'shadow-10-1b-3',
										name: 'Reason',
										description: '',
										type: 'Бонус характеристики',
										data: {
											characteristic: 'Reason',
											value: 1
										}
									},
									value: 1
								},
								{
									feature: {
										id: 'shadow-10-1b-4',
										name: 'Presence',
										description: '',
										type: 'Бонус характеристики',
										data: {
											characteristic: 'Presence',
											value: 1
										}
									},
									value: 1
								}
							],
							count: 1,
							selected: []
						}
					},
					{
						id: 'conduit-10-3',
						name: 'Divine Power',
						description: '\nYou can spend divine power on your abilities as if it were piety.\n\nAdditionally, you can spend divine power as if it were piety to use any conduit abilities you don’t have, as the gods answer your prayers with temporary and unique gifts. If you use a conduit ability you don’t have that usually costs no piety, you must spend 1 divine power to use it.\n\nDivine power remains until you spend it.',
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
						id: 'conduit-10-4',
						name: 'Most Pious',
						description: 'When you roll for piety at the start of your turn in combat and you pray, you gain 1 additional piety.',
						type: 'Текст',
						data: null
					},
					{
						id: 'conduit-10-5',
						name: 'Crafting / Lore / Supernatural Perk',
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
						id: 'conduit-10-6',
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
				id: 'conduit-ability-1',
				name: 'Blessed Light',
				description: 'Burning radiance falls upon your foe, transferring some of their energy to a nearby ally.',
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
				target: 'Одна істота або предмет',
				cost: 'signature',
				repeatable: false,
				minLevel: 1,
				sections: [
					{
						type: 'roll',
						roll: {
							characteristic: [
								'Intuition'
							],
							bonus: 0,
							tier1: '3 + І священної шкоди',
							tier2: '5 + І священної шкоди',
							tier3: '8 + І священної шкоди'
						}
					},
					{
						type: 'Текст',
						text: 'One ally within distance gains a number of surges equal to the tier outcome of your power roll.'
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
				id: 'conduit-ability-2',
				name: 'Drain',
				description: 'You drain the energy from your target and revitalize yourself or an ally.',
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
								'Intuition'
							],
							bonus: 0,
							tier1: '2 + І шкоди від скверни',
							tier2: '5 + І шкоди від скверни',
							tier3: '7 + І шкоди від скверни'
						}
					},
					{
						type: 'Текст',
						text: 'You or one ally within distance can spend a Recovery.'
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
				id: 'conduit-ability-3',
				name: 'Holy Lash',
				description: 'A tendril of divine energy shoots forth to draw in your foe.',
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
				target: 'Одна істота або предмет',
				cost: 'signature',
				repeatable: false,
				minLevel: 1,
				sections: [
					{
						type: 'roll',
						roll: {
							characteristic: [
								'Intuition'
							],
							bonus: 0,
							tier1: '3 + І святої шкоди; вертикально притягнути на 2',
							tier2: '5 + І святої шкоди; вертикально притягнути на 3',
							tier3: '8 + І святої шкоди; вертикально притягнути на 4'
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
				id: 'conduit-ability-4',
				name: 'Lightfall',
				description: 'A rain of holy light scours your enemies and repositions your allies.',
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
				cost: 'signature',
				repeatable: false,
				minLevel: 1,
				sections: [
					{
						type: 'roll',
						roll: {
							characteristic: [
								'Intuition'
							],
							bonus: 0,
							tier1: '2 священної шкоди',
							tier2: '3 священної шкоди',
							tier3: '5 священної шкоди'
						}
					},
					{
						type: 'Текст',
						text: 'You can teleport yourself and each ally in the area to unoccupied spaces in the area.'
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
				id: 'conduit-ability-5',
				name: 'Sacrificial Offer',
				description: 'Divine magic tears at your foe and defends a nearby friend.',
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
								'Intuition'
							],
							bonus: 0,
							tier1: '2 + І шкоди від скверни',
							tier2: '4 + І шкоди від скверни',
							tier3: '6 + І шкоди від скверни'
						}
					},
					{
						type: 'Текст',
						text: 'Choose yourself or one ally within distance. That character can impose a bane on one power roll made against them before the end of their next turn.'
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
				id: 'conduit-ability-6',
				name: 'Staggering Curse',
				description: 'A blast of judgment disorients your foe.',
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
								'Intuition'
							],
							bonus: 0,
							tier1: '3 + І священної шкоди; зсунути на 1',
							tier2: '5 + І священної шкоди; зсунути на 2',
							tier3: '8 + І священної шкоди; зсунути на 3'
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
				id: 'conduit-ability-7',
				name: 'Warrior\'s Prayer',
				description: 'Your quickly uttered prayer lends aggressive divine energy to a friend engaged in melee.',
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
								'Intuition'
							],
							bonus: 0,
							tier1: '3 + І священної шкоди',
							tier2: '6 + І священної шкоди',
							tier3: '9 + І священної шкоди'
						}
					},
					{
						type: 'Текст',
						text: 'You or one ally within distance gains temporary Stamina equal to your Intuition score.'
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
				id: 'conduit-ability-8',
				name: 'Wither',
				description: 'A bolt of holy energy saps the life from a foe.',
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
				target: 'Одна істота або предмет',
				cost: 'signature',
				repeatable: false,
				minLevel: 1,
				sections: [
					{
						type: 'roll',
						roll: {
							characteristic: [
								'Intuition'
							],
							bonus: 0,
							tier1: '3 + І шкоди від скверни; П < [слабкий], ціль отримує шкоду на свій наступний кидок сили',
							tier2: '5 + І шкоди від скверни; П < [середній], ціль отримує шкоду на свій наступний кидок сили',
							tier3: '8 + І шкоди від скверни; П < [сильний], ціль отримує шкоду на свій наступний кидок сили'
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
				id: 'conduit-ability-9',
				name: 'Call the Thunder Down',
				description: 'You ask your saint for thunder and your prayer is answered.',
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
								'Intuition'
							],
							bonus: 0,
							tier1: '2 звукової шкоди; відштовхнути на 1',
							tier2: '3 звукової шкоди; відштовхнути на 2',
							tier3: '5 звукової шкоди; відштовхнути на 3'
						}
					},
					{
						type: 'Текст',
						text: 'You can push each willing ally in the area the same distance, ignoring stability.'
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
				id: 'conduit-ability-10',
				name: 'Font of Wrath',
				description: 'A brilliant column of holy light appears on the battlefield, striking out at nearby enemies.',
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
				target: 'Особливе',
				cost: 3,
				repeatable: false,
				minLevel: 1,
				sections: [
					{
						type: 'Текст',
						text: 'You summon a spirit of size 2 who can’t be harmed, and who appears in an unoccupied space within distance. The spirit lasts until the end of your next turn. You and your allies can move through the spirit’s space, but enemies can’t. Any enemy who moves within 2 squares of the spirit for the first time in a combat round or starts their turn there takes holy damage equal to your Intuition score.'
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
				id: 'conduit-ability-11',
				name: 'Judgment\'s Hammer',
				description: 'Your divine fury is a hammer that crashes down upon the unrighteous.',
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
				target: 'Одна істота або предмет',
				cost: 3,
				repeatable: false,
				minLevel: 1,
				sections: [
					{
						type: 'roll',
						roll: {
							characteristic: [
								'Intuition'
							],
							bonus: 0,
							tier1: '3 + І священної шкоди; Л < [слабкий], розпластаний',
							tier2: '6 + І священної шкоди; Л < [середній], розпластаний',
							tier3: '9 + І священної шкоди; Л < [сильний], розпластаний і не може встати (рят. кидок закінчує)'
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
				id: 'conduit-ability-12',
				name: 'Violence Will Not Aid Thee',
				description: 'After some holy lightning, your enemy will think twice about their next attack.',
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
								'Intuition'
							],
							bonus: 0,
							tier1: '3 + І блискавичної шкоди',
							tier2: '6 + І блискавичної шкоди',
							tier3: '9 + І блискавичної шкоди'
						}
					},
					{
						type: 'Текст',
						text: 'The first time on a turn that the target deals damage to another creature, the target of this ability takes 1d10 lightning damage (save ends).'
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
				id: 'conduit-ability-13',
				name: 'Corruption\'s Curse',
				description: 'Cursed by you, your enemy takes more damage from your allies.',
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
				target: 'Одна істота або предмет',
				cost: 5,
				repeatable: false,
				minLevel: 1,
				sections: [
					{
						type: 'roll',
						roll: {
							characteristic: [
								'Intuition'
							],
							bonus: 0,
							tier1: '3 + І шкоди від скверни; С < [слабкий], шкоди вразливість до шкоди 5 (рят. кидок закінчує)',
							tier2: '6 + І шкоди від скверни; С < [середній], шкоди вразливість до шкоди 5 (рят. кидок закінчує)',
							tier3: '9 + І шкоди від скверни; С < [сильний], шкоди вразливість до шкоди 5 (рят. кидок закінчує)'
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
				id: 'conduit-ability-14',
				name: 'Curse of Terror',
				description: 'Fear of divine judgment overwhelms your foe.',
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
								'Intuition'
							],
							bonus: 0,
							tier1: '6 + І священної шкоди; І < [слабкий], зляканий (рят. кидок закінчує)',
							tier2: '9 + І священної шкоди; І < [середній], зляканий (рят. кидок закінчує)',
							tier3: '13 + І священної шкоди; І < [сильний], зляканий (рят. кидок закінчує)'
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
				id: 'conduit-ability-15',
				name: 'Faith is Our Armor',
				description: 'The heroes’ armor glows with golden light, granting divine protection.',
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
				target: 'Чотири союзники',
				cost: 5,
				repeatable: false,
				minLevel: 1,
				sections: [
					{
						type: 'Текст',
						text: 'You can target yourself instead of one ally with this ability.'
					},
					{
						type: 'roll',
						roll: {
							characteristic: [
								'Intuition'
							],
							bonus: 0,
							tier1: 'Ціль отримує 5 тимчасової Витривалості',
							tier2: 'Ціль отримує 10 тимчасової Витривалості',
							tier3: 'Ціль отримує 15 тимчасової Витривалості'
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
				id: 'conduit-ability-16',
				name: 'Sermon of Grace',
				description: 'You inspire your allies with tales of your saint’s great deeds.',
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
						value: 4,
						value2: 0,
						within: 0,
						special: '',
						qualifier: ''
					}
				],
				target: 'Кожен союзник у зоні',
				cost: 5,
				repeatable: false,
				minLevel: 1,
				sections: [
					{
						type: 'Текст',
						text: 'Each target can spend a Recovery. Additionally, each target can use a безкоштовна тригерна дія to end one effect on them that is ended by a saving throw or that ends at the end of their turn, or to stand up if prone.'
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
				id: 'conduit-ability-17',
				name: 'Fear of the Gods',
				description: 'Your divine magic makes a creature appear as what your enemies fear most.',
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
				cost: 7,
				repeatable: false,
				minLevel: 1,
				sections: [
					{
						type: 'roll',
						roll: {
							characteristic: [
								'Intuition'
							],
							bonus: 0,
							tier1: '6 психічної шкоди; І < [слабкий], зляканий (рят. кидок закінчує)',
							tier2: '9 психічної шкоди; І < [середній], зляканий (рят. кидок закінчує)',
							tier3: '13 психічної шкоди; І < [сильний], зляканий (рят. кидок закінчує)'
						}
					},
					{
						type: 'Текст',
						text: 'Each target is frightened of you or a creature you choose within distance.'
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
				id: 'conduit-ability-18',
				name: 'Saint\'s Raiment',
				description: 'An ally becomes the wearer of an empowered golden cloak.',
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
				cost: 7,
				repeatable: false,
				minLevel: 1,
				sections: [
					{
						type: 'Текст',
						text: 'The target gains 20 temporary Stamina and 3 surges.'
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
				id: 'conduit-ability-19',
				name: 'Soul Siphon',
				description: 'A beam of energy connects a foe to a friend, draining life from one to heal the other.',
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
				target: 'Один ворог',
				cost: 7,
				repeatable: false,
				minLevel: 1,
				sections: [
					{
						type: 'roll',
						roll: {
							characteristic: [
								'Intuition'
							],
							bonus: 0,
							tier1: '7 + І шкоди від скверни',
							tier2: '10 + І шкоди від скверни',
							tier3: '15 + І шкоди від скверни'
						}
					},
					{
						type: 'Текст',
						text: 'One ally within distance can spend any number of Recoveries.'
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
				id: 'conduit-ability-20',
				name: 'Words of Wrath and Grace',
				description: 'Your saint grants your enemies a vision of pain and fills your allies with healing energy.',
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
				cost: 7,
				repeatable: false,
				minLevel: 1,
				sections: [
					{
						type: 'roll',
						roll: {
							characteristic: [
								'Intuition'
							],
							bonus: 0,
							tier1: '2 священної шкоди',
							tier2: '5 священної шкоди',
							tier3: '7 священної шкоди'
						}
					},
					{
						type: 'Текст',
						text: 'Each ally in the area can spend a Recovery.'
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
				id: 'conduit-ability-21',
				name: 'Beacon of Grace',
				description: 'You ignite a foe with holy radiance, rewarding allies who attack them.',
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
				cost: 9,
				repeatable: false,
				minLevel: 1,
				sections: [
					{
						type: 'roll',
						roll: {
							characteristic: [
								'Intuition'
							],
							bonus: 0,
							tier1: '8 + І священної шкоди',
							tier2: '13 + І священної шкоди',
							tier3: '17 + І священної шкоди'
						}
					},
					{
						type: 'Текст',
						text: 'Until the end of the encounter, whenever you or any ally damages the target using an ability, that creature can spend a Recovery. If the target is reduced to 0 Stamina before the end of the encounter, you can use a безкоштовна тригерна дія to move this effect to another creature within distance.'
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
				id: 'conduit-ability-22',
				name: 'Penance',
				description: '“If you won’t kneel, the gods will make you.”',
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
						value: 4,
						value2: 0,
						within: 10,
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
								'Intuition'
							],
							bonus: 0,
							tier1: '4 шкоди від скверни; І < [слабкий], розпластаний і не може встати (рят. кидок закінчує)',
							tier2: '7 шкоди від скверни; І < [середній], розпластаний і не може встати (рят. кидок закінчує)',
							tier3: '11 шкоди від скверни; І < [сильний], розпластаний і не може встати (рят. кидок закінчує)'
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
				id: 'conduit-ability-23',
				name: 'Sanctuary',
				description: 'You send yourself or an ally to a divine manifold to instantaneously regain health.',
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
				cost: 9,
				repeatable: false,
				minLevel: 1,
				sections: [
					{
						type: 'Текст',
						text: 'The target is removed from the encounter map until the start of their next turn and can spend any number of Recoveries. At the start of their turn, the target reappears in the space they left or the nearest unoccupied space of their choice.'
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
				id: 'conduit-ability-24',
				name: 'Vessel of Retribution',
				description: 'You infuse yourself or an ally with the retributive energy of the gods, waiting to be unleashed.',
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
				cost: 9,
				repeatable: false,
				minLevel: 1,
				sections: [
					{
						type: 'Текст',
						text: 'The first time the target is dying or winded before the end of the encounter, each enemy within 5 squares of them takes 15 holy damage.'
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
				id: 'conduit-ability-25',
				name: 'Arise!',
				description: 'Your deity rewards you or an ally on the verge of defeat with a miracle burst of strength and resolve.',
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
				cost: 11,
				repeatable: false,
				minLevel: 1,
				sections: [
					{
						type: 'Текст',
						text: 'The target can spend any number of Recoveries, can end any effects on them that are ended by a saving throw or that end at the end of their turn, and can stand up if they are prone. Additionally, at the start of each of their turns until the end of the encounter or until they are dying, the target gains 3 surges.'
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
				id: 'conduit-ability-26',
				name: 'Blessing of Steel',
				description: 'A protective aura defends your allies from harm.',
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
						value: 5,
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
						text: 'Until the end of the encounter, any ability roll made against a target takes a bane and each target has damage immunity 5.'
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
				id: 'conduit-ability-27',
				name: 'Blessing of the Blade',
				description: '“The power of the gods is within you, friends. Allow me to unleash it.”',
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
						value: 5,
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
						text: 'At the end of each of your turns until the end of the encounter or until you are dying, each target gains 3 surges.'
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
				id: 'conduit-ability-28',
				name: 'Drag the Unworthy',
				description: 'You conjure an angel who moves a foe and heals your allies.',
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
				target: 'Одна істота або предмет',
				cost: 11,
				repeatable: false,
				minLevel: 1,
				sections: [
					{
						type: 'roll',
						roll: {
							characteristic: [
								'Intuition'
							],
							bonus: 0,
							tier1: '9 + І священної шкоди, зсунути на 3',
							tier2: '13 + І священної шкоди, зсунути на 4',
							tier3: '17 + І священної шкоди, зсунути на 6'
						}
					},
					{
						type: 'Текст',
						text: 'Each ally the target comes adjacent to during the forced movement can spend a Recovery.'
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
		subclasses: [],
		level: 1,
		characteristics: [
			{
				characteristic: 'Might',
				value: 1
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
				value: 2
			},
			{
				characteristic: 'Presence',
				value: 2
			}
		]
	},
	career: {
		id: 'career-disciple',
		name: 'Disciple',
		description: 'You worked in a church, temple, or other religious institution as part of the clergy.',
		features: [
			{
				id: 'career-disciple-feature-1',
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
						'Релігія'
					]
				}
			},
			{
				id: 'career-disciple-feature-2',
				name: 'Lore Skills',
				description: '',
				type: 'Вибір навички',
				data: {
					options: [],
					listOptions: [
						'Знання'
					],
					count: 2,
					selected: [
						'Магія',
						'Культура'
					]
				}
			},
			{
				id: 'career-disciple-feature-3',
				name: 'Project Points',
				description: '',
				type: 'Бонус',
				data: {
					field: 'Project Points',
					value: 240,
					valueCharacteristics: [],
					valueCharacteristicMultiplier: 1,
					valuePerLevel: 0,
					valuePerEchelon: 0
				}
			},
			{
				id: 'career-disciple-feature-4',
				name: 'Supernatural Perk',
				description: '',
				type: 'Перевага',
				data: {
					lists: [
						'Надприродне'
					],
					count: 1,
					selected: [
						{
							id: 'perk-ritualist',
							name: 'Ritualist',
							description: 'You can spend 1 uninterrupted minute to perform a magic ritual of blessing, targeting yourself or one willing creature you touch. The target has a double edge on the next test they make within the next minute. A target can’t use this benefit on an activity that takes longer than 1 minute.',
							type: 'Текст',
							data: null,
							list: 'Надприродне'
						}
					]
				}
			}
		],
		incitingIncidents: {
			options: [
				{
					id: 'career-disciple-ii-1',
					name: 'Angel\'s Advocate',
					description: 'Swayed by an evil faith, your cult was about to unleash horrors upon the world when an angel (figurative or literal) intervened. They convinced you to stop your cult’s efforts. Now you follow in the footsteps of the angel who showed you the righteous path.'
				},
				{
					id: 'career-disciple-ii-2',
					name: 'Dogma',
					description: 'Although you joined the religious institution under the guidance of a kind mentor, others within the house of worship became increasingly fanatical in their convictions. Your mentor sought to be a voice of reason in the rising tide of hatred and was tried as a heretic before being executed. Leaving the institution behind, you became a hero to uphold the beliefs you hold dear.'
				},
				{
					id: 'career-disciple-ii-3',
					name: 'Freedom to Worship',
					description: 'Your temple was destroyed in a religious conflict. The institution’s leaders sought retaliation, but you saw in these actions a ceaseless cycle of destruction that would lead to more conflict. Instead, you became a hero to protect religious freedoms, so all worshipers could practice their faith without fear.'
				},
				{
					id: 'career-disciple-ii-4',
					name: 'Lost Faith',
					description: 'You devoted your life to ministering to the sick and needy and other charitable work. Time and time again, tragedy struck those you served without rhyme or reason. Your prayers went unanswered, and your efforts went thankless. Eventually, you lost your faith in a higher power, and you left your church or temple to do good outside of any religious affiliation.'
				},
				{
					id: 'career-disciple-ii-5',
					name: 'Near-Death Experience',
					description: 'While serving at a religious institution, you almost died in an accident. When you woke, you had lost all memory of ever having worked for the church or temple. Though the clergy encouraged you to stay, you left to forge a new path. Your sense of altruism - whether instilled in you by your past work or a part of who you naturally are - guides you in your life.'
				},
				{
					id: 'career-disciple-ii-6',
					name: 'Taxing Times',
					description: 'The faith-based organization you were once part of became corrupt. It used its status in the community to accumulate wealth through tithes and its leaders sought political appointments. During a season of drought, the institution stockpiled resources and refused to give aid, resulting in the deaths of many. You became a hero to fight against such corruption and to honor your dearly departed.'
				}
			],
			selected: {
				id: 'career-disciple-ii-5',
				name: 'Near-Death Experience',
				description: 'While serving at a religious institution, you almost died in an accident. When you woke, you had lost all memory of ever having worked for the church or temple. Though the clergy encouraged you to stay, you left to forge a new path. Your sense of altruism - whether instilled in you by your past work or a part of who you naturally are - guides you in your life.'
			},
			selectedID: 'career-disciple-ii-5'
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
