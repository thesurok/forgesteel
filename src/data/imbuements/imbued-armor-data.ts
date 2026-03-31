import { AbilityDistanceType } from '@/enums/ability-distance-type';
import { AbilityKeyword } from '@/enums/ability-keyword';
import { Characteristic } from '@/enums/characteristic';
import { DamageModifierType } from '@/enums/damage-modifier-type';
import { DamageType } from '@/enums/damage-type';
import { FactoryLogic } from '@/logic/factory-logic';
import { FeatureField } from '@/enums/feature-field';
import { Imbuement } from '@/models/imbuement';
import { ItemType } from '@/enums/item-type';

export class ImbuedArmorData {
	static aweCharming: Imbuement = FactoryLogic.createImbuement({
		type: ItemType.ImbuedArmor,
		crafting: FactoryLogic.createProject({
			prerequisites: 'Локон феї, здобутий у дружній угоді',
			source: 'Тексти або знання мовою Кхелт (Khelt)',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 150
		}),
		level: 1,
		feature: FactoryLogic.feature.create({
			id: 'imbuement-awe-charming',
			name: 'Трепет: Чарівність',
			description: 'Ви отримуєте перевагу на випробування Присутності, щоб завойовувати прихильність інших істот або справляти хороше враження.'
		})
	});

	static aweThreatening: Imbuement = FactoryLogic.createImbuement({
		type: ItemType.ImbuedArmor,
		crafting: FactoryLogic.createProject({
			prerequisites: 'Локон феї, здобутий насильством',
			source: 'Тексти або знання мовою Кхелт (Khelt)',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 150
		}),
		level: 1,
		feature: FactoryLogic.feature.create({
			id: 'imbuement-awe-threatening',
			name: 'Трепет: Загроза',
			description: 'Ви отримуєте перевагу на випробування Присутності, щоб залякувати, примушувати чи цькувати.'
		})
	});

	static damageImmunityI: Imbuement = FactoryLogic.createImbuement({
		type: ItemType.ImbuedArmor,
		crafting: FactoryLogic.createProject({
			prerequisites: 'Стихійний пісок, що залишається, коли елементаль входить в Орден із Квінтесенції',
			source: 'Тексти або знання мовою Заліак (Zaliac)',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 150
		}),
		level: 1,
		feature: FactoryLogic.feature.createChoice({
			id: 'imbuement-damage-immunity-i',
			name: 'Імунітет до шкоди I',
			description: 'Оберіть три типи шкоди. Ви отримуєте імунітет 5 до цих типів шкоди.',
			options: [
				{
					feature: FactoryLogic.feature.createDamageModifier({
						id: 'imbuement-damage-immunity-i-a',
						name: 'Імунітет до шкоди I (Кислотна)',
						modifiers: [FactoryLogic.damageModifier.create({
							damageType: DamageType.Acid,
							modifierType: DamageModifierType.Immunity,
							value: 5
						})]
					}),
					value: 1
				},
				{
					feature: FactoryLogic.feature.createDamageModifier({
						id: 'imbuement-damage-immunity-i-b',
						name: 'Імунітет до шкоди I (Холодна)',
						modifiers: [FactoryLogic.damageModifier.create({
							damageType: DamageType.Cold,
							modifierType: DamageModifierType.Immunity,
							value: 5
						})]
					}),
					value: 1
				},
				{
					feature: FactoryLogic.feature.createDamageModifier({
						id: 'imbuement-damage-immunity-i-c',
						name: 'Імунітет до шкоди I (Скверна)',
						modifiers: [FactoryLogic.damageModifier.create({
							damageType: DamageType.Corruption,
							modifierType: DamageModifierType.Immunity,
							value: 5
						})]
					}),
					value: 1
				},
				{
					feature: FactoryLogic.feature.createDamageModifier({
						id: 'imbuement-damage-immunity-i-d',
						name: 'Імунітет до шкоди I (Вогняна)',
						modifiers: [FactoryLogic.damageModifier.create({
							damageType: DamageType.Fire,
							modifierType: DamageModifierType.Immunity,
							value: 5
						})]
					}),
					value: 1
				},
				{
					feature: FactoryLogic.feature.createDamageModifier({
						id: 'imbuement-damage-immunity-i-e',
						name: 'Імунітет до шкоди I (Священна)',
						modifiers: [FactoryLogic.damageModifier.create({
							damageType: DamageType.Holy,
							modifierType: DamageModifierType.Immunity,
							value: 5
						})]
					}),
					value: 1
				},
				{
					feature: FactoryLogic.feature.createDamageModifier({
						id: 'imbuement-damage-immunity-i-f',
						name: 'Імунітет до шкоди I (Блискавична)',
						modifiers: [FactoryLogic.damageModifier.create({
							damageType: DamageType.Lightning,
							modifierType: DamageModifierType.Immunity,
							value: 5
						})]
					}),
					value: 1
				},
				{
					feature: FactoryLogic.feature.createDamageModifier({
						id: 'imbuement-damage-immunity-i-g',
						name: 'Імунітет до шкоди I (Отруйна)',
						modifiers: [FactoryLogic.damageModifier.create({
							damageType: DamageType.Poison,
							modifierType: DamageModifierType.Immunity,
							value: 5
						})]
					}),
					value: 1
				},
				{
					feature: FactoryLogic.feature.createDamageModifier({
						id: 'imbuement-damage-immunity-i-h',
						name: 'Імунітет до шкоди I (Психічна)',
						modifiers: [FactoryLogic.damageModifier.create({
							damageType: DamageType.Psychic,
							modifierType: DamageModifierType.Immunity,
							value: 5
						})]
					}),
					value: 1
				},
				{
					feature: FactoryLogic.feature.createDamageModifier({
						id: 'imbuement-damage-immunity-i-i',
						name: 'Імунітет до шкоди I (Звукова)',
						modifiers: [FactoryLogic.damageModifier.create({
							damageType: DamageType.Sonic,
							modifierType: DamageModifierType.Immunity,
							value: 5
						})]
					}),
					value: 1
				}
			],
			count: 3
		})
	});

	static disguise: Imbuement = FactoryLogic.createImbuement({
		type: ItemType.ImbuedArmor,
		crafting: FactoryLogic.createProject({
			prerequisites: 'Кров лікантропа',
			source: 'Тексти або знання мовою Кхелт (Khelt)',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 150
		}),
		level: 1,
		feature: FactoryLogic.feature.createAbility({
			ability: FactoryLogic.createAbility({
				id: 'imbuement-disguise',
				name: 'Маскування',
				type: FactoryLogic.type.createManeuver(),
				sections: [
					FactoryLogic.createAbilitySectionText('Ви змушуєте цей обладунок набувати вигляду будь-якого типу одягу, який ви бачили: сукні шляхтянки, уніформи вартового, шат культиста тощо. Поки обладунок перетворений на інший одяг, він не втрачає жодних своїх захисних властивостей.')
				]
			})
		})
	});

	static iridescent: Imbuement = FactoryLogic.createImbuement({
		type: ItemType.ImbuedArmor,
		crafting: FactoryLogic.createProject({
			prerequisites: 'Хутро світлозгинця',
			source: 'Тексти або знання мовою Гіраллік (Hyrallic)',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 150
		}),
		level: 1,
		feature: FactoryLogic.feature.createAbility({
			ability: FactoryLogic.createAbility({
				id: 'imbuement-iridescent',
				name: 'Іридисцентність',
				type: FactoryLogic.type.createTrigger('Ви є єдиною ціллю здібності', { free: true }),
				sections: [
					FactoryLogic.createAbilitySectionText('Ви розкриваєте, що здібність насправді була спрямована на ваш післяобраз у тому самому просторі, що й ви. Кидок сили цієї здібності вважається таким, що дорівнює 11. Ви не можете знову використати це посилення, доки не здобудете 1 або більше Перемог.')
				]
			})
		})
	});

	static magicResistanceI: Imbuement = FactoryLogic.createImbuement({
		type: ItemType.ImbuedArmor,
		crafting: FactoryLogic.createProject({
			prerequisites: 'Луска дракона',
			source: 'Тексти або знання мовою Перша мова (The First Language)',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 150
		}),
		level: 1,
		feature: FactoryLogic.feature.create({
			id: 'imbuement-magic-resistance-i',
			name: 'Магічний опір I',
			description: 'Ваші значення характеристик вважаються на 1 вищими (максимум до 2) для спротиву потужності магічних здібностей.'
		})
	});

	static nettlebloom: Imbuement = FactoryLogic.createImbuement({
		type: ItemType.ImbuedArmor,
		crafting: FactoryLogic.createProject({
			prerequisites: 'Троянда з чарівного живоплоту відьми',
			source: 'Тексти або знання мовою Кхелт (Khelt)',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 150
		}),
		level: 1,
		feature: FactoryLogic.feature.create({
			id: 'imbuement-nettlebloom',
			name: 'Кропивоцвіт',
			description: 'Щоразу, коли сусідня істота хапає вас, на вашому обладунку проростає отруйна кропива. Поки ця істота тримає вас схопленими, вона ослаблена.'
		})
	});

	static phasingI: Imbuement = FactoryLogic.createImbuement({
		type: ItemType.ImbuedArmor,
		crafting: FactoryLogic.createProject({
			prerequisites: 'Іхор знищеного привида',
			source: 'Тексти або знання мовою Сзетч (Szetch)',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 150
		}),
		level: 1,
		feature: FactoryLogic.feature.create({
			id: 'imbuement-phasing-i',
			name: 'Фазування I',
			description: 'Раз за хід ви можете проходити крізь 1 клітинку суцільної матерії. Якщо ви завершуєте хід усередині суцільної матерії, вас виштовхує назад у простір, з якого ви до неї увійшли, і ви отримуєте 5 шкоди, яку неможливо зменшити жодним способом.'
		})
	});

	static psionicResistanceI: Imbuement = FactoryLogic.createImbuement({
		type: ItemType.ImbuedArmor,
		crafting: FactoryLogic.createProject({
			prerequisites: 'Рідкісні кристали, що резонують із псіонічною енергією та часто трапляються на місцях псіонічних експериментів',
			source: 'Тексти або знання мовою Волл (Voll)',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 150
		}),
		level: 1,
		feature: FactoryLogic.feature.create({
			id: 'imbuement-psionic-resistance-i',
			name: 'Псіонічний опір I',
			description: 'Ваші значення характеристик вважаються на 1 вищими (максимум до 2) для спротиву потужності псіонічних здібностей.'
		})
	});

	static swift: Imbuement = FactoryLogic.createImbuement({
		type: ItemType.ImbuedArmor,
		crafting: FactoryLogic.createProject({
			prerequisites: 'Перо сокола, вбитого в пікіруванні',
			source: 'Тексти або знання мовою Іллірик (Yllyric)',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 150
		}),
		level: 1,
		feature: FactoryLogic.feature.createBonus({
			id: 'imbuement-swift',
			name: 'Стрімкість',
			field: FeatureField.Speed,
			value: 1
		})
	});

	static tempestI: Imbuement = FactoryLogic.createImbuement({
		type: ItemType.ImbuedArmor,
		crafting: FactoryLogic.createProject({
			prerequisites: 'Смуга зоряного металу, ураженого блискавкою',
			source: 'Тексти або знання мовою Уллорвік (Ullorvic)',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 150
		}),
		level: 1,
		feature: FactoryLogic.feature.createAbility({
			ability: FactoryLogic.createAbility({
				id: 'imbuement-tempest-i',
				name: 'Буревій I',
				description: 'Ви насичуєте свій обладунок сутністю бурі.',
				type: FactoryLogic.type.createManeuver(),
				sections: [
					FactoryLogic.createAbilitySectionText('Уперше, коли сусідня істота завдає вам шкоди до кінця вашого наступного ходу, вона отримує блискавичну шкоду, рівну вашому найвищому значенню характеристики, а ви можете відштовхнути її на 1 клітинку.'),
					FactoryLogic.createAbilitySectionPackage('tempest-tag')
				]
			})
		})
	});

	static absorption: Imbuement = FactoryLogic.createImbuement({
		type: ItemType.ImbuedArmor,
		crafting: FactoryLogic.createProject({
			prerequisites: 'Дзеркало, благословенне жерцем бога магії',
			source: 'Тексти або знання мовою Перша мова (The First Language)',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 150
		}),
		level: 5,
		feature: FactoryLogic.feature.createAbility({
			ability: FactoryLogic.createAbility({
				id: 'imbuement-absorption',
				name: 'Поглинання',
				type: FactoryLogic.type.createTrigger('Вас націлює магічна або псіонічна здібність, що націлює лише одну істоту', { free: true }),
				sections: [
					FactoryLogic.createAbilitySectionText(`
Ви змушуєте цей обладунок поглинути здібність після того, як буде розвʼязано її ефекти. Поки обладунок утримує поглинуту здібність, ви не можете поглинути іншу.

Ви можете використати поглинуту здібність так, ніби знаєте її, роблячи кидки сили цієї здібності з використанням на ваш вибір Розуму, Інтуїції або Присутності. Вам не потрібно витрачати жодного Героїчного ресурсу, щоб активувати цю здібність. Після використання здібності обладунок втрачає її, і ви можете поглинути іншу.`)
				]
			})
		})
	});

	static damageImmunityII: Imbuement = FactoryLogic.createImbuement({
		type: ItemType.ImbuedArmor,
		crafting: FactoryLogic.createProject({
			prerequisites: 'Сутність елементаля, який усе ще живий',
			source: 'Тексти або знання мовою Заліак (Zaliac)',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 150
		}),
		level: 5,
		feature: FactoryLogic.feature.createChoice({
			id: 'imbuement-damage-immunity-ii',
			name: 'Імунітет до шкоди II',
			description: 'Імунітет до шкоди, який надає цей обладунок, зростає до 10. (Оберіть ті самі типи шкоди нижче.)',
			options: [
				{
					feature: FactoryLogic.feature.createDamageModifier({
						id: 'imbuement-damage-immunity-ii-a',
						name: 'Імунітет до шкоди II (Кислотна)',
						modifiers: [FactoryLogic.damageModifier.create({
							damageType: DamageType.Acid,
							modifierType: DamageModifierType.Immunity,
							value: 5
						})]
					}),
					value: 1
				},
				{
					feature: FactoryLogic.feature.createDamageModifier({
						id: 'imbuement-damage-immunity-ii-b',
						name: 'Імунітет до шкоди II (Холодна)',
						modifiers: [FactoryLogic.damageModifier.create({
							damageType: DamageType.Cold,
							modifierType: DamageModifierType.Immunity,
							value: 5
						})]
					}),
					value: 1
				},
				{
					feature: FactoryLogic.feature.createDamageModifier({
						id: 'imbuement-damage-immunity-ii-c',
						name: 'Імунітет до шкоди II (Скверна)',
						modifiers: [FactoryLogic.damageModifier.create({
							damageType: DamageType.Corruption,
							modifierType: DamageModifierType.Immunity,
							value: 5
						})]
					}),
					value: 1
				},
				{
					feature: FactoryLogic.feature.createDamageModifier({
						id: 'imbuement-damage-immunity-ii-d',
						name: 'Імунітет до шкоди II (Вогняна)',
						modifiers: [FactoryLogic.damageModifier.create({
							damageType: DamageType.Fire,
							modifierType: DamageModifierType.Immunity,
							value: 5
						})]
					}),
					value: 1
				},
				{
					feature: FactoryLogic.feature.createDamageModifier({
						id: 'imbuement-damage-immunity-ii-e',
						name: 'Імунітет до шкоди II (Священна)',
						modifiers: [FactoryLogic.damageModifier.create({
							damageType: DamageType.Holy,
							modifierType: DamageModifierType.Immunity,
							value: 5
						})]
					}),
					value: 1
				},
				{
					feature: FactoryLogic.feature.createDamageModifier({
						id: 'imbuement-damage-immunity-ii-f',
						name: 'Імунітет до шкоди II (Блискавична)',
						modifiers: [FactoryLogic.damageModifier.create({
							damageType: DamageType.Lightning,
							modifierType: DamageModifierType.Immunity,
							value: 5
						})]
					}),
					value: 1
				},
				{
					feature: FactoryLogic.feature.createDamageModifier({
						id: 'imbuement-damage-immunity-ii-g',
						name: 'Імунітет до шкоди II (Отруйна)',
						modifiers: [FactoryLogic.damageModifier.create({
							damageType: DamageType.Poison,
							modifierType: DamageModifierType.Immunity,
							value: 5
						})]
					}),
					value: 1
				},
				{
					feature: FactoryLogic.feature.createDamageModifier({
						id: 'imbuement-damage-immunity-ii-h',
						name: 'Імунітет до шкоди II (Психічна)',
						modifiers: [FactoryLogic.damageModifier.create({
							damageType: DamageType.Psychic,
							modifierType: DamageModifierType.Immunity,
							value: 5
						})]
					}),
					value: 1
				},
				{
					feature: FactoryLogic.feature.createDamageModifier({
						id: 'imbuement-damage-immunity-ii-i',
						name: 'Імунітет до шкоди II (Звукова)',
						modifiers: [FactoryLogic.damageModifier.create({
							damageType: DamageType.Sonic,
							modifierType: DamageModifierType.Immunity,
							value: 5
						})]
					}),
					value: 1
				}
			],
			count: 3
		})
	});

	static dragonSoulI: Imbuement = FactoryLogic.createImbuement({
		type: ItemType.ImbuedArmor,
		crafting: FactoryLogic.createProject({
			prerequisites: 'Луска мертвого дракона',
			source: 'Тексти або знання мовою Вастаріакс (Vastariax)',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 150
		}),
		level: 5,
		feature: FactoryLogic.feature.createAbility({
			ability: FactoryLogic.createAbility({
				id: 'imbuement-dragon-soul-i',
				name: 'Душа дракона I',
				type: FactoryLogic.type.createTrigger('Інша істота робить вас захеканими або вмираючими', { free: true }),
				sections: [
					FactoryLogic.createAbilitySectionText('Ви змушуєте душу дракона вирватися з обладунку й ринути до цієї істоти.'),
					FactoryLogic.createAbilitySectionRoll(
						FactoryLogic.createPowerRoll({
							characteristic: [Characteristic.Might, Characteristic.Agility, Characteristic.Reason, Characteristic.Intuition, Characteristic.Presence],
							tier1: '2 шкоди; Відштовхування 3',
							tier2: '12 шкоди; Відштовхування 4',
							tier3: '15 шкоди; Відштовхування 5'
						})
					)
				]
			})
		})
	});

	static levitating: Imbuement = FactoryLogic.createImbuement({
		type: ItemType.ImbuedArmor,
		crafting: FactoryLogic.createProject({
			prerequisites: 'Кристал завбільшки з долоню, вирощений у підземному лігві надрозуму',
			source: 'Тексти або знання мовою Заліак (Zaliac)',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 150
		}),
		level: 5,
		feature: FactoryLogic.feature.create({
			id: 'imbuement-levitating',
			name: 'Левітація',
			description: 'У свій хід ви можете вважати до 5 послідовних клітинок свого руху польотом. Якщо наприкінці ходу ви все ще перебуваєте в повітрі, ви падаєте долілиць.'
		})
	});

	static magicResistanceII: Imbuement = FactoryLogic.createImbuement({
		type: ItemType.ImbuedArmor,
		crafting: FactoryLogic.createProject({
			prerequisites: 'Луска зрілого дракона',
			source: 'Тексти або знання мовою Перша мова (The First Language)',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 150
		}),
		level: 5,
		feature: FactoryLogic.feature.create({
			id: 'imbuement-magic-resistance-ii',
			name: 'Магічний опір II',
			description: 'Ваші значення характеристик вважаються на 2 вищими (максимум до 3) для спротиву потужності магічних здібностей. Ця перевага замінює Магічний опір I.'
		})
	});

	static phasingII: Imbuement = FactoryLogic.createImbuement({
		type: ItemType.ImbuedArmor,
		crafting: FactoryLogic.createProject({
			prerequisites: 'Рештки вбитого слизу',
			source: 'Тексти або знання мовою Сзетч (Szetch)',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 150
		}),
		level: 5,
		feature: FactoryLogic.feature.create({
			id: 'imbuement-phasing-ii',
			name: 'Фазування II',
			description: 'Коли ви використовуєте посилення обладунку «Фазування I», ви можете проходити крізь 3 клітинки суцільної матерії за хід.'
		})
	});

	static psionicResistanceII: Imbuement = FactoryLogic.createImbuement({
		type: ItemType.ImbuedArmor,
		crafting: FactoryLogic.createProject({
			prerequisites: 'Свіжа кристалічна луска самоцвітного дракона',
			source: 'Тексти або знання мовою Волл (Voll)',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 150
		}),
		level: 5,
		feature: FactoryLogic.feature.create({
			id: 'imbuement-psionic-resistance-ii',
			name: 'Псіонічний опір II',
			description: 'Ваші значення характеристик вважаються на 2 вищими (максимум до 3) для спротиву потужності псіонічних здібностей. Ця перевага замінює Псіонічний опір I.'
		})
	});

	static reactive: Imbuement = FactoryLogic.createImbuement({
		type: ItemType.ImbuedArmor,
		crafting: FactoryLogic.createProject({
			prerequisites: 'Складний, вручну зібраний набір латунних шестерень, вкритих рунами зі срібного пилу',
			source: 'Тексти або знання мовою Заліак (Zaliac)',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 150
		}),
		level: 5,
		feature: FactoryLogic.feature.create({
			id: 'imbuement-reactive',
			name: 'Реактивність',
			description: 'Щоразу, коли ви отримуєте шкоду, після розвʼязання тригерної шкоди ви отримуєте імунітет до шкоди 2 до кінця вашого наступного ходу.'
		})
	});

	static secondWind: Imbuement = FactoryLogic.createImbuement({
		type: ItemType.ImbuedArmor,
		crafting: FactoryLogic.createProject({
			prerequisites: 'Піт троля',
			source: 'Тексти або знання мовою Калліак (Kalliak)',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 150
		}),
		level: 5,
		feature: FactoryLogic.feature.createAbility({
			ability: FactoryLogic.createAbility({
				id: 'imbuement-second-wind',
				name: 'Друге дихання',
				type: FactoryLogic.type.createTrigger('Ви стаєте захеканими', { free: true }),
				sections: [
					FactoryLogic.createAbilitySectionText('Витратьте Відновлення.')
				]
			})
		})
	});

	static shattering: Imbuement = FactoryLogic.createImbuement({
		type: ItemType.ImbuedArmor,
		crafting: FactoryLogic.createProject({
			prerequisites: 'Фунт вулканічного обсидіану, природно сформованого єдиним шматком',
			source: 'Тексти або знання мовою Заліак (Zaliac)',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 150
		}),
		level: 5,
		feature: FactoryLogic.feature.create({
			id: 'imbuement-shattering',
			name: 'Розтрощення',
			description: 'Щоразу, коли ворог завдає вам критичного удару, він отримує 10 звукової шкоди.'
		})
	});

	static tempestII: Imbuement = FactoryLogic.createImbuement({
		type: ItemType.ImbuedArmor,
		crafting: FactoryLogic.createProject({
			prerequisites: 'Обладунок має бути розкладений під чистим небом, коли над ним пролітає комета',
			source: 'Тексти або знання мовою Уллорвік (Ullorvic)',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 150
		}),
		level: 5,
		feature: FactoryLogic.feature.createPackageContent({
			id: 'imbuement-tempest-ii',
			name: 'Буревій II',
			description: 'Ціль отримує 8 блискавичної шкоди, а ви відштовхуєте її до 3 клітинок.',
			tag: 'tempest-tag'
		})
	});

	static devilsBargain: Imbuement = FactoryLogic.createImbuement({
		type: ItemType.ImbuedArmor,
		crafting: FactoryLogic.createProject({
			prerequisites: 'Крило архідиявола',
			source: 'Тексти або знання мовою Анжалі (Anjali)',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 150
		}),
		level: 9,
		feature: FactoryLogic.feature.create({
			id: 'imbuement-devils-bargain',
			name: 'Диявольська угода',
			description: 'Ви можете літати. Додатково, якщо якийсь ефект мав би зробити вас розпластаними під час польоту, ви можете не падати долілиць, втративши Витривалість, що дорівнює відстані, на яку ви впали б через цей ефект.'
		})
	});

	static dragonSoulII: Imbuement = FactoryLogic.createImbuement({
		type: ItemType.ImbuedArmor,
		crafting: FactoryLogic.createProject({
			prerequisites: 'Пожертва з самоцвітів, монет і мистецьких творів, украдених зі скарбу дракона та спалених у ритуальному вогні',
			source: 'Тексти або знання мовою Вастаріакс (Vastariax)',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 150
		}),
		level: 9,
		feature: FactoryLogic.feature.createAbility({
			ability: FactoryLogic.createAbility({
				id: 'imbuement-dragon-soul-ii',
				name: 'Душа дракона II',
				description: 'Ви розкриваєте пащу й вивергаєте пекло.',
				type: FactoryLogic.type.createMain({ qualifiers: ['Ви захекані'] }),
				keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
				distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Line, value: 5, value2: 1, within: 1 })],
				target: 'Кожен ворог у зоні',
				sections: [
					FactoryLogic.createAbilitySectionRoll(
						FactoryLogic.createPowerRoll({
							characteristic: [Characteristic.Might, Characteristic.Agility, Characteristic.Reason, Characteristic.Intuition, Characteristic.Presence],
							tier1: '5 вогняної шкоди',
							tier2: '8 вогняної шкоди',
							tier3: '11 вогняної шкоди'
						})
					)
				]
			})
		})
	});

	static invulnerable: Imbuement = FactoryLogic.createImbuement({
		type: ItemType.ImbuedArmor,
		crafting: FactoryLogic.createProject({
			prerequisites: 'Перероблені металеві пластини з бойового двигуна сервоків',
			source: 'Тексти або знання мовою Ралларіан (Rallarian)',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 150
		}),
		level: 9,
		feature: FactoryLogic.feature.create({
			id: 'imbuement-invulnerable',
			name: 'Невразливий',
			description: 'Коли кидок здібності, зроблений проти вас, дає результат 1 рівня, ви можете проігнорувати його шкоду та ефекти.'
		})
	});

	static leylineWalker: Imbuement = FactoryLogic.createImbuement({
		type: ItemType.ImbuedArmor,
		crafting: FactoryLogic.createProject({
			prerequisites: 'Живець ефірного дерева, що проявляється у матеріальному світі лише раз на рік',
			source: 'Тексти або знання мовою Іллірик (Yllyric)',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 150
		}),
		level: 9,
		feature: FactoryLogic.feature.createAbility({
			ability: FactoryLogic.createAbility({
				id: 'imbuement-leyline-walker',
				name: 'Ходець лей-лініями',
				type: FactoryLogic.type.createMove({ qualifiers: ['Раз за хід'] }),
				sections: [
					FactoryLogic.createAbilitySectionText('Ви можете витратити будь-яку частину свого руху, щоб натомість телепортуватися на цю відстань.')
				]
			})
		})
	});

	static life: Imbuement = FactoryLogic.createImbuement({
		type: ItemType.ImbuedArmor,
		crafting: FactoryLogic.createProject({
			prerequisites: 'Сльоза святого',
			source: 'Тексти або знання мовою Високий Курик (High Kuric)',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 150
		}),
		level: 9,
		feature: FactoryLogic.feature.create({
			id: 'imbuement-life',
			name: 'Життя',
			description: 'Щоразу, коли ви мали б померти, ви можете витратити Відновлення, щоб натомість відновити Витривалість. Якщо у вас немає Відновлень, щоб витратити, ви помираєте.'
		})
	});

	static magicResistanceIII: Imbuement = FactoryLogic.createImbuement({
		type: ItemType.ImbuedArmor,
		crafting: FactoryLogic.createProject({
			prerequisites: 'Луска древнього дракона',
			source: 'Тексти або знання мовою Перша мова (The First Language)',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 150
		}),
		level: 9,
		feature: FactoryLogic.feature.create({
			id: 'imbuement-magic-resistance-iii',
			name: 'Магічний опір III',
			description: 'Перевага посилення обладунку «Магічний опір II» поширюється на кожного союзника в межах 3 клітинок від вас.'
		})
	});

	static phasingIII: Imbuement = FactoryLogic.createImbuement({
		type: ItemType.ImbuedArmor,
		crafting: FactoryLogic.createProject({
			prerequisites: 'Ідеально прозоре скло з будинку, який зник у Ефірному плані',
			source: 'Тексти або знання мовою Сзетч (Szetch)',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 150
		}),
		level: 9,
		feature: FactoryLogic.feature.create({
			id: 'imbuement-phasing-iii',
			name: 'Фазування III',
			description: 'Ваш рух не провокує вільних ударів, і ви можете проходити крізь простір будь-якого ворога, наче він ваш союзник. Ви не можете завершити хід у просторі ворога.'
		})
	});

	static psionicResistanceIII: Imbuement = FactoryLogic.createImbuement({
		type: ItemType.ImbuedArmor,
		crafting: FactoryLogic.createProject({
			prerequisites: 'Череп безголосого балакуна віком щонайменше століття',
			source: 'Тексти або знання мовою Волл (Voll)',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 150
		}),
		level: 9,
		feature: FactoryLogic.feature.create({
			id: 'imbuement-psionic-resistance-iii',
			name: 'Псіонічний опір III',
			description: 'Перевага посилення обладунку «Псіонічний опір II» поширюється на кожного союзника в межах 3 клітинок від вас.'
		})
	});

	static temporalFlux: Imbuement = FactoryLogic.createImbuement({
		type: ItemType.ImbuedArmor,
		crafting: FactoryLogic.createProject({
			prerequisites: 'Експериментальний темпоральний конденсатор, винайдений куранʼзоями',
			source: 'Тексти або знання мовою Волл (Voll)',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 150
		}),
		level: 9,
		feature: FactoryLogic.feature.createMultiple({
			id: 'imbuement-temporal-flux',
			name: 'Часовий зсув',
			description: 'Щоразу, коли ви виходите з клітинки, можете лишити в ній відбиток, що існує до кінця зустрічі, доки відбиток не отримає 20 або більше шкоди, або доки ви не створите новий відбиток. Клітинку займає ваш відбиток, і ви можете ділити з ним цей простір.',
			features: [
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'temporal-flux-a',
						name: 'Часовий зсув',
						type: FactoryLogic.type.createManeuver({ free: true }),
						sections: [
							FactoryLogic.createAbilitySectionText('Ви телепортуєтеся в простір відбитка.')
						]
					})
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'temporal-flux-b',
						name: 'Часовий зсув',
						type: FactoryLogic.type.createTrigger('Вас націлює здібність', { free: true }),
						distance: [FactoryLogic.distance.createSpecial('')],
						target: 'Себе',
						sections: [
							FactoryLogic.createAbilitySectionText('Ви телепортуєтеся до свого відбитка, а кидок сили цієї здібності автоматично дає результат 1 рівня.')
						]
					})
				})
			]
		})
	});

	static unbending: Imbuement = FactoryLogic.createImbuement({
		type: ItemType.ImbuedArmor,
		crafting: FactoryLogic.createProject({
			prerequisites: 'Наконечник списа чи інша зброя, що зламалася в тілі камʼяного велета й окостеніла там щонайменше за рік',
			source: 'Тексти або знання мовою Високий Курик (High Kuric)',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 150
		}),
		level: 9,
		feature: FactoryLogic.feature.create({
			id: 'imbuement-unbending',
			name: 'Незламний',
			description: 'Вас не можна піддати примусовому переміщенню, якщо ви самі цього не оберете. Ефекти, що ігнорують Стабільність, також ігнорують це посилення.'
		})
	});
};
