import { EnvironmentData, OrganizationData, UpbringingData } from '@/data/culture-data';
import { AbilityDistanceType } from '@/enums/ability-distance-type';
import { AbilityKeyword } from '@/enums/ability-keyword';
import { Ancestry } from '@/models/ancestry';
import { Characteristic } from '@/enums/characteristic';
import { CultureType } from '@/enums/culture-type';
import { DamageModifierType } from '@/enums/damage-modifier-type';
import { DamageType } from '@/enums/damage-type';
import { FactoryLogic } from '@/logic/factory-logic';

export const dragonKnight: Ancestry = {
	id: 'ancestry-dragon-knight',
	name: 'Драконячий лицар',
	description: 'Ритуал Дракогенезису, що дарує силу створювати покоління драконячих лицарів — також відомих як драконяни або wyrmwights — є таємничим і надзвичайно складним навіть для досвідченого чарівника. Наявність невеликих популяцій драконян у Khemhara, Higara та Khoursir свідчить про це. Нащадки перших поколінь, створених тисячоліття тому могутніми чаклунами, ніколи не були численними. Зазвичай кладка дає лише одне яйце. Уже через кілька поколінь у драконян починають зʼявлятися нові адаптації, такі як пірʼя або оборчасті гребені.',
	features: [
		FactoryLogic.feature.createChoice({
			id: 'dragon-knight-feature-1',
			name: 'Драконячий панцир',
			description: 'Загартовані луски дають вам імунітет до шкоди рівний вашому рівню проти одного з наступних типів: кислота, холод, скверна, вогонь, блискавка або отрута. Ви можете змінити тип імунітету після відпочинку.',
			options: [
				{
					feature: FactoryLogic.feature.createDamageModifier({
						id: 'dragon-knight-feature-1-1',
						modifiers: [
							FactoryLogic.damageModifier.createPerLevel({ damageType: DamageType.Acid, modifierType: DamageModifierType.Immunity, value: 1 })
						]
					}),
					value: 1
				},
				{
					feature: FactoryLogic.feature.createDamageModifier({
						id: 'dragon-knight-feature-1-2',
						modifiers: [
							FactoryLogic.damageModifier.createPerLevel({ damageType: DamageType.Cold, modifierType: DamageModifierType.Immunity, value: 1 })
						]
					}),
					value: 1
				},
				{
					feature: FactoryLogic.feature.createDamageModifier({
						id: 'dragon-knight-feature-1-3',
						modifiers: [
							FactoryLogic.damageModifier.createPerLevel({ damageType: DamageType.Corruption, modifierType: DamageModifierType.Immunity, value: 1 })
						]
					}),
					value: 1
				},
				{
					feature: FactoryLogic.feature.createDamageModifier({
						id: 'dragon-knight-feature-1-4',
						modifiers: [
							FactoryLogic.damageModifier.createPerLevel({ damageType: DamageType.Fire, modifierType: DamageModifierType.Immunity, value: 1 })
						]
					}),
					value: 1
				},
				{
					feature: FactoryLogic.feature.createDamageModifier({
						id: 'dragon-knight-feature-1-5',
						modifiers: [
							FactoryLogic.damageModifier.createPerLevel({ damageType: DamageType.Lightning, modifierType: DamageModifierType.Immunity, value: 1 })
						]
					}),
					value: 1
				},
				{
					feature: FactoryLogic.feature.createDamageModifier({
						id: 'dragon-knight-feature-1-6',
						modifiers: [
							FactoryLogic.damageModifier.createPerLevel({ damageType: DamageType.Poison, modifierType: DamageModifierType.Immunity, value: 1 })
						]
					}),
					value: 1
				}
			]
		}),
		FactoryLogic.feature.createChoice({
			id: 'dragon-knight-feature-2',
			name: 'Риси драконячого лицаря',
			options: [
				{
					feature: FactoryLogic.feature.createAbility({
						ability: FactoryLogic.createAbility({
							id: 'dragon-knight-feature-2-1',
							name: 'Драконячий щит',
							description: 'Ви можете розмахнути крилами й захиститися від удару.',
							type: FactoryLogic.type.createTrigger('You, or a creature adjacent to you, takes damage from a strike'),
							distance: [FactoryLogic.distance.createSelf()],
							target: 'Себе',
							sections: [
								FactoryLogic.createAbilitySectionText('Ви зменшуєте шкоду від удару на величину, рівну вашому рівню.')
							]
						})
					}),
					value: 1
				},
				{
					feature: FactoryLogic.feature.createDamageModifier({
						id: 'dragon-knight-feature-2-2',
						name: 'Призматичні луски (кислота)',
						modifiers: [
							FactoryLogic.damageModifier.createPerLevel({ damageType: DamageType.Acid, modifierType: DamageModifierType.Immunity, value: 1 })
						]
					}),
					value: 1
				},
				{
					feature: FactoryLogic.feature.createDamageModifier({
						id: 'dragon-knight-feature-2-3',
						name: 'Призматичні луски (холод)',
						modifiers: [
							FactoryLogic.damageModifier.createPerLevel({ damageType: DamageType.Cold, modifierType: DamageModifierType.Immunity, value: 1 })
						]
					}),
					value: 1
				},
				{
					feature: FactoryLogic.feature.createDamageModifier({
						id: 'dragon-knight-feature-2-4',
						name: 'Призматичні луски (скверна)',
						modifiers: [
							FactoryLogic.damageModifier.createPerLevel({ damageType: DamageType.Corruption, modifierType: DamageModifierType.Immunity, value: 1 })
						]
					}),
					value: 1
				},
				{
					feature: FactoryLogic.feature.createDamageModifier({
						id: 'dragon-knight-feature-2-5',
						name: 'Призматичні луски (вогонь)',
						modifiers: [
							FactoryLogic.damageModifier.createPerLevel({ damageType: DamageType.Fire, modifierType: DamageModifierType.Immunity, value: 1 })
						]
					}),
					value: 1
				},
				{
					feature: FactoryLogic.feature.createDamageModifier({
						id: 'dragon-knight-feature-2-6',
						name: 'Призматичні луски (блискавка)',
						modifiers: [
							FactoryLogic.damageModifier.createPerLevel({ damageType: DamageType.Lightning, modifierType: DamageModifierType.Immunity, value: 1 })
						]
					}),
					value: 1
				},
				{
					feature: FactoryLogic.feature.createDamageModifier({
						id: 'dragon-knight-feature-2-7',
						name: 'Призматичні луски (отрута)',
						modifiers: [
							FactoryLogic.damageModifier.createPerLevel({ damageType: DamageType.Poison, modifierType: DamageModifierType.Immunity, value: 1 })
						]
					}),
					value: 1
				},
				{
					feature: FactoryLogic.feature.create({
						id: 'dragon-knight-feature-2-8',
						name: 'Присяга',
						description: `
Як маневр, ви можете виголосити цю присягу. До початку вашого наступного ходу, коли ви робите рят. кидок, він вважається успішним при результаті 4 або більше.

> Хай навіть сонце застигне в небі
> Хай навіть ніч триватиме тисячу років
> Я стоятиму вічно
> Я не поступлюся
> Ті, хто страждає і прагне справедливості
> Я — ваш меч і щит
> Я не відступлю ні кроку
> Я не промовлю брехні
> Я стану проти всіх тиранів
> Поки не загине останній лиходій.`
					}),
					value: 1
				},
				{
					feature: FactoryLogic.feature.createAbility({
						ability: FactoryLogic.createAbility({
							id: 'dragon-knight-feature-2-9',
							name: 'Драконяча гордість',
							description: 'Ви видаєте могутній рик, щоб похитнути духи ворогів.',
							type: FactoryLogic.type.createMain(),
							keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
							distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 1 })],
							target: 'Кожен ворог у зоні',
							cost: 'signature',
							sections: [
								FactoryLogic.createAbilitySectionRoll(
									FactoryLogic.createPowerRoll({
										characteristic: [Characteristic.Might, Characteristic.Presence],
										tier1: '2 шкоди',
										tier2: '5 шкоди; відштовхнути 1',
										tier3: '7 шкоди; відштовхнути 2'
									})
								)
							]
						})
					}),
					value: 2
				},
				{
					feature: FactoryLogic.feature.createAbility({
						ability: FactoryLogic.createAbility({
							id: 'dragon-knight-feature-2-10',
							name: 'Дихання дракона',
							description: 'Люте видихання енергії накриває ваших ворогів.',
							type: FactoryLogic.type.createMain(),
							keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
							distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Cube, value: 3, within: 1 })],
							target: 'Кожен ворог у зоні',
							cost: 'signature',
							sections: [
								FactoryLogic.createAbilitySectionRoll(
									FactoryLogic.createPowerRoll({
										characteristic: [Characteristic.Might, Characteristic.Presence],
										tier1: '2 шкоди',
										tier2: '4 шкоди',
										tier3: '6 шкоди'
									})
								),
								FactoryLogic.createAbilitySectionText('Ви обираєте тип шкоди цієї здібності: кислота, холод, скверна, вогонь, блискавка або отрута.')
							]
						})
					}),
					value: 2
				},
				{
					feature: FactoryLogic.feature.createMultiple({
						id: 'dragon-knight-feature-2-11',
						name: 'Крила',
						features: [
							FactoryLogic.feature.create({
								id: 'dragon-knight-feature-2-11a',
								name: 'Крила',
								description: 'Ви маєте крила, достатньо потужні, щоб підняти вас у повітря. Коли ви летите, ви можете залишатися в повітрі протягом числа раундів, рівного значенню вашої характеристики С (мінімум 1 раунд), перш ніж ви впасти. Коли ви летите на 1-му, 2-му або 3-му рівні, у вас є слабкість до шкоди 5.'
							}),
							FactoryLogic.feature.createMovementMode({
								id: 'dragon-knight-feature-2-11b',
								mode: 'Fly'
							})
						]
					}),
					value: 2
				}
			],
			count: 'ancestry'
		})
	],
	ancestryPoints: 3,
	culture: FactoryLogic.createCulture('Драконячий лицар', 'Відлюдний, бюрократичний, військовий.', CultureType.Ancestral, EnvironmentData.secluded, OrganizationData.bureaucratic, UpbringingData.martial, 'Вастаріакс (Vastariax)')
};
