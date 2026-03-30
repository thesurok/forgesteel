import { AbilityDistanceType } from '@/enums/ability-distance-type';
import { AbilityKeyword } from '@/enums/ability-keyword';
import { FactoryLogic } from '@/logic/factory-logic';
import { MonsterRoleType } from '@/enums/monster-role-type';
import { Terrain } from '@/models/terrain';
import { TerrainCategory } from '@/enums/terrain-category';
import { TerrainRoleType } from '@/enums/terrain-role-type';

export const arrowLauncher: Terrain = {
	id: 'terrain-arrow-launcher',
	name: 'Arrow Launcher',
	description: 'Малий дерев’яний візок використовує алхімічні ракети, щоб за раз випускати до сотні стріл по широкій ділянці.',
	category: TerrainCategory.SiegeEngine,
	level: 2,
	role: FactoryLogic.createTerrainRole(MonsterRoleType.Artillery, TerrainRoleType.SiegeEngine),
	encounterValue: 8,
	area: '',
	direction: '',
	link: '',
	stamina: {
		base: 30,
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
					description: `
Як маневр, істота поруч зі стрілометом може зробити **тест Ловкості**.

* **11-**: Істота випадково активує вміння **Arrow Storm**.
* **12-16**: Стріломет знешкоджено, але істота сповільнена (до кінця ходу).
* **17+**: Стріломет знешкоджено, і його більше не можна використовувати.`
				})
			]
		},
		{
			id: 'arrow-storm',
			content: [
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'arrow-storm',
						name: 'Arrow Storm',
						type: FactoryLogic.type.createMain({ qualifiers: ['adjacent creature'] }),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Ranged, AbilityKeyword.Weapon],
						distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Cube, value: 5, within: 20 })],
						target: 'Each creature and object in the area',
						sections: [
							FactoryLogic.createAbilitySectionRoll(
								FactoryLogic.createPowerRoll({
									bonus: 0,
									tier1: '5 шкоди',
									tier2: '8 шкоди',
									tier3: '11 шкоди'
								})
							),
							FactoryLogic.createAbilitySectionText('Цю здібність не можна використовувати повторно, доки стріломет не буде перезаряджено.')
						]
					})
				})
			]
		},
		{
			id: 'reload',
			content: [
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'reload',
						name: 'Reload',
						type: FactoryLogic.type.createMain({ qualifiers: ['adjacent creature'] }),
						sections: [
							FactoryLogic.createAbilitySectionText('Стріломет перезаряджено, що дозволяє знову використати **Arrow Storm**. Ця дія може бути виконана лише один раз за раунд.')
						]
					})
				})
			]
		},
		{
			id: 'spot',
			content: [
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'spot',
						name: 'Spot',
						type: FactoryLogic.type.createMain({ qualifiers: ['adjacent creature'] }),
						sections: [
							FactoryLogic.createAbilitySectionText('Наступне використання **Arrow Storm** отримує перевагу і має +10 до дальності. Цю дію можна використати лише один раз за раунд.')
						]
					})
				})
			]
		},
		{
			id: 'move',
			content: [
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'move',
						name: 'Move',
						type: FactoryLogic.type.createMain({ qualifiers: ['adjacent creature'] }),
						sections: [
							FactoryLogic.createAbilitySectionText('Стріломет і істота, що використовує цю дію, переміщуються разом до 3 клітинок.')
						]
					})
				})
			]
		}
	],
	upgrades: [
		{
			id: 'flaming-arrows',
			label: 'Flaming Arrows',
			cost: 1,
			text: '**Arrow Storm** завдає вогняної шкоди й може підпалювати легкозаймисті об’єкти в своїй ділянці.',
			sections: []
		},
		{
			id: 'screamers',
			label: 'Screamers',
			cost: 3,
			text: 'Під час пострілу й падіння на цілі стріли видають пронизливий свист. Вміння Screamers замінює **Arrow Storm**.',
			sections: [
				{
					id: 'screamers',
					content: [
						FactoryLogic.feature.createAbility({
							ability: FactoryLogic.createAbility({
								id: 'screamers',
								name: 'Screamers',
								type: FactoryLogic.type.createMain({ qualifiers: ['adjacent creature'] }),
								keywords: [AbilityKeyword.Area, AbilityKeyword.Ranged, AbilityKeyword.Weapon],
								distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Cube, value: 5, within: 20 })],
								target: 'Each creature and object in the area',
								sections: [
									FactoryLogic.createAbilitySectionRoll(
										FactoryLogic.createPowerRoll({
											bonus: 0,
											tier1: '5 шкоди; Р<0 приголомшений (рят. кидок завершує)',
											tier2: '8 шкоди; Р<1 приголомшений (рят. кидок завершує)',
											tier3: '11 шкоди; Р<1 зляканий (рят. кидок завершує)'
										})
									),
									FactoryLogic.createAbilitySectionText('Цю здібність не можна використовувати повторно, доки стріломет не буде перезаряджено.')
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

export const boilingOilCauldron: Terrain = {
	id: 'terrain-boiling-oil-cauldron',
	name: 'Boiling Oil Cauldron',
	description: 'Великий казан киплячої олії готовий, щоб виливати її на ворогів.',
	category: TerrainCategory.SiegeEngine,
	level: 3,
	role: FactoryLogic.createTerrainRole(MonsterRoleType.Defender, TerrainRoleType.Fortification),
	encounterValue: 10,
	area: '',
	direction: '',
	link: '',
	stamina: {
		base: 50,
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
					description: `
Як маневр, істота поруч із казаном киплячої олії може зробити **тест Ловкості**.

* **11-**: Істота випадково активує вміння **Boiling Oil**.
* **12-16**: Казан киплячої олії знешкоджено, але істота сповільнена (до кінця ходу).
* **17+**: Казан киплячої олії знешкоджено, і його більше не можна використовувати.`
				})
			]
		},
		{
			id: 'boiling-oil',
			content: [
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'boiling-oil',
						name: 'Boiling Oil',
						type: FactoryLogic.type.createMain({ qualifiers: ['adjacent creature'] }),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Weapon],
						distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Cube, value: 3, within: 1 })],
						target: 'Each creature and object in the area',
						sections: [
							FactoryLogic.createAbilitySectionRoll(
								FactoryLogic.createPowerRoll({
									bonus: 2,
									tier1: '5 вогняної шкоди; С<1 палає (рят. кидок завершує)',
									tier2: '9 вогняної шкоди; С<2 палає (рят. кидок завершує)',
									tier3: '12 вогняної шкоди; С<3 палає (рят. кидок завершує)'
								})
							),
							FactoryLogic.createAbilitySectionText('Якщо киплячу олію виливають зверху на цілі, вона отримує перевагу з висоти і має перевагу на кидок сили. Палаюча істота отримує 1d6 вогняної шкоди на початку кожного свого ходу. Палаючий обʼєкт отримує 1d6 вогняної шкоди в кінці кожного раунду. Цю здібність не можна використовувати повторно, доки казан з киплячою олією не буде перезаряджено.')
						]
					})
				})
			]
		},
		{
			id: 'reload',
			content: [
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'reload',
						name: 'Reload',
						type: FactoryLogic.type.createMain({ qualifiers: ['adjacent creature'] }),
						sections: [
							FactoryLogic.createAbilitySectionText('Казан з киплячою олією перезаряджено, що дозволяє знову використати **Boiling Oil**. Цю дію можна виконати лише один раз за раунд.')
						]
					})
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

export const catapult: Terrain = {
	id: 'terrain-catapult',
	name: 'Catapult',
	description: 'Ця масивна машина з противагою запускає важкий снаряд для нищівного удару.',
	category: TerrainCategory.SiegeEngine,
	level: 3,
	role: FactoryLogic.createTerrainRole(MonsterRoleType.Artillery, TerrainRoleType.SiegeEngine),
	encounterValue: 10,
	area: '',
	direction: '',
	link: '',
	stamina: {
		base: 50,
		perSquare: 0
	},
	size: FactoryLogic.createSize(2),
	damageMods: [],
	sections: [
		{
			id: 'deactivate',
			content: [
				FactoryLogic.feature.create({
					id: 'deactivate',
					name: 'Deactivate',
					description: `
Як маневр, істота поруч із катапультою може зробити **тест Ловкості**.

* **11-**: Істота випадково активує вміння **Arcing Shot**.
* **12-16**: Катапульту знешкоджено, але істота сповільнена (до кінця ходу).
* **17+**: Катапульту знешкоджено, і її більше не можна використовувати.`
				})
			]
		},
		{
			id: 'arcing-shot',
			content: [
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'arcing-shot',
						name: 'Arcing Shot',
						type: FactoryLogic.type.createMain({ qualifiers: ['adjacent creature'] }),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Ranged, AbilityKeyword.Weapon],
						distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Cube, value: 3, within: 20 })],
						target: 'Each creature and object in the area',
						sections: [
							FactoryLogic.createAbilitySectionRoll(
								FactoryLogic.createPowerRoll({
									bonus: 2,
									tier1: '5 шкоди',
									tier2: '9 шкоди; Л<0 відштовхнути на 1',
									tier3: '12 шкоди; Л<1 відштовхнути на 2'
								})
							),
							FactoryLogic.createAbilitySectionText('Лінія дії цієї здібності — дуга, яку можна простежити над перешкодами між катапультoю і цільовою зоною. Цю здібність не можна використовувати повторно, доки катапульту не буде перезаряджено.')
						]
					})
				})
			]
		},
		{
			id: 'reload',
			content: [
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'reload',
						name: 'Reload',
						type: FactoryLogic.type.createMain({ qualifiers: ['adjacent creature'] }),
						sections: [
							FactoryLogic.createAbilitySectionText('Катапульта перезаряджена, що дозволяє знову використати **Arcing Shot**. Цю дію можна виконати лише один раз за раунд.')
						]
					})
				})
			]
		},
		{
			id: 'spot',
			content: [
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'spot',
						name: 'Spot',
						type: FactoryLogic.type.createMain({ qualifiers: ['adjacent creature'] }),
						sections: [
							FactoryLogic.createAbilitySectionText('Наступне використання **Arcing Shot** отримує перевагу і має +10 до дальності. Цю дію можна використати лише один раз за раунд.')
						]
					})
				})
			]
		},
		{
			id: 'move',
			content: [
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'move',
						name: 'Move',
						type: FactoryLogic.type.createMain({ qualifiers: ['adjacent creature'] }),
						sections: [
							FactoryLogic.createAbilitySectionText('Катапульта і істота, яка використовує цю дію, переміщуються разом до 2 клітинок.')
						]
					})
				})
			]
		}
	],
	upgrades: [
		{
			id: 'fire-my-boy',
			label: 'Air Assault',
			cost: 2,
			text: 'Сторона, що використовує катапульту, навчила свої війська безпечно застосовувати цю облогову машину, щоб запускати себе через поле бою. Як основна дія сусідньої істоти катапульта може вертикально відштовхнути на 10 будь-якого союзника розміру 1L або менше. Якщо союзник приземляється в незайнятий простір, він не отримує шкоди.',
			sections: []
		},
		{
			id: 'i-love-it-here',
			label: 'Flammable',
			cost: 2,
			text: '**Arcing Shot** завдає вогняної шкоди, а ділянка цього вміння палає до кінця сутички. Будь-яка істота, що вперше за раунд входить у цю ділянку або починає там свій хід, отримує 2 вогняної шкоди.',
			sections: []
		}
	],
	state: {
		squares: 1,
		staminaDamage: 0
	}
};

export const explodingMillWheel: Terrain = {
	id: 'terrain-exploding-mill-wheel',
	name: 'Exploding Mill Wheel',
	description: 'Масивне дерев’яне колесо наповнене вибухівкою й котиться на ворожі сили або укріплення, готове вибухнути.',
	category: TerrainCategory.SiegeEngine,
	level: 3,
	role: FactoryLogic.createTerrainRole(MonsterRoleType.Artillery, TerrainRoleType.SiegeEngine),
	encounterValue: 10,
	area: '',
	direction: '',
	link: '',
	stamina: {
		base: 25,
		perSquare: 0
	},
	size: FactoryLogic.createSize(2),
	damageMods: [],
	sections: [
		{
			id: 'deactivate',
			content: [
				FactoryLogic.feature.create({
					id: 'deactivate',
					name: 'Deactivate',
					description: `
Як маневр, істота поруч із вибуховим млиновим колесом, яке не котиться, може зробити **тест Ловкості**.

* **11-**: Істота випадково активує вміння **Roll the Wheel**.
* **12-16**: Вибухове млинове колесо знешкоджено, але істота сповільнена (до кінця ходу).
* **17+**: Вибухове млинове колесо знешкоджено, і його більше не можна використовувати.

Коли колесо вже котиться, його не можна знешкодити. Втім, його можна підірвати раніше, знищивши або заблокувавши його рух достатньо великою істотою чи об’єктом.`
				})
			]
		},
		{
			id: 'roll-the-wheel',
			content: [
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'roll-the-wheel',
						name: 'Roll the Wheel',
						type: FactoryLogic.type.createMain({ qualifiers: ['adjacent creature'] }),
						keywords: [AbilityKeyword.Area],
						distance: [FactoryLogic.distance.createSpecial('Особливе')],
						target: 'Each creature and object in the area',
						sections: [
							FactoryLogic.createAbilitySectionText(`
Коли це вміння застосовується, а потім на початку кожного наступного ходу, вибухове млинове колесо котиться, переміщуючись на 2 клітинки по прямій. Кожна істота й об’єкт розміру 2 або менше в ділянці, визначеній рухом колеса, стає ціллю наступного кидка сили. Ціль, примусово переміщена таким чином, опиняється з одного чи з іншого боку колеса, як вирішить Режисер.

* **11-**: 5 шкоди; відштовхнути на 1
* **12-16**: 9 шкоди; відштовхнути на 2
* **17+**: 12 шкоди; відштовхнути на 3

Якщо колесо входить у простір будь-якої істоти чи об’єкта розміру 3 або більше, або якщо його витривалість падає до 0, його рух припиняється й воно вибухає. Кожна істота й об’єкт у вибуху 5 із центром на колесі стає ціллю наступного кидка сили.

* **11-**: 5 шкоди; відштовхнути на 1; С<0 палає (рят. кидок завершує)
* **12-16**: 9 шкоди; відштовхнути на 2; С<1 палає (рят. кидок завершує)
* **17+**: 12 шкоди; відштовхнути на 3; С<2 палає (рят. кидок завершує)

Палаюча істота отримує 1d6 вогняної шкоди на початку кожного свого ходу. Палаючий об’єкт отримує 1d6 вогняної шкоди наприкінці кожного раунду.`)
						]
					})
				})
			]
		}
	],
	upgrades: [
		{
			id: 'piloted',
			label: 'Piloted',
			cost: 4,
			text: `
Колесо обладнано механізмом керування та сидінням пілота для істоти розміру 1M або менше. Як дією руху пілот може повернути колесо в будь-який бік, поки воно рухається. Як основною дією пілот може вистрибнути з сидіння, приземлившись у суміжному просторі, поки колесо продовжує котитися по прямій.

Без належної підготовки, щоб зрозуміти, як керувати колесом, потрібен **тест Розуму**.

* **11-**: Колесо негайно вибухає, наче врізалося в істоту чи об’єкт розміру 3 або більше.
* **12-16**: Істоті не вдається керувати колесом.
* **17+**: Істота може керувати колесом.

На природні 19 або 20 істота може і керувати колесом, і знешкодити його вибухівку як маневр.`,
			sections: []
		}
	],
	state: {
		squares: 1,
		staminaDamage: 0
	}
};

export const fieldBallista: Terrain = {
	id: 'terrain-field-ballista',
	name: 'Field Ballista',
	description: 'Масивний арбалет випускає товсті металеві болти з нищівним ефектом.',
	category: TerrainCategory.SiegeEngine,
	level: 2,
	role: FactoryLogic.createTerrainRole(MonsterRoleType.Artillery, TerrainRoleType.SiegeEngine),
	encounterValue: 8,
	area: '',
	direction: '',
	link: '',
	stamina: {
		base: 40,
		perSquare: 0
	},
	size: FactoryLogic.createSize(2),
	damageMods: [],
	sections: [
		{
			id: 'deactivate',
			content: [
				FactoryLogic.feature.create({
					id: 'deactivate',
					name: 'Deactivate',
					description: `
Як маневр, істота поруч із польовою баллістою може зробити **тест Ловкості**.

* **11-**: Істота випадково активує вміння **Release Bolt**.
* **12-16**: Польову баллісту знешкоджено, але істота сповільнена (до кінця ходу).
* **17+**: Польову баллісту знешкоджено, і її більше не можна використовувати.`
				})
			]
		},
		{
			id: 'release-bolt',
			content: [
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'release-bolt',
						name: 'Release Bolt',
						type: FactoryLogic.type.createMain({ qualifiers: ['adjacent creature'] }),
						keywords: [AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Ranged],
						distance: [FactoryLogic.distance.createRanged(20)],
						target: 'Одна істота або предмет',
						sections: [
							FactoryLogic.createAbilitySectionRoll(
								FactoryLogic.createPowerRoll({
									bonus: 2,
									tier1: '5 шкоди',
									tier2: '8 шкоди; С<1 відштовхнути на 1',
									tier3: '11 шкоди; С<2 відштовхнути на 2'
								})
							),
							FactoryLogic.createAbilitySectionText('Цю здібність не можна використовувати повторно, доки польову баллісту не буде перезаряджено.')
						]
					})
				})
			]
		},
		{
			id: 'reload',
			content: [
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'reload',
						name: 'Reload',
						type: FactoryLogic.type.createMain({ qualifiers: ['adjacent creature'] }),
						sections: [
							FactoryLogic.createAbilitySectionText('Польову баллісту перезаряджено, що дозволяє знову використати **Release Bolt**. Цю дію можна виконати лише один раз за раунд.')
						]
					})
				})
			]
		},
		{
			id: 'spot',
			content: [
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'spot',
						name: 'Spot',
						type: FactoryLogic.type.createMain({ qualifiers: ['adjacent creature'] }),
						sections: [
							FactoryLogic.createAbilitySectionText('Наступне використання **Release Bolt** отримує перевагу і має +10 до дальності. Цю дію можна використати лише один раз за раунд.')
						]
					})
				})
			]
		},
		{
			id: 'move',
			content: [
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'move',
						name: 'Move',
						type: FactoryLogic.type.createMain({ qualifiers: ['adjacent creature'] }),
						sections: [
							FactoryLogic.createAbilitySectionText('Польова балліста і істота, яка використовує цю дію, переміщуються разом до 3 клітинок.')
						]
					})
				})
			]
		}
	],
	upgrades: [
		{
			id: 'penetrating-bolt',
			label: 'Penetrating Bolt',
			cost: 2,
			text: 'Польова балліста також націлюється на дві найближчі додаткові істоти чи об’єкти по прямій за початковою ціллю.',
			sections: []
		},
		{
			id: 'chain-bolt',
			label: 'chain-bolt',
			cost: 2,
			text: 'Болти польової баллісти оснащено важкими ланцюгами, що обвивають цілі. Вміння **Chain Bolt** замінює **Release Bolt**, а польова балліста отримує вміння **Crank the Chain**.',
			sections: [
				{
					id: 'chain-bolt',
					content: [
						FactoryLogic.feature.createAbility({
							ability: FactoryLogic.createAbility({
								id: 'chain-bolt',
								name: 'Chain Bolt',
								type: FactoryLogic.type.createMain({ qualifiers: ['adjacent creature'] }),
								keywords: [AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon],
								distance: [FactoryLogic.distance.createRanged(20)],
								target: 'Одна істота або предмет',
								sections: [
									FactoryLogic.createAbilitySectionRoll(
										FactoryLogic.createPowerRoll({
											bonus: 2,
											tier1: '4 шкоди',
											tier2: '7 шкоди; С<1 сповільнений (рят. кидок завершує)',
											tier3: '10 шкоди; С<2 сповільнений (рят. кидок завершує)'
										})
									),
									FactoryLogic.createAbilitySectionText('Цю здібність не можна використовувати повторно, доки польову баллісту не буде перезаряджено.')
								]
							})
						}),
						FactoryLogic.feature.createAbility({
							ability: FactoryLogic.createAbility({
								id: 'crank-chain',
								name: 'Crank Chain',
								type: FactoryLogic.type.createMain({ qualifiers: ['adjacent creature'] }),
								keywords: [AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon],
								distance: [FactoryLogic.distance.createRanged(20)],
								target: 'Одна істота',
								sections: [
									FactoryLogic.createAbilitySectionField({
										name: 'Особливе',
										effect: 'Ціль має бути сповільнена польовою баллістою.'
									}),
									FactoryLogic.createAbilitySectionRoll(
										FactoryLogic.createPowerRoll({
											bonus: 2,
											tier1: 'Притягнути на 1',
											tier2: 'Притягнути на 3',
											tier3: 'Притягнути на 5'
										})
									),
									FactoryLogic.createAbilitySectionText('Це примусове переміщення провокує атаки за можливістю.')
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

export const ironDragon: Terrain = {
	id: 'terrain-iron-dragon',
	name: 'Iron Dragon',
	description: 'Масивний металевий пристрій використовує хутра й рідке паливо, щоб викидати струмені полум’я.',
	category: TerrainCategory.SiegeEngine,
	level: 4,
	role: FactoryLogic.createTerrainRole(MonsterRoleType.Artillery, TerrainRoleType.SiegeEngine),
	encounterValue: 12,
	area: '',
	direction: '',
	link: '',
	stamina: {
		base: 60,
		perSquare: 0
	},
	size: FactoryLogic.createSize(2),
	damageMods: [],
	sections: [
		{
			id: 'deactivate',
			content: [
				FactoryLogic.feature.create({
					id: 'deactivate',
					name: 'Deactivate',
					description: `
Як маневр, істота поруч із Залізним Драконом може зробити **тест Ловкості**.

* **11-**: Істота випадково активує вміння **Gout of Flame**.
* **12-16**: Залізного Дракона знешкоджено, але істота сповільнена (до кінця ходу).
* **17+**: Залізного Дракона знешкоджено, і його більше не можна використовувати.`
				})
			]
		},
		{
			id: 'gout-of-flame',
			content: [
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'gout-of-flame',
						name: 'Gout of Flame',
						type: FactoryLogic.type.createMain({ qualifiers: ['adjacent creature'] }),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Ranged],
						distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Line, value: 8, value2: 2, within: 1 })],
						target: 'Each creature and object in the area',
						sections: [
							FactoryLogic.createAbilitySectionRoll(
								FactoryLogic.createPowerRoll({
									bonus: 2,
									tier1: '6 вогняної шкоди; Л < 0 палає (рят. кидок завершує)',
									tier2: '10 вогняної шкоди; Л < 1 палає (рят. кидок завершує)',
									tier3: '13 вогняної шкоди; Л < 2 палає (рят. кидок завершує)'
								})
							),
							FactoryLogic.createAbilitySectionText('Палаюча істота отримує 1d6 вогняної шкоди на початку кожного свого ходу. Палаючий обʼєкт отримує 1d6 вогняної шкоди в кінці кожного раунду. Цю здібність не можна використовувати повторно, доки Залізного Дракона не буде перезаряджено.')
						]
					})
				})
			]
		},
		{
			id: 'reload',
			content: [
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'reload',
						name: 'Reload',
						type: FactoryLogic.type.createMain({ qualifiers: ['adjacent creature'] }),
						sections: [
							FactoryLogic.createAbilitySectionText('Залізного Дракона перезаряджено, що дозволяє знову використати **Gout of Flame**. Цю дію можна виконати лише один раз за раунд.')
						]
					})
				})
			]
		},
		{
			id: 'spot',
			content: [
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'spot',
						name: 'Spot',
						type: FactoryLogic.type.createMain({ qualifiers: ['adjacent creature'] }),
						sections: [
							FactoryLogic.createAbilitySectionText('Наступне використання **Gout of Flame** отримує перевагу і має +10 до дальності. Цю дію можна використати лише один раз за раунд.')
						]
					})
				})
			]
		},
		{
			id: 'move',
			content: [
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'move',
						name: 'Move',
						type: FactoryLogic.type.createMain({ qualifiers: ['adjacent creature'] }),
						sections: [
							FactoryLogic.createAbilitySectionText('Залізний Дракон і істота, що використовує цю дію, переміщуються разом до 2 клітинок.')
						]
					})
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

export const watchtower: Terrain = {
	id: 'terrain-watchtower',
	name: 'Watchtower',
	description: 'Міцна дерев’яна вежа з внутрішніми драбинами або сходами дає нападникам укриття й перевагу висоти.',
	category: TerrainCategory.SiegeEngine,
	level: 2,
	role: FactoryLogic.createTerrainRole(MonsterRoleType.Defender, TerrainRoleType.Fortification),
	encounterValue: 8,
	area: '',
	direction: '',
	link: '',
	stamina: {
		base: 50,
		perSquare: 0
	},
	size: FactoryLogic.createSize(3),
	damageMods: [],
	sections: [
		{
			id: 'deactivate',
			content: [
				FactoryLogic.feature.create({
					id: 'deactivate',
					name: 'Deactivate',
					description: 'Сторожову вежу треба повністю знищити.'
				})
			]
		},
		{
			id: 'high-ground',
			content: [
				FactoryLogic.feature.create({
					id: 'high-ground',
					name: 'High Ground and Cover',
					description: 'Істоти, які мають доступ до внутрішніх драбин або сходів сторожової вежі, мають перевагу висоти й укриття проти істот поза вежею.'
				})
			]
		},
		{
			id: 'getting-inside',
			content: [
				FactoryLogic.feature.create({
					id: 'getting-inside',
					name: 'Getting Inside',
					description: `
Істота зовні й поруч зі сторожовою вежею може потрапити всередину, видершись на неї за допомогою тесту Ловкості або проламавшись усередину за допомогою **тесту Могутності**.

* **11-**: 1d6 шкоди; істота лишається зовні сторожової вежі
* **12-16**: Істота лишається зовні сторожової вежі.
* **17+**: Істота потрапляє до сторожової вежі.`
				})
			]
		}
	],
	upgrades: [
		{
			id: 'ballista-empowerment',
			label: 'Ballista Empowerment',
			cost: 12,
			text: 'Сторожову вежу обладнано польовою баллістою, якою можуть користуватися істоти у вежі. Баллісту не можна переміщувати.',
			sections: []
		},
		{
			id: 'boiling-oil-cauldron',
			label: 'Boiling Oil Cauldron',
			cost: 17,
			text: 'Сторожову вежу обладнано казаном киплячої олії, яким можуть користуватися істоти у вежі.',
			sections: []
		},
		{
			id: 'spyglass',
			label: 'Spyglass',
			cost: 2,
			text: 'Будь-яка істота у сторожовій вежі може скористатися підзорною трубою, щоб шукати прихованих істот навколо вежі, отримуючи перевагу на тест Інтуїції та збільшуючи відстань, на якій можна помітити істот, до 15 клітинок.',
			sections: []
		},
		{
			id: 'stone-tower',
			label: 'Stone Tower',
			cost: 2,
			text: 'Сторожову вежу укріплено каменем, і вона має 75 витривалості.',
			sections: []
		},
		{
			id: 'iron-tower',
			label: 'Iron Tower',
			cost: 4,
			text: 'Сторожову вежу укріплено каменем і залізом, і вона має 100 витривалості.',
			sections: []
		}
	],
	state: {
		squares: 1,
		staminaDamage: 0
	}
};
