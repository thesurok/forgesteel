import { EnvironmentData, OrganizationData, UpbringingData } from '@/data/culture-data';
import { AbilityKeyword } from '@/enums/ability-keyword';
import { Ancestry } from '@/models/ancestry';
import { Characteristic } from '@/enums/characteristic';
import { ConditionType } from '@/enums/condition-type';
import { CultureType } from '@/enums/culture-type';
import { DamageModifierType } from '@/enums/damage-modifier-type';
import { DamageType } from '@/enums/damage-type';
import { FactoryLogic } from '@/logic/factory-logic';

export const timeRaider: Ancestry = {
	id: 'ancestry-time-raider',
	name: 'Рейдер Часу',
	description: 'Початковий вид-слуга синліроїв — злих псіоніків із майже божественною силою — куранʼзої звільнили себе під час Першої Психічної Війни. За століття вони створили власну культуру та цивілізацію як кочівники часопростору. Екзонім "рейдери часу" їм дали мешканці нижніх світів, які, побачивши передові технології куранʼзоїв, вирішили, що ті з майбутнього.',
	features: [
		FactoryLogic.feature.createDamageModifier({
			id: 'time-raider-feature-1',
			name: 'Психічний Шрам',
			description: 'Ваш розум є потужним шаром захисту. Ви маєте психічний імунітет, рівний вашому рівню.',
			modifiers: [FactoryLogic.damageModifier.createPerLevel({ damageType: DamageType.Psychic, modifierType: DamageModifierType.Immunity, value: 1 })]
		}),
		FactoryLogic.feature.createChoice({
			id: 'time-raider-feature-2',
			name: 'Риси Рейдера Часу',
			options: [
				{
					feature: FactoryLogic.feature.createAbility({
						ability: FactoryLogic.createAbility({
							id: 'time-raider-feature-2-1',
							name: 'Зір Поза Межами',
							description: 'Ви налаштовуєте свій зір, щоб бачити крізь звичайні перешкоди.',
							type: FactoryLogic.type.createManeuver(),
							distance: [FactoryLogic.distance.createSelf()],
							target: 'Себе',
							sections: [
								FactoryLogic.createAbilitySectionText('Ви можете бачити крізь звичайні перешкоди товщиною 1 клітинка або менше. Поки ваш зір налаштований таким чином, ви не бачите область у межах 1 клітинки від вас і не маєте лінії ефекту до будь-якої істоти чи обʼєкта в цій області. Ви можете відновити свій звичайний зір як маневр.')
							]
						})
					}),
					value: 1
				},
				{
					feature: FactoryLogic.feature.createMultiple({
						id: 'time-raider-feature-2-2',
						name: 'Передбачення',
						description: 'Ваші відчуття виходять за межі звичайного затемнення та завіси майбутнього.',
						features: [
							FactoryLogic.feature.create({
								id: 'time-raider-feature-2-2a',
								name: 'Передбачення',
								description: 'Ви автоматично знаєте місцезнаходження будь-якої істоти з маскуванням, яка не прихована від вас у межах 20, і ви скасовуєте звичайний штраф на удари проти таких істот.'
							}),
							FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'time-raider-feature-2-2b',
									name: 'Передбачення',
									description: '',
									type: FactoryLogic.type.createTrigger('Вас атакують'),
									distance: [FactoryLogic.distance.createSelf()],
									target: 'Себе',
									sections: [
										FactoryLogic.createAbilitySectionText('Ви накладаєте штраф на кидок сили.')
									]
								})
							})
						]
					}),
					value: 1
				},
				{
					feature: FactoryLogic.feature.create({
						id: 'time-raider-feature-2-3',
						name: 'Атлетика Чотирьох Рук',
						description: 'Ваша унікальна фізіологія покращує ваш рух. Ви отримуєте перевагу на випробування, які використовують навички Лазіння, Гімнастики або Плавання, коли ви можете використовувати всі свої руки в спробі.'
					}),
					value: 1
				},
				{
					feature: FactoryLogic.feature.create({
						id: 'time-raider-feature-2-4',
						name: 'Бойові Мистецтва Чотирьох Рук',
						description: 'Ваші численні руки дозволяють вам виконувати кілька завдань одночасно. Коли ви використовуєте маневр Захоплення або Відштовхування проти сусідньої істоти, ви можете націлити ще одну сусідню істоту, використовуючи той самий кидок сили для обох цілей. Крім того, ви можете одночасно захопити до двох істот.'
					}),
					value: 2
				},
				{
					feature: FactoryLogic.feature.createChoice({
						id: 'time-raider-feature-2-5',
						name: 'Псіонічний Дар',
						count: 1,
						options: [
							{
								feature: FactoryLogic.feature.createAbility({
									ability: FactoryLogic.createAbility({
										id: 'time-raider-feature-2-5-1',
										name: 'Удар Конкусії',
										description: 'Ви обрушуєте невидиму силу на ціль.',
										type: FactoryLogic.type.createMain(),
										cost: 'signature',
										keywords: [AbilityKeyword.Psionic, AbilityKeyword.Ranged, AbilityKeyword.Strike],
										distance: [FactoryLogic.distance.createRanged(10)],
										target: 'Одна істота або обʼєкт',
										sections: [
											FactoryLogic.createAbilitySectionRoll(
												FactoryLogic.createPowerRoll({
													characteristic: [Characteristic.Reason, Characteristic.Intuition, Characteristic.Presence],
													tier1: '2 + Р, І або П шкоди',
													tier2: '5 + Р, І або П шкоди; зсув 1',
													tier3: '7 + Р, І або П шкоди; зсув 2; С < [сильний] повалений'
												})
											)
										]
									})
								}),
								value: 1
							},
							{
								feature: FactoryLogic.feature.createAbility({
									ability: FactoryLogic.createAbility({
										id: 'time-raider-feature-2-5-2',
										name: 'Псіонічний Промінь',
										description: 'Ви випускаєте фіолетовий промінь психічної сили, який охоплює вашу ціль.',
										type: FactoryLogic.type.createMain(),
										keywords: [AbilityKeyword.Psionic, AbilityKeyword.Ranged, AbilityKeyword.Strike],
										distance: [FactoryLogic.distance.createRanged(10)],
										target: 'Одна істота або обʼєкт',
										cost: 'signature',
										sections: [
											FactoryLogic.createAbilitySectionRoll(
												FactoryLogic.createPowerRoll({
													characteristic: [Characteristic.Reason, Characteristic.Intuition, Characteristic.Presence],
													tier1: '2 + Р, І або П психічної шкоди; зсув 1',
													tier2: '5 + Р, І або П психічної шкоди; зсув 2',
													tier3: '7 + Р, І або П психічної шкоди; зсув 3'
												})
											)
										]
									})
								}),
								value: 1
							},
							{
								feature: FactoryLogic.feature.createAbility({
									ability: FactoryLogic.createAbility({
										id: 'time-raider-feature-2-5-3',
										name: 'Мала Прискореність',
										description: 'Ви наповнюєте себе або союзника сплеском швидкості.',
										type: FactoryLogic.type.createManeuver(),
										keywords: [AbilityKeyword.Psionic, AbilityKeyword.Melee],
										distance: [
											FactoryLogic.distance.createSelf(),
											FactoryLogic.distance.createMelee()
										],
										target: 'На себе або одного союзника',
										cost: 'signature',
										sections: [
											FactoryLogic.createAbilitySectionText('Ціль отримує бонус до швидкості, рівний вашому значенню Розуму, Інтуїції або Присутності (на ваш вибір) до початку вашого наступного ходу.')
										]
									})
								}),
								value: 1
							}
						]
					}),
					value: 2
				},
				{
					feature: FactoryLogic.feature.createConditionImmunity({
						id: 'time-raider-feature-2-6',
						name: 'Незламний Розум',
						description: 'Ваш розум дозволяє вам зберігати концентрацію в будь-якій ситуації.',
						conditions: [ConditionType.Dazed]
					}),
					value: 2
				}
			],
			count: 'ancestry'
		})
	],
	ancestryPoints: 3,
	culture: FactoryLogic.createCulture('Рейдер Часу', 'Кочовий, комунальний, бойовий.', CultureType.Ancestral, EnvironmentData.nomadic, OrganizationData.communal, UpbringingData.martial, 'Волл')
};
