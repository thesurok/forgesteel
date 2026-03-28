import { AbilityKeyword } from '@/enums/ability-keyword';
import { Characteristic } from '@/enums/characteristic';
import { FactoryLogic } from '@/logic/factory-logic';
import { Kit } from '@/models/kit';
import { KitWeapon } from '@/enums/kit-weapon';

export const martialArtist: Kit = {
	id: 'kit-martial-artist',
	name: 'Майстер бойових мистецтв',
	description: 'Якщо ви хочете бути швидкими в бою, набір «Майстер бойових мистецтв» саме для вас. Не обтяжений зброєю чи бронею, цей стиль винагороджує швидкі, зосереджені беззбройні удари й робить вас неперевершеним застрільником.',
	type: '',
	armor: [],
	weapon: [KitWeapon.Unarmed],
	stamina: 3,
	speed: 3,
	stability: 0,
	meleeDamage: FactoryLogic.createKitDamageBonus(2, 2, 2),
	rangedDamage: null,
	meleeDistance: 0,
	rangedDistance: 0,
	disengage: 1,
	features: [
		FactoryLogic.feature.createAbility({
			ability: FactoryLogic.createAbility({
				id: 'kit-martial-artist-signature',
				name: 'Бойова грація',
				description: 'Ви використовуєте фінт, щоб пересунути ворогів у вигідне для себе положення.',
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
							tier2: '6 + С або Л шкоди; ви міняєтеся місцями з ціллю',
							tier3: '9 + С або Л шкоди; ви міняєтеся місцями з ціллю'
						})
					),
					FactoryLogic.createAbilitySectionText('Якщо ви отримали результат 2 або 3 рівня, але не можете помінятися місцями з ціллю, бо хтось із вас завеликий для нового простору, ви обоє лишаєтеся на місцях, а ціль отримує додаткову 1 шкоду.')
				]
			})
		})
	]
};
