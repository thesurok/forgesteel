import { AbilityKeyword } from '@/enums/ability-keyword';
import { Characteristic } from '@/enums/characteristic';
import { DamageModifierType } from '@/enums/damage-modifier-type';
import { DamageType } from '@/enums/damage-type';
import { FactoryLogic } from '@/logic/factory-logic';
import { FeatureField } from '@/enums/feature-field';
import { Item } from '@/models/item';
import { ItemType } from '@/enums/item-type';

export class LeveledImplementData {
	static abjurersBastion: Item = FactoryLogic.createItem({
		id: 'item-abjurers-bastion',
		name: 'Бастіон абʼюратора',
		description: 'Оздоблена каблучка інкрустована великим діамантом із закрученим усередині синім світлом, а її внутрішню поверхню вкрито захисними рунами.',
		type: ItemType.LeveledImplement,
		keywords: [AbilityKeyword.Implement, AbilityKeyword.Magic],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Діамантова каблучка',
			source: 'Тексти або перекази мовою Келіан (Caelian)',
			characteristic: [Characteristic.Might, Characteristic.Presence, Characteristic.Intuition],
			goal: 450
		}),
		featuresByLevel: [
			{
				level: 1,
				features: [
					FactoryLogic.feature.create({
						id: 'item-abjurers-bastion-1',
						name: '',
						description: 'Щоразу, коли ви завдаєте істоті шкоди кидком за допомогою магічної або псіонічної здібності, ви отримуєте тимчасову Витривалість, рівну вашому найвищому показнику характеристики.'
					}),
					FactoryLogic.feature.createAbilityDamage({
						id: 'item-abjurers-bastion-1a',
						keywords: [AbilityKeyword.Magic],
						value: 1
					}),
					FactoryLogic.feature.createAbilityDamage({
						id: 'item-abjurers-bastion-1b',
						keywords: [AbilityKeyword.Psionic],
						value: 1
					})
				]
			},
			{
				level: 5,
				features: [
					FactoryLogic.feature.createAbility({
						ability: FactoryLogic.createAbility({
							id: 'item-abjurers-bastion-5',
							name: 'Використати Бастіон абʼюратора',
							type: FactoryLogic.type.createManeuver({ qualifiers: ['Після того як ви завдаєте шкоди кидком за допомогою магічної або псіонічної здібності'] }),
							sections: [
								FactoryLogic.createAbilitySectionText('Створіть нерухоме поле захисту у вигляді куба 1 навколо себе або союзника в межах 5 клітинок. Поки ціль перебуває в області, вона має імунітет до шкоди 5. Поле зникає на початку вашого наступного ходу.'),
								FactoryLogic.createAbilitySectionPackage('item-abjurers-bastion-tag')
							]
						})
					}),
					FactoryLogic.feature.createAbilityDamage({
						id: 'item-abjurers-bastion-5a',
						keywords: [AbilityKeyword.Magic],
						value: 1
					}),
					FactoryLogic.feature.createAbilityDamage({
						id: 'item-abjurers-bastion-5b',
						keywords: [AbilityKeyword.Psionic],
						value: 1
					})
				]
			},
			{
				level: 9,
				features: [
					FactoryLogic.feature.create({
						id: 'item-abjurers-bastion-9',
						name: '',
						description: 'Щоразу, коли ви завдаєте істоті шкоди кидком за допомогою магічної або псіонічної здібності, ви й кожен союзник у межах 5 клітинок від вас отримуєте тимчасову Витривалість, рівну вашому найвищому показнику характеристики.'
					}),
					FactoryLogic.feature.createAbilityDamage({
						id: 'item-abjurers-bastion-9a',
						keywords: [AbilityKeyword.Magic],
						value: 1
					}),
					FactoryLogic.feature.createAbilityDamage({
						id: 'item-abjurers-bastion-9b',
						keywords: [AbilityKeyword.Psionic],
						value: 1
					}),
					FactoryLogic.feature.createPackageContent({
						id: 'item-abjurers-bastion-9c',
						name: '',
						description: 'Розмір вашого поля захисту зростає до куба 3, і його можна розмістити будь-де в межах 10 клітинок від вас. Ви й кожен союзник в області отримуєте його переваги.',
						tag: 'item-abjurers-bastion-tag'
					})
				]
			}
		]
	});

	static brittlebreaker: Item = FactoryLogic.createItem({
		id: 'item-brittlebreaker',
		name: 'Крихколом',
		description: 'Цей кришталевий жезл пульсує силою, але він такий тонкий і крихкий, що здається, ніби навіть легкий стиск його розібʼє.',
		type: ItemType.LeveledImplement,
		keywords: [AbilityKeyword.Psionic, AbilityKeyword.Wand],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Жменя розбитого кварцу',
			source: 'Тексти або перекази мовою Келіан (Caelian)',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 450
		}),
		featuresByLevel: [
			{
				level: 1,
				features: [
					FactoryLogic.feature.create({
						id: 'item-brittlebreaker-1',
						name: 'Здібність імплементу',
						description: 'Поки ви орудуєте цим імплементом, ви отримуєте перевагу на магічні або псіонічні здібності, якщо не маєте повної Витривалості, або подвійну перевагу, якщо ви захекані.'
					}),
					FactoryLogic.feature.createDamageModifier({
						id: 'item-brittlebreaker-1a',
						modifiers: [
							FactoryLogic.damageModifier.create({
								damageType: DamageType.Damage,
								modifierType: DamageModifierType.Weakness,
								value: 3
							})
						]
					}),
					FactoryLogic.feature.createAbilityDamage({
						id: 'item-brittlebreaker-1b',
						keywords: [AbilityKeyword.Magic],
						value: 2,
						damageType: DamageType.Psychic
					}),
					FactoryLogic.feature.createAbilityDamage({
						id: 'item-brittlebreaker-1c',
						keywords: [AbilityKeyword.Psionic],
						value: 2,
						damageType: DamageType.Psychic
					})
				]
			},
			{
				level: 5,
				features: [
					FactoryLogic.feature.create({
						id: 'item-brittlebreaker-5',
						name: '',
						description: 'Раз за раунд, коли ви отримуєте понад 20 шкоди від одного джерела, додаткова шкода імплементу подвоюється до кінця вашого наступного ходу.'
					}),
					FactoryLogic.feature.createAbilityDamage({
						id: 'item-brittlebreaker-5a',
						keywords: [AbilityKeyword.Magic],
						value: 1,
						damageType: DamageType.Psychic
					}),
					FactoryLogic.feature.createAbilityDamage({
						id: 'item-brittlebreaker-5b',
						keywords: [AbilityKeyword.Psionic],
						value: 1,
						damageType: DamageType.Psychic
					})
				]
			},
			{
				level: 9,
				features: [
					FactoryLogic.feature.create({
						id: 'item-brittlebreaker-9',
						name: '',
						description: 'Щоразу, коли ви використовуєте магічну або псіонічну здібність, що завдає шкоди, ви можете отримати шкоду, що дорівнює половині загальної шкоди, завданої всім цілям, щоб негайно використати ту саму здібність ще раз. Цю шкоду не можна зменшити жодним способом. Ви не можете використовувати цю перевагу більше ніж раз за хід.'
					}),
					FactoryLogic.feature.createAbilityDamage({
						id: 'item-brittlebreaker-9a',
						keywords: [AbilityKeyword.Magic],
						value: 1,
						damageType: DamageType.Psychic
					}),
					FactoryLogic.feature.createAbilityDamage({
						id: 'item-brittlebreaker-9b',
						keywords: [AbilityKeyword.Psionic],
						value: 1,
						damageType: DamageType.Psychic
					})
				]
			}
		]
	});

	static chaldorb: Item = FactoryLogic.createItem({
		id: 'item-chaldorb',
		name: 'Халдорб',
		description: 'Ідеально прозору сферу оздоблено тонкою різьбою з бивня й кришталю, крижано-холодних на дотик.',
		type: ItemType.LeveledImplement,
		keywords: [AbilityKeyword.Implement, AbilityKeyword.Magic],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Унція первісної криги, унція уламків мамонтового бивня',
			source: 'Тексти або перекази мовою Заліак (Zaliac)',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 450
		}),
		featuresByLevel: [
			{
				level: 1,
				features: [
					FactoryLogic.feature.create({
						id: 'item-chaldorb-1',
						name: '',
						description: 'Поки ви орудуєте цим імплементом, якщо ви робите магічний удар, він має завдавати крижаної шкоди замість звичайної.'
					}),
					FactoryLogic.feature.createAbilityDamage({
						id: 'item-chaldorb-1a',
						keywords: [AbilityKeyword.Magic],
						value: 1
					}),
					FactoryLogic.feature.createAbilityDamage({
						id: 'item-chaldorb-1b',
						keywords: [AbilityKeyword.Psionic],
						value: 1
					})
				]
			},
			{
				level: 5,
				features: [
					FactoryLogic.feature.create({
						id: 'item-chaldorb-5',
						name: '',
						description: 'Щоразу, коли ви використовуєте магічну або псіонічну здібність, навколо вас шмагає вихор крижаної крупи й льоду, завдаючи 3 крижаної шкоди кожному сусідньому ворогу.'
					}),
					FactoryLogic.feature.createAbilityDamage({
						id: 'item-chaldorb-5a',
						keywords: [AbilityKeyword.Magic],
						value: 1
					}),
					FactoryLogic.feature.createAbilityDamage({
						id: 'item-chaldorb-5b',
						keywords: [AbilityKeyword.Psionic],
						value: 1
					})
				]
			},
			{
				level: 9,
				features: [
					FactoryLogic.feature.create({
						id: 'item-chaldorb-9',
						name: '',
						description: 'Вихор, який ви створюєте під час використання магічної або псіонічної здібності, завдає 6 крижаної шкоди кожному ворогу в межах 2 клітинок від вас. Крім того, вихор створює навколо вас ауру 2, що триває до початку вашого наступного ходу. Кожен ворог, який уперше за бойовий раунд входить в ауру або починає там свій хід, отримує 6 крижаної шкоди.'
					}),
					FactoryLogic.feature.createAbilityDamage({
						id: 'item-chaldorb-9a',
						keywords: [AbilityKeyword.Magic],
						value: 1
					}),
					FactoryLogic.feature.createAbilityDamage({
						id: 'item-chaldorb-9b',
						keywords: [AbilityKeyword.Psionic],
						value: 1
					})
				]
			}
		]
	});

	static etherFueledVessel: Item = FactoryLogic.createItem({
		id: 'item-ether-fueled-vessel',
		name: 'Етероживлена посудина',
		description: 'Цю бронзову посудину викувано у формі примарної постаті.',
		type: ItemType.LeveledImplement,
		keywords: [AbilityKeyword.Implement, AbilityKeyword.Psionic],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Ладан, дистильований з есенції етеру',
			source: 'Тексти або перекази мовою Келіан (Caelian)',
			characteristic: [Characteristic.Intuition, Characteristic.Reason],
			goal: 450
		}),
		featuresByLevel: [
			{
				level: 1,
				features: [
					FactoryLogic.feature.create({
						id: 'item-ether-fueled-vessel-1',
						name: '',
						description: 'Поки ви орудуєте цим імплементом, щоразу, коли ви завдаєте істоті шкоди кидком за допомогою магічної або псіонічної здібності, вона стає безтілесною для вас до кінця свого наступного ходу, дозволяючи вам вільно проходити крізь неї. Поки істота безтілесна, вона не може робити проти вас атаки можливості.'
					}),
					FactoryLogic.feature.createAbilityDamage({
						id: 'item-ether-fueled-vessel-1a',
						keywords: [AbilityKeyword.Magic],
						value: 1
					}),
					FactoryLogic.feature.createAbilityDamage({
						id: 'item-ether-fueled-vessel-1b',
						keywords: [AbilityKeyword.Psionic],
						value: 1
					})
				]
			},
			{
				level: 5,
				features: [
					FactoryLogic.feature.create({
						id: 'item-ether-fueled-vessel-5',
						name: '',
						description: 'Коли ви проходите крізь істоту, яка є безтілесною для вас, ви можете використати безкоштовну тригерну дію, щоб завдати їй шкоди, що дорівнює вашому найвищому показнику характеристики. Якщо ви це робите, ефект безтілесності негайно закінчується після того, як ви пройдете крізь істоту в сусідній простір за її межами.'
					}),
					FactoryLogic.feature.createAbilityDamage({
						id: 'item-ether-fueled-vessel-5a',
						keywords: [AbilityKeyword.Magic],
						value: 1
					}),
					FactoryLogic.feature.createAbilityDamage({
						id: 'item-ether-fueled-vessel-5b',
						keywords: [AbilityKeyword.Psionic],
						value: 1
					})
				]
			},
			{
				level: 9,
				features: [
					FactoryLogic.feature.create({
						id: 'item-ether-fueled-vessel-9',
						name: '',
						description: 'Будь-яка істота, яка є безтілесною для вас і не є лідером або одиночною істотою, також не може робити атаки можливості проти ваших союзників, доки лишається безтілесною.'
					}),
					FactoryLogic.feature.createAbilityDamage({
						id: 'item-ether-fueled-vessel-9a',
						keywords: [AbilityKeyword.Magic],
						value: 1
					}),
					FactoryLogic.feature.createAbilityDamage({
						id: 'item-ether-fueled-vessel-9b',
						keywords: [AbilityKeyword.Psionic],
						value: 1
					})
				]
			}
		]
	});

	static fieldCommandersBaton: Item = FactoryLogic.createItem({
		id: 'item-field-commanders-baton',
		name: 'Батон 33 польових командирів',
		description: `
Цей довгий оздоблений жезл із кулястим срібним навершям оплетений 33 зеленими шнурами. Поки ви орудуєте батоном, починає рости новий шнур.

**Особливе**: Якщо ви тактик, то можете орудувати цим імплементом так, ніби він має ключове слово Легка зброя. Замініть будь-яке посилання на магічні або псіонічні здібності посиланням на збройні здібності.`,
		type: ItemType.LeveledImplement,
		keywords: [AbilityKeyword.Implement, AbilityKeyword.Magic],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Срібний злиток і письмова стратегія від 33 воєначальників',
			source: 'Тексти або перекази мовою Келіан (Caelian)',
			characteristic: [Characteristic.Reason, Characteristic.Intuition, Characteristic.Presence],
			goal: 450
		}),
		featuresByLevel: [
			{
				level: 1,
				features: [
					FactoryLogic.feature.createAbilityDamage({
						id: 'item-field-commanders-baton-1a',
						keywords: [AbilityKeyword.Magic],
						value: 1
					}),
					FactoryLogic.feature.createAbilityDamage({
						id: 'item-field-commanders-baton-1b',
						keywords: [AbilityKeyword.Psionic],
						value: 1
					}),
					FactoryLogic.feature.create({
						id: 'item-field-commanders-baton-1c',
						name: '1-й рівень',
						description: 'Поки ви орудуєте цим батоном, вас пронизує досвід командирів, які тримали його до вас. У свій хід, щоразу, коли ви або союзник завдаєте шкоди істоті в межах 5 клітинок від вас, ви можете негайно використати свій маневр, щоб зсунути цю істоту на відстань до 2 клітинок.'
					})
				]
			},
			{
				level: 5,
				features: [
					FactoryLogic.feature.createAbilityDamage({
						id: 'item-field-commanders-baton-5a',
						keywords: [AbilityKeyword.Magic],
						value: 1
					}),
					FactoryLogic.feature.createAbilityDamage({
						id: 'item-field-commanders-baton-5b',
						keywords: [AbilityKeyword.Psionic],
						value: 1
					}),
					FactoryLogic.feature.create({
						id: 'item-field-commanders-baton-5c',
						name: '5-й рівень',
						description: 'Коли ви зсуваєте істоту цією здібністю і вона завершує це зсування поруч з одним із ваших союзників, той союзник може використати проти цієї істоти маневр «Схопити» або «Відштовхнути» як безкоштовну тригерну дію.'
					})
				]
			},
			{
				level: 9,
				features: [
					FactoryLogic.feature.createAbilityDamage({
						id: 'item-field-commanders-baton-9a',
						keywords: [AbilityKeyword.Magic],
						value: 1
					}),
					FactoryLogic.feature.createAbilityDamage({
						id: 'item-field-commanders-baton-9b',
						keywords: [AbilityKeyword.Psionic],
						value: 1
					}),
					FactoryLogic.feature.create({
						id: 'item-field-commanders-baton-9c',
						name: '9-й рівень',
						description: 'У свій хід, щоразу, коли ви або союзник завдаєте шкоди істоті в межах 10 клітинок від вас, ви можете негайно використати свій маневр, щоб зсунути цю істоту на відстань до 3 клітинок, ігноруючи Стійкість.'
					})
				]
			}
		]
	});

	static foesenseLenses: Item = FactoryLogic.createItem({
		id: 'item-foesense-lenses',
		name: 'Лінзи ворожого чуття',
		description: 'Ці окуляри мають рожевуваті скляні лінзи в срібній оправі.',
		type: ItemType.LeveledImplement,
		keywords: [AbilityKeyword.Implement, AbilityKeyword.Psionic],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Дві прозорі лінзи, вирізані з вулканічного скла',
			source: 'Тексти або перекази мовою Келіан (Caelian)',
			characteristic: [Characteristic.Reason, Characteristic.Intuition],
			goal: 450
		}),
		featuresByLevel: [
			{
				level: 1,
				features: [
					FactoryLogic.feature.create({
						id: 'item-foesense-lenses-1',
						name: '',
						description: 'Поки ви орудуєте цим імплементом, щоразу, коли ви завдаєте істоті шкоди кидком за допомогою магічної або псіонічної здібності, ви можете користуватися чуттями цієї істоти до кінця свого наступного ходу, сприймаючи все, що сприймає вона, і використовуючи свої здібності так, ніби перебуваєте в її клітинці. Водночас ви й далі користуєтеся власними чуттями.'
					}),
					FactoryLogic.feature.createAbilityDamage({
						id: 'item-foesense-lenses-1a',
						keywords: [AbilityKeyword.Magic],
						value: 1
					}),
					FactoryLogic.feature.createAbilityDamage({
						id: 'item-foesense-lenses-1b',
						keywords: [AbilityKeyword.Psionic],
						value: 1
					})
				]
			},
			{
				level: 5,
				features: [
					FactoryLogic.feature.create({
						id: 'item-foesense-lenses-5',
						name: '',
						description: 'Щоразу, коли ви завдаєте 20 або більше шкоди кидком магічною або псіонічною здібністю істоті, чуттями якої користуєтеся, ця істота стає ослабленою до кінця свого наступного ходу.'
					}),
					FactoryLogic.feature.createAbilityDamage({
						id: 'item-foesense-lenses-5a',
						keywords: [AbilityKeyword.Magic],
						value: 1
					}),
					FactoryLogic.feature.createAbilityDamage({
						id: 'item-foesense-lenses-5b',
						keywords: [AbilityKeyword.Psionic],
						value: 1
					})
				]
			},
			{
				level: 9,
				features: [
					FactoryLogic.feature.create({
						id: 'item-foesense-lenses-9',
						name: '',
						description: 'Щоразу, коли ви завдаєте 30 або більше шкоди кидком магічною або псіонічною здібністю істоті, чуттями якої користуєтеся, ця істота стає приголомшеною до кінця свого наступного ходу.'
					}),
					FactoryLogic.feature.createAbilityDamage({
						id: 'item-foesense-lenses-9a',
						keywords: [AbilityKeyword.Magic],
						value: 1
					}),
					FactoryLogic.feature.createAbilityDamage({
						id: 'item-foesense-lenses-9b',
						keywords: [AbilityKeyword.Psionic],
						value: 1
					})
				]
			}
		]
	});

	static rexScepter: Item = FactoryLogic.createItem({
		id: 'item-rex-scepter',
		name: 'Скіпетр Рекса',
		description: 'Жезл схожий на просту гілку дерева. У розпалі бою він росте й сплітається в оздоблений скіпетр.',
		type: ItemType.LeveledImplement,
		keywords: [AbilityKeyword.Implement, AbilityKeyword.Magic],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Гілка дерева й присяга вірності від трьох сотень або більше відданих послідовників',
			source: 'Тексти або перекази мовою Заліак (Zaliac)',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Presence],
			goal: 450
		}),
		featuresByLevel: [
			{
				level: 1,
				features: [
					FactoryLogic.feature.createBonus({
						id: 'item-rex-scepter-1a',
						field: FeatureField.Renown,
						value: 1
					}),
					FactoryLogic.feature.create({
						id: 'item-rex-scepter-1b',
						name: '1-й рівень',
						description: 'Раз за хід ви можете використати основну дію, націливши згодного союзника або двох міньйонів під вашим контролем у межах 5 клітинок від вас, щоб вони зробили вільний удар по цілі в межах тієї самої дальності як безкоштовну тригерну дію.'
					})
				]
			},
			{
				level: 5,
				features: [
					FactoryLogic.feature.createBonus({
						id: 'item-rex-scepter-5a',
						field: FeatureField.Renown,
						value: 1
					}),
					FactoryLogic.feature.create({
						id: 'item-rex-scepter-5b',
						name: '5-й рівень',
						description: 'Щоразу, коли істота, якій ви віддали наказ за допомогою скіпетра, робить вільний удар, вона отримує 1 сплеск, який можна використати негайно.'
					})
				]
			},
			{
				level: 9,
				features: [
					FactoryLogic.feature.createBonus({
						id: 'item-rex-scepter-9a',
						field: FeatureField.Renown,
						value: 1
					}),
					FactoryLogic.feature.create({
						id: 'item-rex-scepter-9b',
						name: '9-й рівень',
						description: 'Основну дію скіпетра тепер можна використовувати як маневр.'
					})
				]
			}
		]
	});

	static sanctuaryHorn: Item = FactoryLogic.createItem({
		id: 'item-sanctuary-horn',
		name: 'Ріг притулку',
		description: 'Цей спіральний мисливський ріг оздоблено розгалуженими мідними прожилками по всьому корпусу. Коли в нього сурмлять, метал розжарюється до червоного.',
		type: ItemType.LeveledImplement,
		keywords: [AbilityKeyword.Implement, AbilityKeyword.Magic],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Спіральна мушля загиблого зброярського слимака й вихори, спіймані з Квінтесенції',
			source: 'Тексти або перекази мовою Калліак (Kalliac)',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 450
		}),
		featuresByLevel: [
			{
				level: 1,
				features: [
					FactoryLogic.feature.create({
						id: 'item-sanctuary-horn-1',
						name: '1-й рівень',
						description: 'Поки ви орудуєте рогом, ваші магічні й псіонічні удари завдають звукової шкоди замість звичайної. Крім того, раз за хід ви можете використати маневр, щоб засурмити в ріг і відкликати одного союзника або до двох міньйонів під вашим контролем у межах 5 клітинок від вас, миттєво телепортувавши їх у вільні клітинки поруч із вами.'
					})
				]
			},
			{
				level: 5,
				features: [
					FactoryLogic.feature.create({
						id: 'item-sanctuary-horn-5',
						name: '5-й рівень',
						description: 'Поки ви орудуєте рогом, область ваших магічних або псіонічних здібностей типу куб, вибух і аура збільшується на 1. Крім того, щоразу, коли істоту телепортує цей ріг, вона може або витратити Відновлення, або отримати сплеск.'
					})
				]
			},
			{
				level: 9,
				features: [
					FactoryLogic.feature.create({
						id: 'item-sanctuary-horn-9',
						name: '9-й рівень',
						description: 'Бонус рога до області зростає до 2. Після того як ви сурмите в ріг маневром, ви можете телепортувати себе, іншого союзника або до двох інших міньйонів під вашим контролем у межах 5 клітинок від вас у простір, який лишився після відкликаної цілі, якщо вони там поміщаються.'
					})
				]
			}
		]
	});

	static wandOfTheUnheardOrchestra: Item = FactoryLogic.createItem({
		id: 'item-wand-of-the-unheard-orchestra',
		name: 'Жезл нечутого оркестру',
		description: 'Ця диригентська паличка має простий, майже неоздоблений сталевий корпус. Вона подовжується при змаху й спалахує яскравим світлом, якщо розмахувати нею в рівному ритмі.',
		type: ItemType.LeveledImplement,
		keywords: [AbilityKeyword.Implement, AbilityKeyword.Magic],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Залізний злиток і деревина співочого дерева, знайденого в Аркадії',
			source: 'Тексти або перекази мовою Кхелт (Khelt)',
			characteristic: [Characteristic.Agility, Characteristic.Reason, Characteristic.Intuition],
			goal: 450
		}),
		featuresByLevel: [
			{
				level: 1,
				features: [
					FactoryLogic.feature.createAbilityDistance({
						id: 'item-wand-of-the-unheard-orchestra-1a',
						keywords: [AbilityKeyword.Magic],
						value: 3
					}),
					FactoryLogic.feature.createAbilityDistance({
						id: 'item-wand-of-the-unheard-orchestra-1b',
						keywords: [AbilityKeyword.Psionic],
						value: 3
					}),
					FactoryLogic.feature.create({
						id: 'item-wand-of-the-unheard-orchestra-1c',
						name: '1-й рівень',
						description: 'Раз за хід ви можете використати маневр, націливши себе або згодного союзника в межах 5 клітинок від вас, щоб ця ціль виконала дію руху як безкоштовну тригерну дію.'
					})
				]
			},
			{
				level: 5,
				features: [
					FactoryLogic.feature.createAbilityDistance({
						id: 'item-wand-of-the-unheard-orchestra-5a',
						keywords: [AbilityKeyword.Magic],
						value: 2
					}),
					FactoryLogic.feature.createAbilityDistance({
						id: 'item-wand-of-the-unheard-orchestra-5b',
						keywords: [AbilityKeyword.Psionic],
						value: 2
					}),
					FactoryLogic.feature.create({
						id: 'item-wand-of-the-unheard-orchestra-5c',
						name: '5-й рівень',
						description: 'Ви й будь-які міньйони під вашим контролем збільшуєте свою швидкість на 2. Щоразу, коли ви або будь-які ваші міньйони використовуєте дію руху «Відступ», вони можуть зміститися ще на 2 клітинки як частину цієї дії руху.'
					})
				]
			},
			{
				level: 9,
				features: [
					FactoryLogic.feature.createAbilityDistance({
						id: 'item-wand-of-the-unheard-orchestra-9a',
						keywords: [AbilityKeyword.Magic],
						value: 3
					}),
					FactoryLogic.feature.createAbilityDistance({
						id: 'item-wand-of-the-unheard-orchestra-9b',
						keywords: [AbilityKeyword.Psionic],
						value: 3
					}),
					FactoryLogic.feature.create({
						id: 'item-wand-of-the-unheard-orchestra-9c',
						name: '9-й рівень',
						description: 'Маневр жезла тепер можна використати як безкоштовний маневр раз під час вашого ходу, націливши себе або союзника в межах 10 клітинок від вас, щоб ця ціль виконала дію руху як безкоштовну тригерну дію.'
					})
				]
			}
		]
	});

	static wordsBecomeWonders: Item = FactoryLogic.createItem({
		id: 'item-words-become-wonders',
		name: 'Слова стають дивами на наступному подиху',
		description: 'Здається, цей оздоблений том високих ельфів щоразу зітхає, коли його відкривають.',
		type: ItemType.LeveledImplement,
		keywords: [AbilityKeyword.Implement, AbilityKeyword.Magic],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Письмовий дозвіл від магістрата високих ельфів',
			source: 'Тексти або перекази мовою Гіраллік (Hyrallic)',
			characteristic: [Characteristic.Reason, Characteristic.Intuition],
			goal: 450
		}),
		featuresByLevel: [
			{
				level: 1,
				features: [
					FactoryLogic.feature.create({
						id: 'item-words-become-wonders-1',
						name: '',
						description: 'Ви можете відкривати або закривати том маневром, промовляючи або подумки називаючи його повну назву. Поки том відкритий, він ширяє в сусідньому просторі й перегортається на потрібні сторінки за вашим наказом, а ви отримуєте перевагу на випробування Розуму, щоб пригадати знання.'
					}),
					FactoryLogic.feature.createAbilityDistance({
						id: 'item-words-become-wonders-1a',
						name: '',
						keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged],
						value: 3
					}),
					FactoryLogic.feature.createAbilityDistance({
						id: 'item-words-become-wonders-1b',
						name: '',
						keywords: [AbilityKeyword.Psionic, AbilityKeyword.Ranged],
						value: 3
					})
				]
			},
			{
				level: 5,
				features: [
					FactoryLogic.feature.createAbility({
						ability: FactoryLogic.createAbility({
							id: 'item-words-become-wonders-5',
							name: 'Слова стають дивами',
							type: FactoryLogic.type.createTrigger('Ви або істота, до якої у вас є лінія ефекту, використовує магічну або псіонічну здібність'),
							sections: [
								FactoryLogic.createAbilitySectionText('Ви надаєте бонус +3 до кидка сили.')
							]
						})
					}),
					FactoryLogic.feature.createAbilityDistance({
						id: 'item-words-become-wonders-5a',
						name: '',
						keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged],
						value: 2
					}),
					FactoryLogic.feature.createAbilityDistance({
						id: 'item-words-become-wonders-5b',
						name: '',
						keywords: [AbilityKeyword.Psionic, AbilityKeyword.Ranged],
						value: 2
					})
				]
			},
			{
				level: 9,
				features: [
					FactoryLogic.feature.create({
						id: 'item-words-become-wonders-9',
						name: '',
						description: 'Поки том відкритий, ви автоматично отримуєте результат 3-го рівня на випробуваннях Розуму, щоб пригадати знання, а коли використовуєте героїчну здібність, її вартість у Героїчних ресурсах зменшується на 1, до мінімуму 1.'
					})
				]
			}
		]
	});
}
