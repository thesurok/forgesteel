import { HeaderImage } from '@/components/panels/classic-sheet/header-image/header-image';
import { LabeledTextField } from '@/components/panels/classic-sheet/components/labeled-field';
import { MontageSheet } from '@/models/classic-sheets/montage-sheet';
import { Options } from '@/models/options';
import { useMemo } from 'react';

import './montage-header.scss';

interface Props {
	montage: MontageSheet;
	options: Options;
}

export const MontageHeaderCard = (props: Props) => {
	const montage = useMemo(() => props.montage, [props.montage]);

	const getDifficultyTable = () => {
		return (
			<div className='difficulty-table'>
				<h2>Складність випробування монтажу</h2>
				<table>
					<thead>
						<tr>
							<th>Складність</th>
							<th>Ліміт успіху</th>
							<th>Ліміт провалу</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Легка</td>
							<td>5</td>
							<td>5</td>
						</tr>
						<tr>
							<td>Стандартна</td>
							<td>6</td>
							<td>4</td>
						</tr>
						<tr>
							<td>Важка</td>
							<td>7</td>
							<td>3</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	};

	const getLimitsBoxes = () => {
		return (
			<>
				<LabeledTextField
					label='Ліміт успіху'
					content={montage.successLimit}
					additionalClasses={['box-both', 'label-above']}
				/>
				<LabeledTextField
					label='Ліміт провалу'
					content={montage.failureLimit}
					additionalClasses={['box-both', 'label-above']}
				/>
				<LabeledTextField
					label='Складність'
					content={montage.difficulty}
					additionalClasses={['box-both', 'label-above']}
				/>
			</>
		);
	};

	const getLimitsSection = () => {
		if (montage.difficulty) {
			return getLimitsBoxes();
		} else {
			return getDifficultyTable();
		}
	};

	return (
		<div className='montage-header card'>
			<HeaderImage />
			<section className='container overview'>
				<LabeledTextField
					label='Монтаж'
					content={montage.name}
					additionalClasses={['name', 'no-box', 'text-left']}
				/>
			</section>
			<section className='container stats'>
				<LabeledTextField
					label='Раунди'
					content='2'
					additionalClasses={['num-rounds', 'box-both', 'label-above']}
				/>
				<LabeledTextField
					label='К-сть героїв'
					content={montage.numHeroes}
					additionalClasses={['box-both', 'label-above']}
				/>
				{getLimitsSection()}
			</section>
		</div>
	);
};
