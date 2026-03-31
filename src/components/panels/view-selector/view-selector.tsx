import { DesktopOutlined, FilePdfOutlined, FileTextOutlined, PrinterOutlined, TableOutlined } from '@ant-design/icons';
import { Popover, Segmented } from 'antd';
import { ErrorBoundary } from '@/components/controls/error-boundary/error-boundary';
import { ReactNode } from 'react';

interface Props {
	mode: 'hero' | 'classic' | 'printable';
	value: string;
	onChange: (value: string) => void;
}

export const ViewSelector = (props: Props) => {
	const createOption = (value: string, title: string, icon: ReactNode) => {
		return {
			value: value,
			label: (
				<Popover content={title}>
					{icon}
				</Popover>
			)
		};
	};

	const getOptions = () => {
		const options = [
			createOption('modern', 'Інтерактивний вигляд (для гри з екрана)', <DesktopOutlined />)
		];

		switch (props.mode) {
			case 'hero':
				options.push(createOption('classic', 'Класичний вигляд (для експорту)', <FilePdfOutlined />));
				options.push(createOption('abilities', 'Стандартні здібності', <TableOutlined />));
				options.push(createOption('notes', 'Нотатки', <FileTextOutlined />));
				break;
			case 'classic':
				options.push(createOption('classic', 'Класичний вигляд (для експорту)', <FilePdfOutlined />));
				break;
			case 'printable':
				options.push(createOption('print', 'Друк', <PrinterOutlined />));
				break;
		}

		return options;
	};

	return (
		<ErrorBoundary>
			<Segmented
				options={getOptions()}
				value={props.value}
				onChange={props.onChange}
			/>
		</ErrorBoundary>
	);
};
