import { AbilityKeyword } from '@/enums/ability-keyword';
import { Characteristic } from '@/enums/characteristic';
import { FactoryLogic } from '@/logic/factory-logic';
import { Kit } from '@/models/kit';
import { KitArmor } from '@/enums/kit-armor';
import { KitWeapon } from '@/enums/kit-weapon';

export const swashbuckler: Kit = {
	id: 'kit-swashbuckler',
	name: 'Бретер',
	description: 'Якщо ви хочете бути рухливими й завдавати багато шкоди ближніми ударами, вам підійде набір «Бретер». Це чудовий набір для героїв, які прагнуть стати майстрами дуелі.',
	type: '',
	armor: [KitArmor.Light],
	weapon: [KitWeapon.Medium],
	stamina: 3,
	speed: 3,
	stability: 0,
	meleeDamage: FactoryLogic.createKitDamageBonus(2, 2, 2),
	rangedDamage: null,
	meleeDistance: 0,
	rangedDistance: 0,
	disengage: 1,
	features: [
		FactoryLogic.feature.createAbility({
			ability: FactoryLogic.createAbility({
				id: 'kit-swashbuckler-signature',
				name: 'Вишукані па',
				description: 'Кожен бій - це танець, і ведете в ньому саме ви.',
				type: FactoryLogic.type.createMain(),
				keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
				distance: [FactoryLogic.distance.createMelee()],
				target: 'Одна істота',
				cost: 'signature',
				sections: [
					FactoryLogic.createAbilitySectionRoll(
						FactoryLogic.createPowerRoll({
							characteristic: [Characteristic.Might, Characteristic.Agility],
							tier1: '3 + С або Л шкоди',
							tier2: '5 + С або Л шкоди; штовхнути на 1',
							tier3: '8 + С або Л шкоди; штовхнути на 2'
						})
					),
					FactoryLogic.createAbilitySectionText('Після того як ви штовхнули ціль, ви можете зміститися в будь-яку клітинку, яку вона залишила.')
				]
			})
		})
	]
};
