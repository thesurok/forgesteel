import { FactoryLogic } from '@/logic/factory-logic';
import { FeatureType } from '@/enums/feature-type';
import { Perk } from '@/models/perk';
import { PerkList } from '@/enums/perk-list';

export class IntriguePerkData {
	static criminalContacts: Perk = {
		id: 'perk-criminal-contacts',
		name: 'Злочинні звʼязки',
		description: 'Ви маєте доступ до мережі злочинних контактів. Як дію перепочинку під час відпочинку в поселенні ви можете поставити своїм контактам запитання, зробивши тест Присутності. На результаті 2 рівня ви дізнаєтеся один факт, який був би поширеним серед злочинців: таємний вхід до будівлі, місце, де переховується місцевий злочинець, імʼя ватажка місцевої гільдії злодіїв тощо. На результаті 3 рівня ви натомість можете отримати знання, рідкісні навіть серед злочинців, якщо така інформація існує: місце місцевого тайника зі скарбом, місце схову знаряддя вбивства, використаного в замаху на вельможу, імʼя NPC, який таємно фінансує місцеву гільдію асасинів, тощо.',
		type: FeatureType.Text,
		data: null,
		list: PerkList.Intrigue
	};

	static forgettableFace: Perk = {
		id: 'perk-forgettable-face',
		name: 'Непримітне обличчя',
		description: 'Якщо ви проводите 10 хвилин або менше у взаємодії з істотою, яка раніше вас не зустрічала, то можете змусити її забути ваше обличчя, щойно ви розійдетеся. Якщо її попросять вас описати, вона дасть лише туманний, порожній і непотрібний опис. Додатково, якщо ви витратите 1 годину або більше на створення маскування, ви автоматично отримуєте результат 2 рівня на будь-який тест, де могла б використовуватися навичка Маскування. Якщо ви маєте навичку Маскування, то автоматично отримуєте результат 3 рівня.',
		type: FeatureType.Text,
		data: null,
		list: PerkList.Intrigue
	};

	static gumUpTheWorks: Perk = {
		id: 'perk-gum-up-the-works',
		name: 'Заклинити механізм',
		description: 'Ви не даєте пастці спрацювати.',
		type: FeatureType.Ability,
		data: {
			ability: FactoryLogic.createAbility({
				id: 'perk-gum-up-the-works-1',
				name: 'Заклинити механізм',
				description: 'Ви не даєте пастці спрацювати.',
				type: FactoryLogic.type.createTrigger('Звичайна пастка спрацьовує в межах 3 клітинок від вас.'),
				distance: [FactoryLogic.distance.createSelf()],
				target: 'Себе',
				sections: [
					FactoryLogic.createAbilitySectionText('Ви можете пройти до 3 клітинок у бік пастки. Якщо цей рух приводить вас упритул до будь-якого з її механізмів, ви можете заклинити пастку, не даючи їй спрацювати. Поки ви залишаєтеся поруч із механізмом, пастка не може спрацювати, хіба що спроба її знешкодити провалиться.')
				]
			})
		},
		list: PerkList.Intrigue
	};

	static luckyDog: Perk = {
		id: 'perk-lucky-dog',
		name: 'Улюбленець удачі',
		description: 'Кожного разу, коли ви провалюєте тест із будь-якою навичкою з групи інтриг, ви можете втратити Витривалість, рівну 1d6 + ваш рівень, щоб підвищити результат тесту на один рівень. Ви можете використовувати цю перевагу лише раз за тест.',
		type: FeatureType.Text,
		data: null,
		list: PerkList.Intrigue
	};

	static masterOfDisguise: Perk = {
		id: 'perk-master-of-disguise',
		name: 'Майстер перевтілення',
		description: 'Ви можете вдягати або знімати маскування як частину будь-якого тесту, який робите з навичкою Ховання, або під час використання маневру Hide.',
		type: FeatureType.Text,
		data: null,
		list: PerkList.Intrigue
	};

	static slippedLead: Perk = {
		id: 'perk-slipped-lead',
		name: 'Вислизнув із повідка',
		description: 'Ви отримуєте перевагу на тести, щоб вирватися з пут. Якщо маєте 1 безперервну хвилину, то можете звільнитися від будь-яких звичайних пут без тесту. Додатково, оточенню не відразу очевидно, що ви вже звільнилися, доки ви не зробите щось, що явно це покаже: скинете пута, використаєте здібність, що шкодить одній чи більше істотам, тощо.',
		type: FeatureType.Text,
		data: null,
		list: PerkList.Intrigue
	};

	// Beastheart Perks

	static trainedThief: Perk = {
		id: 'perk-trained-thief',
		name: 'Навчений злодій',
		description: '(Лише для Звіросерця) Ви отримуєте навичку Приховування предмета або Кишенькова крадіжка. Ваш компаньйон може робити тест із отриманою навичкою як маневр.',
		type: FeatureType.Text,
		data: null,
		list: PerkList.Intrigue
	};
}
