import pbds from '@/assets/powered-by-draw-steel.png';

import './header-image.scss';

export const HeaderImage = () => {
	return (
		<div className='header-image'>
			<img src={pbds} />
			<h1>Створено у Forge Steel</h1>
		</div>
	);
};
