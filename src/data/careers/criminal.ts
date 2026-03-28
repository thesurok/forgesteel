import { Career } from '@/models/career';
import { FactoryLogic } from '@/logic/factory-logic';
import { FeatureField } from '@/enums/feature-field';
import { PerkList } from '@/enums/perk-list';
import { SkillList } from '@/enums/skill-list';

export const criminal: Career = {
	id: 'career-criminal',
	name: 'Злочинець',
	description: 'Колись ви були бандитом, повстанцем, контрабандистом, злочинцем або навіть убивцею.',
	features: [
		FactoryLogic.feature.createSkillChoice({
			id: 'career-criminal-feature-1',
			selected: ['Кримінальний світ']
		}),
		FactoryLogic.feature.createSkillChoice({
			id: 'career-criminal-feature-2',
			listOptions: [SkillList.Intrigue],
			count: 2
		}),
		FactoryLogic.feature.createLanguageChoice({
			id: 'career-criminal-feature-3'
		}),
		FactoryLogic.feature.createBonus({
			id: 'career-criminal-feature-4',
			field: FeatureField.ProjectPoints,
			value: 120
		}),
		FactoryLogic.feature.createPerk({
			id: 'career-criminal-feature-5',
			lists: [PerkList.Intrigue]
		})
	],
	incitingIncidents: {
		options: [
			{
				id: 'career-criminal-ii-1',
				name: 'Торгівля антикваріатом',
				description: 'Ви крали, перевозили контрабандою й продавали антикваріат. Прагнучи швидко заробити, ви не перевірили клієнта, і він обікрав ваш склад. Коли вкрадені речі забрали у вас, ви усвідомили шкоду, якої завдали. Тепер ви шукаєте ці речі, щоб повернути їх власникам.'
			},
			{
				id: 'career-criminal-ii-2',
				name: 'Спокута',
				description: 'Остання злочинна справа призвела до смерті когось або втрати чогось дорогого вам. Щоб спокутувати провину, ви покинули злочинний шлях і стали героєм.'
			},
			{
				id: 'career-criminal-ii-3',
				name: 'Добрий священник',
				description: 'Вас посадили до вʼязниці за злочини, але ви втекли. Літній священник прихистив вас і захистив від закону, вірячи, що ваша душа не зіпсована. Він не судив за минуле, говорив лише про майбутнє. Зрештою священник помер, залишивши слова, які надихнули вас стати героєм.'
			},
			{
				id: 'career-criminal-ii-4',
				name: 'Тіньовий вплив',
				description: 'Ви роками шантажували й маніпулювали знаттю заради впливу й багатства, поки одна афера не провалилася. Вас викрили публічно, і після втечі ви переосмислили життя. Під новим імʼям ви стали героєм і сподіваєтеся, що ніхто не дізнається про минуле.'
			},
			{
				id: 'career-criminal-ii-5',
				name: 'Заради виживання',
				description: 'Крадіжка для вас була питанням виживання, а не сутністю — принаймні у вашій уяві. Але коли ваші дії призвели до страждань невинних, ви зрозуміли, що можете бути кращим. Ви відмовилися від минулого, хоча старі навички досі стають у пригоді.'
			},
			{
				id: 'career-criminal-ii-6',
				name: 'Спротив тиранії',
				description: 'Коли у вашій країні до влади прийшов тиран, він почав жорстоко розправлятися з усіма злочинцями — рейдами й публічними стратами. Суть злочину не мала значення: кишенькові злодії та жебраки ставали на коліна перед сокирою разом із убивцями. Втративши багатьох друзів, ви приєдналися до спротиву — не лише проти цього тирана, а й проти будь-яких авторитарних режимів.'
			}
		],
		selected: null,
		selectedID: null
	}
};
