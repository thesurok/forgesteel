import { AbilityDistanceType } from '@/enums/ability-distance-type';
import { AbilityKeyword } from '@/enums/ability-keyword';
import { Characteristic } from '@/enums/characteristic';
import { FactoryLogic } from '@/logic/factory-logic';
import { MonsterGroup } from '@/models/monster-group';
import { MonsterOrganizationType } from '@/enums/monster-organization-type';
import { StatBlockIcon } from '@/enums/stat-block-icon';

export const ajax: MonsterGroup = {
	id: 'monster-group-ajax',
	name: 'Аякс Непереможний',
	description: 'Він крокує землею, мов один із великих завойовників історії. Поєднання честолюбства, відваги й навчання зробило з нього майстерного тактика, який командує величезною армією, збирає незліченні безцінні скарби, і йому ніхто не стає на заваді.',
	picture: null,
	information: [
		{
			id: 'ajax-info-1',
			name: 'Силою і заслугами',
			description: `
Аякс Непереможний заслужив свій титул. Він закінчив військову академію Капіталу першим у випуску, а тоді негайно розпочав кампанію по всій своїй батьківщині, Федросу. Поруч із ним був його радник Мортум, підступний чарівник, який спрямував Аякса шляхом завоювань імперії Келіан (Caelian), що існувала до них.

Разом Аякс і Мортум підкорювали й вербували селище за селищем, містечко за містечком, місто за містом і територію за територією, майже не зустрічаючи спротиву. Коли їм вдалося повернути Хризополіс, давнє летюче місто небесних ельфів, назад у небо, а їхні звершення буквально піднеслися над країною, більше ніхто не міг ігнорувати їхню міць.`
		},
		{
			id: 'ajax-info-2',
			name: 'Скарбів удосталь',
			description: `Аякс привласнює безліч могутніх скарбів: одні йому дарують в обмін на прихисток, інші він здобуває власноруч. Мантія Королеви-Фенікс, упряж, що викликає крила фенікса. Утгрил-Перемовник, Клинок короля Гол, меч настільки гострий, що може розітнути людську волю навпіл. Рука Кукая, рукавиця, окована нефритом і сповнена могутньої забороненої магії.

Його арсенал величезний і дібраний зі стратегічним розрахунком, щоб доповнити його силу. Мало знайдеться ситуацій, до яких він не підготовлений.`
		},
		{
			id: 'ajax-info-3',
			name: 'Залізний Святий',
			description: 'Хоча деякі з його воїнів уже можуть називати Аякса Залізним Святим, представлена тут версія ще не взяла собі цього титулу. Аякс Непереможний продовжить збирати послідовників, скарби й титули, доки не піднесеться до належного йому стану святого. Завдання героїв - не дати цьому статися.'
		},
		{
			id: 'ajax-info-4',
			name: 'Мови Аякса',
			description: 'Аякс розмовляє мовами Келіан (Caelian), Хігаран (Higaran), Кхурсіріан (Khoursirian), Федран (Phaedran), Ріохан (Riojan), Ванірик (Vaniric) і Васлоріан (Vaslorian).'
		}
	],
	malice: [
		FactoryLogic.feature.createMalice({
			id: 'ajax-malice-1',
			name: 'Розсуд',
			cost: 2,
			icon: StatBlockIcon.Self,
			sections: [
				'Аякс намагається вселити сумнів істоті в межах лінії ефекту за допомогою логіки та розсуду. Ця істота й Аякс виконують зустрічне **випробування Розуму**. Якщо Аякс перемагає, він або завдає 11 додаткової шкоди одній цілі своїм наступним ударом, або отримує додаткову тригерну дію в поточному раунді. Аякс не може використати цю рису проти тієї самої істоти в межах однієї сутички.'
			]
		}),
		FactoryLogic.feature.createMalice({
			id: 'ajax-malice-2',
			name: 'Самоцвіт Нексуса',
			cost: 5,
			icon: StatBlockIcon.SpecialArea,
			sections: [`
До кінця раунду Аякс обирає одне з наведених середовищ, у яких уже побував, і накладає його поверх карти зустрічі, тимчасово зливаючи кілька реальностей.

**Неймовірно високо над землею**: Вітри шаленіють і рвуться. Будь-яка істота, яка не може літати, отримує штраф -3 до стабільності, а ефекти примусового переміщення отримують бонус +3 до дальності проти таких істот.

**Болото**: Земля стає складною місцевістю для ворогів. Будь-яка істота, яка починає й завершує свій хід у тій самій клітинці, стає скутою (рят. кидок закінчує).

**Вулканічний каньйон**: Повітря задушливо гаряче. Кожен ворог отримує 5 вогняної шкоди за кожну клітинку, у яку входить.` ]
		}),
		FactoryLogic.feature.createMalice({
			id: 'ajax-malice-3',
			name: 'Дія одинака',
			cost: 5,
			icon: StatBlockIcon.Villain,
			sections: [
				'Аякс отримує додаткову основну дію у свій хід. Він може використати цю рису, навіть якщо приголомшений.'
			]
		}),
		FactoryLogic.feature.createMaliceAbility({
			ability: FactoryLogic.createAbility({
				id: 'ajax-malice-4',
				name: 'Клинки наголо',
				type: FactoryLogic.type.createMain(),
				cost: 10,
				keywords: [AbilityKeyword.Area, AbilityKeyword.Magic, AbilityKeyword.Ranged, AbilityKeyword.Weapon],
				distance: [FactoryLogic.distance.createSpecial('Чотири куби 3 у межах 10')],
				target: 'Кожна ціль виконує випробування, використовуючи свою найвищу характеристику.',
				sections: [
					FactoryLogic.createAbilitySectionRoll(
						FactoryLogic.createPowerRoll({
							characteristic: [Characteristic.Agility, Characteristic.Intuition, Characteristic.Might, Characteristic.Presence, Characteristic.Reason],
							tier1: '26 шкоди; кровотеча і сповільнений (рят. кидок закінчує)',
							tier2: '22 шкоди; кровотеча (рят. кидок закінчує)',
							tier3: '16 шкоди'
						})
					),
					FactoryLogic.createAbilitySectionText('Потім Аякс здіймає над головою свій Клинок короля Гол, і з землі виринають чотири велетенські клинки, заповнюючи зону. Після розвʼязання кидка сили кожну ціль переміщують у незайняту клітинку поруч із зоною. Кожен клинок блокує лінію ефекту, і Аякс може розсіяти їх за власним бажанням (дія не потрібна).')
				]
			})
		})
	],
	monsters: [
		FactoryLogic.createMonster({
			id: 'ajax-1',
			name: 'Аякс Непереможний',
			level: 11,
			role: FactoryLogic.createMonsterRole(MonsterOrganizationType.Solo),
			keywords: ['Human', 'Humanoid'],
			encounterValue: 156,
			size: FactoryLogic.createSize(1, 'L'),
			speed: FactoryLogic.createSpeed(7, 'політ, зависання'),
			stamina: 700,
			stability: 2,
			freeStrikeDamage: 11,
			characteristics: FactoryLogic.createCharacteristics(5, 4, 5, 5, 4),
			features: [
				FactoryLogic.feature.create({
					id: 'ajax-1-feature-1',
					name: 'Аякс',
					description: `
- **Ходи Аякса**: Аякс здійснює до трьох ходів щораунду. Він не може здійснювати ходи підряд. Крім того, поки він не приголомшений, у раунд може використовувати три тригерні дії.
- **Завершення ефекту**: Наприкінці кожного свого ходу Аякс може отримати 20 шкоди, щоб завершити до двох ефектів на собі, які можна завершити рят. кидком. Цю шкоду не можна зменшити жодним способом.`
				}),
				FactoryLogic.feature.create({
					id: 'ajax-1-feature-2',
					name: 'Тактична стійка',
					description: `На початку кожного раунду Аякс обирає нову стійку з наведених варіантів і отримує її переваги:
- **Повстанець** Аякс автоматично вважає свій початковий кидок сили за 17. Він усе ще може кинути кубики, щоб зʼясувати, чи завдає критичного удару.
- **Майстер стратегії** Перед використанням здібності Аякс може або зміститися на 2 клітинки, або змусити одну істоту в межах лінії ефекту зсунутися на 2 клітинки, ігноруючи стабільність.
- **Авангард** Аякс має імунітет до шкоди 5. Крім того, будь-який ворог, чий кидок сили включає Аякса як ціль, отримує на цей кидок подвійну шкоду.`
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'ajax-1-feature-3',
						name: 'Клинок короля Гол',
						type: FactoryLogic.type.createMain(),
						cost: 'signature',
						keywords: [AbilityKeyword.Charge, AbilityKeyword.Magic, AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [FactoryLogic.distance.createMelee()],
						target: 'Дві істоти або предмети',
						sections: [
							FactoryLogic.createAbilitySectionRoll(
								FactoryLogic.createPowerRoll({
									bonus: 5,
									tier1: '16 шкоди; С < 4 ціль втрачає 1d3 Відновлень',
									tier2: '22 шкоди; С < 5 ціль втрачає 1d3 Відновлень',
									tier3: '26 шкоди; С < 6 розпластаний і ціль втрачає 1d3 Відновлень'
								})
							),
							FactoryLogic.createAbilitySectionText('Аякс зміщується на 2 клітинки між ударами по кожній цілі.'),
							FactoryLogic.createAbilitySectionSpend({
								repeatable: true,
								effect: 'Аякс може вразити ще одну ціль за кожну витрачену Злобу.'
							})
						]
					})
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'ajax-1-feature-4',
						name: 'Указ нефритової руки',
						type: FactoryLogic.type.createMain(),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Magic, AbilityKeyword.Ranged],
						distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Cube, value: 3, within: 10 })],
						target: 'Кожен ворог та обʼєкт у зоні',
						sections: [
							FactoryLogic.createAbilitySectionRoll(
								FactoryLogic.createPowerRoll({
									bonus: 5,
									tier1: '11 священної шкоди; П < 4 ціль проклята (рят. кидок закінчує)',
									tier2: '17 священної шкоди; П < 5 ціль проклята (рят. кидок закінчує)',
									tier3: '21 священної шкоди; П < 6 ціль проклята (рят. кидок закінчує)'
								})
							),
							FactoryLogic.createAbilitySectionText('Проклята ціль світиться зеленим, а вартість кожної її героїчної здібності зростає на 2.'),
							FactoryLogic.createAbilitySectionSpend({
								value: 3,
								effect: 'Потужність зростає на 1. Крім того, земля під зоною просідає на 3 клітинки й стає складною місцевістю. Кожна летюча ціль, що має <code>С < 5</code>, стає розпластаною.'
							})
						]
					})
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'ajax-1-feature-5',
						name: 'Божественна лоза',
						type: FactoryLogic.type.createManeuver(),
						keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged, AbilityKeyword.Weapon],
						distance: [FactoryLogic.distance.createRanged(5)],
						target: 'Одна істота або предмет',
						sections: [
							FactoryLogic.createAbilitySectionRoll(
								FactoryLogic.createPowerRoll({
									bonus: 5,
									tier1: 'Без ефекту.',
									tier2: 'Ціль схоплена.',
									tier3: '11 шкоди; ціль схоплена.'
								})
							),
							FactoryLogic.createAbilitySectionText('Якщо ціль схоплена, Аякс може залишити лозу витягнутою, притягнути ціль до себе або підтягнутися до цілі сам. Лоза лишається прикріпленою до схопленої цілі, доки та не отримає шкоди від удару, не вирветься із захвату або доки Аякс не змусить лозу відпустити ціль (дія не потрібна).'),
							FactoryLogic.createAbilitySectionText('**Особливе:** Цю здібність можна замінити рисами іншого скарбу, який здобув Аякс.')
						]
					})
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'ajax-1-feature-6',
						name: 'Пекельна намистина',
						type: FactoryLogic.type.createManeuver(),
						cost: 2,
						keywords: [AbilityKeyword.Area, AbilityKeyword.Magic, AbilityKeyword.Ranged],
						distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Cube, value: 5, within: 20 })],
						target: '',
						sections: [
							FactoryLogic.createAbilitySectionText('Аякс кидає сяйливу намистину в клітинку в межах дистанції. Вона спалахує на початку наступного ходу Аякса й створює навколо себе зону, що триває до початку його подальшого ходу. Кожен ворог у цій зоні в момент спалаху отримує 20 вогняної шкоди, а якщо має <code>Л < 5</code>, стає приголомшеним (рят. кидок закінчує). Будь-який ворог, який починає свій хід у зоні, отримує 10 вогняної шкоди.')
						]
					})
				}),
				FactoryLogic.feature.create({
					id: 'ajax-1-feature-7',
					name: 'Я ще не закінчив.',
					description: 'Аякс помирає лише тоді, коли його Витривалість досягає -350. Поки його Витривалість нижча за 0, Аякс має кровотечу, щораунду може обирати будь-які дві опції зі своєї риси "Тактична стійка", а Директор отримує 2 додаткові Злоби.'
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'ajax-1-feature-8',
						name: 'Цього тебе навчили?',
						type: FactoryLogic.type.createTrigger('Істота в межах дистанції позначає Аякса.'),
						keywords: [AbilityKeyword.Ranged],
						distance: [FactoryLogic.distance.createRanged(10)],
						target: 'Істота, яка стала тригером',
						sections: [
							FactoryLogic.createAbilitySectionText('Ціль позначена, доки позначений Аякс. Поки ціль позначена таким чином, Аякс має перевагу на кидки сили проти неї, а коли ціль використовує тригерну дію, повʼязану зі своєю міткою на Аяксі, він може зробити проти неї вільний удар.')
						]
					})
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'ajax-1-feature-9',
						name: 'Талісман руйнівника щитів',
						type: FactoryLogic.type.createTrigger('Ворог у межах дистанції використовує здібність, щоб зменшити шкоду.'),
						keywords: [AbilityKeyword.Magic, AbilityKeyword.Melee],
						distance: [FactoryLogic.distance.createMelee(5)],
						target: 'Істота, яка стала тригером',
						sections: [
							FactoryLogic.createAbilitySectionText('Аякс робить вільний удар по цілі й завдає додаткової шкоди, що дорівнює подвоєній величині зменшеної шкоди. Цю додаткову шкоду не можна зменшити жодним способом.')
						]
					})
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'ajax-1-feature-10',
						name: 'Хто тут вагається?',
						type: FactoryLogic.type.createTrigger('Істота використовує здібність «Вагання - слабкість».'),
						distance: [FactoryLogic.distance.createSelf()],
						target: 'Себе',
						sections: [
							FactoryLogic.createAbilitySectionText('Аякс зміщується на відстань до своєї швидкості й може зробити вільний удар. Якщо ціль має <code>Р < 4</code>, цей вільний удар також ослаблює її до кінця її наступного ходу.')
						]
					})
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'ajax-1-feature-11',
						name: 'Твоя одержимість мною тебе видає',
						type: FactoryLogic.type.createTrigger('Аякс змушує істоту в межах дистанції отримати Лють або Гнів.'),
						keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged],
						distance: [FactoryLogic.distance.createRanged(10)],
						target: 'Істота, яка стала тригером',
						sections: [
							FactoryLogic.createAbilitySectionText('Якщо ціль має <code>І < 4</code>, вона використовує сигнатурну здібність проти цілі за вибором Аякса.')
						]
					})
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'ajax-1-feature-12',
						name: 'Ти змарнуєш свій наступ?',
						type: FactoryLogic.type.createTrigger('Істота в межах 10 клітинок відновлює Витривалість.'),
						keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged],
						distance: [FactoryLogic.distance.createSelf()],
						target: 'Себе',
						sections: [
							FactoryLogic.createAbilitySectionText('Аякс відновлює стільки ж Витривалості.')
						]
					})
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'ajax-1-feature-13',
						name: 'Владика феніксових крил',
						type: FactoryLogic.type.createVillainAction(1),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Magic, AbilityKeyword.Weapon],
						distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 5 })],
						target: 'Кожен ворог у зоні',
						sections: [
							FactoryLogic.createAbilitySectionRoll(
								FactoryLogic.createPowerRoll({
									bonus: 5,
									tier1: '11 вогняної шкоди; Л < 4 ослаблений (рят. кидок закінчує)',
									tier2: '17 вогняної шкоди; Л < 5 ослаблений (рят. кидок закінчує)',
									tier3: '21 вогняної шкоди; Л < 6 ослаблений (рят. кидок закінчує)'
								})
							),
							FactoryLogic.createAbilitySectionText('Аякс летить із шаленою швидкістю, прорізаючи кожну ціль, а потім зʼявляється в незайнятій клітинці в межах дистанції.')
						]
					})
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'ajax-1-feature-14',
						name: 'Я вивчив їхні хитрощі',
						type: FactoryLogic.type.createVillainAction(2),
						keywords: [AbilityKeyword.Area],
						distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 3 })],
						target: 'Кожен ворог у зоні',
						sections: [
							FactoryLogic.createAbilitySectionText('Аякс використовує техніку екліпса тіньових ельфів, щоб зменшити сплески кожної цілі до 0. Крім того, до кінця раунду Аякс ігнорує перевагу й подвійну перевагу на здібностях будь-якої цілі, а також ігнорує всі додаткові ефекти, що не завдають шкоди, у здібностях цілей, які завдають шкоди.'),
							FactoryLogic.createAbilitySectionText('**Особливе:** Цю дію лиходія можна замінити дією лиходія істоти, з якою будь-яка ціль уже стикалася раніше.')
						]
					})
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'ajax-1-feature-15',
						name: 'Трепет перед Залізною Короною',
						type: FactoryLogic.type.createVillainAction(3),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
						distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 7 })],
						target: 'Кожен ворог у зоні',
						sections: [
							FactoryLogic.createAbilitySectionText('Кожна ціль, що має <code>І < 5</code>, стає розпластаною і не може встати, доки Аякс не завдасть їй шкоди. За кожну ціль, яка не стала розпластаною, Аякс може переміститися на відстань до своєї швидкості в її бік і використати проти неї «Клинок короля Гол».')
						]
					})
				})
			]
		}),
		FactoryLogic.createMonster({
			id: 'ajax-2',
			name: 'Аякс Полководець',
			level: 11,
			role: FactoryLogic.createMonsterRole(MonsterOrganizationType.Leader),
			keywords: ['Human', 'Humanoid'],
			encounterValue: 52,
			size: FactoryLogic.createSize(1, 'L'),
			speed: FactoryLogic.createSpeed(7, 'політ, зависання'),
			stamina: 280,
			stability: 2,
			freeStrikeDamage: 11,
			characteristics: FactoryLogic.createCharacteristics(5, 4, 5, 5, 4),
			features: [
				FactoryLogic.feature.create({
					id: 'ajax-2-feature-1',
					name: 'Тактична стійка',
					description: `На початку кожного раунду Аякс обирає нову стійку з наведених варіантів і отримує її переваги:
- **Повстанець** Аякс автоматично вважає свій початковий кидок сили за 17. Він усе ще може кинути кубики, щоб зʼясувати, чи завдає критичного удару.
- **Майстер стратегії** Перед використанням здібності Аякс може або зміститися на 2 клітинки, або змусити одну істоту в межах лінії ефекту зсунутися на 2 клітинки, ігноруючи стабільність.
- **Авангард** Аякс має імунітет до шкоди 5. Крім того, будь-який ворог, чий кидок сили включає Аякса як ціль, отримує на цей кидок подвійну шкоду.`
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'ajax-2-feature-2',
						name: 'Клинок короля Гол',
						type: FactoryLogic.type.createMain(),
						cost: 'signature',
						keywords: [AbilityKeyword.Charge, AbilityKeyword.Magic, AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [FactoryLogic.distance.createMelee()],
						target: 'Дві істоти або предмети',
						sections: [
							FactoryLogic.createAbilitySectionRoll(
								FactoryLogic.createPowerRoll({
									bonus: 5,
									tier1: '16 шкоди; С < 4 ціль втрачає 1d3 Відновлень',
									tier2: '22 шкоди; С < 5 ціль втрачає 1d3 Відновлень',
									tier3: '26 шкоди; С < 6 розпластаний і ціль втрачає 1d3 Відновлень'
								})
							),
							FactoryLogic.createAbilitySectionText('Аякс зміщується на 2 клітинки між ударами по кожній цілі.'),
							FactoryLogic.createAbilitySectionSpend({
								repeatable: true,
								effect: 'Аякс може вразити ще одну ціль за кожну витрачену Злобу.'
							})
						]
					})
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'ajax-2-feature-3',
						name: 'Указ нефритової руки',
						type: FactoryLogic.type.createMain(),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Magic, AbilityKeyword.Ranged],
						distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Cube, value: 3, within: 10 })],
						target: 'Кожен ворог та обʼєкт у зоні',
						sections: [
							FactoryLogic.createAbilitySectionRoll(
								FactoryLogic.createPowerRoll({
									bonus: 5,
									tier1: '11 священної шкоди; П < 4 ціль проклята (рят. кидок закінчує)',
									tier2: '17 священної шкоди; П < 5 ціль проклята (рят. кидок закінчує)',
									tier3: '21 священної шкоди; П < 6 ціль проклята (рят. кидок закінчує)'
								})
							),
							FactoryLogic.createAbilitySectionText('Проклята ціль світиться зеленим, а вартість кожної її героїчної здібності зростає на 2.'),
							FactoryLogic.createAbilitySectionSpend({
								value: 3,
								effect: 'Потужність зростає на 1. Крім того, земля під зоною просідає на 3 клітинки й стає складною місцевістю. Кожна летюча ціль, що має <code>С < 5</code>, стає розпластаною.'
							})
						]
					})
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'ajax-2-feature-4',
						name: 'Добийте їх',
						type: FactoryLogic.type.createManeuver(),
						distance: [FactoryLogic.distance.createRanged(10)],
						target: 'Два союзники',
						sections: [
							FactoryLogic.createAbilitySectionText('Кожен союзник може переміститися на відстань до своєї швидкості й використати сигнатурну здібність.')
						]
					})
				}),
				FactoryLogic.feature.create({
					id: 'ajax-2-feature-5',
					name: 'Я ще не закінчив.',
					description: 'Аякс помирає лише тоді, коли його Витривалість досягає -140. Поки його Витривалість нижча за 0, Аякс має кровотечу, щораунду може обирати будь-які дві опції зі своєї риси "Тактична стійка", а Директор отримує 2 додаткові Злоби.'
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'ajax-2-feature-6',
						name: 'Цього тебе навчили?',
						type: FactoryLogic.type.createTrigger('Істота в межах дистанції позначає Аякса.'),
						keywords: [AbilityKeyword.Ranged],
						distance: [FactoryLogic.distance.createRanged(10)],
						target: 'Істота, яка стала тригером',
						sections: [
							FactoryLogic.createAbilitySectionText('Ціль позначена, доки позначений Аякс. Поки ціль позначена таким чином, Аякс має перевагу на кидки сили проти неї, а коли ціль використовує тригерну дію, повʼязану зі своєю міткою на Аяксі, він може зробити проти неї вільний удар.')
						]
					})
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'ajax-2-feature-7',
						name: 'Талісман руйнівника щитів',
						type: FactoryLogic.type.createTrigger('Ворог у межах дистанції використовує здібність, щоб зменшити шкоду.'),
						keywords: [AbilityKeyword.Magic, AbilityKeyword.Melee],
						distance: [FactoryLogic.distance.createMelee(5)],
						target: 'Істота, яка стала тригером',
						sections: [
							FactoryLogic.createAbilitySectionText('Аякс робить вільний удар по цілі й завдає додаткової шкоди, що дорівнює подвоєній величині зменшеної шкоди. Цю додаткову шкоду не можна зменшити жодним способом.')
						]
					})
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'ajax-2-feature-8',
						name: 'Хто тут вагається?',
						type: FactoryLogic.type.createTrigger('Істота використовує здібність «Вагання - слабкість».'),
						distance: [FactoryLogic.distance.createSelf()],
						target: 'Себе',
						sections: [
							FactoryLogic.createAbilitySectionText('Аякс зміщується на відстань до своєї швидкості й може зробити вільний удар. Якщо ціль має <code>Р < 4</code>, цей вільний удар також ослаблює її до кінця її наступного ходу.')
						]
					})
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'ajax-2-feature-9',
						name: 'Твоя одержимість мною тебе видає',
						type: FactoryLogic.type.createTrigger('Аякс змушує істоту в межах дистанції отримати Лють або Гнів.'),
						keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged],
						distance: [FactoryLogic.distance.createRanged(10)],
						target: 'Істота, яка стала тригером',
						sections: [
							FactoryLogic.createAbilitySectionText('Якщо ціль має <code>І < 4</code>, вона використовує сигнатурну здібність проти цілі за вибором Аякса.')
						]
					})
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'ajax-2-feature-10',
						name: 'Ти змарнуєш свій наступ?',
						type: FactoryLogic.type.createTrigger('Істота в межах 10 клітинок відновлює Витривалість.'),
						keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged],
						distance: [FactoryLogic.distance.createSelf()],
						target: 'Себе',
						sections: [
							FactoryLogic.createAbilitySectionText('Аякс відновлює стільки ж Витривалості.')
						]
					})
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'ajax-2-feature-11',
						name: 'Владика феніксових крил',
						type: FactoryLogic.type.createVillainAction(1),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Magic, AbilityKeyword.Weapon],
						distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 5 })],
						target: 'Кожен ворог у зоні',
						sections: [
							FactoryLogic.createAbilitySectionRoll(
								FactoryLogic.createPowerRoll({
									bonus: 5,
									tier1: '11 вогняної шкоди; Л < 4 ослаблений (рят. кидок закінчує)',
									tier2: '17 вогняної шкоди; Л < 5 ослаблений (рят. кидок закінчує)',
									tier3: '21 вогняної шкоди; Л < 6 ослаблений (рят. кидок закінчує)'
								})
							),
							FactoryLogic.createAbilitySectionText('Аякс летить із шаленою швидкістю, прорізаючи кожну ціль, а потім зʼявляється в незайнятій клітинці в межах дистанції.')
						]
					})
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'ajax-2-feature-12',
						name: 'Я вивчив їхні хитрощі',
						type: FactoryLogic.type.createVillainAction(2),
						distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 3 })],
						target: 'Кожен ворог у зоні',
						sections: [
							FactoryLogic.createAbilitySectionText('Аякс використовує техніку екліпса тіньових ельфів, щоб зменшити сплески кожної цілі до 0. Крім того, до кінця раунду Аякс ігнорує перевагу й подвійну перевагу на здібностях будь-якої цілі, а також ігнорує всі додаткові ефекти, що не завдають шкоди, у здібностях цілей, які завдають шкоди.'),
							FactoryLogic.createAbilitySectionText('**Особливе:** Цю дію лиходія можна замінити дією лиходія істоти, з якою будь-яка ціль уже стикалася раніше.')
						]
					})
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'ajax-2-feature-13',
						name: 'Трепет перед Залізною Короною',
						type: FactoryLogic.type.createVillainAction(3),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
						distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 7 })],
						target: 'Кожен ворог у зоні',
						sections: [
							FactoryLogic.createAbilitySectionText('Кожна ціль, що має <code>І < 5</code>, стає розпластаною і не може встати, доки Аякс не завдасть їй шкоди. За кожну ціль, яка не стала розпластаною, Аякс може переміститися на відстань до своєї швидкості в її бік і використати проти неї «Клинок короля Гол».')
						]
					})
				})
			]
		})
	],
	addOns: []
};
