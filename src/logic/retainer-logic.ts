import { AbilityDistanceType } from '@/enums/ability-distance-type';
import { AbilityKeyword } from '@/enums/ability-keyword';
import { Characteristic } from '@/enums/characteristic';
import { FactoryLogic } from '@/logic/factory-logic';
import { Feature } from '@/models/feature';
import { MonsterRoleType } from '@/enums/monster-role-type';

export class RetainerLogic {
	static getRetainerAdvancementFeatures = (level: number, role: MonsterRoleType, level4?: Feature, level7?: Feature, level10?: Feature): { level: number, feature: Feature }[] => {
		const options4 = level4 ? [level4] : [];
		const options7 = level7 ? [level7] : [];
		const options10 = level10 ? [level10] : [];

		const std = RetainerLogic.getRetainerStandardAbilities(role);
		if (std) {
			options4.push(std.level4);
		}
		if (std) {
			options7.push(std.level7);
		}
		if (std) {
			options10.push(std.level10);
		}

		const levels = [
			{
				level: 2,
				feature: FactoryLogic.feature.createChoice({
					id: 'retainer-2',
					name: 'Level 2 Characteristic Increase',
					options: [
						{
							feature: FactoryLogic.feature.createCharacteristicBonus({
								id: 'retainer-2-1',
								characteristic: Characteristic.Might,
								value: 1
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createCharacteristicBonus({
								id: 'retainer-2-2',
								characteristic: Characteristic.Agility,
								value: 1
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createCharacteristicBonus({
								id: 'retainer-2-3',
								characteristic: Characteristic.Reason,
								value: 1
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createCharacteristicBonus({
								id: 'retainer-2-4',
								characteristic: Characteristic.Intuition,
								value: 1
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createCharacteristicBonus({
								id: 'retainer-2-5',
								characteristic: Characteristic.Presence,
								value: 1
							}),
							value: 1
						}
					]
				})
			},
			{
				level: 4,
				feature: FactoryLogic.feature.createChoice({
					id: 'retainer-4',
					name: 'Level 4 Choice',
					options: options4.map(o => ({ feature: o, value: 1 }))
				})
			},
			{
				level: 5,
				feature: FactoryLogic.feature.createMultiple({
					id: 'retainer-5',
					name: 'Level 5 Characteristic Increase',
					features: [
						FactoryLogic.feature.createCharacteristicBonus({
							id: 'retainer-5-1',
							characteristic: Characteristic.Might,
							value: 1
						}),
						FactoryLogic.feature.createCharacteristicBonus({
							id: 'retainer-5-2',
							characteristic: Characteristic.Agility,
							value: 1
						}),
						FactoryLogic.feature.createCharacteristicBonus({
							id: 'retainer-5-3',
							characteristic: Characteristic.Reason,
							value: 1
						}),
						FactoryLogic.feature.createCharacteristicBonus({
							id: 'retainer-5-4',
							characteristic: Characteristic.Intuition,
							value: 1
						}),
						FactoryLogic.feature.createCharacteristicBonus({
							id: 'retainer-5-5',
							characteristic: Characteristic.Presence,
							value: 1
						})
					]
				})
			},
			{
				level: 7,
				feature: FactoryLogic.feature.createChoice({
					id: 'retainer-7',
					name: 'Level 7 Choice',
					options: options7.map(o => ({ feature: o, value: 1 }))
				})
			},
			{
				level: 8,
				feature: FactoryLogic.feature.createChoice({
					id: 'retainer-8',
					name: 'Level 8 Characteristic Increase',
					options: [
						{
							feature: FactoryLogic.feature.createCharacteristicBonus({
								id: 'retainer-8-1',
								characteristic: Characteristic.Might,
								value: 1
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createCharacteristicBonus({
								id: 'retainer-8-2',
								characteristic: Characteristic.Agility,
								value: 1
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createCharacteristicBonus({
								id: 'retainer-8-3',
								characteristic: Characteristic.Reason,
								value: 1
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createCharacteristicBonus({
								id: 'retainer-8-4',
								characteristic: Characteristic.Intuition,
								value: 1
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createCharacteristicBonus({
								id: 'retainer-8-5',
								characteristic: Characteristic.Presence,
								value: 1
							}),
							value: 1
						}
					]
				})
			},
			{
				level: 10,
				feature: FactoryLogic.feature.createChoice({
					id: 'retainer-10',
					name: 'Level 10 Choice',
					options: options10.map(o => ({ feature: o, value: 1 }))
				})
			}
		];

		return levels.filter(lvl => lvl.level > level);
	};

	static getRetainerStandardAbilities = (role: MonsterRoleType) => {
		switch (role) {
			case MonsterRoleType.Ambusher:
				return {
					level4: FactoryLogic.feature.createAbility({
						ability: FactoryLogic.createAbility({
							id: 'retainer-ambusher-4',
							name: 'Go for the Jugular',
							type: FactoryLogic.type.createMain({ qualifiers: ['encounter'] }),
							keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
							distance: [FactoryLogic.distance.createMelee()],
							target: 'Одна істота',
							sections: [
								FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
									characteristic: [Characteristic.Might, Characteristic.Agility, Characteristic.Reason, Characteristic.Intuition, Characteristic.Presence],
									tier1: '5 шкоди; С < [слабкий], кровотеча (рят. кидок завершує)',
									tier2: '9 шкоди; С < [середній], кровотеча (рят. кидок завершує)',
									tier3: '12 шкоди; С < [сильний], кровотеча (рят. кидок завершує)'
								})),
								FactoryLogic.createAbilitySectionText('Якщо ціль схоплена або ретейнер мав перевагу на кидку сили, ретейнер отримує 2 сплески.')
							]
						})
					}),
					level7: FactoryLogic.feature.createAbility({
						ability: FactoryLogic.createAbility({
							id: 'retainer-ambusher-7',
							name: 'Hamstring Slice',
							type: FactoryLogic.type.createMain({ qualifiers: ['encounter'] }),
							keywords: [AbilityKeyword.Melee, AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon],
							distance: [
								FactoryLogic.distance.createMelee(),
								FactoryLogic.distance.createRanged(5)
							],
							target: 'Одна істота',
							sections: [
								FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
									characteristic: [Characteristic.Might, Characteristic.Agility, Characteristic.Reason, Characteristic.Intuition, Characteristic.Presence],
									tier1: '7 шкоди; С < [слабкий], сповільнений (до кінця ходу)',
									tier2: '10 шкоди; С < [середній], сповільнений (рят. кидок завершує)',
									tier3: '15 шкоди; С < [сильний], сповільнений і ціль не може використовувати тригерні дії (рят. кидок завершує)'
								})),
								FactoryLogic.createAbilitySectionText('Ретейнер та його ментор можуть кожен переміститись на відстань до свого показника швидкості.')
							]
						})
					}),
					level10: FactoryLogic.feature.createAbility({
						ability: FactoryLogic.createAbility({
							id: 'retainer-ambusher-10',
							name: 'Hold ’Em Down',
							type: FactoryLogic.type.createMain({ qualifiers: ['encounter'] }),
							keywords: [AbilityKeyword.Melee, AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon],
							distance: [
								FactoryLogic.distance.createMelee(),
								FactoryLogic.distance.createRanged(5)
							],
							target: 'Одна істота',
							sections: [
								FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
									characteristic: [Characteristic.Might, Characteristic.Agility, Characteristic.Reason, Characteristic.Intuition, Characteristic.Presence],
									tier1: '11 шкоди; якщо ціль розміру 1 або менша і має С < [слабкий], вона схоплена',
									tier2: '16 шкоди; якщо ціль розміру 1 або менша і має С < [середній], вона схоплена',
									tier3: '21 шкоди; якщо ціль розміру 1 або менша і має С < [сильний], вона схоплена'
								})),
								FactoryLogic.createAbilitySectionText('Ретейнер отримує 2 сплески, коли будь-яка істота робить удар по цілі, схопленій таким чином.')
							]
						})
					})
				};
			case MonsterRoleType.Artillery:
				return {
					level4: FactoryLogic.feature.createAbility({
						ability: FactoryLogic.createAbility({
							id: 'retainer-artillery-4',
							name: 'Supporting Volley',
							type: FactoryLogic.type.createTrigger('The retainer’s mentor makes a strike against a creature within distance.'),
							keywords: [AbilityKeyword.Ranged, AbilityKeyword.Weapon],
							distance: [FactoryLogic.distance.createRanged(5)],
							target: 'The triggering creature',
							sections: [
								FactoryLogic.createAbilitySectionText('Ретейнер робить дальній безкоштовний удар по цілі.')
							]
						})
					}),
					level7: FactoryLogic.feature.createAbility({
						ability: FactoryLogic.createAbility({
							id: 'retainer-artillery-7',
							name: 'Line ‘Em Up',
							type: FactoryLogic.type.createMain({ qualifiers: ['encounter'] }),
							keywords: [AbilityKeyword.Area, AbilityKeyword.Weapon],
							distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Line, value: 10, value2: 1, within: 1 })],
							target: 'Кожен ворог у зоні',
							sections: [
								FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
									characteristic: [Characteristic.Might, Characteristic.Agility, Characteristic.Reason, Characteristic.Intuition, Characteristic.Presence],
									tier1: '7 шкоди; С < [слабкий], розпластаний',
									tier2: '11 шкоди; С < [середній], розпластаний',
									tier3: '16 шкоди; С < [сильний], розпластаний'
								}))
							]
						})
					}),
					level10: FactoryLogic.feature.createAbility({
						ability: FactoryLogic.createAbility({
							id: 'retainer-artillery-10',
							name: 'Ricochet Shot',
							type: FactoryLogic.type.createMain({ qualifiers: ['encounter'] }),
							keywords: [AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon],
							distance: [FactoryLogic.distance.createRanged(5)],
							target: 'Одна істота або предмет',
							sections: [
								FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
									characteristic: [Characteristic.Might, Characteristic.Agility, Characteristic.Reason, Characteristic.Intuition, Characteristic.Presence],
									tier1: '9 шкоди',
									tier2: '14 шкоди',
									tier3: '19 шкоди'
								})),
								FactoryLogic.createAbilitySectionText('Ретейнер може націлитися на другу істоту або обʼєкт в межах 5 клітинок від початкової цілі, яка має лінію ефекту до початкової цілі. Ретейнеру не потрібна лінія ефекту до другої цілі, але він повинен знати її місцезнаходження.')
							]
						})
					})
				};
			case MonsterRoleType.Brute:
				return {
					level4: FactoryLogic.feature.createAbility({
						ability: FactoryLogic.createAbility({
							id: 'retainer-brute-4',
							name: 'Big Windup',
							type: FactoryLogic.type.createManeuver(),
							distance: [FactoryLogic.distance.createSelf()],
							target: 'Себе',
							sections: [
								FactoryLogic.createAbilitySectionText('До початку наступного ходу ретейнера удари по ретейнеру отримують перевагу. На початку наступного ходу ретейнера він отримує 2 сплески, а будь-яка здібність, яку він використає до кінця свого ходу і яка примушує переміщувати істоту, може перемістити цю істоту ще на 2 клітинки.')
							]
						})
					}),
					level7: FactoryLogic.feature.createAbility({
						ability: FactoryLogic.createAbility({
							id: 'retainer-brute-7',
							name: 'Overhand Swat',
							type: FactoryLogic.type.createMain({ qualifiers: ['encounter'] }),
							keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
							distance: [FactoryLogic.distance.createMelee()],
							target: 'Одна істота',
							sections: [
								FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
									characteristic: [Characteristic.Might, Characteristic.Agility, Characteristic.Reason, Characteristic.Intuition, Characteristic.Presence],
									tier1: '8 шкоди',
									tier2: '13 шкоди; Відштовхування 2',
									tier3: '16 шкоди; Відштовхування 3; С < [сильний], розпластаний'
								})),
								FactoryLogic.createAbilitySectionText('Якщо ціль завершує будь-яке примусове переміщення від цієї здібності в клітинці, суміжній до ментора ретейнера, ментор може зробити ближній безкоштовний удар по ній.')
							]
						})
					}),
					level10: FactoryLogic.feature.createAbility({
						ability: FactoryLogic.createAbility({
							id: 'retainer-brute-10',
							name: 'Dizzying Sweep',
							type: FactoryLogic.type.createMain({ qualifiers: ['encounter'] }),
							keywords: [AbilityKeyword.Area, AbilityKeyword.Weapon],
							distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 1 })],
							target: 'Each creature in the area',
							sections: [
								FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
									characteristic: [Characteristic.Might, Characteristic.Agility, Characteristic.Reason, Characteristic.Intuition, Characteristic.Presence],
									tier1: '10 шкоди; Відштовхування 1',
									tier2: '14 шкоди; Відштовхування 2',
									tier3: '20 шкоди; Відштовхування 4'
								})),
								FactoryLogic.createAbilitySectionText('Ретейнер приголомшений до кінця свого наступного ходу.')
							]
						})
					})
				};
			case MonsterRoleType.Controller:
				return {
					level4: FactoryLogic.feature.createAbility({
						ability: FactoryLogic.createAbility({
							id: 'retainer-controller-4',
							name: 'Elemental Blast',
							type: FactoryLogic.type.createMain({ qualifiers: ['encounter'] }),
							keywords: [AbilityKeyword.Area],
							distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Cube, value: 3, within: 10 })],
							target: 'Each creature in the area',
							sections: [
								FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
									characteristic: [Characteristic.Might, Characteristic.Agility, Characteristic.Reason, Characteristic.Intuition, Characteristic.Presence],
									tier1: '4 шкоди; Відштовхування 2',
									tier2: '6 шкоди; Відштовхування 3',
									tier3: '10 шкоди; Відштовхування 5'
								})),
								FactoryLogic.createAbilitySectionText('Коли ретейнер використовує цю здібність, він може обрати, щоб вона завдавала одного з наступних типів шкоди: кислотної, холодної, блискавичної, отруйної або звукової.')
							]
						})
					}),
					level7: FactoryLogic.feature.createAbility({
						ability: FactoryLogic.createAbility({
							id: 'retainer-controller-7',
							name: 'Oil Slick',
							type: FactoryLogic.type.createMain({ qualifiers: ['encounter'] }),
							keywords: [AbilityKeyword.Area, AbilityKeyword.Ranged, AbilityKeyword.Weapon],
							distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Cube, value: 3, within: 10 })],
							target: 'Кожен ворог у зоні',
							sections: [
								FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
									characteristic: [Characteristic.Might, Characteristic.Agility, Characteristic.Reason, Characteristic.Intuition, Characteristic.Presence],
									tier1: '5 отруйної шкоди; С < [слабкий], розпластаний',
									tier2: '8 отруйної шкоди; С < [середній], розпластаний',
									tier3: '11 отруйної шкоди; С < [сильний], розпластаний'
								})),
								FactoryLogic.createAbilitySectionText('Зона є важкопрохідною для ворогів. Кожен ворог має вразливість до вогню 5, поки перебуває в зоні, і будь-який ворог, який закінчує свій хід у зоні і не має залишкового руху, падає розпластаним.')
							]
						})
					}),
					level10: FactoryLogic.feature.createAbility({
						ability: FactoryLogic.createAbility({
							id: 'retainer-controller-10',
							name: 'Shattering Shards',
							type: FactoryLogic.type.createMain({ qualifiers: ['encounter'] }),
							keywords: [AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon],
							distance: [FactoryLogic.distance.createRanged(10)],
							target: 'One Object',
							sections: [
								FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
									characteristic: [Characteristic.Might, Characteristic.Agility, Characteristic.Reason, Characteristic.Intuition, Characteristic.Presence],
									tier1: '7 damage',
									tier2: '11 damage',
									tier3: '16 damage'
								})),
								FactoryLogic.createAbilitySectionText('Зона в радіусі 2 клітинок від цілі є важкопрохідною, і кожен ворог у цій зоні отримує ту ж шкоду, що й обʼєкт.')
							]
						})
					})
				};
			case MonsterRoleType.Defender:
				return {
					level4: FactoryLogic.feature.createAbility({
						ability: FactoryLogic.createAbility({
							id: 'retainer-defender-4',
							name: 'Watch Out!',
							type: FactoryLogic.type.createTrigger('The target takes damage from a strike', { qualifiers: ['encounter'] }),
							distance: [FactoryLogic.distance.createMelee()],
							target: 'The retainer’s mentor',
							sections: [
								FactoryLogic.createAbilitySectionText('Ретейнер штовхає ціль або атакуючу істоту на до 2 клітинок. Якщо це рухає ментора поза діапазон удару, удар не має ефекту.')
							]
						})
					}),
					level7: FactoryLogic.feature.createAbility({
						ability: FactoryLogic.createAbility({
							id: 'retainer-defender-7',
							name: 'It’s Me You Want!',
							type: FactoryLogic.type.createMain({ qualifiers: ['encounter'] }),
							keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
							distance: [FactoryLogic.distance.createMelee()],
							target: 'Two creatures',
							sections: [
								FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
									characteristic: [Characteristic.Might, Characteristic.Agility, Characteristic.Reason, Characteristic.Intuition, Characteristic.Presence],
									tier1: '7 шкоди; спровокований (до кінця ходу)',
									tier2: '11 шкоди; спровокований (рят. кидок завершує)',
									tier3: '16 шкоди; спровокований (рят. кидок завершує)'
								}))
							]
						})
					}),
					level10: FactoryLogic.feature.createAbility({
						ability: FactoryLogic.createAbility({
							id: 'retainer-defender-10',
							name: 'Last Stand',
							type: FactoryLogic.type.createMain({ qualifiers: ['encounter'] }),
							keywords: [AbilityKeyword.Melee, AbilityKeyword.Weapon],
							distance: [FactoryLogic.distance.createMelee()],
							target: 'Один ворог',
							sections: [
								FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
									characteristic: [Characteristic.Might, Characteristic.Agility, Characteristic.Reason, Characteristic.Intuition, Characteristic.Presence],
									tier1: '8 damage',
									tier2: '13 damage',
									tier3: '17 damage'
								})),
								FactoryLogic.createAbilitySectionText('Ретейнер та його ментор отримують по 10 тимчасової Витривалості. Додатково, кожен захеканий союзник в межах 2 клітинок від ретейнера може витратити одне Відновлення.')
							]
						})
					})
				};
			case MonsterRoleType.Harrier:
				return {
					level4: FactoryLogic.feature.createAbility({
						ability: FactoryLogic.createAbility({
							id: 'retainer-harrier-4',
							name: 'Tackle',
							type: FactoryLogic.type.createMain({ qualifiers: ['encounter'] }),
							keywords: [AbilityKeyword.Charge, AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
							distance: [FactoryLogic.distance.createMelee()],
							target: 'Один ворог',
							sections: [
								FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
									characteristic: [Characteristic.Might, Characteristic.Agility, Characteristic.Reason, Characteristic.Intuition, Characteristic.Presence],
									tier1: '5 шкоди; Відштовхування 1',
									tier2: '9 damage; push 2',
									tier3: '12 damage; push 4'
								}))
							]
						})
					}),
					level7: FactoryLogic.feature.createAbility({
						ability: FactoryLogic.createAbility({
							id: 'retainer-harrier-7',
							name: 'Meet You There',
							type: FactoryLogic.type.createMain({ qualifiers: ['encounter'] }),
							keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
							distance: [FactoryLogic.distance.createMelee()],
							target: 'Одна істота',
							sections: [
								FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
									characteristic: [Characteristic.Might, Characteristic.Agility, Characteristic.Reason, Characteristic.Intuition, Characteristic.Presence],
									tier1: '7 damage',
									tier2: '10 damage',
									tier3: '15 damage'
								})),
								FactoryLogic.createAbilitySectionText('До або після удару ретейнер та його ментор можуть кожен зміститися на відстань до своєї швидкості.')
							]
						})
					}),
					level10: FactoryLogic.feature.createAbility({
						ability: FactoryLogic.createAbility({
							id: 'retainer-harrier-10',
							name: 'Nab and Stab',
							type: FactoryLogic.type.createMain({ qualifiers: ['encounter'] }),
							keywords: [AbilityKeyword.Area, AbilityKeyword.Weapon],
							distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 1 })],
							target: 'Each creature in the area',
							sections: [
								FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
									characteristic: [Characteristic.Might, Characteristic.Agility, Characteristic.Reason, Characteristic.Intuition, Characteristic.Presence],
									tier1: '11 damage; one target who has M < [слабкий] is grabbed',
									tier2: '16 damage; one target who has M < [середній] is grabbed',
									tier3: '21 damage; one target who has M < [сильний] is grabbed'
								})),
								FactoryLogic.createAbilitySectionText('Ретейнер зміщується на до 2 клітинок і може перемістити разом із собою істоту, схоплену цією здібністю.')
							]
						})
					})
				};
			case MonsterRoleType.Hexer:
				return {
					level4: FactoryLogic.feature.createAbility({
						ability: FactoryLogic.createAbility({
							id: 'retainer-hexer-4',
							name: 'Backfire Curse',
							type: FactoryLogic.type.createMain({ qualifiers: ['encounter'] }),
							keywords: [AbilityKeyword.Magic, AbilityKeyword.Strike, AbilityKeyword.Ranged],
							distance: [FactoryLogic.distance.createRanged(10)],
							target: 'Один ворог',
							sections: [
								FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
									characteristic: [Characteristic.Might, Characteristic.Agility, Characteristic.Reason, Characteristic.Intuition, Characteristic.Presence],
									tier1: '2 шкоди від скверни; ціль проклята (до кінця ходу)',
									tier2: '5 шкоди від скверни; ціль проклята (до кінця ходу)',
									tier3: '7 шкоди від скверни; ціль проклята (до кінця ходу)'
								})),
								FactoryLogic.createAbilitySectionText('Поки ціль проклята таким чином, коли вона робить удар, що націлений лише на одну істоту, ретейнер може використати безкоштовну тригерну дію, щоб обрати другий ціль для удару в межах його дистанції.')
							]
						})
					}),
					level7: FactoryLogic.feature.createAbility({
						ability: FactoryLogic.createAbility({
							id: 'retainer-hexer-7',
							name: 'Take Root',
							type: FactoryLogic.type.createMain({ qualifiers: ['encounter'] }),
							keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged, AbilityKeyword.Strike],
							distance: [FactoryLogic.distance.createRanged(10)],
							target: 'Одна істота',
							sections: [
								FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
									characteristic: [Characteristic.Might, Characteristic.Agility, Characteristic.Reason, Characteristic.Intuition, Characteristic.Presence],
									tier1: '5 шкоди; С < [слабкий], сповільнений (рят. кидок завершує)',
									tier2: '9 шкоди; С < [середній], сповільнений (рят. кидок завершує)',
									tier3: '12 шкоди; С < [сильний], сповільнений (рят. кидок завершує)'
								})),
								FactoryLogic.createAbilitySectionText('Поки ціль сповільнена таким чином, якщо вона завершує свій хід, не рухаючись протягом цього ходу, вона більше не сповільнена та опиняється у стані сковування (рят. кидок закінчує).')
							]
						})
					}),
					level10: FactoryLogic.feature.createAbility({
						ability: FactoryLogic.createAbility({
							id: 'retainer-hexer-10',
							name: 'Mazed',
							type: FactoryLogic.type.createMain({ qualifiers: ['encounter'] }),
							keywords: [AbilityKeyword.Ranged, AbilityKeyword.Magic, AbilityKeyword.Strike],
							distance: [FactoryLogic.distance.createRanged(10)],
							target: 'Одна істота',
							sections: [
								FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
									characteristic: [Characteristic.Might, Characteristic.Agility, Characteristic.Reason, Characteristic.Intuition, Characteristic.Presence],
									tier1: '7 шкоди; С < [слабкий], у лабіринті (рят. кидок завершує)',
									tier2: '11 шкоди; С < [середній], у лабіринті (рят. кидок завершує)',
									tier3: '16 шкоди; С < [сильний], у лабіринті (рят. кидок завершує)'
								})),
								FactoryLogic.createAbilitySectionText('Поки ціль у лабіринті (mazed), вона приголомшена. Додатково, в кінці кожного ходу такої цілі ретейнер може спричинити переміщення цілі на відстань до її швидкості по прямій у напрямку на вибір ретейнера. Це не є примусовим переміщенням, і рух припиняється, якщо він змусив би ціль увійти в важкопрохідну або шкідливу місцевість.')
							]
						})
					})
				};
			case MonsterRoleType.Mount:
				return {
					level4: FactoryLogic.feature.createAbility({
						ability: FactoryLogic.createAbility({
							id: 'retainer-mount-4',
							name: 'Cavalry Charge',
							type: FactoryLogic.type.createMain({ qualifiers: ['encounter'] }),
							keywords: [AbilityKeyword.Charge, AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
							distance: [FactoryLogic.distance.createMelee()],
							target: 'Один ворог',
							sections: [
								FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
									characteristic: [Characteristic.Might, Characteristic.Agility, Characteristic.Reason, Characteristic.Intuition, Characteristic.Presence],
									tier1: '6 шкоди',
									tier2: '8 damage',
									tier3: '11 damage'
								})),
								FactoryLogic.createAbilitySectionText('Якщо ця здібність використовується в рамках дії Charge, вершник питомця може використати безкоштовну тригерну дію, щоб зробити ближній безкоштовний удар по тій самій цілі.')
							]
						})
					}),
					level7: FactoryLogic.feature.createAbility({
						ability: FactoryLogic.createAbility({
							id: 'retainer-mount-7',
							name: 'Giddyup!',
							type: FactoryLogic.type.createMove({ qualifiers: ['encounter'] }),
							distance: [FactoryLogic.distance.createRanged(5)],
							target: 'Себе',
							sections: [
								FactoryLogic.createAbilitySectionText('Пеший/тварина зміщується вдвічі більше своєї швидкості. Воно може виконати стрибок як частину цього руху.')
							]
						})
					}),
					level10: FactoryLogic.feature.createAbility({
						ability: FactoryLogic.createAbility({
							id: 'retainer-mount-10',
							name: 'Rearing Trample',
							type: FactoryLogic.type.createMain({ qualifiers: ['encounter'] }),
							keywords: [AbilityKeyword.Area, AbilityKeyword.Weapon],
							distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 1 })],
							target: 'Кожен ворог у зоні',
							sections: [
								FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
									characteristic: [Characteristic.Might, Characteristic.Agility, Characteristic.Reason, Characteristic.Intuition, Characteristic.Presence],
									tier1: '10 шкоди; С < [слабкий], розпластаний',
									tier2: '15 шкоди; С < [середній], розпластаний',
									tier3: '21 шкоди; С < [сильний], розпластаний'
								})),
								FactoryLogic.createAbilitySectionText('Ціль, збита таким чином чи яка вже лежить, отримує додаткові 5 шкоди')
							]
						})
					})
				};
			case MonsterRoleType.Support:
				return {
					level4: FactoryLogic.feature.createAbility({
						ability: FactoryLogic.createAbility({
							id: 'retainer-support-4',
							name: 'Battlefield Medic',
							type: FactoryLogic.type.createManeuver(),
							keywords: [AbilityKeyword.Melee],
							distance: [FactoryLogic.distance.createMelee()],
							target: 'На себе або одного союзника',
							sections: [
								FactoryLogic.createAbilitySectionText('The target spends a Recovery, and ability rolls against the target take a bane until the start of the retainer’s next turn.')
							]
						})
					}),
					level7: FactoryLogic.feature.createAbility({
						ability: FactoryLogic.createAbility({
							id: 'retainer-support-7',
							name: 'Focus Fire',
							type: FactoryLogic.type.createMain({ qualifiers: ['encounter'] }),
							keywords: [AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon],
							distance: [FactoryLogic.distance.createRanged(5)],
							target: 'Одна істота',
							sections: [
								FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
									characteristic: [Characteristic.Might, Characteristic.Agility, Characteristic.Reason, Characteristic.Intuition, Characteristic.Presence],
									tier1: '9 шкоди',
									tier2: '13 damage',
									tier3: '18 damage'
								})),
								FactoryLogic.createAbilitySectionText('Один союзник у межах дистанції отримує 2 сплески.')
							]
						})
					}),
					level10: FactoryLogic.feature.createAbility({
						ability: FactoryLogic.createAbility({
							id: 'retainer-support-10',
							name: 'Back from the Dead',
							type: FactoryLogic.type.createMain({ qualifiers: ['encounter'] }),
							keywords: [AbilityKeyword.Melee],
							distance: [FactoryLogic.distance.createMelee()],
							target: 'Один союзник',
							sections: [
								FactoryLogic.createAbilitySectionText('Якщо ціль має 0 або менше Витривалості, або якщо вона померла через втрату Витривалості з моменту завершення останнього ходу ретейнера, ціль повертається до життя з 1 Витривалістю і може витратити Відновлення.')
							]
						})
					})
				};
		}

		return null;
	};
}
