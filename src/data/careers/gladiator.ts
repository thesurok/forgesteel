import { Career } from '@/models/career';
import { FactoryLogic } from '@/logic/factory-logic';
import { FeatureField } from '@/enums/feature-field';
import { PerkList } from '@/enums/perk-list';
import { SkillList } from '@/enums/skill-list';

export const gladiator: Career = {
	id: 'career-gladiator',
	name: 'Гладіатор',
	description: 'У минулому ви розважали натовп яскравими видовищами насильства на арені.',
	features: [
		FactoryLogic.feature.createSkillChoice({
			id: 'gladiator-feature-1',
			listOptions: [SkillList.Exploration],
			count: 2
		}),
		FactoryLogic.feature.createLanguageChoice({
			id: 'gladiator-feature-2'
		}),
		FactoryLogic.feature.createBonus({
			id: 'gladiator-feature-3',
			field: FeatureField.Renown,
			value: 2
		}),
		FactoryLogic.feature.createPerk({
			id: 'gladiator-feature-4',
			lists: [PerkList.Exploration]
		})
	],
	incitingIncidents: {
		options: [
			{
				id: 'career-gladiator-ii-1',
				name: 'Зрада',
				description: 'Місцевий кримінальний авторитет запропонував вам гроші, щоб ви програли останній бій, обіцяючи, що ви виживете й отримаєте частку від ставок. Ви виконали свою частину угоди — тому ніж у спині після бою був таким несподіваним. Ви прокинулися в мілкій могилі, ледь живий, і готовий вершити справедливість.'
			},
			{
				id: 'career-gladiator-ii-2',
				name: 'Глузування',
				description: 'Коли ви стояли переможцем на арені, серед оплесків пролунав голос: «Це насильство — лише видовище. Вам має бути соромно. Є люди, яким ви потрібні — яким потрібні ваші вміння!» Чому цей голос так зачепив? І чому він здався знайомим? Ви так і не побачили обличчя того, хто це сказав, але слова залишилися з вами. Наступного дня ви втекли з арени, щоб почати героїчне життя.'
			},
			{
				id: 'career-gladiator-ii-3',
				name: 'На арені',
				description: 'У дитинстві ви захоплювалися гладіаторськими боями, не замислюючись, як учасники потрапляють на арену. Коли друга несправедливо звинуватили й засудили до бою, ви пішли замість нього. Побачивши життя змушених битися, ви вижили й вирішили захищати несправедливо засуджених.'
			},
			{
				id: 'career-gladiator-ii-4',
				name: 'Нові виклики',
				description: 'Ви здобули всі можливі титули, перемогли кожного, хто наважився вийти проти вас. Останній бій із суперником завершився вашою перемогою — і все одно ви не були задоволені. Десь є ще сильніші вороги — і ви маєте намір їх знайти.'
			},
			{
				id: 'career-gladiator-ii-5',
				name: 'Співчуття нащадка',
				description: 'Ви народилися в знатній родині, але її підступність і жадоба влади змусили вас шукати власну долю на арені. Ви побачили, як страждають ті, кого привели сюди обставини, а не вибір. Ви віддали всі сімейні гроші нужденним, а потім вирушили змінювати цей жорстокий світ.'
			},
			{
				id: 'career-gladiator-ii-6',
				name: 'Дім воїна',
				description: 'Дитбудинок, у якому ви виросли, таємно постачав гладіаторів на арену. Дорослим вас змусили битися з багатьма друзями дитинства, і ви поклялися зруйнувати арену й звільнити інших жертв. Ви стали визволителем, присвятивши життя боротьбі з гнобленням до останнього подиху.'
			}
		],
		selected: null,
		selectedID: null
	}
};
