import { AncestryData } from '@/data/ancestry-data';
import { LanguageType } from '@/enums/language-type';
import { MonsterData } from '@/data/monster-data';
import { SkillList } from '@/enums/skill-list';
import { Sourcebook } from '@/models/sourcebook';
import { SourcebookType } from '@/enums/sourcebook-type';

export const orden: Sourcebook = {
	id: 'orden',
	name: 'Орден',
	description: 'Стандартний сеттінг для Draw Steel.',
	type: SourcebookType.Official,
	adventures: [],
	ancestries: [
		AncestryData.hakaan,
		AncestryData.memonek,
		AncestryData.timeRaider
	],
	careers: [],
	classes: [],
	complications: [],
	cultures: [],
	domains: [],
	encounters: [],
	imbuements: [],
	items: [],
	kits: [],
	monsterGroups: [
		MonsterData.ajax,
		MonsterData.countRhodar,
		MonsterData.lordSyuul,
		MonsterData.warDog,
		MonsterData.xorannox
	],
	montages: [],
	negotiations: [],
	perks: [],
	projects: [],
	subclasses: [],
	tacticalMaps: [],
	terrain: [],
	titles: [],
	skills: [
		{
			name: 'Таймскейп',
			description: 'Знати про різні планети таймскейпу.',
			list: SkillList.Lore
		}
	],
	languages: [
		// Загальні мови
		{
			name: 'Келіан (Caelian)',
			description: 'Мова стародавньої Келіанської імперії; загальна мова Ордену.',
			type: LanguageType.Common,
			related: []
		},
		// Регіональні мови
		{
			name: 'Хігаран (Higaran)',
			description: 'Нею розмовляють у Хігарі.',
			type: LanguageType.Regional,
			related: []
		},
		{
			name: 'Кемхарік (Khemharic)',
			description: 'Нею розмовляють у Кемхарі.',
			type: LanguageType.Regional,
			related: []
		},
		{
			name: 'Кхурсіріан (Khoursirian)',
			description: 'Нею розмовляють у Кхурсірі; це далеке відгалуження Кхамішу.',
			type: LanguageType.Regional,
			related: ['Кхаміш (Khamish)']
		},
		{
			name: 'Оашуатль (Oaxuatl)',
			description: 'Нею розмовляють в Іксі.',
			type: LanguageType.Regional,
			related: []
		},
		{
			name: 'Федран (Phaedran)',
			description: 'Нею розмовляють у Федросі.',
			type: LanguageType.Regional,
			related: []
		},
		{
			name: 'Ріохан (Riojan)',
			description: 'Нею розмовляють у Ріосі.',
			type: LanguageType.Regional,
			related: []
		},
		{
			name: 'Увалік (Uvalic)',
			description: 'Нею розмовляють голи.',
			type: LanguageType.Regional,
			related: []
		},
		{
			name: 'Ванірик (Vaniric)',
			description: 'Нею розмовляють у Ванігарі.',
			type: LanguageType.Regional,
			related: []
		},
		{
			name: 'Васлоріан (Vaslorian)',
			description: 'Нею розмовляють у Васлорії.',
			type: LanguageType.Regional,
			related: []
		},
		// Культурні мови
		{
			name: 'Анжалі (Anjali)',
			description: 'Нею розмовляють у Пеклах; мова контрактного права.',
			type: LanguageType.Cultural,
			related: []
		},
		{
			name: 'Аксіоматичний (Axiomatic)',
			description: 'Нею розмовляють мемонеки; рідна мова Аксіому; торговельна загальна мова таймскейпу.',
			type: LanguageType.Cultural,
			related: []
		},
		{
			name: 'Філліарик (Filliaric)',
			description: 'Нею розмовляють ангулотлі; відгалуження Циллінрика.',
			type: LanguageType.Cultural,
			related: ['Циллінрик (Cyllinric)']
		},
		{
			name: 'Перша мова (The First Language)',
			description: 'Нею розмовляють старші дракони; мова магії.',
			type: LanguageType.Cultural,
			related: []
		},
		{
			name: 'Високий Курик (High Kuric)',
			description: 'Нею розмовляють бредбеддли, велетні, огри й тролі.',
			type: LanguageType.Cultural,
			related: []
		},
		{
			name: 'Гіраллік (Hyrallic)',
			description: 'Нею розмовляють високі ельфи; мова міжвидової дипломатії.',
			type: LanguageType.Cultural,
			related: []
		},
		{
			name: 'Ілліврик (Illyvric)',
			description: 'Нею розмовляють тіньові ельфи.',
			type: LanguageType.Cultural,
			related: []
		},
		{
			name: 'Калліак (Kalliak)',
			description: 'Нею розмовляють орки; відгалуження Заліаку.',
			type: LanguageType.Cultural,
			related: ['Заліак (Zaliac)']
		},
		{
			name: 'Кетайк (Kethaic)',
			description: 'Нею розмовляють кобольди; патуа з Вастаріаксу й Келіану.',
			type: LanguageType.Cultural,
			related: ['Келіан (Caelian)', 'Вастаріакс (Vastariax)']
		},
		{
			name: 'Кхелт (Khelt)',
			description: 'Нею розмовляють багбери й феї; відгалуження Кхелтіварі.',
			type: LanguageType.Cultural,
			related: ['Кхелтіварі (Kheltivari)']
		},
		{
			name: 'Низький Курик (Low Kuric)',
			description: 'Нею розмовляють елементалі.',
			type: LanguageType.Cultural,
			related: []
		},
		{
			name: 'Мислемова (Mindspeech)',
			description: 'Нею розмовляють безмовні мовці; символічна мова, спільна для вроджених телепатів.',
			type: LanguageType.Cultural,
			related: []
		},
		{
			name: 'Прото-Ктолл (Proto-Ctholl)',
			description: 'Нею розмовляють демони; незавершене відгалуження Толлу.',
			type: LanguageType.Cultural,
			related: ['Толл (Tholl)']
		},
		{
			name: 'Сзетч (Szetch)',
			description: 'Нею розмовляють гобліни й раденвайти.',
			type: LanguageType.Cultural,
			related: []
		},
		{
			name: 'Толл (Tholl)',
			description: 'Нею розмовляють гноли.',
			type: LanguageType.Cultural,
			related: []
		},
		{
			name: 'Уролліалік (Urollialic)',
			description: 'Нею розмовляють олотеки.',
			type: LanguageType.Cultural,
			related: []
		},
		{
			name: 'Варіак (Variac)',
			description: 'Нею розмовляють гноми, олотеки, тролі й безмовні мовці; загальна мова Підземного світу.',
			type: LanguageType.Cultural,
			related: []
		},
		{
			name: 'Вастаріакс (Vastariax)',
			description: 'Нею розмовляють дракони й драконячі лицарі.',
			type: LanguageType.Cultural,
			related: []
		},
		{
			name: 'Ворик (Vhoric)',
			description: 'Нею розмовляють хакаани; відгалуження каменевелетенського діалекту Високого Курика.',
			type: LanguageType.Cultural,
			related: ['Високий Курик (High Kuric)']
		},
		{
			name: 'Волл (Voll)',
			description: 'Нею розмовляють рейдери часу.',
			type: LanguageType.Cultural,
			related: []
		},
		{
			name: 'Іллірик (Yllyric)',
			description: 'Нею розмовляють вудські ельфи; мова друїдів.',
			type: LanguageType.Cultural,
			related: []
		},
		{
			name: 'За\'гаріакс (Za\'hariax)',
			description: 'Нею розмовляють овермайнди.',
			type: LanguageType.Cultural,
			related: []
		},
		{
			name: 'Заліак (Zaliac)',
			description: 'Нею розмовляють дворфи; мова інженерії.',
			type: LanguageType.Cultural,
			related: []
		},
		// Мертві мови
		{
			name: 'Ананжалі (Ananjali)',
			description: 'Нею колись розмовляли хобгобліни.',
			type: LanguageType.Dead,
			related: ['Анжалі (Anjali)']
		},
		{
			name: 'Високий Ривіан (High Rhyvian)',
			description: 'Нею колись розмовляли сонячні ельфи.',
			type: LanguageType.Dead,
			related: ['Гіраллік (Hyrallic)', 'Іллірик (Yllyric)']
		},
		{
			name: 'Кхаміш (Khamish)',
			description: 'Нею колись розмовляли володарі звірів.',
			type: LanguageType.Dead,
			related: ['Кхурсіріан (Khoursirian)']
		},
		{
			name: 'Кхелтіварі (Kheltivari)',
			description: 'Нею колись розмовляли феї.',
			type: LanguageType.Dead,
			related: ['Кхелт (Khelt)', 'Іллірик (Yllyric)']
		},
		{
			name: 'Низький Ривіан (Low Rhyvian)',
			description: 'Нею колись розмовляли небесні ельфи.',
			type: LanguageType.Dead,
			related: ['Гіраллік (Hyrallic)']
		},
		{
			name: 'Старий Варіак (Old Variac)',
			description: 'Нею колись розмовляли олотеки й безмовні мовці.',
			type: LanguageType.Dead,
			related: ['Варіак (Variac)']
		},
		{
			name: 'Форіалтик (Phorialtic)',
			description: 'Нею колись розмовляли елементалі.',
			type: LanguageType.Dead,
			related: ['Високий Курик (High Kuric)', 'Низький Курик (Low Kuric)']
		},
		{
			name: 'Ралларіан (Rallarian)',
			description: 'Нею колись розмовляли сталеві дворфи.',
			type: LanguageType.Dead,
			related: ['Заліак (Zaliac)']
		},
		{
			name: 'Уллорвік (Ullorvic)',
			description: 'Нею колись розмовляли зоряні ельфи.',
			type: LanguageType.Dead,
			related: ['Гіраллік (Hyrallic)', 'Іллірик (Yllyric)']
		}
	]
};
