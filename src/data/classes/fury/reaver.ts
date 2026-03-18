import { AbilityKeyword } from '@/enums/ability-keyword';
import { Characteristic } from '@/enums/characteristic';
import { FactoryLogic } from '@/logic/factory-logic';
import { FeatureField } from '@/enums/feature-field';
import { SubClass } from '@/models/subclass';

export const reaver: SubClass = {
	id: 'fury-sub-2',
	name: 'Руйнівник',
	description: 'Ви спрямовуєте свою лють в інстинкти й хитрість, кидаючи виклик фальшивому порядку цивілізації.',
	featuresByLevel: [
		{
			level: 1,
			features: [
				FactoryLogic.feature.createSkillChoice({
					id: 'fury-sub-2-1-1',
					selected: ['Сховатись']
				}),
				FactoryLogic.feature.createKitChoice({
					id: 'fury-sub-2-1-2'
				}),
				FactoryLogic.feature.create({
					id: 'fury-sub-2-1-3',
					name: 'Первісна Хитрість',
					description: `
Ви ніколи не буваєте здивовані. Додатково, коли ви мали б відштовхнути ціль примусовим переміщенням, ви можете замість цього зрушити її.

Зі зростанням вашої люті ви отримуєте бонуси, зазначені в таблиці «Зростаюча лють Руйнівника». Бонуси накопичуються, якщо тільки покращення не замінює менш потужне.

* **Лють 2**: Коли ви використовуєте маневр «Відштовхування», відстань примусового переміщення отримує бонус, рівний вашому показнику Ловкості.
* **Лють 4**: Першого разу за хід, коли ви зрушуєте істоту, ви отримуєте 1 сплеск.
* **Лють 6**: Ви отримуєте подвійну перевагу на перевірки Ловкості та на маневр «Відштовхування`
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'fury-sub-2-1-4',
						name: 'Надзвичайні Рефлекси',
						description: 'Ви невловимі, мов колібрі.',
						type: FactoryLogic.type.createTrigger('Коли ви отримуєте шкоду.'),
						distance: [FactoryLogic.distance.createSelf()],
						target: 'Себе',
						sections: [
							FactoryLogic.createAbilitySectionText('Ви отримуєте половину шкоди від ефекту-тригера і можете зрушитися на число клітинок, рівне вашому показнику Ловкості.'),
							FactoryLogic.createAbilitySectionSpend({
								effect: 'Якщо завдана шкода має повʼязані з нею ефекти потужності, потужність для вас зменшується на 1.'
							})
						]
					})
				})
			]
		},
		{
			level: 2,
			features: [
				FactoryLogic.feature.createMultiple({
					id: 'fury-sub-2-2-1',
					name: 'Невблаганний Гнів',
					features: [
						FactoryLogic.feature.create({
							id: 'fury-sub-2-2-1a',
							name: 'Невблаганний Гнів',
							description: 'Ви ігноруєте важкопрохідну місцевість.'
						}),
						FactoryLogic.feature.createBonus({
							id: 'fury-sub-2-2-1b',
							field: FeatureField.Speed,
							valueCharacteristics: [Characteristic.Agility]
						})
					]
				}),
				FactoryLogic.feature.createChoice({
					id: 'fury-sub-2-2-2',
					name: 'Аспект 2-го рівня',
					options: [
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'fury-sub-2-2-2a',
									name: 'Смерть... Сме-е-е-рть!',
									description: 'Ваша невтримна лють вселяє жах у їхні серця.',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
									distance: [FactoryLogic.distance.createMelee()],
									target: 'Одна істота',
									cost: 5,
									sections: [
										FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
											characteristic: [Characteristic.Might],
											tier1: '3 + С шкоди; P < [слабкий], приголомшений і зляканий (рят. кидок закінчує)',
											tier2: '5 + С шкоди; P < [середній], приголомшений і зляканий (рят. кидок закінчує)',
											tier3: '8 + С шкоди; P < [сильний], приголомшений і зляканий (рят. кидок закінчує)'
										}))
									]
								})
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'fury-sub-2-2-2b',
									name: 'Руйнівник Фаланги',
									description: 'Організовуючи свої сили, мов безпорадні створіння Закону — жалюгідно.',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Melee, AbilityKeyword.Weapon],
									distance: [FactoryLogic.distance.createSelf()],
									target: 'Себе (див. нижче)',
									cost: 5,
									sections: [
										FactoryLogic.createAbilitySectionText('Ви зрушуєте на відстань, рівну вашій швидкості, і робите один кидок сили, що спрямовується на до трьох ворогів, до яких ви підходите під час цього зрушення.'),
										FactoryLogic.createAbilitySectionRoll(
											FactoryLogic.createPowerRoll({
												characteristic: [Characteristic.Might],
												tier1: '2 шкоди; Л < [слабкий], приголомшений (рят. кидок закінчує)',
												tier2: '4 шкоди; Л < [середній], приголомшений (рят. кидок закінчує)',
												tier3: '6 шкоди; Л < [сильний], приголомшений (рят. кидок закінчує)'
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
			level: 3,
			features: [
				FactoryLogic.feature.create({
					id: 'fury-sub-2-3-1',
					name: 'Розпізнавання хитрощів',
					description: 'Ви маєте подвійну перевагу на перевірки для пошуку прихованих істот, розпізнавання прихованих мотивів або виявлення брехні. Також ви маєте подвійну перевагу на перевірки, повʼязані з азартними іграми!'
				})
			]
		},
		{
			level: 4,
			features: [
				FactoryLogic.feature.create({
					id: 'fury-sub-2-4-1',
					name: 'Покращення зростаючої люті',
					description: '**8 Люті:** Першого разу за хід, коли ви зрушуєте істоту, ви отримуєте 2 сплески.'
				})
			]
		},
		{
			level: 5,
			features: [
				FactoryLogic.feature.create({
					id: 'fury-sub-2-5-1',
					name: 'Без кайданів',
					description: 'На початку вашого ходу ви можете зняти будь-який стан Сковування з себе. Додатково ви маєте подвійну перевагу на перевірки, щоб вирватися з увʼязнення або полону.'
				})
			]
		},
		{
			level: 6,
			features: [
				FactoryLogic.feature.createChoice({
					id: 'fury-sub-2-6-1',
					name: 'Аспект 6-го рівня',
					options: [
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'fury-sub-2-6-1a',
									name: 'Удар Смерті',
									description: 'Як тільки ви відчуєте кров ворога, ви стаєте ефективнішими і перетворюєте кожен смертельний удар на можливість.',
									type: FactoryLogic.type.createTrigger('Коли ви збиваєте істоту до 0 Витривалості ударом.', { free: true }),
									keywords: [AbilityKeyword.Magic, AbilityKeyword.Strike, AbilityKeyword.Weapon],
									distance: [FactoryLogic.distance.createMelee()],
									target: 'Себе',
									cost: 9,
									sections: [
										FactoryLogic.createAbilitySectionText('Ви націлюєтеся на істоту, суміжну з вами, тим самим ударом, використовуючи той самий кидок сили, що й тригерний удар.')
									]
								})
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'fury-sub-2-6-1b',
									name: 'Шукай і знищуй',
									description: 'Ви прориваєте ворожі лінії, щоб подати приклад.',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
									distance: [FactoryLogic.distance.createMelee()],
									target: 'Одна істота',
									cost: 9,
									sections: [
										FactoryLogic.createAbilitySectionRoll(
											FactoryLogic.createPowerRoll({
												characteristic: [Characteristic.Might],
												tier1: '4 + С шкоди; P < [слабкий], зляканий (рят. кидок закінчує)',
												tier2: '6 + С шкоди; P < [середній], зляканий (рят. кидок закінчує)',
												tier3: '10 + С шкоди; P < [сильний], зляканий (рят. кидок закінчує)'
											})
										),
										FactoryLogic.createAbilitySectionText('Якщо ціль, що не є лідером або одиночним створінням, захекана цим ударом, її Витривалість знижується до 0, і ви обираєте ворога в межах 5 клітинок від вас. Якщо той ворог має P < [середній], він наляканий вами (рят. кидок закінчує).')
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
					id: 'fury-sub-2-7-1',
					name: 'Покращення зростаючої люті',
					description: '**10 Люті:** Ви маєте подвійну перевагу на перевірки Ловкості та на маневр «Відштовхування». '
				})
			]
		},
		{
			level: 8,
			features: [
				FactoryLogic.feature.create({
					id: 'fury-sub-2-8-1',
					name: 'На крок попереду',
					description: 'Ви рухаєтеся з легендарною грацією. Коли ви робите перевірку Ловкості, ви можете кинути три куби й обрати, які два використати. Додатково, коли ви використовуєте дію Відступу, відстань вашого зміщення отримує бонус, рівний вашому показнику Ловкості.'
				})
			]
		},
		{
			level: 9,
			features: [
				FactoryLogic.feature.createChoice({
					id: 'fury-sub-2-9-1',
					name: 'Аспект 9-го рівня',
					options: [
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'fury-sub-2-9-1a',
									name: 'Первісна Уразливість',
									description: 'Ви налаштовуєте ціль так, щоб вона стала вразливішою до певного елементу.',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Magic, AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
									distance: [FactoryLogic.distance.createMelee()],
									target: 'Одна істота',
									cost: 11,
									sections: [
										FactoryLogic.createAbilitySectionRoll(
											FactoryLogic.createPowerRoll({
												characteristic: [Characteristic.Might],
												tier1: '11 + С шкоди',
												tier2: '16 + С шкоди',
												tier3: '21 + С шкоди'
											})
										),
										FactoryLogic.createAbilitySectionText('Виберіть кислотний, холодний, скверни, вогняний, блискавичний, отруйний або звуковий тип шкоди. Ціль втрачає будь-який імунітет до обраного типу і набуває уразливість 10 до обраного типу (рят. кидок закінчує).')
									]
								})
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'fury-sub-2-9-1b',
									name: 'Злива Крові',
									description: 'Ви шокуєте ворогів жорстокістю свого удару, змінюючи баланс бою.',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
									distance: [FactoryLogic.distance.createMelee()],
									target: 'Одна істота',
									cost: 11,
									sections: [
										FactoryLogic.createAbilitySectionRoll(
											FactoryLogic.createPowerRoll({
												characteristic: [Characteristic.Might],
												tier1: '12 + С шкоди',
												tier2: '18 + С шкоди',
												tier3: '24 + С шкоди'
											})
										),
										FactoryLogic.createAbilitySectionText('Кожен ворог у межах 5 клітинок від вас відволікається до кінця раунду. Поки істота відволікана таким чином, вона не може виконувати тригерні дії або безкоштовні тригерні дії, кидки здібностей проти неї отримують перевагу, а її показники характеристик вважаються на 1 меншими для опору потужностям.')
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
			features: [
				FactoryLogic.feature.create({
					id: 'fury-sub-2-10-1',
					name: 'Покращення зростаючої люті',
					description: '**12 Люті:** Кожного разу, коли ви використовуєте героїчну здібність, ви отримуєте 10 тимчасової Витривалості. Додатково, коли ви робите кидок сили, що накладає примусове переміщення на ціль, відстань примусового переміщення отримує бонус, рівний вашому показнику Ловкості.'
				})
			]
		}
	],
	abilities: [],
	selected: false
};
