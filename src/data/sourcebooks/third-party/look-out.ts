import { AbilityDistanceType } from '@/enums/ability-distance-type';
import { AbilityKeyword } from '@/enums/ability-keyword';
import { Characteristic } from '@/enums/characteristic';
import { DamageModifierType } from '@/enums/damage-modifier-type';
import { DamageType } from '@/enums/damage-type';
import { FactoryLogic } from '@/logic/factory-logic';
import { FeatureField } from '@/enums/feature-field';
import { FeatureType } from '@/enums/feature-type';
import { HeroClass } from '@/models/class';
import { Kit } from '@/models/kit';
import { Perk } from '@/models/perk';
import { PerkList } from '@/enums/perk-list';
import { SkillList } from '@/enums/skill-list';
import { Sourcebook } from '@/models/sourcebook';
import { SourcebookType } from '@/enums/sourcebook-type';

// #region Clases

const kiln: HeroClass = {
	id: 'class-kiln',
	name: 'Kiln',
	description: `
Кілни - це магічні воїни й охоронці Підрозуму. Всеприсутнє коріння Підрозуму перетворює душі на магічний етер, який ви вловлюєте у свої дерев’яні талісмани. Різні породи дерева горять по-різному, і ви опановуєте їх усі, щоб обертати ворогів на попіл.

Як кілн, ви з’являєтеся, щоб роздмухувати полум’я там, де виникає іскра нагоди, наділяючи союзників силою нищити ваших ворогів. А якщо виникне потреба, ви й самі чудово здатні відправити на вогнище тих, хто стане проти вас.`,
	type: 'standard',
	subclassName: 'Кадр',
	subclassCount: 1,
	primaryCharacteristicsOptions: [
		[Characteristic.Agility, Characteristic.Reason]
	],
	primaryCharacteristics: [],
	featuresByLevel: [
		{
			level: 1,
			features: [
				FactoryLogic.feature.createBonus({
					id: 'AHShD5RQJEsUMI5D',
					name: 'Витривалість',
					field: FeatureField.Stamina,
					value: 21,
					valuePerLevel: 9
				}),
				FactoryLogic.feature.createBonus({
					id: 'fASrDG7UhEX5Blxa',
					name: 'Recoveries',
					field: FeatureField.Recoveries,
					value: 8
				}),
				FactoryLogic.feature.createSkillChoice({
					id: '40EUJLeDYXVn2fjh',
					selected: [AbilityKeyword.Magic]
				}),
				FactoryLogic.feature.createSkillChoice({
					id: '1D5vcoaQjS4bxAfB',
					selected: ['Столярство']
				}),
				FactoryLogic.feature.createSkillChoice({
					id: 'XpH3WAhclAzTtZiv',
					listOptions: [SkillList.Crafting, SkillList.Lore],
					count: 2
				}),
				FactoryLogic.feature.createHeroicResource({
					id: 'heroic-resource',
					name: 'Spark',
					gains: [
						{
							trigger: 'Start of your turn',
							value: '1d3',
							tag: 'start-turn'
						},
						{
							trigger: 'You use the Stoke the Flame ability targeting an ally',
							value: '1',
							tag: 'stoke-ally'
						}
					]
				}),
				FactoryLogic.feature.createPackage({
					id: 'pVGsG9NfxCcT1pfc',
					name: 'Enkindle',
					description: `
Щоразу, коли ви на початку свого ходу кидаєте, щоб отримати spark, ви можете розпалитися (без дії). Якщо ви це робите, ваш кидок отримує такі додаткові ефекти:

* Якщо випадає 1, Підрозум приймає вашу жертву. Ви отримуєте психічну шкоду, що дорівнює 1d10 + ваш рівень і не може бути зменшена жодним чином. Ви стаєте розпаленими.
* Якщо випадає 2, ви стаєте розпаленими.
* Якщо випадає 3, ви стаєте розпаленими й отримуєте 1 додатковий spark.

Поки ви розпалені, вміння, надані вашим Talisman Kit, посилюються. Розпаленість триває до кінця раунду.

Наприкінці сутички ви втрачаєте весь spark, що залишився.`,
					tag: 'Enkindle'
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: '6AEyy4LFirQe4qST',
						name: 'Stoke the Flame',
						description: 'As an ally attacks, you harness a bit of arcane energy to grant them a decisive advantage.',
						type: FactoryLogic.type.createTrigger('The target makes an ability roll for a damage-dealing ability.'),
						keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged],
						distance: [FactoryLogic.distance.createRanged(5)],
						target: '1 ally',
						sections: [
							FactoryLogic.createAbilitySectionText('Apply one Stoke the Flame effect from your talisman kit granted by the Tinderbox feature.'),
							FactoryLogic.createAbilitySectionField({
								name: 'Inner Flame',
								effect: 'Раз за раунд ви можете витратити 1 spark, щоб застосувати Stoke the Flame до себе замість союзника як безкоштовну тригерну дію. Ви можете застосувати Stoke the Flame таким чином, навіть якщо ви приголомшені.'
							})
						]
					})
				}),
				FactoryLogic.feature.createKitChoice({
					id: 'dXmTjCwMVwFeU1vV'
				}),
				FactoryLogic.feature.createKitChoice({
					id: 'dsTOgwyx33aQcquK',
					name: 'Tinderbox',
					types: ['Kiln']
				}),
				FactoryLogic.feature.createClassAbilityChoice({
					id: 'QeAzUQduMYs8dMZS',
					cost: 3
				}),
				FactoryLogic.feature.createClassAbilityChoice({
					id: 'zWI9wDu9dKJVBjaj',
					cost: 5
				})
			]
		},
		{
			level: 2,
			features: [
				FactoryLogic.feature.createPerk({
					id: 'HmIp8TIc3VCF2ZSV',
					name: 'Perk',
					description: `
You gain one crafting, lore, or supernatural, or kiln perk of your choice.

If you choose a kiln perk, you must first complete a task from the Undermind before you gain the perk. Work with your Director to come up with what the task is. It might be anything, but probably something you can accomplish in your next 16 Victories. As examples, your task might be one of the following:

* Plant the brain of a freshly slain enemy in the shade of a thousand-year old tree.
* Go to the nearest wode, take the seeds from a fruit freshly plucked, and feed those seeds to birds outside the wode.`,
					lists: [PerkList.Crafting, PerkList.Lore, PerkList.Supernatural, PerkList.Special]
				})
			]
		},
		{
			level: 3,
			features: [
				FactoryLogic.feature.createPackageContent({
					id: 'sJRlfIIufT36YWjq',
					name: 'A Fire Unburdened',
					description: `
Поки ви enkindled, як маневр ви можете вибрати одне з наведеного:

* Закінчити стан «Скутий».
* Закінчити стан «Сповільнений».

У межах цього маневру ви також можете встати, якщо розпластані.`,
					tag: 'Enkindle'
				}),
				FactoryLogic.feature.createDamageModifier({
					id: 'ss3x5Aky77xMctKf',
					modifiers: [
						FactoryLogic.damageModifier.createValuePlusPerLevel({
							damageType: DamageType.Fire,
							modifierType: DamageModifierType.Immunity,
							value: 5,
							perLevel: 1
						})
					]
				}),
				FactoryLogic.feature.create({
					id: 'dxLQNl9YTdlHy61x',
					name: 'Controlled Burn',
					description: 'Ви отримуєте перевагу на тести Присутності під час взаємодії з іншими істотами, коли перебуваєте поруч із видимим полум’ям розміром 2 клітинки або більше. Як маневр ви можете запалити або загасити будь-яку кількість підготовлених об’єктів розміром не більше 1 (розпал, смолоскипи, свічки, ґноти тощо) на будь-якій відстані, якщо бачите та впізнаєте цей об’єкт.'
				}),
				FactoryLogic.feature.createClassAbilityChoice({
					id: '2LVjHk8ypQyx6LsO',
					cost: 7
				})
			]
		}
	],
	abilities: [
		FactoryLogic.createAbility({
			id: 'o6o03jRIxEG0NQpx',
			name: 'Dance Like Embers',
			description: 'You dart from skirmish to skirmish leaving an ephemeral doppelganger of fire in your wake.',
			type: FactoryLogic.type.createManeuver(),
			keywords: [AbilityKeyword.Magic],
			distance: [FactoryLogic.distance.createSelf()],
			target: 'Себе',
			cost: 3,
			sections: [
				FactoryLogic.createAbilitySectionText('Ви можете телепортуватися двічі, щоразу на відстань до 2 клітинок, залишаючи в кожній клітинці, з якої телепортуєтеся, ефемерного вогняного двійника до початку вашого наступного ходу. Якщо ви перебуваєте поруч із ворогом, незалежно від його розміру, то одним із цих телепортів можете переміститися в простір по інший бік від нього. Коли ворог перебуває поруч принаймні з одним із ваших двійників, він має вразливість до шкоди, що дорівнює значенню вашого Розуму.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'ghpGUOgj52GuvcYZ',
			name: 'Heat Wave',
			description: 'Toasty.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
			distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 2 })],
			target: 'All enemies',
			cost: 3,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: Characteristic.Reason,
						tier1: '4 вогняної шкоди',
						tier2: '5 вогняної шкоди; відштовхнути на 1',
						tier3: '7 вогняної шкоди; відштовхнути на 2'
					})
				)
			]
		}),
		FactoryLogic.createAbility({
			id: '4IphmdVho7h9FoY8',
			name: 'Smoke on the Wind',
			description: 'Your body grows hazy and you briefly fade to an incorporeal state.',
			type: FactoryLogic.type.createManeuver(),
			keywords: [AbilityKeyword.Magic],
			distance: [FactoryLogic.distance.createSelf()],
			target: 'Себе',
			cost: 3,
			sections: [
				FactoryLogic.createAbilitySectionText('Ви можете зміститися на відстань до своєї швидкості. Під час цього переміщення ви можете пройти крізь 1 клітинку твердої матерії, але не можете завершити рух усередині неї. Кожен союзник, чию клітинку ви проходите під час цього зміщення, отримує 1 сплеск. Клітинки, зайняті ворогами, не вважаються важкопрохідною місцевістю під час цього переміщення. У будь-який момент під час цього переміщення ви можете виконати один вільний удар.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'sDLIrCOVMuotUg77',
			name: 'Wavering Flame',
			description: 'The heat of your movement plays tricks on your foes’ eyes.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Ranged, AbilityKeyword.Weapon],
			distance: [FactoryLogic.distance.createMelee(), FactoryLogic.distance.createRanged(5)],
			target: '2 creatures or objects',
			cost: 3,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: Characteristic.Agility,
						tier1: '3 шкоди; Р < [слабкий], засліплений (до кінця ходу)',
						tier2: '4 шкоди; Р < [середній], засліплений (до кінця ходу)',
						tier3: '6 шкоди; Р < [сильний], засліплений (до кінця ходу)'
					})
				),
				FactoryLogic.createAbilitySectionText('Засліплена істота має лінію дії лише до істот і предметів у межах 2 клітинок від себе.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'pJu7F0ayOaU0jL8Y',
			name: 'Grasp and Immolate',
			description: 'There may be such thing as too warm of an embrace.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Magic, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [FactoryLogic.distance.createMelee()],
			target: '1 creature or object',
			cost: 5,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: Characteristic.Agility,
						tier1: '4 + Л вогняної шкоди; палає (до кінця ходу) і схоплений',
						tier2: '6 + Л вогняної шкоди; палає (до кінця ходу) і схоплений',
						tier3: '9 + Л вогняної шкоди; палає (до кінця ходу) і схоплений'
					})
				),
				FactoryLogic.createAbilitySectionText('Палаюча ціль отримує 1d6 вогняної шкоди на початку кожного свого ходу, доки стан не закінчиться.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'Y11uB8aPXNICBB0Z',
			name: 'Rake Over the Coals',
			description: 'They drag their feet, but they only kick up more fire.',
			type: FactoryLogic.type.createManeuver(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [FactoryLogic.distance.createMelee()],
			target: '1 creature or object',
			cost: 5,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: Characteristic.Agility,
						tier1: 'Відштовхнути на 3',
						tier2: 'Відштовхнути на 4',
						tier3: 'Відштовхнути на 6'
					})
				),
				FactoryLogic.createAbilitySectionText('Предмет, який ви обираєте ціллю, має бути вашого розміру або меншим. Ціль отримує вогняну шкоду, що дорівнює кількості клітинок, на які її відштовхнули. Клітинки, з яких ціль примусово переміщується завдяки цій здібності, стають важкопрохідною місцевістю для ворогів.')
			]
		}),
		FactoryLogic.createAbility({
			id: '02UsIBtWuprA6Ti5',
			name: 'Searing Strike',
			description: 'Memory of your steel radiates oppressive heat.',
			type: FactoryLogic.type.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [FactoryLogic.distance.createMelee()],
			target: '1 creature or object',
			cost: 5,
			sections: [
				FactoryLogic.createAbilitySectionRoll(
					FactoryLogic.createPowerRoll({
						characteristic: Characteristic.Agility,
						tier1: '5 + Л шкоди; С < [слабкий], ціль має вразливість 5 до вогняної шкоди (рят. кидок закінчує)',
						tier2: '8 + Л шкоди; С < [середній], ціль має вразливість 5 до вогняної шкоди (рят. кидок закінчує)',
						tier3: '11 + Л шкоди; С < [сильний], ціль має вразливість 5 до вогняної шкоди (рят. кидок закінчує)'
					})
				),
				FactoryLogic.createAbilitySectionText('До кінця сутички щоразу, коли ціль отримує шкоду, усі сусідні вороги отримують 2 вогняної шкоди.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'vZHDpe6mKOcP89Xy',
			name: 'Smoldering Sword',
			description: 'Embers and ash rise and coalesce into a solid mass, honed to an edge and ready to command.',
			type: FactoryLogic.type.createManeuver(),
			keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged],
			distance: [FactoryLogic.distance.createRanged(5)],
			target: 'Особливе',
			cost: 5,
			sections: [
				FactoryLogic.createAbilitySectionText(`
Ви викликаєте в незайнятій клітинці в межах дистанції ширяючий палаючий меч розміру 1S, якому не можна зашкодити. Меч існує до кінця сутички. Виклик нового такого меча розвіює попередній. Усі істоти можуть проходити крізь клітинку меча.

Коли ви або союзник використовуєте здібність Melee Weapon, її можна виконати з позиції меча. Здібність, виконана таким чином, тимчасово отримує ключове слово Magic і завдає додаткової вогняної шкоди, що дорівнює вашому показнику Розуму.

На початку вашого ходу, поки меч викликаний, як безкоштовний маневр ви можете перемістити його на відстань до своєї швидкості.`)
			]
		}),
		FactoryLogic.createAbility({
			id: 'Cb2gcWe4lmscq3mO',
			name: 'Demoralizing Incense',
			description: 'Your talismans burn with an acrid smell that distracts and sows doubt.',
			type: FactoryLogic.type.createManeuver(),
			keywords: [AbilityKeyword.Magic],
			distance: [FactoryLogic.distance.createSelf()],
			target: 'All enemies',
			cost: 7,
			sections: [
				FactoryLogic.createAbilitySectionText('До кінця сутички цілі вашого вміння Stoke the Flame отримують ауру 2 до кінця раунду. Вороги в межах аури отримують шкоду на кидки сили.')
			]
		}),
		FactoryLogic.createAbility({
			id: '68wY6lq8sUxzAeTM',
			name: 'Focusing Incense',
			description: 'Your talismans burn with an earthy smell that sharpens your focus.',
			type: FactoryLogic.type.createManeuver(),
			keywords: [AbilityKeyword.Magic],
			distance: [FactoryLogic.distance.createSelf()],
			target: 'Self and all allies',
			cost: 7,
			sections: [
				FactoryLogic.createAbilitySectionText('До кінця сутички цілі вашої здібності Stoke the Flame отримують ауру 2 до кінця раунду. Коли цілі цієї здібності в межах аури роблять кидок сили, зокрема для здібності, що спровокувала Stoke the Flame, і принаймні один із кинутих d10 показує 1, вони можуть перекинути один d10. Крім того, цілі цієї здібності в аурі автоматично успішно проходять рят. кидки, щоб завершити стан приголомшення.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'dfxNUT4lp8fTkmDR',
			name: 'Invigorating Incense',
			description: 'Your talismans burn with a sweet smell that affirms and empowers.',
			type: FactoryLogic.type.createManeuver(),
			keywords: [AbilityKeyword.Magic],
			distance: [FactoryLogic.distance.createSelf()],
			target: 'Self and all non-minion allies',
			cost: 7,
			sections: [
				FactoryLogic.createAbilitySectionText('До кінця сутички цілі вашої здібності Stoke the Flame отримують ауру 2 до кінця раунду. Цілі цієї здібності, які закінчують свій хід у межах аури, отримують 1 сплеск, а їхній наступний удар завдає додаткової вогняної шкоди, що дорівнює вашому показнику Розуму.')
			]
		}),
		FactoryLogic.createAbility({
			id: 'gzgbDNJYvg7VgOb2',
			name: 'Revitalizing Incense',
			description: 'Your talismans burn with a floral smell that heals and reinvigorates.',
			type: FactoryLogic.type.createManeuver(),
			keywords: [AbilityKeyword.Magic],
			distance: [FactoryLogic.distance.createSelf()],
			target: 'Self and all allies',
			cost: 7,
			sections: [
				FactoryLogic.createAbilitySectionText(`
До кінця сутички цілі вашого вміння Stoke the Flame отримують ауру 2 до кінця раунду. Цілі цього вміння, що завершують свій хід у межах аури, можуть як безкоштовну тригерну дію зробити одне з такого:

* Витратити Recovery.
* Завершити один ефект, що завершується рятівним кидком або наприкінці ходу цілі.`)
			]
		})
	],
	subclasses: [
		{
			id: 'iIRFRndVCP4jQuXo',
			name: 'Flameweaver',
			description: 'You weave through the battlefield from skirmish to skirmish like a thread in the wind. Your power guides you to where you are needed most.',
			featuresByLevel: [
				{
					level: 1,
					features: [
						FactoryLogic.feature.createSkillChoice({
							id: 'j0NHyyP7a0NF1TnH',
							selected: ['Навігація']
						}),
						FactoryLogic.feature.createPackageContent({
							id: 'P6VcK01mJc1PkCfH',
							name: 'Wildfire',
							description: 'Поки ви розпалені, щоразу, коли ви зміщуєтеся або телепортуєтеся, дистанція цього переміщення збільшується на 1, а один союзник поруч із вами на початку переміщення може телепортуватися в незайнятий простір поруч із вами наприкінці цього переміщення.',
							tag: 'Enkindle'
						})
					]
				},
				{
					level: 2,
					features: [
						FactoryLogic.feature.create({
							id: 'Gxs8yJ8vd4YOA35Y',
							name: 'Reflections of Ember',
							description: 'Ви можете плавати, дертися або інакше рухатися вздовж відбивних поверхонь, як-от поверхня річки чи металева стіна, на повній швидкості.'
						}),
						FactoryLogic.feature.createChoice({
							id: 'A3HMgrcRcFRfxv1S',
							name: '2nd-Level Flameweaver Ability',
							options: [
								{
									feature: FactoryLogic.feature.createAbility({
										ability: FactoryLogic.createAbility({
											id: 'O1TthHv1McjpFexz',
											name: 'See the Tapestry of Battle',
											description: 'Ви бачите, де саме в полотні битви слід затягнути нитку.',
											type: FactoryLogic.type.createMain(),
											keywords: [AbilityKeyword.Magic],
											distance: [FactoryLogic.distance.createRanged(10)],
											target: '1 ally',
											cost: 5,
											sections: [
												FactoryLogic.createAbilitySectionText('Телепортуйтеся в незайнятий простір поруч із ціллю. Ви або ціль можете використати signature ability, а ви або ціль можете витратити Recovery в будь-якому порядку. Той, хто витрачає Recovery таким чином, отримує 2 сплески.')
											]
										})
									}),
									value: 1
								},
								{
									feature: FactoryLogic.feature.createAbility({
										ability: FactoryLogic.createAbility({
											id: '8Wtn6iAKFPJS5VZM',
											name: 'Thread the Needle',
											description: 'Connect the movements, just as you were trained.',
											type: FactoryLogic.type.createMain(),
											keywords: [AbilityKeyword.Magic],
											distance: [FactoryLogic.distance.createSelf()],
											target: 'Себе',
											cost: 5,
											sections: [
												FactoryLogic.createAbilitySectionText('Використайте signature ability. Після цього ви можете зміститися на відстань до своєї швидкості. Наприкінці цього переміщення ви або суміжний союзник можете зробити ближній безкоштовний удар.')
											]
										})
									}),
									value: 1
								}
							]
						})
					]
				},
				{
					level: 3,
					features: []
				}
			],
			selected: false,
			abilities: []
		},
		{
			id: 'ezVKqdKSYQqHhxe0',
			name: 'Hexblaze',
			description: 'You are an eruption, and the battlefield will burn to ash. The explosive force of your power shatters any hope of victory for your enemies.',
			featuresByLevel: [
				{
					level: 1,
					features: [
						FactoryLogic.feature.createSkillChoice({
							id: 'K2orXNVgQlytsh8Q',
							selected: ['Витривалість']
						}),
						FactoryLogic.feature.createPackageContent({
							id: 'QFwqnEtHE9TZFhXd',
							name: 'Fan the Flame',
							description: 'Поки ви розпалені, коли ви вперше за раунд отримуєте шкоду, зменште її на значення вашої Ловкості та отримайте 1 сплеск.',
							tag: 'Enkindle'
						})
					]
				},
				{
					level: 2,
					features: [
						FactoryLogic.feature.createDamageModifier({
							id: '',
							modifiers: [
								FactoryLogic.damageModifier.create({
									damageType: DamageType.Lightning,
									modifierType: DamageModifierType.Immunity,
									value: 5
								})
							]
						}),
						FactoryLogic.feature.create({
							id: 'pFyTE1iMXxhXgVFl',
							name: 'St. Elmo\'s Fire',
							description: 'During and shortly after a thunderstorm, you glow with a faint blue flame and you have an edge on tests that use the Navigate skill.'
						}),
						FactoryLogic.feature.createChoice({
							id: '7kh47fRjTepke93l',
							name: '2nd-Level Hexblaze Ability',
							options: [
								{
									feature: FactoryLogic.feature.createAbility({
										ability: FactoryLogic.createAbility({
											id: 'wCiKLNvVLdmSNcCY',
											name: 'Color out of Flame',
											description: 'The hue of your fire entrances you, to the mortal detriment of the Undermind’s enemies.',
											type: FactoryLogic.type.createManeuver(),
											keywords: [AbilityKeyword.Magic],
											distance: [FactoryLogic.distance.createSelf()],
											target: 'Себе',
											cost: 5,
											sections: [
												FactoryLogic.createAbilitySectionText(`
				До кінця сутички ваше полумʼя набуває вибраного вами кольору:

				* **Green:** Раз за раунд, коли ви використовуєте здібність, що завдає вогняної шкоди, ви можете виконати вільний удар ближнього бою проти однієї з її цілей. Якщо ви вбиваєте принаймні одного не-мініона цією здібністю або цим вільним ударом, ви отримуєте 2 сплески і можете витратити Відновлення.
				* **White:** Раз за раунд, коли ви використовуєте здібність, що завдає вогняної шкоди, ви отримуєте тимчасову Витривалість, що дорівнює подвоєному показнику вашого Розуму, і можете завершити один ефект, який закінчується рят. кидком або в кінці вашого ходу.

				Щоб змінити колір свого полумʼя, потрібно знову використати цю здібність.`)
											]
										})
									}),
									value: 1
								},
								{
									feature: FactoryLogic.feature.createAbility({
										ability: FactoryLogic.createAbility({
											id: 'Q0ZfOtiA3tO2aiIB',
											name: 'Fuel the Engine',
											description: 'Your heart burns hotter with each strike.',
											type: FactoryLogic.type.createMain(),
											keywords: [AbilityKeyword.Magic, AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
											distance: [FactoryLogic.distance.createMelee()],
											target: 'Two creatures or objects',
											cost: 5,
											sections: [
												FactoryLogic.createAbilitySectionRoll(
													FactoryLogic.createPowerRoll({
														characteristic: Characteristic.Reason,
														tier1: '4 вогняної шкоди',
														tier2: '6 вогняної шкоди',
														tier3: '8 вогняної шкоди'
													})
												),
												FactoryLogic.createAbilitySectionText('Отримайте 1 сплеск, який можете використати негайно.'),
												FactoryLogic.createAbilitySectionSpend({
													effect: 'For each enemy you kill with this ability, regain Stamina equal to 5 + your Reason score.',
													value: 2
												})
											]
										})
									}),
									value: 1
								}
							]
						})
					]
				},
				{
					level: 3,
					features: []
				}
			],
			selected: false,
			abilities: []
		},
		{
			id: 'R7zJXR3bkJBsMMlP',
			name: 'Smokewight',
			description: 'You are at once everywhere and nowhere. You slip through the grasp of your foes and you cannot be pinned down.',
			featuresByLevel: [
				{
					level: 1,
					features: [
						FactoryLogic.feature.createSkillChoice({
							id: 'Jx8AcVTauHPBKCxS',
							selected: ['Втеча']
						}),
						FactoryLogic.feature.createPackageContent({
							id: 'ErWk8f3OqP3RYNJn',
							name: 'Backdraft',
							description: 'Поки ви розпалені, коли ви притягуєте істоту, ви ігноруєте її стійкість, а коли примусово переміщуєте істоту, дистанція цього переміщення отримує бонус +1.',
							tag: 'Enkindle'
						})
					]
				},
				{
					level: 2,
					features: [
						FactoryLogic.feature.create({
							id: 'Xyfrt3SQO1Lx52rl',
							name: 'The Soul is in the Breath',
							description: 'У бою ви не можете задихнутися й отримуєте перевагу на маневр Escape Grab. Поза боєм ви можете затримувати подих на кількість хвилин, що дорівнює подвоєному значенню вашого Розуму, а поки затримуєте подих, можете перетворювати своє тіло на густий дим. У цій формі ви проходите крізь щілини так, ніби маєте розмір 1T, можете зависати й не отримуєте шкоди від падіння.'
						}),
						FactoryLogic.feature.createChoice({
							id: 'cS6etUqiiyIoRNd4',
							name: '2nd-Level Smokewight Ability',
							options: [
								{
									feature: FactoryLogic.feature.createAbility({
										ability: FactoryLogic.createAbility({
											id: 'Oy7AuSc53Nyo0pR2',
											name: 'Choking Soot',
											description: 'The blackened sky grants you a vision: your foes reduced to ash.',
											type: FactoryLogic.type.createMain(),
											keywords: [AbilityKeyword.Magic],
											distance: [FactoryLogic.distance.createSelf()],
											target: 'Себе',
											cost: 5,
											sections: [
												FactoryLogic.createAbilitySectionText('До кінця сутички з неба сиплеться сажа. Ви та кожен союзник отримуєте перевагу на тести з навичкою Ховання. Вороги мають вразливість 3 до вогняної шкоди. Якщо ворог схоплений, він має вразливість 7 до вогняної шкоди.')
											]
										})
									}),
									value: 1
								},
								{
									feature: FactoryLogic.feature.createAbility({
										ability: FactoryLogic.createAbility({
											id: 'Oy7AuSc53Nyo0pRj',
											name: 'Vortex in the Smog',
											description: 'Draw them in, then slip out.',
											type: FactoryLogic.type.createMain(),
											keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
											distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 2 })],
											target: 'All enemies',
											cost: 5,
											sections: [
												FactoryLogic.createAbilitySectionRoll(
													FactoryLogic.createPowerRoll({
														characteristic: Characteristic.Agility,
														tier1: 'Притягнути на 3; С < [слабкий], скутий (до кінця ходу)',
														tier2: 'Притягнути на 5; С < [середній], скутий (до кінця ходу)',
														tier3: 'Притягнути на 7; С < [сильний], скутий (до кінця ходу)'
													})
												),
												FactoryLogic.createAbilitySectionText('Ви можете зміститися на відстань до своєї швидкості. Якщо ви завершуєте це переміщення з укриттям або маскуванням, ви стаєте прихованими.'),
												FactoryLogic.createAbilitySectionSpend({
													effect: 'За кожні додаткові 2 spark, які ви витрачаєте, potency збільшується на 1, а розмір вибуху збільшується на 1.',
													value: 2,
													repeatable: true
												})
											]
										})
									}),
									value: 1
								}
							]
						})
					]
				},
				{
					level: 3,
					features: []
				}
			],
			selected: false,
			abilities: []
		}
	],
	level: 1,
	characteristics: []
};

// #endregion

// #region Kits

const hawthorn: Kit = {
	id: 'b6M3EJI16GGBBOnS',
	name: 'Hawthorn',
	description: 'Your talismans grant you the ability to ensnare, burden, and wrest vitality out of your victims.',
	type: 'Kiln',
	armor: [],
	weapon: [],
	stamina: 0,
	speed: 0,
	stability: 0,
	meleeDamage: null,
	rangedDamage: null,
	meleeDistance: 0,
	rangedDistance: 0,
	disengage: 0,
	features: [
		FactoryLogic.feature.createAbility({
			ability: FactoryLogic.createAbility({
				id: 'LfpLq2z0MdHLluQs',
				name: 'Put Down Roots',
				description: 'Unwavering in the storm.',
				type: FactoryLogic.type.createManeuver(),
				keywords: [AbilityKeyword.Magic, AbilityKeyword.Area],
				distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 1 })],
				target: 'Себе',
				sections: [
					FactoryLogic.createAbilitySectionText('До початку вашого наступного ходу ваша стійкість зростає на 2. Ви та союзники в ділянці кожен отримуєте 1 сплеск і можете витратити Recovery.'),
					FactoryLogic.createAbilitySectionField({
						name: 'Enkindled',
						effect: 'Союзники в ділянці отримують тимчасову витривалість, що дорівнює подвоєній вашій стійкості.'
					}),
					FactoryLogic.createAbilitySectionSpend({
						effect: 'За кожен spark, який ви витрачаєте, розмір вибуху збільшується на 1, а ваша стійкість додатково зростає на 1 до початку вашого наступного ходу, що збільшує тимчасову витривалість, яку отримують уражені союзники.'
					})
				]
			})
		}),
		FactoryLogic.feature.createAbility({
			ability: FactoryLogic.createAbility({
				id: 'cYrUy8SoUpCBmQvT',
				name: 'Untame the Land',
				description: 'Your talismans imbue you with a vivid memory of the wode before war or time.',
				type: FactoryLogic.type.createMain(),
				keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
				distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 2 })],
				target: 'All enemies',
				cost: 'signature',
				sections: [
					FactoryLogic.createAbilitySectionRoll(
						FactoryLogic.createPowerRoll({
							characteristic: Characteristic.Reason,
							tier1: '2 отруйної шкоди',
							tier2: '3 отруйної шкоди; притягнути на 1',
							tier3: '4 отруйної шкоди; притягнути на 1; скутий (до кінця ходу)'
						})
					),
					FactoryLogic.createAbilitySectionField({
						name: 'Enkindled',
						effect: 'Ефект притягування на 2 і 3 щаблях успіху змінюється на вертикальне притягування, а дистанція притягування збільшується на значення вашого Розуму.'
					})
				]
			})
		}),
		FactoryLogic.feature.create({
			id: 'Rh3THhEfz7wQfVYR',
			name: 'Hawthorn Stoke the Flame Effects',
			description: `
| Talisman | Ефект Stoke the Flame |
| :--- | :--- |
| Berkanan | Здібність отримує перевагу. Ворога в межах 2 клітинок від однієї з цілей здібності схоплює одна з її цілей. Цю хватку не може завершити істота, що хапає. |
| Eihwaz | Ціль отримує 1 сплеск, який може використати негайно. Якщо ціль використовує 3 або більше сплесків, щоб збільшити шкоду здібності, ціль здібності стає приголомшеною (до кінця ходу) або отримує кровотечу (рят. кидок закінчує) на ваш вибір. |
| Thurisaz | Після використання здібності ціль може завершити один стан або ефект на собі, що закінчується рят. кидком або в кінці її ходу. |`
		})
	]
};

const hazel: Kit = {
	id: 'MvZbaWiYbk9GfvEI',
	name: 'Hazel',
	description: 'Your talismans grant you the ability to anticipate the future and discern illusion from reality.',
	type: 'Kiln',
	armor: [],
	weapon: [],
	stamina: 0,
	speed: 0,
	stability: 0,
	meleeDamage: null,
	rangedDamage: null,
	meleeDistance: 0,
	rangedDistance: 0,
	disengage: 0,
	features: [
		FactoryLogic.feature.createAbility({
			ability: FactoryLogic.createAbility({
				id: 'LfpLq2z0MdHLluQs',
				name: 'Shiver with Anticipation',
				description: 'Remove the cause, but not the symptom.',
				type: FactoryLogic.type.createManeuver(),
				keywords: [AbilityKeyword.Magic, AbilityKeyword.Area],
				distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 1 })],
				target: 'All enemies',
				sections: [
					FactoryLogic.createAbilitySectionText('Наступний удар проти кожної цілі отримує перевагу, а кожна ціль додатково при І < [слабкий] стає ослабленою (рят. кидок закінчує).'),
					FactoryLogic.createAbilitySectionField({
						name: 'Enkindled',
						effect: 'Ви або союзник у зоні можете здійснити вільний удар ближнього бою.'
					}),
					FactoryLogic.createAbilitySectionSpend({
						effect: 'За кожен spark, який ви витрачаєте, розмір вибуху збільшується на 1, а potency зростає на 1.'
					})
				]
			})
		}),
		FactoryLogic.feature.createAbility({
			ability: FactoryLogic.createAbility({
				id: 'cYrUy8SoUpCBmQvT',
				name: 'Peer Beyond the Veil',
				description: 'The line between what is and what will be has never been clearer.',
				type: FactoryLogic.type.createMain(),
				keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
				distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 2 })],
				target: 'All enemies',
				cost: 'signature',
				sections: [
					FactoryLogic.createAbilitySectionText('Цілі цього вміння не обов’язково мають бути в межах лінії дії. Приховані вороги в ділянці автоматично виявляються.'),
					FactoryLogic.createAbilitySectionRoll(
						FactoryLogic.createPowerRoll({
							characteristic: Characteristic.Reason,
							tier1: '2 психічної шкоди',
							tier2: '3 психічної шкоди; ви можете зміститися на 1 клітинку',
							tier3: '4 психічної шкоди; ви можете зміститися до 2 клітинок'
						})
					),
					FactoryLogic.createAbilitySectionField({
						name: 'Enkindled',
						effect: 'Ви можете телепортуватися замість зміщення, і вам не потрібна лінія дії до місця призначення. Якщо ви телепортуєтесь у клітинку поруч із будь-яким союзником, один із союзників може виконати вільний удар.'
					})
				]
			})
		}),
		FactoryLogic.feature.create({
			id: 'Rh3THhEfz7wQfVYR',
			name: 'Hazel Stoke the Flame Effects',
			description: `
| Talisman | Ефект Stoke the Flame |
| :--- | :--- |
| Dagaz | Усі цілі здібності при Р < [середній] стають ослабленими (до кінця ходу). Якщо ціль прихована, здібність завдає одній істоті, на яку вона націлена, додаткової психічної шкоди, що дорівнює подвоєному показнику вашого Розуму. |
| Laguz | Ціль отримує 1 сплеск, який може використати негайно. Якщо ціль використовує 3 або більше сплесків, щоб збільшити шкоду здібності, кидок цієї здібності стає критичним при дублях на кубах, наприклад дві 6, а не на 19 або вище. |
| Kaunan | Здібність отримує перевагу. Якщо її виконано з подвійною перевагою проти істоти, що злякана або ослаблена, ціль після завершення здібності отримує 1 героїчний ресурс. |`
		})
	]
};

const rosewood: Kit = {
	id: 'YUeKPGgxBP5aFXN2',
	name: 'Rosewood',
	description: 'Your talismans grant you the ability to amplify and echo your allies, and terrify your enemies.',
	type: 'Kiln',
	armor: [],
	weapon: [],
	stamina: 0,
	speed: 0,
	stability: 0,
	meleeDamage: null,
	rangedDamage: null,
	meleeDistance: 0,
	rangedDistance: 0,
	disengage: 0,
	features: [
		FactoryLogic.feature.createAbility({
			ability: FactoryLogic.createAbility({
				id: 'U8WMZZ8xUUZ9MWSU',
				name: 'Speed of Sound',
				description: 'In a clap of thunder, you flash across the battlefield, your poised form burned into the eyes of your foes.',
				type: FactoryLogic.type.createManeuver(),
				keywords: [AbilityKeyword.Magic, AbilityKeyword.Area],
				distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 1 })],
				target: 'All enemies',
				sections: [
					FactoryLogic.createAbilitySectionText('Ви телепортуєтесь на відстань до 3 клітинок. У клітинці, з якої ви телепортуєтесь, ви залишаєте післяобраз, який існує до кінця раунду. Усі цілі стають спровокованими цим післяобразом. Після телепортації ви можете відштовхнути одну істоту поруч із вами на кількість клітинок, що дорівнює пройденій під час телепортації відстані.'),
					FactoryLogic.createAbilitySectionField({
						name: 'Enkindled',
						effect: 'До кінця раунду, як безкоштовною тригерною дією після використання вміння, ви можете помінятися місцями зі своїм післяобразом.'
					}),
					FactoryLogic.createAbilitySectionSpend({
						effect: 'Ви телепортуєтесь на 1 додаткову клітинку за кожен витрачений spark.'
					})
				]
			})
		}),
		FactoryLogic.feature.createAbility({
			ability: FactoryLogic.createAbility({
				id: 'LLgH22ZsPAiFzzOu',
				name: 'Resonate',
				description: 'Your talismans imbue you with the resonance of a hollow trunk reaching up from the Undermind.',
				type: FactoryLogic.type.createMain(),
				keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
				distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 2 })],
				target: 'All enemies',
				sections: [
					FactoryLogic.createAbilitySectionRoll(
						FactoryLogic.createPowerRoll({
							characteristic: Characteristic.Reason,
							tier1: '2 звукової шкоди',
							tier2: '3 звукової шкоди; Р < [середній], сповільнений (рят. кидок закінчує)',
							tier3: '4 звукової шкоди; Р < [сильний], сповільнений (рят. кидок закінчує)'
						})
					),
					FactoryLogic.createAbilitySectionField({
						name: 'Enkindled',
						effect: 'Для однієї цілі ви можете замінити ефект сповільнення на стан «Скутий» (рят. кидок закінчує).'
					})
				]
			})
		}),
		FactoryLogic.feature.create({
			id: 'vjgm8AHumnc3qfdG',
			name: 'Rosewood Stoke the Flame Effects',
			description: `
| Talisman | Ефект Stoke the Flame |
| :--- | :--- |
| Gebo | Ціль отримує тимчасову Витривалість, що дорівнює вашому показнику Розуму, або 5 + ваш рівень, якщо здібність має подвійну перевагу. |
| Othalan | Ціль отримує 1 сплеск, який може використати негайно. Якщо ціль використовує 3 або більше сплесків, щоб збільшити шкоду здібності, вона додатково може виконати вільний удар після цієї здібності. |
| Uruz | Здібність отримує перевагу. Усі вороги поруч із ціллю при П < [середній] стають зляканими цілі (до кінця ходу). Вороги, які вже сповільнені, автоматично не чинять опору потужності. |`
		})
	]
};

// #endregion

// #region Perks

const aConversationWithFire: Perk = {
	id: '5wkxbUTj0F8JUfO2',
	name: 'A Conversation With Fire',
	description: `
*Kilns only*

Коли ви проводите 1 безперервну хвилину перед вогнем, то можете промовити ім’я іншої істоти. Якщо ця істота готова говорити з вами, її образ з’являється у вогні, а вона бачить вас перед собою в мерехтливій кулі світла. Ви обоє можете розмовляти через ці образи так, ніби стоїте поруч особисто. Як маневр ви або ця істота можете завершити розмову.`,
	type: FeatureType.Text,
	data: null,
	list: PerkList.Special
};

const burntOutArtisan: Perk = {
	id: 'dHjsVbGZQUGgDJdS',
	name: 'Burnt Out Artisan',
	description: `
*Kilns only*

When you make a project roll using a skill from the crafting skill group, you can choose to gain 30 project points instead of the total of your roll. After doing this, you cannot achieve a breakthrough on any subsequent project roll (ever!) until you complete the Spend Time With Loved Ones activity (see <u>Downtime Activities</u> in the Core Rules).`,
	type: FeatureType.Text,
	data: null,
	list: PerkList.Special
};

const hotBox: Perk = {
	id: '6IWjRGECdMfbsvFo',
	name: 'Hot Box',
	description: `
*Kilns only*

You can quickly fill a room with the smoke of an incense that dulls the mind and lifts the spirit. When interacting with a living humanoid or animal in an enclosed space no larger than a small room, you treat your Renown as 1 higher than usual, you gain an edge on Reason tests made to interact with them, and without the use of magic, they cannot tell when you are lying.`,
	type: FeatureType.Text,
	data: null,
	list: PerkList.Special
};

const ifYouCantStandTheHeat: Perk = {
	id: 'tmATKmf0NIKZHFKU',
	name: 'If You Can’t Stand the Heat',
	description: `
*Kilns only*

You gain a +2 bonus to the Perfect New Recipe project roll (see Downtime Activities in the Core Rules). You additionally know the following recipes:

| Type of Recipe | Item Prerequisites | Benefits |
| :--- | :--- | :--- |
| Flame Broiled | Aromatic ingredients (onions, ginger, garlic, mustard seeds, and so forth) | Soulful |
| Spiced Up | Spicy ingredients (dragon chilis, cumin, khemharan peppercorns, and so forth) | Warming |

**Soulful:** Істота може обрати, щоб її здібності завдавали психічної шкоди замість будь-якого іншого типу. Додатково, коли істота використовує здібність, що завдає шкоди, поки вона вмирає, вона завдає бонусної шкоди, що дорівнює її рівню.
**Warming:** Істота має імунітет до холоду, що дорівнює її рівню. Додатково, коли істота отримує результат 3 рівня на кидку сили здібності, що завдає шкоди, вона може завдати додаткові 1d3 кидкової вогняної шкоди.`,
	type: FeatureType.Text,
	data: null,
	list: PerkList.Special
};

const itIsTheSoulWhichHears: Perk = {
	id: 'Ycnl3YBDuUFg7uar',
	name: 'It Is the Soul Which Hears',
	description: `
*Kilns only*

You can speak with and understand animals, beasts, and plant creatures, even if they don’t share a language with you. Your ability to communicate with these creatures doesn’t make them inherently more intelligent, but you can use Reason instead of Presence while making tests to influence them.

Additionally, you can touch a living plant that is not a plant creature to communicate with it telepathically. You can use words to communicate with the plant, but it communicates with you only by transmitting feelings and sensations that can’t be overly specific.`,
	type: FeatureType.Text,
	data: null,
	list: PerkList.Special
};

const siftThroughTheAshesOfMemory: Perk = {
	id: 'kBb2ohe3iTiaQTn0',
	name: 'Sift Through the Ashes of Memory',
	description: `
*Kilns only*

You gain the following downtime activity (see <u>Downtime Activities</u> in the Core Rules).

### Sift Through the Ashes of Memory

**Item Prerequisite:** None
**Project Source:** None
**Project Roll Characteristic:** Reason, Intuition, or Presence
**Project Goal:** Varies

You and an ally you are respiting with both do this downtime activity together. You meditate upon the soul of a late ancestor of either of you, reflecting upon their remnant memories stored in the Undermind’s roots. You must be able to touch a tree rooted in the manifold the ancestor dies in to access their memories. The project roll for this project has the following changes:

* The project points earned by your roll represent the depth to which you are able to dive into the ancestor’s memories.
* During each respite when you and an ally undertake this activity, you both continue making alternating project rolls until one of you rolls a tier 1 outcome (indicating you stumbled into a corrupted memory, earning you no points). The other hero can make one final roll and if they roll a breakthrough, you both can continue (indicating they pulled you out of the corrupted memory).
* When you’ve made your last Sift Through the Ashes of Memory project roll for the respite, you both spend your shared project points you accrued on a reward from the Ancestral Experience table. Any points you don’t spend during the current respite are lost.

### Ancestral Experience

| Reward | Cost | Effect |
| :--- | :--- | :--- |
| The Little Moments | 80 | One of you gains the **A Day in the Life** benefit. |
| Sword Arm of an Ancestor | 130 | One of you gains the **Muscle Memory** benefit. |
| How Long Were We Out? | 150 | One of you gains the **Deep Dreamer** title and benefit. |
| Souls Melded | 330 | You both gain the **Of A Single Soul** title and benefit. |

**A Day in the Life:** Until your next respite, gain the skills and edges on tests made with those skills of one of the careers of the ancestor whose memory you meditated on.

**Muscle Memory:** Until your next respite, you can use and gain the benefits of kits. If you can already use kits, you can gain an extra signature ability and the use of the equipment from one additional kit (you do not gain the kit’s bonuses, except as they are already applied to the signature ability).

**Deep Dreamer:** You gain an edge on Sifting Through the Ashes of Memory project rolls.

**Of A Single Soul:** You can use the surges belonging to any ally who has this title as if they were your own.`,
	type: FeatureType.Text,
	data: null,
	list: PerkList.Special
};

const smokemellier: Perk = {
	id: 'gxz88O3tENyXCkJB',
	name: 'Smokemellier',
	description: `
*Kilns only*

Ви можете відчувати дим від усіх вогнищ у межах 1 милі від себе, а трохи зосередившись, можете визначити, який матеріал кожен вогонь спалив дотепер, байдуже, як довго він горить. Точний рівень деталізації визначає ваш Director. Ви не можете встановити, якому саме вогню належить який дим, якщо не бачите цей вогонь на власні очі.`,
	type: FeatureType.Text,
	data: null,
	list: PerkList.Special
};

const soulsworn: Perk = {
	id: 'pgCtSVhZsjC7I6dE',
	name: 'Soulsworn',
	description: `
*Kilns only*

Each time you finish a respite, you can choose one ally to be your soulsworn. If you spend at least 10 minutes focusing, you can teleport your soulsworn to your side from anywhere within a mile, as long as neither you nor your soulsworn are in combat.`,
	type: FeatureType.Text,
	data: null,
	list: PerkList.Special
};

const tendrilsOfTheUndermind: Perk = {
	id: 'ZM9JhmiD9C2aNJNO',
	name: 'Tendrils of the Undermind',
	description: `
*Kilns only*

Ваш зв’язок із Підрозумом дає змогу ділитися з ним чуттями. Раз на кожному своєму ході ви можете шукати прихованих істот як безкоштовним маневром. Істоти в межах досяжності вашого вміння Stoke the Flame автоматично знаходяться під час такого пошуку. Крім того, ви отримуєте таке вміння.`,
	type: FeatureType.Multiple,
	data: {
		features: [
			FactoryLogic.feature.create({
				id: '5lGBjTkoXelkOmYd',
				name: 'Tendrils of the Undermind',
				description: 'Ваш зв’язок із Підрозумом дає змогу ділитися з ним чуттями. Раз на кожному своєму ході ви можете шукати прихованих істот як безкоштовним маневром. Істоти в межах досяжності вашого вміння Stoke the Flame автоматично знаходяться під час такого пошуку.'
			}),
			FactoryLogic.feature.createAbility({
				ability: FactoryLogic.createAbility({
					id: 'J9Q4GZyz56Qqxw1e',
					name: 'Tendrils of the Undermind',
					description: '',
					type: FactoryLogic.type.createMain(),
					keywords: [AbilityKeyword.Magic],
					distance: [FactoryLogic.distance.createSelf()],
					target: 'Себе',
					sections: [
						FactoryLogic.createAbilitySectionText('До кінця раунду ваше вміння Stoke the Flame отримує бонус +5 до дистанції, і вам не потрібна лінія дії, щоб націлювати союзників цим умінням.')
					]
				})
			})
		]
	},
	list: PerkList.Special
};

const undermindTask: Perk = {
	id: 'WKBv7e1HgHgB4Ngc',
	name: 'Undermind Task',
	description: `
*Kilns only*

You've chosen to take on a task from the Undermind. Once you complete the task, gain a kiln perk of your choice.`,
	type: FeatureType.Text,
	data: null,
	list: PerkList.Special
};

const woodenFamiliar: Perk = {
	id: 'boRZ9rIWGa6h2DNJ',
	name: 'Wooden Familiar',
	description: `
*Kilns only*

Ви вкладаєте жар душі дружньої істоти в різьблену фігурку. Як активність перепочинку, маючи достатній запас дерева, ви можете створити дерев’яного фамільяра. У вас може бути лише один дерев’яний фамільяр одночасно.

Створіть блок характеристик свого фамільяра самостійно, взявши за основу Animal, Big Animal A або Predator A з книги Monsters у Core Rules, і додавши риси на загальну вартість до 2 плюс ваш показник Розуму. Фамільяр також має вразливість 3 до вогняної шкоди. Ви можете змінювати блок характеристик свого фамільяра під час перепочинку.

Ваш новий дерев’яний фамільяр є вашим супутником, але не має Recoveries і не може відновлювати витривалість жодним способом, окрім перепочинку. Крім того, ваш дерев’яний фамільяр втрачає всю свою витривалість, якщо опиняється під водою, адже його внутрішнє полум’я згасає.`,
	type: FeatureType.Text,
	data: null,
	list: PerkList.Special
};

// #endregion

export const lookOut: Sourcebook = {
	id: 'look-out',
	name: 'Look Out Behind You Studios',
	description: `
Third-party content from Look Out Behind You Studios.

[The Kiln crowdfunder](https://www.backerkit.com/call_to_action/5c146898-9aae-4593-af4d-9e916b1b5121/landing) is live until Feb 5th.`,
	type: SourcebookType.ThirdParty,
	adventures: [],
	ancestries: [],
	careers: [],
	complications: [],
	cultures: [],
	classes: [
		kiln
	],
	domains: [],
	encounters: [],
	imbuements: [],
	items: [],
	kits: [
		hawthorn,
		hazel,
		rosewood
	],
	monsterGroups: [],
	montages: [],
	negotiations: [],
	perks: [
		aConversationWithFire,
		burntOutArtisan,
		hotBox,
		ifYouCantStandTheHeat,
		itIsTheSoulWhichHears,
		siftThroughTheAshesOfMemory,
		smokemellier,
		soulsworn,
		tendrilsOfTheUndermind,
		undermindTask,
		woodenFamiliar
	],
	projects: [],
	subclasses: [],
	tacticalMaps: [],
	terrain: [],
	titles: [],
	skills: [],
	languages: []
};
