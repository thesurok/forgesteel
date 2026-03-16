import { AbilityKeyword } from '@/enums/ability-keyword';
import { Characteristic } from '@/enums/characteristic';
import { Domain } from '@/models/domain';
import { FactoryLogic } from '@/logic/factory-logic';
import { SkillList } from '@/enums/skill-list';

export const fate: Domain = {
	id: 'domain-fate',
	name: 'Fate',
	description: 'The Fate domain.',
	featuresByLevel: [
		{
			level: 1,
			features: [
				FactoryLogic.feature.createMultiple({
					id: 'domain-fate-1',
					features: [
						FactoryLogic.feature.create({
							id: 'domain-fate-1-1',
							name: 'Оракульні Видіння',
							description: 'Ваше божество винагороджує вас туманними баченнями майбутнього. Щоразу, коли ви здобуваєте 1 або більше перемог, ви отримуєте таку саму кількість очок долі. Щоразу, коли ви або істота в радіусі 10 клітинок виконує перевірку, ви можете витратити 1 очко долі, щоб зазирнути у бачення результату, надаючи цій істоті перевагу під час перевірки. Ви втрачаєте всі залишки очок долі після завершення перепочинку.'
						}),
						FactoryLogic.feature.createSkillChoice({
							id: 'domain-fate-1-2',
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
						id: 'domain-fate-2',
						name: 'Благословення Долі й Призначення',
						description: 'Ваші вороги страждають від своєї долі; ваші союзники приймають своє призначення!',
						type: FactoryLogic.type.createMain(),
						keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged],
						distance: [FactoryLogic.distance.createRanged(10)],
						target: 'Три істоти',
						cost: 5,
						sections: [
							FactoryLogic.createAbilitySectionText(`
Ви можете обрати себе замість однієї істоти для цієї здібності. Оберіть один із наступних ефектів, який триває до кінця сутички або поки ви не вмираєте:

* Коли ціль робить кидок сили, вона може кинути три кубики й обрати два результати.
* Коли ціль робить кидок сили, вона повинна кинути три кубики й використати два найнижчі результати.`)
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
					id: 'domain-fate-4',
					name: 'Оракульне попередження',
					description: 'Кожного разу після відпочинку ви можете поділитися туманними снами про майбутнє, дарованими богами, із союзниками, які також відпочивали. Ці передчуття допомагають вам і союзникам вижити, надаючи кожному тимчасову Витривалість, що дорівнює 10 + ваш рівень, до наступного відпочинку.'
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
						id: 'domain-fate-6',
						name: 'Твоя історія закінчується тут',
						description: 'Ви згинаєте долю ворога, бажаючи йому смерті.',
						type: FactoryLogic.type.createMain(),
						keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged, AbilityKeyword.Strike],
						distance: [FactoryLogic.distance.createRanged(10)],
						target: 'Одна істота',
						cost: 9,
						sections: [
							FactoryLogic.createAbilitySectionRoll(
								FactoryLogic.createPowerRoll({
									characteristic: [Characteristic.Intuition],
									tier1: '9 + І шкоди скверною; Р < [слабкий], ослаблення (рят. кидок завершує)',
									tier2: '14 + І шкоди скверною; Р < [середній], ослаблення (рят. кидок завершує)',
									tier3: '19 + І шкоди скверною; Р < [сильний], ослаблення (рят. кидок завершує)'
								})
							),
							FactoryLogic.createAbilitySectionText('Якщо ця шкода вбиває ціль, ви та кожен союзник у межах дистанції можете витратити Відновлення.')
						]
					})
				})
			]
		},
		{
			level: 7,
			features: [
				FactoryLogic.feature.create({
					id: 'domain-fate-7',
					name: 'Слово Відкинутої Долі',
					description: 'Коли союзник у межах 10 клітинок отримує шкоду, яка зробить його вмираючим, ви можете безкоштовною тригерною дією зробити себе або іншу бажаючу істоту в межах 10 клітинок ціллю цієї шкоди замість нього. Обрана істота отримує цю шкоду та всі повʼязані ефекти, і ця шкода не може бути зменшена.'
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
						id: 'domain-fate-9',
						name: 'Зігни Долю',
						description: 'Боги знають, що ви повинні перемогти, і благословляють вашу долю.',
						type: FactoryLogic.type.createMain(),
						keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged],
						distance: [FactoryLogic.distance.createRanged(10)],
						target: 'На себе або одного союзника',
						cost: 11,
						sections: [
							FactoryLogic.createAbilitySectionText('Until the end of the encounter or until you are dying, each of the target’s power rolls has its outcome improved by one tier.')
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
			trigger: 'Вперше за сутичку, коли союзник у межах 10 клітинок отримує результат 3 рівня на кидку сили або ворог у межах 10 клітинок отримує результат 1 рівня на кидку сили',
			value: '2'
		}
	],
	defaultFeatures: [
		FactoryLogic.feature.createPackageContent({
			id: 'fate-default-1',
			name: 'Ефект Молитви Долі',
			description: 'Ви закликаєте сили долі, щоб створити надійне майбутнє. Оберіть істоту в межах 10 клітинок. Ця істота автоматично отримує результат 1 або 3 рівня (на ваш вибір) на своєму наступному кидку сили, зробленому до кінця сутички.',
			tag: 'conduit-prayer'
		})
	]
};
