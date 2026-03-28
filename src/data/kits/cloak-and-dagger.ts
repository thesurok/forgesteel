import { AbilityKeyword } from '@/enums/ability-keyword';
import { Characteristic } from '@/enums/characteristic';
import { FactoryLogic } from '@/logic/factory-logic';
import { Kit } from '@/models/kit';
import { KitArmor } from '@/enums/kit-armor';
import { KitWeapon } from '@/enums/kit-weapon';

export const cloakAndDagger: Kit = {
	id: 'kit-cloak-and-dagger',
	name: 'Плащ і кинджал',
	description: 'Набір «Плащ і кинджал» дає метальну легку зброю та легку броню, яку легко сховати під плащем, щоб збивати ворогів з пантелику. Він робить вас рухливішими й посилює ваші ближньодистанційні удари.',
	type: '',
	armor: [KitArmor.Light],
	weapon: [KitWeapon.Light],
	stamina: 3,
	speed: 2,
	stability: 0,
	meleeDamage: FactoryLogic.createKitDamageBonus(1, 1, 1),
	rangedDamage: FactoryLogic.createKitDamageBonus(1, 1, 1),
	meleeDistance: 0,
	rangedDistance: 5,
	disengage: 1,
	features: [
		FactoryLogic.feature.createAbility({
			ability: FactoryLogic.createAbility({
				id: 'kit-cloak-and-dagger-signature',
				name: 'Відступ у тінь',
				description: 'Укол, а потім кілька швидких і обережних кроків назад.',
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
							characteristic: [Characteristic.Might, Characteristic.Agility],
							tier1: '2 + С або Л шкоди; ви зміщуєтеся на 1 клітинку',
							tier2: '5 + С або Л шкоди; ви зміщуєтеся до 2 клітинок',
							tier3: '7 + С або Л шкоди; ви зміщуєтеся до 3 клітинок'
						})
					)
				]
			})
		})
	]
};
