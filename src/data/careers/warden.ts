import { Career } from '@/models/career';
import { FactoryLogic } from '@/logic/factory-logic';
import { FeatureField } from '@/enums/feature-field';
import { PerkList } from '@/enums/perk-list';
import { SkillList } from '@/enums/skill-list';

export const warden: Career = {
	id: 'career-warden',
	name: 'Оберігач',
	description: 'Ви захищали дику місцевість від тих, хто прагнув їй зашкодити — браконьєрів, культістів, що бажали знищити природу. Добре знаючи свої землі, ви могли бути провідником або очолити рятувальний загін для заблукалих у хащах.',
	features: [
		FactoryLogic.feature.createSkillChoice({
			id: 'career-warden-feature-1',
			selected: ['Природа']
		}),
		FactoryLogic.feature.createSkillChoice({
			id: 'career-warden-feature-2',
			listOptions: [SkillList.Exploration]
		}),
		FactoryLogic.feature.createSkillChoice({
			id: 'career-warden-feature-3',
			listOptions: [SkillList.Intrigue]
		}),
		FactoryLogic.feature.createLanguageChoice({
			id: 'career-warden-feature-4'
		}),
		FactoryLogic.feature.createBonus({
			id: 'career-warden-feature-5',
			field: FeatureField.ProjectPoints,
			value: 120
		}),
		FactoryLogic.feature.createPerk({
			id: 'career-warden-feature-6',
			lists: [PerkList.Exploration]
		})
	],
	incitingIncidents: {
		options: [
			{
				id: 'career-warden-ii-1',
				name: 'Зрада',
				description: 'Коли чужинці прийшли на ваші землі, щоб використати ресурси дикої природи, ви виступили проти них. Однак кілька інших оберігачів підтримали чужинців і дозволили їм спустошити природу. Не бажаючи спостерігати за знищенням рідного краю, ви пішли. Тепер ви допомагаєте іншим уникнути такої долі.'
			},
			{
				id: 'career-warden-ii-2',
				name: 'Скверна',
				description: 'Хвороба вразила землі, які ви захищаєте: тварини стали агресивними, а рослини — темними й потворними. Ви перепробували все, магічне й звичайне, щоб зупинити лихо, але воно лише шириться. Тож ви вирушили на пошуки ліків або незайманої землі, яку можна оберігати.'
			},
			{
				id: 'career-warden-ii-3',
				name: 'Вигнання',
				description: 'Ви припустилися непрощенної помилки. Інші оберігачі регіону вирішили вашу долю, вигнавши вас із земель і заборонивши повертатися.'
			},
			{
				id: 'career-warden-ii-4',
				name: 'Вшанування полеглих',
				description: 'Група героїв прийшла на вашу територію, тікаючи від небезпеки. Ви билися разом із ними, щоб зупинити зло, але сили були нерівні. Герої загинули, а ваші землі назавжди змінилися. Хоча рідний край не врятувати, є інші землі, яким ви можете допомогти.'
			},
			{
				id: 'career-warden-ii-5',
				name: 'Провісники',
				description: 'Були знаки. Ви намагалися їх ігнорувати, але коли велетенський звір помер у вас під ногами, довелося визнати правду. Ви повинні були залишити рідні землі й боротися за долю всіх земель — і тому відмовилися від єдиного життя, яке знали.'
			},
			{
				id: 'career-warden-ii-6',
				name: 'Крадіжка',
				description: 'Ви відповідали за охорону чогось цінного, життєво важливого для вашого краю. Але ви впустили когось, і ця людина зрадила вашу довіру, викравши те, що ви мали оберігати. Ви залишили обрану територію, щоб спокутувати провину.'
			}
		],
		selected: null,
		selectedID: null
	}
};
