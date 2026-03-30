import { AbilityDistanceType } from '@/enums/ability-distance-type';
import { AbilityKeyword } from '@/enums/ability-keyword';
import { Characteristic } from '@/enums/characteristic';
import { FactoryLogic } from '@/logic/factory-logic';
import { PerkData } from '@/data/perk-data';
import { SubClass } from '@/models/subclass';

export const punisher: SubClass = {
	id: 'beastheart-sub-3',
	name: 'Крушитель',
	description: 'Грубою силою ви ламаєте кожного, хто нерозважно накличе на себе ваш гнів.',
	featuresByLevel: [
		{
			level: 1,
			features: [
				FactoryLogic.feature.createSkillChoice({
					id: 'beastheart-sub-3-1-1',
					selected: ['Витривалість']
				}),
				FactoryLogic.feature.createPackageContent({
					id: 'beastheart-sub-3-1-2',
					name: 'Перевага дикої природи',
					description: 'Ваш компаньйон зсуває ціль на кількість клітинок, рівну своєму показнику Сили.',
					tag: 'feral-strike'
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'beastheart-sub-3-1-3',
						name: 'Відкинь геть',
						description: 'Ви відкидаєте нападника.',
						type: FactoryLogic.type.createTrigger('Сусідній із вами ворог завдає шкоди істоті.'),
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Weapon],
						distance: [FactoryLogic.distance.createMelee()],
						target: 'Один ворог',
						sections: [
							FactoryLogic.createAbilitySectionText('Ви завдаєте цілі шкоди, рівної вашому показнику Сили, і штовхаєте її на кількість клітинок, рівну вашому показнику Сили + 1. Якщо це переміщення віддаляє ворога від істоти, якій він завдав шкоди, тригерна шкода зменшується вдвічі.'),
							FactoryLogic.createAbilitySectionSpend({
								effect: 'Ви можете штовхнути ворога на вдвічі більшу відстань.'
							})
						]
					})
				})
			]
		},
		{
			level: 2,
			features: [
				FactoryLogic.feature.createPerk({
					id: 'beastheart-sub-3-2-1a',
					selected: [PerkData.youCanPetThem]
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'beastheart-sub-3-2-1b',
						name: 'Ні, сам тримай його',
						description: 'Коли когось відкидає у вас, ви або підтримуєте союзника, або відправляєте ворога шкереберть в інший бік.',
						type: FactoryLogic.type.createTrigger('Істота, яку інша істота примусово переміщує, входить у сусідній із вами простір.', { free: true }),
						distance: [FactoryLogic.distance.createSelf()],
						target: 'Себе',
						sections: [
							FactoryLogic.createAbilitySectionText('Ви припиняєте примусове переміщення. Потім ви можете штовхнути цю істоту на кількість клітинок, рівну вашому показнику Сили + 1. Істота отримує 1 шкоду за кожну клітинку, на яку ви перемістили її таким способом.'),
							FactoryLogic.createAbilitySectionSpend({
								effect: 'Ви обидва можете використати цю безкоштовну тригерну дію в один і той самий хід.'
							})
						]
					})
				}),
				FactoryLogic.feature.createChoice({
					id: 'beastheart-sub-3-2-2',
					name: 'Здібність крушителя',
					options: [
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'beastheart-sub-4-2-2a',
									name: 'Боулінг ворогами',
									description: 'Ваш компаньйон зштовхує одного ворога в іншого, збиваючи обох з ніг.',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Charge, AbilityKeyword.Companion, AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
									distance: [FactoryLogic.distance.createMelee()],
									target: 'Одна істота',
									cost: 5,
									sections: [
										FactoryLogic.createAbilitySectionRoll(
											FactoryLogic.createPowerRoll({
												characteristic: Characteristic.Might,
												tier1: '3 + С шкоди; відштовхнути на 2; С < [слабкий], розпластаний',
												tier2: '5 + С шкоди; відштовхнути на 3; С < [середній], розпластаний',
												tier3: '8 + С шкоди; відштовхнути на 4; С < [сильний], розпластаний'
											})
										),
										FactoryLogic.createAbilitySectionText('Якщо ціль примусово переміщується хоча б на 1 клітинку, наприкінці цього переміщення ворог, сусідній із ціллю, також стає ціллю кидка сили цієї здібності, але не цього додаткового ефекту.')
									]
								})
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'beastheart-sub-4-2-2b',
									name: 'Бойовий настрій',
									description: 'Ваш компаньйон набирається відваги ревом, гарчанням або загрозливою позою.',
									type: FactoryLogic.type.createManeuver(),
									keywords: [AbilityKeyword.Companion],
									distance: [FactoryLogic.distance.createRanged(5)],
									target: 'Одна істота',
									cost: 5,
									sections: [
										FactoryLogic.createAbilitySectionText('Ваш компаньйон і союзник у межах дальності можуть отримати 2 сплески, витратити до 2 Відновлень і завершити на собі один стан або ефект, що закінчується наприкінці ходу чи рят. кидком.')
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
					id: 'beastheart-sub-3-5-1',
					name: 'Самопожертва',
					description: 'Коли ви або ваш компаньйон використовуєте «Відкинь геть» і зменшуєте шкоду від атаки вдвічі, ви можете замість початкової цілі взяти решту шкоди на себе. Перед застосуванням імунітетів і вразливостей шкода передається.'
				})
			]
		},
		{
			level: 6,
			features: [
				FactoryLogic.feature.createChoice({
					id: 'beastheart-sub-3-6-1',
					name: 'Здібність крушителя',
					options: [
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'beastheart-sub-3-6-1a',
									name: 'Виючий наступ',
									description: 'Ревучи, немов зграя диких звірів, ваш компаньйон і союзники кидаються на ворога.',
									type: FactoryLogic.type.createManeuver(),
									keywords: [AbilityKeyword.Companion],
									distance: [FactoryLogic.distance.createSelf()],
									target: 'Себе',
									cost: 9,
									sections: [
										FactoryLogic.createAbilitySectionText('Ваш компаньйон зміщується на відстань до своєї швидкості й може виконати вільний удар. Якщо ви перебуваєте в межах 10 клітинок від клітинки, з якої почався цей рух, ви та до 10 союзників також можете зміститися на відстань до своєї швидкості й виконати вільні удари.')
									]
								})
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'beastheart-sub-3-6-1b',
									name: 'Громовий удар',
									description: 'Гуркіт ривка вашого компаньйона нагадує розкотистий грім, а його удар схожий на землетрус.',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Companion, AbilityKeyword.Magic, AbilityKeyword.Melee, AbilityKeyword.Strike],
									distance: [FactoryLogic.distance.createSelf()],
									target: 'Себе',
									cost: 9,
									sections: [
										FactoryLogic.createAbilitySectionText('Ваш компаньйон зміщується на відстань до своєї швидкості. Ваш компаньйон робить один кидок сили, який націлюється на кожного ворога, до якого він наблизився впритул під час зміщення. Якщо ваш компаньйон націлюється цією здібністю лише на одного ворога, кидок сили отримує перевагу.'),
										FactoryLogic.createAbilitySectionRoll(
											FactoryLogic.createPowerRoll({
												characteristic: Characteristic.Might,
												tier1: '9 звукової шкоди; С < [слабкий], розпластаний',
												tier2: '13 звукової шкоди; С < [середній], розпластаний',
												tier3: '18 звукової шкоди; С < [сильний], розпластаний'
											})
										),
										FactoryLogic.createAbilitySectionSpend({
											value: 2,
											effect: 'Ви можете переміститися на відстань до своєї швидкості. Кидок сили також впливає на кожного ворога, до якого ви наблизилися впритул під час цього руху.'
										})
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
					id: 'beastheart-sub-3-8-1',
					name: 'Кидок через плече',
					description: 'Коли ви або ваш компаньйон використовуєте маневр, що завдає шкоди, ця шкода збільшується на 2. Коли ви або ваш компаньйон штовхає істоту, це штовхання стає вертикальним.'
				})
			]
		},
		{
			level: 9,
			features: [
				FactoryLogic.feature.createChoice({
					id: 'beastheart-sub-3-9-1',
					name: 'Здібність крушителя',
					options: [
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'beastheart-sub-3-9-1a',
									name: 'Бойове шаленство',
									description: 'Ваш компаньйон зриває шлюзи, що стримують його лють, і ця хвиля накочує на непідготовлені розуми довколишніх істот.',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Area, AbilityKeyword.Companion, AbilityKeyword.Magic],
									distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 5 })],
									target: 'Обрані вами істоти',
									cost: 11,
									sections: [
										FactoryLogic.createAbilitySectionRoll(
											FactoryLogic.createPowerRoll({
												characteristic: Characteristic.Might,
												tier1: 'П < [слабкий], охоплений бойовим шаленством',
												tier2: 'П < [середній], охоплений бойовим шаленством',
												tier3: 'охоплений бойовим шаленством'
											})
										),
										FactoryLogic.createAbilitySectionText('Істота, охоплена бойовим шаленством, використовує безкоштовну тригерну дію, щоб виконати вільний удар ближнього бою по собі або сусідній істоті, а потім більше не є охопленою бойовим шаленством. Ви обираєте ціль для кожної істоти. Істота, яка зазвичай була б невразлива до цієї здібності, може добровільно обрати потрапити під її вплив.')
									]
								})
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'beastheart-sub-3-9-1b',
									name: 'Пусти їх у політ!',
									description: 'Ваш компаньйон проривається крізь передні ряди, розкидаючи ворогів і союзників урізнобіч.',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Area, AbilityKeyword.Charge, AbilityKeyword.Companion],
									distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 2 })],
									target: 'Кожна істота',
									cost: 11,
									sections: [
										FactoryLogic.createAbilitySectionRoll(
											FactoryLogic.createPowerRoll({
												characteristic: Characteristic.Intuition,
												tier1: '9 шкоди; вертикально зсунути на 2; С < [слабкий], розпластаний',
												tier2: '13 шкоди; вертикально зсунути на 4; С < [середній], розпластаний',
												tier3: '18 шкоди; вертикально зсунути на 6; С < [сильний], розпластаний'
											})
										),
										FactoryLogic.createAbilitySectionText('Ваш компаньйон може відмовитися завдавати шкоди обраним вами цілям.')
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
