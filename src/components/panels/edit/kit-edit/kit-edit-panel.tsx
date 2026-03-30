import { Alert, Button, Select, Slider, Space, Tabs } from 'antd';
import { CaretDownOutlined, CaretUpOutlined, PlusOutlined, ThunderboltOutlined } from '@ant-design/icons';
import { ReactNode, useState } from 'react';
import { CheckLabel } from '@/components/controls/check-label/check-label';
import { Collections } from '@/utils/collections';
import { DangerButton } from '@/components/controls/danger-button/danger-button';
import { Empty } from '@/components/controls/empty/empty';
import { ErrorBoundary } from '@/components/controls/error-boundary/error-boundary';
import { Expander } from '@/components/controls/expander/expander';
import { FactoryLogic } from '@/logic/factory-logic';
import { Feature } from '@/models/feature';
import { FeatureEditPanel } from '@/components/panels/edit/feature-edit/feature-edit-panel';
import { FeatureLogic } from '@/logic/feature-logic';
import { Field } from '@/components/controls/field/field';
import { HeaderText } from '@/components/controls/header-text/header-text';
import { Kit } from '@/models/kit';
import { KitArmor } from '@/enums/kit-armor';
import { KitPanel } from '@/components/panels/elements/kit-panel/kit-panel';
import { KitWeapon } from '@/enums/kit-weapon';
import { MarkdownEditor } from '@/components/controls/markdown/markdown';
import { NameGenerator } from '@/utils/name-generator';
import { NumberSpin } from '@/components/controls/number-spin/number-spin';
import { Options } from '@/models/options';
import { PanelMode } from '@/enums/panel-mode';
import { SelectablePanel } from '@/components/controls/selectable-panel/selectable-panel';
import { Sourcebook } from '@/models/sourcebook';
import { StatsRow } from '@/components/panels/stats-row/stats-row';
import { TextInput } from '@/components/controls/text-input/text-input';
import { Toggle } from '@/components/controls/toggle/toggle';
import { Utils } from '@/utils/utils';

import './kit-edit-panel.scss';

interface Props {
	kit: Kit;
	sourcebooks: Sourcebook[];
	options: Options;
	mode?: PanelMode;
	onChange: (kit: Kit) => void;
}

export const KitEditPanel = (props: Props) => {
	const [kit, setKit] = useState<Kit>(props.kit);

	const getNameAndDescriptionSection = () => {
		const setName = (value: string) => {
			const copy = Utils.copy(kit);
			copy.name = value;
			setKit(copy);
			props.onChange(copy);
		};

		const setDescription = (value: string) => {
			const copy = Utils.copy(kit);
			copy.description = value;
			setKit(copy);
			props.onChange(copy);
		};

		return (
			<Space orientation='vertical' style={{ width: '100%' }}>
				<HeaderText>Name</HeaderText>
				<Space.Compact style={{ width: '100%' }}>
					<TextInput
						status={kit.name === '' ? 'warning' : ''}
						placeholder='Name'
						allowClear={true}
						value={kit.name}
						onChange={setName}
					/>
					<Button icon={<ThunderboltOutlined />} onClick={() => setName(NameGenerator.generateName())} />
				</Space.Compact>
				<HeaderText>Description</HeaderText>
				<MarkdownEditor value={kit.description} onChange={setDescription} />
			</Space>
		);
	};

	const getKitDetailsSection = () => {
		const setType = (value: string) => {
			const copy = Utils.copy(kit);
			copy.type = value;
			setKit(copy);
			props.onChange(copy);
		};

		const setArmor = (value: KitArmor[]) => {
			const copy = Utils.copy(kit);
			copy.armor = value;
			setKit(copy);
			props.onChange(copy);
		};

		const setWeapon = (value: KitWeapon[]) => {
			const copy = Utils.copy(kit);
			copy.weapon = value;
			setKit(copy);
			props.onChange(copy);
		};

		return (
			<Space orientation='vertical' style={{ width: '100%' }}>
				<HeaderText>Тип</HeaderText>
				<TextInput
					placeholder='Тип'
					allowClear={true}
					value={kit.type}
					onChange={setType}
				/>
				<Alert
					type='info'
					showIcon={true}
					title='Якщо ваш набір має тип, його можна вибрати лише з функції набору, яка вказує це значення.'
				/>
				<HeaderText>Броня</HeaderText>
				<Select
					style={{ width: '100%' }}
					status={kit.armor.length === 0 ? 'warning' : ''}
					mode='multiple'
					allowClear={true}
					placeholder='Виберіть броню'
					options={[KitArmor.Light, KitArmor.Medium, KitArmor.Heavy, KitArmor.Shield].map(option => ({ value: option }))}
					optionRender={option => <div className='ds-text'>{option.data.value}</div>}
					value={kit.armor}
					onChange={setArmor}
				/>
				<HeaderText>Зброя</HeaderText>
				<Select
					style={{ width: '100%' }}
					status={kit.weapon.length === 0 ? 'warning' : ''}
					mode='multiple'
					allowClear={true}
					placeholder='Виберіть зброю'
					options={[KitWeapon.Bow, KitWeapon.Ensnaring, KitWeapon.Heavy, KitWeapon.Light, KitWeapon.Medium, KitWeapon.Polearm, KitWeapon.Unarmed, KitWeapon.Whip].map(option => ({ value: option }))}
					optionRender={option => <div className='ds-text'>{option.data.value}</div>}
					value={kit.weapon}
					onChange={setWeapon}
				/>
			</Space>
		);
	};

	const getKitStatsEditSection = () => {
		const setStamina = (value: number) => {
			const copy = Utils.copy(kit);
			copy.stamina = value;
			setKit(copy);
			props.onChange(copy);
		};

		const setSpeed = (value: number) => {
			const copy = Utils.copy(kit);
			copy.speed = value;
			setKit(copy);
			props.onChange(copy);
		};

		const setStability = (value: number) => {
			const copy = Utils.copy(kit);
			copy.stability = value;
			setKit(copy);
			props.onChange(copy);
		};

		const setMeleeDistance = (value: number) => {
			const copy = Utils.copy(kit);
			copy.meleeDistance = value;
			setKit(copy);
			props.onChange(copy);
		};

		const setRangedDistance = (value: number) => {
			const copy = Utils.copy(kit);
			copy.rangedDistance = value;
			setKit(copy);
			props.onChange(copy);
		};

		const setDisengage = (value: number) => {
			const copy = Utils.copy(kit);
			copy.disengage = value;
			setKit(copy);
			props.onChange(copy);
		};

		return (
			<Space orientation='vertical' style={{ width: '100%' }}>
				<HeaderText>Витривалість</HeaderText>
				<NumberSpin
					min={0}
					value={kit.stamina}
					onChange={setStamina}
				/>
				<HeaderText>Швидкість</HeaderText>
				<NumberSpin
					min={0}
					value={kit.speed}
					onChange={setSpeed}
				/>
				<HeaderText>Непорушність</HeaderText>
				<NumberSpin
					min={0}
					value={kit.stability}
					onChange={setStability}
				/>
				<HeaderText>Дальність</HeaderText>
				<NumberSpin
					label='Ближній бій'
					min={0}
					value={kit.meleeDistance}
					onChange={setMeleeDistance}
				/>
				<NumberSpin
					label='Дальній'
					min={0}
					value={kit.rangedDistance}
					onChange={setRangedDistance}
				/>
				<HeaderText>Відступ</HeaderText>
				<NumberSpin
					min={0}
					value={kit.disengage}
					onChange={setDisengage}
				/>
			</Space>
		);
	};

	const getKitDamageEditSection = () => {
		const setMeleeDamage = (value: boolean) => {
			const copy = Utils.copy(kit);
			copy.meleeDamage = value ? { tier1: 0, tier2: 0, tier3: 0 } : null;
			setKit(copy);
			props.onChange(copy);
		};

		const setMeleeDamage1 = (value: number) => {
			const copy = Utils.copy(kit);
			if (copy.meleeDamage) {
				copy.meleeDamage.tier1 = value;
			}
			setKit(copy);
			props.onChange(copy);
		};

		const setMeleeDamage2 = (value: number) => {
			const copy = Utils.copy(kit);
			if (copy.meleeDamage) {
				copy.meleeDamage.tier2 = value;
			}
			setKit(copy);
			props.onChange(copy);
		};

		const setMeleeDamage3 = (value: number) => {
			const copy = Utils.copy(kit);
			if (copy.meleeDamage) {
				copy.meleeDamage.tier3 = value;
			}
			setKit(copy);
			props.onChange(copy);
		};

		const setRangedDamage = (value: boolean) => {
			const copy = Utils.copy(kit);
			copy.rangedDamage = value ? { tier1: 0, tier2: 0, tier3: 0 } : null;
			setKit(copy);
			props.onChange(copy);
		};

		const setRangedDamage1 = (value: number) => {
			const copy = Utils.copy(kit);
			if (copy.rangedDamage) {
				copy.rangedDamage.tier1 = value;
			}
			setKit(copy);
			props.onChange(copy);
		};

		const setRangedDamage2 = (value: number) => {
			const copy = Utils.copy(kit);
			if (copy.rangedDamage) {
				copy.rangedDamage.tier2 = value;
			}
			setKit(copy);
			props.onChange(copy);
		};

		const setRangedDamage3 = (value: number) => {
			const copy = Utils.copy(kit);
			if (copy.rangedDamage) {
				copy.rangedDamage.tier3 = value;
			}
			setKit(copy);
			props.onChange(copy);
		};

		return (
			<Space orientation='vertical' style={{ width: '100%' }}>
				<HeaderText>Ближній бій</HeaderText>
				<Toggle label='Ближній бій' value={!!kit.meleeDamage} onChange={setMeleeDamage} />
				{kit.meleeDamage ? <NumberSpin label='Рівень 1' min={0} value={kit.meleeDamage.tier1} onChange={setMeleeDamage1} /> : null}
				{kit.meleeDamage ? <NumberSpin label='Рівень 2' min={0} value={kit.meleeDamage.tier2} onChange={setMeleeDamage2} /> : null}
				{kit.meleeDamage ? <NumberSpin label='Рівень 3' min={0} value={kit.meleeDamage.tier3} onChange={setMeleeDamage3} /> : null}
				<HeaderText>Дальній бій</HeaderText>
				<Toggle label='Дальній бій' value={!!kit.rangedDamage} onChange={setRangedDamage} />
				{kit.rangedDamage ? <NumberSpin label='Рівень 1' min={0} value={kit.rangedDamage.tier1} onChange={setRangedDamage1} /> : null}
				{kit.rangedDamage ? <NumberSpin label='Рівень 2' min={0} value={kit.rangedDamage.tier2} onChange={setRangedDamage2} /> : null}
				{kit.rangedDamage ? <NumberSpin label='Рівень 3' min={0} value={kit.rangedDamage.tier3} onChange={setRangedDamage3} /> : null}
			</Space>
		);
	};

	const getFeaturesEditSection = () => {
		const addFeature = () => {
			const copy = Utils.copy(kit);
			copy.features.push(FactoryLogic.feature.create({
				id: Utils.guid(),
				name: '',
				description: ''
			}));
			setKit(copy);
			props.onChange(copy);
		};

		const changeFeature = (feature: Feature) => {
			const copy = Utils.copy(kit);
			const index = copy.features.findIndex(f => f.id === feature.id);
			if (index !== -1) {
				copy.features[index] = feature;
			}
			setKit(copy);
			props.onChange(copy);
		};

		const moveFeature = (feature: Feature, direction: 'up' | 'down') => {
			const copy = Utils.copy(kit);
			const index = copy.features.findIndex(f => f.id === feature.id);
			copy.features = Collections.move(copy.features, index, direction);
			setKit(copy);
			props.onChange(copy);
		};

		const deleteFeature = (feature: Feature) => {
			const copy = Utils.copy(kit);
			copy.features = copy.features.filter(f => f.id !== feature.id);
			setKit(copy);
			props.onChange(copy);
		};

		return (
			<Space orientation='vertical' style={{ width: '100%' }}>
				<HeaderText
					extra={
						<Button type='text' icon={<PlusOutlined />} onClick={addFeature} />
					}
				>
					Особливості
				</HeaderText>
				{
					kit.features.map(f => (
						<Expander
							key={f.id}
							title={f.name || 'Неназвана особливість'}
							tags={[FeatureLogic.getFeatureTag(f)]}
							extra={[
								<Button key='up' type='text' title='Move Up' icon={<CaretUpOutlined />} onClick={e => { e.stopPropagation(); moveFeature(f, 'up'); }} />,
								<Button key='down' type='text' title='Move Down' icon={<CaretDownOutlined />} onClick={e => { e.stopPropagation(); moveFeature(f, 'down'); }} />,
								<DangerButton key='delete' mode='clear' onConfirm={e => { e.stopPropagation(); deleteFeature(f); }} />
							]}
						>
							<FeatureEditPanel
								feature={f}
								sourcebooks={props.sourcebooks}
								options={props.options}
								onChange={changeFeature}
							/>
						</Expander>
					))
				}
				{
					kit.features.length === 0 ?
						<Empty />
						: null
				}
			</Space>
		);
	};

	const getTuningSection = () => {
		const powerA: { name: string, value: number }[] = [];
		const powerB: { name: string, value: number }[] = [];

		powerA.push({ name: 'Витривалість', value: Math.floor(kit.stamina / 3) });

		powerA.push({ name: 'Відступ', value: kit.disengage });

		powerA.push({ name: 'Швидкість', value: kit.speed > 0 ? 1 + kit.speed : 0 });

		powerA.push({ name: 'Непорушність', value: kit.stability > 0 ? 1 + kit.stability : 0 });

		powerB.push({ name: 'Відстань ближнього бою', value: 2 * kit.meleeDistance });

		const minMeleeDamage = kit.meleeDamage ? Math.min(kit.meleeDamage.tier1, kit.meleeDamage.tier2, kit.meleeDamage.tier3) : 0;
		let powerMeleeDamage = minMeleeDamage;
		if (kit.meleeDamage && (kit.meleeDamage.tier3 - minMeleeDamage >= 4)) {
			powerMeleeDamage += 2;
		}
		powerB.push({ name: 'Урон у ближньому бою', value: powerMeleeDamage });

		let powerRange = 0;
		if (kit.rangedDistance >= 5) {
			powerRange += 1;
		}
		if (kit.rangedDistance >= 7) {
			powerRange += 1;
		}
		if (kit.rangedDistance >= 10) {
			powerRange += 1;
		}
		powerB.push({ name: 'Відстань дальнього бою', value: powerRange });

		const minRangedDamage = kit.rangedDamage ? Math.min(kit.rangedDamage.tier1, kit.rangedDamage.tier2, kit.rangedDamage.tier3) : 0;
		let powerRangedDamage = minRangedDamage;
		if (kit.rangedDamage && (kit.rangedDamage.tier3 - minRangedDamage >= 4)) {
			powerRangedDamage += 2;
		}
		powerB.push({ name: 'Урон дальнього бою', value: powerRangedDamage });

		const power = Collections.sum([...powerA, ...powerB], p => p.value);

		const constraints: { name: string, value: boolean }[] = [];
		const gear: { name: string, value: boolean }[] = [];

		constraints.push({ name: 'Потужність набору = 8', value: power === 8 });
		constraints.push({ name: 'Максимум витривалості +12', value: kit.stamina <= 12 });
		constraints.push({ name: 'Максимум дальності +10', value: kit.rangedDistance <= 10 });
		constraints.push({ name: 'Максимум відступу +1', value: kit.disengage <= 1 });
		constraints.push({ name: 'Максимум швидкості +3', value: kit.speed <= 3 });
		constraints.push({ name: 'Максимум непорушності +3', value: kit.stability <= 3 });
		constraints.push({ name: 'Має відступ АБО непорушність', value: ((kit.disengage > 0) && (kit.stability === 0)) || ((kit.disengage === 0) && (kit.stability < 0)) });

		gear.push({ name: 'Легка броня', value: kit.stamina >= 3 });
		gear.push({ name: 'Легка броня + щит', value: kit.stamina >= 6 });
		gear.push({ name: 'Середня броня', value: kit.stamina >= 6 });
		gear.push({ name: 'Середня броня + щит', value: kit.stamina >= 9 });
		gear.push({ name: 'Важка броня', value: (kit.stamina >= 9) && (kit.stability >= 1) });
		gear.push({ name: 'Важка броня + щит', value: (kit.stamina >= 12) && (kit.stability >= 1) });
		gear.push({ name: 'Легка зброя (ближній бій)', value: minMeleeDamage >= 1 });
		gear.push({ name: 'Середня зброя (ближній бій)', value: minMeleeDamage >= 2 });
		gear.push({ name: 'Важка зброя (ближній бій)', value: !!kit.meleeDamage && (kit.meleeDamage.tier3 >= 4) });
		gear.push({ name: 'Легка зброя (дальній бій)', value: minRangedDamage >= 1 });
		gear.push({ name: 'Середня зброя (дальній бій)', value: minRangedDamage >= 2 });
		gear.push({ name: 'Важка зброя (дальній бій)', value: !!kit.rangedDamage && (kit.rangedDamage.tier3 >= 4) });

		const marks: Record<string | number, ReactNode> = {};
		marks[8] = <div className='ds-text dimmed-text small-text'>Target: 8</div>;

		return (
			<div>
				<HeaderText>Power</HeaderText>
				<Slider
					range={true}
					marks={marks}
					min={0}
					max={16}
					value={[power]}
					styles={{
						track: {
							background: 'transparent'
						}
					}}
					tooltip={{ open: false }}
				/>
				<div className='ds-text'>
					Потужність набору має дорівнювати <b>8</b>. Обчислення враховує кілька характеристик набору, наведених нижче.
				</div>
				<StatsRow>
					{powerA.map((p, n) => <Field key={n} orientation='vertical' label={p.name} value={p.value} />)}
				</StatsRow>
				<StatsRow>
					{powerB.map((p, n) => <Field key={n} orientation='vertical' label={p.name} value={p.value} />)}
				</StatsRow>
				<HeaderText>Обмеження</HeaderText>
				{
					constraints.map((c, n) => (
						<CheckLabel key={n} state={c.value ? 'success' : 'failure'}>
							<div style={{ fontWeight: c.value ? '400' : '600', opacity: c.value ? '0.5' : '1' }}>{c.name}</div>
						</CheckLabel>
					))
				}
				<HeaderText>Рекомендовані володіння</HeaderText>
				{
					gear.map((c, n) => (
						<CheckLabel key={n} state={c.value ? 'success' : 'failure'}>
							<div style={{ fontWeight: c.value ? '600' : '400', opacity: c.value ? '1' : '0.5' }}>{c.name}</div>
						</CheckLabel>
					))
				}
			</div>
		);
	};

	return (
		<ErrorBoundary>
			<div className='kit-edit-panel'>
				<div className='kit-workspace-column'>
					<Tabs
						items={[
							{
								key: '1',
								label: 'Набір',
								children: getNameAndDescriptionSection()
							},
							{
								key: '2',
								label: 'Деталі',
								children: getKitDetailsSection()
							},
							{
								key: '3',
								label: 'Характеристики',
								children: getKitStatsEditSection()
							},
							{
								key: '4',
								label: 'Урон',
								children: getKitDamageEditSection()
							},
							{
								key: '5',
								label: 'Особливості',
								children: getFeaturesEditSection()
							}
						]}
					/>
				</div>
				{
					props.mode === PanelMode.Full ?
						<div className='kit-preview-column'>
							<Tabs
								items={[
									{
										key: '1',
										label: 'Перегляд',
										children: (
											<SelectablePanel>
												<KitPanel
													kit={kit}
													sourcebooks={props.sourcebooks}
													options={props.options}
													mode={PanelMode.Full}
												/>
											</SelectablePanel>
										)
									},
									{
										key: '2',
										label: 'Балансування',
										children: getTuningSection()
									}
								]}
							/>
						</div>
						: null
				}
			</div>
		</ErrorBoundary>
	);
};
