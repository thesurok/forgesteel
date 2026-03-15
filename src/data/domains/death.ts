import { AbilityDistanceType } from '@/enums/ability-distance-type';
import { AbilityKeyword } from '@/enums/ability-keyword';
import { Domain } from '@/models/domain';
import { FactoryLogic } from '@/logic/factory-logic';
import { SkillList } from '@/enums/skill-list';

export const death: Domain = {
	id: 'domain-death',
	name: 'Смерть',
	description: 'Домена Смерті.',
	featuresByLevel: [
		{
			level: 1,
			features: [
				FactoryLogic.feature.createMultiple({
					id: 'domain-death-1',
					features: [
						FactoryLogic.feature.createAbility({
							ability: FactoryLogic.createAbility({
								id: 'domain-death-1-1',
								name: 'Мова Могили',
								description: 'Ви спілкуєтеся з душею нещодавно померлого.',
								type: FactoryLogic.type.createManeuver(),
								keywords: [ AbilityKeyword.Magic ],
								distance: [ FactoryLogic.distance.createMelee() ],
								target: 'Одна мертва істота',
								sections: [
									FactoryLogic.createAbilitySectionText('Ви можете говорити з ціллю, якщо це істота, яка померла протягом останніх 24 годин і знає мову, якою ви володієте, навіть якщо це лише голова. Ціль ставиться до вас так, як ставилася за життя, і вам, можливо, доведеться проходити випробування, щоб вплинути на неї чи переконати говорити. Травма смерті може зробити спогади про цю подію нечіткими, але ціль знає все, що знала за життя. Через 1 хвилину ефект закінчується. Ви не можете використати цю здібність на тій самій істоті двічі.')
								]
							})
						}),
						FactoryLogic.feature.createSkillChoice({
							id: 'domain-death-1-2',
							listOptions: [ SkillList.Lore ]
						})
					]
				})
			]
		},
		{
			level: 2,
			features: [
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'domain-death-2',
						name: 'Жнива',
						description: 'Боги винагороджують тих, хто карає ворогів.',
						type: FactoryLogic.type.createManeuver(),
						keywords: [ AbilityKeyword.Magic, AbilityKeyword.Ranged ],
						distance: [ FactoryLogic.distance.createRanged(10) ],
						target: 'Кожен союзник',
						cost: 5,
						sections: [
							FactoryLogic.createAbilitySectionText('До початку вашого наступного ходу, кожного разу, коли ціль вбиває ворога, вона відновлює Витривалість, що дорівнює 5 + ваша Інтуїція.')
						]
					})
				})
			]
		},
		{
			level: 3,
			features: []
		},
		{
			level: 4,
			features: [
				FactoryLogic.feature.create({
					id: 'domain-death-4',
					name: 'Сеанс',
					description: 'Ви можете спілкуватися з мережею духів. Під час відпочинку ви називаєте імʼя істоти, яка померла і не є нежиттю. Якщо дух істоти вільний і бажає говорити з вами, він зʼявляється, і ви можете поговорити з ним. Під час цієї розмови істота відповідає так, як робила б за життя. Якщо дух не вільний або не бажає зʼявлятися, ви можете назвати інше імʼя або обрати іншу дію відпочинку.'
				})
			]
		},
		{
			level: 5,
			features: []
		},
		{
			level: 6,
			features: [
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'domain-death-6',
						name: 'Аура Душ',
						description: 'Вихор душ померлих кружляє навколо вас за вашим наказом.',
						type: FactoryLogic.type.createManeuver(),
						keywords: [ AbilityKeyword.Area, AbilityKeyword.Magic ],
						distance: [ FactoryLogic.distance.create({ type: AbilityDistanceType.Aura, value: 3 }) ],
						target: 'Кожна істота в області',
						cost: 9,
						sections: [
							FactoryLogic.createAbilitySectionText('До кінця сутички або поки ви не вмираєте, наприкінці кожного вашого ходу ви можете зсунути кожну істоту в області на кількість клітинок, що дорівнює вашій Інтуїції. Це примусове переміщення ігнорує стабільність для ваших союзників.')
						]
					})
				})
			]
		},
		{
			level: 7,
			features: [
				FactoryLogic.feature.create({
					id: 'domain-death-7',
					name: 'Слово Відкладеної Смерті',
					description: `
Ви можете зупинити смерть для своїх союзників. Коли союзник у межах дії вашої здібності «Благодать Зцілення» помирає, а ви не вмираєте, ви можете безкоштовною тригерною дією замість смерті змусити союзника впасти без свідомості до відновлення Витривалості.

Крім того, ваші здібності завдають додатково 5 шкоди захеканим істотам.`
				})
			]
		},
		{
			level: 8,
			features: []
		},
		{
			level: 9,
			features: [
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'domain-death-9',
						name: 'Слово Останнього Спасіння',
						description: 'Ваша смерть підживить нашу перемогу.',
						type: FactoryLogic.type.createTrigger('The target dies.', { free: true }),
						keywords: [ AbilityKeyword.Magic, AbilityKeyword.Ranged ],
						distance: [ FactoryLogic.distance.createRanged(10) ],
						target: 'Одна істота',
						cost: 11,
						sections: [
							FactoryLogic.createAbilitySectionText('Перед смертю цілі ви можете переглянути її блок характеристик і змусити використати одну здібність, яка є основною дією або маневром. Якщо здібність коштує Героїчний Ресурс або Злобу, істота може використати її безкоштовно. Для цієї здібності ваші союзники й вороги стають союзниками й ворогами цілі, а ви вирішуєте, кого вона обирає ціллю.')
						]
					})
				})
			]
		},
		{
			level: 10,
			features: []
		}
	],
	resourceGains: [
		{
			resource: 'Благочестя',
			tag: '',
			trigger: 'Вперше за сутичку, коли істота в межах 10 клітинок, яка не є міньйоном, знижена до 0 Витривалості, або вперше за сутичку, коли соло-істота в межах 10 клітинок стає захеканою.',
			value: '2'
		}
	],
	defaultFeatures: [
		FactoryLogic.feature.createPackageContent({
			id: 'death-default-1',
			name: 'Ефект Молитви Смерті',
			description: 'Ви накладаєте смертельне прокляття на до двох ворогів у межах 10 клітинок від себе. Кожна ціль отримує шкоду скверною, що дорівнює подвоєній вашій Інтуїції.',
			tag: 'conduit-prayer'
		})
	]
};
