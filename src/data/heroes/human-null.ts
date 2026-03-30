import { Hero } from '@/models/hero';

export const humanNull = {
	id: '75cnGojH6jMwHJQq',
	name: 'Ashley',
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
						{
							id: 'human-feature-2-2',
							name: 'Perseverence',
							description: 'Giving up is for other people. You gain an edge on tests made using the Endurance skill. Additionally, when you are slowed, your speed is reduced to 3 instead of 2.',
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
		id: 'culture-bespoke-culture',
		name: 'Bespoke Culture',
		description: 'Choose any Environment, Organization, and Upbringing.',
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
			id: 'env-secluded',
			name: 'Secluded',
			description: 'A secluded culture is based in one relatively close-quarters structure—a building, a cavern, and so forth—and interacts with other cultures only rarely. Such places are often buildings or complexes such as monasteries, castles, or prisons. Folk in a secluded culture have little or no reason to leave their home or interact with other cultures on the outside, but might have an awareness of those cultures and of events happening beyond their enclave. When people live together in close quarters, they typically learn to get along. They often spend much time in study or introspection, as there is not much else to do in seclusion.',
			type: 'Вибір навички',
			data: {
				options: [],
				listOptions: [
					'Міжособистісні',
					'Знання'
				],
				count: 1,
				selected: [
					'Емпатія'
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
					'Зчитування людини'
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
		id: 'class-null',
		name: 'Null',
		description: '\nThe mind is not separate from the body. Perfection of one requires perfection of the other. You strive for perfect discipline, perfect order, mastery over mind and body becoming an unarmed psionic warrior who dampens and absorbs magic and psionics. You require no weapons, no tools. You suffice.\n\nAs a null, you resist the supernatural forces of the universe with composure and confidence. As you strive for perfect order, you are an enemy of the ultimate expression of chaos: the supernatural. Those who break the laws of nature using sorcery or psionics should fear you.\n\n"Any weapon can be turned against the hand that wields it." - Ardashir',
		type: 'standard',
		subclassName: 'Традиція',
		subclassCount: 1,
		primaryCharacteristicsOptions: [
			[
				'Ловкість',
				'Intuition'
			]
		],
		primaryCharacteristics: [
			'Ловкість',
			'Intuition'
		],
		featuresByLevel: [
			{
				level: 1,
				features: [
					{
						id: 'null-stamina',
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
						id: 'null-recoveries',
						name: 'Recoveries',
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
						id: 'null-resource',
						name: 'Discipline',
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
									tag: 'action',
									trigger: 'The first time each combat round that an enemy in the area of your Нульове Поле ability uses a основна дія',
									value: '1'
								},
								{
									tag: 'malice',
									trigger: 'The first time each combat round that the Director uses an ability that costs Malice',
									value: '1'
								}
							],
							details: '',
							canBeNegative: false,
							value: 0
						}
					},
					{
						id: 'null-1-1',
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
								'Псіоніка'
							]
						}
					},
					{
						id: 'null-1-2',
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
								'Переконання',
								'Таймскейп'
							]
						}
					},
					{
						id: 'null-1-4',
						name: 'Нульове Поле',
						description: 'You project an aura that dampens the power of your foes.',
						type: 'Здібність',
						data: {
							ability: {
								id: 'null-1-4',
								name: 'Нульове Поле',
								description: 'You project an aura that dampens the power of your foes.',
								type: {
									usage: 'Маневр',
									free: false,
									trigger: '',
									time: '',
									qualifiers: [],
									freeStrike: false
								},
								keywords: [
									'Psionic'
								],
								distance: [
									{
										type: 'Aura',
										value: 1,
										value2: 0,
										within: 0,
										special: '',
										qualifier: ''
									}
								],
								target: 'All enemies',
								cost: 0,
								repeatable: false,
								minLevel: 1,
								sections: [
									{
										type: 'Текст',
										text: '\nEach target reduces their potencies by 1.\n\nOnce as a безкоштовний маневр on each of your turns, you can spend 1 discipline and give your Нульове Поле one of the following additional effects until the start of your next turn:\n* **Gravitic Disruption**: The first time on a turn that a target takes damage, you can slide them up to 2 squares.\n* **Inertial Anchor**: Any target who starts their turn in the area can\'t shift.\n* **Synaptic Break**: Whenever you or any ally uses an ability against a target that has a potency effect, the potency is increased by 1.\n\nThis ability remains active even after an encounter ends. It ends only if you are dying or if you willingly end it (no action required)'
									},
									{
										type: 'Пакет',
										tag: 'null-field'
									}
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
						id: 'null-1-5',
						name: 'Inertial Shield',
						description: 'You intuit the course of an incoming attack, reducing its effects.',
						type: 'Здібність',
						data: {
							ability: {
								id: 'null-1-5',
								name: 'Inertial Shield',
								description: 'You intuit the course of an incoming attack, reducing its effects.',
								type: {
									usage: 'Тригерна дія',
									free: false,
									trigger: 'You take damage.',
									time: '',
									qualifiers: [],
									freeStrike: false
								},
								keywords: [
									'Psionic'
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
										text: 'You halve the damage.'
									},
									{
										type: 'field',
										name: 'Spend',
										value: 1,
										repeatable: false,
										effect: 'The potency of one effect associated with the damage is reduced by 1 for you.'
									},
									{
										type: 'Пакет',
										tag: 'inertial-shield'
									}
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
						id: 'null-1-6',
						name: 'Null Speed',
						description: 'The flow of psionic power through you allows you to achieve high velocity.',
						type: 'Набір особливостей',
						data: {
							features: [
								{
									id: 'null-1-6a',
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
								},
								{
									id: 'null-1-6b',
									name: 'Відступ',
									description: '',
									type: 'Бонус',
									data: {
										field: 'Відступ',
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
						id: 'null-1-7',
						name: 'Psionic Augmentation',
						description: 'Your training has turned your body into the perfect psionic weapon, shaping pathways in your mind that enhance your physical form. Choose one of the following augmentations. You can change your augmentation by undergoing a psionic meditation as a respite activity.',
						type: 'Вибір',
						data: {
							options: [
								{
									feature: {
										id: 'null-1-7a',
										name: 'Density Augmentation',
										description: 'Stability, Stamina',
										type: 'Набір особливостей',
										data: {
											features: [
												{
													id: 'null-1-7aa',
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
												},
												{
													id: 'null-1-7ab',
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
												}
											]
										}
									},
									value: 1
								},
								{
									feature: {
										id: 'null-1-7b',
										name: 'Force Augmentation',
										description: '',
										type: 'Шкода здібності',
										data: {
											keywords: [
												'Psionic'
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
										id: 'null-1-7c',
										name: 'Speed Augmentation',
										description: 'Speed, Disengage',
										type: 'Набір особливостей',
										data: {
											features: [
												{
													id: 'null-1-7ca',
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
													id: 'null-1-7cb',
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
								}
							],
							count: 1,
							selected: [
								{
									id: 'null-1-7a',
									name: 'Density Augmentation',
									description: 'Stability, Stamina',
									type: 'Набір особливостей',
									data: {
										features: [
											{
												id: 'null-1-7aa',
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
											},
											{
												id: 'null-1-7ab',
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
											}
										]
									}
								}
							]
						}
					},
					{
						id: 'null-1-8',
						name: 'Psionic Martial Arts',
						description: 'Whenever you use the Knockback or Grab маневр, you use Intuition instead of Might for the power roll and for determining if you can target creatures larger than you. Additionally, whenever you use the Knockback маневр, you can choose to slide the target instead of pushing them.',
						type: 'Текст',
						data: null
					},
					{
						id: 'null-1-9',
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
								'null-ability-2',
								'null-ability-3'
							]
						}
					},
					{
						id: 'null-1-10',
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
								'null-ability-12'
							]
						}
					},
					{
						id: 'null-1-11',
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
								'null-ability-16'
							]
						}
					}
				]
			},
			{
				level: 2,
				features: [
					{
						id: 'null-2-1',
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
				level: 3,
				features: [
					{
						id: 'null-3-1',
						name: 'Psionic Leap',
						description: 'You can long jump and high jump a distance equal to twice your Agility score without needing to make a test.',
						type: 'Текст',
						data: null
					},
					{
						id: 'null-3-2',
						name: 'Reorder',
						description: '',
						type: 'Здібність',
						data: {
							ability: {
								id: 'null-3-2',
								name: 'Reorder',
								description: '',
								type: {
									usage: 'Тригерна дія',
									free: true,
									trigger: 'You start your turn.',
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
										text: 'End one effect on you that is ended by a saving throw or that ends at the end of your turn. Alternatively, you can grant this benefit to one creature in the area of your Нульове Поле ability.'
									}
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
						id: 'null-3-3',
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
						id: 'null-4-1a',
						name: 'Ловкість',
						description: '',
						type: 'Бонус характеристики',
						data: {
							characteristic: 'Ловкість',
							value: 1
						}
					},
					{
						id: 'null-4-1b',
						name: 'Intuition',
						description: '',
						type: 'Бонус характеристики',
						data: {
							characteristic: 'Intuition',
							value: 1
						}
					},
					{
						id: 'null-4-2',
						name: 'Enhanced Нульове Поле',
						description: 'During combat, any temporary supernatural terrain effects of your level or lower are removed when your aura partially or fully overlaps with their location. Permanent supernatural terrain effects of your level or lower are temporarily negated while your aura overlaps with their location, but return when the aura no longer overlaps with them.',
						type: 'Вміст пакета',
						data: {
							tag: 'null-field'
						}
					},
					{
						id: 'null-4-3',
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
						id: 'null-4-4',
						name: 'Regenerative Field',
						description: '',
						type: 'Отримання героїчного ресурсу',
						data: {
							tag: 'action 2',
							trigger: 'The first time each combat round that an enemy in the area of your Нульове Поле ability uses a основна дія',
							value: '2',
							replacesTags: [
								'action'
							]
						}
					},
					{
						id: 'null-4-5',
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
						id: 'null-5-1',
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
						id: 'null-6-1',
						name: 'Elemental Absorption',
						description: 'Whenever you use your Inertial Shield тригерна дія, you gain immunity to acid, cold, corruption, fire, lightning, poison, and sonic damage equal to your Intuition score against the triggering damage.',
						type: 'Вміст пакета',
						data: {
							tag: 'inertial-shield'
						}
					},
					{
						id: 'null-6-2',
						name: 'Elemental Buffer',
						description: 'Whenever you reduce acid, cold, corruption, fire, lightning, poison, or sonic damage with damage immunity, you gain 2 surges that can be used only to increase the damage of your next strike.',
						type: 'Текст',
						data: null
					},
					{
						id: 'null-6-3',
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
						id: 'null-7-1a',
						name: 'Might',
						description: '',
						type: 'Бонус характеристики',
						data: {
							characteristic: 'Might',
							value: 1
						}
					},
					{
						id: 'null-7-1b',
						name: 'Ловкість',
						description: '',
						type: 'Бонус характеристики',
						data: {
							characteristic: 'Ловкість',
							value: 1
						}
					},
					{
						id: 'null-7-1c',
						name: 'Reason',
						description: '',
						type: 'Бонус характеристики',
						data: {
							characteristic: 'Reason',
							value: 1
						}
					},
					{
						id: 'null-7-1d',
						name: 'Intuition',
						description: '',
						type: 'Бонус характеристики',
						data: {
							characteristic: 'Intuition',
							value: 1
						}
					},
					{
						id: 'null-7-1e',
						name: 'Presence',
						description: '',
						type: 'Бонус характеристики',
						data: {
							characteristic: 'Presence',
							value: 1
						}
					},
					{
						id: 'null-7-2',
						name: 'Psi Boost',
						description: '\nWhenever you use an ability that is a основна дія or a маневр with the Psionic keyword, you can spend additional discipline to apply a psi boost to it and enhance its effects. A psi boost’s effects only last until the end of the turn which the ability is first used. You can apply multiple psi boosts to an ability, but only one instance of each specific boost. You can use the following psi boosts.\n\n**Dynamic Power** (1 Discipline) If the ability force moves a target, the forced movement distance gains a bonus equal to your Intuition score.\n**Expanded Power** (3 Discipline) If the ability targets an area, you increase the size of the area by 1. If the area is a line, you increase the size of one dimension, not both.\n**Extended Power** (1 Discipline) If the ability is ranged, the distance gains a bonus equal to your Intuition score. If the ability is melee, the distance gains a +2 bonus.\n**Heightened Power** (1 Discipline) If the ability deals rolled damage, it deals extra damage equal to your Intuition score.\n**Magnified Power** (5 Discipline) If the ability has a potency, you increase that potency by an amount equal to your Intuition score.\n**Shared Power** (5 Discipline) If the ability targets individual creatures or objects, you target one additional creature or object within distance.\n**Sharpened Power** (1 Discipline) If the ability has any power roll, that roll gains an edge.',
						type: 'Текст',
						data: null
					},
					{
						id: 'null-7-3',
						name: 'Improved Body',
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
						id: 'null-7-4',
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
						id: 'null-8-1',
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
						id: 'null-8-2',
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
						id: 'null-9-1a',
						name: 'I Am the Weapon',
						description: '',
						type: 'Бонус',
						data: {
							field: 'Витривалість',
							value: 21,
							valueCharacteristics: [],
							valueCharacteristicMultiplier: 1,
							valuePerLevel: 0,
							valuePerEchelon: 0
						}
					},
					{
						id: 'null-9-1b',
						name: 'I Am the Weapon',
						description: '',
						type: 'Імунітет до станів',
						data: {
							conditions: [
								'Bleeding'
							]
						}
					}
				]
			},
			{
				level: 10,
				features: [
					{
						id: 'null-10-1a',
						name: 'Ловкість',
						description: '',
						type: 'Бонус характеристики',
						data: {
							characteristic: 'Ловкість',
							value: 1
						}
					},
					{
						id: 'null-10-1b',
						name: 'Intuition',
						description: '',
						type: 'Бонус характеристики',
						data: {
							characteristic: 'Intuition',
							value: 1
						}
					},
					{
						id: 'null-10-2',
						name: 'Manifold Body',
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
					},
					{
						id: 'null-10-3',
						name: 'Manifold Resonance',
						description: '\nYour body becomes perfected matter, beyond the whims and chaos of the timescape and the restrictions of the manifolds. Each time you finish a respite, you can shift yourself and any creatures in the area of your Нульове Поле ability to any location in the timescape known to you, known to any other creature in the area, or where any supernatural treasure in the area has been before.\n\nWhenever you use an ability, you gain 1 discipline that can be used only to apply a benefit from your Psi Boost feature to that ability.\n\nAdditionally, you and allies in the area of your Нульове Поле ability ignore banes and double banes on your power rolls.',
						type: 'Текст',
						data: null
					},
					{
						id: 'null-10-4',
						name: 'Order',
						description: '\nYou have an epic resource called order. Each time you finish a respite, you gain order equal to the XP you gain. You can spend order on your abilities as if it were discipline. At the start of a combat encounter, you can spend 1 order to increase the size of your Нульове Поле by 1 until the end of the encounter. Order remains until you spend it',
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
						id: 'null-10-5',
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
						id: 'null-10-6',
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
				id: 'null-ability-1',
				name: 'Dance of Blows',
				description: 'You strike everywhere at once, tricking an enemy into moving out of position.',
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
					'Psionic',
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
							tier1: '3 шкоди',
							tier2: '4 шкоди',
							tier3: '5 шкоди'
						}
					},
					{
						type: 'Текст',
						text: 'You can slide one adjacent enemy up to a number of squares equal to your Intuition score.'
					}
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
				id: 'null-ability-2',
				name: 'Faster than the Eye',
				description: 'You strike so quickly that your hands become a blur.',
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
					'Psionic',
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
							tier1: '4 шкоди',
							tier2: '5 шкоди',
							tier3: '7 шкоди'
						}
					},
					{
						type: 'Текст',
						text: 'You can deal damage equal to your Agility score to one creature or object adjacent to you.'
					}
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
				id: 'null-ability-3',
				name: 'Inertial Step',
				description: 'You flit about the battlefield and take an opportunistic strike.',
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
					'Psionic',
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
								'Ловкість'
							],
							bonus: 0,
							tier1: '5 + Л шкоди',
							tier2: '7 + Л шкоди',
							tier3: '10 + Л шкоди'
						}
					},
					{
						type: 'Текст',
						text: 'You can shift up to half your speed before or after you make the strike.'
					}
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
				id: 'null-ability-4',
				name: 'Joint Lock',
				description: 'You contort your enemy’s body into a stance they struggle to escape from.',
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
					'Psionic',
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
								'Ловкість'
							],
							bonus: 0,
							tier1: '4 + Л шкоди; Л < [слабкий], схоплений',
							tier2: '7 + Л шкоди; Л < [середній], схоплений',
							tier3: '9 + Л шкоди; Л < [сильний], схоплений'
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
				id: 'null-ability-5',
				name: 'Kinetic Strike',
				description: 'Your opponent staggers. They cannot ignore you.',
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
					'Psionic',
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
								'Ловкість'
							],
							bonus: 0,
							tier1: '4 + Л шкоди; спровокований (до кінця ходу)',
							tier2: '5 + Л шкоди; спровокований (до кінця ходу); зсунути на 1',
							tier3: '6 + Л шкоди; спровокований (до кінця ходу); зсунути на 2'
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
				id: 'null-ability-6',
				name: 'Magnetic Strike',
				description: 'The force of your blow extends past the limits of your body, pulling your enemy closer.',
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
					'Psionic',
					'Удар',
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
				target: 'Одна істота',
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
							tier1: '5 + Л психічної шкоди; вертикально притягнути на 1',
							tier2: '8 + Л психічної шкоди; вертикально притягнути на 2',
							tier3: '11 + Л психічної шкоди; вертикально притягнути на 3'
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
				id: 'null-ability-7',
				name: 'Phase Inversion Strike',
				description: 'You step momentarily out of phase as you pull an enemy through you.',
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
					'Psionic',
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
								'Ловкість'
							],
							bonus: 0,
							tier1: '4 + Л шкоди; відштовхнути на 2',
							tier2: '6 + Л шкоди; відштовхнути на 4',
							tier3: '8 + Л шкоди; відштовхнути на 6'
						}
					},
					{
						type: 'Текст',
						text: 'Before the push is resolved, you teleport the target to a square adjacent to you and opposite the one they started in. If the target can’t be teleported this way, you can’t push them.'
					}
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
				id: 'null-ability-8',
				name: 'Pressure Points',
				description: 'You strike at key nerve clusters to leave your foe staggered.',
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
					'Psionic',
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
								'Ловкість'
							],
							bonus: 0,
							tier1: '4 + Л шкоди; Л < [слабкий], ослаблений (рят. кидок закінчує)',
							tier2: '7 + Л шкоди; Л < [середній], ослаблений (рят. кидок закінчує)',
							tier3: '9 + Л шкоди; Л < [сильний], ослаблений (рят. кидок закінчує)'
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
				id: 'null-ability-9',
				name: 'Chronal Spike',
				description: 'You foresee the best moment to strike, then exploit it.',
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
					'Psionic',
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
								'Ловкість'
							],
							bonus: 0,
							tier1: '7 + Л шкоди',
							tier2: '10 + Л шкоди',
							tier3: '13 + Л шкоди'
						}
					},
					{
						type: 'Текст',
						text: 'You can shift up to half your speed before or after you make this strike. Additionally, whenever an effect lets you make a free strike or use a signature ability, you can use this ability instead, paying its discipline cost as usual.'
					}
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
				id: 'null-ability-10',
				name: 'Psychic Pulse',
				description: 'A burst of psionic energy interferes with your enemy’s synapses.',
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
					'Psionic'
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
						type: 'Текст',
						text: 'Each target takes psychic damage equal to twice your Intuition score. Until the start of your next turn, the size of your Нульове Поле ability increases by 1. At the end of your current turn, each enemy in the area of your Нульове Поле ability takes psychic damage equal to your Intuition score.'
					}
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
				id: 'null-ability-11',
				name: 'Relentless Nemesis',
				description: 'You strike, and for the next few moments, your enemy can’t escape you.',
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
					'Psionic',
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
								'Ловкість'
							],
							bonus: 0,
							tier1: '6 + Л шкоди',
							tier2: '8 + Л шкоди',
							tier3: '12 + Л шкоди'
						}
					},
					{
						type: 'Текст',
						text: 'Until the start of your next turn, whenever the target moves or is force moved, you can use a безкоштовна тригерна дія to shift up to your speed. You must end this shift adjacent to the target.'
					}
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
				id: 'null-ability-12',
				name: 'Stunning Blow',
				description: 'You focus your psionic technique into a concussive punch.',
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
					'Psionic',
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
								'Ловкість'
							],
							bonus: 0,
							tier1: '4 + Л шкоди; І < [слабкий], приголомшений і сповільнений (рят. кидок закінчує)',
							tier2: '5 + Л шкоди; І < [середній], приголомшений і сповільнений (рят. кидок закінчує)',
							tier3: '7 + Л шкоди; І < [сильний], приголомшений і сповільнений (рят. кидок закінчує)'
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
				id: 'null-ability-13',
				name: 'Arcane Disruptor',
				description: 'Your blow reorders a foe’s body, causing pain if they attempt to channel sorcery.',
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
					'Psionic',
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
								'Ловкість'
							],
							bonus: 0,
							tier1: '8 + Л психічної шкоди; С < [слабкий], ослаблений (рят. кидок закінчує)',
							tier2: '12 + Л психічної шкоди; С < [середній], ослаблений (рят. кидок закінчує)',
							tier3: '16 + Л психічної шкоди; С < [сильний], ослаблений (рят. кидок закінчує)'
						}
					},
					{
						type: 'Текст',
						text: 'While weakened this way, the target takes damage equal to your Intuition score whenever they use a supernatural ability that costs Malice.'
					}
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
				id: 'null-ability-14',
				name: 'Impart Force',
				description: 'A single touch from you, and your enemy flies backward.',
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
					'Psionic',
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
								'Intuition'
							],
							bonus: 0,
							tier1: 'Відштовхнути на 3',
							tier2: 'Відштовхнути на 5',
							tier3: 'Відштовхнути на 7'
						}
					},
					{
						type: 'Текст',
						text: 'An object you target must be your size or smaller. You gain an edge on this ability. Additionally, for each square you push the target, they take 1 psychic damage'
					}
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
				id: 'null-ability-15',
				name: 'Phase Strike',
				description: 'For a moment, your foe slips out of phase with this manifold.',
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
					'Psionic',
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
							tier1: '3 + Л психічної шкоди; І < [слабкий], ціль випадає з фази (рят. кидок закінчує)',
							tier2: '4 + Л психічної шкоди; І < [середній], ціль випадає з фази (рят. кидок закінчує)',
							tier3: '6 + Л психічної шкоди; І < [сильний], ціль випадає з фази (рят. кидок закінчує)'
						}
					},
					{
						type: 'Текст',
						text: 'A target who goes out of phase is slowed, has their stability reduced by 2, and can’t obtain a tier 3 outcome on ability rolls.'
					}
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
				id: 'null-ability-16',
				name: 'A Squad Unto Myself',
				description: 'You move so quickly, it seems as though an army assaulted your foes.',
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
					'Psionic',
					'Зброя'
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
								'Ловкість'
							],
							bonus: 0,
							tier1: '6 шкоди',
							tier2: '9 шкоди',
							tier3: '13 шкоди'
						}
					},
					{
						type: 'Текст',
						text: 'You can take the Disengage дія руху as a безкоштовний маневр before or after you use this ability.'
					}
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
				id: 'null-ability-17',
				name: 'Absorption Field',
				description: 'Your Нульове Поле absorbs kinetic energy.',
				type: {
					usage: 'Маневр',
					free: false,
					trigger: '',
					time: '',
					qualifiers: [],
					freeStrike: false
				},
				keywords: [
					'Psionic'
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
						text: 'Until the end of the encounter, the size of your Нульове Поле ability increases by 1. While the area of that ability is enlarged this way, each enemy in the area takes a bane on ability rolls.'
					}
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
				id: 'null-ability-18',
				name: 'Molecular Rearrangement Field',
				description: 'Your enemies’ wounds open, your allies’ wounds close.',
				type: {
					usage: 'Маневр',
					free: false,
					trigger: '',
					time: '',
					qualifiers: [],
					freeStrike: false
				},
				keywords: [
					'Psionic'
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
						text: 'Until the end of the encounter, the size of your Нульове Поле ability increases by 1. While the area of that ability is enlarged this way, each enemy who has І < [середній] and enters the area for the first time in a combat round or starts their turn there is bleeding (save ends). Each ally who enters the area for the first time in a combat round or starts their turn there gains temporary Stamina equal to your Intuition score.'
					}
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
				id: 'null-ability-19',
				name: 'Stabilizing Field',
				description: 'You project order, making it harder for your enemies to interfere with you and your allies.',
				type: {
					usage: 'Маневр',
					free: false,
					trigger: '',
					time: '',
					qualifiers: [],
					freeStrike: false
				},
				keywords: [
					'Psionic'
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
						text: 'Until the end of the encounter, the size of your Нульове Поле ability increases by 1. While the area of that ability is enlarged this way, you ignore difficult terrain and reduce the potency of enemy effects targeting you by 1 for you. You can also use a безкоштовна тригерна дія at the start of each of your turns to end one effect on you that is ended by a saving throw or that ends at the end of your turn. Each ally in the area also gains these benefits.'
					}
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
				id: 'null-ability-20',
				name: 'Synapse Field',
				description: 'Attacks made by allies in your Нульове Поле disrupt your enemies’ thoughts, causing psychic pain.',
				type: {
					usage: 'Маневр',
					free: false,
					trigger: '',
					time: '',
					qualifiers: [],
					freeStrike: false
				},
				keywords: [
					'Psionic'
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
						text: 'Until the end of the encounter, the size of your Нульове Поле ability increases by 1. While the area of that ability is enlarged this way, whenever an enemy in the area takes rolled damage, they take extra psychic damage equal to twice your Intuition score.'
					}
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
				id: 'null-ability-21',
				name: 'Anticipating Strike',
				description: 'You suddenly strike an enemy, then grab them in a psionically enhanced grip.',
				type: {
					usage: 'Тригерна дія',
					free: true,
					trigger: 'The target moves or uses a основна дія',
					time: '',
					qualifiers: [],
					freeStrike: false
				},
				keywords: [
					'Ближній бій',
					'Psionic',
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
								'Ловкість'
							],
							bonus: 0,
							tier1: '7 + Л шкоди; І < [слабкий], скутий (рят. кидок закінчує)',
							tier2: '10 + Л шкоди; І < [середній], скутий (рят. кидок закінчує)',
							tier3: '13 + Л шкоди; І < [сильний], скутий (рят. кидок закінчує)'
						}
					},
					{
						type: 'Текст',
						text: 'This strike resolves before the triggering movement or основна дія.'
					}
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
				id: 'null-ability-22',
				name: 'Iron Grip',
				description: 'You grab the target with supernatural force.',
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
					'Psionic',
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
								'Ловкість'
							],
							bonus: 0,
							tier1: '10 + Л шкоди; Л < [слабкий], схоплений',
							tier2: '14 + Л шкоди; Л < [середній], схоплений',
							tier3: '18 + Л шкоди; Л < [сильний], схоплений'
						}
					},
					{
						type: 'Текст',
						text: 'While grabbed this way, the target takes a bane on the Escape Grab маневр. Each time they use that маневр, they take damage equal to twice your Agility score.'
					}
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
				id: 'null-ability-23',
				name: 'Phase Leap',
				description: 'You leap beyond reality, leaving an afterimage of yourself.',
				type: {
					usage: 'Дія руху',
					free: false,
					trigger: '',
					time: '',
					qualifiers: [],
					freeStrike: false
				},
				keywords: [
					'Psionic'
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
						text: 'You jump up to your speed without provoking opportunity attacks. Until the end of your next turn, a static afterimage of you remains in the space you left, and any enemy adjacent to your afterimage takes a bane on ability rolls. You can use your abilities from your own space or from the space of your afterimage as if you were still there. Additionally, if your Нульове Поле ability is active, your afterimage also projects the aura from that ability, which you control as if you were in the afterimage’s space.'
					}
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
				id: 'null-ability-24',
				name: 'Synaptic Reset',
				description: 'You expand your nullifying power to mitigate harmful effects.',
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
					'Psionic'
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
						text: 'Each target can end any conditions or effects on themself, and gains 5 temporary Stamina for each condition or effect removed.'
					}
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
				id: 'null-ability-25',
				name: 'Arcane Purge',
				description: 'You focus your Нульове Поле into a pressure point strike that prevents your foe from channeling sorcery.',
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
					'Psionic',
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
								'Ловкість'
							],
							bonus: 0,
							tier1: '13 + Л шкоди; С < [слабкий], ціль пригнічена (рят. кидок закінчує)',
							tier2: '19 + Л шкоди; С < [середній], ціль пригнічена (рят. кидок закінчує)',
							tier3: '24 + Л шкоди; С < [сильний], ціль пригнічена (рят. кидок закінчує)'
						}
					},
					{
						type: 'Текст',
						text: 'While suppressed, a target takes psychic damage equal to twice your Intuition score at the start of their turns, whenever they use a supernatural ability, or whenever they use an ability that costs Malice.'
					}
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
				id: 'null-ability-26',
				name: 'Phase Hurl',
				description: 'You throw your foe out of phase with this manifold, causing them to harm other enemies as they return.',
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
					'Psionic',
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
								'Ловкість'
							],
							bonus: 0,
							tier1: '9 + Л шкоди; відштовхнути на 5; І < [слабкий], приголомшений (рят. кидок закінчує)',
							tier2: '13 + Л шкоди; відштовхнути на 7;  І < [середній], приголомшений (рят. кидок закінчує)',
							tier3: '18 + Л шкоди; відштовхнути на 10; І < [сильний], приголомшений (рят. кидок закінчує)'
						}
					},
					{
						type: 'Текст',
						text: 'The target and each creature or object they collide with from this forced movement takes psychic damage equal to the total number of squares the target was force moved. While the target is dazed this way, they see glimpses of creatures from other parts of the timescape.'
					}
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
				id: 'null-ability-27',
				name: 'Scalar Assault',
				description: 'You warp reality to grow a limb for just a moment and make a single devastating attack.',
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
					'Psionic'
				],
				distance: [
					{
						type: 'Cube',
						value: 3,
						value2: 0,
						within: 1,
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
								'Ловкість'
							],
							bonus: 0,
							tier1: '12 психічної шкоди; відштовхнути на 3',
							tier2: '17 психічної шкоди; відштовхнути на 5',
							tier3: '23 психічної шкоди; відштовхнути на 7'
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
				id: 'null-ability-28',
				name: 'Synaptic Anchor',
				description: 'You disrupt an enemy’s strike and create a feedback loop in their mind, preventing them from focusing on future attacks.',
				type: {
					usage: 'Тригерна дія',
					free: true,
					trigger: 'The target takes damage from another creature’s ability while in the area of your Нульове Поле ability',
					time: '',
					qualifiers: [],
					freeStrike: false
				},
				keywords: [
					'Psionic'
				],
				distance: [
					{
						type: 'Особливе',
						value: 0,
						value2: 0,
						within: 0,
						special: 'Self; see below',
						qualifier: ''
					}
				],
				target: 'На себе або одно істоту',
				cost: 11,
				repeatable: false,
				minLevel: 1,
				sections: [
					{
						type: 'Текст',
						text: 'The target takes half the damage, and if the triggering creature has І < [середній], they are dazed (save ends). While the triggering creature is dazed this way, they take psychic damage equal to your Intuition score whenever they use a основна дія.'
					}
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
				id: 'null-sub-1',
				name: 'Chronokinetic',
				description: 'Your training unmoors you from temporal reality, allowing you to use the flow of time as another dimension that all things move through.',
				featuresByLevel: [
					{
						level: 1,
						features: [
							{
								id: 'null-sub-1-1-1',
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
							},
							{
								id: 'null-sub-1-1-2',
								name: 'Chronokinetic Mastery',
								description: 'Chronokinetic Mastery, Chronokinetic Mastery',
								type: 'Набір особливостей',
								data: {
									features: [
										{
											id: 'null-sub-1-1-2a',
											name: 'Chronokinetic Mastery',
											description: '\nAs your discipline grows, your psionic mastery of your body intensifies, granting benefits from the Chronokinetic Mastery table. Benefits are cumulative except where an improved benefit replaces a lesser benefit.\n\n| Discipline     | Benefit                                                                                                                                                                                    |\n|:---------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|\n| 2              | Whenever you use the Knockback маневр, you can use the Disengage дія руху as a безкоштовна тригерна дія either before or after the маневр.                                             |\n| 4              | The first time on a turn that you willingly move 1 or more squares as part of an ability, you gain 1 surge.                                                                                |\n| 6              | You gain an edge on the Grab and Knockback маневри.                                                                                                                                      |\n| 8 (4th level)  | The first time on a turn that you willingly move 1 or more squares as part of an ability, you gain 2 surges.                                                                               |\n| 10 (7th level) | You have a double edge on the Grab and Knockback маневри.                                                                                                                                |\n| 12 (10th level)| Whenever you force move a target, the forced movement distance gains a bonus equal to your Intuition score. Additionally, whenever you use a heroic ability, you gain 10 temporary Stamina.|',
											type: 'Текст',
											data: null
										},
										{
											id: 'null-sub-1-1-2b',
											name: 'Chronokinetic Mastery',
											description: 'Whenever you use your Inertial Shield ability, you can then use the Disengage дія руху as a безкоштовна тригерна дія.',
											type: 'Вміст пакета',
											data: {
												tag: 'inertial-shield'
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
								id: 'null-sub-1-2-1',
								name: 'Rapid Processing',
								description: 'As a маневр, you can read an entire book or process a similar amount of information. Additionally, during any respite, you can take an additional respite activity.',
								type: 'Текст',
								data: null
							},
							{
								id: 'null-sub-1-2-2',
								name: 'Choice',
								description: '',
								type: 'Вибір',
								data: {
									options: [
										{
											feature: {
												id: 'null-sub-1-2-2a',
												name: 'Blur',
												description: 'You release stored time, allowing you to act twice.',
												type: 'Здібність',
												data: {
													ability: {
														id: 'null-sub-1-2-2a',
														name: 'Blur',
														description: 'You release stored time, allowing you to act twice.',
														type: {
															usage: 'Маневр',
															free: false,
															trigger: '',
															time: '',
															qualifiers: [],
															freeStrike: false
														},
														keywords: [
															'Psionic'
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
																text: 'You can use a signature or heroic ability. You gain an edge on that ability’s power rolls.'
															}
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
												id: 'null-sub-1-2-2b',
												name: 'Force Redirected',
												description: 'The force of your strike moves your target in a surprising direction.',
												type: 'Здібність',
												data: {
													ability: {
														id: 'null-sub-1-2-2b',
														name: 'Force Redirected',
														description: 'The force of your strike moves your target in a surprising direction.',
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
															'Psionic',
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
																	tier1: '8 + Л шкоди; зсунути на 1',
																	tier2: '12 + Л шкоди; зсунути на 3',
																	tier3: '16 + Л шкоди; зсунути на 5'
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
								id: 'null-sub-1-5-1',
								name: 'Instant Action',
								description: 'If you’re not surprised at the start of your first turn in combat, you gain an edge on ability rolls and gain 2 surges. If you are surprised, you can spend 3 discipline to no longer be surprised and gain the benefits of this feature.',
								type: 'Текст',
								data: null
							}
						]
					},
					{
						level: 6,
						features: [
							{
								id: 'null-sub-1-6-1',
								name: 'Choice',
								description: '',
								type: 'Вибір',
								data: {
									options: [
										{
											feature: {
												id: 'null-sub-1-6-1a',
												name: 'Interphase',
												description: 'You slip into a faster timestream to act more quickly.',
												type: 'Здібність',
												data: {
													ability: {
														id: 'null-sub-1-6-1a',
														name: 'Interphase',
														description: 'You slip into a faster timestream to act more quickly.',
														type: {
															usage: 'Основна дія',
															free: false,
															trigger: '',
															time: '',
															qualifiers: [],
															freeStrike: false
														},
														keywords: [
															'Psionic'
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
																text: 'You can use up to three signature abilities, each of which gains an edge.'
															}
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
												id: 'null-sub-1-6-1b',
												name: 'Phase Step',
												description: 'You weaken your connection to this manifold, allowing you to move through and damage enemies.',
												type: 'Здібність',
												data: {
													ability: {
														id: 'null-sub-1-6-1b',
														name: 'Phase Step',
														description: 'You weaken your connection to this manifold, allowing you to move through and damage enemies.',
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
															'Psionic',
															'Зброя'
														],
														distance: [
															{
																type: 'Особливе',
																value: 0,
																value2: 0,
																within: 0,
																special: 'Self; see below',
																qualifier: ''
															}
														],
														target: 'Себе',
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
																	tier1: '6 шкоди; С < [слабкий]. приголомшений',
																	tier2: '8 шкоди; С < [середній]. приголомшений',
																	tier3: '12 шкоди; С < [сильний]. приголомшений'
																}
															},
															{
																type: 'Текст',
																text: 'You can shift up to your speed, and squares occupied by enemies or objects are not difficult terrain for this shift. You make one power roll that targets each enemy you moved through during this shift'
															}
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
								id: 'null-sub-1-8-1',
								name: 'Shared Momentum',
								description: 'When you take the Disengage дія руху, one ally in the area of your Нульове Поле ability can also take the Disengage дія руху as a безкоштовна тригерна дія, using your distance for that дія руху.',
								type: 'Текст',
								data: null
							}
						]
					},
					{
						level: 9,
						features: [
							{
								id: 'null-sub-1-9-1',
								name: 'Choice',
								description: '',
								type: 'Вибір',
								data: {
									options: [
										{
											feature: {
												id: 'null-sub-1-9-1a',
												name: 'Arrestor Cycle',
												description: 'You trap your foe in a looping cycle of time, where they relive the last few seconds over and over again.',
												type: 'Здібність',
												data: {
													ability: {
														id: 'null-sub-1-9-1a',
														name: 'Arrestor Cycle',
														description: 'You trap your foe in a looping cycle of time, where they relive the last few seconds over and over again.',
														type: {
															usage: 'Тригерна дія',
															free: true,
															trigger: 'The triggering creature starts their turn.',
															time: '',
															qualifiers: [],
															freeStrike: false
														},
														keywords: [
															'Psionic',
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
																type: 'roll',
																roll: {
																	characteristic: [
																		'Intuition'
																	],
																	bonus: 0,
																	tier1: 'І < [слабкий]. ціль втрачає свій хід',
																	tier2: 'І < [середній]. ціль втрачає свій хід',
																	tier3: 'І < [сильний]. ціль втрачає свій хід'
																}
															},
															{
																type: 'Текст',
																text: 'If the target loses their turn, the round continues as if they had acted. A target who doesn’t lose their turn takes psychic damage equal to twice your Intuition score for each основна дія they take until the end of their next turn.'
															}
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
												id: 'null-sub-1-9-1b',
												name: 'Time Loop',
												description: 'You show shadows what true speed is.',
												type: 'Здібність',
												data: {
													ability: {
														id: 'null-sub-1-9-1b',
														name: 'Time Loop',
														description: 'You show shadows what true speed is.',
														type: {
															usage: 'Тригерна дія',
															free: true,
															trigger: 'Another creature on the encounter map ends their turn.',
															time: '',
															qualifiers: [],
															freeStrike: false
														},
														keywords: [
															'Psionic'
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
																text: 'You take a bonus turn immediately after the triggering creature. This ability can be used only once per combat round.'
															}
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
				id: 'null-sub-2',
				name: 'Cryokinetic',
				description: 'You can tap into absolute cold, the most essential energy of myriad manifolds, and manifest its effects in your body.',
				featuresByLevel: [
					{
						level: 1,
						features: [
							{
								id: 'null-sub-2-1-1',
								name: 'Crafting Skill',
								description: '',
								type: 'Вибір навички',
								data: {
									options: [],
									listOptions: [
										'Ремесло'
									],
									count: 1,
									selected: []
								}
							},
							{
								id: 'null-sub-2-1-2',
								name: 'Cryokinetic Mastery',
								description: 'Cryokinetic Mastery, Cryokinetic Mastery',
								type: 'Набір особливостей',
								data: {
									features: [
										{
											id: 'null-sub-2-1-2a',
											name: 'Cryokinetic Mastery',
											description: '\nAs your discipline grows, you strengthen the psionic power suffusing you, granting benefits from the Cryokinetic Mastery table. Benefits are cumulative except where an improved benefit replaces a lesser benefit.\n\n| Discipline     | Benefit                                                                                                                                                                                          |\n|:---------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|\n| 2              | Whenever you use the Knockback маневр, you can target one additional creature. Additionally, whenever you deal untyped damage with a psionic ability, you can change it to cold damage instead.|\n| 4              | The first time on a turn that you grab a creature or an enemy moves 1 or more squares in the area of your Нульове Поле ability, you gain 1 surge.                                                  |\n| 6              | You gain an edge on the Grab and Knockback маневри.                                                                                                                                            |\n| 8 (4th level)  | The first time on a turn that you grab a creature or an enemy moves 1 or more squares in the area of your Нульове Поле ability, you gain 2 surges.                                                 |\n| 10 (7th level) | You have a double edge on the Grab and Knockback маневри.                                                                                                                                      |\n| 12 (10th level)| Whenever you force move a target, the forced movement distance gains a bonus equal to your Intuition score. Additionally, whenever you use a heroic ability, you gain 10 temporary Stamina.      |',
											type: 'Текст',
											data: null
										},
										{
											id: 'null-sub-2-1-2b',
											name: 'Cryokinetic Mastery',
											description: 'Whenever you use your Inertial Shield ability, you can then use the Grab маневр as a безкоштовна тригерна дія.',
											type: 'Вміст пакета',
											data: {
												tag: 'inertial-shield'
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
								id: 'null-sub-2-2-1',
								name: 'Entropic Adaptability',
								description: 'You ignore difficult terrain related to cold and ice, and you can automatically climb at full speed while moving.',
								type: 'Текст',
								data: null
							},
							{
								id: 'null-sub-2-2-1b',
								name: 'Damage Modifier',
								description: 'Cold Immunity + Intuition x 2',
								type: 'Модифікатор шкоди',
								data: {
									modifiers: [
										{
											damageType: 'Cold',
											type: 'Immunity',
											value: 0,
											valueCharacteristics: [
												'Intuition'
											],
											valueCharacteristicMultiplier: 2,
											valuePerLevel: 0,
											valuePerEchelon: 0
										}
									]
								}
							},
							{
								id: 'null-sub-2-2-2',
								name: 'Choice',
								description: '',
								type: 'Вибір',
								data: {
									options: [
										{
											feature: {
												id: 'null-sub-2-2-2a',
												name: 'Entropic Field',
												description: 'You drastically increase the local entropy.',
												type: 'Здібність',
												data: {
													ability: {
														id: 'null-sub-2-2-2a',
														name: 'Entropic Field',
														description: 'You drastically increase the local entropy.',
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
															'Psionic',
															'Зброя'
														],
														distance: [
															{
																type: 'Cube',
																value: 3,
																value2: 0,
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
																		'Ловкість'
																	],
																	bonus: 0,
																	tier1: '6 холодної шкоди; Л < [слабкий], сповільнений (рят. кидок закінчує)',
																	tier2: '9 холодної шкоди; Л < [середній], сповільнений (рят. кидок закінчує)',
																	tier3: '13 холодної шкоди; Л < [сильний], сповільнений (рят. кидок закінчує)'
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
												id: 'null-sub-2-2-2b',
												name: 'Heat Sink',
												description: 'You absorb ambient heat, coating the ground in frost and precipitating snow from the air',
												type: 'Здібність',
												data: {
													ability: {
														id: 'null-sub-2-2-2b',
														name: 'Heat Sink',
														description: 'You absorb ambient heat, coating the ground in frost and precipitating snow from the air',
														type: {
															usage: 'Маневр',
															free: false,
															trigger: '',
															time: '',
															qualifiers: [],
															freeStrike: false
														},
														keywords: [
															'Psionic'
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
																text: 'Until the start of your next turn, the size of your Нульове Поле ability increases by 1, and you and any ally benefit from concealment while in the area. At the end of this turn, each enemy in the area takes cold damage equal to your Intuition score.'
															}
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
								id: 'null-sub-2-5-1',
								name: 'Chilling Readiness',
								description: 'You steel yourself for imminent danger by tapping into your body’s cold energy. At the start of any combat, you gain a number of surges equal to your Victories.',
								type: 'Текст',
								data: null
							}
						]
					},
					{
						level: 6,
						features: [
							{
								id: 'null-sub-2-6-1',
								name: 'Choice',
								description: '',
								type: 'Вибір',
								data: {
									options: [
										{
											feature: {
												id: 'null-sub-2-6-1a',
												name: 'Ice Pillars',
												description: 'Pillars of ice erupt from the ground and launch your foes into the air.',
												type: 'Здібність',
												data: {
													ability: {
														id: 'null-sub-2-6-1a',
														name: 'Ice Pillars',
														description: 'Pillars of ice erupt from the ground and launch your foes into the air.',
														type: {
															usage: 'Основна дія',
															free: false,
															trigger: '',
															time: '',
															qualifiers: [],
															freeStrike: false
														},
														keywords: [
															'Psionic'
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
														target: 'Three creatures or objects',
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
																	tier1: 'Вертикально зсунути на 6',
																	tier2: 'Вертикально зсунути на 8',
																	tier3: 'Вертикально зсунути на 10'
																}
															},
															{
																type: 'Текст',
																text: 'The pillars vanish as soon as the effects of the forced movement are resolved.'
															}
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
												id: 'null-sub-2-6-1b',
												name: 'Wall of Ice',
												description: 'You create a wall of ice.',
												type: 'Здібність',
												data: {
													ability: {
														id: 'null-sub-2-6-1b',
														name: 'Wall of Ice',
														description: 'You create a wall of ice.',
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
															'Psionic',
															'Зброя'
														],
														distance: [
															{
																type: 'Wall',
																value: 10,
																value2: 0,
																within: 10,
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
																type: 'Текст',
																text: 'You can place this wall in occupied squares, sliding each creature in the area into the nearest unoccupied space of your choice. The wall remains until the end of the encounter or until you are dying. The wall’s squares are treated as stone squares for the purpose of damage, and you and allies can move freely through the wall. Each enemy who enters a square adjacent to the wall and has С < [середній] is slowed (save ends). Each enemy who is force moved into the wall and has С < [середній] is restrained (save ends).'
															}
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
								id: 'null-sub-2-8-1',
								name: 'Synaptic Triage',
								description: 'As a безкоштовний маневр, you can spend 1d6 Stamina to remove one effect on you. Each creature of your choice in the area of your Нульове Поле ability also gains this benefit.',
								type: 'Текст',
								data: null
							}
						]
					},
					{
						level: 9,
						features: [
							{
								id: 'null-sub-2-9-1',
								name: 'Choice',
								description: '',
								type: 'Вибір',
								data: {
									options: [
										{
											feature: {
												id: 'null-sub-2-9-1a',
												name: 'Absolute Zero',
												description: 'You become the coldest thing in the timescape.',
												type: 'Здібність',
												data: {
													ability: {
														id: 'null-sub-2-9-1a',
														name: 'Absolute Zero',
														description: 'You become the coldest thing in the timescape.',
														type: {
															usage: 'Маневр',
															free: false,
															trigger: '',
															time: '',
															qualifiers: [],
															freeStrike: false
														},
														keywords: [
															'Psionic'
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
																type: 'roll',
																roll: {
																	characteristic: [
																		'Intuition'
																	],
																	bonus: 0,
																	tier1: 'Ви отримуєте 20 тимчасової Витривалості.',
																	tier2: 'Ви отримуєте 30 тимчасової Витривалості.',
																	tier3: 'Ви отримуєте 40 тимчасової Витривалості.'
																}
															},
															{
																type: 'Текст',
																text: 'Until the end of the encounter or until you are dead, you become an avatar of uttermost cold. You gain immunity to all damage equal to the cold damage immunity granted by your Entropic Adaptability trait, you ignore the negative effects of dying, and you have a +2 bonus to potencies.'
															}
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
												id: 'null-sub-2-9-1b',
												name: 'Heat Drain',
												description: 'You drain all the heat from the target.',
												type: 'Здібність',
												data: {
													ability: {
														id: 'null-sub-2-9-1b',
														name: 'Heat Drain',
														description: 'You drain all the heat from the target.',
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
															'Psionic',
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
																	tier1: '8 + І холодної шкоди; С < [слабкий], скутий (рят. кидок закінчує)',
																	tier2: '11 + І холодної шкоди; С < [середній], скутий (рят. кидок закінчує)',
																	tier3: '15 + І холодної шкоди; С < [сильний], скутий (рят. кидок закінчує)'
																}
															},
															{
																type: 'Текст',
																text: 'While restrained this way, the target takes cold damage equal to your Intuition score at the start of each of your turns. Additionally, whenever the target damages another creature while restrained this way, any potency associated with the damage is reduced by 2.'
															}
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
				id: 'null-sub-3',
				name: 'Metakinetic',
				description: 'You learn to see through the illusions of the universe to more fully understand your body and its psionic potential.',
				featuresByLevel: [
					{
						level: 1,
						features: [
							{
								id: 'null-sub-3-1-1',
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
								id: 'null-sub-3-1-2',
								name: 'Metakinetic Mastery',
								description: 'Metakinetic Mastery, Metakinetic Mastery',
								type: 'Набір особливостей',
								data: {
									features: [
										{
											id: 'null-sub-3-1-2a',
											name: 'Metakinetic Mastery',
											description: '\nAs your discipline grows, your psionic potential is amplified, granting benefits from the Metakinetic Mastery table. Benefits are cumulative except where an improved benefit replaces a lesser benefit.\n\n| Discipline | Benefit                                                                                                                                                                                        |\n|:-----------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|\n| 2              | Whenever you use the Knockback маневр, the forced movement distance gains a bonus equal to your Intuition score.                                                                         |\n| 4              | The first time in a combat round that you take damage or are force moved, you gain 1 surge, even if you resist the effect.                                                                 |\n| 6              | You gain an edge on the Grab and Knockback маневри.                                                                                                                                      |\n| 8 (4th level)  | The first time in a combat round that you take damage or are force moved, you gain 2 surges, even if you resist the effect.                                                                |\n| 10 (7th level) | You have a double edge on the Grab and Knockback маневри.                                                                                                                                |\n| 12 (10th level)| Whenever you force move a target, the forced movement distance gains a bonus equal to your Intuition score. Additionally, whenever you use a heroic ability, you gain 10 temporary Stamina.|',
											type: 'Текст',
											data: null
										},
										{
											id: 'null-sub-3-1-2b',
											name: 'Metakinetic Mastery',
											description: 'Whenever you use your Inertial Shield ability, you can then use the Knockback маневр as a безкоштовна тригерна дія.',
											type: 'Вміст пакета',
											data: {
												tag: 'inertial-shield'
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
								id: 'null-sub-3-2-1',
								name: 'Inertial Sink',
								description: '\nYou add your Intuition score to your effective size for the purpose of interacting with creatures and objects, such as for determining whether you can lift an object, whether you are affected by forced movement, and so forth. This has no effect on whether you can be grabbed.\n\nAdditionally, when you fall, you reduce the effective height of the fall by 5 squares in addition to any other reductions. Whenever you take damage from being force moved, you reduce that damage by an amount equal to your level.',
								type: 'Текст',
								data: null
							},
							{
								id: 'null-sub-3-2-2',
								name: 'Choice',
								description: '',
								type: 'Вибір',
								data: {
									options: [
										{
											feature: {
												id: 'null-sub-3-2-2a',
												name: 'Gravitic Strike',
												description: 'Your fist emanates gravitic force that pulls a distant enemy closer.',
												type: 'Здібність',
												data: {
													ability: {
														id: 'null-sub-3-2-2a',
														name: 'Gravitic Strike',
														description: 'Your fist emanates gravitic force that pulls a distant enemy closer.',
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
															'Psionic',
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
																	tier1: '8 + Л психічної шкоди; вертикально притягнути на 3',
																	tier2: '12 + Л психічної шкоди; вертикально притягнути на 5',
																	tier3: '16 + Л психічної шкоди; вертикально притягнути на 7'
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
												id: 'null-sub-3-2-2b',
												name: 'Kinetic Shield',
												description: 'You manifest a force barrier that absorbs incoming kinetic energy.',
												type: 'Здібність',
												data: {
													ability: {
														id: 'null-sub-3-2-2b',
														name: 'Kinetic Shield',
														description: 'You manifest a force barrier that absorbs incoming kinetic energy.',
														type: {
															usage: 'Маневр',
															free: false,
															trigger: '',
															time: '',
															qualifiers: [],
															freeStrike: false
														},
														keywords: [
															'Psionic'
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
																type: 'roll',
																roll: {
																	characteristic: [
																		'Ловкість'
																	],
																	bonus: 0,
																	tier1: 'Ви отримуєте 10 тимчасової Витривалості',
																	tier2: 'Ви отримуєте 15 тимчасової Витривалості',
																	tier3: 'Ви отримуєте 20 тимчасової Витривалості'
																}
															},
															{
																type: 'Текст',
																text: 'While you have temporary Stamina from this ability, you can’t be made bleeding even while dying.'
															}
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
								id: 'null-sub-3-5-1',
								name: 'Inertial Fulcrum',
								description: 'Whenever you use an ability to reduce damage dealt to you or to reduce the distance of forced movement imposed upon you, you can deal damage to one enemy in the area of your Нульове Поле ability equal to your Intuition score.',
								type: 'Текст',
								data: null
							}
						]
					},
					{
						level: 6,
						features: [
							{
								id: 'null-sub-3-6-1',
								name: 'Choice',
								description: '',
								type: 'Вибір',
								data: {
									options: [
										{
											feature: {
												id: 'null-sub-3-6-1a',
												name: 'Gravitic Charge',
												description: 'You channel your discipline into momentum that defies gravity.',
												type: 'Здібність',
												data: {
													ability: {
														id: 'null-sub-3-6-1a',
														name: 'Gravitic Charge',
														description: 'You channel your discipline into momentum that defies gravity.',
														type: {
															usage: 'Маневр',
															free: false,
															trigger: '',
															time: '',
															qualifiers: [],
															freeStrike: false
														},
														keywords: [
															'Psionic'
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
																type: 'roll',
																roll: {
																	characteristic: [
																		'Intuition'
																	],
																	bonus: 0,
																	tier1: 'Вертикально зсунути на 5',
																	tier2: 'Вертикально зсунути на 7',
																	tier3: 'Вертикально зсунути на 9'
																}
															},
															{
																type: 'Текст',
																text: 'This movement ignores stability. If you slide into another creature, you resolve damage to both of you as if your force movement had ended, but you keep moving through that creature’s space.'
															}
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
												id: 'null-sub-3-6-1b',
												name: 'Iron Body',
												description: 'You focus until your body becomes as hard as iron.',
												type: 'Здібність',
												data: {
													ability: {
														id: 'null-sub-3-6-1b',
														name: 'Iron Body',
														description: 'You focus until your body becomes as hard as iron.',
														type: {
															usage: 'Маневр',
															free: false,
															trigger: '',
															time: '',
															qualifiers: [],
															freeStrike: false
														},
														keywords: [
															'Psionic'
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
																text: 'You gain 20 temporary Stamina. Additionally, until the end of the encounter, your stability gains a bonus equal to your Intuition score.'
															}
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
								id: 'null-sub-3-8-1',
								name: 'Inertial Dampener',
								description: 'You and each creature or object of your choice in the area of your Нульове Поле ability gain a bonus to stability equal to your Intuition score. A creature who attempts to force move a target with this bonus takes psychic damage equal to your Intuition score.',
								type: 'Текст',
								data: null
							}
						]
					},
					{
						level: 9,
						features: [
							{
								id: 'null-sub-3-9-1',
								name: 'Choice',
								description: '',
								type: 'Вибір',
								data: {
									options: [
										{
											feature: {
												id: 'null-sub-3-9-1a',
												name: 'Inertial Absorption',
												description: 'You absorb an attack to empower your body.',
												type: 'Здібність',
												data: {
													ability: {
														id: 'null-sub-3-9-1a',
														name: 'Inertial Absorption',
														description: 'You absorb an attack to empower your body.',
														type: {
															usage: 'Тригерна дія',
															free: true,
															trigger: 'Another creature damages you using an ability.',
															time: '',
															qualifiers: [],
															freeStrike: false
														},
														keywords: [
															'Psionic'
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
																text: 'You take half the damage, negate any effects associated with the damage for you, and gain 3 surges.'
															}
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
												id: 'null-sub-3-9-1b',
												name: 'Realitas',
												description: 'Your essential hyperreality disrupts your enemy’s connection to existence.',
												type: 'Здібність',
												data: {
													ability: {
														id: 'null-sub-3-9-1b',
														name: 'Realitas',
														description: 'Your essential hyperreality disrupts your enemy’s connection to existence.',
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
															'Psionic',
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
																		'Ловкість'
																	],
																	bonus: 0,
																	tier1: '7 + Л психічної шкоди; І < [слабкий], приголомшений',
																	tier2: '10 + Л психічної шкоди; І < [середній], приголомшений',
																	tier3: '13 + Л психічної шкоди; І < [сильний], приголомшений'
																}
															},
															{
																type: 'Текст',
																text: 'While dazed this way, the target takes psychic damage equal to twice your Intuition score at the start of each of your turns. If this ability causes a creature who is not a leader or solo creature to become winded, they are instead reduced to 0 Stamina. Any creature reduced to 0 Stamina by this ability is forgotten by all creatures of your level or lower in the timescape who are not present in the encounter. Loved ones of the forgotten creature retain a faint sense of melancholy. This effect can be reversed only at the Director’s discretion.'
															}
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
				value: 0
			},
			{
				characteristic: 'Intuition',
				value: 2
			},
			{
				characteristic: 'Presence',
				value: 0
			}
		]
	},
	career: {
		id: 'career-farmer',
		name: 'Farmer',
		description: 'You grew crops or cared for livestock.',
		features: [
			{
				id: 'career-farmer-feature-1',
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
						'Догляд за тваринами'
					]
				}
			},
			{
				id: 'career-farmer-feature-2',
				name: 'Exploration Skills',
				description: '',
				type: 'Вибір навички',
				data: {
					options: [],
					listOptions: [
						'Дослідження'
					],
					count: 2,
					selected: [
						'Стрибки',
						'Пильність'
					]
				}
			},
			{
				id: 'career-farmer-feature-3',
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
				id: 'career-farmer-feature-4',
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
				id: 'career-farmer-feature-5',
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
							id: 'perk-monster-whisperer',
							name: 'Monster Whisperer',
							description: 'You can use the Handle Animals skill to interact with nonsapient creatures who are not animals.',
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
					id: 'career-farmer-ii-1',
					name: 'Blight',
					description: 'A horrible blight swept over your homeland, sickening the livestock and causing crops to rot. No one knows whether the blight is of natural origin or something more malevolent, but you set out in search of a way to cleanse the land of this affliction.'
				},
				{
					id: 'career-farmer-ii-2',
					name: 'Bored',
					description: 'You’ve always wanted so much more than gathering eggs and milking cows. You kept a secret journal of your dreams, filled with all the things you wanted. When your parent found the journal, they burned it and told you to keep your head out of the clouds. In response, you gathered what you could in a pack and left everything else behind, seeking a life of adventure.'
				},
				{
					id: 'career-farmer-ii-3',
					name: 'Cursed',
					description: 'While tilling your fields, you found something in the dirt. Perhaps it was a chipped and dented weapon, a piece of ancient jewelry, or something altogether unique. Excited by your find, you showed it to a loved one, but when they touched it, something happened. You now know it was a curse conveyed by the item, though you don’t know why it affected them and not you. You left your old life in search of answers.'
				},
				{
					id: 'career-farmer-ii-4',
					name: 'Hard Times',
					description: 'Your farm had always been prosperous, until the last few years. Changes in the weather caused smaller yields until you could no longer pay your tithe to the local noble. Her soldiers took what items of value they found, including a precious family heirloom. You left the struggling farm behind to find a better life.'
				},
				{
					id: 'career-farmer-ii-5',
					name: 'Razed',
					description: 'Your animals were killed, your crops and home set ablaze. The culprits might have been wandering bandits, raiders from a nearby kingdom, or hired thugs sent by a rival farm. Whoever they were, they left you with nothing. You couldn’t face the thought of starting again from scratch, so you took up a life of heroism to protect others from such villainy.'
				},
				{
					id: 'career-farmer-ii-6',
					name: 'Stolen',
					description: 'Your family bred horses - beautiful creatures that few could rival on the track and in the jousting lists. When a local noble arrived with an offer to buy your prized stallion, your father refused. The noble struck him down where he stood and stole the horse. Without that stallion, the renowned bloodline would end. You intend to get them back - and get revenge.'
				}
			],
			selected: {
				id: 'career-farmer-ii-5',
				name: 'Razed',
				description: 'Your animals were killed, your crops and home set ablaze. The culprits might have been wandering bandits, raiders from a nearby kingdom, or hired thugs sent by a rival farm. Whoever they were, they left you with nothing. You couldn’t face the thought of starting again from scratch, so you took up a life of heroism to protect others from such villainy.'
			},
			selectedID: 'career-farmer-ii-5'
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
