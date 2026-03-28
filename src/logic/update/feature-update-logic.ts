import { AbilityUpdateLogic } from '@/logic/update/ability-update-logic';
import { Characteristic } from '@/enums/characteristic';
import { Feature } from '@/models/feature';
import { FeatureType } from '@/enums/feature-type';
import { ItemUpdateLogic } from '@/logic/update/item-update-logic';
import { normalizeSkillNames } from '@/utils/skill-names';

export class FeatureUpdateLogic {
	private static readonly featureNameSuffixMap: Record<string, string> = {
		Skill: 'Навичка',
		Skills: 'Навички',
		Perk: 'Перевага'
	};

	private static readonly featureNameGroupMap: Record<string, string> = {
		Crafting: 'Ремесло',
		Exploration: 'Дослідження',
		Interpersonal: 'Міжособистісні',
		Intrigue: 'Інтриги',
		Lore: 'Знання',
		Supernatural: 'Надприродне',
		Special: 'Особливе',
		Ремесло: 'Ремесло',
		Дослідження: 'Дослідження',
		Міжособистісні: 'Міжособистісні',
		Інтриги: 'Інтриги',
		Знання: 'Знання',
		Надприродне: 'Надприродне',
		Особливе: 'Особливе'
	};

	static normalizeFeatureName = (name: string) => {
		const trimmedName = name.trim();
		const exactMatch = FeatureUpdateLogic.featureNameSuffixMap[trimmedName];
		if (exactMatch) {
			return exactMatch;
		}

		if (/^signature ability$/i.test(trimmedName)) {
			return 'Фірмова навичка';
		}

		const pointAbilityMatch = /^(?<cost>\d+)\s*pt\s+ability$/i.exec(trimmedName);
		if (pointAbilityMatch?.groups) {
			return `${pointAbilityMatch.groups.cost}-очкова навичка`;
		}

		const match = /^(?<groups>.+?)\s+(?<suffix>Skill|Skills|Perk)$/.exec(trimmedName);
		if (!match?.groups) {
			return name;
		}

		const suffix = FeatureUpdateLogic.featureNameSuffixMap[match.groups.suffix];
		const groups = match.groups.groups
			.split('/')
			.map(group => group.trim())
			.map(group => FeatureUpdateLogic.featureNameGroupMap[group]);

		if (groups.some(group => !group)) {
			return name;
		}

		return `${suffix} ${groups.join('/')}`;
	};

	static updateFeature = (feature: Feature) => {
		feature.name = FeatureUpdateLogic.normalizeFeatureName(feature.name);

		switch (feature.type) {
			case FeatureType.Ability:
				AbilityUpdateLogic.updateAbility(feature.data.ability);
				break;
			case FeatureType.Bonus:
				if (feature.data.valueCharacteristics === undefined) {
					feature.data.valueCharacteristics = [];
				}
				if (feature.data.valuePerEchelon === undefined) {
					feature.data.valuePerEchelon = 0;
				}
				break;
			case FeatureType.Choice:
				if (feature.data.options === undefined) {
					feature.data.options = [];
				}
				feature.data.options.map(f => f.feature).forEach(FeatureUpdateLogic.updateFeature);
				break;
			case FeatureType.ClassAbility:
				if (feature.data.source === undefined) {
					feature.data.source = {
						fromClassAbilities: true,
						fromSelectedSubclassAbilities: true,
						fromUnselectedSubclassAbilities: false,
						fromClassLevels: false,
						fromSelectedSubclassLevels: false,
						fromUnselectedSubclassLevels: false
					};
				}
				if (feature.data.minLevel === undefined) {
					feature.data.minLevel = 1;
				}
				break;
			case FeatureType.Companion:
				if (feature.data.selected && feature.data.selected.retainer) {
					(feature as Feature).type = FeatureType.Retainer;
				}
				break;
			case FeatureType.DamageModifier:
				feature.data.modifiers.forEach(dm => {
					if (dm.valueCharacteristics === undefined) {
						dm.valueCharacteristics = [];
					}
					if (dm.valueCharacteristicMultiplier === undefined) {
						dm.valueCharacteristicMultiplier = 1;
					}
					if (dm.valuePerEchelon === undefined) {
						dm.valuePerEchelon = 0;
					}
				});
				break;
			case FeatureType.Domain:
				if (feature.data.characteristic === undefined) {
					feature.data.characteristic = Characteristic.Intuition;
				}
				if (feature.data.levels === undefined) {
					feature.data.levels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
				}
				feature.data.selected.forEach(d => {
					if (d.resourceGains === undefined) {
						d.resourceGains = [];
					}
					if (d.defaultFeatures === undefined) {
						d.defaultFeatures = [];
					}
				});
				break;
			case FeatureType.HeroicResource:
				if (feature.data.type === undefined) {
					feature.data.type = 'heroic';
				}
				feature.data.gains.forEach(g => {
					if (g.tag === undefined) {
						g.tag = '';
					}
				});
				break;
			case FeatureType.HeroicResourceGain:
				if (feature.data.tag === undefined) {
					feature.data.tag = '';
				}
				if (feature.data.replacesTags === undefined) {
					feature.data.replacesTags = [];
				}
				break;
			case FeatureType.ItemChoice:
				feature.data.selected.forEach(ItemUpdateLogic.updateItem);
				break;
			case FeatureType.Kit:
				if (feature.data.types.includes('Standard')) {
					feature.data.types = feature.data.types.filter(t => t !== 'Standard');
					feature.data.types.push('');
				}
				break;
			case FeatureType.SkillChoice:
				if (feature.data.options === undefined) {
					feature.data.options = [];
				}
				if (feature.data.listOptions === undefined) {
					feature.data.listOptions = [];
				}
				if (feature.data.selected === undefined) {
					feature.data.selected = [];
				}
				feature.data.options = normalizeSkillNames(feature.data.options);
				feature.data.selected = normalizeSkillNames(feature.data.selected);
				break;
			case FeatureType.Malice:
				if (feature.data.echelon === undefined) {
					feature.data.echelon = 1;
				}
				break;
			case FeatureType.MaliceAbility:
				if (feature.data.echelon === undefined) {
					feature.data.echelon = 1;
				}
				break;
			case FeatureType.Multiple:
				feature.data.features.forEach(FeatureUpdateLogic.updateFeature);
				break;
			case FeatureType.Package:
				if (feature.data.tag === 'undefined') {
					feature.data.tag = 'conduit-prayer';
				}
				break;
			case FeatureType.Perk:
				if (feature.data.lists === undefined) {
					feature.data.lists = [];
				}
				break;
		}
	};
}
