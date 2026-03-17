import { AbilityDistanceType } from '@/enums/ability-distance-type';
import { AbilityKeyword } from '@/enums/ability-keyword';
import { Characteristic } from '@/enums/characteristic';
import { FactoryLogic } from '@/logic/factory-logic';
import { SubClass } from '@/models/subclass';

export const exorcist: SubClass = {
	id: 'censor-sub-1',
	name: 'Екзорцист',
	description: 'Ви спеціалізуєтесь на полюванні за прихованими ворогами вашого ордену, усвідомлюючи, що відкритий розум — незахищена фортеця.',
	featuresByLevel: [
		{
			level: 1,
			features: [
				FactoryLogic.feature.createSkillChoice({
					id: 'censor-sub-1-1-1',
					selected: ['Read Person']
				}),
				FactoryLogic.feature.createPackageContent({
					id: 'censor-sub-1-1-2',
					name: 'Бонус Орденського Судження',
					description: 'Першого разу за хід, коли ви використовуєте здібність Judgment для судження істоти, ви можете телепортуватися на число клітинок, рівне подвоєному вашому показнику Присутності. Це переміщення має наближати вас до судженої істоти. Для точки призначення не потрібна лінія дії.',
					tag: 'censor-judgment'
				})
			]
		},
		{
			level: 2,
			features: [
				FactoryLogic.feature.create({
					id: 'censor-sub-1-2-1',
					name: 'Пильність Святого',
					description: 'Ви відточили здатність виявляти гріх і можете використовувати її, щоб знаходити тих, хто ховається від правосуддя. Будь-яка істота, яку ви судите, не може виконувати маневр Hide. Додатково ви отримуєте перевагу при пошуку прихованих істот. Якщо ви знаходите приховану істоту, ви можете використати вашу здібність Judgment проти неї як безкоштовну тригерну дію.'
				}),
				FactoryLogic.feature.create({
					id: 'censor-sub-1-2-2',
					name: 'Чуття істини',
					description: 'Ви навчились секретним технікам вашого ордену, що дозволяють розпізнавати істину з надприродною точністю. Якщо істота має рівень нижчий за ваш, ви автоматично знаєте, коли вона бреше, хоча не обов’язково знаєте справжні мотиви. Додатково ви отримуєте перевагу на тести для виявлення брехні або прихованих мотивів.'
				}),
				FactoryLogic.feature.createChoice({
					id: 'censor-sub-1-2-3',
					name: 'Здібність екзорциста 2-го рівня',
					options: [
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'censor-sub-1-2-3a',
									name: 'Ти боїшся справедливості',
									description: 'Я лише посудина. Ваші власні вчинки тягарем лягають на вас.',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged, AbilityKeyword.Strike],
									distance: [FactoryLogic.distance.createRanged(10)],
									target: 'Одна істота',
									cost: 5,
									sections: [
										FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
											characteristic: [Characteristic.Might],
											tier1: '8 + С священної шкоди; П < [слабкий], зляканий (рят. кидок)',
											tier2: '12 + С священної шкоди; П < [середній], зляканий (рят. кидок)',
											tier3: '15 + С священної шкоди; П < [сильний], зляканий (рят. кидок)'
										})),
										FactoryLogic.createAbilitySectionText('Якщо ціль уже злякана вами або іншою істотою, і ця здібність мала б налякати її знову, вона замість цього отримує психічну шкоду, рівну подвоєному вашому показнику Присутності.')
									]
								})
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'censor-sub-1-2-3b',
									name: 'Відкривач',
									description: 'Ви спрямовуєте святу енергію, щоб шкодити невірним і виявляти тих, хто схований від вашого судження.',
									type: FactoryLogic.type.createManeuver(),
									keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
									distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 3 })],
									target: 'Кожен ворог у зоні',
									cost: 5,
									sections: [
										FactoryLogic.createAbilitySectionText('Кожна ціль отримує священну шкоду, рівну подвоєному вашому показнику Присутності. Додатково, кожна прихована ціль автоматично виявляється і не може знову стати прихованою до початку вашого наступного ходу. Після цього ви можете використати свою здібність Judgment проти однієї цілі як безкоштовну тригерну дію.')
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
					id: 'censor-sub-1-3-1',
					name: 'Зло виявлено',
					description: 'Ваш орден навчив вас методів розпізнавання маскувань смертних і чудовиськ. Ви автоматично бачите крізь маскування та ілюзії, створені істотами вашого рівня або нижче, і отримуєте перевагу на тести для розкриття маскувань сильніших істот. Коли ви розкриваєте маскування або ілюзію істоти, ви можете використати вашу здібність Judgment проти неї як безкоштовну тригерну дію.'
				})
			]
		},
		{
			level: 6,
			features: [
				FactoryLogic.feature.createChoice({
					id: 'censor-sub-1-4-1',
					name: 'Здібність екзорциста 6-го рівня',
					options: [
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'censor-sub-1-4-1a',
									name: 'Геть',
									description: 'Ви вселяєте жах у ворогів, змушуючи їх відступати та створюючи хаос у їхніх лавах.',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
									distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 3 })],
									target: 'Кожен ворог у зоні',
									cost: 9,
									sections: [
										FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
											characteristic: [Characteristic.Presence],
											tier1: '4 психічної шкоди; зрушити 3',
											tier2: '6 психічної шкоди; зрушити 5',
											tier3: '8 психічної шкоди; зрушити 7'
										}))
									]
								})
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'censor-sub-1-4-1b',
									name: 'Біль власного творіння',
									description: 'Ви повертаєте ефект проти того, хто його наклав.',
									type: FactoryLogic.type.createTrigger('Ціль отримує стан або ефект, який закінчується рятівним кидком або який завершується в кінці її ходу.', { free: true }),
									keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged],
									distance: [FactoryLogic.distance.createRanged(10)],
									target: 'На себе або одного союзника',
									cost: 9,
									sections: [
										FactoryLogic.createAbilitySectionText('Ефект знімається з цілі і переноситься на істоту, яка наклала ефект. Та істота також отримує шкоду, рівну тричі вашому показнику Присутності.')
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
					id: 'censor-sub-1-5-1',
					name: 'Демонолог',
					description: 'Найезотеричніші таємниці вашого ордену вчать, що щоб перемогти ворога, треба його зрозуміти. Ви вважаєте свій Renown підвищеним на 2 при взаємодії з демонами, дияволами та іншими агентами хаосу. Якщо вам вдається успішно завершити переговори з однією з таких істот, ви отримуєте перевагу на кидки сили проти неї і можете використати вашу здібність Judgment як безкоштовну тригерну дію перед початком зустрічі.'
				})
			]
		},
		{
			level: 9,
			features: [
				FactoryLogic.feature.createChoice({
					id: 'censor-sub-1-6-1',
					name: 'Здібність екзорциста 9-го рівня',
					options: [
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'censor-sub-1-6-1a',
									name: 'Вигнання',
									description: 'Ви розриваєте крихкий зв’язок цілі з цим світом.',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
									distance: [FactoryLogic.distance.createMelee()],
									target: 'Одна істота',
									cost: 11,
									sections: [
										FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
											characteristic: [Characteristic.Might],
											tier1: '5 + С шкоди; П < [слабкий], ціль вигнана (рят. кидок)',
											tier2: '8 + С шкоди; П < [середній], ціль вигнана (рят. кидок)',
											tier3: '11 + С шкоди; П < [сильний], ціль вигнана (рят. кидок)'
										})),
										FactoryLogic.createAbilitySectionText('Ця здібність отримує перевагу проти демонів, дияволів, нежиті та істот, що не є рідними для вашого поточного світу. Якщо ви знаєте істинне ім’я цілі, ця здібність має подвійну перевагу. Поки ціль вигнана, її відправляють до іншого маніфольду в часовому просторі і видаляють з поля бою. Вигнана ціль не може нічого робити, окрім рятівних кидків, і щоразу отримує 10 священної шкоди, коли робить рятівний кидок. Якщо ціль знижується до 0 Витривалості під час вигнання, вона загублена у часовому просторі.')
									]
								})
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'censor-sub-1-6-1b',
									name: 'Прояв жаху',
									description: '«Я знаю, чого ти боїшся.»',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged, AbilityKeyword.Strike],
									distance: [FactoryLogic.distance.createRanged(10)],
									target: 'Одна істота',
									cost: 11,
									sections: [
										FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
											characteristic: [Characteristic.Presence],
											tier1: '7 + П психічної шкоди; П < [слабкий], зляканий (рят. кидок)',
											tier2: '10 + П психічної шкоди; П < [середній], зляканий (рят. кидок)',
											tier3: '12 + П психічної шкоди; П < [сильний], зляканий (рят. кидок)'
										})),
										FactoryLogic.createAbilitySectionText('Поки ціль злякана таким чином, якщо ціль-лідер або одиночна істота стає захеканою, вона отримує додаткові 25 психічної шкоди. Якщо ціль, злякана таким чином, не є лідером або одиночною істотою і стає захеканою, вона знижується до 0 Витривалості.')
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
