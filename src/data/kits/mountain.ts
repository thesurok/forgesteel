import { AbilityKeyword } from '@/enums/ability-keyword';
import { Characteristic } from '@/enums/characteristic';
import { FactoryLogic } from '@/logic/factory-logic';
import { Kit } from '@/models/kit';
import { KitArmor } from '@/enums/kit-armor';
import { KitWeapon } from '@/enums/kit-weapon';

export const mountain: Kit = {
	id: 'kit-mountain',
	name: 'Гора',
	description: 'Набір «Гора» робить саме те, що обіцяє назва. Ви вдягаєте важку броню й берете важку зброю, щоб непохитно стояти проти ворогів і швидко трощити їх, коли настає ваш час бити.',
	type: '',
	armor: [KitArmor.Heavy],
	weapon: [KitWeapon.Heavy],
	stamina: 9,
	speed: 0,
	stability: 2,
	meleeDamage: FactoryLogic.createKitDamageBonus(0, 0, 4),
	rangedDamage: null,
	meleeDistance: 0,
	rangedDistance: 0,
	disengage: 0,
	features: [
		FactoryLogic.feature.createAbility({
			ability: FactoryLogic.createAbility({
				id: 'kit-mountain-signature',
				name: 'Біль за біль',
				description: 'Ворог, який вас зачепив, дорого за це заплатить.',
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
							tier2: '5 + С або Л шкоди',
							tier3: '9 + С або Л шкоди'
						})
					),
					FactoryLogic.createAbilitySectionText('Якщо ціль завдавала вам шкоди з кінця вашого минулого ходу, цей удар завдає додаткової шкоди, рівної вашому показнику Сили або Ловкості на ваш вибір.')
				]
			})
		})
	]
};
