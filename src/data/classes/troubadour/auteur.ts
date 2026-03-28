import { AbilityDistanceType } from '@/enums/ability-distance-type';
import { AbilityKeyword } from '@/enums/ability-keyword';
import { Characteristic } from '@/enums/characteristic';
import { FactoryLogic } from '@/logic/factory-logic';
import { SubClass } from '@/models/subclass';

export const auteur: SubClass = {
	id: 'u3JAwbvGQEHPi6cY',
	name: 'Автор',
	description: 'Ви шукаєте драму в історіях та переказах, використовуючи свою магію для маніпулювання послідовністю подій, що розгортаються перед вами.',
	featuresByLevel: [
		{
			level: 1,
			features: [
				FactoryLogic.feature.createSkillChoice({
					id: '63GSnAtLidKQThSw',
					selected: ['Вихваляння']
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'VM5qLsp8pXpYt180',
						name: 'Блокування',
						description: 'Ні, ні, ні, ви втрачаєте аудиторію таким чином. Спробуйте так …',
						type: FactoryLogic.type.createNoAction(),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Magic, AbilityKeyword.Performance],
						distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Aura, value: 2 })],
						target: 'Кожна істота в зоні',
						sections: [
							FactoryLogic.createAbilitySectionText('Наприкінці кожного вашого ходу, поки цей виступ активний, ви можете обрати до кількості цілей, що дорівнює вашому показнику Присутності, і телепортувати їх у вільні клітинки в зоні. Ціль не можна телепортувати так, щоб це їй зашкодило (наприклад, над прірвою), залишило її вмираючою або спричинило стан чи інший негативний ефект.')
						]
					})
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'WLhzen5TMIS87eap',
						name: 'Драматичний монолог',
						description: 'Не обов’язково, щоб це мало сенс. Просто скажіть це з емоціями.',
						type: FactoryLogic.type.createManeuver(),
						keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged],
						distance: [FactoryLogic.distance.createRanged(10)],
						target: 'Спеціальна',
						sections: [
							FactoryLogic.createAbilitySectionText('Виберіть один із наступних ефектів:\n* Ви виголошуєте надихаючу історію перемоги. Один союзник у межах дистанції отримує перевагу на наступний кидок сили до початку вашого наступного ходу.\n* Ви переповідаєте історію героїзму. Один союзник у межах дистанції отримує 1 імпульс.\n* Ви ображаєте ворога у найвразливішому місці. Один ворог у межах дистанції отримує перешкоду на наступний кидок сили до кінця свого наступного ходу.'),
							FactoryLogic.createAbilitySectionSpend({
								effect: 'Ви можете обрати дві цілі для обраного ефекту.'
							})
						]
					})
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'MUMrI7zMhGiDF6an',
						name: 'Відплата — чесна гра',
						description: 'У коханні та у всьому іншому усі засоби дозволені.',
						type: FactoryLogic.type.createTrigger('Ціль робить кидок здібності, який має перевагу, подвійну перевагу, перешкоду або подвійну перешкоду.'),
						keywords: [AbilityKeyword.Ranged],
						distance: [FactoryLogic.distance.createRanged(10)],
						target: 'Одна істота',
						sections: [
							FactoryLogic.createAbilitySectionText('Перевага на тригерному кидку стає перешкодою, або подвійна перевага стає перевагою. Перешкода стає перевагою, або подвійна перешкода стає перешкодою.'),
							FactoryLogic.createAbilitySectionSpend({
								value: 3,
								effect: 'Перевага на тригерному кидку стає подвійною перешкодою, або подвійна перевага нейтралізується. Перешкода стає подвійною перевагою, або подвійна перешкода нейтралізується.'
							})
						]
					})
				})
			]
		},
		{
			level: 2,
			features: [
				FactoryLogic.feature.createChoice({
					id: 'NR3KiD1HgYdQ5KHv',
					name: 'Здібність класу (2 рівень)',
					options: [
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'wbcpRLxbH1FXK30r',
									name: 'Запрошена зірка',
									description: 'Ми запропонували їм відсоток від валового, тому вони працюють безкоштовно!',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged],
									distance: [FactoryLogic.distance.createMelee()],
									target: 'Спеціальна',
									cost: 5,
									sections: [
										FactoryLogic.createAbilitySectionText('Запрошена зірка з’являється, щоб допомогти вам під час зустрічі: або сторонній у межах дистанції, піднесений вашою магією, або таємничий новий герой, який з’являється у вільній клітинці в межах дистанції. Ця зірка під вашим контролем, має власний хід і ваші характеристики. Її максимум Витривалості — половина вашого. Вона не має здібностей, окрім ваших ближніх і далеких безкоштовних ударів. Наприкінці зустрічі або коли зірка знижується до 0 Витривалості, вона відступає або повертається до стороннього. Того ж стороннього не можна піднести цим способом більше одного разу за зустріч.')
									]
								})
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'xun0HqS4EyDtB40D',
									name: 'Поворот у кінці',
									description: 'Ви цього не чекали, правда?!',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged],
									distance: [FactoryLogic.distance.createRanged(10)],
									target: 'Один мертвий ворог',
									cost: 5,
									sections: [
										FactoryLogic.createAbilitySectionText('Ціль, яка не є лідером або одинаком, повертається до життя з половиною своєї Витривалості і стає союзником під контролем Директора. Гравці можуть разом із Директором визначити, коли ціль ходить кожен раунд бою. Наприкінці зустрічі ціль перетворюється на порох і розвіюється.')
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
					id: '8mgJuIOaJ89ei7An',
					name: 'Пропущений сигнал',
					description: 'Якщо ви не були здивовані на початку зустрічі, ви можете обрати одного ворога у межах вашої лінії ефекту, який не є лідером або одинаком. Директор тимчасово видаляє обрану істоту зі зустрічі. Обрана істота повертається на початку другого раунду бою. Ви повинні заробити 3 Перемоги, перш ніж знову використати цю рису.'
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
					id: 'z5ajGRuxCgWGBqkY',
					name: 'Риса класу (5 рівень)',
					options: [
						{
							feature: FactoryLogic.feature.create({
								id: 'V532EvelvtngOBm5',
								name: 'Виправити у монтажі',
								description: 'Одного разу в кожному вашому ході ви можете використати безкоштовний маневр, щоб змінити один стан, що впливає на істоту в межах дистанції вашої здібності «Драматичний монолог». Виберіть один із наступних станів у цілі: кровотеча, наляканий, розпластаний, сповільнений або спровокований. Ви змінюєте цей стан на інший із перерахованих, зберігаючи тривалість і походження початкового стану. Ціль, яка більше не розпластана, може підвестися.'
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'blD6AhJ1qRfFDLGB',
									name: 'Ще один дубль!',
									description: 'Ще один дубль, і цього разу зробіть це цікавіше.',
									type: FactoryLogic.type.createNoAction(),
									keywords: [AbilityKeyword.Area, AbilityKeyword.Magic, AbilityKeyword.Performance],
									distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Aura, value: 5 })],
									target: 'Ви та кожний союзник у зоні',
									sections: [
										FactoryLogic.createAbilitySectionText('Поки цей виступ активний, кожна ціль, яка починає свій хід у зоні, може перебросити перший кидок сили того ходу, який отримує результат рівня 2. Вона повинна використовувати новий кидок.')
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
					id: 'CwUQTsffxHIfqd1R',
					name: 'Здібність класу (6 рівень)',
					options: [
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: '0Gh84KaW8ivImayH',
									name: 'Ось як закінчується ваша історія',
									description: 'Ви розкриваєте кінець цієї битви, і це не надто добре для них.',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
									distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 5 })],
									target: 'Кожен ворог у зоні',
									cost: 9,
									sections: [
										FactoryLogic.createAbilitySectionRoll(
											FactoryLogic.createPowerRoll({
												characteristic: [Characteristic.Presence],
												tier1: '2 психічної шкоди; П < [слабкий], зляканий (рят. кидок завершує)',
												tier2: '5 психічної шкоди; П < [середній], зляканий (рят. кидок завершує)',
												tier3: '7 психічної шкоди; П < [сильний], зляканий (рят. кидок завершу)'
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
									id: '756Ynw8Qoy8v7gPo',
									name: 'Ви — мої дублери',
									description: 'Важливо, щоб усі знали ролі один одного, на всякий випадок…',
									type: FactoryLogic.type.createManeuver(),
									keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
									distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 5 })],
									target: 'Кожний союзник у зоні',
									cost: 9,
									sections: [
										FactoryLogic.createAbilitySectionText('До кінця зустрічі кожна ціль отримує бонус швидкості, бонус дистанції зброї, бонус відходу та бонус стійкості від вашого нині обладнаного набору, додатково до бонусів її власного набору.')
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
					id: 'oyvdzACJtFq8WHn7',
					name: 'Deleted Scene',
					description: 'Коли істота в межах дистанції вашої здібності «Драматичний монолог» робить кидок сили, ви можете витратити 1 одиницю драми як безкоштовну тригерну дію, щоб використати «Драматичний монолог», націливши лише одну істоту.'
				})
			]
		},
		{
			level: 9,
			features: [
				FactoryLogic.feature.createChoice({
					id: 'gPzNIv7yp4ELiJSz',
					name: 'Здібність класу (9 рівень)',
					options: [
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'vHIxEUa7yuxQSjDO',
									name: 'Епічний',
									description: 'Ваша історія розповідає про занепад могутності лиходія та про те, як герої зуміли піднятися, щоб зупинити його.',
									type: FactoryLogic.type.createManeuver(),
									keywords: [AbilityKeyword.Magic, AbilityKeyword.Melee, AbilityKeyword.Ranged],
									distance: [
										FactoryLogic.distance.createMelee(),
										FactoryLogic.distance.createRanged(10)
									],
									target: 'Одна істота',
									cost: 11,
									sections: [
										FactoryLogic.createAbilitySectionRoll(
											FactoryLogic.createPowerRoll({
												characteristic: [Characteristic.Presence],
												tier1: 'Ціль отримує перешкоду на кидки здібності (рят. кидок завершує).',
												tier2: 'Ціль має подвійну перешкоду на кидки здібності (рят. кидок завершує).',
												tier3: 'Ціль має подвійну перешкоду на кидки здібностей (рят. кидок завершує).'
											})
										),
										FactoryLogic.createAbilitySectionText('Виберіть одного союзника в межах дистанції. Поки ціль під впливом цієї здібності, кожного разу, коли вона використовує здібність, цей союзник може зробити безкоштовний удар по ній після розвʼязання здібності.')
									]
								})
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'nqibjR3wWOCxaYIk',
									name: 'Нарастаюча напруга',
									description: 'Ви нарощуєте напругу сцени та вкладаєте всю надію в свого головного героя, щоб він змінив хід подій.',
									type: FactoryLogic.type.createManeuver(),
									keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged],
									distance: [FactoryLogic.distance.createRanged(10)],
									target: 'Один союзник',
									cost: 11,
									sections: [
										FactoryLogic.createAbilitySectionText('Ціль отримує 3 одиниці свого Героїчного Ресурсу, має подвійний бонус на кидок сили за вибором, виконаний під час її наступного ходу, більше не є сповільненою або ослабленою, якщо була раніше, і може негайно здійснити свій хід після вашого, якщо ще не ходила цього раунду.')
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
