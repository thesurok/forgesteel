import { FactoryLogic } from '@/logic/factory-logic';
import { MonsterRoleType } from '@/enums/monster-role-type';
import { Terrain } from '@/models/terrain';
import { TerrainCategory } from '@/enums/terrain-category';
import { TerrainRoleType } from '@/enums/terrain-role-type';

export const holyIdol: Terrain = {
	id: 'holy-idol',
	name: 'Святий ідол',
	description:
		'Монумент вищій силі, наділений могутністю, сприяє підступам лиходія.',
	category: TerrainCategory.PowerFixture,
	level: 5,
	role: FactoryLogic.createTerrainRole(
		MonsterRoleType.Support,
		TerrainRoleType.Relic
	),
	encounterValue: 7,
	area: '',
	direction: '',
	link: '',
	stamina: {
		base: 35,
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
					name: 'Деактивація',
					description: 'Святий ідол потрібно повністю знищити.'
				})
			]
		},
		{
			id: 'empowered-will',
			content: [
				FactoryLogic.feature.create({
					id: 'empowered-will',
					name: 'Наділена воля',
					description: 'На початку кожного раунду, поки святий ідол неушкоджений, Директор отримує d6, який діє до кінця раунду. Коли істота під контролем Директора завдає або отримує шкоду, Директор може кинути цей d6, щоб збільшити шкоду, яку істота завдає, або зменшити шкоду, яку вона отримує, на значення кидка, але не нижче 2 шкоди. Якщо в грі є кілька ідолів, до одного окремого випадку шкоди можна застосувати лише один d6.'
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

export const psionicShard: Terrain = {
	id: 'psionic-shard',
	name: 'Псіонічний уламок',
	description: 'Величезний дзижчачий кристал робить повітря навколо важким.',
	category: TerrainCategory.PowerFixture,
	level: 5,
	role: FactoryLogic.createTerrainRole(
		MonsterRoleType.Defender,
		TerrainRoleType.Fortification
	),
	encounterValue: 7,
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
			id: 'psionic-shard-details',
			content: [
				FactoryLogic.feature.create({
					id: 'deactivate',
					name: 'Деактивація',
					description: 'Псіонічний уламок потрібно повністю знищити.'
				}),
				FactoryLogic.feature.create({
					id: 'psionic-barrier',
					name: 'Псіонічний барʼєр',
					description: 'Псіонічний уламок у сутичці налаштований на один бік. Поки він неушкоджений, уся шкода, завдана кожному його союзнику в сутичці, зменшується вдвічі.'
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'psionic-pulse',
						name: 'Псіонічний імпульс',
						type: FactoryLogic.type.createTrigger('Уламок знищено', { free: true }),
						sections: [
							FactoryLogic.createAbilitySectionText('Уламок вивільняє ударну хвилю, спрямовану крізь кожну істоту, на яку впливає **Псіонічний барʼєр**. Кожен союзник у сутичці приголомшений до кінця свого наступного ходу.')
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

export const treeOfMight: Terrain = {
	id: 'terrain-tree-of-might',
	name: 'Дерево могутності',
	description: 'Покручене дерево з оголеним корінням, що звивається й скручується.',
	category: TerrainCategory.PowerFixture,
	level: 5,
	role: FactoryLogic.createTerrainRole(
		MonsterRoleType.Hexer,
		TerrainRoleType.Hazard
	),
	encounterValue: 14,
	area: '',
	direction: '',
	link: '',
	stamina: {
		base: 60,
		perSquare: 0
	},
	size: FactoryLogic.createSize(3),
	damageMods: [],
	sections: [
		{
			id: 'damage-immunity',
			content: [
				FactoryLogic.feature.create({
					id: 'damage-immunity',
					name: 'Імунітет до шкоди',
					description: '5 до всієї шкоди, крім скверни або вогню'
				})
			]
		},
		{
			id: 'deactivate',
			content: [
				FactoryLogic.feature.create({
					id: 'deactivate',
					name: 'Деактивація',
					description: 'Дерево могутності потрібно повністю знищити.'
				})
			]
		},
		{
			id: 'trees-nourishment',
			content: [
				FactoryLogic.feature.create({
					id: 'trees-nourishment',
					name: 'Живлення дерева',
					description:
						'На початку кожного раунду, поки дерево могутності неушкоджене, кожен ворог у зоні сутички, який торкається землі й має **С < 0**, отримує 10 шкоди скверною, а на дереві виростає плід. Потужність плодів зростає на 1 з кожним наступним раундом.'
				})
			]
		},
		{
			id: 'mighty-fruit',
			content: [
				FactoryLogic.feature.create({
					id: 'mighty-fruit',
					name: 'Плід могутності',
					description:
						'Раз за раунд будь-яка істота поруч із деревом могутності може зірвати з нього плід і зʼїсти його без дії. Істота отримує 10 тимчасової витривалості, а її показник Могутності зростає на 1, до максимуму 6, до кінця сутички.'
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
