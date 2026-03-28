import { AbilityDistanceType } from '@/enums/ability-distance-type';
import { AbilityKeyword } from '@/enums/ability-keyword';
import { Characteristic } from '@/enums/characteristic';
import { ConditionType } from '@/enums/condition-type';
import { FactoryLogic } from '@/logic/factory-logic';
import { FeatureField } from '@/enums/feature-field';
import { HeroClass } from '@/models/class';
import { PerkList } from '@/enums/perk-list';
import { SkillList } from '@/enums/skill-list';
import { chronokinetic } from '@/data/classes/null/chronokinetic';
import { cryokinetic } from '@/data/classes/null/cryokinetic';
import { metakinetic } from '@/data/classes/null/metakinetic';

export const nullClass: HeroClass = {
	id: 'class-null',
	name: 'Нуль',
	description: `
Розум не відокремлений від тіла. Досконалість одного вимагає досконалості іншого. Ви прагнете ідеальної дисципліни, досконалого порядку та володіння розумом і тілом, стаючи беззбройним псіонічним воїном, який пригнічує й поглинає магію та псіоніку. Вам не потрібні зброя або інструменти — ви самі собі достатні.

Як Нуль, ви стримано й упевнено протистоїте надприродним силам всесвіту. Прагнучи досконалого порядку, ви стаєте ворогом найвищого виявлення хаосу — надприродного. Ті, хто порушує закони природи за допомогою чаклунства чи псіоніки, повинні вас остерігатися.

"Будь-яку зброю можна звернути проти руки, яка її тримає." — Ардашир`,
	type: 'standard',
	subclassName: 'Традиція',
	subclassCount: 1,
	primaryCharacteristicsOptions: [
		[Characteristic.Agility, Characteristic.Intuition]
	],
	primaryCharacteristics: [],
	featuresByLevel: [
		{
			level: 1,
			features: [
				FactoryLogic.feature.createBonus({
					id: 'null-stamina',
					field: FeatureField.Stamina,
					value: 21,
					valuePerLevel: 9
				}),
				FactoryLogic.feature.createBonus({
					id: 'null-recoveries',
					field: FeatureField.Recoveries,
					value: 8
				}),
				FactoryLogic.feature.createHeroicResource({
					id: 'null-resource',
					name: 'Дисципліна',
					gains: [
						{
							tag: 'start',
							trigger: 'Початок вашого ходу',
							value: '2'
						},
						{
							tag: 'action',
							trigger: 'Вперше в кожному раунді бою, коли ворог в області вашої здібності «Нульове поле» використовує основну дію',
							value: '1'
						},
						{
							tag: 'malice',
							trigger: 'Вперше в кожному раунді бою, коли Директор використовує здібність, що вимагає Malice',
							value: '1'
						}
					]
				}),
				FactoryLogic.feature.createSkillChoice({
					id: 'null-1-1',
					selected: ['Psionics']
				}),
				FactoryLogic.feature.createSkillChoice({
					id: 'null-1-2',
					listOptions: [SkillList.Interpersonal, SkillList.Lore],
					count: 2
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'null-1-4',
						name: 'Нульове поле',
						description: 'Ви створюєте ауру, що послаблює силу ваших ворогів.',
						type: FactoryLogic.type.createManeuver(),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Psionic],
						distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Aura, value: 1 })],
						target: 'Усі вороги',
						sections: [
							FactoryLogic.createAbilitySectionText(`
Кожна ціль знижує свої потужності на 1.

Раз на хід як вільний маневр ви можете витратити 1 дисципліну, щоб надати вашому «Нульовому полю» один із наведених додаткових ефектів до початку вашого наступного ходу:
* **Гравітаційне порушення**: Першого разу за хід, коли ціль отримує ушкодження, ви можете зсунути її до 2 клітин.
* **Інерційний якір**: Будь-яка ціль, яка починає свій хід в області, не може зсуватися.
* **Синаптичний розрив**: Коли ви або союзник використовує здібність проти цілі з ефектом потужності, потужність збільшується на 1.

Ця здібність залишається активною навіть після завершення сутички. Вона припиняється лише якщо ви помираєте або добровільно її припиняєте (без дії)`),
							FactoryLogic.createAbilitySectionPackage('null-field')
						]
					})
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'null-1-5',
						name: 'Інерційний щит',
						description: 'Ви відчуваєте хід наближення атаки й зменшуєте її наслідки.',
						type: FactoryLogic.type.createTrigger('Ви отримуєте ушкодження.'),
						keywords: [AbilityKeyword.Psionic],
						distance: [FactoryLogic.distance.createSelf()],
						target: 'Себе',
						sections: [
							FactoryLogic.createAbilitySectionText('Ви зменшуєте ушкодження наполовину.'),
							FactoryLogic.createAbilitySectionSpend({
								effect: 'Потужність одного ефекту, повʼязаного з цією шкодою, зменшується на 1 для вас.'
							}),
							FactoryLogic.createAbilitySectionPackage('inertial-shield')
						]
					})
				}),
				FactoryLogic.feature.createMultiple({
					id: 'null-1-6',
					name: 'Нульова швидкість',
					description: 'Потік псіонічної енергії через вас дозволяє досягати високої швидкості.',
					features: [
						FactoryLogic.feature.createBonus({
							id: 'null-1-6a',
							name: 'Нульова швидкість',
							field: FeatureField.Speed,
							valueCharacteristics: [Characteristic.Agility]
						}),
						FactoryLogic.feature.createBonus({
							id: 'null-1-6b',
							name: 'Нульова швидкість',
							field: FeatureField.Disengage,
							valueCharacteristics: [Characteristic.Agility]
						})
					]
				}),
				FactoryLogic.feature.createChoice({
					id: 'null-1-7',
					name: 'Псіонічна модифікація',
					description: 'Ваше навчання перетворило тіло на досконалу псіонічну зброю, формуючи в розумі шляхи, що підсилюють вашу фізичну форму. Оберіть одну з наведених модифікацій. Ви можете змінити модифікацію під час псіонічної медитації як активності відпочинку.',
					options: [
						{
							feature: FactoryLogic.feature.createMultiple({
								id: 'null-1-7a',
								name: 'Підвищення щільності',
								features: [
									FactoryLogic.feature.createBonus({
										id: 'null-1-7aa',
										field: FeatureField.Stability,
										value: 1
									}),
									FactoryLogic.feature.createBonus({
										id: 'null-1-7ab',
										field: FeatureField.Stamina,
										valuePerEchelon: 6
									})
								]
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createAbilityDamage({
								id: 'null-1-7b',
								name: 'Підсилення сили',
								keywords: [AbilityKeyword.Psionic],
								value: 1
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createMultiple({
								id: 'null-1-7c',
								name: 'Підвищення швидкості',
								features: [
									FactoryLogic.feature.createBonus({
										id: 'null-1-7ca',
										field: FeatureField.Speed,
										value: 1
									}),
									FactoryLogic.feature.createBonus({
										id: 'null-1-7cb',
										field: FeatureField.Disengage,
										value: 1
									})
								]
							}),
							value: 1
						}
					]
				}),
				FactoryLogic.feature.createMultiple({
					id: 'null-1-8',
					features: [
						FactoryLogic.feature.create({
							id: 'null-1-8a',
							name: 'Псіонічне бойове мистецтво',
							description: 'Коли ви використовуєте маневр відштовхування або захоплення, ви застосовуєте Інтуїцію замість Сили для кидка потужності та для визначення, чи можете цілитися в істот більших за вас. Додатково, при використанні маневру відштовхування ви можете обрати зсувати ціль замість штовхання.'
						}),
						FactoryLogic.feature.createPackageContent({
							id: 'null-1-8b',
							name: 'Псіонічне бойове мистецтво',
							description: 'Ви використовуєте Інтуїцію замість Сили для кидка потужності та для визначення, чи можете цілитися в істот більших за вас.',
							tag: 'null-psionic-martial-arts-grab'
						}),
						FactoryLogic.feature.createPackageContent({
							id: 'null-1-8c',
							name: 'Псіонічне бойове мистецтво',
							description: 'Ви використовуєте Інтуїцію замість Сили для кидка потужності, і можете замість штовхання обрати зсувати ціль.',
							tag: 'null-psionic-martial-arts-knockback'
						})
					]
				}),
				FactoryLogic.feature.createClassAbilityChoice({
					id: 'null-1-9',
					cost: 'signature',
					count: 2
				}),
				FactoryLogic.feature.createClassAbilityChoice({
					id: 'null-1-10',
					cost: 3
				}),
				FactoryLogic.feature.createClassAbilityChoice({
					id: 'null-1-11',
					cost: 5
				})
			]
		},
		{
			level: 2,
			features: [
				FactoryLogic.feature.createPerk({
					id: 'null-2-1',
					lists: [PerkList.Exploration, PerkList.Interpersonal, PerkList.Intrigue]
				})
			]
		},
		{
			level: 3,
			features: [
				FactoryLogic.feature.create({
					id: 'null-3-1',
					name: 'Псіонічний стрибок',
					description: 'Ви можете виконати довгий або високий стрибок на відстань, рівну подвоєному значенню вашого показника Ловкості, без потреби в перевірці.'
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'null-3-2',
						name: 'Перестановка',
						description: '',
						type: FactoryLogic.type.createTrigger('Ви починаєте свій хід.', { free: true }),
						distance: [FactoryLogic.distance.createSelf()],
						target: 'Себе',
						sections: [
							FactoryLogic.createAbilitySectionText('Припиніть один ефект на собі, який закінчується рят. кидком або який завершується в кінці вашого ходу. Або ви можете надати цю перевагу одній істоті в області вашої здібності «Нульове поле».')
						]
					})
				}),
				FactoryLogic.feature.createClassAbilityChoice({
					id: 'null-3-3',
					cost: 7
				})
			]
		},
		{
			level: 4,
			features: [
				FactoryLogic.feature.createCharacteristicBonus({
					id: 'null-4-1a',
					characteristic: Characteristic.Agility,
					value: 1
				}),
				FactoryLogic.feature.createCharacteristicBonus({
					id: 'null-4-1b',
					characteristic: Characteristic.Intuition,
					value: 1
				}),
				FactoryLogic.feature.createPackageContent({
					id: 'null-4-2',
					name: 'Посилене Нульове поле',
					description: 'Під час бою будь-які тимчасові надприродні ефекти місцевості вашого рівня або нижчого видаляються, коли ваша аура частково або повністю перекриває їхнє розташування. Постійні надприродні ефекти місцевості вашого рівня або нижчого тимчасово нейтралізуються, поки ваша аура їх перекриває, але повертаються, коли перекриття припиняється.',
					tag: 'null-field'
				}),
				FactoryLogic.feature.createPerk({
					id: 'null-4-3'
				}),
				FactoryLogic.feature.createHeroicResourceGain({
					id: 'null-4-4',
					name: 'Регенеративне поле',
					tag: 'action 2',
					trigger: 'Вперше в кожному раунді бою, коли ворог в області вашої здібності «Нульове поле» використовує основну дію',
					value: '2',
					replacesTags: ['action']
				}),
				FactoryLogic.feature.createSkillChoice({
					id: 'null-4-5',
					listOptions: [SkillList.Crafting, SkillList.Exploration, SkillList.Interpersonal, SkillList.Intrigue, SkillList.Lore]
				})
			]
		},
		{
			level: 5,
			features: [
				FactoryLogic.feature.createClassAbilityChoice({
					id: 'null-5-1',
					cost: 9
				})
			]
		},
		{
			level: 6,
			features: [
				FactoryLogic.feature.createPackageContent({
					id: 'null-6-1',
					name: 'Поглинання стихій',
					description: 'Коли ви використовуєте тригерну дію Інерційного щита, ви отримуєте імунітет до ушкоджень типів: кислота, холод, корупція, вогонь, блискавка, отрута та звукові ушкодження на величину, рівну вашому показникові Інтуїції, проти типу ушкодження, що спричинив тригер.',
					tag: 'inertial-shield'
				}),
				FactoryLogic.feature.create({
					id: 'null-6-2',
					name: 'Стихійний буфер',
					description: 'Коли ви зменшуєте ушкодження типів кислота, холод, корупція, вогонь, блискавка, отрута або звукові ушкодження завдяки імунітету, ви отримуєте 2 сплески, які можна використати виключно для збільшення шкоди вашого наступного удару.'
				}),
				FactoryLogic.feature.createPerk({
					id: 'null-6-3',
					lists: [PerkList.Exploration, PerkList.Interpersonal, PerkList.Intrigue]
				})
			]
		},
		{
			level: 7,
			features: [
				FactoryLogic.feature.createCharacteristicBonus({
					id: 'null-7-1a',
					characteristic: Characteristic.Might,
					value: 1
				}),
				FactoryLogic.feature.createCharacteristicBonus({
					id: 'null-7-1b',
					characteristic: Characteristic.Agility,
					value: 1
				}),
				FactoryLogic.feature.createCharacteristicBonus({
					id: 'null-7-1c',
					characteristic: Characteristic.Reason,
					value: 1
				}),
				FactoryLogic.feature.createCharacteristicBonus({
					id: 'null-7-1d',
					characteristic: Characteristic.Intuition,
					value: 1
				}),
				FactoryLogic.feature.createCharacteristicBonus({
					id: 'null-7-1e',
					characteristic: Characteristic.Presence,
					value: 1
				}),
				FactoryLogic.feature.create({
					id: 'null-7-2',
					name: 'Псі-підсилення',
					description: `
Коли ви використовуєте здібність, що є основною дією або маневром з ключовим словом «Псіоніка», ви можете витратити додаткову дисципліну, щоб застосувати пі-сі-підсилення до неї й підсилити її ефекти. Ефекти пі-сі-підсилення тривають лише до кінця ходу, у якому здібність вперше застосована. Ви можете застосувати кілька підсилень до однієї здібності, але тільки по одному екземпляру кожного конкретного підсилення. Ви можете використовувати такі підсилення:

**Динамічна сила** (1 Дисципліна) Якщо здібність примусово переміщує ціль, відстань примусового переміщення отримує бонус, рівний вашому показникові Інтуїції.
**Розширена сила** (3 Дисципліни) Якщо здібність цілиться на область, ви збільшуєте розмір області на 1. Якщо область є лінією, ви збільшуєте тільки один вимір, а не обидва.
**Подовжена сила** (1 Дисципліна) Якщо здібність є далекобійною, відстань отримує бонус, рівний вашому показникові Інтуїції. Якщо здібність є ближньою, відстань отримує бонус +2.
**Підвищена сила** (1 Дисципліна) Якщо здібність завдає кидальної шкоди, вона завдає додаткову шкоду, рівну вашому показникові Інтуїції.
**Збільшена сила** (5 Дисциплін) Якщо здібність має потужність, ви збільшуєте цю потужність на величину, рівну вашому показникові Інтуїції.
**Поділена сила** (5 Дисциплін) Якщо здібність цілиться на окремі істоти або предмети, ви цілитесь на одну додаткову істоту або предмет у межах дистанції.
**Загострена сила** (1 Дисципліна) Якщо здібність має будь-який кидок потужності, цей кидок отримує перевагу.`
				}),
				FactoryLogic.feature.createHeroicResourceGain({
					id: 'null-7-3',
					name: 'Покращене тіло',
					tag: 'start 2',
					trigger: 'Початок вашого ходу',
					value: '3',
					replacesTags: ['start']
				}),
				FactoryLogic.feature.createSkillChoice({
					id: 'null-7-4',
					listOptions: [SkillList.Crafting, SkillList.Exploration, SkillList.Interpersonal, SkillList.Intrigue, SkillList.Lore]
				})
			]
		},
		{
			level: 8,
			features: [
				FactoryLogic.feature.createPerk({
					id: 'null-8-1'
				}),
				FactoryLogic.feature.createClassAbilityChoice({
					id: 'null-8-2',
					cost: 11
				})
			]
		},
		{
			level: 9,
			features: [
				FactoryLogic.feature.createBonus({
					id: 'null-9-1a',
					name: 'Я — Зброя',
					field: FeatureField.Stamina,
					value: 21
				}),
				FactoryLogic.feature.createConditionImmunity({
					id: 'null-9-1b',
					name: 'Я — Зброя',
					conditions: [ConditionType.Bleeding]
				})
			]
		},
		{
			level: 10,
			features: [
				FactoryLogic.feature.createCharacteristicBonus({
					id: 'null-10-1a',
					characteristic: Characteristic.Agility,
					value: 1
				}),
				FactoryLogic.feature.createCharacteristicBonus({
					id: 'null-10-1b',
					characteristic: Characteristic.Intuition,
					value: 1
				}),
				FactoryLogic.feature.createHeroicResourceGain({
					id: 'null-10-2',
					name: 'Маніфольдне тіло',
					tag: 'start 3',
					trigger: 'Початок вашого ходу',
					value: '4',
					replacesTags: ['start', 'start 2']
				}),
				FactoryLogic.feature.create({
					id: 'null-10-3',
					name: 'Маніфольдний резонанс',
					description: `
Ваше тіло стає досконалою матерією, поза примхами й хаосом часової тканини та обмеженнями маніфолдів. Кожного разу, коли ви завершуєте відпочинок, ви можете перемістити себе та будь-яких істот в області вашої здібності «Нульове поле» до будь-якого місця в часовому шарі, відомого вам, відомого будь-якій іншій істоті в області, або туди, де раніше перебував надприродний скарб у цій області.

Коли ви використовуєте здібність, ви отримуєте 1 дисципліну, яку можна використати лише для застосування переваги з функції «Псі-підсилення» до цієї здібності.

Крім того, ви та союзники в області вашої здібності «Нульове поле» ігноруєте штрафи (bane) і подвійні штрафи на ваших кидках потужності.`
				}),
				FactoryLogic.feature.createHeroicResource({
					id: 'null-10-4',
					name: 'Порядок',
					type: 'epic',
					gains: [
						{
							tag: '',
							trigger: 'Завершення відпочинку',
							value: 'Отримання досвіду'
						}
					],
					description: `
У вас є епічний ресурс під назвою «Порядок». Кожного разу, коли ви завершуєте відпочинок, ви отримуєте Порядок, рівний отриманому досвіду. Ви можете витрачати Порядок на свої здібності так само, як дисципліну. На початку бойового зіткнення ви можете витратити 1 Порядок, щоб збільшити розмір вашого «Нульового поля» на 1 до кінця сутички. Порядок зберігається, поки ви його не витратите.`
				}),
				FactoryLogic.feature.createPerk({
					id: 'null-10-5'
				}),
				FactoryLogic.feature.createSkillChoice({
					id: 'null-10-6',
					listOptions: [SkillList.Crafting, SkillList.Exploration, SkillList.Interpersonal, SkillList.Intrigue, SkillList.Lore]
				})
			]
		}
	],
	abilities: [
		FactoryLogic.createAbility({
			id: 'null-ability-1',
			name: 'Танець ударів',
			description: 'Ви вражаєте всюди одночасно, змушуючи ворога змінити позицію.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Area, AbilityKeyword.Psionic, AbilityKeyword.Weapon],
			distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 1 })],
			target: 'Кожен ворог у зоні',
			cost: 'signature',
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Agility],
						tier1: '3 ушкодження',
						tier2: '4 ушкодження',
						tier3: '5 ушкодження'
					})
				),
				FactoryLogic.createAbilitySectionText('Ви можете зсунути одного сусіднього ворога на відстань до числа клітин, рівного вашому показникові Інтуїції.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'null-ability-2',
			name: 'Швидший за око',
			description: 'Ви бʼєте так швидко, що ваші руки стають нечіткими.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Psionic, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [FactoryLogic.distance.createMelee()],
			target: 'Two creatures or objects',
			cost: 'signature',
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Agility],
						tier1: '4 ушкодження',
						tier2: '5 ушкодження',
						tier3: '7 ушкодження'
					})
				),
				FactoryLogic.createAbilitySectionText('Ви можете завдати ушкодження, рівне вашому показникові Ловкості, одній істоті або предмету поруч із вами.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'null-ability-3',
			name: 'Інерційний крок',
			description: 'Ви блискавично переміщаєтеся полем бою й наносите опортуністичний удар.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Psionic, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [FactoryLogic.distance.createMelee()],
			target: 'Одна істота або предмет',
			cost: 'signature',
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Agility],
						tier1: '5 + A ушкодження',
						tier2: '7 + A ушкодження',
						tier3: '10 + A ушкодження'
					})
				),
				FactoryLogic.createAbilitySectionText('Ви можете зсунутися на відстань до половини вашої швидкості до або після виконання удару.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'null-ability-4',
			name: 'Фіксація суглоба',
			description: 'Ви викручуєте тіло ворога в положення, з якого йому важко вирватися.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Psionic, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [FactoryLogic.distance.createMelee()],
			target: 'Одна істота або предмет',
			cost: 'signature',
			sections: [
				FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
					characteristic: [Characteristic.Agility],
					tier1: '4 + A ушкодження; Л < [слабкий], схоплений',
					tier2: '7 + A ушкодження; Л < [середній], схоплений',
					tier3: '9 + A ушкодження; Л < [сильний], схоплений'
				}))
			]
		}),
		FactoryLogic.createAbility({
			id: 'null-ability-5',
			name: 'Кінетичний удар',
			description: 'Ваш супротивник хитнувся. Він не зможе ігнорувати вас.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Psionic, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [FactoryLogic.distance.createMelee()],
			target: 'Одна істота або предмет',
			cost: 'signature',
			sections: [
				FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
					characteristic: [Characteristic.Agility],
					tier1: '4 + A ушкодження; провокований (EoT)',
					tier2: '5 + A ушкодження; провокований (EoT); зсув 1',
					tier3: '6 + A ушкодження; провокований (EoT); зсув 2'
				}))
			]
		}),
		FactoryLogic.createAbility({
			id: 'null-ability-6',
			name: 'Магнітний удар',
			description: 'Сила вашого удару виходить за межі тіла, притягуючи ворога ближче.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Psionic, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [FactoryLogic.distance.createMelee(2)],
			target: 'Одна істота',
			cost: 'signature',
			sections: [
				FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
					characteristic: [Characteristic.Agility],
					tier1: '5 + A психічне ушкодження; вертикальне притягнення 1',
					tier2: '8 + A психічне ушкодження; вертикальне притягнення 2',
					tier3: '11 + A психічне ушкодження; вертикальне притягнення 3'
				}))
			]
		}),
		FactoryLogic.createAbility({
			id: 'null-ability-7',
			name: 'Удар інверсії фази',
			description: 'Ви на мить виходите з фази, проводячи ворога крізь себе.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Psionic, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [FactoryLogic.distance.createMelee()],
			target: 'Одна істота або предмет',
			cost: 'signature',
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Agility],
						tier1: '4 + A ушкодження; штовх 2',
						tier2: '6 + A ушкодження; штовх 4',
						tier3: '8 + A ушкодження; штовх 6'
					})
				),
				FactoryLogic.createAbilitySectionText('Перед вирішенням штовхання ви телепортуєте ціль на клітку поруч із вами, протилежну тій, з якої вона починала. Якщо ціль не може бути телепортована таким чином, ви не можете її штовхати.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'null-ability-8',
			name: 'Точки тиску',
			description: 'Ви вражаєте ключові нервові вузли, залишаючи ворога хитким.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Psionic, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [FactoryLogic.distance.createMelee()],
			target: 'Одна істота або предмет',
			cost: 'signature',
			sections: [
				FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
					characteristic: [Characteristic.Agility],
					tier1: '4 + A ушкодження; Л < [слабкий], ослаблений (рят. кидок)',
					tier2: '7 + A ушкодження; Л < [середній], ослаблений (рят. кидок)',
					tier3: '9 + A ушкодження; Л < [сильний], ослаблений (рят. кидок)'
				}))
			]
		}),
		FactoryLogic.createAbility({
			id: 'null-ability-9',
			name: 'Хрональний шип',
			description: 'Ви передбачаєте найкращий момент для удару і використовуєте його.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Psionic, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [FactoryLogic.distance.createMelee()],
			target: 'Одна істота або предмет',
			cost: 3,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Agility],
						tier1: '7 + A ушкодження',
						tier2: '10 + A ушкодження',
						tier3: '13 + A ушкодження'
					})
				),
				FactoryLogic.createAbilitySectionText('Ви можете зсунутися на відстань до половини вашої швидкості до або після виконання цього удару. Додатково, коли ефект дозволяє вам зробити вільний удар або використати сигнатурну здібність, ви можете використати цю здібність замість неї, сплачуючи її вартість дисципліни як звично.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'null-ability-10',
			name: 'Психічний імпульс',
			description: 'Спалах псіонічної енергії порушує синапси вашого ворога.',
			type: FactoryLogic.type.createManeuver(),
			keywords: [AbilityKeyword.Area, AbilityKeyword.Psionic],
			distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 2 })],
			target: 'Кожен ворог у зоні',
			cost: 3,
			sections: [
				FactoryLogic.createAbilitySectionText('Кожна ціль отримує психічне ушкодження, рівне подвоєному значенню вашого показника Інтуїції. До початку вашого наступного ходу розмір вашої здібності «Нульове поле» збільшується на 1. Наприкінці вашого поточного ходу кожен ворог в області вашого «Нульового поля» отримує психічне ушкодження, рівне вашому показникові Інтуїції.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'null-ability-11',
			name: 'Невблаганна Немезида',
			description: 'Ви наносите удар, і протягом наступних кількох моментів ворог не зможе уникнути вас.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Psionic, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [FactoryLogic.distance.createMelee()],
			target: 'Одна істота або предмет',
			cost: 3,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Agility],
						tier1: '6 + A ушкодження',
						tier2: '8 + A ушкодження',
						tier3: '12 + A ушкодження'
					})
				),
				FactoryLogic.createAbilitySectionText('До початку вашого наступного ходу, коли ціль завершує рух або примусове переміщення, ви можете використати вільну тригерну дію, щоб зсунутися на відстань до вашої швидкості. Ви повинні завершити цей зсув поруч із ціллю.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'null-ability-12',
			name: 'Оглушливий удар',
			description: 'Ви концентруєте псіонічну техніку в контузивний удар.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Psionic, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [FactoryLogic.distance.createMelee()],
			target: 'Одна істота або предмет',
			cost: 3,
			sections: [
				FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
					characteristic: [Characteristic.Agility],
					tier1: '4 + A ушкодження; I < [слабкий], оглушений і сповільнений (рят. кидок)',
					tier2: '5 + A ушкодження; I < [середній], оглушений і сповільнений (рят. кидок)',
					tier3: '7 + A ушкодження; I < [сильний], оглушений і сповільнений (рят. кидок)'
				}))
			]
		}),
		FactoryLogic.createAbility({
			id: 'null-ability-13',
			name: 'Арканний руйнівник',
			description: 'Ваш удар порушує порядок тіла ворога, спричиняючи біль, якщо він намагається каналізувати чаклунство.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Psionic, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [FactoryLogic.distance.createMelee()],
			target: 'Одна істота або предмет',
			cost: 5,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Agility],
						tier1: '8 + A психічне ушкодження; M < [слабкий], ослаблений (рят. кидок)',
						tier2: '12 + A психічне ушкодження; M < [середній], ослаблений (рят. кидок)',
						tier3: '16 + A психічне ушкодження; M < [сильний], ослаблений (рят. кидок)'
					})
				),
				FactoryLogic.createAbilitySectionText('Поки ціль ослаблена таким чином, вона отримує ушкодження, рівне вашому показникові Інтуїції, щоразу, коли використовує надприродну здібність, яка вимагає Malice.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'null-ability-14',
			name: 'Накладення сили',
			description: 'Один ваш дотик — і ворог відлітає назад.',
			type: FactoryLogic.type.createManeuver(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Psionic, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [FactoryLogic.distance.createMelee()],
			target: 'Одна істота або предмет',
			cost: 5,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Intuition],
						tier1: 'штовх 3',
						tier2: 'штовх 5',
						tier3: 'штовх 7'
					})
				),
				FactoryLogic.createAbilitySectionText('Об’єкт, на який ви націлюєтесь, має бути вашого розміру або меншим. Ви отримуєте перевагу на цю здібність. Додатково, за кожну клітину, на яку ви штовхаєте ціль, вона отримує 1 психічне ушкодження')
			]
		}),
		FactoryLogic.createAbility({
			id: 'null-ability-15',
			name: 'Фазовий удар',
			description: 'На мить ворог виходить з фази цього маніфолду.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Psionic, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [FactoryLogic.distance.createMelee()],
			target: 'Одна істота',
			cost: 5,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Agility],
						tier1: '3 + A психічне ушкодження; I < [слабкий], ціль виходить з фази (рят. кидок)',
						tier2: '4 + A психічне ушкодження; I < [середній], ціль виходить з фази (рят. кидок)',
						tier3: '6 + A психічне ушкодження; I < [сильний], ціль виходить з фази (рят. кидок)'
					})
				),
				FactoryLogic.createAbilitySectionText('Ціль, яка виходить з фази, сповільнюється, її стійкість знижується на 2, і вона не може отримати результат третього рівня (tier 3) на кидках здібностей.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'null-ability-16',
			name: 'Армія в одній особі',
			description: 'Ви рухаєтеся так швидко, що здається, ніби на ворогів напала армія.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Area, AbilityKeyword.Psionic, AbilityKeyword.Weapon],
			distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 2 })],
			target: 'Кожен ворог у зоні',
			cost: 5,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Agility],
						tier1: '6 ушкодження',
						tier2: '9 ушкодження',
						tier3: '13 ушкодження'
					})
				),
				FactoryLogic.createAbilitySectionText('Ви можете виконати дію руху «Відведення» як вільний маневр до або після використання цієї здібності.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'null-ability-17',
			name: 'Поле поглинання',
			description: 'Ваше нульове поле поглинає кінетичну енергію.',
			type: FactoryLogic.type.createManeuver(),
			keywords: [AbilityKeyword.Psionic],
			distance: [FactoryLogic.distance.createSelf()],
			target: 'Себе',
			cost: 7,
			sections: [
				FactoryLogic.createAbilitySectionText('До кінця сутички розмір вашої здібності «Нульове поле» збільшується на 1. Поки область так збільшена, кожен ворог у ній отримує bane на кидки здібностей.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'null-ability-18',
			name: 'Поле молекулярної перестановки',
			description: 'У ворогів відкриваються рани, у союзників — загоєння.',
			type: FactoryLogic.type.createManeuver(),
			keywords: [AbilityKeyword.Psionic],
			distance: [FactoryLogic.distance.createSelf()],
			target: 'Себе',
			cost: 7,
			sections: [
				FactoryLogic.createAbilitySectionText('До кінця сутички розмір вашої здібності «Нульове поле» збільшується на 1. Поки область так збільшена, кожен ворог з I < [середній], який вперше в раунді входить в область або починає свій хід там, отримує bleeding (save ends). Кожен союзник, який вперше в раунді входить в область або починає там свій хід, отримує тимчасову витривалість, рівну вашому показникові Інтуїції.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'null-ability-19',
			name: 'Поле стабілізації',
			description: 'Ви проєктуєте порядок, ускладнюючи ворогам втручання в дії вас та ваших союзників.',
			type: FactoryLogic.type.createManeuver(),
			keywords: [AbilityKeyword.Psionic],
			distance: [FactoryLogic.distance.createSelf()],
			target: 'Себе',
			cost: 7,
			sections: [
				FactoryLogic.createAbilitySectionText('До кінця сутички розмір вашої здібності «Нульове поле» збільшується на 1. Поки область так збільшена, ви ігноруєте важкодоступну місцевість і для вас знижується потужність ворожих ефектів, спрямованих на вас, на 1. Також на початку кожного вашого ходу ви можете використати вільну тригерну дію, щоб припинити один ефект на собі, який закінчується рят. кидком або який завершується в кінці вашого ходу. Кожен союзник в області також отримує ці переваги.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'null-ability-20',
			name: 'Синаптичне поле',
			description: 'Атаки союзників у вашому нульовому полі порушують думки ворогів, спричиняючи психічний біль.',
			type: FactoryLogic.type.createManeuver(),
			keywords: [AbilityKeyword.Psionic],
			distance: [FactoryLogic.distance.createSelf()],
			target: 'Себе',
			cost: 7,
			sections: [
				FactoryLogic.createAbilitySectionText('До кінця сутички розмір вашої здібності «Нульове поле» збільшується на 1. Поки область так збільшена, коли ворог у ній отримує шкоду за кидком, він також отримує додаткове психічне ушкодження, рівне подвоєному значенню вашого показника Інтуїції.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'null-ability-21',
			name: 'Передбачливий удар',
			description: 'Ви раптово вражаєте ворога, а потім хапаєте його псіонічно посиленою хваткою.',
			type: FactoryLogic.type.createTrigger('Ціль рухається або використовує основну дію', { free: true }),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Psionic, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [FactoryLogic.distance.createMelee()],
			target: 'Одна істота',
			cost: 9,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Agility],
						tier1: '7 + A ушкодження; I < [слабкий], звʼязаний (рят. кидок)',
						tier2: '10 + A ушкодження; I < [середній], звʼязаний (рят. кидок)',
						tier3: '13 + A ушкодження; I < [сильний], звʼязаний (рят. кидок)'
					})
				),
				FactoryLogic.createAbilitySectionText('Цей удар розв’язується перед рухом або основною дією, що спричинила тригер.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'null-ability-22',
			name: 'Залізний хват',
			description: 'Ви хапаєте ціль надприродною силою.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Psionic, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [FactoryLogic.distance.createMelee()],
			target: 'Одна істота',
			cost: 9,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Agility],
						tier1: '10 + A ушкодження; Л < [слабкий], схоплений',
						tier2: '14 + A ушкодження; Л < [середній], схоплений',
						tier3: '18 + A ушкодження; Л < [сильний], схоплений'
					})
				),
				FactoryLogic.createAbilitySectionText('Поки ціль схоплена таким чином, вона отримує bane на маневр Escape Grab. Кожного разу, коли вона використовує цей маневр, вона отримує ушкодження, рівне подвоєному вашому показникові Ловкості.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'null-ability-23',
			name: 'Фазовий стрибок',
			description: 'Ви стрибаєте поза реальністю, залишаючи післяобраз себе.',
			type: FactoryLogic.type.createMove(),
			keywords: [AbilityKeyword.Psionic],
			distance: [FactoryLogic.distance.createSelf()],
			target: 'Себе',
			cost: 9,
			sections: [
				FactoryLogic.createAbilitySectionText('Ви стрибаєте на відстань до вашої швидкості, не провокуючи опортуністичних атак. До кінця вашого наступного ходу в клітині, яку ви покинули, залишається статичний післяобраз вас, і будь-який ворог поруч із цим післяобразом отримує bane на кидки здібностей. Ви можете використовувати свої здібності зі своєї клітини або з клітини післяобразу, ніби ви все ще там. Додатково, якщо ваша здібність «Нульове поле» активна, ваш післяобраз також проектує ауру цієї здібності, якою ви керуєте, ніби перебуваєте в клітині післяобразу.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'null-ability-24',
			name: 'Синаптичне скидання',
			description: 'Ви розширюєте свою нівелюючу силу, щоб пом’якшити шкідливі ефекти.',
			type: FactoryLogic.type.createManeuver(),
			keywords: [AbilityKeyword.Area, AbilityKeyword.Psionic],
			distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 3 })],
			target: 'На себе і кожного союзника в зоні впливу',
			cost: 9,
			sections: [
				FactoryLogic.createAbilitySectionText('Кожна ціль може припинити будь-які стани або ефекти на собі та отримує 5 тимчасової витривалості за кожен припинений стан або ефект.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'null-ability-25',
			name: 'Арканне очищення',
			description: 'Ви концентруєте Нульове поле в удар по точці тиску, що перешкоджає ворогу каналізувати чаклунство.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Psionic, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [FactoryLogic.distance.createMelee()],
			target: 'Одна істота',
			cost: 11,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Agility],
						tier1: '13 + A ушкодження; M < [слабкий], ціль пригнічена (рят. кидок)',
						tier2: '19 + A ушкодження; M < [середній], ціль пригнічена (рят. кидок)',
						tier3: '24 + A ушкодження; M < [сильний], ціль пригнічена (рят. кидок)'
					})
				),
				FactoryLogic.createAbilitySectionText('Поки ціль пригнічена, вона отримує психічну шкоду, рівну подвоєному показникові вашої Інтуїції на початку своїх ходів; також вона отримує таку шкоду щоразу, коли використовує надприродну здібність або здібність, яка коштує Malice.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'null-ability-26',
			name: 'Фазовий кидок',
			description: 'Ви викидаєте ворога з фази цього маніфолду, через що він шкодить іншим ворогам, повертаючись.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Psionic, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [FactoryLogic.distance.createMelee()],
			target: 'Одна істота',
			cost: 11,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Agility],
						tier1: '9 + A ушкодження; штовх 5; I < [слабкий], оглушений (рят. кидок)',
						tier2: '13 + A ушкодження; штовх 7; I < [середній], оглушений (рят. кидок)',
						tier3: '18 + A ушкодження; штовх 10; I < [сильний], оглушений (рят. кидок)'
					})
				),
				FactoryLogic.createAbilitySectionText('Ціль та кожна істота або обʼєкт, з якими вона зіткнулася під час цього примусового переміщення, отримують психічну шкоду, рівну загальній кількості клітин, на які ціль була примусово переміщена. Поки ціль приголомшена таким чином, вона бачить проблиски істот з інших частин часовому просторі.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'null-ability-27',
			name: 'Скалярний штурм',
			description: 'Ви викривляєте реальність, щоб на мить виростити кінцівку і завдати один нищівний удар.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Area, AbilityKeyword.Psionic],
			distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Cube, value: 3, within: 1 })],
			target: 'Кожен ворог у зоні',
			cost: 11,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: [Characteristic.Agility],
						tier1: '12 психічне ушкодження; штовх 3',
						tier2: '17 психічне ушкодження; штовх 5',
						tier3: '23 психічне ушкодження; штовх 7'
					})
				)
			]
		}),
		FactoryLogic.createAbility({
			id: 'null-ability-28',
			name: 'Синаптичний якір',
			description: 'Ви порушуєте удар ворога і створюєте петлю зворотного зв’язку в його розумі, що заважає зосередитися на майбутніх атаках.',
			type: FactoryLogic.type.createTrigger('Ціль отримує ушкодження від здібності іншої істоти, поки перебуває в області вашої здібності «Нульове поле»', { free: true }),
			keywords: [AbilityKeyword.Psionic],
			distance: [FactoryLogic.distance.createSpecial('Self; see below')],
			target: 'На себе або одну істоту',
			cost: 11,
			sections: [
				FactoryLogic.createAbilitySectionText('Ціль отримує половину ушкодження, і якщо істота, що спричинила тригер, має I < [середній], вона стає приголомшеною (рят. кидок). Поки істота, що спричинила тригер, є приголомшеною таким чином, вона отримує психічне ушкодження, рівне вашому показникові Інтуїції, щоразу, коли використовує основну дію.')
			]
		})
	],
	subclasses: [
		chronokinetic,
		cryokinetic,
		metakinetic
	],
	level: 1,
	characteristics: []
};
