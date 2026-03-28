import { AbilityKeyword } from '@/enums/ability-keyword';
import { Characteristic } from '@/enums/characteristic';
import { FactoryLogic } from '@/logic/factory-logic';
import { Kit } from '@/models/kit';
import { KitArmor } from '@/enums/kit-armor';
import { KitWeapon } from '@/enums/kit-weapon';

export const ranger: Kit = {
	id: 'kit-ranger',
	name: 'Слідопит',
	description: 'Набір «Слідопит» споряджає вас бронею та зброєю на всі випадки життя, дозволяючи легко перемикатися між ближнім і дистанційним боєм. Він дає добрий баланс захисту й наступу, створюючи героя на всі руки.',
	type: '',
	armor: [KitArmor.Medium],
	weapon: [KitWeapon.Medium, KitWeapon.Bow],
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
				id: 'kit-ranger-signature',
				name: 'Підсічний постріл',
				description: 'Влучний постріл лишає ворога ледве здатним рухатися.',
				type: FactoryLogic.type.createMain(),
				keywords: [AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon],
				distance: [FactoryLogic.distance.createRanged(5)],
				target: 'Одна істота',
				cost: 'signature',
				sections: [
					FactoryLogic.createAbilitySectionRoll(
						FactoryLogic.createPowerRoll({
							characteristic: [Characteristic.Might, Characteristic.Agility],
							tier1: '2 + С або Л шкоди; Л < [слабкий] сповільнений (рят. кидок закінчує)',
							tier2: '4 + С або Л шкоди; Л < [середній] сповільнений (рят. кидок закінчує)',
							tier3: '6 + С або Л шкоди; Л < [сильний] сповільнений (рят. кидок закінчує)'
						})
					)
				]
			})
		})
	]
};
