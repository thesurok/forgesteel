import { AbilityKeyword } from '@/enums/ability-keyword';
import { Domain } from '@/models/domain';
import { FactoryLogic } from '@/logic/factory-logic';
import { SkillList } from '@/enums/skill-list';

export const protection: Domain = {
	id: 'domain-protection',
	name: 'Захист',
	description: 'Сфера Захисту.',
	featuresByLevel: [
		{
			level: 1,
			features: [
				FactoryLogic.feature.createMultiple({
					id: 'domain-protection-1',
					features: [
						FactoryLogic.feature.create({
							id: 'domain-protection-1-1',
							name: 'Захисне коло',
							description: 'Ви можете витратити 10 хвилин без перерви, щоб створити захисне коло на землі, достатньо велике для однієї істоти розміру 1. Коло триває 24 години, поки ви не створите інше або не розвієте його (без дії). Лише істоти, яких ви визначили під час малювання кола, можуть входити й виходити з цієї області. Поки істота перебуває в захисному колі, її не можна обрати ціллю удару.'
						}),
						FactoryLogic.feature.createSkillChoice({
							id: 'domain-protection-1-2',
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
						id: 'domain-protection-2',
						name: 'Священний звʼязок',
						description: 'Ви створюєте божественний звʼязок між двома істотами.',
						type: FactoryLogic.type.createManeuver(),
						keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged],
						distance: [FactoryLogic.distance.createRanged(10)],
						target: 'Ви та один союзник',
						cost: 5,
						sections: [
							FactoryLogic.createAbilitySectionText(`
	До кінця сутички, коли одна ціль отримує шкоду, інша ціль може безкоштовною тригерною дією прийняти цю шкоду на себе. Оригінальна ціль усе одно зазнає всіх ефектів, повʼязаних із цією шкодою.

	Крім того, коли одна ціль витрачає Відновлення, інша ціль може безкоштовною тригерною дією витратити Відновлення.`)
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
					id: 'domain-protection-4',
					name: 'Дотик непроникності',
					description: `
Маневром ви можете торкнутися обʼєкта розміром, що дорівнює вашій Інтуїції або менше, і накласти на нього захисне закляття. Обʼєкт отримує імунітет до всієї немаркованої шкоди. Ви можете підтримувати це закляття на кількості обʼєктів, що дорівнює вашій Інтуїції, і можете розвіяти його на будь-якому обʼєкті будь-коли (без дії).

Крім того, ви можете накласти це закляття на будівлю чи транспорт (або подібну структуру з дозволу Директора), що перевищує ваш розмір Інтуїції. Ви можете підтримувати це закляття лише на одній такій цілі одночасно, а також на кількості менших обʼєктів, що дорівнює вашій Інтуїції.`
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
						id: 'domain-protection-6',
						name: 'Кіраса богів',
						description: 'Ваші союзники вкриті духовною бронею.',
						type: FactoryLogic.type.createManeuver(),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Magic, AbilityKeyword.Ranged],
						distance: [FactoryLogic.distance.createRanged(10)],
						target: 'Три істоти',
						cost: 9,
						sections: [
							FactoryLogic.createAbilitySectionText('Ви можете обрати себе замість однієї істоти як ціль цієї здібності. Кожна ціль отримує імунітет до 5 шкоди до початку вашого наступного ходу.')
						]
					})
				})
			]
		},
		{
			level: 7,
			features: [
				FactoryLogic.feature.create({
					id: 'domain-protection-7',
					name: 'Благословення заліза',
					description: 'Боги посилають божественну прихильність вам і вашим союзникам. Поки ви не перебуваєте у стані "Вмираючий", вороги отримують шкоду на удари проти вас або союзника в межах 3 клітинок.'
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
						id: 'domain-protection-9',
						name: 'Благословення фортеці',
						description: 'Магічне коло розширюється від вас, не дозволяючи ворогам наближатися.',
						type: FactoryLogic.type.createManeuver(),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
						distance: [FactoryLogic.distance.createSelf()],
						target: 'Ви',
						cost: 11,
						sections: [
							FactoryLogic.createAbilitySectionText('До кінця сутички або поки ви не перебуваєте у стані "Вмираючий", жоден ворог не може наблизитися до вас ближче ніж на 5 клітинок шляхом руху або примусового переміщення ворогом. Цілі можуть бути примусово переміщені ближче до вас вами чи союзниками, або можуть наблизитися через ваше переміщення.')
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
			trigger: 'Вперше під час сутички, коли ви або союзник у межах 10 клітинок отримує тимчасову Витривалість, або використовує тригерну дію для зменшення вхідної шкоди чи накладає шкоду або подвійну шкоду на кидок сили ворога.',
			value: '2'
		}
	],
	defaultFeatures: [
		FactoryLogic.feature.createPackageContent({
			id: 'protection-default-1',
			name: 'Ефект молитви Захисту',
			description: 'Один союзник у межах 10 клітинок отримує тимчасову Витривалість, що дорівнює чотирикратному значенню вашої Інтуїції.',
			tag: 'conduit-prayer'
		})
	]
};
