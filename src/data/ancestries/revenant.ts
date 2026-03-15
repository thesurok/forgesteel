import { AbilityKeyword } from '@/enums/ability-keyword';
import { Ancestry } from '@/models/ancestry';
import { Characteristic } from '@/enums/characteristic';
import { ConditionType } from '@/enums/condition-type';
import { DamageModifierType } from '@/enums/damage-modifier-type';
import { DamageType } from '@/enums/damage-type';
import { FactoryLogic } from '@/logic/factory-logic';

export const revenant: Ancestry = {
	id: 'ancestry-revenant',
	name: 'Ревенант',
	description: 'Мертві ходять серед нас. Деякі з них раді цьому більше, ніж інші. На відміну від некромантичних ритуалів, які створюють упирів, привидів і зомбі, ревенанти піднімаються з могили через поєднання несправедливої смерті та палкого бажання помсти. Істоти, які підтримуються чистою волею, не потребують їжі, води чи повітря — і, на відміну від своїх зомбіфікованих родичів, вони зберігають усі свої спогади та особистість із життя.',
	features: [
		FactoryLogic.feature.createAncestry({
			id: 'revenant-feature-1',
			name: 'Минуле Життя',
			description: 'Виберіть походження, яке ви мали до смерті. Ваш розмір відповідає розміру цього походження, а ваша швидкість становить 5. Якщо ви не виберете одну з рис Попереднього Життя (див. нижче), ви не отримаєте жодних інших рис походження від вашого початкового походження.'
		}),
		FactoryLogic.feature.createDamageModifier({
			id: 'revenant-feature-2',
			modifiers: [
				FactoryLogic.damageModifier.createPerLevel({ damageType: DamageType.Cold, modifierType: DamageModifierType.Immunity, value: 1 }),
				FactoryLogic.damageModifier.createPerLevel({ damageType: DamageType.Corruption, modifierType: DamageModifierType.Immunity, value: 1 }),
				FactoryLogic.damageModifier.createPerLevel({ damageType: DamageType.Lightning, modifierType: DamageModifierType.Immunity, value: 1 }),
				FactoryLogic.damageModifier.createPerLevel({ damageType: DamageType.Poison, modifierType: DamageModifierType.Immunity, value: 1 }),
				FactoryLogic.damageModifier.create({ damageType: DamageType.Fire, modifierType: DamageModifierType.Weakness, value: 5 })
			]
		}),
		FactoryLogic.feature.create({
			id: 'revenant-feature-3',
			name: 'Міцний, але Зівʼялий',
			description: 'Коли ваша Витривалість досягає негативного значення вашого значення захеканості, ви стаєте інертними замість того, щоб померти. Ви падаєте долілиць і не можете встати. Ви продовжуєте спостерігати за своїм оточенням, але не можете говорити, виконувати основні дії, маневри, рухи чи тригерні дії. Поки ви інертні таким чином, якщо ви отримуєте будь-яку шкоду від вогню, ваше тіло знищується, і ви помираєте. В іншому випадку через 12 годин ви відновлюєте Витривалість, рівну вашому значенню відновлення.'
		}),
		FactoryLogic.feature.createChoice({
			id: 'revenant-feature-4',
			name: 'Риси Ревенанта',
			options: [
				{
					feature: FactoryLogic.feature.createAncestryFeature({
						id: 'revenant-feature-4-1',
						current: false,
						former: true,
						customID: '',
						value: 1
					}),
					value: 1
				},
				{
					feature: FactoryLogic.feature.create({
						id: 'revenant-feature-4-2',
						name: 'Вплив Нежиті',
						description: 'Ваші надприродні дари дозволяють вам впливати на інших неживих. Ви отримуєте перевагу на випробування Розуму, Інтуїції та Присутності, зроблені для взаємодії з істотами нежиті.'
					}),
					value: 1
				},
				{
					feature: FactoryLogic.feature.createConditionImmunity({
						id: 'revenant-feature-4-3',
						name: 'Безкровний',
						description: 'Для вас відкрита рана не відрізняється від подряпини.',
						conditions: [ ConditionType.Bleeding ]
					}),
					value: 2
				},
				{
					feature: FactoryLogic.feature.createAncestryFeature({
						id: 'revenant-feature-4-4',
						current: false,
						former: true,
						customID: '',
						value: 2
					}),
					value: 2
				},
				{
					feature: FactoryLogic.feature.createMultiple({
						id: 'revenant-feature-4-5',
						name: 'Мітка Помсти',
						features: [
							FactoryLogic.feature.create({
								id: 'revenant-feature-4-5-1',
								name: 'Мітка Помсти',
								description: `
Як маневр, ви розміщуєте магічний сигіл на істоті в межах 10 клітинок від вас. Коли ви розміщуєте сигіл, ви можете вирішити, де він зʼявиться на тілі істоти, і чи буде сигіл видимим лише для вас або для всіх істот.

Ви завжди знаєте напрямок до точного місця розташування істоти, яка несе один із ваших сигілів і знаходиться на тому ж світі. Ви можете мати активну кількість сигілів, рівну вашому рівню, і можете видалити сигіл з істоти за бажанням (дія не потрібна). Якщо у вас уже є максимальна кількість активованих сигілів і ви розміщуєте новий, ваш найстаріший сигіл зникає без інших наслідків.`
							}),
							FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'revenant-feature-4-5-2',
									name: 'Детонація Сигілу',
									description: 'Магічний сигіл, який ви розмістили на істоті, вибухає енергією.',
									type: FactoryLogic.type.createMain(),
									keywords: [ AbilityKeyword.Magic, AbilityKeyword.Ranged, AbilityKeyword.Strike ],
									distance: [ FactoryLogic.distance.createRanged(10) ],
									target: 'Одна істота, що несе ваш сигіл',
									cost: 'signature',
									sections: [
										FactoryLogic.createAbilitySectionRoll(
											FactoryLogic.createPowerRoll({
												characteristic: [ Characteristic.Reason, Characteristic.Intuition, Characteristic.Presence ],
												tier1: '3 + Р, І або П ушкодження; зсув 1',
												tier2: '3 + Р, І або П ушкодження; зсув 2',
												tier3: '8 + Р, І або П ушкодження; зсув 3'
											})
										),
										FactoryLogic.createAbilitySectionText('Сигіл зникає з істоти.')
									]
								})
							})
						]
					}),
					value: 2
				}
			],
			count: 'ancestry'
		})
	],
	ancestryPoints: 2
};
