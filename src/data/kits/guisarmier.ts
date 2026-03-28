import { AbilityKeyword } from '@/enums/ability-keyword';
import { Characteristic } from '@/enums/characteristic';
import { FactoryLogic } from '@/logic/factory-logic';
import { Kit } from '@/models/kit';
import { KitArmor } from '@/enums/kit-armor';
import { KitWeapon } from '@/enums/kit-weapon';

export const guisarmier: Kit = {
	id: 'kit-guisarmier',
	name: 'Гвізармієр',
	description: 'Набір «Гвізармієр» для тих, хто хоче битися держаковою зброєю з подовженою досяжністю, залишаючись захищеним міцною бронею. Саме цей набір робить вас майстром алебарди, довгого списа чи глефи.',
	type: '',
	armor: [KitArmor.Medium],
	weapon: [KitWeapon.Polearm],
	stamina: 6,
	speed: 0,
	stability: 1,
	meleeDamage: FactoryLogic.createKitDamageBonus(2, 2, 2),
	rangedDamage: null,
	meleeDistance: 1,
	rangedDistance: 0,
	disengage: 0,
	features: [
		FactoryLogic.feature.createAbility({
			ability: FactoryLogic.createAbility({
				id: 'kit-guisarmier-signature',
				name: 'Колю вперед, бʼю назад',
				description: 'У ваших руках древко не менш небезпечне, ніж вістря.',
				type: FactoryLogic.type.createMain(),
				keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
				distance: [FactoryLogic.distance.createMelee()],
				target: 'Дві істоти або предмети',
				cost: 'signature',
				sections: [
					FactoryLogic.createAbilitySectionRoll(
						FactoryLogic.createPowerRoll({
							characteristic: [Characteristic.Might, Characteristic.Agility],
							tier1: '2 шкоди',
							tier2: '5 шкоди',
							tier3: '7 шкоди'
						})
					)
				]
			})
		})
	]
};
