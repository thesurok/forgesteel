import { Alert, Button, Divider, Drawer, Flex, Segmented, Select, Space } from 'antd';
import { CopyOutlined, FlagFilled, FlagOutlined, MoonOutlined, SettingOutlined, SunOutlined } from '@ant-design/icons';
import { AbilityData } from '@/data/ability-data';
import { Collections } from '@/utils/collections';
import { ConnectionSettings } from '@/models/connection-settings';
import { ConnectionSettingsPanel } from '@/components/panels/connection-settings/connection-settings-panel';
import { DangerButton } from '@/components/controls/danger-button/danger-button';
import { DataService } from '@/utils/data-service';
import { Empty } from '@/components/controls/empty/empty';
import { Expander } from '@/components/controls/expander/expander';
import { FeatureFlags } from '@/utils/feature-flags';
import { Field } from '@/components/controls/field/field';
import { HeaderText } from '@/components/controls/header-text/header-text';
import { Hero } from '@/models/hero';
import { LabelControl } from '@/components/controls/label-control/label-control';
import { Modal } from '@/components/modals/modal/modal';
import { NumberSpin } from '@/components/controls/number-spin/number-spin';
import { Options } from '@/models/options';
import { PanelWidth } from '@/enums/panel-width';
import { PatreonConnectPanel } from '@/components/panels/connection-settings/patreon-connect-panel';
import { SelectablePanel } from '@/components/controls/selectable-panel/selectable-panel';
import { SheetPageSize } from '@/enums/sheet-page-size';
import { StandardAbilitySelectModal } from '@/components/modals/select/standard-ability-select/standard-ability-select-modal';
import { TextInput } from '@/components/controls/text-input/text-input';
import { Toggle } from '@/components/controls/toggle/toggle';
import { Utils } from '@/utils/utils';
import { WarehouseActionsPanel } from '@/components/panels/connection-settings/warehouse-actions-panel';
import { useState } from 'react';
import { useTheme } from '@/hooks/use-theme';

import './settings-modal.scss';

interface Props {
	options: Options;
	errors: Event[];
	heroes: Hero[];
	setOptions: (options: Options) => void;
	connectionSettings: ConnectionSettings;
	dataService: DataService;
	setConnectionSettings: (settings: ConnectionSettings) => void
	clearErrors: () => void;
	onClose: () => void;
}

export const SettingsModal = (props: Props) => {
	const { themeMode, setTheme } = useTheme();
	const [options, setOptions] = useState<Options>(Utils.copy(props.options));
	const [page, setPage] = useState<string>('Налаштування');
	const [standardAbilitiesMode, setStandardAbilitiesMode] = useState<string>(() => {
		if (options.shownStandardAbilities.length === 0) {
			return 'none';
		}
		if (options.shownStandardAbilities.length === AbilityData.standardAbilities.length) {
			return 'all';
		}

		return 'custom';
	});
	const [showAbilitySelector, setShowAbilitySelector] = useState<boolean>(false);
	const [flag, setFlag] = useState<string>('');

	const [connectionSettings, setConnectionSettings] = useState<ConnectionSettings>(props.connectionSettings);
	const [reloadNeeded, setReloadNeeded] = useState<boolean>(false);

	const updateConnectionSettings = (value: ConnectionSettings) => {
		const copy = Utils.copy(value);
		setConnectionSettings(copy);
		props.setConnectionSettings(copy);
		setReloadNeeded(true);
	};

	const getAppearance = () => {
		return (
			<Expander title='Зовнішній вигляд'>
				<Space orientation='vertical' style={{ width: '100%' }}>
					<Segmented
						block={true}
						value={themeMode}
						onChange={setTheme}
						options={[
							{ label: 'Світла тема', value: 'light', icon: <SunOutlined /> },
							{ label: 'Системна', value: 'system', icon: <SettingOutlined /> },
							{ label: 'Темна тема', value: 'dark', icon: <MoonOutlined /> }
						]}
					/>
				</Space>
			</Expander>
		);
	};

	const getHeroesGeneral = () => {
		const setXPPerLevel = (value: number) => {
			const copy = Utils.copy(options);
			copy.xpPerLevel = value;
			setOptions(copy);
			props.setOptions(copy);
		};

		const setShownStandardAbilities = (value: string | string[]) => {
			const copy = Utils.copy(options);
			copy.shownStandardAbilities = [value].flat(1);
			setOptions(copy);
			props.setOptions(copy);
		};

		const setShownStandardAbilitiesValue = (value: string) => {
			setStandardAbilitiesMode(value);

			switch (value) {
				case 'none':
					setShownStandardAbilities([]);
					break;
				case 'custom':
					setShowAbilitySelector(true);
					break;
				case 'all':
					setShownStandardAbilities(AbilityData.standardAbilities.map(a => a.id));
					break;
			}
		};

		const closeStandardAbilitiesModal = () => {
			if (options.shownStandardAbilities.length === 0) {
				setStandardAbilitiesMode('none');
			} else if (options.shownStandardAbilities.length === AbilityData.standardAbilities.length) {
				setStandardAbilitiesMode('all');
			} else {
				setStandardAbilitiesMode('custom');
			}

			setShowAbilitySelector(false);
		};

		return (
			<Expander title='Герої - загальне'>
				<Space orientation='vertical' style={{ width: '100%' }}>
					<NumberSpin label='XP за рівень' min={1} value={options.xpPerLevel} onChange={setXPPerLevel} />
					<div>
						<LabelControl
							label='Показувати стандартні здібності'
							control={
								<Segmented
									block={true}
									options={[
										{ value: 'none', label: 'Жодні' },
										{ value: 'custom', label: 'Вибірково' },
										{ value: 'all', label: 'Усі' }
									]}
									value={standardAbilitiesMode}
									onChange={setShownStandardAbilitiesValue}
								/>
							}
						/>
						{
							standardAbilitiesMode === 'custom' ?
								<Button block={true} onClick={() => setShowAbilitySelector(true)}>Обрати здібності</Button>
								: null
						}
					</div>
				</Space>
				<Drawer open={showAbilitySelector} onClose={closeStandardAbilitiesModal} closeIcon={null} size={500}>
					<StandardAbilitySelectModal
						abilityIDs={options.shownStandardAbilities}
						onSelect={setShownStandardAbilities}
						onClose={closeStandardAbilitiesModal}
					/>
				</Drawer>
			</Expander>
		);
	};

	const getHeroesInteractive = () => {
		const setSeparateInventoryFeatures = (value: boolean) => {
			const copy = Utils.copy(options);
			copy.separateInventoryFeatures = value;
			setOptions(copy);
			props.setOptions(copy);
		};

		const setShowSkillsInGroups = (value: boolean) => {
			const copy = Utils.copy(options);
			copy.showSkillsInGroups = value;
			setOptions(copy);
			props.setOptions(copy);
		};

		const setShowSources = (value: boolean) => {
			const copy = Utils.copy(options);
			copy.showSources = value;
			setOptions(copy);
			props.setOptions(copy);
		};

		const setSinglePage = (value: boolean) => {
			const copy = Utils.copy(options);
			copy.singlePage = value;
			setOptions(copy);
			props.setOptions(copy);
		};

		const setCompactView = (value: boolean) => {
			const copy = Utils.copy(options);
			copy.compactView = value;
			setOptions(copy);
			props.setOptions(copy);
		};

		const setAbilityWidth = (value: PanelWidth) => {
			const copy = Utils.copy(options);
			copy.abilityWidth = value;
			setOptions(copy);
			props.setOptions(copy);
		};

		return (
			<Expander title='Герої - інтерактивний вигляд'>
				<Space orientation='vertical' style={{ width: '100%' }}>
					<Toggle label='Відокремлювати риси інвентарю' value={options.separateInventoryFeatures} onChange={setSeparateInventoryFeatures} />
					<Toggle label='Показувати навички за групами' value={options.showSkillsInGroups} onChange={setShowSkillsInGroups} />
					<Toggle label='Показувати джерела рис / здібностей' value={options.showSources} onChange={setShowSources} />
					<LabelControl
						label='Ширина картки здібності'
						control={
							<Segmented
								name='abilitywidth'
								block={true}
								disabled={options.compactView}
								options={[
									{ value: PanelWidth.Narrow, label: 'S' },
									{ value: PanelWidth.Medium, label: 'M' },
									{ value: PanelWidth.Wide, label: 'L' },
									{ value: PanelWidth.ExtraWide, label: 'XL' }
								]}
								value={options.abilityWidth}
								onChange={setAbilityWidth}
							/>
						}
					/>
					<div>
						<HeaderText level={3}>Вигляд</HeaderText>
						<Toggle label='Одна сторінка' value={options.singlePage} onChange={setSinglePage} />
						<Toggle label='Компактний' value={options.compactView} onChange={setCompactView} />
					</div>
				</Space>
			</Expander>
		);
	};

	const getHeroesClassic = () => {
		const setIncludePlayState = (value: boolean) => {
			const copy = Utils.copy(options);
			copy.includePlayState = value;
			setOptions(copy);
			props.setOptions(copy);
		};

		const setShowPowerRollCalculation = (value: boolean) => {
			const copy = Utils.copy(options);
			copy.showPowerRollCalculation = value;
			setOptions(copy);
			props.setOptions(copy);
		};

		const setFeaturesInclude = (value: 'minimal' | 'no-basic' | 'all') => {
			const copy = Utils.copy(options);
			copy.featuresInclude = value;
			setOptions(copy);
			props.setOptions(copy);
		};

		return (
			<Expander title='Герої - класичний вигляд'>
				<Space orientation='vertical' style={{ width: '100%' }}>
					<Toggle label='Показувати стан гри' value={options.includePlayState} onChange={setIncludePlayState} />
					<Toggle label='Обчислювати бонуси кидка сили' value={options.showPowerRollCalculation} onChange={setShowPowerRollCalculation} />
					<LabelControl
						label='Показувати класові риси'
						control={
							<Select
								style={{ width: '100%' }}
								options={[
									{
										value: 'minimal',
										label: 'Мінімально',
										desc: 'Без здібностей; лише перки, текстові риси та подібне.'
									},
									{
										value: 'no-basic',
										label: 'Без простого',
										desc: 'Не показує речі на кшталт бонусів, навичок, мов тощо; але все ще показує здібності.'
									},
									{
										value: 'all',
										label: 'Усе',
										desc: 'Показує всі риси. Корисно, щоб бачити, звідки на аркуші беруться всі числа.'
									}
								]}
								optionRender={option => <Field label={option.data.label} value={option.data.desc} />}
								value={options.featuresInclude}
								onChange={setFeaturesInclude}
							/>
						}
					/>
				</Space>
			</Expander>
		);
	};

	const getClassicView = () => {
		const setClassicSheetPageSize = (value: SheetPageSize) => {
			const copy = Utils.copy(options);
			copy.classicSheetPageSize = value;
			setOptions(copy);
			props.setOptions(copy);
		};

		const setPageOrientation = (value: 'portrait' | 'landscape') => {
			const copy = Utils.copy(options);
			copy.pageOrientation = value;
			setOptions(copy);
			props.setOptions(copy);
		};

		const setColorSheet = (value: boolean) => {
			const copy = Utils.copy(options);
			copy.colorSheet = value;
			setOptions(copy);
			props.setOptions(copy);
		};

		const setColorScheme = (value: 'community' | 'classic') => {
			const copy = Utils.copy(options);
			copy.colorScheme = value;
			setOptions(copy);
			props.setOptions(copy);
		};

		const changeTextColor = (newColor: 'light' | 'default' | 'dark') => {
			setDrawColor(newColor);
			setSheetTextColor(newColor);
		};

		const setDrawColor = (newColor: 'light' | 'default' | 'dark') => {
			let value = 34;
			switch (newColor) {
				case 'light':
					value = 68;
					break;
				case 'dark':
					value = 0;
					break;
			}
			const base = `rgb(${value}, ${value}, ${value})`;
			document.documentElement.style.setProperty('--color-text', base);
			const lighter = `rgb(${value + 34}, ${value + 34}, ${value + 34})`;
			document.documentElement.style.setProperty('--color-text-lighter', lighter);
			const lightest = `rgb(${value + 68}, ${value + 68}, ${value + 68})`;
			document.documentElement.style.setProperty('--color-text-lightest', lightest);
		};
		setDrawColor(options.sheetTextColor);

		const setSheetTextColor = (value: 'light' | 'default' | 'dark') => {
			const copy = Utils.copy(options);
			copy.sheetTextColor = value;
			setOptions(copy);
			props.setOptions(copy);
		};

		const setDebugClassicSheet = (value: boolean) => {
			const copy = Utils.copy(options);
			copy.debugClassicSheet = value;
			setOptions(copy);
			props.setOptions(copy);
		};

		return (
			<Expander title='Класичний вигляд'>
				<Space orientation='vertical' style={{ width: '100%' }}>
					<LabelControl
						label='Формат сторінки'
						control={
							<Segmented
								name='pagesize'
								block={true}
								options={[SheetPageSize.Letter, SheetPageSize.A4]}
								value={options.classicSheetPageSize}
								onChange={setClassicSheetPageSize}
							/>
						}
					/>
					<LabelControl
						label='Орієнтація'
						control={
							<Segmented
								name='orientation'
								block={true}
								options={[
									{ value: 'portrait', label: 'Книжкова' },
									{ value: 'landscape', label: 'Альбомна' }
								]}
								value={options.pageOrientation}
								onChange={setPageOrientation}
							/>
						}
					/>
					<Toggle label='Використовувати колір' value={options.colorSheet} onChange={setColorSheet} />
					{
						options.colorSheet &&
						<LabelControl
							label='Колірна схема'
							control={
								<Segmented
									name='colorScheme'
									block={true}
									options={[
										{ value: 'community', label: 'Спільнотна' },
										{ value: 'classic', label: 'Класична' }
									]}
									value={options.colorScheme}
									onChange={setColorScheme}
								/>
							}
						/>
					}
					<LabelControl
						label='Контраст тексту'
						control={
							<Segmented
								name='textColor'
								block={true}
								options={[
									{ value: 'dark', label: 'Вищий' },
									{ value: 'default', label: 'Типовий' },
									{ value: 'light', label: 'Нижчий' }
								]}
								value={options.sheetTextColor}
								onChange={changeTextColor}
							/>
						}
					/>
					<Toggle label='Налагодження класичного аркуша' value={options.debugClassicSheet} onChange={setDebugClassicSheet} />
				</Space>
			</Expander>
		);
	};

	const getMonsterBuilder = () => {
		const setSimilarLevel = (value: boolean) => {
			const copy = Utils.copy(options);
			copy.similarLevel = value;
			setOptions(copy);
			props.setOptions(copy);
		};

		const setSimilarRole = (value: boolean) => {
			const copy = Utils.copy(options);
			copy.similarRole = value;
			setOptions(copy);
			props.setOptions(copy);
		};

		const setSimilarOrganization = (value: boolean) => {
			const copy = Utils.copy(options);
			copy.similarOrganization = value;
			setOptions(copy);
			props.setOptions(copy);
		};

		const setSimilarSize = (value: boolean) => {
			const copy = Utils.copy(options);
			copy.similarSize = value;
			setOptions(copy);
			props.setOptions(copy);
		};

		return (
			<Expander title='Конструктор чудовиськ'>
				<Space orientation='vertical' style={{ width: '100%' }}>
					<div className='ds-text'>Показувати дані зі схожих чудовиськ за такими полями:</div>
					<Toggle label='Рівень чудовиська' value={options.similarLevel} onChange={setSimilarLevel} />
					<Toggle label='Роль чудовиська' value={options.similarRole} onChange={setSimilarRole} />
					<Toggle label='Організація чудовиська' value={options.similarOrganization} onChange={setSimilarOrganization} />
					<Toggle label='Розмір чудовиська' value={options.similarSize} onChange={setSimilarSize} />
				</Space>
			</Expander>
		);
	};

	const getEncounterRunner = () => {
		const setParty = (value: string) => {
			const copy = Utils.copy(options);
			copy.party = value;
			setOptions(copy);
			props.setOptions(copy);
		};

		const setShowDefeatedCombatants = (value: boolean) => {
			const copy = Utils.copy(options);
			copy.showDefeatedCombatants = value;
			setOptions(copy);
			props.setOptions(copy);
		};

		const parties = Collections
			.distinct(props.heroes.map(h => h.folder), f => f)
			.sort()
			.filter(f => !!f);

		return (
			<Expander title='Ведення сутички'>
				<Space orientation='vertical' style={{ width: '100%' }}>
					<Toggle label='Показувати переможених учасників' value={options.showDefeatedCombatants} onChange={setShowDefeatedCombatants} />
					{
						parties.length > 0 ?
							<LabelControl
								label='Починати сутички з'
								control={
									<Select
										style={{ width: '100%' }}
										placeholder='Оберіть групу'
										options={['', ...parties].map(p => ({ value: p, label: p || 'Без героїв' }))}
										optionRender={option => <div className='ds-text'>{option.data.label}</div>}
										value={options.party}
										onChange={p => setParty(p || '')}
									/>
								}
							/>
							: null
					}
				</Space>
			</Expander>
		);
	};

	const getDifficulty = () => {
		const setHeroParty = (value: string) => {
			const copy = Utils.copy(options);
			copy.heroParty = value;
			setOptions(copy);
			props.setOptions(copy);
		};

		const setHeroCount = (value: number) => {
			const copy = Utils.copy(options);
			copy.heroCount = value;
			setOptions(copy);
			props.setOptions(copy);
		};

		const setHeroLevel = (value: number) => {
			const copy = Utils.copy(options);
			copy.heroLevel = value;
			setOptions(copy);
			props.setOptions(copy);
		};

		const setHeroVictories = (value: number) => {
			const copy = Utils.copy(options);
			copy.heroVictories = value;
			setOptions(copy);
			props.setOptions(copy);
		};

		const parties = Collections
			.distinct(props.heroes.map(h => h.folder), f => f)
			.sort()
			.filter(f => !!f);

		return (
			<Expander title='Складність сутичок / монтажів'>
				<Space orientation='vertical' style={{ width: '100%' }}>
					<LabelControl
						label='Обчислювати складність на основі цих героїв'
						control={
							<Select
								style={{ width: '100%' }}
								placeholder='Оберіть групу'
								options={[...parties, ''].map(p => ({ value: p, label: p || 'Довільна група' }))}
								optionRender={option => <div className='ds-text'>{option.data.label}</div>}
								value={options.heroParty}
								onChange={p => setHeroParty(p || '')}
							/>
						}
					/>
					{
						options.heroParty === '' ?
							<>
								<NumberSpin label='Кількість героїв' min={1} value={options.heroCount} onChange={setHeroCount} />
								<NumberSpin label='Рівень героїв' min={1} max={10} value={options.heroLevel} onChange={setHeroLevel} />
								<NumberSpin label='Кількість перемог' min={0} value={options.heroVictories} onChange={setHeroVictories} />
							</>
							: null
					}
				</Space>
			</Expander>
		);
	};

	const getTacticalMaps = () => {
		const setGridSize = (value: number) => {
			const copy = Utils.copy(options);
			copy.gridSize = value;
			setOptions(copy);
			props.setOptions(copy);
		};

		const setPlayerGridSize = (value: number) => {
			const copy = Utils.copy(options);
			copy.playerGridSize = value;
			setOptions(copy);
			props.setOptions(copy);
		};

		return (
			<Expander title='Тактичні мапи'>
				<Space orientation='vertical' style={{ width: '100%' }}>
					<NumberSpin label='Розмір сітки мапи Директора' min={5} steps={[5]} value={options.gridSize} onChange={setGridSize} />
					<NumberSpin label='Розмір сітки мапи гравців' min={5} steps={[5]} value={options.playerGridSize} onChange={setPlayerGridSize} />
				</Space>
			</Expander>
		);
	};

	const getFeatureFlags = () => {
		return (
			<Expander title='Прапорці функцій'>
				<Space orientation='vertical' style={{ width: '100%' }}>
					<Flex align='center' justify='space-between' gap={10}>
						<TextInput
							placeholder='Введіть код прапорця функції'
							allowClear={true}
							value={flag}
							onChange={flag => {
								// console.error(`${flag}: ${Utils.hashCode(flag)}`);
								setFlag(flag);
							}}
						/>
						{
							flag && FeatureFlags.flagExists(Utils.hashCode(flag)) && !FeatureFlags.hasFlag(Utils.hashCode(flag)) ?
								<Button
									icon={<FlagOutlined />}
									onClick={() => {
										FeatureFlags.add(Utils.hashCode(flag));
										setFlag('');
									}}
								/>
								: null
						}
					</Flex>
					{
						FeatureFlags.active().map(flag => (
							<div key={flag.code} className='feature-flag'>
								<FlagFilled style={{ color: 'rgb(64, 150, 255)' }} />
								<div className='ds-text' style={{ flex: '1 1 0' }}>{flag.description}</div>
								<DangerButton
									mode='clear'
									message='Видалення цього прапорця перезавантажить застосунок.'
									onConfirm={() => {
										FeatureFlags.remove(flag.code);
										window.location.reload();
									}}
								/>
							</div>
						))
					}
					{
						FeatureFlags.active().length === 0 ?
							<Empty />
							: null
					}
				</Space>
			</Expander>
		);
	};

	const getWarehouseSettings = () => {
		if (FeatureFlags.hasFlag(FeatureFlags.warehouse.code)) {
			return (
				<Expander title='Склад Forge Steel'>
					<Space orientation='vertical' style={{ width: '100%' }}>
						{
							connectionSettings.useWarehouse ?
								<>
									<WarehouseActionsPanel
										connectionSettings={connectionSettings}
									/>
									<Divider size='small' />
								</>
								: null
						}
						<ConnectionSettingsPanel
							connectionSettings={connectionSettings}
							setConnectionSettings={updateConnectionSettings}
						/>
						{
							reloadNeeded ?
								<Alert
									title='Перезавантажте Forge Steel, щоб застосувати нові параметри'
									type='info'
									showIcon
									action={
										<Button size='small' type='primary' onClick={() => location.reload()}>
											Перезавантажити
										</Button>
									}
								/>
								: null
						}
					</Space>
				</Expander>
			);
		}
	};

	const getPatreonSettings = () => {
		if (FeatureFlags.hasFlag(FeatureFlags.patreon.code)) {
			return (
				<Expander title='Patreon'>
					<PatreonConnectPanel
						connectionSettings={connectionSettings}
						setConnectionSettings={updateConnectionSettings}
						dataService={props.dataService}
					/>
				</Expander>
			);
		}
	};

	const getErrors = () => {
		const clearErrors = () => {
			props.clearErrors();
			props.onClose();
		};

		const getError = (event: Event, index: number) => {
			let message = '';
			let output = '';
			const fields: { label: string, value: string }[] = [
				{ label: 'Тип', value: `${event.type}` }
			];

			if (event.type === 'error') {
				const error = event as ErrorEvent;

				message = error.message;
				output = `title ${error.message}, file ${error.filename}, line ${error.lineno}, col ${error.colno}, data ${JSON.stringify(error.error)}`;

				fields.push({ label: 'Розташування', value: `${error.filename}, рядок ${error.lineno}, стовпець ${error.colno}` });
				fields.push({ label: 'Дані', value: JSON.stringify(error.error) });
			}

			if (event.type === 'unhandledrejection') {
				const error = event as PromiseRejectionEvent;

				message = JSON.stringify(error.reason);
				output = `reason ${JSON.stringify(error.reason)}`;
			}

			return (
				<SelectablePanel key={index}>
					<HeaderText
						extra={
							<Button
								type='text'
								icon={<CopyOutlined />}
								onClick={() => navigator.clipboard.writeText(output)}
							/>
						}
					>
						{message}
					</HeaderText>
					{fields.map((field, n) => <Field key={n} label={field.label} value={field.value} />)}
				</SelectablePanel>
			);
		};

		return props.errors.length > 0 ?
			<Expander
				title='Журнал'
				extra={[
					<DangerButton key='clear' mode='clear' onConfirm={clearErrors} />
				]}
			>
				<Space orientation='vertical' style={{ width: '100%' }}>
					{props.errors.map(getError)}
				</Space>
			</Expander>
			: null;
	};

	const getContent = () => {
		switch (page) {
			case 'Налаштування':
				return (
					<Space orientation='vertical' style={{ width: '100%' }}>
						{getAppearance()}
						{getHeroesGeneral()}
						{getHeroesInteractive()}
						{getHeroesClassic()}
						{getClassicView()}
						{getMonsterBuilder()}
						{getEncounterRunner()}
						{getDifficulty()}
						{getTacticalMaps()}
					</Space>
				);
			case 'Адміністрування':
				return (
					<Space orientation='vertical' style={{ width: '100%' }}>
						{getFeatureFlags()}
						{getWarehouseSettings()}
						{getPatreonSettings()}
						{getErrors()}
					</Space>
				);
		}

		return null;
	};

	return (
		<Modal
			toolbar={
				<Flex align='center' justify='center' style={{ width: '100%' }}>
					<Segmented
						name='tabs'
						options={['Налаштування', 'Адміністрування']}
						value={page}
						onChange={setPage}
					/>
				</Flex>
			}
			content={
				<div className='settings-modal'>
					{getContent()}
				</div>
			}
			onClose={props.onClose}
		/>
	);
};
