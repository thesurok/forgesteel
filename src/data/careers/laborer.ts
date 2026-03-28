import { Career } from '@/models/career';
import { FactoryLogic } from '@/logic/factory-logic';
import { FeatureField } from '@/enums/feature-field';
import { PerkList } from '@/enums/perk-list';
import { SkillList } from '@/enums/skill-list';

export const laborer: Career = {
	id: 'career-laborer',
	name: 'Робітник',
	description: 'Ви працювали фермером, будівельником, прачем, лісником, шахтарем чи в іншій важкій фізичній праці.',
	features: [
		FactoryLogic.feature.createSkillChoice({
			id: 'laborer-feature-1',
			selected: ['Витривалість']
		}),
		FactoryLogic.feature.createSkillChoice({
			id: 'laborer-feature-2',
			listOptions: [SkillList.Crafting, SkillList.Exploration],
			count: 2
		}),
		FactoryLogic.feature.createLanguageChoice({
			id: 'laborer-feature-3'
		}),
		FactoryLogic.feature.createBonus({
			id: 'laborer-feature-4',
			field: FeatureField.ProjectPoints,
			value: 120
		}),
		FactoryLogic.feature.createPerk({
			id: 'laborer-feature-5',
			lists: [PerkList.Exploration]
		})
	],
	incitingIncidents: {
		options: [
			{
				id: 'career-laborer-ii-1',
				name: 'Сторож глибин',
				description: 'Дні, проведені за прибиранням і доглядом за каналізацією, не приносять багато друзів. Але ви знайшли їх серед щурів. Ви боролися з монстрами, які полювали на ваших друзів, і яких усі ігнорували. Зробивши каналізацію безпечною для щурів, ви вирішили допомагати й іншим, хто оцінить ваші зусилля.'
			},
			{
				id: 'career-laborer-ii-2',
				name: 'Лихо',
				description: 'Під час роботи на вашу бригаду обрушилося лихо: обвал, пожежа чи цунамі. Ви врятували стільки людей, скільки змогли, але ті, кого не вдалося врятувати, досі тяжіють на душі. Ви стали героєм, щоб рятувати якомога більше людей, пообіцявши, що таке більше не повториться.'
			},
			{
				id: 'career-laborer-ii-3',
				name: 'Ганьба',
				description: 'Пан, на якого ви працювали, не раз прилюдно дорікав вам за погану роботу. Зрештою ви втомилися й вирішили змінити життя, довести, що ви значно більше, ніж здаєтеся.'
			},
			{
				id: 'career-laborer-ii-4',
				name: 'Жити мрією',
				description: 'Ви працювали з добрим другом і завжди мріяли разом вирушити в пригоди... колись. Ви не очікували, що друг захворіє й помре. Тепер настав час здійснити цю мрію за вас обох.'
			},
			{
				id: 'career-laborer-ii-5',
				name: 'Світло маяка',
				description: 'Ви доглядали маяк на буремних скелях села разом із наставником. У ясний сонячний день наставник зник. Залишився лише загадковий зошит із його роздумами про надприродне. Ви вирушили дізнатися правду. Слід охолов, і тепер ви допомагаєте іншим шукати зниклих.'
			},
			{
				id: 'career-laborer-ii-6',
				name: 'Повільно й впевнено',
				description: 'Ви мовчки працювали, поки байдужий начальник знущався з усіх, змушуючи вас працювати ще більше, щоб полегшити тягар товаришів. Але коли він зайшов надто далеко й убив вашого друга, ви підняли повстання. Так почалося ваше пригодницьке життя.'
			}
		],
		selected: null,
		selectedID: null
	}
};
