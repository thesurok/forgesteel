import { Career } from '@/models/career';
import { FactoryLogic } from '@/logic/factory-logic';
import { FeatureField } from '@/enums/feature-field';
import { PerkList } from '@/enums/perk-list';
import { SkillList } from '@/enums/skill-list';

export const soldier: Career = {
	id: 'career-soldier',
	name: 'Воїн',
	description: 'У юності ви невтомно боролися в сутичках і кампаніях проти ворожих сил.',
	features: [
		FactoryLogic.feature.createSkillChoice({
			id: 'career-soldier-feature-1',
			listOptions: [SkillList.Exploration]
		}),
		FactoryLogic.feature.createSkillChoice({
			id: 'career-soldier-feature-2',
			listOptions: [SkillList.Intrigue]
		}),
		FactoryLogic.feature.createLanguageChoice({
			id: 'career-soldier-feature-3',
			count: 2
		}),
		FactoryLogic.feature.createBonus({
			id: 'career-soldier-feature-4',
			field: FeatureField.Renown,
			value: 1
		}),
		FactoryLogic.feature.createPerk({
			id: 'career-soldier-feature-5',
			lists: [PerkList.Exploration]
		})
	],
	incitingIncidents: {
		options: [
			{
				id: 'career-soldier-ii-1',
				name: 'Ганьба честі',
				description: 'Ви вступили до війська, щоб захищати інших, але командир наказав бити й убивати мирних жителів. Коли ви відмовилися, усе переросло у бійку. Ви ледве втекли, але тепер клянетеся допомагати людям на власних умовах.'
			},
			{
				id: 'career-soldier-ii-2',
				name: 'Повернення з відставки',
				description: 'Ви мали довгу й славетну карʼєру воїна, перш ніж вирішили піти на спокій. Але, повернувшись додому, ви побачили, що вороги зруйнували його. Тепер навички, здобуті на полі бою, допомагають вам стати іншим воїном — тим, хто рятує інших від вашої долі.'
			},
			{
				id: 'career-soldier-ii-3',
				name: 'Мир через зцілення',
				description: 'Видовище постійної кровопролиття далося взнаки. Ви шукаєте миру через зцілення й присвятили себе тому, щоб зупиняти війни до їх початку, рятуючи оточуючих від жахіть.'
			},
			{
				id: 'career-soldier-ii-4',
				name: 'Єдиний, хто вижив',
				description: 'Ви були останнім, хто вижив у підрозділі після важкого бою чи нападу монстрів, урятувавшись лише завдяки вдачі. Ви відмовилися від життя воїна, прагнучи стати героєм, здатним протистояти таким загрозам.'
			},
			{
				id: 'career-soldier-ii-5',
				name: 'Вкрадена слава',
				description: 'Втомившись животіти на вулиці, ви записалися до війська. Але не могли позбутися минулого, поки офіцер, що командував підрозділом, не загинув у бою. У хаосі ви прийняли його особу й повернулися додому героєм. Щоб уникнути підозр, ви стали мандрівним шукачем пригод.'
			},
			{
				id: 'career-soldier-ii-6',
				name: 'Клятва самопожертви',
				description: 'Ви пообіцяли товаришу, що захищатимете його родину, якщо він загине в бою. Коли це сталося, ви вирушили до його села, але знайшли його мешканців убитими чи розсіяними війною. Керуючись клятвою, ви присвятили життя пошукам уцілілих і захисту інших від подібної долі.'
			}
		],
		selected: null,
		selectedID: null
	}
};
