import { Button, Space, Tabs } from 'antd';
import { Feature, FeatureData } from '@/models/feature';
import { Empty } from '@/components/controls/empty/empty';
import { FeatureConfigPanel } from '@/components/panels/feature-config-panel/feature-config-panel';
import { FeatureLogic } from '@/logic/feature-logic';
import { HeaderText } from '@/components/controls/header-text/header-text';
import { Hero } from '@/models/hero';
import { HeroLogic } from '@/logic/hero-logic';
import { Modal } from '@/components/modals/modal/modal';
import { Options } from '@/models/options';
import { SelectablePanel } from '@/components/controls/selectable-panel/selectable-panel';
import { Sourcebook } from '@/models/sourcebook';
import { Utils } from '@/utils/utils';
import { useState } from 'react';

import './hero-level-up-modal.scss';

interface Props {
	hero: Hero;
	soucebooks: Sourcebook[];
	options: Options;
	onAccept: (hero: Hero) => void;
	onClose: () => void;
}

export const HeroLevelUpModal = (props: Props) => {
	const [hero, setHero] = useState<Hero>(() => {
		const copy = Utils.copy(props.hero);
		if (HeroLogic.canLevelUp(copy, props.options)) {
			copy.class!.level += 1;
		}
		return copy;
	});

	const getFeature = (feature: Feature) => {
		const setData = (featureID: string, data: FeatureData) => {
			const copy = Utils.copy(hero);

			FeatureLogic.getFeaturesFromClass(copy.class!, copy)
				.filter(f => f.level === hero.class!.level)
				.map(f => f.feature)
				.filter(f => f.id === featureID)
				.forEach(f => f.data = data);

			setHero(copy);
		};

		return (
			<SelectablePanel key={feature.id}>
				<FeatureConfigPanel
					feature={feature}
					hero={hero}
					sourcebooks={props.soucebooks}
					options={props.options}
					setData={setData}
				/>
			</SelectablePanel>
		);
	};

	const features = FeatureLogic.getFeaturesFromClass(hero.class!, hero)
		.filter(f => f.level === hero.class!.level)
		.map(f => f.feature);

	return (
		<Modal
			toolbar={
				<>
					<Button type='primary' disabled={features.some(f => !FeatureLogic.isChosen(f, hero))} onClick={() => props.onAccept(hero)}>Підтвердити зміни</Button>
					<Button onClick={() => props.onClose()}>Скасувати</Button>
				</>
			}
			content={
				<div className='hero-level-up-modal'>
					<HeaderText level={1}>Підвищення рівня</HeaderText>
					<div className='ds-text'>Ви отримуєте наведені нижче особливості на <b>рівні {hero.class!.level}</b>.</div>
					<Tabs
						items={[
							{
								key: '1',
								label: 'Вибір',
								children: (
									<Space orientation='vertical' style={{ width: '100%' }}>
										{features.filter(f => FeatureLogic.isChoice(f)).map(getFeature)}
										{features.filter(f => FeatureLogic.isChoice(f)).length === 0 ? <Empty /> : null}
									</Space>
								)
							},
							{
								key: '2',
								label: 'Інші особливості',
								children: (
									<Space orientation='vertical' style={{ width: '100%' }}>
										{features.filter(f => !FeatureLogic.isChoice(f)).map(getFeature)}
										{features.filter(f => !FeatureLogic.isChoice(f)).length === 0 ? <Empty /> : null}
									</Space>
								)
							}
						]}
					/>
				</div>
			}
			onClose={props.onClose}
		/>
	);
};
