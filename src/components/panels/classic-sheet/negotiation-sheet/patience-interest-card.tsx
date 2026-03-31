import { LabeledBooleanField } from '@/components/panels/classic-sheet/components/labeled-field';
import { NegotiationSheet } from '@/models/classic-sheets/negotiation-sheet';
import { useMemo } from 'react';

import './patience-interest-card.scss';

interface Props {
	negotiation: NegotiationSheet;
}

export const PatienceInterestCard = (props: Props) => {
	const negotiation = useMemo(() => props.negotiation, [props.negotiation]);

	return (
		<div className='negotiation-patience-interest card'>
			<div className='patience'>
				<label>Терпіння</label>
				<div className='current-patience'>
					<div className='field'>
						{negotiation.patience}
					</div>
					<p className='reference'>
						<strong>Терпіння 0:</strong>
						<br />
						NPC робить остаточну пропозицію
					</p>
				</div>
				<div className='patience-reference'>
					<p className='reference'>Один герой розмовляє рідною мовою NPC (не Келіан (Caelian)): <strong>Терпіння +1</strong></p>
					<p className='reference'>Троє або більше героїв розмовляють рідною мовою NPC (не Келіан (Caelian)): <strong>Терпіння +2</strong></p>
				</div>
			</div>
			<div className='interest'>
				<label>Зацікавленість</label>
				<div className='interest-tracker'>
					<div className='tracker'>
						<div className={`start-point start-${negotiation.interest}`}>
							<LabeledBooleanField value={false} label='0' />
							<LabeledBooleanField value={false} label='1' />
							<LabeledBooleanField value={false} label='2' />
							<LabeledBooleanField value={false} label='3' />
							<LabeledBooleanField value={false} label='4' />
							<LabeledBooleanField value={false} label='5' />
						</div>
					</div>
					<div className='reference'>
						<div className='ref-0'>NPC завершує переговори</div>
						<div className='ref-5'>NPC робить остаточну пропозицію</div>
					</div>
				</div>
				<div className='renown'>
					<p className='renown-level'>
						<strong>Відомість героя ≥ {negotiation.impression}</strong> (показник враження NPC)
					</p>
					<p>
						<strong>Герой відомий NPC:</strong>
						<br />
						Перевага на випробування з навичками Флірт, Лідерство або Переконання
					</p>
					<p>
						<strong>Герой сумнозвісний для NPC:</strong>
						<br />
						Перевага на випробування з навичками Вихваляння, Допит або Залякування
					</p>
				</div>
			</div>
		</div>
	);
};
