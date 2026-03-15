import { HeroSheet } from '@/models/classic-sheets/hero-sheet';
import { LabeledTextField } from '@/components/panels/classic-sheet/components/labeled-field';
import './potencies-card.scss';

interface Props {
	character: HeroSheet;
}

export const PotenciesCard = (props: Props) => {
	const character = props.character;
	return (
		<div className='potencies card'>
			<h3>Потужність</h3>
			<LabeledTextField
				label='Слабка'
				content={character.potencyWeak}
				additionalClasses={[ 'label-above', 'box-both' ]}
			/>
			<LabeledTextField
				label='Середня'
				content={character.potencyAverage}
				additionalClasses={[ 'label-above', 'box-both' ]}
			/>
			<LabeledTextField
				label='Сильна'
				content={character.potencyStrong}
				additionalClasses={[ 'label-above', 'box-both' ]}
			/>
		</div>
	);
};
