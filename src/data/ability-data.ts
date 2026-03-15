import { AbilityKeyword } from '@/enums/ability-keyword';
import { Characteristic } from '@/enums/characteristic';
import { FactoryLogic } from '@/logic/factory-logic';

export class AbilityData {
	// #region Free Strikes

	static freeStrikeMelee = FactoryLogic.createAbility({
		id: 'free-melee',
		name: 'Вільний удар (ближній)',
		description: '',
		type: FactoryLogic.type.createFreeStrike(),
		keywords: [ AbilityKeyword.Charge, AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon ],
		distance: [ FactoryLogic.distance.createMelee() ],
		target: 'Одна істота або предмет',
		sections: [
			FactoryLogic.createAbilitySectionRoll(
				FactoryLogic.createPowerRoll({
					characteristic: [ Characteristic.Might, Characteristic.Agility ],
					tier1: '2 + С або Л шкоди',
					tier2: '5 + С або Л шкоди',
					tier3: '7 + С або Л шкоди'
				})
			)
		]
	});

	static freeStrikeRanged = FactoryLogic.createAbility({
		id: 'free-ranged',
		name: 'Вільний удар (дальний)',
		description: '',
		type: FactoryLogic.type.createFreeStrike(),
		keywords: [ AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon ],
		distance: [ FactoryLogic.distance.createRanged(5) ],
		target: 'Одна істота або предмет',
		sections: [
			FactoryLogic.createAbilitySectionRoll(
				FactoryLogic.createPowerRoll({
					characteristic: [ Characteristic.Might, Characteristic.Agility ],
					tier1: '2 + С або Л шкоди',
					tier2: '4 + С або Л шкоди',
					tier3: '6 + С або Л шкоди'
				})
			)
		]
	});

	// #endregion

	// #region Moves

	static advance = FactoryLogic.createAbility({
		id: 'advance',
		name: 'Рух уперед',
		description: '',
		type: FactoryLogic.type.createMove(),
		sections: [
			FactoryLogic.createAbilitySectionText('Коли істота виконує дію руху «Рух уперед», вона переміщується на кількість клітинок, що не перевищує її швидкості. Вона може розбити цей рух між своїм маневром і основною дією як забажає.')
		]
	});

	static disengage = FactoryLogic.createAbility({
		id: 'disengage',
		name: 'Відступ',
		description: '',
		type: FactoryLogic.type.createMove(),
		sections: [
			FactoryLogic.createAbilitySectionText('Коли істота виконує дію руху «Відступ», вона може зміститися на 1 клітинку. Деякі особливості класів, комплекти та інші правила дозволяють істоті зміститися більше ніж на 1 клітинку під час відступу. Істота, яка це робить, може розбити своє зміщення між маневром і основною дією як забажає.')
		]
	});

	static ride = FactoryLogic.createAbility({
		id: 'ride',
		name: 'Їзда',
		description: '',
		type: FactoryLogic.type.createMove(),
		sections: [
			FactoryLogic.createAbilitySectionText('Істота може виконати дію руху «Їзда» лише сидячи верхи на іншій істоті. Коли істота виконaє дію руху «Їзда», вона змушує свою їздову істоту переміститися на відстань до її швидкості, беручи верхи з собою. Альтернативно, істота може використати дію руху «Їзда», щоб змусити свою їздову істоту виконати дію руху «Відступ» як безкоштовну тригерну дію. Істота може використати дію руху «Їзда» лише один раз за раунд. На одну нагору та одну їздову істоту ця дія руху може бути застосована тільки раз за раунд. Це переміщення можна розбити між маневром і основною дією вершника як забажає.')
		]
	});

	// #endregion

	// #region Maneuvers

	static aidAttack = FactoryLogic.createAbility({
		id: 'aid-attack',
		name: 'Допомога атаці',
		description: '',
		type: FactoryLogic.type.createManeuver(),
		sections: [
			FactoryLogic.createAbilitySectionText('Істота, яка використовує маневр «Допомога атаці», вибирає ворога поруч із собою. Наступний кидок здібності союзника проти цього ворога до початку наступного ходу допомагаючої істоти отримує перевагу.')
		]
	});

	static catchBreath = FactoryLogic.createAbility({
		id: 'catch-breath',
		name: 'Перехопити подих',
		description: '',
		type: FactoryLogic.type.createManeuver(),
		sections: [
			FactoryLogic.createAbilitySectionText(`
Істота, яка використовує маневр «Перехопити подих», витрачає Відновлення та відновлює Витривалість, рівну своєму значенню відновлення.

Істота, яка вмирає, не може використати маневр «Перехопити подих», але інші істоти можуть допомогти їй витратити Відновлення іншими способами.`)
		]
	});

	static clawDirt = FactoryLogic.createAbility({
		id: 'claw-dirt',
		name: 'Копнути ґрунт',
		description: '',
		type: FactoryLogic.type.createManeuver({ qualifiers: [ 'можна використовувати, якщо ваша швидкість щонайменше 2' ] }),
		distance: [ FactoryLogic.distance.createSelf() ],
		target: 'Сам',
		sections: [
			FactoryLogic.createAbilitySectionRoll(
				FactoryLogic.createPowerRoll({
					characteristic: Characteristic.Might,
					tier1: 'Ви можете переміститися на 1 клітинку в ґрунт, з нього або крізь нього (якщо ви торкаєтесь ґрунту, через який можна рити), і ви отримуєте стан Повільн., Ослабл. до кінця ходу.',
					tier2: 'Ви можете використати свою основну дію цього ходу, щоб переміститися на 1 клітинку в ґрунт, з нього або крізь нього (якщо ви торкаєтесь ґрунту, через який можна рити), і ви отримуєте стан Повільн. до кінця ходу.',
					tier3: 'Ви можете переміститися на 1 клітинку в ґрунт, з нього або крізь нього (якщо ви торкаєтесь ґрунту, через який можна рити).'
				})
			)
		]
	});

	static escapeGrab = FactoryLogic.createAbility({
		id: 'escape-grab',
		name: 'Втекти з захвату',
		description: '',
		type: FactoryLogic.type.createManeuver(),
		distance: [ FactoryLogic.distance.createSelf() ],
		target: 'Сам',
		sections: [
			FactoryLogic.createAbilitySectionText('Істота, яку захопила інша істота, предмет або ефект, може спробувати вирватися, використавши цю здатність.'),
			FactoryLogic.createAbilitySectionRoll(
				FactoryLogic.createPowerRoll({
					characteristic: [ Characteristic.Might, Characteristic.Agility ],
					tier1: 'Без ефекту.',
					tier2: 'Ви можете вирватися з захвату, але якщо це станеться, істота, яка вас тримає, може зробити ближній вільний удар проти вас, перш ніж ви перестанете бути захопленими.',
					tier3: 'Ви більше не захоплені.'
				})
			),
			FactoryLogic.createAbilitySectionText('Ви отримуєте шкідливий модифікатор (bane) до цього маневру, якщо ваш розмір менший за розмір істоти, предмета або ефекту, що тримає вас.')
		]
	});

	static goProne = FactoryLogic.createAbility({
		id: 'go-prone',
		name: 'Лягти',
		description: '',
		type: FactoryLogic.type.createManeuver({ free: true }),
		sections: [
			FactoryLogic.createAbilitySectionText('Істота може стати лежачою як безкоштовний маневр.')
		]
	});

	static grab = FactoryLogic.createAbility({
		id: 'grab',
		name: 'Схопити',
		description: '',
		type: FactoryLogic.type.createManeuver(),
		keywords: [ AbilityKeyword.Melee, AbilityKeyword.Weapon ],
		distance: [ FactoryLogic.distance.createMelee() ],
		target: 'Одна істота',
		sections: [
			FactoryLogic.createAbilitySectionText('Істота, яка хоче тримати ворога поруч і обеззброїти його, може спробувати схопити цю істоту, використавши цю здатність.'),
			FactoryLogic.createAbilitySectionRoll(
				FactoryLogic.createPowerRoll({
					characteristic: [ Characteristic.Might ],
					tier1: 'Без ефекту',
					tier2: 'Ви можете схопити ціль, але якщо ви це зробите, ціль може зробити проти вас ближній вільний удар, перш ніж її буде схоплено.',
					tier3: 'Ціль схоплена вами.'
				})
			),
			FactoryLogic.createAbilitySectionText('Зазвичай ви можете націлюватися лише на істот свого розміру або менших. Якщо ваш показник Сили 2 або більше, ви можете націльуватися на будь-яку істоту розміру, рівного або меншого за ваш показник Сили.'),
			FactoryLogic.createAbilitySectionText('Якщо не вказано інше, істота може схопити лише одну істоту за раз.'),
			FactoryLogic.createAbilitySectionPackage('null-psionic-martial-arts-grab')
		]
	});

	static hide = FactoryLogic.createAbility({
		id: 'hide',
		name: 'Сховатися',
		description: '',
		type: FactoryLogic.type.createManeuver(),
		sections: [
			FactoryLogic.createAbilitySectionText('Використовуючи маневр «Сховатися», істота намагається сховатися від інших істот, які її не бачать, поки вона має укриття або завісу.')
		]
	});

	static knockback = FactoryLogic.createAbility({
		id: 'knockback',
		name: 'Відштовхнути',
		description: '',
		type: FactoryLogic.type.createManeuver(),
		keywords: [ AbilityKeyword.Melee, AbilityKeyword.Weapon ],
		distance: [ FactoryLogic.distance.createMelee() ],
		target: 'Одна істота',
		sections: [
			FactoryLogic.createAbilitySectionText('Істота, яка хоче відштовхнути сусідню істоту від себе, може спробувати штовхнути цю істоту, використавши цю здатність.'),
			FactoryLogic.createAbilitySectionRoll(
				FactoryLogic.createPowerRoll({
					characteristic: [ Characteristic.Might ],
					tier1: 'Відштовхнути на 1',
					tier2: 'Відштовхнути на 2',
					tier3: 'Відштовхнути на 3'
				})
			),
			FactoryLogic.createAbilitySectionText('Зазвичай ви можете націлюватися лише на істот свого розміру або менших. Якщо ваш показник Сили 2 або більше, ви можете націлюватися на будь-яку істоту розміру, рівного або меншого за ваш показник Сили.'),
			FactoryLogic.createAbilitySectionPackage('null-psionic-martial-arts-knockback')
		]
	});

	static makeAssistTest = FactoryLogic.createAbility({
		id: 'make-assist-test',
		name: 'Виконати або допомогти в тесті',
		description: '',
		type: FactoryLogic.type.createManeuver(),
		sections: [
			FactoryLogic.createAbilitySectionText(`
Багато тестів є маневрами, якщо вони виконуються в бою. Пошук скрині тестом на Розум, відмикання замка тестом на Ловкість або підйом ґрат тестом на Силу — усі ці дії є маневрами. Допомога в тесті також є маневром у бою.

Складні або тривалі тести можуть вимагати основної дії, якщо вони виконуються в бою, або можуть займати стільки часу, що їх узагалі не можна виконати під час бою. Інші тести, що не займають часу взагалі, як-от тест на Розум для пригадування знань про мумій, зазвичай є безкоштовними маневрами в бою. Майстер має останнє слово щодо того, які тести можна виконувати як маневри.`)
		]
	});

	static search = FactoryLogic.createAbility({
		id: 'search',
		name: 'Пошук прихованих істот',
		description: '',
		type: FactoryLogic.type.createManeuver(),
		sections: [
			FactoryLogic.createAbilitySectionText('Маневр «Пошук прихованих істот» дозволяє істоті спробувати знайти істот, що ховаються від неї.')
		]
	});

	static standUp = FactoryLogic.createAbility({
		id: 'stand-up',
		name: 'Піднятися',
		description: '',
		type: FactoryLogic.type.createManeuver(),
		sections: [
			FactoryLogic.createAbilitySectionText('Істота може використати маневр «Піднятися», щоб встати, якщо вона лежить, закінчивши цей стан. Крім того, вона може використати цей маневр, щоб змусити охоче сусідню лежачу істоту встати.')
		]
	});

	static useConsumable = FactoryLogic.createAbility({
		id: 'use-consumable',
		name: 'Використати витратний предмет',
		description: '',
		type: FactoryLogic.type.createManeuver(),
		sections: [
			FactoryLogic.createAbilitySectionText('Якщо в описі не вказано інше, істота може активувати витратний скарб (наприклад, зілля) маневром «Використати витратний предмет». Істота може використати цей маневр, щоб застосувати витратний предмет, який приносить користь, або собі, або охочій сусідній істоті.')
		]
	});

	// #endregion

	// #region Main Actions

	static charge = FactoryLogic.createAbility({
		id: 'charge',
		name: 'Атака з розгону',
		description: '',
		type: FactoryLogic.type.createMain(),
		sections: [
			FactoryLogic.createAbilitySectionText(`
Коли істота виконує основну дію «Атака з розгону», вона рухається в прямій лінії на відстань до своєї швидкості, а потім робить ближній вільний удар проти цілі, коли закінчує свій рух. Якщо в істоти є здатність із ключовим словом Charge, вона може використати цю здатність проти цілі замість вільного удару.

Істота не може рухатися через важку місцевість або зміщуватися під час розгону. Вона може літати або ритися у землі як частину дії «Атака з розгону», якщо має таку можливість, але не може лазити або плавати під час розгону, якщо тільки не може автоматично використовувати ці способи руху на повній швидкості.`)
		]
	});

	static defend = FactoryLogic.createAbility({
		id: 'defend',
		name: 'Оборона',
		description: '',
		type: FactoryLogic.type.createMain(),
		sections: [
			FactoryLogic.createAbilitySectionText('Коли істота виконує основну дію «Оборона», кидки здібностей, спрямовані проти неї, мають подвійну шкоду (double bane) до початку її наступного ходу. Крім того, вона має подвійну перевагу (double edge) на тести, коли потрібно протистояти ефектам навколишнього світу або рисам/здатностям істот. Істота не отримує переваг від цієї дії, якщо інша істота дражнить її.')
		]
	});

	static freeStrike = FactoryLogic.createAbility({
		id: 'free-strike',
		name: 'Вільний удар',
		description: '',
		type: FactoryLogic.type.createMain(),
		sections: [
			FactoryLogic.createAbilitySectionText('Істота може використати цю основну дію, щоб зробити вільний удар.')
		]
	});

	static heal = FactoryLogic.createAbility({
		id: 'heal',
		name: 'Лікування',
		description: '',
		type: FactoryLogic.type.createMain(),
		sections: [
			FactoryLogic.createAbilitySectionText('Істота, яка використовує основну дію «Лікування», застосовує медицину або надихаючі слова, щоб допомогти суміжній істоті почуватися краще і залишитися в бою. Цільова істота може витратити Відновлення, щоб відновити Витривалість, або може зробити кидок порятунку проти одного ефекту, від якого звільняє кидок порятунку.')
		]
	});

	static swap = FactoryLogic.createAbility({
		id: 'swap',
		name: 'Обмін дій',
		description: '',
		type: FactoryLogic.type.createMain(),
		sections: [
			FactoryLogic.createAbilitySectionText('Ви можете перетворити свою основну дію на маневр або дію руху, що дозволяє вам виконати дві маневри або дії руху у свій хід.')
		]
	});

	// #endregion

	// #region Triggers

	static opportunityAttack = FactoryLogic.createAbility({
		id: 'opportunity-attack',
		name: 'Атака можливості',
		description: '',
		type: FactoryLogic.type.createTrigger('Ворог поруч із вами добровільно переміщається в клітинку, що не є поруч з вами, без зміщення.', { free: true }),
		sections: [
			FactoryLogic.createAbilitySectionText(`
Коли у істоти є ворог поруч, і ворог добровільно переміщується в клітинку, яка не є поруч з істотою, не зміщуючись, істота може зробити ближній вільний удар по цілі.

Якщо у вас є шкода (bane) або подвійнa шкода (double bane) на кидок сили проти цілі, ви не можете здійснити атаку можливості.`)
		]
	});

	// #endregion

	static standardAbilities = [
		// Main
		AbilityData.charge,
		AbilityData.defend,
		AbilityData.freeStrike,
		AbilityData.heal,
		AbilityData.swap,
		// Maneuver
		AbilityData.aidAttack,
		AbilityData.catchBreath,
		AbilityData.clawDirt,
		AbilityData.escapeGrab,
		AbilityData.goProne,
		AbilityData.grab,
		AbilityData.hide,
		AbilityData.knockback,
		AbilityData.makeAssistTest,
		AbilityData.search,
		AbilityData.standUp,
		AbilityData.useConsumable,
		// Move
		AbilityData.advance,
		AbilityData.disengage,
		AbilityData.ride,
		// Trigger
		AbilityData.opportunityAttack
	];
}
