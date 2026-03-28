import { AbilityKeyword } from '@/enums/ability-keyword';
import { Characteristic } from '@/enums/characteristic';
import { FactoryLogic } from '@/logic/factory-logic';
import { Kit } from '@/models/kit';
import { KitWeapon } from '@/enums/kit-weapon';

export const vuken: Kit = {
	id: 'kit-vuken',
	name: 'Вукен',
	description: 'З цим набором штормового воїна ви спрямовуєте свою первісну лють у форму вовка, стаючи прудконогим мисливцем. Вукени повʼязані з лісами та відкритими степами, а цей аспект асоціюється з грозою.',
	type: 'Stormwight',
	armor: [],
	weapon: [KitWeapon.Unarmed],
	stamina: 9,
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
				id: 'kit-vuken-signature',
				name: 'Збивальний напад',
				description: 'Дикий напад валить ворога на спину.',
				type: FactoryLogic.type.createMain(),
				keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
				distance: [FactoryLogic.distance.createMelee()],
				target: 'Одна істота або предмет',
				cost: 'signature',
				sections: [
					FactoryLogic.createAbilitySectionRoll(
						FactoryLogic.createPowerRoll({
							characteristic: [Characteristic.Might],
							tier1: '2 + С шкоди; Л < [слабкий], розпластаний',
							tier2: '5 + С шкоди; Л < [середній], розпластаний',
							tier3: '7 + С шкоди; Л < [сильний], розпластаний'
						})
					)
				]
			})
		}),
		FactoryLogic.feature.create({
			id: 'kit-vuken-feature-1',
			name: 'Переваги аспекту',
			description: 'Кожного разу, коли ви використовуєте маневр «Відштовхування», ви можете після цього безкоштовною тригерною дією використати маневр «Допомога в атаці».'
		}),
		FactoryLogic.feature.create({
			id: 'kit-vuken-feature-2a',
			name: 'Форма тварини: Вовк',
			description: 'Поки ви у формі вовка, ваш розмір дорівнює 1L, ви отримуєте +2 бонус до швидкості та ігноруєте складну місцевість.'
		}),
		FactoryLogic.feature.create({
			id: 'kit-vuken-feature-2b',
			name: 'Гібридна форма: Вовк',
			description: 'Поки ви у гібридній формі, ваш розмір дорівнює 1L, ви отримуєте +2 бонус до швидкості та ігноруєте складну місцевість. На 4 рівні, коли ви вперше за зустріч набуваєте гібридної форми, ви отримуєте 10 тимчасової Витривалості.'
		}),
		FactoryLogic.feature.create({
			id: 'kit-vuken-feature-3',
			name: 'Первісна буря: Блискавична буря',
			description: 'Ваш первісний тип шкоди - блискавка.'
		}),
		FactoryLogic.feature.create({
			id: 'kit-vuken-feature-4',
			name: 'Зростаюча лють',
			description: `
* **Лють 2**: Кожного разу, коли ви використовуєте маневр «Відштовхування», ви можете націлити ще одну істоту.
* **Лють 4**: Першого разу за хід, коли ви штовхаєте істоту або розпластуєте її, ви отримуєте 1 сплеск.
* **Лють 6**: Ви отримуєте перевагу на перевірки Ловкості та маневр «Відштовхування».
* **Лють 8 (4 рівень)**: Першого разу за хід, коли ви штовхаєте істоту або розпластуєте її, ви отримуєте 2 сплески.
* **Лють 10 (7 рівень)**: Ви маєте подвійну перевагу на перевірки Ловкості та маневр «Відштовхування».
* **Лють 12 (10 рівень)**: Кожного разу, коли ви використовуєте героїчну здібність, ви отримуєте 10 тимчасової Витривалості. Додатково, коли ви робите кидок сили, що накладає примусове переміщення на ціль, відстань цього примусового переміщення отримує бонус, рівний вашому показнику Ловкості.`
		})
	]
};
