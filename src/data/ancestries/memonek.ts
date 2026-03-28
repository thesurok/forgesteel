import { EnvironmentData, OrganizationData, UpbringingData } from '@/data/culture-data';
import { Ancestry } from '@/models/ancestry';
import { ConditionType } from '@/enums/condition-type';
import { CultureType } from '@/enums/culture-type';
import { FactoryLogic } from '@/logic/factory-logic';

export const memonek: Ancestry = {
	id: 'ancestry-memonek',
	name: 'Мемонек',
	description: 'Корінні мешканці Аксіому, Плану Найвищого Закону, мемонеки живуть у країні з озерами, деревами, птахами та квітами. Але на цьому чужому світі озера — це моря ртуті, птахи блищать крилами зі скла, натягнутого тонким серпанком, а пелюстки квітів — це райдужний метал, такий же гнучкий і крихкий, як будь-яка земна троянда.',
	features: [
		FactoryLogic.feature.create({
			id: 'memonek-feature-1',
			name: 'Легке падіння',
			description: 'Ваше силіконове тіло має низьку щільність. Коли ви падаєте, ви зменшуєте відстань падіння на 2 клітинки.'
		}),
		FactoryLogic.feature.create({
			id: 'memonek-feature-2',
			name: 'Легкий',
			description: 'Ваше тіло легке для істоти вашого зросту. Коли інша істота намагається примусово перемістити вас, ви вважаєте свій розмір на один меншим, ніж він є.'
		}),
		FactoryLogic.feature.createChoice({
			id: 'memonek-feature-3',
			name: 'Риси мемонека',
			options: [
				{
					feature: FactoryLogic.feature.create({
						id: 'memonek-feature-3-1',
						name: 'Я є Закон',
						description: 'Ваша законна природа та швидкі рефлекси означають, що ви не даєте пощади істотам, які намагаються пройти повз вас. Вороги не можуть рухатися через ваш простір, якщо ви не дозволите їм це зробити.'
					}),
					value: 1
				},
				{
					feature: FactoryLogic.feature.create({
						id: 'memonek-feature-3-2',
						name: 'Систематичний розум',
						description: 'Ви отримуєте перевагу на випробуваннях, зроблених для аналізу схем, карт і інших систематичних документів, які не є хаотичними за своєю суттю. Крім того, ви розглядаєте будь-яку мову, яку ви не знаєте, так, ніби ви знаєте споріднену мову.'
					}),
					value: 1
				},
				{
					feature: FactoryLogic.feature.create({
						id: 'memonek-feature-3-3',
						name: 'Незворушний',
						description: 'Ваш впорядкований розум не може бути захоплений зненацька. Ви не можете бути здивовані.'
					}),
					value: 1
				},
				{
					feature: FactoryLogic.feature.create({
						id: 'memonek-feature-3-4',
						name: 'Корисна емоція',
						description: 'Веллопарата — світова хвороба — може заважати, але ви знаєте, як перетворити свій біль на те, що відчувають ваші вороги. На початку будь-якого бою ви отримуєте 1 сплеск.'
					}),
					value: 1
				},
				{
					feature: FactoryLogic.feature.createAbility({
						ability: FactoryLogic.createAbility({
							id: 'memonek-feature-3-5',
							name: 'Хранитель Порядку',
							description: 'Ваш зв’язок із Аксіомом, планом Найвищого Закону, дозволяє вам керувати хаосом навколо вас.',
							type: FactoryLogic.type.createTrigger('Ви або істота поруч із вами робить кидок сили', { free: true }),
							sections: [
								FactoryLogic.createAbilitySectionText('Ви можете зняти перевагу або шкоду з кидка, перетворити подвійну перевагу на перевагу або подвійну шкоду на шкоду. Ви можете використовувати цю перевагу лише раз на раунд.')
							]
						})
					}),
					value: 2
				},
				{
					feature: FactoryLogic.feature.createSpeed({
						id: 'memonek-feature-3-6',
						name: 'Блискавична спритність',
						description: 'Ви можете змусити своє тіло рухатися з неймовірною швидкістю. Ваша Швидкість становить 7.',
						speed: 7
					}),
					value: 2
				},
				{
					feature: FactoryLogic.feature.createConditionImmunity({
						id: 'memonek-feature-3-7',
						name: 'Безперервність',
						description: 'Ваш зв’язок із Аксіомом дозволяє вам регулювати свій рух.',
						conditions: [ConditionType.Slowed]
					}),
					value: 2
				}
			],
			count: 'ancestry'
		})
	],
	ancestryPoints: 4,
	culture: FactoryLogic.createCulture('Мемонек', 'Кочовий, комунальний, академічний.', CultureType.Ancestral, EnvironmentData.nomadic, OrganizationData.communal, UpbringingData.academic, 'Аксіоматичний (Axiomatic)')
};
