import { AbilityKeyword } from '@/enums/ability-keyword';
import { DamageModifierType } from '@/enums/damage-modifier-type';
import { DamageType } from '@/enums/damage-type';
import { FactoryLogic } from '@/logic/factory-logic';
import { SubClass } from '@/models/subclass';

export const fire: SubClass = {
	id: 'elementalist-sub-2',
	name: 'Вогонь',
	description: 'Вогонь — елемент руйнування. Вогняні здібності нищать ворогів і перетворюють обʼєкти на шлак.',
	featuresByLevel: [
		{
			level: 1,
			features: [
				FactoryLogic.feature.createAbilityDamage({
					id: 'elementalist-sub-2-1-1',
					name: 'Адепт вогню',
					keywords: [AbilityKeyword.Fire, AbilityKeyword.Magic],
					value: 1
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'elementalist-sub-2-1-2',
						name: 'Повернення до безформності',
						description: 'Найменший дотик перетворює обʼєкт на шлак або попіл.',
						type: FactoryLogic.type.createMain(),
						keywords: [AbilityKeyword.Fire, AbilityKeyword.Magic, AbilityKeyword.Melee],
						distance: [FactoryLogic.distance.createMelee()],
						target: 'Один звичайний обʼєкт',
						sections: [
							FactoryLogic.createAbilitySectionText('Ви нагріваєте ціль і змушуєте її танути або горіти, знищуючи її. Якщо обʼєкт більший за 1 клітинку, то знищується лише клітинка обʼєкта, яку ви торкаєтесь.')
						]
					})
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'elementalist-sub-2-1-3',
						name: 'Вибухова підтримка',
						description: 'Ви додаєте трішки магії до агресії союзника у потрібний момент.',
						type: FactoryLogic.type.createTrigger('Цільова сила переміщує істоту чи обʼєкт.'),
						keywords: [AbilityKeyword.Fire, AbilityKeyword.Magic, AbilityKeyword.Ranged],
						distance: [FactoryLogic.distance.createRanged(10)],
						target: 'На себе або одного союзника',
						sections: [
							FactoryLogic.createAbilitySectionText('Відстань примусового переміщення отримує бонус, рівний вашому показнику Розуму.'),
							FactoryLogic.createAbilitySectionSpend({
								effect: 'Натомість відстань примусового переміщення отримує бонус, рівний подвоєному вашому показнику Розуму.'
							})
						]
					})
				})
			]
		},
		{
			level: 2,
			features: [
				FactoryLogic.feature.create({
					id: 'elementalist-sub-2-2-1',
					name: 'Учень вогню',
					description: `
Ваш зв'язок з вогнем дозволяє захищати себе від нього, одночасно зриваючи захист інших. Ви маєте імунітет до вогню, рівний 5 плюс ваш рівень. Крім того, вогняна шкода, яку ви наносите, ігнорує імунітет цілі до вогню.

На початку бойової сутички ви отримуєте кількість сплесків, рівну вашим Перемогам. Кожного разу, коли ви витрачаєте сплеск, щоб завдати додаткової шкоди, ви можете зробити цю шкоду вогняною.`
				}),
				FactoryLogic.feature.createDamageModifier({
					id: 'elementalist-sub-2-2-2',
					modifiers: [
						FactoryLogic.damageModifier.createValuePlusPerLevel({
							damageType: DamageType.Fire,
							modifierType: DamageModifierType.Immunity,
							value: 5,
							perLevel: 1
						})
					]
				})
			]
		},
		{
			level: 3,
			features: [
				FactoryLogic.feature.create({
					id: 'elementalist-sub-2-3-1',
					name: 'Розмова з вогнем',
					description: 'Коли ви проводите 1 безперервну хвилину біля вогню, ви можете вимовити імʼя іншої істоти. Якщо та істота погоджується говорити з вами, її образ зʼявляється у вогні, і вона бачить вас перед собою у сяйній кулі світла. Ви обоє можете розмовляти через ці образи, ніби ви перебуваєте поруч. Як маневр, ви або та істота можете завершити розмову.'
				})
			]
		},
		{
			level: 4,
			features: [
				FactoryLogic.feature.create({
					id: 'elementalist-sub-2-4-1',
					name: 'Мантія Есенції: Палаючі землі',
					description: `
Поки у вас 3 або більше есенції та ви не вмираєте, ви випромінюєте ауру магії на відстань, рівну вашому показнику Розуму. Ви можете вмикати й вимикати ауру за бажанням (без витрати дії).

Наприкінці кожного вашого ходу кожен ворог у зоні отримує вогняну шкоду, рівну вашому показнику Розуму.`
				})
			]
		},
		{
			level: 5,
			features: [
				FactoryLogic.feature.create({
					id: 'elementalist-sub-2-5-1',
					name: 'Тліючий крок',
					description: `
Ви можете витратити 1 клітинку руху, щоб увійти в область вогню вашого розміру або більшої й телепортуватися в будь-яку іншу область вогню вашого розміру або більшої в межах 10 клітинок від першої області.

Крім того, щоразу, коли ви використовуєте вогняну здібність або стаєте ціллю здібності, яка завдає вогняної шкоди, кожен ворог, що стоїть поруч з вами, отримує вогняну шкоду, рівну вашому показнику Розуму.`
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
					id: 'elementalist-sub-2-6-1',
					name: 'Мантія Квінтесенції',
					description: `
Властивість вашої Мантії Есенції більше не вимагає есенції.

Крім того, ваша Мантія Есенції тепер випромінює магію, що створює заспокійливу атмосферу. Істоти в зоні аури мантії мають початкове терпіння збільшене на 1 (до максимуму 5) під час будь-яких переговорів. Поки в зоні, ви та будь-який союзник отримуєте перевагу в перевірках, що використовують навичку «Управління тваринами». Якщо у вас 5 або більше Перемог, бонус до терпіння збільшується до 2, а перевірки з «Управління тваринами» мають подвійну перевагу.`
				})
			]
		},
		{
			level: 8,
			features: [
				FactoryLogic.feature.create({
					id: 'elementalist-sub-2-7-1',
					name: 'Первісне полумʼя',
					description: `
Ви створюєте вогонь, що зачаровує долі, відволікаючи їх від допомоги вашим ворогам. Кожного разу, коли ви завдаєте вогняної шкоди істоті або обʼєкту, вони отримують додаткову 1d6 вогняної шкоди. Якщо ви завдаєте вогняної шкоди звичайному обʼєкту, ви можете використати безкоштовну тригерну дію, щоб спрямувати на нього вашу здібність «Повернення до безформності».

Крім того, будь-який ворог, який починає свій хід поруч із вами, має слабкість до вогню, рівну вашому показнику Розуму, до початку свого наступного ходу. Це збільшується до двох разів вашого показника Розуму, якщо ворог зроблений з або носить переважно метал.`
				})
			]
		},
		{
			level: 10,
			features: [
				FactoryLogic.feature.create({
					id: 'elementalist-sub-2-8-1a',
					name: 'Один: Майстер вогню',
					description: `
Ви стаєте втіленням елемента вашої обраної спеціалізації. Коли ви використовуєте магію, навколо вас літають елементальні іскорки, і ваша шкіра змінює вигляд відповідно до елементу: земля — ґрунтова або камʼяниста текстура, вогонь — ніби мерехтливе полумʼя, зелень — листковий візерунок, пустота — зоряне небо.

Бонус до шкоди вашої здібності «Адепт вогню» збільшується до +5 і застосовується до всіх ваших магічних здібностей.

Крім того, вашу здібність «Повернення до безформності» можна використовувати на надприродних обʼєктах (але не на артефактах). Коли ви плавите скарб, ви отримуєте подих, рівний його ешелону.`
				})
			]
		}
	],
	abilities: [],
	selected: false
};
