import { AbilityDistanceType } from '@/enums/ability-distance-type';
import { AbilityKeyword } from '@/enums/ability-keyword';
import { Characteristic } from '@/enums/characteristic';
import { FactoryLogic } from '@/logic/factory-logic';
import { MonsterGroup } from '@/models/monster-group';
import { MonsterOrganizationType } from '@/enums/monster-organization-type';
import { StatBlockIcon } from '@/enums/stat-block-icon';

export const medusa: MonsterGroup = {
	id: 'monster-group-medusa',
	name: 'Medusa',
	description: 'Hunted as monsters with no thought given to their nature or origin, medusas are some of the most underestimated and misunderstood creatures. Many people fear medusas for their monstrous appearance and ability to turn others to stone, but few realize the truth. Each of these monstrosities was once a humanoid, cursed and transformed for defying a god. But while some medusas embrace wickedness, many simply fight for their lives against those who threaten them through their ignorance.',
	picture: null,
	information: [
		{
			id: 'medusa-info-1',
			name: 'Cursed for Defiance',
			description: `
When a powerful mortal defies a god for good or for ill, agents of that deity might curse them to live as a medusa. The offender’s skin and eyes become reptilian, and a nest of black venomous snakes replaces their hair. When the medusa wishes, beams from their eyes can slowly petrify others to stone.

Followers of the gods who impose this punishment spread terrifying myths about medusas, causing mortals to attack and shun them. This often drives medusas into solitude, or to places haunted by creatures who don’t judge them based on mere appearance and horror stories. Many medusas plot ways to break their curse, searching for lost healing rituals or secrets to use against the gods who cursed them. Others embrace their new gifts, building stone gardens of the aggressors who foolishly hunted or harmed them.`
		},
		{
			id: 'medusa-info-2',
			name: 'Serpentine Reflexes',
			description: 'While the medusa’s stone gaze is legendary, they can move, strike, and evade as swiftly as a snake, even briefly manifesting scaled wings to dart through the chaos. This enhanced dexterity makes them difficult to pin down. Their petrifying gaze allows them to attack at range as necessary, but they’re equally deadly in melee, where they have the full advantage of their snakes and the enervating venom pulsing through each snake’s set of needlelike fangs.'
		},
		{
			id: 'medusa-info-3',
			name: 'Baleful Magic',
			description: 'Medusas have many means to defend themselves, even aside from their petrifying stare. They slow enemies down, weaken them, and can even temporarily charm and control them once petrifying magic takes root in their veins. These reclusive beings are no stranger to being outnumbered and overwhelmed. All they have in their power to gain leverage over their opponents, they wield ruthlessly.'
		},
		{
			id: 'medusa-info-4',
			name: 'Stone Gardens',
			description: 'Medusas often reside in stone gardens filled with statues of those who previously tried to slay them. This not only allows them to slip between their statues, hide, and then strike, but it also allows them to command the battle while in their lairs, shattering statues to harm others. Evil medusas sometimes slowly reverse the petrification of their victims one limb at a time to feed on them, creating grotesque mausoleums of the crumbling dead for unwitting adventurers to wander into.'
		},
		{
			id: 'medusa-info-5',
			name: 'Lifting the Curse',
			description: 'Agents of the deity who ordered a medusa’s curse can sometimes be convinced to lift the punishment, usually in response to the medusa undertaking an impossible task in the god’s name or making a threat that can’t be ignored. Some sages claim that ancient rituals can undo the curse, but these lost secrets are often hidden by wrathful divine servants—and performing such a ritual might entail great sacrifice.'
		},
		{
			id: 'medusa-info-6',
			name: 'Medusa Languages',
			description: 'Medusas can speak any language they knew before they were cursed. Many of them speak Келіан (Caelian), and others have learned the languages of monsters and creatures they dwell near. Additionally, tales tell of some medusas who speak the original form of Кхаміш (Khamish).'
		}
	],
	malice: [
		FactoryLogic.feature.createMaliceAbility({
			ability: FactoryLogic.createAbility({
				id: 'medusa-malice-1',
				name: 'Weakening Glare',
				type: FactoryLogic.type.createMain(),
				keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged, AbilityKeyword.Strike],
				distance: [FactoryLogic.distance.createRanged(10)],
				target: 'Одна істота',
				cost: 4,
				sections: [
					FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
						bonus: 4,
						tier1: '6 шкоди; ослаблений (до кінця ходу)',
						tier2: '10 шкоди; ослаблений (до кінця ходу)',
						tier3: '12 шкоди; ослаблений (рят. кидок закінчує)'
					}))
				]
			})
		}),
		FactoryLogic.feature.createMalice({
			id: 'medusa-malice-2',
			name: 'Solo Action',
			cost: 5,
			icon: StatBlockIcon.Villain,
			sections: [
				'The medusa takes an additional основна дія on their turn. They can use this feature even if they are dazed.'
			]
		}),
		FactoryLogic.feature.createMaliceAbility({
			ability: FactoryLogic.createAbility({
				id: 'medusa-malice-3',
				name: 'Ssstop and Lisssten',
				type: FactoryLogic.type.createMain(),
				keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged],
				distance: [FactoryLogic.distance.createRanged(10)],
				target: '3 Істоти',
				cost: 5,
				sections: [
					FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
						bonus: 4,
						tier1: 'І<2 ціль is зачарований',
						tier2: 'І<3 ціль is зачарований',
						tier3: 'І<4 ціль is зачарований'
					})),
					FactoryLogic.createAbilitySectionText('At a time of the medusa’s choosing, a charmed creature moves up to their speed and makes a free strike against an enemy of the medusa’s choice as a безкоштовна тригерна дія. The creature is then no longer charmed.')
				]
			})
		}),
		FactoryLogic.feature.createMalice({
			id: 'medusa-malice-4',
			name: 'Shatter Victims',
			cost: 7,
			icon: StatBlockIcon.AuraBurst,
			sections: [
				'The medusa causes three stone statues within 10 squares of them to each shatter in a 2-cube explosion. Each enemy in one of those areas makes a **Might test**. An enemy restrained or slowed by the medusa’s Petrify ability has a double bane on the test.',
				FactoryLogic.createPowerRoll({
					characteristic: Characteristic.Might,
					tier1: '12 шкоди; вертикально відштовхнути на 3; кровотеча (рят. кидок закінчує)',
					tier2: '10 шкоди; вертикально відштовхнути на 3',
					tier3: '6 шкоди'
				})
			]
		})
	],
	monsters: [
		FactoryLogic.createMonster({
			id: 'medusa-1',
			name: 'Medusa',
			level: 5,
			role: FactoryLogic.createMonsterRole(MonsterOrganizationType.Solo),
			keywords: ['Accursed', 'Humanoid', 'Medusa'],
			encounterValue: 84,
			size: FactoryLogic.createSize(1, 'M'),
			speed: FactoryLogic.createSpeed(10),
			stamina: 420,
			stability: 5,
			freeStrikeDamage: 8,
			characteristics: FactoryLogic.createCharacteristics(2, 4, 0, 0, 0),
			features: [
				FactoryLogic.feature.createSoloMonster({
					id: 'medusa-feature-2',
					name: 'the medusa',
					endEffect: 10
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'medusa-feature-3',
						name: 'Snake Bites',
						type: FactoryLogic.type.createMain(),
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [FactoryLogic.distance.createMelee(1)],
						target: 'Two creatures or objects',
						cost: 'signature',
						sections: [
							FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
								bonus: 4,
								tier1: '11 шкоди; С<2 сповільнений (рят. кидок закінчує)',
								tier2: '16 шкоди; С<3 сповільнений (рят. кидок закінчує)',
								tier3: '19 шкоди; С<4 сповільнений (рят. кидок закінчує)'
							}))
						]
					})
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'medusa-feature-4',
						name: 'Damning Gaze',
						type: FactoryLogic.type.createMain(),
						keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged, AbilityKeyword.Strike],
						distance: [FactoryLogic.distance.createRanged(10)],
						target: 'Two creatures or objects',
						sections: [
							FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
								bonus: 4,
								tier1: '11 шкоди; відштовхнути на 3',
								tier2: '16 шкоди; відштовхнути на 5',
								tier3: '19 шкоди; відштовхнути на 7'
							})),
							FactoryLogic.createAbilitySectionSpend({
								value: 3,
								effect: 'The medusa targets two additional creatures or objects.'
							})
						]
					})
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'medusa-feature-5',
						name: 'Petrify',
						type: FactoryLogic.type.createMain(),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
						distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 3 })],
						target: 'Кожен ворог у зоні',
						cost: 5,
						sections: [
							FactoryLogic.createAbilitySectionRoll(
								FactoryLogic.createPowerRoll({
									bonus: 4,
									tier1: 'С<2 скутий (рят. кидок закінчує)',
									tier2: 'С<3 скутий (рят. кидок закінчує)',
									tier3: 'сповільнений (рят. кидок закінчує); або якщо С<4 скутий (рят. кидок закінчує)'
								})
							),
							FactoryLogic.createAbilitySectionText('A target with cover reduces the potency by 1, while a slowed target increases the potency by 1. A target restrained this way magically begins to turn to stone, and a target who ends two consecutive turns restrained this way is petrified.')
						]
					})
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'medusa-feature-6',
						name: 'Nimble Escape',
						type: FactoryLogic.type.createManeuver(),
						distance: [FactoryLogic.distance.createSelf()],
						target: 'Себе',
						sections: [
							FactoryLogic.createAbilitySectionText('The medusa shifts up to 3 squares and can attempt to hide even if observed.')
						]
					})
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'medusa-feature-7',
						name: 'Venomous Spit',
						type: FactoryLogic.type.createTrigger('A creature within distance deals damage to the medusa.'),
						keywords: [AbilityKeyword.Melee],
						distance: [FactoryLogic.distance.createMelee()],
						target: 'The triggering creature',
						cost: 2,
						sections: [
							FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
								bonus: 4,
								tier1: '13 кислотної шкоди',
								tier2: '18 кислотної шкоди',
								tier3: '22 кислотної шкоди'
							}))
						]
					})
				}),
				FactoryLogic.feature.create({
					id: 'medusa-feature-8',
					name: 'Cunning Edge',
					description: 'The medusa gains an edge on power rolls against any creature who is restrained or slowed by Petrify.'
				}),
				FactoryLogic.feature.create({
					id: 'medusa-feature-9',
					name: 'Many Peering Eyes',
					description: 'The medusa can’t be ﬂanked.'
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'medusa-feature-10',
						name: 'Mass Petrify',
						type: FactoryLogic.type.createVillainAction(1),
						keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged],
						distance: [FactoryLogic.distance.createRanged(50)],
						target: 'Each enemy',
						sections: [
							FactoryLogic.createAbilitySectionText('The medusa can use Petrify against each target without spending Malice. A target who doesn’t have cover increases the potency by 1.')
						]
					})
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'medusa-feature-11',
						name: 'Serpent Wings',
						type: FactoryLogic.type.createVillainAction(2),
						distance: [FactoryLogic.distance.createSelf()],
						target: 'Себе',
						sections: [
							FactoryLogic.createAbilitySectionText('The medusa temporarily manifests wings and flies up to their speed without provoking opportunity attacks. During or after this movement, they can use Snake Bites and Damning Gaze once each.')
						]
					})
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'medusa-feature-12',
						name: 'Stone Puppets',
						type: FactoryLogic.type.createVillainAction(3),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
						distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 10 })],
						target: 'Особливе',
						sections: [
							FactoryLogic.createAbilitySectionRoll(
								FactoryLogic.createPowerRoll({
									bonus: 4,
									tier1: '8 кислотної шкоди; П<3 ослаблений (рят. кидок закінчує)',
									tier2: '13 кислотної шкоди; П<4 ослаблений (рят. кидок закінчує)',
									tier3: '17 кислотної шкоди; П<5 ослаблений (рят. кидок закінчує)'
								})
							),
							FactoryLogic.createAbilitySectionText('As a безкоштовна тригерна дія, each stone statue and creature restrained or slowed by Petrify within distance moves up to their speed and uses a signature ability that gains an edge, targeting an enemy of the medusa’s choice. A stone statue without its own statistics has speed 5 and uses the medusa’s free strike.')
						]
					})
				})
			]
		})
	],
	addOns: []
};
