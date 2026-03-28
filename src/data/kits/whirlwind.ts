import { AbilityKeyword } from '@/enums/ability-keyword';
import { Characteristic } from '@/enums/characteristic';
import { FactoryLogic } from '@/logic/factory-logic';
import { Kit } from '@/models/kit';
import { KitWeapon } from '@/enums/kit-weapon';

export const whirlwind: Kit = {
	id: 'kit-whirlwind',
	name: 'Вихор',
	description: 'Набір «Вихор» дозволяє ефективно використовувати батоги, надаючи вам рухливість, шкоду й досяжність. Якщо ви хочете бути швидким воїном, що шмагає ворогів ланцюгом чи батогом, це саме ваш набір.',
	type: '',
	armor: [],
	weapon: [KitWeapon.Whip],
	stamina: 0,
	speed: 3,
	stability: 0,
	meleeDamage: FactoryLogic.createKitDamageBonus(1, 1, 1),
	rangedDamage: null,
	meleeDistance: 1,
	rangedDistance: 0,
	disengage: 1,
	features: [
		FactoryLogic.feature.createAbility({
			ability: FactoryLogic.createAbility({
				id: 'kit-whirlwind-signature',
				name: 'Продовження моєї руки',
				description: 'Коли ви відтягуєте батіг після удару, ворога тягне дедалі ближче.',
				type: FactoryLogic.type.createMain(),
				keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
				distance: [FactoryLogic.distance.createMelee(2)],
				target: 'Одна істота',
				cost: 'signature',
				sections: [
					FactoryLogic.createAbilitySectionRoll(
						FactoryLogic.createPowerRoll({
							characteristic: [Characteristic.Might, Characteristic.Agility],
							tier1: '3 + С або Л шкоди; вертикально притягнути на 1',
							tier2: '6 + С або Л шкоди; вертикально притягнути на 2',
							tier3: '9 + С або Л шкоди; вертикально притягнути на 3'
						})
					)
				]
			})
		})
	]
};
