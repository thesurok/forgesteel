import { AbilityKeyword } from '@/enums/ability-keyword';
import { Characteristic } from '@/enums/characteristic';
import { FactoryLogic } from '@/logic/factory-logic';
import { Kit } from '@/models/kit';
import { KitArmor } from '@/enums/kit-armor';
import { KitWeapon } from '@/enums/kit-weapon';

export const spellsword: Kit = {
	id: 'kit-spellsword',
	name: 'Мечомаг',
	description: 'Набір «Мечомаг» поєднує ближні удари з дрібкою магії, дозволяючи створити воїна, якому не доводиться обирати між закляттям і клинком.',
	type: '',
	armor: [KitArmor.Light, KitArmor.Shield],
	weapon: [KitWeapon.Medium],
	stamina: 6,
	speed: 1,
	stability: 1,
	meleeDamage: FactoryLogic.createKitDamageBonus(2, 2, 2),
	rangedDamage: null,
	meleeDistance: 0,
	rangedDistance: 0,
	disengage: 0,
	features: [
		FactoryLogic.feature.createAbility({
			ability: FactoryLogic.createAbility({
				id: 'kit-spellsword-signature',
				name: 'Стрибуча блискавка',
				description: 'Коли ви завдаєте удару, блискавка перескакує з вашої зброї на сусіднього ворога.',
				type: FactoryLogic.type.createMain(),
				keywords: [AbilityKeyword.Magic, AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
				distance: [FactoryLogic.distance.createMelee()],
				target: 'Одна істота або предмет',
				cost: 'signature',
				sections: [
					FactoryLogic.createAbilitySectionRoll(
						FactoryLogic.createPowerRoll({
							characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition, Characteristic.Presence],
							tier1: '3 + С, Р, І або П блискавичної шкоди',
							tier2: '6 + С, Р, І або П блискавичної шкоди',
							tier3: '9 + С, Р, І або П блискавичної шкоди'
						})
					),
					FactoryLogic.createAbilitySectionText('Обрана вами істота або предмет у межах 2 клітинок від цілі отримує блискавичну шкоду, рівну показнику характеристики, використаної для кидка сили цієї здібності.')
				]
			})
		})
	]
};
