import { Divider, Progress, Space } from 'antd';
import { ErrorBoundary } from '@/components/controls/error-boundary/error-boundary';
import { Expander } from '@/components/controls/expander/expander';
import { Field } from '@/components/controls/field/field';
import { HeaderText } from '@/components/controls/header-text/header-text';
import { Markdown } from '@/components/controls/markdown/markdown';
import { Negotiation } from '@/models/negotiation';
import { NegotiationLogic } from '@/logic/negotiation-logic';
import { NumberSpin } from '@/components/controls/number-spin/number-spin';
import { StatsRow } from '@/components/panels/stats-row/stats-row';
import { Utils } from '@/utils/utils';
import { useState } from 'react';

import './negotiation-run-panel.scss';

interface Props {
	negotiation: Negotiation;
	onChange: (negotiation: Negotiation) => void;
}

export const NegotiationRunPanel = (props: Props) => {
	const [negotiation, setNegotiation] = useState<Negotiation>(Utils.copy(props.negotiation));

	const setInterest = (value: number) => {
		const copy = Utils.copy(negotiation);
		copy.interest = value;
		setNegotiation(copy);
		props.onChange(copy);
	};

	const setPatience = (value: number) => {
		const copy = Utils.copy(negotiation);
		copy.patience = value;
		setNegotiation(copy);
		props.onChange(copy);
	};

	return (
		<ErrorBoundary>
			<div className='negotiation-run-panel' id={negotiation.id}>
				<HeaderText level={1}>{props.negotiation.name || 'Переговори без назви'}</HeaderText>
				<Markdown text={props.negotiation.description} />
				<StatsRow>
					<NumberSpin min={0} max={5} value={negotiation.interest} onChange={setInterest}>
						<Field
							orientation='vertical'
							label='Зацікавленість'
							value={<Progress percent={negotiation.interest * 20} steps={5} showInfo={false} />}
						/>
					</NumberSpin>
					<NumberSpin min={0} max={5} value={negotiation.patience} onChange={setPatience}>
						<Field
							orientation='vertical'
							label='Терпіння'
							value={<Progress percent={negotiation.patience * 20} steps={5} showInfo={false} />}
						/>
					</NumberSpin>
				</StatsRow>
				<Field label='Враження' value={`${negotiation.impression}: Якщо герой має добру славу серед NPC, він отримує перевагу на випробуваннях, коли наводить аргументи, до яких можна застосувати навичку Флірт, Лідерство або Переконання. Якщо герой має лиху славу серед NPC, він отримує перевагу на випробуваннях, коли наводить аргументи, до яких можна застосувати навичку Вихваляння, Допит або Залякування. Герой отримує цю перевагу, навіть якщо не має відповідної навички.`} />
				{negotiation.languages.length > 0 ? <Field label='Мови' value={negotiation.languages.join(', ')} /> : null}
				<div className='negotiation-content'>
					<div>
						<HeaderText>Мотиви</HeaderText>
						{props.negotiation.motivations.map((t, n) => <Field key={n} label={NegotiationLogic.getTraitName(t.trait)} value={t.description || NegotiationLogic.getMotivationDescription(t.trait)} />)}
						{props.negotiation.motivations.length === 0 ? <div className='ds-text dimmed-text'>Немає</div> : null}
					</div>
					<div>
						<HeaderText>Вади</HeaderText>
						{props.negotiation.pitfalls.map((t, n) => <Field key={n} label={NegotiationLogic.getTraitName(t.trait)} value={t.description || NegotiationLogic.getPitfallDescription(t.trait)} />)}
						{props.negotiation.pitfalls.length === 0 ? <div className='ds-text dimmed-text'>Немає</div> : null}
					</div>
					<div>
						<HeaderText>Результати</HeaderText>
						<Field highlight={negotiation.interest === 5} label='5' value={<Markdown text={props.negotiation.outcomes[5] || 'Так, і...'} useSpan={true} />} />
						<Field highlight={negotiation.interest === 4} label='4' value={<Markdown text={props.negotiation.outcomes[4] || 'Так'} useSpan={true} />} />
						<Field highlight={negotiation.interest === 3} label='3' value={<Markdown text={props.negotiation.outcomes[3] || 'Так, але...'} useSpan={true} />} />
						<Field highlight={negotiation.interest === 2} label='2' value={<Markdown text={props.negotiation.outcomes[2] || 'Ні, але...'} useSpan={true} />} />
						<Field highlight={negotiation.interest === 1} label='1' value={<Markdown text={props.negotiation.outcomes[1] || 'Ні'} useSpan={true} />} />
						<Field highlight={negotiation.interest === 0} label='0' value={<Markdown text={props.negotiation.outcomes[0] || 'Ні, і...'} useSpan={true} />} />
					</div>
				</div>
				<Divider />
				<Space orientation='vertical' style={{ width: '100%' }}>
					<Expander title='Розкриття мотивів'>
						<Markdown
							text={`
Якщо герой хоче зʼясувати мотиви NPC, він може почати з простого запитання: "Чого ви хочете від цієї угоди?" У відповідь NPC може охоче натякнути або прямо розкрити один зі своїх мотивів, зазвичай попросивши щось. Наприклад, NPC-монарх із мотивацією жадібності та схильністю колекціонувати рідкісних тварин може натякнути, що герої заслужать його вдячність, якщо дістануть яйце грифона. Режисер також може вирішити, що в природному перебігу переговорів NPC сам запропонує подібні натяки, навіть якщо герої не питали, за умови, що його зацікавленість уже дорівнює 3 або більше. Якщо NPC не такий відвертий або якщо герої хочуть дізнатися одну з його вад, герой може зробити випробування Розуму, Інтуїції або Присутності під час взаємодії з NPC у ході переговорів, залежно від тактики, якою він намагається його розкрити. Випробування має такі результати:

**Кидок Сили + Розум, Інтуїція або Присутність:**

| Кидок   | Ефект                                                                                                                                                                                              |
|:--------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ≤ 11    | Герой не дізнається нічого про мотиви чи вади NPC, а NPC розуміє, що герой намагається його розкусити, і дратується. Як наслідок, терпіння NPC зменшується на 1.                                |
| 12 - 16 | Герой не дізнається жодної інформації про мотиви чи вади NPC.                                                                                                                                      |
| ≥ 17    | Герой дізнається один із мотивів або одну з вад NPC на свій вибір.                                                                                                                                 |

Після цього випробування герої не можуть робити ще одне випробування, щоб визначити мотиви чи вади того самого NPC, доки не звернуться до нього з аргументом або доки переговори не завершаться.`}
						/>
					</Expander>
					<Expander title='Звернення до мотиву'>
						<Markdown
							text={`
Якщо аргумент не містить вади й апелює до одного з мотивів NPC, до якого ще не зверталися, герой, який наводить цей аргумент, може пройти середнє випробування, щоб спробувати схилити NPC на свій бік. Залежно від аргументу, це може бути випробування Розуму, Інтуїції або Присутності з будь-якою доречною навичкою - найчастіше з групи міжособистісних навичок. Випробування має такі результати:

**Кидок Сили + Розум, Інтуїція або Присутність:**

| Кидок   | Ефект                                                           |
|:--------|:----------------------------------------------------------------|
| ≤ 11    | Терпіння NPC зменшується на 1.                                  |
| 12 - 16 | Зацікавленість NPC збільшується на 1, а терпіння зменшується на 1. |
| ≥ 17    | Зацікавленість NPC збільшується на 1, а терпіння не змінюється. |

На розсуд Режисера особливо добре відіграний або добре обґрунтований аргумент автоматично дає результат рівня 3 без випробування. Гарне відігрування слід винагороджувати!

Якщо герої намагаються звернутися до мотиву, до якого вже апелювали, зацікавленість NPC не змінюється, а терпіння зменшується на 1.`}
						/>
					</Expander>
					<Expander title='Без мотиву чи вади'>
						<Markdown
							text={`
Якщо аргумент не спирається ні на мотив, ні на ваду NPC, герой, який його наводить, повинен пройти складніше випробування, щоб вплинути на NPC. Випробування має такі результати:

**Кидок Сили + Розум, Інтуїція або Присутність:**

| Кидок   | Ефект                                                                    |
|:--------|:-------------------------------------------------------------------------|
| ≤ 11    | Терпіння NPC зменшується на 1, а зацікавленість зменшується на 1.         |
| 12 - 16 | Терпіння NPC зменшується на 1.                                            |
| ≥ 17    | Зацікавленість NPC збільшується на 1, а терпіння зменшується на 1.        |
| 19 / 20 | Зацікавленість NPC збільшується на 1.                                     |

Якщо герої двічі намагаються використати той самий аргумент без вади чи мотиву, випробування автоматично дає результат рівня 1.`}
						/>
					</Expander>
					<Expander title='Спіймано на брехні'>
						<Markdown text='Якщо герой бреше NPC аргументом, який не підвищує зацікавленість NPC, Режисер може вирішити, що NPC викриває цю брехню й ображається. Зацікавленість NPC зменшується на 1 на додачу до будь-якого іншого зменшення через невдачу.' />
					</Expander>
					<Expander title='Використано ваду'>
						<Markdown text='Якщо аргумент використовує одну з вад NPC, він автоматично провалюється, а зацікавленість і терпіння NPC зменшуються на 1 кожне. NPC також може застерегти героїв, щоб ті більше так із ним не поводилися.' />
					</Expander>
				</Space>
			</div>
		</ErrorBoundary>
	);
};
