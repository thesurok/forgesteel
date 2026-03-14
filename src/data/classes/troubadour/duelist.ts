import { AbilityDistanceType } from '@/enums/ability-distance-type';
import { AbilityKeyword } from '@/enums/ability-keyword';
import { Characteristic } from '@/enums/characteristic';
import { FactoryLogic } from '@/logic/factory-logic';
import { SubClass } from '@/models/subclass';

export const duelist: SubClass = {
	id: 'O51GO1EdIggJHj40',
	name: 'Duelist',
	description: 'Drama infuses your every movement done in tandem with another. You perform dances of death, putting trust in your opponent to return your passion in kind.',
	featuresByLevel: [
		{
			level: 1,
			features: [
				FactoryLogic.feature.createSkillChoice({
					id: '1NhlI9WCQUCKkX0u',
					selected: ['Gymnastics']
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'gTezUhLaizAfbmXy',
						name: 'Acrobatics',
						description: 'Folks love a good tumble.',
						type: FactoryLogic.type.createNoAction(),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Magic, AbilityKeyword.Performance],
						distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Aura, value: 5 })],
						target: 'Self and each ally in the area',
						sections: [
							FactoryLogic.createAbilitySectionText('Поки цей виступ активний, кожна ціль, яка починає свій хід у зоні, може автоматично отримати результат 3-го рівня в одному випробуванні на стрибок, перекид або лазіння як частину свого переміщення до кінця свого ходу.')
						]
					})
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'vS4O8NKJgdBVoVjj',
						name: 'Star Power',
						description: 'Your years of practicing fencing and dancing pay off on the battlefield.',
						type: FactoryLogic.type.createManeuver(),
						distance: [FactoryLogic.distance.createMelee()],
						target: 'Self',
						cost: 1,
						sections: [
							FactoryLogic.createAbilitySectionText('Ви отримуєте +2 до швидкості до кінця свого ходу. Крім того, наступний кидок сили, який ви зробите цього ходу, не може мати результат нижче 2-го рівня.'),
							FactoryLogic.createAbilitySectionSpend({
								effect: 'You gain a +4 bonus to speed instead.'
							})
						]
					})
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'uWQCoI4iBOhFpHgW',
						name: 'Riposte',
						description: '“I’d have brought treats had I known I’d be fighting a dog.”',
						type: FactoryLogic.type.createTrigger('The target takes damage from a melee strike.'),
						keywords: [AbilityKeyword.Melee],
						distance: [FactoryLogic.distance.createMelee()],
						target: 'Self or one ally',
						sections: [
							FactoryLogic.createAbilitySectionText('Ціль робить безкоштовний удар по істоті, яка завдала тригерного удару.')
						]
					})
				})
			]
		},
		{
			level: 2,
			features: [
				FactoryLogic.feature.createChoice({
					id: 'lAPeP3iSpt8PqQJI',
					name: '2nd-Level Class Act Ability',
					options: [
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'FViXbLCcsCb1xdHQ',
									name: 'Classic Chandelier Stunt',
									description: 'Audiences love this bit.',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
									distance: [FactoryLogic.distance.createMelee()],
									target: 'Self and one willing ally',
									cost: 5,
									sections: [
										FactoryLogic.createAbilitySectionText('Кожна ціль може зміститися до 5 клітинок, включно по вертикалі, але має завершити це переміщення поруч з іншою ціллю і на твердій поверхні. Потім кожна ціль може зробити ближній безкоштовний удар, який завдає додаткової шкоди, що дорівнює подвійному значенню їхньої найвищої характеристики.')
									]
								})
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'MRR7Ag6ujfREe9A8',
									name: 'En Garde!',
									description: 'Wait, it’s … Guard! Turn! Parry! Dodge! Spin! Thrust! Ha!',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
									distance: [FactoryLogic.distance.createMelee()],
									target: 'One creature',
									cost: 5,
									sections: [
										FactoryLogic.createAbilitySectionRoll(
											FactoryLogic.createPowerRoll({
												characteristic: [Characteristic.Agility],
												tier1: '7 + A damage',
												tier2: '11 + A damage',
												tier3: '16 + A damage'
											})
										),
										FactoryLogic.createAbilitySectionText('Ціль може зробити ближній безкоштовний удар по вам. Якщо вона це робить, ви можете зробити ближній безкоштовний удар по цілі.')
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
			features: [
				FactoryLogic.feature.create({
					id: 'TkRYPzOk7E7KosGI',
					name: 'Foil',
					description: `At the start of an encounter, choose one creature within your line of effect. You have a double edge on power rolls made against or in
competition with that creature. The chosen creature also has a double edge on power rolls made against or in competition with you. If the chosen creature is reduced to 0 Stamina, you can choose a new foil at the start of the next combat round. `
				})
			]
		},
		{
			level: 4,
			features: []
		},
		{
			level: 5,
			features: [
				FactoryLogic.feature.createChoice({
					id: 'AYG8ODq4Xvn4vWMr',
					name: '5th-Level Class Act Feature',
					options: [
						{
							feature: FactoryLogic.feature.create({
								id: 'EpJ6mBFE2kfCK1IY',
								name: 'Verbal Duel',
								description: 'Once on each of your turns while the target of your Foil feature is adjacent to you, you can use a free maneuver to exchange words with them. Make an opposed Presence test with the target. Whoever gets the higher result can make a free strike, which deals psychic damage instead of its usual damage.'
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'TqxhltwD22GJjGkU',
									name: 'We Can’t Be Upstaged!',
									description: 'Swordplay so graceful it looks like you all practiced this.',
									type: FactoryLogic.type.createNoAction(),
									keywords: [AbilityKeyword.Area, AbilityKeyword.Magic, AbilityKeyword.Performance],
									distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Aura, value: 5 })],
									target: 'Self and each ally in the area',
									sections: [
										FactoryLogic.createAbilitySectionText('Поки цей виступ активний, ціль, яка починає свій хід у зоні, отримує бонус до дистанції зміщення, що дорівнює вашому показнику Присутності, до кінця свого ходу.')
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
			level: 6,
			features: [
				FactoryLogic.feature.createChoice({
					id: 'AkvymN5wTwBpvJk6',
					name: '6th-Level Class Act Ability',
					options: [
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'gCxHNxuFdPtoWOSw',
									name: 'Blood on the Stage',
									description: 'It’s love and blood or drama and blood. Either way, there’s always blood.',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
									distance: [FactoryLogic.distance.createMelee()],
									target: 'One creature or object',
									cost: 9,
									sections: [
										FactoryLogic.createAbilitySectionRoll(
											FactoryLogic.createPowerRoll({
												characteristic: [Characteristic.Agility],
												tier1: '12 + A damage; M < [weak], bleeding (save ends)',
												tier2: '18 + A damage; M < [average], bleeding (save ends)',
												tier3: '24 + A damage; bleeding (EoT), or if M < [strong], bleeding (save ends)'
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
									id: 'yzRbbBkrzCSPBh1w',
									name: 'Fight Choreography',
									description: 'You and your partner make a flashy show of derring-do, then get back to your corners.',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
									distance: [FactoryLogic.distance.createMelee()],
									target: 'One creature',
									cost: 9,
									sections: [
										FactoryLogic.createAbilitySectionText('Ви і ціль кожен робите ближній безкоштовний удар, який цілить у кожного ворога в межах 3 клітинок від кожного з вас, розподіляючи ворогів між собою. Ви обираєте, яких ворогів цілить ваш удар, а яких — удар цільової істоти. Потім ви зсуваєте ціль на 5 клітинок, ігноруючи стійкість.')
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
					id: 'FwA0rbxGHrD7Oj2H',
					name: 'Masterwork',
					description: `Choose one of your signature abilities and name it after yourself. You always have this ability available, even if it is sourced from a kit you switch out. Whenever you use this ability, you gain an edge and 1 surge that you can use only on this ability.

Additionally, when your named signature ability is the last ability you use in an encounter, you can immediately use the Hear Ye, Hear Ye! effect of your Zeitgeist feature to tell tales of your exploits after the encounter ends`
				})
			]
		},
		{
			level: 9,
			features: [
				FactoryLogic.feature.createChoice({
					id: 'qIMKE6V6R4w2teMf',
					name: '9th-Level Class Act Ability',
					options: [
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: '4LyAtdASe3AEJaon',
									name: 'Expert Fencer',
									description: 'If you can land the strike, the crowd goes wild.',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Charge, AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
									distance: [FactoryLogic.distance.createMelee(3)],
									target: 'One creature or object',
									cost: 11,
									sections: [
										FactoryLogic.createAbilitySectionRoll(
											FactoryLogic.createPowerRoll({
												characteristic: [Characteristic.Agility],
												tier1: '15 + A damage',
												tier2: '21 + A damage',
												tier3: '28 + A damage; M < [strong], bleeding (save ends)'
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
									id: 'IZCTPQBJer4fFuKi',
									name: 'Renegotiated Contract',
									description: 'No, no. You don’t die until the sequel.',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
									distance: [FactoryLogic.distance.createMelee()],
									target: 'One creature',
									cost: 11,
									sections: [
										FactoryLogic.createAbilitySectionText('Додайте вашу поточну Витривалість до поточної Витривалості цілі, потім ви маєте половину цієї суми, а ціль — залишок. Якщо хтось із вас отримує більше Витривалості, ніж його максимум, різницю отримує інша істота. Жоден із вас не може отримати більше Витривалості, ніж його максимум, цим способом. Потім ви робите кидок сили.'),
										FactoryLogic.createAbilitySectionRoll(
											FactoryLogic.createPowerRoll({
												characteristic: [Characteristic.Presence],
												tier1: 'You and the target can each end one effect on yourselves that is ended by a saving throw or that ends at the end of your turns.',
												tier2: 'You and the target can end any effects on yourselves that are ended by a saving throw or that end at the end of your turns.',
												tier3: 'You can choose any of the current effects on you and the target that are ended by a saving throw or that end at the end of your turns, apply the chosen effects to the target, and end the rest.'
											})
										)
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
