import { AbilityDistanceType } from '@/enums/ability-distance-type';
import { AbilityKeyword } from '@/enums/ability-keyword';
import { Characteristic } from '@/enums/characteristic';
import { FactoryLogic } from '@/logic/factory-logic';
import { FeatureField } from '@/enums/feature-field';
import { HeroClass } from '@/models/class';
import { PerkList } from '@/enums/perk-list';
import { SkillList } from '@/enums/skill-list';
import { blackAsh } from '@/data/classes/shadow/black-ash';
import { causticAlchemy } from '@/data/classes/shadow/caustic-alchemy';
import { harlequinMask } from '@/data/classes/shadow/harlequin-mask';

export const shadow: HeroClass = {
	id: 'class-shadow',
	name: 'Тінь',
	description: `
Тонкість — ваше мистецтво, вістря клинка — ваш пензель. Ви навчалися в таємному коледжі, що спеціалізується на алхімії, ілюзіях або магії тіні. Ваше навчання та знання ставлять вас в еліту вбивць, шпигунів і командосів. Але могутніша за будь-яку зброю чи чаклунство — ваша прозорливість у виявленні слабкостей ворогів.

Як Тінь, ви володієте здібностями, що завдають значної шкоди, дозволяють швидко маневрувати на полі бою й уникати небезпек, а також зникати з поля зору навіть у розпал найзапекліших сутичок. Ви також маєте більше навичок, ніж будь-який інший герой.`,
	type: 'standard',
	subclassName: 'Тіньовий коледж',
	subclassCount: 1,
	primaryCharacteristicsOptions: [
		[Characteristic.Agility]
	],
	primaryCharacteristics: [],
	featuresByLevel: [
		{
			level: 1,
			features: [
				FactoryLogic.feature.createBonus({
					id: 'shadow-stamina',
					field: FeatureField.Stamina,
					value: 18,
					valuePerLevel: 6
				}),
				FactoryLogic.feature.createBonus({
					id: 'shadow-recoveries',
					field: FeatureField.Recoveries,
					value: 8
				}),
				FactoryLogic.feature.createHeroicResource({
					id: 'shadow-resource',
					name: 'Прозорливість',
					gains: [
						{
							tag: 'start',
							trigger: 'Початок вашого ходу',
							value: '1d3'
						},
						{
							tag: 'deal-damage',
							trigger: 'Першого разу в кожному раунді бою, коли ви завдаєте шкоди, що включає 1 або більше сплесків',
							value: '1'
						}
					],
					details: `
Коли ви використовуєте героїчну здібність, яка має кидок сили, її вартість зменшується на 1 Прозорливість, якщо у вас є перевага або подвійна перевага щодо неї.

Якщо здібність має кілька цілей, вартість зменшується навіть якщо перевага або подвійна перевага є лише проти однієї цілі.`
				}),
				FactoryLogic.feature.createSkillChoice({
					id: 'shadow-1-1',
					count: 2,
					selected: ['Ховання', 'Крадіжка']
				}),
				FactoryLogic.feature.createSkillChoice({
					id: 'shadow-1-3',
					options: ['Кримінальний світ'],
					listOptions: [SkillList.Exploration, SkillList.Interpersonal, SkillList.Intrigue],
					count: 5
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'shadow-1-5',
						name: 'Вагання — слабкість',
						description: 'Продовжуйте атаку. Ніколи не даруйте їм жодної хвилини пощади.',
						type: FactoryLogic.type.createTrigger('Інший герой завершує свій хід. Той герой не міг використовувати цю здібність для початку свого ходу.', { free: true }),
						distance: [FactoryLogic.distance.createSelf()],
						target: 'Себе',
						cost: 1,
						sections: [
							FactoryLogic.createAbilitySectionText('Ви виконуєте свій хід після героя-ініціатора.')
						]
					})
				}),
				FactoryLogic.feature.createKitChoice({
					id: 'shadow-1-5.5'
				}),
				FactoryLogic.feature.createClassAbilityChoice({
					id: 'shadow-1-6',
					cost: 'signature'
				}),
				FactoryLogic.feature.createClassAbilityChoice({
					id: 'shadow-1-7',
					cost: 3
				}),
				FactoryLogic.feature.createClassAbilityChoice({
					id: 'shadow-1-8',
					cost: 5
				})
			]
		},
		{
			level: 2,
			features: [
				FactoryLogic.feature.createPerk({
					id: 'shadow-2-1',
					lists: [PerkList.Exploration, PerkList.Interpersonal, PerkList.Intrigue]
				})
			]
		},
		{
			level: 3,
			features: [
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'shadow-3-1',
						name: 'Ретельне спостереження',
						description: 'Миті концентрації достатньо, щоб міцно зафіксувати ворога у прицілі.',
						type: FactoryLogic.type.createManeuver(),
						distance: [FactoryLogic.distance.createSpecial('20 squares')],
						target: 'Одна істота',
						sections: [
							FactoryLogic.createAbilitySectionText('Поки ви залишаєтеся в межах дистанції до цілі, підтримуєте лінію ефекту та не вражаєте іншу істоту першою, ви отримуєте сплеск і перевагу на наступний удар по оціненій істоті.')
						]
					})
				}),
				FactoryLogic.feature.createClassAbilityChoice({
					id: 'shadow-3-2',
					cost: 7
				})
			]
		},
		{
			level: 4,
			features: [
				FactoryLogic.feature.createCharacteristicBonus({
					id: 'shadow-4-1a',
					name: 'Підвищення характеристики: Ловкість',
					description: 'Ваш показник Ловкості збільшується до 3',
					characteristic: Characteristic.Agility,
					value: 1
				}),
				FactoryLogic.feature.createChoice({
					id: 'shadow-4-1b',
					name: 'Підвищення характеристики: Додаткове',
					description: 'Додатково ви можете підвищити одну зі своїх характеристик на 1, до максимуму 3.',
					options: [
						{
							feature: FactoryLogic.feature.createCharacteristicBonus({
								id: 'shadow-4-1b-1',
								characteristic: Characteristic.Might,
								value: 1
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createCharacteristicBonus({
								id: 'shadow-4-1b-2',
								characteristic: Characteristic.Reason,
								value: 1
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createCharacteristicBonus({
								id: 'shadow-4-1b-3',
								characteristic: Characteristic.Intuition,
								value: 1
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createCharacteristicBonus({
								id: 'shadow-4-1b-4',
								characteristic: Characteristic.Presence,
								value: 1
							}),
							value: 1
						}
					]
				}),
				FactoryLogic.feature.create({
					id: 'shadow-4-2',
					name: 'Тримай тихо',
					description: 'Під час розмови з будь-якою істотою, з якою ви ділите мову, ви можете вирішувати, чи можуть інші сприймати те, що ви передаєте, навіть якщо ви кричите.'
				}),
				FactoryLogic.feature.create({
					id: 'shadow-4-3a',
					name: 'Нічне чергування',
					description: 'Ваша майстерність у прихованні вчить оточуючих уникати викриття. Поки ви заховані, вороги отримують штрафи на перевірки пошуку вас або інших захованих істот у межах 10 клітинок.'
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'shadow-4-3b',
						name: 'Нічне чергування',
						description: 'Зненацька кинджал збиває іншу зброю з курсу.',
						type: FactoryLogic.type.createTrigger('Ціль отримує шкоду від здібності іншої істоти, поки ви заховані.'),
						keywords: [AbilityKeyword.Ranged, AbilityKeyword.Weapon],
						distance: [FactoryLogic.distance.createRanged(5)],
						target: 'Один союзник',
						sections: [
							FactoryLogic.createAbilitySectionText('Ціль отримує половину шкоди. Ви залишаєтесь захованими.')
						]
					})
				}),
				FactoryLogic.feature.createPerk({
					id: 'shadow-4-4'
				}),
				FactoryLogic.feature.createSkillChoice({
					id: 'shadow-4-5',
					listOptions: [SkillList.Crafting, SkillList.Exploration, SkillList.Interpersonal, SkillList.Intrigue, SkillList.Lore],
					count: 1
				}),
				FactoryLogic.feature.createHeroicResourceGain({
					id: 'shadow-4-6',
					name: 'Сплеск Прозорливості',
					tag: 'deal-damage 2',
					trigger: 'Першого разу в кожному раунді бою, коли ви завдаєте шкоди, що включає 1 або більше сплесків',
					value: '2',
					replacesTags: ['deal-damage']
				})
			]
		},
		{
			level: 5,
			features: [
				FactoryLogic.feature.createClassAbilityChoice({
					id: 'shadow-5-1',
					cost: 9
				})
			]
		},
		{
			level: 6,
			features: [
				FactoryLogic.feature.createPerk({
					id: 'shadow-6-1'
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'shadow-6-2',
						name: 'Тіньова форма',
						description: 'Ви втрачаєте контроль над собою й перетворюєтеся на тіньову істоту, що стікає попелом.',
						type: FactoryLogic.type.createManeuver(),
						target: 'Себе',
						sections: [
							FactoryLogic.createAbilitySectionText('Ця трансформація триває до кінця сутички, доки ви не опинитеся вмираючим, або до 1 години безперервної концентрації поза боєм. Ви отримуєте такі ефекти у цій формі:'),
							FactoryLogic.createAbilitySectionText('- Ви можете автоматично підніматися повною швидкістю під час руху.'),
							FactoryLogic.createAbilitySectionText('- Клітини ворогів не рахуються для вас як складна місцевість. Ворог отримує корупційну шкоду, рівну вашому показнику Ловкості, вперше коли ви проходите їх клітину за хід.'),
							FactoryLogic.createAbilitySectionText('- Якщо ви завершуєте свій хід маючи укриття або прихованість від іншої істоти, ви автоматично є захованими від тієї істоти.'),
							FactoryLogic.createAbilitySectionText('- Ви отримуєте 1 сплеск на початку кожного свого ходу.'),
							FactoryLogic.createAbilitySectionText('- Ви маєте імунітет до корупції, рівний 5 + ваш рівень.'),
							FactoryLogic.createAbilitySectionText('- Істоти отримують перевагу на удари проти вас.'),
							FactoryLogic.createAbilitySectionText('- Ви отримуєте штраф на перевірки Присутності при взаємодії з іншими істотами.')
						]
					})
				})
			]
		},
		{
			level: 7,
			features: [
				FactoryLogic.feature.createCharacteristicBonus({
					id: 'shadow-7-1a',
					characteristic: Characteristic.Might,
					value: 1
				}),
				FactoryLogic.feature.createCharacteristicBonus({
					id: 'shadow-7-1b',
					characteristic: Characteristic.Agility,
					value: 1
				}),
				FactoryLogic.feature.createCharacteristicBonus({
					id: 'shadow-7-1c',
					characteristic: Characteristic.Reason,
					value: 1
				}),
				FactoryLogic.feature.createCharacteristicBonus({
					id: 'shadow-7-1d',
					characteristic: Characteristic.Intuition,
					value: 1
				}),
				FactoryLogic.feature.createCharacteristicBonus({
					id: 'shadow-7-1e',
					characteristic: Characteristic.Presence,
					value: 1
				}),
				FactoryLogic.feature.createHeroicResourceGain({
					id: 'shadow-7-2',
					name: 'Гостра прозорливість',
					tag: 'start 2',
					trigger: 'Початок вашого ходу',
					value: '1d3 + 1',
					replacesTags: ['start']
				}),
				FactoryLogic.feature.createSkillChoice({
					id: 'shadow-7-3',
					listOptions: [SkillList.Crafting, SkillList.Exploration, SkillList.Interpersonal, SkillList.Intrigue, SkillList.Lore]
				}),
				FactoryLogic.feature.create({
					id: 'shadow-7-4',
					name: 'Удосконалення ретельного спостереження',
					description: 'Ви можете одночасно націлюватися на дві істоти за допомогою здібності Ретельне спостереження, спостерігаючи за обома. Удар по одній цілі не припиняє спостереження за іншою.',
				}),
				FactoryLogic.feature.create({
					id: 'shadow-7-5',
					name: 'Вентрилоквіст',
					description: 'Коли ви спілкуєтеся, ви можете кинути голос так, що здається, ніби він походить від істоти або предмета в межах 10 клітинок. Якщо ви заховані, така розмова не розкриває вас.',
				})
			]
		},
		{
			level: 8,
			features: [
				FactoryLogic.feature.createPerk({
					id: 'shadow-8-1'
				}),
				FactoryLogic.feature.createClassAbilityChoice({
					id: 'shadow-8-2',
					cost: 11
				})
			]
		},
		{
			level: 9,
			features: [
				FactoryLogic.feature.create({
					id: 'shadow-9-1',
					name: 'Загін мороку',
					description: `
На початку кожного вашого ходу ви можете відмовитися від отримання Прозорливості, щоб створити 1d6 клонів себе в порожніх суміжних клітинах. Клон діє під час вашого ходу і використовує ваші показники, за винятком того, що має 1 Витривалість. Клони піддаються тим самим станам і ефектам, що впливають на вас, і тривають до початку вашого наступного ходу. Клон не має Прозорливості і не може використовувати здібність Ретельне спостереження, функцію Тіньової форми або будь-які тригерні дії. У свій хід клон має дію руху, маневр і основну дію, яку може використати лише для виконання безкоштовного удару. Під час виконання безкоштовного удару клон має обирати цілі, яких ви чи інший клон також не атакують.

Поза боєм ви можете мати одного активного клона на кожні 2 Перемоги, які у вас є. Якщо клон знищено, ви повинні чекати 1 годину перед створенням наступного.`
				})
			]
		},
		{
			level: 10,
			features: [
				FactoryLogic.feature.createCharacteristicBonus({
					id: 'shadow-10-1a',
					name: 'Підвищення характеристики: Ловкість',
					description: 'Ваш показник Ловкості збільшується до 5',
					characteristic: Characteristic.Agility,
					value: 1
				}),
				FactoryLogic.feature.createChoice({
					id: 'shadow-10-1b',
					name: 'Підвищення характеристики: Додаткове',
					description: 'Додатково ви можете підвищити одну зі своїх характеристик на 1, до максимуму 5.',
					options: [
						{
							feature: FactoryLogic.feature.createCharacteristicBonus({
								id: 'shadow-10-1b-1',
								characteristic: Characteristic.Might,
								value: 1
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createCharacteristicBonus({
								id: 'shadow-10-1b-2',
								characteristic: Characteristic.Reason,
								value: 1
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createCharacteristicBonus({
								id: 'shadow-10-1b-3',
								characteristic: Characteristic.Intuition,
								value: 1
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createCharacteristicBonus({
								id: 'shadow-10-1b-4',
								characteristic: Characteristic.Presence,
								value: 1
							}),
							value: 1
						}
					]
				}),
				FactoryLogic.feature.createHeroicResourceGain({
					id: 'shadow-10-2',
					name: 'Пул смерті',
					tag: 'deal-damage 3',
					trigger: 'Першого разу в кожному раунді бою, коли ви завдаєте шкоди, що включає 1 або більше сплесків',
					value: '3',
					replacesTags: ['deal-damage', 'deal-damage 2']
				}),
				FactoryLogic.feature.createPerk({
					id: 'shadow-10-3'
				}),
				FactoryLogic.feature.createSkillChoice({
					id: 'shadow-10-4',
					listOptions: [SkillList.Crafting, SkillList.Exploration, SkillList.Interpersonal, SkillList.Intrigue, SkillList.Lore]
				}),
				FactoryLogic.feature.create({
					id: 'shadow-10-5',
					name: 'Удосконалення ретельного спостереження',
					description: 'Ви можете одночасно націлюватися на три істоти за допомогою здібності Ретельне спостереження.'
				}),
				FactoryLogic.feature.create({
					id: 'shadow-10-6',
					name: 'Покращена тіньова форма',
					description: `
Ви отримуєте повний контроль над тіньовою істотою, в яку перетворюєтесь за допомогою функції Тіньової форми, і можете завершити трансформацію за бажанням (дія не потрібна). Додатково ви завжди огорнуті темрявою, що надає вам прикриття в цій формі, і істоти більше не отримують переваги на удари проти вас.

Поки ви перебуваєте в тіньовій формі, ви можете витратити 1 безперервну хвилину на концентрацію на місці, де ви вже були раніше. По закінченні цієї хвилини ви та кожна охоча істота на вибір у межах 10 клітинок від вас можете телепортуватися у вільні клітини за вашим вибором усередині тієї локації. Кожна істота, що телепортується таким чином, стає невидимою на 1 годину або до використання нею будь-якої здібності.`
				}),
				FactoryLogic.feature.createHeroicResource({
					id: 'shadow-10-7',
					name: 'Підступ',
					type: 'epic',
					gains: [
						{
							tag: '',
							trigger: 'Завершення перепочинку',
							value: 'Отримання досвіду'
						}
					],
					description: `
Ви можете витрачати Підступ на свої здібності, ніби це була Прозорливість. Додатково ви можете витрачати Підступ, щоб виконувати додаткові маневри у свій хід — по одному маневру за одиницю Підступу.

Підступ залишається у вас, доки ви його не витратите.`
				})
			]
		}
	],
	abilities: [
		FactoryLogic.createAbility({
			id: 'shadow-ability-1',
			name: 'Задихаючись від болю',
			description: 'Ваші точні удари дозволяють союзникам скористатися стражданням цілі.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [FactoryLogic.distance.createMelee()],
			target: 'Одна істота',
			cost: 'signature',
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Agility],
						tier1: '3 + Л шкоди',
						tier2: '5 + Л шкоди',
						tier3: '8 + Л шкоди; І < [сильний], розпластаний'
					})
				),
				FactoryLogic.createAbilitySectionText('Один обраний вами союзник у межах 5 клітинок від цілі отримує 1 сплеск.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'shadow-ability-2',
			name: 'Я краще працюю сам',
			description: 'Краще — тільки ти й я. Хіба ні?',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [
				FactoryLogic.distance.createMelee(),
				FactoryLogic.distance.createRanged(5)
			],
			target: 'Одна істота',
			cost: 'signature',
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Agility],
						tier1: '3 + Л шкоди',
						tier2: '6 + Л шкоди',
						tier3: '9 + Л шкоди'
					})
				),
				FactoryLogic.createAbilitySectionText('Якщо поруч з ціллю немає жодного вашого союзника, ви отримуєте 1 сплеск перед кидком сили.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'shadow-ability-3',
			name: 'Командна робота має своє місце',
			description: 'Ви атакуєте ворога, коли союзник виявляє його слабкість.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [
				FactoryLogic.distance.createMelee(),
				FactoryLogic.distance.createRanged(5)
			],
			target: 'Одна істота або предмет',
			cost: 'signature',
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Agility],
						tier1: '3 + Л шкоди',
						tier2: '6 + Л шкоди',
						tier3: '9 + Л шкоди'
					})
				),
				FactoryLogic.createAbilitySectionText('Якщо будь-який союзник стоїть поруч із ціллю, ви отримуєте 1 сплеск перед кидком сили.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'shadow-ability-4',
			name: 'Ти дивився не на того',
			description: 'Вони не можуть слідкувати за вами обома одночасно.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [FactoryLogic.distance.createMelee()],
			target: 'Одна істота',
			cost: 'signature',
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Agility],
						tier1: '3 + Л шкоди',
						tier2: '5 + Л шкоди',
						tier3: '8 + Л шкоди'
					})
				),
				FactoryLogic.createAbilitySectionText('Поки у вас є один або більше союзників у межах 5 клітинок від цілі, ви отримуєте 1 сплеск. Якщо ви флангуєте ціль під час використання цієї здібності, оберіть одного союзника, що флангує разом із вами. Той союзник також отримує 1 сплеск.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'shadow-ability-5',
			name: 'Дезорієнтуючий удар',
			description: 'Ваш удар ставить їх у розгубленість, дозволяючи вам добити.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [FactoryLogic.distance.createMelee()],
			target: 'Одна істота',
			cost: 3,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Agility],
						tier1: '4 + Л шкоди; зрушити на 2',
						tier2: '6 + Л шкоди; зрушити на 3',
						tier3: '10 + Л шкоди; зрушити на 5'
					})
				),
				FactoryLogic.createAbilitySectionText('Ви можете переміститися в будь-яку клітину, яку ціль покидає, коли ви її штовхаєте.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'shadow-ability-6',
			name: 'Розпороття',
			description: 'Після нищівного удару ви лишаєте ворога, що стікає кровʼю.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [
				FactoryLogic.distance.createMelee(),
				FactoryLogic.distance.createRanged(5)
			],
			target: 'Одна істота',
			cost: 3,
			sections: [
				FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
					characteristic: [Characteristic.Agility],
					tier1: '4 + Л шкоди; Л < [слабкий], кровотеча (рят. кидок закінчує)',
					tier2: '6 + Л шкоди; Л < [середній], кровотеча (рят. кидок закінчує)',
					tier3: '10 + Л шкоди; Л < [сильний], кровотеча (рят. кидок закінчує)'
				}))
			]
		}),
		FactoryLogic.createAbility({
			id: 'shadow-ability-7',
			name: 'Заходь і виходь',
			description: 'Рухайся непередбачувано, вдарь швидко і зникни!',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [FactoryLogic.distance.createMelee()],
			target: 'Одна істота',
			cost: 3,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Agility],
						tier1: '5 + Л шкоди',
						tier2: '8 + Л шкоди',
						tier3: '11 + Л шкоди'
					})
				),
				FactoryLogic.createAbilitySectionText('Ви можете пересунутися на відстань до своєї швидкості, розділивши цей рух до або після удару за бажанням.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'shadow-ability-8',
			name: 'Одразу дві горлянки',
			description: 'Угода.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [
				FactoryLogic.distance.createMelee(),
				FactoryLogic.distance.createRanged(5)
			],
			target: 'Дві істоти або предмети',
			cost: 3,
			sections: [
				FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
					characteristic: [Characteristic.Agility],
					tier1: '4 шкоди',
					tier2: '6 шкоди',
					tier3: '10 шкоди'
				}))
			]
		}),
		FactoryLogic.createAbility({
			id: 'shadow-ability-9',
			name: 'Фатальний удар',
			description: 'Ваш клинок може стати останнім, що вони побачать.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [
				FactoryLogic.distance.createMelee(),
				FactoryLogic.distance.createRanged(5)
			],
			target: 'Одна істота',
			cost: 5,
			sections: [
				FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
					characteristic: [Characteristic.Agility],
					tier1: '2d6 + 7 + Л шкоди',
					tier2: '2d6 + 11 + Л шкоди',
					tier3: '2d6 + 16 + Л шкоди'
				}))
			]
		}),
		FactoryLogic.createAbility({
			id: 'shadow-ability-10',
			name: 'Сто горлянок',
			description: 'Коли ви рухаєтесь полем бою, кожен ворог у досяжності відчує ваш гнів.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Weapon],
			distance: [FactoryLogic.distance.createSelf()],
			target: 'Себе',
			cost: 5,
			sections: [
				FactoryLogic.createAbilitySectionText('Ви пересуваєтесь на відстань до своєї швидкості і робите один кидок сили, що спрямований на до трьох ворогів, які стали суміжними з вами під час руху.'),
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Agility],
						tier1: '3 шкоди',
						tier2: '6 шкоди',
						tier3: '9 шкоди'
					})
				)
			]
		}),
		FactoryLogic.createAbility({
			id: 'shadow-ability-11',
			name: 'Підготовка',
			description: 'Ваші друзі будуть вдячні.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [FactoryLogic.distance.createRanged(5)],
			target: 'Одна істота',
			cost: 5,
			sections: [
				FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
					characteristic: [Characteristic.Agility],
					tier1: '6 + Л шкоди; Р < [слабкий], ціль має вразливість до шкоди 5 (рят. кидок закінчує)',
					tier2: '9 + Л шкоди; Р < [середній], ціль має вразливість до шкоди 5 (рят. кидок закінчує)',
					tier3: '13 + Л шкоди; Р < [сильний], ціль має вразливість до шкоди 5 (рят. кидок закінчує)'
				}))
			]
		}),
		FactoryLogic.createAbility({
			id: 'shadow-ability-12',
			name: 'Тіньовий удар',
			description: 'Вони й гадки не мають, чого вас навчив коледж.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Magic, AbilityKeyword.Melee, AbilityKeyword.Ranged],
			distance: [FactoryLogic.distance.createSelf()],
			target: 'Себе',
			cost: 5,
			sections: [
				FactoryLogic.createAbilitySectionText('Ви використовуєте підписну ударну здібність двічі.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'shadow-ability-13',
			name: 'Танець',
			description: 'Ви входите в стан потоку, який робить вас майже неможливим для утримання.',
			type: FactoryLogic.type.createManeuver(),
			distance: [FactoryLogic.distance.createSelf()],
			target: 'Себе',
			cost: 7,
			sections: [
				FactoryLogic.createAbilitySectionText('До кінця сутички, коли ворог рухається або примусово переміщується поруч з вами або завдає вам шкоди, ви можете виконати дію відходу (Disengage) як безкоштовну тригерну дію.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'shadow-ability-14',
			name: 'Відволікаючий удар',
			description: 'Чому ви дивитесь на МЕНЕ?!',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [
				FactoryLogic.distance.createMelee(),
				FactoryLogic.distance.createRanged(5)
			],
			target: 'Одна істота',
			cost: 7,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Agility],
						tier1: '9 + Л шкоди',
						tier2: '13 + Л шкоди',
						tier3: '18 + Л шкоди'
					})
				),
				FactoryLogic.createAbilitySectionText('Ціль провокується добровільним союзником у межах 5 клітинок від вас до кінця наступного ходу цілі.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'shadow-ability-15',
			name: 'Приковуючий постріл',
			description: 'Один снаряд — влучно й потужно.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [FactoryLogic.distance.createRanged(5)],
			target: 'Одна істота',
			cost: 7,
			sections: [
				FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
					characteristic: [Characteristic.Agility],
					tier1: '8 + Л шкоди; Л < [слабкий], сковування (рят. кидок закінчує)',
					tier2: '12 + Л шкоди; Л < [середній], сковування (рят. кидок закінчує)',
					tier3: '16 + Л шкоди; Л < [сильний], сковування (рят. кидок закінчує)'
				}))
			]
		}),
		FactoryLogic.createAbility({
			id: 'shadow-ability-16',
			name: 'Оголомшливий удар',
			description: 'Від цього не відновитися.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [
				FactoryLogic.distance.createMelee(),
				FactoryLogic.distance.createRanged(5)
			],
			target: 'Одна істота',
			cost: 7,
			sections: [
				FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
					characteristic: [Characteristic.Agility],
					tier1: '7 + Л шкоди; С < [слабкий], сповільнений (рят. кидок закінчує)',
					tier2: '11 + Л шкоди; С < [середній], розпластаний і не може стати (рят. кидок закінчує)',
					tier3: '16 + Л шкоди; С < [сильний], розпластаний і не може стати (рят. кидок закінчує)'
				}))
			]
		}),
		FactoryLogic.createAbility({
			id: 'shadow-ability-17',
			name: 'Затемнення',
			description: 'Ви викликаєте сплеск тіні з очей і створюєте хмару темряви.',
			type: FactoryLogic.type.createManeuver(),
			keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
			distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 3 })],
			target: 'Себе',
			cost: 9,
			sections: [
				FactoryLogic.createAbilitySectionText('Чорна хмара заповнює область до кінця вашого наступного ходу, надаючи вам і вашим союзникам прихованість від ворогів. Поки ви перебуваєте в області, коли ворог завершує свій хід у ній, ви можете як безкоштовну тригерну дію переміститися в нове місце в межах області і здійснити проти нього безкоштовний удар.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'shadow-ability-18',
			name: 'У тіні',
			description: 'Ви збиваєте ворога з ніг і занурюєте його в абсолютну темряву.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Magic, AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [FactoryLogic.distance.createMelee()],
			target: 'Одна істота або предмет',
			cost: 9,
			sections: [
				FactoryLogic.createAbilitySectionText('Ви та ціль видаляєтесь з карти зустрічі до початку вашого наступного ходу. Ви зʼявляєтесь у клітинах, які покинули, або в найближчих вільних клітинах. По поверненні зробіть кидок сили.'),
				FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
					characteristic: [Characteristic.Agility],
					tier1: '8 + Л корупційної шкоди',
					tier2: '13 + Л корупційної шкоди',
					tier3: '17 + Л корупційної шкоди'
				}))
			]
		}),
		FactoryLogic.createAbility({
			id: 'shadow-ability-19',
			name: 'Падіння тіні',
			description: 'Ви зникаєте. Вони падають. Ви зʼявляєтесь знову.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Area, AbilityKeyword.Melee, AbilityKeyword.Weapon],
			distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Line, value: 10, value2: 1, within: 1 })],
			target: 'Кожен ворог у зоні',
			cost: 9,
			sections: [
				FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
					characteristic: [Characteristic.Agility],
					tier1: '10 шкоди',
					tier2: '14 шкоди',
					tier3: '20 шкоди'
				})),
				FactoryLogic.createAbilitySectionText('Ви зникаєте перед кидком сили. Після розвʼязання кидка ви зʼявляєтеся в першій вільній клітині на дальньому кінці лінії.')

			]
		}),
		FactoryLogic.createAbility({
			id: 'shadow-ability-20',
			name: 'Ти занадто балакучий',
			description: 'Мовчання — чеснота. Ніж, що затуляє їм рот, — наступне найкраще.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [
				FactoryLogic.distance.createMelee(),
				FactoryLogic.distance.createRanged(5)
			],
			target: 'Одна істота',
			cost: 9,
			sections: [
				FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
					characteristic: [Characteristic.Agility],
					tier1: '10 + Л шкоди; П < [слабкий], приголомшений (рят. кидок закінчує)',
					tier2: '15 + Л шкоди; П < [середній], приголомшений (рят. кидок закінчує)',
					tier3: '21 + Л шкоди; П < [сильний], приголомшений (рят. кидок закінчує)'
				})),
				FactoryLogic.createAbilitySectionText('Ціль не може спілкуватися ні з ким до кінця сутички.')

			]
		}),
		FactoryLogic.createAbility({
			id: 'shadow-ability-21',
			name: 'Убивство',
			description: 'Практикований удар миттєво вбиває вже ослабленого ворога.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [
				FactoryLogic.distance.createMelee()
			],
			target: 'Одна істота або предмет',
			cost: 11,
			sections: [
				FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
					characteristic: [Characteristic.Agility],
					tier1: '12 + Л шкоди',
					tier2: '18 + Л шкоди',
					tier3: '24 + Л шкоди'
				})),
				FactoryLogic.createAbilitySectionText('Ціль, яка не є міньйоном, лідером або сольною істотою і яка після отриманої шкоди опиняється в стані "Захеканий", зводиться до 0 Витривалості.')

			]
		}),
		FactoryLogic.createAbility({
			id: 'shadow-ability-22',
			name: 'Тіньовий захват',
			description: 'Тіні навколо вас відступають, дозволяючи тіньовій істоті всередині вас схоплювати ворогів.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
			distance: [
				FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 2 })
			],
			target: 'Кожен ворог у зоні',
			cost: 11,
			sections: [
				FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
					characteristic: [Characteristic.Agility],
					tier1: '11 + Л корупційної шкоди; Л < [слабкий], сковування (рят. кидок закінчує)',
					tier2: '16 + Л корупційної шкоди; Л < [середній], сковування (рят. кидок закінчує)',
					tier3: '21 + Л корупційної шкоди; Л < [сильний], сковування (рят. кидок закінчує)'
				}))

			]
		}),
		FactoryLogic.createAbility({
			id: 'shadow-ability-23',
			name: 'Швидкість тіней',
			description: 'Ви завдаєте кілька ударів ворогу, ще до того як він усвідомить свою загибель.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Magic],
			distance: [
				FactoryLogic.distance.createSelf()
			],
			target: 'Себе',
			cost: 11,
			sections: [
				FactoryLogic.createAbilitySectionText('Ви можете використати підписну ударну здібність чотири рази, або підписну здібність, що дає перевагу, тричі, або підписну здібність з подвійною перевагою двічі. Ви можете пересуватися до 2 клітин між кожним використанням.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'shadow-ability-24',
			name: 'Вони завжди стають в ряд',
			description: 'Ви випускаєте снаряд так швидко, що він проходить крізь ряд ворогів, калічачи їх.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Area, AbilityKeyword.Ranged, AbilityKeyword.Weapon],
			distance: [
				FactoryLogic.distance.create({ type: AbilityDistanceType.Line, value: 5, value2: 1, within: 5 })
			],
			target: 'Кожен ворог у зоні',
			cost: 11,
			sections: [
				FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
					characteristic: [Characteristic.Agility],
					tier1: '12 шкоди; С < [слабкий], сповільнений (рят. кидок закінчує)',
					tier2: '18 шкоди; С < [середній], сповільнений (рят. кидок закінчує)',
					tier3: '24 шкоди; С < [сильний], сповільнений (рят. кидок закінчує)'
				}))

			]
		})

	],
	subclasses: [
		blackAsh,
		causticAlchemy,
		harlequinMask
	],
	level: 1,
	characteristics: []
};
