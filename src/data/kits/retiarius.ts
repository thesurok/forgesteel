import { AbilityKeyword } from '@/enums/ability-keyword';
import { Characteristic } from '@/enums/characteristic';
import { FactoryLogic } from '@/logic/factory-logic';
import { Kit } from '@/models/kit';
import { KitArmor } from '@/enums/kit-armor';
import { KitWeapon } from '@/enums/kit-weapon';

export const retiarius: Kit = {
	id: 'kit-retiarius',
	name: 'Ретіарій',
	description: 'Ретіарія часто зображають легкоброньованим воїном із сіткою в одній руці та тризубом в іншій, і цей набір дає вам спорядження та техніку бою, щоб втілити саме це. Спершу сплутайте ворога сіткою, а потім заколіть його!',
	type: '',
	armor: [KitArmor.Light],
	weapon: [KitWeapon.Polearm, KitWeapon.Ensnaring],
	stamina: 3,
	speed: 1,
	stability: 0,
	meleeDamage: FactoryLogic.createKitDamageBonus(2, 2, 2),
	rangedDamage: null,
	meleeDistance: 1,
	rangedDistance: 0,
	disengage: 1,
	features: [
		FactoryLogic.feature.createAbility({
			ability: FactoryLogic.createAbility({
				id: 'kit-retiarius-signature',
				name: 'Сітка й удар',
				description: 'Влучно кинута після основної атаки сітка лишає ворога саме там, де вам потрібно.',
				type: FactoryLogic.type.createMain(),
				keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
				distance: [FactoryLogic.distance.createMelee()],
				target: 'Одна істота',
				cost: 'signature',
				sections: [
					FactoryLogic.createAbilitySectionRoll(
						FactoryLogic.createPowerRoll({
							characteristic: [Characteristic.Might, Characteristic.Agility],
							tier1: '2 + С або Л шкоди; Л < [слабкий] сповільнений (до кінця ходу)',
							tier2: '4 + С або Л шкоди; Л < [середній] сповільнений (до кінця ходу)',
							tier3: '6 + С або Л шкоди; Л < [сильний] скутий (до кінця ходу)'
						})
					)
				]
			})
		})
	]
};
