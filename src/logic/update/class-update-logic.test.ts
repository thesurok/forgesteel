import { describe, expect, test } from 'vitest';
import { ClassUpdateLogic } from '@/logic/update/class-update-logic';
import { HeroClass } from '@/models/class';

const createClass = (subclassName: string): HeroClass => {
    return {
        id: 'class-id',
        name: 'Клас',
        description: '',
        type: 'standard',
        level: 1,
        subclassName,
        subclassCount: 1,
        primaryCharacteristicsOptions: [],
        primaryCharacteristics: [],
        characteristics: [],
        featuresByLevel: [],
        subclasses: [],
        abilities: []
    } as HeroClass;
};

describe('ClassUpdateLogic', () => {
    test.each([
        ['Primordial Aspect', 'Первісний аспект'],
        ['Shadow College', 'Тіньовий коледж'],
        ['Tradition', 'Традиція'],
        ['Order', 'Орден'],
        ['Elemental Specialization', 'Стихійна спеціалізація'],
        ['Circle', 'Коло'],
        ['Class Act', 'Амплуа'],
        ['Vocation', 'Покликання'],
        ['Art', 'Мистецтво'],
        ['Otherworldly Patron', 'Потойбічний покровитель'],
        ['Bloodline', 'Родовід'],
        ['Cadre', 'Кадр']
    ])('normalizes subclass label %s', (subclassName: string, expected: string) => {
        const heroClass = createClass(subclassName);

        ClassUpdateLogic.updateClass(heroClass);

        expect(heroClass.subclassName).toBe(expected);
    });

    test('leaves unrelated subclass labels unchanged', () => {
        const heroClass = createClass('Унікальна назва');

        ClassUpdateLogic.updateClass(heroClass);

        expect(heroClass.subclassName).toBe('Унікальна назва');
    });
});
