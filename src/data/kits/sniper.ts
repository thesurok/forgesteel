import { AbilityKeyword } from '@/enums/ability-keyword';
import { Characteristic } from '@/enums/characteristic';
import { FactoryLogic } from '@/logic/factory-logic';
import { Kit } from '@/models/kit';
import { KitWeapon } from '@/enums/kit-weapon';

export const sniper: Kit = {
	id: 'kit-sniper',
	name: 'Снайпер',
	description: 'Набір «Снайпер» дає вам інструменти й техніки, щоб знімати ворогів здалеку. Завдяки йому ви стаєте лучником, що ховається за деревами чи в тунелях і відстрілює ворогів з лука або арбалета, щойно ті наближаються.',
	type: '',
	armor: [],
	weapon: [KitWeapon.Bow],
	stamina: 0,
	speed: 1,
	stability: 0,
	meleeDamage: null,
	rangedDamage: FactoryLogic.createKitDamageBonus(0, 0, 4),
	meleeDistance: 0,
	rangedDistance: 10,
	disengage: 1,
	features: [
		FactoryLogic.feature.createAbility({
			ability: FactoryLogic.createAbility({
				id: 'kit-sniper-signature',
				name: 'Терплячий постріл',
				description: 'Вдих… приціл… очікування… і удар!',
				type: FactoryLogic.type.createMain(),
				keywords: [AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon],
				distance: [FactoryLogic.distance.createRanged(5)],
				target: 'Одна істота',
				cost: 'signature',
				sections: [
					FactoryLogic.createAbilitySectionRoll(
						FactoryLogic.createPowerRoll({
							characteristic: [Characteristic.Might, Characteristic.Agility],
							tier1: '3 + С або Л шкоди',
							tier2: '6 + С або Л шкоди',
							tier3: '9 + С або Л шкоди'
						})
					),
					FactoryLogic.createAbilitySectionText('Якщо цього ходу ви не виконуєте дію руху, цей удар завдає додаткової шкоди, рівної вашому показнику Сили або Ловкості на ваш вибір.')
				]
			})
		})
	]
};
