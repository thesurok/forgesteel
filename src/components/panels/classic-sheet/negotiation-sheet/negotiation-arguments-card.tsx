import { LabeledBooleanField } from '@/components/panels/classic-sheet/components/labeled-field';

import rollT1Icon from '@/assets/icons/power-roll-t1.svg';
import rollT2Icon from '@/assets/icons/power-roll-t2.svg';
import rollT3Icon from '@/assets/icons/power-roll-t3.svg';

import './negotiation-arguments-card.scss';

export const NegotiationArgumentsCard = () => {
	return (
		<div className='negotiation-arguments card'>
			<h2>Аргументи</h2>
			<div className='arguments-tracker-table'>
				<div className='header row'>
					<div>Аргумент</div>
					<div>Використано мотив?</div>
				</div>
				{
					[...Array(6)].map((_e, i) => {
						return (
							<div className='row' key={`negotiaion-arguments-${i}`}>
								<div className='motivation-indicator'>
									<LabeledBooleanField value={false} label='' />
									<div className='space'>&nbsp;</div>
								</div>
							</div>
						);
					})
				}
			</div>

			<div className='reference-rolls'>
				<div className='appeal-roll'>
					<h3>Звернення до мотиву</h3>
					<div className='power-roll'>
						<div className='power'>Кидок сили + Розум, Інтуїція або Присутність:</div>
						<div className='roll-tiers'>
							<div className='tier t1'>
								<img alt='≤ 11' className='range' src={rollT1Icon} />
								<span className='effect'>
									Терпіння NPC знижується на 1.
								</span>
							</div>
							<div className='tier t2'>
								<img alt='12 - 16' className='range' src={rollT2Icon} />
								<span className='effect'>
									Зацікавленість NPC зростає на 1, а його терпіння знижується на 1.
								</span>
							</div>
							<div className='tier t3'>
								<img alt='17 +' className='range' src={rollT3Icon} />
								<span className='effect'>
									Зацікавленість NPC зростає на 1, а його терпіння не змінюється.
								</span>
							</div>
						</div>
					</div>
					<p>
						Якщо герої намагаються звернутися до мотиву, до якого вже
						зверталися, зацікавленість NPC не змінюється, а його
						терпіння знижується на 1.
					</p>
				</div>
				<div className='standard-roll'>
					<h3>Без мотиву чи вади</h3>
					<div className='power-roll'>
						<div className='power'>Кидок сили + Розум, Інтуїція або Присутність:</div>
						<div className='roll-tiers'>
							<div className='tier t1'>
								<img alt='≤ 11' className='range' src={rollT1Icon} />
								<span className='effect'>
									Терпіння NPC знижується на 1, а його зацікавленість знижується на 1.
								</span>
							</div>
							<div className='tier t2'>
								<img alt='12 - 16' className='range' src={rollT2Icon} />
								<span className='effect'>
									Терпіння NPC знижується на 1.
								</span>
							</div>
							<div className='tier t3'>
								<img alt='17 +' className='range' src={rollT3Icon} />
								<span className='effect'>
									Зацікавленість NPC зростає на 1, а його терпіння знижується на 1.
									(При природних 19 або 20 терпіння NPC не змінюється.)
								</span>
							</div>
						</div>
					</div>
					<p>
						Якщо герої вдруге намагаються використати той самий аргумент без мотиву чи вади,
						випробування автоматично отримує результат 1 рівня.
					</p>
				</div>
			</div>
		</div>
	);
};
