import { Kit } from '@/models/kit';
import { KitArmor } from '@/enums/kit-armor';
import { KitWeapon } from '@/enums/kit-weapon';

const kitArmorNameMap: Record<string, KitArmor> = {
    'Light Armor': KitArmor.Light,
    'Medium Armor': KitArmor.Medium,
    'Heavy Armor': KitArmor.Heavy,
    Shield: KitArmor.Shield,
    [KitArmor.Light]: KitArmor.Light,
    [KitArmor.Medium]: KitArmor.Medium,
    [KitArmor.Heavy]: KitArmor.Heavy,
    [KitArmor.Shield]: KitArmor.Shield
};

const kitWeaponNameMap: Record<string, KitWeapon> = {
    Bow: KitWeapon.Bow,
    'Ensnaring Weapon': KitWeapon.Ensnaring,
    'Heavy Weapon': KitWeapon.Heavy,
    'Light Weapon': KitWeapon.Light,
    'Medium Weapon': KitWeapon.Medium,
    Polearm: KitWeapon.Polearm,
    'Unarmed Strike': KitWeapon.Unarmed,
    Whip: KitWeapon.Whip,
    [KitWeapon.Bow]: KitWeapon.Bow,
    [KitWeapon.Ensnaring]: KitWeapon.Ensnaring,
    [KitWeapon.Heavy]: KitWeapon.Heavy,
    [KitWeapon.Light]: KitWeapon.Light,
    [KitWeapon.Medium]: KitWeapon.Medium,
    [KitWeapon.Polearm]: KitWeapon.Polearm,
    [KitWeapon.Unarmed]: KitWeapon.Unarmed,
    [KitWeapon.Whip]: KitWeapon.Whip
};

export const normalizeKitArmorName = (name: string) => {
    const trimmedName = name.trim();
    return kitArmorNameMap[trimmedName] || trimmedName;
};

export const normalizeKitWeaponName = (name: string) => {
    const trimmedName = name.trim();
    return kitWeaponNameMap[trimmedName] || trimmedName;
};

export const normalizeKitArmorNames = (names: string[]) => {
    return names.map(name => normalizeKitArmorName(name) as KitArmor);
};

export const normalizeKitWeaponNames = (names: string[]) => {
    return names.map(name => normalizeKitWeaponName(name) as KitWeapon);
};

export const normalizeKitKeywords = <T extends string>(keywords: T[]) => {
    return keywords.map(keyword => {
        const armor = kitArmorNameMap[keyword];
        if (armor) {
            return armor;
        }

        const weapon = kitWeaponNameMap[keyword];
        if (weapon) {
            return weapon;
        }

        return keyword;
    }) as T[];
};

export const normalizeKit = (kit: Kit) => {
    kit.armor = normalizeKitArmorNames(kit.armor);
    kit.weapon = normalizeKitWeaponNames(kit.weapon);
};