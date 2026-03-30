import { AbilityDistanceType } from '@/enums/ability-distance-type';
import { AbilityKeyword } from '@/enums/ability-keyword';
import { Characteristic } from '@/enums/characteristic';
import { DamageModifierType } from '@/enums/damage-modifier-type';
import { DamageType } from '@/enums/damage-type';
import { FactoryLogic } from '@/logic/factory-logic';
import { SkillList } from '@/enums/skill-list';
import { SubClass } from '@/models/subclass';

export const cryokinetic: SubClass = {
	id: 'null-sub-2',
	name: 'Кріокінетик',
	description: 'Ви можете черпати абсолютний холод — найсутнішу енергію безлічі маніфолдів — і проявляти її ефекти у власному тілі.',
	featuresByLevel: [
		{
			level: 1,
			features: [
				FactoryLogic.feature.createSkillChoice({
					id: 'null-sub-2-1-1',
					listOptions: [SkillList.Crafting]
				}),
				FactoryLogic.feature.createMultiple({
					id: 'null-sub-2-1-2',
					name: 'Майстерність Кріокінетики',
					features: [
						FactoryLogic.feature.create({
							id: 'null-sub-2-1-2a',
							name: 'Майстерність Кріокінетики',
							description: `
Як зростає ваша дисципліна, посилюється псіонічна сила, яка пронизує вас, і ви отримуєте переваги за таблицею «Майстерність Кріокінетики». Переваги сумуються, якщо не зазначено, що покращена перевага замінює менш значиму.

| Дисципліна     | Перевага                                                                                                                                                                                        							 |
|:---------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 2              | Коли ви використовуєте маневр «Відштовхування», ви можете націлити ще одну істоту. Додатково, коли ви завдаєте нетипізованої шкоди псіонічною здібністю, ви можете замінити її на холодну шкоду. 						 |
| 4              | Першого разу за хід, коли ви схопите істоту або коли ворог переміститься на 1 або більше клітин в області дії вашої здібності «Нульове поле», ви отримуєте 1 сплеск.                                  					 |
| 6              | Ви отримуєте перевагу (Edge) на маневри «Схоплення» та «Відштовхування».                                                                                                                           						 |
| 8 (4th level)  | Першого разу за хід, коли ви схопите істоту або коли ворог переміститься на 1 або більше клітин в області дії вашої здібності «Нульове поле», ви отримуєте 2 сплески.                                  					 |
| 10 (7th level) | Ви маєте подвійну перевагу (Double Edge) на маневри «Схоплення» та «Відштовхування».                                                                                                              						 |
| 12 (10th level)| Коли ви примусово переміщуєте ціль, відстань примусового переміщення отримує бонус, рівний значенню вашої Інтуїції. Додатково, щоразу коли ви використовуєте героїчну здібність, ви отримуєте 10 тимчасової Витривалості. |
`
						}),
						FactoryLogic.feature.createPackageContent({
							id: 'null-sub-2-1-2b',
							name: 'Майстерність Кріокінетики',
							description: 'Коли ви використовуєте вашу здібність «Інерційний щит», ви можете потім використати маневр «Схоплення» як безкоштовну тригерну дію.',
							tag: 'inertial-shield'
						})
					]
				})
			]
		},
		{
			level: 2,
			features: [
				FactoryLogic.feature.create({
					id: 'null-sub-2-2-1',
					name: 'Ентропійна адаптивність',
					description: 'Ви ігноруєте складну місцевість, повʼязану з холодом і льодом, і можете автоматично лазити з повною швидкістю під час руху.'
				}),
				FactoryLogic.feature.createDamageModifier({
					id: 'null-sub-2-2-1b',
					modifiers: [
						FactoryLogic.damageModifier.createCharacteristic({ damageType: DamageType.Cold, modifierType: DamageModifierType.Immunity, characteristics: [Characteristic.Intuition], multiplier: 2 })
					]
				}),
				FactoryLogic.feature.createChoice({
					id: 'null-sub-2-2-2',
					name: 'Здібність традиції 2-го рівня',
					options: [
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'null-sub-2-2-2a',
									name: 'Ентропійне поле',
									description: 'Ви різко підвищуєте локальну ентропію.',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Area, AbilityKeyword.Psionic, AbilityKeyword.Weapon],
									distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Cube, value: 3, within: 1 })],
									target: 'Кожен ворог у зоні',
									cost: 5,
									sections: [
										FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
											characteristic: [Characteristic.Agility],
											tier1: '6 холодної шкоди; Л < [слабкий], сповільнюється (рят. кидок закінчує)',
											tier2: '9 холодної шкоди; Л < [середній], сповільнюється (рят. кидок закінчує)',
											tier3: '13 холодної шкоди; Л < [сильний], сповільнюється (рят. кидок закінчує)'
										}))
									]
								})
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'null-sub-2-2-2b',
									name: 'Поглинач тепла',
									description: 'Ви поглинаєте навколишнє тепло, вкриваючи землю інеєм та спричиняючи снігопад.',
									type: FactoryLogic.type.createManeuver(),
									keywords: [AbilityKeyword.Psionic],
									distance: [FactoryLogic.distance.createSelf()],
									target: 'Себе',
									cost: 5,
									sections: [
										FactoryLogic.createAbilitySectionText('До початку вашого наступного ходу розмір вашої здібності «Нульове поле» збільшується на 1, і ви та будь-який союзник отримують прикриття, перебуваючи в області. Наприкінці цього ходу кожен ворог в області отримує холодну шкоду, рівну вашому показнику Інтуїції.')
									]
								})
							}),
							value: 1
						}
					]
				})
			]
		},
		{
			level: 3,
			features: []
		},
		{
			level: 4,
			features: []
		},
		{
			level: 5,
			features: [
				FactoryLogic.feature.create({
					id: 'null-sub-2-5-1',
					name: 'Холодна готовність',
					description: 'Ви загартовуєте себе до неминучої небезпеки, черпаючи холодну енергію свого тіла. На початку будь-якої сутички ви отримуєте число сплесків, рівне вашим Перемогам.'
				})
			]
		},
		{
			level: 6,
			features: [
				FactoryLogic.feature.createChoice({
					id: 'null-sub-2-6-1',
					name: 'Здібність традиції 6-го рівня',
					options: [
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'null-sub-2-6-1a',
									name: 'Крижані стовпи',
									description: 'Стовпи льоду вириваються з ґрунту й підкидають ваших ворогів у повітря.',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Psionic],
									distance: [FactoryLogic.distance.createRanged(10)],
									target: 'Три істоти або обʼєкти',
									cost: 9,
									sections: [
										FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
											characteristic: [Characteristic.Intuition],
											tier1: 'Вертикальний зсув 6',
											tier2: 'Вертикальний зсув 8',
											tier3: 'Вертикальний зсув 10'
										})),
										FactoryLogic.createAbilitySectionText('Стовпи зникають одразу після того, як ефекти примусового переміщення завершаться.')
									]
								})
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'null-sub-2-6-1b',
									name: 'Стіна льоду',
									description: 'Ви створюєте стіну льоду.',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Melee, AbilityKeyword.Psionic, AbilityKeyword.Weapon],
									distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Wall, value: 10, within: 10 })],
									target: 'Особливе',
									cost: 9,
									sections: [
										FactoryLogic.createAbilitySectionText('Ви можете розмістити цю стіну в зайнятих клітинках, підсунути кожну істоту в області у найближчу вільну клітинку на ваш вибір. Стіна залишається до кінця зустрічі або поки ви не опинитесь у стані вмирання. Клітинки стіни вважаються камʼяними при підрахунку шкоди, і ви та союзники можете вільно рухатись через стіну. Кожен ворог, який входить у клітинку, суміжну зі стіною, і має С < [середній], сповільнюється (рят. кидок закінчує). Кожен ворог, якого примусово перемістили в стіну і який має С < [середній], стає скутим (рят. кидок закінчує).')
									]
								})
							}),
							value: 1
						}
					]
				})
			]
		},
		{
			level: 7,
			features: []
		},
		{
			level: 8,
			features: [
				FactoryLogic.feature.create({
					id: 'null-sub-2-8-1',
					name: 'Синаптичний тріаж',
					description: 'Як безкоштовний маневр ви можете витратити 1d6 Витривалості, щоб зняти один ефект з себе. Кожна істота за вашим вибором в області дії вашої здібності «Нульове поле» також отримує цю користь.'
				})
			]
		},
		{
			level: 9,
			features: [
				FactoryLogic.feature.createChoice({
					id: 'null-sub-2-9-1',
					name: 'Здібність традиції 9-го рівня',
					options: [
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'null-sub-2-9-1a',
									name: 'Абсолютний нуль',
									description: 'Ви стаєте найхолоднішою сутністю в часопросторі.',
									type: FactoryLogic.type.createManeuver(),
									keywords: [AbilityKeyword.Psionic],
									distance: [FactoryLogic.distance.createSelf()],
									target: 'Себе',
									cost: 11,
									sections: [
										FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
											characteristic: [Characteristic.Intuition],
											tier1: 'Ви отримуєте 20 тимчасової Витривалості.',
											tier2: 'Ви отримуєте 30 тимчасової Витривалості.',
											tier3: 'Ви отримуєте 40 тимчасової Витривалості.'
										})),
										FactoryLogic.createAbilitySectionText('До кінця сутички або поки ви не помрете, ви стаєте втіленням найсильнішого холоду. Ви отримуєте імунітет до всіх видів шкоди, рівний імунітету до холодної шкоди, наданому вашою рисою «Ентропійна адаптивність», ігноруєте негативні ефекти вмирання, а також маєте бонус +2 до потужностей.')
									]
								})
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'null-sub-2-9-1b',
									name: 'Висмоктування тепла',
									description: 'Ви витягуєте все тепло з цілі.',
									type: FactoryLogic.type.createManeuver(),
									keywords: [AbilityKeyword.Melee, AbilityKeyword.Psionic, AbilityKeyword.Strike],
									distance: [FactoryLogic.distance.createMelee()],
									target: 'Одна істота',
									cost: 11,
									sections: [
										FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
											characteristic: [Characteristic.Intuition],
											tier1: '8 + І холодної шкоди; С < [слабкий], стає скутим (рят. кидок закінчує)',
											tier2: '11 + І холодної шкоди; С < [середній], стає скутим (рят. кидок закінчує)',
											tier3: '15 + І холодної шкоди; С < [сильний], стає скутим (рят. кидок закінчує)'
										})),
										FactoryLogic.createAbilitySectionText('Поки ціль скута таким чином, вона отримує холодну шкоду, рівну вашому показнику Інтуїції, на початку кожного вашого ходу. Додатково, щоразу коли ціль завдає шкоди іншій істоті, будучи скутою таким чином, будь-яка повʼязана з цією шкодою потужність зменшується на 2.')
									]
								})
							}),
							value: 1
						}
					]
				})
			]
		},
		{
			level: 10,
			features: []
		}
	],
	abilities: [],
	selected: false
};
