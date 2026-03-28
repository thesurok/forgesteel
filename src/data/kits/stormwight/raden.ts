import { AbilityKeyword } from '@/enums/ability-keyword';
import { Characteristic } from '@/enums/characteristic';
import { FactoryLogic } from '@/logic/factory-logic';
import { Kit } from '@/models/kit';
import { KitWeapon } from '@/enums/kit-weapon';

export const raden: Kit = {
	id: 'kit-raden',
	name: 'Раден',
	description: 'З цим набором штормового воїна ви спрямовуєте свою первісну лють у форму щура, стаючи рухливими й невловними. Радени повʼязані з дикою природою щура, ще до того, як міста стали його домівкою. Цей аспект асоціюється зі щурячою повінню - хвилею корупційної води, що вивергає орди щурів.',
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
				id: 'kit-raden-signature',
				name: 'Наскок із напором',
				description: 'Ваші вороги марно намагаються відступити від вашого стрибучого нападу.',
				type: FactoryLogic.type.createMain(),
				keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
				distance: [FactoryLogic.distance.createMelee()],
				target: 'Одна істота або предмет',
				cost: 'signature',
				sections: [
					FactoryLogic.createAbilitySectionRoll(
						FactoryLogic.createPowerRoll({
							characteristic: [Characteristic.Agility],
							tier1: '2 + Л шкоди',
							tier2: '5 + Л шкоди; штовхнути на 1',
							tier3: '7 + Л шкоди; штовхнути на 2'
						})
					),
					FactoryLogic.createAbilitySectionText('Ви можете зміститися на стільки ж клітинок, на скільки штовхнули ціль.')
				]
			})
		}),
		FactoryLogic.feature.create({
			id: 'kit-raden-feature-1',
			name: 'Переваги аспекту',
			description: 'Ви отримуєте перевагу на тести, повʼязані з хованням і підкраданням. Додатково, ви ігноруєте складну місцевість.'
		}),
		FactoryLogic.feature.create({
			id: 'kit-raden-feature-2a',
			name: 'Форма тварини: Щур',
			description: 'Поки ви у формі щура, ваш розмір дорівнює 1T, і ви можете автоматично дертися на повній швидкості під час руху. Ви можете використовувати маневр «Сховатися» як безкоштовний маневр, використовувати союзників як укриття, коли ховаєтеся, і залишатися схованими, рухаючись крізь клітинки, зайняті будь-якою істотою. Додатково, ви отримуєте перевагу на тести, повʼязані з лазінням по інших істотах. У цій формі ви не можете використовувати жодних здібностей, окрім «Аспекту дикості».'
		}),
		FactoryLogic.feature.create({
			id: 'kit-raden-feature-2b',
			name: 'Гібридна форма: Щур',
			description: 'Поки ви у гібридній формі, ваш розмір на вибір 1S або 1M. На 4 рівні ви можете автоматично дертися на повній швидкості під час руху.'
		}),
		FactoryLogic.feature.create({
			id: 'kit-raden-feature-3',
			name: 'Первісна буря: Щуряча повінь',
			description: 'Ваш первісний тип шкоди - корупція.'
		}),
		FactoryLogic.feature.create({
			id: 'kit-raden-feature-4',
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
