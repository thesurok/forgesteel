import { AttitudeType } from '@/enums/attitude-type';
import { Negotiation } from '@/models/negotiation';
import { NegotiationTrait } from '@/enums/negotiation-trait';

export class NegotiationData {
	static banditChief: Negotiation = {
		id: 'negotiation-bandit-chief',
		name: 'Ватажок бандитів',
		description: `
*Ватажок бандитів - задирака й хвалько, і більшість таких персонажів веде переговори залякуванням та бундючністю, перш ніж помʼякшати.*

Архетип ватажка бандитів можна використати й для будь-якого іншого місцевого великого цабе, наприклад привілейованої дитини місцевого лорда, зарозумілого чемпіона трактирного дартсу чи будь-якого іншого забіяки.`,
		attitude: AttitudeType.Neutral,
		impression: 1,
		interest: 2,
		patience: 3,
		motivations: [
			{
				trait: NegotiationTrait.Freedom,
				description: 'Ніхто не вказує мені, що робити, якщо хоче й далі носити голову на плечах. І ніхто не вказує моїм громилам, що робити, окрім МЕНЕ!'
			},
			{
				trait: NegotiationTrait.Greed,
				description: 'Золото! Обожнюю відчуття блискучих монет, що дзенькають і пересипаються між моїми пальцями. Я так і не знайшов нічого, на що витрачати його було б приємніше, ніж просто *мати* золото.'
			},
			{
				trait: NegotiationTrait.Power,
				description: 'Мені потрібні міцніше сховище, більше громил і більша частка здобичі. Добудьте мені це, і я зроблю за вас брудну роботу.'
			},
			{
				trait: NegotiationTrait.Revelry,
				description: 'Якщо після нальоту не напитися, то навіщо взагалі було влаштовувати наліт?'
			}
		],
		pitfalls: [
			{
				trait: NegotiationTrait.HigherAuthority,
				description: 'За наказом барона? Можете лишити собі ваші пишні титули й землі. Тут накази віддаю я!'
			},
			{
				trait: NegotiationTrait.Justice,
				description: 'Лише слабаки скиглять про справедливість. Сильні встановлюють власні правила.'
			},
			{
				trait: NegotiationTrait.Legacy,
				description: 'Слухай, мені байдуже, що буде, коли мене не стане. Я хочу, щоб мої люди скандували моє імʼя зараз, а не через сто років.'
			},
			{
				trait: NegotiationTrait.Peace,
				description: 'У мирний час піднімеш не свою срібну монету, і шериф уже стукає в двері. А у війну цілі каравани зникають, і ніхто й оком не моргне. Дайте мені війну.'
			}
		],
		languages: [],
		outcomes: ['', '', '', '', '', '']
	};

	static knight: Negotiation = {
		id: 'negotiation-knight',
		name: 'Лицар',
		description: `
*Хоч лицар не завжди є ідеалістом, він відданий слуга свого сюзерена й прискіпливий до обовʼязку. Лицар знає своє місце в упорядкованому суспільстві й вважає, що всі інші теж мають знати своє.*

Архетип лицаря можна використати й для будь-якої іншої місцевої постаті влади, наприклад сільського старости, офіцера міської варти чи професора академії.`,
		attitude: AttitudeType.Neutral,
		impression: 2,
		interest: 2,
		patience: 3,
		motivations: [
			{
				trait: NegotiationTrait.HigherAuthority,
				description: 'Це не мого рівня питання. Якщо моє начальство це схвалить, я також.'
			},
			{
				trait: NegotiationTrait.Justice,
				description: 'Дякую, що звернули на це мою увагу. Згоден, це треба виправити. Питання лише в тому, як саме.'
			},
			{
				trait: NegotiationTrait.Peace,
				description: 'Такі, як ми, воюють, щоб прості люди не мусили. Якщо доведеться, я знову вихоплю меч, аби зберегти мир.'
			},
			{
				trait: NegotiationTrait.Revelry,
				description: 'Кожну угоду слід скріпити тостом. Ура!'
			}
		],
		pitfalls: [
			{
				trait: NegotiationTrait.Benevolence,
				description: 'Цим людям потрібна не милостиня, а лад. Нехай ідуть до ратуші, і за чесний день праці матимуть повний шлунок.'
			},
			{
				trait: NegotiationTrait.Freedom,
				description: 'Ніхто з нас не вільний, від найнижчого слуги й вище. Навіть монарх має обовʼязок перед своїм народом.'
			},
			{
				trait: NegotiationTrait.Power,
				description: 'Моя влада походить від законної присяги, а не від якоїсь брудної таємної оборудки.'
			},
			{
				trait: NegotiationTrait.Vengeance,
				description: 'Я вірю в закон, а не в помсту, і закон вершать вищі суди. Я лише службовець.'
			}
		],
		languages: [],
		outcomes: ['', '', '', '', '', '']
	};

	static guildmaster: Negotiation = {
		id: 'negotiation-guildmaster',
		name: 'Гільдмайстер',
		description: `
*Гільдмайстер знає ціну монеті, але розуміє, що знання - і внутрішня інформація, і торгові таємниці - є найкоштовнішою валютою. Відповідно він і торгується.*

Архетип гільдмайстра можна використати й для будь-якого іншого місцевого торговця інформацією, наприклад лідера культу, гаги чи шпигуна.`,
		attitude: AttitudeType.Neutral,
		impression: 3,
		interest: 2,
		patience: 3,
		motivations: [
			{
				trait: NegotiationTrait.Benevolence,
				description: 'Люди не здатні подбати про себе. Хтось же мусить доглядати за ними, бідолашними ягнятами.'
			},
			{
				trait: NegotiationTrait.Discovery,
				description: 'Було б вкрай неетично з вашого боку показати мені ті схеми, які ви дістали в конкуруючої гільдії. І так само було б вкрай неетично з мого боку підсунути вам цей мішок золота.'
			},
			{
				trait: NegotiationTrait.Power,
				description: 'Хто, по-вашому, правитиме в наступну епоху? Шляхта? Пф! Вони досі міряють багатство коровами. Хто контролює інформацію, той править світом, і я маю намір зробити так, щоб це були ми.'
			},
			{
				trait: NegotiationTrait.Protection,
				description: 'У нас є суперники - голодні пройдисвіти, які не зупиняться ні перед чим. Якщо я хочу захистити свою гільдію, то мушу вдарити по них першим.'
			}
		],
		pitfalls: [
			{
				trait: NegotiationTrait.HigherAuthority,
				description: 'Моя вірність належить гільдії, а не бургомістру, не королю і навіть не самому Ajax. Але не кажіть їм, що це я сказав.'
			},
			{
				trait: NegotiationTrait.Justice,
				description: 'Ми тут перекроюємо світ. Авжеж, хтось, хто не здатен пристосуватися, опиниться на дні. Але чому хтось має винити нас за це?'
			},
			{
				trait: NegotiationTrait.Peace,
				description: 'Конфлікт сам по собі не є злом. Він рухає поступ. Головне - не опинитися серед тих, хто програв.'
			},
			{
				trait: NegotiationTrait.Revelry,
				description: 'У мене немає часу на ці дурощі. Приходьте знову, коли матимете щось справді цінне.'
			}
		],
		languages: [],
		outcomes: ['', '', '', '', '', '']
	};

	static warlord: Negotiation = {
		id: 'negotiation-warlord',
		name: 'Воєначальник',
		description: `
*Воєначальник підняв своє знамено, і війська стікаються під нього. Дехто каже, що воєначальники ніколи не ведуть переговорів, але це неправда. Вони охоче вислухають умови капітуляції.*

Архетип воєначальника можна використати й для будь-якої іншої загрози місцевого рівня, наприклад вампіра, хобгоблінського крововладця чи бунтівного шляхтича.`,
		attitude: AttitudeType.Neutral,
		impression: 4,
		interest: 2,
		patience: 3,
		motivations: [
			{
				trait: NegotiationTrait.Freedom,
				description: 'Я не платитиму жодної монети якомусь слабаку-сюзерену за привілей слухати накази. Я підняв свій стяг. Хай спробує хтось його зірвати.'
			},
			{
				trait: NegotiationTrait.Legacy,
				description: 'Бачили там ту молоду капітанку, що вселяє своїм воїнам страх перед богами? Це моя дитина, але свій титул вона заслужила. Одного дня все це стане її.'
			},
			{
				trait: NegotiationTrait.Peace,
				description: 'Погляньте навколо. Усюди, куди не глянь, - слабкість, гнилизна, марнотратство. Мир - шляхетна мета, але миру не буде, доки не зметуть нинішній режим.'
			},
			{
				trait: NegotiationTrait.Vengeance,
				description: 'Ви страждали від рук того проклятого лиходія так само, як і я? Якщо так, то я із задоволенням назву вас другом.'
			}
		],
		pitfalls: [
			{
				trait: NegotiationTrait.Benevolence,
				description: 'Якщо вам потрібна милостиня, повертайтеся на вулицю простягати руку. Від мене ви нічого не отримаєте.'
			},
			{
				trait: NegotiationTrait.Discovery,
				description: 'І яке це має до мене відношення? Я солдат, а не вчений.'
			},
			{
				trait: NegotiationTrait.Justice,
				description: 'Ти смієш називати мене несправедливим? Закони тут встановлюю я. Справедливість - це те, що я дарую або відбираю!'
			},
			{
				trait: NegotiationTrait.Protection,
				description: 'Я не якийсь шмаркач-гузій, що благає про захист, і мої війська теж. Хто просить безпеки, той її не заслуговує.'
			}
		],
		languages: [],
		outcomes: ['', '', '', '', '', '']
	};

	static burgomaster: Negotiation = {
		id: 'negotiation-burgomaster',
		name: 'Бургомістр',
		description: `
*Сила бургомістра походить від його виборців, і здебільшого він прагне служити своєму народові. Більшість бургомістрів - досвідчені перемовники, які ніколи не поступаються більше, ніж мають намір.*

Архетип бургомістра можна використати й для будь-якого іншого місцевого правителя, наприклад барона, губернатора чи капітана варти у великому місті.`,
		attitude: AttitudeType.Neutral,
		impression: 5,
		interest: 2,
		patience: 3,
		motivations: [
			{
				trait: NegotiationTrait.Greed,
				description: 'Говоріть далі. Я певен, ми зможемо дійти згоди, вигідної всім сторонам. Приплив піднімає всі човни і все таке.'
			},
			{
				trait: NegotiationTrait.HigherAuthority,
				description: 'Ніхто не зможе дорікнути мені нелояльністю. Що вимагає мій обовʼязок, те я й роблю, але давайте визначимо найрозсудливіший спосіб це зробити.'
			},
			{
				trait: NegotiationTrait.Justice,
				description: 'Верховенство закону мусить бути збережене. Якщо у вас є докази злочинів, винні мають бути покарані.'
			},
			{
				trait: NegotiationTrait.Protection,
				description: 'Слабкі, беззахисні - вони покладаються на мене. І, меншою мірою, на свідомих громадян-героїв, таких як ви. Разом ми подбаємо, щоб люди не зазнали шкоди.'
			}
		],
		pitfalls: [
			{
				trait: NegotiationTrait.Discovery,
				description: 'Повірте мені. Нічого доброго не вийде, якщо ворушити саме цей вулик.'
			},
			{
				trait: NegotiationTrait.Freedom,
				description: 'Свобода, кажете? А що далі, свобода від податків? Вільними народжуються хіба що боги, та й то лише дурні вірять у таке.'
			},
			{
				trait: NegotiationTrait.Revelry,
				description: 'Приберіть ту пляшку. Я публічна особа! Не можу, щоб мене бачили за гульнею, витівками й бозна-чим іще.'
			},
			{
				trait: NegotiationTrait.Vengeance,
				description: 'У політиці потрібно мати коротку памʼять. Сьогоднішній ворог завтра може стати союзником. Не варто сприймати все особисто.'
			}
		],
		languages: [],
		outcomes: ['', '', '', '', '', '']
	};

	static virtuoso: Negotiation = {
		id: 'negotiation-virtuoso',
		name: 'Віртуоз',
		description: `
*Віртуоз - найвидатніший музикант у цих краях, можливо, уславлений оперний співак або композитор. Якщо вам потрібно прославити якусь справу або заплямувати чиєсь імʼя, ви звертаєтеся до нього.*

Архетип віртуоза можна використати й для будь-якої іншої місцевої знаменитості, наприклад майстра-ремісника, натхненного митця, уславленого гладіатора чи чемпіона світу.`,
		attitude: AttitudeType.Neutral,
		impression: 6,
		interest: 2,
		patience: 3,
		motivations: [
			{
				trait: NegotiationTrait.Freedom,
				description: 'Я йду за своєю музою, моєю єдиною володаркою. Хто посміє закувати мистецтво в кайдани?'
			},
			{
				trait: NegotiationTrait.Legacy,
				description: 'Замки впадуть. Імперії зникнуть. Але якщо я створю хоч один твір, гідний мого таланту, моє імʼя житиме вічно.'
			},
			{
				trait: NegotiationTrait.Peace,
				description: 'Під час війни бронзові статуї переплавляють на обладунки. Гроші марнують на балісти, а не на балади. Війна - це злочин проти бога мистецтва.'
			},
			{
				trait: NegotiationTrait.Revelry,
				description: 'Так, цієї ночі святкуймо! Натхнення ласкаво дивиться на тих, хто пʼє життя до дна.'
			}
		],
		pitfalls: [
			{
				trait: NegotiationTrait.Greed,
				description: 'Ви пропонуєте мені гроші? Гроші самі приходять до геніїв - це наше по праву. Я можу отримати їх від тисячі шанувальників.'
			},
			{
				trait: NegotiationTrait.Power,
				description: 'У мене немає амбіцій далі цього оперного театру. Залишити це місце навіть заради палацу чи трону... для мене це було б вигнанням.'
			},
			{
				trait: NegotiationTrait.Protection,
				description: 'Я не боюся. Бог музики подбає про своїх вірних.'
			},
			{
				trait: NegotiationTrait.Vengeance,
				description: 'Можливо, є ті, хто мене ненавидить: ті, хто гадає, що я стою в них на шляху, або чиї звершення я затьмарив. Але я не ненавиджу нікого й нікому не заздрю.'
			}
		],
		languages: [],
		outcomes: ['', '', '', '', '', '']
	};

	static highPriest: Negotiation = {
		id: 'negotiation-high-priest',
		name: 'Верховний жрець',
		description: `
*Верховний жрець може бути високопоставленим служителем своєї віри, але, як він швидко нагадує, це не дає йому свободи діяти на власний розсуд. Накази його божества мають бути понад усе.*

Архетип верховного жерця можна використати й для будь-якого іншого носія національної влади, наприклад графа, судді чи генерала.`,
		attitude: AttitudeType.Neutral,
		impression: 7,
		interest: 2,
		patience: 3,
		motivations: [
			{
				trait: NegotiationTrait.Benevolence,
				description: 'У цьому ми згодні. Якщо ця загроза наражає людей на небезпеку, ми мусимо прийти їм на допомогу.'
			},
			{
				trait: NegotiationTrait.Discovery,
				description: 'Чому ж ні... мені було б цікаво уважніше поглянути на цей документ. Навряд чи може зашкодити знання про пастки й небезпеки світу.'
			},
			{
				trait: NegotiationTrait.HigherAuthority,
				description: 'Авжеж, мій призначений обовʼязок - служити всім людям, чи то моєму божеству, моєму сюзерену, чи найбіднішому, хто волає про допомогу.'
			},
			{
				trait: NegotiationTrait.Justice,
				description: 'Будьте певні: добрі отримають заслужену нагороду, а лихі будуть покарані. Я про це подбаю.'
			}
		],
		pitfalls: [
			{
				trait: NegotiationTrait.Greed,
				description: 'Не пропонуйте це мені. Пожертвуйте на віру, якщо вам воно не потрібне.'
			},
			{
				trait: NegotiationTrait.Legacy,
				description: 'Я? Я ніхто. Які б добрі справи я не здійснив, усі вони на славу мого божества, а не мою.'
			},
			{
				trait: NegotiationTrait.Power,
				description: 'Моїх нинішніх обовʼязків більш ніж достатньо. Я не прагну більшого.'
			},
			{
				trait: NegotiationTrait.Revelry,
				description: 'Сором вам! Ви вихваляєте зло й очікуєте, що я до вас приєднаюся?'
			}
		],
		languages: [],
		outcomes: ['', '', '', '', '', '']
	};

	static duke: Negotiation = {
		id: 'negotiation-duke',
		name: 'Герцог',
		description: `
*Коли герцог жестом запрошує вас до свого карткового столу, шпигуни шепочуть йому на вухо. Герцог ніколи не сідає за гру й не вступає в переговори, якщо не вважає, що має на руках козир.*

Архетип герцога можна використати й для будь-якого іншого королівського радника, наприклад архімага, шпигмейстера, візира чи навіть улюбленого блазня.`,
		attitude: AttitudeType.Neutral,
		impression: 8,
		interest: 2,
		patience: 3,
		motivations: [
			{
				trait: NegotiationTrait.Discovery,
				description: 'Мої агенти принесли мені чимало шепотів, але це для мене новина. Хто ще про це знає?'
			},
			{
				trait: NegotiationTrait.HigherAuthority,
				description: 'Я мушу чинити так, як наказує мій сюзерен. Тож скажіть, як саме ви прагнете послужити йому також.'
			},
			{
				trait: NegotiationTrait.Peace,
				description: 'Нам потрібна стабільність. Я пожертвую будь-чим - і будь-ким - заради цього.'
			},
			{
				trait: NegotiationTrait.Vengeance,
				description: 'Є одна особа - я не вимовлятиму її імені - яка вважає, ніби я забув, що вона мені зробила. Одного дня вона дізнається, що в мене довга памʼять.'
			}
		],
		pitfalls: [
			{
				trait: NegotiationTrait.Benevolence,
				description: 'Невже ви думаєте, що я дію з любові до свого народу? Половина з них нікчеми, а друга половина - лиходії. Але без них я був би герцогом Ніщо, тож мушу їх зберегти.'
			},
			{
				trait: NegotiationTrait.Greed,
				description: 'Сховайте своє золото. Я надто зайнятий, щоб його витрачати.'
			},
			{
				trait: NegotiationTrait.Justice,
				description: 'Правильно й неправильно? Немає ніякого «правильно», окрім того, що зміцнює королівство, і немає ніякого «неправильно», окрім того, що йому шкодить.'
			},
			{
				trait: NegotiationTrait.Protection,
				description: 'Мені байдуже до порятунку життів. Усі ми приречені померти. Питання лише в тому, що житиме після нас?'
			}
		],
		languages: [],
		outcomes: ['', '', '', '', '', '']
	};

	static dragon: Negotiation = {
		id: 'negotiation-dragon',
		name: 'Дракон',
		description: `
*Надзвичайна міць дракона затьмарюється хіба що його безмежними амбіціями та пихою.*

Архетип дракона можна використати й для будь-якої іншої загрози рівня королівства, наприклад вождя вогняних велетнів, претендента на трон або страхітливого синліроя Lord Syuul.`,
		attitude: AttitudeType.Neutral,
		impression: 9,
		interest: 2,
		patience: 3,
		motivations: [
			{
				trait: NegotiationTrait.Freedom,
				description: 'Так, мої амбіції надто довго були прикуті до землі. Час мені злетіти.'
			},
			{
				trait: NegotiationTrait.Greed,
				description: 'Принесіть мені данину зараз, і коли я запаную, я цього не забуду.'
			},
			{
				trait: NegotiationTrait.Protection,
				description: 'З моїм народом століттями поводилися жорстоко. Цьому кінець!'
			},
			{
				trait: NegotiationTrait.Vengeance,
				description: 'Ця земля, ці люди, їхні скарби - по праву мої. У мене їх украли!'
			}
		],
		pitfalls: [
			{
				trait: NegotiationTrait.Legacy,
				description: 'Жоден спадкоємець не переживе мене, жодна легенда не згадає моєї колишньої слави... бо я ніколи не помру!'
			},
			{
				trait: NegotiationTrait.Peace,
				description: 'Ви хочете миру? Коли у світі ще лишаються речі, які досі не мої?'
			},
			{
				trait: NegotiationTrait.Power,
				description: 'Як *ви* взагалі можете запропонувати *мені* владу?'
			},
			{
				trait: NegotiationTrait.Revelry,
				description: 'Мої насолоди так само недосяжні для вашого розуміння, як ваші - для хробака.'
			}
		],
		languages: [],
		outcomes: ['', '', '', '', '', '']
	};

	static monarch: Negotiation = {
		id: 'negotiation-monarch',
		name: 'Монарх',
		description: `
*Монарх, добрий він чи злий, звик до влади й прагне її зберегти. На благання він відгукується краще, ніж на вимоги.*

Архетип монарха можна використати й для будь-якого іншого правителя рівня королівства, наприклад тирана, архіжреця теократії чи консула республіки.`,
		attitude: AttitudeType.Neutral,
		impression: 10,
		interest: 2,
		patience: 3,
		motivations: [
			{
				trait: NegotiationTrait.Benevolence,
				description: 'Недарма мене звуть «Добрим».'
			},
			{
				trait: NegotiationTrait.Greed,
				description: 'Ваша пропозиція мене зацікавила. Правду кажучи, наша казна не така повна, як мені хотілося б.'
			},
			{
				trait: NegotiationTrait.Justice,
				description: 'А, негідники зневажають мої закони? Вони мають бути покарані!'
			},
			{
				trait: NegotiationTrait.Legacy,
				description: 'Якщо я помру, пообіцяйте мені ось що: ви служитимете моєму спадкоємцеві так само вірно, як служили мені.'
			}
		],
		pitfalls: [
			{
				trait: NegotiationTrait.Discovery,
				description: 'Тримайте свої таємниці при собі. Я монарх, а не шпигмейстер.'
			},
			{
				trait: NegotiationTrait.Freedom,
				description: 'Свобода? Дехто з моїх нелояльних підданих надто часто вживає це слово, як на мене. Сподіваюся, ви не з їхнього числа.'
			},
			{
				trait: NegotiationTrait.HigherAuthority,
				description: 'Ви смієте віддавати мені накази? Хто б вас не послав, ніколи не забувайте: тут правлю я!'
			},
			{
				trait: NegotiationTrait.Vengeance,
				description: 'Помста - захопливий спорт. На жаль, мені довелося його полишити. Тут панує політика, а не помста.'
			}
		],
		languages: [],
		outcomes: ['', '', '', '', '', '']
	};

	static lich: Negotiation = {
		id: 'negotiation-lich',
		name: 'Ліч',
		description: `
*Ліч провів століття на самоті, навчаючись і нарощуючи свою силу... але тепер час навчання минув.*

Ліч готовий вести переговори з могутніми героями, які можуть стати вірними лейтенантами - або потужними неживими слугами, якщо розмова піде не так.

Архетип ліча можна використати й для будь-якої іншої загрози, що стрясає світ, наприклад претендента на імператорський трон або володаря-вампіра Count Rhodar von Glauer.`,
		attitude: AttitudeType.Neutral,
		impression: 11,
		interest: 2,
		patience: 3,
		motivations: [
			{
				trait: NegotiationTrait.Discovery,
				description: 'Негайно дайте мені ту книгу! Ваш дотик уже оскверняє її.'
			},
			{
				trait: NegotiationTrait.Power,
				description: 'Так... так... сила! Ахахахаха! Принесіть мені цю силу, і ви будете винагороджені.'
			},
			{
				trait: NegotiationTrait.Revelry,
				description: 'Приєднуйтеся до мого двору на прийдешній бенкет! Ми пізнаємо такі розваги, яких цей світ іще не бачив.'
			},
			{
				trait: NegotiationTrait.Vengeance,
				description: 'Світ зневажав мене... вигнав мене... забув мене. Світ про це пошкодує.'
			}
		],
		pitfalls: [
			{
				trait: NegotiationTrait.Benevolence,
				description: 'Ви просите фермера пожаліти пшеницю перед жнивами?'
			},
			{
				trait: NegotiationTrait.Legacy,
				description: 'Мені байдуже, що про мене думають простолюдини. Що менше вони про мене думають, то краще - аби лише корилися моїм наказам.'
			},
			{
				trait: NegotiationTrait.Peace,
				description: 'Так, так, мир прийде... але не зараз.'
			},
			{
				trait: NegotiationTrait.Protection,
				description: 'Якщо ви так прагнете рятувати життя, то врятуйте власне, схилившись переді мною! Моїм слугам нічого не загрожуватиме.'
			}
		],
		languages: [],
		outcomes: ['', '', '', '', '', '']
	};

	static deity: Negotiation = {
		id: 'negotiation-deity',
		name: 'Божество',
		description: `
*Божество вислухає ваші молитви - і, можливо, навіть відповість на них, якщо матиме такий настрій.*

Архетип божества можна використати й для будь-якої іншої сили, що виходить за межі світу, наприклад легендарного часового дракона Cthrion Uroniziir чи страхітливого фараона Khorsekef the Infinite.`,
		attitude: AttitudeType.Neutral,
		impression: 12,
		interest: 2,
		patience: 3,
		motivations: [
			{
				trait: NegotiationTrait.Benevolence,
				description: 'Не турбуйся, адже я вже послав чемпіонів рятувати світ. Можливо, ці чемпіони... ближче, ніж ти гадаєш.'
			},
			{
				trait: NegotiationTrait.Legacy,
				description: 'Коли настане той благословенний день, усі прийдуть до мене з молитвою, і я пошлю світові свої благословення!'
			},
			{
				trait: NegotiationTrait.Power,
				description: 'Хоча в духовному царстві я всемогутній, у земних справах мої руки звʼязані. Але якщо ви діятимете за мене, я можу запропонувати трохи допомоги.'
			},
			{
				trait: NegotiationTrait.Protection,
				description: 'Май віру, дитя... нікого не забудуть і нікого не покинуть.'
			}
		],
		pitfalls: [
			{
				trait: NegotiationTrait.Discovery,
				description: 'Смертний, що ти можеш сказати мені такого, чого я не знаю?'
			},
			{
				trait: NegotiationTrait.Freedom,
				description: 'Справжня свобода полягає в служінні мені. Відмовся від своєї свободи, і я піднесу тебе високо.'
			},
			{
				trait: NegotiationTrait.Greed,
				description: 'Дурню! Ти намагаєшся запропонувати мені те, що й так належить мені?'
			},
			{
				trait: NegotiationTrait.HigherAuthority,
				description: 'Про кого ти говориш? Хто вищий за мене, хто стоїть понад мною? Хто доживе до моєї смерті, і хто вдихнув повітря раніше, ніж я дарував його? Нехай вийде вперед і назве своє імʼя!'
			}
		],
		languages: [],
		outcomes: ['', '', '', '', '', '']
	};
}
