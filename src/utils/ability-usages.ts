import { AbilityUsage } from '@/enums/ability-usage';

const abilityUsageCompatibilityMap = new Map<string, AbilityUsage>([
    ['Action', AbilityUsage.MainAction],
    ['Main Action', AbilityUsage.MainAction],
    ['Основна дія', AbilityUsage.MainAction],
    ['Maneuver', AbilityUsage.Maneuver],
    ['Маневр', AbilityUsage.Maneuver],
    ['Move Action', AbilityUsage.Move],
    ['Дія руху', AbilityUsage.Move],
    ['No Action', AbilityUsage.NoAction],
    ['Без дії', AbilityUsage.NoAction],
    ['Triggered Action', AbilityUsage.Trigger],
    ['Trigger Action', AbilityUsage.Trigger],
    ['Тригерна дія', AbilityUsage.Trigger],
    ['Villain Action', AbilityUsage.VillainAction],
    ['Дія лиходія', AbilityUsage.VillainAction],
    ['Champion Action', AbilityUsage.ChampionAction],
    ['Дія чемпіона', AbilityUsage.ChampionAction],
    ['Other', AbilityUsage.Other],
    ['Інше', AbilityUsage.Other],
    ['Free Strike', AbilityUsage.FreeStrike],
    ['Вільний Удар', AbilityUsage.FreeStrike],
    ['Вільний удар', AbilityUsage.FreeStrike]
]);

const abilityUsageCanonicalNameMap: Record<AbilityUsage, string> = {
    [AbilityUsage.MainAction]: 'Main Action',
    [AbilityUsage.Maneuver]: 'Maneuver',
    [AbilityUsage.Move]: 'Move Action',
    [AbilityUsage.NoAction]: 'No Action',
    [AbilityUsage.Trigger]: 'Triggered Action',
    [AbilityUsage.VillainAction]: 'Villain Action',
    [AbilityUsage.ChampionAction]: 'Champion Action',
    [AbilityUsage.Other]: 'Other',
    [AbilityUsage.FreeStrike]: 'Free Strike'
};

const abilityUsageLabelMap: Record<AbilityUsage, string> = {
    [AbilityUsage.MainAction]: 'Основна дія',
    [AbilityUsage.Maneuver]: 'Маневр',
    [AbilityUsage.Move]: 'Дія руху',
    [AbilityUsage.NoAction]: 'Без дії',
    [AbilityUsage.Trigger]: 'Тригерна дія',
    [AbilityUsage.VillainAction]: 'Дія лиходія',
    [AbilityUsage.ChampionAction]: 'Дія чемпіона',
    [AbilityUsage.Other]: 'Інше',
    [AbilityUsage.FreeStrike]: 'Вільний удар'
};

const freeAbilityUsageLabelMap: Partial<Record<AbilityUsage, string>> = {
    [AbilityUsage.MainAction]: 'Безкоштовна основна дія',
    [AbilityUsage.Maneuver]: 'Безкоштовний маневр',
    [AbilityUsage.Move]: 'Безкоштовна дія руху',
    [AbilityUsage.Trigger]: 'Безкоштовна тригерна дія',
    [AbilityUsage.VillainAction]: 'Безкоштовна дія лиходія',
    [AbilityUsage.ChampionAction]: 'Безкоштовна дія чемпіона',
    [AbilityUsage.FreeStrike]: 'Безкоштовний вільний удар'
};

export const normalizeAbilityUsage = (usage: AbilityUsage | string) => {
    return abilityUsageCompatibilityMap.get(usage.toString()) ?? usage as AbilityUsage;
};

export const getAbilityUsageCanonicalName = (usage: AbilityUsage | string, free = false) => {
    const normalizedUsage = normalizeAbilityUsage(usage);
    const baseName = abilityUsageCanonicalNameMap[normalizedUsage] ?? normalizedUsage.toString();

    return free ? `Free ${baseName}` : baseName;
};

export const getAbilityUsageLabel = (usage: AbilityUsage | string, free = false) => {
    const normalizedUsage = normalizeAbilityUsage(usage);
    const baseLabel = abilityUsageLabelMap[normalizedUsage] ?? normalizedUsage.toString();

    if (!free) {
        return baseLabel;
    }

    return freeAbilityUsageLabelMap[normalizedUsage] ?? `Безкоштовна ${baseLabel.toLowerCase()}`;
};

export const getAbilityUsageClassName = (usage: AbilityUsage | string, free = false) => {
    return getAbilityUsageCanonicalName(usage, free).toLocaleLowerCase().split(' ').join('-');
};