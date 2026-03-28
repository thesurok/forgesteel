import { describe, expect, test } from 'vitest';
import { Feature } from '@/models/feature';
import { FeatureType } from '@/enums/feature-type';
import { FeatureUpdateLogic } from '@/logic/update/feature-update-logic';
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
            ['Perk', 'Перевага']
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
            const feature: Feature = {
                id: 'feature-id',
                name: 'Skill',
                description: '',
                type: FeatureType.SkillChoice,
                data: {
                    options: ['Brag', 'Alertness', 'Сховатись'],
                    listOptions: [SkillList.Interpersonal],
                    count: 1,
                    selected: ['Read Person', 'Крастись']
                }
            } as Feature;

            FeatureUpdateLogic.updateFeature(feature);

            expect(feature.data.options).toEqual(['Вихваляння', 'Пильність', 'Ховання']);
            expect(feature.data.selected).toEqual(['Зчитування людини', 'Крадіжка']);
        });
    });
});
