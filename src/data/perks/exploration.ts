import { FactoryLogic } from '@/logic/factory-logic';
import { FeatureType } from '@/enums/feature-type';
import { Perk } from '@/models/perk';
import { PerkList } from '@/enums/perk-list';

export class ExplorationPerkData {
	static brawny: Perk = {
		id: 'perk-brawny',
		name: 'Дужий',
		description: 'Кожного разу, коли ви провалюєте тест Сили, ви можете втратити Витривалість, рівну 1d6 + ваш рівень, щоб підвищити результат тесту на один рівень. Ви можете використовувати цю перевагу лише раз за тест.',
		type: FeatureType.Text,
		data: null,
		list: PerkList.Exploration
	};

	static camouflageHunter: Perk = {
		id: 'perk-camouflage-hunter',
		name: 'Мисливець у камуфляжі',
		description: 'Коли ви перебуваєте в дикій місцевості, щойно ви сховалися від істоти, вам більше не потрібні прикриття чи прихованість, щоб залишатися схованими від неї.',
		type: FeatureType.Text,
		data: null,
		list: PerkList.Exploration
	};

	static dangerSense: Perk = {
		id: 'perk-danger-sense',
		name: 'Чуття небезпеки',
		description: 'Коли ви перебуваєте в природному середовищі, але не в поселенні всередині нього, ви отримуєте перевагу на тести з навичкою Alertness, і вас неможливо застати зненацька. Додатково, ваш звʼязок із природою попереджає вас, якщо впродовж наступних 72 годин має статися природне лихо, хоча ви не знаєте точно, яким воно буде: землетрусом, лісовою пожежею тощо.',
		type: FeatureType.Text,
		data: null,
		list: PerkList.Exploration
	};

	static friendCatapult: Perk = {
		id: 'perk-friend-catapult',
		name: 'Катапульта для друга',
		description: 'Ви жбурляєте союзника в повітря.',
		type: FeatureType.Ability,
		data: {
			ability: FactoryLogic.createAbility({
				id: 'perk-friend-catapult-1',
				name: 'Катапульта для друга',
				description: 'Ви жбурляєте союзника в повітря.',
				type: FactoryLogic.type.createManeuver(),
				distance: [FactoryLogic.distance.createSelf()],
				target: 'Себе',
				sections: [
					FactoryLogic.createAbilitySectionText('Ви хапаєте сусіднього добровільного союзника або предмет вашого розміру чи меншого, а потім вертикально штовхаєте ціль на кількість клітинок до подвійного значення вашого показника Сили. Якщо істота, яку ви штовхнули, падає внаслідок цього руху, ефективна дистанція падіння зменшується на кількість клітинок, рівну подвоєному значенню вашого показника Сили. Після використання цієї переваги ви не можете використати її знову, доки не здобудете 1 або більше перемог.')
				]
			})
		},
		list: PerkList.Exploration
	};

	static iveGotYou: Perk = {
		id: 'perk-ive-got-you',
		name: 'Я тебе спіймав',
		description: 'Ви ловите союзника, що падає, в останню мить.',
		type: FeatureType.Ability,
		data: {
			ability: FactoryLogic.createAbility({
				id: 'perk-ive-got-you-1',
				name: 'Я тебе спіймав',
				description: 'Ви ловите союзника, що падає, в останню мить.',
				type: FactoryLogic.type.createTrigger('Добровільний союзник падає на вас або поруч із вами.', { free: true }),
				distance: [FactoryLogic.distance.createSelf()],
				target: 'Себе',
				sections: [
					FactoryLogic.createAbilitySectionText('Ви ловите свого союзника. Ніхто з вас не отримує шкоди від падіння.')
				]
			})
		},
		list: PerkList.Exploration
	};

	static monsterWhisperer: Perk = {
		id: 'perk-monster-whisperer',
		name: 'Шепотун до чудовиськ',
		description: 'Ви можете використовувати навичку Handle Animals, щоб взаємодіяти з нерозумними істотами, які не є тваринами.',
		type: FeatureType.Text,
		data: null,
		list: PerkList.Exploration
	};

	static putYourBackIntoIt: Perk = {
		id: 'perk-put-your-back-into-it',
		name: 'Налягай як слід',
		description: 'Під час монтажних тестів, коли ви робите тест на допомогу і отримуєте результат 1 рівня, тест, якому ви допомагали, не отримує шкоди. Додатково, один раз за монтажний тест ви можете перетворити результат 1 рівня союзника на результат 2 рівня.',
		type: FeatureType.Text,
		data: null,
		list: PerkList.Exploration
	};

	static teamLeader: Perk = {
		id: 'perk-team-leader',
		name: 'Лідер команди',
		description: 'На початку групового або монтажного тесту ви можете витратити жетон героя. Якщо робите це, усі учасники проходять тести так, ніби також мали будь-яку навичку з групи дослідження, яку маєте ви.',
		type: FeatureType.Text,
		data: null,
		list: PerkList.Exploration
	};

	static teamwork: Perk = {
		id: 'perk-teamwork',
		name: 'Командна робота',
		description: 'Коли ви робите свій перший хід під час монтажного тесту, ви можете одночасно зробити власний тест і допомогти тесту іншого героя.',
		type: FeatureType.Text,
		data: null,
		list: PerkList.Exploration
	};

	static woodWise: Perk = {
		id: 'perk-wood-wise',
		name: 'Лісова кмітливість',
		description: 'Коли ви робите тест із навичкою з групи дослідження і принаймні один із кинутих d10 показує 1, ви можете перекинути один d10. Ви можете використовувати цю перевагу лише раз за тест.',
		type: FeatureType.Text,
		data: null,
		list: PerkList.Exploration
	};

	// Beastheart Perks

	static bornTracker: Perk = {
		id: 'perk-born-tracker',
		name: 'Природжений слідопит',
		description: '(Лише для Звіросерця) Ви та ваш компаньйон маєте перевагу на тести, щоб вистежувати істот, знаходити шлях або шукати прихованих істот.',
		type: FeatureType.Text,
		data: null,
		list: PerkList.Exploration
	};

	static rideAlong: Perk = {
		id: 'perk-ride-along',
		name: 'Очима компаньйона',
		description: '(Лише для Звіросерця)',
		type: FeatureType.Ability,
		data: {
			ability: FactoryLogic.createAbility({
				id: 'perk-ride-along-1',
				name: 'Очима компаньйона',
				description: 'Ви дивитеся на світ очима свого компаньйона.',
				type: FactoryLogic.type.createManeuver(),
				distance: [FactoryLogic.distance.createMelee()],
				target: 'Компаньйон',
				sections: [
					FactoryLogic.createAbilitySectionText(`
Ваше тіло зникає, а ваша свідомість розділяє тіло компаньйона. Поки ви мандруєте разом із ним, ви відчуваєте все, що відчуває він. Ви можете спілкуватися з компаньйоном телепатично, але не можете ним керувати. Вас не можна виявити, націлити чи зачепити жодним ефектом. Будь-який стан чи ефект на вас тимчасово призупиняється, доки ви не повернете своє тіло.

Поки ви перебуваєте в компаньйоні, він і далі звичайним чином отримує переваги від будь-якого магічного скарбу, який ви носите.

Поки ви перебуваєте в компаньйоні, ви не можете діяти, окрім як витратити безкоштовний маневр, щоб повернути собі тіло. Ви також повертаєте тіло, якщо компаньйон помирає або вирішує виштовхнути вас. Коли ви повертаєте своє тіло, то зʼявляєтеся в клітинці поруч із компаньйоном.`)
				]
			})
		},
		list: PerkList.Exploration
	};

	static wildRumpus: Perk = {
		id: 'perk-wild-rumpus',
		name: 'Дике шаленство',
		description: '(Лише для Звіросерця)',
		type: FeatureType.Ability,
		data: {
			ability: FactoryLogic.createAbility({
				id: 'perk-wild-rumpus-1',
				name: 'Дике шаленство',
				description: 'Здатність ширяти, мов кондор, або мчати, мов вовк, пʼянить, але остерігайтеся спокуси загнати себе до смерті.',
				type: FactoryLogic.type.createManeuver({ free: true }),
				distance: [FactoryLogic.distance.createSelf()],
				target: 'Себе',
				sections: [
					FactoryLogic.createAbilitySectionText('До кінця вашого наступного ходу ви та ваш компаньйон отримуєте рухові теги одне одного, а також власні. Ви обоє використовуєте або вашу швидкість, або швидкість компаньйона, залежно від того, яка з них вища. Після першого використання цієї здібності кожне наступне використання до завершення перепочинку або здобуття 1 чи більше перемог завдає вам шкоди, рівної вашому рівню. Цю втрату Витривалості неможливо запобігти жодним способом.')
				]
			})
		},
		list: PerkList.Exploration
	};

	static wildsExplorer: Perk = {
		id: 'perk-wilds-explorer',
		name: 'Дослідник дикої природи',
		description: '(Лише для Звіросерця) Ви та ваш компаньйон маєте перевагу на тести, щоб долати холод, спеку, негоду, нестійкий ґрунт або важку місцевість. Протягом свого ходу кожен із вас може ігнорувати додаткову вартість першої клітинки складної місцевості, у яку входить.',
		type: FeatureType.Text,
		data: null,
		list: PerkList.Exploration
	};
}
