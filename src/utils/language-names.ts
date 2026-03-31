const languageNameMap: Record<string, string> = {
    'Caelian': 'Келіан (Caelian)',
    'Higaran': 'Хігаран (Higaran)',
    'Khemharic': 'Кемхарік (Khemharic)',
    'Khoursirian': 'Кхурсіріан (Khoursirian)',
    'Oaxuatl': 'Оашуатль (Oaxuatl)',
    'Phaedran': 'Федран (Phaedran)',
    'Riojan': 'Ріохан (Riojan)',
    'Uvalic': 'Увалік (Uvalic)',
    'Vaniric': 'Ванірик (Vaniric)',
    'Vaslorian': 'Васлоріан (Vaslorian)',
    'Anjali': 'Анжалі (Anjali)',
    'Axiomatic': 'Аксіоматичний (Axiomatic)',
    'Filliaric': 'Філліарик (Filliaric)',
    'The First Language': 'Перша мова (The First Language)',
    'High Kuric': 'Високий Курик (High Kuric)',
    'Hyrallic': 'Гіраллік (Hyrallic)',
    'Illyvric': 'Ілліврик (Illyvric)',
    'Kalliak': 'Калліак (Kalliak)',
    'Kethaic': 'Кетайк (Kethaic)',
    'Khelt': 'Кхелт (Khelt)',
    'Low Kuric': 'Низький Курик (Low Kuric)',
    'Mindspeech': 'Мислемова (Mindspeech)',
    'Proto-Ctholl': 'Прото-Ктолл (Proto-Ctholl)',
    'Szetch': 'Сзетч (Szetch)',
    'Tholl': 'Толл (Tholl)',
    'Urollialic': 'Уролліалік (Urollialic)',
    'Variac': 'Варіак (Variac)',
    'Vastariax': 'Вастаріакс (Vastariax)',
    'Vhoric': 'Ворик (Vhoric)',
    'Voll': 'Волл (Voll)',
    'Yllyric': 'Іллірик (Yllyric)',
    'Za\'hariax': 'За\'гаріакс (Za\'hariax)',
    'Ananjali': 'Ананжалі (Ananjali)',
    'High Rhyvian': 'Високий Ривіан (High Rhyvian)',
    'Khamish': 'Кхаміш (Khamish)',
    'Kheltivari': 'Кхелтіварі (Kheltivari)',
    'Low Rhyvian': 'Низький Ривіан (Low Rhyvian)',
    'Old Variac': 'Старий Варіак (Old Variac)',
    'Phorialtic': 'Форіалтик (Phorialtic)',
    'Rallarian': 'Ралларіан (Rallarian)',
    'Ullorvic': 'Уллорвік (Ullorvic)'
};

export const COMMON_LANGUAGE_NAME = languageNameMap.Caelian;

export const normalizeLanguageName = (name: string) => {
    return languageNameMap[name] || name;
};
