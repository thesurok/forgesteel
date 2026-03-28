import { AbilityKeyword } from '@/enums/ability-keyword';
import { Characteristic } from '@/enums/characteristic';
import { FactoryLogic } from '@/logic/factory-logic';
import { Kit } from '@/models/kit';
import { KitArmor } from '@/enums/kit-armor';
import { KitWeapon } from '@/enums/kit-weapon';

export const rapidFire: Kit = {
	id: 'kit-rapid-fire',
	name: 'Швидкий вогонь',
	description: 'Набір «Швидкий вогонь» для лучників, які хочуть завдати максимальної шкоди, випустивши якомога більше стріл у найближчих ворогів. З ним ваша бойова техніка зосереджена на тому, щоб нашпигувати ворогів стрілами, перш ніж вони підійдуть достатньо близько для контратаки.',
	type: '',
	armor: [KitArmor.Light],
	weapon: [KitWeapon.Bow],
	stamina: 3,
	speed: 1,
	stability: 0,
	meleeDamage: null,
	rangedDamage: FactoryLogic.createKitDamageBonus(2, 2, 2),
	meleeDistance: 0,
	rangedDistance: 7,
	disengage: 1,
	features: [
		FactoryLogic.feature.createAbility({
			ability: FactoryLogic.createAbility({
				id: 'kit-rapid-fire-signature',
				name: 'Подвійний постріл',
				description: 'Коли ви випускаєте дві стріли одна за одною, обидві влучають у ціль.',
				type: FactoryLogic.type.createMain(),
				keywords: [AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon],
				distance: [FactoryLogic.distance.createRanged(5)],
				target: 'Дві істоти або предмети',
				cost: 'signature',
				sections: [
					FactoryLogic.createAbilitySectionRoll(
						FactoryLogic.createPowerRoll({
							characteristic: [Characteristic.Might, Characteristic.Agility],
							tier1: '2 шкоди',
							tier2: '4 шкоди',
							tier3: '6 шкоди'
						})
					)
				]
			})
		})
	]
};
