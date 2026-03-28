import { AbilityKeyword } from '@/enums/ability-keyword';
import { Characteristic } from '@/enums/characteristic';
import { FactoryLogic } from '@/logic/factory-logic';
import { Kit } from '@/models/kit';
import { KitWeapon } from '@/enums/kit-weapon';

export const arcaneArcher: Kit = {
	id: 'kit-arcane-archer',
	name: 'Арканний лучник',
	description: 'Набір «Арканний лучник» дозволяє поєднувати магію з дистанційними ударами зброєю. Відсутність броні зберігає вашу рухливість, а магія змушує стріли вибухати й трощити ворогів.',
	type: '',
	armor: [],
	weapon: [KitWeapon.Bow],
	stamina: 0,
	speed: 1,
	stability: 0,
	meleeDamage: null,
	rangedDamage: FactoryLogic.createKitDamageBonus(2, 2, 2),
	meleeDistance: 0,
	rangedDistance: 10,
	disengage: 1,
	features: [
		FactoryLogic.feature.createAbility({
			ability: FactoryLogic.createAbility({
				id: 'kit-arcane-archer-signature',
				name: 'Вибухова стріла',
				description: 'Ваші боєприпаси вибухають магічною енергією.',
				type: FactoryLogic.type.createMain(),
				keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon],
				distance: [FactoryLogic.distance.createRanged(5)],
				target: 'Одна істота або предмет',
				cost: 'signature',
				sections: [
					FactoryLogic.createAbilitySectionRoll(
						FactoryLogic.createPowerRoll({
							characteristic: [Characteristic.Agility, Characteristic.Reason, Characteristic.Intuition, Characteristic.Presence],
							tier1: '3 + Л, Р, І або П вогняної шкоди',
							tier2: '5 + Л, Р, І або П вогняної шкоди',
							tier3: '8 + Л, Р, І або П вогняної шкоди'
						})
					),
					FactoryLogic.createAbilitySectionText('Одна обрана вами істота або предмет у межах 2 клітинок від цілі отримує вогняну шкоду, рівну показнику характеристики, використаної для кидка сили цієї здібності.')
				]
			})
		})
	]
};
