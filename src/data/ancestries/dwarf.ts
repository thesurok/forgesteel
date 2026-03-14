import { EnvironmentData, OrganizationData, UpbringingData } from '@/data/culture-data';
import { Ancestry } from '@/models/ancestry';
import { ConditionType } from '@/enums/condition-type';
import { CultureType } from '@/enums/culture-type';
import { FactoryLogic } from '@/logic/factory-logic';
import { FeatureField } from '@/enums/feature-field';

export const dwarf: Ancestry = {
	id: 'ancestry-dwarf',
	name: 'Гном',
	description: 'Незважаючи на зріст, гноми володіють силою, що здається невідповідною їхньому розміру; їхнє тіло просякнуте каменем — силіко-органічний гібрид, що робить їх фізично щільнішими за інших гуманоїдів. У Ордені вони відомі як хитрі інженери та технологи завдяки знанням, успадкованим від їхніх старших родичів, давніх сталевих гномів, що давно вимерли.',
	features: [
		FactoryLogic.feature.create({
			id: 'dwarf-feature-1',
			name: 'Рунне різьблення',
			description: `
Ви можете вирізати руну на шкірі за 10 безперервних хвилин роботи; руна активується магією у вашому тілі. Вибрана руна визначає корисну властивість серед наведених нижче:

* **Виявлення**: Виберіть конкретний тип істоти (наприклад «гобліни» або «люди») або предмет (наприклад «коштовні камені» або «зілля»). Ваша руна тихо світиться, коли ви перебуваєте в радіусі 20 клітинок від будь-якої істоти або предмета цього типу, навіть якщо у вас немає лінії ефекту до істоти або предмета. Ви можете змінити тип істоти або предмета як маневр.
* **Світло**: Ваша шкіра випромінює світло на 10 клітинок. Ви можете увімкнути або вимкнути це як маневр.
* **Голос**: Як маневр, ви можете телепатично спілкуватися з охочою істотою, яку ви вже зустрічали і яка перебуває в межах 1 милі від вас. Ви повинні знати імʼя цієї істоти, і вона має говорити та розуміти мову, яку ви знаєте. Ви та істота можете відповідати одне одному так, ніби ведете усну розмову. Ви можете спілкуватися з іншою істотою, змінивши руну.

У вас може бути активною тільки одна руна одночасно; ви можете змінити або видалити руну за 10 безперервних хвилин роботи.`
		}),
		FactoryLogic.feature.createChoice({
			id: 'dwarf-feature-2',
			name: 'Риси гнома',
			options: [
				{
					feature: FactoryLogic.feature.createBonus({
						id: 'dwarf-feature-2-1',
						name: 'Укорінений',
						description: 'Ваше важке камʼяне тіло та звʼязок із землею ускладнюють іншим пересування вас.',
						field: FeatureField.Stability,
						value: 1
					}),
					value: 1
				},
				{
					feature: FactoryLogic.feature.create({
						id: 'dwarf-feature-2-2',
						name: 'Стійкість',
						description: 'Ваше тіло створене витримувати удари ворогів. Ваш показник С вважається на 1 вищим при опорі потужностям, і ви отримуєте перевагу на перевірках С, коли потрібно протистояти впливам середовища або рисам чи здібностям істоти.',
					}),
					value: 1
				},
				{
					feature: FactoryLogic.feature.create({
						id: 'dwarf-feature-2-3',
						name: 'Співець каменю',
						description: 'У вас є магічний звʼязок із землею. Коли ви проводите 1 безперервну годину співу, ви можете перекроїти будь-який необроблений звичайний камінь у межах 3 клітинок. Ви не можете знищити цей камінь, але можете перемістити кожну клітинку каменю будь-куди в межах 3 клітинок від вас, нагромадивши її вбік, щоб вирити яму, або побудувавши стіну.',
					}),
					value: 1
				},
				{
					feature: FactoryLogic.feature.createConditionImmunity({
						id: 'dwarf-feature-2-4',
						name: 'Надзвичайна витримка',
						description: 'Ваша міцна конституція перешкоджає втраті сили.',
						conditions: [ConditionType.Weakened]
					}),
					value: 2
				},
				{
					feature: FactoryLogic.feature.createBonus({
						id: 'dwarf-feature-2-5',
						name: 'Іскри на шкірі',
						description: 'Ваша камʼяна шкіра надає вам потужний захист.',
						field: FeatureField.Stamina,
						valuePerEchelon: 6
					}),
					value: 2
				}
			],
			count: 'ancestry'
		})
	],
	ancestryPoints: 3,
	culture: FactoryLogic.createCulture('Гном', 'Відлюдний, бюрократичний, творчий.', CultureType.Ancestral, EnvironmentData.secluded, OrganizationData.bureaucratic, UpbringingData.creative, 'Zaliac')
};
