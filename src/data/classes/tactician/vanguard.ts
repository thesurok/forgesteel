import { AbilityDistanceType } from '@/enums/ability-distance-type';
import { AbilityKeyword } from '@/enums/ability-keyword';
import { Characteristic } from '@/enums/characteristic';
import { FactoryLogic } from '@/logic/factory-logic';
import { SkillList } from '@/enums/skill-list';
import { SubClass } from '@/models/subclass';

export const vanguard: SubClass = {
	id: 'tactician-sub-3',
	name: 'Авангард',
	description: 'Ви вивчили стратагеми давніх героїв, що дозволяє вам вести загін із передової та здобувати перемогу самою силою волі й особистості.',
	featuresByLevel: [
		{
			level: 1,
			features: [
				FactoryLogic.feature.createSkillChoice({
					id: 'tactician-sub-3-1-1',
					listOptions: [SkillList.Interpersonal]
				}),
				FactoryLogic.feature.create({
					id: 'tactician-sub-3-1-2',
					name: 'Владна присутність',
					description: 'Ви привертаєте увагу в будь-якій залі, до якої входите. Поки ви присутні на переговорах, кожен герой поруч із вами вважає свою Відомість на 2 вищою, ніж зазвичай. Крім того, під час бойового зіткнення кожен герой поруч із вами отримує подвійну перевагу на випробування, спрямовані на припинення бою й початок переговорів.'
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'tactician-sub-3-1-3',
						name: 'Парирування',
						description: 'Ваші швидкі рефлекси позбавляють ворога точності, якої він прагне.',
						type: FactoryLogic.type.createTrigger('Істота завдає шкоди цілі.'),
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Weapon],
						distance: [FactoryLogic.distance.createMelee(2)],
						target: 'Себе або одного союзника',
						sections: [
							FactoryLogic.createAbilitySectionText('Ви можете зміститися на 1 клітинку. Якщо ціллю є ви або якщо ви завершуєте це зміщення поруч із ціллю, ціль отримує лише половину шкоди. Якщо зі шкодою повʼязаний будь-який ефект потужності, потужність зменшується на 1.'),
							FactoryLogic.createAbilitySectionSpend({
								effect: 'Дальність цієї здібності стає Ближній бій 1 + ваш показник Розуму, а ви можете зміститися на кількість клітинок, рівну вашому показнику Розуму, замість 1.'
							})
						]
					})
				})
			]
		},
		{
			level: 2,
			features: [
				FactoryLogic.feature.create({
					id: 'tactician-sub-3-2-1',
					name: 'Перевага в ближньому бою',
					description: 'Після безперервних тренувань ви точніше передбачаєте плани ворога й ламаєте його спроби рухатися полем бою. Коли ви здійснюєте атаку за нагоди, швидкість цілі зменшується до 0 до кінця поточного ходу.'
				}),
				FactoryLogic.feature.createPackageContent({
					id: 'tactician-sub-3-2-1a',
					name: 'Перевага мітки',
					description: 'Коли істота, позначена вами, намагається рухатися або зміститися в межах дальності вашого вільного удару ближнього бою, ви можете використати безкоштовну тригерну дію й витратити 2 фокусу, щоб виконати проти неї вільний удар ближнього бою.',
					tag: 'mark'
				}),
				FactoryLogic.feature.createChoice({
					id: 'tactician-sub-3-2-2',
					name: 'Здібність доктрини 2-го рівня',
					options: [
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'tactician-sub-3-2-2a',
									name: 'Поки я на варті, ніхто не помре',
									description: 'Ви ставите порятунок союзника вище за власну безпеку.',
									type: FactoryLogic.type.createTrigger('Ціль завдає шкоди союзнику.'),
									keywords: [AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon],
									distance: [FactoryLogic.distance.createRanged(5)],
									target: 'Один ворог',
									cost: 5,
									sections: [
										FactoryLogic.createAbilitySectionText('Ви рухаєтеся на відстань до своєї швидкості до союзника, який спровокував здібність, завершуючи цей рух поруч із ним або в найближчій клітинці, якщо не можете досягти сусідньої. Союзник, який спровокував здібність, може витратити Відновлення й отримує 5 тимчасової Витривалості за кожного ворога, до якого ви наблизилися впритул під час цього руху. Потім ви робите кидок сили проти цілі.'),
										FactoryLogic.createAbilitySectionRoll(
											FactoryLogic.createPowerRoll({
												characteristic: [Characteristic.Might],
												tier1: 'Р < [слабкий], ціль злякана союзником, який спровокував здібність (рят. кидок закінчує)',
												tier2: 'Р < [середній], ціль злякана союзником, який спровокував здібність (рят. кидок закінчує)',
												tier3: 'Р < [сильний], ціль злякана союзником, який спровокував здібність (рят. кидок закінчує)'
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
									id: 'tactician-sub-3-2-2b',
									name: 'Загін, до мене!',
									description: 'Разом ми нездоланні!',
									type: FactoryLogic.type.createManeuver(),
									keywords: [AbilityKeyword.Area],
									distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 1 })],
									target: 'На себе і кожного союзника в зоні впливу',
									cost: 5,
									sections: [
										FactoryLogic.createAbilitySectionText('До початку вашого наступного ходу кожна ціль отримує бонус до стабільності, рівний вашому показнику Сили. Крім того, кожна ціль отримує 2 сплески.')
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
					id: 'tactician-sub-3-5-1',
					name: 'Оговтайся',
					description: 'Як безкоштовний маневр ви можете витратити 1d6 Витривалості, щоб проігнорувати наслідок випробування або завершити на собі один ефект, який закінчується рят. кидком чи наприкінці вашого ходу. Будь-який союзник поруч із вами також може витратити Витривалість як безкоштовний маневр, щоб отримати цю перевагу.'
				}),
				FactoryLogic.feature.create({
					id: 'tactician-sub-3-5-2',
					name: 'Тактичний наступ',
					description: 'Коли ви використовуєте основну дію «Ривок», щоб атакувати істоту, позначену вами, ви можете застосувати сигнатурну або героїчну здібність із ключовими словами «Ближній бій» та «Удар» замість вільного удару ближнього бою.'
				})
			]
		},
		{
			level: 6,
			features: [
				FactoryLogic.feature.createChoice({
					id: 'tactician-sub-3-6-1',
					name: 'Здібність доктрини 6-го рівня',
					options: [
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'tactician-sub-3-6-1a',
									name: 'Миттєва контратака',
									description: 'Ви парируєте з майже надприродною швидкістю.',
									type: FactoryLogic.type.createTrigger('Істота завдає шкоди цілі.', { free: true }),
									keywords: [AbilityKeyword.Melee, AbilityKeyword.Weapon],
									distance: [FactoryLogic.distance.createMelee()],
									target: 'Один союзник',
									cost: 9,
									sections: [
										FactoryLogic.createAbilitySectionText('Ціль отримує лише половину шкоди. Потім ви робите кидок сили проти істоти, що спровокувала здібність.'),
										FactoryLogic.createAbilitySectionRoll(
											FactoryLogic.createPowerRoll({
												characteristic: Characteristic.Might,
												tier1: 'Л < [слабкий], приголомшений (рят. кидок закінчує)',
												tier2: 'Л < [середній], приголомшений (рят. кидок закінчує)',
												tier3: 'Л < [сильний], приголомшений (рят. кидок закінчує)'
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
									id: 'tactician-sub-3-6-1b',
									name: 'Загін, за мною!',
									description: 'Ви ведете союзників у ривок.',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Charge, AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
									distance: [FactoryLogic.distance.createMelee()],
									target: 'Одна істота',
									cost: 9,
									sections: [
										FactoryLogic.createAbilitySectionRoll(
											FactoryLogic.createPowerRoll({
												characteristic: Characteristic.Might,
												tier1: '6 + С шкоди; один союзник у межах 10 клітинок може використати основну дію «Ривок» як безкоштовну тригерну дію й може використати сигнатурну здібність-удар ближнього бою замість вільного удару під час ривка',
												tier2: '9 + С шкоди; один союзник у межах 10 клітинок може використати основну дію «Ривок» як безкоштовну тригерну дію й може використати сигнатурну здібність-удар ближнього бою з перевагою замість вільного удару під час ривка',
												tier3: '13 + С шкоди; двоє союзників у межах 10 клітинок можуть використати основну дію «Ривок» як безкоштовну тригерну дію й кожен може використати сигнатурну здібність-удар ближнього бою з перевагою замість вільного удару під час ривка'
											})
										),
										FactoryLogic.createAbilitySectionText('Якщо ціль отримує влучання двома або більше ударами в межах цієї здібності й має Р < [сильний], вона приголомшена (рят. кидок закінчує). Якщо ціль зводиться до 0 Витривалості до того, як один або обидва союзники завдадуть свого удару, цей союзник або союзники можуть обрати іншу ціль.')
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
			features: [
				FactoryLogic.feature.create({
					id: 'tactician-sub-3-7-1',
					name: 'Шок і трепет',
					description: 'Ви розширили свої лідерські навички, зміцнюючи мораль своїх послідовників і забезпечуючи логістичну підтримку. Під час монтажного тесту або переговорів ви можете отримати один автоматичний успіх на випробуванні, виконаному навичкою з групи міжособистісних. Крім того, ви можете переконати групу людей допомогти вам із ремісничим проєктом під час перепочинку. Якщо ці люди доступні, коли ви берете перепочинок, ви можете зробити кидок проєкту для ремісничого проєкту на додачу до іншої діяльності перепочинку.'
				})
			]
		},
		{
			level: 8,
			features: [
				FactoryLogic.feature.createPackageContent({
					id: 'tactician-sub-1-8-1',
					name: 'Бачити, як вороги тікають перед вами',
					description: 'Коли ви або будь-який союзник завдаєте удару ближнього бою по істоті, позначеній вами, ви можете витратити 2 фокусу, щоб персонаж, який завдає удару, відштовхнув ціль на кількість клітинок, рівну вашому показнику Розуму. Потім цей персонаж може зміститися на кількість клітинок, рівну вашому показнику Розуму, завершивши це зміщення поруч із ціллю.',
					tag: 'mark'
				})
			]
		},
		{
			level: 9,
			features: [
				FactoryLogic.feature.createChoice({
					id: 'tactician-sub-3-9-1',
					name: 'Здібність доктрини 9-го рівня',
					options: [
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'tactician-sub-3-9-1a',
									name: 'Не втечеш',
									description: 'Ніщо не завадить вам дістатися до свого ворога.',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Charge, AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
									distance: [FactoryLogic.distance.createMelee()],
									target: 'Одна істота',
									cost: 11,
									sections: [
										FactoryLogic.createAbilitySectionText('Ви позначаєте ціль.'),
										FactoryLogic.createAbilitySectionRoll(
											FactoryLogic.createPowerRoll({
												characteristic: Characteristic.Might,
												tier1: '11 + С шкоди',
												tier2: '16 + С шкоди',
												tier3: '21 + С шкоди'
											})
										),
										FactoryLogic.createAbilitySectionText('Якщо ви використовуєте цю здібність як частину основної дії «Ривок», простори ворогів не вважаються складною місцевістю для вашого пересування. Крім того, якщо ви проходите крізь простір будь-якої істоти, ви можете зсунути цю істоту на 1 клітинку з шляху свого ривка.')
									]
								})
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'tactician-sub-3-9-1b',
									name: 'Цей мій!',
									description: 'Ви зосереджуєтеся на тому, щоб позбавити ворога значення.',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Melee, AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon],
									distance: [
										FactoryLogic.distance.createMelee(),
										FactoryLogic.distance.createRanged(5)
									],
									target: 'Одна істота',
									cost: 11,
									sections: [
										FactoryLogic.createAbilitySectionText('Ціль позначена вами.'),
										FactoryLogic.createAbilitySectionRoll(
											FactoryLogic.createPowerRoll({
												characteristic: Characteristic.Might,
												tier1: '8 + С шкоди',
												tier2: '13 + С шкоди',
												tier3: '17 + С шкоди'
											})
										),
										FactoryLogic.createAbilitySectionText('До кінця сутички або доки ви не опинитеся при смерті ви можете використовувати сигнатурну або героїчну здібність замість вільного удару проти будь-якої цілі, позначеної вами.')
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
