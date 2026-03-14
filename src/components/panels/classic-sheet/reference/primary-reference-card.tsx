import { Fragment, useMemo } from 'react';

import { HeroSheet } from '@/models/classic-sheets/hero-sheet';
import { Options } from '@/models/options';
import { SheetPageSize } from '@/enums/sheet-page-size';

import './primary-reference-card.scss';

interface Props {
	character: HeroSheet;
	options: Options;
}

export const PrimaryReferenceCard = (props: Props) => {
	const character = useMemo(
		() => props.character,
		[props.character]
	);

	const showTriggerHelp = props.options.classicSheetPageSize === SheetPageSize.A4 &&
		props.options.pageOrientation === 'portrait' &&
		(props.character.heroicResourceGains || []).length < 3;

	const showActionsManeuversReference = (props.character.heroicResourceGains || []).length <= 3;

	const getResourceSection = () => {
		if (character.heroicResourceGains) {
			return (
				<div className='heroic-resource'>
					<h3>
						<>Отримання ресурсу:<br />{character.heroicResourceName}</>
					</h3>
					<div className='heroic-resource-gain'>
						<div className='header value'>Отримай</div>
						<div className='header trigger'>Коли</div>
						{character.heroicResourceGains.map((g, n) =>
							<Fragment key={n}>
								<div className='value'>{g.value}</div>
								<div className='trigger'>{g.trigger}</div>
							</Fragment>
						)}
					</div>
				</div>
			);
		};
	};

	return (
		<div className='primary-reference card'>
			{getResourceSection()}
			<div className='hero-tokens'>
				<h3>Витрачання<br></br>героїчних жетонів</h3>
				<p><strong>1 Жетон:</strong> Отримати 2 Сплески.</p>
				<p><strong>1 Жетон:</strong> Успішно пройти рятівний кидок замість провалу.</p>
				<p><strong>1 Жетон:</strong> Перебросити тест і використати новий результат.</p>
				<p><strong>2 Жетони:</strong> У свій хід або коли отримуєте шкоду, відновити Витривалість рівну вашому значенню відновлення без витрачання Відновлення перед отриманням шкоди.</p>
			</div>
			<div className='turn-reference'>
				<h3>Ваш хід</h3>
				<p>Кожна істота може виконати дію руху, маневр та основну дію у свій хід — у будь-якому порядку</p>
				{
					showTriggerHelp || !showActionsManeuversReference ?
						<p>Ви також можете виконати <strong>одну тригерну дію за раунд</strong>, коли відбувається тригер. Немає обмежень на кількість безкоштовних тригерних дій, які ви можете виконати.</p>
						: null
				}
				{
					showActionsManeuversReference ?
						<div className='actions-maneuvers'>
							<div className='move-actions'>
								<h5>Дії руху</h5>
								<ul>
									<li>Рух вперед</li>
									<li>Відступ</li>
									<li>Їзда</li>
								</ul>
							</div>
							<div className='main-actions'>
								<h5>Основні дії</h5>
								<ul>
									<li>Розгін</li>
									<li>Захист</li>
									<li>Лікування</li>
									<li>Вільний удар</li>
									{
										showTriggerHelp ?
											<>
												<li>Обмін на маневр</li>
												<li>Обмін на рух</li>
											</>
											: null
									}
								</ul>
							</div>
							<div className='maneuvers'>
								<h5>Маневри</h5>
								<ul>
									<li>Допомога в атаці</li>
									<li>Перевести подих</li>
									<li>Рити землю</li>
									<li>Втеча з захоплення</li>
									<li>Захоплення</li>
									<li>Сховатися</li>
									<li>Відштовхування</li>
									<li>Зробити або допомогти в тесті</li>
									<li>Пошук схованої істоти</li>
									<li>Встати</li>
									<li>Використати розхідник</li>
								</ul>
							</div>
						</div>
						: null
				}
			</div>
		</div>
	);
};
