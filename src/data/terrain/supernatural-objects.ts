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
	name: 'Чорний обеліск',
	description: 'Лиховісний обеліск із темного каменю терзає розум і дух усіх довкола.',
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
						name: 'Деактивація',
						sections: [
							FactoryLogic.createAbilitySectionText('Як маневр, істота, що знаходиться поруч із чорним обеліском, може виконати **перевірку Розуму**.'),
							FactoryLogic.createAbilitySectionRoll(
								FactoryLogic.createPowerRoll({
									characteristic: Characteristic.Reason,
									tier1: 'Істота випадково активує здібність **Страхи стають явними**, яка отримує перевагу.',
									tier2: 'Істота повинна зробити ще один тест, щоб деактивувати обеліск. Якщо вона отримує цей результат вдруге, вона випадково активує **Страхи стають явними**.',
									tier3: 'Обеліск деактивовано до кінця зустрічі.'
								})
							)
						]
					})
				}),
				FactoryLogic.feature.create({
					id: 'activate',
					name: 'Активація',
					description: 'Починається новий раунд.'
				}),
				FactoryLogic.feature.create({
					id: 'effect',
					name: 'Ефект',
					description: 'Здібність **Страхи стають явними**.'
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'your-fears-become-manifest',
						name: 'Страхи стають явними',
						type: FactoryLogic.type.createTrigger('Починається новий раунд', { free: true }),
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
	name: 'Часовий гіперкуб',
	description: 'Цей неприродний обʼєкт викривлює простір навколо себе, віддзеркалюючи власну химерну форму.',
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
						name: 'Деактивація',
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
					name: 'Мірне мерехтіння',
					description: 'На початку кожного раунду, поки гіперкуб присутній, киньте d10. На 7 або більше гіперкуб телепортується в клітинку, обрану одним союзником у межах 10 клітинок, і стає прихованим. Поки гіперкуб прихований, лише навичку Псіоніка можна застосувати до тесту, щоб його знайти.'
				}),
				FactoryLogic.feature.create({
					id: 'chronal-superhighway',
					name: 'Часовий супершлях',
					description: 'Будь-який союзник у межах 10 клітинок від гіперкуба може телепортуватися, коли рухається. Союзник, який телепортується, отримує перевагу на свій наступний кидок сили.'
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
	name: 'Трон АʼАн',
	description: 'Трон АʼАн, богині сонця Антикальського протекторату на землях сучасного Ванігару, зберіг частину її сили з епохи до того, як її вбили, щоб завершити Вік Сонць і занурити край у вічну зиму.',
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
						name: 'Деактивація',
						sections: [
							FactoryLogic.createAbilitySectionText('Трон АʼАн може деактивувати лише чинний ієрофант АʼАн, див. **Сидіння на троні**, який повинен успішно пройти **тест Присутності** із перешкодою.'),
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
						name: 'Світло північного сонця',
						sections: [
							FactoryLogic.createAbilitySectionText('У Вік Сонць не було ні темряви, ні ночі. Навіть серед багатьох сонць того часу світло АʼАн було найяскравішим. Трон АʼАн проявляє сонячні сили цієї богині, навіть коли на ньому ніхто не сидить. У межах 10 клітинок від трону завжди діють такі ефекти:'),
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
						name: 'Сидіння на троні',
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
Істота, що сидить на троні, стає ієрофантом АʼАн і отримує такі переваги:

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
						name: 'Первісний спалах',
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
						name: 'Сонячне нарощення',
						type: FactoryLogic.type.createTrigger('Ціль у межах дальності стає виснаженою або її зводять до 0 витривалості вогняною шкодою.', { free: true }),
						keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged],
						distance: [FactoryLogic.distance.createRanged(10)],
						target: 'Одна істота',
						sections: [
							FactoryLogic.createAbilitySectionText('Якщо ієрофант є героєм, він отримує 3 свого героїчного ресурсу. Якщо ієрофант є істотою під контролем Директора, Директор отримує 3 злоби.')
						]
					})
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'nova',
						name: 'Nova',
						type: FactoryLogic.type.createTrigger('Трон знищено або ієрофант отримує результат 1-го ступеня на тесті його деактивації.', { free: true }),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
						distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 10 })],
						target: 'Кожна істота й предмет у зоні',
						sections: [
							FactoryLogic.createAbilitySectionText('Кожна ціль отримує 14 вогняної шкоди, а ієрофант отримує ускладнення Інкубатор АʼАн, див. бокову панель. Якщо ієрофанта немає, це ускладнення отримує одна істота в межах 10 клітинок від трону, обрана Директором.')
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
