import { Career } from '@/models/career';
import { FactoryLogic } from '@/logic/factory-logic';
import { FeatureField } from '@/enums/feature-field';
import { PerkList } from '@/enums/perk-list';
import { SkillList } from '@/enums/skill-list';

export const magesApprentice: Career = {
	id: 'career-mages-apprentice',
	name: 'Учень мага',
	description: 'Багато років ви вивчали магію під керівництвом досвідченого мага.',
	features: [
		FactoryLogic.feature.createSkillChoice({
			id: 'mages-apprentice-feature-1',
			selected: ['Magic']
		}),
		FactoryLogic.feature.createSkillChoice({
			id: 'mages-apprentice-feature-2',
			listOptions: [SkillList.Lore],
			count: 2
		}),
		FactoryLogic.feature.createLanguageChoice({
			id: 'mages-apprentice-feature-3'
		}),
		FactoryLogic.feature.createBonus({
			id: 'mages-apprentice-feature-4',
			field: FeatureField.Renown,
			value: 1
		}),
		FactoryLogic.feature.createPerk({
			id: 'mages-apprentice-feature-5',
			lists: [PerkList.Supernatural]
		})
	],
	incitingIncidents: {
		options: [
			{
				id: 'career-mages-apprentice-ii-1',
				name: 'Забуті спогади',
				description: 'Під час тренування закляття через недосвідченість магія вийшла з-під контролю, і ваші спогади стерлися, залишивши лише уривки минулого. Вирішивши згадати своє життя, ви присвятили себе допомозі іншим, сподіваючись, що добрі справи повернуть памʼять або допоможуть зняти чари.'
			},
			{
				id: 'career-mages-apprentice-ii-2',
				name: 'Магія дружби',
				description: 'Як знак вашого статусу найкращого учня наставник подарував вам фамільяра. Інший заздрісний учень викрав його й утік уночі. Вас переслідує відсутність улюбленця, і ви вирушили на пошуки викраденого друга, щоб інші не зазнали такої втрати.'
			},
			{
				id: 'career-mages-apprentice-ii-3',
				name: 'Зниклий маг',
				description: 'Одного дня ви прокинулися, а маг, на якого працювали, зник. Він не взяв речей, не було слідів злочину — лише запах сірки в покоях. Ви вирушили на героїчний шлях і досі шукаєте його.'
			},
			{
				id: 'career-mages-apprentice-ii-4',
				name: 'Втілені кошмари',
				description: 'Ваші спроби магії завжди були непередбачуваними. Могутній маг пообіцяв допомогти вам опанувати сили. Під час навчання жахливий кошмар змусив ваше тіло спалахнути магією й перенести монстра з сну у реальний світ. Жах утік. Ви вирушили, щоб знищити цю потвору.'
			},
			{
				id: 'career-mages-apprentice-ii-5',
				name: 'З іншого світу',
				description: 'Вивчаючи магію, ви випадково перенесли себе з рідного світу в цей. Тепер ви застрягли тут і сподіваєтеся знайти стародавні тексти чи магічні артефакти, які допоможуть повернутися додому. Життя пригод триває!'
			},
			{
				id: 'career-mages-apprentice-ii-6',
				name: 'Абсолютна сила',
				description: 'Маг, у якого ви навчалися, був доброю людиною, але базова магія, якій він вас учив, здавалася лише частиною чогось більшого. Лише зустрівши мандрівного елементаліста, ви зрозуміли, що шлях героя — єдиний спосіб справді вдосконалити свої вміння. Ви залишили учнівство й наступного дня стали на героїчний шлях.'
			}
		],
		selected: null,
		selectedID: null
	}
};
