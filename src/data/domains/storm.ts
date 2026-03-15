import { AbilityDistanceType } from '@/enums/ability-distance-type';
import { AbilityKeyword } from '@/enums/ability-keyword';
import { Characteristic } from '@/enums/characteristic';
import { Domain } from '@/models/domain';
import { FactoryLogic } from '@/logic/factory-logic';
import { SkillList } from '@/enums/skill-list';

export const storm: Domain = {
	id: 'domain-storm',
	name: 'Буря',
	description: 'Сфера Бурі.',
	featuresByLevel: [
		{
			level: 1,
			features: [
				FactoryLogic.feature.createMultiple({
					id: 'domain-storm-1',
					features: [
						FactoryLogic.feature.create({
							id: 'domain-storm-1-1',
							name: 'Благословення сприятливої погоди',
							description: `
	Кожного разу, коли ви завершуєте відпочинок, ви можете визначити погодні умови в межах 100 клітинок. До наступного відпочинку встановлена вами погода слідує за вами у всіх звичайних відкритих місцях.

	Оберіть один із наступних типів погоди, кожен з яких дає перевагу вам і союзникам:

	* **Ясно**: Ви та ваші союзники отримуєте перевагу на випробування з використанням Навігації або Пошуку.
	* **Туман**: Ви та ваші союзники отримуєте перевагу на випробування з використанням Приховування.
	* **Похмуро**: Ви та ваші союзники отримуєте перевагу на випробування з використанням Витривалості.
	* **Опади**: Коли ґрунт брудний або засніжений, ви та ваші союзники отримуєте перевагу на випробування з використанням Слідування.

	Якщо ви перебуваєте в одній області з істотою, яка використовує цю чи подібну властивість і обрала інший погодний ефект, властивості взаємно нейтралізуються в місцях перетину.`
						}),
						FactoryLogic.feature.createSkillChoice({
							id: 'domain-storm-1-2',
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
						id: 'domain-storm-2',
						name: 'Буря святого',
						description: 'Лютує буря, що вражає ворогів блискавками й кидає їх вітром.',
						type: FactoryLogic.type.createMain(),
						keywords: [ AbilityKeyword.Area, AbilityKeyword.Magic, AbilityKeyword.Ranged ],
						distance: [ FactoryLogic.distance.create({ type: AbilityDistanceType.Cube, value: 3, within: 10 }) ],
						target: 'Кожен ворог у зоні',
						cost: 5,
						sections: [
							FactoryLogic.createAbilitySectionRoll(
								FactoryLogic.createPowerRoll({
									characteristic: [ Characteristic.Intuition ],
									tier1: '2 блискавки шкоди; вертикальне зсування 1',
									tier2: '5 блискавки шкоди; вертикальне зсування 2',
									tier3: '7 блискавки шкоди; вертикальне зсування 3'
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
					id: 'domain-storm-4',
					name: 'Хода вітру',
					description: 'Поки у вас 5 або більше Перемог, ви можете літати. Якщо ви вже вмієте літати, отримуєте +2 до швидкості під час польоту.'
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
						id: 'domain-storm-6',
						name: 'Володар блискавок',
						description: 'Блискавки вириваються з вашого тіла в різні боки.',
						type: FactoryLogic.type.createMain(),
						keywords: [ AbilityKeyword.Area, AbilityKeyword.Magic ],
						distance: [ FactoryLogic.distance.create({ type: AbilityDistanceType.Line, value: 4, value2: 1, within: 1 }) ],
						target: 'Кожен ворог у зоні',
						cost: 9,
						sections: [
							FactoryLogic.createAbilitySectionRoll(
								FactoryLogic.createPowerRoll({
									characteristic: [ Characteristic.Intuition ],
									tier1: '6 блискавки шкоди; штовхання 1',
									tier2: '9 блискавки шкоди; штовхання 2',
									tier3: '13 блискавки шкоди; штовхання 3'
								})
							),
							FactoryLogic.createAbilitySectionText('Цілі переміщуються примусово по черзі, починаючи з найближчої до вас, і можуть бути штовхнуті в інших цілей на цій лінії.')
						]
					})
				})
			]
		},
		{
			level: 7,
			features: [
				FactoryLogic.feature.create({
					id: 'domain-storm-7',
					name: 'Вражений громом',
					description: 'Блискавка й грім наповнюють ваше тіло. Коли ви використовуєте здібність для завдання блискавкової або звукової шкоди іншій істоті, ви отримуєте 1 Сплеск. Крім того, якщо ви використовуєте здібність для примусового переміщення істоти, відстань переміщення збільшується на значення вашої Інтуїції.'
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
						id: 'domain-storm-9',
						name: 'Божественна буря',
						description: 'Ви викликаєте божественну бурю, яка залишається під вашим контролем.',
						type: FactoryLogic.type.createMain(),
						keywords: [ AbilityKeyword.Area, AbilityKeyword.Magic, AbilityKeyword.Ranged ],
						distance: [ FactoryLogic.distance.create({ type: AbilityDistanceType.Cube, value: 5, within: 5 }) ],
						target: 'Кожен ворог у зоні',
						cost: 11,
						sections: [
							FactoryLogic.createAbilitySectionRoll(
								FactoryLogic.createPowerRoll({
									characteristic: [ Characteristic.Intuition ],
									tier1: '2 блискавки шкоди; 2 звукової шкоди',
									tier2: '3 блискавки шкоди; 3 звукової шкоди',
									tier3: '5 блискавки шкоди; 5 звукової шкоди'
								})
							),
							FactoryLogic.createAbilitySectionText('Лютуюча буря заповнює область до кінця сутички або поки ви не перебуваєте у стані "Вмираючий". На початку кожного вашого ходу ви можете перемістити бурю до 5 клітинок (без дії). На наступних ходах, поки буря активна, ви можете використати маневр для виконання її кидка сили.')
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
			trigger: 'Вперше під час сутички, коли ворог у межах 10 клітинок переміщується примусово',
			value: '2'
		}
	],
	defaultFeatures: [
		FactoryLogic.feature.createPackageContent({
			id: 'storm-default-1',
			name: 'Ефект молитви Бурі',
			description: 'Кожен ворог у 3-кубі в межах 10 клітинок отримує блискавкову шкоду, що дорівнює подвоєному значенню вашої Інтуїції.',
			tag: 'conduit-prayer'
		})
	]
};
