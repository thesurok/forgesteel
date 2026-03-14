import { EnvironmentData, OrganizationData, UpbringingData } from '@/data/culture-data';
import { AbilityKeyword } from '@/enums/ability-keyword';
import { Ancestry } from '@/models/ancestry';
import { ConditionType } from '@/enums/condition-type';
import { CultureType } from '@/enums/culture-type';
import { DamageModifierType } from '@/enums/damage-modifier-type';
import { DamageType } from '@/enums/damage-type';
import { FactoryLogic } from '@/logic/factory-logic';
import { FeatureField } from '@/enums/feature-field';

export const polder: Ancestry = {
	id: 'ancestry-polder',
	name: 'Полдер',
	description: 'Після людей полдери є найчисленнішою та найрізноманітнішою народністю в Ордені. Вони не є людьми, але живуть серед людей і поділяють їхніх богів і культуру. Майже кожна людська культура в Ордені має святого полдера або людського святого, якого шанують полдери.',
	features: [
		FactoryLogic.feature.createAbility({
			ability: FactoryLogic.createAbility({
				id: 'polder-feature-1',
				name: 'Злиття з тінню',
				description: 'Ви стаєте справжньою тінню.',
				type: FactoryLogic.type.createManeuver(),
				keywords: [AbilityKeyword.Magic],
				distance: [FactoryLogic.distance.createSelf()],
				target: 'Себе',
				sections: [
					FactoryLogic.createAbilitySectionText(`
Ви сплющуєтеся в тінь на стіні або підлозі, до якої торкаєтеся, і стаєте прихованими від будь-якої істоти, від якої у вас є укриття або прихованість, або яка вас не спостерігає. У тіньовій формі ви маєте повну обізнаність про своє оточення, а удари по вас і випробування, зроблені для пошуку вас, отримують шкоду. Ви не можете рухатися або бути примусово переміщеними, і ви не можете виконувати основні дії або маневри, крім виходу з цієї форми або керування створіннями під вашим контролем, наприклад, тими, яких ви викликаєте за допомогою здібності. Будь-яка здібність або ефект, який впливає на більше ніж 1 клітинку, впливає на вас у цій формі лише в тому випадку, якщо він явно впливає на поверхню, до якої ви сплющені. Ви можете вийти з цієї форми як маневр.

Якщо поверхня, до якої ви сплющені, знищується, ця здібність закінчується, і ви отримуєте 1d6 шкоди, яку неможливо зменшити жодним чином.`)
				]
			})
		}),
		FactoryLogic.feature.createSize({
			id: 'polder-feature-2',
			name: 'Маленький!',
			description: 'Ваш невеликий зріст дозволяє вам легко уникати — або потрапляти в — неприємності.',
			sizeValue: 1,
			sizeMod: 'M'
		}),
		FactoryLogic.feature.createChoice({
			id: 'polder-feature-3',
			name: 'Риси полдера',
			options: [
				{
					feature: FactoryLogic.feature.createDamageModifier({
						id: 'polder-feature-3-1',
						name: 'Імунітет до скверни',
						description: 'Ваша вроджена тіньова магія надає вам стійкість до неприродного. Ви маєте імунітет до скверни, рівний вашому рівню + 2.',
						modifiers: [
							FactoryLogic.damageModifier.createValuePlusPerLevel({ damageType: DamageType.Corruption, modifierType: DamageModifierType.Immunity, value: 2, perLevel: 1 })
						]
					}),
					value: 1
				},
				{
					feature: FactoryLogic.feature.createBonus({
						id: 'polder-feature-3-2',
						name: 'Граціозний відступ',
						description: 'Ваш невеликий розмір полегшує вам вислизання з сутички.',
						field: FeatureField.Disengage,
						value: 1
					}),
					value: 1
				},
				{
					feature: FactoryLogic.feature.create({
						id: 'polder-feature-3-3',
						name: 'Полдерський дух',
						description: 'Уникнення уваги інших дає вам свободу руху. На початку кожного вашого ходу під час бою, якщо жоден ворог не має лінії впливу на вас або якщо ви приховані від будь-якого ворога з лінією впливу на вас, ви отримуєте бонус +3 до швидкості до кінця вашого ходу.'
					}),
					value: 1
				},
				{
					feature: FactoryLogic.feature.createAbility({
						ability: FactoryLogic.createAbility({
							id: 'polder-feature-3-4',
							name: 'Реактивне перекочування',
							description: 'Залишаючись легким на ногах, ви швидко повертаєтеся на позицію.',
							type: FactoryLogic.type.createTrigger('Коли вас примусово переміщують', { free: true }),
							sections: [
								FactoryLogic.createAbilitySectionText('Ви зміщуєтеся на 1 клітинку після завершення примусового переміщення.')
							]
						})
					}),
					value: 1
				},
				{
					feature: FactoryLogic.feature.createConditionImmunity({
						id: 'polder-feature-3-5',
						name: 'Безстрашний',
						description: 'Ви знаєте лише сміливість.',
						conditions: [ConditionType.Frightened]
					}),
					value: 2
				},
				{
					feature: FactoryLogic.feature.create({
						id: 'polder-feature-3-6',
						name: 'Гнучкий крок',
						description: 'Легкий крок добре служить вам, коли швидкість має вирішальне значення. Ви ігноруєте ефекти складної місцевості та можете рухатися на повній швидкості, перебуваючи в прихованості.'
					}),
					value: 2
				}
			],
			count: 'ancestry'
		})
	],
	ancestryPoints: 4,
	culture: FactoryLogic.createCulture('Полдер', 'Міський, комунальний, творчий.', CultureType.Ancestral, EnvironmentData.urban, OrganizationData.communal, UpbringingData.creative, 'Хурсиріанський')
};
