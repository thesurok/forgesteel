import { AbilityDistanceType } from '@/enums/ability-distance-type';
import { AbilityKeyword } from '@/enums/ability-keyword';
import { Characteristic } from '@/enums/characteristic';
import { FactoryLogic } from '@/logic/factory-logic';
import { MonsterGroup } from '@/models/monster-group';
import { MonsterOrganizationType } from '@/enums/monster-organization-type';
import { StatBlockIcon } from '@/enums/stat-block-icon';

export const shamblingMound: MonsterGroup = {
	id: 'monster-group-shambling-mound',
	name: 'Shambling Mound',
	description: `
Rich soil squelches under every footstep. Curtains of menacing vines block the way, and muffled groans echo distantly under the darkening canopy. But by the time a hapless explorer realizes the ground is moving, it’s too late—the shambling mound has devoured them.

Found in overgrown swamps, stinking marshes, dense wodes, and dark, damp rainforests, the shambling mound is a wandering mass of vegetation that feeds on everything in their path.`,
	picture: null,
	information: [
		{
			id: 'shambling-mound-info-1',
			name: 'Noxious Origins',
			description: `
A shambling mound is most often a byproduct of nearby hags or mages, especially evil ones or those utilizing green magic. Latent magic seeps into the surrounding land, coalescing into a nocuous creature consumed by hunger. The shambling mound knows only that they must grow, and that to grow they must feed—and thus they wander in search of a hunting ground.

It is believed these magical origins are what give shambling mounds their ability to produce poisons, which vary from region to region. For example, the toxins from a shambling mound along coastal beaches or swamps might appear milky white and smell sweet like manchineel trees. Meanwhile, shambling mounds found in rainforests might give off a heady, intoxicating sweet scent at night, luring victims in with beautiful pale blooms like angel’s trumpets and producing intense hallucinations for those unfortunate enough to become poisoned. But while their specific effects might change, each shambling mound’s toxins typically have the same aim: enervate their foes and then magically absorb that lost strength and vitality.`
		},
		{
			id: 'shambling-mound-info-2',
			name: 'Hearty Eaters',
			description: 'As a shambling mound drags their massive form through the undergrowth, they consume any organic matter they pass. What is more satisfying, however, is when they find a shadowed, overgrown place to lurk until the meal comes to them—a veritable feast for little effort. After a mound engulfs their prey, be they animal or adventurer, the meal-to-be is sealed in a sack of interwoven vines and leaves. This vegetative hunter can then sap the strength of those within to feast or empower itself.'
		},
		{
			id: 'shambling-mound-info-3',
			name: 'Verdant Core and Expansive Sprawl',
			description: `
When fighting a shambling mound, most attention is drawn to the cavernous chamber that holds their consumed victims. However, the shambling mound protects a smaller magic crux at their core with a knot of vines, leaves, and other natural defenses. The mound can expose this core to free up their form and become deadlier, thus opening themselves up to more potential harm.

One must also be wary of the area around a shambling mound. Their vines reach out far, the full extent of their form hidden among other flora until they strike.`
		}
	],
	malice: [
		FactoryLogic.feature.createMalice({
			id: 'shambling-mound-malice-1',
			name: 'Poisoned Vines',
			cost: 3,
			icon: StatBlockIcon.Self,
			sections: [
				'The shambling mound seeps noxious residue from their vines. The next time they use their Vine Lash ability before the end of their next turn, they deal an extra 12 poison damage to each target.'
			]
		}),
		FactoryLogic.feature.createMalice({
			id: 'shambling-mound-malice-2',
			name: 'Frenzy Lash',
			cost: 5,
			icon: StatBlockIcon.AuraBurst,
			sections: [
				'The shambling mound lashes out at each enemy within 10 squares of them, driving them back or into the air. Each target makes an **Agility test**.',
				FactoryLogic.createPowerRoll({
					characteristic: Characteristic.Agility,
					tier1: '7 шкоди; відштовхнути на 7 або вертикально відштовхнути на 3; скутий (рят. кидок закінчує)',
					tier2: '6 шкоди; відштовхнути на 5 або вертикально відштовхнути на 2',
					tier3: '3 шкоди'
				})
			]
		}),
		FactoryLogic.feature.createMalice({
			id: 'shambling-mound-malice-3',
			name: 'Solo Action',
			cost: 5,
			icon: StatBlockIcon.Villain,
			sections: [
				'The shambling mound takes an additional основна дія on their turn. They can use this feature even if they are dazed.'
			]
		}),
		FactoryLogic.feature.createMalice({
			id: 'shambling-mound-malice-4',
			name: 'Leeching Wilds',
			cost: 7,
			icon: StatBlockIcon.AuraBurst,
			sections: [
				'Until the end of the shambling mound’s next turn, the area within 10 squares of them is difficult terrain for enemies, and any enemy in the area takes a bane on power rolls. Any enemy who starts their turn in the area takes 4 acid damage, and the shambling mound regains an equal amount of Stamina.'
			]
		})
	],
	monsters: [
		FactoryLogic.createMonster({
			id: 'shambling-mound-1',
			name: 'Shambling Mound',
			level: 5,
			role: FactoryLogic.createMonsterRole(MonsterOrganizationType.Solo),
			keywords: ['Plant', 'Shambling Mound'],
			encounterValue: 84,
			size: FactoryLogic.createSize(3),
			speed: FactoryLogic.createSpeed(3),
			stamina: 400,
			stability: 5,
			freeStrikeDamage: 7,
			characteristics: FactoryLogic.createCharacteristics(4, -1, 0, 1, 0),
			features: [
				FactoryLogic.feature.createSoloMonster({
					id: 'shambling-mound-feature-1',
					name: 'the shambling mound',
					endEffect: 10
				}),
				FactoryLogic.feature.create({
					id: 'shambling-mound-feature-2',
					name: 'Engulfing Sack',
					description: 'The shambling mound has a vegetative sack on their body where they carry engulfed creatures. The sack has 30 Stamina, damage immunity 5, and fire weakness 10. Destroying the sack frees creatures trapped by the shambling mound’s Engulf ability. The shambling mound regrows a destroyed sack at the start of their next turn.'
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'shambling-mound-feature-3',
						name: 'Vine Lash',
						type: FactoryLogic.type.createMain(),
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [FactoryLogic.distance.createMelee(6)],
						target: 'Two creatures or objects',
						cost: 'signature',
						sections: [
							FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
								bonus: 4,
								tier1: '11 шкоди; Л<3 схоплений',
								tier2: '16 шкоди; Л<4 схоплений',
								tier3: '19 шкоди; схоплений'
							})),
							FactoryLogic.createAbilitySectionSpend({
								value: 2,
								effect: 'The shambling mound can slide each target up to 6 squares.'
							}),
							FactoryLogic.createAbilitySectionSpend({
								value: 3,
								effect: 'Each target takes 7 poison damage.'
							})
						]
					})
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'shambling-mound-feature-4',
						name: 'Seismic Slam',
						type: FactoryLogic.type.createMain(),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Weapon],
						distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 6 })],
						target: 'Кожен ворог у зоні',
						sections: [
							FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
								bonus: 4,
								tier1: '4 шкоди; С<2 приголомшений (рят. кидок закінчує)',
								tier2: '6 шкоди; С<3 приголомшений (рят. кидок закінчує)',
								tier3: '7 шкоди; С<4 приголомшений (рят. кидок закінчує)'
							}))
						]
					})
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'shambling-mound-feature-5',
						name: 'Engulf',
						type: FactoryLogic.type.createMain(),
						keywords: [AbilityKeyword.Melee],
						distance: [FactoryLogic.distance.createMelee(6)],
						target: 'Одна істота або предмет',
						cost: 2,
						sections: [
							FactoryLogic.createAbilitySectionText('The target must be size 1L or smaller. The shambling mound reaches out with writhing vines, and if the target has Л<3, they are engulfed into the shambling mound’s sack. If the target is grabbed by the shambling mound, the potency increases by 1. An engulfed creature is restrained, takes 3 poison damage at the start of each turn, and can’t take damage from abilities used from outside the sack. When the shambling mound moves, the engulfed creature moves with them. If the shambling mound dies or their sack is destroyed, each engulfed creature is freed and appears in an unoccupied space within 2 squares of the shambling mound.'),
							FactoryLogic.createAbilitySectionSpend({
								value: 2,
								repeatable: true,
								effect: 'The shambling mound can engulf one additional target for each 2 Malice spent.'
							})
						]
					})
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'shambling-mound-feature-6',
						name: 'Leech',
						type: FactoryLogic.type.createManeuver(),
						distance: [FactoryLogic.distance.createSelf()],
						target: 'Себе',
						sections: [
							FactoryLogic.createAbilitySectionText('Each creature engulfed by the shambling mound takes 5 poison damage. The shambling mound gains 5 temporary Stamina for each creature who takes damage this way.')
						]
					})
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'shambling-mound-feature-7',
						name: 'Tether Down',
						type: FactoryLogic.type.createTrigger('A creature within distance willingly moves.'),
						keywords: [AbilityKeyword.Melee],
						distance: [FactoryLogic.distance.createMelee(6)],
						target: 'The triggering creature',
						sections: [
							FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
								bonus: 4,
								tier1: '7 шкоди; С<2 скутий (до кінця ходу)',
								tier2: '12 шкоди; С<3 скутий (до кінця ходу)',
								tier3: '15 шкоди; С<4 скутий (до кінця ходу)'
							}))
						]
					})
				}),
				FactoryLogic.feature.create({
					id: 'shambling-mound-feature-8',
					name: 'False Appearance',
					description: 'While the shambling mound remains motionless, they are indistinguishable from ordinary vegetation.'
				}),
				FactoryLogic.feature.create({
					id: 'shambling-mound-feature-9',
					name: 'Frothing Flora',
					description: 'The area within 6 squares of the shambling mound is difficult terrain.'
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'shambling-mound-feature-10',
						name: 'Ravenous Overgrowth',
						type: FactoryLogic.type.createVillainAction(1),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Weapon],
						distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Line, value: 10, value2: 2, within: 1 })],
						target: 'All creatures in the line',
						sections: [
							FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
								bonus: 4,
								tier1: '7 шкоди; притягнути на 3',
								tier2: '12 шкоди; притягнути на 4; ціль має poison weakness 3 until the end of the encounter',
								tier3: '15 шкоди; притягнути на 6; ціль має poison вразливість до шкоди 5 until the end of the encounter'
							}))
						]
					})
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'shambling-mound-feature-11',
						name: 'Composting',
						type: FactoryLogic.type.createVillainAction(2),
						keywords: [AbilityKeyword.Melee],
						distance: [FactoryLogic.distance.createMelee(6)],
						target: 'Each enemy',
						sections: [
							FactoryLogic.createAbilitySectionText('The shambling mound uses Engulf against each target without spending Malice.')
						]
					})
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'shambling-mound-feature-12',
						name: 'Exposed Crux',
						type: FactoryLogic.type.createVillainAction(3),
						distance: [FactoryLogic.distance.createSelf()],
						target: 'Себе',
						sections: [
							FactoryLogic.createAbilitySectionText('The shambling mound rips themself apart, exposing the crux of magic holding them together. The distance of the shambling mound’s melee abilities increases to melee 10, the creature has a double edge on power rolls, and strikes made against them gain an edge.')
						]
					})
				})
			]
		})
	],
	addOns: []
};
