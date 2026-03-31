import { FeatureField } from '@/enums/feature-field';

const featureFieldMap = new Map<string, FeatureField>([
    ['Ancestry Points', FeatureField.AncestryPoints],
    ['Бали походження', FeatureField.AncestryPoints],
    ['Disengage', FeatureField.Disengage],
    ['Відступ', FeatureField.Disengage],
    ['Free Strike Damage', FeatureField.FreeStrikeDamage],
    ['Шкода вільного удару', FeatureField.FreeStrikeDamage],
    ['Project Points', FeatureField.ProjectPoints],
    ['Очки проєкту', FeatureField.ProjectPoints],
    ['Recoveries', FeatureField.Recoveries],
    ['Відновлення', FeatureField.Recoveries],
    ['Recovery Value', FeatureField.RecoveryValue],
    ['Значення відновлення', FeatureField.RecoveryValue],
    ['Renown', FeatureField.Renown],
    ['Відомість', FeatureField.Renown],
    ['Save', FeatureField.Save],
    ['Порятунок', FeatureField.Save],
    ['Speed', FeatureField.Speed],
    ['Швидкість', FeatureField.Speed],
    ['Stability', FeatureField.Stability],
    ['Непорушність', FeatureField.Stability],
    ['Stamina', FeatureField.Stamina],
    ['Витривалість', FeatureField.Stamina],
    ['Wealth', FeatureField.Wealth],
    ['Багатство', FeatureField.Wealth]
]);

const featureFieldLabelMap = new Map<FeatureField, string>([
    [FeatureField.AncestryPoints, 'Бали походження'],
    [FeatureField.Disengage, 'Відступ'],
    [FeatureField.FreeStrikeDamage, 'Шкода вільного удару'],
    [FeatureField.ProjectPoints, 'Очки проєкту'],
    [FeatureField.Recoveries, 'Відновлення'],
    [FeatureField.RecoveryValue, 'Значення відновлення'],
    [FeatureField.Renown, 'Відомість'],
    [FeatureField.Save, 'Порятунок'],
    [FeatureField.Speed, 'Швидкість'],
    [FeatureField.Stability, 'Непорушність'],
    [FeatureField.Stamina, 'Витривалість'],
    [FeatureField.Wealth, 'Багатство']
]);

export const normalizeFeatureField = (field: FeatureField | string): FeatureField => {
    return featureFieldMap.get(field) || field as FeatureField;
};

export const getFeatureFieldLabel = (field: FeatureField | string): string => {
    return featureFieldLabelMap.get(normalizeFeatureField(field)) || field;
};
