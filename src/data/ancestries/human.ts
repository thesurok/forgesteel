import { EnvironmentData, OrganizationData, UpbringingData } from '@/data/culture-data';
import { Ancestry } from '@/models/ancestry';
import { CultureType } from '@/enums/culture-type';
import { FactoryLogic } from '@/logic/factory-logic';
import { FeatureField } from '@/enums/feature-field';

export const human: Ancestry = {
	id: 'ancestry-human',
	name: 'Людина',
	description: 'Люди належать до світу так, як інші розмовляючі народи — ні. Ви можете відчувати присутність надприродного — той … маслянистий запах у повітрі, як я чув, його описують. А присутність безсмертних змушує волосся на вашій шиї ставати дибки. Або чому, як ви думаєте, кладовища так на вас впливають? Що б не було магією, її вплив на вас легкий. Що б не керувало безсмертними, ваша природа повстає проти цього.',
	features: [
		FactoryLogic.feature.createAbility({
			ability: FactoryLogic.createAbility({
				id: 'human-feature-1',
				name: 'Виявлення надприродного',
				description: 'Ви відкриваєте свою свідомість, щоб виявити надприродних істот і явища.',
				type: FactoryLogic.type.createManeuver(),
				sections: [
					FactoryLogic.createAbilitySectionText('До кінця вашого наступного ходу ви знаєте місцезнаходження будь-якого надприродного об’єкта, нежиті, конструкта або істоти з іншого світу в межах 5 клітинок, навіть якщо у вас немає лінії впливу на цей об’єкт або істоту. Ви знаєте, чи виявляєте ви предмет або істоту, і знаєте природу будь-якої істоти, яку ви виявляєте.')
				]
			})
		}),
		FactoryLogic.feature.createChoice({
			id: 'human-feature-2',
			name: 'Риси людини',
			options: [
				{
					feature: FactoryLogic.feature.create({
						id: 'human-feature-2-1',
						name: 'Не піддається впливу',
						description: 'Ваш зв’язок із природним світом дозволяє вам протистояти певним надприродним ефектам. Ви ігноруєте тимчасову складну місцевість, створену магічними та псіонічними здібностями. Крім того, коли вас змушують рухатися магічною або псіонічною здатністю, ви можете зменшити відстань примусового переміщення на 1.'
					}),
					value: 1
				},
				{
					feature: FactoryLogic.feature.create({
						id: 'human-feature-2-2',
						name: 'Наполегливість',
						description: 'Здаватися — це для інших людей. Ви отримуєте перевагу на випробуваннях, зроблених за допомогою навички Витривалість. Крім того, коли ви уповільнені, ваша швидкість зменшується до 3 замість 2.'
					}),
					value: 1
				},
				{
					feature: FactoryLogic.feature.createAbility({
						ability: FactoryLogic.createAbility({
							id: 'human-feature-2-3',
							name: 'Протистояти неприродному',
							description: 'Ваша інстинктивна стійкість захищає вас від травм, які виходять за межі звичайного.',
							type: FactoryLogic.type.createTrigger('Ви отримуєте шкоду, яка не є нетиповою'),
							sections: [
								FactoryLogic.createAbilitySectionText('Ви зменшуєте шкоду наполовину.')
							]
						})
					}),
					value: 1
				},
				{
					feature: FactoryLogic.feature.createAbility({
						ability: FactoryLogic.createAbility({
							id: 'human-feature-2-4',
							name: 'Рішучість',
							description: 'Толерантність до болю та стресу дозволяє вам долати складні ситуації.',
							type: FactoryLogic.type.createManeuver(),
							sections: [
								FactoryLogic.createAbilitySectionText('Ви негайно припиняєте один із станів: переляк, уповільнення або ослаблення.')
							]
						})
					}),
					value: 2
				},
				{
					feature: FactoryLogic.feature.createBonus({
						id: 'human-feature-2-5',
						name: 'Стійкість',
						description: 'Ваша людська фізіологія дозволяє вам битися, бігати та не спати довше за інших.',
						field: FeatureField.Recoveries,
						value: 2
					}),
					value: 2
				}
			],
			count: 'ancestry'
		})
	],
	ancestryPoints: 3,
	culture: FactoryLogic.createCulture('Людина', 'Міський, комунальний, праця.', CultureType.Ancestral, EnvironmentData.urban, OrganizationData.communal, UpbringingData.labor, 'Васлоріан (Vaslorian)')
};
