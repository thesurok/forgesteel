import { AbilityKeyword } from '@/enums/ability-keyword';
import { FactoryLogic } from '@/logic/factory-logic';
import { Kit } from '@/models/kit';
import { KitArmor } from '@/enums/kit-armor';
import { KitWeapon } from '@/enums/kit-weapon';

export const predator: Kit = {
	id: 'kit-predator',
	name: 'Хижак',
	description: 'Набір «Хижак» дозволяє швидко рухатися й бити боляче. Його часто обирають звіросерця, що полюють із тіні, але він також корисний тим, хто хоче не потрапляти ворогам під руку, а також тим, хто прагне задавити супротивників швидкістю та силою.',
	type: 'Beastheart',
	armor: [KitArmor.Light],
	weapon: [KitWeapon.Light],
	stamina: 6,
	speed: 2,
	stability: 0,
	meleeDamage: FactoryLogic.createKitDamageBonus(0, 0, 4),
	rangedDamage: FactoryLogic.createKitDamageBonus(0, 0, 4),
	meleeDistance: 0,
	rangedDistance: 0,
	disengage: 1,
	features: [
		FactoryLogic.feature.createAbility({
			ability: FactoryLogic.createAbility({
				id: 'kit-predator-1',
				name: 'Стрибок убивці',
				description: 'Ви рвучко кидаєтеся вперед, лишаючи по собі пораненого ворога.',
				type: FactoryLogic.type.createManeuver(),
				keywords: [AbilityKeyword.Beastheart, AbilityKeyword.Melee, AbilityKeyword.Weapon],
				distance: [FactoryLogic.distance.createMelee()],
				target: 'Одна істота',
				cost: 'signature',
				sections: [
					FactoryLogic.createAbilitySectionText('Перед використанням цієї здібності ви можете стрибнути по прямій на кількість клітинок, що дорівнює вашому показнику Інтуїції. Під час цього стрибка ви можете проходити крізь клітинки ворогів, і вони не вважаються складною місцевістю. Ви завдаєте додаткової шкоди, рівної кількості клітинок, які перестрибнули.'),
					FactoryLogic.createAbilitySectionText('2 + С шкоди'),
					FactoryLogic.createAbilitySectionSpend({
						effect: 'Ваш стрибок не провокує атаки можливості.'
					})
				]
			})
		})
	]
};
