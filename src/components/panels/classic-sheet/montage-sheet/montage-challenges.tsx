import { LabeledBooleanField } from '@/components/panels/classic-sheet/components/labeled-field';
import { Markdown } from '@/components/controls/markdown/markdown';
import { MontageSheet } from '@/models/classic-sheets/montage-sheet';
import { Options } from '@/models/options';
import { useMemo } from 'react';

import './montage-challenges.scss';

interface Props {
	montage: MontageSheet;
	options: Options;
}

export const MontageChallengesCard = (props: Props) => {
	const montage = useMemo(() => props.montage, [props.montage]);

	return (
		<div className='montage-challenges card'>
			<h2>Виклики</h2>
			<div className='hazards-events'>
				<section className='bordered'>
					<h3>Небезпеки</h3>
					<Markdown text={montage.hazards} />
				</section>
				<section className='bordered'>
					<h3>Події</h3>
					<Markdown text={montage.eventsNotes} />
				</section>
			</div>
			<div className='test-table'>
				<div className='header'>
					<div>Раунд</div>
					<div>Герой</div>
					<div>Випробування</div>
					<div>Навичка</div>
					<div>Результат</div>
				</div>
				{[...Array(12)].map((_o, i) => {
					return (
						<div className='row' key={`challenge-result-table-test-${i}`}>
							<div>&nbsp;</div>
							<div>&nbsp;</div>
							<div>&nbsp;</div>
							<div>&nbsp;</div>
							<div className='test-result'>
								<LabeledBooleanField value={false} label='Успіх' />
								<LabeledBooleanField value={false} label='Провал' />
							</div>
						</div>
					);
				})}

				<div className='header'>
					<div>Раунд</div>
					<div>Герой</div>
					<div>Допомагає</div>
					<div>Навичка</div>
					<div>Результат</div>
				</div>
				{[...Array(5)].map((_o, i) => {
					return (
						<div className='row' key={`challenge-result-table-assist-${i}`}>
							<div>&nbsp;</div>
							<div>&nbsp;</div>
							<div>&nbsp;</div>
							<div>&nbsp;</div>
							<div className='test-result'>
								<LabeledBooleanField value={false} label='T1' />
								<LabeledBooleanField value={false} label='T2' />
								<LabeledBooleanField value={false} label='T3' />
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
