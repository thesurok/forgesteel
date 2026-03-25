import { Alert, Button, Flex, Segmented } from 'antd';
import { BookOutlined, PlayCircleOutlined, PlusOutlined, TeamOutlined } from '@ant-design/icons';
import { AppFooter } from '@/components/panels/app-footer/app-footer';
import { AppHeader } from '@/components/panels/app-header/app-header';
import { ErrorBoundary } from '@/components/controls/error-boundary/error-boundary';
import { HeaderText } from '@/components/controls/header-text/header-text';
import { Markdown } from '@/components/controls/markdown/markdown';
import { SelectablePanel } from '@/components/controls/selectable-panel/selectable-panel';
import { useMediaQuery } from '@/hooks/use-media-query';
import { useNavigation } from '@/hooks/use-navigation';
import { useState } from 'react';

import pbds from '@/assets/powered-by-draw-steel.png';

import './welcome-page.scss';

type WelcomeType = 'player' | 'director-prep' | 'director-run' | 'creator';

interface Props {
	highlightAbout: boolean;
	showReference: () => void;
	showRoll: () => void;
	showAbout: () => void;
	showSettings: () => void;
	onNewHero: () => void;
}

export const WelcomePage = (props: Props) => {
	const isSmall = useMediaQuery('(max-width: 1000px)');
	const [showBanner] = useState<boolean>(true);

	if (isSmall) {
		return (
			<ErrorBoundary name='welcome-page'>
				<div className='welcome-page'>
					<AppHeader />
					<div className='welcome-page-content compact'>
						<div className='welcome-column'>
							<Welcome
								onNewHero={props.onNewHero}
							/>
						</div>
					</div>
					<AppFooter
						page='welcome'
						highlightAbout={props.highlightAbout}
						showReference={props.showReference}
						showRoll={props.showRoll}
						showAbout={props.showAbout}
						showSettings={props.showSettings}
					/>
					{
						showBanner ?
							<Banner />
							: null
					}
				</div>
			</ErrorBoundary>
		);
	}

	return (
		<ErrorBoundary name='welcome-page'>
			<div className='welcome-page'>
				<AppHeader
					children={
						<div className='logo-container'>
							<img src={pbds} />
						</div>
					}
				/>
				<div className='welcome-page-content'>
					<div className='welcome-column'>
						<Welcome
							onNewHero={props.onNewHero}
						/>
					</div>
					{/* <div className='tip-column'>
						<Tips />
					</div> */}
				</div>
				<AppFooter
					page='welcome'
					highlightAbout={props.highlightAbout}
					showReference={props.showReference}
					showRoll={props.showRoll}
					showAbout={props.showAbout}
					showSettings={props.showSettings}
				/>
				{
					showBanner ?
						<Banner />
						: null
				}
			</div>
		</ErrorBoundary>
	);
};
interface WelcomeProps {
	onNewHero: () => void;
}

const Welcome = (props: WelcomeProps) => {
	const navigation = useNavigation();
	const [page, setPage] = useState<WelcomeType>('player');

	const getContent = () => {
		switch (page) {
			case 'player':
				return (
					<div className='welcome-section'>
						<div>
							<HeaderText>
								Для гравців
							</HeaderText>
							<div className='ds-text'>
								Якщо ви гравець <b>DRAW STEEL</b>, ви у правильному місці.
							</div>
							<div className='ds-text'>
								На екрані <b>ГЕРОЇ</b> ви можете легко створювати своїх персонажів; майстер створення героя проведе вас крок за кроком.
							</div>
							<ul>
								<li>
									Увесь офіційний контент включено, а також ви можете використовувати будь-який домашній контент, створений вашим директором.
								</li>
								<li>
									Ви можете використовувати додаток для відстеження витривалості, станів, сплесків та іншого вашого героя.
								</li>
								<li>
									Якщо ви граєте офлайн, ви можете експортувати своїх героїв у форматах PNG або PDF (портрет або ландшафт).
								</li>
								<li>
									Хочете щось трохи інше? Ви можете налаштувати будь-яку здатність, щоб зробити її більш унікальною для вашого героя.
								</li>
								<li>
									Потрібно відредагувати героя не зовсім по книзі? Немає проблем! Ви можете налаштувати героя будь-яким способом — додатковою здатністю, бонусами до характеристик, додатковими навичками, підлеглими тощо.
								</li>
							</ul>
							<div className='ds-text'>
								Крім того, ви можете швидко знаходити правила в будь-який час за допомогою кнопки Reference у правому нижньому куті екрану.
							</div>
						</div>
						<div className='welcome-buttons'>
							<Flex align='center' justify='center' gap={10}>
								<Button type='primary' icon={<TeamOutlined />} onClick={() => navigation.goToHeroList()}>Герої</Button>
								<Button icon={<PlusOutlined />} onClick={props.onNewHero}>Новий герой</Button>
							</Flex>
						</div>
					</div>
				);
			case 'director-prep':
				return (
					<div className='welcome-section'>
						<div>
							<HeaderText>
								Для режисерів: Підготовка
							</HeaderText>
							<div className='ds-text'>
								У вашій <b>БІБЛІОТЕЦІ</b> ви можете створювати все, що може знадобитися для ваших ігор:
							</div>
							<ul>
								<li>
									Ви можете створювати <b>зустрічі</b>, забезпечуючи їх ідеальний баланс для ваших героїв.
									Додавайте монстрів та об'єкти місцевості, і додаток автоматично розрахує складність зустрічі - або дозвольте додатку згенерувати випадкову зустріч для вас.
									Ви можете вказати цілі зустрічі або використати один із попередньо визначених варіантів.
								</li>
								<li>
									Ви можете створювати <b>тестові монтажі</b>, розкладаючи всі варіанти, які можуть обрати гравці, і скільки разів вони можуть їх обрати.
								</li>
								<li>
									Ви можете створювати <b>переговори</b>, вказуючи мотивації, пастки та результати.
								</li>
								<li>
									Ви можете обирати з набору попередньо визначених зустрічей, монтажів та переговорів - або використовувати їх як відправну точку для власних творінь.
								</li>
								<li>
									Ви також можете створювати детальні <b>тактичні карти</b> для ваших героїв, додаючи плитки, стіни та накладки - або ви можете згенерувати випадкову карту будь-якого розміру.
									Ви можете використовувати зображення бойових карт для ваших карт - навіть анімовані карти!
								</li>
							</ul>
							<div className='ds-text'>
								Всі ці елементи можна об'єднати в <b>пригоди</b>.
							</div>
						</div>
						<div className='welcome-buttons'>
							<Flex align='center' justify='center' gap={10}>
								<Button type='primary' icon={<BookOutlined />} onClick={() => navigation.goToLibrary('encounter')}>Бібліотека</Button>
							</Flex>
						</div>
					</div>
				);
			case 'director-run':
				return (
					<div className='welcome-section'>
						<div>
							<HeaderText>
								Для режисерів: Під час гри
							</HeaderText>
							<div className='ds-text'>
								У екрані <b>СЕСІЯ</b> ви можете проводити ваші зустрічі, монтажі, переговори та карти.
							</div>
							<ul>
								<li>
									У <b>зустрічі</b> ви можете на перший погляд побачити поточну витривалість та умови всіх ваших монстрів (і героїв), а також додати капітана до ваших міньйонів.
									Коли ви починаєте раунд, додаток автоматично надає вам відповідну кількість злобності.
									Він показує всі способи, якими ви можете витратити злобність, і надає шпаргалку для будь-яких тригерних дій ваших монстрів або об'єктів місцевості.
								</li>
								<li>
									У <b>монтажі</b> ви можете бачити, які навички використовували герої, і скільки успіхів та невдач вони накопичили.
								</li>
								<li>
									У <b>переговорах</b> ви можете відстежувати інтереси та статистику переговорів, а також бачити всі деталі мотивацій та пасток.
								</li>
								<li>
									У <b>тактичній карті</b> ви можете змінювати туман війни та навіть редагувати карту на ходу.
								</li>
								<li>
									Ви також можете створювати <b>лічильник</b>, який може відраховувати час (вгору або вниз), рівні тривоги або будь-що інше, що вам може знадобитися.
								</li>
							</ul>
							<div className='ds-text'>
								Будь-який з цих елементів можна поділитися з вашими гравцями, відкривши <b>вигляд гравця</b>, окрему вкладку, яку ви можете поділитися (використовуючи Discord тощо).
							</div>
						</div>
						<div className='welcome-buttons'>
							<Flex align='center' justify='center' gap={10}>
								<Button type='primary' icon={<PlayCircleOutlined />} onClick={() => navigation.goToSession()}>Сесія</Button>
							</Flex>
						</div>
					</div>
				);
			case 'creator':
				return (
					<div className='welcome-section'>
						<div>
							<HeaderText>
								Для творців контенту
							</HeaderText>
							<div className='ds-text'>
								У <b>БІБЛІОТЕЦІ</b> ви можете переглядати колекції офіційного контенту <b>DRAW STEEL</b>.
							</div>
							<ul>
								<li>
									Для героїв: походження, кар'єри, класи, ускладнення, культури, домени, набори, переваги, титули
								</li>
								<li>
									Для режисерів: магічні предмети, монстри, об'єкти місцевості
								</li>
							</ul>
							<div className='ds-text'>
								Коли ви створюєте власний контент, ви можете створити копію існуючого елемента та змінити його відповідно до ваших потреб, або створити його з нуля.
							</div>
							<div className='ds-text'>
								Якщо ви створюєте монстра, <b>FORGE STEEL</b> надає багато додаткових інструментів, щоб ви могли створити саме того монстра, якого уявляєте, і точно оцінити, наскільки складним він буде.
							</div>
							<ul>
								<li>
									Хочете швидко повторно використати здатність існуючого монстра? Ви можете зробити це одним кліком.
								</li>
								<li>
									Потрібно перевірити, як ваш монстр порівнюється з іншими на тому ж рівні? Ви можете зробити це одним кліком.
								</li>
								<li>
									Хочете створити монстра, який є сумішшю двох або трьох існуючих монстрів? Ви можете зробити це одним кліком.
								</li>
							</ul>
						</div>
						<Alert
							type='info'
							showIcon={true}
							title={
								<Markdown
									text={`
**FORGE STEEL** тепер включає контент від третіх сторін. Якщо ви хочете, щоб ваші власні домашні творіння з'явилися у Forge Steel, ви можете подати їх [тут](https://forms.office.com/r/mmxqfnFzx4).`}
								/>
							}
						/>
						<div className='welcome-buttons'>
							<Flex align='center' justify='center' gap={10}>
								<Button type='primary' icon={<BookOutlined />} onClick={() => navigation.goToLibrary('ancestry')}>Library</Button>
							</Flex>
						</div>
					</div>
				);
		}
	};

	return (
		<ErrorBoundary>
			<div>
				<div className='ds-text centered-text'>
					<b>FORGE STEEL</b> це додаток для гравців, режисерів та творців контенту <b>DRAW STEEL</b>.
				</div>
				<Segmented
					style={{ margin: '15px 0' }}
					block={true}
					options={[
						{
							value: 'player',
							label: (
								<div className='welcome-tab-button'>
									<div className='title'>Гравці</div>
								</div>
							)
						},
						{
							value: 'director-prep',
							label: (
								<div className='welcome-tab-button'>
									<div className='title'>Режисери</div>
									<div className='subtitle'>Час підготовки</div>
								</div>
							)
						},
						{
							value: 'director-run',
							label: (
								<div className='welcome-tab-button'>
									<div className='title'>Режисери</div>
									<div className='subtitle'>Час гри</div>
								</div>
							)
						},
						{
							value: 'creator',
							label: (
								<div className='welcome-tab-button'>
									<div className='title'>Творці</div>
								</div>
							)
						}
					]}
					value={page}
					onChange={setPage}
				/>
				<SelectablePanel>
					{getContent()}
				</SelectablePanel>
			</div>
		</ErrorBoundary>
	);
};

// const Tips = () => {
// 	const [tips] = useState<Tip[]>([
// 		...Collections.shuffle(TipData.getTips().filter(t => t.isNew)),
// 		...Collections.shuffle(TipData.getTips().filter(t => !t.isNew))
// 	]);
// 	const [tipIndex, setTipIndex] = useState<number>(0);

// 	const prevTip = () => {
// 		const index = tipIndex - 1;
// 		setTipIndex(Math.max(index, 0));
// 	};

// 	const nextTip = () => {
// 		const index = tipIndex + 1;
// 		setTipIndex(Math.min(index, tips.length - 1));
// 	};

// 	return (
// 		<ErrorBoundary>
// 			<TipPanel
// 				tip={tips[tipIndex]}
// 				onPrevious={tipIndex === 0 ? undefined : prevTip}
// 				onNext={tipIndex === tips.length - 1 ? undefined : nextTip}
// 			/>
// 		</ErrorBoundary>
// 	);
// };

const Banner = () => {
	return null;
};
