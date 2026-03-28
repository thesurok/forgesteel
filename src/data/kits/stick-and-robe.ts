import { AbilityKeyword } from '@/enums/ability-keyword';
import { Characteristic } from '@/enums/characteristic';
import { FactoryLogic } from '@/logic/factory-logic';
import { Kit } from '@/models/kit';
import { KitArmor } from '@/enums/kit-armor';
import { KitWeapon } from '@/enums/kit-weapon';

export const stickAndRobe: Kit = {
	id: 'kit-stick-and-robe',
	name: 'Посох і ряса',
	description: 'Озброєний простою зброєю з досяжністю, зазвичай бойовим посохом, герой із набором «Посох і ряса» дуже рухливий завдяки легкій броні. Це дозволяє якнайкраще використати довжину зброї.',
	type: '',
	armor: [KitArmor.Light],
	weapon: [KitWeapon.Polearm],
	stamina: 3,
	speed: 2,
	stability: 0,
	meleeDamage: FactoryLogic.createKitDamageBonus(1, 1, 1),
	rangedDamage: null,
	meleeDistance: 1,
	rangedDistance: 0,
	disengage: 1,
	features: [
		FactoryLogic.feature.createAbility({
			ability: FactoryLogic.createAbility({
				id: 'kit-stick-and-robe-signature',
				name: 'Там, де мені треба',
				description: 'Коли говорить ваш посох, ворог рухається.',
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
							tier2: '6 + С або Л шкоди; зсунути на 1',
							tier3: '9 + С або Л шкоди; зсунути на 3'
						})
					)
				]
			})
		})
	]
};
