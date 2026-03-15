import { AbilityKeyword } from '@/enums/ability-keyword';
import { Characteristic } from '@/enums/characteristic';
import { Domain } from '@/models/domain';
import { FactoryLogic } from '@/logic/factory-logic';
import { SkillList } from '@/enums/skill-list';

export const creation: Domain = {
	id: 'domain-creation',
	name: 'Творення',
	description: 'Домена Творення.',
	featuresByLevel: [
		{
			level: 1,
			features: [
				FactoryLogic.feature.createMultiple({
					id: 'domain-creation-1',
					features: [
						FactoryLogic.feature.createAbility({
							ability: FactoryLogic.createAbility({
								id: 'domain-creation-1-1',
								name: 'Руки Творця',
								description: 'Ви можете створювати предмети силою розуму.',
								type: FactoryLogic.type.createManeuver(),
								keywords: [ AbilityKeyword.Magic ],
								distance: [ FactoryLogic.distance.createSelf() ],
								target: 'Self',
								sections: [
									FactoryLogic.createAbilitySectionText('Ви створюєте звичайний предмет розміру 1С або менше. Ви можете підтримувати одночасно кількість таких предметів, що дорівнює вашій Інтуїції. Ви можете знищити створений предмет думкою, незалежно від відстані (без дії).')
								]
							})
						}),
						FactoryLogic.feature.createSkillChoice({
							id: 'domain-creation-1-2',
							listOptions: [ SkillList.Crafting ]
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
						id: 'domain-creation-2',
						name: 'Статуя Сили',
						description: 'Мармурова статуя вашого божества піднімається з землі.',
						type: FactoryLogic.type.createManeuver(),
						keywords: [ AbilityKeyword.Magic, AbilityKeyword.Ranged ],
						distance: [ FactoryLogic.distance.createRanged(10) ],
						target: 'Special',
						cost: 5,
						sections: [
							FactoryLogic.createAbilitySectionText('Статуя розміру 2 зʼявляється на вільній клітинці в межах дистанції й існує до кінця сутички. Поки ви в межах 3 клітинок від статуї, ви отримуєте 1 сплеск на початку кожного свого ходу. Кожен союзник у межах 3 клітинок також отримує цю перевагу. Статуя знищується, якщо отримує 20 або більше шкоди. Вона має імунітет до отрути й психічної шкоди.')
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
					id: 'domain-creation-4',
					name: 'Покращені Руки Творця',
					description: 'Коли ви використовуєте здібність «Руки Творця», ви можете створити звичайний предмет розміру 2 або менше.'
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
						id: 'domain-creation-6',
						name: 'Машина Богів',
						description: 'Ви створюєте гудячий танк із лез і металу.',
						type: FactoryLogic.type.createMain(),
						keywords: [ AbilityKeyword.Magic, AbilityKeyword.Ranged ],
						distance: [ FactoryLogic.distance.createRanged(10) ],
						target: 'Special',
						cost: 9,
						sections: [
							FactoryLogic.createAbilitySectionText('Ви створюєте котячу машину розміру 2, яка зʼявляється на вільній клітинці в межах дистанції. Машина має 50 Витривалості й імунітет до отрути та психічної шкоди. Вона зникає наприкінці сутички, якщо її Витривалість падає до 0 або якщо ви вмираєте. Коли машина зʼявляється, зробіть наступний кидок сили по кожному ворогу поруч.'),
							FactoryLogic.createAbilitySectionRoll(
								FactoryLogic.createPowerRoll({
									characteristic: [ Characteristic.Intuition ],
									tier1: '3 шкоди',
									tier2: '5 шкоди',
									tier3: '8 шкоди'
								})
							),
							FactoryLogic.createAbilitySectionText('Раз на кожному наступному ході ви можете використати безкоштовний маневр, щоб перемістити машину на кількість клітинок, що дорівнює вашій Інтуїції, і повторити кидок сили.')

						]
					})
				})
			]
		},
		{
			level: 7,
			features: [
				FactoryLogic.feature.create({
					id: 'domain-creation-7',
					name: 'Божественний інтендант',
					description: 'Кожного разу, коли ви завершуєте відпочинок, ви можете обрати скарб із ціллю проєкту, що дорівнює 50 × ваш рівень або менше. Ви отримуєте божественну версію цього скарбу, яка існує до наступного відпочинку або поки не буде використана.'
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
						id: 'domain-creation-9',
						name: 'Божественний дракон',
						description: 'З нічого, лише божественною волею, ви створюєте могутнього союзника.',
						type: FactoryLogic.type.createMain(),
						keywords: [ AbilityKeyword.Magic, AbilityKeyword.Ranged ],
						distance: [ FactoryLogic.distance.createRanged(10) ],
						target: 'Special',
						cost: 11,
						sections: [
							FactoryLogic.createAbilitySectionText(`
Ви створюєте дракона розміру 4, який зʼявляється на вільній клітинці в межах дистанції. Дракон має швидкість 6, може літати, стабільність 4, 100 Витривалості, імунітет до вогню й використовує ваші характеристики. Дракон зникає наприкінці сутички, якщо його Витривалість падає до 0 або якщо ви вмираєте.

На наступних ходах ви можете використати основну дію, щоб наказати дракону дихати магічним вогнем у кубі 3 в межах 1 клітинки від нього. Зробіть наступний кидок сили по кожному ворогу в області.`),
							FactoryLogic.createAbilitySectionRoll(
								FactoryLogic.createPowerRoll({
									characteristic: [ Characteristic.Intuition ],
									tier1: '5 вогняної шкоди',
									tier2: '9 вогняної шкоди',
									tier3: '12 вогняної шкоди'
								})
							),
							FactoryLogic.createAbilitySectionText('Крім того, ви можете використати маневр, щоб перемістити дракона на його швидкість або завдати удару кігтем по сусідній істоті чи обʼєкту. Дракон також може зробити цей удар як безкоштовний.'),
							FactoryLogic.createAbilitySectionRoll(
								FactoryLogic.createPowerRoll({
									characteristic: [ Characteristic.Intuition ],
									tier1: '3 + І шкоди',
									tier2: '5 + І шкоди',
									tier3: '8 + І шкоди'
								})
							)
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
			resource: 'Piety',
			tag: '',
			trigger: 'Вперше за сутичку, коли істота в межах 10 клітинок від вас використовує зональну здібність.',
			value: '2'
		}
	],
	defaultFeatures: [
		FactoryLogic.feature.createPackageContent({
			id: 'creation-default-1',
			name: 'Creation Prayer Effect',
			description: 'You summon the forces of creation and create a wall of stone within 10 squares whose size is 5 + your Intuition score. The wall lasts until the end of the encounter.',
			tag: 'conduit-prayer'
		})
	]
};
