import { HeroClass } from '@/models/class';

export class ClassUpdateLogic {
    private static readonly subclassNameMap: Record<string, string> = {
        '': '',
        'Primordial Aspect': 'Первісний аспект',
        'Shadow College': 'Тіньовий коледж',
        'Tradition': 'Традиція',
        'Order': 'Орден',
        'Elemental Specialization': 'Стихійна спеціалізація',
        'Circle': 'Коло',
        'Class Act': 'Амплуа',
        'Vocation': 'Покликання',
        'Art': 'Мистецтво',
        'Otherworldly Patron': 'Потойбічний покровитель',
        'Bloodline': 'Родовід',
        'Cadre': 'Кадр',
        'Первісний аспект': 'Первісний аспект',
        'Тіньовий коледж': 'Тіньовий коледж',
        'Традиція': 'Традиція',
        'Орден': 'Орден',
        'Стихійна спеціалізація': 'Стихійна спеціалізація',
        'Коло': 'Коло',
        'Амплуа': 'Амплуа',
        'Покликання': 'Покликання',
        'Мистецтво': 'Мистецтво',
        'Потойбічний покровитель': 'Потойбічний покровитель',
        'Родовід': 'Родовід',
        'Кадр': 'Кадр',
        'Тактична доктрина': 'Тактична доктрина',
        'Дика природа': 'Дика природа'
    };

    static normalizeSubclassName = (subclassName: string) => {
        const trimmedSubclassName = subclassName.trim();
        return ClassUpdateLogic.subclassNameMap[trimmedSubclassName] ?? subclassName;
    };

    static updateClass = (heroClass: HeroClass) => {
        heroClass.subclassName = ClassUpdateLogic.normalizeSubclassName(heroClass.subclassName);
    };
}
