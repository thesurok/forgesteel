import { EnvironmentData, OrganizationData, UpbringingData } from '@/data/culture-data';
import { Ancestry } from '@/models/ancestry';
import { CultureType } from '@/enums/culture-type';
import { FactoryLogic } from '@/logic/factory-logic';
import { SkillList } from '@/enums/skill-list';

export const devil: Ancestry = {
	id: 'ancestry-devil',
	name: 'Диявол',
	description: 'Рідна раса Семи Міст Пекла — дияволи — гуманоїди з червоною або синьою шкірою у різних відтінках: від яскравої кармінної до глибокого фіолетового. Кожен диявол народжується з якимось пекельним знаком — рогами, хвостом, розщепленими копитами, роздвоєним язиком, іклами або навіть крилами.',
	features: [
		FactoryLogic.feature.createMultiple({
			id: 'devil-feature-1',
			name: 'Срібний язик',
			features: [
				FactoryLogic.feature.create({
					id: 'devil-feature-1a',
					name: 'Срібний язик',
					description: 'Ваша вроджена магія дозволяє змінювати сприйняття ваших слів, щоб краще розпізнати людей і переконати їх бачити речі по-вашому. Ви отримуєте перевагу на перевірках, коли намагаєтеся зʼясувати мотивації й підводні камені NPC під час переговорів.'
				}),
				FactoryLogic.feature.createSkillChoice({
					id: 'devil-feature-1b',
					listOptions: [ SkillList.Interpersonal ]
				})
			]
		}),
		FactoryLogic.feature.createChoice({
			id: 'devil-feature-2',
			name: 'Риси диявола',
			options: [
				{
					feature: FactoryLogic.feature.create({
						id: 'devil-feature-2-1',
						name: 'Шипастий хвіст',
						description: 'Гострий хвіст дозволяє підкреслювати ваші дії. Раз за раунд, коли ви завдаєте удару в ближньому бою, ви можете завдати додаткової шкоди, рівної вашому найвищому значенню характеристики.'
					}),
					value: 1
				},
				{
					feature: FactoryLogic.feature.createSpeed({
						id: 'devil-feature-2-2',
						name: 'Звірячі ноги',
						description: 'Потужні ноги підвищують вашу швидкість. Ваша швидкість — 6.',
						speed: 6
					}),
					value: 1
				},
				{
					feature: FactoryLogic.feature.createAbility({
						ability: FactoryLogic.createAbility({
							id: 'devil-feature-2-3',
							name: 'Сяючі очі',
							description: 'Ваші очі мають рівномірний яскравий колір, який спалахує, коли ви збуджені або розлючені.',
							type: FactoryLogic.type.createTrigger('You take damage from a creature'),
							sections: [
								FactoryLogic.createAbilitySectionText('Коли ви отримуєте шкоду від істоти, ви можете використати тригерну дію, щоб завдати їй психічної шкоди в розмірі 1d10 + вашого рівня.')
							]
						})
					}),
					value: 1
				},
				{
					feature: FactoryLogic.feature.create({
						id: 'devil-feature-2-4',
						name: 'Пекельний зір',
						description: 'Ваші очі дозволяють бачити крізь темряву, туман та інші ефекти, що заважають огляду. Ви не отримуєте штрафу до ударів по істотах, що перебувають у прихованні.'
					}),
					value: 1
				},
				{
					feature: FactoryLogic.feature.createSaveThreshold({
						id: 'devil-feature-2-5',
						name: 'Вражаючі роги',
						description: 'Ваші роги більші за середні й є виявом вашої сили волі. Коли ви робите рят. кидок, він вважається успішним при результаті 5 або більше.',
						value: 5
					}),
					value: 2
				},
				{
					feature: FactoryLogic.feature.create({
						id: 'devil-feature-2-6',
						name: 'Хваткий хвіст',
						description: 'Ваш хваткий хвіст дозволяє протистояти ворогам з усіх боків. Вас неможливо фланкувати.'
					}),
					value: 2
				},
				{
					feature: FactoryLogic.feature.create({
						id: 'devil-feature-2-7',
						name: 'Крила',
						description: 'Ви маєте крила, достатньо потужні, щоб підняти вас у повітря. Коли ви летите, ви можете залишатися в повітрі протягом числа раундів, рівного значенню вашої характеристики С (мінімум 1 раунд), перш ніж впасти. Якщо ви летите на рівні 3 або нижче, у вас є слабкість до шкоди 5.'
					}),
					value: 2
				}
			],
			count: 'ancestry'
		})
	],
	ancestryPoints: 3,
	culture: FactoryLogic.createCulture('Диявол', 'Міський, бюрократичний, академічний.', CultureType.Ancestral, EnvironmentData.urban, OrganizationData.bureaucratic, UpbringingData.academic, 'Anjali')
};
