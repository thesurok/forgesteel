import { CharacteristicsSheet } from '@/models/classic-sheets/classic-sheets';
import { SheetFormatter } from '@/logic/classic-sheet/sheet-formatter';

import './characteristics-component.scss';

interface Props {
	characteristics: CharacteristicsSheet;
};

export const CharacteristicsComponent = (props: Props) => {
	const sheet = props.characteristics;
	return (
		<div className='characteristics'>
			<div className='characteristic'>
				<label><span className='symbol'>С</span>ила</label>
				<div className='value'><span>{SheetFormatter.addSign(sheet.might)}</span></div>
			</div>
			<div className='characteristic'>
				<label><span className='symbol'>Л</span>овкість</label>
				<div className='value'><span>{SheetFormatter.addSign(sheet.agility)}</span></div>
			</div>
			<div className='characteristic'>
				<label><span className='symbol'>Р</span>озум</label>
				<div className='value'><span>{SheetFormatter.addSign(sheet.reason)}</span></div>
			</div>
			<div className='characteristic'>
				<label><span className='symbol'>І</span>нтуїція</label>
				<div className='value'><span>{SheetFormatter.addSign(sheet.intuition)}</span></div>
			</div>
			<div className='characteristic'>
				<label><span className='symbol'>П</span>рисутність</label>
				<div className='value'><span>{SheetFormatter.addSign(sheet.presence)}</span></div>
			</div>
		</div>
	);
};
