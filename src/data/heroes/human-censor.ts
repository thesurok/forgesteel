import { Hero } from '@/models/hero';

export const humanCensor = {
	id: 'qrjxZPFJhWdJiZyk',
	name: 'Jennet',
	picture: null,
	folder: '',
	settingIDs: [
		'',
		'orden'
	],
	ancestry: {
		id: 'ancestry-human',
		name: 'Human',
		description: 'Humans belong to the world in a way the other speaking peoples do not. You can sense the presence of the supernatural—that … oily smell in the air, as I’ve heard it described. And the presence of deathless causes the hairs on the back of your neck to stand up. Or why do you think graveyards affect you so? Whatever magic is, its grip on you is light. Whatever drives the deathless, your nature rebels against it.',
		features: [
			{
				id: 'human-feature-1',
				name: 'Detect the Supernatural',
				description: 'You open your awareness to detect supernatural creatures and phenomena.',
				type: 'Здібність',
				data: {
					ability: {
						id: 'human-feature-1',
						name: 'Detect the Supernatural',
						description: 'You open your awareness to detect supernatural creatures and phenomena.',
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
								text: 'Until the end of your next turn, you know the location of any supernatural object, undead, construct, or creature from another world within 5 squares, even if you don’t have line of effect to that object or creature. You know if you’re detecting an item or a creature, and you know the nature of any creature you detect.'
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
				name: 'Human Traits',
				description: '',
				type: 'Вибір',
				data: {
					options: [
						{
							feature: {
								id: 'human-feature-2-1',
								name: 'Can\'t Take Hold',
								description: 'Your connection to the natural world allows you to resist certain supernatural effects. You ignore temporary difficult terrain created by magic and psionic abilities. Additionally, when you are force moved by a magic or psionic ability, you can reduce the forced movement distance by 1.',
								type: 'Текст',
								data: null
							},
							value: 1
						},
						{
							feature: {
								id: 'human-feature-2-2',
								name: 'Perseverence',
								description: 'Giving up is for other people. You gain an edge on tests made using the Endurance skill. Additionally, when you are slowed, your speed is reduced to 3 instead of 2.',
								type: 'Текст',
								data: null
							},
							value: 1
						},
						{
							feature: {
								id: 'human-feature-2-3',
								name: 'Resist the Unnatural',
								description: 'Your instinctive resilience protects you from injuries beyond the routine.',
								type: 'Здібність',
								data: {
									ability: {
										id: 'human-feature-2-3',
										name: 'Resist the Unnatural',
										description: 'Your instinctive resilience protects you from injuries beyond the routine.',
										type: {
											usage: 'Тригерна дія',
											free: false,
											trigger: 'You take damage that isn’t untyped',
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
												text: 'You halve the damage.'
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
								name: 'Determination',
								description: 'A tolerance for pain and dsitress allows you to push through difficult situations.',
								type: 'Здібність',
								data: {
									ability: {
										id: 'human-feature-2-4',
										name: 'Determination',
										description: 'A tolerance for pain and dsitress allows you to push through difficult situations.',
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
												text: 'You immediately end one of the frightened, slowed, or weakened conditions on yourself.'
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
								name: 'Staying Power',
								description: 'Your human physiology allows you to fight, run, and stay awake longer than others.',
								type: 'Бонус',
								data: {
									field: 'Recoveries',
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
							name: 'Resist the Unnatural',
							description: 'Your instinctive resilience protects you from injuries beyond the routine.',
							type: 'Здібність',
							data: {
								ability: {
									id: 'human-feature-2-3',
									name: 'Resist the Unnatural',
									description: 'Your instinctive resilience protects you from injuries beyond the routine.',
									type: {
										usage: 'Тригерна дія',
										free: false,
										trigger: 'You take damage that isn’t untyped',
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
											text: 'You halve the damage.'
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
							name: 'Staying Power',
							description: 'Your human physiology allows you to fight, run, and stay awake longer than others.',
							type: 'Бонус',
							data: {
								field: 'Recoveries',
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
		name: 'Human',
		description: 'Urban, communal, labor.',
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
			name: 'Urban',
			description: 'An urban culture is always centered in a city. Such a culture might arise within the walls of Capital, a massive metropolis with a cosmopolitan population; within a network of caverns that hold an underground city; or in any other place where a large population lives relatively close together. The people of urban cultures often learn to effectively misdirect others in order to navigate the crowds and the political machinations that can come with city life.',
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
			name: 'Communal',
			description: 'A communal culture is a place where all members of the culture are considered equal. The community works together to make important decisions that affect the majority of the culture. While they elect leaders to carry out these decisions and organize their efforts, each person has a relatively equal say in how the culture operates, and everyone contributes to help their people survive and thrive. Individuals often share the burdens of governing, physical labor, childcare, and other duties. A collective of farmers who work together to cultivate and protect their land without a noble, a city of pirates where each person can do as they wish, and a traveling theatrical troupe whose members vote on every artistic and administrative decision are all communal cultures. Many communal cultures operate outside settled lands, sticking to the wilds, a specific district in a larger settlement, city sewers, forgotten ruins, or other isolated places. For even when such cultures are harmless, their members know that outsiders might try to impose rules upon them if they live in the same place. As such, many folks in communal cultures focus on fending for themselves while avoiding the danger that other groups can represent.',
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
			name: 'Labor',
			description: 'Your hero came of age in a culture where people labored for a living. They might have been cultivators, typically raising crops or livestock on a farm. They might have harvested natural resources, whether by hunting, trapping, logging, or mining. Or they might have excelled at manual labor tied to settlement and trade, such as construction, carting, loading cargo, and so forth. People with a labor upbringing know the value of hard work.',
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
		name: 'Censor',
		description: '\nDemons and deathless fear you. Criminals run from the sight of your shadow. Agents of chaos, blasphemers, and heretics tremble at the sound of your voice. You carry the power of the gods, armed with wrath and sent out into the world first to seek, then censor those whose actions—or even existence—are anathema to your church.\n\nAs a censor, you’re at your best against the strongest foes. Your judgment terrifies heretics, stops enemies in their tracks, and even hurls them across the battlefield.',
		type: 'standard',
		subclassName: 'Орден',
		subclassCount: 1,
		primaryCharacteristicsOptions: [
			[
				'Might',
				'Presence'
			]
		],
		primaryCharacteristics: [
			'Might',
			'Presence'
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
						name: 'Recoveries',
						description: '',
						type: 'Бонус',
						data: {
							field: 'Recoveries',
							value: 12,
							valueCharacteristics: [],
							valueCharacteristicMultiplier: 1,
							valuePerLevel: 0,
							valuePerEchelon: 0
						}
					},
					{
						id: 'censor-resource',
						name: 'Wrath',
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
									tag: 'take-damage',
									trigger: 'The first time each round that a creature judged by you deals damage to you',
									value: '1'
								},
								{
									tag: 'deal-damage',
									trigger: 'The first time each round that you deal damage to a creature judged by you',
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
						name: 'Interpersonal / Lore Skills',
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
						name: 'Domain',
						description: '',
						type: 'Домен',
						data: {
							count: 1,
							selected: [
								{
									id: 'domain-war',
									name: 'War',
									description: 'The War domain.',
									featuresByLevel: [
										{
											level: 1,
											features: [
												{
													id: 'domain-war-1',
													name: 'Sanctified Weapon, Exploration Skill',
													description: 'Sanctified Weapon, Exploration Skill',
													type: 'Набір особливостей',
													data: {
														features: [
															{
																id: 'domain-war-1-1',
																name: 'Sanctified Weapon',
																description: 'As a respite activity, you can bless a weapon. Any creature who wields the weapon gains a +1 bonus to rolled damage with abilities that use the weapon. This benefit lasts until you finish another respite.',
																type: 'Текст',
																data: null
															},
															{
																id: 'domain-war-1-2',
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
													id: 'domain-war-2',
													name: 'Blessing of Insight',
													description: 'The gods grant insight revealing where best to strike your enemies.',
													type: 'Здібність',
													data: {
														ability: {
															id: 'domain-war-2',
															name: 'Blessing of Insight',
															description: 'The gods grant insight revealing where best to strike your enemies.',
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
															target: 'Self and each ally',
															cost: 5,
															repeatable: false,
															minLevel: 1,
															sections: [
																{
																	type: 'Текст',
																	text: 'Until the end of the encounter or until you are dying, each target gains 1 surge at the end of each of your turns.'
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
													name: 'Improved Sanctified Weapon',
													description: 'The weapon improved by your Sanctified Weapon feature grants a +3 bonus to rolled damage instead of +1.',
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
													name: 'Blade of the Heavens',
													description: 'A greatsword streams down from the sky, threatening to pin your foe.',
													type: 'Здібність',
													data: {
														ability: {
															id: 'domain-war-6',
															name: 'Blade of the Heavens',
															description: 'A greatsword streams down from the sky, threatening to pin your foe.',
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
																			'Intuition'
																		],
																		bonus: 0,
																		tier1: '8 + І шкоди; Л < [слабкий], розпластаний і скутий (рят. кидок закінчує)',
																		tier2: '12 + І шкоди; Л < [середній], розпластаний і скутий (рят. кидок закінчує)',
																		tier3: '16 + І шкоди; Л < [сильний], розпластаний і скутий (рят. кидок закінчує)'
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
													name: 'Your Triumphs Are Remembered',
													description: 'The gods allow you and your companions to bask in the glory of past successes. Whenever you finish a respite, you and any other heroes who rested with you regain 1 Victory after your Victories are converted to XP. This Victory isn’t converted into XP at the end of a subsequent respite.',
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
													name: 'Righteous Phalanx',
													description: 'A wall of spinning swords and knives appears where you wish.',
													type: 'Здібність',
													data: {
														ability: {
															id: 'domain-war-9',
															name: 'Righteous Phalanx',
															description: 'A wall of spinning swords and knives appears where you wish.',
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
																	type: 'Wall',
																	value: 15,
																	value2: 0,
																	within: 10,
																	special: '',
																	qualifier: ''
																}
															],
															target: 'Особливе',
															cost: 11,
															repeatable: false,
															minLevel: 1,
															sections: [
																{
																	type: 'Текст',
																	text: 'The wall lasts until the end of the encounter or until you are dying, and can be placed in occupied squares. Creatures can enter and pass through the wall. Each enemy who enters the area for the first time in a combat round or starts their turn there takes 15 damage.'
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
											trigger: 'The first time in an encounter that you or a creature within 10 squares takes damage greater than 10 + your level in a single turn.',
											value: '2'
										}
									],
									defaultFeatures: [
										{
											id: 'war-default-1',
											name: 'War Prayer Effect',
											description: 'Choose up to three allies within 10 squares of you, or choose yourself instead of one ally. Each target gains 2 surges.',
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
						name: 'Judgment',
						description: 'You utter a prayer that outlines your foe in holy energy.',
						type: 'Здібність',
						data: {
							ability: {
								id: 'censor-1-4',
								name: 'Judgment',
								description: 'You utter a prayer that outlines your foe in holy energy.',
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
										text: 'The target is judged by you until the end of the encounter, you use this ability again, you willingly end this effect (no action required), or another censor judges the target.\n\nWhenever a creature judged by you uses a основна дія and is within your line of effect, you can use a безкоштовна тригерна дія to deal holy damage equal to twice your Presence score to them.\n\nWhen a creature judged by you is reduced to 0 Stamina, you can use a безкоштовна тригерна дія to use this ability against a new target.\n\nAdditionally, you can spend 1 wrath to take one of the following безкоштовні тригерні дії:\n\n* When an adjacent creature judged by you starts to shift, you make a melee free strike against them and their speed becomes 0 until the end of the current turn, preventing them from shifting.\n* When a creature judged by you within 10 squares makes a power roll, you cause them to take a bane on the roll.\n* When a creature judged by you within 10 squares uses an ability with a potency that targets only one creature, the potency is reduced by 1 for that creature.\n* If you damage a creature judged by you with a melee ability, the creature is taunted by you until the end of their next turn.\n\nYou can choose only one безкоштовна тригерна дія option at a time, even if multiple options are triggered by the same effect.'
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
											name: 'Pain For Pain',
											description: 'An enemy who tagged you will pay for that.',
											type: 'Здібність',
											data: {
												ability: {
													id: 'kit-mountain-signature',
													name: 'Pain For Pain',
													description: 'An enemy who tagged you will pay for that.',
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
															text: 'If the target dealt damage to you since the end of your last turn, this strike deals additional damage equal to your Might or Agility score (your choice).'
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
						name: 'My Life for Yours',
						description: 'You channel some of your vitality into more resilience for you or an ally.',
						type: 'Здібність',
						data: {
							ability: {
								id: 'censor-1-6',
								name: 'My Life for Yours',
								description: 'You channel some of your vitality into more resilience for you or an ally.',
								type: {
									usage: 'Тригерна дія',
									free: false,
									trigger: 'The target starts their turn or takes damage.',
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
										text: 'You spend a Recovery and the target regains Stamina equal to your Recovery value.'
									},
									{
										type: 'field',
										name: 'Spend',
										value: 1,
										repeatable: false,
										effect: 'You can end one effect on the target that is ended by a saving throw or that ends at the end of their turn, or a prone target can stand up.'
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
						name: 'Domain Feature Choice',
						description: '',
						type: 'Особливість домену',
						data: {
							level: 1,
							count: 1,
							selected: [
								{
									id: 'domain-war-1',
									name: 'Sanctified Weapon, Exploration Skill',
									description: 'Sanctified Weapon, Exploration Skill',
									type: 'Набір особливостей',
									data: {
										features: [
											{
												id: 'domain-war-1-1',
												name: 'Sanctified Weapon',
												description: 'As a respite activity, you can bless a weapon. Any creature who wields the weapon gains a +1 bonus to rolled damage with abilities that use the weapon. This benefit lasts until you finish another respite.',
												type: 'Текст',
												data: null
											},
											{
												id: 'domain-war-1-2',
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
							count: 1,
							selectedIDs: [
								'censor-ability-4'
							]
						}
					},
					{
						id: 'censor-1-9',
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
								'censor-ability-7'
							]
						}
					},
					{
						id: 'censor-1-10',
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
						name: 'Interpersonal / Lore / Supernatural Perk',
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
						name: 'Look On My Work and Despair',
						description: 'Your judgment has grown in divine power, instilling fear in those you condemn. Whenever you use your Judgment ability, you can spend 1 wrath, and if the target has П < [середній] , they are frightened of you (save ends). Additionally, whenever a creature judged by you is reduced to 0 Stamina and you use Judgment as a безкоштовна тригерна дія, if the new target has П < [сильний], they are frightened of you (save ends). If the target is already frightened of you, they instead take holy damage equal to twice your Presence score.',
						type: 'Текст',
						data: null
					},
					{
						id: 'censor-3-2',
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
						name: 'Wrath Beyond Wrath',
						description: '',
						type: 'Отримання героїчного ресурсу',
						data: {
							tag: 'deal-damage 2',
							trigger: 'The first time each round that you deal damage to a creature judged by you',
							value: '2',
							replacesTags: [
								'deal-damage'
							]
						}
					},
					{
						id: 'censor-4-5',
						name: 'Domain Feature Choice',
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
						name: 'Implement of Wrath',
						description: 'Each time you finish a respite, you can choose one hero’s weapon, including your own, to channel supernatural power as an implement of your god’s wrath. The weapon becomes magic and gains the following benefits until your next respite:\n\n* Strikes with the weapon deal extra holy damage equal to the wielder’s highest characteristic score.\n* Any creature struck by the weapon who has holy weakness and has П < [сильний] is frightened and weakened (save ends).\n* Any minion targeted by a strike using the weapon dies. That minion’s Stamina maximum is removed from the minion Stamina pool before any damage is applied to the rest of the squad.\n* The weapon’s wielder can’t be made frightened.',
						type: 'Текст',
						data: null
					},
					{
						id: 'censor-6-2',
						name: 'Interpersonal / Lore / Supernatural Perk',
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
						name: 'Domain Feature Choice',
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
						name: 'Focused Wrath',
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
						id: 'censor-8-1',
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
						id: 'censor-8-2',
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
						id: 'censor-9-1',
						name: 'Improved Implement of Wrath',
						description: 'The weapon you target with your Implement of Wrath feature gains the following additional benefits:\n\n* The weapon’s wielder and each ally adjacent to them gain a +2 bonus to saving throws.\n* At the end of each of the weapon wielder’s turns, each ally adjacent to the wielder makes a saving throw against each effect on them that is ended by a saving throw.\n* The weapon’s wielder has corruption immunity 10.',
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
						id: 'censor-10-3',
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
						id: 'censor-10-4',
						name: 'Templar',
						description: 'You are the ultimate representation of your god’s justice in the timescape. Whenever you use your Judgment ability, you can use a безкоштовна тригерна дія to use a conduit domain effect associated with your chosen domain, or a domain you access with virtue. If the effect calls for the use of your Intuition score, you use your Presence score instead. If the effect uses your conduit level, use your censor level instead.\n\nAdditionally, whenever you take a respite, you can open a portal to rest in the presence of your deity and bring along any allies. When you do, you can ask your deity three questions, which the Director must answer honestly if your deity knows the answers (though they might answer cryptically or incompletely). When you finish your respite, you and your allies can appear at any location in the timescape where someone worships your deity.\n\nWhile you rest in their presence, your god might also give you priority targets to enact justice upon. You and your allies each have a double edge on power rolls made against such targets. If you attempt to open a portal to your deity again before you have defeated your priority targets, you suffer your god’s wrath, as determined by the Director.\t \n  \n  \t\t\t\t',
						type: 'Текст',
						data: null
					},
					{
						id: 'censor-10-5',
						name: 'Virtue',
						description: '\nYou can spend 3 virtue to access one of your deity’s domains that you usually don’t have access to. When you do, you can use that domain’s features until you finish another respite.\n\nVirtue remains until you spend it.',
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
						name: 'Wrath of the Gods',
						description: '',
						type: 'Отримання героїчного ресурсу',
						data: {
							tag: 'start 3',
							trigger: 'Start of your turn',
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
				name: 'Back, Blasphemer!',
				description: 'You channel power through your weapon to repel foes.',
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
				name: 'Every Step ... Death!',
				description: 'You show your foe a glimpse of their fate after death.',
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
						text: 'Each time the target willingly moves before the end of your next turn, they take 1 psychic damage for each square they move.'
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
				name: 'Halt, Miscreant!',
				description: 'You infuse your weapon with holy magic that makes it difficult for your foe to get away.',
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
				name: 'Your Allies Cannot Save You!',
				description: 'Your magic strike turns your foe’s guilt into a burst of holy power',
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
						text: 'Each enemy adjacent to the target is pushed away from the target up to a number of squares equal to your Presence score.'
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
				name: 'Behold, a Shield of Faith!',
				description: 'A mighty blow turns your foe’s vitality into a holy light that envelops you and an ally, discouraging enemies who might attack you.',
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
						text: 'Until the start of your next turn, enemies have a bane on ability rolls made against you and each ally adjacent to you.'
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
				name: 'Driving Assault',
				description: 'As you force your enemy back with your weapon, you use your faith to stay close.',
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
						text: 'You can shift up to your speed in a straight line toward the target after pushing them.'
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
				name: 'The Gods Punish and Defend',
				description: 'You channel holy energy to smite a foe and heal an ally.',
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
						text: 'You can spend a Recovery to allow yourself or one ally within 10 squares to regain Stamina equal to your recovery value.'
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
				name: 'Repent!',
				description: 'You conjure memories of their sins to harry your foes.',
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
				name: 'Arrest',
				description: '“I got you, you son of a bitch.”',
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
						text: 'If the target makes a strike against a creature while grabbed this way, you can spend 3 wrath to deal holy damage to them equal to your Presence score, then change the target of the strike to another target within the strike’s distance.'
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
				name: 'Behold the Face of Justice!',
				description: 'You attack a foe and your enemies behold a vision of the true nature of your resolve.',
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
						text: 'Each enemy frightened by this ability is pushed 2 squares away from the target and takes psychic damage equal to your Presence score.'
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
				name: 'Censored',
				description: 'Judged and sentenced.',
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
						text: 'When a target who is not a leader or solo creature is made winded by this ability, they are reduced to 0 Stamina.'
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
				name: 'Purifying Fire',
				description: 'The gods judge, fire cleanses.',
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
						text: 'While the target has fire weakness from this ability, you can choose to have your abilities deal fire damage to the target instead of holy damage.'
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
				name: 'Edict of Disruptive Isolation',
				description: 'The evil within your foes detonates with holy fire that burns only the guilty.',
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
						text: 'Until the end of the encounter or until you are dying, each target takes holy damage equal to your Presence score at the end of each of your turns. A target takes an extra 2d6 holy damage if they are judged by you or if they are adjacent to any enemy.'
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
} as Hero;
