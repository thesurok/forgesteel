import { AbilityKeyword } from '@/enums/ability-keyword';
import { Characteristic } from '@/enums/characteristic';
import { FactoryLogic } from '@/logic/factory-logic';
import { Kit } from '@/models/kit';
import { KitArmor } from '@/enums/kit-armor';
import { KitWeapon } from '@/enums/kit-weapon';

export const dualWielder: Kit = {
	id: 'kit-dual-wielder',
	name: 'Боєць двома зброями',
	description: 'Набір «Боєць двома зброями» для тих, хто хоче майстерно володіти двома одиницями зброї водночас. Ваш стиль бою вичавлює максимум сили з кожної зброї в руках, перетворюючи вас на вихор смерті.',
	type: '',
	armor: [KitArmor.Medium],
	weapon: [KitWeapon.Light, KitWeapon.Medium],
	stamina: 6,
	speed: 2,
	stability: 0,
	meleeDamage: FactoryLogic.createKitDamageBonus(2, 2, 2),
	rangedDamage: null,
	meleeDistance: 0,
	rangedDistance: 0,
	disengage: 1,
	features: [
		FactoryLogic.feature.createAbility({
			ability: FactoryLogic.createAbility({
				id: 'kit-dual-wielder-signature',
				name: 'Подвійний удар',
				description: 'Навіщо бити один раз, якщо можна двічі?',
				type: FactoryLogic.type.createMain(),
				keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
				distance: [FactoryLogic.distance.createMelee()],
				target: 'Дві істоти або предмети',
				cost: 'signature',
				sections: [
					FactoryLogic.createAbilitySectionRoll(
						FactoryLogic.createPowerRoll({
							characteristic: [Characteristic.Might, Characteristic.Agility],
							tier1: '2 шкоди',
							tier2: '4 шкоди',
							tier3: '6 шкоди'
						})
					),
					FactoryLogic.createAbilitySectionText('Якщо ви використовуєте цю здібність у свій хід, то можете застосувати її проти однієї цілі, потім виконати маневр і дію руху цього ходу, а вже після цього застосувати здібність проти другої цілі. Для обох цілей використовується той самий кидок сили.')
				]
			})
		})
	]
};
