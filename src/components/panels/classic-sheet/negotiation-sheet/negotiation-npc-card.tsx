import { Markdown } from '@/components/controls/markdown/markdown';
import { NegotiationLogic } from '@/logic/negotiation-logic';
import { NegotiationSheet } from '@/models/classic-sheets/negotiation-sheet';
import { useMemo } from 'react';

import rollT1Icon from '@/assets/icons/power-roll-t1.svg';
import rollT2Icon from '@/assets/icons/power-roll-t2.svg';
import rollT3Icon from '@/assets/icons/power-roll-t3.svg';

import './negotiation-npc-card.scss';

interface Props {
	negotiation: NegotiationSheet;
}

export const NegotiationNpcCard = (props: Props) => {
	const negotiation = useMemo(() => props.negotiation, [props.negotiation]);
	return (
		<div className='negotiation-npc card'>
			<h2>NPC у переговорах</h2>
			<section className='bordered'>
				<h3>Мотиви</h3>
				<div className='traits'>
					<h4>{negotiation.motivations[0] ? NegotiationLogic.getTraitName(negotiation.motivations[0].trait) : null}</h4>
					<h4>{negotiation.motivations[1] ? NegotiationLogic.getTraitName(negotiation.motivations[1].trait) : null}</h4>
				</div>
				{
					negotiation.motivations[0] ?
						<Markdown text={`**${NegotiationLogic.getTraitName(negotiation.motivations[0].trait)}:** ` + negotiation.motivations[0]?.description} />
						: null
				}
				{
					negotiation.motivations[1] ?
						<Markdown text={`**${NegotiationLogic.getTraitName(negotiation.motivations[1].trait)}:** ` + negotiation.motivations[1]?.description} />
						: null
				}
			</section>

			<section className='bordered'>
				<h3>Вади</h3>
				<div className='traits'>
					<h4>{negotiation.pitfalls[0] ? NegotiationLogic.getTraitName(negotiation.pitfalls[0].trait) : null}</h4>
					<h4>{negotiation.pitfalls[1] ? NegotiationLogic.getTraitName(negotiation.pitfalls[1].trait) : null}</h4>
				</div>
				{
					negotiation.pitfalls[0] ?
						<Markdown text={`**${NegotiationLogic.getTraitName(negotiation.pitfalls[0].trait)}:** ` + negotiation.pitfalls[0]?.description} />
						: null
				}
				{
					negotiation.pitfalls[1] ?
						<Markdown text={`**${NegotiationLogic.getTraitName(negotiation.pitfalls[1].trait)}:** ` + negotiation.pitfalls[1]?.description} />
						: null
				}
				<p className='reference'>
					Аргументи, що спираються на ваду, автоматично провалюються: <br />
					<strong>-1 Зацікавленість, -1 Терпіння</strong>
				</p>
			</section>

			<div className='uncover-roll'>
				<h3>Розкрити мотив</h3>
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
								Герой не дізнається нічого про мотиви чи вади NPC.
							</span>
						</div>
						<div className='tier t3'>
							<img alt='17 +' className='range' src={rollT3Icon} />
							<span className='effect'>
								Герой дізнається один із мотивів або вад NPC (на вибір героя).
							</span>
						</div>
					</div>
				</div>
			</div>

			<section className='bordered'>
				<h3>Навички та мови</h3>
				<p className='languages'>
					Мови: {negotiation.languages.join(', ')}
				</p>
			</section>
		</div>
	);
};
