import { AbilityKeyword } from '@/enums/ability-keyword';
import { FactoryLogic } from '@/logic/factory-logic';
import { Kit } from '@/models/kit';
import { KitArmor } from '@/enums/kit-armor';
import { KitWeapon } from '@/enums/kit-weapon';

export const warBeast: Kit = {
	id: 'kit-war-beast',
	name: 'Бойовий звір',
	description: 'Можливо, ви не найшвидші на шляху до мети, зате вас важко зрушити, коли ви вже на місці. Сяйливі шипи та масивні бронепластини захищають вас і вашого компаньйона, поки ви разом тримаєте бойову лінію. Цей набір найчастіше обирають звіросерця, які хочуть пересилити ворогів і потім втоптати їх у землю.',
	type: 'Beastheart',
	armor: [KitArmor.Heavy, KitArmor.Shield],
	weapon: [KitWeapon.Heavy],
	stamina: 9,
	speed: 0,
	stability: 3,
	meleeDamage: FactoryLogic.createKitDamageBonus(2, 2, 2),
	rangedDamage: null,
	meleeDistance: 0,
	rangedDistance: 0,
	disengage: 0,
	features: [
		FactoryLogic.feature.createAbility({
			ability: FactoryLogic.createAbility({
				id: 'kit-war-beast-1',
				name: 'Топчучий натиск',
				description: 'Гора мʼязів налітає на безпорадного ворога.',
				type: FactoryLogic.type.createManeuver(),
				keywords: [AbilityKeyword.Beastheart, AbilityKeyword.Charge, AbilityKeyword.Melee, AbilityKeyword.Weapon],
				distance: [FactoryLogic.distance.createMelee()],
				target: 'Одна істота',
				cost: 'signature',
				sections: [
					FactoryLogic.createAbilitySectionText('2 + С шкоди; С < [середній], розпластаний'),
					FactoryLogic.createAbilitySectionText('Після удару ви можете пройти до 3 клітинок. Під час цього руху клітинка розпластаного ворога не вважається складною місцевістю, і коли ви вперше заходите в клітинку кожного розпластаного ворога, ви завдаєте шкоди, рівної вашому показнику Сили.'),
					FactoryLogic.createAbilitySectionSpend({
						effect: 'Якщо ціль має С < [сильний], вона розпластана.'
					})
				]
			})
		})
	]
};
