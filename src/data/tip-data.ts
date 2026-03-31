import { FactoryLogic } from '@/logic/factory-logic';
import { Tip } from '@/models/tip';

import heroSheetClassic from '@/assets/screenshots/hero-sheet-classic.png';
import heroSheetCustomize from '@/assets/screenshots/hero-sheet-customize.png';
import heroSheetInteractive from '@/assets/screenshots/hero-sheet-interactive.png';
import heroSheetInventory from '@/assets/screenshots/hero-sheet-inventory.png';
import heroSheetManage from '@/assets/screenshots/hero-sheet-manage.png';
import heroSheetProjects from '@/assets/screenshots/hero-sheet-projects.png';
import heroSheetRetinue from '@/assets/screenshots/hero-sheet-retinue.png';
import heroSheetRoll from '@/assets/screenshots/hero-roll.png';
import heroSheetState from '@/assets/screenshots/hero-state.png';
import heroSheetVitals from '@/assets/screenshots/hero-vitals.png';

import heroBuilderEdit from '@/assets/screenshots/hero-edit.png';
import heroBuilderFolder from '@/assets/screenshots/hero-folder.png';
import heroBuilderPregens from '@/assets/screenshots/hero-pregens.png';
import heroBuilderRandom from '@/assets/screenshots/hero-random.png';
import heroBuilderSourcebooks from '@/assets/screenshots/hero-edit-sourcebooks.png';

import libraryMain from '@/assets/screenshots/library.png';
import librarySourcebooks from '@/assets/screenshots/sourcebooks.png';
import libraryThirdParty from '@/assets/screenshots/third-party.png';

import homebrewEditor from '@/assets/screenshots/homebrew.png';
import homebrewKitTuning from '@/assets/screenshots/homebrew-kit-tuning.png';
import homebrewMonsterBuilder from '@/assets/screenshots/monster-builder.png';
import homebrewMonsterBuilderGenesplice from '@/assets/screenshots/monster-builder-genesplice.png';

import playbookAdventure from '@/assets/screenshots/playbook-adventure.png';
import playbookEncounter from '@/assets/screenshots/playbook-encounter.png';
import playbookEncounterBuilder from '@/assets/screenshots/playbook-encounter-builder.png';
import playbookEncounterClassic from '@/assets/screenshots/playbook-encounter-classic.png';
import playbookEncounterRandom from '@/assets/screenshots/playbook-encounter-random.png';
import playbookEncounterTools from '@/assets/screenshots/playbook-encounter-tools.png';
import playbookMap from '@/assets/screenshots/playbook-map.png';
import playbookMapAutobuild from '@/assets/screenshots/playbook-map-autobuild.png';
import playbookMontage from '@/assets/screenshots/playbook-montage.png';
import playbookMontageBuilder from '@/assets/screenshots/playbook-montage-builder.png';
import playbookMontageClassic from '@/assets/screenshots/playbook-montage-classic.png';
import playbookNegotiation from '@/assets/screenshots/playbook-negotiation.png';
import playbookNegotiationBuilder from '@/assets/screenshots/playbook-negotiation-builder.png';
import playbookNegotiationClassic from '@/assets/screenshots/playbook-negotiation-classic.png';

import sessionCounter from '@/assets/screenshots/session-counter.png';
import sessionEncounter from '@/assets/screenshots/session-encounter.png';
import sessionMontage from '@/assets/screenshots/session-montage.png';
import sessionMultiple from '@/assets/screenshots/session-multiple.png';
import sessionNegotiation from '@/assets/screenshots/session-negotiation.png';

import appAbout from '@/assets/screenshots/footer.png';
import appNavigation from '@/assets/screenshots/navigation.png';
import appReference from '@/assets/screenshots/footer-reference.png';
import appRoll from '@/assets/screenshots/footer-roll.png';
import appSettings from '@/assets/screenshots/footer-settings.png';

export class TipData {
	static getTips = (): Tip[] => {
		return [
			// #region Hero Sheet
			FactoryLogic.createTip({
				image: heroSheetInteractive,
				content: 'Якщо ви граєте з пристрою, користуйтеся інтерактивним виглядом.'
			}),
			FactoryLogic.createTip({
				image: heroSheetClassic,
				content: 'Якщо хочете роздрукувати героя, перемкніться на класичний вигляд.'
			}),
			FactoryLogic.createTip({
				image: heroSheetRoll,
				content: 'Forge Steel може кидати ваші здібності за вас, якщо ви граєте онлайн.'
			}),
			FactoryLogic.createTip({
				image: heroSheetManage,
				content: 'Через кнопку **Інструменти** можна відкрити ресурси, інвентар, проєкти героя та інше.'
			}),
			FactoryLogic.createTip({
				image: heroSheetState,
				content: 'Натисніть на ресурси героя, щоб керувати ними.'
			}),
			FactoryLogic.createTip({
				image: heroSheetVitals,
				content: 'Натисніть на стан героя, щоб керувати витривалістю, відновленнями та станами.'
			}),
			FactoryLogic.createTip({
				image: heroSheetInventory,
				content: 'Спорядженням героя можна керувати на вкладці **Інвентар**. Якщо у вас є вміщений предмет, налаштовується він саме тут.'
			}),
			FactoryLogic.createTip({
				image: heroSheetProjects,
				content: 'На вкладці **Проєкти** можна відстежувати поступ проєктів героя у вільний час.'
			}),
			FactoryLogic.createTip({
				image: heroSheetCustomize,
				content: 'На вкладці **Налаштувати** до героя можна додати майже будь-що.'
			}),
			FactoryLogic.createTip({
				image: heroSheetRetinue,
				content: 'Якщо ваш герой має верхову істоту, ретейнера або може прикликати чудовиськ, ви побачите їх на вкладці **Retinue**.',
				isNew: true
			}),
			// #endregion

			// #region Hero Builder
			FactoryLogic.createTip({
				image: heroBuilderEdit,
				content: 'Forge Steel допомагає створювати героїв, проводячи вас крізь увесь процес крок за кроком.'
			}),
			FactoryLogic.createTip({
				image: heroBuilderSourcebooks,
				content: 'Якщо ви хочете використовувати власний збірник під час створення героя, його потрібно вибрати на сторінці **Start**.'
			}),
			FactoryLogic.createTip({
				image: heroBuilderPregens,
				content: 'Якщо ви не хочете створювати героя вручну, можна почати з готового персонажа.'
			}),
			FactoryLogic.createTip({
				image: heroBuilderRandom,
				content: 'Якщо ви не хочете створювати героя вручну, можна згенерувати цілком випадкового.'
			}),
			FactoryLogic.createTip({
				image: heroBuilderFolder,
				content: 'Якщо ви створили багато героїв, їх зручно впорядковувати, додаючи до тек.'
			}),
			// #endregion

			// #region Library
			FactoryLogic.createTip({
				image: libraryMain,
				content: 'Екран **Library** показує весь вміст гри.'
			}),
			FactoryLogic.createTip({
				image: librarySourcebooks,
				content: 'Усе в **Library** походить зі збірників. Для домашнього вмісту ви можете створювати власні збірники.'
			}),
			FactoryLogic.createTip({
				image: libraryThirdParty,
				content: 'Forge Steel тепер містить сторонній вміст від Blacksmith\'s Guild, журналу Ratcatcher, Triglav Games і спільноти домашнього контенту Draw Steel.',
				isNew: true
			}),
			// #endregion

			// #region Homebrew
			FactoryLogic.createTip({
				image: homebrewEditor,
				content: 'У **Library** можна створювати домашні версії майже будь-чого.'
			}),
			FactoryLogic.createTip({
				image: homebrewMonsterBuilder,
				content: 'Коли ви створюєте домашнє чудовисько, Forge Steel показує схожих чудовиськ, щоб допомогти вам вибрати його значення характеристик.'
			}),
			FactoryLogic.createTip({
				image: homebrewKitTuning,
				content: 'Коли ви створюєте домашній комплект, Forge Steel допомагає переконатися, що він не надто сильний.',
				isNew: true
			}),
			FactoryLogic.createTip({
				image: homebrewMonsterBuilderGenesplice,
				content: 'Коли ви створюєте домашнє чудовисько, можна скористатися інструментом **Genesplice**, щоб швидко змішати наявних істот і отримати щось нове.',
				isNew: true
			}),
			// #endregion

			// #region Adventures
			FactoryLogic.createTip({
				image: playbookAdventure,
				content: 'У **Library** можна створювати пригоди.'
			}),
			// #endregion

			// #region Encounters
			FactoryLogic.createTip({
				image: playbookEncounter,
				content: 'У **Library** можна створювати сутички.'
			}),
			FactoryLogic.createTip({
				image: playbookEncounterTools,
				content: 'Якщо натиснути піктограму інформації в заголовку сутички, ви побачите підказки, які допоможуть підібрати мініатюри для неї.',
				isNew: true
			}),
			FactoryLogic.createTip({
				image: playbookEncounterClassic,
				content: 'Якщо ви хочете роздрукувати сутичку, перемкніться на вигляд Classic.'
			}),
			FactoryLogic.createTip({
				image: playbookEncounterBuilder,
				content: 'Forge Steel спрощує створення сутичок: достатньо додавати чудовиськ і елементи місцевості.'
			}),
			FactoryLogic.createTip({
				image: playbookEncounterRandom,
				content: 'Якщо сутичка потрібна терміново, Forge Steel може згенерувати її за вас: просто вкажіть складність і, за бажання, тип чудовиськ, які хочете показати.',
				isNew: true
			}),
			// #endregion

			// #region Montages
			FactoryLogic.createTip({
				image: playbookMontage,
				content: 'У **Library** можна створювати монтажі.'
			}),
			FactoryLogic.createTip({
				image: playbookMontageClassic,
				content: 'Якщо ви хочете роздрукувати монтаж, перемкніться на вигляд Classic.'
			}),
			FactoryLogic.createTip({
				image: playbookMontageBuilder,
				content: 'Forge Steel спрощує створення монтажів, дозволяючи додавати випробування та повороти.'
			}),
			// #endregion

			// #region Negotiations
			FactoryLogic.createTip({
				image: playbookNegotiation,
				content: 'Ви можете створювати переговори в розділі **Library**.'
			}),
			FactoryLogic.createTip({
				image: playbookNegotiationClassic,
				content: 'Якщо ви хочете роздрукувати переговори, перемкніться на вигляд Classic.'
			}),
			FactoryLogic.createTip({
				image: playbookNegotiationBuilder,
				content: 'Forge Steel дозволяє легко створювати переговори, додаючи мотиви й вади.'
			}),
			// #endregion

			// #region Maps
			FactoryLogic.createTip({
				image: playbookMap,
				content: 'У **Library** можна створювати тактичні мапи.'
			}),
			FactoryLogic.createTip({
				image: playbookMapAutobuild,
				content: 'Якщо ви поспішаєте, Forge Steel може згенерувати випадкову тактичну мапу для ваших сутичок.'
			}),
			// #endregion

			// #region Session
			FactoryLogic.createTip({
				image: sessionCounter,
				content: 'На екрані **Session** можна налаштовувати лічильники, що рахують униз або вгору, щоб відстежувати все потрібне у вашій пригоді.'
			}),
			FactoryLogic.createTip({
				image: sessionEncounter,
				content: 'На екрані **Session** ви можете проводити сутички, легко керуючи витривалістю та станами всіх учасників бою.'
			}),
			FactoryLogic.createTip({
				image: sessionMontage,
				content: 'На екрані **Session** ви можете проводити монтажі, відстежуючи успіхи й провали кожного героя.'
			}),
			FactoryLogic.createTip({
				image: sessionNegotiation,
				content: 'На екрані **Session** ви можете проводити переговори, відстежуючи зацікавленість і терпіння NPC.'
			}),
			FactoryLogic.createTip({
				image: sessionMultiple,
				content: 'Якщо ви проводите в **Session** більше ніж одну подію, наприклад сутичку, монтаж або переговори, між ними можна перемикатися у верхній частині екрана.'
			}),
			// #endregion

			// #region App
			FactoryLogic.createTip({
				image: appNavigation,
				content: 'Використовуйте панель навігації внизу ліворуч, щоб перемикатися між розділами Forge Steel.'
			}),
			FactoryLogic.createTip({
				image: appReference,
				content: 'Натисніть кнопку Reference внизу праворуч, щоб відкрити довідковий розділ.'
			}),
			FactoryLogic.createTip({
				image: appRoll,
				content: 'Натисніть кнопку Roll внизу праворуч, щоб зробити кидок сили або рят. кидок.'
			}),
			FactoryLogic.createTip({
				image: appSettings,
				content: 'Натисніть кнопку Settings внизу праворуч, щоб змінити параметри й налаштування застосунку.'
			}),
			FactoryLogic.createTip({
				image: appAbout,
				content: 'Помітили ваду? Маєте ідею для нової функції? Натисніть кнопку About, щоб знайти посилання на трекер проблем, або напишіть у Discord MCDM Draw Steel.'
			})
			// #endregion
		];
	};
};
