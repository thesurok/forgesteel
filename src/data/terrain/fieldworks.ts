import { AbilityKeyword } from '@/enums/ability-keyword';
import { FactoryLogic } from '@/logic/factory-logic';
import { MonsterRoleType } from '@/enums/monster-role-type';
import { Terrain } from '@/models/terrain';
import { TerrainCategory } from '@/enums/terrain-category';
import { TerrainRoleType } from '@/enums/terrain-role-type';

export const archersStakes: Terrain = {
	id: 'terrain-archers-stakes',
	name: 'Archer\'s Stakes',
	description:
		'Ряд гострих кілків виставлено вістрям назовні, щоб захищати оборонців від наскоків та інших прямих атак.',
	category: TerrainCategory.Fieldwork,
	level: 1,
	role: FactoryLogic.createTerrainRole(
		MonsterRoleType.Defender,
		TerrainRoleType.Fortification
	),
	encounterValue: 1,
	area: 'Ділянка 4 x 1 клітинка',
	direction: 'Один бік кілків вважається фронтальним.',
	link: '',
	stamina: {
		base: 0,
		perSquare: 3
	},
	size: 'Одна або більше клітинок важкого ґрунту',
	damageMods: [],
	sections: [
		{
			id: 'deactivate',
			content: [
				FactoryLogic.feature.create({
					id: 'deactivate',
					name: 'Deactivate',
					description: 'Кожну клітинку кілків треба знищувати окремо.'
				})
			]
		},
		{
			id: 'activate',
			content: [
				FactoryLogic.feature.create({
					id: 'activate',
					name: 'Activate',
					description: 'Істота входить у ділянку кілків із фронтального боку.'
				}),
				FactoryLogic.feature.create({
					id: 'effect',
					name: 'Effect',
					description:
						'Істота, що спровокувала ефект, отримує 2 шкоди за кожну клітинку кілків, у яку входить. Якщо її примусово переміщують у ділянку кілків, вона додатково отримує 3 шкоди.'
				})
			]
		},
		{
			id: 'allied-awareness',
			content: [
				FactoryLogic.feature.create({
					id: 'allied-awareness',
					name: 'Allied Awareness',
					description:
						'Союзники ігнорують важкий ґрунт, створений кілками, не отримують шкоди від руху крізь них, якщо не були примусово переміщені, і мають укриття, перебуваючи в ділянці кілків стрільців.'
				})
			]
		}
	],
	upgrades: [
		{
			id: 'poison',
			label: 'Poison',
			cost: 2,
			text: 'На вістря кілків нанесено отруту. Будь-яка істота, що отримує шкоду від кілків, також отримує 1d6 отруйної шкоди на початку кожного свого ходу (рят. кидок закінчує).',
			sections: []
		},
		{
			id: 'sticky',
			label: 'Sticky',
			cost: 3,
			text: 'На кілки та землю між ними нанесено липкий слиз або павутиння. Будь-яка істота, що входить у ділянку кілків, окрім інших ефектів кілків також провокує вміння *Sticky Stakes*.',
			sections: [
				{
					id: 'sticky',
					content: [
						FactoryLogic.feature.createAbility({
							ability: FactoryLogic.createAbility({
								id: 'effect-sticky-stakes',
								name: 'Sticky Stakes',
								type: FactoryLogic.type.createTrigger(
									'Істота чи об’єкт входить у ділянку липких кілків.',
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
											tier1: 'Без ефекту',
											tier2: 'Л<1 сповільнений (рят. кидок завершує)',
											tier3: 'Л<2 скутий (рят. кидок завершує)'
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

export const bearTrap: Terrain = {
	id: 'terrain-bear-trap',
	name: 'Bear Trap',
	description:
		'Пара сталевих щелеп на пружині готова клацнути, щойно на неї наступлять.',
	category: TerrainCategory.Fieldwork,
	level: 1,
	role: FactoryLogic.createTerrainRole(
		MonsterRoleType.Ambusher,
		TerrainRoleType.Trap
	),
	encounterValue: 2,
	area: '',
	direction: '',
	link: '',
	stamina: {
		base: 6,
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
					description: `Як маневр, істота поруч із ведмежим капканом може зробити **тест Ловкості**.

* **11 або менше**: Істота спрацьовує пастку й зазнає її ефекту, наче перебувала в її клітинці.
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
						'Ведмежий капкан налаштований спрацьовувати на істот або об’єкти певного розміру чи більшого. Пастка спрацьовує, коли істота чи об’єкт відповідного розміру входить у її клітинку.'
				}),
				FactoryLogic.feature.create({
					id: 'effect',
					name: 'Effect',
					description:
						'Істота чи об’єкт, що спровокували ефект, завершує рух і стає ціллю вміння *Bear Trap*.'
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'effect-bear-trap',
						name: 'Bear Trap',
						type: FactoryLogic.type.createTrigger(
							'Істота чи об’єкт відповідного розміру входить у клітинку пастки.',
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
									tier1: 'Ціль зміщується на 1 клітинку від пастки.',
									tier2: '3 шкоди; Л<1 сповільнений (рят. кидок закінчує)',
									tier3: '5 шкоди; Л<2 сповільнений (рят. кидок закінчує)'
								})
							),
							FactoryLogic.createAbilitySectionText(
								'Ведмежий капкан треба зводити вручну.'
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
					description: 'Ведмежий капкан приховано, доки він не спрацює або його не виявлять.'
				})
			]
		}
	],
	upgrades: [
		{
			id: 'chain',
			label: 'Chain',
			cost: 1,
			text: 'Ведмежий капкан прикріплений до землі сталевим ланцюгом. Ціль, яку пастка мала б сповільнити, натомість стає скутою.',
			sections: []
		}
	],
	state: {
		squares: 1,
		staminaDamage: 0
	}
};

export const flammableOil: Terrain = {
	id: 'terrain-flammable-oil',
	name: 'Flammable Oil',
	description:
		'Ділянка землі залита легкозаймистою олією або смолою, готовою спалахнути.',
	category: TerrainCategory.Fieldwork,
	level: 1,
	role: FactoryLogic.createTerrainRole(
		MonsterRoleType.Ambusher,
		TerrainRoleType.Trap
	),
	encounterValue: 2,
	area: '10x10',
	direction: '',
	link: '',
	stamina: {
		base: 0,
		perSquare: 0
	},
	size: 'Одна або більше клітинок',
	damageMods: [],
	sections: [
		{
			id: 'deactivate',
			content: [
				FactoryLogic.feature.create({
					id: 'deactivate',
					name: 'Deactivate',
					description: `Як маневр, істота поруч із ділянкою легкозаймистої олії може зробити **тест Ловкості**.

* **11 або менше**: Істота підпалює олію й зазнає її ефекту, наче перебувала в її ділянці.
* **12-16**: Олія тимчасово спалахує, безпечно вигоряє, а істота отримує 3 вогняної шкоди й починає горіти (рят. кидок закінчує).
* **17+**: Олію знешкоджено, і її більше не можна підпалити.`
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
						'Істота чи об’єкт у клітинці олії отримує вогняну шкоду, або істота чи об’єкт входить у клітинку палаючої олії чи починає там свій хід.'
				}),
				FactoryLogic.feature.create({
					id: 'effect',
					name: 'Effect',
					description:
						'Істота чи об’єкт, що спровокували ефект, отримують 3 вогняної шкоди й починають горіти (рят. кидок закінчує). Палаюча істота отримує 1d6 вогняної шкоди на початку кожного свого ходу. Палаючий об’єкт отримує 1d6 вогняної шкоди наприкінці кожного раунду.'
				})
			]
		},
		{
			id: 'allied-awareness',
			content: [
				FactoryLogic.feature.create({
					id: 'allied-awareness',
					name: 'Allied Awareness',
					description:
						'Союзники зі зброєю мають смолоскипи. Будь-який союзник може як маневр кинути смолоскип на відстань до 5 клітинок і підпалити легкозаймисту олію.'
				})
			]
		}
	],
	upgrades: [
		{
			id: 'concealed',
			label: 'Concealed Oil',
			cost: 1,
			text: 'Олію приховано, доки вона не спалахне.',
			sections: []
		}
	],
	state: {
		squares: 1,
		staminaDamage: 0
	}
};

export const hideyHole: Terrain = {
	id: 'terrain-hidey-hole',
	name: 'Hidey Hole',
	description:
		'У заглибині в підлозі, стіні або стелі можуть ховатися приховані загрози.',
	category: TerrainCategory.Fieldwork,
	level: 1,
	role: FactoryLogic.createTerrainRole(
		MonsterRoleType.Ambusher,
		TerrainRoleType.Fortification
	),
	encounterValue: 1,
	area: '',
	direction: '',
	link: '',
	stamina: {
		base: 0,
		perSquare: 0
	},
	size: 'Одна або більше клітинок',
	damageMods: [],
	sections: [
		{
			id: 'deactivate',
			content: [
				FactoryLogic.feature.create({
					id: 'deactivate',
					name: 'Deactivate',
					description: `Як маневр, істота поруч зі схованкою може зробити **тест Могутності**.

* **11 або менше**: Істота стає скутою (рят. кидок закінчує).
* **12-16**: Схованка обвалюється, але істота сповільнена (рят. кидок закінчує).
* **17+**: Схованка обвалюється й не може використовуватися, доки її не полагодять.`
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
						'Істота починає сутичку у схованці або завершує в ній свій хід.'
				}),
				FactoryLogic.feature.create({
					id: 'effect',
					name: 'Effect',
					description:
						'Істота, що спровокувала ефект, може спробувати сховатися як безкоштовну тригерну дію.'
				})
			]
		}
	],
	upgrades: [
		{
			id: 'network',
			label: 'Network',
			cost: 1,
			text: 'Схованка з’єднана з мережею тунелів. Істота, знайома з цією мережею, може переміститися з однієї схованки в будь-який простір, суміжний із з’єднаною схованкою, якщо має достатньо руху, щоб подолати до цього простору відстань по прямій. Істота, не знайома з мережею, може як маневр зробити складний *тест Інтуїції*, щоб виявити з’єднану схованку.',
			sections: []
		}
	],
	state: {
		squares: 1,
		staminaDamage: 0
	}
};

export const paviseShield: Terrain = {
	id: 'terrain-pavise-shield',
	name: 'Pavise Shield',
	description:
		'Посилений металевий щит, вкопаний у землю, який слугує укриттям для істоти, що ним керує.',
	category: TerrainCategory.Fieldwork,
	level: 1,
	role: FactoryLogic.createTerrainRole(
		MonsterRoleType.Defender,
		TerrainRoleType.Fortification
	),
	encounterValue: 1,
	area: '',
	direction: '',
	link: '',
	stamina: {
		base: 9,
		perSquare: 0
	},
	size: FactoryLogic.createSize(1, 'M'),
	damageMods: [],
	sections: [
		{
			id: 'deactivate',
			content: [
				FactoryLogic.feature.create({
					id: 'deactivate',
					name: 'Deactivate',
					description: `Як маневр, істота поруч із павезою, якою керує інша істота, може зробити **тест Могутності**.
			
* **11 або менше**: Істота, що керує щитом, зберігає над ним контроль і може зробити атаку за можливістю проти істоти, яка проходить тест.
* **12-16**: Істота, що керує щитом, зберігає над ним контроль.
* **17+**: Істота, яка проходить тест, хапає щит і перебирає контроль над ним.`
				})
			]
		},
		{
			id: 'trigger-effect',
			content: [
				FactoryLogic.feature.create({
					id: 'effect',
					name: 'Effect',
					description:
						'Поки істота тримає павезу, вона має укриття й отримує лише половину шкоди від умінь, чия лінія ефекту проходить крізь щит. Павеза отримує іншу половину шкоди.'
				}),
				FactoryLogic.feature.create({
					id: 'movement',
					name: 'Movement',
					description:
						'Поки істота тримає павезу, її швидкість удвічі менша, і вона переміщує щит як схоплену істоту.'
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

export const snareTrap: Terrain = {
	id: 'terrain-snare-trip',
	name: 'Snare Trap',
	description:
		'Мотузяний сильце готове схопити ціль і підвісити її догори дриґом.',
	category: TerrainCategory.Fieldwork,
	level: 1,
	role: FactoryLogic.createTerrainRole(
		MonsterRoleType.Ambusher,
		TerrainRoleType.Trap
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
					description: `Як маневр, істота поруч із сильцем може зробити **тест Ловкості**.
			
* **11 або менше**: Істота спрацьовує пастку й зазнає її ефекту, наче перебувала в її клітинці.
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
						'Сильце налаштоване спрацьовувати на істот або об’єкти певного розміру чи більшого. Пастка спрацьовує, коли істота чи об’єкт відповідного розміру входить у її клітинку.'
				}),
				FactoryLogic.feature.create({
					id: 'effect',
					name: 'Effect',
					description:
						'Істота чи об’єкт, що спровокували ефект, завершує рух і стає ціллю вміння *Snare*.'
				})
			]
		},
		{
			id: 'effect-snare',
			content: [
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'effect-snare',
						name: 'Snare',
						type: FactoryLogic.type.createTrigger(
							'Істота чи об’єкт відповідного розміру входить у клітинку пастки.',
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
									tier1: 'Ціль зміщується на 1 клітинку від сильця.',
									tier2: '1 шкоди; Л<1 скутий (рят. кидок закінчує)',
									tier3: '3 шкоди; Л<2 скутий (рят. кидок закінчує)'
								})
							),
							FactoryLogic.createAbilitySectionText(
								'Істота, скута цим умінням, вертикально притягується на 2 клітинки й повисає в повітрі на линві сильця. Після успішного рятівного кидка сильце розрізають або воно рветься, а істота падає на землю. Сильце треба зводити вручну.'
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
					description: 'Сильце приховано, доки воно не спрацює або його не виявлять.'
				})
			]
		}
	],
	upgrades: [
		{
			id: 'net-trap',
			label: 'Net Trap',
			cost: 1,
			text: 'Сильце перетворюється на сітку, що може обплутати кілька цілей. Сітка має 3 витривалості й займає ділянку 3 x 3 клітинки. Вміння *Snare* втрачає свої наявні ключові слова, отримує ключове слово Area і націлюється на кожну істоту чи об’єкт у ділянці. Пастка може спрацьовувати, коли ціль проходить крізь одну певну клітинку, або коли треба пройти крізь кілька клітинок. Будь-яка істота, що успішно робить рятівний кидок, щоб завершити ефект скутості, завершує цей ефект для всіх цілей, і всі вони падають на землю.',
			sections: []
		}
	],
	state: {
		squares: 1,
		staminaDamage: 0
	}
};

export const spikeTrap: Terrain = {
	id: 'terrain-spike-trap',
	name: 'Spike Trap',
	description:
		'Викопану в землі яму заповнено кілками й замасковано, щоб її було важче виявити.',
	category: TerrainCategory.Fieldwork,
	level: 2,
	role: FactoryLogic.createTerrainRole(
		MonsterRoleType.Ambusher,
		TerrainRoleType.Trap
	),
	encounterValue: 3,
	area: 'Ділянка 2 x 2 клітинки',
	direction: '',
	link: '',
	stamina: {
		base: 6,
		perSquare: 0
	},
	size: 'Одна або більше клітинок',
	damageMods: [],
	sections: [
		{
			id: 'deactivate',
			content: [
				FactoryLogic.feature.create({
					id: 'deactivate',
					name: 'Deactivate',
					description: `Як маневр, істота поруч із ямою з кілками може зробити **тест Ловкості**.

* **11 або менше**: Істота спрацьовує пастку й зазнає її ефекту, наче перебувала в її ділянці.
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
						'Яма з кілками налаштована спрацьовувати на істот або об’єкти певного розміру чи більшого. Пастка спрацьовує, коли істота чи об’єкт відповідного розміру входить у її ділянку.'
				}),
				FactoryLogic.feature.create({
					id: 'effect',
					name: 'Effect',
					description: 'Вміння *Spike Trap*.'
				})
			]
		},
		{
			id: 'effect-spike-trap',
			content: [
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'effect-spike-trap',
						name: 'Spike Trap',
						type: FactoryLogic.type.createTrigger(
							'Істота чи об’єкт відповідного розміру входить у ділянку пастки.',
							{ free: true }
						),
						keywords: [AbilityKeyword.Weapon, AbilityKeyword.Area],
						distance: [FactoryLogic.distance.createMelee()],
						target: 'The triggering creature or object',
						sections: [
							FactoryLogic.createAbilitySectionRoll(
								FactoryLogic.createPowerRoll({
									bonus: 2,
									tier1:
										'3 шкоди; ціль зміщується на 1 клітинку від пастки',
									tier2: '4 шкоди; ціль падає в яму; Л < 0 розпластаний',
									tier3:
										'6 шкоди; ціль падає в яму; Л < 1 розпластаний; скутий (рят. кидок закінчує)'
								})
							),
							FactoryLogic.createAbilitySectionText(
								'Ціль завершує свій рух, коли входить у ділянку пастки. Яма зазвичай має глибину 2 клітинки. Пастку треба зводити вручну.'
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
					description: 'Яму з кілками приховано, доки вона не спрацює або її не виявлять.'
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
