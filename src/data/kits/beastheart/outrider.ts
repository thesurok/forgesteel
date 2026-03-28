import { AbilityKeyword } from '@/enums/ability-keyword';
import { FactoryLogic } from '@/logic/factory-logic';
import { Kit } from '@/models/kit';
import { KitArmor } from '@/enums/kit-armor';
import { KitWeapon } from '@/enums/kit-weapon';

export const outrider: Kit = {
	id: 'kit-outrider',
	name: 'Аутрайдер',
	description: 'З набором «Аутрайдер» ви отримуєте магічно посилену рухливість і досяжність, а також достатньо Витривалості, щоб підтримувати свого компаньйона в самісінькій гущі бою. Завдяки добре збалансованим перевагам для ближніх і дистанційних бійців цей набір підходить звіросерцю будь-якої дикої вдачі.',
	type: 'Beastheart',
	armor: [KitArmor.Medium],
	weapon: [KitWeapon.Bow, KitWeapon.Medium],
	stamina: 6,
	speed: 1,
	stability: 1,
	meleeDamage: FactoryLogic.createKitDamageBonus(2, 2, 2),
	rangedDamage: FactoryLogic.createKitDamageBonus(2, 2, 2),
	meleeDistance: 0,
	rangedDistance: 5,
	disengage: 0,
	features: [
		FactoryLogic.feature.createAbility({
			ability: FactoryLogic.createAbility({
				id: 'kit-outrider-1',
				name: 'Жива стріла',
				description: 'Ваша стріла позначає ціль для наступної атаки вашого компаньйона.',
				type: FactoryLogic.type.createManeuver(),
				keywords: [AbilityKeyword.Beastheart, AbilityKeyword.Magic, AbilityKeyword.Ranged, AbilityKeyword.Weapon],
				distance: [FactoryLogic.distance.createRanged(5)],
				target: 'Одна істота, предмет або незайнята клітинка',
				cost: 'signature',
				sections: [
					FactoryLogic.createAbilitySectionText('2 + С шкоди; якщо ціль - істота або предмет, ваш компаньйон може телепортуватися в незайняту клітинку поруч із ціллю, за умови що він також перебуває в межах дистанції. Якщо ціль - незайнята клітинка, туди можете телепортуватися ви або ваш компаньйон.'),
					FactoryLogic.createAbilitySectionSpend({
						effect: 'Дистанція здібності збільшується до дистанційної 10.'
					})
				]
			})
		})
	]
};
