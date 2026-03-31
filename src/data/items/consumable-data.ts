import { AbilityKeyword } from '@/enums/ability-keyword';
import { Characteristic } from '@/enums/characteristic';
import { FactoryLogic } from '@/logic/factory-logic';
import { Item } from '@/models/item';
import { ItemType } from '@/enums/item-type';

export class ConsumableData {
	// #region Echelon 1

	static blackAshDart: Item = FactoryLogic.createItem({
		id: 'item-black-ash-dart',
		name: 'Дротик чорного попелу',
		description: 'У серцевині ромбоподібного дротика міститься мерехтлива чорна ампула.',
		type: ItemType.Consumable1st,
		keywords: [AbilityKeyword.Magic],
		crafting: FactoryLogic.createProject({
			description: 'Дає 1d3 дротики, або три дротики, якщо створено тінню',
			prerequisites: 'Три ампули чорного попелу з Колегії чорного попелу',
			source: 'Тексти або перекази мовою Сзетч (Szetch)',
			characteristic: [Characteristic.Agility, Characteristic.Intuition],
			goal: 45
		}),
		effect: `
Як маневр, ви можете зробити дальній вільний удар дротиком чорного попелу. Удар завдає додатково 1 шкоди й додає такі ефекти до рівнів результату кидка сили:

* 11 або нижче: Ви можете телепортувати ціль на відстань до 2 клітинок.
* 12–16: Ви можете телепортувати ціль на відстань до 4 клітинок.
* 17+: Ви можете телепортувати ціль на відстань до 6 клітинок.`
	});

	static bloodEssenceVial: Item = FactoryLogic.createItem({
		id: 'item-blood-essence-vial',
		name: 'Ампула есенції крові',
		description: 'У крихкій скляній трубці на шарнірі закріплено рубін.',
		type: ItemType.Consumable1st,
		keywords: [AbilityKeyword.Potion, AbilityKeyword.Psionic],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Рубін, поцуплений у вампіра',
			source: 'Тексти або перекази мовою Прото-Ктолл (Proto-Ctholl)',
			characteristic: [Characteristic.Agility, Characteristic.Reason],
			goal: 45
		}),
		effect: 'Коли ви завдаєте шкоди сусідній істоті, у якої є кров, ви можете захопити життєву есенцію цілі в цю ампулу (не потребує дії). Запишіть завдану шкоду. Ви можете захопити життєву есенцію в ампулу лише один раз. Як маневр, ви випиваєте вміст ампули, щоб відновити Витривалість у розмірі половини завданої шкоди. Якщо під час пиття ви витратите 1 Героїчний ресурс, то відновите Витривалість у розмірі всієї завданої шкоди. Щойно ви випʼєте з ампули, вона розсипається на пил.'
	});

	static buzzBalm: Item = FactoryLogic.createItem({
		id: 'item-buzz-balm',
		name: 'Дзижчальний бальзам',
		description: 'Ця прохолодна помаранчева мазь потріскує й поцокує на повітрі.',
		type: ItemType.Consumable1st,
		keywords: [AbilityKeyword.Magic, AbilityKeyword.Oil],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Унція демонічного меду',
			source: 'Тексти або перекази мовою Калліак (Kalliak)',
			characteristic: [Characteristic.Reason, Characteristic.Intuition],
			goal: 45
		}),
		effect: 'Як маневр, ви втираєте бальзам у тіло й відчуваєте, як він поколює шкіру. Ви негайно завершуєте на собі стани кровотечі й ослаблення та отримуєте бонус +2 до швидкості до початку свого наступного ходу.'
	});

	static catapultDust: Item = FactoryLogic.createItem({
		id: 'item-catapult-dust',
		name: 'Катапультний пил',
		description: 'Невеликий шкіряний мішечок наповнений цим тонким блакитним порошком.',
		type: ItemType.Consumable1st,
		keywords: [AbilityKeyword.Magic],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Унція кристалу візериту',
			source: 'Тексти або перекази мовою Келіан (Caelian)',
			characteristic: [Characteristic.Reason, Characteristic.Intuition],
			goal: 45
		}),
		effect: 'Катапультний пил було розроблено як недорогу магічну облогову зброю. Як основна дія, ви висипаєте пил у сусідню вільну клітинку, заповнюючи область розміром до куба 2. На початку свого наступного ходу земля внизу цієї області з вибуховою силою рветься вгору в обраному вами напрямку. Будь-які бездоглядні предмети в області або істоти, що увійшли в неї після висипання пилу, злітають дугою завдовжки 6 + 1d6 клітинок і заввишки 3 + 1d6 клітинок.'
	});

	static giantsBloodFlame: Item = FactoryLogic.createItem({
		id: 'item-giants-blood-flame',
		name: 'Полумʼя крові велетня',
		description: 'Маленький горщик наповнений вʼязкою вохристою оливою, що пахне сіркою й паленим волоссям.',
		type: ItemType.Consumable1st,
		keywords: [AbilityKeyword.Magic, AbilityKeyword.Oil],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Одна ампула крові вогняного велетня',
			source: 'Тексти або перекази мовою Келіан (Caelian)',
			characteristic: [Characteristic.Reason, Characteristic.Intuition],
			goal: 45
		}),
		effect: `
Як маневр, ви вкриваєте зброю цією оливою й підпалюєте її. Зброя горить без упину, не ушкоджуючи сама себе, доки її не загасити маневром. Щоразу, коли ви використовуєте збройну здібність, що завдає шкоди кидком, за допомогою такої запаленої зброї, ця здібність завдає додатково 2 вогняної шкоди.

Або ж ви можете маневром кинути горщик на відстань до 5 клітинок, вкривши клітинку приземлення та всіх істот чи предмети в ній липкою легкозаймистою оливою. Якщо олива зазнає будь-якої вогняної шкоди, вона займається й безугавно завдає 5 вогняної шкоди наприкінці кожного вашого ходу всьому, що вкриває. Істота, вкрита оливою, або та, що може до неї дістатися, може використати основну дію, щоб загасити полумʼя й завершити ефект.

Будь-яка пожежа, спричинена оливою, згасає після 1 години горіння.`
	});

	static growthPotion: Item = FactoryLogic.createItem({
		id: 'item-growth-potion',
		name: 'Зілля росту',
		description: 'Ця густа зелена рідина смакує лакрицею й картоплею.',
		type: ItemType.Consumable1st,
		keywords: [AbilityKeyword.Magic, AbilityKeyword.Potion],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Пів фунта морської трави',
			source: 'Тексти або перекази мовою Келіан (Caelian)',
			characteristic: [Characteristic.Reason, Characteristic.Intuition],
			goal: 45
		}),
		effect: 'Як маневр, ви можете випити це зілля або вилити його на предмет розміру 2 чи меншого, збільшуючи розмір цілі на 1 (щонайменше до розміру 2). Якщо ціллю є ви, ваш максимум Витривалості й Стійкість подвоюються, ви отримуєте перевагу на випробування Сили, а ваші збройні здібності, що завдають шкоди кидком, отримують бонус до шкоди, що дорівнює вашому найвищому показнику характеристики. Через 3 раунди ви повертаєтеся до початкового розміру, удвічі зменшуючи поточні максимум Витривалості й Стійкість та втрачаючи інші переваги зілля. Предмети зберігають новий розмір назавжди.'
	});

	static healingPotion: Item = FactoryLogic.createItem({
		id: 'item-healing-potion',
		name: 'Цілюще зілля',
		description: 'Густа й червона, ця рідина смакує кислим пивом.',
		type: ItemType.Consumable1st,
		keywords: [AbilityKeyword.Magic, AbilityKeyword.Potion],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Унція листя костмарину',
			source: 'Тексти або перекази мовою Келіан (Caelian)',
			characteristic: [Characteristic.Reason, Characteristic.Intuition],
			goal: 45
		}),
		effect: 'Коли ви пʼєте це зілля як маневр, ви відновлюєте Витривалість, рівну вашому значенню відновлення, не витрачаючи Відновлення.'
	});

	static impsTongue: Item = FactoryLogic.createItem({
		id: 'item-imps-tongue',
		name: 'Язик імпа',
		description: 'Язик імпа висушено й законсервовано. Гидота.',
		type: ItemType.Consumable1st,
		keywords: [AbilityKeyword.Magic],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Один язик імпа',
			source: 'Тексти або перекази мовою Келіан (Caelian)',
			characteristic: [Characteristic.Reason, Characteristic.Intuition],
			goal: 45
		}),
		effect: 'Як маневр, ви кладете язик імпа на власний язик, і він відновлюється та приростає до нього. Поки він прикріплений, Язик імпа дозволяє вам говорити будь-якою мовою й розуміти будь-яку мову, якою звертаються до вас. Ця перевага закінчується за 1 годину, коли язик всмоктується у ваше тіло.'
	});

	static lachompTooth: Item = FactoryLogic.createItem({
		id: 'item-lachomp-tooth',
		name: 'Зуб лахомпа',
		description: 'Зуб завбільшки з палець із зазубреними краями щоразу ніби дряпає вашу шкіру, коли ви берете його до рук.',
		type: ItemType.Consumable1st,
		keywords: [AbilityKeyword.Psionic],
		crafting: FactoryLogic.createProject({
			description: 'Дає 1d3 зуби',
			prerequisites: 'Рештки туші після трапези лахомпа',
			source: 'Тексти або перекази мовою Келіан (Caelian)',
			characteristic: [Characteristic.Reason, Characteristic.Intuition]
		}),
		effect: `
Як маневр, ви кріпите зуб лахомпа до зброї, дозволяючи їй надприродно мерехтіти між реальністю та небуттям. Ваш наступний удар цією зброєю може прорізати кілька цілей у лінію (для дальнього удару) або навколо вас (для ближнього удару). Удар додає такі ефекти до рівнів результату кидка сили:

* 11 або нижче: Ви можете вразити цим ударом ще одну додаткову ціль.
* 12–16: Ви можете вразити цим ударом до трьох додаткових цілей.
* 17+: Ви можете вразити цим ударом до семи додаткових цілей.`
	});

	static mirrorToken: Item = FactoryLogic.createItem({
		id: 'item-mirror-token',
		name: 'Дзеркальний жетон',
		description: 'Монета із золотим обідком і дзеркальною поверхнею тремтить у руці, ніби ваш дотик її відштовхує.',
		type: ItemType.Consumable1st,
		keywords: [AbilityKeyword.Psionic],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Три скляні пластини, просушений на сонці золотий пил',
			source: 'Тексти або перекази мовою Варіак (Variac)',
			characteristic: [Characteristic.Reason, Characteristic.Intuition],
			goal: 45
		}),
		effect: 'Поки Дзеркальний жетон при вас і ви стаєте ціллю дальнього удару, ви можете використати тригерну дію, щоб розчавити жетон і проігнорувати удар. Половина шкоди, яку ви мали б отримати, а також усі ефекти тригерного удару натомість накладаються на істоту, що завдала цього удару.'
	});

	static pocketHomunculus: Item = FactoryLogic.createItem({
		id: 'item-pocket-homunculus',
		name: 'Кишеньковий гомункул',
		description: 'Сфера з щільно зчеплених механічних шестерень має грані, що показують обличчя власника предмета.',
		type: ItemType.Consumable1st,
		keywords: [AbilityKeyword.Psionic],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Смуга зоряного металу, вкрита кровʼю творця предмета',
			source: 'Тексти або перекази мовою Заліак (Zaliac)',
			characteristic: [Characteristic.Reason],
			goal: 45
		}),
		effect: `
Коли ви активуєте цей предмет маневром, він спалахує яскравим світлом, ви можете зміститися на 1 клітинку так, щоб вороги не помітили вашого руху, а в сусідній клітинці зʼявляється гомункул, що бездоганно вас копіює. Гомункул є істотою з Витривалістю 15, усіма характеристиками 0 і швидкістю та Стійкістю, рівними вашим. Він виглядає невідрізним від вас, але не може використовувати жодних здібностей.

Поки у вас є лінія ефекту до вашого гомункула, ви можете використати маневр, щоб телепатично віддати йому наказ. Гомункул виконує наказ настільки добре, наскільки здатен. Якщо наказу немає, гомункул наслідує ваші рухи й мову. Коли ви рухаєтеся, гомункул рухається разом із вами, тримаючи той самий темп. Гомункул розсипається на пил через 1 годину або якщо його Витривалість зменшиться до 0.`
	});

	static portableCloud: Item = FactoryLogic.createItem({
		id: 'item-portable-cloud',
		name: 'Портативна хмара',
		description: 'У цій тонкій скляній сфері клубочиться крихітна хмара.',
		type: ItemType.Consumable1st,
		keywords: [AbilityKeyword.Magic],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Чашка дощової води зі священного фейського гаю',
			source: 'Тексти або перекази мовою Келіан (Caelian)',
			characteristic: [Characteristic.Reason, Characteristic.Intuition],
			goal: 30
		}),
		effect: 'Як маневр, ви кидаєте цю крихку скляну сферу на відстань до 5 клітинок, розбиваючи її та створюючи куб 4 туману. Туман розсіюється через 10 хвилин або якщо крізь область пройде сильний порив вітру, створений бурею чи магією.'
	});

	static noxiousCloud: Item = FactoryLogic.createItem({
		id: 'item-noxious-cloud',
		name: 'Отруйна хмара',
		description: 'У цій тонкій скляній сфері клубочиться крихітна хмара.',
		type: ItemType.Consumable1st,
		keywords: [AbilityKeyword.Magic],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Десять унцій дощової води зі священного фейського гаю; одна унція плоті нежиті',
			source: 'Тексти або перекази мовою Келіан (Caelian)',
			characteristic: [Characteristic.Reason, Characteristic.Intuition],
			goal: 45
		}),
		effect: `
Як маневр, ви кидаєте цю крихку скляну сферу на відстань до 5 клітинок, розбиваючи її та створюючи куб 4 туману. Туман розсіюється через 10 хвилин або якщо крізь область пройде сильний порив вітру, створений бурею чи магією.

Наповнена зеленою або гнильно-жовтою імлою, ця сфера при розбитті випускає задушливий смердючий туман. Кожна істота, яка вперше за бойовий раунд входить у хмару або починає там свій хід, отримує 5 отруйної шкоди. Крім того, будь-яка істота в тумані є ослабленою.`
	});

	static thunderheadCloud: Item = FactoryLogic.createItem({
		id: 'item-thunderhead-cloud',
		name: 'Грозова хмара',
		description: 'У цій тонкій скляній сфері клубочиться крихітна хмара.',
		type: ItemType.Consumable1st,
		keywords: [AbilityKeyword.Magic],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Десять унцій дощової води зі священного фейського гаю, котушка мідного дроту',
			source: 'Тексти або перекази мовою Келіан (Caelian)',
			characteristic: [Characteristic.Reason, Characteristic.Intuition],
			goal: 45
		}),
		effect: `
Як маневр, ви кидаєте цю крихку скляну сферу на відстань до 5 клітинок, розбиваючи її та створюючи куб 4 туману. Туман розсіюється через 10 хвилин або якщо крізь область пройде сильний порив вітру, створений бурею чи магією.

Навколо чорної хмари в цій сфері пробігають маленькі блискавки; при розбитті вона створює куб 3 грозової хмари. Кожна істота, яка вперше за бойовий раунд входить у хмару або починає там свій хід, отримує 5 шкоди блискавкою. Крім того, будь-яка істота в хмарі є сповільненою.`
	});

	static veratismo: Item = FactoryLogic.createItem({
		id: 'item-veratismo',
		name: 'Нюхальний порошок професора Вератізмо',
		description: 'У цій крихітній коробочці міститься безбарвний порошок із ледь відчутним терпким запахом.',
		type: ItemType.Consumable1st,
		keywords: [AbilityKeyword.Potion, AbilityKeyword.Psionic],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Корені пасльону, що щойно пустив бруньки',
			source: 'Тексти або перекази мовою Келіан (Caelian)',
			characteristic: [Characteristic.Reason],
			goal: 45
		}),
		effect: 'Як маневр, ви посипаєте дозою цього порошку їжу чи напій або здуваєте її на сусідню істоту, яка є захопленою, скутою або непритомною. Істота, що зазнає впливу порошку з видуву (навіть якщо затримує подих) або споживає дозу порошку, протягом 1 години може висловлюватися лише правдивими твердженнями. Крім того, інші істоти отримують перевагу на випробування Інтуїції та Присутності, щоб переконати ціль говорити або зчитати її емоції. Будь-яка така істота має подвійну перевагу на випробування, якщо ціль не усвідомлює, що на неї подіяв порошок.'
	});

	static snapdragon: Item = FactoryLogic.createItem({
		id: 'item-snapdragon',
		name: 'Левиний зів',
		description: 'Ця тендітна помаранчева квітка має нудотно-солодкий запах.',
		type: ItemType.Consumable1st,
		keywords: [AbilityKeyword.Magic],
		crafting: FactoryLogic.createProject({
			description: 'Дає 1d6 + 1 квітку левиного зіву',
			prerequisites: 'Пʼятдесят насінин левиного зіву',
			source: 'Тексти або перекази мовою Іллірик (Yllyric)',
			characteristic: [Characteristic.Reason, Characteristic.Intuition],
			goal: 45
		}),
		effect: 'Як маневр, ви вдихаєте аромат магічної квітки левиного зіву, від чого вона вʼяне, а ваші рухи стають різкішими й вибуховішими. Наступна здібність, що завдає шкоди, яку ви використаєте, завдає додатково 5 шкоди й отримує бонус +2 до дальності будь-якого примусового переміщення, яке накладає. Якщо здібність не накладає примусового переміщення, ви можете відштовхнути кожну ціль цієї здібності на відстань до 2 клітинок.'
	});

	// #endregion

	// #region Echelon 2

	static breathofDawn: Item = FactoryLogic.createItem({
		id: 'item-breath-of-dawn',
		name: 'Подих світанку',
		description: 'У скляній флязі кружляє вихор лагідного сонячного світла.',
		type: ItemType.Consumable2nd,
		keywords: [AbilityKeyword.Psionic],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Подих містичного мудреця, спійманий на світанку',
			source: 'Тексти або перекази мовою Гіраллік (Hyrallic)',
			characteristic: [Characteristic.Intuition, Characteristic.Presence],
			goal: 90
		}),
		effect: 'Як маневр, ви вдихаєте Подих світанку й сповнюєтеся спокоєм. Ви негайно завершуєте на собі стани зляканості, сповільнення й спровокованості та отримуєте бонус +8 до Стійкості до кінця зіткнення.'
	});

	static bullShot: Item = FactoryLogic.createItem({
		id: 'item-bull-shot',
		name: 'Бичачий шот',
		description: 'У цьому темному напої плавають дрібні скалки білої кістки, а сам він пахне яловичим бульйоном.',
		type: ItemType.Consumable2nd,
		keywords: [AbilityKeyword.Magic, AbilityKeyword.Potion],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Одна ампула чистої бичачої есенції',
			source: 'Тексти або перекази мовою Келіан (Caelian)',
			characteristic: [Characteristic.Reason, Characteristic.Intuition],
			goal: 90
		}),
		effect: 'Коли ви випиваєте це зілля як маневр, з вашого чола виростають гострі роги завдовжки 3 фути. Щоразу, коли ви використовуєте основну дію Charge, ціль вашого удару насаджується на роги й стає захопленою. Поки істота захоплена таким чином, у неї є кровотеча. Ви також можете захопити іншу істоту своїми кінцівками. Наприкінці зіткнення роги безпечно відпадають.'
	});

	static chocolateofImmovability: Item = FactoryLogic.createItem({
		id: 'item-chocolate-of-immovability',
		name: 'Шоколад незрушності',
		description: 'Цей розкішний на вигляд ласунок дивно важкий у руці.',
		type: ItemType.Consumable2nd,
		keywords: [AbilityKeyword.Magic],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Шоколадка, виготовлена кондитером-гномом',
			source: 'Тексти або перекази мовою Келіан (Caelian)',
			characteristic: [Characteristic.Reason, Characteristic.Intuition],
			goal: 90
		}),
		effect: 'Коли ви зʼїдаєте ці ласощі як маневр, ви отримуєте 15 тимчасової Витривалості й бонус +10 до Стійкості. Крім того, якщо ви не використовуєте свій рух під час ходу, будь-які удари, які ви завдаєте цього ходу, завдають додатково 5 шкоди, а будь-які удари проти вас мають шкоду до початку вашого наступного ходу. Цей ефект і бонус до Стійкості тривають до кінця зіткнення, після чого вас хилить на сон. Якщо тимчасову Витривалість не втрачено раніше, вона триває до кінця вашого наступного перепочинку.'
	});

	static concealmentPotion: Item = FactoryLogic.createItem({
		id: 'item-concealment-potion',
		name: 'Зілля приховування',
		description: 'Ця темна вʼязка рідина смакує паленим листям.',
		type: ItemType.Consumable2nd,
		keywords: [AbilityKeyword.Potion, AbilityKeyword.Psionic],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Унція соку дерева, ушкодженого псіонічним вогнем',
			source: 'Тексти або перекази мовою Іллірик (Yllyric)',
			characteristic: [Characteristic.Agility, Characteristic.Intuition],
			goal: 90
		}),
		effect: 'Коли ви випиваєте це зілля як маневр, світло навколо вашого тіла викривляється, даючи вам змогу зливатися з оточенням протягом 10 хвилин. Поки діє цей ефект, ви маєте подвійну перевагу на випробування, щоб сховатися й крастися, а також можете використовувати маневр «Сховатися», навіть коли за вами спостерігають.'
	});

	static floatPowder: Item = FactoryLogic.createItem({
		id: 'item-float-powder',
		name: 'Летючий порошок',
		description: 'У скляній ампулі містяться напівпрозорі пластівці, що мерехтять на світлі.',
		type: ItemType.Consumable2nd,
		keywords: [AbilityKeyword.Magic],
		crafting: FactoryLogic.createProject({
			description: 'Дає 1d3 ампули',
			prerequisites: 'Кілька пасом волосся карги',
			source: 'Тексти або перекази мовою Кхелт (Khelt)',
			characteristic: [Characteristic.Intuition, Characteristic.Presence],
			goal: 90
		}),
		effect: 'Посипавши себе цим порошком як маневр, ви невагомо здіймаєтеся над землею. Протягом 1 години ваша Стійкість знижується до 0, і ви можете літати та зависати. Крім того, карга, від якої походить порошок, точно знає, де й коли ви його використали.'
	});

	static purifiedJelly: Item = FactoryLogic.createItem({
		id: 'item-purified-jelly',
		name: 'Очищене желе',
		description: 'Ця прозора пастоподібна речовина має гіркий аромат.',
		type: ItemType.Consumable2nd,
		keywords: [AbilityKeyword.Potion, AbilityKeyword.Psionic],
		crafting: FactoryLogic.createProject({
			description: 'Дає 1d3 дози',
			prerequisites: 'Чашка водоростей із льодовикової води',
			source: 'Тексти або перекази мовою Іллірик (Yllyric)',
			characteristic: [Characteristic.Reason, Characteristic.Intuition],
			goal: 90
		}),
		effect: 'Коли ви вживаєте це зілля як маневр, ваша шкіра починає мерехтіти, а на шиї або плечах зʼявляються маленькі зябра. Протягом 1 години ви можете дихати в будь-якому середовищі й ігноруєте ефекти шкідливих газів, випарів і вдихуваних отрут.'
	});

	static scrollofResurrection: Item = FactoryLogic.createItem({
		id: 'item-scroll-of-resurrection',
		name: 'Сувій воскресіння',
		description: 'Цей сувій позначено сигілами сили, смерті й життя.',
		type: ItemType.Consumable2nd,
		keywords: [AbilityKeyword.Magic, AbilityKeyword.Scroll],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Аркуш паперу, насичений пилом пейніту',
			source: 'Тексти або перекази Першою мовою (The First Language)',
			characteristic: [Characteristic.Intuition, Characteristic.Presence],
			goal: 90
		}),
		effect: `
Як дія перепочинку, ви безупинно виголошуєте вміст цього сувою над рештками істоти, яка померла менш ніж рік тому. Душа істоти має бажати повернутися до життя, інакше сувій не спрацює. Якщо вона не згодна, ви інстинктивно розумієте це на початку дії перепочинку й можете негайно її припинити. Сувій не витрачається, і ви можете почати нову дію перепочинку.

Істота з охочою душею повертається до життя наприкінці перепочинку з повною Витривалістю та половиною своїх Відновлень. Ви ж наприкінці перепочинку відновлюєте лише половину своїх Відновлень, а сувій витрачається.`
	});

	static elemagnet: Item = FactoryLogic.createItem({
		id: 'item-telemagnet',
		name: 'Телемагніт',
		description: 'Короткий залізний жезл зі зчеплених сегментів підтікає жирною чорною оливою з місць зʼєднання.',
		type: ItemType.Consumable2nd,
		keywords: [AbilityKeyword.Psionic],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Шматок призмакору, унція феромагнітного металу',
			source: 'Тексти або перекази мовою Заліак (Zaliac)',
			characteristic: [Characteristic.Reason, Characteristic.Intuition],
			goal: 90
		}),
		effect: `
Як маневр, ви ламаєте цей жезл навпіл, що дозволяє вам вертикально притягнути будь-який предмет або істоту розміру 3 чи менше в межах лінії ефекту на кількість клітинок залежно від розміру цілі:

* **Розмір 1L або менше:** вертикальне притягування 6
* **Розмір 2:** вертикальне притягування 3
* **Розмір 3:** вертикальне притягування 1

Якщо ви притягуєте до себе предмет розміру 1T в сусідню клітинку, ви можете його впіймати.`
	});

	static vialofetherealAttack: Item = FactoryLogic.createItem({
		id: 'item-vial-of-ethereal-attack',
		name: 'Ампула ефірної атаки',
		description: 'Навіть у спокої прозора рідина в обсидіановій ампулі безперервно вирує.',
		type: ItemType.Consumable2nd,
		keywords: [AbilityKeyword.Psionic],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Підписана угода з привидом, великий обсидіановий диск',
			source: 'Тексти або перекази мовою Анжалі (Anjali)',
			characteristic: [Characteristic.Reason, Characteristic.Intuition],
			goal: 90
		}),
		effect: 'Як маневр, ви кидаєте цю ампулу на відстань до 10 клітинок, знищуючи її й створюючи ефірний вир куба 2 із центром у місці падіння. Вир розсіюється наприкінці зіткнення або коли ви його відпускаєте (не потребує дії). Кожна істота, яка вперше за бойовий раунд входить у вир або починає там свій хід, отримує 10 психічної шкоди. На початку кожного свого ходу ви можете перемістити вир на відстань до 5 клітинок (не потребує дії).'
	});

	// #endregion

	// #region Echelon 3

	static anamorphicLarva: Item = FactoryLogic.createItem({
		id: 'item-anamorphic-larva',
		name: 'Анаморфна личинка',
		description: 'У каламутній скляній ампулі звивається потворна личинка.',
		type: ItemType.Consumable3rd,
		keywords: [AbilityKeyword.Psionic],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Личинка, вимочена в жовчі безмовного балакуна',
			source: 'Тексти або перекази мовою Варіак (Variac)',
			characteristic: [Characteristic.Might, Characteristic.Intuition],
			goal: 180
		}),
		effect: `
Коли ви випускаєте личинку маневром, вона живиться психічною енергією й росте з шаленим прискоренням, створюючи поруч із вами стіну 10 з личинкової плоті. Стіну не можна створити так, щоб вона заповнила клітинку, зайняту істотою зі Стійкістю 1 або вищою. Кожна інша істота в стіні в момент її створення відштовхується до найближчої вільної клітинки.

На початку кожного вашого ходу кожна істота, сусідня до стіни, отримує психічну шкоду, що дорівнює потроєному показнику її Інтуїції, а ви можете додати до стіни 1 клітинку за кожну істоту, яка отримала цю шкоду. Якщо на початку вашого ходу жодна істота не отримує шкоди, личинка помирає, а стіна зникає.`
	});

	static bottledParadox: Item = FactoryLogic.createItem({
		id: 'item-bottled-paradox',
		name: 'Запляшкований парадокс',
		description: 'Рідина безперервно закручується в гранованій скляній пляшці, яка крижано-холодна на дотик.',
		type: ItemType.Consumable3rd,
		keywords: [AbilityKeyword.Magic, AbilityKeyword.Potion],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Місяць життя творця або іншої згодної істоти, мелений сапфір',
			source: 'Тексти або перекази мовою Келіан (Caelian)',
			characteristic: [Characteristic.Reason, Characteristic.Intuition],
			goal: 180
		}),
		effect: 'Як маневр, ви можете випити це зілля або кинути його на відстань до 10 клітинок. Якщо ви його випиваєте, оберіть випробування, яке ви робили протягом останньої хвилини, а потім перекидайте його доти, доки результат не зміниться. Якщо зілля кинуто, воно створює область мерехтливої магії куба 3. Будь-яка подія, що відбулася в цій області протягом попередньої хвилини, змінюється на розсуд Режисера, який має повну свободу вирішити, що станеться. Потім енергія розсіюється.'
	});

	static galliosvisitingCard: Item = FactoryLogic.createItem({
		id: 'item-gallios-visiting-card',
		name: 'Візитівка ГʼАлліоса',
		description: 'Картка з гербом Служби адвокації Восьмого міста ледь помітно пахне димом і прянощами.',
		type: ItemType.Consumable3rd,
		keywords: [AbilityKeyword.Magic],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Одна ампула крові архідиявола, прострочений контракт',
			source: 'Тексти або перекази мовою Анжалі (Anjali)',
			characteristic: [Characteristic.Reason, Characteristic.Intuition],
			goal: 180
		}),
		effect: 'Щоразу, коли ви мали б отримати шкоду, ви можете використати тригерну дію, щоб розірвати картку й викликати диявола. Ви уникаєте шкоди та будь-яких супровідних ефектів, а диявол перенаправляє тригерний ефект на ціль на власний вибір будь-де в тому самому маніфолді. Ви чітко бачите того, хто зрештою зазнає шкоди. Після цього диявол зникає.'
	});

	static personalEffigy: Item = FactoryLogic.createItem({
		id: 'item-personal-effigy',
		name: 'Особиста ефігія',
		description: 'Ця крихітна людиноподібна ефігія моторошно схожа на живу й завжди тепла на дотик.',
		type: ItemType.Consumable3rd,
		keywords: [AbilityKeyword.Magic],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Короткий дотик до істоти, з якою повʼязана ефігія',
			source: 'Тексти або перекази мовою Кемхарік (Khemharic)',
			characteristic: [Characteristic.Reason, Characteristic.Intuition],
			goal: 120
		}),
		effect: 'Особисту ефігію створюють за подобою конкретної гуманоїдної істоти, з якою вона повʼязана, і вона діє лише протягом першої хвилини після смерті цієї істоти. Поки ви перебуваєте в межах 5 клітинок від решток істоти, з якою повʼязана ефігія, ви можете використати маневр, щоб вручну запалити й спалити ефігію та повернути істоту до життя. Істота повертається до життя з Витривалістю, рівною її значенню захеканості, і 10 тимчасової Витривалості, що триває до кінця її наступного перепочинку. Якщо істота мертва понад 1 хвилину, вона лишається мертвою, а ефігія розчиняється в пил.'
	});

	static stygianLiquor: Item = FactoryLogic.createItem({
		id: 'item-stygian-liquor',
		name: 'Стигійний лікер',
		description: 'Цей каламутно-бурий віскі смакує торфом і смертю.',
		type: ItemType.Consumable3rd,
		keywords: [AbilityKeyword.Magic, AbilityKeyword.Potion],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Унція зішкребків із уживаного казана ковену',
			source: 'Тексти або перекази мовою Анжалі (Anjali)',
			characteristic: [Characteristic.Reason, Characteristic.Intuition],
			goal: 180
		}),
		effect: 'Коли ви випиваєте це зілля як маневр, ви здобуваєте вперту волю чіплятися за життя протягом 24 годин. Якщо в цей час ви вмираєте, то не помираєте, доки не досягнете відʼємного значення свого максимуму Витривалості, а не значення захеканості. Крім того, поки ви вмираєте, ви маєте перевагу на кидки сили й отримуєте лише половину шкоди від стану кровотечі. Щойно магія зілля спрацьовує, вона завершується, коли ви перестаєте вмирати.'
	});

	static timesplitter: Item = FactoryLogic.createItem({
		id: 'item-timesplitter',
		name: 'Розсікач часу',
		description: 'Цей шипастий кристал при першому дотику видає прекрасний дзвінкий звук.',
		type: ItemType.Consumable3rd,
		keywords: [AbilityKeyword.Psionic],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Кристал часу',
			source: 'Тексти або перекази мовою Волл (Voll)',
			characteristic: [Characteristic.Reason, Characteristic.Intuition],
			goal: 180
		}),
		effect: `
Як маневр, ви робите дальній вільний удар Розсікачем часу, який розбивається при влучанні. Удар завдає додатково 1d6 психічної шкоди й додає такі ефекти до рівнів результату кидка сили:

* 11 або нижче: Ціль і кожна істота в межах 3 клітинок від неї є сповільненими (рят. кидок завершує).
* 12–16: Ціль і кожна істота в межах 5 клітинок від неї є сповільненими (рят. кидок завершує).
* 17+: Ціль і кожна істота в межах 8 клітинок від неї є сповільненими (рят. кидок завершує).`
	});

	static wardToken: Item = FactoryLogic.createItem({
		id: 'item-ward-token',
		name: 'Обереговий жетон',
		description: 'Цей гладко відполірований кварцовий камінь дивно теплий на дотик.',
		type: ItemType.Consumable3rd,
		keywords: [AbilityKeyword.Psionic],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Невеликий кварц',
			source: 'Тексти або перекази мовою Заліак (Zaliac)',
			characteristic: [Characteristic.Might, Characteristic.Intuition],
			goal: 180
		}),
		effect: 'Як маневр, ви підкидаєте цей камінь над собою, і він розбивається, обсипаючи вас пилом. До кінця зіткнення будь-яка ворожа здібність, що націлена на вас, має подвійну шкоду.'
	});

	static wellnessTonic: Item = FactoryLogic.createItem({
		id: 'item-wellness-tonic',
		name: 'Оздоровчий тонік',
		description: 'Ця густа фіолетова рідина має стійкий гіркий запах.',
		type: ItemType.Consumable3rd,
		keywords: [AbilityKeyword.Potion, AbilityKeyword.Psionic],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Унція крові троля, сирий мед',
			source: 'Тексти або перекази мовою Варіак (Variac)',
			characteristic: [Characteristic.Might, Characteristic.Intuition],
			goal: 180
		}),
		effect: 'Коли ви пʼєте цей тонік як маневр, вас охоплює хвиля тілесного й духовного імунітету. Ви можете негайно завершити до трьох станів або ефектів, що впливають на вас. Крім того, до початку вашого наступного ходу ви можете ігнорувати будь-який ефект, що тривав би до кінця вашого наступного ходу або завершувався б рят. кидком.'
	});

	// #endregion

	// #region Echelon 4

	static breathofCreation: Item = FactoryLogic.createItem({
		id: 'item-breath-of-creation',
		name: 'Подих творення',
		description: 'У скляній флязі вирує буря з астральної плазми.',
		type: ItemType.Consumable4th,
		keywords: [AbilityKeyword.Psionic],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Спійманий подих бога, унція згущених снів',
			source: 'Тексти або перекази Першою мовою (The First Language)',
			characteristic: [Characteristic.Intuition, Characteristic.Presence],
			goal: 360
		}),
		effect: `
Коли ви вдихаєте Подих творення як маневр, вас наповнює космічна сила. Ви здобуваєте 1 Славу й створюєте портал розміру 2 до нового деміплану в сусідній клітинці. Деміплан є областю куба 20, чию форму й буденні риси обираєте ви. Портал зʼявляється лише для вас і призначених вами істот, і лише ви та ці істоти можете входити до деміплану. Коли істота заходить у портал, вона виходить із відповідного порталу всередині деміплану, і навпаки. Предмети, створені в деміплані, перетворюються на пил, якщо винести їх за його межі.

Щоразу, коли ви використовуєте ще один Подих творення, ви можете створити новий деміплан або розширити деміплан, який уже створили чи відвідали. Розмір розширеного деміплану збільшується на 20, а ви створюєте другий портал до цього деміплану з відповідним порталом усередині.`
	});

	static elixirofsaintElspeth: Item = FactoryLogic.createItem({
		id: 'item-elixir-of-saint-elspeth',
		name: 'Еліксир святої Елспет',
		description: 'Ця густа червона рідина пахне корицею.',
		type: ItemType.Consumable4th,
		keywords: [AbilityKeyword.Magic, AbilityKeyword.Potion],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Унція крові святої Елспет',
			source: 'Тексти або перекази мовою Келіан (Caelian)',
			characteristic: [Characteristic.Presence],
			goal: 360
		}),
		effect: 'Коли ви виливаєте еліксир собі на чоло як маневр, він зникає, а ви захищаєте себе від ефектів, що могли б зашкодити тілу, розуму чи душі. Протягом кількості раундів, що дорівнює вашим поточним Перемогам, будь-яка ворожа здібність, націлена на вас, автоматично отримує проти вас результат 1-го рівня. Крім того, така здібність може лише завдати вам шкоди, дозволяючи ігнорувати її інші ефекти.'
	});

	static solaris: Item = FactoryLogic.createItem({
		id: 'item-solaris',
		name: 'Сторінка з Нескінченної бібліотеки: Solaris',
		description: 'Цю сторінку вкрито текстами й схемами, що описують вивільнення безмежної енергії та небезпеки цього процесу.',
		type: ItemType.Consumable4th,
		keywords: [AbilityKeyword.Magic],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Одна ампула священного чорнила, благословений пергамент',
			source: 'Довідкові матеріали Першою мовою (The First Language) з Нескінченної бібліотеки з неповними вказівками щодо створення сонця',
			characteristic: [Characteristic.Reason, Characteristic.Intuition],
			goal: 360
		}),
		effect: 'Як маневр, ви витрачаєте 1 Героїчний ресурс, щоб знищити цю сторінку й створити область куба 4 у межах 20 клітинок. Область наповнюється енергією крихітного сонця, що існує до кінця зіткнення. Кожна істота, яка вперше за бойовий раунд входить в область або починає там свій хід, отримує 20 вогняної шкоди й стає приголомшеною до кінця свого ходу.'
	});

	static brightCourt: Item = FactoryLogic.createItem({
		id: 'item-bright-court',
		name: 'Відновник Світлого двору',
		description: 'Рясно оздоблена золота ампула пахне літнім дощем і тонкими цитрусовими нотами.',
		type: ItemType.Consumable4th,
		keywords: [AbilityKeyword.Magic],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Рік життя творця або іншої згодної істоти, сміх юного героя',
			source: 'Тексти або перекази мовою Кхелт (Khelt)',
			characteristic: [Characteristic.Reason, Characteristic.Presence],
			goal: 360
		}),
		effect: 'Коли ви відкриваєте цю ампулу як маневр, вона вибухає бурею різнобарвних вогнів. Ви й кожен союзник у межах 5 клітинок від вас відновлюєте 1d6 Відновлень. Однак будь-який смертний, що використовує цей скарб, привертає увагу могутнього фейського вельможі.'
	});

	// #endregion
}
