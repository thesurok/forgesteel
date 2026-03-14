import { Career } from '@/models/career';
import { FactoryLogic } from '@/logic/factory-logic';
import { FeatureField } from '@/enums/feature-field';
import { PerkList } from '@/enums/perk-list';
import { SkillList } from '@/enums/skill-list';

export const aristocrat: Career = {
	id: 'career-aristocrat',
	name: 'Аристократ',
	description: 'Карʼєра? Кому потрібна карʼєра, якщо ти народився в багатстві! Або одружився з багатієм! Або хитрістю здобув статки! Як би там не було, працювати не довелося завдяки чиємусь спадковому багатству.',
	features: [
		FactoryLogic.feature.createSkillChoice({
			id: 'career-aristocrat-feature-1',
			listOptions: [SkillList.Interpersonal]
		}),
		FactoryLogic.feature.createSkillChoice({
			id: 'career-aristocrat-feature-2',
			listOptions: [SkillList.Lore]
		}),
		FactoryLogic.feature.createLanguageChoice({
			id: 'career-aristocrat-feature-3'
		}),
		FactoryLogic.feature.createBonus({
			id: 'career-aristocrat-feature-4',
			field: FeatureField.Renown,
			value: 1
		}),
		FactoryLogic.feature.createBonus({
			id: 'career-aristocrat-feature-5',
			field: FeatureField.Wealth,
			value: 1
		}),
		FactoryLogic.feature.createPerk({
			id: 'career-aristocrat-feature-6',
			lists: [PerkList.Lore]
		})
	],
	incitingIncidents: {
		options: [
			{
				id: 'career-aristocrat-ii-1',
				name: 'Криваві гроші',
				description: 'Досягнувши повноліття, ви почули недобрі чутки про статки своєї родини й дізналися, що багатство дісталося ціною чужих страждань. Незалежно від того, чи розкрили ви цю таємницю, ви залишили все, щоб стати героєм без дворянського титулу.'
			},
			{
				id: 'career-aristocrat-ii-2',
				name: 'Чарівне життя',
				description: 'Завдяки скарбу чи природному таланту ви обдурювали інших аристократів — просто заради розваги. Коли вас викрили, ви втратили статус. Чи відбували ви покарання, чи втекли, ви вирішили виправитися й стали героєм.'
			},
			{
				id: 'career-aristocrat-ii-3',
				name: 'Спадщина',
				description: 'Опікуни, які прищепили вам чесноти, були вбиті під час безглуздого пограбування. Хоча їхній спадок дістався вам, це не полегшило провини за те, що не змогли зупинити злочин. Ви вирішили використати багатство, щоб фінансувати героїчне життя — відкрито чи під вигаданим імʼям.'
			},
			{
				id: 'career-aristocrat-ii-4',
				name: 'Привілейоване становище',
				description: 'Життя поза маєтком вас ніколи не цікавило — у вас було все, чого бажали. Та коли селяни прийшли скидати вашу родину, ви ледь утекли й уперше побачили справжній світ. Це надихнуло вас стати героєм для народу, борцем із несправедливістю.'
			},
			{
				id: 'career-aristocrat-ii-5',
				name: 'Королівський злидар',
				description: 'Щоб відпочити від дворянських обовʼязків, ви знайшли двійника для обміну особистостями. Це так сподобалося, що ви робили це щоразу, коли нудьгували. На жаль, двійник так добре навчився вас наслідувати, що переконав усіх, ніби ви — самозванець. Ви втратили звʼязок із родиною, але обрали героїчний шлях без пишноти минулого.'
			},
			{
				id: 'career-aristocrat-ii-6',
				name: 'Темна таємниця',
				description: 'Один із батьків помер, коли ви були немовлям, а інший одружився вдруге. Згодом і цей батько помер за підозрілих обставин. Їхній новий чоловік або дружина вигнали вас, і ви були вигнані (а можливо, і переслідувані). Переживши трагедію, ви прагнете виправити несправедливість у світі.'
			}
		],
		selected: null,
		selectedID: null
	}
};
