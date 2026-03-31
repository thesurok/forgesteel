import { describe, expect, test } from 'vitest';
import { SkillList } from '@/enums/skill-list';
import { SourcebookType } from '@/enums/sourcebook-type';
import { SourcebookLogic } from '@/logic/sourcebook-logic';
import { Sourcebook } from '@/models/sourcebook';

Object.defineProperty(globalThis, 'localStorage', {
    value: {
        getItem: () => null,
        setItem: () => undefined,
        removeItem: () => undefined
    },
    configurable: true
});

const sourcebook = {
    id: 'sourcebook-test',
    name: 'Test Sourcebook',
    description: '',
    type: SourcebookType.Homebrew,
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
    test('includes Beastheart and Summoner sourcebooks in the standard catalog', () => {
        const ids = SourcebookLogic.getSourcebooks().map(sb => sb.id);

        expect(ids).toContain('patreon');
        expect(ids).toContain('summoner');
    });

    test('resolves legacy English and older Ukrainian skill aliases', () => {
        expect(SourcebookLogic.getSkill('Brag', [sourcebook])?.name).toBe('Вихваляння');
        expect(SourcebookLogic.getSkill('Сховатись', [sourcebook])?.name).toBe('Ховання');
    });
});
