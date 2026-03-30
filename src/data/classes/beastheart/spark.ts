import { AbilityDistanceType } from '@/enums/ability-distance-type';
import { AbilityKeyword } from '@/enums/ability-keyword';
import { Characteristic } from '@/enums/characteristic';
import { FactoryLogic } from '@/logic/factory-logic';
import { PerkData } from '@/data/perk-data';
import { SubClass } from '@/models/subclass';

export const spark: SubClass = {
	id: 'beastheart-sub-4',
	name: 'Іскра',
	description: 'Ваш звʼязок із природою наділив вас і вашого компаньйона шаленою магією стихійної бурі. Полумʼя, мороз і блискавка тріщать на ваших руках і пазурах.',
	featuresByLevel: [
		{
			level: 1,
			features: [
				FactoryLogic.feature.createSkillChoice({
					id: 'beastheart-sub-4-1-1',
					selected: ['Магія']
				}),
				FactoryLogic.feature.createPackageContent({
					id: 'beastheart-sub-4-1-2',
					name: 'Перевага дикої природи',
					description: 'Цей удар завдає холодної, вогняної, блискавичної або звукової шкоди. Ви отримуєте сплеск.',
					tag: 'feral-strike'
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'beastheart-sub-4-1-3',
						name: 'Самоспалах',
						description: 'Ви зникаєте в шиплячому спалаху стихійної енергії.',
						type: FactoryLogic.type.createTrigger('Ви отримуєте шкоду.'),
						keywords: [AbilityKeyword.Magic],
						distance: [FactoryLogic.distance.createSelf()],
						target: 'Себе',
						sections: [
							FactoryLogic.createAbilitySectionText('Ви телепортуєтеся на відстань до 5 клітинок і зменшуєте тригерну шкоду вдвічі.'),
							FactoryLogic.createAbilitySectionSpend({
								effect: 'Коли ви телепортуєтеся таким чином, кожен ворог, сусідній із вашим початковим положенням, отримує холодну, вогняну, блискавичну або звукову шкоду, рівну вашому показнику Інтуїції.'
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
					id: 'beastheart-sub-4-2-1a',
					selected: [PerkData.wildsExplorer]
				}),
				FactoryLogic.feature.create({
					id: 'beastheart-sub-4-2-1b',
					name: 'Стихійне ядро',
					description: 'Коли ви або ваш компаньйон завдаєте нетипованої шкоди або холодної, вогняної, блискавичної чи звукової шкоди, ви можете змінити тип цієї шкоди на холодний, вогняний, блискавичний або звуковий.'
				}),
				FactoryLogic.feature.createChoice({
					id: 'beastheart-sub-4-2-2',
					name: 'Здібність іскри',
					options: [
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'beastheart-sub-4-2-2a',
									name: 'Палаючий батіг',
									description: 'Палаючий батіг енергії злітає вперед, обвиває ноги ворога й обпалює його дотла.',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Companion, AbilityKeyword.Magic, AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
									distance: [FactoryLogic.distance.createMelee(2)],
									target: 'Одна істота',
									cost: 5,
									sections: [
										FactoryLogic.createAbilitySectionRoll(
											FactoryLogic.createPowerRoll({
												characteristic: Characteristic.Might,
												tier1: '6 + І вогняної або блискавичної шкоди; С < [слабкий], розпластаний',
												tier2: '9 + І вогняної або блискавичної шкоди; С < [середній], розпластаний',
												tier3: '14 + І вогняної або блискавичної шкоди; С < [сильний], розпластаний і не може встати (до кінця ходу)'
											})
										),
										FactoryLogic.createAbilitySectionSpend({
											effect: 'Якщо ви перебуваєте в межах 2 клітинок від ворога, ви можете використати безкоштовний маневр, щоб вихопити другий батіг і завдати цілі додаткової вогняної або блискавичної шкоди, рівної вашому показнику Інтуїції.'
										})
									]
								})
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'beastheart-sub-4-2-2b',
									name: 'Виючий шквал',
									description: 'Заметіль або гроза зриває ворогів із місця й підхоплює вас, немов пірʼїну.',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Area, AbilityKeyword.Companion, AbilityKeyword.Magic],
									distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Cube, value: 3, within: 5 })],
									target: 'Кожен ворог у зоні',
									cost: 5,
									sections: [
										FactoryLogic.createAbilitySectionRoll(
											FactoryLogic.createPowerRoll({
												characteristic: Characteristic.Might,
												tier1: '6 холодної або звукової шкоди; зсунути на 1',
												tier2: '9 холодної або звукової шкоди; зсунути на 2',
												tier3: '13 холодної або звукової шкоди; зсунути на 4'
											})
										),
										FactoryLogic.createAbilitySectionText('До кінця вашого наступного ходу ви й ваш компаньйон можете літати, а швидкість кожного з вас збільшується на 3.')
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
					id: 'beastheart-sub-4-5-1',
					name: 'Призупинена телепортація',
					description: 'Коли ви або ваш компаньйон телепортуєтеся за допомогою «Самоспалах», ця істота може обрати ненадовго перепочити в затишному закутку Квінтесенції перед появою. Вона вибуває із сутички. На початку вашого наступного ходу вона може витратити Відновлення й зʼявитися в клітинці в межах 5 клітинок від свого початкового положення.'
				})
			]
		},
		{
			level: 6,
			features: [
				FactoryLogic.feature.createChoice({
					id: 'beastheart-sub-4-6-1',
					name: 'Здібність іскри',
					options: [
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'beastheart-sub-4-6-1a',
									name: 'Стихійна форма',
									description: 'Тіло вашого компаньйона стає жаринами, що світяться, павутиною блискавок, хмарою гуркотливого грому або вихором танцюючих крижаних кристалів.',
									type: FactoryLogic.type.createManeuver(),
									keywords: [AbilityKeyword.Companion, AbilityKeyword.Magic],
									distance: [FactoryLogic.distance.createSelf()],
									target: 'Себе',
									cost: 9,
									sections: [
										FactoryLogic.createAbilitySectionText(`
Ваш компаньйон перетворюється на створіння з елементальної енергії. Оберіть тип шкоди: холодна, вогняна, блискавична або звукова. Поки триває перетворення, ваш компаньйон отримує такі переваги:

* Швидкість вашого компаньйона отримує тег польоту. Якщо вона вже мала тег польоту, швидкість збільшується на 2.
* Коли ваш компаньйон уперше за хід входить у простір іншої істоти або завдає істоті шкоди атакою, він завдає їй 5 шкоди обраного типу.
* Ваш компаньйон має імунітет до обраного типу шкоди та імунітет 5 до всієї іншої шкоди.

Перетворення компаньйона триває до початку вашого наступного ходу. На початку кожного ходу ви можете витратити 3 люті, щоб продовжити тривалість перетворення ще на 1 хід. Коли ви це робите, ви можете змінити обраний тип шкоди.`),
										FactoryLogic.createAbilitySectionSpend({
											value: 2,
											effect: 'Ви також перетворюєтеся.'
										})
									]
								})
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'beastheart-sub-4-6-1b',
									name: 'Смертоносний мороз',
									description: 'Чорний іній примерзає чоботи до підлоги й повзе вгору по тілах спійманих жертв, доки вони цілком не вкриваються кригою.',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Area, AbilityKeyword.Companion, AbilityKeyword.Magic],
									distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Cube, value: 5, within: 1 })],
									target: 'Кожен ворог у зоні',
									cost: 9,
									sections: [
										FactoryLogic.createAbilitySectionRoll(
											FactoryLogic.createPowerRoll({
												characteristic: Characteristic.Might,
												tier1: '5 холодної шкоди; І < [слабкий] скутий (рят. кидок закінчує)',
												tier2: '7 холодної шкоди; І < [середній] скутий (рят. кидок закінчує)',
												tier3: '12 холодної шкоди; І < [сильний] скутий (рят. кидок закінчує)'
											})
										),
										FactoryLogic.createAbilitySectionText('Поки істота скута цією здібністю, вона отримує 5 холодної шкоди на початку кожного вашого ходу. Істота, убита цією здібністю, стає крижаною статуєю; її простір є складною місцевістю.')
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
					id: 'beastheart-sub-4-8-1',
					name: 'Крізь полумʼя',
					description: 'Ви обоє отримуєте імунітет 10 до холодної, вогняної, блискавичної та звукової шкоди.'
				})
			]
		},
		{
			level: 9,
			features: [
				FactoryLogic.feature.createChoice({
					id: 'beastheart-sub-4-9-1',
					name: 'Здібність іскри',
					options: [
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'beastheart-sub-4-9-1a',
									name: 'Вознесіння фенікса',
									description: 'Про останній бій вашого компаньйона розповідали б пошепки, якби взагалі лишився хтось, хто міг би це розказати.',
									type: FactoryLogic.type.createTrigger('Після отримання шкоди ваш компаньйон стає мертвим або вмираючим.', { free: true }),
									keywords: [AbilityKeyword.Area, AbilityKeyword.Companion, AbilityKeyword.Magic],
									distance: [FactoryLogic.distance.createSpecial('-')],
									target: '-',
									cost: 11,
									sections: [
										FactoryLogic.createAbilitySectionText('Ваш компаньйон робить кидок сили, який впливає на кожного ворога у вибуху 5.'),
										FactoryLogic.createAbilitySectionRoll(
											FactoryLogic.createPowerRoll({
												characteristic: Characteristic.Might,
												tier1: '20 холодної, вогняної, блискавичної або звукової шкоди',
												tier2: '25 холодної, вогняної, блискавичної або звукової шкоди',
												tier3: '30 холодної, вогняної, блискавичної або звукової шкоди'
											})
										),
										FactoryLogic.createAbilitySectionText('Ваш компаньйон помирає. Якщо ви мертві й перебуваєте в зоні, ви повертаєтеся до життя з 1 Витривалістю. Ви та кожен союзник у зоні можете витратити 1 або 2 Відновлення.')
									]
								})
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'beastheart-sub-4-9-1b',
									name: 'Дике полювання',
									description: 'Ваш компаньйон закликає ненажерливу зграю примарних предків, щоб пожерти ваших ворогів.',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Area, AbilityKeyword.Companion, AbilityKeyword.Magic],
									distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Cube, value: 5, within: 20 })],
									target: 'Кожен ворог у зоні',
									cost: 11,
									sections: [
										FactoryLogic.createAbilitySectionText('Ваш компаньйон закликає область примарних створінь, схожих на нього. Ця область може зʼявлятися в істотах, предметах і місцевості та рухатися крізь них. Після появи вона рухається прямою лінією до вашого компаньйона, доки її центр не збіжиться з центром простору вашого компаньйона, а потім продовжує рухатися прямою лінією, доки не опиниться на відстані до 20 клітинок. Будь-який ворог, який у будь-який момент її руху опиняється всередині цієї області, один раз стає ціллю наступного кидка сили. Тіло будь-якої істоти, убитої цією здібністю, затягується до Первісного Хаосу, щоб його неспішно пожерли.'),
										FactoryLogic.createAbilitySectionRoll(
											FactoryLogic.createPowerRoll({
												characteristic: Characteristic.Might,
												tier1: '9 шкоди',
												tier2: '13 шкоди',
												tier3: '18 шкоди'
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
