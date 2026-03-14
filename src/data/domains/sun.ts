import { AbilityDistanceType } from '@/enums/ability-distance-type';
import { AbilityKeyword } from '@/enums/ability-keyword';
import { Characteristic } from '@/enums/characteristic';
import { Domain } from '@/models/domain';
import { FactoryLogic } from '@/logic/factory-logic';
import { SkillList } from '@/enums/skill-list';

export const sun: Domain = {
	id: 'domain-sun',
	name: 'Сонце',
	description: 'Сфера Сонця.',
	featuresByLevel: [
		{
			level: 1,
			features: [
				FactoryLogic.feature.createMultiple({
					id: 'domain-sun-1',
					features: [
						FactoryLogic.feature.create({
							id: 'domain-sun-1-1',
							name: 'Внутрішнє світло',
							description: 'Кожного разу, коли ви завершуєте відпочинок, ви можете обрати себе або одного союзника, який також завершує відпочинок, щоб надати йому користь божественного ритуалу. Ви вкладаєте промінь ранкового світла в душу обраного персонажа, надаючи йому +1 до рят. кидків до наступного відпочинку.'
						}),
						FactoryLogic.feature.createSkillChoice({
							id: 'domain-sun-1-2',
							listOptions: [SkillList.Lore]
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
						id: 'domain-sun-2',
						name: 'Ранкове світло',
						description: 'Світло за вашим наказом палає, обпалюючи ворогів і благословляючи союзників.',
						type: FactoryLogic.type.createMain(),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
						distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 3 })],
						target: 'Кожен ворог у зоні',
						cost: 5,
						sections: [
							FactoryLogic.createAbilitySectionRoll(
								FactoryLogic.createPowerRoll({
									characteristic: [Characteristic.Intuition],
									tier1: '4 вогняної шкоди',
									tier2: '6 вогняної шкоди',
									tier3: '10 вогняної шкоди'
								})
							),
							FactoryLogic.createAbilitySectionText('Кожен союзник у зоні завдає вогняної шкоди, що дорівнює вашій Інтуїції, своїм наступним ударом до кінця наступного ходу.')
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
					id: 'domain-sun-4',
					name: 'Світло одкровення',
					description: 'Маневром ви змушуєте своє тіло яскраво світитися, освітлюючи свою клітинку та всі клітинки в межах 5. Це світло проникає крізь будь-яку темряву. Приховані істоти в області автоматично виявляються, а істоти у світлі, включно з вами, не можуть ховатися. Поки ця властивість активна, ви отримуєте перевагу на випробування для виявлення прихованих обʼєктів, входів і надприродних ілюзій.'
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
						id: 'domain-sun-6',
						name: 'Благословення полуденного сонця',
						description: 'Ваше тіло випромінює жар, що випікає ворогів і надихає союзників.',
						type: FactoryLogic.type.createManeuver(),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
						distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Aura, value: 4 })],
						target: 'Ви та кожна істота в зоні',
						cost: 9,
						sections: [
							FactoryLogic.createAbilitySectionText('До кінця сутички або поки ви не перебуваєте у стані "Вмираючий", кожен ворог у зоні отримує шкоду на кидки сили, а ви та кожен союзник у зоні отримуєте 1 Сплеск наприкінці кожного вашого ходу.')
						]
					})
				})
			]
		},
		{
			level: 7,
			features: [
				FactoryLogic.feature.create({
					id: 'domain-sun-7',
					name: 'Світло палаючого сонця',
					description: 'Сонце наповнює ваше тіло. Коли ви використовуєте здібність для завдання кидкової шкоди іншій істоті, ця здібність завдає додатково 5 вогняної шкоди, або 15 вогняної шкоди, якщо істота — нежить. Крім того, ви маєте імунітет до вогню, що дорівнює вашому рівню, і додається до іншого імунітету до вогню.'
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
						id: 'domain-sun-9',
						name: 'Сонячний спалах',
						description: 'Ви закликаєте сферу вогню, яка спалює ворогів до попелу.',
						type: FactoryLogic.type.createManeuver(),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Magic, AbilityKeyword.Ranged],
						distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Cube, value: 5, within: 10 })],
						target: 'Кожен ворог у зоні',
						cost: 11,
						sections: [
							FactoryLogic.createAbilitySectionRoll(
								FactoryLogic.createPowerRoll({
									characteristic: [Characteristic.Intuition],
									tier1: '9 вогняної шкоди',
									tier2: '14 вогняної шкоди',
									tier3: '19 вогняної шкоди'
								})
							)
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
			trigger: 'Вперше під час сутички, коли ворог у межах 10 клітинок отримує вогняну або святу шкоду',
			value: '2'
		}
	],
	defaultFeatures: [
		FactoryLogic.feature.createPackageContent({
			id: 'sun-default-1',
			name: 'Ефект молитви Сонця',
			description: 'Один ворог у межах 10 клітинок отримує вогняну шкоду, що дорівнює потрійному значенню вашої Інтуїції.',
			tag: 'conduit-prayer'
		})
	]
};
