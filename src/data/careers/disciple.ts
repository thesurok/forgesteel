import { Career } from '@/models/career';
import { FactoryLogic } from '@/logic/factory-logic';
import { FeatureField } from '@/enums/feature-field';
import { PerkList } from '@/enums/perk-list';
import { SkillList } from '@/enums/skill-list';

export const disciple: Career = {
	id: 'career-disciple',
	name: 'Послушник',
	description: 'Ви працювали у церкві, храмі чи іншій релігійній установі як частина духовенства.',
	features: [
		FactoryLogic.feature.createSkillChoice({
			id: 'career-disciple-feature-1',
			selected: [ 'Religion' ]
		}),
		FactoryLogic.feature.createSkillChoice({
			id: 'career-disciple-feature-2',
			listOptions: [ SkillList.Lore ],
			count: 2
		}),
		FactoryLogic.feature.createBonus({
			id: 'career-disciple-feature-3',
			field: FeatureField.ProjectPoints,
			value: 240
		}),
		FactoryLogic.feature.createPerk({
			id: 'career-disciple-feature-4',
			lists: [ PerkList.Supernatural ]
		})
	],
	incitingIncidents: {
		options: [
			{
				id: 'career-disciple-ii-1',
				name: 'Адвокат янгола',
				description: 'Під впливом зловісної віри ваш культ мало не випустив жахи на світ, коли втрутився янгол (буквально чи образно). Він переконав вас зупинити зусилля культу. Тепер ви йдете слідом за янголом, який показав вам праведний шлях.'
			},
			{
				id: 'career-disciple-ii-2',
				name: 'Догма',
				description: 'Ви приєдналися до релігійної установи під керівництвом доброго наставника, але інші стали фанатиками. Ваш наставник намагався бути голосом розуму серед хвилі ненависті, але його судили як єретика й стратили. Залишивши установу, ви стали героєм, щоб захищати свої переконання.'
			},
			{
				id: 'career-disciple-ii-3',
				name: 'Свобода віросповідання',
				description: 'Ваш храм зруйнували під час релігійного конфлікту. Лідери установи прагнули помсти, але ви побачили в цьому нескінченний цикл руйнування. Ви стали героєм, щоб захищати свободу віросповідання, аби всі могли сповідувати віру без страху.'
			},
			{
				id: 'career-disciple-ii-4',
				name: 'Втрата віри',
				description: 'Ви присвятили життя служінню хворим, нужденним та іншим добрим справам. Знову й знову трагедії спіткали тих, кому ви допомагали, без жодної причини. Ваші молитви залишилися без відповіді, а зусилля — без подяки. Зрештою ви втратили віру у вищу силу й залишили церкву чи храм, щоб творити добро поза релігією.'
			},
			{
				id: 'career-disciple-ii-5',
				name: 'Досвід на межі смерті',
				description: 'Під час служби у релігійній установі ви ледь не загинули внаслідок нещасного випадку. Прийшовши до тями, ви не памʼятали, що працювали у церкві чи храмі. Хоча духовенство просило залишитися, ви вирішили йти власним шляхом. Ваше почуття альтруїзму — чи то набуте, чи природне — веде вас по життю.'
			},
			{
				id: 'career-disciple-ii-6',
				name: 'Важкі часи',
				description: 'Релігійна організація, до якої ви належали, стала корумпованою. Вона використовувала статус у громаді для збагачення через пожертви, а її лідери прагнули політичної влади. Під час посухи установа накопичила ресурси й відмовилася допомагати, що призвело до загибелі багатьох. Ви стали героєм, щоб боротися з такою корупцією й вшанувати памʼять загиблих.'
			}
		],
		selected: null,
		selectedID: null
	}
};
