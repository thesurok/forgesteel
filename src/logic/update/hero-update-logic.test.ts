import { describe, expect, test } from 'vitest';
import { FactoryLogic } from '@/logic/factory-logic';
import { HeroUpdateLogic } from '@/logic/update/hero-update-logic';
import { SourcebookData } from '@/data/sourcebook-data';
import { SourcebookLogic } from '@/logic/sourcebook-logic';

Object.defineProperty(globalThis, 'localStorage', {
    value: {
        getItem: () => null,
        setItem: () => undefined,
        removeItem: () => undefined
    },
    configurable: true
});

describe('HeroUpdateLogic', () => {
    test('adds Beastheart and Summoner sourcebooks to existing heroes', () => {
        const hero = FactoryLogic.createHero([SourcebookData.core.id, SourcebookData.orden.id]);

        HeroUpdateLogic.updateHeroStructure(hero, SourcebookLogic.getSourcebooks());

        expect(hero.settingIDs).toEqual([
            SourcebookData.core.id,
            SourcebookData.orden.id,
            SourcebookData.patreon.id,
            SourcebookData.summoner.id
        ]);
    });
});
