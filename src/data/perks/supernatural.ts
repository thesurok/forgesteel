import { AbilityKeyword } from '@/enums/ability-keyword';
import { FactoryLogic } from '@/logic/factory-logic';
import { FeatureField } from '@/enums/feature-field';
import { FeatureType } from '@/enums/feature-type';
import { MonsterOrganizationType } from '@/enums/monster-organization-type';
import { MonsterRoleType } from '@/enums/monster-role-type';
import { Perk } from '@/models/perk';
import { PerkList } from '@/enums/perk-list';

export class SupernaturalPerkData {
	static arcaneTrick: Perk = {
		id: 'perk-arcane-trick',
		name: 'Арканний трюк',
		description: 'Ви накладаєте розважальне закляття, що створює незначний, але вражаючий магічний ефект.',
		type: FeatureType.Ability,
		data: {
			ability: FactoryLogic.createAbility({
				id: 'perk-arcane-trick-1',
				name: 'Арканний трюк',
				description: 'Ви накладаєте розважальне закляття, що створює незначний, але вражаючий магічний ефект.',
				type: FactoryLogic.type.createMain(),
				keywords: [AbilityKeyword.Magic],
				distance: [FactoryLogic.distance.createSelf()],
				target: 'Себе',
				sections: [
					FactoryLogic.createAbilitySectionText(`
Оберіть один із таких ефектів:

* Ви телепортуєте сусідній предмет розміру 1S або менше в іншу незайняту сусідню клітинку.
* До початку вашого наступного ходу частина вашого тіла випускає зливу нешкідливих гучних іскор, що освітлюють кожну сусідню клітинку.
* Ви запалюєте або гасите, на свій вибір, кожне звичайне джерело світла розміру 1L або менше поруч із вами.
* Ви змінюєте до 1 фунта їстівної їжі, якої торкаєтеся, роблячи її надзвичайно смачною або огидною.
* До початку вашого наступного ходу ваше тіло виділяє певний запах, який ви вже колись відчували. Цей запах відчуває кожна істота в межах 5 клітинок від вас, але він не може накладати на них жодного стану чи іншого недоліку.
* Ви наносите невеликий магічний напис на поверхню звичайного предмета, якого торкаєтеся, або стираєте напис, зроблений вами чи іншою істотою за допомогою Арканного трюку.
* Ви торкаєтеся предмета розміру 1T, щоб покрити його ілюзією, яка змушує його виглядати іншим предметом. Будь-яка істота, що бере предмет до рук, помічає ілюзію. Ілюзія зникає, коли ви перестаєте торкатися предмета.`)
				]
			})
		},
		list: PerkList.Supernatural
	};

	static creatureSense: Perk = {
		id: 'perk-creature-sense',
		name: 'Чуття істоти',
		description: 'Ви інтуїтивно відчуваєте ключові слова істоти.',
		type: FeatureType.Ability,
		data: {
			ability: FactoryLogic.createAbility({
				id: 'perk-creature-sense-1',
				name: 'Чуття істоти',
				description: 'Ви інтуїтивно відчуваєте ключові слова істоти.',
				type: FactoryLogic.type.createManeuver(),
				distance: [FactoryLogic.distance.createSelf()],
				target: 'Себе',
				sections: [
					FactoryLogic.createAbilitySectionText('Оберіть істоту в межах 10 клітинок. Якщо її рівень не вищий за ваш, ви дізнаєтеся ключові слова з її блоку характеристик: Demon, Humanoid, Undead тощо.')
				]
			})
		},
		list: PerkList.Supernatural
	};

	static familiar: Perk = {
		id: 'perk-familiar',
		name: 'Фамільяр',
		description: '',
		type: FeatureType.Summon,
		data: {
			summons: [
				FactoryLogic.createSummon({
					monster: FactoryLogic.createMonster({
						id: 'familiar',
						name: 'Фамільяр',
						description: `
Надприродний дух, який набув форми маленької тварини або оживленого предмета, обрав стати вашим фамільяром - або ж вирішив, що це ви його фамільяр.

Фамільяр може тримати маленькі предмети в зубах або кігтях, але не здатен виконувати дії, для яких зазвичай потрібні руки: відчиняти двері, розгортати сувій тощо.

Він не може завдавати шкоди іншим істотам чи предметам. У бою він може заходити у фланг, але лише разом із вами.

Якщо вашого фамільяра знищено, ви можете відновити його як дію перепочинку або, витративши Відновлення як основну дію, повернути його до існування в незайнятій клітинці поруч із собою.`,
						level: 0,
						role: FactoryLogic.createMonsterRole(MonsterOrganizationType.NoOrganization, MonsterRoleType.NoRole),
						keywords: [],
						encounterValue: 0,
						size: FactoryLogic.createSize(1, 'T'),
						speed: FactoryLogic.createSpeed(5),
						stamina: 0,
						stability: 0,
						freeStrikeDamage: 0,
						characteristics: FactoryLogic.createCharacteristics(-3, 2, 0, 0, 1),
						features: [
							FactoryLogic.feature.createBonus({
								id: 'familiar-1',
								field: FeatureField.Stamina,
								value: 2,
								valuePerLevel: 2
							}),
							FactoryLogic.feature.create({
								id: 'familiar-2',
								name: 'Телепатичний',
								description: 'Поки ви й ваш фамільяр перебуваєте в межах 10 клітинок одне від одного, ви можете спілкуватися телепатично і ділитися відчуттями. Поки ви ділитеся чуттями, кожен із вас водночас користується і власними чуттями.'
							})
						]
					}),
					cost: 0,
					count: 1
				})
			]
		},
		list: PerkList.Supernatural
	};

	static invisibleForce: Perk = {
		id: 'perk-invisible-force',
		name: 'Невидима сила',
		description: 'Ви керуєте крихітним предметом силою думки.',
		type: FeatureType.Ability,
		data: {
			ability: FactoryLogic.createAbility({
				id: 'perk-invisible-force-1',
				name: 'Невидима сила',
				description: 'Ви керуєте крихітним предметом силою думки.',
				type: FactoryLogic.type.createManeuver(),
				keywords: [AbilityKeyword.Psionic, AbilityKeyword.Ranged],
				distance: [FactoryLogic.distance.createRanged(10)],
				target: '1 предмет розміру 1T без нагляду',
				sections: [
					FactoryLogic.createAbilitySectionText('Ви можете схопити або пересувати цільовий предмет силою думки, перемістивши його на кількість клітинок до вашого показника Розуму, Інтуїції або Присутності на вибір. Ви можете використовувати цю здібність, щоб повертати дверні ручки, тягнути важелі тощо. Ви також можете маніпулювати будь-якою маленькою рухомою частиною більшого предмета, якщо вона без нагляду і має розмір 1T. Ви не можете відламати меншу частину від більшого предмета за допомогою цієї здібності.')
				]
			})
		},
		list: PerkList.Supernatural
	};

	static psychicWhisper: Perk = {
		id: 'perk-psychic-whisper',
		name: 'Психічний шепіт',
		description: 'Ви надсилаєте одностороннє телепатичне повідомлення другові.',
		type: FeatureType.Ability,
		data: {
			ability: FactoryLogic.createAbility({
				id: 'perk-psychic-whisper-1',
				name: 'Психічний шепіт',
				description: 'Ви надсилаєте одностороннє телепатичне повідомлення другові.',
				type: FactoryLogic.type.createManeuver(),
				keywords: [AbilityKeyword.Psionic, AbilityKeyword.Ranged],
				distance: [FactoryLogic.distance.createRanged(10)],
				target: '1 союзник, який розуміє принаймні одну мову',
				sections: [
					FactoryLogic.createAbilitySectionText('Ви надсилаєте телепатичне повідомлення, яке можна було б вимовити за 10 секунд або менше. Ціль знає, від кого повідомлення, і може вирішити ігнорувати його та всі наступні повідомлення.')
				]
			})
		},
		list: PerkList.Supernatural
	};

	static ritualist: Perk = {
		id: 'perk-ritualist',
		name: 'Ритуаліст',
		description: 'Ви можете витратити 1 безперервну хвилину, щоб провести магічний ритуал благословення, націлений на себе або одну добровільну істоту, якої торкаєтеся. Ціль отримує подвійну перевагу на наступний тест, який зробить упродовж наступної хвилини. Цю перевагу не можна використати для дії, що триває довше за 1 хвилину.',
		type: FeatureType.Text,
		data: null,
		list: PerkList.Supernatural
	};

	static thingspeaker: Perk = {
		id: 'perk-thingspeaker',
		name: 'Речемовець',
		description: `
Коли ви тримаєте предмет у руці 1 безперервну хвилину, ви можете відчути, чи несе він емоційний відгомін. Предметами з емоційним відгомоном можуть бути дорогі серцю подарунки, знаряддя вбивства або особисті памʼятки.
Якщо Директор вирішує, що предмет несе емоційний відгомін, ви дізнаєтеся найсильнішу емоцію, повʼязану з ним, а тоді отримуєте видіння, яке відповідає на одне з таких запитань:

* Як звали людину, чия емоція відбилася на цьому предметі?
* Чому ця емоція затрималася на предметі?
* Скільки часу минуло відтоді, як предмет востаннє тримала людина, чия емоція на ньому лишилася?

Поставивши одне запитання, ви можете вирішити заглибитися далі й поставити ще одне зі списку, але тоді вас переповнять емоції, що не належать вам.
До завершення перепочинку ви отримуєте шкоду на тести Інтуїції та Присутності й не можете знову використати цю перевагу, поки маєте цю шкоду.`,
		type: FeatureType.Text,
		data: null,
		list: PerkList.Supernatural
	};
}
