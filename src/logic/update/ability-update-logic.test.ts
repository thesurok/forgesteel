import { describe, expect, test } from 'vitest';
import { AbilityUsage } from '@/enums/ability-usage';
import { AbilityUpdateLogic } from '@/logic/update/ability-update-logic';
import { Ability } from '@/models/ability';

const createAbility = (usage: string): Ability => {
    return {
        id: 'ability-id',
        name: 'Ability',
        description: '',
        type: {
            usage,
            free: false,
            trigger: '',
            time: '',
            qualifiers: [],
            freeStrike: false
        },
        keywords: [],
        distance: [],
        target: '',
        cost: 'signature',
        repeatable: false,
        minLevel: 1,
        sections: [],
        preEffect: '',
        powerRoll: null,
        test: null,
        effect: '',
        strained: '',
        alternateEffects: [],
        spend: [],
        persistence: []
    } as Ability;
};

describe('AbilityUpdateLogic', () => {
    test.each([
        ['Action', AbilityUsage.MainAction],
        ['Main Action', AbilityUsage.MainAction],
        ['Maneuver', AbilityUsage.Maneuver],
        ['Move Action', AbilityUsage.Move],
        ['Triggered Action', AbilityUsage.Trigger],
        ['Trigger Action', AbilityUsage.Trigger],
        ['No Action', AbilityUsage.NoAction],
        ['Free Strike', AbilityUsage.FreeStrike]
    ])('normalizes legacy usage %s', (usage: string, expected: AbilityUsage) => {
        const ability = createAbility(usage);

        AbilityUpdateLogic.updateAbility(ability);

        expect(ability.type.usage).toBe(expected);
    });
});
