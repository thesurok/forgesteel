import { AbilityDistanceType } from '@/enums/ability-distance-type';
import { AbilityKeyword } from '@/enums/ability-keyword';
import { FactoryLogic } from '@/logic/factory-logic';
import { MonsterRoleType } from '@/enums/monster-role-type';
import { Terrain } from '@/models/terrain';
import { TerrainCategory } from '@/enums/terrain-category';
import { TerrainRoleType } from '@/enums/terrain-role-type';

export const angryBeehive: Terrain = {
	id: 'terrain-angry-beehive',
	name: 'Розгніваний вулик',
	description: 'Цей вулик повний розгніваних бджіл, які збиваються в рій і нападають від найменшої провокації.',
	category: TerrainCategory.Environmental,
	level: 2,
	role: FactoryLogic.createTerrainRole(MonsterRoleType.Harrier, TerrainRoleType.Hazard),
	encounterValue: 2,
	area: '',
	direction: '',
	link: '',
	stamina: {
		base: 3,
		perSquare: 0
	},
	size: FactoryLogic.createSize(1, 'S'),
	damageMods: [],
	sections: [
		{
			id: 'angry-beehive-details',
			content: [
				FactoryLogic.feature.create({
					id: 'deactivate',
					name: 'Знешкодження',
					description: 'Вулик не можна знешкодити. Якщо він отримує шкоду або його знищують, із нього виривається рій бджіл.'
				}),
				FactoryLogic.feature.create({
					id: 'activate',
					name: 'Спрацювання',
					description: 'Істота входить у простір вулика або суміжний із ним простір без зміщення.'
				}),
				FactoryLogic.feature.create({
					id: 'effect',
					name: 'Ефект',
					description: 'Вулик прибирають із мапи сутички, а в одній клітинці простору істоти, що спровокувала ефект, розміщують рій бджіл. Будь-яка істота, що починає свій хід у просторі рою, отримує 3 отруйної шкоди. На початку кожного раунду рій переміщується на 1 клітинку, а його розмір збільшується на 1 клітинку з кожного боку (до 2 x 2 клітинок, 3 x 3 клітинок тощо), надаючи перевагу клітинкам у просторі істоти. Через 3 раунди рій розсіюється.'
				})
			]
		}
	],
	upgrades: [
		{
			id: 'concealed-beehive',
			label: 'Прихований вулик',
			cost: 1,
			text: 'Вулик приховано, доки з нього не вирветься рій.',
			sections: []
		},
		{
			id: 'killer-bees',
			label: 'Бджоли-вбивці',
			cost: 2,
			text: 'Бджоли належать до особливо агресивного й небезпечного виду. Вулик спрацьовує, навіть якщо істота зміщується в нього або поруч із ним, а рій завдає 1d6 + 3 отруйної шкоди.',
			sections: []
		}
	],
	state: {
		squares: 1,
		staminaDamage: 0
	}
};

export const brambles: Terrain = {
	id: 'terrain-brambles',
	name: 'Колючі зарості',
	description: 'Ці зарості складаються з густо переплетених лоз, укритих гострими шипами.',
	category: TerrainCategory.Environmental,
	level: 1,
	role: FactoryLogic.createTerrainRole(MonsterRoleType.Defender, TerrainRoleType.Fortification),
	encounterValue: 1,
	area: 'Зарості 10 x 10',
	direction: '',
	link: '',
	stamina: {
		base: 0,
		perSquare: 3
	},
	size: '1 або більше клітинок важкого ґрунту',
	damageMods: [],
	sections: [
		{
			id: 'brambles-details',
			content: [
				FactoryLogic.feature.create({
					id: 'deactivate',
					name: 'Знешкодження',
					description: 'Кожну клітинку заростей треба знищувати окремо.'
				}),
				FactoryLogic.feature.create({
					id: 'activate',
					name: 'Спрацювання',
					description: 'Істота входить у клітинку заростей без зміщення.'
				}),
				FactoryLogic.feature.create({
					id: 'effect',
					name: 'Ефект',
					description: 'Істота отримує 1 шкоди за кожну клітинку заростей, у яку входить.'
				})
			]
		}
	],
	upgrades: [
		{
			id: 'poisonous-thorns',
			label: 'Отруйні шипи',
			cost: 1,
			text: 'Зарості отруйні. Будь-яка істота, що отримує шкоду від заростей, також отримує кровотечу (рят. кидок закінчує).',
			sections: []
		}
	],
	state: {
		squares: 1,
		staminaDamage: 0
	}
};

export const corrosivePool: Terrain = {
	id: 'terrain-corrosive-pool',
	name: 'Їдкий басейн',
	description: 'Цей мілкий басейн булькає кислотою або іншою їдкою рідиною.',
	category: TerrainCategory.Environmental,
	level: 2,
	role: FactoryLogic.createTerrainRole(MonsterRoleType.Hexer, TerrainRoleType.Hazard),
	encounterValue: 3,
	area: 'Басейн 10 x 10',
	direction: '',
	link: '',
	stamina: {
		base: 0,
		perSquare: 12
	},
	size: 'Одна або більше клітинок важкого ґрунту',
	damageMods: [],
	sections: [
		{
			id: 'corrosive-pool-damage-immunity',
			content: [
				FactoryLogic.feature.create({
					id: 'damage-immunity',
					name: 'Імунітет',
					description: '20 до всієї шкоди, крім холодної та вогняної'
				})
			]
		},
		{
			id: 'corrosive-pool-details',
			content: [
				FactoryLogic.feature.create({
					id: 'deactivate',
					name: 'Знешкодження',
					description: 'Басейн треба повністю знищити.'
				}),
				FactoryLogic.feature.create({
					id: 'activate',
					name: 'Спрацювання',
					description: 'Істота чи об’єкт входить у їдкий басейн або починає там свій хід. Рідина в басейні також надзвичайно летка (див. «Вибухову реакцію» нижче).'
				}),
				FactoryLogic.feature.create({
					id: 'effect',
					name: 'Ефект',
					description: 'Істота чи об’єкт отримують 3 кислотної шкоди, якщо починають свій хід у басейні, і 3 кислотної шкоди за кожну клітинку басейну, у яку входять.'
				}),
				FactoryLogic.feature.create({
					id: 'allied-awareness',
					name: 'Уважність союзників',
					description: 'Союзники зі зброєю мають смолоскипи. Будь-який союзник може як маневр кинути смолоскип на відстань до 5 клітинок і завдати басейну 1 вогняної шкоди, спровокувавши «Вибухову реакцію».'
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'effect-explosive-reaction',
						name: 'Вибухова реакція',
						type: FactoryLogic.type.createTrigger('Басейн отримує вогняну шкоду.', { free: true }),
						keywords: [AbilityKeyword.Area],
						distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 3 })],
						target: 'Кожна істота й об’єкт у ділянці',
						sections: [
							FactoryLogic.createAbilitySectionRoll(
								FactoryLogic.createPowerRoll({
									bonus: 2,
									tier1: '3 вогняної шкоди; С < 1 палає (рят. кидок закінчує)',
									tier2: '6 вогняної шкоди; С < 2 палає (рят. кидок закінчує)',
									tier3: '9 вогняної шкоди; С < 3 палає (рят. кидок закінчує)'
								})
							),
							FactoryLogic.createAbilitySectionText('Рідина в басейні згорає. Ця здібність має подвійну перевагу проти будь-якої цілі в басейні. Палаюча істота отримує 1d6 вогняної шкоди на початку кожного свого ходу. Палаючий обʼєкт отримує 1d6 вогняної шкоди наприкінці кожного раунду. Будь-яка ціль із вразливістю до кислоти отримує додаткову шкоду від цієї здібності та під час горіння, наче вогняна шкода була кислотною.')
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

export const frozenPond: Terrain = {
	id: 'terrain-frozen-pond',
	name: 'Замерзлий ставок',
	description: 'Ця мілка замерзла водойма вкрита досить товстою кригою, що не проламається, але її поверхня слизька й підступна для руху.',
	category: TerrainCategory.Environmental,
	level: 1,
	role: FactoryLogic.createTerrainRole(MonsterRoleType.Hexer, TerrainRoleType.Hazard),
	encounterValue: 1,
	area: 'Ставок 10 x 10',
	direction: '',
	link: '',
	stamina: {
		base: 0,
		perSquare: 3
	},
	size: 'Одна або більше клітинок важкого ґрунту',
	damageMods: [],
	sections: [
		{
			id: 'frozen-pond-immunity',
			content: [
				FactoryLogic.feature.create({
					id: 'damage-immunity',
					name: 'Імунітет',
					description: '5 до всієї шкоди, крім вогняної'
				})
			]
		},
		{
			id: 'frozen-pond-details',
			content: [
				FactoryLogic.feature.create({
					id: 'deactivate',
					name: 'Знешкодження',
					description: 'Знищення клітинки замерзлого ставу перетворює її на мілку крижану воду.'
				}),
				FactoryLogic.feature.create({
					id: 'activate',
					name: 'Спрацювання',
					description: 'Істота переміщується в клітинку ставу без зміщення.'
				}),
				FactoryLogic.feature.create({
					id: 'effect',
					name: 'Ефект',
					description: 'Здібність **Слизька поверхня**.'
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'effect-slippery-surface',
						name: 'Слизька поверхня',
						type: FactoryLogic.type.createTrigger('Істота чи об’єкт входять у клітинку замерзлого ставу без зміщення.', { free: true }),
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike],
						distance: [FactoryLogic.distance.createMelee(0)],
						target: 'Істота чи об’єкт, що спровокували ефект',
						sections: [
							FactoryLogic.createAbilitySectionRoll(
								FactoryLogic.createPowerRoll({
									bonus: 2,
									tier1: 'Відштовхнути на 1 у напрямку руху цілі',
									tier2: 'Відштовхнути на 2 у напрямку руху цілі; Л < 1 сповільнений (рят. кидок закінчує)',
									tier3: 'Відштовхнути на 3 у напрямку руху цілі; Л < 2 розпластаний і не може встати (рят. кидок закінчує)'
								})
							),
							FactoryLogic.createAbilitySectionText('Рух істоти, що спровокувала ефект, закінчується, після чого її примусово переміщують. Якщо ціль спровокувала цю здібність тим, що її примусово перемістили, здібність отримує перевагу, а будь-яка невикористана дистанція примусового переміщення додається до примусового переміщення цієї здібності. Примусове переміщення цієї здібності не спровоковує її знову.')
						]
					})
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'effect-icy-water',
						name: 'Крижана вода',
						type: FactoryLogic.type.createTrigger('Істота або предмет заходить у клітинку мерзлого ставка або падає там розпластаною.', { free: true }),
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike],
						distance: [FactoryLogic.distance.createMelee(0)],
						target: 'Істота чи об’єкт, що спровокували ефект',
						sections: [
							FactoryLogic.createAbilitySectionRoll(
								FactoryLogic.createPowerRoll({
									bonus: 2,
									tier1: 'Зсунути на 1',
									tier2: '1 холодної шкоди; С < 1 сповільнений (рят. кидок закінчує)',
									tier3: '3 холодної шкоди; С < 2 скутий (рят. кидок закінчує)'
								})
							),
							FactoryLogic.createAbilitySectionText('Рух істоти, що спровокувала ефект, закінчується, після чого її примусово переміщують, якщо це можливо.')
						]
					})
				})
			]
		}
	],
	upgrades: [
		{
			id: 'thin-ice',
			label: 'Тонка крига',
			cost: 1,
			text: `
Крига, що вкриває ставок, тонка, а вода під нею глибша. Щоразу, коли істота або предмет заходить у клітинку мерзлого ставка або падає там розпластаною, ця клітинка руйнується і замінюється крижаною водою. Здібність «Крижана вода» замінює «Слизьку поверхню».

Будь-яка істота, що починає свій хід у крижаній воді, отримує 1 шкоду холодом. Якщо вода достатньо глибока, істота може плисти під поверхнею мерзлого ставка, але під час цього все одно отримує цю шкоду холодом.`,
			sections: []
		}
	],
	state: {
		squares: 1,
		staminaDamage: 0
	}
};

export const lava: Terrain = {
	id: 'terrain-lava',
	name: 'Лава',
	description: 'Ділянка пекуче гарячої розплавленої породи виривається з-під землі, загрожуючи кожному, хто наблизиться.',
	category: TerrainCategory.Environmental,
	level: 3,
	role: FactoryLogic.createTerrainRole(MonsterRoleType.Hexer, TerrainRoleType.Hazard),
	encounterValue: 4,
	area: 'Ділянка 10 x 10',
	direction: '',
	link: '',
	stamina: {
		base: 0,
		perSquare: 12
	},
	size: 'Одна або більше клітинок важкого ґрунту',
	damageMods: [],
	sections: [
		{
			id: 'lava-immunity',
			content: [
				FactoryLogic.feature.create({
					id: 'damage-immunity',
					name: 'Імунітет',
					description: '20 до всієї шкоди, крім холодної'
				})
			]
		},
		{
			id: 'lava-details',
			content: [
				FactoryLogic.feature.create({
					id: 'deactivate',
					name: 'Знешкодження',
					description: 'Кожну клітинку лави треба знищувати окремо.'
				}),
				FactoryLogic.feature.create({
					id: 'activate',
					name: 'Спрацювання',
					description: 'Істота чи об’єкт входять у лаву, починають там свій хід або починають свій хід поруч із лавою.'
				}),
				FactoryLogic.feature.create({
					id: 'effect',
					name: 'Ефект',
					description: 'Здібність **Розпечена магма**.'
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'effect-liquid-hot-magma',
						name: 'Розпечена магма',
						type: FactoryLogic.type.createTrigger('Істота чи об’єкт входять у лаву, починають там свій хід або починають свій хід поруч із лавою.', { free: true }),
						keywords: [AbilityKeyword.Magic, AbilityKeyword.Strike],
						distance: [FactoryLogic.distance.createMelee(1)],
						target: 'Істота чи об’єкт, що спровокували ефект',
						sections: [
							FactoryLogic.createAbilitySectionRoll(
								FactoryLogic.createPowerRoll({
									bonus: 2,
									tier1: '5 вогняної шкоди; С < 1 ціль палає (рят. кидок закінчує)',
									tier2: '9 вогняної шкоди; С < 2 ціль палає (рят. кидок закінчує)',
									tier3: '12 вогняної шкоди; С < 3 ціль палає (рят. кидок закінчує)'
								})
							),
							FactoryLogic.createAbilitySectionText('Якщо ціль знаходиться поруч із лавою, але не в ній, ця здібність отримує шкоду (bane). Палаюча істота отримує 1d6 вогняної шкоди на початку кожного свого ходу. Палаючий обʼєкт отримує 1d6 вогняної шкоди в кінці кожного раунду.')
						]
					})
				})
			]
		}
	],
	upgrades: [
		{
			id: 'magma-flow',
			label: 'Потік магми',
			cost: 4,
			text: 'Лава тече! На початку кожного раунду додайте одну клітинку лави поруч з уже наявною клітинкою лави.',
			sections: []
		}
	],
	state: {
		squares: 1,
		staminaDamage: 0
	}
};

export const quicksand: Terrain = {
	id: 'terrain-quicksand',
	name: 'Хисткі піски',
	description: 'Коли на цю ділянку піску наступають, з’ясовується, що це водяниста трясовина, готова затягнути істот у загибель.',
	category: TerrainCategory.Environmental,
	level: 3,
	role: FactoryLogic.createTerrainRole(MonsterRoleType.Hexer, TerrainRoleType.Hazard),
	encounterValue: 3,
	area: 'Ділянка 10 x 10',
	direction: '',
	link: '',
	stamina: {
		base: 0,
		perSquare: 0
	},
	size: 'Одна або більше клітинок місцевості',
	damageMods: [],
	sections: [
		{
			id: 'quicksand-details',
			content: [
				FactoryLogic.feature.create({
					id: 'deactivate',
					name: 'Знешкодження',
					description: '—'
				}),
				FactoryLogic.feature.create({
					id: 'activate',
					name: 'Спрацювання',
					description: 'Істота чи об’єкт входять у хисткі піски або починають там свій хід.'
				}),
				FactoryLogic.feature.create({
					id: 'effect',
					name: 'Ефект',
					description: 'Здібність **Чіпкі глибини**.'
				}),
				FactoryLogic.feature.create({
					id: 'hidden',
					name: 'Приховано',
					description: 'Хисткі піски приховано, доки вони не спрацюють або їх не виявлять.'
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'effect-grasping-depths',
						name: 'Чіпкі глибини',
						type: FactoryLogic.type.createTrigger('Істота чи об’єкт входять у хисткі піски або починають там свій хід.', { free: true }),
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike],
						distance: [FactoryLogic.distance.createMelee(0)],
						target: 'Одна істота або предмет',
						sections: [
							FactoryLogic.createAbilitySectionRoll(
								FactoryLogic.createPowerRoll({
									bonus: 2,
									tier1: 'С < 0 сповільнений (рят. кидок закінчує)',
									tier2: 'С < 1 скутий (рят. кидок закінчує)',
									tier3: 'С < 2 скутий (рят. кидок закінчує)'
								})
							),
							FactoryLogic.createAbilitySectionText('Ця здібність отримує шкоду, якщо істота, що її спровокувала, змістилася в хисткі піски. Персонаж, який починає свій хід скутим таким чином, задихається.')
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

export const toxicPlants: Terrain = {
	id: 'terrain-toxic-plants',
	name: 'Отруйні рослини',
	description: 'Барвисті гриби або гарні квітучі рослини при турбуванні випускають хмару спор чи пилку, занурюючи істот у магічний сон.',
	category: TerrainCategory.Environmental,
	level: 2,
	role: FactoryLogic.createTerrainRole(MonsterRoleType.Hexer, TerrainRoleType.Hazard),
	encounterValue: 2,
	area: 'Ділянка 10 x 10',
	direction: '',
	link: '',
	stamina: {
		base: 0,
		perSquare: 3
	},
	size: 'Одна або більше клітинок місцевості',
	damageMods: [],
	sections: [
		{
			id: 'toxic-plants-details',
			content: [
				FactoryLogic.feature.create({
					id: 'deactivate',
					name: 'Знешкодження',
					description: 'Кожну клітинку рослин треба знищувати окремо.'
				}),
				FactoryLogic.feature.create({
					id: 'activate',
					name: 'Спрацювання',
					description: 'Істота починає свій хід у ділянці отруйних рослин або входить у клітинку отруйних рослин без зміщення.'
				}),
				FactoryLogic.feature.create({
					id: 'effect',
					name: 'Ефект',
					description: 'Здібність **Сонні спори**.'
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'effect-sleep-spores',
						name: 'Сонні спори',
						type: FactoryLogic.type.createTrigger('Істота починає свій хід у ділянці отруйних рослин або входить у клітинку отруйних рослин без зміщення.'),
						keywords: [AbilityKeyword.Magic, AbilityKeyword.Melee, AbilityKeyword.Strike],
						distance: [FactoryLogic.distance.createMelee()],
						target: 'Істота, що спровокувала ефект',
						sections: [
							FactoryLogic.createAbilitySectionRoll(
								FactoryLogic.createPowerRoll({
									bonus: 2,
									tier1: 'С < 0 приголомшений (рят. кидок закінчує)',
									tier2: 'С < 1 приголомшений (рят. кидок закінчує)',
									tier3: 'С < 2 приголомшений (рят. кидок закінчує)'
								})
							),
							FactoryLogic.createAbilitySectionText('Поки ціль приголомшена таким чином, вона, починаючи свій хід у зоні отруйних рослин, падає розпластаною і не може встати.')
						]
					})
				})
			]
		}
	],
	upgrades: [
		{
			id: 'poisonous-spores',
			label: 'Отруйні спори',
			cost: 2,
			text: 'Будь-яка істота, приголомшена цією небезпекою, отримує 1d6 отруйної шкоди на початку кожного свого ходу.',
			sections: []
		},
		{
			id: 'carnivorous-plants',
			label: 'Хижі рослини',
			cost: 2,
			text: 'Рослини мʼясоїдні й намагаються повільно перетравити будь-яку істоту, що падає серед них. Будь-яка істота, яка починає свій хід розпластаною в цій зоні, отримує 4 кислотної шкоди.',
			sections: []
		}
	],
	state: {
		squares: 1,
		staminaDamage: 0
	}
};
