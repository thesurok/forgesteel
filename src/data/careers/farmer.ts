import { Career } from '@/models/career';
import { FactoryLogic } from '@/logic/factory-logic';
import { FeatureField } from '@/enums/feature-field';
import { PerkList } from '@/enums/perk-list';
import { SkillList } from '@/enums/skill-list';

export const farmer: Career = {
	id: 'career-farmer',
	name: 'Фермер',
	description: 'Ви вирощували врожай або доглядали за худобою.',
	features: [
		FactoryLogic.feature.createSkillChoice({
			id: 'career-farmer-feature-1',
			selected: ['Handle Animals']
		}),
		FactoryLogic.feature.createSkillChoice({
			id: 'career-farmer-feature-2',
			listOptions: [SkillList.Exploration],
			count: 2
		}),
		FactoryLogic.feature.createLanguageChoice({
			id: 'career-farmer-feature-3'
		}),
		FactoryLogic.feature.createBonus({
			id: 'career-farmer-feature-4',
			field: FeatureField.ProjectPoints,
			value: 120
		}),
		FactoryLogic.feature.createPerk({
			id: 'career-farmer-feature-5',
			lists: [PerkList.Exploration]
		})
	],
	incitingIncidents: {
		options: [
			{
				id: 'career-farmer-ii-1',
				name: 'Погибель',
				description: 'Жахлива погибель охопила вашу батьківщину, занедужала худоба й згнили врожаї. Ніхто не знає, чи це природне лихо, чи щось зловісне, але ви вирушили шукати спосіб очистити землю від цієї напасті.'
			},
			{
				id: 'career-farmer-ii-2',
				name: 'Нудьга',
				description: 'Ви завжди прагнули більшого, ніж збирати яйця й доїти корів. Ви вели таємний щоденник мрій, сповнений бажань. Коли батько знайшов щоденник, він спалив його й наказав не літати в хмарах. У відповідь ви зібрали речі й залишили все інше, шукаючи пригод.'
			},
			{
				id: 'career-farmer-ii-3',
				name: 'Прокляття',
				description: 'Під час оранки ви знайшли у землі щось дивне: зброю, прикрасу чи унікальну річ. Ви показали знахідку близькій людині, але коли вона торкнулася предмета, щось сталося. Тепер ви знаєте, що це було прокляття, хоча не розумієте, чому воно вплинуло не на вас. Ви залишили минуле й вирушили по відповіді.'
			},
			{
				id: 'career-farmer-ii-4',
				name: 'Важкі часи',
				description: 'Ваше господарство завжди процвітало, аж поки останніми роками врожаї не зменшилися через погоду, і ви не змогли сплатити десятину місцевій пані. Її солдати забрали все цінне, зокрема сімейну реліквію. Ви залишили ферму й вирушили шукати кращого життя.'
			},
			{
				id: 'career-farmer-ii-5',
				name: 'Спалене дотла',
				description: 'Вашу худобу вбили, врожай і дім спалили. Це могли бути бандити, загарбники з сусіднього королівства чи найманці від конкурентів. Хто б це не був, вони залишили вас ні з чим. Ви не змогли почати з нуля, тому стали героєм, щоб захищати інших від такого лиха.'
			},
			{
				id: 'career-farmer-ii-6',
				name: 'Викрадене',
				description: 'Ваша родина розводила коней — красенів, яким не було рівних на перегонах і турнірах. Коли місцевий пан запропонував купити вашого найкращого жеребця, батько відмовив. Пан убив його й забрав коня. Без цього жеребця рід згасне. Ви маєте намір повернути його — й помститися.'
			}
		],
		selected: null,
		selectedID: null
	}
};
