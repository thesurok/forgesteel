import { AbilityKeyword } from '@/enums/ability-keyword';
import { Characteristic } from '@/enums/characteristic';
import { FactoryLogic } from '@/logic/factory-logic';
import { Kit } from '@/models/kit';
import { KitArmor } from '@/enums/kit-armor';
import { KitWeapon } from '@/enums/kit-weapon';

export const battlemind: Kit = {
	id: 'kit-battlemind',
	name: 'Бойовий розум',
	description: 'Хто сказав, що легкоброньованих героїв легко зрушити з місця? Потрібно лише трохи псіоніки! Набір «Бойовий розум» використовує силу вашого розуму, щоб утримувати вас на місці, а ворогів робити легшою здобиччю для примусового переміщення.',
	type: '',
	armor: [KitArmor.Light],
	weapon: [KitWeapon.Medium],
	stamina: 3,
	speed: 2,
	stability: 1,
	meleeDamage: FactoryLogic.createKitDamageBonus(2, 2, 2),
	rangedDamage: null,
	meleeDistance: 0,
	rangedDistance: 0,
	disengage: 0,
	features: [
		FactoryLogic.feature.createAbility({
			ability: FactoryLogic.createAbility({
				id: 'kit-battlemind-signature',
				name: 'Зняття з якоря',
				description: 'Ваша зброя вивільняє псіонічну енергію, що ніби зменшує вагу цілі.',
				type: FactoryLogic.type.createMain(),
				keywords: [AbilityKeyword.Melee, AbilityKeyword.Psionic, AbilityKeyword.Strike, AbilityKeyword.Weapon],
				distance: [FactoryLogic.distance.createMelee()],
				target: 'Одна істота',
				cost: 'signature',
				sections: [
					FactoryLogic.createAbilitySectionRoll(
						FactoryLogic.createPowerRoll({
							characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition, Characteristic.Presence],
							tier1: '3 + С, Р, І або П шкоди',
							tier2: '6 + С, Р, І або П шкоди',
							tier3: '9 + С, Р, І або П шкоди'
						})
					),
					FactoryLogic.createAbilitySectionText('До кінця наступного ходу цілі будь-яке примусове переміщення, що впливає на неї, має збільшену на 2 відстань.')
				]
			})
		})
	]
};
