import { AbilityKeyword } from '@/enums/ability-keyword';
import { Characteristic } from '@/enums/characteristic';
import { FactoryLogic } from '@/logic/factory-logic';
import { Kit } from '@/models/kit';
import { KitArmor } from '@/enums/kit-armor';
import { KitWeapon } from '@/enums/kit-weapon';

export const warriorPriest: Kit = {
	id: 'kit-warrior-priest',
	name: 'Воїн-жрець',
	description: 'Набір «Воїн-жрець» насичує вашу зброю силою богів, перетворюючи її на знаряддя кари. Ви безстрашно входите в гущу бою завдяки божественній силі… і важкій броні, яку носите.',
	type: '',
	armor: [KitArmor.Heavy],
	weapon: [KitWeapon.Light],
	stamina: 9,
	speed: 1,
	stability: 1,
	meleeDamage: FactoryLogic.createKitDamageBonus(1, 1, 1),
	rangedDamage: null,
	meleeDistance: 0,
	rangedDistance: 0,
	disengage: 0,
	features: [
		FactoryLogic.feature.createAbility({
			ability: FactoryLogic.createAbility({
				id: 'kit-warrior-priest-signature',
				name: 'Послаблювальне тавро',
				description: 'Удар вашої зброї таврує ціль на погибель.',
				type: FactoryLogic.type.createMain(),
				keywords: [AbilityKeyword.Magic, AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
				distance: [FactoryLogic.distance.createMelee()],
				target: 'Одна істота або предмет',
				cost: 'signature',
				sections: [
					FactoryLogic.createAbilitySectionRoll(
						FactoryLogic.createPowerRoll({
							characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition, Characteristic.Presence],
							tier1: '2 + С, Р, І або П святої шкоди',
							tier2: '4 + С, Р, І або П святої шкоди',
							tier3: '7 + С, Р, І або П святої шкоди'
						})
					),
					FactoryLogic.createAbilitySectionText('До кінця наступного ходу цілі вона має вразливість до шкоди, рівну показнику характеристики, використаної для кидка сили цієї здібності.')
				]
			})
		})
	]
};
