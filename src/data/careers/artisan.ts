import { Career } from '@/models/career';
import { FactoryLogic } from '@/logic/factory-logic';
import { FeatureField } from '@/enums/feature-field';
import { PerkList } from '@/enums/perk-list';
import { SkillList } from '@/enums/skill-list';

export const artisan: Career = {
	id: 'career-artisan',
	name: 'Ремісник',
	description: 'Ви виготовляли й продавали корисні вироби.',
	features: [
		FactoryLogic.feature.createSkillChoice({
			id: 'career-artisan-feature-1',
			listOptions: [ SkillList.Crafting ],
			count: 2
		}),
		FactoryLogic.feature.createLanguageChoice({
			id: 'career-artisan-feature-2'
		}),
		FactoryLogic.feature.createBonus({
			id: 'career-artisan-feature-3',
			field: FeatureField.ProjectPoints,
			value: 240
		}),
		FactoryLogic.feature.createPerk({
			id: 'career-artisan-feature-4',
			lists: [ PerkList.Crafting ]
		})
	],
	incitingIncidents: {
		options: [
			{
				id: 'career-artisan-ii-1',
				name: 'Продовжити справу',
				description: 'Відомий герой захоплювався вашими виробами й замовив у вас найкращу роботу. Під час виконання замовлення ви стали близькими друзями. У день, коли ви завершили роботу, герой зник. Щоб вшанувати його памʼять, ви стали героєм із наміром завершити справу друга.'
			},
			{
				id: 'career-artisan-ii-2',
				name: 'Натхнення',
				description: 'Під час мандрів із продажем виробів на вас напали тролі-розбійники. Один із них забрав річ, що належала дорогій вам людині, або навіть забрав її життя, але решту розбійників прогнали чи вбили герої. Побачивши, як швидко герої розправилися з бандитами, ви вирішили наслідувати їхній приклад.'
			},
			{
				id: 'career-artisan-ii-3',
				name: 'Пограбування',
				description: 'Банда злочинців вкрала ваші товари й нашкодила кільком вашим працівникам. Ви стали героєм, щоб не допустити такого з іншими, помститися за напад або знайти злодіїв і повернути своє.'
			},
			{
				id: 'career-artisan-ii-4',
				name: 'Вкрадені пристрасті',
				description: 'Батьки не схвалювали ваші творчі таланти, намагаючись спрямувати вас у сімейний бізнес. Ви не захотіли згасити іскру й продовжили творити потайки. Дізнавшись про непослух, батьки розлютилися й продали ваші роботи мандрівному торговцю. Ви покинули рідне місто, шукаючи втрачене мистецтво й надихаючи інших жити вільно.'
			},
			{
				id: 'career-artisan-ii-5',
				name: 'Заплямована честь',
				description: 'Новий покровитель замовив у вас мистецький виріб, але, отримавши його, відмовився платити й привласнив собі. Вас звинуватили в плагіаті й вигнали з міста. Для вас героїзм — це відновлення імені й честі.'
			},
			{
				id: 'career-artisan-ii-6',
				name: 'Викривлена майстерність',
				description: 'Ваш успіх викликав заздрість у підступного суперника, який наклав на вас прокляття. Деякий час усе, що ви створювали, руйнувалося. Ви зняли прокляття завдяки пригодам і знайшли нову радість і сенс життя.'
			}
		],
		selected: null,
		selectedID: null
	}
};
