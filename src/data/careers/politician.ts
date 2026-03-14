import { Career } from '@/models/career';
import { FactoryLogic } from '@/logic/factory-logic';
import { FeatureField } from '@/enums/feature-field';
import { PerkList } from '@/enums/perk-list';
import { SkillList } from '@/enums/skill-list';

export const politician: Career = {
	id: 'career-politician',
	name: 'Політик',
	description: 'Ви працювали лідером у формальній бюрократичній організації чи уряді. Вас могли призначити, обрати або ви могли народитися на цій посаді, але ваша робота полягала в тому, щоб досягати згоди й ухвалювати рішення для людей, яким ви служили (або які служили вам).',
	features: [
		FactoryLogic.feature.createSkillChoice({
			id: 'career-politician-feature-1',
			listOptions: [SkillList.Interpersonal],
			count: 2
		}),
		FactoryLogic.feature.createLanguageChoice({
			id: 'career-politician-feature-2'
		}),
		FactoryLogic.feature.createBonus({
			id: 'career-politician-feature-3',
			field: FeatureField.Renown,
			value: 1
		}),
		FactoryLogic.feature.createBonus({
			id: 'career-politician-feature-4',
			field: FeatureField.Wealth,
			value: 1
		}),
		FactoryLogic.feature.createPerk({
			id: 'career-politician-feature-5',
			lists: [PerkList.Interpersonal]
		})
	],
	incitingIncidents: {
		options: [
			{
				id: 'career-politician-ii-1',
				name: 'Дипломатичний імунітет',
				description: 'Ваша політична влада дозволяла вам бути безвідповідальним без наслідків. Через необережність або на спір ви випадково нашкодили чи навіть убили невинного перехожого. Завдяки посаді ви уникли покарання. Але ця подія стала останньою краплею для найдорожчої вам людини, і вона відвернулася від вас. Ви залишили світ політичних інтриг, щоб повернути її довіру.'
			},
			{
				id: 'career-politician-ii-2',
				name: 'Заколотник',
				description: 'Ви таємно фінансували повстанську організацію, що прагнула повалити корумповану владу. Хтось дізнався про вашу зраду, і вам довелося втекти або ризикувати стратою. Ви стали героєм, щоб жити й боротися за тих, хто не має влади.'
			},
			{
				id: 'career-politician-ii-3',
				name: 'Шанований консул',
				description: 'Ви були сенешалем при лідері, могли впливати на його думки, але плітки переконали монарха, що ви готуєте переворот, і вас вигнали з двору. Ви стали героєм, щоб продовжити свою справу й змінювати світ на краще.'
			},
			{
				id: 'career-politician-ii-4',
				name: 'Правильний бік історії',
				description: 'Ви намагалися змінити політику зсередини бюрократичної організації. Були й інші, хто висловлювався голосніше. Ви помітили, що ці колеги почали зникати за одну ніч. Не бажаючи дізнатися, чи ви наступний, ви пішли, щоб змінювати світ більш прямими методами.'
			},
			{
				id: 'career-politician-ii-5',
				name: 'Власна вигода',
				description: 'Ви використовували свої навички, щоб збирати компромат на опонентів і шантажувати їх. Суперник випередив вас і вкрав вашу книгу брудних секретів, але замість того, щоб використати її проти вас, дав вам шанс залишити політику. Уникнувши публічного приниження, тепер ви використовуєте свої вміння на благо.'
			},
			{
				id: 'career-politician-ii-6',
				name: 'Без обмежень',
				description: 'Бюрократична тяганина, необхідна для досягнення чогось на посаді, призвела до того, що криза була зіпсована, а багато людей постраждали чи загинули. Після цієї події ви вирішили діяти без обмежень бюрократії й робити добро справами, а не паперами.'
			}
		],
		selected: null,
		selectedID: null
	}
};
