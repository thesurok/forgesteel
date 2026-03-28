import { AbilityDistanceType } from '@/enums/ability-distance-type';
import { AbilityKeyword } from '@/enums/ability-keyword';
import { FactoryLogic } from '@/logic/factory-logic';
import { Kit } from '@/models/kit';
import { KitArmor } from '@/enums/kit-armor';
import { KitWeapon } from '@/enums/kit-weapon';

export const stormcrow: Kit = {
	id: 'kit-stormcrow',
	name: 'Штормова ворона',
	description: 'Ваше спорядження вкрите елементальними рунами, що проводять крізь вас шалену первісну бурю, викликаючи хуртовини, урагани чи вогняні бурі, які носять вас полем бою. Цей набір найчастіше обирають звіросерця, що покладаються на стихійну силу, хоча швидкість, яку він дає, стане в пригоді звіросерцю будь-якої дикої вдачі.',
	type: 'Beastheart',
	armor: [KitArmor.Light],
	weapon: [KitWeapon.Light],
	stamina: 3,
	speed: 3,
	stability: 0,
	meleeDamage: FactoryLogic.createKitDamageBonus(2, 2, 2),
	rangedDamage: FactoryLogic.createKitDamageBonus(2, 2, 2),
	meleeDistance: 0,
	rangedDistance: 0,
	disengage: 1,
	features: [
		FactoryLogic.feature.createAbility({
			ability: FactoryLogic.createAbility({
				id: 'kit-stormcrow-1',
				name: 'Енергетичний вибух',
				description: 'Ви закликаєте стихії виконати вашу волю.',
				type: FactoryLogic.type.createManeuver(),
				keywords: [AbilityKeyword.Area, AbilityKeyword.Beastheart, AbilityKeyword.Magic],
				distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Line, value: 3, value2: 1 })],
				target: 'Кожен ворог у зоні',
				cost: 'signature',
				sections: [
					FactoryLogic.createAbilitySectionText('С холодної, вогняної, блискавичної або звукової шкоди (на ваш вибір)'),
					FactoryLogic.createAbilitySectionSpend({
						effect: 'Дистанція стає кубом 3 у межах 1.'
					})
				]
			})
		})
	]
};
