import { AbilityKeyword } from '@/enums/ability-keyword';
import { Characteristic } from '@/enums/characteristic';
import { DamageModifierType } from '@/enums/damage-modifier-type';
import { DamageType } from '@/enums/damage-type';
import { FactoryLogic } from '@/logic/factory-logic';
import { FeatureField } from '@/enums/feature-field';
import { Item } from '@/models/item';
import { ItemType } from '@/enums/item-type';
import { KitWeapon } from '@/enums/kit-weapon';

export class LeveledWeaponData {
	static authoritysEnd: Item = FactoryLogic.createItem({
		id: 'item-authoritys-end',
		name: 'Кінець влади',
		description: 'Цей довгий звивистий ланцюг повністю складається з розірваних ланок, які тримає разом невидима сила.',
		type: ItemType.LeveledWeapon,
		keywords: [AbilityKeyword.Psionic, KitWeapon.Whip],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Батіг, яким карали бунтівника',
			source: 'Тексти або перекази мовою Кхелт (Khelt)',
			characteristic: [Characteristic.Reason, Characteristic.Intuition, Characteristic.Presence],
			goal: 450
		}),
		featuresByLevel: [
			{
				level: 1,
				features: [
					FactoryLogic.feature.createAbility({
						ability: FactoryLogic.createAbility({
							id: 'item-authoritys-end-1',
							name: 'Використати Кінець влади',
							type: FactoryLogic.type.createManeuver({ qualifiers: ['Одразу після того, як ви завдали істоті шкоди цією зброєю'] }),
							sections: [
								FactoryLogic.createAbilitySectionText('Завершіть один ефект, який ушкоджена істота наклала на вас або на іншу істоту в межах 5 клітинок від вас.')
							]
						})
					}),
					FactoryLogic.feature.createAbilityDamage({
						id: 'item-authoritys-end-1a',
						name: '',
						keywords: [AbilityKeyword.Weapon, AbilityKeyword.Melee],
						value: 1
					})
				]
			},
			{
				level: 5,
				features: [
					FactoryLogic.feature.create({
						id: 'item-authoritys-end-5',
						name: '',
						description: 'Ви й кожен союзник у межах 2 клітинок від вас отримуєте бонус +1 до рят. кидків.'
					}),
					FactoryLogic.feature.createAbilityDamage({
						id: 'item-authoritys-end-5a',
						name: '',
						keywords: [AbilityKeyword.Weapon, AbilityKeyword.Melee],
						value: 1
					})
				]
			},
			{
				level: 9,
				features: [
					FactoryLogic.feature.create({
						id: 'item-authoritys-end-9',
						name: '',
						description: 'Вам більше не потрібно використовувати маневр, щоб завершити один ефект, коли ви завдаєте істоті шкоди цією зброєю. Зброя також більше не намагається боротися за контроль над вашою психікою й не зараховується до межі рівневих скарбів, які ви можете безпечно носити.'
					}),
					FactoryLogic.feature.createAbilityDamage({
						id: 'item-authoritys-end-9a',
						name: '',
						keywords: [AbilityKeyword.Weapon, AbilityKeyword.Melee],
						value: 1
					})
				]
			}
		]
	});

	static bladeOfQuintessence: Item = FactoryLogic.createItem({
		id: 'item-blade-of-quintessence',
		name: 'Клинок Квінтесенції',
		description: 'Усередині цього кришталевого леза вирує буремний вихор вогню, криги й блискавки.',
		type: ItemType.LeveledWeapon,
		keywords: [KitWeapon.Medium, AbilityKeyword.Magic],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Рубін, загартований у вогнях Міста Латуні, сапфір, у який влучила блискавка',
			source: 'Тексти або перекази мовою Заліак (Zaliac)',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 450
		}),
		featuresByLevel: [
			{
				level: 1,
				features: [
					FactoryLogic.feature.create({
						id: 'item-blade-of-quintessence-1',
						name: '',
						description: 'Ви можете змінювати тип шкоди збройних здібностей на крижану, вогняну, блискавку або звукову.'
					}),
					FactoryLogic.feature.createAbilityDamage({
						id: 'item-blade-of-quintessence-1a',
						name: '',
						keywords: [AbilityKeyword.Weapon],
						value: 1
					})
				]
			},
			{
				level: 5,
				features: [
					FactoryLogic.feature.create({
						id: 'item-blade-of-quintessence-5',
						name: '',
						description: 'Цю зброю можна використовувати з дальніми збройними здібностями, і вона повертається до вас після завершення такої здібності. Дальні здібності, використані цією зброєю, мають завдавати крижаної, вогняної, блискавкової або звукової шкоди, на ваш вибір під час використання здібності.'
					}),
					FactoryLogic.feature.createAbilityDamage({
						id: 'item-blade-of-quintessence-5a',
						name: '',
						keywords: [AbilityKeyword.Weapon],
						value: 1
					}),
					FactoryLogic.feature.createAbilityDistance({
						id: 'item-blade-of-quintessence-5c',
						name: '',
						keywords: [AbilityKeyword.Weapon, AbilityKeyword.Ranged],
						value: 3
					})
				]
			},
			{
				level: 9,
				features: [
					FactoryLogic.feature.createAbilityDamage({
						id: 'item-blade-of-quintessence-9a',
						name: '',
						keywords: [AbilityKeyword.Weapon],
						value: 1
					}),
					FactoryLogic.feature.createDamageModifier({
						id: 'item-blade-of-quintessence-9b',
						modifiers: [
							FactoryLogic.damageModifier.create({
								damageType: DamageType.Cold,
								modifierType: DamageModifierType.Immunity,
								value: 10
							}),
							FactoryLogic.damageModifier.create({
								damageType: DamageType.Fire,
								modifierType: DamageModifierType.Immunity,
								value: 10
							}),
							FactoryLogic.damageModifier.create({
								damageType: DamageType.Lightning,
								modifierType: DamageModifierType.Immunity,
								value: 10
							}),
							FactoryLogic.damageModifier.create({
								damageType: DamageType.Sonic,
								modifierType: DamageModifierType.Immunity,
								value: 10
							})
						]
					})
				]
			}
		]
	});

	static bladeOfTheLuxuriousFop: Item = FactoryLogic.createItem({
		id: 'item-blade-of-the-luxurious-fop',
		name: 'Клинок розкішного чепуруна',
		description: 'Попри неймовірно химерне руківʼя, обвішане надмірною кількістю коштовностей, цей клинок лишається ідеально врівноваженим.',
		type: ItemType.LeveledWeapon,
		keywords: [KitWeapon.Light, AbilityKeyword.Magic],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Особисте благословення найвидатнішого дуелянта краю, шість фальшивих і надзвичайно блискучих самоцвітів',
			source: 'Тексти або перекази мовою Келіан (Caelian)',
			characteristic: [Characteristic.Agility, Characteristic.Reason, Characteristic.Intuition],
			goal: 450
		}),
		featuresByLevel: [
			{
				level: 1,
				features: [
					FactoryLogic.feature.create({
						id: 'item-blade-of-the-luxurious-fop-1',
						name: '',
						description: 'Щоразу, коли ви завдаєте шкоди цією зброєю, ви можете негайно зміститися на 1 клітинку. Крім того, поки ви володієте або носите цю зброю й присутні на переговорах, якщо NPC у цих переговорах має мотив жадібності, спадщини, влади або розваг, його початкова зацікавленість зростає на 1 (до максимуму 5).'
					}),
					FactoryLogic.feature.createAbilityDamage({
						id: 'item-blade-of-the-luxurious-fop-1a',
						name: '',
						keywords: [AbilityKeyword.Weapon, AbilityKeyword.Melee],
						value: 1
					})
				]
			},
			{
				level: 5,
				features: [
					FactoryLogic.feature.create({
						id: 'item-blade-of-the-luxurious-fop-5',
						name: '',
						description: 'Коли ви робите атаку можливості проти ворога вашого розміру або меншого, ви можете скористатися вишуканою роботою ніг, щоб збити його з ніг.'
					}),
					FactoryLogic.feature.createAbilityDamage({
						id: 'item-blade-of-the-luxurious-fop-5a',
						name: '',
						keywords: [AbilityKeyword.Weapon, AbilityKeyword.Melee],
						value: 1
					}),
					FactoryLogic.feature.createBonus({
						id: 'item-blade-of-the-luxurious-fop-5b',
						field: FeatureField.Renown,
						value: 1
					})
				]
			},
			{
				level: 9,
				features: [
					FactoryLogic.feature.create({
						id: 'item-blade-of-the-luxurious-fop-9',
						name: '',
						description: 'Ви маєте подвійну перевагу на будь-яке випробування з використанням навички, яку маєте з міжособистісної групи навичок.'
					}),
					FactoryLogic.feature.createAbilityDamage({
						id: 'item-blade-of-the-luxurious-fop-9a',
						name: '',
						keywords: [AbilityKeyword.Weapon, AbilityKeyword.Melee],
						value: 1
					})
				]
			}
		]
	});

	static displacer: Item = FactoryLogic.createItem({
		id: 'item-displacer',
		name: 'Зміщувач',
		description: 'Ця кришталева бойова сокира ніби смикає руки, що нею орудують, наче прагне сама перескочити через усе поле бою.',
		type: ItemType.LeveledWeapon,
		keywords: [KitWeapon.Medium, AbilityKeyword.Psionic],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Стародавня бронзова шестерня, вкрита нерозбірливими рунами',
			source: 'Тексти або перекази мовою Заліак (Zaliac)',
			characteristic: [Characteristic.Might, Characteristic.Intuition],
			goal: 450
		}),
		featuresByLevel: [
			{
				level: 1,
				features: [
					FactoryLogic.feature.createAbility({
						ability: FactoryLogic.createAbility({
							id: 'item-displacer-1',
							name: 'Використати Зміщувач',
							type: FactoryLogic.type.createManeuver({ qualifiers: ['Після того як ви завдаєте шкоди кидком'] }),
							sections: [
								FactoryLogic.createAbilitySectionText('Ви телепортуєте себе й ушкоджену істоту, міняючись із нею місцями, якщо ви обоє вміщаєтеся в простір одне одного.'),
								FactoryLogic.createAbilitySectionPackage('item-displacer-tag')
							]
						})
					}),
					FactoryLogic.feature.createAbilityDamage({
						id: 'item-displacer-1a',
						name: '',
						keywords: [AbilityKeyword.Weapon, AbilityKeyword.Melee],
						value: 1,
						damageType: DamageType.Psychic
					})
				]
			},
			{
				level: 5,
				features: [
					FactoryLogic.feature.createPackageContent({
						id: 'item-displacer-5',
						name: '5-й рівень',
						description: 'Ви можете помінятися місцями з будь-якою істотою в межах 4 клітинок від цілі, якщо ви обоє вміщаєтеся в простір одне одного.',
						tag: 'item-displacer-tag'
					}),
					FactoryLogic.feature.createAbilityDamage({
						id: 'item-displacer-5a',
						name: '',
						keywords: [AbilityKeyword.Weapon, AbilityKeyword.Melee],
						value: 1,
						damageType: DamageType.Psychic
					})
				]
			},
			{
				level: 9,
				features: [
					FactoryLogic.feature.createPackageContent({
						id: 'item-displacer-9',
						name: '9-й рівень',
						description: 'Ви можете помінятися місцями з будь-якою істотою в межах 8 клітинок від цілі, якщо ви обоє вміщаєтеся в простір одне одного. Крім того, ви можете зробити істоту, з якою помінялися місцями, ослабленою до кінця її наступного ходу або витратити Відновлення.',
						tag: 'item-displacer-tag'
					}),
					FactoryLogic.feature.createAbilityDamage({
						id: 'item-displacer-9a',
						name: '',
						keywords: [AbilityKeyword.Weapon, AbilityKeyword.Melee],
						value: 1,
						damageType: DamageType.Psychic
					})
				]
			}
		]
	});

	static executionersBlade: Item = FactoryLogic.createItem({
		id: 'item-executioners-blade',
		name: 'Клинок ката',
		description: 'Цей клинок видає тихе дзижчання, яке стає гучнішим, чим слабшою стає його здобич.',
		type: ItemType.LeveledWeapon,
		keywords: [KitWeapon.Heavy, AbilityKeyword.Psionic],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Череп засудженого злочинця',
			source: 'Тексти або перекази мовою Келіан (Caelian)',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 450
		}),
		featuresByLevel: [
			{
				level: 1,
				features: [
					FactoryLogic.feature.create({
						id: 'item-executioners-blade-1',
						name: '',
						description: 'Будь-яка збройна здібність, що завдає шкоди кидком цією зброєю, завдає додатково 1 психічної шкоди, або 2 психічної шкоди, якщо ціль захекана. Крім того, уперше за зіткнення, коли ви робите ворога захеканим здібністю з цією зброєю, ви отримуєте 10 тимчасової Витривалості.'
					}),
					FactoryLogic.feature.createAbilityDamage({
						id: 'item-executioners-blade-1a',
						name: '',
						keywords: [AbilityKeyword.Weapon, AbilityKeyword.Melee],
						value: 1,
						damageType: DamageType.Psychic
					})
				]
			},
			{
				level: 5,
				features: [
					FactoryLogic.feature.create({
						id: 'item-executioners-blade-5',
						name: '',
						description: 'Додаткова психічна шкода зброї зростає до 2, якщо ціль захекана. Крім того, щоразу, коли ви робите ворога захеканим здібністю з цією зброєю, ви отримуєте 2 сплески, які можете негайно витратити.'
					}),
					FactoryLogic.feature.createAbilityDamage({
						id: 'item-executioners-blade-5a',
						name: '',
						keywords: [AbilityKeyword.Weapon, AbilityKeyword.Melee],
						value: 1,
						damageType: DamageType.Psychic
					})
				]
			},
			{
				level: 9,
				features: [
					FactoryLogic.feature.create({
						id: 'item-executioners-blade-9',
						name: '',
						description: 'Додаткова психічна шкода зброї зростає до 3, якщо ціль захекана. Крім того, ви отримуєте перевагу на будь-яку здібність із цією зброєю проти захеканої цілі.'
					}),
					FactoryLogic.feature.createAbilityDamage({
						id: 'item-executioners-blade-9a',
						name: '',
						keywords: [AbilityKeyword.Weapon, AbilityKeyword.Melee],
						value: 1,
						damageType: DamageType.Psychic
					})
				]
			}
		]
	});

	static icemakerMaul: Item = FactoryLogic.createItem({
		id: 'item-icemaker-maul',
		name: 'Кувалда льодороба',
		description: 'Бойок цього платинового молота крижано-холодний на дотик і вкриває все, що вражає, тонким шаром льоду.',
		type: ItemType.LeveledWeapon,
		keywords: [KitWeapon.Heavy, AbilityKeyword.Magic],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Вісім залізних брусків, охолоджених у льодовику, гілка древнього вічнозеленого дерева',
			source: 'Тексти мовою Заліак (Zaliac)',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 450
		}),
		featuresByLevel: [
			{
				level: 1,
				features: [
					FactoryLogic.feature.createAbility({
						ability: FactoryLogic.createAbility({
							id: 'item-icemaker-maul-1',
							name: 'Використати Кувалду льодороба',
							type: FactoryLogic.type.createManeuver(),
							sections: [
								FactoryLogic.createAbilitySectionText('Ви створюєте крижане поле вибухом 3. Земля в цій області є складною місцевістю для ворогів і триває до кінця зіткнення або доки ви знову не використаєте цю здібність.'),
								FactoryLogic.createAbilitySectionPackage('item-icemaker-maul-tag')
							]
						})
					}),
					FactoryLogic.feature.createAbilityDamage({
						id: 'item-icemaker-maul-1a',
						name: '',
						keywords: [AbilityKeyword.Weapon, AbilityKeyword.Melee],
						value: 1,
						damageType: DamageType.Cold
					})
				]
			},
			{
				level: 5,
				features: [
					FactoryLogic.feature.createPackageContent({
						id: 'item-icemaker-maul-5',
						name: '5-й рівень',
						description: 'Крижане поле стає вибухом 4. Крім того, щоразу, коли ви використовуєте збройну здібність із цією зброєю проти одного або кількох ворогів у крижаному полі, ви отримуєте 1 сплеск, який можна використати негайно.',
						tag: 'item-icemaker-maul-tag'
					}),
					FactoryLogic.feature.createAbilityDamage({
						id: 'item-icemaker-maul-5a',
						name: '',
						keywords: [AbilityKeyword.Weapon, AbilityKeyword.Melee],
						value: 1,
						damageType: DamageType.Cold
					})
				]
			},
			{
				level: 9,
				features: [
					FactoryLogic.feature.createPackageContent({
						id: 'item-icemaker-maul-9',
						name: '9-й рівень',
						description: 'Крижане поле стає вибухом 5. Крім того, будь-якого ворога в крижаному полі, чию Витривалість зводить до 0 здібність із цією зброєю, можна розтрощити, убивши його й завдавши 15 крижаної шкоди кожному ворогу в межах 3 клітинок від нього.',
						tag: 'item-icemaker-maul-tag'
					}),
					FactoryLogic.feature.createAbilityDamage({
						id: 'item-icemaker-maul-9a',
						name: '',
						keywords: [AbilityKeyword.Weapon, AbilityKeyword.Melee],
						value: 1,
						damageType: DamageType.Cold
					})
				]
			}
		]
	});

	static knifeOfNine: Item = FactoryLogic.createItem({
		id: 'item-knife-of-nine',
		name: 'Ніж Девʼяти',
		description: 'На лезі цього кістяного кинджала є девʼять ледь світних заглибин.',
		type: ItemType.LeveledWeapon,
		keywords: [KitWeapon.Light, AbilityKeyword.Psionic],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Вісімнадцять кинджалів: девʼять забраних у особистих ворогів і девʼять подарованих друзями',
			source: 'Тексти або перекази мовою Варіак (Variac)',
			characteristic: [Characteristic.Reason, Characteristic.Intuition],
			goal: 450
		}),
		featuresByLevel: [
			{
				level: 1,
				features: [
					FactoryLogic.feature.create({
						id: 'item-knife-of-nine-1',
						name: '',
						description: 'Будь-яка збройна здібність, що завдає шкоди кидком цією зброєю, завдає додатково 1 психічної шкоди. Ця додаткова шкода зростає на 1 щоразу, коли ви знову завдаєте шкоди кидком цією зброєю тій самій цілі під час того самого зіткнення, до максимуму 3.'
					})
				]
			},
			{
				level: 5,
				features: [
					FactoryLogic.feature.create({
						id: 'item-knife-of-nine-5',
						name: '',
						description: 'Щоразу, коли ви зводите Витривалість істоти до 0 здібністю з цією зброєю, одна з її заглибин починає світитися яскравіше.'
					}),
					FactoryLogic.feature.createAbility({
						ability: FactoryLogic.createAbility({
							id: 'item-knife-of-nine-5a',
							name: 'Використати Ніж Девʼяти',
							type: FactoryLogic.type.createTrigger('Використати сигнатурну здібність із цією зброєю'),
							sections: [
								FactoryLogic.createAbilitySectionText('Витратьте будь-яку кількість яскраво сяйних заглибин. Здібність завдає додаткової психічної шкоди, що дорівнює кількості витрачених заглибин. Після цього витрачені заглибини знову тьмяно світяться.')
							]
						})
					})
				]
			},
			{
				level: 9,
				features: [
					FactoryLogic.feature.create({
						id: 'item-knife-of-nine-9',
						name: '',
						description: 'Якщо ви робите збройний удар цією зброєю по цілі після того, як стрибнули на неї з висоти 2 клітинок або більше, атака завдає додатково 10 психічної шкоди. Ви можете розподілити всю додаткову психічну шкоду від атаки між ціллю та будь-якими ворогами поруч із нею.'
					})
				]
			}
		]
	});

	static lanceOfTheSunderedStar: Item = FactoryLogic.createItem({
		id: 'item-lance-of-the-sundered-star',
		name: 'Спис розколотої зорі',
		description: 'Цей голкоподібний спис викувано з мерехтливого металу, і в тих, хто його тримає, він будить тугу за небом.',
		type: ItemType.LeveledWeapon,
		keywords: [AbilityKeyword.Magic, KitWeapon.Polearm],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Пелюстки нічноквітучих квітів, зореметалевий метеорит',
			source: 'Тексти або перекази мовою Гіраллік (Hyrallic)',
			characteristic: [Characteristic.Agility, Characteristic.Presence],
			goal: 450
		}),
		featuresByLevel: [
			{
				level: 1,
				features: [
					FactoryLogic.feature.create({
						id: 'item-lance-of-the-sundered-star-1',
						name: '',
						description: 'Коли зброю використовують зі збройною здібністю, що дозволяє відштовхнути ціль, ви можете зміститися в будь-яку клітинку поруч із ціллю після відштовхування.'
					}),
					FactoryLogic.feature.createAbilityDamage({
						id: 'item-lance-of-the-sundered-star-1a',
						name: '',
						keywords: [AbilityKeyword.Weapon, AbilityKeyword.Melee],
						value: 1,
						damageType: DamageType.Holy
					})
				]
			},
			{
				level: 5,
				features: [
					FactoryLogic.feature.create({
						id: 'item-lance-of-the-sundered-star-5',
						name: '',
						description: 'Коли ви використовуєте основну дію Charge і здібність із ключовим словом Charge, або коли використовуєте здібність, що дозволяє вам зміститися, ви можете летіти як частину руху під час Charge або зміщення. Якщо наприкінці польоту ви не стоїте на землі, ви падаєте.'
					}),
					FactoryLogic.feature.createAbilityDamage({
						id: 'item-lance-of-the-sundered-star-5a',
						name: '',
						keywords: [AbilityKeyword.Weapon, AbilityKeyword.Melee],
						value: 1,
						damageType: DamageType.Holy
					})
				]
			},
			{
				level: 9,
				features: [
					FactoryLogic.feature.create({
						id: 'item-lance-of-the-sundered-star-9',
						name: '',
						description: 'Коли зброю використовують зі збройною здібністю, що дозволяє відштовхнути або зсунути ціль, це примусове переміщення може бути вертикальним.'
					}),
					FactoryLogic.feature.createAbilityDamage({
						id: 'item-lance-of-the-sundered-star-9a',
						name: '',
						keywords: [AbilityKeyword.Weapon, AbilityKeyword.Melee],
						value: 1,
						damageType: DamageType.Holy
					})
				]
			}
		]
	});

	static moltenConstrictor: Item = FactoryLogic.createItem({
		id: 'item-molten-constrictor',
		name: 'Розпечений удав',
		description: 'Ця гнучка сітка з чорного заліза палає жаром вулкана.',
		type: ItemType.LeveledWeapon,
		keywords: [AbilityKeyword.Magic, KitWeapon.Ensnaring],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Чотири залізні бруски, вкриті магмовим шлаком',
			source: 'Тексти або перекази мовою Келіан (Caelian)',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 450
		}),
		featuresByLevel: [
			{
				level: 1,
				features: [
					FactoryLogic.feature.create({
						id: 'item-molten-constrictor-1',
						name: '',
						description: 'Щоразу, коли ви робите удар сіткою й отримуєте результат 3-го рівня, ви можете автоматично схопити ціль. Ціль, схоплена таким чином, має шкоду на маневр «Втекти з захвату».'
					}),
					FactoryLogic.feature.createAbilityDamage({
						id: 'item-molten-constrictor-1a',
						name: '',
						keywords: [AbilityKeyword.Weapon, AbilityKeyword.Melee],
						value: 1,
						damageType: DamageType.Fire
					})
				]
			},
			{
				level: 5,
				features: [
					FactoryLogic.feature.create({
						id: 'item-molten-constrictor-5',
						name: '',
						description: 'Схоплена ударом сітки ціль отримує 8 вогняної шкоди щоразу, коли намагається вирватися маневром «Втекти з захвату».'
					}),
					FactoryLogic.feature.createAbilityDamage({
						id: 'item-molten-constrictor-5a',
						name: '',
						keywords: [AbilityKeyword.Weapon, AbilityKeyword.Melee],
						value: 1,
						damageType: DamageType.Fire
					})
				]
			},
			{
				level: 9,
				features: [
					FactoryLogic.feature.create({
						id: 'item-molten-constrictor-9',
						name: '',
						description: 'Шкода, яку отримує схоплена істота, коли намагається вирватися, зростає до 15.'
					}),
					FactoryLogic.feature.createAbilityDamage({
						id: 'item-molten-constrictor-9a',
						name: '',
						keywords: [AbilityKeyword.Weapon, AbilityKeyword.Melee],
						value: 1,
						damageType: DamageType.Fire
					}),
					FactoryLogic.feature.createAbility({
						ability: FactoryLogic.createAbility({
							id: 'item-molten-constrictor-9b',
							name: 'Здібність зброї',
							type: FactoryLogic.type.createManeuver(),
							distance: [FactoryLogic.distance.createSpecial('')],
							target: 'Одна істота, схоплена сіткою.',
							sections: [
								FactoryLogic.createAbilitySectionText('Зробіть вільний удар іншою зброєю по цілі.')
							]
						})
					})
				]
			}
		]
	});

	static onerousBow: Item = FactoryLogic.createItem({
		id: 'item-onerous-bow',
		name: 'Обтяжливий лук',
		description: 'Цей механічний лук оснащено магічними резервуарами, що ледь віддають запахом токсинів.',
		type: ItemType.LeveledWeapon,
		keywords: [KitWeapon.Bow, AbilityKeyword.Magic],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Отруйний мішок велетенського павука, один валокський гіроскоп',
			source: 'Тексти або перекази мовами Келіан (Caelian) та Варіак (Variac)',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 450
		}),
		featuresByLevel: [
			{
				level: 1,
				features: [
					FactoryLogic.feature.create({
						id: 'item-onerous-bow-1',
						name: '',
						description: 'Будь-яка сигнатурна здібність із цією зброєю, що дає результат 3-го рівня, також ослаблює ціль до кінця її наступного ходу.'
					}),
					FactoryLogic.feature.createAbilityDamage({
						id: 'item-onerous-bow-1a',
						name: '',
						keywords: [AbilityKeyword.Weapon, AbilityKeyword.Ranged],
						value: 1
					})
				]
			},
			{
				level: 5,
				features: [
					FactoryLogic.feature.create({
						id: 'item-onerous-bow-5',
						name: '',
						description: 'Сигнатурна здібність із цією зброєю, що дає результат 3-го рівня, також робить ціль ослабленою й сповільненою до кінця її наступного ходу.'
					}),
					FactoryLogic.feature.createAbilityDamage({
						id: 'item-onerous-bow-5a',
						name: '',
						keywords: [AbilityKeyword.Weapon, AbilityKeyword.Ranged],
						value: 1
					})
				]
			},
			{
				level: 9,
				features: [
					FactoryLogic.feature.create({
						id: 'item-onerous-bow-9',
						name: '',
						description: 'Якщо ви використовуєте здібність із цією зброєю, що націлює одну істоту, і ця здібність не має шкоди або подвійної шкоди, ви можете навмисно накласти на неї шкоду. Якщо робите це, ви також можете націлити ще одну істоту поруч із початковою ціллю. Або ж можете накласти подвійну шкоду, щоб націлити двох істот поруч із початковою ціллю.'
					}),
					FactoryLogic.feature.createAbilityDamage({
						id: 'item-onerous-bow-9a',
						name: '',
						keywords: [AbilityKeyword.Weapon, AbilityKeyword.Ranged],
						value: 1
					})
				]
			}
		]
	});

	static steeltongue: Item = FactoryLogic.createItem({
		id: 'item-steeltongue',
		name: 'Сталеязик',
		description: 'Цей звивистий батіг відбиває все світло від своїх сталевих пластин.',
		type: ItemType.LeveledWeapon,
		keywords: [AbilityKeyword.Magic, KitWeapon.Whip],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Сто сталевих наконечників стріл, заплямованих кровʼю',
			source: 'Тексти або перекази мовами Келіан (Caelian) та Калліак (Kalliak)',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 450
		}),
		featuresByLevel: [
			{
				level: 1,
				features: [
					FactoryLogic.feature.create({
						id: 'item-steeltongue-1',
						name: '',
						description: 'Будь-яка збройна здібність, що завдає шкоди цією зброєю по цілі з Л < [середній], також накладає на ціль кровотечу (рят. кидок закінчує).'
					}),
					FactoryLogic.feature.createAbilityDistance({
						id: 'item-steeltongue-1a',
						name: '',
						keywords: [AbilityKeyword.Weapon, AbilityKeyword.Melee],
						value: 1
					})
				]
			},
			{
				level: 5,
				features: [
					FactoryLogic.feature.create({
						id: 'item-steeltongue-5',
						name: '',
						description: 'Будь-яка збройна здібність, що завдає шкоди кидком цією зброєю, отримує бонус +3 до шкоди проти будь-якої цілі з кровотечею.'
					}),
					FactoryLogic.feature.createAbilityDistance({
						id: 'item-steeltongue-5a',
						name: '',
						keywords: [AbilityKeyword.Weapon, AbilityKeyword.Melee],
						value: 1
					})
				]
			},
			{
				level: 9,
				features: [
					FactoryLogic.feature.create({
						id: 'item-steeltongue-9',
						name: '',
						description: 'Крім того, якщо ви використовуєте сигнатурну здібність цією зброєю, яка націлює одну або більше істот із кровотечею, ви можете негайно використати ту саму здібність знову як маневр.'
					}),
					FactoryLogic.feature.createAbilityDistance({
						id: 'item-steeltongue-9a',
						name: '',
						keywords: [AbilityKeyword.Weapon, AbilityKeyword.Melee],
						value: 1
					})
				]
			}
		]
	});

	static thirdEyeSeeker: Item = FactoryLogic.createItem({
		id: 'item-third-eye-seeker',
		name: 'Шукач третього ока',
		description: 'Мінливі візерунки на кришталевому руківʼї цього лука нагадують десятки кліпаючих очей.',
		type: ItemType.LeveledWeapon,
		keywords: [KitWeapon.Bow, AbilityKeyword.Psionic],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Жили серця тапіра, фунт самоцвітів тигрового ока',
			source: 'Тексти або перекази мовою Варіак (Variac)',
			characteristic: [Characteristic.Reason, Characteristic.Intuition],
			goal: 450
		}),
		featuresByLevel: [
			{
				level: 1,
				features: [
					FactoryLogic.feature.create({
						id: 'item-third-eye-seeker-1',
						name: '',
						description: 'Будь-яка збройна здібність, що завдає шкоди цією зброєю й дає результат 3-го рівня, також приголомшує ціль до кінця її наступного ходу.'
					}),
					FactoryLogic.feature.createAbilityDamage({
						id: 'item-third-eye-seeker-1a',
						name: '',
						keywords: [AbilityKeyword.Weapon, AbilityKeyword.Ranged],
						value: 1,
						damageType: DamageType.Psychic
					})
				]
			},
			{
				level: 5,
				features: [
					FactoryLogic.feature.createAbility({
						ability: FactoryLogic.createAbility({
							id: 'item-third-eye-seeker-5',
							name: 'Здібність зброї',
							type: FactoryLogic.type.createTrigger('Після того як тригерна дія цілі розвʼяжеться'),
							distance: [FactoryLogic.distance.createSpecial('Дальність дальнього збройного вільного удару')],
							target: 'Один ворог',
							sections: [
								FactoryLogic.createAbilitySectionText('Зробіть дальній збройний вільний удар цією зброєю по цілі.')
							]
						})
					}),
					FactoryLogic.feature.createAbilityDamage({
						id: 'item-third-eye-seeker-5a',
						name: '',
						keywords: [AbilityKeyword.Weapon, AbilityKeyword.Ranged],
						value: 1,
						damageType: DamageType.Psychic
					})
				]
			},
			{
				level: 9,
				features: [
					FactoryLogic.feature.create({
						id: 'item-third-eye-seeker-9',
						name: '',
						description: 'Ви маєте подвійну перевагу на збройні здібності з цією зброєю проти істот, які використали псіонічну здібність після кінця вашого останнього ходу.'
					}),
					FactoryLogic.feature.createAbilityDamage({
						id: 'item-third-eye-seeker-9a',
						name: '',
						keywords: [AbilityKeyword.Weapon, AbilityKeyword.Ranged],
						value: 1,
						damageType: DamageType.Psychic
					})
				]
			}
		]
	});

	static thunderheadBident: Item = FactoryLogic.createItem({
		id: 'item-thunderhead-bident',
		name: 'Грозовий бідент',
		description: 'Цей бідент зроблено з двох смуг місячного металу, скручених докупи, і він гуде, мов камертон.',
		type: ItemType.LeveledWeapon,
		keywords: [AbilityKeyword.Magic, KitWeapon.Medium],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Банка спійманого грому, два злитки місячного металу',
			source: 'Тексти або перекази мовою Заліак (Zaliac)',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 450
		}),
		featuresByLevel: [
			{
				level: 1,
				features: [
					FactoryLogic.feature.create({
						id: 'item-thunderhead-bident-1',
						name: '',
						description: 'Коли зброю використовують із будь-якою здібністю, що відштовхує ціль, ви отримуєте бонус +1 до дальності примусового переміщення. Якщо зброю використовують із здібністю, що завдає шкоди, але не накладає примусового переміщення, ви можете відштовхнути ціль на 1 клітинку.'
					}),
					FactoryLogic.feature.createAbilityDamage({
						id: 'item-thunderhead-bident-1a',
						name: '',
						keywords: [AbilityKeyword.Weapon, AbilityKeyword.Melee],
						value: 1,
						damageType: DamageType.Sonic
					})
				]
			},
			{
				level: 5,
				features: [
					FactoryLogic.feature.create({
						id: 'item-thunderhead-bident-5',
						name: '',
						description: 'Додаткова дальність відштовхування для здібностей із цією зброєю зростає до 2 клітинок. Крім того, цю зброю можна використовувати з дальніми збройними здібностями, і чим далі її жбурнути, тим більшої сили вона набирає. За кожні 2 клітинки, які зброя долає до цілі дальнього удару, цей удар завдає додатково 1 звукової шкоди.'
					}),
					FactoryLogic.feature.createAbilityDamage({
						id: 'item-thunderhead-bident-5a',
						name: '',
						keywords: [AbilityKeyword.Weapon, AbilityKeyword.Melee],
						value: 1,
						damageType: DamageType.Sonic
					})
				]
			},
			{
				level: 9,
				features: [
					FactoryLogic.feature.create({
						id: 'item-thunderhead-bident-9',
						name: '',
						description: 'Зброя завдає додатково 1 звукової шкоди за кожну клітинку, яку долає як частину дальнього удару. Крім того, щоразу, коли ви робите збройний удар цією зброєю, кожен ворог поруч із ціллю отримує 6 звукової шкоди.'
					}),
					FactoryLogic.feature.createAbilityDamage({
						id: 'item-thunderhead-bident-9a',
						name: '',
						keywords: [AbilityKeyword.Weapon, AbilityKeyword.Melee],
						value: 1,
						damageType: DamageType.Sonic
					})
				]
			}
		]
	});

	static wetwork: Item = FactoryLogic.createItem({
		id: 'item-wetwork',
		name: 'Мокра справа',
		description: 'Коли ви вперше берете цю наґінату до рук, вона шепоче імена своїх минулих жертв.',
		type: ItemType.LeveledWeapon,
		keywords: [KitWeapon.Polearm, AbilityKeyword.Psionic],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Складене металеве лезо, просочене кровʼю',
			source: 'Тексти або перекази мовою Хігаран (Higaran)',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 450
		}),
		featuresByLevel: [
			{
				level: 1,
				features: [
					FactoryLogic.feature.createAbility({
						ability: FactoryLogic.createAbility({
							id: 'item-wetwork-1',
							name: 'Здібність зброї',
							type: FactoryLogic.type.createManeuver({ qualifiers: ['Після того як ви зводите істоту до 0 Витривалості цією зброєю'] }),
							distance: [FactoryLogic.distance.createMelee()],
							target: 'Один ворог',
							sections: [
								FactoryLogic.createAbilitySectionText('Зробіть ближній вільний удар.'),
								FactoryLogic.createAbilitySectionPackage('item-wetwork-tag')
							]
						})
					}),
					FactoryLogic.feature.createAbilityDamage({
						id: 'item-wetwork-1a',
						name: '',
						keywords: [AbilityKeyword.Weapon, AbilityKeyword.Melee],
						value: 1,
						damageType: DamageType.Psychic
					})
				]
			},
			{
				level: 5,
				features: [
					FactoryLogic.feature.createPackageContent({
						id: 'item-wetwork-5',
						name: '5-й рівень',
						description: 'Ви можете переміститися на відстань до 2 клітинок до або після удару.',
						tag: 'item-wetwork-tag'
					}),
					FactoryLogic.feature.createAbilityDamage({
						id: 'item-wetwork-5a',
						name: '',
						keywords: [AbilityKeyword.Weapon, AbilityKeyword.Melee],
						value: 1,
						damageType: DamageType.Psychic
					})
				]
			},
			{
				level: 9,
				features: [
					FactoryLogic.feature.create({
						id: 'item-wetwork-9',
						name: '',
						description: 'Додаткова шкода зброї зростає до 3. Крім того, якщо ви вбиваєте істоту цією зброєю, ви можете використати маневр, щоб переміститися на відстань до своєї швидкості й зробити або сигнатурний удар, або ближній вільний удар.'
					}),
					FactoryLogic.feature.createPackageContent({
						id: 'item-wetwork-9b',
						name: '9-й рівень',
						description: 'Або ж ви можете переміститися на відстань до своєї швидкості й зробити або сигнатурну здібність-удар, або ближній вільний удар.',
						tag: 'item-wetwork-tag'
					}),
					FactoryLogic.feature.createAbilityDamage({
						id: 'item-wetwork-9a',
						name: '',
						keywords: [AbilityKeyword.Weapon, AbilityKeyword.Melee],
						value: 1,
						damageType: DamageType.Psychic
					})
				]
			}
		]
	});
}
