import { AbilityKeyword } from '@/enums/ability-keyword';
import { Characteristic } from '@/enums/characteristic';
import { FactoryLogic } from '@/logic/factory-logic';
import { Kit } from '@/models/kit';
import { KitArmor } from '@/enums/kit-armor';
import { KitWeapon } from '@/enums/kit-weapon';

export const swordAndBoard: Kit = {
	id: 'kit-sword-and-board',
	name: 'Меч і щит',
	description: 'Набір «Меч і щит» не просто дає вам щит - він робить його частиною вашого наступального арсеналу. Зі зброєю середнього розміру в одній руці та плитою сталі чи міцного дуба в іншій ви захищаєте себе й водночас контролюєте поле бою.',
	type: '',
	armor: [KitArmor.Medium, KitArmor.Shield],
	weapon: [KitWeapon.Medium],
	stamina: 9,
	speed: 0,
	stability: 1,
	meleeDamage: FactoryLogic.createKitDamageBonus(2, 2, 2),
	rangedDamage: null,
	meleeDistance: 0,
	rangedDistance: 0,
	disengage: 1,
	features: [
		FactoryLogic.feature.createAbility({
			ability: FactoryLogic.createAbility({
				id: 'kit-sword-and-board-signature',
				name: 'Удар щитом',
				description: 'У ваших руках щит - це не лише захист.',
				type: FactoryLogic.type.createMain(),
				keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
				distance: [FactoryLogic.distance.createMelee()],
				target: 'Одна істота',
				cost: 'signature',
				sections: [
					FactoryLogic.createAbilitySectionRoll(
						FactoryLogic.createPowerRoll({
							characteristic: [Characteristic.Might, Characteristic.Agility],
							tier1: '2 + С або Л шкоди; штовхнути на 1',
							tier2: '5 + С або Л шкоди; штовхнути на 2',
							tier3: '7 + С або Л шкоди; штовхнути на 3; С < [сильний] розпластаний'
						})
					)
				]
			})
		})
	]
};
