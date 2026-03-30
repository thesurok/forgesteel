import { AbilityDistanceType } from '@/enums/ability-distance-type';
import { AbilityKeyword } from '@/enums/ability-keyword';
import { FactoryLogic } from '@/logic/factory-logic';
import { MonsterRoleType } from '@/enums/monster-role-type';
import { Terrain } from '@/models/terrain';
import { TerrainCategory } from '@/enums/terrain-category';
import { TerrainRoleType } from '@/enums/terrain-role-type';

export const columnOfBlades: Terrain = {
	id: 'terrain-column-of-blades',
	name: 'Column of Blades',
	description:
		'Обертову дерев’яну колону вкрито гострими лезами, що розтинають необачних.',
	category: TerrainCategory.Mechanism,
	level: 3,
	role: FactoryLogic.createTerrainRole(
		MonsterRoleType.Defender,
		TerrainRoleType.Fortification
	),
	encounterValue: 3,
	area: '',
	direction: '',
	link: '',
	stamina: {
		base: 5,
		perSquare: 0
	},
	size: FactoryLogic.createSize(1, 'L'),
	damageMods: [],
	sections: [
		{
			id: 'deactivate',
			content: [
				FactoryLogic.feature.create({
					id: 'deactivate',
					name: 'Deactivate',
					description: 'Колону лез треба повністю знищити.'
				})
			]
		},
		{
			id: 'activate',
			content: [
				FactoryLogic.feature.create({
					id: 'activate',
					name: 'Activate',
					description:
						'Істота чи об’єкт переміщується впритул до колони лез.'
				}),
				FactoryLogic.feature.create({
					id: 'effect',
					name: 'Effect',
					description: 'The **Spinning Blades** ability.'
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'spinning-blades',
						name: 'Spinning Blades',
						type: FactoryLogic.type.createTrigger(
							'Істота чи об’єкт переміщується в межах досяжності колони.',
							{ free: true }
						),
						keywords: [
							AbilityKeyword.Melee,
							AbilityKeyword.Weapon,
							AbilityKeyword.Strike
						],
						distance: [FactoryLogic.distance.createMelee(0)],
						target: 'The triggering creature or object',
						sections: [
							FactoryLogic.createAbilitySectionRoll(
								FactoryLogic.createPowerRoll({
									bonus: 2,
									tier1: '4 шкоди',
									tier2: '6 шкоди; С < 2 кровотеча (рят. кидок завершує)',
									tier3: '9 шкоди; С < 3 кровотеча (рят. кидок завершує)'
								})
							)
						]
					})
				})
			]
		},
		{
			id: 'allied-awareness',
			content: [
				FactoryLogic.feature.create({
					id: 'allied-awareness',
					name: 'Allied Awareness',
					description: `Союзники, які зміщуються, не провокують колону. Істота, що спостерігає, як союзник зміщується таким чином, може зробити **тест Інтуїції**, щоб зміститися, наслідуючи його рухи.

* **11 або менше**: Істота провокує колону, а вміння колони отримує перевагу.
* **12-16**: Істота провокує колону.
* **17+**: Істота не провокує колону.`
				})
			]
		}
	],
	upgrades: [
		{
			id: 'stone-column',
			label: 'Stone Column',
			cost: 1,
			text: 'Колону зроблено з каменю, і вона має 8 витривалості.',
			sections: []
		},
		{
			id: 'metal-column',
			label: 'Metal Column',
			cost: 1,
			text: 'Колону зроблено з металу, і вона має 11 витривалості.',
			sections: []
		},
		{
			id: 'concealed',
			label: 'Concealed',
			cost: 1,
			text: 'Леза сховано всередині колони, яка лишається нерухомою, доки не спрацює.',
			sections: []
		},
		{
			id: 'spiked-flails',
			label: 'Spiked Flails',
			cost: 4,
			text: 'Замість лез до колони прикріплено важкі шиповані кулі на довгих ланцюгах. Вміння **Whirling Flails** замінює **Spinning Blades**.',
			sections: [
				{
					id: 'spiked-flails',
					content: [
						FactoryLogic.feature.createAbility({
							ability: FactoryLogic.createAbility({
								id: 'whirling-flails',
								name: 'Whirling Flails',
								type: FactoryLogic.type.createTrigger(
									'Істота чи об’єкт переміщується в межах досяжності колони.',
									{ free: true }
								),
								keywords: [
									AbilityKeyword.Melee,
									AbilityKeyword.Weapon,
									AbilityKeyword.Strike
								],
								distance: [FactoryLogic.distance.createMelee(0)],
								target: 'The triggering creature or object',
								sections: [
									FactoryLogic.createAbilitySectionRoll(
										FactoryLogic.createPowerRoll({
											bonus: 2,
											tier1: '5 шкоди',
											tier2: '8 шкоди; С < 2 приголомшений (рят. кидок завершує)',
											tier3: '11 шкоди; С < 3 приголомшений (рят. кидок завершує)'
										})
									)
								]
							})
						})
					]
				}
			]
		}
	],
	state: {
		squares: 1,
		staminaDamage: 0
	}
};

export const dartTrap: Terrain = {
	id: 'terrain-dart-trap',
	name: 'Dart Trap',
	description: 'Прихований метальник дротиків випускає снаряди на коротку відстань.',
	category: TerrainCategory.Mechanism,
	level: 1,
	role: FactoryLogic.createTerrainRole(
		MonsterRoleType.Ambusher,
		TerrainRoleType.Trap
	),
	encounterValue: 1,
	area: '',
	link: '',
	stamina: {
		base: 3,
		perSquare: 0
	},
	direction: 'Пастка з дротиками стріляє в заздалегідь визначеному напрямку.',
	size: FactoryLogic.createSize(1, 'S'),
	damageMods: [],
	sections: [
		{
			id: 'deactivate',
			content: [
				FactoryLogic.feature.create({
					id: 'deactivate',
					name: 'Deactivate',
					description: `Як маневр, істота поруч із пасткою з дротиками може зробити **тест Ловкості**.
			
* **11 або менше**: Істота спрацьовує пастку й стає її ціллю.
* **12-16**: Пастку знешкоджено, але істота сповільнена (до кінця ходу).
* **17+**: Пастку знешкоджено, і вона не спрацьовує.`
				})
			]
		},
		{
			id: 'activate',
			content: [
				FactoryLogic.feature.create({
					id: 'activate',
					name: 'Activate',
					description:
						'Спрацьовує натискна плита, перемикач або інший пов’язаний тригер.'
				}),
				FactoryLogic.feature.create({
					id: 'effect',
					name: 'Effect',
					description: 'The **Dart** ability.'
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'effect-dart',
						name: 'Dart',
						type: FactoryLogic.type.createTrigger(
							'Спрацьовує натискна плита, перемикач або інший пов’язаний тригер.',
							{ free: true }
						),
						keywords: [
							AbilityKeyword.Ranged,
							AbilityKeyword.Weapon,
							AbilityKeyword.Strike
						],
						distance: [FactoryLogic.distance.createRanged(5)],
						target: 'Одна істота або предмет',
						sections: [
							FactoryLogic.createAbilitySectionRoll(
								FactoryLogic.createPowerRoll({
									bonus: 2,
									tier1: '2 шкоди',
									tier2: '4 шкоди',
									tier3: '5 шкоди'
								})
							)
						]
					})
				})
			]
		},
		{
			id: 'hidden',
			content: [
				FactoryLogic.feature.create({
					id: 'hidden',
					name: 'Hidden',
					description: 'Пастку з дротиками приховано, доки вона не спрацює або її не виявлять.'
				})
			]
		}
	],
	upgrades: [
		{
			id: 'poison-darts',
			label: 'Poison Darts',
			cost: 2,
			text: 'Кінчики дротиків змащені отрутою. Будь-яка істота, що отримує шкоду від дротика, також отримує 1d6 отруйної шкоди на початку кожного свого ходу (рят. кидок завершує).',
			sections: []
		},
		{
			id: 'large-darts',
			label: 'Large Darts',
			cost: 1,
			text: 'Більші й важчі дротики надають атаці пастки кінетичної сили. Ціль вміння **Dart** відштовхується на 1 клітинку на 1 щаблі успіху, на 2 клітинки на 2 щаблі успіху або на 3 клітинки на 3 щаблі успіху.',
			sections: []
		},
		{
			id: 'gatling-darts',
			label: 'Gatling Darts',
			cost: 4,
			text: 'Пастку з дротиками обладнано кількома стволами, що випускають дротики з високою скорострільністю. Вміння **Dart** втрачає ключові слова Ranged і Strike, натомість отримує ключове слово Area; його ділянка стає лінією 5 × 1 в межах 1, а саме вміння завдає додатково 1d6 шкоди.',
			sections: []
		}
	],
	state: {
		squares: 1,
		staminaDamage: 0
	}
};

export const pillar: Terrain = {
	id: 'terrain-pillar',
	name: 'Pillar',
	description:
		'Цю кам’яну колону можна звалити на необережних ворогів достатньою кількістю шкоди або добре продуманим тригерним механізмом.',
	category: TerrainCategory.Mechanism,
	level: 2,
	role: FactoryLogic.createTerrainRole(
		MonsterRoleType.Hexer,
		TerrainRoleType.Hazard
	),
	encounterValue: 3,
	area: '',
	direction: 'Колона падає в заздалегідь визначеному напрямку.',
	link: '',
	stamina: {
		base: 6,
		perSquare: 0
	},
	size: 'Одна клітинка, крізь яку не можна рухатися',
	damageMods: [],
	sections: [
		{
			id: 'deactivate',
			content: [
				FactoryLogic.feature.create({
					id: 'deactivate',
					name: 'Deactivate',
					description: 'Пов’язаний тригер колони треба знешкодити.'
				})
			]
		},
		{
			id: 'trigger-effect',
			content: [
				FactoryLogic.feature.create({
					id: 'trigger',
					name: 'Trigger',
					description:
						'Колону знищено, або спрацьовує натискна плита, перемикач чи інший пов’язаний тригер.'
				}),
				FactoryLogic.feature.create({
					id: 'effect',
					name: 'Effect',
					description: 'The **Toppling Pillar** ability.'
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'effect-toppling-pillar',
						name: 'Toppling Pillar',
						type: FactoryLogic.type.createTrigger(
							'Колону знищено, або спрацьовує натискна плита, перемикач чи інший пов’язаний тригер.',
							{ free: true }
						),
						keywords: [AbilityKeyword.Area],
						distance: [
							FactoryLogic.distance.create({
								type: AbilityDistanceType.Line,
								value: 4,
								value2: 1,
								within: 1
							})
						],
						target: 'Each creature and object in the area',
						sections: [
							FactoryLogic.createAbilitySectionRoll(
								FactoryLogic.createPowerRoll({
									bonus: 2,
									tier1: '4 шкоди',
									tier2: '6 шкоди; С < 1 скутий (рят. кидок завершує)',
									tier3: '9 шкоди; С < 2 скутий (рят. кидок завершує)'
								})
							),
							FactoryLogic.createAbilitySectionText(
								'Ця ділянка є важким ґрунтом.'
							)
						]
					})
				})
			]
		}
	],
	upgrades: [
		{
			id: 'metal-pillar',
			label: 'Metal Pillar',
			cost: 1,
			text: 'Колону зроблено з металу, вона має 9 витривалості й завдає додатково 1d6 шкоди.',
			sections: []
		},
		{
			id: 'multiple-pillars',
			label: 'Multiple Pillars',
			cost: 3,
			text: 'Кілька колон можна використати, щоб зобразити більший об’єкт, що валиться, наприклад стіну. Якщо об’єкт має спрацювати від руйнування, усі окремі колони треба знищити, перш ніж він упаде.',
			sections: []
		}
	],
	state: {
		squares: 1,
		staminaDamage: 0
	}
};

export const hiddenPortcullis: Terrain = {
	id: 'terrain-portcullis',
	name: 'Portcullis',
	description:
		'Порткуліс приховано в стелі проходу або вузького місця, і він чекає, щоб упасти після спрацювання.',
	category: TerrainCategory.Mechanism,
	level: 3,
	role: FactoryLogic.createTerrainRole(
		MonsterRoleType.Ambusher,
		TerrainRoleType.Trap
	),
	encounterValue: 4,
	area: 'Ділянка 2 × 1 клітинка, до 4 × 2 клітинок',
	direction: '',
	link: '',
	stamina: {
		base: 0,
		perSquare: 9
	},
	size: 'Ділянка коридору, яку треба заблокувати',
	damageMods: [],
	sections: [
		{
			id: 'deactivate',
			content: [
				FactoryLogic.feature.create({
					id: 'deactivate',
					name: 'Deactivate',
					description: `Як маневр, істота поруч із порткулісом може зробити **тест Ловкості**.

* **11 або менше**: Істота спрацьовує порткуліс і зазнає його ефекту, наче перебувала в його ділянці.
* **12-16**: Порткуліс знешкоджено, але істота сповільнена (до кінця ходу).
* **17+**: Порткуліс знешкоджено, і він не спрацьовує.`
				})
			]
		},
		{
			id: 'activate',
			content: [
				FactoryLogic.feature.create({
					id: 'activate',
					name: 'Activate',
					description:
						'Спрацьовує натискна плита, перемикач або інший пов’язаний тригер.'
				}),
				FactoryLogic.feature.create({
					id: 'effect',
					name: 'Effect',
					description: 'The **Heavy Gate** ability.'
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'effect-heavy-gate',
						name: 'Heavy Gate',
						type: FactoryLogic.type.createTrigger(
							'Спрацьовує натискна плита, перемикач або інший пов’язаний тригер.',
							{ free: true }
						),
						keywords: [AbilityKeyword.Weapon, AbilityKeyword.Area],
						distance: [
							FactoryLogic.distance.createSpecial(
								'The area of this ability is the area directly beneath the portcullis when it falls.'
							)
						],
						target: 'All creatures and objects',
						sections: [
							FactoryLogic.createAbilitySectionRoll(
								FactoryLogic.createPowerRoll({
									bonus: 2,
									tier1: '3 шкоди; зсунути на 1, ігноруючи стійкість',
									tier2: '7 шкоди; С < 2 скутий (рят. кидок завершує)',
									tier3: '10 шкоди; С < 3 скутий (рят. кидок завершує)'
								})
							),
							FactoryLogic.createAbilitySectionText(
								'Порткуліс блокує рух із одного його боку на інший. Ціль, яку зсуває порткуліс, опиняється з одного чи з іншого боку від нього (визначте випадково). Порткуліс треба зводити вручну.'
							)
						]
					})
				})
			]
		},
		{
			id: 'hidden',
			content: [
				FactoryLogic.feature.create({
					id: 'hidden',
					name: 'Hidden',
					description: 'Порткуліс приховано, доки він не спрацює або його не виявлять.'
				})
			]
		}
	],
	upgrades: [],
	state: {
		squares: 1,
		staminaDamage: 0
	}
};

export const pressurePlate: Terrain = {
	id: 'terrain-pressure-plate',
	name: 'Pressure Plate',
	description:
		'Цей механізм слугує тригером для іншого пов’язаного механізму й майстерно прихований у підлозі.',
	category: TerrainCategory.Mechanism,
	level: 1,
	role: FactoryLogic.createTerrainRole(
		MonsterRoleType.Support,
		TerrainRoleType.Trigger
	),
	encounterValue: 2,
	area: 'Одна клітинка, до ділянки 4 × 4 клітинки',
	direction: '',
	stamina: {
		base: 0,
		perSquare: 0
	},
	size: 'Будь-яка ділянка',
	link: 'Натискна плита пов’язана з іншим механізмом, який активує після спрацювання.',
	damageMods: [],
	sections: [
		{
			id: 'deactivate',
			content: [
				FactoryLogic.feature.create({
					id: 'deactivate',
					name: 'Deactivate',
					description: `Як маневр, істота поруч із натискною плитою може зробити **тест Ловкості**.

* **11 або менше**: Істота спрацьовує натискну плиту.
* **12-16**: Натискну плиту знешкоджено, але істота сповільнена (до кінця ходу).
* **17+**: Натискну плиту знешкоджено, і вона не спрацьовує.`
				})
			]
		},
		{
			id: 'activate',
			content: [
				FactoryLogic.feature.create({
					id: 'activate',
					name: 'Activate',
					description:
						'Натискна плита налаштована спрацьовувати на істот або об’єкти певного розміру. Вона спрацьовує, коли істота чи об’єкт відповідного розміру входить у її ділянку.'
				})
			]
		},
		{
			id: 'effect',
			content: [
				FactoryLogic.feature.create({
					id: 'effect',
					name: 'Effect',
					description:
						'Пов’язаний механізм активується. Натискна плита автоматично повертається у вихідне положення й може спрацьовувати неодноразово.'
				})
			]
		},
		{
			id: 'hidden',
			content: [
				FactoryLogic.feature.create({
					id: 'hidden',
					name: 'Hidden',
					description:
						'Натискну плиту приховано, доки вона не спрацює або її не виявлять.'
				})
			]
		}
	],
	upgrades: [
		{
			id: 'tripwire',
			label: 'Tripwire',
			cost: -1,
			text: 'Натискна плита замінена на розтяжку, яка може спрацювати лише раз і яку треба зводити вручну. Приховану розтяжку можна виявити за допомогою **простого тесту Інтуїції**.',
			sections: []
		}
	],
	state: {
		squares: 1,
		staminaDamage: 0
	}
};

export const pulley: Terrain = {
	id: 'terrain-pulley',
	name: 'Pulley',
	description:
		'Блокова система з противагою дає змогу швидко піднятися на верх стіни, риштування, вежі чи іншої споруди.',
	category: TerrainCategory.Mechanism,
	level: 1,
	role: FactoryLogic.createTerrainRole(
		MonsterRoleType.Support,
		TerrainRoleType.Trigger
	),
	encounterValue: 1,
	area: '',
	direction: '',
	link: '',
	stamina: {
		base: 1,
		perSquare: 0
	},
	size: FactoryLogic.createSize(1, 'S'),
	damageMods: [],
	sections: [
		{
			id: 'deactivate',
			content: [
				FactoryLogic.feature.create({
					id: 'deactivate',
					name: 'Deactivate',
					description: `Як маневр, істота поруч із блоком може зробити **тест Ловкості**.
			
* **11 або менше**: Істота спрацьовує блок.
* **12-16**: Блок знешкоджено, але істота сповільнена (до кінця ходу).
* **17+**: Блок знешкоджено, і він не спрацьовує.`
				})
			]
		},
		{
			id: 'activate',
			content: [
				FactoryLogic.feature.create({
					id: 'activate',
					name: 'Activate',
					description:
						'Істота поруч із блоком використовує маневр, щоб відпустити його.'
				}),
				FactoryLogic.feature.create({
					id: 'effect',
					name: 'Effect',
					description:
						'Істота, що спровокувала ефект, підіймається на верх споруди, до якої прикріплено блок. Блок треба зводити вручну.'
				})
			]
		},
		{
			id: 'Climbable',
			content: [
				FactoryLogic.feature.create({
					id: 'climbable',
					name: 'Climbable',
					description:
						'Істота поруч із блоком може видертися по його мотузках за допомогою **простого тесту Ловкості**, щоб піднятися на верх споруди, до якої його прикріплено.'
				})
			]
		}
	],
	upgrades: [
		{
			id: 'looped-chain',
			label: 'Looped Chain',
			cost: 1,
			text: 'Замість мотузки й блока система використовує замкнений ланцюг із противагою. Такий ланцюг автоматично повертається у вихідне положення й може спрацьовувати неодноразово.',
			sections: []
		}
	],
	state: {
		squares: 1,
		staminaDamage: 0
	}
};

export const ram: Terrain = {
	id: 'terrain-ram',
	name: 'Ram',
	description:
		'Важкий дерев’яний таран падає згори або врізається в бійку, трощачи все на своєму шляху.',
	category: TerrainCategory.Mechanism,
	level: 2,
	role: FactoryLogic.createTerrainRole(
		MonsterRoleType.Ambusher,
		TerrainRoleType.Trap
	),
	encounterValue: 3,
	area: 'Ділянка 1 × 3 клітинки або 2 × 2 клітинки',
	link: '',
	stamina: {
		base: 0,
		perSquare: 3
	},
	size: 'Будь-яка ділянка; крізь неї не можна рухатися',
	direction: 'Один бік тарана вважається фронтальним.',
	damageMods: [],
	sections: [
		{
			id: 'deactivate',
			content: [
				FactoryLogic.feature.create({
					id: 'deactivate',
					name: 'Deactivate',
					description: `Як маневр, істота поруч із тараном може зробити **тест Ловкості**.

* **11 або менше**: Істота спрацьовує таран і зазнає його ефекту, наче перебувала в його клітинці.
* **12-16**: Таран знешкоджено, але істота сповільнена (до кінця ходу).
* **17+**: Таран знешкоджено, і він не спрацьовує.`
				})
			]
		},
		{
			id: 'trigger-effect',
			content: [
				FactoryLogic.feature.create({
					id: 'trigger',
					name: 'Trigger',
					description:
						'Спрацьовує натискна плита, перемикач або інший пов’язаний тригер.'
				}),
				FactoryLogic.feature.create({
					id: 'effect',
					name: 'Effect',
					description: 'The **Ram** ability.'
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'effect-ram',
						name: 'Ram',
						type: FactoryLogic.type.createTrigger(
							'Спрацьовує натискна плита, перемикач або інший пов’язаний тригер.',
							{ free: true }
						),
						keywords: [AbilityKeyword.Weapon, AbilityKeyword.Area],
						distance: [
							FactoryLogic.distance.createSpecial(
								'The area of this ability is the path the ram moves through from its starting position.'
							)
						],
						target: 'Each creature and object in the area',
						sections: [
							FactoryLogic.createAbilitySectionRoll(
								FactoryLogic.createPowerRoll({
									bonus: 2,
									tier1: '3 шкоди; зсунути на 1, ігноруючи стійкість',
									tier2: '6 шкоди; відштовхнути на 3',
									tier3: '9 шкоди; відштовхнути на 5'
								})
							),
							FactoryLogic.createAbilitySectionText(
								'Ціль, яку зсуває таран, опиняється з одного чи з іншого його боку (визначте випадково). Таран треба зводити вручну.'
							)
						]
					})
				})
			]
		},
		{
			id: 'hidden',
			content: [
				FactoryLogic.feature.create({
					id: 'hidden',
					name: 'Hidden',
					description: 'Таран приховано, доки він не спрацює або його не виявлять.'
				})
			]
		}
	],
	upgrades: [
		{
			id: 'stone',
			label: 'Stone',
			cost: 1,
			text: 'Таран зроблено з каменю, він має 6 витривалості за клітинку й завдає додатково 1d3 шкоди.',
			sections: []
		},
		{
			id: 'metal',
			label: 'Metal',
			cost: 2,
			text: 'Таран зроблено з металу, він має 9 витривалості за клітинку й завдає додатково 1d6 шкоди.',
			sections: []
		},
		{
			id: 'repeating',
			label: 'Repeating',
			cost: 1,
			text: 'The ram automatically resets at the start of each round.',
			sections: []
		},
		{
			id: 'rapid-repeating',
			label: 'Rapid Repeating',
			cost: 3,
			text: 'The ram automatically resets at the start of each turn.',
			sections: []
		},
		{
			id: 'multiple-rams ',
			label: 'Multiple Rams ',
			cost: 3,
			text: 'Кілька таранів можна використати, щоб зобразити більший механізм, наприклад купу колод, що котяться.',
			sections: []
		}
	],
	state: {
		squares: 1,
		staminaDamage: 0
	}
};

export const switchTerrain: Terrain = {
	id: 'terrain-switch',
	name: 'Switch',
	description:
		'Вмонтований у будь-яку поверхню, цей механізм слугує тригером для іншого пов’язаного механізму.',
	category: TerrainCategory.Mechanism,
	level: 1,
	role: FactoryLogic.createTerrainRole(
		MonsterRoleType.Support,
		TerrainRoleType.Trigger
	),
	encounterValue: 1,
	area: '',
	direction: '',
	stamina: {
		base: 3,
		perSquare: 0
	},
	size: FactoryLogic.createSize(1, 'T'),
	link: 'Перемикач пов’язаний з іншим механізмом, який активує після спрацювання.',
	damageMods: [],
	sections: [
		{
			id: 'deactivate',
			content: [
				FactoryLogic.feature.create({
					id: 'deactivate',
					name: 'Deactivate',
					description: `Як маневр, істота поруч із перемикачем може зробити **тест Ловкості**.
			
* **11 або менше**: Істота спрацьовує перемикач.
* **12-16**: Перемикач знешкоджено, але істота сповільнена (до кінця ходу).
* **17+**: Перемикач знешкоджено, і він не спрацьовує.`
				})
			]
		},
		{
			id: 'activate',
			content: [
				FactoryLogic.feature.create({
					id: 'activate',
					name: 'Activate',
					description:
						'Істота поруч із перемикачем використовує маневр, щоб його спрацювати.'
				}),
				FactoryLogic.feature.create({
					id: 'effect',
					name: 'Effect',
					description:
						'Пов’язаний механізм активується. Перемикач автоматично повертається у вихідне положення й може спрацьовувати неодноразово.'
				})
			]
		}
	],
	upgrades: [
		{
			id: 'concealed',
			label: 'Concealed',
			cost: 1,
			text: 'Перемикач приховано, доки він не спрацює або його не виявлять.',
			sections: []
		}
	],
	state: {
		squares: 1,
		staminaDamage: 0
	}
};
