import { AbilityDistanceType } from '@/enums/ability-distance-type';
import { AbilityKeyword } from '@/enums/ability-keyword';
import { Characteristic } from '@/enums/characteristic';
import { DamageModifierType } from '@/enums/damage-modifier-type';
import { DamageType } from '@/enums/damage-type';
import { FactoryLogic } from '@/logic/factory-logic';
import { FeatureField } from '@/enums/feature-field';
import { Title } from '@/models/title';

export class TitleData {
	static ancientLoremaster: Title = {
		id: 'title-ancient-loremaster',
		name: 'Знавець давніх знань',
		description: '«Вражає, що тільки не знаходиш у старих книжках. Погляньте-но: майже повні креслення бойового автомата, припадають пилом лише тому, що тут ніхто не читає заліаком.»',
		echelon: 1,
		prerequisites: 'Ви знаходите схованку забутих книжок.',
		features: [
			FactoryLogic.feature.create({
				id: 'title-ancient-loremaster-1',
				name: 'Важіль впливу',
				description: 'Ви дізнаєтеся безцінну таємницю. Режисер обирає тип особи, яка цінувала б цю таємницю, зазвичай це член певної фракції, наприклад хігарський вельможа, або певний тип людей, наприклад скупник краденого. Під час переговорів із такою особою ви можете запропонувати цю таємницю. Якщо вона погодиться, її зацікавленість зростає на 3 (до максимуму 5). Ви можете поділитися цією таємницею лише раз.'
			}),
			FactoryLogic.feature.create({
				id: 'title-ancient-loremaster-2',
				name: 'Рідкісні книги',
				description: 'Ви поповнюєте свою колекцію рідкісними стародавніми книгами. Щоразу, коли ви беретеся за дослідницький проєкт, кидайте 1d6 за кожну мертву мову, яку знаєте, і додавайте суму до кидка проєкту.'
			}),
			FactoryLogic.feature.create({
				id: 'title-ancient-loremaster-3',
				name: 'Кодекс Сусурруса',
				description: 'Ви знаходите зловісну книгу, що шепоче поради голосом, якого не чує ніхто інший. Доки ви дослухаєтеся до порад книги, ви отримуєте перевагу на випробування Розуму й шкоду на випробування Присутності. Ви можете будь-коли перестати слухатися книгу, але тоді вона не говоритиме з вами до кінця дня.'
			})
		],
		selectedFeatureID: ''
	};

	static angler: Title = {
		id: 'title-angler',
		name: 'Рибалка',
		description: 'Ви отримуєте таку перевагу.',
		echelon: 1,
		prerequisites: '120 очок проєкту, витрачених на таблицю «Снасті» під час проєкту «Риболовля».',
		features: [
			FactoryLogic.feature.create({
				id: 'title-angler-1',
				name: 'Рибалка',
				description: 'Ви отримуєте перевагу на всі кидки проєкту для «Риболовлі».'
			})
		],
		selectedFeatureID: ''
	};

	static battleaxeDiplomat: Title = {
		id: 'title-battleaxe-diplomat',
		name: 'Дипломат із бойовою сокирою',
		description: '«Здається, ми рівні силою й бойовою вправністю. Може, якийсь час поміряємося словами?»',
		echelon: 1,
		prerequisites: 'Ви здобуваєте дружбу або союз істоти, з якою колись билися.',
		features: [
			FactoryLogic.feature.create({
				id: 'title-battleaxe-diplomat-1',
				name: 'Залізна рука в оксамитовій рукавичці',
				description: 'Уперше під час переговорів, коли ви робите випробування з навичкою Залякування і не наводите аргумент, що апелює до мотиву NPC, ви не знижуєте терпіння чи зацікавленість NPC незалежно від результату кидка.'
			}),
			FactoryLogic.feature.create({
				id: 'title-battleaxe-diplomat-2',
				name: 'Перемирʼя!',
				description: 'Ви маєте подвійну перевагу на випробування, щоб припинити бій і почати переговори.'
			}),
			FactoryLogic.feature.create({
				id: 'title-battleaxe-diplomat-3',
				name: 'Розуміння воїнів',
				description: 'Ви отримуєте перевагу на випробування Присутності для взаємодії з істотами, з якими билися в бойових зіткненнях.'
			})
		],
		selectedFeatureID: ''
	};

	static brawler: Title = {
		id: 'title-brawler',
		name: 'Забіяка',
		description: '«Ми вас не вбʼємо. Але ви ще побажаєте, щоб убили.»',
		echelon: 1,
		prerequisites: 'Ви перемагаєте в бою, не вбивши жодного ворога.',
		features: [
			FactoryLogic.feature.createAbility({
				ability: FactoryLogic.createAbility({
					id: 'title-brawler-1',
					name: 'Пригнись!',
					type: FactoryLogic.type.createTrigger('Ворог бʼє вас, поки інша істота флангує вас'),
					distance: [FactoryLogic.distance.createSpecial('Adjacent')],
					target: 'Один ворог',
					sections: [
						FactoryLogic.createAbilitySectionText('Ви перенаправляєте удар проти другої істоти. Після використання цієї переваги ви не можете використати її знову, поки не заробите 1 або більше Перемог.')
					]
				})
			}),
			FactoryLogic.feature.create({
				id: 'title-brawler-2',
				name: 'Майстер імпровізованої зброї',
				description: 'Коли ви використовуєте збройну здібність з імпровізованою зброєю або зброєю, що не входить до вашого набору, ця здібність отримує бонус до шкоди ближньою зброєю від вашого набору.'
			}),
			FactoryLogic.feature.create({
				id: 'title-brawler-3',
				name: 'Удар головою',
				description: 'Поки ви схоплені або скуті, ваші вільні удари не отримують шкоди там, де ці стани зазвичай її накладають.'
			}),
			FactoryLogic.feature.create({
				id: 'title-brawler-4',
				name: 'Якби я хотів твоєї смерті, ти був би мертвий',
				description: 'Щоразу, коли ви перемагаєте ворогів, не вбиваючи нікого з них (зокрема ворогів, перемога над якими дала вам право на цей титул), ви отримуєте перевагу на випробування під час переговорів із цими ворогами.'
			})
		],
		selectedFeatureID: ''
	};

	static cityRat: Title = {
		id: 'title-city-rat',
		name: 'Міський пацюк',
		description: '«Не спати всю ніч, нишпорити по забігайлівках. Влізти в бійку, тікати від варти. Оце і є справжнє міське життя.»',
		echelon: 1,
		prerequisites: 'Ви провели щонайменше 5 перепочинків у мегаполісі.',
		features: [
			FactoryLogic.feature.create({
				id: 'title-city-rat-1',
				name: 'Досвідчений покупець',
				description: 'Коли ви шукаєте предмет-передумову для ремісничого проєкту, ви можете згадати, що колись зустрічали когось, у кого цей предмет може бути, або принаймні є відомості про нього.'
			}),
			FactoryLogic.feature.create({
				id: 'title-city-rat-2',
				name: 'Непомітний у натовпі',
				description: 'Поки ви використовуєте одну чи більше істот як прикриття, ви отримуєте перевагу на випробування, щоб ховатися й крастися.'
			}),
			FactoryLogic.feature.create({
				id: 'title-city-rat-3',
				name: 'Вулична кмітливість',
				description: 'Поки ви в поселенні, вас не можна заскочити зненацька.'
			})
		],
		selectedFeatureID: ''
	};

	static doomed: Title = {
		id: 'title-doomed',
		name: 'Приречений',
		description: '«Я не знаю, що це означало, але коли я бачив, як вона помирає, мені було видіння. Я бачив її смерть і власну. Я що, втрачаю розум?»',
		echelon: 1,
		prerequisites: 'Ви не хакаан, але стали свідком смерті хакаана.',
		features: [
			FactoryLogic.feature.create({
				id: 'title-doomed-1',
				name: 'Приречений',
				description: 'Вам не судилося загинути значущою смертю, та ви все ще можете її здобути. Коли вашу Витривалість зводять до 0, але ви лишаєтеся притомним, ви можете стати приреченим. Якщо ви робите це, то не можете відновлювати Витривалість, автоматично отримуєте результат 3 рівня на випробуваннях і кидках сили та не помираєте, доки ваша Витривалість не досягне відʼємного значення вашого максимуму Витривалості. Наприкінці зіткнення ви помираєте.'
			})
		],
		selectedFeatureID: ''
	};

	static dwarfLegionnaire: Title = {
		id: 'title-dwarf-legionnaire',
		name: 'Гном-легіонер',
		description: '«Я багато чого навчився. Можливо, саме твоя відвага надихає інших. Стеж не лише за мечем суперника, а й за його щитом. І понад усе стій твердо й не відступай.»',
		echelon: 1,
		prerequisites: 'Ви бʼєтеся пліч-о-пліч із трьома або більше гномами.',
		features: [
			FactoryLogic.feature.create({
				id: 'title-dwarf-legionnaire-1',
				name: 'Щільний стрій',
				description: 'Поки ви суміжні з двома або більше союзниками, ви отримуєте +2 до стійкості.'
			}),
			FactoryLogic.feature.create({
				id: 'title-dwarf-legionnaire-2',
				name: 'Руна тривоги',
				description: 'Ви можете витратити 10 безперервних хвилин, щоб вирізьбити на поверхні магічну руну у формі ока. Руна світить на 2 клітинки. Вона розвіюється через 1 хвилину після активації або якщо ви викарбовуєте її в іншому місці. Руна активується, коли ворог наближається до неї на 2 клітинки. Коли руна активується, ви прокидаєтеся, якщо спите не магічним сном, і протягом 1 хвилини можете сприймати світ крізь руну так, ніби перебуваєте в її клітинці.'
			}),
			FactoryLogic.feature.createAbility({
				ability: FactoryLogic.createAbility({
					id: 'title-dwarf-legionnaire-3',
					name: 'Злиття з каменем',
					type: FactoryLogic.type.createManeuver({ qualifiers: ['Поруч із камʼяною стіною'] }),
					distance: [FactoryLogic.distance.createSelf()],
					target: 'Себе',
					sections: [
						FactoryLogic.createAbilitySectionText('Ви отримуєте прикриття. Це прикриття триває, доки ви не покинете клітку або не використаєте здібність.')
					]
				})
			})
		],
		selectedFeatureID: ''
	};

	static elementalDabbler: Title = {
		id: 'title-elemental-dabbler',
		name: 'Любитель стихій',
		description: '«Духу вогню, наказую тобі!»',
		echelon: 1,
		prerequisites: 'Ви перемагаєте чудовисько з ключовим словом Elemental, наприклад вогняний кракс.',
		features: [
			FactoryLogic.feature.create({
				id: 'title-elemental-dabbler-1',
				name: 'Стихійний метальник',
				description: 'Оберіть тип шкоди, до якого переможене чудовисько мало імунітет. Ви отримуєте 1-рівневу особливість Елементаліста Hurl Element, що завдає обраний тип шкоди.'
			}),
			FactoryLogic.feature.create({
				id: 'title-elemental-dabbler-2',
				name: 'Стихійний імунітет',
				description: 'Оберіть тип шкоди, до якого переможене чудовисько мало імунітет. Ви отримуєте імунітет до обраного типу шкоди, що дорівнює значенню вашої найвищої характеристики.'
			}),
			FactoryLogic.feature.create({
				id: 'title-elemental-dabbler-3',
				name: 'Стихійна зброя',
				description: 'Оберіть тип шкоди, до якого переможене чудовисько мало імунітет. Щоразу, коли ви використовуєте збройну здібність, що завдає шкоди, ця здібність може завдавати шкоди обраного типу замість свого звичайного типу.'
			})
		],
		selectedFeatureID: ''
	};

	static factionMember: Title = {
		id: 'title-faction-member',
		name: 'Член фракції',
		description: '«Ще пів року, і я тут усім керуватиму.»',
		echelon: 1,
		prerequisites: 'Ви вступаєте до армії, гільдії чи подібної організації.',
		features: [
			FactoryLogic.feature.create({
				id: 'title-faction-member-1',
				name: 'Наукова фракція',
				description: `
Коли ви ведете переговори з членом своєї фракції, його початкове терпіння зростає на 2, до максимуму 5.

Ви знаходите мудреця, який може зробити до трьох випробувань Розуму для пригадування знань або кидків проєкту для дослідницьких проєктів від вашого імені. Мудрець має +5 до цих випробувань. Кожен такий кидок проєкту триває 10 хвилин і не потребує виконання під час перепочинку.`
			}),
			FactoryLogic.feature.create({
				id: 'title-faction-member-2',
				name: 'Гільдійська фракція',
				description: `
Коли ви ведете переговори з членом своєї фракції, його початкове терпіння зростає на 2, до максимуму 5.

Ви знаходите вправного ремісника, який може зробити до трьох кидків проєкту для крафтових проєктів від вашого імені. Ремісник має +5 до цих кидків. Кожен такий кидок проєкту триває 10 безперервних хвилин і не потребує виконання під час перепочинку.`
			}),
			FactoryLogic.feature.create({
				id: 'title-faction-member-3',
				name: 'Військова фракція',
				description: `
Коли ви ведете переговори з членом своєї фракції, його початкове терпіння зростає на 2, до максимуму 5.

Ви набираєте до трьох міньйонів рівня не вище за ваш, тип яких відповідає фракції (наприклад, людських вартових). Ці міньйони виконують ваші накази протягом дня.`
			}),
			FactoryLogic.feature.create({
				id: 'title-faction-member-4',
				name: 'Шпигунська фракція',
				description: `
Коли ви ведете переговори з членом своєї фракції, його початкове терпіння зростає на 2, до максимуму 5.

Ви знаходите агента, який може надати вам три відомості про поселення, у якому ви перебуваєте, наприклад місце перебування прихованої особи, таємний вхід до охоронюваної зони або мотив чи ваду важливої особи в переговорах.`
			})
		],
		selectedFeatureID: ''
	};

	static goldenrod: Title = {
		id: 'title-goldenrod',
		name: 'Ґолденрод',
		description: 'Ви отримуєте таку перевагу.',
		echelon: 1,
		prerequisites: '300 очок проєкту, витрачених на таблицю «Снасті» під час проєкту «Риболовля».',
		features: [
			FactoryLogic.feature.create({
				id: 'title-goldenrod-1',
				name: 'Ґолденрод',
				description: 'Щоразу, коли ви беретеся за проєкт «Риболовля», ви можете перекинути один кидок проєкту.'
			})
		],
		selectedFeatureID: ''
	};

	static localHero: Title = {
		id: 'title-local-hero',
		name: 'Місцевий герой',
		description: '«Ваші гроші тут не потрібні. Герої Ґрейвсфорда пʼють у цій таверні задарма!»',
		echelon: 1,
		prerequisites: 'Ви рятуєте громаду від неминучого знищення.',
		features: [
			FactoryLogic.feature.create({
				id: 'title-local-hero-1',
				name: 'Нова зоря',
				description: 'Щоразу, коли ви завершуєте перепочинок у громаді, яку врятували, загін отримує жетон героя. Цей жетон героя зникає наприкінці вашого наступного перепочинку, якщо його не використали.'
			}),
			FactoryLogic.feature.create({
				id: 'title-local-hero-2',
				name: 'Податливі люди',
				description: 'Ви отримуєте перевагу на випробування, виконані навичками з груп міжособистісних навичок та інтриг, коли впливаєте на членів громади, яку врятували.'
			}),
			FactoryLogic.feature.createBonus({
				id: 'title-local-hero-3',
				name: 'Місцева слава',
				field: FeatureField.Renown,
				value: 1
			})
		],
		selectedFeatureID: ''
	};

	static mageHunter: Title = {
		id: 'title-mage-hunter',
		name: 'Мисливець на магів',
		description: '«Їхня сила небезпечна. Неприродна. Хтось мусить щось із цим зробити.»',
		echelon: 1,
		prerequisites: 'Ви перемагаєте трьох ватажків або одинаків, кожен із яких має принаймні одну здібність із ключовим словом Magic.',
		features: [
			FactoryLogic.feature.create({
				id: 'title-mage-hunter-1',
				name: 'Арканне приглушення',
				description: 'Коли ви опираєтесь ефективності магічних здібностей, ваші показники характеристик вважаються на 1 вищими, ніж зазвичай.'
			}),
			FactoryLogic.feature.createAbility({
				ability: FactoryLogic.createAbility({
					id: 'title-mage-hunter-2',
					name: 'Не вийде!',
					type: FactoryLogic.type.createTrigger('Ціль використовує здібність із ключовим словом Magic'),
					distance: [FactoryLogic.distance.createSpecial('Adjacent')],
					target: 'Одна істота',
					sections: [
						FactoryLogic.createAbilitySectionText('Виконайте безкоштовний удар.')
					]
				})
			}),
			FactoryLogic.feature.createMultiple({
				id: 'title-mage-hunter-3',
				name: 'Запах магії',
				description: 'Як маневр ви відкриваєте свої чуття до магічного сліду. До кінця вашого наступного ходу ви знаєте, чи є кожна істота в межах 5 клітин конструкцією, нежиттю або істотою з іншого світу, а також чи використовувала вона магічну здібність упродовж попередньої години. Додатково вас не можна заскочити зненацька конструкціями, нежиттю чи істотами з інших світів.',
				features: [
					FactoryLogic.feature.createAbility({
						ability: FactoryLogic.createAbility({
							id: 'title-mage-hunter-3-1',
							name: 'Запах магії',
							description: 'Ви відкриваєте свої чуття до магічного сліду',
							type: FactoryLogic.type.createManeuver(),
							distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 5 })],
							target: 'Кожна істота в зоні',
							sections: [
								FactoryLogic.createAbilitySectionText('До кінця вашого наступного ходу ви знаєте, чи є кожна ціль конструкцією, нежиттю чи істотою з іншого світу, а також чи використовувала вона магічну здібність протягом попередньої години.')
							]
						})
					}),
					FactoryLogic.feature.create({
						id: 'title-mage-hunter-3-2',
						name: 'Запах магії',
						description: 'Вас не можна заскочити зненацька конструкціями, нежиттю чи істотами з інших світів.'
					})
				]
			})
		],
		selectedFeatureID: ''
	};

	static marshal: Title = {
		id: 'title-marshal',
		name: 'Маршал',
		description: '«Я сказав, що у вас є двадцять чотири години, аби забратися з міста. Це було… що, десь двадцять чотири години тому?»',
		echelon: 1,
		prerequisites: 'Ви вступаєте до організації, що полює на злочинців, наприклад до Дальніх Мореплавців, або вас уповноважує діяти місцева влада.',
		features: [
			FactoryLogic.feature.create({
				id: 'title-marshal-1',
				name: 'Значить, буде по-поганому',
				description: 'Коли починається бій і вас не заскочили зненацька, перший раз, коли ви отримуєте шкоду до свого ходу, ви зменшуєте її вдвічі.'
			}),
			FactoryLogic.feature.createAbility({
				ability: FactoryLogic.createAbility({
					id: 'title-marshal-2',
					name: 'Безоглядний переслідувач',
					description: 'Біль не зупинить ваше переслідування.',
					type: FactoryLogic.type.createManeuver({ free: true }),
					distance: [FactoryLogic.distance.createSelf()],
					target: 'Себе',
					sections: [
						FactoryLogic.createAbilitySectionText('Ви завдаєте собі 1d6 шкоди, яку не можна зменшити жодним чином. Коли це відбувається, ви ігноруєте важкопрохідну місцевість і можете збільшити дальність будь-якого стрибка на 1 клітку до кінця вашого ходу.')
					]
				})
			}),
			FactoryLogic.feature.create({
				id: 'title-marshal-3',
				name: 'Срібний щит',
				description: 'Ви маєте знак, наданий вашою організацією. Поки ви його носите, ви отримуєте особливість Цензора «Моє життя за твоє». Коли ви використовуєте цю здібність, ви не можете витрачати Гнів, якщо не маєте класової особливості Гнів.'
			}),
			FactoryLogic.feature.create({
				id: 'title-marshal-4',
				name: 'Навчений слідопит',
				description: 'Ви отримуєте перевагу на випробування, щоб вистежувати злочинців.'
			})
		],
		selectedFeatureID: ''
	};

	static masterOfReels: Title = {
		id: 'title-master-of-reels',
		name: 'Майстер котушок',
		description: 'Ви отримуєте таку перевагу.',
		echelon: 1,
		prerequisites: 'Ви здобуваєте цей титул, виконуючи проєкт «Риболовля».',
		features: [
			FactoryLogic.feature.create({
				id: 'title-master-of-reels-1',
				name: 'Майстер котушок',
				description: 'Щоразу, коли ви завдаєте шкоди цілі, яка перебуває за 2 або більше клітинки від вас і не була також примусово переміщена, ви можете притягнути ціль на кількість клітинок, що дорівнює вашому показнику Ловкості, Розуму або Інтуїції (на ваш вибір).'
			})
		],
		selectedFeatureID: ''
	};

	static monsterBane: Title = {
		id: 'title-monster-bane',
		name: 'Погибель чудовиськ',
		description: '«Ти насміхаєшся з Бланвіна Мишогуба? Гадаєш, мій подвиг дрібʼязковий? Але ж ти не бачив, якого розміру була та миша!»',
		echelon: 1,
		prerequisites: 'Ви перемагаєте чудовисько-ватажка або одинака з показником Розуму –2 або нижче, наприклад арікса.',
		features: [
			FactoryLogic.feature.create({
				id: 'title-monster-bane-1',
				name: 'Погибель звірів',
				description: 'Істоти з ключовим словом Animal отримують шкоду на удари проти вас.'
			}),
			FactoryLogic.feature.create({
				id: 'title-monster-bane-2',
				name: 'Утихомирювач чудовиськ',
				description: 'Ви отримуєте перевагу на випробування, щоб заспокоювати або приручати нерозумних істот.'
			}),
			FactoryLogic.feature.create({
				id: 'title-monster-bane-3',
				name: 'Трофей чудовиська',
				description: 'Ви прикрашаєте спорядження трофеєм із переможеної істоти. Поки трофей видно, ви отримуєте перевагу на випробування, щоб залякувати розумних істот.'
			})
		],
		selectedFeatureID: ''
	};

	static owedAFavor: Title = {
		id: 'title-owed-a-favor',
		name: 'Вам винні послугу',
		description: '«Вдячність Гільдії не має меж! Ми відплатимо вам як тільки зможемо… тільки не справжніми грішми.»',
		echelon: 1,
		prerequisites: 'Ви успішно виконуєте послугу для могутньої фракції.',
		features: [
			FactoryLogic.feature.create({
				id: 'title-owed-a-favor-1',
				name: 'Вам винні послугу',
				description: `
Фракція виконає для загону одну послугу, якщо це не суперечитиме її цілям.

Крім того, фракція є добрим джерелом інформації. Режисер обирає навичку з ремісничої групи навичок або групи знань, що пасує цій фракції, наприклад навичку Кримінальний світ для банди злочинців, навичку Ковальство для гільдії ковалів або навичку Суспільство для шляхетного дому. Поки ви перебуваєте в поселенні, де фракція має вплив, ви отримуєте цю навичку, якщо ще не маєте її. Якщо ж ви вже маєте цю навичку, то натомість отримуєте перевагу на випробування з її використанням.`
			})
		],
		selectedFeatureID: ''
	};

	static presumedDead: Title = {
		id: 'title-presumed-dead',
		name: 'Вважається загиблим',
		description: '«Але… ти ж мертвий. Ми були на твоєму похороні.»',
		echelon: 1,
		prerequisites: 'Ви гинете так, що ваше тіло не можна повернути або оглянути (наприклад, падаєте зі скелі).',
		features: [
			FactoryLogic.feature.create({
				id: 'title-presumed-dead-1',
				name: 'Вважається загиблим',
				description: `
Хоч може здаватися, що ви загинули, насправді це не так. Натомість ви відновлюєте 1 Витривалість і можете витратити 1 або більше Відновлень. Додатково ви отримуєте дрібничку 1-го ешелону на вибір Режисера (див. розділ «Скарби» раніше в цій главі).

У драматичний момент, визначений Режисером, ви повертаєтеся до загону з поясненням, як дивом урятувалися і як дорогою знайшли свою нову дрібничку.`
			})
		],
		selectedFeatureID: ''
	};

	static ratcatcher: Title = {
		id: 'title-ratcatcher',
		name: 'Щуролов',
		description: '«Люблю битися з цими дрібними пройдисвітами. Принаймні не доводиться витрачатися на шолом.»',
		echelon: 1,
		prerequisites: 'Ви перемагаєте чудовисько-ватажка або одинака розміру 1S чи менше, наприклад гобліна-монарха.',
		features: [
			FactoryLogic.feature.create({
				id: 'title-ratcatcher-1',
				name: 'Смертоносний велет',
				description: 'Ваші удари отримують +3 до шкоди проти істот, чий розмір менший за ваш.'
			}),
			FactoryLogic.feature.create({
				id: 'title-ratcatcher-2',
				name: 'Усі посунулися!',
				description: 'Коли ви використовуєте маневр Knockback, ви можете націлити ще одну істоту вашого розміру або двох додаткових менших істот.'
			}),
			FactoryLogic.feature.createAbility({
				ability: FactoryLogic.createAbility({
					id: 'title-ratcatcher-3',
					name: 'Виходьте гратися',
					description: 'Виходьте-но гратися!',
					type: FactoryLogic.type.createManeuver(),
					keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
					distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 5 })],
					target: 'Кожен прихований від вас ворог у зоні',
					cost: 1,
					sections: [
						FactoryLogic.createAbilitySectionText('Кожна ціль, у якої П < [середній], висміюється вами до кінця її наступного ходу, і ви знаєте місцезнаходження кожної істоти, висміяної таким чином.')
					]
				})
			})
		],
		selectedFeatureID: ''
	};

	static savedForAWorseFate: Title = {
		id: 'title-saved-for-a-worse-fate',
		name: 'Збережені для гіршої долі',
		description: '«Випий це. Попереду тобі знадобляться всі сили!»',
		echelon: 1,
		prerequisites: 'Увесь загін убивають або захоплюють у полон розумні вороги.',
		features: [
			FactoryLogic.feature.create({
				id: 'title-saved-for-a-worse-fate-1',
				name: 'Гладіатори',
				description: 'Ви мусите битися на смерть на втіху своїм поневолювачам. Призначені вам супротивники володіють дрібничкою або рівневим скарбом чи охороняють його, і ви можете здобути цю нагороду, якщо переможете.'
			}),
			FactoryLogic.feature.create({
				id: 'title-saved-for-a-worse-fate-2',
				name: 'Здобич',
				description: 'Ваші поневолювачі планують випустити вас і влаштувати полювання, але жодної втіхи немає без гідного виклику. Кожен із вас отримує лікувальний напій, що дає +1 до швидкості та збільшує ваші Відновлення на 2. Ця перевага триває до кінця вашого наступного перепочинку.'
			}),
			FactoryLogic.feature.create({
				id: 'title-saved-for-a-worse-fate-3',
				name: 'Жертви',
				description: 'Вас мають скинути у вулкан, згодувати священному чудовиську, покинути в пустелі або принести в жертву вищій силі якимось іншим способом. Вас прикрашають священними коштовностями. Кожен герой отримує 1 Багатство.'
			}),
			FactoryLogic.feature.create({
				id: 'title-saved-for-a-worse-fate-4',
				name: 'Рятівники',
				description: 'Ваші поневолювачі бояться ще сильнішого ворога і хочуть, щоб ви перемогли його замість них. Вам навіть дозволяють залишити собі будь-який скарб, який знайдете під час цього.'
			})
		],
		selectedFeatureID: ''
	};

	static shipCaptain: Title = {
		id: 'title-ship-captain',
		name: 'Капітан корабля',
		description: '«Якір угору, браття! Шукаємо ми не золота, а слави!»',
		echelon: 1,
		prerequisites: 'Ви здобуваєте корабель, повітряний корабель або подібне судно.',
		features: [
			FactoryLogic.feature.create({
				id: 'title-ship-captain-1',
				name: 'Глибоководець',
				description: 'Рухаючись, ви можете автоматично плисти на повній швидкості.'
			}),
			FactoryLogic.feature.create({
				id: 'title-ship-captain-2',
				name: 'Голос корабля',
				description: 'Ви магічно знаєте місцезнаходження будь-якого корабля, який контролює ваш загін, навіть коли не перебуваєте на борту. Ви можете телепатично спілкуватися з будь-ким на борту одного з ваших кораблів, хто розуміє мову, і він може відповісти незалежно від того, як далеко ви від корабля.'
			}),
			FactoryLogic.feature.create({
				id: 'title-ship-captain-3',
				name: 'Сигнальні прапори',
				description: 'Перебуваючи на борту корабля, ви можете спілкуватися й вести переговори з іншим кораблем на відстані до 5 миль, якщо ви та істоти на тому кораблі маєте лінію ефекту один до одного. Ви отримуєте перевагу на випробування Присутності, коли ведете переговори таким чином.'
			}),
			FactoryLogic.feature.create({
				id: 'title-ship-captain-4',
				name: 'Навчений член екіпажу',
				description: 'Ви отримуєте перевагу на випробування, щоб керувати морськими або повітряними суднами.'
			})
		],
		selectedFeatureID: ''
	};

	static troupeTactics: Title = {
		id: 'title-troupe-tactics',
		name: 'Тактика трупи',
		description: '«Ми актори! Ми повна протилежність звичайним людям!»',
		echelon: 1,
		prerequisites: 'Загін успішно виступив як трупа акторів, циркачів чи інших розважальників.',
		features: [
			FactoryLogic.feature.createAbility({
				ability: FactoryLogic.createAbility({
					id: 'title-troupe-tactics-1',
					name: 'Летючий цирк',
					type: FactoryLogic.type.createTrigger('Під час ходу цілі'),
					distance: [FactoryLogic.distance.createSpecial('Adjacent')],
					target: 'Один союзник',
					sections: [
						FactoryLogic.createAbilitySectionText('Ви штовхаєте ціль на до 2 клітинок, якщо її розмір такий самий, як ваш, або на 4 клітинки, якщо вона менша. Якщо це штовхання спричиняє падіння союзника, він може використати маневр перед падінням, щоб зменшити висоту падіння на 2.')
					]
				})
			}),
			FactoryLogic.feature.create({
				id: 'title-troupe-tactics-2',
				name: 'Прожектор',
				description: 'Ви магічно змушуєте істоту в межах 10 клітинок випромінювати світло на 5 клітинок. Це світло триває 1 хвилину, доки істота не відійде від вас більш ніж на 10 клітинок або доки ви не припините ефект (дія не потрібна). Поки істота освітлена, вона не може крастися чи ховатися, отримує шкоду на випробування для будь-яких таємних дій і здобуває перевагу на випробування з навичками Лідерство, Музика або Виступ.'
			}),
			FactoryLogic.feature.create({
				id: 'title-troupe-tactics-3',
				name: 'Актор другого плану',
				description: 'Ви отримуєте перевагу на групові випробування з використанням Присутності та на випробування, щоб допомагати іншій істоті у випробуванні Присутності.'
			}),
			FactoryLogic.feature.create({
				id: 'title-troupe-tactics-4',
				name: 'Розігрій натовп',
				description: 'Поки будь-хто з ваших союзників грає музику або виступає, ви отримуєте перевагу на випробування, щоб приховувати предмети, ховатися, зрізати гаманець або крастися.'
			})
		],
		selectedFeatureID: ''
	};

	static wantedDeadOrAlive: Title = {
		id: 'title-wanted-dead-or-alive',
		name: 'Розшукується: живим або мертвим',
		description: '«Сто срібняків?! Це образа! Я свого батька здав за пʼятдесят золотих крон. І він був невинний!»',
		echelon: 1,
		prerequisites: 'Державна влада оголошує вас поза законом.',
		features: [
			FactoryLogic.feature.create({
				id: 'title-wanted-dead-or-alive-1',
				name: 'Честь серед злодіїв',
				description: 'Під час переговорів зі злочинцями ваш показник Відомості вважається на 2 вищим, ніж зазвичай.'
			}),
			FactoryLogic.feature.create({
				id: 'title-wanted-dead-or-alive-2',
				name: 'Гроза міньйонів',
				description: 'Коли ви робите ближній удар, що націлює міньйона, і щонайменше ще один міньйон перебуває в межах дистанції цього удару, удар отримує +3 до шкоди.'
			}),
			FactoryLogic.feature.create({
				id: 'title-wanted-dead-or-alive-3',
				name: 'Ні, ви заарештовані!',
				description: 'Ви отримуєте перевагу на маневр Escape Grab. Додатково, коли ви успішно проходите випробування, щоб вирватися з пут або кайданів, як частину того ж маневру можете перекинути пута чи кайдани на суміжну істоту того самого розміру так, щоб вона не одразу це помітила.'
			})
		],
		selectedFeatureID: ''
	};

	static zombieSlayer: Title = {
		id: 'title-zombie-slayer',
		name: 'Винищувач зомбі',
		description: '«Та чому ж ти не здохнеш! Ти вже робив це раз, мав би вже вправно вмирати!»',
		echelon: 1,
		prerequisites: 'Ви перемагаєте чудовисько-ватажка або одинака з ключовим словом Undead, наприклад привида.',
		features: [
			FactoryLogic.feature.create({
				id: 'title-zombie-slayer-1',
				name: 'Благословенна зброя',
				description: 'Щоразу, коли ви використовуєте збройну здібність, що завдає шкоди, ця здібність може завдавати святої шкоди замість свого звичайного типу шкоди.'
			}),
			FactoryLogic.feature.createMultiple({
				id: 'title-zombie-slayer-2',
				name: 'Божественне здоровʼя',
				description: 'Ви отримуєте імунітет до скверни, що дорівнює значенню вашої найвищої характеристики. Додатково вас не можна перетворити на нежить.',
				features: [
					FactoryLogic.feature.create({
						id: 'title-zombie-slayer-2-1',
						name: 'Божественне здоровʼя',
						description: 'Вас не можна перетворити на нежить.'
					}),
					FactoryLogic.feature.createDamageModifier({
						id: 'title-zombie-slayer-2-2',
						modifiers: [
							FactoryLogic.damageModifier.createCharacteristic({
								damageType: DamageType.Corruption,
								modifierType: DamageModifierType.Immunity,
								characteristics: [Characteristic.Might, Characteristic.Agility, Characteristic.Reason, Characteristic.Intuition, Characteristic.Presence]
							})
						]
					})
				]
			}),
			FactoryLogic.feature.createAbility({
				ability: FactoryLogic.createAbility({
					id: 'title-zombie-slayer-3',
					name: 'Священний жах',
					description: 'Повертайся до могили!',
					type: FactoryLogic.type.createManeuver(),
					keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
					distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 3 })],
					target: 'Кожен ворожий нежить у зоні',
					cost: 3,
					sections: [
						FactoryLogic.createAbilitySectionText('Кожна ціль отримує святу шкоду, рівну вашому показнику Розуму, Інтуїції або Присутності (на ваш вибір). Додатково, кожна ціль з П < [сильний] залякано (рят. кидок закінчує).')
					]
				})
			})
		],
		selectedFeatureID: ''
	};

	static arenaFighter: Title = {
		id: 'title-arena-fighter',
		name: 'Боєць арени',
		description: '“Ніколи не бачили нищівного фіналу? Прийому, настільки жорстокого, що його заборонили на арені? Підійдіть ближче — і я покажу.”',
		echelon: 2,
		prerequisites: 'Ви перемагаєте в бою на арені або в іншому публічному бойовому змаганні.',
		features: [
			FactoryLogic.feature.create({
				id: 'title-arena-fighter-1',
				name: 'Брудний бій',
				description: 'Поки ви стоїте, ваші ближні удари отримують +3 до шкоди проти розпластаних істот. Крім того, стан «Розпластаний» не накладає ваду на ваші удари.'
			}),
			FactoryLogic.feature.create({
				id: 'title-arena-fighter-2',
				name: 'Вороги як зброя',
				description: 'Щоразу, коли ви тримаєте схопленою істоту вашого розміру або меншого, ви можете використати її як зброю, коли робите вільний удар ближньою зброєю. І ціль, і схоплений ворог отримують шкоду від цього удару.'
			}),
			FactoryLogic.feature.createBonus({
				id: 'title-arena-fighter-3',
				name: 'Миттєва знаменитість',
				field: FeatureField.Renown,
				value: 1
			}),
			FactoryLogic.feature.createAbility({
				ability: FactoryLogic.createAbility({
					id: 'title-arena-fighter-4',
					name: 'Нищівний фінал',
					description: 'Виставу закінчено, дітки!',
					type: FactoryLogic.type.createMain(),
					keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
					distance: [FactoryLogic.distance.createMelee()],
					target: 'Одна істота',
					cost: 5,
					sections: [
						FactoryLogic.createAbilitySectionRoll(
							FactoryLogic.createPowerRoll({
								characteristic: [Characteristic.Might, Characteristic.Agility],
								tier1: '6 шкоди; І < [слабкий], сповільнений (рят. кидок завершує)',
								tier2: '10 шкоди; І < [середній], зляканий (рят. кидок завершує)',
								tier3: '14 шкоди; І < [сильний], приголомшений (рят. кидок завершує)'
							})
						),
						FactoryLogic.createAbilitySectionText('Якщо ви вбиваєте цією здібністю не-мініонного супротивника, кожен ворог у радіусі 3 клітинок від вас лякається (рят. кидок завершує).')
					]
				})
			})
		],
		selectedFeatureID: ''
	};

	static awakened: Title = {
		id: 'title-awakened',
		name: 'Пробуджений',
		description: '“Я борсався з ним, і коли він помер… я відчув, як щось сталося. Зі мною.”',
		echelon: 2,
		prerequisites: 'Ви перемагаєте ватажка або соло-істоту, яка має принаймні одну здібність із ключовим словом Psionic, наприклад Voiceless Talker Evolutionist.',
		features: [
			FactoryLogic.feature.create({
				id: 'title-awakened-1',
				name: 'Передбачення',
				description: 'Ви не отримуєте ваду, коли використовуєте здібності проти істот із маскуванням.'
			}),
			FactoryLogic.feature.create({
				id: 'title-awakened-2',
				name: 'Чужий талант',
				description: 'Оберіть одну тригерну дію, до якої клас Талант має доступ на 1-му рівні. Ви отримуєте цю здібність незалежно від того, чи дозволяють ваш клас і підклас її взяти. Якщо ця здібність дозволяє вам отримувати або витрачати Ясність, ви не можете робити це, якщо не маєте риси класу «Ясність».'
			}),
			FactoryLogic.feature.createAbility({
				ability: FactoryLogic.createAbility({
					id: 'title-awakened-3',
					name: 'Телепатія',
					type: FactoryLogic.type.createManeuver(),
					distance: [FactoryLogic.distance.createRanged(10)],
					target: 'Одна істота, яка розуміє відому вам мову',
					sections: [
						FactoryLogic.createAbilitySectionText('Ви телепатично спілкуєтеся з ціллю. Ціль може відповісти телепатично як частина того ж маневру.')
					]
				})
			})
		],
		selectedFeatureID: ''
	};

	static battlefieldCommander: Title = {
		id: 'title-battlefield-commander',
		name: 'Польовий командир',
		description: '“Чари й тіні мають своє місце, але втримати поле можуть лише солдати.”',
		echelon: 2,
		prerequisites: 'Ви ведете армію в бій і перемагаєте.',
		features: [
			FactoryLogic.feature.createAbility({
				ability: FactoryLogic.createAbility({
					id: 'title-battlefield-commander-1',
					name: 'В атаку!',
					description: 'За мною!',
					type: FactoryLogic.type.createMain(),
					keywords: [AbilityKeyword.Area],
					distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 3 })],
					target: 'Себе і кожного союзника в зоні',
					cost: 9,
					sections: [
						FactoryLogic.createAbilitySectionText('Кожна ціль може виконати основну дію «Ривок».')
					]
				})
			}),
			FactoryLogic.feature.createBonus({
				id: 'title-battlefield-commander-2',
				name: 'Уславлений воїн',
				field: FeatureField.Renown,
				value: 1
			}),
			FactoryLogic.feature.create({
				id: 'title-battlefield-commander-3',
				name: 'Учень війни',
				description: 'Оберіть рису доктрини 1-го рівня класу Тактик. Ви отримуєте цю рису, навіть якщо не маєте риси «Тактична доктрина».'
			})
		],
		selectedFeatureID: ''
	};

	static bloodMagic: Title = {
		id: 'title-blood-bagic',
		name: 'Кривава магія',
		description: '“Лийся, крове, лиха жертво, і поглинь моїх ворогів у полумʼї!”',
		echelon: 2,
		prerequisites: 'Ви берете участь у проєкті «Дослідити знання», щоб вивчити заборонене знання.',
		features: [
			FactoryLogic.feature.create({
				id: 'title-blood-magic-1',
				name: 'Кривавий маг',
				description: 'Коли ви використовуєте зональну здібність із ключовим словом Magic або Psionic, ви можете отримати шкоду, рівну вашому рівню, щоб збільшити зону цієї здібності на 1 до кінця сутички. Якщо зона є лінією, ви збільшуєте лише один її вимір, а не обидва. Цю шкоду не можна зменшити жодним способом. Ви можете скористатися цією перевагою лише раз за кожне використання здібності.'
			}),
			FactoryLogic.feature.create({
				id: 'title-blood-magic-2',
				name: 'Криваве вбивство',
				description: 'Коли ви завдаєте істоті шкоди від кидка ударом, ви можете отримати шкоду, рівну вашому рівню, щоб завдати цій істоті вдвічі більше шкоди скверною. Шкоду, яку ви отримуєте від цього титулу, не можна зменшити жодним способом. Ви можете скористатися цією перевагою лише раз за здібність. Якщо ця шкода скверною зводить істоту до 0 Витривалості, вона вибухає кривавим фонтаном, а ви відновлюєте втрачену Витривалість. Ви не можете застосувати цю перевагу до істот без крові, наприклад конструкцій, елементалів або нежиті.'
			}),
			FactoryLogic.feature.createDamageModifier({
				id: 'title-blood-magic-3',
				name: 'Я відкидаю цю злу силу!',
				modifiers: [
					FactoryLogic.damageModifier.createPerLevel({
						damageType: DamageType.Corruption,
						modifierType: DamageModifierType.Immunity,
						value: 1
					})
				]
			})
		],
		selectedFeatureID: ''
	};

	static corsair: Title = {
		id: 'title-corsair',
		name: 'Корсар',
		description: '“Спустіть свій прапор, інакше ми спалимо вас до самої ватерлінії!”',
		echelon: 2,
		prerequisites: 'Ви маєте титул «Капітан корабля» і топите або захоплюєте корабель не меншого розміру, ніж ваш власний.',
		features: [
			FactoryLogic.feature.create({
				id: 'title-corsair-1',
				name: 'Артилерист',
				description: 'Ви отримуєте +5 до шкоди, коли використовуєте корабельну зброю.'
			}),
			FactoryLogic.feature.create({
				id: 'title-corsair-2',
				name: 'Чорний прапор',
				description: 'У вас є впізнаваний прапор, який наводить жах у відкритому морі. Поки ваш прапор майорить на вашому кораблі, члени екіпажів інших кораблів, які мають лінію ефекту до прапора, отримують ваду на удари по вашому кораблю або його екіпажу.'
			}),
			FactoryLogic.feature.createBonus({
				id: 'title-corsair-3',
				name: 'Грізна репутація',
				field: FeatureField.Renown,
				value: 1
			}),
			FactoryLogic.feature.create({
				id: 'title-corsair-4',
				name: 'Тактика пройдисвіта',
				description: 'Перебуваючи на борту корабля, ви можете використовувати наведені нижче навички, щоб робити випробування для впливу на інший корабель на відстані до 5 миль, якщо члени його екіпажу мають лінію ефекту до вас, і ви отримуєте на таке випробування перевагу. Ви можете використати Маскування, щоб приховати особу або загальний тип вашого корабля, Залякування, щоб переконати екіпаж іншого корабля втекти або здатися, або Ховання чи Крадіжку, щоб ваш корабель не помітили.'
			})
		],
		selectedFeatureID: ''
	};

	static factionOfficer: Title = {
		id: 'title-faction-officer',
		name: 'Офіцер фракції',
		description: '“Якщо вам щось потрібно чи ви чогось хочете, звертайтеся до мене. Я маю певний… вплив у цих краях.”',
		echelon: 2,
		prerequisites: 'Ви маєте титул «Член фракції» і значно просуваєте цілі своєї фракції.',
		features: [
			FactoryLogic.feature.create({
				id: 'title-faction-officer-1',
				name: 'Постачання',
				description: 'Коли ви отримуєте цей титул, ви здобуваєте магічну дрібничку 1-го або 2-го ешелону на свій вибір від своєї фракції. Щоразу, коли ви підвищуєте рівень, можете замінити цю дрібничку на іншу.'
			}),
			FactoryLogic.feature.create({
				id: 'title-faction-officer-2',
				name: 'Тут командуєте ви',
				description: 'Члени вашої фракції нижчого рангу виконують ваші звичні накази. У нестандартних ситуаціях ви отримуєте перевагу на випробування, зроблені для впливу на поведінку цих персонажів.'
			})
		],
		selectedFeatureID: ''
	};

	static feyFriend: Title = {
		id: 'title-fey-friend',
		name: 'Друг фейрі',
		description: '“Смакує врожай? Так, тепер ви розумієте мою мову. Не можна випити за моїм столом і піти звідси незмінним.”',
		echelon: 2,
		prerequisites: 'Ви їсте й пʼєте з ельфійським монархом або архіфеєю.',
		features: [
			FactoryLogic.feature.createMultiple({
				id: 'title-fey-friend-1',
				name: 'Дар чарівності',
				features: [
					FactoryLogic.feature.createLanguageChoice({
						id: 'title-fey-friend-1-1',
						name: 'Дар чарівності',
						selected: ['Кхелт (Khelt)']
					}),
					FactoryLogic.feature.create({
						id: 'title-fey-friend-1-2',
						name: 'Дар чарівності',
						description: 'Ви отримуєте навичку на свій вибір із групи міжособистісних навичок.'
					})
				]
			}),
			FactoryLogic.feature.createMultiple({
				id: 'title-fey-friend-2',
				name: 'Дар передбачення',
				features: [
					FactoryLogic.feature.createLanguageChoice({
						id: 'title-fey-friend-2-1',
						name: 'Дар передбачення',
						selected: ['Кхелт (Khelt)']
					}),
					FactoryLogic.feature.create({
						id: 'title-fey-friend-2-2',
						name: 'Дар передбачення',
						description: 'Під час опору потужностям ваш показник Інтуїції вважається на 1 вищим, ніж зазвичай.'
					})
				]
			}),
			FactoryLogic.feature.createMultiple({
				id: 'title-fey-friend-3',
				name: 'Дар знання',
				features: [
					FactoryLogic.feature.createLanguageChoice({
						id: 'title-fey-friend-3-1',
						name: 'Дар знання',
						selected: ['Кхелт (Khelt)']
					}),
					FactoryLogic.feature.create({
						id: 'title-fey-friend-3-2',
						name: 'Дар знання',
						description: 'Ви отримуєте перевагу на випробування, які робите, використовуючи будь-яку навичку з групи знань.'
					})
				]
			})
		],
		selectedFeatureID: ''
	};

	static giantSlayer: Title = {
		id: 'title-giant-slayer',
		name: 'Погибель велетнів',
		description: '“Повернися сюди, нікчемо, і дай мені тебе розчавити!”',
		echelon: 2,
		prerequisites: 'Ви перемагаєте ватажка або соло-істоту з ключовим словом Giant, наприклад вождя вогняних велетнів.',
		features: [
			FactoryLogic.feature.create({
				id: 'title-giant-slayer-1',
				name: 'Ухилення малолюда',
				description: 'Будь-яка істота розміру 2 або більшого отримує ваду на удари проти вас.'
			}),
			FactoryLogic.feature.createAbility({
				ability: FactoryLogic.createAbility({
					id: 'title-giant-slayer-2',
					name: 'Що більші, то гучніше падають',
					description: 'Падай!',
					type: FactoryLogic.type.createMain(),
					keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
					distance: [FactoryLogic.distance.createMelee()],
					target: 'Одна істота',
					cost: 7,
					sections: [
						FactoryLogic.createAbilitySectionRoll(
							FactoryLogic.createPowerRoll({
								characteristic: [Characteristic.Might, Characteristic.Agility],
								tier1: '7 шкоди; С < [слабкий], розпластаний і не може встати (рят. кидок завершує)',
								tier2: '11 шкоди; С < [середній], розпластаний і не може встати (рят. кидок завершує)',
								tier3: '16 шкоди; С < [сильний], розпластаний і не може встати (рят. кидок завершує)'
							})
						),
						FactoryLogic.createAbilitySectionText('Якщо ціль має розмір 2 або більше, ви отримуєте перевагу на цю здібність.')
					]
				})
			}),
			FactoryLogic.feature.create({
				id: 'title-giant-slayer-3',
				name: 'Вгору по бобовому стеблу',
				description: 'Ви отримуєте навичку Лазіння. Якщо ви вже маєте цю навичку, натомість отримуєте перевагу на випробування з її використанням. Поки ви деретеся по істоті, ця істота має подвійну ваду на удари проти вас, а ви маєте подвійну перевагу на випробування, щоб утриматися на ній.'
			})
		],
		selectedFeatureID: ''
	};

	static godsworn: Title = {
		id: 'title-godsworn',
		name: 'Богоприсяжний',
		description: '“Здавалося, йому потрібна допомога! А тепер до мене говорять мертві. Мабуть, той старий був не тим, ким здавався.”',
		echelon: 2,
		prerequisites: 'Ви робите послугу слузі бога або святого, або обіцяєте зробити її.',
		features: [
			FactoryLogic.feature.create({
				id: 'title-godsworn-1',
				name: 'Дар зцілення',
				description: 'Ви можете використати рису Провідника 1-го рівня «Благодать зцілення», ніби витратили 1 Благочестя. Скориставшись цією перевагою, ви не можете використати її знову, доки не здобудете 1 або більше Перемог.'
			}),
			FactoryLogic.feature.createAbility({
				ability: FactoryLogic.createAbility({
					id: 'title-godsworn-2',
					name: 'Остання молитва',
					type: FactoryLogic.type.createManeuver({ free: true }),
					distance: [FactoryLogic.distance.createSelf()],
					target: 'Себе',
					sections: [
						FactoryLogic.createAbilitySectionText('Ви виголошуєте молитву про допомогу, отримуючи пул у 2d10 одиниць Героїчного Ресурсу, який надає ваш клас. Цей пул зникає наприкінці вашого ходу, якщо ви ним не скористались. Після використання цієї переваги ви не можете використати її знову, доки не виконаєте іншу послугу для бога чи святого, або доки не підніметесь на рівень.')
					]
				})
			}),
			FactoryLogic.feature.createMultiple({
				id: 'title-godsworn-3',
				name: 'Торкнутий божественним',
				description: 'Оберіть бога або святого',
				features: [
					FactoryLogic.feature.createDomainChoice({
						id: 'title-godsworn-3a',
						count: 1
					}),
					FactoryLogic.feature.createDomainFeature({
						id: 'title-godsworn-3b',
						name: 'Риса домену 1-го рівня',
						level: 1
					})
				]
			})
		],
		selectedFeatureID: ''
	};

	static heistHero: Title = {
		id: 'title-heist-hero',
		name: 'Герой пограбування',
		description: '“Усі знають свої ролі? Гаразд, рушаймо.”',
		echelon: 2,
		prerequisites: 'Ви маєте титул «Тактика трупи» і, покладаючись на планування та командну роботу, здійснили крадіжку, яка пройшла (відносно) за планом.',
		features: [
			FactoryLogic.feature.create({
				id: 'title-heist-hero-1',
				name: 'Квочка',
				description: 'Ви можете витратити 10 безперервних хвилин, щоб псіонічно посилити до пʼяти охочих істот у межах 10 клітинок від вас, які розуміють відому вам мову. Протягом наступної години ви й кожна ціль можете телепатично спілкуватися одне з одним незалежно від відстані між вами.'
			}),
			FactoryLogic.feature.create({
				id: 'title-heist-hero-2',
				name: 'Тихі кроки',
				description: 'Ви отримуєте навичку Крадіжка. Якщо ви вже маєте цю навичку, натомість отримуєте перевагу на випробування з її використанням. Під час групових випробувань ви можете і використовувати навичку Крадіжка, і допомагати іншому герою, який також використовує навичку Крадіжка.'
			}),
			FactoryLogic.feature.createAbility({
				ability: FactoryLogic.createAbility({
					id: 'title-heist-hero-3',
					name: 'Своєчасне відволікання',
					description: `
Гаряча юшка, обережно!

Ой, а бананова шкірка тут звідки?`,
					type: FactoryLogic.type.createTrigger('Союзник робить випробування, щоб збрехати цілі, зрізати в неї гаманець, сховатися від неї або прокрастися повз неї, і його не влаштовує результат.'),
					keywords: [AbilityKeyword.Ranged],
					distance: [FactoryLogic.distance.createRanged(10)],
					target: 'Одна істота',
					sections: [
						FactoryLogic.createAbilitySectionText('Ви на мить привертаєте увагу цілі, дозволяючи вашому союзнику перебросити свій тест. Після використання цієї здібності ви не можете застосувати її повторно проти тієї ж цілі протягом 1 години.')
					]
				})
			})
		],
		selectedFeatureID: ''
	};

	static knight: Title = {
		id: 'title-knight',
		name: 'Лицар',
		description: '“Схиліться, герої. Підійміться, лицарі Тора, і нехай ваші мечі завжди будуть гострими на нашій службі.”',
		echelon: 2,
		prerequisites: 'Дворянин або монарх дарує вам лицарство чи подібний ранг.',
		features: [
			FactoryLogic.feature.createBonus({
				id: 'title-knight-1',
				name: 'Геральдична слава',
				field: FeatureField.Renown,
				value: 1
			}),
			FactoryLogic.feature.createBonus({
				id: 'title-knight-2',
				name: 'Лицарська егіда',
				field: FeatureField.Stamina,
				value: 6
			}),
			FactoryLogic.feature.createAbility({
				ability: FactoryLogic.createAbility({
					id: 'title-knight-3',
					name: 'Лицарський виклик',
					description: 'До бою!',
					type: FactoryLogic.type.createMain(),
					keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
					distance: [FactoryLogic.distance.createMelee()],
					target: 'Одна істота',
					cost: 5,
					sections: [
						FactoryLogic.createAbilitySectionRoll(
							FactoryLogic.createPowerRoll({
								characteristic: [Characteristic.Might, Characteristic.Agility],
								tier1: '7 шкоди; спровокований (рят. кидок завершує)',
								tier2: '11 шкоди; спровокований (рят. кидок завершує)',
								tier3: '16 шкоди; спровокований (рят. кидок завершує)'
							})
						),
						FactoryLogic.createAbilitySectionText('Ви можете завершити стан «Спровокований» на цілі як безкоштовний маневр.'),
						FactoryLogic.createAbilitySectionText('Якщо ви приймаєте цей титул, вас іноді можуть закликати виконувати обовʼязки на користь особи, яка посвятила вас у лицарі.')
					]
				})
			})
		],
		selectedFeatureID: ''
	};

	static masterLibrarian: Title = {
		id: 'title-master-librarian',
		name: 'Головний бібліотекар',
		description: '“Хочете дізнатися точні координати затонулого корабля «Коштовність хвиль»? Я нещодавно натрапив на це в неопублікованих мемуарах його другого помічника. Зараз знайду.”',
		echelon: 2,
		prerequisites: 'Ви маєте титул «Знавець давніх знань» і завершили проєкт «Дослідити знання», щоб вивчити втрачені або заборонені знання.',
		features: [
			FactoryLogic.feature.create({
				id: 'title-master-librarian-1',
				name: 'Арканна імпровізація',
				description: 'Коли ви використовуєте магічну сигнатурну здібність, що завдає шкоди, ви можете змінити її тип шкоди на кислоту, холод, скверну, вогонь, блискавку, отруту або звук.'
			}),
			FactoryLogic.feature.create({
				id: 'title-master-librarian-2',
				name: 'У мене є саме та книжка',
				description: 'Якщо ви починаєте проєкт «Дослідити знання» у твердині свого героя чи іншій постійній базі операцій, ви негайно отримуєте 60 очок проєкту для його завершення. Якщо проєкт коштує 60 очок або менше, ви завершуєте його за 10 безперервних хвилин без потреби використовувати активність перепочинку.'
			}),
			FactoryLogic.feature.create({
				id: 'title-master-librarian-3',
				name: 'Підхопив дещо',
				description: 'Ви знаєте одну навичку з групи знань.'
			}),
			FactoryLogic.feature.createLanguageChoice({
				id: 'title-master-librarian-4',
				name: 'Поліглот',
				count: 2
			})
		],
		selectedFeatureID: ''
	};

	static specialAgent: Title = {
		id: 'title-special-agent',
		name: 'Спецагент',
		description: '“А це цікаво… якщо перекрутити третій ґудзик на вашому плащі — ні, зараз не робіть цього!”',
		echelon: 2,
		prerequisites: 'Шпигмайстер дає вам важливу таємну місію.',
		features: [
			FactoryLogic.feature.create({
				id: 'title-special-agent-1',
				name: 'Бофін',
				description: `
Ви отримуєте малий магічний шпигунський пристрій, який називається бофіном. Раз за сутичку ви можете активувати одну властивість бофіна як маневр.

* Зробіть випробування з використанням навички Маскування. Ви отримуєте на це випробування перевагу.
* Один звичайний замок, якого ви торкаєтеся, відмикається.
* Оберіть клітинку в межах 10 клітинок, навіть якщо не маєте до неї лінії ефекту. Ви можете спостерігати область навколо цієї клітинки так, ніби перебуваєте в ній.
* Ви кидаєте бофін на відстань до 10 клітинок, де він вибухає кубом 5. Кожна істота в зоні отримує вогняну шкоду, рівну 2d10 + ваш рівень. Бофін знищується назавжди, але шпигмайстер може його замінити… хоча робити це надто часто їм не до вподоби.`
			}),
			FactoryLogic.feature.create({
				id: 'title-special-agent-2',
				name: 'Каустична алхімія',
				description: 'Ви отримуєте на вибір одну з рис Тіньового коледжу 1-го рівня: «Покриття клинка» або «Димова бомба». Коли ви використовуєте цю рису, ви не можете витрачати Прозорливість, якщо не маєте риси класу «Прозорливість».'
			}),
			FactoryLogic.feature.create({
				id: 'title-special-agent-3',
				name: 'Шпигунський перстень',
				description: 'Ви отримуєте магічну прикрасу, наприклад перстень. Використовуючи основну дію під час носіння цієї прикраси, ви можете набувати ілюзорної зовнішності істоти в межах 10 клітинок, до якої маєте лінію ефекту. Це маскування дозволяє вам автоматично успішно проходити випробування з навички Маскування, що ґрунтуються виключно на візуальному впізнанні.'
			})
		],
		selectedFeatureID: ''
	};

	static swornHunter: Title = {
		id: 'title-sworn-hunter',
		name: 'Присяжний мисливець',
		description: '“Я переслідуватиму тебе до краю світу — лише для того, щоб зіштовхнути з нього.”',
		echelon: 2,
		prerequisites: 'Ви маєте титул «Маршал» і знищуєте цілу злочинну організацію.',
		features: [
			FactoryLogic.feature.createAbility({
				ability: FactoryLogic.createAbility({
					id: 'title-sworn-hunter-1',
					name: 'Мисливська присяга',
					type: FactoryLogic.type.createMain(),
					distance: [FactoryLogic.distance.createRanged(10)],
					target: 'Одна істота',
					sections: [
						FactoryLogic.createAbilitySectionText('Ви даєте мисливську присягу проти цілі. Ця присяга триває доти, поки ціль не помре або поки ви не дасте мисливську присягу проти іншої істоти. Поки присяга діє, ви магічно знаєте напрямок до цілі, якщо вона в межах 50 миль від вас, а ваші здібності, що завдають шкоди, отримують +5 до шкоди проти цієї цілі.')
					]
				})
			}),
			FactoryLogic.feature.create({
				id: 'title-sworn-hunter-2',
				name: 'Особливий набір навичок',
				description: 'Ви знаєте одну навичку з групи інтриг.'
			}),
			FactoryLogic.feature.create({
				id: 'title-sworn-hunter-3',
				name: 'Ми в цьому разом',
				description: 'Коли ви тримаєте істоту схопленою і отримуєте шкоду від здібності, яку ця істота не використовувала, схоплена істота отримує ту саму шкоду.'
			})
		],
		selectedFeatureID: ''
	};

	static undeadSlain: Title = {
		id: 'title-undead-slain',
		name: 'Полеглий від нежиті',
		description: '“Ні, мене не вкусили. І так, зі мною все гаразд!”',
		echelon: 2,
		prerequisites: 'Вас убиває істота нежиті.',
		features: [
			FactoryLogic.feature.create({
				id: 'title-undead-slain-1',
				name: 'Гуль або вампір',
				description: `Ви повертаєтесь до життя через 1 хвилину після загибелі з Витривалістю, що дорівнює вашому значенню захеканості. Ви отримуєте імунітет до скверни, що дорівнює вашому рівню, а також наведену нижче перевагу, якщо вас убив гуль або вампір. Якщо ви загинете знову, то підніметеся як нежить під контролем Режисера.
					
Коли ви робите вільний удар ближнього бою проти сусідньої істоти, ви можете вкусити її. Якщо ви робите це й отримуєте результат 3 рівня, ви здобуваєте тимчасову Витривалість, що дорівнює завданій шкоді. Якщо її не втрачено раніше, ця тимчасова Витривалість триває до кінця вашого наступного перепочинку.`
			}),
			FactoryLogic.feature.create({
				id: 'title-undead-slain-2',
				name: 'Безтілесна нежить',
				description: `Ви повертаєтесь до життя через 1 хвилину після загибелі з Витривалістю, що дорівнює вашому значенню захеканості. Ви отримуєте імунітет до скверни, що дорівнює вашому рівню, а також наведену нижче перевагу, якщо вас убила безтілесна нежить. Якщо ви загинете знову, то підніметеся як нежить під контролем Режисера.
					
Ви можете проходити крізь інших істот і обʼєкти. Уперше за бойовий раунд, коли ви проходите крізь істоту, вона отримує шкоду скверною, рівну половині вашого рівня. Ви не отримуєте шкоди від примусового переміщення в обʼєкти.`
			}),
			FactoryLogic.feature.create({
				id: 'title-undead-slain-3',
				name: 'Інша тілесна нежить',
				description: `Ви повертаєтесь до життя через 1 хвилину після загибелі з Витривалістю, що дорівнює вашому значенню захеканості. Ви отримуєте імунітет до скверни, що дорівнює вашому рівню, а також наведену нижче перевагу, якщо вас убила будь-яка інша тілесна нежить. Якщо ви загинете знову, то підніметеся як нежить під контролем Режисера.
					
Коли вас зводять до 0 Витривалості шкодою, що не є вогняною чи священною, і ваше тіло не знищене, ви можете відновити половину своєї Витривалості та впасти розпластаними. Після використання цієї переваги ви не можете застосувати її знову, доки не здобудете 10 або більше Перемог.`
			})
		],
		selectedFeatureID: ''
	};

	static unstoppable: Title = {
		id: 'title-unstoppable',
		name: 'Незупинний',
		description: '“Я бачив, як король гоблінів проштрикнув його списом. А потім бачив, як той підвівся, досі зі списом у собі, і вдарив короля гоблінів головою… а тоді витягнув спис і кинув його на труп короля гоблінів.”',
		echelon: 2,
		prerequisites: 'Ви перемагаєте ворога, маючи 0 Витривалості або менше.',
		features: [
			FactoryLogic.feature.create({
				id: 'title-unstoppable-1',
				name: 'Із самого серця пекла',
				description: 'Поки ви захекані, ваші ближні удари отримують +3 до шкоди.'
			}),
			FactoryLogic.feature.create({
				id: 'title-unstoppable-2',
				name: 'Лютий удар',
				description: 'Оберіть одну сигнатурну здібність класу Фурія. Ви отримуєте цю здібність незалежно від того, чи дозволяють ваш клас і підклас її взяти. Якщо ця здібність дозволяє вам отримувати або витрачати Лють, ви не можете робити це, якщо не маєте риси класу «Лють».'
			}),
			FactoryLogic.feature.create({
				id: 'title-unstoppable-3',
				name: 'Лютий ривок',
				description: 'Коли ви використовуєте основну дію «Ривок», ваш удар, зроблений як частина цієї дії, отримує бонус до шкоди, рівний кількості клітинок, які ви пройшли в межах цього ривка.'
			})
		],
		selectedFeatureID: ''
	};

	static armedAndDangerous: Title = {
		id: 'title-armed-and-dangerous',
		name: 'Озброєний і небезпечний',
		description: '“Я не вибагливий. Підійде будь-який інструмент. Хоча меч для цієї роботи, здається, найдоречніший.”',
		echelon: 3,
		prerequisites: 'Ви не можете використовувати комплекти й перемагаєте пʼятьох не-мініонних ворогів, використовуючи здібності зі зброєю, які не мають ключових слів Magic або Psionic.',
		features: [
			FactoryLogic.feature.create({
				id: 'title-armed-and-dangerous-1',
				name: 'Ефект',
				description: 'Ви можете використовувати комплекти й отримувати їхні переваги.'
			})
		],
		selectedFeatureID: ''
	};

	static backFromTheGrave: Title = {
		id: 'title-back-from-the-grave',
		name: 'Повернений із могили',
		description: '“Привіт! Памʼятаєш мене?”',
		echelon: 3,
		prerequisites: 'Ви гинете від рук свого найбільшого ворога, цей ворог усе ще живий, і ви не ревенант.',
		features: [
			FactoryLogic.feature.create({
				id: 'title-back-from-the-grave-1',
				name: 'Ефект',
				description: 'Ви повертаєтеся до життя. Ви отримуєте сигнатурну рису ревенанта «Міцний, але Зівʼялий».'
			})
		],
		selectedFeatureID: ''
	};

	static demonSlayer: Title = {
		id: 'title-demon-slayer',
		name: 'Погибель демонів',
		description: '“F’lath v’korr en zaratha g’rrack.”',
		echelon: 3,
		prerequisites: 'Ви перемагаєте ватажка або соло-істоту з ключовим словом Demon, наприклад Soulraker Hivequeen, або демон вселяється у вас.',
		features: [
			FactoryLogic.feature.create({
				id: 'title-demon-slayer-1',
				name: 'Демонічні знання',
				description: 'Ви знаєте мову Прото-Ктолл (Proto-Ctholl). Додатково, коли ви завдаєте шкоди магічною здібністю, ви можете змінити тип її шкоди на священний.'
			}),
			FactoryLogic.feature.create({
				id: 'title-demon-slayer-2',
				name: 'Лета',
				description: 'Поки ви захекані, ваші удари отримують +5 до шкоди.'
			}),
			FactoryLogic.feature.create({
				id: 'title-demon-slayer-3',
				name: 'Увесь із зубів',
				description: 'На вашому тілі можуть проростати зуби в найнесподіваніших місцях. Щоразу, коли істота входить із вами у фізичний контакт або починає свій хід, торкаючись вас, ви можете завдати їй 5 шкоди (дія не потрібна).'
			}),
			FactoryLogic.feature.create({
				id: 'title-demon-slayer-4',
				name: 'Зір душ',
				description: 'Будь-яка істота в межах 2 клітинок не може бути прихованою від вас.'
			}),
			FactoryLogic.feature.create({
				id: 'title-demon-slayer-5',
				name: 'Особливе',
				description: 'Коли ви робите випробування Присутності й викидаєте природну 5 або менше, на 1 хвилину на вас накладається прокляття спілкуватися лише мовою Прото-Ктолл (Proto-Ctholl), незалежно від того, знаєте ви її чи ні.'
			})
		],
		selectedFeatureID: ''
	};

	static diabolist: Title = {
		id: 'title-diabolist',
		name: 'Діаболіст',
		description: '“Якщо не можеш їх перемогти — приєднайся до них.”',
		echelon: 3,
		prerequisites: 'Ви перемагаєте ватажка або соло-істоту з ключовим словом Devil, наприклад архідиявола, або укладаєте угоду з дияволом.',
		features: [
			FactoryLogic.feature.create({
				id: 'title-diabolist-1',
				name: 'Диявольські знання',
				description: 'Ви знаєте мову Анжалі (Anjali), і ваше розуміння цієї мови допомагає вам створювати непереборні надприродні ефекти. Потужності ваших магічних або псіонічних здібностей, що націлюються на Розум, Інтуїцію або Присутність, зростають на 1.'
			}),
			FactoryLogic.feature.create({
				id: 'title-diabolist-2',
				name: 'Пекельна спадщина',
				description: 'Ви отримуєте 3 очки походження, які можете витратити на придбані риси походження диявола.'
			}),
			FactoryLogic.feature.create({
				id: 'title-diabolist-3',
				name: 'Хитрий диявол',
				description: 'Ви отримуєте сигнатурну рису диявола «Срібний язик».'
			}),
			FactoryLogic.feature.create({
				id: 'title-diabolist-4',
				name: 'Незаплямований скверною',
				description: 'Щоразу, коли ви використовуєте здібність, що завдає шкоди, ця здібність може завдавати священної шкоди замість свого звичайного типу шкоди.'
			})
		],
		selectedFeatureID: ''
	};

	static dragonBlooded: Title = {
		id: 'title-dragon-blooded',
		name: 'Драконокровний',
		description: '“Я встромив клинок у серце змія Аксартана, і його срібна кров обмила мене, залишивши… таким, як ви бачите.”',
		echelon: 3,
		prerequisites: 'Ви перемагаєте ватажка або соло-істоту з ключовим словом Dragon, наприклад сутінкового дракона.',
		features: [
			FactoryLogic.feature.create({
				id: 'title-dragon-blooded-1',
				name: 'Драконяча луска',
				description: 'Драконячі луски виростають на вашому тілі всюди, де його торкнулася серцева кров дракона. Ви отримуєте сигнатурну рису драконячого лицаря «Драконячий панцир».'
			}),
			FactoryLogic.feature.create({
				id: 'title-dragon-blooded-2',
				name: 'Торкнутий драконом',
				description: 'Ви отримуєте 3 очки походження, які можете витратити на придбані риси походження драконячого лицаря.'
			})
		],
		selectedFeatureID: ''
	};

	static fleetAdmiral: Title = {
		id: 'title-fleet-admiral',
		name: 'Адмірал флоту',
		description: '“Слава Королеві піратів!”',
		echelon: 3,
		prerequisites: 'Ви маєте титул «Корсар» і очолюєте флот щонайменше з трьох кораблів.',
		features: [
			FactoryLogic.feature.create({
				id: 'title-fleet-admiral-1',
				name: 'Старший помічник',
				description: 'У вас є піратський ретейнер, наприклад воїн-людина, якого обирає Режисер. Рівень цього ретейнера зростає до вашого рівня.'
			}),
			FactoryLogic.feature.create({
				id: 'title-fleet-admiral-2',
				name: 'Шибайголова',
				description: 'Ви можете автоматично лазити з повною швидкістю під час руху.'
			}),
			FactoryLogic.feature.create({
				id: 'title-fleet-admiral-3',
				name: 'Скарбник',
				description: 'Ви здобуваєте 1 Багатство.'
			}),
			FactoryLogic.feature.create({
				id: 'title-fleet-admiral-4',
				name: 'Повелитель погоди',
				description: `
Раз на день ви можете витратити 10 безперервних хвилин, щоб магічно змінити звичайну погоду в радіусі 5 миль навколо себе. Погода рухається разом із вами та триває 6 годин або доки ви не скасуєте її як безкоштовний маневр. Оберіть один із наступних типів погоди:

* Штиль: Судна й технології, що працюють на вітрі, припиняють працювати.
* Туман: Видимість зменшується до 6 клітинок.
* Сильний вітер: Швидкість суден, що працюють на вітрі, подвоюється.
* Легкий вітер: Погода не має жодних ефектів.
* Шторм: Екіпаж незахищеного судна, що працює на вітрі, мусить зробити середнє групове випробування Розуму. У разі провалу судно потребує ремонту й рухається з половинною швидкістю, доки ремонт не буде завершено.`
			})
		],
		selectedFeatureID: ''
	};

	static maestro: Title = {
		id: 'title-maestro',
		name: 'Маестро',
		description: '“Коли я побачив закривавлений рукопис під пахвою Феллвандера, я зрозумів: його пошуки Опери закінчилися — а разом із ними й шанс на спокуту.”',
		echelon: 2,
		prerequisites: 'Ви відвідуєте володіння богів, дияволів чи інших безсмертних істот і чуєте ноту Музики Творіння.',
		features: [
			FactoryLogic.feature.create({
				id: 'title-maestro-1',
				name: 'Ангельський хор',
				description: 'Ви можете застосовувати уроки музичної імпровізації в бою. Оберіть одну тригерну дію класового акту з класу Трубадур. Ви отримуєте цю здібність незалежно від того, чи дозволяють ваш клас і підклас її взяти. Якщо ця здібність дозволяє вам отримувати або витрачати Драму, ви можете натомість отримувати або витрачати героїчний ресурс свого класу.'
			}),
			FactoryLogic.feature.createAbility({
				ability: FactoryLogic.createAbility({
					id: 'title-maestro-2',
					name: 'Диявольський акорд',
					description: 'Привіііт, Ордене!',
					type: FactoryLogic.type.createMain(),
					keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
					distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 5 })],
					target: 'Кожна істота в зоні',
					cost: 9,
					sections: [
						FactoryLogic.createAbilitySectionRoll(
							FactoryLogic.createPowerRoll({
								characteristic: [Characteristic.Presence],
								tier1: 'Ви отримуєте 4 звукової шкоди, якщо не маєте навички Виступ.',
								tier2: '6 звукової шкоди; С < [середній], ослаблення (рят. кидок завершує)',
								tier3: '10 звукової шкоди; С < [середній], ослаблення і кровотеча (рят. кидок завершує)'
							})
						),
						FactoryLogic.createAbilitySectionText('Душа будь-якої істоти, вбитої цією здібністю, виривається до Пекла.')
					]
				})
			}),
			FactoryLogic.feature.create({
				id: 'title-maestro-3',
				name: 'Музика сфер',
				description: 'Використовуючи основну дію, ви співаєте або берете ноту, таку ж тендітну й гостру, як скло, — і таку ж легко розбиту. До початку вашого наступного ходу щоразу, коли істота в межах 10 клітинок робить удар, вона отримує 8 звукової шкоди. Щоразу, коли впродовж цього ж часу ви робите удар, ви також отримуєте 8 звукової шкоди.'
			})
		],
		selectedFeatureID: ''
	};

	static masterCrafter: Title = {
		id: 'title-master-crafter',
		name: 'Майстер-ремісник',
		description: '“Меч Ванарта перековано, і тепер він могутніший, ніж у день свого створення.”',
		echelon: 3,
		prerequisites: 'Ви завершуєте проєкт під час простою, щоб наділити обладунок, імплемент або зброю покращенням 9-го рівня.',
		features: [
			FactoryLogic.feature.create({
				id: 'title-master-crafter-1',
				name: 'Шедевр',
				description: 'Обладунок, імплемент або зброю можна наділити вчетверте будь-яким покращенням, якому відповідає цей предмет.'
			}),
			FactoryLogic.feature.create({
				id: 'title-master-crafter-2',
				name: 'Плоди досліджень',
				description: 'Ви отримуєте предметну передумову для покращення обладунку, імплементу або зброї на свій вибір. Додатково ви вивчаєте вихідну мову проєкту для цього покращення.'
			}),
			FactoryLogic.feature.create({
				id: 'title-master-crafter-3',
				name: 'Умілі руки',
				description: 'Ви отримуєте одну навичку з групи ремісничих навичок, яка могла б використовуватися під час створення предмета-передумови. Якщо ви вже маєте цю навичку, натомість отримуєте перевагу на випробування з її використанням. Додатково ви отримуєте другу навичку на свій вибір із групи ремісничих навичок.'
			}),
			FactoryLogic.feature.create({
				id: 'title-master-crafter-4',
				name: 'Сильні руки полегшують працю',
				description: 'Щоразу, коли ви робите кидок проєкту, ви можете використовувати Силу як характеристику цього кидка.'
			})
		],
		selectedFeatureID: ''
	};

	static noble: Title = {
		id: 'title-noble',
		name: 'Дворянин',
		description: '“Технічно, тепер мене звуть лорд Морнінггілл. Я зробив невеличку послугу герцогу Кенвею під час битви в Чорному Лісі.”',
		echelon: 3,
		prerequisites: 'Монарх або впливовий дворянин надає вам дворянський титул.',
		features: [
			FactoryLogic.feature.create({
				id: 'title-noble-1',
				name: 'Я знаю, як говорити з цими людьми',
				description: 'Ви отримуєте перевагу на випробування Присутності для взаємодії з королівськими особами, дворянами та їхніми феодальними підданими, якщо вони знають про ваш дворянський титул.'
			}),
			FactoryLogic.feature.create({
				id: 'title-noble-2',
				name: 'Дворянська пишнота',
				description: 'Ви здобуваєте 1 Відомість і 1 Багатство.'
			}),
			FactoryLogic.feature.create({
				id: 'title-noble-3',
				name: 'Почет',
				description: 'Кількість послідовників, яких ви можете наймати, збільшується на двох.'
			}),
			FactoryLogic.feature.create({
				id: 'title-noble-4',
				name: 'Особливе',
				description: 'Якщо ви приймаєте цей титул, вас іноді можуть закликати виконувати обовʼязки на користь особи, яка надала вам дворянський титул.'
			})
		],
		selectedFeatureID: ''
	};

	static planarVoyager: Title = {
		id: 'title-planar-voyager',
		name: 'Планарний мандрівник',
		description: '“Я бачив небесних китів, що пливли над морями Примордіуса. Я бачив зоряні вантажники, що танцювали навколо місяців Аксіома. Тож, мабуть, ви маєте рацію: я тут не місцевий.”',
		echelon: 3,
		prerequisites: 'Ви подорожуєте дивними транспортними засобами різними світами.',
		features: [
			FactoryLogic.feature.create({
				id: 'title-planar-voyager-1',
				name: 'Очі призмакору',
				description: 'Вплив призмакору надав вашим очам дзеркального блиску. Ви маєте психічний імунітет 10, істоти не можуть використовувати магічні чи псіонічні здібності або інші ефекти, щоб визначити ваше місцезнаходження чи прочитати ваші думки, якщо ви самі цього не дозволите, і ви отримуєте +3 до стабільності проти магічних або псіонічних здібностей.'
			}),
			FactoryLogic.feature.create({
				id: 'title-planar-voyager-2',
				name: 'Зоряні знання',
				description: 'Ви отримуєте навичку Механіка. Якщо ви вже маєте цю навичку, натомість отримуєте перевагу на випробування з її використанням. Додатково ви отримуєте предметну передумову й джерело проєкту для псіонічної дрібнички.'
			}),
			FactoryLogic.feature.create({
				id: 'title-planar-voyager-3',
				name: 'Вишкіл рейдера часу',
				description: 'Ви отримуєте 2 очки походження, які можете витратити на придбані риси походження рейдера часу.'
			})
		],
		selectedFeatureID: ''
	};

	static scarred: Title = {
		id: 'title-scarred',
		name: 'Шрамований',
		description: '“Минулого разу, коли ми билися, я залишив тобі маленький сувенір на памʼять… а тепер, схоже, тобі потрібне ще одне нагадування про мою силу.”',
		echelon: 3,
		prerequisites: 'Ворожий ватажок або соло-істота зводить вас до 0 Витривалості.',
		features: [
			FactoryLogic.feature.create({
				id: 'title-scarred-1',
				name: 'Ефект',
				description: 'Ви отримуєте помітний шрам у вибраному вами місці. Додатково ваш максимум Витривалості збільшується на 20, а істота, що лишила вам шрам, отримує ваду на здібності проти вас.'
			}),
			FactoryLogic.feature.create({
				id: 'title-scarred-2',
				name: 'Особливе',
				description: 'Ви можете отримати цей титул кілька разів. Починаючи з другого й кожного наступного разу, коли ви його отримуєте, ваш максимум Витривалості не збільшується.'
			})
		],
		selectedFeatureID: ''
	};

	static siegeBreaker: Title = {
		id: 'title-siege-breaker',
		name: 'Руйнівник облоги',
		description: '“Найкращий спосіб упоратися з облогою замку? Бути зовні.”',
		echelon: 3,
		prerequisites: 'Ви маєте титул «Польовий командир» і очолюєте оборону поселення або укріплення.',
		features: [
			FactoryLogic.feature.create({
				id: 'title-siege-breaker-1',
				name: 'Смерть згори',
				description: 'Коли ви отримуєте перевагу на здібність завдяки височині, ця здібність отримує +8 до шкоди.'
			}),
			FactoryLogic.feature.create({
				id: 'title-siege-breaker-2',
				name: 'Тримай стрій',
				description: 'Поки ви перебуваєте в межах 5 клітинок від союзника, ви й кожен союзник у межах 5 клітинок від вас отримуєте +3 до стабільності.'
			}),
			FactoryLogic.feature.create({
				id: 'title-siege-breaker-3',
				name: 'Останній оборонець',
				description: 'Щоразу, коли союзника в межах 5 клітинок зводять до 0 Витривалості, ви отримуєте тимчасову Витривалість, рівну рівню союзника (або 1, якщо в нього немає рівня). Якщо ви вже маєте тимчасову Витривалість, надану цим титулом, ви збільшуєте її на величину, яку мали б отримати.'
			})
		],
		selectedFeatureID: ''
	};

	static teacher: Title = {
		id: 'title-teacher',
		name: 'Наставник',
		description: '“Колись я зрозумію, як чищення цих морквин на вечерю повʼязане з моїм навчанням елементаліста.”',
		echelon: 3,
		prerequisites: 'Ви навчаєте або командуєте щонайменше трьома персонажами нижчого рівня вашого класу.',
		features: [
			FactoryLogic.feature.create({
				id: 'title-teacher-1',
				name: 'Ефект',
				description: 'Ви можете подорожувати з учнем, який належить до того самого класу, що й ви. Учень має характеристики представника вашого класу 1-го рівня й ті самі навички, що й ви, але не бере участі в бою. Він може виконувати будь-які позабойові завдання, які здатен виконати представник вашого класу 1-го рівня. Щоразу, коли учень робить випробування, щоб допомогти вам у завданні, він не може отримати результат нижче 2 рівня.'
			})
		],
		selectedFeatureID: ''
	};

	static championCompetitor: Title = {
		id: 'title-champion-competitor',
		name: 'Абсолютний чемпіон',
		description: '“Мардук застосовує гамбіт Белдуа! Аванна відповідає Залізною обороною й переходить у наступ! Останню вежу Мардука збито! І саме так у нас зʼявляється новий… чемпіон… світу!”',
		echelon: 4,
		prerequisites: 'Ви перемагаєте найкращого у світі в грі чи виді спорту.',
		features: [
			FactoryLogic.feature.create({
				id: 'title-champion-competitor-1',
				name: 'Найкращий з найкращих',
				description: 'Характеристика, яку ви використовували під час змагання, зростає на 1 (до максимуму 6). Оберіть навичку, яку ви використовували під час змагання. Ви отримуєте +4 на випробування з використанням цієї навички замість +2.'
			}),
			FactoryLogic.feature.create({
				id: 'title-champion-competitor-2',
				name: 'Слава й багатство',
				description: 'Характеристика, яку ви використовували під час змагання, зростає на 1 (до максимуму 6). Ви здобуваєте 2 Відомості й 1 Багатство.'
			}),
			FactoryLogic.feature.create({
				id: 'title-champion-competitor-3',
				name: 'Я просто заберу приз',
				description: 'Характеристика, яку ви використовували під час змагання, зростає на 1 (до максимуму 6). Ви отримуєте дрібничку або скарб із рівнем на вибір Режисера.'
			})
		],
		selectedFeatureID: ''
	};

	static demigod: Title = {
		id: 'title-demigod',
		name: 'Напівбог',
		description: '“Ритуал завершено. Я відчуваю, як твоя сила тече крізь мене. Я стаю богом! Аха-ха-ха-ха!”',
		echelon: 4,
		prerequisites: 'Ви маєте титул «Богоприсяжний», і сотні побожних смертних звершують божественний ритуал у ваше імʼя.',
		features: [
			FactoryLogic.feature.createMultiple({
				id: 'title-demigod-1',
				name: 'Напівбог',
				features: [
					FactoryLogic.feature.create({
						id: 'title-demigod-1a',
						name: 'Безсмертна досконалість',
						description: 'Обрана вами характеристика зростає на 1 (до максимуму 6).'
					}),
					FactoryLogic.feature.create({
						id: 'title-demigod-1b',
						name: 'Довголіття',
						description: 'Тривалість вашого природного життя подвоюється, і ви можете виглядати на будь-який вік.'
					}),
					FactoryLogic.feature.create({
						id: 'title-demigod-1c',
						name: 'Віряни',
						description: 'Ви магічно чуєте молитви, звернені до вас.'
					}),
					FactoryLogic.feature.createChoice({
						id: 'title-demigod-1d',
						name: 'Варіант',
						options: [
							{
								feature: FactoryLogic.feature.create({
									id: 'title-demigod-1da',
									name: 'Аколіти',
									description: 'Кількість послідовників, яких ви можете наймати, збільшується на двох.'
								}),
								value: 1
							},
							{
								feature: FactoryLogic.feature.create({
									id: 'title-demigod-1db',
									name: 'Божественна зброя',
									description: 'Щоразу, коли ви використовуєте здібність зі зброєю, що завдає шкоди, ця здібність може завдавати шкоди скверною або священної шкоди замість свого звичайного типу шкоди.'
								}),
								value: 1
							},
							{
								feature: FactoryLogic.feature.create({
									id: 'title-demigod-1dc',
									name: 'Місіонери',
									description: 'Ви здобуваєте 2 Відомості.'
								}),
								value: 1
							}
						]
					})
				]
			})
		],
		selectedFeatureID: ''
	};

	static enlightened: Title = {
		id: 'title-enlightened',
		name: 'Просвітлений',
		description: '“Хіба ти не бачиш? Цей світ, який здається тобі таким справжнім, — не більше ніж гра, а всі люди в ній лише фігури!”',
		echelon: 4,
		prerequisites: 'Ви дізнаєтеся космічну істину, що змінює ваше розуміння реальності.',
		features: [
			FactoryLogic.feature.create({
				id: 'title-enlightened-1',
				name: 'Космічне одкровення',
				description: 'Обрані вами Розум або Інтуїція зростають на 1 (до максимуму 6). Коли ви робите випробування з навичкою з групи знань і отримуєте результат 1 або 2 рівня, ви можете натомість отримати результат 3 рівня. Скориставшись цією перевагою, ви не можете використати її знову, доки не здобудете 1 або більше Перемог.'
			}),
			FactoryLogic.feature.create({
				id: 'title-enlightened-2',
				name: 'Довголіття',
				description: 'Обрані вами Розум або Інтуїція зростають на 1 (до максимуму 6). Щоразу, коли ви витрачаєте Відновлення, ви можете завершити на собі один стан.'
			}),
			FactoryLogic.feature.create({
				id: 'title-enlightened-3',
				name: 'Віряни',
				description: 'Обрані вами Розум або Інтуїція зростають на 1 (до максимуму 6). Ви можете зазирнути за завісу й змінити реальність. На початку бою оберіть себе або будь-яку істоту в межах 5 клітинок. Обрана ціль мусить переміститися на відстань до своєї швидкості в обраний вами простір, але не може увійти в небезпечну місцевість чи місцевість, яка могла б накласти на неї стан. Здається, що ціль не рухалася і не телепортувалася в цей простір — вона просто там є. Ніхто, крім вас, не памʼятає її попереднього місця.'
			})
		],
		selectedFeatureID: ''
	};

	static forsaken: Title = {
		id: 'title-forsaken',
		name: 'Покинутий',
		description: '“Похід завершено, ворога переможено, а Клинок Тисячі Років пішов із наших рук. Що нам робити з рештою нашого життя?”',
		echelon: 4,
		prerequisites: 'Ваш загін втрачає, знищує або інакше розлучається з артефактом.',
		features: [
			FactoryLogic.feature.create({
				id: 'title-forsaken-1',
				name: 'Недовге воззʼєднання',
				description: 'Обрана вами характеристика зростає на 1 (до максимуму 6). Поки ви захекані, ви можете використати маневр, щоб покликати артефакт собі в руку. Він зникає наприкінці вашого наступного ходу. Скориставшись цією перевагою, ви не можете використати її знову, доки не здобудете 1 або більше Перемог.'
			}),
			FactoryLogic.feature.create({
				id: 'title-forsaken-2',
				name: 'Досконалий захист',
				description: 'Обрана вами характеристика зростає на 1 (до максимуму 6). Режисер обирає тип шкоди, який завдає артефакт або який тематично з ним повʼязаний, наприклад священний для Клинка Тисячі Років, психічний для Енцептера чи скверна для Mortal Coil. Ви отримуєте повний імунітет до обраного типу шкоди.'
			}),
			FactoryLogic.feature.create({
				id: 'title-forsaken-3',
				name: 'Мізерна компенсація',
				description: 'Обрана вами характеристика зростає на 1 (до максимуму 6). Замість того щоб зникнути чи інакше полишити вас, артефакт перетворюється на дрібничку або скарб із рівнем на вибір Режисера, який має приблизно ту саму форму, що й утрачений предмет, наприклад на будь-який магічний меч для Клинка Тисячі Років, будь-який імплемент для Енцептера або на Thief of Joy чи будь-який інший torque для Mortal Coil.'
			})
		],
		selectedFeatureID: ''
	};

	static monarch: Title = {
		id: 'title-monarch',
		name: 'Монарх',
		description: '“Тиран мертвий! Хай живе новий король!”',
		echelon: 4,
		prerequisites: 'Ви або хтось із вашого загону стаєте монархом держави.',
		features: [
			FactoryLogic.feature.create({
				id: 'title-monarch-1',
				name: 'Коштовності корони',
				description: 'Жителі вашої держави мусять підкорятися вашим законним наказам або зазнати наслідків. Обрані вами Сила або Присутність зростають на 1 (до максимуму 6). Ви отримуєте один зі скарбів вашої держави — дрібничку на вибір Режисера.'
			}),
			FactoryLogic.feature.create({
				id: 'title-monarch-2',
				name: 'Королівська слава',
				description: 'Жителі вашої держави мусять підкорятися вашим законним наказам або зазнати наслідків. Обрані вами Сила або Присутність зростають на 1 (до максимуму 6). Ви здобуваєте 2 Відомості.'
			}),
			FactoryLogic.feature.create({
				id: 'title-monarch-3',
				name: 'Королівський почет',
				description: 'Жителі вашої держави мусять підкорятися вашим законним наказам або зазнати наслідків. Обрані вами Сила або Присутність зростають на 1 (до максимуму 6). Кількість послідовників, яких ви можете наймати, збільшується на 2.'
			}),
			FactoryLogic.feature.create({
				id: 'title-monarch-4',
				name: 'Королівське багатство',
				description: 'Жителі вашої держави мусять підкорятися вашим законним наказам або зазнати наслідків. Обрані вами Сила або Присутність зростають на 1 (до максимуму 6). Ви здобуваєте 2 Багатства.'
			})
		],
		selectedFeatureID: ''
	};

	static peaceBringer: Title = {
		id: 'title-peace-bringer',
		name: 'Миротворець',
		description: '“Он іде Діана, миротвориця. Вона здобула чимало перемог своїм мечем, але її найбільшим звершенням стало те, що вона переконала дві держави припинити війну.”',
		echelon: 4,
		prerequisites: 'Ви успішно провели переговори, від яких залежала доля держави або цілого світу.',
		features: [
			FactoryLogic.feature.create({
				id: 'title-peace-bringer-1',
				name: 'Холодний розум перемагає',
				description: 'Оберіть: ваш Розум або Присутність зростає на 1 (до максимуму 6). Коли ви робите випробування, щоб припинити бій і почати переговори, ви завжди отримуєте результат 3 рівня.'
			}),
			FactoryLogic.feature.create({
				id: 'title-peace-bringer-2',
				name: 'Кинь свій меч',
				description: 'Оберіть: ваш Розум або Присутність зростає на 1 (до максимуму 6). Коли ви успішно проходите випробування з використанням навички Залякування, ви можете змусити уражених істот кинути будь-які предмети, які вони тримають.'
			}),
			FactoryLogic.feature.create({
				id: 'title-peace-bringer-3',
				name: 'Вислухай мене',
				description: 'Оберіть: ваш Розум або Присутність зростає на 1 (до максимуму 6). Поки ви присутні під час переговорів, початкове терпіння NPC зростає на 3 (до максимуму 5).'
			}),
			FactoryLogic.feature.create({
				id: 'title-peace-bringer-4',
				name: 'Багато шляхів до миру',
				description: 'Оберіть: ваш Розум або Присутність зростає на 1 (до максимуму 6). Коли ви робите випробування з навичкою з міжособистісної групи навичок, ви можете використовувати для нього будь-яку обрану вами характеристику.'
			})
		],
		selectedFeatureID: ''
	};

	static theoreticalWarrior: Title = {
		id: 'title-theoretical-warrior',
		name: 'Теоретичний воїн',
		description: '“Я читав про цю тактику в книжках — виглядає доволі просто.”',
		echelon: 4,
		prerequisites: 'Ви маєте титул «Головний бібліотекар» і завершуєте проєкт «Навчатися у майстра» з ціллю проєкту 1 000.',
		features: [
			FactoryLogic.feature.create({
				id: 'title-theoretical-warrior-1',
				name: 'Ефект',
				description: 'Обрані вами Розум або Інтуїція зростають на 1 (до максимуму 6). Додатково оберіть героїчну здібність, що належить будь-якому класу. Ви отримуєте цю героїчну здібність, і платити за неї можна героїчним ресурсом вашого класу. Ви не можете використовувати героїчну здібність, яка вимагає риси класу, якої у вас немає.'
			})
		],
		selectedFeatureID: ''
	};

	static tireless: Title = {
		id: 'title-tireless',
		name: 'Невтомний',
		description: '“Щоб дістатися до Велетневої Стопи до світанку, нам доведеться пробігти весь шлях. Рушаймо.”',
		echelon: 4,
		prerequisites: 'Ви маєте титул «Незупинний» і робите або допомагаєте у випробуванні як частині монтажного випробування, яке завершується повним успіхом.',
		features: [
			FactoryLogic.feature.create({
				id: 'title-tireless-1',
				name: 'Швидке відновлення',
				description: 'Обрані вами Сила або Ловкість зростають на 1 (до максимуму 6). Щоразу, коли ви відпочиваєте 8 годин або більше, ви можете отримати переваги перепочинку. Скориставшись цією перевагою, ви не можете використати її знову, доки не візьмете звичайний перепочинок.'
			}),
			FactoryLogic.feature.create({
				id: 'title-tireless-2',
				name: 'Запаси сили',
				description: 'Обрані вами Сила або Ловкість зростають на 1 (до максимуму 6). Ваше значення відновлення дорівнює половині вашої Витривалості.'
			}),
			FactoryLogic.feature.create({
				id: 'title-tireless-3',
				name: 'Невмирущий',
				description: 'Обрана вами Сила або Ловкість збільшується на 1, максимум до 6. Ви не можете бути вражені станом «Кровотеча».'
			})
		],
		selectedFeatureID: ''
	};

	static unchained: Title = {
		id: 'title-unchained',
		name: 'Розкутий',
		description: '“Мені це ніколи не зійде з рук? Люба моя, вже зійшло.”',
		echelon: 4,
		prerequisites: 'Ви маєте титул «Герой пограбування» і викрадаєте цінний предмет або тікаєте з полону, уникаючи охорони 8-го рівня чи вище.',
		features: [
			FactoryLogic.feature.create({
				id: 'title-unchained-1',
				name: 'Па-па',
				description: 'Обрані вами Сила або Ловкість зростають на 1 (до максимуму 6). Ви можете використати маневр, щоб телепортувати себе й кожного охочого союзника в межах 5 клітинок від вас на нові позиції в межах 10 клітинок від початкової точки. Скориставшись цією перевагою, ви не можете використати її знову, доки не здобудете 1 або більше Перемог.'
			}),
			FactoryLogic.feature.create({
				id: 'title-unchained-2',
				name: 'Сміється з замків',
				description: 'Обрані вами Сила або Ловкість зростають на 1 (до максимуму 6). Щоразу, коли ви робите випробування, щоб відчинити замок або розірвати пута, вам не потрібні інструменти, і ви автоматично отримуєте результат 3 рівня.'
			}),
			FactoryLogic.feature.create({
				id: 'title-unchained-3',
				name: 'Слизький',
				description: 'Обрана вами Сила або Ловкість збільшується на 1, максимум до 6. Вас не можна схопити проти вашої волі.'
			})
		],
		selectedFeatureID: ''
	};

	// Summoner titles

	static safeguarded: Title = {
		id: 'title-safeguarded',
		name: 'Під захистом',
		description: 'Вони ризикують життям заради мене, бо я ризикую життям заради них. Цей бій належить усім нам!',
		echelon: 1,
		prerequisites: 'Ви здобуваєте дворянський титул або прихильність лицарської гільдії.',
		features: [
			FactoryLogic.feature.create({
				id: 'title-safeguarded-1',
				name: 'Ефект',
				description: `
Ви починаєте бойові сутички із загоном із трьох міньйонів із конкретної ватаги чудовиськ або народу, від яких отримали цей титул. Загін ходить як частина вашого ходу. У свій хід загін може виконати дію руху та або основну дію, або маневр.

**Особливе**: Якщо двоє або більше героїв у загоні мають цей титул від одного джерела, загін натомість починає бойові сутички із загоном із шести міньйонів. На початку кожного бойового раунду герої вирішують, хто керує цим загоном як частиною свого ходу.`
			})
		],
		selectedFeatureID: ''
	};

	static sigilwright: Title = {
		id: 'title-sigilwright',
		name: 'Сигілописець',
		description: 'Зʼясуймо, хто по той бік кола.',
		echelon: 2,
		prerequisites: 'Ви завершуєте ритуал, щоб викликати не-мініонну сутність, використовуючи намальоване вами коло призову.',
		features: [
			FactoryLogic.feature.create({
				id: 'title-sigilwright-1',
				name: 'Швидкі врата',
				description: 'Використовуючи маневр, ви можете накреслити арканне коло в суміжній клітинці на землі. До кінця сутички ви можете використовувати магічні здібності й вважати, ніби для дальності призивача перебуваєте в тому просторі. Щоразу, коли ви креслите арканне коло, попереднє тьмяніє та стає неактивним.'
			}),
			FactoryLogic.feature.create({
				id: 'title-sigilwright-2',
				name: 'Ритуальне коло',
				description: 'Як активність перепочинку, ви можете накреслити мале коло призову, щоб тимчасово покликати істоту, з якою вже контактували, незалежно від маніфолду. Якщо істота готова й здатна відповісти на ваш поклик, вона зʼявляється перед вами до кінця перепочинку. Ви можете попросити її про інформацію або послугу в обмін на завершення перепочинку з двома меншими Відновленнями або на вимогу на її вибір. Якщо істота не зʼявляється, ви можете обрати іншу активність перепочинку.'
			}),
			FactoryLogic.feature.create({
				id: 'title-sigilwright-3',
				name: 'Око сигілу',
				description: 'Ви отримуєте перевагу на випробування, щоб розпізнавати кола призову та зʼясовувати, з ким або з чим вони повʼязані. Ви також отримуєте перевагу на удари проти істот, не рідних для маніфолду, у якому зараз перебуваєте.'
			})
		],
		selectedFeatureID: ''
	};

	static summonerSuccessor: Title = {
		id: 'title-summoner-successor',
		name: 'Наступник призивача',
		description: 'Коли їхній ватажок упав, вони чомусь почали слухати мене.',
		echelon: 2,
		prerequisites: 'Ви не можете використовувати здібність «Поклич» і перемагаєте ватажка або соло-істоту зі здібністю Summon або «Поклич», наприклад High Elf Ordinator.',
		features: [
			FactoryLogic.feature.create({
				id: 'title-summoner-successor-1',
				name: 'Ефект',
				description: `
Оберіть фірмового міньйона з арсеналу призивача, який має спільне ключове слово з однією з істот, яких цей призивач міг би викликати. На початку кожного свого ходу в бою ви можете викликати трьох таких міньйонів в один загін, максимум до чотирьох істот. Дистанція, на якій ви можете ними командувати, дорівнює дальності вашого дальнього вільного удару. Ви також отримуєте тригерну здібність «Бий за мене», яка тепер має ключове слово Psionic і втрачає ключове слово Magic.

Крім того, поза боєм ви можете викликати до двох своїх фірмових міньйонів для виконання простих завдань.`
			})
		],
		selectedFeatureID: ''
	};

	static ringleader: Title = {
		id: 'title-ringleader',
		name: 'Заводила',
		description: 'Не хвилюйся. У мене є своя людина.',
		echelon: 3,
		prerequisites: 'Ви завершуєте три проєкти під час простою в межах одного перепочинку за допомогою послідовників або міньйонів.',
		features: [
			FactoryLogic.feature.createMultiple({
				id: 'title-ringleader-1',
				features: [
					FactoryLogic.feature.create({
						id: 'title-ringleader-1a',
						name: 'Ефект',
						description: 'Вам більше не потрібна лінія ефекту, щоб віддавати накази будь-яким міньйонам, яких ви можете призвати.'
					}),
					FactoryLogic.feature.createChoice({
						id: 'title-ringleader-1b',
						options: [
							{
								feature: FactoryLogic.feature.create({
									id: 'title-ringleader-1b-1',
									name: 'За шефа',
									description: 'Ваші послідовники отримують +3 до кидків проєктів, які вони роблять.'
								}),
								value: 1
							},
							{
								feature: FactoryLogic.feature.create({
									id: 'title-ringleader-1b-2',
									name: 'Звʼязківець',
									description: 'Ваш максимум послідовників збільшується на 2.'
								}),
								value: 1
							},
							{
								feature: FactoryLogic.feature.create({
									id: 'title-ringleader-1b-3',
									name: 'Ляльковод',
									description: 'Перебуваючи в цивілізованій місцевості (наприклад селі, містечку, районі чи місті), ви завжди маєте доступ до послідовника, який походить із цього місця. Якщо місцевість інакше ворожа до вас, цей послідовник є шпигуном у сховку, а всі очки проєкту, які він здобуває, зменшуються вдвічі.'
								}),
								value: 1
							}
						]
					})
				]
			})
		],
		selectedFeatureID: ''
	};

	static delegator: Title = {
		id: 'title-delegator',
		name: 'Делегатор',
		description: 'Вони всі твої, друже.',
		echelon: 4,
		prerequisites: 'Ви призивач і укладаєте угоду з чемпіоном свого портфеля.',
		features: [
			FactoryLogic.feature.create({
				id: 'title-delegator-1',
				name: 'Ефект',
				description: `
На початку бойової сутички ви можете обрати перенести себе в маніфолд-джерело вашого кола, поки ваш чемпіон бʼється й викликає чудовиськ замість вас. Чемпіон використовує ваші Витривалість, Відновлення, здібності та риси (окрім ваших Ударів призивача та Комплекту призивача). Ви можете відпустити чемпіона й наприкінці сутички повернути себе в місце, яке залишили.

Якщо ваш чемпіон мав би померти, займаючи ваше місце, ви втрачаєте доступ до риси «Повернення до джерела» і можете призивати лише сигнатурних міньйонів, доки не відродите свого чемпіона як активність перепочинку.`
			})
		],
		selectedFeatureID: ''
	};

	static highSummoner: Title = {
		id: 'title-high-summoner',
		name: 'Верховний призивач кола',
		description: 'Як мене вчили, так і я передаю тобі.',
		echelon: 4,
		prerequisites: 'Ви призивач і навчаєте когось, як викликати двох або більше міньйонів зі свого портфеля.',
		features: [
			FactoryLogic.feature.createMultiple({
				id: 'title-high-summoner-1',
				features: [
					FactoryLogic.feature.create({
						id: 'title-high-summoner-1a',
						name: 'Ефект',
						description: 'Ви вважаєтеся майстром, у якого можна навчатися за допомогою проєкту простою «Навчатися у майстра». Кожен, хто робить кидок проєкту, використовуючи вас як джерело, отримує бонус до кидка, рівний вашому Розуму.'
					}),
					FactoryLogic.feature.createChoice({
						id: 'title-high-summoner-1b',
						options: [
							{
								feature: FactoryLogic.feature.create({
									id: 'title-high-summoner-1b-1',
									name: 'Майстерність есенції',
									description: 'Ваші міньйони коштують на 1 Есенцію менше для призову (мінімум 1 Есенція).'
								}),
								value: 1
							},
							{
								feature: FactoryLogic.feature.create({
									id: 'title-high-summoner-1b-2',
									name: 'Розширений домен',
									description: 'Ваша дальність призивача збільшується на 5. Ви можете використовувати чуття своїх міньйонів як власні, доки вони перебувають у тому самому маніфолді, що й ви.'
								}),
								value: 1
							},
							{
								feature: FactoryLogic.feature.create({
									id: 'title-high-summoner-1b-3',
									name: 'Сигнатурний призивач',
									description: 'Оберіть міньйона на 3 Есенції, якого можете покликати. На початку кожного свого ходу в бою ви безкоштовно призиваєте вказану в його статблоці кількість цих міньйонів замість своїх сигнатурних міньйонів.'
								}),
								value: 1
							}
						]
					})
				]
			})
		],
		selectedFeatureID: ''
	};
}
