import { AbilityDistanceType } from '@/enums/ability-distance-type';
import { AbilityKeyword } from '@/enums/ability-keyword';
import { Characteristic } from '@/enums/characteristic';
import { FactoryLogic } from '@/logic/factory-logic';
import { MonsterRoleType } from '@/enums/monster-role-type';
import { Terrain } from '@/models/terrain';
import { TerrainCategory } from '@/enums/terrain-category';
import { TerrainRoleType } from '@/enums/terrain-role-type';

export const theBlackObelisk: Terrain = {
	id: 'terrain-the-black-obelisk',
	name: 'The Black Obelisk',
	description: 'A foreboding obelisk shaped of dark stone harrows the minds and spirits of those around it.',
	category: TerrainCategory.SupernaturalObject,
	level: 3,
	role: FactoryLogic.createTerrainRole(MonsterRoleType.Controller, TerrainRoleType.Relic),
	encounterValue: 20,
	area: '',
	direction: '',
	link: '',
	stamina: {
		base: 100,
		perSquare: 0
	},
	size: FactoryLogic.createSize(2),
	damageMods: [],
	sections: [
		{
			id: 'the-black-obelisk-details',
			content: [
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'deactivate',
						name: 'Deactivate',
						sections: [
							FactoryLogic.createAbilitySectionText('Як маневр, істота, що знаходиться поруч із чорним обеліском, може виконати **перевірку Розуму**.'),
							FactoryLogic.createAbilitySectionRoll(
								FactoryLogic.createPowerRoll({
									characteristic: Characteristic.Reason,
									tier1: 'Істота випадково активує здібність **Your Fears Become Manifest**, яка отримує перевагу.',
									tier2: 'Істота повинна зробити ще один тест, щоб деактивувати обеліск. Якщо вона отримує цей результат вдруге, вона випадково активує **Your Fears Become Manifest**.',
									tier3: 'Обеліск деактивовано до кінця зустрічі.'
								})
							)
						]
					})
				}),
				FactoryLogic.feature.create({
					id: 'activate',
					name: 'Activate',
					description: 'A new round starts.'
				}),
				FactoryLogic.feature.create({
					id: 'effect',
					name: 'Effect',
					description: 'The **Your Fears Become Manifest** ability.'
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'your-fears-become-manifest',
						name: 'Your Fears Become Manifest',
						type: FactoryLogic.type.createTrigger('A new round starts', { free: true }),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
						distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 10 })],
						target: 'Кожен ворог у зоні',
						sections: [
							FactoryLogic.createAbilitySectionRoll(
								FactoryLogic.createPowerRoll({
									bonus: 2,
									tier1: 'П < 1 сповільнений (до кінця ходу)',
									tier2: 'П < 2 сповільнений і ослаблений (до кінця ходу)',
									tier3: 'П < 3 зляканий, сповільнений і ослаблений (до кінця ходу)'
								})
							),
							FactoryLogic.createAbilitySectionText('Ціль штовхається на 2 клітинки.'),
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

export const theChronalHypercube: Terrain = {
	id: 'terrain-the-chronal-hypercube',
	name: 'The Chronal Hypercube',
	description: 'This unnatural object twists space around it in a reflection of its own unnatural form.',
	category: TerrainCategory.SupernaturalObject,
	level: 3,
	role: FactoryLogic.createTerrainRole(MonsterRoleType.Controller, TerrainRoleType.Relic),
	encounterValue: 20,
	area: '',
	direction: '',
	link: '',
	stamina: {
		base: 80,
		perSquare: 0
	},
	size: FactoryLogic.createSize(1, 'M'),
	damageMods: [],
	sections: [
		{
			id: 'the-chronal-hypercube-details',
			content: [
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'deactivate',
						name: 'Deactivate',
						sections: [
							FactoryLogic.createAbilitySectionText('Істота, яка має навичку Псіоніка, може деактивувати і взяти під контроль часовий гіперкуб, виконавши **перевірку Розуму** перебуваючи в межах 10 клітинок від гіперкуба.'),
							FactoryLogic.createAbilitySectionRoll(
								FactoryLogic.createPowerRoll({
									characteristic: Characteristic.Reason,
									tier1: 'Істота отримує 1d6 психічної шкоди.',
									tier2: 'Істота не може деактивувати гіперкуб.',
									tier3: 'Гіперкуб телепортується поруч з істотою на початку наступного раунду і стає союзником цієї істоти та її союзників.'
								})
							)
						]
					})
				}),
				FactoryLogic.feature.create({
					id: 'dimensional-flicker',
					name: 'Dimensional Flicker',
					description: 'At the start of each round while the hypercube is present, roll a d10. On a 7 or higher, the hypercube teleports to a square of one ally’s choice within 10 squares and is hidden. While the hypercube is hidden, Psionics is the only skill that can be applied to a test made to find it.'
				}),
				FactoryLogic.feature.create({
					id: 'chronal-superhighway',
					name: 'Chronal Superhighway',
					description: 'Any ally within 10 squares of the hypercube can teleport when they move. An ally who teleports gains an edge on the next power roll they make.'
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

export const theThroneOfAAn: Terrain = {
	id: 'terrain-the-throne-of-aan',
	name: 'The Throne of A’An',
	description: 'The throne of A’An, sun god of the Antical Protectorate in what is now Vanigar, retains some of her power from the age before she was slain to end the Age of Suns—and plunge the region into eternal winter.',
	category: TerrainCategory.SupernaturalObject,
	level: 4,
	role: FactoryLogic.createTerrainRole(MonsterRoleType.Controller, TerrainRoleType.Relic),
	encounterValue: 24,
	area: '',
	direction: '',
	link: '',
	stamina: {
		base: 140,
		perSquare: 0
	},
	size: FactoryLogic.createSize(2),
	damageMods: [],
	sections: [
		{
			id: 'the-throne-of-aan-details',
			content: [
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'deactivate',
						name: 'Deactivate',
						sections: [
							FactoryLogic.createAbilitySectionText('The throne of A’An can be deactivated only by the current hierophant of A’An (see **Sitting on the Throne**), who must succeed on a **Presence test** that takes a bane to do so.'),
							FactoryLogic.createAbilitySectionRoll(
								FactoryLogic.createPowerRoll({
									characteristic: Characteristic.Presence,
									tier1: 'Ієрофант активує здібність **Nova**.',
									tier2: 'Ієрофанту не вдається деактивувати трон.',
									tier3: 'Трон деактивовано до кінця зустрічі.'
								})
							)
						]
					})
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'light-of-the-northern-sun',
						name: 'Light of the Northern Sun',
						sections: [
							FactoryLogic.createAbilitySectionText('У Вік Сонць не було ні темряви, ні ночі. Навіть серед багатьох сонць того часу світло А’Ан було найяскравішим. Трон А’Ан проявляє сонячні сили цього бога, навіть коли на ньому ніхто не сидить. У межах 10 клітинок від трону завжди діють такі ефекти:'),
							FactoryLogic.createAbilitySectionText(`
- Трон випромінює яскраве світло, яке розвіює всю темряву й маскування та не дає істотам бути прихованими.
- Будь-яка істота з імунітетом до холоду має вразливість 10 до вогню.
- Будь-яка істота, що використовує вміння, яке завдає шкоди холодом, отримує 11 вогняної шкоди.`)
						]
					})
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'sitting-on-the-throne',
						name: 'Sitting on the Throne',
						sections: [
							FactoryLogic.createAbilitySectionText('Лише істота, налаштована на трон, може на ньому сидіти. Істота поруч із троном може використати основну дію, щоб налаштуватися на нього, успішно пройшовши **тест Присутності**.'),
							FactoryLogic.createAbilitySectionRoll(
								FactoryLogic.createPowerRoll({
									characteristic: Characteristic.Presence,
									tier1: 'Істота отримує 11 вогняної шкоди.',
									tier2: 'Істота не може налаштуватися на трон.',
									tier3: 'Істота налаштовується на трон і може на ньому сидіти.'
								})
							),
							FactoryLogic.createAbilitySectionText(`
Істота, що сидить на троні, стає ієрофантом А’Ан і отримує такі переваги:

- Ієрофант і кожен його союзник у межах 10 клітинок від трону мають імунітет 10 до вогню.
- Ієрофант і кожен його союзник у межах 10 клітинок від трону можуть обирати, щоб їхні вміння завдавали вогняної шкоди замість звичайної.
- Ієрофант має бонус +5 до стійкості, а будь-який удар проти нього отримує шкоду, якщо нападник також не налаштований на трон.
- Ієрофант може використовувати вміння **Primordial Flare** і **Solar Accretion**.`)
						]
					})
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'primordial-flare',
						name: 'Primordial Flare',
						type: FactoryLogic.type.createManeuver(),
						keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged, AbilityKeyword.Strike],
						distance: [FactoryLogic.distance.createRanged(20)],
						target: 'Одна істота або предмет',
						sections: [
							FactoryLogic.createAbilitySectionRoll(
								FactoryLogic.createPowerRoll({
									bonus: 2,
									tier1: '6 вогняної шкоди',
									tier2: '11 вогняної шкоди',
									tier3: '14 вогняної шкоди'
								})
							),
							FactoryLogic.createAbilitySectionText('Ціль має вразливість 10 до вогню до початку наступного ходу ієрофанта.')
						]
					})
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'solar-accretion',
						name: 'Solar Accretion',
						type: FactoryLogic.type.createTrigger('A target within distance is made winded or is reduced to 0 Stamina by fire damage.', { free: true }),
						keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged],
						distance: [FactoryLogic.distance.createRanged(10)],
						target: 'Одна істота',
						sections: [
							FactoryLogic.createAbilitySectionText('If the hierophant is a hero, they gain 3 of their Heroic Resource. If the hierophant is a Director-controlled creature, the Director gains 3 Malice.')
						]
					})
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'nova',
						name: 'Nova',
						type: FactoryLogic.type.createTrigger('The throne is destroyed or the hierophant obtains a tier 1 outcome on the test to deactivate it.', { free: true }),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
						distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 10 })],
						target: 'Each creature and object in the area',
						sections: [
							FactoryLogic.createAbilitySectionText('Each target takes 14 fire damage and the Hierophant gains the Incubator of A’An complication (see the sidebar). If there is no hierophant, one creature within 10 squares of the throne chosen by the Director gains this complication.')
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
