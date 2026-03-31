import { Fragment, useMemo } from 'react';
import { EncounterSheet } from '@/models/classic-sheets/encounter-sheet';
import { FeatureComponent } from '@/components/panels/classic-sheet/components/feature-component';
import { Options } from '@/models/options';

import './malice-card.scss';

interface Props {
	encounter: EncounterSheet;
	options: Options;
}

export const MaliceCard = (props: Props) => {
	const encounter = useMemo(() => props.encounter, [props.encounter]);

	return (
		<div className='malice card'>
			<h2>
				Особливості злоби
				<br />
				<span>На початку ходу чудовиська ви можете витратити Злобу, щоб активувати особливість злоби</span>
			</h2>
			<div className='malice-features features-container three-column'>
				{encounter.malice?.map(m => {
					return (
						<Fragment key={`malice-group-${m.monster}`}>
							{m.malice.map((malice, i) =>
								<Fragment key={malice.id}>
									{i === 0 ? <h3>{m.monster} Злоба</h3> : null}
									<FeatureComponent feature={malice} />
								</Fragment>
							)}
						</Fragment>
					);
				})}
			</div>
		</div>
	);
};
