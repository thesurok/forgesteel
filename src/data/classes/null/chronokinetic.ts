import { AbilityKeyword } from '@/enums/ability-keyword';
import { Characteristic } from '@/enums/characteristic';
import { FactoryLogic } from '@/logic/factory-logic';
import { SkillList } from '@/enums/skill-list';
import { SubClass } from '@/models/subclass';

export const chronokinetic: SubClass = {
	id: 'null-sub-1',
	name: 'Хронокінетик',
	description: 'Ваше навчання відриває вас від часової реальності, дозволяючи використовувати плин часу як ще один вимір, через який рухаються всі речі.',
	featuresByLevel: [
		{
			level: 1,
			features: [
				FactoryLogic.feature.createSkillChoice({
					id: 'null-sub-1-1-1',
					listOptions: [SkillList.Lore]
				}),
				FactoryLogic.feature.createMultiple({
					id: 'null-sub-1-1-2',
					name: 'Майстерність Хронокінетики',
					features: [
						FactoryLogic.feature.create({
							id: 'null-sub-1-1-2a',
							name: 'Майстерність Хронокінетики',
							description: `
Зі зростанням вашої дисципліни ваша психічна майстерність над тілом посилюється, надаючи переваги згідно з таблицею «Майстерність Хронокінетики». Переваги накопичуються, за винятком випадків, коли покращена перевага замінює менш значну.

| Дисципліна      | Перевага                                                                                                                                                                                                     |
|:----------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 2               | Коли ви використовуєте маневр «Відштовхнення» (Knockback), ви можете виконати рухову дію «Відступ» (Disengage) як вільну тригерну дію до або після маневру.                                                  |
| 4               | Першого разу в ході, коли ви добровільно переміститеся на 1 або більше клітин як частина здібності, ви отримуєте 1 сплеск.                                                                   				 |
| 6               | Ви отримуєте перевагу (Edge) на маневри «Схоплення» (Grab) та «Відштовхнення» (Knockback).                                                                                               					 |
| 8 (4-й рівень)  | Першого разу в ході, коли ви добровільно переміститеся на 1 або більше клітин як частина здібності, ви отримуєте 2 сплески.                                                                   				 |
| 10 (7-й рівень) | У вас подвійна перевага (double edge) на маневри «Схоплення» та «Відштовхнення».                                                                                                                             |
| 12 (10-й рівень)| Коли ви примусово переміщуєте ціль, відстань примусового руху отримує бонус, рівний вашому показнику Інтуїції. Додатково, коли ви використовуєте героїчну здібність, ви отримуєте 10 тимчасової Витривалості.|`
						}),
						FactoryLogic.feature.createPackageContent({
							id: 'null-sub-1-1-2b',
							name: 'Майстерність Хронокінетики',
							description: 'Коли ви використовуєте здібність «Інерційний Щит» (Inertial Shield), ви можете потім виконати рухову дію «Відступ» як вільну тригерну дію.',
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
					id: 'null-sub-1-2-1',
					name: 'Швидка Обробка',
					description: 'Як маневр, ви можете прочитати цілу книгу або опрацювати подібний обсяг інформації. Додатково під час будь-якого перепочинку ви можете виконати ще одну дію перепочинку.'
				}),
				FactoryLogic.feature.createChoice({
					id: 'null-sub-1-2-2',
					name: 'Традиційна здібність 2-го рівня',
					options: [
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'null-sub-1-2-2a',
									name: 'Розмиття',
									description: 'Ви звільняєте накопичений час, що дозволяє вам діяти двічі.',
									type: FactoryLogic.type.createManeuver(),
									keywords: [AbilityKeyword.Psionic],
									distance: [FactoryLogic.distance.createSelf()],
									target: 'Себе',
									cost: 5,
									sections: [
										FactoryLogic.createAbilitySectionText('Ви можете використати сигнатурну або героїчну здібність. Ви отримуєте перевагу на кидки сили цієї здібності.')
									]
								})
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'null-sub-1-2-2b',
									name: 'Перенаправлення сили',
									description: 'Сила вашого удару переміщує ціль у несподіваному напрямку.',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Melee, AbilityKeyword.Psionic, AbilityKeyword.Strike, AbilityKeyword.Weapon],
									distance: [FactoryLogic.distance.createMelee(3)],
									target: 'Одна істота',
									cost: 5,
									sections: [
										FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
											characteristic: [Characteristic.Agility],
											tier1: '8 + Л шкоди; зсунути 1',
											tier2: '12 + Л шкоди; зсунути 3',
											tier3: '16 + Л шкоди; зсунути 5'
										}))
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
					id: 'null-sub-1-5-1',
					name: 'Миттєва Дія',
					description: 'Якщо ви не здивовані на початку вашого першого ходу в бою, ви отримуєте перевагу на кидки здібностей і 2 сплески. Якщо ви здивовані, ви можете витратити 3 дисципліни, щоб більше не бути здивованим і отримати переваги цієї особливості.'
				})
			]
		},
		{
			level: 6,
			features: [
				FactoryLogic.feature.createChoice({
					id: 'null-sub-1-6-1',
					name: 'Традиційна здібність 6-го рівня',
					options: [
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'null-sub-1-6-1a',
									name: 'Інтерфаза',
									description: 'Ви переходите у швидший часовий потік, щоб діяти швидше.',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Psionic],
									distance: [FactoryLogic.distance.createSelf()],
									target: 'Себе',
									cost: 9,
									sections: [
										FactoryLogic.createAbilitySectionText('Ви можете використати до трьох сигнатурних здібностей, кожна з яких отримує перевагу.')
									]
								})
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'null-sub-1-6-1b',
									name: 'Фазовий Крок',
									description: 'Ви послаблюєте свій звʼязок із цим виміром, що дозволяє вам проходити крізь ворогів і завдавати їм шкоди.',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Melee, AbilityKeyword.Psionic, AbilityKeyword.Weapon],
									distance: [FactoryLogic.distance.createSpecial('Self; see below')],
									target: 'Себе',
									cost: 9,
									sections: [
										FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
											characteristic: [Characteristic.Agility],
											tier1: '6 шкоди; С < [слабкий]. приголомшений',
											tier2: '8 шкоди; С < [середній]. приголомшений',
											tier3: '12 шкоди; С < [сильний]. приголомшений'
										})),
										FactoryLogic.createAbilitySectionText('Ви можете зсунутись до своєї швидкості, і клітини, зайняті ворогами або об’єктами, не вважаються важкою місцевістю для цього зсуву. Ви робите один кидок сили, який націлений на кожного ворога, через якого ви пройшли під час цього зсуву.')
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
					id: 'null-sub-1-8-1',
					name: 'Спільний Імпульс',
					description: 'Коли ви виконуєте рухову дію «Відступ», один союзник у зоні дії вашої здібності «Нульове Поле» також може виконати рухову дію «Відступ» як вільну тригерну дію, використовуючи вашу дистанцію для цієї рухової дії.'
				})
			]
		},
		{
			level: 9,
			features: [
				FactoryLogic.feature.createChoice({
					id: 'null-sub-1-9-1',
					name: 'Традиційна здібність 9-го рівня',
					options: [
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'null-sub-1-9-1a',
									name: 'Цикл Затримання',
									description: 'Ви увʼязнюєте ворога у петлі часу, де він знову й знову переживає останні кілька секунд.',
									type: FactoryLogic.type.createTrigger('Сутність, що спричинила тригер, починає свій хід.', { free: true }),
									keywords: [AbilityKeyword.Psionic, AbilityKeyword.Ranged],
									distance: [FactoryLogic.distance.createRanged(10)],
									target: 'Одна істота',
									cost: 11,
									sections: [
										FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
											characteristic: [Characteristic.Intuition],
											tier1: 'І < [слабкий]. ціль втрачає свій хід',
											tier2: 'І < [середній]. ціль втрачає свій хід',
											tier3: 'І < [сильний]. ціль втрачає свій хід'
										})),
										FactoryLogic.createAbilitySectionText('Якщо ціль втрачає свій хід, раунд продовжується так, ніби вона діяла. Ціль, яка не втрачає хід, отримує психічну шкоду, рівну двом вашим показникам Інтуїції за кожну основну дію, яку вона виконує, до кінця свого наступного ходу.')
									]
								})
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'null-sub-1-9-1b',
									name: 'Петля Часу',
									description: 'Ви показуєте тіням, що таке справжня швидкість.',
									type: FactoryLogic.type.createTrigger('Інша істота на карті зустрічі завершує свій хід.', { free: true }),
									keywords: [AbilityKeyword.Psionic],
									distance: [FactoryLogic.distance.createSelf()],
									target: 'Себе',
									cost: 11,
									sections: [
										FactoryLogic.createAbilitySectionText('Ви отримуєте бонусний хід негайно після створіння, що викликало тригер. Ця здібність може бути використана лише один раз за бойовий раунд.')
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
