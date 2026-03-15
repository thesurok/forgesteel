import { AbilityDistanceType } from '@/enums/ability-distance-type';
import { AbilityKeyword } from '@/enums/ability-keyword';
import { Characteristic } from '@/enums/characteristic';
import { Domain } from '@/models/domain';
import { FactoryLogic } from '@/logic/factory-logic';
import { SkillList } from '@/enums/skill-list';

export const war: Domain = {
	id: 'domain-war',
	name: 'Війна',
	description: 'Домена Війни.',
	featuresByLevel: [
		{
			level: 1,
			features: [
				FactoryLogic.feature.createMultiple({
					id: 'domain-war-1',
					features: [
						FactoryLogic.feature.create({
							id: 'domain-war-1-1',
							name: 'Освячена зброя',
							description: 'Під час відпочинку ти можеш благословити зброю. Будь-яка істота, яка володіє цією зброєю, отримує +1 до кидка шкоди здібностями, що використовують цю зброю. Цей бонус триває до наступного відпочинку.'
						}),
						FactoryLogic.feature.createSkillChoice({
							id: 'domain-war-1-2',
							listOptions: [ SkillList.Exploration ]
						})
					]
				})
			]
		},
		{
			level: 2,
			features: [
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'domain-war-2',
						name: 'Благословення прозорливості',
						description: 'Боги дарують прозорливість, що відкриває найкращі місця для удару по ворогах.',
						type: FactoryLogic.type.createManeuver(),
						keywords: [ AbilityKeyword.Magic, AbilityKeyword.Ranged ],
						distance: [ FactoryLogic.distance.createRanged(10) ],
						target: 'Ти та кожен союзник',
						cost: 5,
						sections: [
							FactoryLogic.createAbilitySectionText('До кінця сутички або поки ти не вмираєш, кожна ціль отримує 1 сплеск наприкінці кожного твого ходу.')
						]
					})
				})
			]
		},
		{
			level: 3,
			features: []
		},
		{
			level: 4,
			features: [
				FactoryLogic.feature.create({
					id: 'domain-war-4',
					name: 'Покращена освячена зброя',
					description: 'Зброя, покращена твоєю властивістю "Освячена зброя", дає +3 до кидка шкоди замість +1.'
				})
			]
		},
		{
			level: 5,
			features: []
		},
		{
			level: 6,
			features: [
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'domain-war-6',
						name: 'Клинок небес',
						description: 'Великий меч спускається з неба, загрожуючи приголомшити ворога.',
						type: FactoryLogic.type.createMain(),
						keywords: [ AbilityKeyword.Magic, AbilityKeyword.Ranged, AbilityKeyword.Strike ],
						distance: [ FactoryLogic.distance.createRanged(5) ],
						target: 'Одна істота',
						cost: 9,
						sections: [
							FactoryLogic.createAbilitySectionRoll(
								FactoryLogic.createPowerRoll({
									characteristic: [ Characteristic.Intuition ],
									tier1: '8 + І шкоди; Л < [слабка], повалена та скута (рят. кидок завершує)',
									tier2: '12 + І шкоди; Л < [середня], повалена та скута (рят. кидок завершує)',
									tier3: '16 + І шкоди; Л < [сильна], повалена та скута (рят. кидок завершує)'
								})
							)
						]
					})
				})
			]
		},
		{
			level: 7,
			features: [
				FactoryLogic.feature.create({
					id: 'domain-war-7',
					name: 'Твої тріумфи памʼятають',
					description: 'Боги дозволяють тобі та твоїм супутникам купатися у славі минулих перемог. Коли ти завершуєш відпочинок, ти та інші герої, які відпочивали з тобою, відновлюєте 1 Перемогу після того, як Перемоги перетворюються на досвід. Ця Перемога не перетворюється на досвід після наступного відпочинку.'
				})
			]
		},
		{
			level: 8,
			features: []
		},
		{
			level: 9,
			features: [
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'domain-war-9',
						name: 'Праведна фаланга',
						description: 'Стіна з обертових мечів і ножів зʼявляється там, де ти забажаєш.',
						type: FactoryLogic.type.createMain(),
						keywords: [ AbilityKeyword.Area, AbilityKeyword.Magic, AbilityKeyword.Ranged ],
						distance: [ FactoryLogic.distance.create({ type: AbilityDistanceType.Wall, value: 15, within: 10 }) ],
						target: 'Особлива',
						cost: 11,
						sections: [
							FactoryLogic.createAbilitySectionText('Стіна триває до кінця сутички або поки ти не вмираєш, і може бути розміщена на зайнятих клітинках. Істоти можуть входити та проходити крізь стіну. Кожен ворог, який вперше входить у зону під час раунду бою або починає там свій хід, отримує 15 шкоди.')
						]
					})
				})
			]
		},
		{
			level: 10,
			features: []
		}
	],
	resourceGains: [
		{
			resource: 'Благочестя',
			tag: '',
			trigger: 'Вперше за сутичку, коли ти або істота в межах 10 клітинок отримує шкоду, що перевищує 10 + твій рівень за один хід.',
			value: '2'
		}
	],
	defaultFeatures: [
		FactoryLogic.feature.createPackageContent({
			id: 'war-default-1',
			name: 'Ефект молитви Війни',
			description: 'Обери до трьох союзників у межах 10 клітинок від себе або обери себе замість одного союзника. Кожна ціль отримує 2 сплески.',
			tag: 'conduit-prayer'
		})
	]
};
