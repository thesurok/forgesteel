import { AbilityKeyword } from '@/enums/ability-keyword';
import { Characteristic } from '@/enums/characteristic';
import { FactoryLogic } from '@/logic/factory-logic';
import { Kit } from '@/models/kit';
import { KitArmor } from '@/enums/kit-armor';
import { KitWeapon } from '@/enums/kit-weapon';

export const shiningArmor: Kit = {
	id: 'kit-shining-armor',
	name: 'Сяйлива броня',
	description: 'Набір «Сяйлива броня» дає найбільший захист, який тільки може забезпечити набір, надаючи вам меч, щит і броню, потрібні для втілення образу взірцевого лицаря.',
	type: '',
	armor: [KitArmor.Heavy, KitArmor.Shield],
	weapon: [KitWeapon.Medium],
	stamina: 12,
	speed: 0,
	stability: 1,
	meleeDamage: FactoryLogic.createKitDamageBonus(2, 2, 2),
	rangedDamage: null,
	meleeDistance: 0,
	rangedDistance: 0,
	disengage: 0,
	features: [
		FactoryLogic.feature.createAbility({
			ability: FactoryLogic.createAbility({
				id: 'kit-shining-armor-signature',
				name: 'Захисний удар',
				description: 'Сила вашого натиску не дозволяє ворогу просто проігнорувати вас.',
				type: FactoryLogic.type.createMain(),
				keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
				distance: [FactoryLogic.distance.createMelee()],
				target: 'Одна істота',
				cost: 'signature',
				sections: [
					FactoryLogic.createAbilitySectionRoll(
						FactoryLogic.createPowerRoll({
							characteristic: [Characteristic.Might, Characteristic.Agility],
							tier1: '3 + С або Л шкоди',
							tier2: '6 + С або Л шкоди',
							tier3: '9 + С або Л шкоди'
						})
					),
					FactoryLogic.createAbilitySectionText('Ціль спровокована до кінця свого наступного ходу.')
				]
			})
		})
	]
};
