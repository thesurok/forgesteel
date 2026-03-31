import { describe, expect, test } from 'vitest';
import { Feature, FeatureBonus, FeatureProficiency, FeatureSkillChoice } from '@/models/feature';
import { FeatureType } from '@/enums/feature-type';
import { FeatureUpdateLogic } from '@/logic/update/feature-update-logic';
import { FeatureField } from '@/enums/feature-field';
import { KitArmor } from '@/enums/kit-armor';
import { KitWeapon } from '@/enums/kit-weapon';
import { SkillList } from '@/enums/skill-list';

const createFeature = (name: string): Feature => {
    return {
        id: 'feature-id',
        name: name,
        description: '',
        type: FeatureType.Text,
        data: null
    } as Feature;
};

describe('FeatureUpdateLogic', () => {
    describe('updateFeature', () => {
        test.each([
            ['Дослідження/Інтриги Skills', 'Навички Дослідження/Інтриги'],
            ['Exploration / Interpersonal / Intrigue Perk', 'Перевага Дослідження/Міжособистісні/Інтриги'],
            ['Lore Skill', 'Навичка Знання'],
            ['3PT Ability', '3-очкова навичка'],
            ['5pt ability', '5-очкова навичка'],
            ['Signature Ability', 'Фірмова навичка'],
            ['Skills', 'Навички'],
            ['Perk', 'Перевага'],
            ['Heroic Resource', 'Героїчний ресурс'],
            ['Recoveries', 'Відновлення']
        ])('normalizes mixed-language feature labels', (name: string, expected: string) => {
            const feature = createFeature(name);

            FeatureUpdateLogic.updateFeature(feature);

            expect(feature.name).toBe(expected);
        });

        test('leaves unrelated names unchanged', () => {
            const feature = createFeature('Inner Light, Lore Skill');

            FeatureUpdateLogic.updateFeature(feature);

            expect(feature.name).toBe('Inner Light, Lore Skill');
        });

        test('normalizes skill choice options and selections', () => {
            const feature = {
                id: 'feature-id',
                name: 'Skill',
                description: '',
                type: 'Skill Choice',
                data: {
                    options: ['Brag', 'Alertness', 'Сховатись'],
                    listOptions: [SkillList.Interpersonal],
                    count: 1,
                    selected: ['Read Person', 'Крастись']
                }
            } as unknown as FeatureSkillChoice;

            FeatureUpdateLogic.updateFeature(feature as unknown as Feature);

            expect(feature.type).toBe(FeatureType.SkillChoice);
            expect(feature.data.options).toEqual(['Вихваляння', 'Пильність', 'Ховання']);
            expect(feature.data.selected).toEqual(['Зчитування людини', 'Крадіжка']);
        });

        test('normalizes legacy kit proficiencies', () => {
            const feature = {
                id: 'feature-id',
                name: 'Proficiency',
                description: '',
                type: 'Proficiency',
                data: {
                    weapons: ['Heavy Weapon', 'Bow'],
                    armor: ['Heavy Armor', 'Shield']
                }
            } as unknown as FeatureProficiency;

            FeatureUpdateLogic.updateFeature(feature as unknown as Feature);

            expect(feature.type).toBe(FeatureType.Proficiency);
            expect(feature.data.weapons).toEqual([KitWeapon.Heavy, KitWeapon.Bow]);
            expect(feature.data.armor).toEqual([KitArmor.Heavy, KitArmor.Shield]);
        });

        test('normalizes legacy feature bonus fields', () => {
            const feature = {
                id: 'feature-id',
                name: 'Recoveries',
                description: '',
                type: FeatureType.Bonus,
                data: {
                    field: 'Recoveries',
                    value: 2
                }
            } as unknown as FeatureBonus;

            FeatureUpdateLogic.updateFeature(feature as unknown as Feature);

            expect(feature.name).toBe('Відновлення');
            expect(feature.data.field).toBe(FeatureField.Recoveries);
        });

        test.each([
            ['Text', FeatureType.Text, null],
            ['Choice', FeatureType.Choice, { options: [] }],
            ['Heroic Resource', FeatureType.HeroicResource, { gains: [] }],
            ['Language Choice', FeatureType.LanguageChoice, { options: [], count: 1, selected: [] }],
            ['Retainer', FeatureType.Retainer, {}]
        ])('normalizes legacy feature type %s', (type: string, expected: FeatureType, data: unknown) => {
            const feature: Feature = {
                id: 'feature-id',
                name: 'Feature',
                description: '',
                type,
                data
            } as Feature;

            FeatureUpdateLogic.updateFeature(feature);

            expect(feature.type).toBe(expected);
        });
    });
});
