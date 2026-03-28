import { AbilityKeyword } from '@/enums/ability-keyword';
import { Characteristic } from '@/enums/characteristic';
import { FactoryLogic } from '@/logic/factory-logic';
import { Kit } from '@/models/kit';
import { KitWeapon } from '@/enums/kit-weapon';

export const boren: Kit = {
	id: 'kit-boren',
	name: 'Борен',
	description: 'З цим набором штормового воїна ви спрямовуєте свою первісну лють у форму ведмедя, стаючи великими, витривалими й грізними. Борени повʼязані з суворою камʼянистою північчю, а цей аспект асоціюється з гірким холодом хуртовини.',
	type: 'Stormwight',
	armor: [],
	weapon: [KitWeapon.Unarmed],
	stamina: 9,
	speed: 0,
	stability: 2,
	meleeDamage: FactoryLogic.createKitDamageBonus(0, 0, 4),
	rangedDamage: null,
	meleeDistance: 0,
	rangedDistance: 0,
	disengage: 0,
	features: [
		FactoryLogic.feature.createAbility({
			ability: FactoryLogic.createAbility({
				id: 'kit-boren-signature',
				name: 'Ведмежі кігті',
				description: 'Ваші гострі й смертоносні кігті хапають слабких.',
				type: FactoryLogic.type.createMain(),
				keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
				distance: [FactoryLogic.distance.createMelee()],
				target: 'Одна істота або предмет',
				cost: 'signature',
				sections: [
					FactoryLogic.createAbilitySectionRoll(
						FactoryLogic.createPowerRoll({
							characteristic: [Characteristic.Might],
							tier1: '2 + С шкоди; С < [слабкий], схоплений',
							tier2: '5 + С шкоди; С < [середній], схоплений',
							tier3: '7 + С шкоди; С < [сильний], схоплений'
						})
					)
				]
			})
		}),
		FactoryLogic.feature.create({
			id: 'kit-boren-feature-1',
			name: 'Переваги аспекту',
			description: 'Кожного разу, коли ви використовуєте примусове переміщення, щоб штовхнути істоту, ви можете натомість притягнути її. Кожного разу, коли ви притягуєте істоту впритул до себе, і ця істота має С < [середній], ви можете безкоштовною тригерною дією схопити її.'
		}),
		FactoryLogic.feature.create({
			id: 'kit-boren-feature-2a',
			name: 'Форма тварини: Ведмідь',
			description: 'Поки ви у формі ведмедя, ваш розмір дорівнює 2, і ви отримуєте +1 бонус до дистанції ближніх зброєвих здібностей.'
		}),
		FactoryLogic.feature.create({
			id: 'kit-boren-feature-2b',
			name: 'Гібридна форма: Ведмідь',
			description: 'Поки ви у гібридній формі, ваш розмір дорівнює 2, і ви отримуєте +1 бонус до дистанції ближніх зброєвих здібностей. На 4 рівні, коли ви вперше за зустріч набуваєте гібридної форми, ви отримуєте 10 тимчасової Витривалості.'
		}),
		FactoryLogic.feature.create({
			id: 'kit-boren-feature-3',
			name: 'Первісна буря: Хуртовина',
			description: 'Ваш первісний тип шкоди - холод.'
		}),
		FactoryLogic.feature.create({
			id: 'kit-boren-feature-4',
			name: 'Зростаюча лють',
			description: `
* **Лють 2**: Ви можете одночасно тримати схопленими до двох істот. Додатково, коли ви завдаєте удару по істоті, яку схопили, ви отримуєте 1 сплеск.
* **Лють 4**: Першого разу за хід, коли ви схоплюєте істоту, ви отримуєте 1 сплеск.
* **Лють 6**: Ви отримуєте перевагу на маневри «Схопити» та «Відштовхування».
* **Лють 8 (4 рівень)**: Першого разу за хід, коли ви схоплюєте істоту, ви отримуєте 2 сплески замість 1.
* **Лють 10 (7 рівень)**: Ви маєте подвійну перевагу на маневри «Схопити» та «Відштовхування».
* **Лють 12 (10 рівень)**: Кожного разу, коли ви використовуєте героїчну здібність, ви отримуєте 10 тимчасової Витривалості. Додатково, поки ви тримаєте істоту схопленою, будь-який кидок здібності проти неї отримує бонус до потужності, рівний вашому показнику Сили.`
		})
	]
};
