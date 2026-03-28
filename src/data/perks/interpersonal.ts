import { FeatureType } from '@/enums/feature-type';
import { Perk } from '@/models/perk';
import { PerkList } from '@/enums/perk-list';

export class InterpersonalPerkData {
	static charmingLiar: Perk = {
		id: 'perk-charming-liar',
		name: 'Чарівний брехун',
		description: 'Якщо ви провалюєте тест із навичкою Lie, то не зазнаєте жодних наслідків, повʼязаних із провалом. Додатково, під час переговорів вас можуть спіймати на одній брехні без негативних наслідків. Після використання будь-якої з переваг цієї особливості ви не можете використати її знову, доки не здобудете 1 або більше перемог.',
		type: FeatureType.Text,
		data: null,
		list: PerkList.Interpersonal
	};

	static dazzler: Perk = {
		id: 'perk-dazzler',
		name: 'Сліпучий виступ',
		description: 'Кожного разу, коли істота безперервно спостерігає за тим, як ви співаєте, танцюєте або граєте роль упродовж 1 хвилини чи довше, ви отримуєте перевагу на будь-який тест, щоб вплинути на цю істоту протягом 1 години після завершення виступу.',
		type: FeatureType.Text,
		data: null,
		list: PerkList.Interpersonal
	};

	static engrossingMonologue: Perk = {
		id: 'perk-engrossing-monologue',
		name: 'Захопливий монолог',
		description: 'Коли ви не в бою, ви можете гукнути, щоб привернути увагу всіх істот, які чують вас у межах 10 клітинок. Кожна така істота, що не є ворожою до вас, слухає вас безперервно щонайменше 1 хвилину або доки не відчує небезпеку чи неминучу шкоду. Поки істоти вас слухають, кожен ваш союзник отримує перевагу на тести, щоб залишитися непоміченим для цих істот.',
		type: FeatureType.Text,
		data: null,
		list: PerkList.Interpersonal
	};

	static harmonizer: Perk = {
		id: 'perk-harmonizer',
		name: 'Гармонізатор',
		description: 'Ви можете робити тест Присутності з навичкою Music, щоб впливати на істот, які не мають емоцій або не можуть вас зрозуміти. Додатково, один раз під час переговорів, коли союзник висуває аргумент, ви можете заграти музику, щоб дати цьому союзникові перевагу на його тест.',
		type: FeatureType.Text,
		data: null,
		list: PerkList.Interpersonal
	};

	static lieDetector: Perk = {
		id: 'perk-lie-detector',
		name: 'Детектор брехні',
		description: 'Коли інша істота повідомляє вам інформацію, ви можете витратити жетон героя, щоб визначити, чи містить ця інформація свідомі неправдиві твердження. Якщо так, ви розумієте, де саме брехня, але не дізнаєтеся, яка правда.',
		type: FeatureType.Text,
		data: null,
		list: PerkList.Interpersonal
	};

	static openBook: Perk = {
		id: 'perk-open-book',
		name: 'Відкрита книга',
		description: 'Коли ви розмовляєте з істотою віч-на-віч, ви можете поставити їй одне запитання про неї саму, яке зазвичай могло б образити або викликати підозру. Якщо вона вирішить не відповідати чесно, то просто ухилиться від відповіді або переведе розмову без подальших ускладнень. Якщо ж вона відповість чесно, істота може одразу поставити вам запитання про вас самих, і ви мусите відповісти чесно.',
		type: FeatureType.Text,
		data: null,
		list: PerkList.Interpersonal
	};

	static pardonMyFriend: Perk = {
		id: 'perk-pardon-my-friend',
		name: 'Пробачте мого друга',
		description: 'Коли союзник у межах 5 клітинок провалює тест Присутності, ви можете втрутитися і зробити тест Присутності зі шкодою, а ваш результат замінить результат союзника. Цю перевагу можна використати лише один раз на тест, навіть якщо вона є в кількох персонажів.',
		type: FeatureType.Text,
		data: null,
		list: PerkList.Interpersonal
	};

	static powerPlayer: Perk = {
		id: 'perk-power-player',
		name: 'Гра мʼязами',
		description: 'Кожного разу, коли ви робите тест із навичками Brag, Flirt або Intimidate, ви можете використовувати Силу замість будь-якої іншої характеристики, яку вимагає цей тест.',
		type: FeatureType.Text,
		data: null,
		list: PerkList.Interpersonal
	};

	static soTellMe: Perk = {
		id: 'perk-so-tell-me',
		name: 'Ну то розкажи...',
		description: 'Кожного разу, коли ви успішно проходите тест Присутності, щоб вплинути на одну чи більше істот, після завершення тесту ви можете поставити одній із цих істот уточнювальне запитання, на яке вона мусить відповісти чесно. На розсуд Директора істота може не відповідати повністю або взагалі не відповідати, якщо правдива відповідь поставила б її чи близьку їй істоту під загрозу.',
		type: FeatureType.Text,
		data: null,
		list: PerkList.Interpersonal
	};

	static spotTheTell: Perk = {
		id: 'perk-spot-the-tell',
		name: 'Помітити виказку',
		description: 'Кожного разу, коли ви робите тест, щоб прочитати людину, і отримуєте результат 3 рівня, ви помічаєте кілька виказок, що розкривають її справжні почуття. Усі ваші майбутні тести, щоб читати цю людину, отримують перевагу.',
		type: FeatureType.Text,
		data: null,
		list: PerkList.Interpersonal
	};

	// Beastheart Perks

	static peopleSense: Perk = {
		id: 'perk-people-sense',
		name: 'Чуття на людей',
		description: '(Лише для Звіросерця) Поки ви перебуваєте в межах 5 клітинок від свого компаньйона, коли ви або він робите тест, щоб визначити мотиви, емоції чи мову тіла істоти, інший партнер може зробити той самий тест як безкоштовну тригерну дію. Ви обоє використовуєте вищий результат.',
		type: FeatureType.Text,
		data: null,
		list: PerkList.Interpersonal
	};

	static voiceOfTheWild: Perk = {
		id: 'perk-voice-of-the-wild',
		name: 'Голос дикості',
		description: '(Лише для Звіросерця) Ваш компаньйон може говорити будь-якою мовою, якою можете говорити ви.',
		type: FeatureType.Text,
		data: null,
		list: PerkList.Interpersonal
	};

	static youCanPetThem: Perk = {
		id: 'perk-you-can-pet-them',
		name: 'Їх можна погладити, вони дружні',
		description: '(Лише для Звіросерця) Поки ви перебуваєте в межах 5 клітинок від свого компаньйона, коли ви робите тест Присутності, щоб взаємодіяти з істотою, ви можете використовувати Присутність компаньйона замість своєї.',
		type: FeatureType.Text,
		data: null,
		list: PerkList.Interpersonal
	};
}
