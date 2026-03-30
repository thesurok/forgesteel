import { Markdown } from '@/components/controls/markdown/markdown';
import { NegotiationSheet } from '@/models/classic-sheets/negotiation-sheet';
import { useMemo } from 'react';

import './negotiation-responses-card.scss';

interface Props {
	negotiation: NegotiationSheet;
}

export const NegotiationResponsesCard = (props: Props) => {
	const negotiation = useMemo(() => props.negotiation, [props.negotiation]);
	return (
		<div className='negotiation-responses card'>
			<h2>Відповіді та пропозиції</h2>
			<section className='bordered'>
				<h3>Зацікавленість 5</h3>
				<h4>Так, і...</h4>
				<Markdown text={negotiation.outcomes[5]} />
			</section>

			<section className='bordered'>
				<h3>Зацікавленість 4</h3>
				<h4>Так.</h4>
				<Markdown text={negotiation.outcomes[4]} />
				<p className='reference'>
					Якщо в NPC ще є терпіння, він може<br />спонукати героїв просити кращих умов.
				</p>
			</section>

			<section className='bordered'>
				<h3>Зацікавленість 3</h3>
				<h4>Так, але...</h4>
				<Markdown text={negotiation.outcomes[3]} />
			</section>

			<section className='bordered'>
				<h3>Зацікавленість 2</h3>
				<h4>Ні, але...</h4>
				<Markdown text={negotiation.outcomes[2]} />
			</section>

			<section className='bordered'>
				<h3>Зацікавленість 1</h3>
				<h4>Ні.</h4>
				<Markdown text={negotiation.outcomes[1]} />
				<p className='reference'>
					Якщо в NPC ще є терпіння, він може<br />просити кращих умов.
				</p>
			</section>

			<section className='bordered'>
				<h3>Зацікавленість 0</h3>
				<h4>Ні, і...</h4>
				<Markdown text={negotiation.outcomes[0]} />
			</section>
		</div>
	);
};
