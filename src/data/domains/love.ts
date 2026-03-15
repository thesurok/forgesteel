import { AbilityKeyword } from '@/enums/ability-keyword';
import { Domain } from '@/models/domain';
import { FactoryLogic } from '@/logic/factory-logic';
import { SkillList } from '@/enums/skill-list';

export const love: Domain = {
	id: 'domain-love',
	name: 'Кохання',
	description: 'Сфера Кохання.',
	featuresByLevel: [
		{
			level: 1,
			features: [
				FactoryLogic.feature.createMultiple({
					id: 'domain-love-1',
					features: [
						FactoryLogic.feature.create({
							id: 'domain-love-1-1',
							name: 'Благословення співчуття',
							description: `
	Від вас виходить магічна аура, що заспокоює тих, хто готовий до соціальної взаємодії. Ви отримуєте перевагу на всі випробування для допомоги іншій істоті у випробуванні.

	Крім того, якщо ви присутні на початку перемовин, один НІП на ваш вибір отримує +1 до терпіння (максимум 5), а перше випробування для впливу на нього проходить із перевагою.`
						}),
						FactoryLogic.feature.createSkillChoice({
							id: 'domain-love-1-2',
							listOptions: [ SkillList.Interpersonal ]
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
						id: 'domain-love-2',
						name: 'Наші серця — твоя сила',
						description: 'Союзник черпає силу у друзів.',
						type: FactoryLogic.type.createManeuver(),
						keywords: [ AbilityKeyword.Magic, AbilityKeyword.Ranged ],
						distance: [ FactoryLogic.distance.createRanged(10) ],
						target: 'Ви та один союзник',
						cost: 5,
						sections: [
							FactoryLogic.createAbilitySectionText('До кінця сутички або поки ціль не перебуває у стані "Вмираючий", на початку кожного свого ходу ціль отримує бонус до швидкості та бонус до кидка шкоди, що дорівнює кількості союзників у межах 10 клітинок. Бонус триває до початку наступного ходу цілі.')
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
					id: 'domain-love-4',
					name: 'Поклик серця',
					description: 'Основною дією ви створюєте звʼязок кохання та дружби з істотою, яку торкаєтеся. Поки цей звʼязок активний, ви можете телепатично спілкуватися з істотою на будь-якій відстані, навіть між світами. Також ви можете допомагати цій істоті у будь-яких випробуваннях незалежно від відстані. Ви можете підтримувати лише один звʼязок одночасно, і можете розірвати його будь-коли (без дії).'
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
						id: 'domain-love-6',
						name: 'Звеличений богом',
						description: 'Ви благаєте богів дати союзникам усе необхідне для перемоги — і боги відповідають.',
						type: FactoryLogic.type.createManeuver(),
						keywords: [ AbilityKeyword.Magic, AbilityKeyword.Ranged ],
						distance: [ FactoryLogic.distance.createRanged(10) ],
						target: 'Два союзники',
						cost: 9,
						sections: [
							FactoryLogic.createAbilitySectionText('Кожна ціль отримує 3 одиниці свого героїчного ресурсу.')
						]
					})
				})
			]
		},
		{
			level: 7,
			features: [
				FactoryLogic.feature.create({
					id: 'domain-love-7-1',
					name: 'Завіт серця',
					description: 'Ви можете підтримувати звʼязки з трьома істотами одночасно, використовуючи властивість "Поклик серця".'
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'domain-love-7-2',
						name: 'Проведений до тебе',
						description: 'Ви концентруєтеся на другові й телепортуєтеся до нього.',
						type: FactoryLogic.type.createMain(),
						keywords: [ AbilityKeyword.Magic, AbilityKeyword.Ranged ],
						distance: [ FactoryLogic.distance.createRanged(10) ],
						target: 'Ви та кожен союзник',
						sections: [
							FactoryLogic.createAbilitySectionText('Кожна ціль телепортується на вільні клітинки в межах 5 клітинок від істоти, з якою ви маєте звʼязок через "Поклик серця". Вам не потрібна пряма лінія ефекту, але ви маєте бути в одному світі.')
						]
					})
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
						id: 'domain-love-9',
						name: 'Жвавість серця',
						description: 'Ви надихаєте друга словами, спонукаючи його до неймовірних вчинків.',
						type: FactoryLogic.type.createManeuver(),
						keywords: [ AbilityKeyword.Magic, AbilityKeyword.Ranged ],
						distance: [ FactoryLogic.distance.createRanged(10) ],
						target: 'один союзник',
						cost: 11,
						sections: [
							FactoryLogic.createAbilitySectionText('Ціль отримує додаткову основну дію на наступному ході та 3 одиниці свого героїчного ресурсу.')
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
			trigger: 'Вперше під час сутички, коли ви або союзник у межах 10 клітинок використовує маневр "Допомога в атаці" або здібність, що націлена на союзника',
			value: '2'
		}
	],
	defaultFeatures: [
		FactoryLogic.feature.createPackageContent({
			id: 'love-default-1',
			name: 'Ефект молитви Кохання',
			description: 'Кожен союзник у межах 10 клітинок отримує тимчасову Витривалість, що дорівнює подвоєному значенню вашої Інтуїції.',
			tag: 'conduit-prayer'
		})
	]
};
