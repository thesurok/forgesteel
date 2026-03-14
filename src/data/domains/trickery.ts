import { AbilityDistanceType } from '@/enums/ability-distance-type';
import { AbilityKeyword } from '@/enums/ability-keyword';
import { Domain } from '@/models/domain';
import { FactoryLogic } from '@/logic/factory-logic';
import { SkillList } from '@/enums/skill-list';

export const trickery: Domain = {
	id: 'domain-trickery',
	name: 'Підступність',
	description: 'Домена Підступності.',
	featuresByLevel: [
		{
			level: 1,
			features: [
				FactoryLogic.feature.createMultiple({
					id: 'domain-trickery-1',
					features: [
						FactoryLogic.feature.create({
							id: 'domain-trickery-1-1',
							name: 'Натхненний обман',
							description: 'Боги прихильно ставляться до твоєї хитрості за допомогою магії. Коли ти проходиш випробування з навичкою з групи інтриги, ти можеш використовувати Інтуїцію для цього випробування замість іншої характеристики.'
						}),
						FactoryLogic.feature.createSkillChoice({
							id: 'domain-trickery-1-2',
							listOptions: [SkillList.Intrigue]
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
						id: 'domain-trickery-2',
						name: 'Божественна комедія',
						description: 'Ти та твої союзники міняєтеся місцями, щоб збити ворогів з пантелику.',
						type: FactoryLogic.type.createManeuver(),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
						distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 5 })],
						target: 'Ти та кожен союзник у зоні',
						cost: 5,
						sections: [
							FactoryLogic.createAbilitySectionText('Кожен цільовий може обрати іншу істоту в зоні, а потім помінятися з нею місцями. Обрана істота повинна поміщатися на місці, яке залишає ціль, і навпаки.')
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
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'domain-trickery-4',
						name: 'Благословення таємниць',
						description: 'Ти створюєш ілюзорну ауру, яка ускладнює помічення тебе та союзників.',
						type: FactoryLogic.type.createManeuver(),
						keywords: [AbilityKeyword.Magic],
						distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Aura, value: 3 })],
						target: 'Ти та кожен союзник у зоні',
						sections: [
							FactoryLogic.createAbilitySectionText('Кожна істота в зоні отримує подвійну перевагу на випробуваннях на приховування або підкрадання. Аура триває, доки ти не припиниш її (без дії) або доки ціль не завдасть шкоди істоті чи обʼєкту.')
						]
					})
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
						id: 'domain-trickery-6',
						name: 'Заклик таємниці',
						description: '"Тепер ти нас бачиш…"',
						type: FactoryLogic.type.createManeuver(),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
						distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 4 })],
						target: 'Ти та кожен союзник у зоні',
						cost: 9,
						sections: [
							FactoryLogic.createAbilitySectionText('Кожна ціль стає невидимою до початку твого наступного ходу.')
						]
					})
				})
			]
		},
		{
			level: 7,
			features: [
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'domain-trickery-7',
						name: 'Трійця підступності',
						description: 'Гей! Я тут. Ні, тут, дурнику.',
						type: FactoryLogic.type.createManeuver(),
						keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged],
						distance: [FactoryLogic.distance.createRanged(10)],
						target: 'Ти або один союзник',
						sections: [
							FactoryLogic.createAbilitySectionText('Ти створюєш дві ілюзорні копії цілі, які зʼявляються будь-де в межах дистанції. Ці копії існують до кінця сутички. На кожному зі своїх ходів ціль може перемістити кожну копію на відстань до своєї швидкості. Якщо ціль стає мішенню здібності, вона може безкоштовно переміститися з копією в межах лінії ефекту, зробивши копію мішенню замість себе. Коли копія отримує шкоду, вона знищується.')
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
						id: 'domain-trickery-9',
						name: 'Ніч опускається',
						description: 'Ти насилаєш темряву, яка заважає лише ворогам.',
						type: FactoryLogic.type.createMain(),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Magic, AbilityKeyword.Ranged],
						distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Cube, value: 5, within: 10 })],
						target: 'Особлива',
						cost: 11,
						sections: [
							FactoryLogic.createAbilitySectionText('До кінця сутички або поки ти не вмираєш, зона наповнюється магічною темрявою, крізь яку вороги не можуть бачити, але ти та твої союзники бачите.')
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
			trigger: 'Вперше за сутичку, коли ти або істота в межах 10 клітинок використовує маневр Допомога Атаці або Ховатися',
			value: '2'
		}
	],
	defaultFeatures: [
		FactoryLogic.feature.createPackageContent({
			id: 'trickery-default-1',
			name: 'Ефект молитви Підступності',
			description: 'Ти пересуваєш одну істоту в межах 10 клітинок від себе на кількість клітинок, що дорівнює 5 + твій рівень провідника.',
			tag: 'conduit-prayer'
		})
	]
};
