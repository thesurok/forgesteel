import { Options } from '@/models/options';
import './debug-card.scss';

interface Props {
	options: Options;
}

export const DebugCard = (props: Props) => {
	const userAgent = navigator.userAgent || 'unknown';
	const dpr = window.devicePixelRatio || 'unknown';
	const width = window.screen.width || 'unknown';
	const height = window.screen.height || 'unknown';

	return (
		<div className='debug card'>
			<h2>Налагодження</h2>
			<div className='content'>
				<div className='data'>
					<label>Агент користувача</label>
					<div>{userAgent}</div>
				</div>
				<div className='data'>
					<label>Щільність пікселів</label>
					<div>{dpr}</div>
				</div>
				<div className='data'>
					<label>Розмір екрана</label>
					<div>{width} x {height}</div>
				</div>
				<div className='data'>
					<label>Параметри сторінки</label>
					<div>{props.options.classicSheetPageSize} / {props.options.pageOrientation}</div>
				</div>
			</div>
		</div>
	);
};
