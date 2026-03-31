import { Button, Flex, Popover, Segmented, Select, Space } from 'antd';
import { Feature, FeatureAbility, FeatureAncestryFeatureChoice, FeatureBonus, FeatureCharacteristicBonus, FeatureClassAbility, FeatureConditionImmunity, FeatureDamageModifier, FeatureData, FeatureFollower, FeatureMovementMode, FeaturePerk, FeatureProficiency } from '@/models/feature';
import { Ability } from '@/models/ability';
import { AbilityEditPanel } from '@/components/panels/edit/ability-edit/ability-edit-panel';
import { Characteristic } from '@/enums/characteristic';
import { ConditionType } from '@/enums/condition-type';
import { ConfigFeature } from '@/components/features/feature';
import { DamageModifierType } from '@/enums/damage-modifier-type';
import { DamageType } from '@/enums/damage-type';
import { DangerButton } from '@/components/controls/danger-button/danger-button';
import { Empty } from '@/components/controls/empty/empty';
import { ErrorBoundary } from '@/components/controls/error-boundary/error-boundary';
import { Expander } from '@/components/controls/expander/expander';
import { FactoryLogic } from '@/logic/factory-logic';
import { FeatureField } from '@/enums/feature-field';
import { FeatureType } from '@/enums/feature-type';
import { Follower } from '@/models/follower';
import { FollowerEditPanel } from '@/components/panels/edit/follower-edit/follower-edit-panel';
import { FollowerType } from '@/enums/follower-type';
import { Format } from '@/utils/format';
import { FormatLogic } from '@/logic/format-logic';
import { HeaderText } from '@/components/controls/header-text/header-text';
import { Hero } from '@/models/hero';
import { HeroLogic } from '@/logic/hero-logic';
import { KitArmor } from '@/enums/kit-armor';
import { KitWeapon } from '@/enums/kit-weapon';
import { Modal } from '@/components/modals/modal/modal';
import { NumberSpin } from '@/components/controls/number-spin/number-spin';
import { Options } from '@/models/options';
import { PerkList } from '@/enums/perk-list';
import { PlusOutlined } from '@ant-design/icons';
import { Sourcebook } from '@/models/sourcebook';
import { SourcebookLogic } from '@/logic/sourcebook-logic';
import { TextInput } from '@/components/controls/text-input/text-input';
import { Utils } from '@/utils/utils';
import { useState } from 'react';

import './hero-customize-modal.scss';

interface Props {
	hero: Hero;
	sourcebooks: Sourcebook[];
	options: Options;
	onChange: (hero: Hero) => void;
	onClose: () => void;
}

export const HeroCustomizeModal = (props: Props) => {
	const [hero, setHero] = useState<Hero>(Utils.copy(props.hero));
	const [menuOpen, setMenuOpen] = useState<boolean>(false);

	const addFeature = (feature: Feature) => {
		const heroCopy = Utils.copy(hero);
		heroCopy.features.push(feature);
		setHero(heroCopy);
		props.onChange(heroCopy);
	};

	const deleteFeature = (feature: Feature) => {
		const heroCopy = Utils.copy(hero);
		heroCopy.features = heroCopy.features.filter(f => f.id !== feature.id);
		setHero(heroCopy);
		props.onChange(heroCopy);
	};

	const setFeature = (featureID: string, feature: Feature) => {
		const heroCopy = Utils.copy(hero);
		const index = heroCopy.features.findIndex(f => f.id === featureID);
		if (index !== -1) {
			heroCopy.features[index] = feature;
		}
		setHero(heroCopy);
		props.onChange(heroCopy);
	};

	const setFeatureData = (featureID: string, data: FeatureData) => {
		const heroCopy = Utils.copy(hero);
		const configuredFeature = HeroLogic.getFeatures(heroCopy)
			.map(f => f.feature)
			.find(f => f.id === featureID);
		if (configuredFeature) {
			configuredFeature.data = data;
		}
		setHero(heroCopy);
		props.onChange(heroCopy);
	};

	const getMenu = () => {
		return (
			<Popover
				trigger='click'
				content={
					<Space orientation='vertical'>
						<HeaderText level={3}>Здібності</HeaderText>
						<div className='customize-option-section'>
							<Button
								block={true}
								type='text'
								onClick={() => {
									setMenuOpen(false);
									addFeature(FactoryLogic.feature.createClassAbilityChoice({
										id: Utils.guid(),
										cost: 'signature'
									}));
								}}
							>
								Здібність класу
							</Button>
							<Button
								block={true}
								type='text'
								onClick={() => {
									setMenuOpen(false);
									addFeature(FactoryLogic.feature.createAbility({
										ability: FactoryLogic.createAbility({
											id: Utils.guid(),
											name: 'Безіменна здібність',
											type: FactoryLogic.type.createMain(),
											distance: [FactoryLogic.distance.createSelf()],
											target: 'Себе',
											sections: []
										})
									}));
								}}
							>
								Власна здібність
							</Button>
						</div>
						<HeaderText level={3}>Бонуси</HeaderText>
						<div className='customize-option-section'>
							<Button
								block={true}
								type='text'
								onClick={() => {
									setMenuOpen(false);
									addFeature(FactoryLogic.feature.createCharacteristicBonus({
										id: Utils.guid(),
										name: `${Format.getCharacteristicName(Characteristic.Might)} + 1`,
										characteristic: Characteristic.Might,
										value: 1
									}));
								}}
							>
								Бонус характеристики
							</Button>
							<Button
								block={true}
								type='text'
								onClick={() => {
									setMenuOpen(false);
									addFeature(FactoryLogic.feature.createConditionImmunity({
										id: Utils.guid(),
										conditions: []
									}));
								}}
							>
								Імунітет до стану
							</Button>
							<Button
								block={true}
								type='text'
								onClick={() => {
									setMenuOpen(false);
									addFeature(FactoryLogic.feature.createDamageModifier({
										id: Utils.guid(),
										modifiers: [FactoryLogic.damageModifier.create({ damageType: DamageType.Fire, modifierType: DamageModifierType.Immunity, value: 2 })]
									}));
								}}
							>
								Імунітет / вразливість до шкоди
							</Button>
							<Button
								block={true}
								type='text'
								onClick={() => {
									setMenuOpen(false);
									addFeature(FactoryLogic.feature.createBonus({
										id: Utils.guid(),
										name: `${FeatureField.Stamina} + 6`,
										field: FeatureField.Stamina,
										value: 6
									}));
								}}
							>
								Бонус показника
							</Button>
						</div>
						<HeaderText level={3}>Ігровий вміст</HeaderText>
						<div className='customize-option-section'>
							<Button
								block={true}
								type='text'
								onClick={() => {
									setMenuOpen(false);
									addFeature(FactoryLogic.feature.createAncestryFeature({
										id: Utils.guid(),
										value: 1,
										current: true,
										former: true,
										customID: ''
									}));
								}}
							>
								Особливість походження
							</Button>
							<Button
								block={true}
								type='text'
								onClick={() => {
									setMenuOpen(false);
									addFeature(FactoryLogic.feature.createKitChoice({
										id: Utils.guid()
									}));
								}}
							>
								Комплект
							</Button>
							<Button
								block={true}
								type='text'
								onClick={() => {
									setMenuOpen(false);
									addFeature(FactoryLogic.feature.createPerk({
										id: Utils.guid(),
										lists: [PerkList.Crafting, PerkList.Exploration, PerkList.Interpersonal, PerkList.Intrigue, PerkList.Lore, PerkList.Supernatural, PerkList.Special]
									}));
								}}
							>
								Перевага
							</Button>
						</div>
						<HeaderText level={3}>NPC</HeaderText>
						<div className='customize-option-section'>
							<Button
								block={true}
								type='text'
								onClick={() => {
									setMenuOpen(false);
									addFeature(FactoryLogic.feature.createCompanion({
										id: Utils.guid()
									}));
								}}
							>
								Компаньйон / верхова істота
							</Button>
							<Button
								block={true}
								type='text'
								onClick={() => {
									setMenuOpen(false);
									addFeature(FactoryLogic.feature.createFollower({
										id: Utils.guid(),
										follower: FactoryLogic.createFollower(FollowerType.Artisan)
									}));
								}}
							>
								Прибічник
							</Button>
							<Button
								block={true}
								type='text'
								onClick={() => {
									setMenuOpen(false);
									addFeature(FactoryLogic.feature.createRetainer({
										id: Utils.guid()
									}));
								}}
							>
								Ретейнер
							</Button>
						</div>
						<HeaderText level={3}>Різне</HeaderText>
						<div className='customize-option-section'>
							<Button
								block={true}
								type='text'
								onClick={() => {
									setMenuOpen(false);
									addFeature(FactoryLogic.feature.createLanguageChoice({
										id: Utils.guid(),
										count: -1
									}));
								}}
							>
								Мови
							</Button>
							<Button
								block={true}
								type='text'
								onClick={() => {
									setMenuOpen(false);
									addFeature(FactoryLogic.feature.createMovementMode({
										id: Utils.guid(),
										mode: 'fly'
									}));
								}}
							>
								Спосіб руху
							</Button>
							<Button
								block={true}
								type='text'
								onClick={() => {
									setMenuOpen(false);
									addFeature(FactoryLogic.feature.createProficiency({
										id: Utils.guid()
									}));
								}}
							>
								Володіння
							</Button>
							<Button
								block={true}
								type='text'
								onClick={() => {
									setMenuOpen(false);
									addFeature(FactoryLogic.feature.createSkillChoice({
										id: Utils.guid(),
										count: -1
									}));
								}}
							>
								Навички
							</Button>
						</div>
					</Space>
				}
				open={menuOpen}
				onOpenChange={setMenuOpen}
			>
				<Button type='text' icon={<PlusOutlined />} />
			</Popover>
		);
	};

	const getEditSection = (feature: Feature) => {
		const setValue = (value: number) => {
			const copy = Utils.copy(feature) as FeatureAncestryFeatureChoice;
			copy.data.value = value;
			copy.data.selected = null;
			setFeature(feature.id, copy);
		};

		const setCharacteristic = (value: Characteristic) => {
			const copy = Utils.copy(feature) as FeatureCharacteristicBonus;
			copy.data.characteristic = value;
			copy.name = `${copy.data.characteristic} + ${copy.data.value}`;
			setFeature(feature.id, copy);
		};

		const setCharacteristicBonus = (value: number) => {
			const copy = Utils.copy(feature) as FeatureCharacteristicBonus;
			copy.data.value = value;
			copy.name = `${copy.data.characteristic} + ${copy.data.value}`;
			setFeature(feature.id, copy);
		};

		const setValueField = (value: FeatureField) => {
			const copy = Utils.copy(feature) as FeatureBonus;
			copy.data.field = value;
			copy.name = `${copy.data.field} ${FormatLogic.getModifier(copy.data)}`;
			setFeature(feature.id, copy);
		};

		const setValueBonus = (value: number) => {
			const copy = Utils.copy(feature) as FeatureBonus;
			copy.data.value = value;
			copy.name = `${copy.data.field} ${FormatLogic.getModifier(copy.data)}`;
			setFeature(feature.id, copy);
		};

		const setValuePerLevel = (value: number) => {
			const copy = Utils.copy(feature) as FeatureBonus;
			copy.data.valuePerLevel = value;
			copy.name = `${copy.data.field} ${FormatLogic.getModifier(copy.data)}`;
			setFeature(feature.id, copy);
		};

		const setValuePerEchelon = (value: number) => {
			const copy = Utils.copy(feature) as FeatureBonus;
			copy.data.valuePerEchelon = value;
			copy.name = `${copy.data.field} ${FormatLogic.getModifier(copy.data)}`;
			setFeature(feature.id, copy);
		};

		const setValueCharacteristics = (value: Characteristic[]) => {
			const copy = Utils.copy(feature) as FeatureBonus;
			copy.data.valueCharacteristics = value;
			copy.name = `${copy.data.field} ${FormatLogic.getModifier(copy.data)}`;
			setFeature(feature.id, copy);
		};

		const setDamageModifierDamageType = (value: DamageType) => {
			const copy = Utils.copy(feature) as FeatureDamageModifier;
			copy.data.modifiers[0].damageType = value;
			copy.name = FormatLogic.getDamageModifier(copy.data.modifiers[0]);
			setFeature(feature.id, copy);
		};

		const setDamageModifierType = (value: DamageModifierType) => {
			const copy = Utils.copy(feature) as FeatureDamageModifier;
			copy.data.modifiers[0].type = value;
			copy.name = FormatLogic.getDamageModifier(copy.data.modifiers[0]);
			setFeature(feature.id, copy);
		};

		const setDamageModifierBonus = (value: number) => {
			const copy = Utils.copy(feature) as FeatureDamageModifier;
			copy.data.modifiers[0].value = value;
			copy.name = FormatLogic.getDamageModifier(copy.data.modifiers[0]);
			setFeature(feature.id, copy);
		};

		const setDamageModifierValuePerLevel = (value: number) => {
			const copy = Utils.copy(feature) as FeatureDamageModifier;
			copy.data.modifiers[0].valuePerLevel = value;
			copy.name = FormatLogic.getDamageModifier(copy.data.modifiers[0]);
			setFeature(feature.id, copy);
		};

		const setDamageModifierValuePerEchelon = (value: number) => {
			const copy = Utils.copy(feature) as FeatureDamageModifier;
			copy.data.modifiers[0].valuePerEchelon = value;
			copy.name = FormatLogic.getDamageModifier(copy.data.modifiers[0]);
			setFeature(feature.id, copy);
		};

		const setDamageModifierCharacteristics = (value: Characteristic[]) => {
			const copy = Utils.copy(feature) as FeatureDamageModifier;
			copy.data.modifiers[0].valueCharacteristics = value;
			copy.name = FormatLogic.getDamageModifier(copy.data.modifiers[0]);
			setFeature(feature.id, copy);
		};

		const setClassID = (value: string) => {
			const copy = Utils.copy(feature) as FeatureClassAbility;
			copy.data.classID = value === '' ? undefined : value;
			copy.data.selectedIDs = [];
			setFeature(feature.id, copy);
		};

		const setCost = (value: number | 'signature') => {
			const copy = Utils.copy(feature) as FeatureClassAbility;
			copy.data.cost = value;
			copy.data.selectedIDs = [];
			setFeature(feature.id, copy);
		};

		const setConditionTypes = (value: ConditionType[]) => {
			const copy = Utils.copy(feature) as FeatureConditionImmunity;
			copy.data.conditions = value;
			setFeature(feature.id, copy);
		};

		const setFollower = (value: Follower) => {
			const copy = Utils.copy(feature) as FeatureFollower;
			copy.data.follower = value;
			setFeature(feature.id, copy);
		};

		const setMovementMode = (value: string) => {
			const copy = Utils.copy(feature) as FeatureMovementMode;
			copy.data.mode = value;
			setFeature(feature.id, copy);
		};

		const setPerkLists = (value: PerkList[]) => {
			const copy = Utils.copy(feature) as FeaturePerk;
			copy.data.lists = value;
			copy.data.selected = [];
			setFeature(feature.id, copy);
		};

		const setAbility = (value: Ability) => {
			const copy = Utils.copy(feature) as FeatureAbility;
			copy.data.ability = value;
			copy.name = value.name || 'Unnamed Ability';
			setFeature(feature.id, copy);
		};

		const setCustomAncestryID = (value: string) => {
			const copy = Utils.copy(feature) as FeatureAncestryFeatureChoice;
			copy.data.source.customID = value;
			copy.data.selected = null;
			setFeature(feature.id, copy);
		};

		const setProficiencyWeapons = (value: KitWeapon[]) => {
			const copy = Utils.copy(feature) as FeatureProficiency;
			copy.data.weapons = value;
			setFeature(feature.id, copy);
		};

		const setProficiencyArmor = (value: KitArmor[]) => {
			const copy = Utils.copy(feature) as FeatureProficiency;
			copy.data.armor = value;
			setFeature(feature.id, copy);
		};

		switch (feature.type) {
			case FeatureType.Ability:
				return (
					<Expander title='Редактор здібності'>
						<AbilityEditPanel ability={feature.data.ability} onChange={setAbility} />
					</Expander>
				);
			case FeatureType.AncestryFeatureChoice:
				return (
					<div>
						<HeaderText>Походження</HeaderText>
						<Select
							style={{ width: '100%' }}
							placeholder='Оберіть походження'
							options={[null, ...SourcebookLogic.getAncestries(props.sourcebooks)].map(o => ({ value: o ? o.id : '', label: o ? o.name : 'Ваше походження' }))}
							optionRender={option => <div className='ds-text'>{option.data.label}</div>}
							value={feature.data.source.customID}
							onChange={setCustomAncestryID}
						/>
						<HeaderText>Вартість у балах</HeaderText>
						<NumberSpin min={1} max={2} value={feature.data.value} onChange={setValue} />
					</div>
				);
			case FeatureType.Bonus:
				return (
					<Space orientation='vertical' style={{ width: '100%' }}>
						<HeaderText>Поле</HeaderText>
						<Select
							style={{ width: '100%' }}
							placeholder='Оберіть поле'
							options={[FeatureField.AncestryPoints, FeatureField.Disengage, FeatureField.ProjectPoints, FeatureField.Recoveries, FeatureField.RecoveryValue, FeatureField.Renown, FeatureField.Save, FeatureField.Speed, FeatureField.Stability, FeatureField.Stamina, FeatureField.Wealth].map(o => ({ value: o }))}
							optionRender={option => <div className='ds-text'>{option.data.value}</div>}
							value={feature.data.field}
							onChange={setValueField}
						/>
						<HeaderText>Значення</HeaderText>
						<NumberSpin label='Значення' min={0} value={feature.data.value} onChange={setValueBonus} />
						<NumberSpin label='За рівень після 1-го' min={0} value={feature.data.valuePerLevel} onChange={setValuePerLevel} />
						<NumberSpin label='За ешелон' min={0} value={feature.data.valuePerEchelon} onChange={setValuePerEchelon} />
						<Select
							style={{ width: '100%' }}
							placeholder='Характеристики'
							mode='multiple'
							options={[Characteristic.Might, Characteristic.Agility, Characteristic.Reason, Characteristic.Intuition, Characteristic.Presence].map(option => ({ value: option, label: Format.getCharacteristicName(option) }))}
							optionRender={option => <div className='ds-text'>{option.data.label}</div>}
							value={feature.data.valueCharacteristics}
							onChange={setValueCharacteristics}
						/>
					</Space>
				);
			case FeatureType.CharacteristicBonus:
				return (
					<div>
						<HeaderText>Характеристика</HeaderText>
						<Select
							style={{ width: '100%' }}
							placeholder='Оберіть характеристику'
							options={[Characteristic.Might, Characteristic.Agility, Characteristic.Reason, Characteristic.Intuition, Characteristic.Presence].map(o => ({ value: o, label: Format.getCharacteristicName(o) }))}
							optionRender={option => <div className='ds-text'>{option.data.label}</div>}
							value={feature.data.characteristic}
							onChange={setCharacteristic}
						/>
						<HeaderText>Значення</HeaderText>
						<NumberSpin label='Значення' min={0} value={feature.data.value} onChange={setCharacteristicBonus} />
					</div>
				);
			case FeatureType.ClassAbility:
				return (
					<div>
						<HeaderText>Клас</HeaderText>
						<HeaderText>Клас</HeaderText>
						<Select
							style={{ width: '100%' }}
							allowClear={!!feature.data.classID}
							placeholder='Оберіть клас'
							options={[{ id: '', name: 'Ваш клас', description: 'Здібність із вашого власного класу.' }, ...SourcebookLogic.getClasses(props.sourcebooks)].map(o => ({ value: o.id, label: o.name, description: o.description }))}
							optionRender={option => <div className='ds-text'>{option.data.label}</div>}
							value={feature.data.classID || ''}
							onChange={setClassID}
						/>
						<HeaderText>Вартість здібності</HeaderText>
						<Flex align='center' justify='center'>
							<Segmented<'signature' | number>
								options={[
									{ value: 'signature', label: 'Фірмова' },
									{ value: 3, label: '3 оч.' },
									{ value: 5, label: '5 оч.' },
									{ value: 7, label: '7 оч.' },
									{ value: 9, label: '9 оч.' },
									{ value: 11, label: '11 оч.' },
									{ value: 0, label: 'Інше' }
								]}
								value={feature.data.cost}
								onChange={setCost}
							/>
						</Flex>
					</div>
				);
			case FeatureType.ConditionImmunity:
				return (
					<Select
						style={{ width: '100%' }}
						placeholder='Оберіть стан'
						mode='multiple'
						options={[ConditionType.Bleeding, ConditionType.Dazed, ConditionType.Frightened, ConditionType.Grabbed, ConditionType.Prone, ConditionType.Restrained, ConditionType.Slowed, ConditionType.Taunted, ConditionType.Weakened].map(o => ({ value: o }))}
						optionRender={option => <div className='ds-text'>{option.data.value}</div>}
						value={feature.data.conditions}
						onChange={setConditionTypes}
					/>
				);
			case FeatureType.DamageModifier:
				return (
					<Space orientation='vertical' style={{ width: '100%' }}>
						<HeaderText>Модифікатор</HeaderText>
						<Select
							style={{ width: '100%' }}
							placeholder='Оберіть тип шкоди'
							options={[DamageType.Damage, DamageType.Acid, DamageType.Cold, DamageType.Corruption, DamageType.Fire, DamageType.Holy, DamageType.Lightning, DamageType.Poison, DamageType.Psychic, DamageType.Sonic].map(o => ({ value: o }))}
							optionRender={option => <div className='ds-text'>{option.data.value}</div>}
							value={feature.data.modifiers[0].damageType}
							onChange={setDamageModifierDamageType}
						/>
						<Segmented
							block={true}
							options={[DamageModifierType.Immunity, DamageModifierType.Weakness].map(o => ({ label: o, value: o }))}
							value={feature.data.modifiers[0].type}
							onChange={setDamageModifierType}
						/>
						<HeaderText>Значення</HeaderText>
						<NumberSpin label='Значення' min={0} value={feature.data.modifiers[0].value} onChange={setDamageModifierBonus} />
						<NumberSpin label='За рівень після 1-го' min={0} value={feature.data.modifiers[0].valuePerLevel} onChange={setDamageModifierValuePerLevel} />
						<NumberSpin label='За ешелон' min={0} value={feature.data.modifiers[0].valuePerEchelon} onChange={setDamageModifierValuePerEchelon} />
						<Select
							style={{ width: '100%' }}
							placeholder='Характеристики'
							mode='multiple'
							options={[Characteristic.Might, Characteristic.Agility, Characteristic.Reason, Characteristic.Intuition, Characteristic.Presence].map(option => ({ value: option, label: Format.getCharacteristicName(option) }))}
							optionRender={option => <div className='ds-text'>{option.data.label}</div>}
							value={feature.data.modifiers[0].valueCharacteristics}
							onChange={setDamageModifierCharacteristics}
						/>
					</Space>
				);
			case FeatureType.Follower:
				return (
					<Expander title='Customize'>
						<FollowerEditPanel follower={feature.data.follower} sourcebooks={props.sourcebooks} options={props.options} onChange={setFollower} />
					</Expander>
				);
			case FeatureType.MovementMode:
				return (
					<div>
						<HeaderText>Name</HeaderText>
						<TextInput
							status={feature.data.mode === '' ? 'warning' : ''}
							placeholder='Mode'
							allowClear={true}
							value={feature.data.mode}
							onChange={setMovementMode}
						/>
					</div>
				);
			case FeatureType.Perk:
				return (
					<div>
						<HeaderText>Perk List</HeaderText>
						<Select
							style={{ width: '100%' }}
							mode='multiple'
							allowClear={true}
							placeholder='List'
							options={[PerkList.Crafting, PerkList.Exploration, PerkList.Interpersonal, PerkList.Intrigue, PerkList.Lore, PerkList.Supernatural, PerkList.Special].map(pl => ({ label: pl, value: pl }))}
							optionRender={option => <div className='ds-text'>{option.data.label}</div>}
							value={feature.data.lists}
							onChange={setPerkLists}
						/>
					</div>
				);
			case FeatureType.Proficiency:
				return (
					<div>
						<HeaderText>Зброя</HeaderText>
						<Select
							style={{ width: '100%' }}
							placeholder='Зброя'
							mode='multiple'
							allowClear={true}
							options={[KitWeapon.Bow, KitWeapon.Ensnaring, KitWeapon.Heavy, KitWeapon.Light, KitWeapon.Medium, KitWeapon.Polearm, KitWeapon.Unarmed, KitWeapon.Whip].map(option => ({ value: option }))}
							optionRender={option => <div className='ds-text'>{option.data.value}</div>}
							value={feature.data.weapons}
							onChange={setProficiencyWeapons}
						/>
						<HeaderText>Броня</HeaderText>
						<Select
							style={{ width: '100%' }}
							placeholder='Броня'
							mode='multiple'
							allowClear={true}
							options={[KitArmor.Heavy, KitArmor.Light, KitArmor.Medium, KitArmor.Shield].map(option => ({ value: option }))}
							optionRender={option => <div className='ds-text'>{option.data.value}</div>}
							value={feature.data.armor}
							onChange={setProficiencyArmor}
						/>
					</div>
				);
		}

		return null;
	};

	return (
		<ErrorBoundary>
			<Modal
				content={
					<div className='hero-customize-modal'>
						<HeaderText extra={getMenu()}>
							Customize
						</HeaderText>
						<Space orientation='vertical' style={{ width: '100%' }}>
							{
								hero.features
									.filter(f => f.id !== 'default-language')
									.map(f => (
										<Expander
											key={f.id}
											title={f.name}
											extra={[
												<DangerButton key='delete' mode='clear' onConfirm={() => deleteFeature(f)} />
											]}
										>
											{getEditSection(f)}
											<ConfigFeature
												feature={f}
												hero={props.hero}
												sourcebooks={props.sourcebooks}
												options={props.options}
												setData={data => setFeatureData(f.id, data)}
											/>
										</Expander>
									))
							}
							{
								hero.features.filter(f => f.id !== 'default-language').length === 0 ?
									<Empty text='You have no customizations.' />
									: null
							}
						</Space>
					</div>
				}
				onClose={props.onClose}
			/>
		</ErrorBoundary>
	);
};
