import { AbilityDistanceType } from '@/enums/ability-distance-type';
import { AbilityKeyword } from '@/enums/ability-keyword';
import { Characteristic } from '@/enums/characteristic';
import { FactoryLogic } from '@/logic/factory-logic';
import { Kit } from '@/models/kit';
import { KitWeapon } from '@/enums/kit-weapon';

export const corven: Kit = {
	id: 'kit-corven',
	name: 'Корвен',
	description: 'З цим набором штормового воїна ви спрямовуєте свою первісну лють у форму крука, стаючи потайними й швидкими. Корвени повʼязані з гірськими перевалами та гарячими вітрами, що течуть крізь них. Цей аспект асоціюється з теплим анабатичним вітром, що стрімко підіймається вгору.',
	type: 'Stormwight',
	armor: [],
	weapon: [KitWeapon.Unarmed],
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
				id: 'kit-corven-signature',
				name: 'Помах крил',
				description: 'Ті, хто намагається оточити вас, роблять це на власну біду.',
				type: FactoryLogic.type.createMain(),
				keywords: [AbilityKeyword.Area, AbilityKeyword.Melee, AbilityKeyword.Weapon],
				distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 1 })],
				target: 'Кожен ворог у зоні',
				cost: 'signature',
				sections: [
					FactoryLogic.createAbilitySectionRoll(
						FactoryLogic.createPowerRoll({
							characteristic: [Characteristic.Agility],
							tier1: '1 шкоди',
							tier2: '4 шкоди',
							tier3: '6 шкоди'
						})
					),
					FactoryLogic.createAbilitySectionText('Ви можете зміститися до 2 клітинок до або після кидка сили.')
				]
			})
		}),
		FactoryLogic.feature.create({
			id: 'kit-corven-feature-1',
			name: 'Переваги аспекту',
			description: 'Ви отримуєте перевагу на тести, повʼязані з хованням і підкраданням. Додатково, коли ви падаєте, ви можете безкоштовною тригерною дією використати свою здібність «Аспект дикості».'
		}),
		FactoryLogic.feature.create({
			id: 'kit-corven-feature-2a',
			name: 'Форма тварини: Крук',
			description: 'Поки ви у формі крука, ваш розмір дорівнює 1T, і ви можете літати. Ви можете використовувати маневр «Сховатися» як безкоштовний маневр і використовувати союзників як укриття, коли ховаєтеся. У цій формі ви не можете використовувати жодних здібностей, окрім «Аспекту дикості».'
		}),
		FactoryLogic.feature.create({
			id: 'kit-corven-feature-2b',
			name: 'Гібридна форма: Крук',
			description: 'Поки ви у гібридній формі, ваш розмір на вибір 1S або 1M. На 4 рівні ви можете літати.'
		}),
		FactoryLogic.feature.create({
			id: 'kit-corven-feature-3',
			name: 'Первісна буря: Анабатичний вітер',
			description: 'Ваш первісний тип шкоди - вогонь.'
		}),
		FactoryLogic.feature.create({
			id: 'kit-corven-feature-4',
			name: 'Зростаюча лють',
			description: `
* **Лють 2**: Коли ви використовуєте дію руху «Вийти з бою», відстань вашого зміщення отримує бонус, рівний вашому показнику Ловкості.
* **Лють 4**: Першого разу за хід, коли ви зміщуєтеся, ви отримуєте 1 сплеск.
* **Лють 6**: Ви отримуєте перевагу на перевірки Ловкості, маневр «Вирватися» та маневр «Відштовхування».
* **Лють 8 (4 рівень)**: Першого разу за хід, коли ви зміщуєтеся, ви отримуєте 2 сплески замість 1.
* **Лють 10 (7 рівень)**: Ви маєте подвійну перевагу на перевірки Ловкості, маневр «Вирватися» та маневр «Відштовхування».
* **Лють 12 (10 рівень)**: Кожного разу, коли ви використовуєте героїчну здібність, ви отримуєте 10 тимчасової Витривалості. Додатково, потужність будь-яких ефектів, спрямованих на вас, зменшується для вас на 2.`
		})
	]
};
