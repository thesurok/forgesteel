import { AbilityKeyword } from '@/enums/ability-keyword';
import { Characteristic } from '@/enums/characteristic';
import { FactoryLogic } from '@/logic/factory-logic';
import { SkillList } from '@/enums/skill-list';
import { SubClass } from '@/models/subclass';

export const metakinetic: SubClass = {
	id: 'null-sub-3',
	name: 'Метакінетик',
	description: 'Ви вчитеся бачити крізь ілюзіії всесвіту, щоб глибше зрозуміти своє тіло та його психічний потенціал.',
	featuresByLevel: [
		{
			level: 1,
			features: [
				FactoryLogic.feature.createSkillChoice({
					id: 'null-sub-3-1-1',
					listOptions: [SkillList.Exploration]
				}),
				FactoryLogic.feature.createMultiple({
					id: 'null-sub-3-1-2',
					name: 'Майстерність метакінетики',
					features: [
						FactoryLogic.feature.create({
							id: 'null-sub-3-1-2a',
							name: 'Майстерність метакінетики',
							description: `
		У міру зростання вашої дисципліни ваш психічний потенціал посилюється, надаючи переваги згідно з таблицею «Майстерність метакінетики». Переваги накопичуються, за винятком випадків, коли покращена перевага замінює меншу.

		| Дисципліна | Перевага                                                                                                                                                                                       |
		|:-----------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
		| 2         | Коли ви використовуєте маневр «Відштовхування», відстань примусового переміщення отримує бонус, рівний вашому показнику Інтуїції.                                                                 |
		| 4         | У перший раз у боєвому раунді, коли ви отримуєте шкоду або зазнаєте примусового переміщення, ви отримуєте 1 сплеск, навіть якщо ви протидієте ефекту.                                                |
		| 6         | Ви отримуєте перевагу на маневри «Схоплення» та «Відштовхування».                                                                                                                             |
		| 8 (4-й рівень)  | У перший раз у боєвому раунді, коли ви отримуєте шкоду або зазнаєте примусового переміщення, ви отримуєте 2 сплески, навіть якщо ви протидієте ефекту.                                    |
		| 10 (7-й рівень) | Ви маєте подвійну перевагу на маневри «Схоплення» та «Відштовхування».                                                                                                                      |
		| 12 (10-й рівень)| Коли ви примусово переміщуєте ціль, відстань примусового переміщення отримує бонус, рівний вашому показнику Інтуїції. Додатково, коли ви використовуєте героїчну здібність, ви отримуєте 10 тимчасової Витривалості.|`
						}),
						FactoryLogic.feature.createPackageContent({
							id: 'null-sub-3-1-2b',
							name: 'Майстерність метакінетики',
							description: 'Коли ви використовуєте здібність «Інерційний щит», ви можете виконати маневр «Відштовхування» як безкоштовну тригерну дію.',
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
					id: 'null-sub-3-2-1',
					name: 'Поглинач інерції',
					description: `
Ви додаєте свій показник Інтуїції до ефективного розміру для взаємодії з істотами та об'єктами, наприклад при визначенні, чи можете ви підійняти предмет, чи на вас впливає примусове переміщення тощо. Це не впливає на те, чи можна вас схопити.

Крім того, коли ви падаєте, ви зменшуєте ефективну висоту падіння на 5 клітинок, додатково до будь-яких інших зменшень. Коли ви отримуєте шкоду через примусове переміщення, ви зменшуєте цю шкоду на суму, що дорівнює вашому рівню.`
				}),
				FactoryLogic.feature.createChoice({
					id: 'null-sub-3-2-2',
					name: 'Здібність традиції 2-го рівня',
					options: [
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'null-sub-3-2-2a',
									name: 'Гравітний удар',
									description: 'Ваш кулак випромінює гравітаційну силу, яка притягує віддаленого ворога ближче.',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Melee, AbilityKeyword.Psionic, AbilityKeyword.Strike, AbilityKeyword.Weapon],
									distance: [FactoryLogic.distance.createMelee(3)],
									target: 'Одна істота',
									cost: 5,
									sections: [
										FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
											characteristic: [Characteristic.Agility],
											tier1: '8 + Л психічної шкоди; вертикальне притягнення 3',
											tier2: '12 + Л психічної шкоди; вертикальне притягнення 5',
											tier3: '16 + Л психічної шкоди; вертикальне притягнення 7'
										}))
									]
								})
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'null-sub-3-2-2b',
									name: 'Кінетичний щит',
									description: 'Ви створюєте силовий барʼєр, який поглинає вхідну кінетичну енергію.',
									type: FactoryLogic.type.createManeuver(),
									keywords: [AbilityKeyword.Psionic],
									distance: [FactoryLogic.distance.createSelf()],
									target: 'Себе',
									cost: 5,
									sections: [
										FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
											characteristic: [Characteristic.Agility],
											tier1: 'Ви отримуєте 10 тимчасової Витривалості',
											tier2: 'Ви отримуєте 15 тимчасової Витривалості',
											tier3: 'Ви отримуєте 20 тимчасової Витривалості'
										})),
										FactoryLogic.createAbilitySectionText('Поки у вас є тимчасова Витривалість від цієї здібності, вам не може бути накладено стан «Кровотеча», навіть коли ви вмираєте.')
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
					id: 'null-sub-3-5-1',
					name: 'Інерційний важіль',
					description: 'Коли ви використовуєте здібність, щоб зменшити завдану вам шкоду або скоротити відстань примусового переміщення, ви можете завдати шкоди одному ворогу в зоні дії вашої здібності Нульове Поле в розмірі, рівному вашому показнику Інтуїції.'
				})
			]
		},
		{
			level: 6,
			features: [
				FactoryLogic.feature.createChoice({
					id: 'null-sub-3-6-1',
					name: 'Здібність традиції 6-го рівня',
					options: [
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'null-sub-3-6-1a',
									name: 'Гравітний заряд',
									description: 'Ви спрямовуєте свою дисципліну в імпульс, який долає гравітацію.',
									type: FactoryLogic.type.createManeuver(),
									keywords: [AbilityKeyword.Psionic],
									distance: [FactoryLogic.distance.createSelf()],
									target: 'Себе',
									cost: 9,
									sections: [
										FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
											characteristic: [Characteristic.Intuition],
											tier1: 'Вертикальний зсув 5',
											tier2: 'Вертикальний зсув 7',
											tier3: 'Вертикальний зсув 9'
										})),
										FactoryLogic.createAbilitySectionText('Цей рух ігнорує стабільність. Якщо ви ковзнете в іншу істоту, ви отримуєте шкоду обидва так, ніби ваше примусове переміщення закінчилося, але ви продовжуєте рух через її простір.')
									]
								})
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'null-sub-3-6-1b',
									name: 'Залізне тіло',
									description: 'Ви концентруєтесь, поки ваше тіло не стане твердим, мов залізо.',
									type: FactoryLogic.type.createManeuver(),
									keywords: [AbilityKeyword.Psionic],
									distance: [FactoryLogic.distance.createSelf()],
									target: 'Себе',
									cost: 9,
									sections: [
										FactoryLogic.createAbilitySectionText('Ви отримуєте 20 тимчасової Витривалості. Додатково до кінця сутички ваша стабільність отримує бонус, рівний вашому показнику Інтуїції.')
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
					id: 'null-sub-3-8-1',
					name: 'Інерційний демпфер',
					description: 'Ви та кожна обрана вами істота або обʼєкт у зоні дії вашої здібності Нульове Поле отримують бонус до стабільності, рівний вашому показнику Інтуїції. Істота, яка намагається примусово перемістити ціль з цим бонусом, отримує психічну шкоду, рівну вашому показнику Інтуїції.'
				})
			]
		},
		{
			level: 9,
			features: [
				FactoryLogic.feature.createChoice({
					id: 'null-sub-3-9-1',
					name: 'Здібність традиції 9-го рівня',
					options: [
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'null-sub-3-9-1a',
									name: 'Інерційне поглинання',
									description: 'Ви поглинаєте атаку, щоб підсилити своє тіло.',
									type: FactoryLogic.type.createTrigger('Інша істота завдає вам шкоди, використовуючи здібність.', { free: true }),
									keywords: [AbilityKeyword.Psionic],
									distance: [FactoryLogic.distance.createSelf()],
									target: 'Себе',
									cost: 11,
									sections: [
										FactoryLogic.createAbilitySectionText('Ви отримуєте половину шкоди, скасовуєте будь-які ефекти, повʼязані з цією шкодою для себе, і отримуєте 3 сплески.')
									]
								})
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'null-sub-3-9-1b',
									name: 'Реалітас',
									description: 'Ваша істотна гіперреальність порушує звʼязок ворога з існуванням.',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Melee, AbilityKeyword.Psionic, AbilityKeyword.Strike, AbilityKeyword.Weapon],
									distance: [FactoryLogic.distance.createMelee()],
									target: 'Одна істота',
									cost: 11,
									sections: [
										FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
											characteristic: [Characteristic.Agility],
											tier1: '7 + Л психічної шкоди; І < [слабкий], приголомшений',
											tier2: '10 + Л психічної шкоди; І < [середній], приголомшений',
											tier3: '13 + Л психічної шкоди; І < [сильний], приголомшений'
										})),
										FactoryLogic.createAbilitySectionText('Поки ціль приголомшена цим способом, вона отримує психічну шкоду, рівну подвоєному показнику вашої Інтуїції на початку кожного вашого ходу. Якщо ця здібність спричиняє, що істота, яка не є лідером або соло-істотою, стає захеканою, її замість цього зведено до 0 Витривалості. Будь-яка істота, доведена до 0 Витривалості цією здібністю, забувається всіма істотами вашого рівня або нижчими в часовому просторі, які не присутні в сутичці. Рідні забутої істоти зберігають легке відчуття смутку. Цей ефект може бути скасований лише на розсуд Директора.')
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
