import { describe, expect, test } from 'vitest';
import { AbilityKeyword } from '@/enums/ability-keyword';
import { Characteristic } from '@/enums/characteristic';
import { DamageType } from '@/enums/damage-type';
import { EncounterDifficulty } from '@/enums/encounter-difficulty';
import { Format } from '@/utils/format';
import { ItemType } from '@/enums/item-type';

describe('getCharacteristicName', () => {
    test.each([
        [Characteristic.Might, 'Сила'],
        [Characteristic.Agility, 'Ловкість'],
        [Characteristic.Reason, 'Розум'],
        [Characteristic.Intuition, 'Інтуїція'],
        [Characteristic.Presence, 'Присутність']
    ])('returns the localized characteristic name for %s', (characteristic: Characteristic, expected: string) => {
        expect(Format.getCharacteristicName(characteristic)).toBe(expected);
    });
});

describe('formatCharacteristicList', () => {
    test('formats a list with the default conjunction', () => {
        expect(Format.formatCharacteristicList([
            Characteristic.Might,
            Characteristic.Agility,
            Characteristic.Presence
        ])).toBe('Сила, Ловкість і Присутність');
    });

    test('formats a list with a custom conjunction', () => {
        expect(Format.formatCharacteristicList([
            Characteristic.Reason,
            Characteristic.Intuition
        ], 'або')).toBe('Розум або Інтуїція');
    });
});

describe('getKeywordName', () => {
    test.each([
        [AbilityKeyword.Area, 'Зона'],
        [AbilityKeyword.Performance, 'Виступ'],
        [AbilityKeyword.Psionic, 'Псіоніка'],
        [AbilityKeyword.Telepathy, 'Телепатія']
    ])('returns the localized keyword name for %s', (keyword: AbilityKeyword, expected: string) => {
        expect(Format.getKeywordName(keyword)).toBe(expected);
    });

    test('leaves unknown keywords unchanged', () => {
        expect(Format.getKeywordName('Легка зброя')).toBe('Легка зброя');
    });
});

describe('formatKeywordList', () => {
    test('formats a keyword list with localized names', () => {
        expect(Format.formatKeywordList([
            AbilityKeyword.Area,
            AbilityKeyword.Performance,
            AbilityKeyword.Psionic
        ])).toBe('Зона, Виступ і Псіоніка');
    });

    test('formats a keyword list with a custom conjunction', () => {
        expect(Format.formatKeywordList([
            AbilityKeyword.Telekinesis,
            AbilityKeyword.Telepathy
        ], 'або')).toBe('Телекінез або Телепатія');
    });
});

describe('format helpers for classic sheet labels', () => {
    test('localizes damage types', () => {
        expect(Format.getDamageTypeName(DamageType.Fire)).toBe('Вогняна');
    });

    test('localizes item types', () => {
        expect(Format.getItemTypeName(ItemType.Trinket1st)).toBe('Дрібничка (1-й ешелон)');
        expect(Format.getItemKindName(ItemType.ImbuedWeapon)).toBe('Зброя');
    });

    test('localizes movement modes', () => {
        expect(Format.formatMovementModes(['fly', 'hover'])).toBe('політ, зависання');
    });

    test('localizes encounter difficulty names', () => {
        expect(Format.getEncounterDifficultyName(EncounterDifficulty.Hard)).toBe('Важка');
    });
});
