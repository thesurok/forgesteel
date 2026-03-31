import { Alert, Button, Empty, Flex, Popconfirm, Segmented, Space, Tabs } from 'antd';
import { useEffect, useMemo, useState } from 'react';
import { Collections } from '@/utils/collections';
import { ConnectionSettings } from '@/models/connection-settings';
import { DataService } from '@/utils/data-service';
import { ErrorBoundary } from '@/components/controls/error-boundary/error-boundary';
import { Expander } from '@/components/controls/expander/expander';
import { HeaderText } from '@/components/controls/header-text/header-text';
import { Hero } from '@/models/hero';
import { HeroMergeLogic } from '@/logic/merge/hero-merge-logic';
import { HeroPanel } from '@/components/panels/hero/hero-panel';
import { LabelControl } from '@/components/controls/label-control/label-control';
import { MergeDuplicateBehavior } from '@/enums/merge-duplicate-behavior';
import { Options } from '@/models/options';
import { Sourcebook } from '@/models/sourcebook';
import { SourcebookLogic } from '@/logic/sourcebook-logic';
import { SourcebookMergeLogic } from '@/logic/merge/sourcebook-merge-logic';
import { SourcebookPanel } from '@/components/panels/elements/sourcebook-panel/sourcebook-panel';
import { Utils } from '@/utils/utils';
import { useNavigation } from '@/hooks/use-navigation';

import './transfer-page.scss';

interface Props {
	connectionSettings: ConnectionSettings;
	heroes: Hero[];
	homebrewSourcebooks: Sourcebook[];
	options: Options;
};

export const TransferPage = (props: Props) => {
	const settings = props.connectionSettings;
	const [mergeBehavior, setMergeBehavior] = useState<MergeDuplicateBehavior>(MergeDuplicateBehavior.Skip);
	const [copyLocalOpen, setCopyLocalOpen] = useState<boolean>(false);

	const [localHeroes, setLocalHeroes] = useState<Hero[]>([]);
	const [localHomebrewSourcebooks, setLocalHomebrewSourcebooks] = useState<Sourcebook[]>([]);

	const [remoteHeroes, setRemoteHeroes] = useState<Hero[]>([]);
	const [remoteHomebrewSourcebooks, setRemoteHomebrewSourcebooks] = useState<Sourcebook[]>([]);

	const localDs = useMemo(() => new DataService({ ...settings, useWarehouse: false }), [settings]);
	const warehouseDs = useMemo(() => new DataService(settings), [settings]);

	const mergeToWarehouse = () => {
		const mergedHeroes = HeroMergeLogic.merge(localHeroes, remoteHeroes, mergeBehavior);
		warehouseDs.saveHeroes(mergedHeroes).then(setRemoteHeroes);

		const mergedSourcebooks = SourcebookMergeLogic.merge(localHomebrewSourcebooks, remoteHomebrewSourcebooks, mergeBehavior);
		warehouseDs.saveHomebrew(mergedSourcebooks).then(setRemoteHomebrewSourcebooks);
	};

	const copyToLocal = () => {
		const heroesCopy = Utils.copy(remoteHeroes);
		localDs.saveHeroes(heroesCopy).then(setLocalHeroes);

		const homebrewCopy = Utils.copy(remoteHomebrewSourcebooks);
		localDs.saveHomebrew(homebrewCopy).then(setLocalHomebrewSourcebooks);
	};

	const initializeData = () => {
		if (settings.useWarehouse) {
			setRemoteHeroes(props.heroes);
			setRemoteHomebrewSourcebooks(props.homebrewSourcebooks);

			localDs.getHeroes()
				.then(heroes => {
					if (heroes !== null) {
						setLocalHeroes(heroes);
					}
				});

			localDs.getHomebrew()
				.then(sourcebooks => {
					if (sourcebooks !== null) {
						setLocalHomebrewSourcebooks(sourcebooks);
					}
				});
		}
	};

	useEffect(
		initializeData,
		[
			localDs,
			props.heroes,
			props.homebrewSourcebooks,
			settings
		]
	);

	const getHeroSection = (heroes: Hero[], sourcebooks: Sourcebook[]) => {
		const folders = Collections.distinct(heroes.map(h => h.folder).sort(), f => f);
		if (folders.length === 0) {
			folders.push('');
		}

		const getHeroes = (folder: string) => {
			return heroes
				.filter(h => h.folder === folder);
		};

		const getHeroesSection = (list: Hero[]) => {
			if (list.length === 0) {
				return (
					<Empty />
				);
			}

			return (
				<div className='hero-section'>
					{
						list.map(hero => (
							<HeroPanel key={`local-hero-${hero.id}`} hero={hero} sourcebooks={SourcebookLogic.getSourcebooks(sourcebooks)} options={props.options} />
						))
					}
				</div>
			);
		};

		return (
			<div className='hero-list-page-content'>
				<Tabs
					items={folders.map(f => ({
						key: f,
						label: (
							<div className='section-header'>
								<div className='section-title'>{f || 'Heroes'}</div>
								<div className='section-count'>{getHeroes(f).length}</div>
							</div>
						),
						children: getHeroesSection(getHeroes(f))
					}))}
				/>
			</div>
		);
	};

	const getCopyLocalButton = () => {
		const localDataMissingInWarehouse = HeroMergeLogic.missingData(localHeroes, remoteHeroes)
			|| SourcebookMergeLogic.missingData(localHomebrewSourcebooks, remoteHomebrewSourcebooks);

		const confirm = () => {
			setCopyLocalOpen(false);
			copyToLocal();
		};

		const cancel = () => {
			setCopyLocalOpen(false);
		};

		const handleOpenChange = (newOpen: boolean) => {
			if (!newOpen) {
				setCopyLocalOpen(newOpen);
				return;
			}

			if (localDataMissingInWarehouse) {
				setCopyLocalOpen(newOpen);
			} else {
				confirm();
			}
		};

		return (
			<Popconfirm
				title='Скопіювати дані Warehouse локально'
				description='Схоже, локально можуть бути дані, яких немає у Warehouse. Якщо так, ця дія повністю видалить локальні дані. Ви впевнені, що хочете продовжити?'
				open={copyLocalOpen}
				onOpenChange={handleOpenChange}
				onConfirm={confirm}
				onCancel={cancel}
				okText='Так'
				cancelText='Ні'
			>
				<Button>
					Скопіювати дані Warehouse локально
				</Button>
			</Popconfirm>
		);
	};

	const getTransferContent = () => {
		if (!settings.useWarehouse) {
			return (
				<Alert
					title='Немає підключення до Warehouse'
					type='info'
					description='Зараз Warehouse не налаштовано, тож тут немає чого робити.'
					showIcon={true}
				/>
			);
		} else {
			return (
				<Space orientation='vertical' style={{ width: '100%' }}>
					<HeaderText level={4}>Перемістити локальні дані до Warehouse</HeaderText>
					<LabelControl
						label='Що робити, якщо в Warehouse уже є елемент із таким самим id?'
						control={
							<Segmented<MergeDuplicateBehavior>
								value={mergeBehavior}
								onChange={setMergeBehavior}
								options={[MergeDuplicateBehavior.Replace, MergeDuplicateBehavior.Skip]}
							/>
						}
					/>
					<Button
						type='primary'
						onClick={() => mergeToWarehouse()}
					>
						Обʼєднати локальні дані з Warehouse
					</Button>

					<HeaderText level={4}>Скопіювати дані Warehouse до локального сховища</HeaderText>
					<Alert
						type='warning'
						title='Це повністю замінить локальний вміст!'
					/>
					{getCopyLocalButton()}

					<HeaderText level={2}>Огляд вмісту</HeaderText>

					<HeaderText level={3}>Локальне сховище</HeaderText>

					<Expander title={`Герої (${localHeroes.length})`}>
						{getHeroSection(localHeroes, localHomebrewSourcebooks)}
					</Expander>

					<Expander title={`Збірники (${localHomebrewSourcebooks.length})`}>
						<div className='sourcebook-section'>
							{
								localHomebrewSourcebooks.map(sb => (
									<SourcebookPanel key={`local-sb-${sb.id}`} sourcebook={sb} />
								))
							}
						</div>
					</Expander>

					<HeaderText level={3}>Сховище Warehouse</HeaderText>

					<Expander title={`Герої (${remoteHeroes.length})`}>
						{getHeroSection(remoteHeroes, remoteHomebrewSourcebooks)}
					</Expander>

					<Expander title={`Збірники (${remoteHomebrewSourcebooks.length})`}>
						<Flex wrap={true} gap='20px'>
							{
								remoteHomebrewSourcebooks.map(sb => (
									<SourcebookPanel key={`remote-sb-${sb.id}`} sourcebook={sb} />
								))
							}
						</Flex>
					</Expander>
				</Space>
			);
		}
	};

	const nav = useNavigation();
	const navHome = () => {
		// set the url directly so the app reloads
		const url = window.location.toString();
		const match = url.match(/^([^#]+)(#.*)/);
		if (match) {
			const base = match[1];
			window.location.href = base;
		} else {
			nav.goToWelcome();
		}
	};

	return (
		<ErrorBoundary>
			<div className='transfer-page'>
				<div className='transfer-page-content'>
					<HeaderText level={1}>Передавання даних</HeaderText>
					<p>
						Типово Forge Steel зберігає ваші дані в локальному сховищі браузера.
						Це означає, що вам не потрібно ніде реєструватися, а всі дані залишаються лише у вас.
						Але це також означає, що ви не матимете доступу до них з інших браузерів, а скидання браузера може стерти всі ваші дані.
					</p>
					<p>
						Однак після підключення до Warehouse ви отримаєте доступ до постійного віддаленого сховища,
						яке дозволяє зберігати дані, відкривати їх на різних пристроях і не втрачати їх після очищення кешу браузера.
					</p>
					<p>
						Use this page to transfer data between the browser storage (Local), and the Warehouse.
					</p>
					<h4>Some important notes:</h4>
					<p>
						This tool does <strong>NOT</strong> compare the contents of <em>ANY</em> piece of data.
						It only checks the internal ID for determining if a chunk of data is 'the same'.
						This means that copying or merging data could result in some data loss. Use at your own risk!
					</p>
					{
						settings.useWarehouse ?
							<>
								<p>
									Once you are done, you will need to reload the app to see the updated data.
								</p>
								<Button type='primary' onClick={navHome}>Return</Button>
							</>
							: null
					}
					{getTransferContent()}
				</div>
			</div>
		</ErrorBoundary>
	);
};
