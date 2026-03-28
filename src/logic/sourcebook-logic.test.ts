import { describe, expect, test } from 'vitest';
import { SkillList } from '@/enums/skill-list';
import { SourcebookLogic } from '@/logic/sourcebook-logic';
import { Sourcebook } from '@/models/sourcebook';

const sourcebook = {
    id: 'sourcebook-test',
    name: 'Test Sourcebook',
    description: '',
    adventures: [],
    ancestries: [],
    careers: [],
    classes: [],
    complications: [],
    cultures: [],
    domains: [],
    encounters: [],
    imbuements: [],
    items: [],
    kits: [],
    languages: [],
    monsterGroups: [],
    montages: [],
    negotiations: [],
    perks: [],
    projects: [],
    rules: [],
    skills: [
        { name: 'Вихваляння', description: 'Test', list: SkillList.Interpersonal },
        { name: 'Ховання', description: 'Test', list: SkillList.Intrigue }
    ],
    subclasses: [],
    tacticalMaps: [],
    terrain: [],
    titles: []
} as Sourcebook;

describe('SourcebookLogic', () => {
    test('resolves legacy English and older Ukrainian skill aliases', () => {
        expect(SourcebookLogic.getSkill('Brag', [sourcebook])?.name).toBe('Вихваляння');
        expect(SourcebookLogic.getSkill('Сховатись', [sourcebook])?.name).toBe('Ховання');
    });
});