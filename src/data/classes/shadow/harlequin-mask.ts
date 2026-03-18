import { AbilityDistanceType } from '@/enums/ability-distance-type';
import { AbilityKeyword } from '@/enums/ability-keyword';
import { Characteristic } from '@/enums/characteristic';
import { FactoryLogic } from '@/logic/factory-logic';
import { SubClass } from '@/models/subclass';

export const harlequinMask: SubClass = {
	id: 'shadow-sub-3',
	name: 'Колегія Маски Арлекіна',
	description: 'Випускники Колегії Маски Арлекіна опановують ілюзійну магію, якою користуються для проникнення в укріплення ворога та створення скоординованого хаосу в бою.',
	featuresByLevel: [
		{
			level: 1,
			features: [
				FactoryLogic.feature.createSkillChoice({
					id: 'shadow-sub-3-1-1',
					selected: ['Брехня']
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'shadow-sub-3-1-2',
						name: 'Я не загроза',
						description: 'Прийняття ілюзорної подоби іншої істоти дає вам перевагу в обмані.',
						type: FactoryLogic.type.createManeuver(),
						keywords: [AbilityKeyword.Magic],
						distance: [FactoryLogic.distance.createSelf()],
						target: 'Себе',
						sections: [
							FactoryLogic.createAbilitySectionText(`
Ви огортаєте себе ілюзією, яка робить вас нестрашним і нешкідливим у очах ворогів. Ви можете набувати вигляду нешкідливої тварини вашого розміру, наприклад вівці або капібари, або виглядати як менш героїчна й беззброя версія себе. Поки ця ілюзія триває, ваші удари отримують перевагу, а коли ви виконуєте дію переміщення «Відступ», ви отримуєте +1 до дистанції, на яку можете зміститися.

Ілюзія припиняється, коли ви завдаєте шкоди іншій істоті, коли ви фізично взаємодієте з істотою, коли використовуєте цю здібність знову або коли ви припиняєте ілюзію (дія не потрібна). Якщо ви припиняєте цю ілюзію, завдаючи шкоди іншій істоті, ви отримуєте 1 сплеск.`),
							FactoryLogic.createAbilitySectionSpend({
								effect: 'Оберіть істоту, розмір якої не перевищує вашого більш ніж на 1 і яка знаходиться в межах 10 клітин. Ілюзія цієї здібності робить вас схожим на ту істоту. Ілюзія покриває все ваше тіло, включно з одягом і бронею, і змінює ваш голос так, щоб він звучав як голос тієї істоти. Ви отримуєте перевагу на перевірках, спрямованих на переконання союзників істоти, що ви — та істота.'
							})
						]
					})
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'shadow-sub-3-1-3',
						name: 'Хитрий трюк',
						description: 'Ви сієте мить плутанини в бою, що йде на шкоду ворогу.',
						type: FactoryLogic.type.createTrigger('Коли ворог націлюється на вас ударом.'),
						keywords: [AbilityKeyword.Magic],
						distance: [FactoryLogic.distance.createSelf()],
						target: 'Себе',
						cost: 1,
						sections: [
							FactoryLogic.createAbilitySectionText('Оберіть ворога в межах дальності ініціюючого удару, включно з ворогом, який націлився на вас. Удар спрямовується проти обраного ворога замість вас.')
						]
					})
				})
			]
		},
		{
			level: 2,
			features: [
				FactoryLogic.feature.createChoice({
					id: 'shadow-sub-3-2-1',
					name: 'Здібність колегії 2-го рівня',
					options: [
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'shadow-sub-3-2-1a',
									name: 'Звукові хитрощі',
									description: 'Ілюзорні звуки змушують ворогів змінювати позиції, коли ті лякаються або обшукують джерело шуму.',
									type: FactoryLogic.type.createManeuver(),
									keywords: [AbilityKeyword.Area, AbilityKeyword.Magic, AbilityKeyword.Ranged],
									distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Cube, value: 3, within: 10 })],
									target: 'Кожен ворог у зоні',
									cost: 5,
									sections: [
										FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
											characteristic: [Characteristic.Agility],
											tier1: 'зрушити на 4',
											tier2: 'зрушити на 5',
											tier3: 'зрушити на 7'
										})),
										FactoryLogic.createAbilitySectionText('Це примусове переміщення ігнорує стійкість. Натомість примусове переміщення зменшується на число, рівне показнику Інтуїції цілі.')
									]
								})
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'shadow-sub-3-2-1b',
									name: 'Надто довірливий',
									description: 'Коли ворог атакує, ви виявляєте, що весь час були в іншому місці.',
									type: FactoryLogic.type.createTrigger('Коли інша істота націлюється на вас ударом.', { free: true }),
									keywords: [AbilityKeyword.Magic],
									distance: [FactoryLogic.distance.createSelf()],
									target: 'Себе',
									cost: 5,
									sections: [
										FactoryLogic.createAbilitySectionText('Ви використовуєте свою здібність «Хитрий трюк» без витрат прозорливості проти тригерної істоти і наносите удар. Ви можете телепортуватися на незайняту клітину в межах 3 клітин від цієї істоти та виконати безкоштовний удар по ній. Після цього ви можете витратити Відновлення.')
									]
								})
							}),
							value: 1
						}
					]
				}),
				FactoryLogic.feature.create({
					id: 'shadow-sub-3-2-2',
					name: 'Друг!',
					description: `
Ваші ілюзії змушують ворогів у критичні моменти вірити, що ви їхній друг. Коли ворог використовує здібність або рису, що націлена на кількох союзників, і ви перебуваєте в межах дії ефекту, ви можете обрати бути також ціллю цього ефекту.

Крім того, коли ви використовуєте свою здібність «Я не загроза», ви можете виконати дію переміщення «Відступ» як частину цієї здібності.`
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
					id: 'shadow-sub-3-5-1',
					name: 'Гамбіт Арлекіна',
					description: `
Коли ви приводите прилеглу немініонну істоту до 0 Витривалості, ви можете негайно виконати безкоштовний маневр, щоб активувати свою здібність «Я не загроза», а потім переміститися на відстань, що не перевищує вашу швидкість.

Якщо істота того ж розміру, що й ви, ви можете замаскуватися під неї за допомогою «Я не загроза» без витрат прозорливості. У такому разі, поки «Я не загроза» активна, тіло істоти виглядає як ваше тіло. Ілюзія на їхньому тілі припиняється, якщо інша істота фізично взаємодіє з ним. Коли ілюзія закінчується для вас або для тіла істоти, вона закінчується для обох.`
				})
			]
		},
		{
			level: 6,
			features: [
				FactoryLogic.feature.createChoice({
					id: 'shadow-sub-3-6-1',
					name: 'Здібність колегії 6-го рівня',
					options: [
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'shadow-sub-3-6-1a',
									name: 'Дивись!',
									description: 'Ви відволікаєте ворогів, що дозволяє союзникам скористатися цією ситуацією.',
									type: FactoryLogic.type.createManeuver(),
									keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
									distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 5 })],
									target: 'Кожен ворог у зоні',
									cost: 9,
									sections: [
										FactoryLogic.createAbilitySectionText('До початку вашого наступного ходу будь-який кидок здібності, зроблений проти цілі, отримує перевагу.')
									]
								})
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'shadow-sub-3-6-1b',
									name: 'Нитки маріонетки',
									description: 'Ви вколюєте дрібні голки кінчиками пальців у нерви ворогів і примушуєте їх втратити контроль.',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Magic, AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
									distance: [
										FactoryLogic.distance.createMelee()
									],
									target: 'Двоє ворогів',
									cost: 9,
									sections: [
										FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
											characteristic: [Characteristic.Agility],
											tier1: '2 шкоди; якщо у цілі R < [слабкий], перед вирішенням шкоди вона виконує безкоштовний удар.',
											tier2: '5 шкоди; якщо у цілі R < [середній], перед вирішенням шкоди вона використовує основну здібність на ваш вибір.',
											tier3: '7 шкоди; якщо у цілі R < [сильний], перед вирішенням шкоди вона може зміститись на відстань, що не перевищує її швидкість, і використати основну здібність на ваш вибір.'
										})),
										FactoryLogic.createAbilitySectionText('Ви обираєте нові цілі для безкоштовного удару або здібності первісної цілі. Додатково, якщо ви приховані або замасковані, використання цієї здібності не розкриває вас.')

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
					id: 'shadow-sub-3-8-1',
					name: 'Паркур',
					description: 'Ваш рух більше не провокує атаки можливості. Крім того, ви можете використовувати свою здібність «Гамбіт Арлекіна» як безкоштовну тригерну дію, коли істота знижується до 0 Витривалості вашою здібністю «Хитрий трюк».'
				})
			]
		},
		{
			level: 9,
			features: [
				FactoryLogic.feature.createChoice({
					id: 'shadow-sub-3-9-1',
					name: 'Здібність колегії 9-го рівня',
					options: [
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'shadow-sub-3-9-1a',
									name: 'Я — ти',
									description: 'Ваша маска відтворює обличчя ворога. Напевно, йому це скоро не знадобиться.',
									type: FactoryLogic.type.createManeuver(),
									keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged],
									distance: [FactoryLogic.distance.createRanged(10)],
									target: 'Одна істота',
									cost: 11,
									sections: [
										FactoryLogic.createAbilitySectionText('До кінця сутички ви отримуєте імунітети цілі до типів пошкоджень та її швидкість (якщо вона краща за вашу) і можете використовувати будь-які види пересування, доступні цілі. Ви також можете використовувати фірмову здібність цілі, застосовуючи її бонус до кидка сили.')
									]
								})
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'shadow-sub-3-9-1b',
									name: 'Це був я увесь час',
									description: 'Після всього пережитого разом ви вивертаєте клинок і робите біль ще більш особистою.',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
									distance: [FactoryLogic.distance.createMelee()],
									target: 'Одна істота або предмет',
									cost: 11,
									sections: [
										FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
											characteristic: [Characteristic.Agility],
											tier1: '15 + A шкоди',
											tier2: '21 + A шкоди',
											tier3: '28 + A шкоди'
										})),
										FactoryLogic.createAbilitySectionText('Якщо ви замасковані під істоту, яку ціль знала, використовуючи вашу здібність «Я не загроза», ця здібність завдає додаткової шкоди, рівної трьом разам вашого показника Ловкості.')
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
