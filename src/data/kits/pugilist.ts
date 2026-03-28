import { AbilityKeyword } from '@/enums/ability-keyword';
import { Characteristic } from '@/enums/characteristic';
import { FactoryLogic } from '@/logic/factory-logic';
import { Kit } from '@/models/kit';
import { KitWeapon } from '@/enums/kit-weapon';

export const pugilist: Kit = {
	id: 'kit-pugilist',
	name: 'Пугіліст',
	description: 'Створений для вуличних бійців і боксерів, набір «Пугіліст» відкриває стиль ближнього бою, що підсилює Витривалість і шкоду, дозволяючи вам порхати, мов метелик. Якщо ви хочете бути міцним і сильним героєм, який карає ворогів кулаками, цей набір для вас.',
	type: '',
	armor: [],
	weapon: [KitWeapon.Unarmed],
	stamina: 6,
	speed: 2,
	stability: 1,
	meleeDamage: FactoryLogic.createKitDamageBonus(1, 1, 1),
	rangedDamage: null,
	meleeDistance: 0,
	rangedDistance: 0,
	disengage: 0,
	features: [
		FactoryLogic.feature.createAbility({
			ability: FactoryLogic.createAbility({
				id: 'kit-pugilist-signature',
				name: 'Потанцюймо',
				description: 'Змушувати ворогів перечіплятися по всьому полю бою для вас так само природно, як дихати.',
				type: FactoryLogic.type.createMain(),
				keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
				distance: [FactoryLogic.distance.createMelee()],
				target: 'Одна істота',
				cost: 'signature',
				sections: [
					FactoryLogic.createAbilitySectionRoll(
						FactoryLogic.createPowerRoll({
							characteristic: [Characteristic.Might, Characteristic.Agility],
							tier1: '2 + С або Л шкоди',
							tier2: '5 + С або Л шкоди; зсунути на 1',
							tier3: '7 + С або Л шкоди; зсунути на 2'
						})
					),
					FactoryLogic.createAbilitySectionText('Після того як ви зсунули ціль, ви можете зміститися в будь-яку клітинку, яку вона залишила.')
				]
			})
		})
	]
};
