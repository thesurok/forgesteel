import { AbilityKeyword } from '@/enums/ability-keyword';
import { Characteristic } from '@/enums/characteristic';
import { DamageModifierType } from '@/enums/damage-modifier-type';
import { DamageType } from '@/enums/damage-type';
import { FactoryLogic } from '@/logic/factory-logic';
import { FeatureField } from '@/enums/feature-field';
import { Item } from '@/models/item';
import { ItemType } from '@/enums/item-type';

export class LeveledItemData {
	static bloodboundBand: Item = FactoryLogic.createItem({
		id: 'item-bloodbound-band',
		name: 'Кільце кровного звʼязку',
		description: 'Це кільце ніби обведене засохлою кровʼю, яка щоразу повертається, коли її стирають.',
		type: ItemType.Leveled,
		keywords: [AbilityKeyword.Magic, AbilityKeyword.Ring],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Пара некрологів, кожен із яких згадує особу з іншого',
			source: 'Тексти або перекази мовою Келіан (Caelian)',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 450
		}),
		featuresByLevel: [
			{
				level: 1,
				features: [
					FactoryLogic.feature.create({
						id: 'item-bloodbound-band-1',
						name: '',
						description: 'Під час перепочинку ви можете торкнутися цим кільцем будь-якої кількості інших Кілець кровного звʼязку, які носять згодні істоти, щоб утворити звʼязок між усіма вами. Істоти, споріднені кровʼю, не можуть створювати такий звʼязок. Кожна повʼязана істота може використовувати найвище значення відновлення серед усіх повʼязаних істот замість власного й витрачати Відновлення одна одної, наче вони її власні. Щоразу, коли будь-яка інша повʼязана істота отримує шкоду, кожна повʼязана істота також отримує 1 шкоди, яку не можна зменшити жодним способом. Ваш звʼязок закінчується, якщо ви знімете кільце, використаєте його для звʼязку з однією чи кількома іншими істотами або помрете, але інші кільця залишаються повʼязаними між собою.'
					}),
					FactoryLogic.feature.createBonus({
						id: 'item-bloodbound-band-1a',
						field: FeatureField.Stamina,
						value: 6
					})
				]
			},
			{
				level: 5,
				features: [
					FactoryLogic.feature.createBonus({
						id: 'item-bloodbound-band-5a',
						field: FeatureField.Stamina,
						value: 6
					}),
					FactoryLogic.feature.createDamageModifier({
						id: 'item-bloodbound-band-5b',
						modifiers: [
							FactoryLogic.damageModifier.create({
								damageType: DamageType.Damage,
								modifierType: DamageModifierType.Immunity,
								value: 2
							})
						]
					})
				]
			},
			{
				level: 9,
				features: [
					FactoryLogic.feature.create({
						id: 'item-bloodbound-band-9',
						name: '',
						description: 'Якщо істота, повʼязана з вами, помирає, ви можете обрати померти замість неї. Ваша жертва перекручує долю, виводячи істоту з небезпеки, і вона відновлює Витривалість, рівну своєму значенню захеканості. Потім ваше кільце телепортується до неї й перестає бути магічним.'
					}),
					FactoryLogic.feature.createBonus({
						id: 'item-bloodbound-band-9a',
						field: FeatureField.Stamina,
						value: 9
					})
				]
			}
		]
	});

	static bloodyHandWraps: Item = FactoryLogic.createItem({
		id: 'item-bloody-hand-wraps',
		name: 'Криваві обмотки',
		description: 'Ці грубі обмотки для рук просякнуті кровʼю, яку неможливо відчистити.',
		type: ItemType.Leveled,
		keywords: [AbilityKeyword.Hands, AbilityKeyword.Psionic],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Один сувій бавовни, вимочений у крові шістьох шукачів пригод',
			source: 'Тексти або перекази мовою Келіан (Caelian)',
			characteristic: [Characteristic.Might, Characteristic.Agility, Characteristic.Intuition],
			goal: 450
		}),
		featuresByLevel: [
			{
				level: 1,
				features: [
					FactoryLogic.feature.create({
						id: 'item-bloody-hand-wraps-1',
						name: '',
						description: 'Раз за хід ви можете отримати 5 шкоди, яку не можна зменшити жодним способом, щоб використати маневр «Схопити» (не потребує дії).'
					}),
					FactoryLogic.feature.createAbilityDamage({
						id: 'item-bloody-hand-wraps-1a',
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
						id: 'item-bloody-hand-wraps-5',
						name: '',
						description: 'Раз за хід ви можете отримати 10 шкоди, яку не можна зменшити жодним способом, щоб зробити ближній вільний удар (не потребує дії). У свій хід ви можете скористатися або опцією ближнього вільного удару від обмоток, або опцією маневру «Схопити», але лише однією.'
					}),
					FactoryLogic.feature.createAbilityDamage({
						id: 'item-bloody-hand-wraps-5a',
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
						id: 'item-bloody-hand-wraps-9',
						name: '',
						description: 'Раз за хід ви можете отримати 15 шкоди, яку не можна зменшити жодним способом, щоб використати фірмову здібність (не потребує дії). У свій хід ви можете скористатися або опцією фірмової здібності від обмоток, або опцією ближнього вільного удару, або опцією маневру «Схопити», але лише однією.'
					}),
					FactoryLogic.feature.createAbilityDamage({
						id: 'item-bloody-hand-wraps-9a',
						name: '',
						keywords: [AbilityKeyword.Weapon, AbilityKeyword.Melee],
						value: 1
					})
				]
			}
		]
	});

	static lightningTreads: Item = FactoryLogic.createItem({
		id: 'item-lightning-treads',
		name: 'Блискавичні підошви',
		description: 'Щоразу, коли ці чоботи торкаються землі, з них сиплються іскри, і їх більшає, чим швидше розганяється власник.',
		type: ItemType.Leveled,
		keywords: [AbilityKeyword.Feet, AbilityKeyword.Magic],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Одна банка блискавки',
			source: 'Тексти або перекази мовою Іллірик (Yllyric)',
			characteristic: [Characteristic.Agility, Characteristic.Reason, Characteristic.Intuition],
			goal: 450
		}),
		featuresByLevel: [
			{
				level: 1,
				features: [
					FactoryLogic.feature.createAbilityDamage({
						id: 'item-lightning-treads-1a',
						name: '',
						keywords: [AbilityKeyword.Weapon, AbilityKeyword.Melee],
						value: 1,
						damageType: DamageType.Lightning
					}),
					FactoryLogic.feature.createBonus({
						id: 'item-lightning-treads-1b',
						name: '',
						field: FeatureField.Speed,
						value: 2
					})
				]
			},
			{
				level: 5,
				features: [
					FactoryLogic.feature.create({
						id: 'item-lightning-treads-5',
						name: '',
						description: 'Будь-яка збройна здібність, що завдає шкоди й використовує ваш беззбройний удар, завдає додатково 1 шкоди блискавкою за кожну клітинку, яку ви пройшли цього ходу до використання здібності, до максимуму +2.'
					}),
					FactoryLogic.feature.createAbilityDamage({
						id: 'item-lightning-treads-5a',
						name: '',
						keywords: [AbilityKeyword.Weapon, AbilityKeyword.Melee],
						value: 1,
						damageType: DamageType.Lightning
					})
				]
			},
			{
				level: 9,
				features: [
					FactoryLogic.feature.create({
						id: 'item-lightning-treads-9',
						name: '',
						description: 'Максимальний сукупний бонус до шкоди, який ви можете здобути з урахуванням руху, зростає до +3. Крім того, ви можете використати маневр, щоб виконати летючий удар блискавкою по одній сусідній істоті. Цю ціль відштовхує на відстань до 5 клітинок, а після відштовхування ви можете переміститися в будь-яку клітинку, сусідню до неї.'
					}),
					FactoryLogic.feature.createAbilityDamage({
						id: 'item-lightning-treads-9a',
						name: '',
						keywords: [AbilityKeyword.Weapon, AbilityKeyword.Melee],
						value: 1,
						damageType: DamageType.Lightning
					}),
					FactoryLogic.feature.createAbility({
						ability: FactoryLogic.createAbility({
							id: 'item-lightning-treads-9b',
							name: 'Використати Блискавичні підошви',
							description: 'Виконати летючий удар блискавкою',
							type: FactoryLogic.type.createManeuver(),
							sections: [
								FactoryLogic.createAbilitySectionText('Одну сусідню істоту відштовхує на відстань до 5 клітинок, а після відштовхування ви можете переміститися в будь-яку клітинку, сусідню до цілі.')
							]
						})
					})
				]
			}
		]
	});

	static revengersWrap: Item = FactoryLogic.createItem({
		id: 'item-revengers-wrap',
		name: 'Плащ месника',
		description: 'Коли ви вперше берете цей подертий плащ до рук, він наповнює розум думками про помсту.',
		type: ItemType.Leveled,
		keywords: [AbilityKeyword.Neck, AbilityKeyword.Magic],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Плащ, який носив убитий монарх',
			source: 'Тексти або перекази мовою Келіан (Caelian)',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 450
		}),
		featuresByLevel: [
			{
				level: 1,
				features: [
					FactoryLogic.feature.create({
						id: 'item-revengers-wrap-1',
						name: '',
						description: 'Поки ви носите цей плащ, будь-яка істота, що завдає вам шкоди, позначається для помсти до кінця вашого наступного ходу або доки вам не завдасть шкоди інша істота. Будь-який удар, який ви робите проти істоти, позначеної для помсти, завдає додаткової шкоди, що дорівнює вашому найвищому показнику характеристики, а щоразу, коли ви завдаєте шкоди істоті, позначеній для помсти, у неї також виникає кровотеча до кінця її наступного ходу.'
					})
				]
			},
			{
				level: 5,
				features: [
					FactoryLogic.feature.create({
						id: 'item-revengers-wrap-5',
						name: '',
						description: 'Кожна істота, що завдає вам шкоди, позначається для помсти до кінця вашого наступного ходу. Щоразу, коли ви завдаєте шкоди істоті, позначеній для помсти, у неї також виникає кровотеча (рят. кидок завершує).'
					})
				]
			},
			{
				level: 9,
				features: [
					FactoryLogic.feature.create({
						id: 'item-revengers-wrap-9',
						name: '',
						description: 'Коли у вас є три або більше істот, позначених для помсти, і ви націлюєте одну з них здібністю, що націлює лише одну істоту, ви націлюєте всіх істот, позначених для помсти, незалежно від відстані до них і навіть якщо у вас немає до них лінії ефекту.'
					})
				]
			}
		]
	});

	static thiefOfJoy: Item = FactoryLogic.createItem({
		id: 'item-thief-of-joy',
		name: 'Викрадач радості',
		description: 'Ця начищена мідна гривна пульсує відчуттям осуду.',
		type: ItemType.Leveled,
		keywords: [AbilityKeyword.Neck, AbilityKeyword.Psionic],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Фунт пірʼя, фунт цеглин із Семи міст Пекла',
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
							id: 'item-thief-of-joy-1',
							name: 'Використати Викрадач радості',
							type: FactoryLogic.type.createManeuver(),
							sections: [
								FactoryLogic.createAbilitySectionText('Оберіть істоту в межах вашої лінії ефекту. Ви дізнаєтеся рівень цілі. Якщо її рівень вищий за ваш, гривна дарує вам заздрість. Якщо її рівень дорівнює вашому або нижчий, гривна дарує вам презирство. Ви можете мати і заздрість, і презирство від різних істот, але не більше ніж по одному екземпляру кожного.'),
								FactoryLogic.createAbilitySectionPackage('item-thief-of-joy-tag')
							]
						})
					}),
					FactoryLogic.feature.createAbility({
						ability: FactoryLogic.createAbility({
							id: 'item-thief-of-joy-1a',
							name: 'Здібність предмета',
							type: FactoryLogic.type.createTrigger('Істота в межах 10 клітинок від вас завдає шкоди іншій істоті'),
							sections: [
								FactoryLogic.createAbilitySectionText('Ви витрачаєте свою заздрість або презирство. Якщо ви витрачаєте заздрість, то завдаєте істоті, сусідній до вас, шкоди, що дорівнює тригерній шкоді. Якщо ви витрачаєте презирство, ви зменшуєте тригерну шкоду наполовину. Наприкінці зіткнення ви втрачаєте будь-яку заздрість або презирство, даровані гривною.')
							]
						})
					}),
					FactoryLogic.feature.createBonus({
						id: 'item-thief-of-joy-1b',
						field: FeatureField.Stamina,
						valueCharacteristics: [Characteristic.Might, Characteristic.Agility, Characteristic.Reason, Characteristic.Intuition, Characteristic.Presence],
						valueCharacteristicMultiplier: 2
					})
				]
			},
			{
				level: 5,
				features: [
					FactoryLogic.feature.createPackageContent({
						id: 'item-thief-of-joy-5',
						name: '5-й',
						description: 'Коли цільова істота має той самий рівень, що й ви, ви отримуєте на вибір заздрість або презирство.',
						tag: 'item-thief-of-joy-tag'
					}),
					FactoryLogic.feature.createBonus({
						id: 'item-thief-of-joy-5a',
						field: FeatureField.Stamina,
						valueCharacteristics: [Characteristic.Might, Characteristic.Agility, Characteristic.Reason, Characteristic.Intuition, Characteristic.Presence]
					})
				]
			},
			{
				level: 9,
				features: [
					FactoryLogic.feature.createPackageContent({
						id: 'item-thief-of-joy-9',
						name: '9-й',
						description: 'Ви можете мати кілька екземплярів заздрості й презирства без обмежень для кожного.',
						tag: 'item-thief-of-joy-tag'
					}),
					FactoryLogic.feature.createBonus({
						id: 'item-thief-of-joy-9a',
						field: FeatureField.Stamina,
						valueCharacteristics: [Characteristic.Might, Characteristic.Agility, Characteristic.Reason, Characteristic.Intuition, Characteristic.Presence],
						valueCharacteristicMultiplier: 2
					})
				]
			}
		]
	});
}
