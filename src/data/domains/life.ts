import { AbilityDistanceType } from '@/enums/ability-distance-type';
import { AbilityKeyword } from '@/enums/ability-keyword';
import { Domain } from '@/models/domain';
import { FactoryLogic } from '@/logic/factory-logic';
import { SkillList } from '@/enums/skill-list';

export const life: Domain = {
	id: 'domain-life',
	name: 'Життя',
	description: 'Сфера Життя.',
	featuresByLevel: [
		{
			level: 1,
			features: [
				FactoryLogic.feature.createMultiple({
					id: 'domain-life-1',
					features: [
						FactoryLogic.feature.create({
							id: 'domain-life-1-1',
							name: 'Оживлюючий ритуал',
							description: 'Кожного разу, коли ви завершуєте відпочинок, ви можете обрати себе або одного союзника, який також завершує відпочинок, щоб надати йому користь божественного ритуалу. Обраний персонаж отримує бонус до значення відновлення, що дорівнює вашому рівню, який триває до наступного відпочинку.'
						}),
						FactoryLogic.feature.createSkillChoice({
							id: 'domain-life-1-2',
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
						id: 'domain-life-2',
						name: 'Джерело благодаті',
						description: 'Світле сяйво виходить із вашого тіла, зцілюючи союзників.',
						type: FactoryLogic.type.createMain(),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
						distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Aura, value: 3 })],
						target: 'Кожен союзник у зоні',
						cost: 5,
						sections: [
							FactoryLogic.createAbilitySectionText('До кінця сутички або поки ви не перебуваєте в стані "Вмираючий", кожен цільовий персонаж на початку свого ходу в зоні може витратити Відновлення.')
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
					id: 'domain-life-4',
					name: 'Благословення Життя',
					description: 'Ваша божественна присутність допомагає гідним швидко відновлюватися після бою. Коли союзник у межах дії вашої здібності "Цілюща благодать" відновлює Витривалість, він додатково відновлює Витривалість, що дорівнює вашому показнику Інтуїції.'
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
						id: 'domain-life-6',
						name: 'Оживлююча благодать',
						description: 'Жестом ви відновлюєте своє здоровʼя та здоровʼя союзників.',
						type: FactoryLogic.type.createMain(),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
						distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 4 })],
						target: 'Ви та кожен союзник у зоні',
						cost: 9,
						sections: [
							FactoryLogic.createAbilitySectionText('Кожна ціль може витратити будь-яку кількість Відновлень. Додатково кожна ціль може скинути один ефект, який скидається рят. кидком або закінчується наприкінці її ходу, або підвестися, якщо вона лежить.')
						]
					})
				})
			]
		},
		{
			level: 7,
			features: [
				FactoryLogic.feature.create({
					id: 'domain-life-7',
					name: 'Джерело благодаті',
					description: `
* Якщо ви **Провідник**: Кожного разу, коли ви використовуєте здібність *Цілюща благодать*, ви отримуєте 1 Благочестя, яке можна витратити лише на цю здібність протягом того ж ходу. Якщо ви не використаєте це Благочестя, воно зникає. Додатково ви можете використати властивість *Малий диво* для повернення істоти до життя навіть без її останків.
* Якщо ви **Цензор**: Кожного разу, коли ви використовуєте здібність *Моє життя за твоє*, ви отримуєте 1 Гнів, який можна витратити лише на цю здібність протягом того ж ходу. Якщо ви не використаєте цей Гнів, він зникає. Додатково ціль *Моє життя за твоє* отримує 10 тимчасової Витривалості.`
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
						id: 'domain-life-9',
						name: 'Сяйво благодаті',
						description: 'Із вашого тіла виривається яскраве світло, зцілюючи союзників.',
						type: FactoryLogic.type.createMain(),
						keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged],
						distance: [FactoryLogic.distance.createRanged(10)],
						target: 'Чотири союзники',
						cost: 11,
						sections: [
							FactoryLogic.createAbilitySectionText('Ви можете обрати себе замість одного союзника як ціль цієї здібності. Кожна ціль може витратити будь-яку кількість Відновлень, скинути будь-які ефекти, які скидаються рят. кидком або закінчуються наприкінці її ходу, та підвестися, якщо лежить.')
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
			trigger: 'Вперше під час сутички, коли істота в межах 10 клітинок відновлює Витривалість',
			value: '2'
		}
	],
	defaultFeatures: [
		FactoryLogic.feature.createPackageContent({
			id: 'life-default-1',
			name: 'Ефект молитви Життя',
			description: 'Обираєте себе або одного союзника в межах 10 клітинок. Цей персонаж може витратити Відновлення, скинути один ефект, який скидається рят. кидком або закінчується наприкінці його ходу, або підвестися, якщо лежить. Або ж ви чи союзник у межах 10 клітинок отримує тимчасову Витривалість, що дорівнює подвоєному значенню вашої Інтуїції.',
			tag: 'conduit-prayer'
		})
	]
};
