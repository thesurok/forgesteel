import { AbilityDistanceType } from '@/enums/ability-distance-type';
import { AbilityKeyword } from '@/enums/ability-keyword';
import { Characteristic } from '@/enums/characteristic';
import { FactoryLogic } from '@/logic/factory-logic';
import { FeatureField } from '@/enums/feature-field';
import { HeroClass } from '@/models/class';
import { PerkList } from '@/enums/perk-list';
import { SkillList } from '@/enums/skill-list';
import { auteur } from '@/data/classes/troubadour/auteur';
import { duelist } from '@/data/classes/troubadour/duelist';
import { virtuoso } from '@/data/classes/troubadour/virtuoso';

export const troubadour: HeroClass = {
	id: '9y3Jx3koKZipiPh1',
	name: 'Трубадур',
	description: `Весь світ театр, і кожен на ньому актор. Ніхто не знає цього краще, ніж трубадур. Ви знаходите енергію в драмі повсякденного життя і знаєте, як витягти спектакль навіть з найпобутовіших ситуацій. Ви підкреслюєте висоти і поглиблюєте низини на користь тих, хто може стати свідком вашого виступу.

Як трубадур, ви переслідуєте драму. Непереборні небезпеки світу можуть змусити багатьох героїв тремтіти. Але ви виходите на світову сцену не з наміром померти, а щоб дізнатися, чи справді ви живі.

“Історія — це казка. Кожен з нас — це просто історія, яку ми розповідаємо собі. Змініть історію, і ви зміните світ.”
Jackson Bootblack`,
	type: 'standard',
	subclassName: 'Амплуа',
	subclassCount: 1,
	primaryCharacteristicsOptions: [
		[ Characteristic.Agility, Characteristic.Presence ]
	],
	primaryCharacteristics: [],
	featuresByLevel: [
		{
			level: 1,
			features: [
				FactoryLogic.feature.createBonus({
					id: '3G7nEekJVbHgJJNl',
					field: FeatureField.Stamina,
					value: 18,
					valuePerLevel: 6
				}),
				FactoryLogic.feature.createBonus({
					id: 'drlPj8moDZL1c8D1',
					field: FeatureField.Recoveries,
					value: 8
				}),
				FactoryLogic.feature.createSkillChoice({
					id: 'UH5m1URtvSjZqfQb',
					selected: [ 'Read Person' ]
				}),
				FactoryLogic.feature.createSkillChoice({
					id: 'GjD2ZwdbvEIZOKQV',
					listOptions: [ SkillList.Interpersonal ],
					count: 2
				}),
				FactoryLogic.feature.createSkillChoice({
					id: 'WpHiobCwPhxC5q2g',
					listOptions: [ SkillList.Intrigue, SkillList.Lore ]
				}),
				FactoryLogic.feature.createHeroicResource({
					id: 'tS1DEkc8ZWqFRIxE',
					name: 'Драма',
					gains: [
						{
							tag: 'start',
							trigger: 'На початку вашого ходу',
							value: '1d3'
						},
						{
							tag: '',
							trigger: 'Вперше, коли три або більше героїв використовують здатність у той самий хід',
							value: '2'
						},
						{
							tag: '',
							trigger: 'Вперше, коли будь-який герой стає захеканим під час зустрічі',
							value: '2'
						},
						{
							tag: '',
							trigger: 'Вперше, коли істота у вашій зоні впливу кидає натуральну 19 або 20',
							value: '3'
						},
						{
							tag: '',
							trigger: 'Коли ви або інший герой помирає',
							value: '10'
						}
					],
					details: 'Коли ви мертвий, ви продовжуєте отримувати драму під час бою, поки ваше тіло ціле. Якщо у вас є 30 драми під час зустрічі, в якій ви померли, ви можете повернутися до життя з 1 Витривалістю та 0 драми (дія не потрібна). Якщо ви все ще мертві після зустрічі, в якій ви померли, ви не можете отримувати драму під час майбутніх зустрічей.'
				}),
				FactoryLogic.feature.createKitChoice({
					id: '3rwc3gnUTZ6Ta7a0'
				}),
				FactoryLogic.feature.create({
					id: 'q9DC0wXzaL4f1EeU',
					name: 'Партнер по сцені',
					description: `Коли ви отримуєте успіх у тесті на взаємодію з NPC, використовуючи навичку з групи міжособистісних навичок, ви можете встановити зв'язок з цим NPC. Коли ви вступаєте в переговори з NPC, з яким у вас є зв'язок, їхнє терпіння збільшується на 1 (до максимуму 5). Крім того, вперше під час переговорів, коли ви особисто робите аргумент, який збільшує інтерес NPC на 1, ви замість цього збільшуєте їхній інтерес на 2 (до максимуму 5).

Ви можете мати активну кількість зв'язків, рівну вашому рівню. Коли ви встановлюєте зв'язок з новим NPC, що перевищує ліміт, ви повинні вибрати, який із ваших активних зв'язків втратити.`
				}),
				FactoryLogic.feature.create({
					id: 'MTcRnLoVfzQkQw7T',
					name: 'Рутини',
					description: 'Ви входите в кожну битву з набором готових здібностей виступу. Виступи - це магічні презентації (такі як пісні, танці, поеми або гімнастичні трюки), в яких можуть брати участь ваші союзники. Ці здібності мають ключове слово "Виступ". На початку кожного раунду бою, поки ви не приголомшені, не мертві або не здивовані, ви можете або вибрати новий виступ, або підтримувати свій поточний виступ (дія не потрібна). Ваш виступ триває до тих пір, поки ви не зможете його підтримувати або до кінця зустрічі.'
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'DY5KgVsjM9G2b1eP',
						name: 'Хореографія',
						description: 'Топи, удари, кроки. Все це "хореографія".',
						type: FactoryLogic.type.createNoAction(),
						keywords: [ AbilityKeyword.Area, AbilityKeyword.Magic, AbilityKeyword.Performance ],
						distance: [ FactoryLogic.distance.create({ type: AbilityDistanceType.Aura, value: 5 }) ],
						target: 'На себе і кожного союзника в зоні впливу',
						sections: [
							FactoryLogic.createAbilitySectionText('Поки цей виступ активний, кожен цільовий об’єкт, який починає свій хід у зоні впливу, отримує бонус +2 до швидкості до кінця свого ходу.')
						]
					})
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'uqp9td9gJ5c4tKKQ',
						name: 'Оживляючий лимерик',
						description: 'Жив-був чоловік із столиці…',
						type: FactoryLogic.type.createNoAction(),
						keywords: [ AbilityKeyword.Area, AbilityKeyword.Magic, AbilityKeyword.Performance ],
						distance: [ FactoryLogic.distance.create({ type: AbilityDistanceType.Aura, value: 5 }) ],
						target: 'На себе і кожного союзника в зоні впливу',
						sections: [
							FactoryLogic.createAbilitySectionText('Наприкінці кожного вашого ходу, поки цей виступ активний, ви можете обрати до кількості цілей, що дорівнює вашому показнику Присутності. Кожна обрана ціль може витратити Відновлення.')
						]
					})
				}),
				FactoryLogic.feature.createClassAbilityChoice({
					id: 'JEPrmTnFwNbi7kWO',
					cost: 'signature'
				}),
				FactoryLogic.feature.createClassAbilityChoice({
					id: 'cCfz5o1dUmzOYVPL',
					cost: 3
				}),
				FactoryLogic.feature.createClassAbilityChoice({
					id: 'smLIhr6BGJPZscJG',
					cost: 5
				})
			]
		},
		{
			level: 2,
			features: [
				FactoryLogic.feature.create({
					id: 'TzNcWWXAnI5bvPk9',
					name: 'Звернення до муз',
					description: `Ви можете виголосити надихаючу промову, звернутися до своїх натхнень або підняти бойовий дух товаришів, звертаючись до муз, щоб підсилити драму битви. Однак іронія може передати вашу удачу лиходієві заради тієї ж драми.

Перед тим як кинути на отримання драми на початку свого ходу, ви можете звернутися до муз (дія не потрібна). Якщо ви це робите, ваш кидок отримує такі додаткові ефекти:
* Якщо випадає 1, ви отримуєте 1 додаткову драму. Директор отримує 1d3 Злоби.
* Якщо випадає 2, ви отримуєте 1 героїчний ресурс, який можете залишити собі або віддати союзнику в межах дистанції вашого виступу. Директор отримує 1 Злобу.
* Якщо випадає 3, ви отримуєте 2 героїчних ресурси, які можете розподілити між собою та будь-якими союзниками в межах дистанції вашого виступу.`
				}),
				FactoryLogic.feature.createChoice({
					id: 'WagqmAOErEbwOMUA',
					name: 'Інвокація',
					description: 'У вас є особливий стиль, що визначає вашу присутність на полі бою. Оберіть одну з наступних особливостей.',
					options: [
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'Ojd2syAahwIuMZ7E',
									name: 'Дозвольте представити сьогоднішніх гравців',
									description: '',
									type: FactoryLogic.type.createMain(),
									distance: [ FactoryLogic.distance.createSelf() ],
									target: 'Self',
									sections: [
										FactoryLogic.createAbilitySectionText('Щоразу, коли ви ходите першим у бойовій зустрічі, ви можете основною дією представити себе та своїх союзників супротивникам. Кожен союзник може зміститися на свою швидкість, а кидки здібностей проти них отримують подвійну перешкоду до кінця раунду. Крім того, будь-який застигнутий зненацька ворог більше не вважається застигнутим.')
									]
								})
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.create({
								id: '3TpougOk43FTEYlT',
								name: 'Формальні представлення',
								description: `Під час відпочинку ви можете написати повідомлення про свій прихід (наприклад, візитівку або офіційного листа), адресоване ворогу. Ви можете вручити його особисто, якщо перебуваєте поруч, надіслати кур'єром або залишити у таємному місці для знаходження. Можна мати лише одне активне повідомлення.

Директор визначає, коли ціль отримає повідомлення. Коли це стається, ворог насторожується й вживає відчайдушних заходів, щоб вас зупинити. Директор отримує 1 додаткову Злобу за кожен раунд бою з цією ціллю. Герої починають таку зустріч із 2 додатковими героїчними жетонами, які зникають після завершення зустрічі.`
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.create({
								id: 'vAsAdX1lzAwxKC0z',
								name: 'Моя репутація випереджає мене',
								description: `На початку соціальної взаємодії з одним або кількома NPC, які вас не знають, ви можете використати свою репутацію, автоматично створивши зв'язок з одним із цих NPC, як за допомогою особливості "Партнер по сцені". Цей зв'язок враховується у ліміті активних зв'язків. Поки зв'язок активний, усі герої вважають свою Відомість на 2 вищою для переговорів із цим NPC.

Директор може дати героям 1 жетон, щоб зробити вас сумнозвісним серед цієї групи істот і не дозволити створити зв'язок. Поки ви не покращите репутацію, усі герої отримують шкоду на випробуваннях взаємодії з цією групою навичками міжособистісної групи. Ви все ще можете шукати союзників через "Партнер по сцені".`
							}),
							value: 1
						}
					]
				}),
				FactoryLogic.feature.createPerk({
					id: 'tknnoxNMdhRdiF1e',
					lists: [ PerkList.Interpersonal, PerkList.Lore, PerkList.Supernatural ]
				})
			]
		},
		{
			level: 3,
			features: [
				FactoryLogic.feature.createClassAbilityChoice({
					id: 'yoKyUfQEMwhyC4Ze',
					cost: 7
				})
			]
		},
		{
			level: 4,
			features: [
				FactoryLogic.feature.createCharacteristicBonus({
					id: 'bEgiUgVeMGaONxTn',
					characteristic: Characteristic.Agility,
					value: 1
				}),
				FactoryLogic.feature.createCharacteristicBonus({
					id: 'N00Uu7tYlbZh5mLR',
					characteristic: Characteristic.Presence,
					value: 1
				}),
				FactoryLogic.feature.createChoice({
					id: 'eMWbssNB1OSeIFmj',
					name: 'Мелодрама',
					options: [
						{
							feature: FactoryLogic.feature.createHeroicResourceGain({
								id: 'bPZ0jgAHVi08ZX2X',
								name: 'Мелодрама №1',
								tag: '',
								trigger: 'Whenever a creature rolls a natural 2 on a power roll.',
								value: '2'
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createHeroicResourceGain({
								id: 'Jlp0a0yANrSIoeXp',
								name: 'Мелодрама №2',
								tag: '',
								trigger: 'The first time the Director deals damage to a hero using a Villain action or an ability that costs Malice.',
								value: '2'
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createHeroicResourceGain({
								id: '05FGfz1LetwQOlGm',
								name: 'Мелодрама №3',
								tag: '',
								trigger: 'The first time a hero unwillingly falls 5 or more squares.',
								value: '2'
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createHeroicResourceGain({
								id: 'bnEzQSbTNyay2M51',
								name: 'Мелодрама №4',
								tag: '',
								trigger: 'The first time a hero deals damage with 3 surges.',
								value: '2'
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createHeroicResourceGain({
								id: 'lbGOgNoNt9SsiBDB',
								name: 'Мелодрама №5',
								tag: '',
								trigger: 'Whenever a hero spends their last Recovery.',
								value: '2'
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.create({
								id: 'AOgAXA0Z2YZWf0Be',
								name: 'Альтернатива мелодрами',
								description: 'Ви можете не обирати нову подію, а вибрати вже наявну (включно з отриманою через цю особливість). Коли обрана подія дає вам драму, ви отримуєте 1 додаткову драму.'
							}),
							value: 1
						}
					],
					count: 2
				}),
				FactoryLogic.feature.createPerk({
					id: 'c8wilO6exppZ8lk0'
				}),
				FactoryLogic.feature.createSkillChoice({
					id: 'pBD0Fhn5vO1A26aB',
					listOptions: [ SkillList.Crafting, SkillList.Exploration, SkillList.Interpersonal, SkillList.Intrigue, SkillList.Lore ]
				}),
				FactoryLogic.feature.create({
					id: 'faVh7riGGaN0uOHR',
					name: 'Дух часу',
					description: `Ви завжди в курсі подій, відчуваєте пульс життя. Коли починаєте або завершуєте відпочинок, оберіть один із наступних ефектів.
### Передчуття

Ви можете попросити Директора надати дві підказки щодо майбутньої зустрічі чи переговорів. Одна з підказок може бути хибною.

### Оголошення

Хвалячись, залякуючи, керуючи чи брешучи, ви намагаєтеся поширити інформацію в місцевості. Зробіть перевірку Присутності:

| Кидок    | Ефект                                                                                                                                                                                                                                        |
|:--------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ≤ 11    | Вашу інформацію ніхто не чує.                                                                                                                                                                                                              |
| 12 - 16 | Інформація доходить до найближчого населеного пункту містечкового розміру чи більшого. Ви та кожен союзник, присутній під час перевірки, отримуєте перевагу на перевірки Присутності в цій місцевості, поки хтось із вас не витратить Відновлення.                                  |
| ≥ 17    | Інформація доходить до найближчого та наступного за відстанню населеного пункту містечкового розміру чи більшого. Ви та союзники отримуєте перевагу на перевірки Присутності в цих місцевостях до початку вашого наступного відпочинку. |

### Останні чутки

Ви можете попросити Директора надати три чутки про місцевість, у якій перебуваєте, або про ту, куди плануєте вирушити до наступного відпочинку. Одна з чуток може бути хибною.`
				})
			]
		},
		{
			level: 5,
			features: [
				FactoryLogic.feature.createClassAbilityChoice({
					id: 'ExlOitsyzbnBbNA2',
					cost: 9
				})
			]
		},
		{
			level: 6,
			features: [
				FactoryLogic.feature.createPerk({
					id: 'ywf7fUdThUpCdF6J',
					lists: [ PerkList.Interpersonal, PerkList.Lore, PerkList.Supernatural ]
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'KFi7rVE3i9lrpXic',
						name: 'Прожектор',
						description: 'Глядачі стежать, тож краще дайте їм шоу.',
						type: FactoryLogic.type.createNoAction(),
						keywords: [ AbilityKeyword.Area, AbilityKeyword.Magic, AbilityKeyword.Performance ],
						distance: [ FactoryLogic.distance.create({ type: AbilityDistanceType.Aura, value: 5 }) ],
						target: 'На себе і кожного союзника в зоні впливу',
						sections: [
							FactoryLogic.createAbilitySectionText('Поки цей виступ активний, кожен цільовий об’єкт, який починає свій хід у зоні, отримує 1 героїчний ресурс. Цей ресурс зникає наприкінці ходу цілі, якщо його не витрачено.')
						]
					})
				})
			]
		},
		{
			level: 7,
			features: [
				FactoryLogic.feature.createCharacteristicBonus({
					id: 'grnE5hFyVyLylxC2',
					characteristic: Characteristic.Might,
					value: 1
				}),
				FactoryLogic.feature.createCharacteristicBonus({
					id: 'LNpO0wUO8Eevov6c',
					characteristic: Characteristic.Agility,
					value: 1
				}),
				FactoryLogic.feature.createCharacteristicBonus({
					id: 'JszVRV1fs7lyz7yF',
					characteristic: Characteristic.Reason,
					value: 1
				}),
				FactoryLogic.feature.createCharacteristicBonus({
					id: 'u8XAyI9vpwIPsJXi',
					characteristic: Characteristic.Intuition,
					value: 1
				}),
				FactoryLogic.feature.createCharacteristicBonus({
					id: 'cuvMsaNuv1KvGvUF',
					characteristic: Characteristic.Presence,
					value: 1
				}),
				FactoryLogic.feature.create({
					id: 'HRzXpQyzYdOU4f3r',
					name: 'Equal Billing',
					description: `Ви можете використати особливість "Партнер по сцені", щоб створити зв'язок із героєм-однодумцем замість NPC, з яким взаємодієте через випробування. Якщо ви створюєте зв'язок із новим героєм, попередній зв'язок із героєм втрачається.

Крім того, ви та істоти, з якими у вас є зв'язок, отримуєте +1 до рят. кидків. Коли ви або пов'язана істота успішно проходите рят. кидок, ви та всі пов'язані з вами істоти отримуєте тимчасову Витривалість, рівну вашому рівню.`
				}),
				FactoryLogic.feature.createHeroicResourceGain({
					id: 'JRIAGwr5xwIXZdG5',
					name: 'A Muse’s Muse',
					tag: 'start 2',
					trigger: 'Start of your turn',
					value: '1d3 + 1',
					replacesTags: [ 'start' ]
				}),
				FactoryLogic.feature.createSkillChoice({
					id: 'A7CsaTimMURrXg0M',
					listOptions: [ SkillList.Crafting, SkillList.Exploration, SkillList.Interpersonal, SkillList.Intrigue, SkillList.Lore ]
				})
			]
		},
		{
			level: 8,
			features: [
				FactoryLogic.feature.createPerk({
					id: 'rm84D6UDOw6SNSVm'
				}),
				FactoryLogic.feature.createClassAbilityChoice({
					id: 'wAOl8UZ3VTUdA67Z',
					cost: 11
				})
			]
		},
		{
			level: 9,
			features: [
				FactoryLogic.feature.create({
					id: 'b4oYpDkEydG3CTOD',
					name: 'Roar of the Crowd',
					description: `Ви отримуєте силу від своєї аудиторії, як близької, так і далекої. Вас не можна налякати, а якщо ви розпластані, можете встати безкоштовним маневром.

Крім того, коли ви витрачаєте Відновлення, ви можете не відновлювати Витривалість, а викликати рев невидимої аплодуючої публіки. Ви та кожен союзник у межах 3 клітинок отримуєте тимчасову Витривалість, рівну 10 + кількість активних зв'язків із "Партнер по сцені" + або ваші Перемоги, або кількість гравців у грі (що більше).`
				})
			]
		},
		{
			level: 10,
			features: [
				FactoryLogic.feature.createHeroicResource({
					id: 'GYcwgp374s2e3GiY',
					name: 'Applause',
					gains: [
						{
							tag: '',
							trigger: 'Finish a respite',
							value: 'XP gained'
						}
					]
				}),
				FactoryLogic.feature.createCharacteristicBonus({
					id: 'nkOnWwzyFh2QZOnV',
					characteristic: Characteristic.Agility,
					value: 1
				}),
				FactoryLogic.feature.createCharacteristicBonus({
					id: 'KyTOfWVz1Htc6DAr',
					characteristic: Characteristic.Presence,
					value: 1
				}),
				FactoryLogic.feature.create({
					id: 'SvXvD5JZWWIMcMGv',
					name: 'Dramaturgy',
					description: 'Ви отримуєте 1 додаткову драму або інший героїчний ресурс щоразу, коли використовуєте "Звернення до муз". Крім того, ваші виступи більше не мають обмеження по дистанції й можуть впливати на будь-яку ціль на карті зустрічі в межах вашої лінії ефекту.'
				}),
				FactoryLogic.feature.create({
					id: 'kN2tUhuHAbfRxOM3',
					name: 'Greatest of All Time',
					description: 'Щоразу, коли ви досягаєте успіху у випробуванні, кожен NPC у межах вашої лінії ефекту знижує свій показник Враження на 4 під час переговорів (але не нижче 1), а кожен союзник у межах 3 клітинок отримує перевагу на наступному випробуванні. Ці ефекти тривають до початку вашого наступного відпочинку.'
				}),
				FactoryLogic.feature.createPerk({
					id: 'MJlch8xy0BmtjEAz',
					lists: [ PerkList.Interpersonal, PerkList.Lore, PerkList.Supernatural ]
				}),
				FactoryLogic.feature.createSkillChoice({
					id: 'gIVmDrETVg4F0eTC',
					listOptions: [ SkillList.Crafting, SkillList.Exploration, SkillList.Interpersonal, SkillList.Intrigue, SkillList.Lore ]
				})
			]
		}
	],
	abilities: [
		FactoryLogic.createAbility({
			id: 'gEzZJ1hBo5YTQZVL',
			name: 'Мистецький фінт',
			description: 'А вони казали, що фехтування — марна справа!',
			type: FactoryLogic.type.createMain(),
			keywords: [ AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon ],
			distance: [ FactoryLogic.distance.createMelee() ],
			target: 'Two creatures or objects',
			cost: 'signature',
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [ Characteristic.Agility ],
						tier1: '2 шкоди',
						tier2: '5 шкоди',
						tier3: '7 шкоди'
					})
				),
				FactoryLogic.createAbilitySectionText('Ви можете зміститися до 3 клітинок.'),
				FactoryLogic.createAbilitySectionSpend({
					value: 2,
					repeatable: true,
					effect: 'You can target one additional creature or object for every 2 drama spent.'
				})
			]
		}),
		FactoryLogic.createAbility({
			id: 'aiH7V95hu1z7bvnJ',
			name: 'Різкий сарказм',
			description: 'Ось ви, випромінюєте свою звичну харизму.',
			type: FactoryLogic.type.createMain(),
			keywords: [ AbilityKeyword.Magic, AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon ],
			distance: [ FactoryLogic.distance.createRanged(10) ],
			target: 'One creature',
			cost: 'signature',
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [ Characteristic.Presence ],
						tier1: '2 + П психічної шкоди; П < [weak], кровотеча (рят. кидок закінчує)',
						tier2: '5 + П психічної шкоди; П < [average], кровотеча (рят. кидок закінчує)',
						tier3: '7 + П психічної шкоди; П < [strong], кровотеча (рят. кидок закінчує)'
					})
				)
			]
		}),
		FactoryLogic.createAbility({
			id: 'Dq8W50f8RkS1gCZR',
			name: 'Провокатор',
			description: 'Це не я! Що?',
			type: FactoryLogic.type.createMain(),
			keywords: [ AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon ],
			distance: [ FactoryLogic.distance.createMelee() ],
			target: 'One creature',
			cost: 'signature',
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [ Characteristic.Presence ],
						tier1: '3 + П шкоди',
						tier2: '6 + П шкоди',
						tier3: '9 + П шкоди'
					})
				),
				FactoryLogic.createAbilitySectionText('Ціль провокується вами або союзником поруч із вами до кінця наступного ходу цієї цілі.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'oklqgAHvGNBYvZ6Y',
			name: 'Дотепна перепалка',
			description: 'Ліричний (і фізичний) випад ображає ворога й надихає союзника.',
			type: FactoryLogic.type.createMain(),
			keywords: [ AbilityKeyword.Magic, AbilityKeyword.Melee, AbilityKeyword.Ranged, AbilityKeyword.Strike ],
			distance: [
				FactoryLogic.distance.createMelee(),
				FactoryLogic.distance.createRanged(5)
			],
			target: 'One creature',
			cost: 'signature',
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [ Characteristic.Presence ],
						tier1: '4 + П психічної шкоди',
						tier2: '5 + П психічної шкоди',
						tier3: '7 + П психічної шкоди'
					})
				),
				FactoryLogic.createAbilitySectionText('Один союзник у межах 10 клітинок може скинути один ефект, який завершується рятувальним кидком або наприкінці його ходу.'),
				FactoryLogic.createAbilitySectionSpend({
					effect: 'The chosen ally can spend a Recovery.'
				})
			]
		}),
		FactoryLogic.createAbility({
			id: 'wuGWNezovUaXNrhz',
			name: 'Суворий критик',
			description: 'Один поганий відгук — і день зіпсовано.',
			type: FactoryLogic.type.createMain(),
			keywords: [ AbilityKeyword.Magic, AbilityKeyword.Melee, AbilityKeyword.Ranged, AbilityKeyword.Strike ],
			distance: [
				FactoryLogic.distance.createMelee(),
				FactoryLogic.distance.createRanged(10)
			],
			target: 'One creature or object',
			cost: 3,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [ Characteristic.Presence ],
						tier1: '7 + П звукової шкоди',
						tier2: '10 + П звукової шкоди',
						tier3: '13 + П звукової шкоди'
					})
				),
				FactoryLogic.createAbilitySectionText('Вперше, коли ціль використовує здатність до початку вашого наступного ходу, усі ефекти від результатів рівнів цієї здатності, окрім шкоди, ігноруються для всіх цілей. Ефекти, які завжди відбуваються незалежно від кидка сили, діють як зазвичай.')
			]
		}),
		FactoryLogic.createAbility({
			id: '48Ek5173XbbcaIuv',
			name: 'Гіпнотичні відтінки',
			description: 'Ви створюєте зачаровуючу ноту, що вражаюче спотворює відчуття.',
			type: FactoryLogic.type.createMain(),
			keywords: [ AbilityKeyword.Area, AbilityKeyword.Magic ],
			distance: [ FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 2 }) ],
			target: 'Each enemy in the area',
			cost: 3,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [ Characteristic.Presence ],
						tier1: 'зсунути на 1; І < [weak], приголомшений (рят. кидок закінчує)',
						tier2: 'зсунути на 1; І < [average], приголомшений (рят. кидок закінчує)',
						tier3: 'зсунути на 2; І < [strong], приголомшений (рят. кидок закінчує)'
					})
				),
				FactoryLogic.createAbilitySectionSpend({
					value: 2,
					repeatable: true,
					effect: 'The size of the burst increases by 1 for every 2 drama spent.'
				})
			]
		}),
		FactoryLogic.createAbility({
			id: 'D27ycyqsuILS0KXt',
			name: 'Швидке переписування',
			description: 'Ви вписуєте у сцену щось неочікуване, що заважає ворогу.',
			type: FactoryLogic.type.createMain(),
			keywords: [ AbilityKeyword.Area, AbilityKeyword.Magic, AbilityKeyword.Ranged ],
			distance: [ FactoryLogic.distance.create({ type: AbilityDistanceType.Cube, value: 3, within: 10 }) ],
			target: 'Each enemy in the area',
			cost: 3,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [ Characteristic.Presence ],
						tier1: '4 шкоди; П < [weak], сповільнений (рят. кидок закінчує)',
						tier2: '5 шкоди; П < [average], сповільнений (рят. кидок закінчує)',
						tier3: '6 шкоди; П < [strong], скутий (рят. кидок закінчує)'
					})
				),
				FactoryLogic.createAbilitySectionText('Ця зона є важкопрохідною для ворогів.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'amyFFfmA2oAoiO8P',
			name: 'Затьмарити',
			description: 'Маневруючи серед натовпу, ви неминуче залишаєте глядачів у передчутті більшого.',
			type: FactoryLogic.type.createManeuver(),
			keywords: [ AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon ],
			distance: [ FactoryLogic.distance.createSelf() ],
			target: 'Self',
			cost: 3,
			sections: [
				FactoryLogic.createAbilitySectionText('Ви зміщуєтеся на свою швидкість. Ви робите один кидок сили, який цілить у кожного ворога, до якого ви наблизилися під час цього зміщення.'),
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [ Characteristic.Agility, Characteristic.Presence ],
						tier1: 'спровокований (до кінця ходу); Л < [weak], розпластаний',
						tier2: 'спровокований (до кінця ходу); Л < [average], розпластаний',
						tier3: 'спровокований (до кінця ходу); Л < [strong], розпластаний і не може встати (до кінця ходу)'
					})
				)
			]
		}),
		FactoryLogic.createAbility({
			id: 'MKhak5HyGbRZdhWy',
			name: 'Драматичний поворот',
			description: 'Подаруйте глядачам несподіванку.',
			type: FactoryLogic.type.createMain(),
			keywords: [ AbilityKeyword.Area, AbilityKeyword.Magic ],
			distance: [ FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 3 }) ],
			target: 'На себе і кожного союзника в зоні впливу',
			cost: 5,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [ Characteristic.Presence ],
						tier1: 'Ціль може зміститися на 1 клітинку і зробити безкоштовний удар.',
						tier2: 'Ціль може зміститися до 2 клітинок і зробити безкоштовний удар з перевагою.',
						tier3: 'Ціль може зміститися до 3 клітинок і зробити безкоштовний удар з перевагою, а потім може витратити Відновлення.'
					})
				)
			]
		}),
		FactoryLogic.createAbility({
			id: 'y4twMNJioffMnTAp',
			name: 'Імітація смерті',
			description: 'О, щасливий кинджал, ось твій піхви!',
			type: FactoryLogic.type.createManeuver(),
			keywords: [ AbilityKeyword.Magic ],
			distance: [ FactoryLogic.distance.createSelf() ],
			target: 'Self',
			cost: 5,
			sections: [
				FactoryLogic.createAbilitySectionText('Ви стаєте невидимим і створюєте магічну ілюзію свого тіла, що падає у вашому місці. Поки ви невидимі, ви отримуєте +3 до швидкості та ігноруєте важкопрохідну місцевість. Ілюзія та невидимість тривають до кінця вашого наступного ходу або поки ілюзію не взаємодіють, ви не отримаєте шкоду чи не використаєте основну дію або маневр.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'wkTaIiJ4JOVGjFkE',
			name: 'Перевернути сценарій',
			description: 'Ви переписуєте події, пояснюючи нові місця, де всі опинилися.',
			type: FactoryLogic.type.createMain(),
			keywords: [ AbilityKeyword.Area, AbilityKeyword.Magic ],
			distance: [ FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 3 }) ],
			target: 'На себе і кожного союзника в зоні впливу',
			cost: 5,
			sections: [
				FactoryLogic.createAbilitySectionText('Кожна ціль може телепортуватися на відстань до 5 клітинок. Будь-яка телепортована ціль, яка була сповільнена, більше не є сповільненою.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'lHLPt6cUuyXcCdb0',
			name: 'Метод акторства',
			description: 'Ваша гра так вражає, що ви самі починаєте вірити у неї.',
			type: FactoryLogic.type.createMain(),
			keywords: [ AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon ],
			distance: [ FactoryLogic.distance.createMelee() ],
			target: 'One creature',
			cost: 5,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [ Characteristic.Agility ],
						tier1: '6 + Л шкоди; П < [weak], ослаблений (рят. кидок закінчує)',
						tier2: '10 + Л шкоди; П < [average], ослаблений (рят. кидок закінчує)',
						tier3: '14 + Л шкоди; П < [strong], ослаблений (рят. кидок закінчує)'
					})
				),
				FactoryLogic.createAbilitySectionText('Ви можете отримати стан Кровотечі (рят. кидок закінчує), щоб завдати цілі додаткових 5 шкоди Скверною.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'BlO52My4D7X4wdVh',
			name: 'Розширені переробки',
			description: 'Ні, це не так. Той ворог був он там!',
			type: FactoryLogic.type.createManeuver(),
			keywords: [ AbilityKeyword.Area, AbilityKeyword.Magic ],
			distance: [ FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 4 }) ],
			target: 'Each enemy in the area',
			cost: 7,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [ Characteristic.Presence ],
						tier1: 'зсунути на 3; П < [weak], цей зсув ігнорує стійкість цілі',
						tier2: 'зсунути на 5; П < [average], цей зсув ігнорує стійкість цілі',
						tier3: 'зсунути на 7; П < [strong], цей зсув ігнорує стійкість цілі'
					})
				),
				FactoryLogic.createAbilitySectionText('Замість того, щоб зсунути ціль, ви можете поміняти їхні місця з іншою ціллю, якщо кожна з них може вміститися у просторі іншої. За допомогою цієї здібності ви не можете зсувати цілі у простір, зайнятий іншими істотами чи об’єктами.')
			]
		}),
		FactoryLogic.createAbility({
			id: '7vm0VdMiqgrZtpcu',
			name: 'Пекельна гавота',
			description: 'Палкий виступ запалює вогонь під ногами ваших союзників.',
			type: FactoryLogic.type.createMain(),
			keywords: [ AbilityKeyword.Area, AbilityKeyword.Magic, AbilityKeyword.Melee, AbilityKeyword.Weapon ],
			distance: [ FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 3 }) ],
			target: 'Each enemy in the area',
			cost: 7,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [ Characteristic.Presence ],
						tier1: '5 вогняної шкоди; Л < [weak], ослаблений (рят. кидок закінчує)',
						tier2: '7 вогняної шкоди; Л < [average], ослаблений (рят. кидок закінчує)',
						tier3: '10 вогняної шкоди; Л < [strong], ослаблений (рят. кидок закінчує)'
					})
				),
				FactoryLogic.createAbilitySectionText('Кожен союзник у цій зоні може зміститися до 2 клітинок.')
			]
		}),
		FactoryLogic.createAbility({
			id: '7vm0VdMiqgrZtpcu2',
			name: 'Зіркове соло',
			description: 'Ваша вистава мандрує і не зупиняється, доки ваша аудиторія не буде повністю вражена.',
			type: FactoryLogic.type.createMain(),
			keywords: [ AbilityKeyword.Magic, AbilityKeyword.Melee, AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon ],
			distance: [
				FactoryLogic.distance.createMelee(),
				FactoryLogic.distance.createRanged(10)
			],
			target: 'One creature or object',
			cost: 7,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [ Characteristic.Presence ],
						tier1: '5 + П шкоди',
						tier2: '8 + П шкоди; штовхнути на 3',
						tier3: '11 + П шкоди; штовхнути на 5'
					})
				),
				FactoryLogic.createAbilitySectionText('Ви можете обрати, щоб ця здібність завдавала звукової шкоди. Крім того, ви можете використовувати цю здібність проти тієї ж цілі протягом наступних 2 раундів бою без витрати Драми.')
			]
		}),
		FactoryLogic.createAbility({
			id: '7vm0VdMiqgrZtpcu3',
			name: 'Нарешті зустрілися',
			description: 'Ви магічно переплітаєте свою долю з іншою істотою — на краще чи на гірше.',
			type: FactoryLogic.type.createManeuver(),
			keywords: [ AbilityKeyword.Magic, AbilityKeyword.Ranged ],
			distance: [ FactoryLogic.distance.createRanged(10) ],
			target: 'One creature',
			cost: 7,
			sections: [
				FactoryLogic.createAbilitySectionText(`
До кінця зустрічі ви та ціль можете націлювати одне одного здібностями, навіть якщо перебуваєте поза дистанцією, причому дистанція цієї здібності замінює дистанцію інших здібностей. Ціль не може бути примусово переміщена здібністю, використаною поза дистанцією таким чином.

Крім того, раз на свій хід ви можете безкоштовно виконати маневр, щоб передати цілі надихаюче або пригнічуюче послання: або надати їй 2 імпульси, або змусити її отримати перешкоду на наступний кидок здібності, який вона зробить до початку вашого наступного ходу.`)
			]
		}),
		FactoryLogic.createAbility({
			id: 'fyx732V0Vlq49a1N',
			name: 'Екшн-герой',
			description: 'Ви володієте зброєю з шаленою швидкістю, змушуючи всіх навколо боротися за своє життя.',
			type: FactoryLogic.type.createMain(),
			keywords: [ AbilityKeyword.Area, AbilityKeyword.Melee, AbilityKeyword.Weapon ],
			distance: [ FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 3 }) ],
			target: 'Each enemy in the area',
			cost: 9,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [ Characteristic.Agility ],
						tier1: '10 шкоди',
						tier2: '14 шкоди',
						tier3: '20 шкоди'
					})
				),
				FactoryLogic.createAbilitySectionText('Якщо ви не завдаєте критичного удару, ця здібність не може знизити Витривалість цілі, яка не є міньйоном, нижче 1.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'HeBr76EpA6RIMDSX',
			name: 'Помилка неперервності',
			description: 'Ваша ціль одночасно опиняється у двох місцях.',
			type: FactoryLogic.type.createManeuver(),
			keywords: [ AbilityKeyword.Magic, AbilityKeyword.Ranged ],
			distance: [ FactoryLogic.distance.createRanged(10) ],
			target: 'One enemy or object',
			cost: 9,
			sections: [
				FactoryLogic.createAbilitySectionText('Ціль розділяється на дві окремі сутності: одна залишається в початковому просторі цілі, інша зʼявляється в незайнятому просторі на ваш вибір у межах дистанції. Якщо ціль — істота, це створює нову істоту під контролем Директора. Кожна сутність має половину початкової Витривалості цілі, є ослабленою і отримує 1d6 шкоди Скверною на початку кожного свого ходу. Якщо будь-яка сутність знижується до 0 Витривалості, інша повертається до вигляду оригінальної сутності й ефект припиняється. Ефект також припиняється, якщо обидві сутності опиняються в одному просторі, спричиняючи їхнє автоматичне злиття та обʼєднання поточної Витривалості.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'Q5GrFFZc8YjRIJjL',
			name: 'Любовна пісня',
			description: 'Ви граєте коротку мелодію, що оселяє вас у серці цілі.',
			type: FactoryLogic.type.createManeuver(),
			keywords: [ AbilityKeyword.Magic, AbilityKeyword.Ranged ],
			distance: [ FactoryLogic.distance.createRanged(10) ],
			target: 'One creature or object',
			cost: 9,
			sections: [
				FactoryLogic.createAbilitySectionText('Ціль отримує 20 тимчасової Витривалості. До кінця зустрічі, коли ціль отримує шкоду, перебуваючи в межах вашої дистанції, ви можете обрати взяти цю шкоду на себе замість цілі.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'ZrTkbAu3EcZ0C6Di',
			name: 'Жвава пісня',
			description: 'Засліпіть їх своїм дотепним паттером, і вони забудуть, де знаходяться.',
			type: FactoryLogic.type.createManeuver(),
			keywords: [ AbilityKeyword.Magic, AbilityKeyword.Ranged ],
			distance: [ FactoryLogic.distance.createRanged(10) ],
			target: 'Special',
			cost: 9,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [ Characteristic.Presence ],
						tier1: 'Один союзник у межах дистанції може зробити свій хід одразу після вашого.',
						tier2: 'Два союзники у межах дистанції можуть зробити свої ходи одразу після вашого в будь-якому порядку.',
						tier3: 'Три союзники у межах дистанції можуть зробити свої ходи одразу після вашого в будь-якому порядку. Один із цих союзників уже міг зробити хід у цьому раунді бою.'
					})
				)
			]
		}),
		FactoryLogic.createAbility({
			id: 'SRHmnFY5rDCiCRuR',
			name: 'Драматичне відкриття',
			description: 'Трохи сценічної хитрості — і там, де стояв ворог, тепер стоїть друг!',
			type: FactoryLogic.type.createManeuver(),
			keywords: [ AbilityKeyword.Magic ],
			distance: [ FactoryLogic.distance.createSelf() ],
			target: 'Self',
			cost: 11,
			sections: [
				FactoryLogic.createAbilitySectionText('До кінця зустрічі, коли ви знижуєте істоту до 0 Витривалості за допомогою здібності, ви можете використати безкоштовну тригерну дію, щоб телепортувати союзника в межах дистанції цієї здібності у простір цієї істоти в потоці пелюсток троянд. Ви або телепортований союзник можуть потім зробити ближній безкоштовний удар.')
			]
		}),
		FactoryLogic.createAbility({
			id: '0rmeKAGMyn9Q6YMf',
			name: 'Потужна балада',
			description: 'Пісня для розбитих сердець огортає ціль і розквітає захисним вінцем із шипів.',
			type: FactoryLogic.type.createManeuver(),
			keywords: [ AbilityKeyword.Magic, AbilityKeyword.Ranged ],
			distance: [ FactoryLogic.distance.createRanged(10) ],
			target: 'Self or one ally',
			cost: 11,
			sections: [
				FactoryLogic.createAbilitySectionText('До кінця зустрічі, коли ціль отримує шкоду, будучи захеканою, вона може використати безкоштовну тригерну дію, щоб завдати джерелу цієї шкоди половину отриманої шкоди.')
			]
		}),
		FactoryLogic.createAbility({
			id: '2XIhjJCLHQuNte5I',
			name: 'Врятовано в монтажі',
			description: 'Ви вигукуєте слово сили, що дозволяє переписати реальність на свій розсуд.',
			type: FactoryLogic.type.createManeuver(),
			keywords: [ AbilityKeyword.Magic ],
			distance: [ FactoryLogic.distance.createSelf() ],
			target: 'Self',
			cost: 11,
			sections: [
				FactoryLogic.createAbilitySectionText(`**Ефект** До кінця зустрічі, щоразу, коли ви завдаєте кидкову шкоду істоті чи об'єкту або дозволяєте істоті витратити Відновлення, ви можете безкоштовною тригерною дією надати цій істоті чи об'єкту один із наступних ефектів до початку вашого наступного ходу. Якщо ця здібність спрацьовує через те, що кілька цілей одночасно отримують шкоду або кілька істот одночасно витрачають Відновлення, кожна ціль отримує той самий ефект:
* Ціль має вразливість до шкоди, що дорівнює вашому показнику Присутності, проти будь-якої магічної, псіонічної чи збройної здібності.
* Ціль має імунітет до шкоди, що дорівнює вашому показнику Присутності.
* Ціль отримує бонус до стійкості та штраф до швидкості, що дорівнюють вашому показнику Присутності.
* Ціль отримує бонус до швидкості та штраф до стійкості, що дорівнюють вашому показнику Присутності.`)
			]
		}),
		FactoryLogic.createAbility({
			id: 'zrzbOjJnBZb8eWUQ',
			name: 'Шоу має продовжуватися',
			description: 'Ви спрямовуєте яскраве світло на гравців на сцені й змушуєте їх завершити виставу.',
			type: FactoryLogic.type.createManeuver(),
			keywords: [ AbilityKeyword.Area, AbilityKeyword.Magic, AbilityKeyword.Ranged ],
			distance: [ FactoryLogic.distance.create({ type: AbilityDistanceType.Cube, value: 5, within: 10 }) ],
			target: 'Each enemy in the area',
			cost: 11,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [ Characteristic.Presence ],
						tier1: '6 шкоди; П < [weak], ціль не може добровільно залишити зону (до кінця ходу)',
						tier2: '8 шкоди; П < [average], ціль не може добровільно залишити зону (рят. кидок закінчує)',
						tier3: '12 шкоди; ціль не може добровільно залишити зону (до кінця ходу); якщо П < [strong], вона не може добровільно залишити зону (рят. кидок закінчує)'
					})
				),
				FactoryLogic.createAbilitySectionText('Кожен союзник у межах дистанції не може отримати нижче 2-го рівня результату на наступному випробуванні, яке зробить до початку вашого наступного ходу.')
			]
		})
	],
	subclasses: [
		auteur,
		duelist,
		virtuoso
	],
	level: 1,
	characteristics: []
};
