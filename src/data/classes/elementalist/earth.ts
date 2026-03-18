import { AbilityKeyword } from '@/enums/ability-keyword';
import { FactoryLogic } from '@/logic/factory-logic';
import { FeatureField } from '@/enums/feature-field';
import { SubClass } from '@/models/subclass';

export const earth: SubClass = {
	id: 'elementalist-sub-1',
	name: 'Земля',
	description: 'Земля — елемент сталості. Здібності Землі зміцнюють ваше тіло і дарують силу постійно створювати та формувати фізичний ландшафт.',
	featuresByLevel: [
		{
			level: 1,
			features: [
				FactoryLogic.feature.create({
					id: 'elementalist-sub-1-1-1',
					name: 'Земля: Адепт Землі',
					description: 'Ви спрямовуєте потік земної магії, щоб стати важчим для переміщення. Коли ви використовуєте здібність з ключовими словами Земля та Магія, ваша стабільність збільшується на 1 до початку вашого наступного ходу. Ця перевага накопичується.'
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'elementalist-sub-1-1-2',
						name: 'Пробудити Землю',
						description: 'Земля піднімається, опускається або розкривається за вашим наказом.',
						type: FactoryLogic.type.createMain(),
						keywords: [AbilityKeyword.Earth, AbilityKeyword.Magic, AbilityKeyword.Melee],
						distance: [FactoryLogic.distance.createMelee()],
						target: 'Особлива',
						sections: [
							FactoryLogic.createAbilitySectionText(`
Ви торкаєтеся клітинки, що містить звичайний ґрунт, камінь або метал, і створюєте стіну розміром 5 з того самого матеріалу, яка піднімається з землі і має включати торкнуту клітинку.

Альтернативно, ви можете торкнутися споруди зі звичайного ґрунту, каменю або металу, яка займає 2 або більше клітинок. Ви можете відкрити у споруді отвір розміром 1 клітинку у місці торкання. Натомість ви також можете торкнутися існуючих дверей або іншого отвору розміром 1 клітинку або менше в поверхні зі звичайного ґрунту, каменю або металу. Отвір запечатаний тим самим матеріалом, з якого складається поверхня.`)
						]
					})
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'elementalist-sub-1-1-3',
						name: 'Шкіра як замкові мури',
						description: 'Ви покриваєте себе або союзника захисним каменем.',
						type: FactoryLogic.type.createTrigger('Ціль зазнає пошкодження.'),
						keywords: [AbilityKeyword.Earth, AbilityKeyword.Magic, AbilityKeyword.Ranged],
						distance: [FactoryLogic.distance.createRanged(10)],
						target: 'На себе або одного союзника',
						sections: [
							FactoryLogic.createAbilitySectionText('Шкода зменшується наполовину.'),
							FactoryLogic.createAbilitySectionSpend({
								effect: 'Якщо пошкодження має будь‑який ефект потужності, повʼязаний із ним, потужність зменшується на 1.'
							})
						]
					})
				})
			]
		},
		{
			level: 2,
			features: [
				FactoryLogic.feature.createBonus({
					id: 'elementalist-sub-1-2-1',
					name: 'Учень Землі',
					description: 'Ваше тіло зміцнюється завдяки звʼязку вашого розуму з елементом сталості.',
					field: FeatureField.Stamina,
					value: 3, // RAW is 6 stamina at 2nd level and 3 for each level after that, but the 3 per level will get added at lvl 2 as well here
					valuePerLevel: 3
				})
			]
		},
		{
			level: 3,
			features: [
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'elementalist-sub-1-3-1',
						name: 'Земля Приймає Мене',
						description: 'Ви можете прослизнути в камінь.',
						type: FactoryLogic.type.createMain(),
						keywords: [AbilityKeyword.Earth, AbilityKeyword.Magic],
						distance: [FactoryLogic.distance.createSelf()],
						target: 'На себе',
						sections: [
							FactoryLogic.createAbilitySectionText('Ви заходите в обʼєкт зі звичайного ґрунту, металу або каменю (включно зі стіною), який за розмірами дорівнює вам або більший. Ви можете залишатися всередині обʼєкта стільки, скільки бажаєте. Перебуваючи всередині, ви можете спостерігати події та говорити з істотами зовні, але ви не маєте лінії ефекту до нічого поза обʼєктом і навпаки. Ви можете вільно переміщатися всередині обʼєкта, поки не вийдете. Якщо обʼєкт, з яким ви злилися, буде зруйновано, ви отримуєте 10 шкоди і виходите з обʼєкта.')
						]
					})
				})
			]
		},
		{
			level: 4,
			features: [
				FactoryLogic.feature.create({
					id: 'elementalist-sub-1-4-1',
					name: 'Мантія Есенції: Землетрус',
					description: `
Поки у вас 3 або більше есенції та ви не вмираєте, ви випромінюєте ауру магії, радіус якої дорівнює вашому показнику Розуму. Ви можете вмикати та вимикати ауру за бажанням (дія не потрібна).

В кінці кожного вашого ходу ви можете відштовхнути кожного ворога в цій зоні на кількість клітинок, що дорівнює вашому показнику Розуму.`
				})
			]
		},
		{
			level: 5,
			features: [
				FactoryLogic.feature.createMultiple({
					id: 'elementalist-sub-1-5-1',
					name: 'Гора не зрушиться',
					description: `
Ви стоїте міцно і притягуєте союзників, щоб вони залишалися вкоріненими. Ваша стабільність збільшується на значення вашого рівня.

Крім того, коли союзник у межах дальності вашої здібності «Кинути Елемент» зазнає примусового переміщення, ви можете використати безкоштовну тригерну дію, щоб знизити вашу стабільність до мінімуму 0, а потім збільшити стабільність союзника на величину, рівну втраченій вами стабільності. Ця зміна триває до кінця раунду.`,
					features: [
						FactoryLogic.feature.createBonus({
							id: 'elementalist-sub-1-5-1a',
							field: FeatureField.Stability,
							value: 1,
							valuePerLevel: 1
						}),
						FactoryLogic.feature.createAbility({
							ability: FactoryLogic.createAbility({
								id: 'elementalist-sub-1-5-1b',
								name: 'Гора не зрушиться',
								type: FactoryLogic.type.createTrigger('Ціль зазнає примусового переміщення', { free: true }),
								distance: [FactoryLogic.distance.createSpecial('Дальність вашої здібності «Кинути Елемент»')],
								target: 'Один союзник',
								sections: [
									FactoryLogic.createAbilitySectionText('Ви знижуєте свою стабільність до мінімуму 0, а потім збільшуєте стабільність цілі на величину, рівну втраченій вами стабільності. Ця зміна триває до кінця раунду.')
								]
							})
						})
					]
				})
			]
		},
		{
			level: 6,
			features: []
		},
		{
			level: 7,
			features: [
				FactoryLogic.feature.create({
					id: 'elementalist-sub-1-6-1',
					name: 'Мантія Квінтесенції',
					description: `
Ваша особливість «Мантія Есенції» більше не вимагає есенції.

Крім того, ваша Мантія Есенції тепер випромінює магію, що створює заспокійливу атмосферу. Істоти в зоні аури мантії отримують приріст початкового терпіння на 1 (до максимуму 5) під час будь-яких переговорів. Поки ви в зоні, ви та будь-який союзник отримуєте перевагу на перевірки, що використовують навичку «Управління тваринами». Якщо у вас 5 або більше Перемог, бонус до терпіння збільшується до 2, а перевірки з «Управління тваринами» мають подвійний ефект.`
				})
			]
		},
		{
			level: 8,
			features: [
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'elementalist-sub-1-7-1',
						name: 'Призвати Джерело Землі',
						description: 'Ґрунт тремтить, коли з нього виривається елементаль, готовий служити.',
						type: FactoryLogic.type.createMain(),
						keywords: [AbilityKeyword.Earth, AbilityKeyword.Magic, AbilityKeyword.Ranged],
						distance: [FactoryLogic.distance.createRanged(10)],
						target: 'Особлива',
						sections: [
							FactoryLogic.createAbilitySectionText(`
З незайнятої клітинки в межах дистанції зʼявляється джерело землі. Джерело робить свій хід одразу після вас: може рухатися на відстань, що дорівнює його швидкості, і виконати або головну дію, або маневр. Джерело зникає на початку вашого наступного ходу.

Джерело починає сутичку з повною Витривалістю, але зберігає своє поточне значення Витривалості протягом усієї сутички, навіть якщо його відміняють і ви знову використовуєте цю здібність. Воно не може відновлювати Витривалість під час сутички. Коли Витривалість джерела зменшується до 0, ви не можете використовувати цю здібність знову, поки не здобудете 1 або більше Перемог.`),
							FactoryLogic.createAbilitySectionSpend({
								name: 'Тривати',
								value: 2,
								effect: 'Джерело робить ще один хід. Воно зникає на початку вашого наступного ходу.'
							})
						]
					})
				})
			]
		},
		{
			level: 10,
			features: [
				FactoryLogic.feature.create({
					id: 'elementalist-sub-1-8-1',
					name: 'Один: Майстер Землі',
					description: `
Ви стаєте втіленням елементу вашої обраної спеціалізації. Коли ви використовуєте магію, навколо вас кружляють елементальні частинки, і ваша шкіра набуває властивостей вашого елементу: земля — ґрунтовий або кам'яний вигляд, вогонь — наче тліюче полум'я, зелень — листковий візерунок, пустота — зоряне небо.

Ви маєте імунітет до шкоди 5.

Крім того, як діяльність відпочинку, ви можете формувати буденну землю навколо себе в радіусі 1 милі. Ви можете відкрити провалля, створити гори, зрівняти буденні споруди або цілі поселення, створити каньйони, підняти острови або занурити їх у море та виконувати подібні дії. Ви не можете використовувати цю діяльність відпочинку, якщо інша істота в межах 1 милі вже її використовує. Після використання ви не можете використовувати її знову протягом 10 днів.`
				})
			]
		}
	],
	abilities: [],
	selected: false
};
