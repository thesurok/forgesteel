import { AbilityDistanceType } from '@/enums/ability-distance-type';
import { AbilityKeyword } from '@/enums/ability-keyword';
import { Characteristic } from '@/enums/characteristic';
import { FactoryLogic } from '@/logic/factory-logic';
import { MonsterGroup } from '@/models/monster-group';
import { MonsterOrganizationType } from '@/enums/monster-organization-type';
import { StatBlockIcon } from '@/enums/stat-block-icon';

export const hag: MonsterGroup = {
	id: 'monster-group-hag',
	name: 'Hag',
	description: 'When fear of death or hunger for power grips a mortal spellcaster, often a druid or a witch, they might forge a pact with an evil archfey. The mortal becomes a hag—aged, clawed, and cruel. A ruthlessly powerful fey in their own right, a hag uses their magic to bring about the misery their archfey wills.',
	picture: null,
	information: [
		{
			id: 'hag-info-1',
			name: 'Hiding in Plain Sight',
			description: 'Though hags typically appear as older humanoids, their true form is as vicious and nasty as their nature. They prefer to show the world a charitable face, but the general wisdom concerning hags is that the more beautiful their appearance, the deeper the rot within. This theory has never been confirmed, however, as few who see a hag’s true form live to tell the tale.'
		},
		{
			id: 'hag-info-2',
			name: 'Dealmakers and Heart-Breakers',
			description: `
As old age can’t kill them, the oldest hags accumulate swathes of knowledge, magic, and repute over time. They are happy to share their wares … for the right price. Rather than ask for paltry coin, a hag usually bargains for something dear to the customer—perhaps their ability to love, the sound of their child’s laugh, or their left pinky toe.

Adding insult to injury, those who deal with hags almost always discover the product is worse than advertised. Mortals should pay close attention to the precise wording of their agreements, lest they end up with a hex they thought would be a gift. Such curses often lead to the corruption of good but desperate folk, with some getting so twisted up in fey deals that they become hags themselves.`
		},
		{
			id: 'hag-info-3',
			name: 'What\'s in a Name?',
			description: 'Hags give themselves whimsical names, and older hags often select monikers such as Auntie, Uncle, or Nanny. Such relatable names help entice their favorite prey: the innocent. Who would fear Granny Gumdrops or Uncle Twothumbs?'
		},
		{
			id: 'hag-info-4',
			name: 'Loyal Underlings',
			description: 'Hags are treacherous by nature, and they only recruit creatures they can trust to be loyal underlings. Most of these creatures lack sapience (such as animals, constructs, and undead), though hags sometimes command weaker fey who are too scared to betray them.'
		},
		{
			id: 'hag-info-5',
			name: 'Hag Languages',
			description: 'Most hags speak Анжалі (Anjali), Келіан (Caelian), Кхелт (Khelt), and Іллірик (Yllyric), with older hags often knowing several more languages.'
		}
	],
	malice: [
		FactoryLogic.feature.createMalice({
			id: 'hag-malice-1',
			name: 'Casting Curses and Bodies',
			cost: 3,
			icon: StatBlockIcon.AuraBurst,
			sections: [
				'The hag utters terrible words that push each enemy within 2 squares of them up to 3 squares.'
			]
		}),
		FactoryLogic.feature.createMaliceAbility({
			ability: FactoryLogic.createAbility({
				id: 'hag-malice-2',
				name: 'Hag Wyrd',
				type: FactoryLogic.type.createMain(),
				cost: 5,
				keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
				distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Line, value: 10, value2: 1, within: 1 })],
				target: 'Кожен ворог у зоні',
				sections: [
					FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
						bonus: 3,
						tier1: '5 вогняної шкоди; Р<1 зляканий (рят. кидок закінчує)',
						tier2: '8 вогняної шкоди; Р<2 зляканий (рят. кидок закінчує)',
						tier3: '11 вогняної шкоди; Р<3 зляканий (рят. кидок закінчує)'
					})),
					FactoryLogic.createAbilitySectionText('After making the power roll, the hag can choose to replace the damage type and condition with lightning damage and dazed, or cold damage and slowed.')
				]
			})
		}),
		FactoryLogic.feature.createMalice({
			id: 'hag-malice-3',
			name: 'Solo Action',
			cost: 5,
			icon: StatBlockIcon.Villain,
			sections: [
				'The hag takes an additional основна дія on their turn. They can use this feature even if they are dazed.'
			]
		}),
		FactoryLogic.feature.createMaliceAbility({
			ability: FactoryLogic.createAbility({
				id: 'hag-malice-4',
				name: 'House Call',
				description: `
The hag’s hut springs to life. It enters the encounter map within 10 squares of the hag if it isn’t already there and takes its turn. The hut is size 4, has 75 Stamina and damage immunity 3, and has speed 8 from its powerful set of animal legs. This feature can’t be used if the hut is reduced to 0 Stamina. In addition to its дія руху, the house can take only the following основна дія.

**KICK**`,
				type: FactoryLogic.type.createMain(),
				cost: 10,
				keywords: [AbilityKeyword.Area, AbilityKeyword.Ranged, AbilityKeyword.Weapon],
				distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Cube, value: 2, within: 2 })],
				target: 'Кожен ворог у зоні',
				sections: [
					FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
						bonus: 3,
						tier1: '6 шкоди; відштовхнути на 3; С<1 розпластаний',
						tier2: '10 шкоди; відштовхнути на 4; С<2 розпластаний',
						tier3: '13 шкоди; відштовхнути на 5; С<3 розпластаний'
					}))
				]
			})
		})
	],
	monsters: [
		FactoryLogic.createMonster({
			id: 'hag-1',
			name: 'Wode Hag',
			level: 3,
			role: FactoryLogic.createMonsterRole(MonsterOrganizationType.Solo),
			keywords: ['Fey', 'Hag'],
			encounterValue: 60,
			size: FactoryLogic.createSize(1, 'L'),
			speed: FactoryLogic.createSpeed(5, 'fly, hover'),
			stamina: 300,
			stability: 1,
			freeStrikeDamage: 6,
			characteristics: FactoryLogic.createCharacteristics(2, 1, 1, 3, 3),
			features: [
				FactoryLogic.feature.createSoloMonster({
					id: 'hag-feature-1',
					name: 'the hag'
				}),
				FactoryLogic.feature.create({
					id: 'hag-feature-2',
					name: 'Supernatural Resistance',
					description: 'Magic and Psionic abilities used against the hag take a bane.'
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'hag-feature-3',
						name: 'Corrosive Claws',
						type: FactoryLogic.type.createMain(),
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [FactoryLogic.distance.createMelee()],
						target: 'Two creatures or objects',
						cost: 'signature',
						sections: [
							FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
								bonus: 3,
								tier1: '9 шкоди від скверни; Л<1 ослаблений (рят. кидок закінчує)',
								tier2: '13 шкоди від скверни; Л<2 ослаблений (рят. кидок закінчує)',
								tier3: '16 шкоди від скверни; Л<3 ослаблений (рят. кидок закінчує)'
							}))
						]
					})
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'hag-feature-4',
						name: 'Soul Steal',
						type: FactoryLogic.type.createMain(),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
						distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Cube, value: 4, within: 1 })],
						target: 'Кожен ворог у зоні',
						sections: [
							FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
								bonus: 3,
								tier1: '5 шкоди від скверни; П<1 4 шкоди від скверни',
								tier2: '8 шкоди від скверни; П<2 5 шкоди від скверни',
								tier3: '10 шкоди від скверни; П<3 6 шкоди від скверни'
							})),
							FactoryLogic.createAbilitySectionText('This ability gains an edge against a target who has a soul.'),
							FactoryLogic.createAbilitySectionSpend({
								value: 3,
								effect: 'The hag regains Stamina equal to half the damage dealt.'
							})
						]
					})
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'hag-feature-5',
						name: 'Shapeshifter',
						type: FactoryLogic.type.createManeuver(),
						keywords: [AbilityKeyword.Magic],
						distance: [FactoryLogic.distance.createSelf()],
						target: 'Себе',
						sections: [
							FactoryLogic.createAbilitySectionText('The hag alters their body to become any size 1 creature, from a house cat to a humanoid. If the hag uses this ability while outside of any enemy’s line of effect, they can choose to be automatically hidden. The hag can return to their original form as a безкоштовний маневр.'),
							FactoryLogic.createAbilitySectionSpend({
								value: 5,
								effect: 'The hag becomes a size 2 creature instead, from a bear to an ogre. While in this form, the hag’s melee abilities gain a +1 bonus to distance and deal an extra 4 damage.'
							})
						]
					})
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'hag-feature-6',
						name: 'Turned Upside Down',
						type: FactoryLogic.type.createTrigger('A creature targets the hag with a melee strike.'),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
						distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 1 })],
						target: 'Кожен ворог у зоні',
						cost: 2,
						sections: [
							FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
								bonus: 3,
								tier1: 'Зсунути на 2; Р<1 зсув є вертикальним',
								tier2: 'Зсунути на 3; Р<2 зсув є вертикальним, і ціль is скутий (до кінця ходу)',
								tier3: 'Вертикально зсунути на 5; Р<3 скутий (до кінця ходу)'
							})),
							FactoryLogic.createAbilitySectionText('While restrained this way, a creature who is vertical force moved is suspended in midair. The creature falls when the condition ends.')
						]
					})
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'hag-feature-7',
						name: 'Snackies for Sweeties',
						type: FactoryLogic.type.createVillainAction(1),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
						distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 5 })],
						target: 'Кожна істота в зоні',
						sections: [
							FactoryLogic.createAbilitySectionText('The hag attaches an ornate explosive pastry to each target who has Л<2. At the end of the round, the hag makes one power roll against each creature with a pastry attached to them.'),
							FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
								bonus: 3,
								tier1: '6 отруйної шкоди',
								tier2: '10 отруйної шкоди',
								tier3: '13 отруйної шкоди'
							})),
							FactoryLogic.createAbilitySectionText('**Special** A creature wearing a pastry or adjacent to a creature wearing a pastry can attempt an **Agility test** to remove the pastry as a маневр.'),
							FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
								characteristic: Characteristic.Agility,
								tier1: 'The hag makes the power roll for all pastries.',
								tier2: 'The pastry is not removed.',
								tier3: 'The pastry is removed і can no longer explode.'
							}))
						]
					})
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'hag-feature-8',
						name: 'Predator’s Alacrity',
						type: FactoryLogic.type.createVillainAction(2),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Weapon],
						distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 1 })],
						target: 'Кожен ворог у зоні',
						sections: [
							FactoryLogic.createAbilitySectionText('Before using this villain action, the hag shifts up to their speed. They then use Corrosive Claws against each target, push each target up to 2 squares, and shift up to their speed again.')
						]
					})
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'hag-feature-9',
						name: 'Open the Oven',
						type: FactoryLogic.type.createVillainAction(3),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Weapon],
						distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Cube, value: 5, within: 1 })],
						target: 'Кожна істота в зоні',
						sections: [
							FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
								bonus: 3,
								tier1: '6 вогняної шкоди; Л<1 ослаблений (рят. кидок закінчує)',
								tier2: '10 вогняної шкоди; Л<2 ослаблений (рят. кидок закінчує)',
								tier3: '13 вогняної шкоди; Л<3 ослаблений (рят. кидок закінчує)'
							})),
							FactoryLogic.createAbilitySectionText('The hag turns the area into a roiling oven until the end of the encounter. Any creature in area takes an extra 5 damage from the hag’s damage-dealing abilities.')
						]
					})
				})
			]
		})
	],
	addOns: []
};
