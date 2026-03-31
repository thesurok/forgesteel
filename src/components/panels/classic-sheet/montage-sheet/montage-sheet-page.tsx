import { Hero } from '@/models/hero';
import { Montage } from '@/models/montage';
import { MontageChallengesCard } from '@/components/panels/classic-sheet/montage-sheet/montage-challenges';
import { MontageHeaderCard } from '@/components/panels/classic-sheet/montage-sheet/montage-header';
import { MontageSheetBuilder } from '@/logic/playbook-sheets/montage-sheet-builder';
import { Options } from '@/models/options';
import { SheetFormatter } from '@/logic/classic-sheet/sheet-formatter';
import { SuccessFailureTrackerCard } from '@/components/panels/classic-sheet/montage-sheet/success-failure-tracker';
import { useMemo } from 'react';

import rollT1Icon from '@/assets/icons/power-roll-t1.svg';
import rollT2Icon from '@/assets/icons/power-roll-t2.svg';
import rollT3Icon from '@/assets/icons/power-roll-t3.svg';

import './montage-sheet-page.scss';

interface Props {
	montage: Montage;
	heroes: Hero[];
	options: Options;
}

export const MontageSheetPage = (props: Props) => {
	const montage = useMemo(
		() => MontageSheetBuilder.buildMontageSheet(props.montage, props.heroes, props.options),
		[props.montage, props.heroes, props.options]
	);

	const sheetClasses = useMemo(
		() => {
			const classes = [
				'montage-sheet',
				props.options.classicSheetPageSize.toLowerCase()
			];
			if (props.options.colorSheet) {
				classes.push('color');
				classes.push(`colors-${props.options.colorScheme}`);
			}
			return classes;
		},
		[props.options.classicSheetPageSize, props.options.colorSheet, props.options.colorScheme]
	);

	return (
		<main id='classic-sheet'>
			<div className={sheetClasses.join(' ')}>
				<div className={`page page-1 ${props.options.pageOrientation}`} id={SheetFormatter.getPageId('montage', montage.id)}>
					<MontageHeaderCard montage={montage} options={props.options} />

					<div className='tests-difficulty card'>
						<h2>Складність випробування</h2>
						<div className='tests-difficulty-table'>
							<div className='header'>
								<div>Результат</div>
								<div>Легке випробування</div>
								<div>Середнє випробування</div>
								<div>Важке випробування</div>
							</div>
							<div className='result-row'>
								<div>≤ 11</div>
								<div>Успіх з наслідком</div>
								<div>Провал</div>
								<div>Провал з наслідком</div>
							</div>
							<div className='result-row'>
								<div>12-16</div>
								<div>Успіх</div>
								<div>Успіх з наслідком</div>
								<div>Провал</div>
							</div>
							<div className='result-row'>
								<div>17 +</div>
								<div>Успіх з винагородою</div>
								<div>Успіх</div>
								<div>Успіх</div>
							</div>
							<div className='result-row'>
								<div>Природні 19 або 20</div>
								<div>Успіх з винагородою</div>
								<div>Успіх з винагородою</div>
								<div>Успіх з винагородою</div>
							</div>
						</div>
						<div className='assist-roll'>
							<h3>Допомога у випробуванні</h3>
							<div className='power-roll'>
								<div className='power'>Кидок Сили + Характеристика</div>
								<div className='roll-tiers'>
									<div className='tier t1'>
										<img alt='≤ 11' className='range' src={rollT1Icon} />
										<span className='effect'>
											Ви заважаєте або погіршуєте ситуацію. Істота отримує шкоду на своє випробування
										</span>
									</div>
									<div className='tier t2'>
										<img alt='12 - 16' className='range' src={rollT2Icon} />
										<span className='effect'>
											Ваша допомога дає іншій істоті перевагу на її випробування
										</span>
									</div>
									<div className='tier t3'>
										<img alt='17 +' className='range' src={rollT3Icon} />
										<span className='effect'>
											Ваша допомога дає іншій істоті подвійну перевагу на її випробування
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>

					<SuccessFailureTrackerCard montage={montage} options={props.options} />

					<MontageChallengesCard montage={montage} options={props.options} />
				</div>
			</div>
		</main>
	);
};
