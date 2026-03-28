import { Button, Drawer, Flex, Select, Space } from 'antd';
import { CloseOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { Feature, FeatureClassAbilityData } from '@/models/feature';
import { Ability } from '@/models/ability';
import { AbilityModal } from '@/components/modals/ability/ability-modal';
import { AbilityPanel } from '@/components/panels/elements/ability-panel/ability-panel';
import { AbilitySelectModal } from '@/components/modals/select/ability-select/ability-select-modal';
import { Collections } from '@/utils/collections';
import { Empty } from '@/components/controls/empty/empty';
import { FeatureType } from '@/enums/feature-type';
import { Field } from '@/components/controls/field/field';
import { HeaderText } from '@/components/controls/header-text/header-text';
import { Hero } from '@/models/hero';
import { HeroClass } from '@/models/class';
import { HeroLogic } from '@/logic/hero-logic';
import { Markdown } from '@/components/controls/markdown/markdown';
import { NumberSpin } from '@/components/controls/number-spin/number-spin';
import { Options } from '@/models/options';
import { PanelMode } from '@/enums/panel-mode';
import { Sourcebook } from '@/models/sourcebook';
import { SourcebookLogic } from '@/logic/sourcebook-logic';
import { Toggle } from '@/components/controls/toggle/toggle';
import { Utils } from '@/utils/utils';
import { useState } from 'react';

interface InfoProps {
	data: FeatureClassAbilityData;
	feature: Feature;
	hero?: Hero;
	sourcebooks?: Sourcebook[];
	options: Options;
}

const getAbilityLabel = (cost: number | 'signature', plural: boolean = false) => {
	if ((cost === 'signature') || (cost === 0)) {
		return plural ? 'фірмові навички' : 'фірмову навичку';
	}

	return plural ? `${cost}-очкові навички` : `${cost}-очкову навичку`;
};

const getAbilityOptionLabel = (cost: number | 'signature') => {
	if ((cost === 'signature') || (cost === 0)) {
		return 'Оберіть фірмову навичку';
	}

	return `Оберіть ${cost}-очкову навичку`;
};

const getChooseAbilityText = (count: number, cost: number | 'signature') => {
	return `Оберіть ${count > 1 ? count : 'одну'} ${getAbilityLabel(cost, count > 1)}.`;
};

export const InfoClassAbility = (props: InfoProps) => {
	if (!props.hero) {
		return (
			<div className='ds-text'>
				{getChooseAbilityText(props.data.count, props.data.cost)}
			</div>
		);
	}

	let heroClass = props.hero.class || null;
	if (props.data.classID && props.sourcebooks) {
		// You get an ability from a different class
		heroClass = SourcebookLogic.getClasses(props.sourcebooks).find(c => c.id === props.data.classID) || null;
	}
	if (!heroClass) {
		return null;
	}

	const abilities = SourcebookLogic.getAbilitiesFromClass(heroClass, props.data.source.fromClassAbilities, props.data.source.fromSelectedSubclassAbilities, props.data.source.fromUnselectedSubclassAbilities, props.data.source.fromClassLevels, props.data.source.fromSelectedSubclassLevels, props.data.source.fromUnselectedSubclassLevels);

	if (props.data.selectedIDs.length > 0) {
		return (
			<Space orientation='vertical' style={{ width: '100%' }}>
				{
					props.data.selectedIDs.map(id => {
						const ability = abilities.find(a => a.id === id) as Ability;
						return (
							<AbilityPanel key={ability.id} ability={ability} mode={PanelMode.Full} />
						);
					})
				}
			</Space>
		);
	}

	if (!props.feature.description) {
		return (
			<div className='ds-text'>
				{getChooseAbilityText(props.data.count, props.data.cost).slice(0, -1)}{props.data.classID ? ` з класу ${heroClass.name}` : ''}.
			</div>
		);
	}

	return null;
};

interface EditProps {
	data: FeatureClassAbilityData;
	sourcebooks: Sourcebook[];
	options: Options;
	setData: (data: FeatureClassAbilityData) => void;
}

export const EditClassAbility = (props: EditProps) => {
	const [data, setData] = useState<FeatureClassAbilityData>(Utils.copy(props.data));

	const setAbilityCost = (value: number | 'signature') => {
		const copy = Utils.copy(data);
		copy.cost = value;
		setData(copy);
		props.setData(copy);
	};

	const setAbilityClassID = (value: string) => {
		const copy = Utils.copy(data);
		copy.classID = value === '' ? undefined : value;
		setData(copy);
		props.setData(copy);
	};

	const setClassAbilities = (value: boolean) => {
		const copy = Utils.copy(data);
		copy.source.fromClassAbilities = value;
		setData(copy);
		props.setData(copy);
	};

	const setSelectedSubclassAbilities = (value: boolean) => {
		const copy = Utils.copy(data);
		copy.source.fromSelectedSubclassAbilities = value;
		setData(copy);
		props.setData(copy);
	};

	const setUnselectedSubclassAbilities = (value: boolean) => {
		const copy = Utils.copy(data);
		copy.source.fromUnselectedSubclassAbilities = value;
		setData(copy);
		props.setData(copy);
	};

	const setClassLevels = (value: boolean) => {
		const copy = Utils.copy(data);
		copy.source.fromClassLevels = value;
		setData(copy);
		props.setData(copy);
	};

	const setSelectedSubclassLevels = (value: boolean) => {
		const copy = Utils.copy(data);
		copy.source.fromSelectedSubclassLevels = value;
		setData(copy);
		props.setData(copy);
	};

	const setUnselectedSubclassLevels = (value: boolean) => {
		const copy = Utils.copy(data);
		copy.source.fromUnselectedSubclassLevels = value;
		setData(copy);
		props.setData(copy);
	};

	const setCount = (value: number) => {
		const copy = Utils.copy(data);
		copy.count = value;
		setData(copy);
		props.setData(copy);
	};

	const setMinLevel = (value: number) => {
		const copy = Utils.copy(data);
		copy.minLevel = value;
		setData(copy);
		props.setData(copy);
	};

	return (
		<Space orientation='vertical' style={{ width: '100%' }}>
			<HeaderText>Параметри навичок</HeaderText>
			<Select
				style={{ width: '100%' }}
				options={[
					{ value: 'signature', label: getAbilityOptionLabel('signature') },
					{ value: 3, label: getAbilityOptionLabel(3) },
					{ value: 5, label: getAbilityOptionLabel(5) },
					{ value: 7, label: getAbilityOptionLabel(7) },
					{ value: 9, label: getAbilityOptionLabel(9) },
					{ value: 11, label: getAbilityOptionLabel(11) },
					{ value: 1, label: getAbilityOptionLabel(1) },
					{ value: 2, label: getAbilityOptionLabel(2) },
					{ value: 4, label: getAbilityOptionLabel(4) },
					{ value: 6, label: getAbilityOptionLabel(6) },
					{ value: 8, label: getAbilityOptionLabel(8) },
					{ value: 10, label: getAbilityOptionLabel(10) },
					{ value: 12, label: getAbilityOptionLabel(12) },
					{ value: 0, label: 'Оберіть навичку без вартості' }
				]}
				optionRender={option => <div className='ds-text'>{option.data.label}</div>}
				value={data.cost}
				onChange={setAbilityCost}
			/>
			<Select
				style={{ width: '100%' }}
				allowClear={!!data.classID}
				placeholder='Оберіть клас'
				options={[
					{ value: '', label: 'З вашого класу' },
					...SourcebookLogic.getClasses(props.sourcebooks).map(o => ({ value: o.id, label: `З класу ${o.name}` }))
				]}
				optionRender={option => <div className='ds-text'>{option.data.label}</div>}
				value={data.classID || ''}
				onChange={setAbilityClassID}
			/>
			<HeaderText>Джерела навичок</HeaderText>
			<Toggle label='Навички класу' value={data.source.fromClassAbilities} onChange={setClassAbilities} />
			<Toggle label='Навички вибраних підкласів' value={data.source.fromSelectedSubclassAbilities} onChange={setSelectedSubclassAbilities} />
			<Toggle label='Навички невибраних підкласів' value={data.source.fromUnselectedSubclassAbilities} onChange={setUnselectedSubclassAbilities} />
			<Toggle label='Навички з рівнів класу' value={data.source.fromClassLevels} onChange={setClassLevels} />
			<Toggle label='Навички з рівнів вибраних підкласів' value={data.source.fromSelectedSubclassLevels} onChange={setSelectedSubclassLevels} />
			<Toggle label='Навички з рівнів невибраних підкласів' value={data.source.fromUnselectedSubclassLevels} onChange={setUnselectedSubclassLevels} />
			<HeaderText>Кількість</HeaderText>
			<NumberSpin min={1} value={data.count} onChange={setCount} />
			<HeaderText>Мінімальний рівень</HeaderText>
			<NumberSpin min={1} value={data.minLevel} onChange={setMinLevel} />
		</Space>
	);
};

interface ConfigProps {
	data: FeatureClassAbilityData;
	feature: Feature;
	hero: Hero;
	sourcebooks: Sourcebook[];
	options: Options;
	setData: (data: FeatureClassAbilityData) => void;
}

export const ConfigClassAbility = (props: ConfigProps) => {
	const [abilitySelectorOpen, setAbilitySelectorOpen] = useState<boolean>(false);
	const [selectedAbility, setSelectedAbility] = useState<Ability | null>(null);

	let heroClass: HeroClass | null = props.hero.class;
	if (props.data.classID) {
		// You get an ability from a different class
		heroClass = SourcebookLogic.getClasses(props.sourcebooks).find(c => c.id === props.data.classID) || null;
	}
	if (!heroClass) {
		return null;
	}

	const currentAbilityIDs = HeroLogic.getFeatures(props.hero)
		.map(f => f.feature)
		.filter(f => f.id !== props.feature.id)
		.filter(f => f.type === FeatureType.ClassAbility)
		.flatMap(f => f.data.selectedIDs);

	const abilities = SourcebookLogic.getAbilitiesFromClass(heroClass, props.data.source.fromClassAbilities, props.data.source.fromSelectedSubclassAbilities, props.data.source.fromUnselectedSubclassAbilities, props.data.source.fromClassLevels, props.data.source.fromSelectedSubclassLevels, props.data.source.fromUnselectedSubclassLevels)
		.filter(a => a.cost === props.data.cost)
		.filter(a => a.minLevel <= props.data.minLevel)
		.filter(a => !currentAbilityIDs.includes(a.id));
	const distinctAbilities = Collections.distinct(abilities, a => a.name);
	const sortedAbilities = Collections.sort(distinctAbilities, a => a.name);

	const getAddButton = () => {
		if (sortedAbilities.length === 0) {
			return (
				<Empty text='Для цієї риси немає доступних варіантів.' />
			);
		}

		return (
			<Button className='status-warning' block={true} onClick={() => setAbilitySelectorOpen(true)}>
				Оберіть навичку
			</Button>
		);
	};

	return (
		<Space orientation='vertical' style={{ width: '100%' }}>
			<div className='ds-text'>
				{getChooseAbilityText(props.data.count, props.data.cost)}
			</div>
			{
				props.data.selectedIDs.map(id => {
					const ability = abilities.find(a => a.id === id) as Ability;
					return (
						<Flex key={ability.id} className='selection-box' align='center' gap={10}>
							<Field
								style={{ flex: '1 1 0' }}
								label={ability.name}
								value={<Markdown text={ability.description} useSpan={true} />}
							/>
							<Flex vertical={true}>
								<Button
									style={{ flex: '0 0 auto' }}
									type='text'
									title='Показати деталі'
									icon={<InfoCircleOutlined />}
									onClick={() => setSelectedAbility(ability)}
								/>
								<Button
									style={{ flex: '0 0 auto' }}
									type='text'
									title='Видалити'
									icon={<CloseOutlined />}
									onClick={() => {
										const dataCopy = Utils.copy(props.data);
										dataCopy.selectedIDs = dataCopy.selectedIDs.filter(id => id !== ability.id);
										props.setData(dataCopy);
									}}
								/>
							</Flex>
						</Flex>
					);
				})
			}
			{props.data.selectedIDs.length < props.data.count ? getAddButton() : null}
			<Drawer open={abilitySelectorOpen} onClose={() => setAbilitySelectorOpen(false)} closeIcon={null} size={500}>
				<AbilitySelectModal
					abilities={sortedAbilities}
					hero={props.hero}
					onSelect={ability => {
						setAbilitySelectorOpen(false);

						const dataCopy = Utils.copy(props.data);
						dataCopy.selectedIDs.push(ability.id);
						props.setData(dataCopy);
					}}
					onClose={() => setAbilitySelectorOpen(false)}
				/>
			</Drawer>
			<Drawer open={!!selectedAbility} onClose={() => setSelectedAbility(null)} closeIcon={null} size={500}>
				{selectedAbility ? <AbilityModal ability={selectedAbility} hero={props.hero} onClose={() => setSelectedAbility(null)} /> : null}
			</Drawer>
		</Space>
	);
};
