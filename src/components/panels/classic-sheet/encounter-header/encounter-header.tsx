import { EncounterSheet } from '@/models/classic-sheets/encounter-sheet';
import { Format } from '@/utils/format';
import { HeaderImage } from '@/components/panels/classic-sheet/header-image/header-image';
import { LabeledTextField } from '@/components/panels/classic-sheet/components/labeled-field';
import { Markdown } from '@/components/controls/markdown/markdown';
import { Options } from '@/models/options';
import { useMemo } from 'react';

import './encounter-header.scss';

interface Props {
	encounter: EncounterSheet;
	options: Options;
}

export const EncounterHeaderCard = (props: Props) => {
	const encounter = useMemo(() => props.encounter, [props.encounter]);

	return (
		<div className='encounter-header card'>
			<HeaderImage />
			<section className='container overview'>
				<LabeledTextField
					label='Назва сутички'
					content={encounter.name}
					additionalClasses={['name', 'no-box', 'text-left']}
				/>
				<LabeledTextField
					label='Кількість героїв'
					content={encounter.heroCount}
				/>
				<LabeledTextField
					label='Середній рівень'
					content={encounter.heroLvl}
				/>
				<LabeledTextField
					label='Перемоги героїв'
					content={encounter.heroVictories}
				/>
				<LabeledTextField
					label='Складність'
					content={Format.getEncounterDifficultyName(encounter.difficulty)}
					additionalClasses={['difficulty']}
				/>
				<LabeledTextField
					label='Перемоги'
					content={encounter.encounterVictories}
				/>
				<LabeledTextField
					label='EV'
					content={encounter.encounterEv}
				/>
			</section>
			<div className='encounter-objective'>
				<LabeledTextField
					label='Мета сутички'
					content={encounter.objective}
					additionalClasses={['objective', 'no-box', 'text-left']}
				/>
				<section className='bordered success'>
					<h3>Умова успіху</h3>
					<Markdown text={encounter.successCondition || ''} />
				</section>
				<section className='bordered failure'>
					<h3>Умова провалу</h3>
					<Markdown text={encounter.failureCondition || ''} />
				</section>
			</div>
			<div className='encounter-tracker'>
				<div className='round-tracker'>
					<LabeledTextField
						content=''
						label='Раунд'
						additionalClasses={['label-above', 'fancy']}
					/>
					<div className='reference'>
						<div className='round-1'>
							<h4>Злоба 1-го раунду</h4>
							<LabeledTextField
								content={encounter.heroCount}
								label='Герої'
								additionalClasses={['no-box']}
							/>
							<span>+ 1 +</span>
							<LabeledTextField
								content={encounter.heroVictories}
								label='Перемоги'
								additionalClasses={['no-box']}
							/>
						</div>
						<div className='round-2'>
							<h4>Злоба 2+ раунду</h4>
							<LabeledTextField
								content={encounter.heroCount}
								label='Герої'
								additionalClasses={['no-box']}
							/>
							<span>+ Раунди</span>
						</div>
					</div>
				</div>
				<div className='malice-tracker'>
					<h3>Злоба</h3>
					<div className='bordered'>&nbsp;</div>
				</div>
			</div>
		</div>
	);
};
