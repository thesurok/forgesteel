import { AbilityDistanceType } from '@/enums/ability-distance-type';
import { AbilityKeyword } from '@/enums/ability-keyword';
import { Characteristic } from '@/enums/characteristic';
import { Domain } from '@/models/domain';
import { FactoryLogic } from '@/logic/factory-logic';
import { SkillList } from '@/enums/skill-list';

export const knowledge: Domain = {
	id: 'domain-knowledge',
	name: 'Знання',
	description: 'Домена Знання.',
	featuresByLevel: [
		{
			level: 1,
			features: [
				FactoryLogic.feature.createMultiple({
					id: 'domain-knowledge-1',
					features: [
						FactoryLogic.feature.create({
							id: 'domain-knowledge-1-1',
							name: 'Благословення розуміння',
							description: 'Ви можете тлумачити діаграми й схеми, навіть якщо не розумієте пов’язану з ними мову. Для цілей розуміння джерела проєкту для будь-якого дослідження чи ремісничого проєкту ви вважаєтеся вільно володіючим усіма мовами.'
						}),
						FactoryLogic.feature.createSkillChoice({
							id: 'domain-knowledge-1-2',
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
						id: 'domain-knowledge-2',
						name: 'Боги наказують — ти підкоряєшся',
						description: 'Ви говорите голосом свого святого, наказуючи ворогам.',
						type: FactoryLogic.type.createMain(),
						keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged, AbilityKeyword.Strike],
						distance: [FactoryLogic.distance.createRanged(10)],
						target: 'Одна істота',
						cost: 5,
						sections: [
							FactoryLogic.createAbilitySectionRoll(
								FactoryLogic.createPowerRoll({
									characteristic: [Characteristic.Intuition],
									tier1: '4 + І священної шкоди; П < [слабкий], перед отриманням шкоди ціль робить безкоштовний удар по цілі, яку ви обираєте',
									tier2: '7 + І священної шкоди; П < [середній], перед отриманням шкоди ціль використовує здібність на ваш вибір, і ви обираєте цілі для цієї здібності',
									tier3: '11 + І священної шкоди; П < [сильний], перед отриманням шкоди ціль зміщується на свою швидкість у місце, яке ви обираєте, використовує здібність на ваш вибір, і ви обираєте цілі для цієї здібності'
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
					id: 'domain-knowledge-4',
					name: 'Осяяння святого',
					description: 'На початку відпочинку ви можете надихнути себе або іншу істоту, що відпочиває разом із вами, божественним знанням. Якщо ціль робить кидок проєкту під час цього відпочинку, вона додає 1d10 + вашу Інтуїцію до кидка.'
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
						id: 'domain-knowledge-6',
						name: 'Заклик скасування',
						description: 'Ви вимовляєте таємне слово руйнування, відоме лише богам.',
						type: FactoryLogic.type.createMain(),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
						distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 4 })],
						target: 'Кожен ворог у області',
						cost: 9,
						sections: [
							FactoryLogic.createAbilitySectionRoll(
								FactoryLogic.createPowerRoll({
									characteristic: [Characteristic.Intuition],
									tier1: '3 звукової шкоди; відштовхування 3',
									tier2: '6 звукової шкоди; відштовхування 5',
									tier3: '9 звукової шкоди; відштовхування 7'
								})
							),
							FactoryLogic.createAbilitySectionText('Ви можете обрати, щоб ця здібність завдавала шкоди й відштовхувала об’єкти, а також завдавала шкоди будівлям.')
						]
					})
				})
			]
		},
		{
			level: 7,
			features: [
				FactoryLogic.feature.create({
					id: 'domain-knowledge-7',
					name: 'Бібліотека богів',
					description: 'Ви можете отримати потрібну інформацію через молитву, тому більше не потребуєте дослідницьких матеріалів для ремісничих і дослідницьких проєктів. Додаєте свій рівень до кидків проєкту для ремесла й досліджень. Також ви отримуєте всі навички з групи знань, яких у вас не було, і додатково отримуєте навички з інших груп у кількості, що дорівнює кількості ваших навичок у групі знань до набуття цієї особливості.'
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
						id: 'domain-knowledge-9',
						name: 'Слово ослаблення',
						description: 'Ви вимовляєте божественне слово, що робить ворога крихким.',
						type: FactoryLogic.type.createMain(),
						keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged, AbilityKeyword.Strike],
						distance: [FactoryLogic.distance.createRanged(10)],
						target: 'Одна істота або об’єкт',
						cost: 11,
						sections: [
							FactoryLogic.createAbilitySectionRoll(
								FactoryLogic.createPowerRoll({
									characteristic: [Characteristic.Intuition],
									tier1: '10 + І шкоди скверною; Л < [слабкий], ослаблення (рят. кидок завершує)',
									tier2: '15 + І шкоди скверною; Л < [середній], ослаблення (рят. кидок завершує)',
									tier3: '21 + І шкоди скверною; Л < [сильний], ослаблення (рят. кидок завершує)'
								})
							),
							FactoryLogic.createAbilitySectionText('Поки ціль ослаблена таким чином, вона має вразливість до шкоди 10.')
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
			trigger: 'Вперше за сутичку, коли Директор витрачає Злобу',
			value: '2'
		}
	],
	defaultFeatures: [
		FactoryLogic.feature.createPackageContent({
			id: 'knowledge-default-1',
			name: 'Ефект Молитви Знання',
			description: 'Оберіть до п’яти союзників у межах 10 клітинок від себе або себе замість одного союзника. Кожна ціль отримує 1 сплеск.',
			tag: 'conduit-prayer'
		})
	]
};
