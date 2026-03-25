import { Button, Divider, Flex, Upload } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { Field } from '@/components/controls/field/field';
import { HeaderText } from '@/components/controls/header-text/header-text';
import { Markdown } from '@/components/controls/markdown/markdown';
import { SelectablePanel } from '@/components/controls/selectable-panel/selectable-panel';
import { Sourcebook } from '@/models/sourcebook';
import { SourcebookType } from '@/enums/sourcebook-type';
import { SourcebookUpdateLogic } from '@/logic/update/sourcebook-update-logic';
import { Toggle } from '@/components/controls/toggle/toggle';
import { Utils } from '@/utils/utils';

import './start-section.scss';

interface Props {
	settingIDs: string[];
	sourcebooks: Sourcebook[];
	setSettingIDs: (settingIDs: string[]) => void;
	onImportSourcebook: (sourcebook: Sourcebook) => void;
}

export const StartSection = (props: Props) => {
	const toggleSourcebook = (include: boolean, id: string) => {
		if (include) {
			const copy = Utils.copy(props.settingIDs);
			copy.push(id);
			props.setSettingIDs(copy);
		} else {
			const copy = props.settingIDs.filter(x => x !== id);
			props.setSettingIDs(copy);
		}
	};

	return (
		<div className='hero-edit-content start-section'>
			<div className='hero-edit-content-column selected'>
				<SelectablePanel>
					<HeaderText>Створення героя</HeaderText>
					<div className='ds-text'>
						Створення героя в <b>FORGE STEEL</b> просте.
					</div>
					<ul>
						<li>
							Використовуйте вкладки вище, щоб обрати <code>Рід</code>, <code>Культуру</code>, <code>Кар'єру</code> та <code>Клас</code> вашого героя.
							Якщо будуть будь-які додаткові опції, вам буде запропоновано зробити свій вибір.
						</li>
						<li>
							За бажанням, ви можете обрати <code>Ускладнення</code> - але ви можете пропустити це, якщо бажаєте.
						</li>
						<li>
							Нарешті, перейдіть на вкладку <code>Деталі</code> та дайте вашому герою ім'я.
						</li>
					</ul>
					<div className='ds-text'>
						Коли ви закінчите, натисніть <code>Зберегти зміни</code> на панелі інструментів вгорі, і ви побачите лист вашого героя.
					</div>
				</SelectablePanel>
			</div>
			<div className='hero-edit-content-column choices'>
				<HeaderText>Книги джерел</HeaderText>
				<div className='ds-text'>
					Цей герой може використовувати контент з наступних книг джерел:
				</div>
				{
					[SourcebookType.Official, SourcebookType.ThirdParty, SourcebookType.Community, SourcebookType.Homebrew].map(type => (
						<div key={type} className='sourcebook-type-section'>
							<HeaderText level={3}>{type} Книги джерел</HeaderText>
							{
								props.sourcebooks
									.filter(sb => sb.type === type)
									.map(sb => (
										<Toggle
											key={sb.id}
											label={<Field label={sb.name || 'Unnamed Sourcebook'} value={<Markdown text={sb.description} useSpan={true} />} />}
											value={props.settingIDs.includes(sb.id)}
											onChange={value => toggleSourcebook(value, sb.id)}
										/>
									))
							}
						</div>
					))
				}
				<Divider />
				<Flex align='center' gap={10}>
					<div className='ds-text'>
						Якщо у вас є домашня книга джерел, яку ви хочете використати, і вона не вказана тут, ви можете імпортувати її зараз.
					</div>
					<Upload
						style={{ width: '100%' }}
						accept='.drawsteel-sourcebook,.ds-sourcebook'
						showUploadList={false}
						beforeUpload={file => {
							file
								.text()
								.then(json => {
									const sourcebook = JSON.parse(json) as Sourcebook;
									sourcebook.id = Utils.guid();
									SourcebookUpdateLogic.updateSourcebook(sourcebook);
									props.onImportSourcebook(sourcebook);
								});
							return false;
						}}
					>
						<Button title='Import a sourcebook' icon={<DownloadOutlined />} />
					</Upload>
				</Flex>
			</div>
		</div>
	);
};
