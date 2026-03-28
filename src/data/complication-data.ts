import { AbilityDistanceType } from '@/enums/ability-distance-type';
import { AbilityKeyword } from '@/enums/ability-keyword';
import { Characteristic } from '@/enums/characteristic';
import { Complication } from '@/models/complication';
import { DamageModifierType } from '@/enums/damage-modifier-type';
import { DamageType } from '@/enums/damage-type';
import { FactoryLogic } from '@/logic/factory-logic';
import { FeatureField } from '@/enums/feature-field';
import { ItemType } from '@/enums/item-type';
import { LanguageType } from '@/enums/language-type';
import { SkillList } from '@/enums/skill-list';

export class ComplicationData {
	static advancedStudies: Complication = {
		id: 'comp-advanced-studies',
		name: 'Поглиблені дослідження',
		description: 'Вам якось дісталася зошитка блискучого, але ексцентричного однокласника. Знання з цих нотаток можуть допомогти вам відкрити потужні нові здібності — якби ви тільки змогли зрозуміти, що там написано.',
		features: [
			FactoryLogic.feature.createAbility({
				ability: FactoryLogic.createAbility({
					id: 'comp-advanced-studies-1',
					name: 'Перевага й Недолік поглибленого вивчення',
					description: 'Як активність під час відпочинку, ви можете вивчати цей зошит.',
					sections: [
						FactoryLogic.createAbilitySectionRoll(
							FactoryLogic.createPowerRoll({
								characteristic: [Characteristic.Reason, Characteristic.Intuition, Characteristic.Presence, Characteristic.Agility, Characteristic.Might],
								tier1: 'Ви викликаєте ворожого демона вашого рівня або нижчого, який атакує вас наприкінці відпочинку. Демон діє першим у бою, незалежно від рис або здібностей інших істот.',
								tier2: 'Ви нічого не дізнаєтеся, і ваш час витрачено даремно.',
								tier3: 'Ви вивчаєте одну бонусну героїчну здібність вашого класу, на яку ви маєте право. Ви володієте цією здібністю лише до завершення наступного відпочинку.'
							})
						)
					]
				})
			})
		]
	};

	static bereaved: Complication = {
		id: 'comp-bereaved',
		name: 'Сум за втратою',
		description: 'Ви пережили важку втрату близької людини або громади. Ця втрата формує ваші рішення й іноді змушує вас ризикувати задля памʼяті про неї.',
		features: [
			FactoryLogic.feature.create({
				id: 'comp-bereaved-d',
				name: 'Недолік: Сум за втратою',
				description: 'Іноді ваші емоції заважають зосередитися. Отримуйте bane на перевірки, пов’язані з емоційним контролем під час ритуалів памʼяті або коли стикаєтесь з нагадуваннями про втрату.'
			})
		]
	};

	static exile: Complication = {
		id: 'comp-exile',
		name: 'Вигнаний',
		description: 'Ви були вигнані зі свого краю або країни — офіційно або внаслідок війни. Повернення нелегке, і вас можуть переслідувати спогади та вороги.',
		features: [
			FactoryLogic.feature.create({
				id: 'comp-exile-d',
				name: 'Недолік: Вигнанець',
				description: 'Ви маєте шкоду на взаємодію з тими, хто бачить у вас представника країни, що вигнала вас. Також ви ризикуєте зустріти агентів, що прагнуть покарати вас.'
			})
		]
	};

	static grifter: Complication = {
		id: 'comp-grifter',
		name: 'Шахрай',
		description: 'Колись ви займалися аферами та хитрощами. Хоч ви намагаєтесь почати нове життя, старі звички та вороги не завжди дають вам спокій.',
		features: [
			FactoryLogic.feature.create({
				id: 'comp-grifter-b',
				name: 'Перевага: Шахрай',
				description: 'Ви вмієте обманювати — отримуєте перевагу на деякі перевірки Intrigue або рутинні афери, якщо це дозволено Режисером.'
			}),
			FactoryLogic.feature.create({
				id: 'comp-grifter-d',
				name: 'Недолік: Шахрай',
				description: 'Неприємні знайомства час від часу знаходять вас. Коли вас впізнають підозріли, група може отримати бан.'
			})
		]
	};

	static preacher: Complication = {
		id: 'comp-preacher',
		name: 'Проповідник',
		description: 'Ви проповідуєте віру або ідею, що іноді ставить вас у конфлікт із владою або іншими групами. Віра дає вам силу, але і ворогів.',
		features: [
			FactoryLogic.feature.create({
				id: 'comp-preacher-b',
				name: 'Перевага: Проповідник',
				description: 'Ви маєте вплив на тих, хто поділяє вашу віру; отримуєте перевагу на перевірки переконання таких NPC.'
			}),
			FactoryLogic.feature.create({
				id: 'comp-preacher-d',
				name: 'Недолік: Проповідник',
				description: 'Ваші погляди провокують опозицію. Деякі NPC можуть стати ворожими або викликати переслідування.'
			})
		]
	};

	static amnesia: Complication = {
		id: 'comp-amnesia',
		name: 'Амнезія',
		description: 'Ви не памʼятаєте свого життя до … інциденту. Сподіваємось, що ви невдовзі відновите памʼять і дізнаєтеся, що сталося. Тим часом вам потрібні друзі, щоб ви не були наодинці, коли минуле наздожене вас.',
		features: [
			FactoryLogic.feature.createItemChoice({
				id: 'comp-amnesia-b',
				name: 'Перевага: Амнезія',
				description: 'У вас є надприродна річ — дрібниця 1-го ешелону. Вона може мати звʼязок з вашим колишнім життям.',
				types: [ItemType.Trinket1st]
			}),
			FactoryLogic.feature.create({
				id: 'comp-amnesia-d',
				name: 'Недолік: Амнезія',
				description: 'Вам накладається шкода на перевірки, що виконуються для пригадування знань (lore).'
			})
		]
	};

	static animalForm: Complication = {
		id: 'comp-animal-form',
		name: 'Тваринна форма',
		description: 'Через магічний інцидент ваша істота злилася з невеликою, безпечною твариною. Ви перетворюєтеся на цю тварину, коли це зручно — а іноді й коли незручно.',
		features: [
			FactoryLogic.feature.create({
				id: 'comp-animal-form-b',
				name: 'Перевага: Тваринна форма',
				description: 'Як маневр ви набуваєте форми конкретної тварини 1T. Ви зберігаєте всі інші характеристики, крім розміру, але не можете говорити або використовувати дії; єдині маневри, які ви можете виконувати — Escape Grab, Hide і Stand Up. Залежно від тварини, у яку ви перетворюєтесь, ви можете вміти рити нори або літати, або автоматично лазити чи плавати на повній швидкості під час руху. Якщо ваша тваринна форма не дає такого додаткового пересування, ви отримуєте +2 до швидкості. Якщо ви не використаєте цю перевагу знову, ви повертаєтесь до своєї справжньої форми на початку вашого наступного ходу.'
			}),
			FactoryLogic.feature.create({
				id: 'comp-animal-form-d',
				name: 'Недолік: Тваринна форма',
				description: 'На початку вашого ходу, коли ви захекані, Director може витратити 1 Malice, щоб змусити вас прийняти тваринну форму. Після того як Director зробив це, він не може зробити це знову, поки ви не завершите відпочинок.'
			})
		]
	};

	static antihero: Complication = {
		id: 'comp-antihero',
		name: 'Антигерой',
		description: 'Колись ви були лиходієм. Тепер ви (переважно) виправилися, але в безвихідні миті ви іноді покликаєтеся на лють і ненависть, що живили ваше минуле. У такі моменти навіть ваші друзі не впевнені, на чиєму ви боці. Проте хвилюватися не потрібно: як тільки ви залишаєте зло позаду, повернутися назад неможливо — у вас забагато ворогів.',
		features: [
			FactoryLogic.feature.create({
				id: 'comp-antihero-b',
				name: 'Перевага: Антигерой',
				description: 'У вас є 3 жетони антигероя. Коли ви використовуєте здібність або ефект, що коштує ваш Heroic Resource, ви можете витратити 1 жетон антигероя замість 1 Heroic Resource. Якщо у вас менше ніж 3 жетони антигероя і ви мали б заробити геройський жетон для вашої партії за ваші вчинки, натомість ви відновлюєте 1 жетон антигероя.'
			}),
			FactoryLogic.feature.create({
				id: 'comp-antihero-d',
				name: 'Недолік: Антигерой',
				description: 'Поки у вас менше ніж 3 жетони антигероя, ви випромінюєте лиходійський аспект. Ви та кожен союзник у радіусі 5 клітин отримує шкоду на всі перевірки, що виконуються для взаємодії з іншими істотами.'
			})
		]
	};

	static artifactBonded: Complication = {
		id: 'comp-artifactBonded',
		name: 'Повʼязаний з артефактом',
		description: 'Потужний артефакт звʼязався з вами. Можливо, вам судилося ним володіти або знищити його. Наразі ви занадто слабкі, щоб ним скористатися, хоча колись це може статися. Поки що артефакт не дає вам жодних переваг, крім проблем.',
		features: [
			FactoryLogic.feature.createItemChoice({
				id: 'comp-artifactBonded-b1',
				types: [ItemType.Artifact]
			}),
			FactoryLogic.feature.create({
				id: 'comp-artifactBonded-b2',
				name: 'Перевага: Повʼязаний артефакт',
				description: 'Вперше в сутичці, коли вас примусово знижують до 0 Витривалості, артефакт зʼявляється при вас. Він зникає в кінці вашого наступного ходу, коли ви скористаєтеся однією з його властивостей, або коли у вас зʼявиться більше 0 Витривалості — залежно від того, що станеться раніше.'
			}),
			FactoryLogic.feature.create({
				id: 'comp-artifactBonded-d',
				name: 'Недолік: Повʼязаний артефакт',
				description: 'Кожного разу, коли артефакт зʼявляється, ви втрачаєте 1 Recovery. Якщо у вас немає відновлень, ви отримуєте 1d10 шкоди, яку неможливо зменшити.'
			})
		]
	};

	static betrothed: Complication = {
		id: 'comp-betrothed',
		name: 'Обручений',
		description: 'Батьки уклали угоду, за якою ви маєте одружитися з кимось — або чимось — кого ви не обирали. Але ніхто не буде диктувати вам умови! Вони пошкодують, коли дізнаються, що ви втекли, щоб стати величним мандрівником.',
		features: [
			FactoryLogic.feature.createItemChoice({
				id: 'comp-betrothed-b',
				name: 'Перевага: Обручений',
				description: 'Ви втекли з посагом — дрібницею 1-го ешелону на ваш вибір.',
				types: [ItemType.Trinket1st]
			}),
			FactoryLogic.feature.create({
				id: 'comp-betrothed-d',
				name: 'Недолік: Обручений',
				description: 'Усі, хто дізнаються, що ви втекли від зобовʼязання, ставляться до вас гірше і поширюють гидкі чутки. Ваша Відомість (Renown) ніколи не може перевищувати ваш рівень – 1.'
			})
		]
	};

	static chaosTouched: Complication = {
		id: 'comp-chaosTouched',
		name: 'Доторкнутий хаосом',
		description: 'Ви стикнулися з частинкою чистої енергії хаосу або зазнали надприродного ефекту чи предмета, що вплів хаос у вашу сутність. Тепер ви можете виростати й ховати кінцівки так, що це жахає неготових спостерігачів.',
		features: [
			FactoryLogic.feature.create({
				id: 'comp-chaosTouched-b',
				name: 'Перевага: Доторкнутий хаосом',
				description: 'Ви отримуєте перевагу до маневрів Escape Grab, Grab і Knockback. Додатково ви можете тримати ще один предмет, навіть коли руки заповнені.'
			}),
			FactoryLogic.feature.create({
				id: 'comp-chaosTouched-d',
				name: 'Недолік: Доторкнутий хаосом',
				description: 'Під час вмирання ви безладно виростаєте й ховаєте кінцівки, що накладає шкоду на ваші кидки сили.'
			})
		]
	};

	static chosenOne: Complication = {
		id: 'comp-chosenOne',
		name: 'Обраний',
		description: 'Можливо, зорі визначили вас при народженні, або ваше імʼя згадується в стародавньому пророцтві. У будь-якому разі злий культ вирішив, що ви важливі для їхніх планів — хоча вам не подобається доля, яку вони для вас готують.',
		features: [
			FactoryLogic.feature.create({
				id: 'comp-chosenOne-b',
				name: 'Перевага: Обраний',
				description: 'У вас є 3 очки долі. Коли ви витрачаєте свій Heroic Resource за класом, ви можете витратити 1 або більше очок долі замість нього. Кожного разу, коли ви здобуваєте Victory, ви відновлюєте 1 очко долі.'
			}),
			FactoryLogic.feature.create({
				id: 'comp-chosenOne-d',
				name: 'Недолік: Обраний',
				description: 'Коли ви витрачаєте 1 або більше очок долі, ви отримуєте 1d10 психічної шкоди, яку неможливо зменшити, і культ, що вас шукає, дізнається ваше місцезнаходження.'
			})
		]
	};

	static consumingInterest: Complication = {
		id: 'comp-consumingInterest',
		name: 'Одержливість',
		description: 'З дитинства ви були одержимі певною темою. Під час подорожей ви витрачаєте вільний час на збирання всієї доступної інформації з цієї теми. Можливо, ви ще не світовий експерт, але люди мають довіряти вашій думці з цього питання.',
		features: [
			FactoryLogic.feature.createSkillChoice({
				id: 'comp-consumingInterest-skill',
				listOptions: [SkillList.Lore]
			}),
			FactoryLogic.feature.create({
				id: 'comp-consumingInterest-b',
				name: 'Перевага: Одержливість',
				description: `
Ви можете використати наступний проект до трьох разів для обраного навику. Кожного разу потрібно використовувати інше джерело проекту, а ціль проекту зростає.

**Вивчення знань**
**Вимога щодо предмету**: Немає
**Джерело проекту**: Значне джерело інформації з теми, наприклад велика бібліотека або світовий мудрець
**Характеристика для кидка проекту**: Розум
**Мета проекту**: 120, 150, 180

Кожного разу, коли ви завершуєте цей проект, ваші знання у вибраній галузі зростають, і бонус до перевірок, що дає ваш навик, збільшується на 1.`
			}),
			FactoryLogic.feature.create({
				id: 'comp-consumingInterest-d',
				name: 'Недолік: Одержливість',
				description: 'Ви не уявляєте, що можете помилитися у темі вашої одержливості. Коли ви робите перевірку для пригадування знань (lore) з використанням обраної навички, Режисер проводить перевірку в таємниці. Замість того, щоб повідомити вам, чи ви були праві, він надає вам правильну інформацію, якщо ви успішні, або хибну інформацію, якщо ви зазнали поразки.'
			})
		]
	};

	static corruptedMentor: Complication = {
		id: 'comp-corruptedMentor',
		name: 'Корумпований наставник',
		description: 'Ваш наставник навчив вас усьому, і ви довіряли їм повністю — поки вони не зрадили вас або організацію, до якої ви обоє належали. Їхнє поточне місцезнаходження та діяльність невідомі, хоча час від часу чутні тривожні чутки. Ще гірше: як їхній колишній учень, тепер ви також під підозрою.',
		features: [
			FactoryLogic.feature.create({
				id: 'comp-corruptedMentor-b-text',
				name: 'Перевага: Корумпований наставник',
				description: 'Ви знаєте маневр "Корумпований Дух", який навчив вас ваш наставник. (З огляду на все, це, мабуть, мало б викликати у вас підозру.)'
			}),
			FactoryLogic.feature.createAbility({
				ability: FactoryLogic.createAbility({
					id: 'comp-corruptedMentor-b-ability',
					name: 'Корумпований Дух',
					description: 'Ви відкриваєте зловісні таємниці болю',
					type: FactoryLogic.type.createManeuver(),
					keywords: [AbilityKeyword.Magic],
					distance: [FactoryLogic.distance.createSelf()],
					target: 'Себе',
					sections: [
						FactoryLogic.createAbilitySectionText('До кінця вашого ходу, коли ви використовуєте героїчну здібність, що завдає шкоди, проти однієї цілі, ви можете послабити життєву силу цієї цілі. Здібність завдає додаткової шкоди від скверни, рівної вашому найвищому значенню характеристики.')
					]
				})
			}),
			FactoryLogic.feature.create({
				id: 'comp-corruptedMentor-d',
				name: 'Недолік: Корумпований наставник',
				description: 'У вас є святкова слабкість 1. Кожного разу, коли ви використовуєте "Корумпований Дух", ваша святкова слабкість зростає на 1, до максимуму, рівного вашому значенню відновлення. Коли ви отримуєте святкову шкоду, ця слабкість скидається до 1.'
			})
		]
	};

	static coward: Complication = {
		id: 'comp-coward',
		name: 'Боягуз',
		description: 'Дехто вважає вас боягузом, бо ви верещите і тікаєте при зустрічі з небезпекою. Можливо, у вас немає природної сміливості, і ви часто уявляєте безліч жахливих способів померти, але ви звикли до страху. Коли ви біжите в страху, ви біжите назустріч ворогу.',
		features: [
			FactoryLogic.feature.create({
				id: 'comp-coward-b',
				name: 'Перевага: Боягуз',
				description: 'Поки ви налякані, ви можете рухатися у напрямку джерела вашого страху.'
			}),
			FactoryLogic.feature.create({
				id: 'comp-coward-d',
				name: 'Недолік: Боягуз',
				description: 'Коли ви робите рятівний кидок, щоб позбутися стану переляку, кидайте 2d10 і беріть нижчий результат.'
			})
		]
	};

	static crashLanded: Complication = {
		id: 'comp-crashLanded',
		name: 'Вимушена посадка',
		description: 'Колись ви літали між зорями на власному кораблі. Проте неприємне зіткнення з піратом (або мисливцем за піратами) залишило вас на цьому віддаленому світі. Ви готові влаштувати там життя — принаймні поки не зможете вирватися звідси.',
		features: [
			FactoryLogic.feature.createSkillChoice({
				id: 'comp-crashLanded-skill',
				selected: ['Timescape']
			}),
			FactoryLogic.feature.create({
				id: 'comp-crashLanded-b',
				name: 'Перевага: Вимушена посадка',
				description: 'У вас є енергетичний блок, який можна активувати або деактивувати як маневр. Під час активації виберіть тип енергії: холод, вогонь, блискавка або звуковий. Поки блок активний, ваші здібності, що завдають шкоди, наносять цей тип шкоди.'
			}),
			FactoryLogic.feature.create({
				id: 'comp-crashLanded-d',
				name: 'Недолік: Вимушена посадка',
				description: 'Ви отримуєте шкоду на перевірки, що стосуються знань про світ, де ви зазнали аварії.'
			})
		]
	};

	static cultVictim: Complication = {
		id: 'comp-cult-victim',
		name: 'Жертва культу',
		description: 'Культисти захопили вас під час нападу на ваш дім і почали нечестивий ритуал, щоб перетворити ваше тіло на неживий дух. Хоча ритуал зазнав поразки, ваше тіло було просякнуте корумпованою магією, зробивши вас частково нематеріальним.',
		features: [
			FactoryLogic.feature.create({
				id: 'comp-cult-victim-b',
				name: 'Перевага: Жертва культу',
				description: 'Раз за хід ви можете переміститися крізь суцільну матерію товщиною до 1 клітини. Якщо ви завершуєте хід всередині суцільної матерії, вас виштовхують у простір, звідки ви увійшли, і ви отримуєте 5 шкоди, яку неможливо зменшити.'
			}),
			FactoryLogic.feature.createDamageModifier({
				id: 'comp-cult-victim-d',
				modifiers: [
					FactoryLogic.damageModifier.create({ damageType: DamageType.Corruption, modifierType: DamageModifierType.Weakness, value: 5 })
				]
			})
		]
	};

	static curseOfCaution: Complication = {
		id: 'comp-carefulCurse',
		name: 'Прокляття обережності',
		description: 'Коли ви були молоді, ви вчинили необачний вчинок, який поставив під загрозу відьму або коштував їй чогось дорогоцінного. Відьма прокляла вас, змушуючи завжди діяти повільно та обережно — навіть на вашу шкоду. Прокляття іноді рятувало вас від неприємностей, але нездатність уникнути проблем може стати вашою загибеллю, якщо ви не позбудетесь його.',
		features: [
			FactoryLogic.feature.create({
				id: 'comp-carefulCurse-b',
				name: 'Перевага: Прокляття обережності',
				description: 'Поки ви не зробили свого ходу в бою, будь-який удар по вам має bane.'
			}),
			FactoryLogic.feature.createBonus({
				id: 'comp-carefulCurse-d',
				field: FeatureField.Speed,
				value: -1
			})
		]
	};

	static curseOfImmortality: Complication = {
		id: 'comp-curseOfImmortality',
		name: 'Прокляття безсмертя',
		description: 'Памʼятаєте ви це чи ні, ви ніколи не старіли. Ви просто мандрували крізь епохи. Проте ваша памʼять про минулі події — навіть ті, у яких ви брали участь — трохи затуманена. Видається, ваша памʼять не така довговічна, як ви.',
		features: [
			FactoryLogic.feature.create({
				id: 'comp-curseOfImmortality-b',
				name: 'Перевага: Прокляття безсмертя',
				description: 'Ви не старієте. Крім того, коли ви мали б померти, ви натомість входите у стан застиглої анімації, невідмінний від смерті. Якщо ваше тіло не зруйноване під час цього стану, ви повертаєтеся до життя через 12 годин і відновлюєте Витривалість, рівну вашому значенню відновлення.'
			}),
			FactoryLogic.feature.create({
				id: 'comp-curseOfImmortality-d',
				name: 'Недолік: Прокляття безсмертя',
				description: 'Ви отримуєте bane на будь-яку перевірку для пригадування знань.'
			})
		]
	};

	static curseOfMisfortune: Complication = {
		id: 'comp-curseOfMisfortune',
		name: 'Прокляття нещастя',
		description: 'Ви не мали розсердити того мага! Можливо, вони заслужили ваш гнів, або ви були хуліганом. Так чи інакше, вони наклали на вас прокляття перед тим, як покинути місто. Тепер у стресових моментах, що вимагають великої майстерності, ви маєте тенденцію здаватися, падаючи та крутячись так драматично, що тягнете за собою всіх інших.',
		features: [
			FactoryLogic.feature.create({
				id: 'comp-curseOfMisfortune-b',
				name: 'Перевага і Недолік: Прокляття нещастя',
				description: 'Коли ви робите перевірку в бою і отримуєте наслідок, ви ігноруєте цей наслідок. Натомість ви і кожен союзник поруч падаєте на землю.'
			})
		]
	};

	static curseOfPoverty: Complication = {
		id: 'comp-curseOfPoverty',
		name: 'Прокляття бідності',
		description: 'Передбачувач колись пророкував вам довге життя, але попереджав, що ви ніколи не станете багатими. Ви вирішили довести зворотне. Ви станете багатими або помрете, намагаючись!',
		features: [
			FactoryLogic.feature.create({
				id: 'comp-curseOfPoverty-b',
				name: 'Перевага і Недолік: Прокляття бідності',
				description: 'Коли ви робите відпочинок і ваше Багатство більше 1, відбувається неймовірна подія, яка призводить до зникнення більшої частини ваших грошей — включно з тим, що ви приховали, позичили або віддали. Ваше Багатство знижується до 1. За кожну втрачений одиницю Багатства кількість ваших Відновлень збільшується на 1. Ваші Відновлення скидаються до звичайного значення при першому відпочинку з меншою кількістю Відновлень, ніж максимум.'
			})
		]
	};

	static curseOfPunishment: Complication = {
		id: 'comp-punishment-curse',
		name: 'Прокляття покарання',
		description: 'Через неуцтво, страх, злість або егоїзм ви відмовилися допомогти нужденному. Щоб навчити вас, божество запропонувало благословення — додаткову силу для лікування у важкі часи, але з суворими наслідками, якщо ваша потреба стане надмірною. Ви прийняли угоду і тепер користуєтесь благословенням, але також страждаєте через прокляття.',
		features: [
			FactoryLogic.feature.createBonus({
				id: 'comp-punishment-curse-b',
				name: 'Перевага: Прокляття покарання',
				field: FeatureField.Recoveries,
				value: 1
			}),
			FactoryLogic.feature.create({
				id: 'comp-punishment-curse-d',
				name: 'Недолік: Прокляття покарання',
				description: 'Коли у вас закінчуються Відновлення, ви вмираєте, незалежно від вашої поточної Витривалості.'
			})
		]
	};

	static curseOfStone: Complication = {
		id: 'comp-stoneCursed',
		name: 'Прокляття каменю',
		description: 'У дитинстві ви зустріли істоту, що перетворює людей на камінь, наприклад медузу. Ви втекли напівокаменілі, уникнувши долі інших, що нині стоять статуями.',
		features: [
			FactoryLogic.feature.create({
				id: 'comp-stoneCursed-b',
				name: 'Перевага: Прокляття каменю',
				description: 'Ви можете використати безкоштовний маневр, щоб надати вашому тілу, спорядженню та предметам вигляду каменю, виглядаючи як звичайна статуя, поки залишаєтесь нерухомими.'
			}),
			FactoryLogic.feature.createBonus({
				id: 'comp-stoneCursed-mod1',
				field: FeatureField.Stability,
				value: 1
			}),
			FactoryLogic.feature.create({
				id: 'comp-stoneCursed-d',
				name: 'Недолік: Прокляття каменю',
				description: 'Поки ви захекані, ви приголомшені.'
			}),
			FactoryLogic.feature.createDamageModifier({
				id: 'comp-stoneCursed-mod2',
				modifiers: [
					FactoryLogic.damageModifier.create({ damageType: DamageType.Sonic, modifierType: DamageModifierType.Weakness, value: 5 })
				]
			})
		]
	};

	static cursedWeapon: Complication = {
		id: 'comp-cursedWeapon',
		name: 'Проклята зброя',
		description: 'Коли ви були молоді, ви знайшли або отримали магічну зброю. Відтоді ви носите її завжди при собі, дозволяючи їй надихати вас на життя героя — навіть якщо зброя проклята.',
		features: [
			FactoryLogic.feature.createItemChoice({
				id: 'comp-cursedWeapon-b',
				types: [ItemType.LeveledWeapon]
			}),
			FactoryLogic.feature.createDamageModifier({
				id: 'comp-cursedWeapon-d',
				modifiers: [
					FactoryLogic.damageModifier.create({ damageType: DamageType.Damage, modifierType: DamageModifierType.Weakness, value: 2 })
				]
			})
		]
	};

	static disgraced: Complication = {
		id: 'comp-disgraced',
		name: 'Опозорений',
		description: 'Ви опозорений член могутньої сімʼї або гільдії, вигнані родичами або товаришами. Ті, хто колись були близькі, більше не звертають на вас уваги і не допоможуть, поки ви не виправдаєте своє імʼя або не виправитеся.',
		features: [
			FactoryLogic.feature.createBonus({
				id: 'comp-disgraced-bonus',
				field: FeatureField.Renown,
				value: 1
			}),
			FactoryLogic.feature.createSkillChoice({
				id: 'comp-disgraced-skill',
				listOptions: [SkillList.Interpersonal, SkillList.Intrigue]
			}),
			FactoryLogic.feature.create({
				id: 'comp-disgraced-d',
				name: 'Недолік: Опозорений',
				description: 'Будь-хто, хто чув про вас і під впливом вашої Відомості, ставиться до вас як до людини з поганою славою. Коли ви берете участь у переговорах з NPC, який має інтерес 2 або менше, цей NPC будує план завдати вам особистої шкоди після завершення переговорів — і реалізує його.'
			})
		]
	};

	static dragonDreams: Complication = {
		id: 'comp-dragonDreams',
		name: 'Мрії дракона',
		description: 'Іноді вам сняться дивні сни про палаюче пекло… блискучу гору скарбів… розкриття крил і злет. Ви нікому не розповідали про ці сни, крім однієї дивної родички, яка, здається, знає більше, ніж каже.',
		features: [
			FactoryLogic.feature.create({
				id: 'comp-dragonDreams-b',
				name: 'Перевага: Мрії дракона',
				description: 'Виберіть дві очки споріднення, витрачені на придбані риси драконячого лицаря. Ви можете використовувати ці риси, коли маєте 5 або більше Перемог.'
			}),
			FactoryLogic.feature.create({
				id: 'comp-dragonDreams-d',
				name: 'Недолік: Мрії дракона',
				description: 'Коли ви падаєте до 0 Витривалості, ви вибухаєте жаром і вогнем. Ви та кожна істота в радіусі 5 клітин отримують вогняну шкоду, рівну подвійній величині вашого рівня. Ви не можете зменшити цю шкоду для себе.'
			})
		]
	};

	static elementalInside: Complication = {
		id: 'comp-elemental-inside',
		name: 'Елементаль всередині',
		description: 'Коли злий маг загрожував комусь з ваших близьких, ви перешкодили його виклику елементаля, поглинувши його магію своїм тілом. Тепер ви наповнені силою того елементаля — який зовсім не радий цьому.',
		features: [
			FactoryLogic.feature.createBonus({
				id: 'comp-elemental-inside-b',
				name: 'Перевага: Елементаль всередині',
				field: FeatureField.Stamina,
				valuePerEchelon: 3
			}),
			FactoryLogic.feature.create({
				id: 'comp-elemental-inside-d',
				name: 'Недолік: Елементаль всередині',
				description: 'Поки ви вмираєте, поселений в вас елементаль бере під контроль ваше тіло. Елементаль прагне руйнування, через що ви нападаєте на найближчу помічену істоту, не піклуючись про власні бажання чи безпеку тіла. Якщо ви не намагаєтесь виконати гнів елементаля, Director може тимчасово взяти під контроль вашого героя.'
			})
		]
	};

	static evanesceria: Complication = {
		id: 'comp-evanesceria',
		name: 'Еванескерія',
		description: 'Ви заразилися рідкісною магічною хворобою на ім’я еванескерія. Час від часу ви не зовсім самі собою — або взагалі ніким. Ви просто… зникаєте, а потім повертаєтеся пізніше без памʼяті про свою відсутність.',
		features: [
			FactoryLogic.feature.create({
				id: 'comp-evanesceria-b',
				name: 'Перевага: Еванескерія',
				description: 'На початку будь-якого раунду бою ви можете спробувати відсутніти з реальності, кинувши d10. На 6 або вище ви зникаєте й повертаєтеся у ту саму клітину або у найближчу вільну клітину за вашим вибором, коли настає ваш хід. Ви не можете повторити цю спробу, доки не здобудете 1 або більше Victories.'
			}),
			FactoryLogic.feature.create({
				id: 'comp-evanesceria-d',
				name: 'Недолік: Еванескерія',
				description: 'Кожного разу, коли ви починаєте діяльність відпочинку, киньте 2d10. Якщо на будь-якому кубику випадає 1, ви ненавмисно відсутнієте з реальності й повертаєтеся в кінці відпочинку. Ви отримуєте переваги від відпочинку, але не виконуєте саму діяльність.'
			})
		]
	};

	static fallenImmortal: Complication = {
		id: 'comp-fallenImmortal',
		name: 'Падший безсмертний',
		description: 'Раніше ви були безсмертною істотою, що вершила правосуддя й виконувала волю богів. Тепер, як покарання або дар, вас зобовʼязали тимчасово відкласти свою істинну природу й стати смертним. Ваші дні тепер обмежені, але життя серед інших смертних додає йому нового сенсу.',
		features: [
			FactoryLogic.feature.createSkillChoice({
				id: 'comp-fallenImmortal-skill',
				selected: ['Релігія']
			}),
			FactoryLogic.feature.create({
				id: 'comp-fallenImmortal-b',
				name: 'Перевага Падшого безсмертного',
				description: 'Коли ви використовуєте здібність, що завдає нетипового ушкодження, ця здібність може завдавати святого ушкодження натомість.'
			}),
			FactoryLogic.feature.create({
				id: 'comp-fallenImmortal-d',
				name: 'Недолік Падшого безсмертного',
				description: 'Ви ніколи повністю не опануєте майстерність брехні, властиву смертним. Будь-яка спроба обдурити іншу істоту отримує бан.'
			})
		]
	};

	static famousRelative: Complication = {
		id: 'comp-famousRelative',
		name: 'Відомий родич',
		description: 'Ви багатообіцяючий герой, але люди постійно питають про вашого знаменитого родича. Чи зрівняєтесь ви з ним або перевершите його досягнення, чи завжди будете жити в його тіні?',
		features: [
			FactoryLogic.feature.create({
				id: 'comp-famousRelative-b',
				name: 'Перевага Відомого родича',
				description: `
У вас є магічний предмет, наприклад печатка-перстень. Як маневр ви можете використати цей предмет, щоб викликати свого родича на допомогу. Ваш родич починає з Renown 10, але в іншому має ті самі характеристики, що й ви. Вони роблять кидки сили з перевагою, але не отримують вигоди від ваших скарбів. Родич робить усе можливе, щоб допомогти у поточній небезпечній ситуації; він зникає, коли ситуація вирішена або через 1 годину. Після виклику родича ви не можете зробити це знову, поки не підвищитесь на рівень.`
			}),
			FactoryLogic.feature.create({
				id: 'comp-famousRelative-d',
				name: 'Недолік Відомого родича',
				description: 'Ви не отримуєте Victories за бойові сутички або інші випробування, у яких був присутній ваш родич. Крім того, щоразу після виклику родича наступного разу, коли ви отримаєте Renown, цей Renown отримує ваш родич.'
			})
		]
	};

	static feytouched: Complication = {
		id: 'comp-feytouched',
		name: 'Доторкнутий феями',
		description: 'Ваше народження супроводжували феї. Дружня фея благословила вас силою для захисту, натомість примхлива фея нагородила ваше життя небезпеками, аби ви довели свою силу.',
		features: [
			FactoryLogic.feature.create({
				id: 'comp-feytouched-b',
				name: 'Перевага доторкнутого феями',
				description: 'На початку бойової сутички ви можете отримати 1 додатковий Геройський ресурс. Якщо ви це зробите, Режисер отримує 3 Malice.'
			})
		]
	};

	static fieryIdeal: Complication = {
		id: 'comp-fieryIdeal',
		name: 'Палаюче Ідеал',
		description: 'Дух поза вашим розумінням вселив у вас особливу мету, обравши вас охоронцем місця, справи чи філософії. Полумʼя в душі може спалити ваших ворогів — або вас, якщо ви не виправдаєте очікувань.',
		features: [
			FactoryLogic.feature.create({
				id: 'comp-fieryIdeal-b',
				name: 'Перевага Палаючого Ідеалу',
				description: 'Поки ви дієте заради своєї особливої мети, щоразу, коли ви отримуєте результат рівня 3 за здібністю, що завдає ушкодження, ви завдаєте додаткове вогняне ушкодження, рівне вашому найвищому значенню характеристики.'
			}),
			FactoryLogic.feature.create({
				id: 'comp-fieryIdeal-d',
				name: 'Недолік Палаючого Ідеалу',
				description: 'Коли Режисер вирішує, що ви дієте всупереч своїй меті або не виправдовуєте очікувань, ви отримуєте вогняне ушкодження рівне 5 + ваш рівень. Це ушкодження неможливо зменшити.'
			})
		]
	};

	static fireAndChaos: Complication = {
		id: 'comp-fire-and-chaos',
		name: 'Вогонь і хаос',
		description: 'Великий монстр, що випускав полумʼя, знищив ваш дім. Коли все навколо згоріло, ви дивом встояли в пеклі — ваше тіло пристосувалося і почало ігнорувати дію вогню.',
		features: [
			FactoryLogic.feature.createDamageModifier({
				id: 'comp-fire-and-chaos-b',
				modifiers: [
					FactoryLogic.damageModifier.create({ damageType: DamageType.Fire, modifierType: DamageModifierType.Immunity, value: 5 }),
					FactoryLogic.damageModifier.create({ damageType: DamageType.Cold, modifierType: DamageModifierType.Weakness, value: 5 })
				]
			})
		]
	};

	static followingInTheFootsteps: Complication = {
		id: 'comp-followingInTheFootsteps',
		name: 'Йдучи по стопах',
		description: 'Ваш особистий кумир був могутнім героєм, і ви наслідуєте його приклад. Вивчаючи легенди про нього, ви сподіваєтеся колись опанувати його найвідомішу техніку бою.',
		features: [
			FactoryLogic.feature.create({
				id: 'comp-followingInTheFootsteps-b',
				name: 'Перевага: Йдучи по стопах',
				description: 'Обирайте геройську здібність вашого класу вищого рівня, ніж ваш поточний. Коли ви опануєте цю здібність у майбутньому, її вартість Геройських ресурсів назавжди зменшується на 2 (мінімум 1).'
			}),
			FactoryLogic.feature.create({
				id: 'comp-followingInTheFootsteps-d',
				name: 'Недолік: Йдучи по стопах',
				description: 'У гонитві за передовими техніками ви занедбали основи. Оберіть відому вам геройську здібність — її вартість Геройських ресурсів назавжди збільшується на 1.'
			})
		]
	};

	static forbiddenRomance: Complication = {
		id: 'comp-forbiddenRomance',
		name: 'Заборонене кохання',
		description: 'Ви закохані в могутню людину, але трагічні обставини не дозволяють вам бути разом. Чи то їхня родина ворогує з вашою, чи вони обручені з іншим, чи були відкинуті — вам судилося бути навічно поодинці.',
		features: [
			FactoryLogic.feature.create({
				id: 'comp-forbiddenRomance-b',
				name: 'Перевага Забороненого кохання',
				description: 'Ви можете таємно просити нареченого/наречену про послуги. Вони підтримують вас з відстані, але можуть бути обмежені в допомозі — і не можуть відкрито розкривати свій зв’язок із вами.'
			}),
			FactoryLogic.feature.create({
				id: 'comp-forbiddenRomance-d',
				name: 'Недолік Забороненого кохання',
				description: 'Коли ваш коханий у біді, він може покликати вас на допомогу. Якщо ваш зв’язок буде виявлено, обставини, що розділяють вас, можуть погіршитися.'
			})
		]
	};

	static frostheart: Complication = {
		id: 'comp-frostheart',
		name: 'Морозне серце',
		description: 'На краю світу ви загубилися в зимовій бурі і вважалися мертвим. Та невідома сила зберегла вам життя, повернувши з холодною шкірою і блідими очима.',
		features: [
			FactoryLogic.feature.create({
				id: 'comp-frostheart-b',
				name: 'Перевага Морозного серця',
				description: 'Коли ви завдаєте удару, що завдає нетипового ушкодження, цей удар може завдавати холодного ушкодження натомість.'
			}),
			FactoryLogic.feature.createDamageModifier({
				id: 'comp-frostheart-mods',
				modifiers: [
					FactoryLogic.damageModifier.create({ damageType: DamageType.Cold, modifierType: DamageModifierType.Immunity, value: 5 }),
					FactoryLogic.damageModifier.create({ damageType: DamageType.Fire, modifierType: DamageModifierType.Weakness, value: 5 })
				]
			})
		]
	};

	static gettingTooOldForThis: Complication = {
		id: 'comp-gettingTooOldForThis',
		name: 'Занадто старий для цього',
		description: 'Колись ви були відомим героєм, але кілька останніх років жили в мирі. Тепер ви повертаєтесь з пенсії для останнього подвигу. Ваші бойові навички підзаніли, і ви не сильніші за початківця, але кілька старих трюків ще памʼятаєте.',
		features: [
			FactoryLogic.feature.create({
				id: 'comp-gettingTooOldForThis-b',
				name: 'Перевага: Занадто старий для цього',
				description: 'Під час свого ходу ви можете обрати геройську здібність, яку могли б вивчити, якби мали на один рівень більше. Якщо ви відповідаєте іншим вимогам здібності і можете витратити необхідні Геройські ресурси, ви можете використати цю здібність. Після використання цієї переваги ви не можете зробити це знову, доки не здобудете 2 Victories.'
			}),
			FactoryLogic.feature.create({
				id: 'comp-gettingTooOldForThis-d',
				name: 'Недолік: Занадто старий для цього',
				description: 'Поки ви запихані (winded), ваша швидкість зменшується на 2.'
			})
		]
	};

	static gnollMauled: Complication = {
		id: 'comp-gnollMauled',
		name: 'Покусані гнолом',
		description: `
У дитинстві ви вижили після нападу гнолів. Той напад лишив на вас зубчастий шрам і час від часу спричиняє відчайдушні пориви кровожерливості.

Ви не можете взяти цю ускладнення, якщо вас неможливо зробити приголомшеним.`,
		features: [
			FactoryLogic.feature.create({
				id: 'comp-gnollBit-b',
				name: 'Перевага після покусів гнола',
				description: 'Коли союзник у межах 5 клітин від вас падає до 0 Stamina, ви можете використати тригерну дію, щоб переміститися на відстань до вашої швидкості та виконати безкоштовний удар.'
			}),
			FactoryLogic.feature.create({
				id: 'comp-gnollBit-d',
				name: 'Недолік після покусів гнола',
				description: 'Поки ви приголомшені, якщо ви починаєте свій хід поруч з однією або більше істотами, ви повинні використати дію, щоб зробити ближній безкоштовний удар по сусідній істоті.'
			})
		]
	};

	static greening: Complication = {
		id: 'comp-greening',
		name: 'Озеленіння',
		description: 'Колись ви відчули поклик великого дерева в лісі, життя якого висмоктував паразитичний надприродний мох. Коли ви зняли мох, відчули, як вас наповнює зелена елементальна енергія. На жаль, велике дерево вʼяне, але лишило золоте саджанець, який тепер носите з собою в пошуках ідеального місця для посадки.',
		features: [
			FactoryLogic.feature.createDamageModifier({
				id: 'comp-greening-mods',
				modifiers: [
					FactoryLogic.damageModifier.create({ damageType: DamageType.Corruption, modifierType: DamageModifierType.Immunity, value: 5 }),
					FactoryLogic.damageModifier.create({ damageType: DamageType.Fire, modifierType: DamageModifierType.Weakness, value: 5 })
				]
			})
		]
	};

	static refugee: Complication = {
		id: 'comp-refugee',
		name: 'Біженець',
		description: 'Ворожа армія — можливо сили Аякса, Залізного Святого — завоювала вашу батьківщину. Ваша родина втекла, але ви не зможете повернутися, поки гнобителі не будуть повністю переможені.',
		features: [
			FactoryLogic.feature.create({
				id: 'comp-refugee-b',
				name: 'Перевага біженця',
				description: 'Коли ваша родина тікала, вони залишили цінний актив. Узгодьте з Директором, чи це дрібна реліквія, рівневе скарб, кілька очок Багатства, джерело проекту для виготовлення скарбу чи інше. Цей актив зараз в руках загарбників, але його можна повернути згідно з рішенням Директора.'
			}),
			FactoryLogic.feature.create({
				id: 'comp-refugee-d',
				name: 'Недолік біженця',
				description: 'Фракція, яка окупувала вашу батьківщину, хоче, щоб ви були схоплені або вбиті. Її агенти або симпатики можуть спробувати завдати вам шкоди, якщо впізнають вас, згідно з рішенням Директора.'
			})
		]
	};

	static grounded: Complication = {
		id: 'comp-grounded',
		name: 'Приземлений',
		description: 'Коли ви були дитиною, поселення було в небезпеці, і ви звернулись до землі по допомогу. Земля відповіла викликом захисних стін з ґрунту й каміння, і відтоді ви відчуваєте землю як друга і захисника.',
		features: [
			FactoryLogic.feature.create({
				id: 'comp-grounded-b',
				name: 'Перевага Приземленого',
				description: 'Ви отримуєте 1-рівневу спеціалізаційну здатність Елементаліста Motivate Earth. Якщо ви отримуєте цю здатність іншим шляхом, Motivate Earth для вас стає далекобійною здібністю з дистанцією 5.'
			}),
			FactoryLogic.feature.create({
				id: 'comp-grounded-d',
				name: 'Недолік Приземленого',
				description: 'Ви притягуєте блискавки. Коли будь-яка істота в межах 2 клітин отримує блискавичне ушкодження, ви отримуєте 5 блискавичного ушкодження, яке неможливо зменшити.'
			})
		]
	};

	static guiltyConscience: Complication = {
		id: 'comp-guiltyConscience',
		name: 'Вина',
		description: 'Світ у біді — і частково через вас. Можливо, ви допомогли лиходієві піднятися або випадково звільнили демона. Тепер ваше завдання — виправити спричинені вами збитки.',
		features: [
			FactoryLogic.feature.create({
				id: 'comp-guiltyConscience-b',
				name: 'Перевага вини',
				description: 'Ви рішуче налаштовані вижити, щоб виправити помилки. Коли ваша Stamina досягає негативного значення, рівного вашому winded, ви можете використати безкоштовну тригерну дію, щоб витратити Recovery.'
			}),
			FactoryLogic.feature.create({
				id: 'comp-guiltyConscience-d',
				name: 'Недолік вини',
				description: 'Багато людей звинувачують вас у завданих злях. Вони можуть бути недружні або ворожі до вас — і ви розумієте їхню точку зору. Ви отримуєте шкоду на будь-яку перевірку взаємодії з тими, хто знає про ваші вчинки, а також на удари проти таких істот.'
			})
		]
	};

	static hawkRider: Complication = {
		id: 'comp-hawkRider',
		name: 'Вершник яструба',
		description: 'Ви мандруєте з гігантським яструбом, якого вкрали у Господарів Яструбів. Можливо, ви колись були одним із них або втекли з їхнього полону. Мати такого компаньйона має незручності й небезпеки, але це мала ціна за свободу небес.',
		features: [
			FactoryLogic.feature.create({
				id: 'comp-hawkRider-b',
				name: 'Перевага Вершника яструба',
				description: 'Поки ви не в будівлі або іншій споруді, ви можете витратити 1 безперервну хвилину, щоб викликати свого гігантського яструба як сідло. Ви можете відпустити яструба у будь-який момент (дія не потрібна). Яструб не заходить у будівлі, підземелля чи інші споруди і не прийме наїзника, крім вас. Якщо яструб отримує ушкодження або вмирає, ви можете відновити його до повної Stamina як діяльність відпочинку.'
			}),
			FactoryLogic.feature.create({
				id: 'comp-hawkRider-d',
				name: 'Недолік Вершника яструба',
				description: 'Люди, що знають походження вашого сідла, бояться з вами спілкуватися, бо переймаються, що Господарі Яструбів прийдуть за ними через асоціацію. Ви отримуєте шкоду на перевірки впливу на тих, хто знає про Господарів Яструбів і бачив вас з гігантським яструбом. Такі люди можуть повідомити Господарям Яструбів, які можуть прийти шукати вас на розсуд Режисера.'
			})
		]
	};

	static hostBody: Complication = {
		id: 'comp-hostBody',
		name: 'Тіло-хазяїн',
		description: '«Не лякайтеся! Ми не людина, якою здаємося. Ми — розумний грибний колектив, що використовує це тіло як носія. Ні, ми не робимо нічого підозрілого! Це тіло було мертвим, коли ми знайшли його, і ми дали йому ще один шанс на життя. Ми дружні. Покладіть ті смолоскипи!»',
		features: [
			FactoryLogic.feature.create({
				id: 'comp-hostBody-b',
				name: 'Перевага Тіла-хазяїна',
				description: 'Ви — гриб, який вселився в гуманоїдне тіло. Ваш господарський тіло діє за звичайними правилами персонажа і вважається живим. У будь-який момент, поки ваше тіло-хазяїн живе, або протягом 24 годин після його смерті, ви можете використати основну дію, щоб переміститися в мертве гуманоїдне тіло в межах 10 клітин від вашого тіла і використати його як нове тіло-хазяїн, за умови, що тіло належить до ігрової спорідненості. Коли ви це робите, ваше первісне тіло-хазяїн помирає, якщо воно було живим. Нове тіло-хазяїн набуває всіх ваших характеристик, за винятком розміру, рис спорідненості і інших статистик, пов\'язаних зі спорідненістю вашого попереднього тіла, які ви натомість отримуєте від нового тіла. Коли ви вселяєтесь у нове тіло-хазяїн, ви починаєте з 1 Stamina і можете одразу витратити Recovery.'
			}),
			FactoryLogic.feature.create({
				id: 'comp-hostBody-d',
				name: 'Недолік Тіла-хазяїна',
				description: 'Ви отримуєте шкоду на перевірки читання емоцій або мови тіла гуманоїдних істот.'
			}),
			FactoryLogic.feature.createDamageModifier({
				id: 'comp-hostBody-mods',
				modifiers: [
					FactoryLogic.damageModifier.create({ damageType: DamageType.Fire, modifierType: DamageModifierType.Weakness, value: 5 })
				]
			})
		]
	};

	static hunted: Complication = {
		id: 'comp-hunted',
		name: 'Переслідуваний',
		description: 'Ви на крок попереду переслідувача — можливо мисливець за головами, ревенант або вбивця, що хоче вашої смерті. Колись ви зможете зустрітися з ним лицем до лиця, але наразі ви живете в бігах.',
		features: [
			FactoryLogic.feature.createSkillChoice({
				id: 'comp-hunted-skill',
				listOptions: [SkillList.Intrigue]
			}),
			FactoryLogic.feature.create({
				id: 'comp-hunted-b',
				name: 'Перевага Переслідуваного',
				description: 'Коли одна або більше істот переслідують вас, ви можете сховатися як діяльність відпочинку. Коли ви це робите, ті, хто переслідує вас, втрачають місцезнаходження вашої групи і мусять почати пошук заново.'
			}),
			FactoryLogic.feature.create({
				id: 'comp-hunted-d',
				name: 'Недолік Переслідуваного',
				description: 'Кожного разу, коли ви отримуєте Renown, ваш переслідувач дізнається ваше місцезнаходження. Якщо ви не сховаєтесь або не переїдете в інше місце, агенти переслідувача відвідають вас протягом 1d10 днів. Якщо ви затримаєтесь, ваш переслідувач знайде вас.'
			})
		]
	};

	static hunter: Complication = {
		id: 'comp-hunter',
		name: 'Мисливець',
		description: 'Ви полюєте на когось або щось — можливо на злочинця, що вам заподіяв зло, або на небезпечного монстра. Ви не заспокоїтесь, доки не зустрінетесь з обʼєктом полювання!',
		features: [
			FactoryLogic.feature.createSkillChoice({
				id: 'comp-hunter-b1',
				options: ['Пильність', 'Кримінальний світ', 'Підслуховування', 'Допит', 'Чутки', 'Пошук', 'Відстеження', 'Суспільство']
			}),
			FactoryLogic.feature.create({
				id: 'comp-hunter-b2',
				name: 'Перевага Мисливця',
				description: 'Ви маєте перевагу на перевірках, зроблених для пошуку або збирання підказок про ваш обʼєкт полювання.'
			}),
			FactoryLogic.feature.create({
				id: 'comp-hunter-d',
				name: 'Недолік Мисливця',
				description: 'Ви настільки одержимі полюванням, що маєте шкоду на перевірки відстеження інших істот.'
			})
		]
	};

	static indebted: Complication = {
		id: 'comp-indebted',
		name: 'Заборгований',
		description: 'Угода, на яку ви пішли, провалилась, або ви звʼязалися з неправильними людьми. Тепер ви винні борг або викуп, що може розорити невеликого дворянина. Щоб віддати його, доведеться піти на ризиковані кроки.',
		features: [
			FactoryLogic.feature.create({
				id: 'comp-indebted-b',
				name: 'Перевага Заборгованого',
				description: 'Ви вправні з грошима — бо мусили такими стати. Коли ви заробляєте Wealth, ви отримуєте на 1 більше, ніж зазвичай.'
			}),
			FactoryLogic.feature.create({
				id: 'comp-indebted-d',
				name: 'Недолік Заборгованого',
				description: 'Ваш початковий Wealth рівний -5. Поки ваш Wealth менший за 1, ви можете купувати предмети так, ніби маєте 1 Wealth, але вас часто відвідують загрозливі кредитори, а крамниці часто зачиняють двері, бачачи вас.'
			})
		]
	};

	static infernalContract: Complication = {
		id: 'comp-infernalContract',
		name: 'Пекельний контракт',
		description: 'Ви уклали угоду (можливо, неусвідомлено) з архідияволом, що привʼязала вас до його служби. Коли ви дізналися про це, вас відвезли до Семи Міст Пекла, де найкращі уми часових просторів навчали вас мистецтву битви. Архідиявол дозволяє вам користуватися цими дарунками — доти, доки не попросить відплатити послугу.',
		features: [
			FactoryLogic.feature.create({
				id: 'comp-infernalContract-b',
				name: 'Перевага Пекельного контракту',
				description: 'Коли ви присутні в битві, де обидві сторони мають істот, що не здивовані, ваша сторона визначає, хто ходить першим, якщо кинуте d10 дає 4 або більше.'
			}),
			FactoryLogic.feature.create({
				id: 'comp-infernalContract-d',
				name: 'Недолік Пекельного контракту',
				description: 'Архідиявол час від часу просить вас знищити ворогів від свого імені. Якщо ви відмовляєтеся, ваш дияволоподібний покровитель посилає демонів проти вас і тих, кому ви небайдужі.'
			})
		]
	};

	static infernalContractButLikeBad: Complication = {
		id: 'comp-infernalContractButLikeBad',
		name: 'Пекельний контракт — але поганий',
		description: 'Ви уклали угоду з дияволом. Непевна угода — бо це був не дуже хороший диявол. На жаль, занадто пізно шкодувати: ваша душа під загрозою, якщо ви не знайдете лазівку або не переконаєте диявола скасувати угоду.',
		features: [
			FactoryLogic.feature.createChoice({
				id: 'comp-infernalContractButLikeBad-b',
				options: [
					{
						feature: FactoryLogic.feature.createBonus({
							id: 'comp-infernalContractButLikeBad-ba',
							field: FeatureField.Renown,
							value: 2
						}),
						value: 1
					},
					{
						feature: FactoryLogic.feature.createBonus({
							id: 'comp-infernalContractButLikeBad-bb',
							field: FeatureField.Wealth,
							value: 2
						}),
						value: 1
					},
					{
						feature: FactoryLogic.feature.createBonus({
							id: 'comp-infernalContractButLikeBad-bc',
							field: FeatureField.Stamina,
							value: 3
						}),
						value: 1
					}
				]
			}),
			FactoryLogic.feature.create({
				id: 'comp-infernalContractButLikeBad-d',
				name: 'Недолік Пекельного контракту — поганого',
				description: 'Ваше тіло має пекельний знак. Ті, хто знається на релігії, бачать у ньому ознаку приналежності вашої душі до Пекла і отримують шкоду на перевірки взаємодії з вами (якщо тільки це не їхня уподобання). Крім того, коли ви помираєте, ваша душа йде до Пекла і не може бути відновлена.'
			})
		]
	};

	static ivoryTower: Complication = {
		id: 'comp-ivoryTower',
		name: 'Вежа зі слонової кістки',
		description: 'Ви навчалися в академії або іншому освітньому закладі. Тренування було ґрунтовним, а список літератури — широкий. Проте покинувши навчання, ви виявили прогалини в освіті: деякі книги були застарілими.',
		features: [
			FactoryLogic.feature.createSkillChoice({
				id: 'comp-ivoryTower-skills',
				listOptions: [SkillList.Crafting, SkillList.Exploration, SkillList.Interpersonal, SkillList.Intrigue, SkillList.Lore],
				count: 3
			}),
			FactoryLogic.feature.createLanguageChoice({
				id: 'comp-ivoryTower-lang',
				options: [LanguageType.Dead],
				description: 'Ви знаєте одну мертву мову на ваш вибір.'
			}),
			FactoryLogic.feature.create({
				id: 'comp-ivoryTower-d',
				name: 'Недолік Вежі зі слонової кістки',
				description: 'Режисер обирає одну зі здобутих навичок. Ви втрачаєте цю навичку і ніколи не зможете її знову опанувати. Крім того, ви отримуєте шкоду на будь-яку перевірку, де ця навичка застосовується.'
			})
		]
	};

	static lifebonded: Complication = {
		id: 'comp-lifebonded',
		name: 'Звʼязаний життям',
		description: 'У темному ритуалі ваша душа була повʼязана з душею іншої істоти. Це може бути товариш, істота, якій ви зобовʼязані, або ворог. Коли вони помирають — помираєте й ви, що робить вас ідеальним охоронцем.',
		features: [
			FactoryLogic.feature.create({
				id: 'comp-lifebonded-b',
				name: 'Перевага Звʼязаного життям',
				description: 'Оберіть іншу істоту без ускладнення Lifebonded. Коли ви вмираєте, ваше тіло зникає до тих пір, поки та істота не завершить відпочинок або не здобуде 2+ Victories. Тоді ви зʼявляєтесь поруч із нею, повністю вилікувані.'
			}),
			FactoryLogic.feature.create({
				id: 'comp-lifebonded-d',
				name: 'Недолік Звʼязаного життям',
				description: 'Якщо істота, з якою ви повʼязані, помирає, ви також помираєте незалежно від ваших інших рис чи здібностей.'
			})
		]
	};

	static lightningSoul: Complication = {
		id: 'comp-lightningSoul',
		name: 'Блискавична душа',
		description: 'Вас вдарила блискавка під час бурі — але щось врятувало вас від смерті. Це могло бути божественне диво, латентний психічний дар або магія елементаліста; ви ввібрали блискавку в тіло. Вона завжди з вами, пульсує під поверхнею.',
		features: [
			FactoryLogic.feature.create({
				id: 'comp-lightningSoul-b',
				name: 'Перевага Блискавичної душі',
				description: 'Коли ви відновлюєте Stamina в бою, ви отримуєте 1 surge. Коли ви витрачаєте surge для додаткового ушкодження, ви можете зробити це ушкодження блискавичним.'
			}),
			FactoryLogic.feature.create({
				id: 'comp-lightningSoul-d',
				name: 'Недолік Блискавичної душі',
				description: 'Коли ви вологі, ви маєте слабкість до ушкоджень 5.'
			})
		]
	};

	static loner: Complication = {
		id: 'comp-loner',
		name: 'Самітник',
		description: 'Ви завжди були самітником. Без нічиєї підтримки ви вивчили мільйон прийомів виживання. Тому було несподівано знайти сімʼю в теперішній групі пригодників.',
		features: [
			FactoryLogic.feature.create({
				id: 'comp-loner-b',
				name: 'Перевага Самітника',
				description: 'Коли ви завершуєте відпочинок, оберіть навичку, якої у вас немає. Ви маєте цю навичку до кінця наступного відпочинку.'
			}),
			FactoryLogic.feature.create({
				id: 'comp-loner-d',
				name: 'Недолік Самітника',
				description: 'Тепер, коли у вас є люди, що піклуються, ви не дозволите забрати їх! Коли істота знижує одного з ваших союзників до 0 Stamina, ви піддаєтесь Taunted від цієї істоти, доки Stamina союзника не підніметься вище 0, інша істота не зробить вас Taunted або поки не закінчиться сутичка.'
			})
		]
	};

	static lostInTime: Complication = {
		id: 'comp-lostInTime',
		name: 'Загублений у часі',
		description: 'У давню епоху катастрофа охопила ваше місто. Ви не загинули, але якийсь арканний інцидент призупинив вас у часі до сьогодення. Поодинці вам доводиться орієнтуватися в світі з головою, повною застарілих спогадів і кількох древніх таємниць.',
		features: [
			FactoryLogic.feature.create({
				id: 'comp-lostInTime-b',
				name: 'Перевага Загубленого у часі',
				description: 'Оберіть тип ушкодження: acid, cold, corruption, fire, holy, lightning, poison, psychic або sonic. Коли ви використовуєте signature ability, ви можете змінити тип ушкодження на обраний.'
			}),
			FactoryLogic.feature.create({
				id: 'comp-lostInTime-d',
				name: 'Недолік Загубленого у часі',
				description: 'Ви автоматично провалюєте перевірки відтворення інформації з періоду, під час якого ви були призупинені у часі.'
			})
		]
	};

	static lostYourHead: Complication = {
		id: 'comp-lostYourHead',
		name: 'Без голови',
		description: 'Бредбеддл вкрав вашу голову! Зазвичай це фатально, але ваш латентний психічний дар дозволяє вам вижити, попри відсічення голови.',
		features: [
			FactoryLogic.feature.createAbility({
				ability: FactoryLogic.createAbility({
					id: 'comp-lostYourHead-b',
					name: 'Запозичити голову',
					description: 'У вас немає голови, але ви можете психічно позичити іншу.',
					type: FactoryLogic.type.createManeuver(),
					keywords: [AbilityKeyword.Psionic, AbilityKeyword.Ranged],
					distance: [FactoryLogic.distance.createRanged(10)],
					target: 'One willing creature',
					sections: [
						FactoryLogic.createAbilitySectionText('Ви можете бачити, чути й відчувати запахи так, ніби знаходитесь у просторі цілі. Додатково ви можете позичити їхній рот для мовлення — говорите своїм голосом. Ефект закінчується, коли ви застосуєте Запозичити голову до іншої цілі, коли ціль відійде більш ніж на 10 клітин, або коли істота більше не бажає ділитися головою.')
					]
				})
			}),
			FactoryLogic.feature.create({
				id: 'comp-lostYourHead-d',
				name: 'Недолік: Відсутність голови',
				description: 'Не маючи голови, ви не можете бачити, чути, відчувати запахи, смак або говорити, за винятком випадків, коли використовуєте здібність «Запозичити голову». Додатково ви не можете носити спорядження, що потребує голову, наприклад шолом або капелюх.'
			})
		]
	};

	static lucky: Complication = {
		id: 'comp-lucky',
		name: 'Щасливчик',
		description: 'Вам завжди щастило. Коли ви покладаєтеся на долю, ви частіше досягаєте успіху. Але фарт мінливий — якщо ви йому не довіряєте, він відвертається.',
		features: [
			FactoryLogic.feature.create({
				id: 'comp-lucky-b',
				name: 'Перевага: Щасливчик',
				description: 'Коли ви витрачаєте геройський жетон, щоб забезпечити успіх у рятівному кидку або перезкинути тест, киньте d10. На 6 або вище ви отримуєте ефект, але геройський жетон не витрачається.'
			}),
			FactoryLogic.feature.create({
				id: 'comp-lucky-d',
				name: 'Недолік: Щасливчик',
				description: 'Коли ви отримуєте результат рівня 1 на тесті й не витрачаєте геройський жетон на перезкидання, ви отримуєте шкоду на наступний тест.'
			})
		]
	};

	static masterChef: Complication = {
		id: 'comp-masterChef',
		name: 'Майстер-кухар',
		description: 'Раніше ви були кухарем; коли вийдете на пенсію, у вас великі плани щодо власного ресторану або трактира. Наразі ви шукаєте рідкі інгредієнти, які може знайти лише мандрівний авантюрист. Адже саме їжа тримає світ у русі.',
		features: [
			FactoryLogic.feature.createSkillChoice({
				id: 'comp-masterChef-skill',
				selected: ['Кулінарія']
			}),
			FactoryLogic.feature.create({
				id: 'comp-masterChef-b',
				name: 'Перевага: Майстер-кухар',
				description: 'Коли ви завершуєте відпочинок або прокидаєтесь після нічного сну, ви можете витратити 1 неперервну годину, щоб приготувати відмінну страву для до 10 істот за наявності інгредієнтів та кухонних інструментів. Протягом наступних 24 годин кожна істота, яка зʼїсть цю страву, може отримати ефект, еквівалентний витраті одного Recovery, без фактичної витрати Recovery.'
			}),
			FactoryLogic.feature.create({
				id: 'comp-masterChef-d',
				name: 'Недолік: Майстер-кухар',
				description: 'Першого разу щодня, коли ви їсте їжу, яку не приготували самі, ви втрачаєте 2 Recovery.'
			})
		]
	};

	static meddlingButler: Complication = {
		id: 'comp-meddlingButler',
		name: 'Навʼязливий дворецький',
		description: 'Ви не знаєте, чому, але ваша родина приручила вам старого, надійного та надзвичайно дратівливого слугу. Він безперечно компетентний, але іноді забуває, хто головний.',
		features: [
			FactoryLogic.feature.createRetainer({
				id: 'comp-meddlingButler-b'
			}),
			FactoryLogic.feature.create({
				id: 'comp-meddlingButler-d',
				name: 'Недолік: Навʼязливий дворецький',
				description: 'Поза боєм ваш дворецький перебуває під контролем Режисера. Він іноді діє без наказів — завжди в ваших інтересах, але часто в принизливий або незручний спосіб.'
			})
		]
	};

	static medium: Complication = {
		id: 'comp-medium',
		name: 'Медіум',
		description: 'Ви можете відчувати привидів і духів, яких відчувають інші. Ці надприродні сутності постійно шепочуть у ваш розум тривожні таємниці — коли вони не намагаються вас убити.',
		features: [
			FactoryLogic.feature.create({
				id: 'comp-medium-b',
				name: 'Перевага і Недолік: Медіум',
				description: 'Нематеріальні неживі істоти в межах 10 клітин можуть телепатично спілкуватися з вами. Додатково ви отримуєте здібність Contact Spirits.'
			}),
			FactoryLogic.feature.createAbility({
				ability: FactoryLogic.createAbility({
					id: 'comp-medium-b-ability',
					name: 'Контакт із духами',
					type: FactoryLogic.type.createMain(),
					keywords: [AbilityKeyword.Magic],
					distance: [FactoryLogic.distance.createSelf()],
					target: 'Себе',
					sections: [
						FactoryLogic.createAbilitySectionRoll(
							FactoryLogic.createPowerRoll({
								characteristic: [Characteristic.Intuition, Characteristic.Presence],
								tier1: 'Ви отримуєте шкоду від скверни, рівну 5 + ваш рівень.',
								tier2: 'Дух будь-кого з ваших знайомих, хто помер, говорить з вами, за умови що він перебуває в тому ж світі. Ви дізнаєтеся, як вони загинули, і можете поставити їм одне питання; вони можуть відповісти правдиво або неправдиво. Дух знає все, що знав за життя, і усвідомлює події, які сталися в його безпосередньому оточенні з моменту смерті.',
								tier3: 'Як у рівні 2, але ви можете поставити 3 питання.'
							})
						),
						FactoryLogic.createAbilitySectionText('Якщо будь-які розумні істоти померли поруч протягом останніх 24 годин, ви маєте подвійний шкоду на кидку сили цієї здібності, якщо будь‑яка з цих істот була ворожою до вас, або подвійний бонус, якщо будь‑яка з них була дружньою. Після використання цієї здібності ви не можете використовувати її знову, поки не здобудете 1 або більше перемог (Victories).')
					]
				})
			})
		]
	};

	static medusaBlood: Complication = {
		id: 'comp-medusaBlood',
		name: 'Кров медузи',
		description: 'Ваші батьки ніколи не ладнали. Ви знаєте це, бо ваш батько живий, а мати — медуза. Це ускладнило ваше дитинство і тепер ускладнює ваше доросле життя.',
		features: [
			FactoryLogic.feature.createAbility({
				ability: FactoryLogic.createAbility({
					id: 'comp-medusaBlood-b',
					name: 'Камʼяні очі',
					description: 'Ці погляди не вбивають — вони перетворюють на камінь.',
					type: FactoryLogic.type.createMain(),
					keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged, AbilityKeyword.Strike],
					distance: [FactoryLogic.distance.createRanged(10)],
					target: 'Одна істота',
					sections: [
						FactoryLogic.createAbilitySectionRoll(
							FactoryLogic.createPowerRoll({
								characteristic: [Characteristic.Might, Characteristic.Presence],
								tier1: '2 ушкодження; С < [слабкий] сповільнений (рят. кидок скасує)',
								tier2: '4 ушкодження; С < [середній] сповільнений (рят. кидок скасує)',
								tier3: '6 ушкоджень; С < [сильний] сповільнений (рят. кидок скасує)'
							})
						),
						FactoryLogic.createAbilitySectionText('Ця здібність не діє на істоту, яка не бачить вас або навмисно уникає дивитися на ваші очі. Істота, зведена цією здібністю до 0 Stamina, перетворюється на неживу камʼяну статую.')
					]
				})
			}),
			FactoryLogic.feature.create({
				id: 'comp-medusaBlood-d',
				name: 'Недолік: Кров медузи',
				description: 'Поза боєм ви використовуєте Камʼяні очі на будь-кого, хто зустрічає ваш погляд — навмисно чи ні. Ваші супутники знають не дивитися вам в очі, але незнайомці швидше за все спровокують здібність, якщо ви не прикриєте очі.'
			})
		]
	};

	static misunderstood: Complication = {
		id: 'comp-misunderstood',
		name: 'Неправильно зрозумілий',
		description: 'Ваша зовнішність відносить вас до групи, якої бояться загалом. Ви можете бути доброю людиною, але рідко отримуєте шанс це довести. Не дивно, що ви часто носите каптур.',
		features: [
			FactoryLogic.feature.create({
				id: 'comp-misunderstood-b',
				name: 'Наслідок: Неправильно зрозумілий',
				description: 'Коли ви відкриваєте свою зовнішність істотам, які не знають вас особисто, ви отримуєте перевагу на тестах, де можна застосувати Brag або Intimidate, але отримуєте шкоду на тестах, де застосовні Flirt, Lead або Persuade.'
			})
		]
	};

	static mundane: Complication = {
		id: 'comp-mundane',
		name: 'Немагічний',
		description: 'Ви безнадійно немагічні. Коли ви намагаєтеся використовувати магічні здібності, або коли їх застосовують на вас, вони працюють неправильно. Навіть магічні пристрої здаються неефективними у вашій присутності.',
		features: [
			FactoryLogic.feature.createDamageModifier({
				id: 'comp-mundane-b',
				modifiers: [
					FactoryLogic.damageModifier.createPerLevel({ damageType: DamageType.Corruption, modifierType: DamageModifierType.Immunity, value: 1 }),
					FactoryLogic.damageModifier.createPerLevel({ damageType: DamageType.Holy, modifierType: DamageModifierType.Immunity, value: 1 }),
					FactoryLogic.damageModifier.createPerLevel({ damageType: DamageType.Psychic, modifierType: DamageModifierType.Immunity, value: 1 })
				]
			}),
			FactoryLogic.feature.create({
				id: 'comp-mundane-d',
				name: 'Недолік: Немагічний',
				description: 'Поки ви носите більше трьох магічних скарбів, ви отримуєте bane на кидки сили (power rolls).'
			})
		]
	};

	static outlaw: Complication = {
		id: 'comp-outlaw',
		name: 'Поза законом',
		description: 'Ви можете бути звичайним розбійником або ідеалістичним борцем за свободу, але влада засуджує ваші вчинки. Поки ваше імʼя не очищене, вам доводиться тримати низький профіль.',
		features: [
			FactoryLogic.feature.createBonus({
				id: 'comp-outlaw-b',
				field: FeatureField.Renown,
				value: 1
			}),
			FactoryLogic.feature.create({
				id: 'comp-outlaw-d',
				name: 'Недолік: Поза законом',
				description: 'Правоохоронці та мисливці за головами, які впізнають вас, намагаються заарештувати вас.'
			})
		]
	};

	static pirate: Complication = {
		id: 'comp-pirate',
		name: 'Пірат',
		description: 'У вас піратське минуле (і, можливо, теперішнє чи майбутнє). Хоч на суші ви не дуже відомі, інші пірати швидко впізнають своїх.',
		features: [
			FactoryLogic.feature.create({
				id: 'comp-pirate-b',
				name: 'Перевага: Пірат',
				description: 'Під час взаємодії з піратами або мисливцями на піратів ваша Відомість (Renown) вважається на 2 вищою. Додатково, у вас є шматок піратської карти; інші шматки мають інші пірати в різних місцях. Зібравши всі шматки, ви б знайшли місце дивовижного піратського скарбу.'
			}),
			FactoryLogic.feature.create({
				id: 'comp-pirate-d',
				name: 'Недолік: Пірат',
				description: 'Пірати, які мають інші шматки карти, дуже бажають заволодіти вашим і не вагатимуться вбити вас заради цього. Крім того, кажуть, що піратський скарб проклятий або населений духами.'
			})
		]
	};

	static primordialSickness: Complication = {
		id: 'comp-primordial-sickness',
		name: 'Первісна хвороба',
		description: 'Колись ви заразилися страшною хворобою, для якої ніхто не міг знайти лікування. Ви шукали первісне болото, яке вважали або надзвичайно отруйним, або дивовижно цілющим. Воно виявилося і тим, і тим: хвороба відступає, але тіло корумповано його неприродною енергією.',
		features: [
			FactoryLogic.feature.createDamageModifier({
				id: 'comp-primordial-sickness-b',
				modifiers: [
					FactoryLogic.damageModifier.create({ damageType: DamageType.Poison, modifierType: DamageModifierType.Immunity, value: 5 }),
					FactoryLogic.damageModifier.create({ damageType: DamageType.Corruption, modifierType: DamageModifierType.Immunity, value: 5 })
				]
			}),
			FactoryLogic.feature.createBonus({
				id: 'comp-primordial-sickness-d',
				name: 'Недолік: Первісна хвороба',
				field: FeatureField.Recoveries,
				value: -1
			})
		]
	};

	static prisonerOfTheSynlirii: Complication = {
		id: 'comp-prisonerOfTheSynlirii',
		name: 'Вʼязень Синлірії',
		description: 'Вас захопили псіонічні істоти, відомі як безмовні говоруни. Ви втекли, але з того часу в глибині свідомості тягнеться відчуття, що за вами спостерігають.',
		features: [
			FactoryLogic.feature.create({
				id: 'comp-prisonerOfTheSynlirii-b',
				name: 'Перевага: Вʼязень Синлірії',
				description: 'Ви можете телепатично спілкуватися з істотами в межах 10 клітин, якщо вони розділяють з вами мову й ви знаєте одне про одного. Істота, з якою ви так спілкуєтесь, може відповісти телепатично, якщо захоче.'
			}),
			FactoryLogic.feature.create({
				id: 'comp-prisonerOfTheSynlirii-d',
				name: 'Недолік: Вʼязень Синлірії',
				description: 'Будь-які безмовні говоруни в межах 1 милі знають ваше місцезнаходження і можуть підслуховувати та розуміти ваші телепатичні розмови.'
			})
		]
	};

	static promisingApprentice: Complication = {
		id: 'comp-promisingApprentice',
		name: 'Перспективний учень',
		description: 'Ви були взяті в учні, щоб опанувати ремесло. Ваш наставник вважав, що у вас особливий талант і ви могли б стати майстром. Але перед завершенням навчання наставника вбили.',
		features: [
			FactoryLogic.feature.createSkillChoice({
				id: 'comp-promisingApprentice-skill',
				listOptions: [SkillList.Crafting]
			}),
			FactoryLogic.feature.create({
				id: 'comp-promisingApprentice-b',
				name: 'Перевага: Перспективний учень',
				description: 'Оберіть одну навичку з групи ремесел. Ви отримуєте перевагу на будь-який тест, що використовує цю навичку.'
			}),
			FactoryLogic.feature.create({
				id: 'comp-promisingApprentice-d',
				name: 'Недолік: Перспективний учень',
				description: 'Той, хто вбив вашого наставника, прокляв вас. Ви отримуєте bane на будь-який тест, який не використовує одну з ваших навичок.'
			})
		]
	};

	static psychicEruption: Complication = {
		id: 'comp-psychicEruption',
		name: 'Психічний вибух',
		description: 'У стресові моменти у вас болить голова. Псіонічна енергія накопичується в розумі, доки здається, ніби голова вибухне. Якщо ви не обережні, це трапляється насправді, випромінюючи психічні хвилі, що шкодять і друзям, і ворогам.',
		features: [
			FactoryLogic.feature.createAbility({
				ability: FactoryLogic.createAbility({
					id: 'comp-psychicEruption-b',
					name: 'Психічний вибух',
					description: 'Псіонічна енергія вибухає з вашого тіла райдужним блиском.',
					type: FactoryLogic.type.createMain(),
					keywords: [AbilityKeyword.Area, AbilityKeyword.Psionic],
					distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 3 })],
					target: 'Кожна істота в зоні',
					sections: [
						FactoryLogic.createAbilitySectionText('Використання цієї здібності коштує всі ваші геройські ресурси.'),
						FactoryLogic.createAbilitySectionRoll(
							FactoryLogic.createPowerRoll({
								characteristic: [Characteristic.Might, Characteristic.Agility, Characteristic.Reason, Characteristic.Intuition, Characteristic.Presence],
								tier1: '1 психічна шкода за кожен витрачений геройський ресурс, максимум рівний вашому рівню',
								tier2: '1 психічна шкода за кожен витрачений геройський ресурс, максимум рівний вашому рівню + ваше найвище значення характеристики',
								tier3: '1 психічна шкода за кожен витрачений геройський ресурс'
							})
						)
					]
				})
			}),
			FactoryLogic.feature.create({
				id: 'comp-psychicEruption-d',
				name: 'Недолік: Психічний вибух',
				description: 'Коли ви отримуєте стан кровотечі, переляку або ослаблення, ви мусите використати Психічний вибух як безкоштовну тригерну дію.'
			})
		]
	};

	static raisedByBeasts: Complication = {
		id: 'comp-raisedByBeasts',
		name: 'Вирощений звірами',
		description: 'Вас осиротили або ви загубилися в дикій місцевості, і дружнє племʼя тварин (наприклад, мавпи, ведмеді чи вовки) прихистило вас. Повернення до цивілізації було шоком, але тепер ви рішуче прагнете дізнатися якомога більше про свій рід.',
		features: [
			FactoryLogic.feature.createSkillChoice({
				id: 'comp-raisedByBeasts-skill',
				selected: ['Догляд за тваринами']
			}),
			FactoryLogic.feature.create({
				id: 'comp-raisedByBeasts-b',
				name: 'Перевага: Вирощений звірами',
				description: 'Оберіть тип тварини, повʼязаний з тими, хто вам допоміг (наприклад, вовк). Ви отримуєте перевагу на перевірки Handle Animals під час взаємодії з тваринами цього типу. Ви також можете спілкуватися з тваринами цього типу, ніби ділите спільну мову, і ці тварини зазвичай не ворожі до вас, якщо їх не примушують надприродні сили.'
			}),
			FactoryLogic.feature.create({
				id: 'comp-raisedByBeasts-d',
				name: 'Недолік: Вирощений звірами',
				description: 'У вас немає культури, але ви все ще можете говорити Келіан (Caelian).'
			})
		]
	};

	static rival: Complication = {
		id: 'comp-rival',
		name: 'Суперник',
		description: 'Що б ви не досягли, ви постійно порівнюєте себе з колишнім товаришем, який завжди здавався на крок попереду.',
		features: [
			FactoryLogic.feature.create({
				id: 'comp-rival-b',
				name: 'Перевага суперника',
				description: 'Виберіть одне з ваших вмінь. Це вміння дає +3 до тестів замість +2.'
			}),
			FactoryLogic.feature.create({
				id: 'comp-rival-d',
				name: 'Недолік суперника',
				description: 'У вашого суперника схожі характеристики, але є одне вміння, в якому він завжди був кращим, за рішенням Директора. Через це ви отримуєте шкоду на тести з використання цього вміння.'
			})
		]
	};

	static rogueTalent: Complication = {
		id: 'comp-rogueTalent',
		name: 'Псійний дар',
		description: 'Ви — єдиний, хто вижив під час катастрофічної псіонічної події — невдалого експерименту, нападу мовчазних говорців або природного явища у віддаленій частині часової лінії. Це дало вам псіонічний дар, але зробило вас вразливим до телепатичних атак.',
		features: [
			FactoryLogic.feature.createAbility({
				ability: FactoryLogic.createAbility({
					id: 'comp-rogueTalent-b',
					name: 'Телекинетичний хват',
					description: 'Ви простягаєте розум, щоб зрушити істоту або предмет.',
					type: FactoryLogic.type.createManeuver({ qualifiers: ['can be used as a ranged free strike'], freeStrike: true }),
					keywords: [AbilityKeyword.Psionic, AbilityKeyword.Ranged, AbilityKeyword.Strike],
					distance: [FactoryLogic.distance.createRanged(10)],
					target: 'Одна істота або предмет',
					sections: [
						FactoryLogic.createAbilitySectionRoll(
							FactoryLogic.createPowerRoll({
								characteristic: [Characteristic.Might, Characteristic.Intuition, Characteristic.Presence],
								tier1: 'Відштовхнути або притягнути 1',
								tier2: 'Відштовхнути або притягнути 2',
								tier3: 'Відштовхнути або притягнути 3'
							})
						)
					]
				})
			}),
			FactoryLogic.feature.createDamageModifier({
				id: 'comp-rogueTalent-d',
				modifiers: [
					FactoryLogic.damageModifier.create({ damageType: DamageType.Psychic, modifierType: DamageModifierType.Weakness, value: 5 })
				]
			})
		]
	};

	static runaway: Complication = {
		id: 'comp-runaway',
		name: 'Втеченець',
		description: 'На щастя для вас, при вашому народженні не було зловісних знаків, і у шафі немає скелетів. Ви — звичайна людина з працьовитої родини, від якої очікують продовження справи. Але хто зможе заспокоїтися на нудній роботі, коли кличе пригода? Саме тому ви втекли.',
		features: [
			FactoryLogic.feature.createSkillChoice({
				id: 'comp-runaway-b',
				listOptions: [SkillList.Crafting]
			}),
			FactoryLogic.feature.create({
				id: 'comp-runaway-d',
				name: 'Недолік втеченця',
				description: 'Члени вашої розширеної родини шукають вас і намагаються повернути додому — і ви ніколи не мали сил їм протистояти.'
			})
		]
	};

	static searchingForACure: Complication = {
		id: 'comp-searchingForACure',
		name: 'Пошук ліків',
		description: 'Ваша батьківщина була спаплюжена страшним прокляттям чи чумою, і ви — єдиний, кому вдалося врятуватися. Члени вашої родини досі існують, але в змінених формах — можливо, як вампіри, зомбі або живі статуї. Інші кажуть, що все марно, але ви рішуче шукаєте лікування, яке зможе зняти страждання ваших близьких.',
		features: [
			FactoryLogic.feature.create({
				id: 'comp-searchingForACure-b',
				name: 'Перевага пошуку ліків',
				description: 'Виберіть тип монстра, пов’язаний із бідою вашої батьківщини, наприклад вампір, привид або медуза. Ви маєте +1 до рятувальних кидків, пов’язаних із здібностями цього монстра, і ваші характеристики вважаються на 1 вищими при протидії ефектам, пов’язаним із цими здібностями.'
			}),
			FactoryLogic.feature.create({
				id: 'comp-searchingForACure-d',
				name: 'Недолік пошуку ліків',
				description: 'Ви почали піддаватися прокляттю або чуми і зазнаєте тієї ж долі, що й ваша родина, якщо не знайдете лікування найближчим часом. Узгодьте з Директором часові рамки вашої трансформації; це має бути подія, що може статись під час кампанії.'
			})
		]
	};

	static secretIdentity: Complication = {
		id: 'comp-secretIdentity',
		name: 'Таємна особистість',
		description: 'Таємно ви — дуже важлива особа, але небезпечно, щоб ваша справжня ідентичність стала відомою. Можливо, ви свідок злочину або член королівської сім’ї, що тікає від узурпатора. Поки ви під загрозою переслідування, ви зберігатимете вигляд звичайного авантюриста.',
		features: [
			FactoryLogic.feature.createSkillChoice({
				id: 'comp-secretIdentity-skill',
				listOptions: [SkillList.Intrigue]
			}),
			FactoryLogic.feature.create({
				id: 'comp-secretIdentity-b',
				name: 'Перевага таємної особистості',
				description: 'Ви можете тимчасово відновити свою справжню ідентичність. Під час цього ваш Реноме і Багатство враховуються на +2 більше звичайного, і ви можете отримати інші переваги за погодженням з Директором.'
			}),
			FactoryLogic.feature.create({
				id: 'comp-secretIdentity-d',
				name: 'Недолік таємної особистості',
				description: 'Кожного разу, коли ви відновлюєте справжню ідентичність під час переслідування, щодня зростає кумулятивний шанс 20%, що вороги вас знайдуть. Цей шанс скидається, якщо ви приховаєте свою ідентичність на 1 день.'
			})
		]
	};

	static secretTwin: Complication = {
		id: 'comp-secretTwin',
		name: 'Таємний близнюк',
		description: 'У вас є ідентичний близнюк — брат або сестра, або хтось, хто так схожий на вас, що ніхто не помітить різниці. Вони мали життя, якому ви заздрили, або обов’язки, які ніхто не міг залишити невиконаними. Коли вони зникли, ви взяли на себе їхню роль. Більшість людей нічого не підозрює.',
		features: [
			FactoryLogic.feature.createItemChoice({
				id: 'comp-secretTwin-b',
				name: 'Перевага таємного близнюка',
				description: 'Ви отримуєте тринкет 1-го ешелону на свій вибір. Це була підписна реліквія вашого близнюка і має його ім’я або герб десь на собі.',
				types: [ItemType.Trinket1st]
			}),
			FactoryLogic.feature.create({
				id: 'comp-secretTwin-d',
				name: 'Недолік таємного близнюка',
				description: 'Ваш близнюк зник через те, що хтось хотів його смерті. Коли ви закінчуєте відпочинок, киньте d10. На 1 або 2 Директор може вирішити, що ваше минуле наздоганяє вас — наприклад, найманець, що шукає вашого близнюка, або хтось, хто знає вашу справжню ідентичність і загрожує її розкрити.'
			})
		]
	};

	static selfTaught: Complication = {
		id: 'comp-selfTaught',
		name: 'Самоучка',
		description: 'Поки ваші ровесники вчилися в елітних закладах, ви загартовували свої навички на вулицях, полагаючись лише на інстинкт. Те, що ви втратили в шліфі та тактичній майстерності, ви компенсували сирою силою.',
		features: [
			FactoryLogic.feature.create({
				id: 'comp-selfTaught-b',
				name: 'Перевага самоучки',
				description: 'На початку кожного вашого ходу в бою ви можете відмовитися від отримання Героїчного ресурсу до початку вашого наступного ходу. Якщо ви це зробите, ваші удари отримують бонус до шкоди, рівний вашій найвищій характеристиці, до початку вашого наступного ходу.'
			})
		]
	};

	static sewerFolk: Complication = {
		id: 'comp-sewerFolk',
		name: 'Мешканець стоків',
		description: 'Бідні або втікачі — ви провели формативні роки в каналізаційних тунелях великого міста. Там ви навчилися речам, що служать вам і досі, хоча сморід і отруйні пари завдали постійної шкоди вашому здоровʼю.',
		features: [
			FactoryLogic.feature.create({
				id: 'comp-sewerFolk-b',
				name: 'Перевага мешканця стоків',
				description: 'Ви автоматично можете повноцінно лазити або плавати (за вашим вибором) під час руху й ніколи не губитесь під землею. Крім того, перебуваючи в місті зі стоками, ви та ваші супутники можете переміщатися непомічено, згідно з рішенням Директора.'
			}),
			FactoryLogic.feature.createDamageModifier({
				id: 'comp-sewerFolk-d',
				modifiers: [
					FactoryLogic.damageModifier.create({ damageType: DamageType.Poison, modifierType: DamageModifierType.Weakness, value: 5 })
				]
			})
		]
	};

	static shadowBorn: Complication = {
		id: 'comp-shadowBorn',
		name: 'Народжений у тіні',
		description: 'Ви народилися в сутінковій землі, якою править Королева Тіней, і її темрява просочилася у ваші кістки.',
		features: [
			FactoryLogic.feature.create({
				id: 'comp-shadowBorn-b',
				name: 'Перевага народженого у тіні',
				description: 'Кожного разу, коли ви починаєте свій хід у стані прихованості, ви отримуєте 1 імпульс.'
			}),
			FactoryLogic.feature.createDamageModifier({
				id: 'comp-shadowBorn-d',
				modifiers: [
					FactoryLogic.damageModifier.create({ damageType: DamageType.Holy, modifierType: DamageModifierType.Weakness, value: 5 })
				]
			})
		]
	};

	static sharedSpirit: Complication = {
		id: 'comp-sharedSpirit',
		name: 'Поділений дух',
		description: 'Надприродний дух ділить ваше тіло з вами; кожен керує тілом по черзі. Ви та дух маєте спільні короткострокові цілі та однаково добре працюєте з товаришами, хоча ваші особистості, манери й довгострокові прагнення можуть відрізнятися.',
		features: [
			FactoryLogic.feature.create({
				id: 'comp-sharedSpirit-b',
				name: 'Перевага: Поділений дух',
				description: 'На початку кожного дня киньте d6. На 1–4 — ви контролюєте своє тіло. На 5–6 — дух. За доброї згоди між вами ви можете щодня вибирати, хто контролює тіло. Оберіть три свої навички: ви можете використовувати їх лише тоді, коли контролюєте тіло. Потім оберіть три інші навички, які ви маєте й можете використовувати лише тоді, коли тіло контролює дух.'
			})
		]
	};

	static shatteredLegacy: Complication = {
		id: 'comp-shatteredLegacy',
		name: 'Розбитий спадок',
		description: 'Ви — спадкоємець могутнього надприродного скарбу, що зберігався у вашій сімʼї поколіннями. Проблема в тому, що скарб розбитий. Якийсь ваш пращур пошкодив його, рятуючи світ. А можливо, він спіткнувся й розбив його об камінь. У будь-якому разі ваше завдання — відновити його.',
		features: [
			FactoryLogic.feature.createLanguageChoice({
				id: 'comp-shatteredLegacy-lang'
			}),
			FactoryLogic.feature.createItemChoice({
				id: 'comp-shatteredLegacy-b',
				name: 'Перевага: Розбитий спадок',
				description: 'Ви отримуєте один рівневий скарб на ваш вибір.',
				types: [ItemType.LeveledArmor, ItemType.LeveledImplement, ItemType.LeveledWeapon, ItemType.Leveled]
			}),
			FactoryLogic.feature.create({
				id: 'comp-shatteredLegacy-d',
				name: 'Недолік: Розбитий спадок',
				description: 'Обраний рівневий скарб зламаний і повністю не діє. Щоб його відновити, вам потрібно завершити проєкт «Створити скарб» для цього предмета. Мета проєкту становить половину від вартості створення такого предмета, і у вас уже є потрібне джерело проєкту. Вам доведеться знайти будь-які необхідні передумови для предмета.'
			})
		]
	};

	static shipwrecked: Complication = {
		id: 'comp-shipwrecked',
		name: 'Потопельник',
		description: 'Ви — єдиний вцілілий після корабельної аварії, яка залишила вас на віддаленому і негостинному острові на роки. Боротьба за виживання дала вам розуміння природного світу, але відчужила вас від того, ким ви були раніше.',
		features: [
			FactoryLogic.feature.createSkillChoice({
				id: 'comp-shipwrecked-b',
				name: 'Перевага: Потопельник',
				listOptions: [SkillList.Exploration],
				count: 2
			}),
			FactoryLogic.feature.create({
				id: 'comp-shipwrecked-d',
				name: 'Недолік: Потопельник',
				description: 'Ви забули одну мову на свій вибір.'
			})
		]
	};

	static siblingsShield: Complication = {
		id: 'comp-siblingsShield',
		name: 'Щит брата/сестри',
		description: 'Вас доручили доставити церемоніальний щит вашому старшому братові чи сестрі, відомому воїну, за їхні роки служби. Коли ви дісталися до їхнього двору, ви знайшли їх мертвими на порозі з мечем у спині. Щоб дізнатися, хто й навіщо це зробив, ви вирішили взяти на себе їхню роль. Пройде час, перш ніж ви досягнете їхньої слави.',
		features: [
			FactoryLogic.feature.create({
				id: 'comp-siblingsShield-b',
				name: 'Перевага: Щит брата/сестри',
				description: 'Поки ви носите щит вашого брата/сестри на спині, вас неможливо фланкувати.'
			}),
			FactoryLogic.feature.create({
				id: 'comp-siblingsShield-d',
				name: 'Недолік: Щит брата/сестри',
				description: 'Вас мучать видіння померлого брата чи сестри вночі. Коли ви відпочиваєте, зробіть тест Інтуїції без можливості використати навичку. За результату 1-ї або 2-ї категорії ви отримуєте на 1 менше відновлення (Recoveries), ніж зазвичай, після завершення відпочинку.'
			})
		]
	};

	static silentSentinel: Complication = {
		id: 'comp-silentSentinel',
		name: 'Тихий сторож',
		description: 'Вас навчала група шпигунів, які психічно вдихнули тишу у ваші кроки та посилили вашу здатність чути далекі шепоти. Але підвищений слух має неприємні побічні ефекти.',
		features: [
			FactoryLogic.feature.createSkillChoice({
				id: 'comp-silentSentinel-skill1',
				count: 2,
				selected: ['Підслуховування', 'Крадіжка']
			}),
			FactoryLogic.feature.createSkillChoice({
				id: 'comp-silentSentinel-skill3',
				listOptions: [SkillList.Lore]
			}),
			FactoryLogic.feature.create({
				id: 'comp-silentSentinel-b',
				name: 'Перевага: Тихий сторож',
				description: 'Ви можете телепатично спілкуватися з будь-якою істотою за умови, що вона розділяє з вами мову і ви можете спостерігати одна одну. Істота, з якою ви спілкуєтеся таким чином, може відповісти телепатично за власним бажанням.'
			}),
			FactoryLogic.feature.create({
				id: 'comp-silentSentinel-d',
				name: 'Недолік: Тихий сторож',
				description: 'Коли ви отримуєте звукову шкоду, ви приголомшені до кінця вашого наступного ходу.'
			}),
			FactoryLogic.feature.createDamageModifier({
				id: 'comp-silentSentinel-mod',
				modifiers: [
					FactoryLogic.damageModifier.create({ damageType: DamageType.Sonic, modifierType: DamageModifierType.Weakness, value: 5 })
				]
			})
		]
	};

	static slightCaseOfLycanthropy: Complication = {
		id: 'comp-slightCaseOfLycanthropy',
		name: 'Слабка форма лікантропії',
		description: `
	Можливо, вас кусали в дитинстві, або це сімейне прокляття. У будь-якому разі у вас є недуга, про яку краще не говорити вголос, аби не привернути до себе факели й вила.

	Примітка: буревійні фурії не можуть обирати це ускладнення.`,
		features: [
			FactoryLogic.feature.create({
				id: 'comp-slightCaseOfLycanthropy-b',
				name: 'Перевага: Слабка форма лікантропії',
				description: 'Коли ви виснажуєте або вбиваєте недружинну істоту, ви отримуєте 1 приплив (surge).'
			}),
			FactoryLogic.feature.create({
				id: 'comp-slightCaseOfLycanthropy-d',
				name: 'Недолік: Слабка форма лікантропії',
				description: 'На початку кожного вашого ходу, якщо у вас пʼять або більше припливів — або один або більше припливів під місячним світлом — ви втрачаєте всі припливи і стаєте вовкоподібним гібридом до кінця ходу. У цій формі ви маєте свої звичні характеристики, але, якщо це можливо, повинні виконати вільний удар у ближньому бою проти найближчої істоти. Ви можете зрушити до неї на відстань до вашої швидкості. Якщо союзники та вороги однаково близько, ви атакуєте союзника.'
			}),
			FactoryLogic.feature.create({
				id: 'comp-slightCaseOfLycanthropy-s',
				name: 'Особливість',
				description: 'Ви не можете обрати це ускладнення, якщо ви фурія з первісним аспектом stormwight.'
			})
		]
	};

	static stolenFace: Complication = {
		id: 'comp-stolenFace',
		name: 'Вкрадене обличчя',
		description: 'Зла фея наслала на вас порчу, залишивши порожнє обличчя замість звичного. Хоч ви й можете імітувати риси інших людей, вам хочеться повернути своє власне.',
		features: [
			FactoryLogic.feature.create({
				id: 'comp-stolenFace-b',
				name: 'Перевага: Вкрадене обличчя',
				description: 'Ви можете витратити 5 хвилин без перерви, щоб переставити риси обличчя й схожіти на іншу істоту вашого походження, яку ви спостерігали раніше. Ви маєте подвійний бонус на тести, пов’язані з імітацією тієї істоти або маскуванням особи. Ви не можете змінювати зачіску чи інші не‑обличчеві риси.'
			}),
			FactoryLogic.feature.create({
				id: 'comp-stolenFace-d',
				name: 'Недолік: Вкрадене обличчя',
				description: 'Коли ви отримуєте пошкодження, ваше обличчя стає порожнім — без очей, носа, рота чи вух. Це не впливає на ваші відчуття або здатність говорити. Обличчя не повертається, поки ви не використаєте перевагу цього ускладнення, щоб відновити його.'
			})
		]
	};

	static strangeInheritance: Complication = {
		id: 'comp-strangeInheritance',
		name: 'Дивна спадщина',
		description: 'Ваші брати чи сестри отримали гроші чи землю, а ви — дивний, на перший погляд марний прикрас, супроводжуваний порадою, що, можливо, ви не для тихого звичайного життя.',
		features: [
			FactoryLogic.feature.create({
				id: 'comp-strangeInheritance-b',
				name: 'Перевага: Дивна спадщина',
				description: 'Ви отримуєте дещо не повністю діючий другорядний прикрас за вибором Директора. Цей прикрас функціонує лише тоді, коли сума вашого рівня та перемог (Victories) становить 5 або більше. Ви не дізнаєтеся про його властивості, поки вперше не активуєте його.'
			}),
			FactoryLogic.feature.create({
				id: 'comp-strangeInheritance-d',
				name: 'Недолік: Дивна спадщина',
				description: 'За відсутності іншої спадщини у вас накопичилися борги. Першого разу, коли ваше багатство (Wealth) перевищить 1, ви втрачаєте 1 одиницю багатства.'
			})
		]
	};

	static strippedOfRank: Complication = {
		id: 'comp-strippedOfRank',
		name: 'Позбавлений рангу',
		description: 'Вас навчали як офіцера, але ви більше не служите. Чи ви втекли з битви, чи були позбавлені честі, чи втекли з лихої армії — тепер ви йдете своїм шляхом, але військова підготовка ніколи не покине вас.',
		features: [
			FactoryLogic.feature.createAbility({
				ability: FactoryLogic.createAbility({
					id: 'comp-strippedOfRank-b',
					name: 'Віддати наказ',
					description: '«Рухайтесь або загиньте, люди.»',
					type: FactoryLogic.type.createMain(),
					keywords: [AbilityKeyword.Ranged],
					distance: [FactoryLogic.distance.createRanged(10)],
					target: 'Один союзник',
					sections: [
						FactoryLogic.createAbilitySectionText('**Ефект** Ціль може використати тригерну дію, щоб виконати головну дію, маневр або рух.'),
						FactoryLogic.createAbilitySectionText('**Особливість** Якщо у вас є тактична здатність Strike Now, ціль може використати безкоштовну тригерну дію замість звичайної тригерної дії, щоб отримати перевагу цієї здібності.')
					]
				})
			}),
			FactoryLogic.feature.create({
				id: 'comp-strippedOfRank-d',
				name: 'Недолік: Позбавлений рангу',
				description: 'Замість того, щоб приваблювати послідовників на 3, 6, 9 і 12 рівнях Renown, ви можете приваблювати їх лише при досягненні 4, 8, 12 і 16 Renown.'
			})
		]
	};

	static thrillSeeker: Complication = {
		id: 'comp-thrillSeeker',
		name: 'Шукач ризику',
		description: 'Ви живете для небезпеки. У бою чи в повсякденному ризику ви можете перевищувати свої звичні межі — і коли спробуєте це, бажатимете ще.',
		features: [
			FactoryLogic.feature.create({
				id: 'comp-thrillSeeker-b',
				name: 'Перевага: Шукач ризику',
				description: 'Кожного разу, коли партія досягає 2, 4 або 6 перемог (Victories), ви приносите партії героїчний жетон.'
			}),
			FactoryLogic.feature.create({
				id: 'comp-thrillSeeker-d',
				name: 'Недолік: Шукач ризику',
				description: 'На початку нової ігрової сесії партія не отримує героїчного жетона за вашого персонажа.'
			})
		]
	};

	static vampireSire: Complication = {
		id: 'comp-vampireSire',
		name: 'Вампір-пращур',
		description: 'Вас вкусив вампір. Ви ще не мертвий — принаймні поки що ні — але зв’язок із вашим вампірним пращуром наповнює вас потягами, які ви боретеся контролювати.',
		features: [
			FactoryLogic.feature.create({
				id: 'comp-vampireSire-b',
				name: 'Перевага: Вампір-пращур',
				description: 'Коли ви робите вільний удар у ближньому бою проти сусідньої істоти, ви можете кусати її. Якщо ви отримуєте результат 3‑го рівня на цьому вільному ударі, ви отримуєте тимчасову Витривалість (Stamina), рівну заподіяній шкоді. Якщо її не втрачено раніше, ця тимчасова Витривалість триває до кінця вашого наступного відпочинку.'
			}),
			FactoryLogic.feature.create({
				id: 'comp-vampireSire-d',
				name: 'Недолік: Вампір-пращур',
				description: 'Поки ви маєте тимчасову Витривалість від цього ускладнення, у вас з’являються видимі ікла, ви отримуєте шкоду (bane) на тести Presence при взаємодії з гуманоїдами, і ваш вампірний пращур може відчувати ваше місцезнаходження.'
			})
		]
	};

	static hearsVoices: Complication = {
		id: 'comp-hearsVoices',
		name: 'Голос у голові',
		description: 'Іноді ви чуєте голос у своїй голові, що дає вам накази або поради. Ви не знаєте, хто це і чому голос звертається до вас, але коли ви слідували порадам, вони зазвичай виявлялися слушними.',
		features: [
			FactoryLogic.feature.create({
				id: 'comp-hearsVoices-b',
				name: 'Перевага: Голос у голові',
				description: 'Директор повідомляє, коли ви чуєте голос. Голос, здається, обізнаний про ваше оточення, і його поради зазвичай загальні, але корисні. Колись його мотивації можуть відрізнятися від ваших, але наразі він, здається, прагне вашого виживання.'
			}),
			FactoryLogic.feature.create({
				id: 'comp-hearsVoices-d',
				name: 'Недолік: Голос у голові',
				description: 'Згодом голос може виявити, що він хоче від вас чогось, чого ви не захочете надати. Якщо голос буде незадоволений вами, він може перервати ваш відпочинок під час ресайту, змусивши вас отримати на 2 менше відновлень (Recoveries), ніж зазвичай.'
			})
		]
	};

	static vowOfDuty: Complication = {
		id: 'comp-vowOfDuty',
		name: 'Клятва служби',
		description: 'Ви присяглися організації. Організація — ваша опора, і доки ваша віра в неї непохитна, ви непохитні.',
		features: [
			FactoryLogic.feature.createBonus({
				id: 'comp-vowOfDuty-b',
				field: FeatureField.Stability,
				value: 1
			}),
			FactoryLogic.feature.create({
				id: 'comp-vowOfDuty-d',
				name: 'Недолік: Клятва служби',
				description: 'Якщо ви змушені порушити накази вашої організації, ваша стабільність стає 0, поки ваші сумніви не буде вирішено або ви не знайдете нову організацію для присяги.'
			})
		]
	};

	static vowOfHonesty: Complication = {
		id: 'comp-vowOfHonesty',
		name: 'Клятва чесності',
		description: 'Вас виховали за суворими моральними нормами. Ви не можете брехати.',
		features: [
			FactoryLogic.feature.create({
				id: 'comp-vowOfHonesty-b',
				name: 'Перевага: Клятва чесності',
				description: 'Якщо істота нижчого рівня, ніж ви, ви автоматично знаєте, коли вона бреше, хоча не завжди знаєте справжню правду за її брехнею. Додатково, ви маєте подвійний бонус на будь‑який тест переконання щодо конкретного факту.'
			}),
			FactoryLogic.feature.create({
				id: 'comp-vowOfHonesty-d',
				name: 'Недолік: Клятва чесності',
				description: 'Коли ви брешете, ваша честь забруднюється, і ви втрачаєте перевагу цього ускладнення. Додатково, ви отримуєте шкоду (bane) на тести, що використовують навички міжособистісної групи. Ви можете позбутися бану і повернути перевагу лише через спокутивні дії, наприклад здобувши вибачення від тієї істоти, якій ви збрехали.'
			})
		]
	};

	static wakingDreams: Complication = {
		id: 'comp-waking-dreams',
		name: 'Пробуджені сни',
		description: 'Ви розбили магічний амулет, що занурив ваш розум у дивну магію. Ця магія дала вам дар передчуття. Проте ви боретеся з контролем цього нового дару. Коли ви відпочиваєте, зробіть тест Розуму (Reason).',
		features: [
			FactoryLogic.feature.createAbility({
				ability: FactoryLogic.createAbility({
					id: 'comp-waking-dreams-ability',
					name: 'Waking Dreams',
					sections: [
						FactoryLogic.createAbilitySectionRoll(
							FactoryLogic.createPowerRoll({
								characteristic: [Characteristic.Reason],
								tier1: 'Ви отримуєте болісне видіння, фрагментарне і незбагненне. Після завершення відпочинку ви втрачаєте 1 відновлення (Recovery).',
								tier2: 'Ви бачите видіння події, що зараз відбувається у вашому світі. Воно триває лише кілька секунд, але інформація, що ви отримали, корисна.',
								tier3: 'Видіння триває 1 хвилину або більше.'
							})
						)
					]
				})
			})
		]
	};

	static warDogCollar: Complication = {
		id: 'comp-warDogCollar',
		name: 'Ошийник війнового пса',
		description: 'Ви носите нашийник вірності одного з військових псів Аякса. Вам вдалося переробити його так, що він вибухає назовні, зберігаючи вас у безпеці.',
		features: [
			FactoryLogic.feature.create({
				id: 'comp-warDogCollar-b',
				name: 'Перевага: Ошийник війнового пса',
				description: 'Навіть якщо ви самі — військовий пес, інші військові пси не можуть використати свою здатність «Постгумова промоція» на вас, поки ви носите нашийник.'
			}),
			FactoryLogic.feature.createAbility({
				ability: FactoryLogic.createAbility({
					id: 'comp-warDogCollar-ability',
					name: 'Останній відпочинок',
					description: 'Ви приводите в дію вибух у вашому переробленому нашийнику.',
					type: FactoryLogic.type.createManeuver(),
					keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
					distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 1 })],
					target: 'Кожен ворог у зоні',
					sections: [
						FactoryLogic.createAbilitySectionText('Ваш нашийник вірності детонує, завдаючи вогняної шкоди, рівної 5 плюс ваш рівень, кожній цілі. Після використання цієї здібності ви не можете застосувати її знову, поки не проведете 1 хвилину поза боєм на скидання нашийника.')
					]
				})
			}),
			FactoryLogic.feature.create({
				id: 'comp-warDogCollar-d',
				name: 'Недолік: Ошийник війнового пса',
				description: 'Щоразу, коли ви використовуєте здібність «Останній відпочинок», Режисер може витратити 3 одиниці Злобності (Malice), щоб нашийник дав збій і завдав шкоди також вам, крім звичних цілей.'
			})
		]
	};

	static warOfAssassins: Complication = {
		id: 'comp-war-of-assassins',
		name: 'Війна асасинів',
		description: 'Опинившись не в той час і не в тому місці, ви опинилися посеред конфлікту між двома ворожими гільдіями вбивць. Чи то через вибір, чи то випадково, ви допомогли одній фракції на шкоду іншій.',
		features: [
			FactoryLogic.feature.create({
				id: 'comp-war-of-assassins-b',
				name: 'Перевага: Війна асасинів',
				description: 'Здобувши прихильність фракції, якій ви допомогли, ви можете звертатися до її членів за послугами тричі. Якщо прохання розумне і в межах повноважень фракції, її члени виконають його без зайвих питань.'
			}),
			FactoryLogic.feature.create({
				id: 'comp-war-of-assassins-d',
				name: 'Недолік: Війна асасинів',
				description: 'Фракція, якій ви нанесли шкоду, ненавидить вас, і її члени охоче побачать, як ви розплатитесь за свій проступок.'
			})
		]
	};

	static ward: Complication = {
		id: 'comp-ward',
		name: 'Опікун',
		description: 'Ваша дитяча любов була монархом, і ви залишалися близькими протягом років. Коли ваш колишній коханий помер, ви присяглися присвятити своє життя вихованню їхньої дитини, радячи їй, як бути милосердним правителем.',
		features: [
			FactoryLogic.feature.create({
				id: 'comp-ward-b',
				name: 'Перевага: Опікун',
				description: 'Ви знаєте, як розмовляти з монархами, аристократами та іншими заможними лідерами. Коли ви спілкуєтесь з таким NPC під час переговорів, їхня терплячість збільшується на 1 (до максимуму 5).'
			}),
			FactoryLogic.feature.create({
				id: 'comp-ward-d',
				name: 'Недолік: Опікун',
				description: 'Ваш підопічний може бути тягарем. Коли ви відпочиваєте, киньте d10. При випаданні 1 ваш підопічний зв’язується з вами і потребує вашої допомоги під час відпочинку, змушуючи вас витратити час на його потреби замість обраної діяльності.'
			})
		]
	};

	static waterborn: Complication = {
		id: 'comp-waterborn',
		name: 'Народжений водою',
		description: 'Ви ледь не загинули в морі, але раптом почули голос. Хтось — чи щось — у воді покликало вас плисти. Океан перестав бути вашим кінцем і став ніби батьком, що подарував вам частку своєї сили. Для яких цілей — невідомо.',
		features: [
			FactoryLogic.feature.create({
				id: 'comp-waterborn-b',
				name: 'Перевага: Народжений водою',
				description: 'Ви автоматично плаваєте на повній швидкості під час руху та можете дихати під водою.'
			}),
			FactoryLogic.feature.createAbility({
				ability: FactoryLogic.createAbility({
					id: 'comp-waterborn-ability',
					name: 'Раптова хвиля',
					description: 'Ви викликаєте хвилю води, що розбиває вашого ворога.',
					type: FactoryLogic.type.createMain(),
					keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged, AbilityKeyword.Strike],
					distance: [FactoryLogic.distance.createRanged(10)],
					target: 'Одна істота або предмет',
					sections: [
						FactoryLogic.createAbilitySectionRoll(
							FactoryLogic.createPowerRoll({
								characteristic: [Characteristic.Might, Characteristic.Agility, Characteristic.Reason, Characteristic.Intuition, Characteristic.Presence],
								tier1: '2 шкоди; штовхнути або потягнути на 1',
								tier2: '5 шкоди; штовхнути або потягнути на 2',
								tier3: '7 шкоди; штовхнути або потягнути на 3'
							})
						),
						FactoryLogic.createAbilitySectionText('Ви можете відмовитися від заподіяння шкоди цією здібністю.')
					]
				})
			}),
			FactoryLogic.feature.create({
				id: 'comp-waterborn-d',
				name: 'Недолік: Народжений водою',
				description: 'Океан або істота, послана ним на пошуки, може доручити вам завдання. Якщо ви відмовитесь виконувати волю океану, він може тимчасово позбавити вас переваг цього ускладнення — включно з можливістю дихати під водою — у невдалий момент.'
			}),
			FactoryLogic.feature.createDamageModifier({
				id: 'comp-waterborn-mod',
				modifiers: [
					FactoryLogic.damageModifier.create({ damageType: DamageType.Lightning, modifierType: DamageModifierType.Weakness, value: 5 })
				]
			})
		]
	};

	static wodewalker: Complication = {
		id: 'comp-wodewalker',
		name: 'Лісохід',
		description: 'Ви майже померли в глушині, знепритомнівши від голоду й ран. Коли ви прийшли до тями, виявилося, що група зелених елементалістів врятувала ваше життя, вливши регенеративну кору дерева у ваше тіло.',
		features: [
			FactoryLogic.feature.createBonus({
				id: 'comp-wodewalker-b',
				field: FeatureField.RecoveryValue,
				valueCharacteristics: [Characteristic.Might, Characteristic.Agility, Characteristic.Reason, Characteristic.Intuition, Characteristic.Presence]
			}),
			FactoryLogic.feature.createDamageModifier({
				id: 'comp-wodewalker-d',
				modifiers: [
					FactoryLogic.damageModifier.create({ damageType: DamageType.Fire, modifierType: DamageModifierType.Weakness, value: 5 })
				]
			})
		]
	};

	static wrathfulSpirit: Complication = {
		id: 'comp-wrathfulSpirit',
		name: 'Гнівний дух',
		description: 'Ви швидко гніваєтеся і не дозволяєте образам залишатися без відповіді. У бою ви ведете себе так, ніби вас переповнює сам дух гніву. Якими б не були обставини, коли вас поранено, ви відчуваєте необхідність відповісти кровB1ю на кров.',
		features: [
			FactoryLogic.feature.create({
				id: 'comp-wrathfulSpirit-b',
				name: 'Перевага: Гнівний дух',
				description: 'Поки якась істота дражнить вас, ви отримуєте бонус до ударів по цій істоті. Додатково, ви можете витратити 1 героїчний ресурс, щоб цей бонус став подвійним.'
			}),
			FactoryLogic.feature.create({
				id: 'comp-wrathfulSpirit-d',
				name: 'Недолік: Гнівний дух',
				description: 'У бою, кожного разу, коли якась істота робить удар проти вас і ви не маєте статусу taunted, ви стаєте дражненим цією істотою до кінця вашого наступного ходу. Додатково, у розмові чи під час переговорів коли вас образять, ви маєте або витратити відновлення (Recovery), або відчути примус відповісти образою.'
			})
		]
	};

	static wronglyImprisoned: Complication = {
		id: 'comp-wronglyImprisoned',
		name: 'Несправедливо увʼязнений',
		description: 'Ви провели багато років у вʼязниці за злочин, якого не вчиняли. Під час довгих годин самотнього увʼязнення ви відточували свої навички й перечитували імена тих, хто вас підставив. Колись ви отримаєте свою помсту.',
		features: [
			FactoryLogic.feature.createSkillChoice({
				id: 'comp-wronglyImprisoned-b',
				listOptions: [SkillList.Crafting, SkillList.Exploration, SkillList.Intrigue, SkillList.Lore],
				count: 2
			}),
			FactoryLogic.feature.create({
				id: 'comp-wronglyImprisoned-d',
				name: 'Недолік: Несправедливо увʼязнений',
				description: 'Ваше здоровʼя постраждало в тюрмі. Коли ви запихаєтеся (winded), у вас зʼявляється сильний кашель, через який ви не можете ховатися або підкрадатися.'
			})
		]
	};
}
