import { AbilityKeyword } from '@/enums/ability-keyword';
import { Characteristic } from '@/enums/characteristic';
import { FactoryLogic } from '@/logic/factory-logic';
import { Kit } from '@/models/kit';
import { KitWeapon } from '@/enums/kit-weapon';

export const panther: Kit = {
	id: 'kit-panther',
	name: 'Пантера',
	description: 'Якщо вам потрібен добрий баланс захисту, швидкості та шкоди, набір «Пантера» саме для вас. Він підвищує вашу Витривалість не бронею, а зосередженою бойовою підготовкою тіла й розуму, дозволяючи лишатися швидкими та рухливими, завдаючи ударів важкою зброєю.',
	type: '',
	armor: [],
	weapon: [KitWeapon.Heavy],
	stamina: 6,
	speed: 1,
	stability: 1,
	meleeDamage: FactoryLogic.createKitDamageBonus(0, 0, 4),
	rangedDamage: null,
	meleeDistance: 0,
	rangedDistance: 0,
	disengage: 0,
	features: [
		FactoryLogic.feature.createAbility({
			ability: FactoryLogic.createAbility({
				id: 'kit-panther-signature',
				name: 'Нищівний ривок',
				description: 'Що швидше ви рухаєтеся, то сильніше бʼєте.',
				type: FactoryLogic.type.createMain(),
				keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
				distance: [FactoryLogic.distance.createMelee()],
				target: 'Одна істота або предмет',
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
					FactoryLogic.createAbilitySectionText('Перед цим ударом ви можете пройти прямою до 3 клітинок у бік цілі. Цей удар завдає додаткової шкоди, рівної кількості клітинок, які ви пройшли таким чином.')
				]
			})
		})
	]
};
