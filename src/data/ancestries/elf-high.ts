import { EnvironmentData, OrganizationData, UpbringingData } from '@/data/culture-data';
import { Ancestry } from '@/models/ancestry';
import { ConditionType } from '@/enums/condition-type';
import { CultureType } from '@/enums/culture-type';
import { FactoryLogic } from '@/logic/factory-logic';
import { FeatureField } from '@/enums/feature-field';

export const highElf: Ancestry = {
	id: 'ancestry-high-elf',
	name: 'Високий ельф',
	description: 'Діти сонячних небожителів, створені доглядати їхні бібліотеки та служити вестовниками істинних ельфів; історія високих ельфів описує кращу епоху до приходу людей і воєн. Часи, коли небожителі ще були в світі, і єдине, що мало значення — мистецтво та краса.',
	features: [
		FactoryLogic.feature.create({
			id: 'high-elf-feature-1',
			name: 'Гламур високого ельфа',
			description: 'Магічний глямор змушує інших вважати вас цікавим та привабливим, даючи перевагу на перевірках Присутності з використанням навичок Флірт або Переконання. Цей глямор трохи по-різному виглядає і звучить для кожної істоти, яку ви зустрічаєте, оскільки те, що приваблює одну істоту, може відрізнятися для іншої. Проте ви ніколи не виглядаєте як інша особа.'
		}),
		FactoryLogic.feature.createChoice({
			id: 'high-elf-feature-2',
			name: 'Особливості високого ельфа',
			options: [
				{
					feature: FactoryLogic.feature.createAbility({
						ability: FactoryLogic.createAbility({
							id: 'high-elf-feature-2-0',
							name: 'Глямор страху',
							description: 'Коли ворог завдає удару, ви звертаєте магію свого глямору, щоб вселити страх у його серце.',
							type: FactoryLogic.type.createTrigger('You take damage from a creature'),
							sections: [
								FactoryLogic.createAbilitySectionText('Коли ви отримуєте шкоду від істоти, ви можете використати тригерну дію, щоб зробити цю істоту переляканою від вас до кінця її наступного ходу.')
							]
						})
					}),
					value: 2
				},
				{
					feature: FactoryLogic.feature.createBonus({
						id: 'high-elf-feature-2-1',
						name: 'Граціозне відступання',
						description: 'Ви отримуєте бонус +1 до відстані, яку можете змістити, коли виконуєте дію переміщення Відступити.',
						field: FeatureField.Disengage,
						value: 1
					}),
					value: 1
				},
				{
					feature: FactoryLogic.feature.create({
						id: 'high-elf-feature-2-2',
						name: 'Витончені почуття',
						description: 'Ваші почуття особливо гострі та уважні. Ви отримуєте перевагу на перевірках на помічання загроз.'
					}),
					value: 1
				},
				{
					feature: FactoryLogic.feature.createSaveThreshold({
						id: 'high-elf-feature-2-4',
						name: 'Неземна грація',
						description: 'Ваше ельфійське тіло та розум довго не можна утримати. Коли ви робите рят. кидок, він вважається успішним при результаті 5 або більше.',
						value: 5
					}),
					value: 2
				},
				{
					feature: FactoryLogic.feature.create({
						id: 'high-elf-feature-2-3',
						name: 'Повернення памʼяті',
						description: 'Доступ до спогадів для вас такий само простий, як життя в сьогоденні. Ви отримуєте перевагу на перевірках, повʼязаних із пригадуванням знань.'
					}),
					value: 1
				},
				{
					feature: FactoryLogic.feature.createConditionImmunity({
						id: 'high-elf-feature-2-5',
						name: 'Нескінченний розум',
						description: 'Ваш розум дозволяє зберігати концентрацію в будь-якій ситуації.',
						conditions: [ConditionType.Dazed]
					}),
					value: 2
				}
			],
			count: 'ancestry'
		})
	],
	ancestryPoints: 3,
	culture: FactoryLogic.createCulture('Високий ельф', 'Відлюдний, бюрократичний, військовий.', CultureType.Ancestral, EnvironmentData.secluded, OrganizationData.bureaucratic, UpbringingData.martial, 'Гіраллік (Hyrallic)')
};
