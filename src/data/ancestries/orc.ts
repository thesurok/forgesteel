import { EnvironmentData, OrganizationData, UpbringingData } from '@/data/culture-data';
import { Ancestry } from '@/models/ancestry';
import { ConditionType } from '@/enums/condition-type';
import { CultureType } from '@/enums/culture-type';
import { FactoryLogic } from '@/logic/factory-logic';
import { FeatureField } from '@/enums/feature-field';

export const orc: Ancestry = {
	id: 'ancestry-orc',
	name: 'Орк',
	description: 'Гнів, який неможливо приховати. Лють, яка веде їх у битві. Орки відомі у всьому світі як досконалі воїни — репутація, яку миролюбні орки вважають неприємною.',
	features: [
		FactoryLogic.feature.create({
			id: 'orc-feature-1',
			name: 'Невблаганний',
			description: 'Коли істота завдає вам шкоди, яка залишає вас вмираючим, ви можете зробити безкоштовний удар проти будь-якої істоти. Якщо істота зменшує свою Витривалість до 0 вашим ударом, ви можете витратити Відновлення.'
		}),
		FactoryLogic.feature.createChoice({
			id: 'orc-feature-2',
			name: 'Риси орка',
			options: [
				{
					feature: FactoryLogic.feature.create({
						id: 'orc-feature-2-1',
						name: 'Кров’яний порив',
						description: 'Магія, що тече у ваших жилах, змушує вас бігти швидше в розпалі бою. Перший раз у будь-якому раунді бою, коли ви отримуєте шкоду, ви отримуєте бонус +2 до швидкості до кінця раунду.'
					}),
					value: 1
				},
				{
					feature: FactoryLogic.feature.createBonus({
						id: 'orc-feature-2-2',
						name: 'Заземлений',
						description: 'Магія у вашій крові ускладнює іншим переміщення вас.',
						field: FeatureField.Stability,
						value: 1
					}),
					value: 1
				},
				{
					feature: FactoryLogic.feature.create({
						id: 'orc-feature-2-3',
						name: 'Пристрасний ремісник',
						description: 'Коли вас охоплює пристрасть до створення, ваша кров’яна магія дозволяє вам працювати довше й наполегливіше. Коли ви отримуєте свої початкові навички від вашої кар’єри, культури, класу чи іншого джерела, виберіть дві навички з групи навичок ремесла, незалежно від того, чи маєте ви ці навички. Коли ви робите кидок проєкту для ремісничого проєкту, який використовує ці навички, ви отримуєте бонус +2 до кидка.'
					}),
					value: 1
				},
				{
					feature: FactoryLogic.feature.create({
						id: 'orc-feature-2-4',
						name: 'Сяюче відновлення',
						description: 'Ваша кров’яна магія дозволяє вам відновлювати сили швидше за інших. Коли ви використовуєте маневр Затримати подих, ви можете витратити стільки Відновлень, скільки захочете.'
					}),
					value: 2
				},
				{
					feature: FactoryLogic.feature.createConditionImmunity({
						id: 'orc-feature-2-5',
						name: 'Безперервність',
						description: 'Ваша кров’яна магія забезпечує вас постійним припливом адреналіну.',
						conditions: [ConditionType.Slowed]
					}),
					value: 2
				}
			],
			count: 'ancestry'
		})
	],
	ancestryPoints: 3,
	culture: FactoryLogic.createCulture('Орк', 'Дика природа, комунальний, творчий.', CultureType.Ancestral, EnvironmentData.wilderness, OrganizationData.communal, UpbringingData.creative, 'Калліак (Kalliak)')
};
