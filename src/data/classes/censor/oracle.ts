import { AbilityDistanceType } from '@/enums/ability-distance-type';
import { AbilityKeyword } from '@/enums/ability-keyword';
import { Characteristic } from '@/enums/characteristic';
import { FactoryLogic } from '@/logic/factory-logic';
import { SubClass } from '@/models/subclass';

export const oracle: SubClass = {
	id: 'censor-sub-2',
	name: 'Оракул',
	description: 'Корупція має глибокі щупальця, які легко залишаються непоміченими; це штовхає вас спеціалізуватися на виявленні таємних загроз вашому ордену.',
	featuresByLevel: [
		{
			level: 1,
			features: [
				FactoryLogic.feature.createSkillChoice({
					id: 'censor-sub-2-1-1',
					selected: ['Магія']
				}),
				FactoryLogic.feature.createPackageContent({
					id: 'censor-sub-2-1-2',
					name: 'Перевага Ордену Суду',
					description: 'Першого разу за хід, коли ви використовуєте свою здібність Judgment, щоб засудити істоту, ви можете завдати засудженій істоті священної шкоди, рівної подвоєному вашому показнику Присутності.',
					tag: 'censor-judgment'
				})
			]
		},
		{
			level: 2,
			features: [
				FactoryLogic.feature.create({
					id: 'censor-sub-2-2-1',
					name: 'Було Передбачено',
					description: 'Ваш орден навчив вас розуміти фрагменти видінь, дарованих вашим божеством, що дає миттєву перевагу в складних ситуаціях. На початку зустрічі ви можете виконати одну основну дію перед будь-якою іншою істотою і перед вашим першим ходом. Додатково, коли Режисер викликає тест монтажу, ви можете зробити один безкоштовний тест перед початком монтажу, який зараховується як звичайний здобутий успіх або провал.'
				}),
				FactoryLogic.feature.create({
					id: 'censor-sub-2-2-2',
					name: 'Суддя Характера',
					description: 'Зосередженість на фрагментарних видіннях дарує вам божественний проникливий погляд у світ і його істот поза вашими звичайними відчуттями. Коли ви мали б виконати перевірку Інтуїції, ви можете замість цього зробити перевірку Присутності.'
				}),
				FactoryLogic.feature.createChoice({
					id: 'censor-sub-2-2-3',
					name: 'Здібність Оракула 2-го рівня',
					options: [
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'censor-sub-2-2-3a',
									name: 'Передбачлива Благодать',
									description: 'Завдяки передбачливому видінню ви попереджаєте союзника про наближення нападу.',
									type: FactoryLogic.type.createTrigger('Ворог у межах 10 клітинок починає свій хід.'),
									keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged],
									distance: [FactoryLogic.distance.createRanged(10)],
									target: 'На себе або одного союзника',
									cost: 5,
									sections: [
										FactoryLogic.createAbilitySectionText('Ви можете витратити Відновлення, щоб дозволити цілі відновити Витривалість, рівну вашому значенню відновлення. Ціль може тоді виконати свій хід одразу перед ворогом, який спричинив тригер.')
									]
								})
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'censor-sub-2-2-3b',
									name: 'З моїм Благословенням',
									description: 'Слово в молитві — і боги вказують шлях.',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged],
									distance: [FactoryLogic.distance.createRanged(10)],
									target: 'На себе або одного союзника',
									cost: 5,
									sections: [
										FactoryLogic.createAbilitySectionText('Ціль може використати безкоштовну тригерну дію, щоб застосувати підписну ударну здібність або героїчну ударну здібність, і має подвійну перевагу на цю здібність. Якщо обрано героїчну здібність, зменшіть її вартість Героїчного ресурсу на 3 (мінімум 0).')
									]
								})
							}),
							value: 1
						}
					]
				})
			]
		},
		{
			level: 3,
			features: []
		},
		{
			level: 4,
			features: []
		},
		{
			level: 5,
			features: [
				FactoryLogic.feature.create({
					id: 'censor-sub-2-3-1',
					name: 'Пророцтво',
					description: `Ви краще відсіюєте постійні фрагментарні видіння від вашого божества і можете діяти, щоб втілити їх. Кожного разу, коли ви здобуваєте 1 або більше Перемог, ви можете зробити число кидків 2d10, рівне кількості здобутих Перемог. Записуйте кожен кидок у порядку. Коли ви або істота в межах 10 клітин робить кидок сили, ви можете використати безкоштовну тригерну дію, щоб замінити суму на кубиках на ваш перший записаний кидок.

Ви відкидаєте кожен кидок після його використання, і кожного разу, коли ви здобуваєте Перемоги, додаєте нові кидки в кінець списку. Будь-які невикористані кидки відкидаються при завершенні вашого відпочинку.
					`
				})
			]
		},
		{
			level: 6,
			features: [
				FactoryLogic.feature.createChoice({
					id: 'censor-sub-2-4-1',
					name: 'Здібність Оракула 6-го рівня',
					options: [
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'censor-sub-2-4-1a',
									name: 'Тягар Зла',
									description: 'Ви відкриваєте видіння долі ваших ворогів, яке змушує їх метушитися і приголомшує.',
									type: FactoryLogic.type.createManeuver(),
									keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged, AbilityKeyword.Strike],
									distance: [FactoryLogic.distance.createRanged(10)],
									target: 'Три вороги',
									cost: 9,
									sections: [
										FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
											characteristic: [Characteristic.Presence],
											tier1: 'Зрушити на 3; І < [слабкий], приголомшений (рят. кидок)',
											tier2: 'Зрушити на 5; І < [середній], приголомшений (рят. кидок)',
											tier3: 'Зрушити на 7; І < [сильний], приголомшений (рят. кидок)'
										}))
									]
								})
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'censor-sub-2-4-1b',
									name: 'Едикт Миру',
									description: 'Ви передбачаєте дії ворогів і позбавляєте їх можливості їх виконати.',
									type: FactoryLogic.type.createManeuver(),
									keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
									distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Aura, value: 3 })],
									target: 'Кожен ворог у зоні',
									cost: 9,
									sections: [
										FactoryLogic.createAbilitySectionText('До кінця зустрічі або поки ви не опинитесь у стані вмирання, коли будь-яка ціль виконує тригерну дію або безкоштовну тригерну дію, ця дія скасовується, а ціль отримує священну шкоду, рівну вашому показнику Присутності.')
									]
								})
							}),
							value: 1
						}
					]
				})
			]
		},
		{
			level: 7,
			features: []
		},
		{
			level: 8,
			features: [
				FactoryLogic.feature.create({
					id: 'censor-sub-2-5-1',
					name: 'Розкрито їхнє минуле',
					description: 'Ваші постійні фрагментарні видіння стають яснішими і можуть бути відточені для розуміння минулого істот, з якими ви взаємодієте. Під час розмови з будь-якою істотою ви можете виконати середню перевірку Присутності, щоб побачити видіння з її минулого. При успіху ви бачите чітке уявлення про будь-яку тему, пов’язану з минулим істоти, яку ви хочете зрозуміти. При успіху зі наслідком ви бачите два видіння — одне хибне і одне істинне. При поразці ви втрачаєте 2d6 Витривалості.'
				})
			]
		},
		{
			level: 9,
			features: [
				FactoryLogic.feature.createChoice({
					id: 'censor-sub-2-6-1',
					name: 'Здібність Оракула 9-го рівня',
					options: [
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'censor-sub-2-6-1a',
									name: 'Благословення й Прокляття',
									description: 'Боги благословляють і проклинають у рівній мірі.',
									type: FactoryLogic.type.createTrigger('Ціль робить кидок сили.'),
									keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged],
									distance: [FactoryLogic.distance.createRanged(10)],
									target: 'Одна істота',
									cost: 11,
									sections: [
										FactoryLogic.createAbilitySectionText('Ціль отримує результат рівня 1 або рівня 3 на своєму кидку сили (на ваш вибір). Ви можете обрати іншу ціль у межах дистанції, яка отримає протилежний результат на своєму наступному кидку сили.')
									]
								})
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'censor-sub-2-6-1b',
									name: 'Здійсни свою долю',
									description: 'Ви бачили різні майбутні варіанти, і лише цей спрацьовує.',
									type: FactoryLogic.type.createTrigger('Ви або інший герой завершує свій хід.'),
									keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged],
									distance: [FactoryLogic.distance.createRanged(10)],
									target: 'Один союзник',
									cost: 11,
									sections: [
										FactoryLogic.createAbilitySectionText('Ціль виконує свій хід після тригерного героя і негайно знімає всі стани та негативні ефекти з себе. Під час свого ходу ціль має подвійну перевагу на кидках сили.')
									]
								})
							}),
							value: 1
						}
					]
				})
			]
		},
		{
			level: 10,
			features: []
		}
	],
	abilities: [],
	selected: false
};
