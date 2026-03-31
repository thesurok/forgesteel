import { LabeledTextField } from '@/components/panels/classic-sheet/components/labeled-field';
import { MontageSheet } from '@/models/classic-sheets/montage-sheet';
import { Options } from '@/models/options';
import { useMemo } from 'react';

import './success-failure-tracker.scss';

interface Props {
	montage: MontageSheet;
	options: Options;
}

export const SuccessFailureTrackerCard = (props: Props) => {
	const montage = useMemo(() => props.montage, [props.montage]);

	return (
		<div className='success-failure-tracker card'>
			<div className='success-failures'>
				<div className='tracker'>
					<label>Успіхи</label>
					<div className='current-successes'>
						<LabeledTextField
							label='Поточне'
							content=''
							additionalClasses={['no-box']}
						/>
					</div>
					<div className='limits'>
						<LabeledTextField
							label='Ліміт успіху'
							content={montage.successLimit}
							additionalClasses={['no-box']}
						/>
						<LabeledTextField
							label='Ліміт провалу'
							content={montage.failureLimit}
							additionalClasses={['no-box']}
						/>
					</div>
					<div className='current-failures'>
						<LabeledTextField
							label='Поточне'
							content=''
							additionalClasses={['no-box']}
						/>
					</div>
					<label>Провали</label>
				</div>
				<div className='info'><strong>Ліміт -1</strong> за кожного героя &lt;5 (мінімум 2)</div>
				<div className='info'><strong>Ліміт +1</strong> за кожного героя &gt;5</div>
			</div>
			<div className='outcomes'>
				<section className='bordered'>
					<h3>Повний успіх</h3>
					<p>{montage.outcomes.totalSuccess}</p>
				</section>
				<section className='bordered'>
					<h3>Частковий успіх</h3>
					<p>{montage.outcomes.partialSuccess}</p>
				</section>
				<section className='bordered'>
					<h3>Повний провал</h3>
					<p>{montage.outcomes.totalFailure}</p>
				</section>
			</div>
		</div>
	);
};
