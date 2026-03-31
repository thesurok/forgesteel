import { AbilityKeyword } from '@/enums/ability-keyword';
import { Characteristic } from '@/enums/characteristic';
import { DamageModifierType } from '@/enums/damage-modifier-type';
import { DamageType } from '@/enums/damage-type';
import { FactoryLogic } from '@/logic/factory-logic';
import { FeatureField } from '@/enums/feature-field';
import { Item } from '@/models/item';
import { ItemType } from '@/enums/item-type';
import { KitArmor } from '@/enums/kit-armor';

export class LeveledArmorData {
	static adaptiveSecondSkin: Item = FactoryLogic.createItem({
		id: 'item-adaptive-second-skin',
		name: 'Адаптивна друга шкіра отрут',
		description: 'Цей обладунок зроблено з міцної шкіри й усіяно тисячами крихітних шипів зсередини, які, на щастя, не болять на дотик.',
		type: ItemType.LeveledArmor,
		keywords: [KitArmor.Light, AbilityKeyword.Magic],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Пʼять шкур скажених медоїдів, голки їжака',
			source: 'Тексти або перекази мовою Іллірик (Yllyric)',
			characteristic: [Characteristic.Agility, Characteristic.Intuition],
			goal: 450
		}),
		featuresByLevel: [
			{
				level: 1,
				features: [
					FactoryLogic.feature.createBonus({
						id: 'item-adaptive-second-skin-1a',
						field: FeatureField.Stamina,
						value: 6
					}),
					FactoryLogic.feature.createDamageModifier({
						id: 'item-adaptive-second-skin-1b',
						modifiers: [
							FactoryLogic.damageModifier.createCharacteristic({
								damageType: DamageType.Acid,
								modifierType: DamageModifierType.Immunity,
								characteristics: [Characteristic.Might, Characteristic.Agility, Characteristic.Reason, Characteristic.Intuition, Characteristic.Presence]
							})
						]
					}),
					FactoryLogic.feature.createDamageModifier({
						id: 'item-adaptive-second-skin-1c',
						modifiers: [
							FactoryLogic.damageModifier.createCharacteristic({
								damageType: DamageType.Poison,
								modifierType: DamageModifierType.Immunity,
								characteristics: [Characteristic.Might, Characteristic.Agility, Characteristic.Reason, Characteristic.Intuition, Characteristic.Presence]
							})
						]
					})
				]
			},
			{
				level: 5,
				features: [
					FactoryLogic.feature.create({
						id: 'item-adaptive-second-skin-5',
						name: '',
						description: 'Щоразу, коли сусідня істота завдає вам шкоди, вона отримує 3 кислотної або отруйної шкоди (на ваш вибір).'
					}),
					FactoryLogic.feature.createBonus({
						id: 'item-adaptive-second-skin-5a',
						field: FeatureField.Stamina,
						value: 6
					})
				]
			},
			{
				level: 9,
				features: [
					FactoryLogic.feature.create({
						id: 'item-adaptive-second-skin-9',
						name: '',
						description: 'Сусідня істота, яка завдає вам шкоди, отримує 6 кислотної або отруйної шкоди.'
					}),
					FactoryLogic.feature.createBonus({
						id: 'item-adaptive-second-skin-9a',
						field: FeatureField.Stamina,
						value: 9
					}),
					FactoryLogic.feature.createAbility({
						ability: FactoryLogic.createAbility({
							id: 'item-adaptive-second-skin-9b',
							name: 'Використати Адаптивну другу шкіру отрут',
							type: FactoryLogic.type.createManeuver(),
							sections: [
								FactoryLogic.createAbilitySectionText('Ви перетворюєте область рідини або газу куба 2 поруч із собою на рідку кислоту або отруйний газ до початку свого наступного ходу. Кожна істота, яка вперше за бойовий раунд входить в область або починає там свій хід, отримує 6 кислотної або отруйної шкоди відповідно.')
							]
						})
					})
				]
			}
		]
	});

	static chainOfTheSeaAndSky: Item = FactoryLogic.createItem({
		id: 'item-chain-of-the-sea-and-sky',
		name: 'Кольчуга моря й неба',
		description: 'Цю важку кольчугу створено, щоб вільно рухатися в екстремальних умовах, не жертвуючи захистом.',
		type: ItemType.LeveledArmor,
		keywords: [KitArmor.Heavy, AbilityKeyword.Magic],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Пара крил летючого коропа, комплект кольчуги, проїдений морською водою',
			source: 'Тексти або перекази мовою Заліак (Zaliac)',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 450
		}),
		featuresByLevel: [
			{
				level: 1,
				features: [
					FactoryLogic.feature.create({
						id: 'item-chain-of-the-sea-and-sky-1',
						name: '',
						description: 'Поки ви носите цей обладунок, ви можете автоматично плисти з повною швидкістю під час руху й дихати під водою до 1 години. Повернення на поверхню, щоб знову вдихнути повітря хоча б на мить, скидає перевагу обладунку на дихання під водою.'
					}),
					FactoryLogic.feature.createBonus({
						id: 'item-chain-of-the-sea-and-sky-1a',
						field: FeatureField.Stamina,
						value: 6
					})
				]
			},
			{
				level: 5,
				features: [
					FactoryLogic.feature.create({
						id: 'item-chain-of-the-sea-and-sky-5',
						name: '',
						description: 'Щоразу, коли ви падаєте, ви можете розкинути руки (не потребує дії), щоб розгорнути товсту перетинку між руками й тілом, сповільнивши падіння та дозволивши собі планерувати. Планеруючи так, ви спускаєтеся на 1 клітинку за раунд і можете раз за кожен свій хід пролетіти по горизонталі на відстань до 6 клітинок як безкоштовний маневр.'
					}),
					FactoryLogic.feature.createBonus({
						id: 'item-chain-of-the-sea-and-sky-5a',
						field: FeatureField.Stamina,
						value: 6
					}),
					FactoryLogic.feature.createDamageModifier({
						id: 'item-chain-of-the-sea-and-sky-5b',
						modifiers: [
							FactoryLogic.damageModifier.create({
								damageType: DamageType.Cold,
								modifierType: DamageModifierType.Immunity,
								value: 5
							})
						]
					})
				]
			},
			{
				level: 9,
				features: [
					FactoryLogic.feature.create({
						id: 'item-chain-of-the-sea-and-sky-9',
						name: '',
						description: 'Щоразу, коли ваші ноги не торкаються землі, зокрема коли ви плаваєте у воді або зависли в повітрі, ви отримуєте перевагу на кидки здібностей, а будь-яка здібність, що націлює вас, має шкоду.'
					}),
					FactoryLogic.feature.createBonus({
						id: 'item-chain-of-the-sea-and-sky-9a',
						field: FeatureField.Stamina,
						value: 9
					}),
					FactoryLogic.feature.createDamageModifier({
						id: 'item-chain-of-the-sea-and-sky-9b',
						modifiers: [
							FactoryLogic.damageModifier.create({
								damageType: DamageType.Cold,
								modifierType: DamageModifierType.Immunity,
								value: 10
							})
						]
					})
				]
			}
		]
	});

	static grandScarab: Item = FactoryLogic.createItem({
		id: 'item-grand-scarab',
		name: 'Великий скарабей',
		description: 'Синьо-фіолетовий панцир і крила велетенського жука-скарабея перетворено на оздоблений нагрудник.',
		type: ItemType.LeveledArmor,
		keywords: [AbilityKeyword.Magic, KitArmor.Medium],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Панцир велетенського жука-скарабея',
			source: 'Тексти або перекази мовою Федран (Phaedran)',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 450
		}),
		featuresByLevel: [
			{
				level: 1,
				features: [
					FactoryLogic.feature.create({
						id: 'item-grand-scarab-1',
						name: '',
						description: 'Поки ви носите цей обладунок, ви можете літати. Якщо наприкінці свого ходу ви не перебуваєте на землі, ви падаєте.'
					}),
					FactoryLogic.feature.createBonus({
						id: 'item-grand-scarab-1a',
						field: FeatureField.Stamina,
						value: 6
					})
				]
			},
			{
				level: 5,
				features: [
					FactoryLogic.feature.create({
						id: 'item-grand-scarab-5',
						name: '',
						description: 'Вам більше не потрібно закінчувати хід на землі, щоб не впасти.'
					}),
					FactoryLogic.feature.createBonus({
						id: 'item-grand-scarab-5a',
						field: FeatureField.Stamina,
						value: 6
					})
				]
			},
			{
				level: 9,
				features: [
					FactoryLogic.feature.create({
						id: 'item-grand-scarab-9',
						name: '',
						description: 'Якщо перед ударом ви пролітаєте будь-яку відстань, цей удар отримує перевагу.'
					}),
					FactoryLogic.feature.createBonus({
						id: 'item-grand-scarab-9a',
						field: FeatureField.Stamina,
						value: 9
					})
				]
			}
		]
	});

	static kingsRoar: Item = FactoryLogic.createItem({
		id: 'item-kings-roar',
		name: 'Рик короля',
		description: 'На переді цього повітряного щита із сонячного металу викарбувано левʼячу морду, чия паща роззявляється дедалі ширше в ході битви.',
		type: ItemType.LeveledArmor,
		keywords: [AbilityKeyword.Magic, KitArmor.Shield],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Балада про героїзм, два злитки сонячного металу',
			source: 'Пісні Високою ривіанською (High Rhyvian)',
			characteristic: [Characteristic.Reason, Characteristic.Intuition, Characteristic.Presence],
			goal: 450
		}),
		featuresByLevel: [
			{
				level: 1,
				features: [
					FactoryLogic.feature.createAbility({
						ability: FactoryLogic.createAbility({
							id: 'item-kings-roar-1',
							name: 'Рик короля',
							description: 'Ви змушуєте левʼячу морду щита заревіти.',
							type: FactoryLogic.type.createManeuver(),
							sections: [
								FactoryLogic.createAbilitySectionText('Ви можете використати маневр, щоб змусити левʼячу морду щита заревіти, обравши одну сусідню істоту або предмет і відштовхнувши цю ціль на відстань до 3 клітинок.'),
								FactoryLogic.createAbilitySectionPackage('item-kings-roar-tag')
							]
						})
					}),
					FactoryLogic.feature.createBonus({
						id: 'item-kings-roar-1a',
						field: FeatureField.Stamina,
						value: 3
					})
				]
			},
			{
				level: 5,
				features: [
					FactoryLogic.feature.createPackageContent({
						id: 'item-kings-roar-5',
						name: '5-й рівень',
						description: 'Натомість ви можете націлити одну істоту або предмет у межах 3 клітинок і відштовхнути цю ціль на відстань до 4 клітинок.',
						tag: 'item-kings-roar-tag'
					}),
					FactoryLogic.feature.createBonus({
						id: 'item-kings-roar-5a',
						field: FeatureField.Stamina,
						value: 3
					})
				]
			},
			{
				level: 9,
				features: [
					FactoryLogic.feature.createPackageContent({
						id: 'item-kings-roar-9',
						name: '9-й рівень',
						description: 'Натомість ви можете націлити одну істоту або предмет у межах 6 клітинок, відштовхнути цю ціль на відстань до 5 клітинок, і ціль стає сповільненою до кінця свого наступного ходу.',
						tag: 'item-kings-roar-tag'
					}),
					FactoryLogic.feature.createBonus({
						id: 'item-kings-roar-9a',
						field: FeatureField.Stamina,
						value: 3
					})
				]
			}
		]
	});

	static kuranzoiPrismscale: Item = FactoryLogic.createItem({
		id: 'item-kuranzoi-prismscale',
		name: 'Призматична луска Куранʼзоя',
		description: 'Кожна луска цього райдужного обладунку мерехтить тьмяним відбитком застиглої миті часу.',
		type: ItemType.LeveledArmor,
		keywords: [KitArmor.Medium, AbilityKeyword.Psionic],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Очі часового рейдера, який доблесно загинув у бою',
			source: 'Тексти або перекази мовою Волл (Voll)',
			characteristic: [Characteristic.Intuition, Characteristic.Presence],
			goal: 450
		}),
		featuresByLevel: [
			{
				level: 1,
				features: [
					FactoryLogic.feature.createAbility({
						ability: FactoryLogic.createAbility({
							id: 'item-kuranzoi-prismscale-1',
							name: 'Використати Призматичну луску Куранʼзоя',
							description: 'Ви захоплюєте мить часу в обладунок.',
							type: FactoryLogic.type.createTrigger('Істота в межах 5 клітинок завдає вам шкоди'),
							sections: [
								FactoryLogic.createAbilitySectionText('Ця істота стає сповільненою до кінця свого наступного ходу.'),
								FactoryLogic.createAbilitySectionPackage('item-kuranzoi-prismscale-tag')
							]
						})
					}),
					FactoryLogic.feature.createBonus({
						id: 'item-kuranzoi-prismscale-1a',
						field: FeatureField.Stamina,
						value: 6
					})
				]
			},
			{
				level: 5,
				features: [
					FactoryLogic.feature.createPackageContent({
						id: 'item-kuranzoi-prismscale-5',
						name: '5-й',
						description: 'Ціль також отримує шкоду Скверною, що дорівнює подвоєному вашому найвищому показнику характеристики.',
						tag: 'item-kuranzoi-prismscale-tag'
					}),
					FactoryLogic.feature.createBonus({
						id: 'item-kuranzoi-prismscale-5a',
						field: FeatureField.Stamina,
						value: 6
					})
				]
			},
			{
				level: 9,
				features: [
					FactoryLogic.feature.createPackageContent({
						id: 'item-kuranzoi-prismscale-9',
						name: '9-й',
						description: 'Ви можете негайно вивільнити захоплену мить, щоб отримати бонус +3 до швидкості до кінця свого наступного ходу.',
						tag: 'item-kuranzoi-prismscale-tag'
					}),
					FactoryLogic.feature.createBonus({
						id: 'item-kuranzoi-prismscale-9a',
						field: FeatureField.Stamina,
						value: 9
					})
				]
			}
		]
	});

	static paperTrappings: Item = FactoryLogic.createItem({
		id: 'item-paper-trappings',
		name: 'Паперові шати',
		description: 'Цю тендітну мантію зроблено з тисяч сторінок, вирваних із книжок і хитромудро складених докупи без жодної нитки.',
		type: ItemType.LeveledArmor,
		keywords: [KitArmor.Light, AbilityKeyword.Magic],
		crafting: FactoryLogic.createProject({
			prerequisites: 'По десять сторінок зі ста різних книжок',
			source: 'Тексти або перекази мовою Анжалі (Anjali)',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 450
		}),
		featuresByLevel: [
			{
				level: 1,
				features: [
					FactoryLogic.feature.createAbility({
						ability: FactoryLogic.createAbility({
							id: 'item-paper-trappings-1',
							name: 'Паперові шати - Скластися',
							type: FactoryLogic.type.createMain(),
							sections: [
								FactoryLogic.createAbilitySectionText('Ви складаєтеся самі в себе, доки ви й ваше спорядження не стаєте тонкими, як папір. Цей ефект триває 1 хвилину, дозволяючи вам легко прослизати крізь будь-який отвір завширшки 1 дюйм або більше. Коли ви повертаєтеся до своєї тривимірної форми, ви є приголомшеними на 1 хвилину. Якщо ви повертаєтеся до справжньої форми в просторі, надто малому для вас, вас насильно викидає до найближчого вільного простору на ваш вибір, і ви отримуєте 3d6 шкоди.'),
								FactoryLogic.createAbilitySectionPackage('item-paper-trappings-tag')
							]
						})
					}),
					FactoryLogic.feature.createBonus({
						id: 'item-paper-trappings-1a',
						field: FeatureField.Stamina,
						value: 6
					})
				]
			},
			{
				level: 5,
				features: [
					FactoryLogic.feature.createPackageContent({
						id: 'item-paper-trappings-5',
						name: '5-й',
						description: 'Коли ви повертаєтеся до своєї справжньої форми, ви є приголомшеними лише до кінця свого наступного ходу.',
						tag: 'item-paper-trappings-tag'
					}),
					FactoryLogic.feature.createBonus({
						id: 'item-paper-trappings-5a',
						field: FeatureField.Stamina,
						value: 6
					}),
					FactoryLogic.feature.createAbility({
						ability: FactoryLogic.createAbility({
							id: 'item-paper-trappings-5b',
							name: 'Паперові шати - Обгорнути',
							type: FactoryLogic.type.createManeuver({ qualifiers: ['Ви тонкі, як папір'] }),
							sections: [
								FactoryLogic.createAbilitySectionText('Ви обгортаєтеся навколо сусідньої цілі вашого розміру або меншої, автоматично захоплюючи її.')
							]
						})
					})
				]
			},
			{
				level: 9,
				features: [
					FactoryLogic.feature.createPackageContent({
						id: 'item-paper-trappings-9',
						name: '9-й',
						description: 'Ви більше не стаєте приголомшеними, коли повертаєтеся до своєї справжньої форми.',
						tag: 'item-paper-trappings-tag'
					}),
					FactoryLogic.feature.createBonus({
						id: 'item-paper-trappings-9a',
						field: FeatureField.Stamina,
						value: 9
					}),
					FactoryLogic.feature.createAbility({
						ability: FactoryLogic.createAbility({
							id: 'item-paper-trappings-9b',
							name: 'Паперові шати - Стиснути',
							type: FactoryLogic.type.createManeuver({ qualifiers: ['Ви тонкі, як папір, і тримаєте ціль захопленою'] }),
							sections: [
								FactoryLogic.createAbilitySectionText('Ви стискаєте ціль, завдаючи їй 10 шкоди. Істота, яка отримала таку шкоду, має шкоду під час використання маневру «Втекти з захвату» проти вас і коли завдає вам удари.')
							]
						})
					})
				]
			}
		]
	});

	static shroudedMemory: Item = FactoryLogic.createItem({
		id: 'item-shrouded-memory',
		name: 'Оповита памʼять',
		description: 'Це шкіряне пальто темряви опівночі вкрито фрактальними візерунками, які щоразу виглядають інакше.',
		type: ItemType.LeveledArmor,
		keywords: [KitArmor.Light, AbilityKeyword.Psionic],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Заповіт померлої людини без спадкоємців',
			source: 'Тексти або перекази мовою Кхелт (Khelt)',
			characteristic: [Characteristic.Agility, Characteristic.Presence],
			goal: 450
		}),
		featuresByLevel: [
			{
				level: 1,
				features: [
					FactoryLogic.feature.create({
						id: 'item-shrouded-memory-1',
						name: '',
						description: 'Ви отримуєте перевагу на випробування, щоб брехати про свою особу або приховувати її.'
					}),
					FactoryLogic.feature.createBonus({
						id: 'item-shrouded-memory-1a',
						field: FeatureField.Stamina,
						value: 6
					})
				]
			},
			{
				level: 5,
				features: [
					FactoryLogic.feature.createAbility({
						ability: FactoryLogic.createAbility({
							id: 'item-shrouded-memory-5',
							name: 'Використати Оповиту памʼять',
							type: FactoryLogic.type.createTrigger('Ви отримуєте шкоду'),
							sections: [
								FactoryLogic.createAbilitySectionText('Ви телепортуєтеся на відстань до 5 клітинок. Якщо ви це робите, у вашому попередньому місці виникає ілюзія вашої смерті, яка зникає наприкінці вашого наступного ходу.'),
								FactoryLogic.createAbilitySectionPackage('item-shrouded-memory-tag')
							]
						})
					}),
					FactoryLogic.feature.createBonus({
						id: 'item-shrouded-memory-5a',
						field: FeatureField.Stamina,
						value: 6
					})
				]
			},
			{
				level: 9,
				features: [
					FactoryLogic.feature.createPackageContent({
						id: 'item-shrouded-memory-9',
						name: '9-й',
						description: 'Ви можете телепортуватися на кількість клітинок, що дорівнює отриманій шкоді, але щонайменше на 5 клітинок. Крім того, якщо тригерну шкоду вам завдала істота, ви стаєте невидимими для неї до кінця свого наступного ходу.',
						tag: 'item-shrouded-memory-tag'
					}),
					FactoryLogic.feature.createBonus({
						id: 'item-shrouded-memory-9a',
						field: FeatureField.Stamina,
						value: 9
					})
				]
			}
		]
	});

	static spinyTurtle: Item = FactoryLogic.createItem({
		id: 'item-spiny-turtle',
		name: 'Колюча черепаха',
		description: 'Цей важкий механізований латний обладунок гномʼячої роботи створено, щоб забезпечувати собі власне укриття на полі бою.',
		type: ItemType.LeveledArmor,
		keywords: [KitArmor.Heavy, AbilityKeyword.Magic],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Десять сталевих шестерень зі стародавнього конструкта',
			source: 'Тексти або перекази мовою Варіак (Variac)',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 450
		}),
		featuresByLevel: [
			{
				level: 1,
				features: [
					FactoryLogic.feature.createAbility({
						ability: FactoryLogic.createAbility({
							id: 'item-spiny-turtle-1',
							name: 'Використати Колючу черепаху',
							type: FactoryLogic.type.createMain(),
							sections: [
								FactoryLogic.createAbilitySectionText('Ви розгортаєте обладунок на спині, створюючи за собою металеву стіну 4. Стіна є предметом, що втягується, якщо ви рухаєтеся або якщо отримує 15 шкоди. Після цього вона потребує основної дії на перекалібрування, перш ніж її можна буде розгорнути знову.'),
								FactoryLogic.createAbilitySectionPackage('item-spiny-turtle-tag')
							]
						})
					}),
					FactoryLogic.feature.createBonus({
						id: 'item-spiny-turtle-1a',
						field: FeatureField.Stamina,
						value: 6
					})
				]
			},
			{
				level: 5,
				features: [
					FactoryLogic.feature.createPackageContent({
						id: 'item-spiny-turtle-5',
						name: '5-й',
						description: 'Кількість шкоди, яку може витримати стіна перед втяганням, зростає до 25. Крім того, поки стіна розгорнута, з неї висуваються шипи, і будь-яка істота, що завдає шкоди стіні, перебуваючи поруч із нею, отримує 3 шкоди.',
						tag: 'item-spiny-turtle-tag'
					}),
					FactoryLogic.feature.createBonus({
						id: 'item-spiny-turtle-5a',
						field: FeatureField.Stamina,
						value: 6
					})
				]
			},
			{
				level: 9,
				features: [
					FactoryLogic.feature.create({
						id: 'item-spiny-turtle-9',
						name: '',
						description: 'Шипи вкривають обладунок, і будь-яка істота, що завдає вам шкоди, перебуваючи поруч із вами, отримує 6 шкоди.'
					}),
					FactoryLogic.feature.createBonus({
						id: 'item-spiny-turtle-9a',
						field: FeatureField.Stamina,
						value: 9
					})
				]
			}
		]
	});

	static starHunter: Item = FactoryLogic.createItem({
		id: 'item-star-hunter',
		name: 'Зоряний мисливець',
		description: 'Мерехтливе світло тече цим кристалічним обладунком, мов рідина.',
		type: ItemType.LeveledArmor,
		keywords: [KitArmor.Heavy, AbilityKeyword.Psionic],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Велика посудина астральної криги, пінта переохолодженої ртуті',
			source: 'Тексти або перекази мовою Волл (Voll)',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 450
		}),
		featuresByLevel: [
			{
				level: 1,
				features: [
					FactoryLogic.feature.create({
						id: 'item-star-hunter-1',
						name: '',
						description: 'Будь-яка магічна здібність отримує перевагу, коли націлює вас. Крім того, ви інстинктивно знаєте місце розташування будь-якої прихованої істоти в межах 2 клітинок.'
					}),
					FactoryLogic.feature.createBonus({
						id: 'item-star-hunter-1a',
						field: FeatureField.Stamina,
						value: 6
					}),
					FactoryLogic.feature.createAbility({
						ability: FactoryLogic.createAbility({
							id: 'item-star-hunter-1b',
							name: 'Використати Зоряного мисливця',
							type: FactoryLogic.type.createManeuver(),
							sections: [
								FactoryLogic.createAbilitySectionText('Ви стаєте невидимими. Невидимість закінчується, якщо ви отримуєте шкоду, використовуєте здібність або наприкінці вашого наступного ходу.'),
								FactoryLogic.createAbilitySectionPackage('item-star-hunter-tag')
							]
						})
					})
				]
			},
			{
				level: 5,
				features: [
					FactoryLogic.feature.create({
						id: 'item-star-hunter-5',
						name: '',
						description: 'Ви інстинктивно знаєте місце розташування будь-якої прихованої істоти в межах 5 клітинок.'
					}),
					FactoryLogic.feature.createBonus({
						id: 'item-star-hunter-5a',
						field: FeatureField.Stamina,
						value: 6
					}),
					FactoryLogic.feature.createDamageModifier({
						id: 'item-star-hunter-5b',
						modifiers: [
							FactoryLogic.damageModifier.create({
								damageType: DamageType.Psychic,
								modifierType: DamageModifierType.Immunity,
								value: 5
							})
						]
					}),
					FactoryLogic.feature.createPackageContent({
						id: 'item-star-hunter-5c',
						name: '5-й',
						description: 'Ваша невидимість більше не закінчується наприкінці вашого наступного ходу.',
						tag: 'item-star-hunter-tag'
					})
				]
			},
			{
				level: 9,
				features: [
					FactoryLogic.feature.create({
						id: 'item-star-hunter-9',
						name: '',
						description: 'Ви інстинктивно знаєте місце розташування будь-якої прихованої істоти в межах 10 клітинок.'
					}),
					FactoryLogic.feature.createBonus({
						id: 'item-star-hunter-9a',
						field: FeatureField.Stamina,
						value: 9
					}),
					FactoryLogic.feature.createDamageModifier({
						id: 'item-star-hunter-9b',
						modifiers: [
							FactoryLogic.damageModifier.create({
								damageType: DamageType.Psychic,
								modifierType: DamageModifierType.Immunity,
								value: 5
							})
						]
					}),
					FactoryLogic.feature.createPackageContent({
						id: 'item-star-hunter-9c',
						name: '9-й',
						description: 'Ваша невидимість більше не закінчується, коли ви використовуєте здібність.',
						tag: 'item-star-hunter-tag'
					})
				]
			}
		]
	});

	static telekineticBulwark: Item = FactoryLogic.createItem({
		id: 'item-telekinetic-bulwark',
		name: 'Телекінетичний бастіон',
		description: 'Невидима сила ніби тягне цей сталевий щит до сусідніх істот.',
		type: ItemType.LeveledArmor,
		keywords: [AbilityKeyword.Psionic, KitArmor.Shield],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Три сталеві злитки, шість кристалів, що резонують із псіонічною силою',
			source: 'Тексти або перекази мовою Варіак (Variac)',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 450
		}),
		featuresByLevel: [
			{
				level: 1,
				features: [
					FactoryLogic.feature.createAbility({
						ability: FactoryLogic.createAbility({
							id: 'item-telekinetic-bulwark-1',
							name: 'Використати Телекінетичний бастіон',
							type: FactoryLogic.type.createTrigger('Сусідній ворог використовує здібність', { free: true, qualifiers: ['Раз за хід'] }),
							sections: [
								FactoryLogic.createAbilitySectionText('Використайте маневр «Схопити» проти цього ворога. Ви можете тримати захопленими таким способом будь-яку кількість ворогів.'),
								FactoryLogic.createAbilitySectionPackage('item-telekinetic-bulwark-tag')
							]
						})
					}),
					FactoryLogic.feature.createBonus({
						id: 'item-telekinetic-bulwark-1a',
						field: FeatureField.Stamina,
						value: 2
					})
				]
			},
			{
				level: 5,
				features: [
					FactoryLogic.feature.createPackageContent({
						id: 'item-telekinetic-bulwark-5',
						name: '5-й',
						description: 'Дальність зростає до 10 клітинок. Крім того, будь-який ворог, що використовує маневр «Втекти з захвату», будучи захопленим таким способом, має шкоду на це випробування.',
						tag: 'item-telekinetic-bulwark-tag'
					}),
					FactoryLogic.feature.createBonus({
						id: 'item-telekinetic-bulwark-5a',
						field: FeatureField.Stamina,
						value: 3
					})
				]
			},
			{
				level: 9,
				features: [
					FactoryLogic.feature.createAbility({
						ability: FactoryLogic.createAbility({
							id: 'item-telekinetic-bulwark-9',
							name: '',
							type: FactoryLogic.type.createManeuver(),
							distance: [FactoryLogic.distance.createSpecial('')],
							target: 'Будь-які вороги, яких щит тримає захопленими',
							sections: [
								FactoryLogic.createAbilitySectionText('Притягніть цілі на відстань до 5 клітинок.')
							]
						})
					}),
					FactoryLogic.feature.createBonus({
						id: 'item-telekinetic-bulwark-9a',
						field: FeatureField.Stamina,
						value: 4
					})
				]
			}
		]
	});
}
