import { Feature, FeatureAbilityCostData, FeatureAbilityDamage, FeatureAbilityDamageData, FeatureAbilityData, FeatureAbilityDistanceData, FeatureAddOnData, FeatureAncestryChoiceData, FeatureAncestryFeatureChoiceData, FeatureBonus, FeatureBonusData, FeatureCharacteristicBonusData, FeatureChoiceData, FeatureClassAbilityData, FeatureCompanionData, FeatureConditionImmunityData, FeatureDamageModifierData, FeatureDomainData, FeatureDomainFeatureData, FeatureFixtureData, FeatureFollowerData, FeatureHeroicResourceData, FeatureHeroicResourceGainData, FeatureItemChoiceData, FeatureKitData, FeatureLanguageChoiceData, FeatureLanguageData, FeatureMaliceAbilityData, FeatureMaliceData, FeatureMovementModeData, FeatureMultipleData, FeaturePackageContentData, FeaturePackageData, FeaturePerkData, FeatureProficiencyData, FeatureRetainerData, FeatureSaveThresholdData, FeatureSizeData, FeatureSkillChoiceData, FeatureSpeedData, FeatureSummonChoiceData, FeatureSummonData, FeatureTaggedFeatureChoiceData, FeatureTaggedFeatureData, FeatureTitleChoiceData } from '@/models/feature';
import { AbilityKeyword } from '@/enums/ability-keyword';
import { AbilityUsage } from '@/enums/ability-usage';
import { Ancestry } from '@/models/ancestry';
import { Career } from '@/models/career';
import { Characteristic } from '@/enums/characteristic';
import { Collections } from '@/utils/collections';
import { Complication } from '@/models/complication';
import { Culture } from '@/models/culture';
import { DamageType } from '@/enums/damage-type';
import { FactoryLogic } from '@/logic/factory-logic';
import { FeatureAddOnType } from '@/enums/feature-addon-type';
import { FeatureField } from '@/enums/feature-field';
import { FeatureType } from '@/enums/feature-type';
import { FollowerType } from '@/enums/follower-type';
import { Hero } from '@/models/hero';
import { HeroClass } from '@/models/class';
import { HeroLogic } from '@/logic/hero-logic';
import { Item } from '@/models/item';
import { ItemType } from '@/enums/item-type';
import { MonsterFeatureCategory } from '@/enums/monster-feature-category';
import { MonsterRoleType } from '@/enums/monster-role-type';
import { TerrainRoleType } from '@/enums/terrain-role-type';
import { Utils } from '@/utils/utils';

export class FeatureLogic {
	static getFeaturesFromAncestry = (ancestry: Ancestry, hero: Hero) => {
		const features: { feature: Feature, source: string }[] = [];

		features.push(...ancestry.features.map(f => ({ feature: f, source: ancestry.name })));

		return FeatureLogic.simplifyFeatures(features, hero);
	};

	static getFeaturesFromCulture = (culture: Culture, hero: Hero) => {
		const features: { feature: Feature, source: string }[] = [];

		features.push({
			feature: culture.language,
			source: culture.name
		});

		if (culture.environment) {
			features.push({ feature: culture.environment, source: culture.name });
		}
		if (culture.organization) {
			features.push({ feature: culture.organization, source: culture.name });
		}
		if (culture.upbringing) {
			features.push({ feature: culture.upbringing, source: culture.name });
		}

		features.push({
			feature: FactoryLogic.feature.create({
				id: `${culture.name.toLocaleLowerCase().replaceAll(' ', '-')}-culture-lore-influence`,
				name: `${culture.name} Culture`.trim(),
				description: 'You gain an edge on tests made to recall lore about your culture, and on tests made to influence and interact with people of your culture.'
			}),
			source: culture.name
		});

		return FeatureLogic.simplifyFeatures(features, hero);
	};

	static getFeaturesFromCareer = (career: Career, hero: Hero) => {
		const features: { feature: Feature, source: string }[] = [];

		features.push(...career.features.map(f => ({ feature: f, source: career.name })));

		return FeatureLogic.simplifyFeatures(features, hero);
	};

	static getFeaturesFromClass = (heroClass: HeroClass, hero: Hero) => {
		const features: { feature: Feature, source: string, level: number }[] = [];

		const classLevel = heroClass.level;

		heroClass.featuresByLevel.forEach(lvl => {
			if (lvl.level <= classLevel) {
				features.push(...lvl.features.map(f => ({ feature: f, source: heroClass.name, level: lvl.level })));
			}
		});

		heroClass.subclasses
			.filter(sc => sc.selected)
			.forEach(sc => {
				sc.featuresByLevel.forEach(lvl => {
					if (lvl.level <= classLevel) {
						features.push(...lvl.features.map(f => ({ feature: f, source: sc.name, level: lvl.level })));
					}
				});
			});

		return FeatureLogic.simplifyFeatures(features, hero);
	};

	static getFeaturesFromComplication = (complication: Complication, hero: Hero) => {
		const features: { feature: Feature, source: string }[] = [];

		features.push(...complication.features.map(f => ({ feature: f, source: complication.name })));

		return FeatureLogic.simplifyFeatures(features, hero);
	};

	static getFeaturesFromCustomization = (hero: Hero) => {
		const features: { feature: Feature, source: string }[] = [];

		features.push(...hero.features.map(f => {
			let source = 'Customization';
			switch (f.type) {
				case FeatureType.TitleChoice:
					source = f.data.selected.length === 1 ? f.data.selected[0].name : 'Title';
					break;
				case FeatureType.Companion:
				case FeatureType.Follower:
					source = 'Follower';
					break;
			}
			return ({ feature: f, source: source });
		}));

		return FeatureLogic.simplifyFeatures(features, hero);
	};

	static getFeaturesFromItem = (item: Item, hero: Hero) => {
		const features: { feature: Feature, source: string }[] = [];

		const ft = FactoryLogic.feature.create({
			id: item.id,
			name: item.count === 1 ? item.name : `${item.name} x${item.count}`,
			description: item.effect || item.description
		});
		features.push({ feature: ft, source: item.name });

		const heroLevel = hero.class?.level || 1;
		item.featuresByLevel
			.filter(lvl => lvl.level <= heroLevel)
			.forEach(lvl => {
				lvl.features.forEach(f => {
					if (f.type === FeatureType.Text) {
						if (f.description) {
							if (f.name) {
								ft.description += '\n\n';
								ft.description += `**${f.name}**`;
							}
							ft.description += '\n\n';
							ft.description += f.description;
						}
					} else {
						features.push({ feature: f, source: item.name });
					}
				});
			});

		item.imbuements.map(imbuement => imbuement.feature)
			.forEach(feature => {
				if (feature.type === FeatureType.Text) {
					if (feature.description) {
						if (feature.name) {
							ft.description += '\n\n';
							ft.description += `**${feature.name}**`;
						}
						ft.description += '\n\n';
						ft.description += feature.description;
					}
				} else {
					features.push({ feature: feature, source: item.name });
				}
			});

		const hasLvl1 = item.imbuements.filter(lvl => lvl.level === 1).length > 0;
		const hasLvl5 = item.imbuements.filter(lvl => lvl.level === 5).length > 0;
		const hasLvl9 = item.imbuements.filter(lvl => lvl.level === 9).length > 0;
		if (item.type === ItemType.ImbuedArmor) {
			// Imbued armor grants +6 / +12 / +21 stamina based on highest enhancement tier
			if (hasLvl1) {
				features.push({
					feature: FactoryLogic.feature.createBonus({
						id: item.name + '-bonus-1',
						field: FeatureField.Stamina,
						value: 6
					}),
					source: item.name
				});
			}
			if (hasLvl5) {
				features.push({
					feature: FactoryLogic.feature.createBonus({
						id: item.name + '-bonus-5',
						field: FeatureField.Stamina,
						value: 6
					}),
					source: item.name
				});
			}
			if (hasLvl9) {
				features.push({
					feature: FactoryLogic.feature.createBonus({
						id: item.name + '-bonus-9',
						field: FeatureField.Stamina,
						value: 9
					}),
					source: item.name
				});
			}
		}
		if (item.type === ItemType.ImbuedImplement) {
			// Imbued implement grants +1 / +2 / +3 damage to magic / psionic abilities based on highest enhancement tier
			if (hasLvl1) {
				features.push({
					feature: FactoryLogic.feature.createAbilityDamage({
						id: item.name + '-bonus-1a',
						keywords: [AbilityKeyword.Magic],
						value: 1
					}),
					source: item.name
				});
				features.push({
					feature: FactoryLogic.feature.createAbilityDamage({
						id: item.name + '-bonus-1b',
						keywords: [AbilityKeyword.Psionic],
						value: 1
					}),
					source: item.name
				});
			}
			if (hasLvl5) {
				features.push({
					feature: FactoryLogic.feature.createAbilityDamage({
						id: item.name + '-bonus-5a',
						keywords: [AbilityKeyword.Magic],
						value: 1
					}),
					source: item.name
				});
				features.push({
					feature: FactoryLogic.feature.createAbilityDamage({
						id: item.name + '-bonus-5b',
						keywords: [AbilityKeyword.Psionic],
						value: 1
					}),
					source: item.name
				});
			}
			if (hasLvl9) {
				features.push({
					feature: FactoryLogic.feature.createAbilityDamage({
						id: item.name + '-bonus-9a',
						keywords: [AbilityKeyword.Magic],
						value: 1
					}),
					source: item.name
				});
				features.push({
					feature: FactoryLogic.feature.createAbilityDamage({
						id: item.name + '-bonus-9b',
						keywords: [AbilityKeyword.Psionic],
						value: 1
					}), source: item.name
				});
			}
		}
		if (item.type === ItemType.ImbuedWeapon) {
			// Imbued weapon grants +1 / +2 / +3 damage to weapon abilities based on highest enhancement tier
			if (hasLvl1) {
				features.push({
					feature: FactoryLogic.feature.createAbilityDamage({
						id: item.name + '-bonus-1',
						keywords: [AbilityKeyword.Weapon],
						value: 1
					}),
					source: item.name
				});
			}
			if (hasLvl5) {
				features.push({
					feature: FactoryLogic.feature.createAbilityDamage({
						id: item.name + '-bonus-5',
						keywords: [AbilityKeyword.Weapon],
						value: 1
					}),
					source: item.name
				});
			}
			if (hasLvl9) {
				features.push({
					feature: FactoryLogic.feature.createAbilityDamage({
						id: item.name + '-bonus-9',
						keywords: [AbilityKeyword.Weapon],
						value: 1
					}),
					source: item.name
				});
			}
		}

		return FeatureLogic.simplifyFeatures(features, hero);
	};

	static simplifyFeatures = (features: { feature: Feature, source: string, level?: number }[], hero: Hero) => {
		const list: { feature: Feature, source: string, level?: number }[] = [];

		const addFeature = (feature: Feature, source: string, level?: number) => {
			if (!feature) {
				return;
			}

			list.push({ feature: feature, source: source, level: level });

			switch (feature.type) {
				case FeatureType.AncestryFeatureChoice:
					if (feature.data.selected) {
						addFeature(feature.data.selected, source, level);
					}
					break;
				case FeatureType.Choice:
					feature.data.selected.forEach(f => addFeature(f, source, level));
					break;
				case FeatureType.Domain:
					feature.data.selected.forEach(d => {
						if (d.defaultFeatures) {
							d.defaultFeatures.forEach(f => addFeature(f, `${d.name} Domain`, level));
						}
					});
					break;
				case FeatureType.DomainFeature:
					feature.data.selected.forEach(f => addFeature(f, source, level));
					break;
				case FeatureType.ItemChoice:
					feature.data.selected.forEach(item => FeatureLogic.getFeaturesFromItem(item, hero).forEach(f => addFeature(f.feature, f.source, level)));
					break;
				case FeatureType.Kit:
					feature.data.selected.forEach(kit => kit.features.forEach(f => addFeature(f, kit.name, level)));
					break;
				case FeatureType.Multiple:
					feature.data.features.forEach(f => addFeature(f, source, level));
					break;
				case FeatureType.Perk:
					feature.data.selected.forEach(f => addFeature(f, source, level));
					break;
				case FeatureType.TaggedFeatureChoice:
					feature.data.selected.forEach(f => addFeature(f, source, level));
					break;
				case FeatureType.TitleChoice:
					feature.data.selected.forEach(title => title.features.filter(f => f.id === title.selectedFeatureID).forEach(f => addFeature(f, source, level)));
					break;
			}
		};

		features.forEach(f => addFeature(f.feature, f.source, f.level));

		return list;
	};

	// Combine Features that do the 'same thing' - e.g. multiple Stamina bonuses into one
	static reduceFeatures = (features: Feature[]): Feature[] => {
		const reduced: Feature[] = [];

		features.forEach(f => {
			switch (f.type) {
				case FeatureType.Bonus: {
					const match = reduced.find(m => m.type === FeatureType.Bonus
						&& this.matchDataFields(m.data, f.data, ['field']));
					if (match) {
						(match as FeatureBonus).data.value += f.data.value;
					} else {
						reduced.push(Utils.copy(f));
					}
					break;
				}
				case FeatureType.AbilityDamage: {
					const match = reduced.find(m => m.type === FeatureType.AbilityDamage
						&& this.matchDataFields(m.data, f.data, ['damageType', 'keywords']));
					if (match) {
						(match as FeatureAbilityDamage).data.value += f.data.value;
					} else {
						reduced.push(Utils.copy(f));
					}
					break;
				}
				default:
					reduced.push(Utils.copy(f));
					break;
			}
		});

		return reduced;
	};

	static matchDataFields<T>(a: T, b: T, fields: string[]): boolean {
		return fields.every(field => {
			if (Object.prototype.hasOwnProperty.call(a, field)
				&& Object.prototype.hasOwnProperty.call(b, field)) {
				const aField = a[field as keyof T];
				const bField = b[field as keyof T];

				if (aField instanceof Array && bField instanceof Array) {
					return aField.every(x => bField.includes(x));
				} else {
					return aField === bField;
				}
			} else {
				return false;
			}
		});
	};

	static switchFeatureCharacteristic = (feature: Feature, fromCharacteristic: Characteristic, toCharacteristic: Characteristic) => {
		const fromStr = fromCharacteristic.toString();
		const toStr = toCharacteristic.toString();

		const fromChar = fromStr[0];
		const toChar = toStr[0];

		feature.description = feature.description.replaceAll(fromStr, toStr);

		switch (feature.type) {
			case FeatureType.Ability:
				feature.data.ability.sections.forEach(s => {
					switch (s.type) {
						case 'text':
							s.text = s.text.replaceAll(fromStr, toStr);
							break;
						case 'field':
							s.effect = s.effect.replaceAll(fromStr, toStr);
							break;
						case 'roll':
							s.roll.characteristic = [toCharacteristic];
							s.roll.tier1 = s.roll.tier1.replaceAll(fromStr, toStr);
							s.roll.tier1 = s.roll.tier1.replaceAll(`+ ${fromChar}`, `+ ${toChar}`);
							s.roll.tier2 = s.roll.tier2.replaceAll(fromStr, toStr);
							s.roll.tier2 = s.roll.tier2.replaceAll(`+ ${fromChar}`, `+ ${toChar}`);
							s.roll.tier3 = s.roll.tier3.replaceAll(fromStr, toStr);
							s.roll.tier3 = s.roll.tier3.replaceAll(`+ ${fromChar}`, `+ ${toChar}`);
							break;
					}
				});
				break;
			case FeatureType.Choice:
				[...feature.data.options.map(f => f.feature), ...feature.data.selected]
					.forEach(f => FeatureLogic.switchFeatureCharacteristic(f, fromCharacteristic, toCharacteristic));
				break;
			case FeatureType.Multiple:
				feature.data.features.forEach(f => FeatureLogic.switchFeatureCharacteristic(f, fromCharacteristic, toCharacteristic));
				break;
		}
	};

	///////////////////////////////////////////////////////////////////////////

	static getSelectableFeatureTypes = () => {
		return [
			FeatureType.Text,
			FeatureType.Ability,
			FeatureType.AbilityCost,
			FeatureType.AbilityDamage,
			FeatureType.AbilityDistance,
			FeatureType.AncestryChoice,
			FeatureType.AncestryFeatureChoice,
			FeatureType.Bonus,
			FeatureType.CharacteristicBonus,
			FeatureType.Choice,
			FeatureType.ClassAbility,
			FeatureType.Companion,
			FeatureType.ConditionImmunity,
			FeatureType.DamageModifier,
			FeatureType.Domain,
			FeatureType.DomainFeature,
			FeatureType.Follower,
			FeatureType.HeroicResource,
			FeatureType.HeroicResourceGain,
			FeatureType.ItemChoice,
			FeatureType.Kit,
			FeatureType.Language,
			FeatureType.LanguageChoice,
			FeatureType.MovementMode,
			FeatureType.Multiple,
			FeatureType.Package,
			FeatureType.PackageContent,
			FeatureType.Perk,
			FeatureType.Proficiency,
			FeatureType.Retainer,
			FeatureType.SaveThreshold,
			FeatureType.Size,
			FeatureType.SkillChoice,
			FeatureType.Speed,
			FeatureType.Summon,
			FeatureType.TaggedFeature,
			FeatureType.TaggedFeatureChoice,
			FeatureType.TitleChoice
		];
	};

	static getFeatureData = (type: FeatureType) => {
		switch (type) {
			case FeatureType.Ability: {
				const data: FeatureAbilityData = {
					ability: FactoryLogic.createAbility({
						id: Utils.guid(),
						name: '',
						description: '',
						type: FactoryLogic.type.createMain(),
						distance: [FactoryLogic.distance.createMelee()],
						target: '',
						sections: []
					})
				};
				return data;
			}
			case FeatureType.AbilityCost: {
				const data: FeatureAbilityCostData = {
					keywords: [],
					modifier: -1
				};
				return data;
			}
			case FeatureType.AbilityDamage: {
				const data: FeatureAbilityDamageData = {
					keywords: [],
					value: 0,
					valueFromController: null,
					valueCharacteristics: [],
					valueCharacteristicMultiplier: 1,
					valuePerLevel: 0,
					valuePerEchelon: 0,
					damageType: DamageType.Damage
				};
				return data;
			}
			case FeatureType.AbilityDistance: {
				const data: FeatureAbilityDistanceData = {
					keywords: [],
					value: 0,
					valueFromController: null,
					valueCharacteristics: [],
					valueCharacteristicMultiplier: 1,
					valuePerLevel: 0,
					valuePerEchelon: 0
				};
				return data;
			}
			case FeatureType.AddOn: {
				const data: FeatureAddOnData = {
					category: FeatureAddOnType.Defensive,
					cost: 1
				};
				return data;
			}
			case FeatureType.AncestryChoice: {
				const data: FeatureAncestryChoiceData = {
					selected: null
				};
				return data;
			}
			case FeatureType.AncestryFeatureChoice: {
				const data: FeatureAncestryFeatureChoiceData = {
					source: {
						current: true,
						former: true,
						customID: ''
					},
					value: 1,
					selected: null
				};
				return data;
			}
			case FeatureType.Bonus: {
				const data: FeatureBonusData = {
					field: FeatureField.Recoveries,
					value: 0,
					valueFromController: null,
					valueCharacteristics: [],
					valueCharacteristicMultiplier: 1,
					valuePerLevel: 0,
					valuePerEchelon: 0
				};
				return data;
			}
			case FeatureType.CharacteristicBonus: {
				const data: FeatureCharacteristicBonusData = {
					characteristic: Characteristic.Might,
					value: 1
				};
				return data;
			}
			case FeatureType.Choice: {
				const data: FeatureChoiceData = {
					options: [],
					count: 1,
					selected: []
				};
				return data;
			}
			case FeatureType.ClassAbility: {
				const data: FeatureClassAbilityData = {
					classID: undefined,
					cost: 1,
					count: 1,
					source: {
						fromClassAbilities: true,
						fromSelectedSubclassAbilities: true,
						fromUnselectedSubclassAbilities: false,
						fromClassLevels: false,
						fromSelectedSubclassLevels: false,
						fromUnselectedSubclassLevels: false
					},
					minLevel: 1,
					selectedIDs: []
				};
				return data;
			}
			case FeatureType.Companion: {
				const data: FeatureCompanionData = {
					selected: null
				};
				return data;
			}
			case FeatureType.ConditionImmunity: {
				const data: FeatureConditionImmunityData = {
					conditions: []
				};
				return data;
			}
			case FeatureType.DamageModifier: {
				const data: FeatureDamageModifierData = {
					modifiers: []
				};
				return data;
			}
			case FeatureType.Domain: {
				const data: FeatureDomainData = {
					characteristic: Characteristic.Intuition,
					levels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
					count: 1,
					selected: []
				};
				return data;
			}
			case FeatureType.DomainFeature: {
				const data: FeatureDomainFeatureData = {
					level: 1,
					count: 1,
					selected: []
				};
				return data;
			}
			case FeatureType.Fixture: {
				const data: FeatureFixtureData = {
					fixture: {
						id: Utils.guid(),
						name: '',
						description: '',
						role: FactoryLogic.createTerrainRole(MonsterRoleType.NoRole, TerrainRoleType.Hazard),
						baseStamina: 20,
						size: FactoryLogic.createSize(2),
						featuresByLevel: [
							{
								level: 1,
								features: []
							},
							{
								level: 2,
								features: []
							},
							{
								level: 3,
								features: []
							},
							{
								level: 4,
								features: []
							},
							{
								level: 5,
								features: []
							},
							{
								level: 6,
								features: []
							},
							{
								level: 7,
								features: []
							},
							{
								level: 8,
								features: []
							},
							{
								level: 9,
								features: []
							},
							{
								level: 10,
								features: []
							}
						]
					}
				};
				return data;
			}
			case FeatureType.Follower: {
				const data: FeatureFollowerData = {
					follower: FactoryLogic.createFollower(FollowerType.Artisan)
				};
				return data;
			}
			case FeatureType.HeroicResource: {
				const data: FeatureHeroicResourceData = {
					type: 'heroic',
					gains: [],
					details: '',
					canBeNegative: false,
					value: 0
				};
				return data;
			}
			case FeatureType.HeroicResourceGain: {
				const data: FeatureHeroicResourceGainData = {
					tag: '',
					trigger: '',
					value: '1',
					replacesTags: []
				};
				return data;
			}
			case FeatureType.ItemChoice: {
				const data: FeatureItemChoiceData = {
					types: [],
					count: 1,
					selected: []
				};
				return data;
			}
			case FeatureType.Kit: {
				const data: FeatureKitData = {
					types: [],
					count: 1,
					selected: []
				};
				return data;
			}
			case FeatureType.Language: {
				const data: FeatureLanguageData = {
					language: ''
				};
				return data;
			}
			case FeatureType.LanguageChoice: {
				const data: FeatureLanguageChoiceData = {
					options: [],
					count: 1,
					selected: []
				};
				return data;
			}
			case FeatureType.MovementMode: {
				const data: FeatureMovementModeData = {
					mode: ''
				};
				return data;
			}
			case FeatureType.Malice: {
				const data: FeatureMaliceData = {
					cost: 3,
					repeatable: false,
					sections: [''],
					echelon: 1,
					icon: undefined
				};
				return data;
			}
			case FeatureType.MaliceAbility: {
				const data: FeatureMaliceAbilityData = {
					ability: FactoryLogic.createAbility({
						id: Utils.guid(),
						name: '',
						description: '',
						type: FactoryLogic.type.createMain(),
						distance: [FactoryLogic.distance.createMelee()],
						target: '',
						sections: []
					}),
					echelon: 1
				};
				return data;
			}
			case FeatureType.Multiple: {
				const data: FeatureMultipleData = {
					features: []
				};
				return data;
			}
			case FeatureType.Package: {
				const data: FeaturePackageData = {
					tag: ''
				};
				return data;
			}
			case FeatureType.PackageContent: {
				const data: FeaturePackageContentData = {
					tag: ''
				};
				return data;
			}
			case FeatureType.Perk: {
				const data: FeaturePerkData = {
					lists: [],
					count: 1,
					selected: []
				};
				return data;
			}
			case FeatureType.Proficiency: {
				const data: FeatureProficiencyData = {
					weapons: [],
					armor: []
				};
				return data;
			}
			case FeatureType.Retainer: {
				const data: FeatureRetainerData = {
					selected: null
				};
				return data;
			}
			case FeatureType.SaveThreshold: {
				const data: FeatureSaveThresholdData = {
					value: 5
				};
				return data;
			}
			case FeatureType.Size: {
				const data: FeatureSizeData = {
					size: {
						value: 1,
						mod: 'M'
					}
				};
				return data;
			}
			case FeatureType.SkillChoice: {
				const data: FeatureSkillChoiceData = {
					options: [],
					listOptions: [],
					count: 1,
					selected: []
				};
				return data;
			}
			case FeatureType.Speed: {
				const data: FeatureSpeedData = {
					speed: 5
				};
				return data;
			}
			case FeatureType.Summon: {
				const data: FeatureSummonData = {
					summons: []
				};
				return data;
			}
			case FeatureType.SummonChoice: {
				const data: FeatureSummonChoiceData = {
					options: [],
					count: 1,
					selected: []
				};
				return data;
			}
			case FeatureType.TaggedFeature: {
				const data: FeatureTaggedFeatureData = {
					tag: '',
					feature: FactoryLogic.feature.create({
						id: Utils.guid(),
						name: '',
						description: ''
					})
				};
				return data;
			}
			case FeatureType.TaggedFeatureChoice: {
				const data: FeatureTaggedFeatureChoiceData = {
					tag: '',
					count: 1,
					selected: []
				};
				return data;
			}
			case FeatureType.TitleChoice: {
				const data: FeatureTitleChoiceData = {
					echelon: 1,
					count: 1,
					selected: []
				};
				return data;
			}
		}

		return null;
	};

	///////////////////////////////////////////////////////////////////////////

	static isChoice = (feature: Feature) => {
		switch (feature.type) {
			case FeatureType.AncestryChoice:
			case FeatureType.AncestryFeatureChoice:
			case FeatureType.Choice:
			case FeatureType.ClassAbility:
			case FeatureType.Companion:
			case FeatureType.Domain:
			case FeatureType.DomainFeature:
			case FeatureType.ItemChoice:
			case FeatureType.Kit:
			case FeatureType.LanguageChoice:
			case FeatureType.Perk:
			case FeatureType.Retainer:
			case FeatureType.SkillChoice:
			case FeatureType.SummonChoice:
			case FeatureType.TaggedFeatureChoice:
			case FeatureType.TitleChoice:
				return true;
		};

		return false;
	};

	static isChosen = (feature: Feature, hero: Hero) => {
		switch (feature.type) {
			case FeatureType.AncestryChoice:
				return !!feature.data.selected;
			case FeatureType.AncestryFeatureChoice:
				return !!feature.data.selected;
			case FeatureType.Choice: {
				let availableOptions = [...feature.data.options];
				if (availableOptions.some(opt => opt.feature.type === FeatureType.AncestryFeatureChoice)) {
					availableOptions = availableOptions.filter(opt => opt.feature.type !== FeatureType.AncestryFeatureChoice);
					const additionalOptions = HeroLogic.getFormerAncestries(hero)
						.flatMap(a => a.features)
						.filter(f => f.type === FeatureType.Choice)
						.flatMap(f => f.data.options)
						.filter(opt => opt.feature.type !== FeatureType.AncestryFeatureChoice);
					availableOptions.push(...additionalOptions);
				}
				const selected = feature.data.selected
					.map(f => availableOptions.find(opt => opt.feature.id === f.id))
					.filter(opt => !!opt);
				const count = feature.data.count === 'ancestry' ? HeroLogic.getAncestryPoints(hero) : feature.data.count;
				return Collections.sum(selected, i => i.value) >= count;
			}
			case FeatureType.ClassAbility:
				return feature.data.selectedIDs.length >= feature.data.count;
			case FeatureType.Companion:
				return feature.data.selected !== null;
			case FeatureType.Domain:
				return feature.data.selected.length >= feature.data.count;
			case FeatureType.DomainFeature:
				return feature.data.selected.length >= feature.data.count;
			case FeatureType.ItemChoice:
				return feature.data.selected.length >= feature.data.count;
			case FeatureType.Kit:
				return feature.data.selected.length >= feature.data.count;
			case FeatureType.LanguageChoice:
				return feature.data.selected.length >= feature.data.count;
			case FeatureType.Perk:
				return feature.data.selected.length >= feature.data.count;
			case FeatureType.Retainer:
				return feature.data.selected !== null;
			case FeatureType.SkillChoice:
				return feature.data.selected.length >= feature.data.count;
			case FeatureType.SummonChoice:
				return feature.data.selected.length >= feature.data.count;
			case FeatureType.TaggedFeatureChoice:
				return feature.data.selected.length >= feature.data.count;
			case FeatureType.TitleChoice:
				return feature.data.selected.length >= feature.data.count;
		};

		return true;
	};

	///////////////////////////////////////////////////////////////////////////

	static getFeatureTag = (feature: Feature) => {
		if (feature.type === FeatureType.Ability) {
			if (feature.data.ability.cost === 'signature') {
				return 'Signature';
			}

			return feature.data.ability.type.usage;
		}

		return feature.type;
	};

	static getFeatureCategory = (feature: Feature) => {
		switch (feature.type) {
			case FeatureType.Ability:
				if (feature.data.ability.cost === 'signature') {
					return MonsterFeatureCategory.Signature;
				}
				switch (feature.data.ability.type.usage) {
					case AbilityUsage.MainAction:
						return MonsterFeatureCategory.Action;
					case AbilityUsage.Maneuver:
						return MonsterFeatureCategory.Maneuver;
					case AbilityUsage.Trigger:
						return MonsterFeatureCategory.Trigger;
				}
				return MonsterFeatureCategory.Other;
			case FeatureType.ConditionImmunity:
			case FeatureType.DamageModifier:
				return MonsterFeatureCategory.DamageMod;
		}

		return MonsterFeatureCategory.Text;
	};

	static getFeatureTypeDescription = (type: FeatureType) => {
		switch (type) {
			case FeatureType.Ability:
				return 'Ця особливість надає здібність.';
			case FeatureType.AbilityCost:
				return 'Ця особливість змінює вартість використання здібності.';
			case FeatureType.AbilityDamage:
				return 'Ця особливість змінює шкоду здібності.';
			case FeatureType.AbilityDistance:
				return 'Ця особливість змінює дальність здібності.';
			case FeatureType.AddOn:
				return 'Ця особливість надає налаштування монстра.';
			case FeatureType.AncestryChoice:
				return 'Ця особливість встановлює попередню належність героя.';
			case FeatureType.AncestryFeatureChoice:
				return 'Ця особливість дозволяє вибрати особливість із походження.';
			case FeatureType.Bonus:
				return 'Ця особливість змінює показник.';
			case FeatureType.CharacteristicBonus:
				return 'Ця особливість змінює характеристику.';
			case FeatureType.Choice:
				return 'Ця особливість дозволяє вибрати з набору особливостей.';
			case FeatureType.ClassAbility:
				return 'Ця особливість дозволяє вибрати здібність свого класу.';
			case FeatureType.Companion:
				return 'Ця особливість надає компаньйона або верхову тварину.';
			case FeatureType.ConditionImmunity:
				return 'Ця особливість надає імунітет до одного або кількох типів станів.';
			case FeatureType.DamageModifier:
				return 'Ця особливість надає імунітет або вразливість.';
			case FeatureType.Domain:
				return 'Ця особливість дозволяє обрати домен.';
			case FeatureType.DomainFeature:
				return 'Ця особливість дозволяє вибрати особливість із домену.';
			case FeatureType.Fixture:
				return 'Ця особливість дозволяє викликати фіксований обʼєкт.';
			case FeatureType.Follower:
				return 'Ця особливість надає прибічника.';
			case FeatureType.HeroicResource:
				return 'Ця особливість надає героїчний (або епічний) ресурс.';
			case FeatureType.HeroicResourceGain:
				return 'Ця особливість надає спосіб отримувати героїчний ресурс.';
			case FeatureType.ItemChoice:
				return 'Ця особливість дозволяє обрати предмет.';
			case FeatureType.Kit:
				return 'Ця особливість дозволяє обрати набір.';
			case FeatureType.Language:
				return 'Ця особливість надає мову.';
			case FeatureType.LanguageChoice:
				return 'Ця особливість дозволяє обрати мову.';
			case FeatureType.Malice:
				return 'Ця особливість надає ефект злоби.';
			case FeatureType.MaliceAbility:
				return 'Ця особливість надає злосну здібність.';
			case FeatureType.MovementMode:
				return 'Ця особливість додає додатковий режим руху.';
			case FeatureType.Multiple:
				return 'Ця особливість надає набір особливостей.';
			case FeatureType.Package:
				return 'Ця особливість обʼєднує вміст інших особливостей.';
			case FeatureType.PackageContent:
				return 'Ця особливість забезпечує вміст для пакету.';
			case FeatureType.Perk:
				return 'Ця особливість дозволяє обрати перевагу.';
			case FeatureType.Proficiency:
				return 'Ця особливість надає майстерність у використанні зброї або броні.';
			case FeatureType.Retainer:
				return 'Ця особливість надає ретейнера.';
			case FeatureType.SaveThreshold:
				return 'Ця особливість змінює поріг для рятувальних кидків.';
			case FeatureType.Size:
				return 'Ця особливість встановлює ваш розмір.';
			case FeatureType.SkillChoice:
				return 'Ця особливість дозволяє обрати навичку.';
			case FeatureType.Speed:
				return 'Ця особливість встановлює вашу базову швидкість.';
			case FeatureType.Summon:
				return 'Ця особливість визначає монстрів, яких можна викликати.';
			case FeatureType.SummonChoice:
				return 'Ця особливість дозволяє вибрати монстрів для виклику.';
			case FeatureType.TaggedFeature:
				return 'Ця особливість описує позначену особливість.';
			case FeatureType.TaggedFeatureChoice:
				return 'Ця особливість дозволяє вибрати позначену особливість.';
			case FeatureType.Text:
				return 'Ця особливість не має особливих властивостей, лише текстовий опис.';
			case FeatureType.TitleChoice:
				return 'Ця особливість дозволяє обрати титул.';
		}
	};
}
