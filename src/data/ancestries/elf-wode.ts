import { EnvironmentData, OrganizationData, UpbringingData } from '@/data/culture-data';
import { AbilityKeyword } from '@/enums/ability-keyword';
import { Ancestry } from '@/models/ancestry';
import { Characteristic } from '@/enums/characteristic';
import { CultureType } from '@/enums/culture-type';
import { FactoryLogic } from '@/logic/factory-logic';

export const wodeElf: Ancestry = {
	id: 'ancestry-wode-elf',
	name: 'Ельф (вуд)',
	description: 'Діти лісових небожителів і господарі лісів, які називаються вудами, вудські ельфи вважають усі ліси своєю спадщиною. Вони знають і насолоджуються своєю репутацією серед людей за викрадення дітей, які заходять занадто далеко в ліс. Люди повинні боятися дерев.',
	features: [
		FactoryLogic.feature.create({
			id: 'wode-elf-feature-1',
			name: 'Вудська ельфійська чарівність',
			description: 'Ви можете магічно змінювати свою зовнішність, щоб краще зливатися з оточенням. Ви отримуєте перевагу на випробуваннях, зроблених для приховування та крадіжки, а випробування, зроблені для пошуку вас, поки ви приховані, отримують шкоду.'
		}),
		FactoryLogic.feature.createChoice({
			id: 'wode-elf-feature-2',
			name: 'Риси вудського ельфа',
			options: [
				{
					feature: FactoryLogic.feature.create({
						id: 'wode-elf-feature-2-1',
						name: 'Лісова хода',
						description: 'Ви можете зміщуватися в і під час перебування в складній місцевості.'
					}),
					value: 1
				},
				{
					feature: FactoryLogic.feature.create({
						id: 'wode-elf-feature-2-2',
						name: 'Повернення до спогадів',
						description: 'Доступ до спогадів для вас такий же легкий, як і життя в теперішньому. Ви отримуєте перевагу на випробуваннях, зроблених для згадування знань.'
					}),
					value: 1
				},
				{
					feature: FactoryLogic.feature.createSpeed({
						id: 'wode-elf-feature-2-3',
						name: 'Швидкий',
						speed: 6
					}),
					value: 1
				},
				{
					feature: FactoryLogic.feature.createSaveThreshold({
						id: 'wode-elf-feature-2-4',
						name: 'Інша світова грація',
						description: 'Ваше ельфійське тіло та розум не можуть бути стримані надовго. Коли ви робите рятувальний кидок, ви успішно проходите на результаті 5 або вище.',
						value: 5
					}),
					value: 2
				},
				{
					feature: FactoryLogic.feature.createAbility({
						ability: FactoryLogic.createAbility({
							id: 'wode-elf-feature-2-5',
							name: 'Вуд захищається',
							description: 'Колючі лози з’являються і намагаються зв’язати вашого ворога.',
							type: FactoryLogic.type.createMain(),
							keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged, AbilityKeyword.Strike],
							distance: [FactoryLogic.distance.createRanged(10)],
							target: 'Одна істота',
							cost: 'signature',
							sections: [
								FactoryLogic.createAbilitySectionRoll(
									FactoryLogic.createPowerRoll({
										characteristic: [Characteristic.Might, Characteristic.Agility],
										tier1: '2 + С або Л шкоди; Л < [слабкий] уповільнений (рят. кидок закінчує)',
										tier2: '3 + С або Л шкоди; Л < [середній] уповільнений (рят. кидок закінчує)',
										tier3: '5 + С або Л шкоди; Л < [сильний] сковування (рят. кидок закінчує)'
									})
								)
							]
						})
					}),
					value: 2
				},
				{
					feature: FactoryLogic.feature.create({
						id: 'wode-elf-feature-2-6',
						name: 'Швидкий і жорстокий',
						description: 'Коли ви завдаєте критичного удару, ви можете виконати додаткову основну дію та додаткову дію переміщення замість лише основної дії.'
					}),
					value: 1
				}
			],
			count: 'ancestry'
		})
	],
	ancestryPoints: 3,
	culture: FactoryLogic.createCulture('Вудський ельф', 'Дика природа, бюрократичний, військовий.', CultureType.Ancestral, EnvironmentData.wilderness, OrganizationData.bureaucratic, UpbringingData.martial, 'Іллірик (Yllyric)')
};
