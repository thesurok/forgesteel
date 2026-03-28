import { AbilityKeyword } from '@/enums/ability-keyword';
import { Characteristic } from '@/enums/characteristic';
import { FactoryLogic } from '@/logic/factory-logic';
import { Kit } from '@/models/kit';
import { KitArmor } from '@/enums/kit-armor';
import { KitWeapon } from '@/enums/kit-weapon';

export const raider: Kit = {
	id: 'kit-raider',
	name: 'Нальотник',
	description: 'Набір «Нальотник» захищає вас і водночас зберігає повну рухливість, підвищуючи швидкість і дистанцію так, що ви літаєте полем бою, мов воїн-вікінг.',
	type: '',
	armor: [KitArmor.Light, KitArmor.Shield],
	weapon: [KitWeapon.Light],
	stamina: 6,
	speed: 1,
	stability: 0,
	meleeDamage: FactoryLogic.createKitDamageBonus(1, 1, 1),
	rangedDamage: FactoryLogic.createKitDamageBonus(1, 1, 1),
	meleeDistance: 0,
	rangedDistance: 5,
	disengage: 1,
	features: [
		FactoryLogic.feature.createAbility({
			ability: FactoryLogic.createAbility({
				id: 'kit-raider-signature',
				name: 'Жах нальотника',
				description: 'Ви завдаєте жорстокого удару, після якого ворог хитається.',
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
							tier1: '2 + С або Л шкоди',
							tier2: '5 + С або Л шкоди',
							tier3: '7 + С або Л шкоди'
						})
					),
					FactoryLogic.createAbilitySectionText('Ціль отримує перешкоду на свій наступний кидок сили, зроблений до кінця її наступного ходу.')
				]
			})
		})
	]
};
