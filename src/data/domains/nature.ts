import { AbilityDistanceType } from '@/enums/ability-distance-type';
import { AbilityKeyword } from '@/enums/ability-keyword';
import { Characteristic } from '@/enums/characteristic';
import { Domain } from '@/models/domain';
import { FactoryLogic } from '@/logic/factory-logic';
import { SkillList } from '@/enums/skill-list';

export const nature: Domain = {
	id: 'domain-nature',
	name: 'Природа',
	description: 'Сфера Природи.',
	featuresByLevel: [
		{
			level: 1,
			features: [
				FactoryLogic.feature.createMultiple({
					id: 'domain-nature-1',
					features: [
						FactoryLogic.feature.createAbility({
							ability: FactoryLogic.createAbility({
								id: 'domain-nature-1-1',
								name: 'Вірний друг',
								description: 'До вас приходить дух тварини, ділиться своїми відчуттями й вірно служить вам.',
								type: FactoryLogic.type.createMain(),
								keywords: [AbilityKeyword.Magic],
								distance: [FactoryLogic.distance.createSelf()],
								target: 'Ви',
								sections: [
									FactoryLogic.createAbilitySectionText('Ви викликаєте духа у формі будь-якої тварини, яку бачили. Нематеріальна тварина має швидкість 5 і може літати, але не може фізично взаємодіяти зі світом. Поки ви перебуваєте в межах 10 клітинок від духа, ви автоматично відчуваєте все, що відчувала б ця тварина, а також свої власні відчуття. Ви можете відпустити духа будь-коли (без дії). Якщо дух отримує будь-яку шкоду, він зникає, а ви отримуєте 1d10 психічної шкоди, яку не можна зменшити жодним чином.')
								]
							})
						}),
						FactoryLogic.feature.createSkillChoice({
							id: 'domain-nature-1-2',
							listOptions: [SkillList.Exploration]
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
						id: 'domain-nature-2',
						name: 'Суд Природи',
						description: 'Містичні колючі лози зʼявляються за вашим наказом і сковують ворогів.',
						type: FactoryLogic.type.createMain(),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Magic, AbilityKeyword.Ranged],
						distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Cube, value: 3, within: 10 })],
						target: 'Кожен ворог у зоні',
						cost: 5,
						sections: [
							FactoryLogic.createAbilitySectionRoll(
								FactoryLogic.createPowerRoll({
									characteristic: [Characteristic.Intuition],
									tier1: '2 шкоди; Л < [слабкий], сковування (рят. кидок закінчує)',
									tier2: '3 шкоди; Л < [середній], сковування (рят. кидок закінчує)',
									tier3: '7 шкоди; Л < [сильний], сковування (рят. кидок закінчує)'
								})
							)
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
					id: 'domain-nature-4',
					name: 'Лісова дорога',
					description: 'Основною дією ви торкаєтеся живого дерева й робите його частиною божественної мережі переміщення. Ви можете підтримувати кількість дерев у мережі, що дорівнює вашій Інтуїції. Коли ви торкаєтеся будь-якого дерева з мережі, ви можете основною дією телепортувати себе й будь-яких бажаючих істот у межах 10 клітинок до іншого дерева з мережі на тому ж світі. Якщо дерево з мережі гине, воно більше не є її частиною. Ви можете видалити дерево з мережі на будь-якій відстані, навіть між світами (без дії).'
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
						id: 'domain-nature-6',
						name: 'Духовий табун',
						description: 'Духи тварин мчать полем бою, топчучи ворогів.',
						type: FactoryLogic.type.createMain(),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Magic, AbilityKeyword.Ranged],
						distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Line, value: 10, value2: 2, within: 5 })],
						target: 'Кожен ворог у зоні',
						cost: 9,
						sections: [
							FactoryLogic.createAbilitySectionRoll(
								FactoryLogic.createPowerRoll({
									characteristic: [Characteristic.Intuition],
									tier1: '5 шкоди; С < [слабкий], повалений і не може підвестися (рят. кидок закінчує)',
									tier2: '8 шкоди; С < [середній], повалений і не може підвестися (рят. кидок закінчує)',
									tier3: '11 шкоди; С < [сильний], повалений і не може підвестися (рят. кидок закінчує)'
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
					id: 'domain-nature-7',
					name: 'Щедроти Природи',
					description: `
Після завершення відпочинку ви можете приготувати магічну страву з місцевої флори для всіх супутників, які відпочивали з вами. Оберіть дві з наступних переваг для істот, які споживають страву:

* Кожна істота отримує імунітет до кислоти, холоду, скверни, вогню, блискавки, отрути або звукової шкоди, що дорівнює вашому рівню. Ви можете обрати цю перевагу двічі, кожного разу для іншого типу шкоди.
* Кожна істота отримує 20 тимчасової Витривалості.
* Кожна істота отримує +1 до швидкості.
* Кожна істота отримує +1 до рят. кидків.
* Кожна істота отримує перевагу на випробування для впливу на інших істот.

Кожна перевага триває, поки істота не завершить наступний відпочинок.`
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
						id: 'domain-nature-9',
						name: 'Клітка з тернів',
						description: 'Лози вириваються із землі й сковують ворога, поступово стискаючись навколо нього.',
						type: FactoryLogic.type.createMain(),
						keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged, AbilityKeyword.Strike],
						distance: [FactoryLogic.distance.createRanged(10)],
						target: 'Одна істота',
						cost: 11,
						sections: [
							FactoryLogic.createAbilitySectionRoll(
								FactoryLogic.createPowerRoll({
									characteristic: [Characteristic.Intuition],
									tier1: '10 + І шкоди; Л < [слабкий], сковування (рят. кидок закінчує)',
									tier2: '15 + І шкоди; Л < [середній], сковування (рят. кидок закінчує)',
									tier3: '21 + І шкоди; Л < [сильний], сковування (рят. кидок закінчує)'
								})
							),
							FactoryLogic.createAbilitySectionText('Поки ціль сковується цим ефектом, вона отримує 10 шкоди на початку кожного вашого ходу.')
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
			trigger: 'Вперше під час сутички, коли ви або істота в межах 10 клітинок отримує шкоду від кислоти, холоду, вогню, блискавки, отрути або звуку',
			value: '2'
		}
	],
	defaultFeatures: [
		FactoryLogic.feature.createPackageContent({
			id: 'nature-default-1',
			name: 'Ефект молитви Природи',
			description: 'Лози здіймаються з підлоги чи землі в межах 10 клітинок, обвиваючи обрану вами кількість істот, що дорівнює вашій Інтуїції. Ви можете пересунути кожну істоту на кількість клітинок, що дорівнює вашій Інтуїції. Потім лози зникають.',
			tag: 'conduit-prayer'
		})
	]
};
