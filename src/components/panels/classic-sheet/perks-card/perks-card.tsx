import { FeatureComponent } from '@/components/panels/classic-sheet/components/feature-component';
import { HeroSheet } from '@/models/classic-sheets/hero-sheet';
import './perks-card.scss';

interface Props {
	character: HeroSheet;
}

export const PerksCard = (props: Props) => {
	const character = props.character;

	let moreInRef;
	if (character.featuresReferenceOther?.find(r => r.source === 'Perks')) {
		moreInRef = (<div key='more'><em>Залишкові переваги в довіднику…</em></div>);
	}
	return (
		<div className='perks card'>
			<h2>Походження Особливості та Переваги</h2>
			<div className='features-container two-column'>
				{character.ancestryTraitsPerksCombined?.map(f =>
					<FeatureComponent
						key={f.id}
						feature={f}
						hero={character.hero}
					/>
				)}
				{moreInRef}
			</div>
		</div>
	);
};
