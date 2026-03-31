import { AbilityDistanceType } from '@/enums/ability-distance-type';
import { AbilityKeyword } from '@/enums/ability-keyword';
import { Characteristic } from '@/enums/characteristic';
import { DamageType } from '@/enums/damage-type';
import { EncounterDifficulty } from '@/enums/encounter-difficulty';
import { ItemType } from '@/enums/item-type';
import { MonsterOrganizationType } from '@/enums/monster-organization-type';
import { MonsterRoleType } from '@/enums/monster-role-type';

const keywordNameMap: Record<string, string> = {
	[AbilityKeyword.Air]: 'Повітря',
	[AbilityKeyword.Animal]: 'Тварина',
	[AbilityKeyword.Animapathy]: 'Анімапатія',
	[AbilityKeyword.Area]: 'Зона',
	[AbilityKeyword.Arms]: 'Руки',
	[AbilityKeyword.Beastheart]: 'Звіросерце',
	[AbilityKeyword.Belt]: 'Ремінь',
	[AbilityKeyword.Brain]: 'Мозок',
	[AbilityKeyword.Champion]: 'Чемпіон',
	[AbilityKeyword.Charge]: 'Ривок',
	[AbilityKeyword.Chronopathy]: 'Хронопатія',
	[AbilityKeyword.Companion]: 'Компаньйон',
	[AbilityKeyword.Cryokinesis]: 'Кріокінез',
	[AbilityKeyword.Earth]: 'Земля',
	[AbilityKeyword.Eye]: 'Очі',
	[AbilityKeyword.Feet]: 'Ступні',
	[AbilityKeyword.Fire]: 'Вогонь',
	[AbilityKeyword.Green]: 'Зелень',
	[AbilityKeyword.Hands]: 'Кисті',
	[AbilityKeyword.Head]: 'Голова',
	[AbilityKeyword.Implant]: 'Імплант',
	[AbilityKeyword.Implement]: 'Імплемент',
	[AbilityKeyword.Magic]: 'Магія',
	[AbilityKeyword.Melee]: 'Ближній бій',
	[AbilityKeyword.Metamorphosis]: 'Метаморфоза',
	[AbilityKeyword.Neck]: 'Шия',
	[AbilityKeyword.Object]: 'Предмет',
	[AbilityKeyword.Oil]: 'Олія',
	[AbilityKeyword.Orb]: 'Сфера',
	[AbilityKeyword.Performance]: 'Виступ',
	[AbilityKeyword.Persistent]: 'Затяжний',
	[AbilityKeyword.Potion]: 'Зілля',
	[AbilityKeyword.Psionic]: 'Псіоніка',
	[AbilityKeyword.Pyrokinesis]: 'Пірокінез',
	[AbilityKeyword.Ranged]: 'Дальній',
	[AbilityKeyword.Resistance]: 'Опір',
	[AbilityKeyword.Resopathy]: 'Резопатія',
	[AbilityKeyword.Ring]: 'Перстень',
	[AbilityKeyword.Rot]: 'Гниль',
	[AbilityKeyword.Scroll]: 'Сувій',
	[AbilityKeyword.Servitor]: 'Сервітор',
	[AbilityKeyword.Spine]: 'Хребет',
	[AbilityKeyword.Spore]: 'Спори',
	[AbilityKeyword.Strike]: 'Удар',
	[AbilityKeyword.Telekinesis]: 'Телекінез',
	[AbilityKeyword.Telepathy]: 'Телепатія',
	[AbilityKeyword.Void]: 'Пустота',
	[AbilityKeyword.Waist]: 'Талія',
	[AbilityKeyword.Wand]: 'Жезл',
	[AbilityKeyword.Water]: 'Вода',
	[AbilityKeyword.Weapon]: 'Зброя'
};

const distanceTypeNameMap: Record<string, string> = {
	[AbilityDistanceType.Self]: 'Себе',
	[AbilityDistanceType.Melee]: 'Ближній бій',
	[AbilityDistanceType.Ranged]: 'Дальній',
	[AbilityDistanceType.Aura]: 'Аура',
	[AbilityDistanceType.Burst]: 'Вибух',
	[AbilityDistanceType.Cube]: 'Куб',
	[AbilityDistanceType.Line]: 'Лінія',
	[AbilityDistanceType.Wall]: 'Стіна',
	[AbilityDistanceType.Summoner]: 'Дальність заклинача',
	[AbilityDistanceType.Special]: 'Особливе'
};

const damageTypeNameMap: Record<string, string> = {
	[DamageType.Damage]: 'Шкода',
	[DamageType.Acid]: 'Кислотна',
	[DamageType.Cold]: 'Холодна',
	[DamageType.Corruption]: 'Скверна',
	[DamageType.Fire]: 'Вогняна',
	[DamageType.Holy]: 'Священна',
	[DamageType.Lightning]: 'Блискавична',
	[DamageType.Poison]: 'Отруйна',
	[DamageType.Psychic]: 'Психічна',
	[DamageType.Sonic]: 'Звукова'
};

const itemTypeNameMap: Record<string, string> = {
	[ItemType.Artifact]: 'Артефакт',
	[ItemType.Consumable1st]: 'Розхідник (1-й ешелон)',
	[ItemType.Consumable2nd]: 'Розхідник (2-й ешелон)',
	[ItemType.Consumable3rd]: 'Розхідник (3-й ешелон)',
	[ItemType.Consumable4th]: 'Розхідник (4-й ешелон)',
	[ItemType.ImbuedArmor]: 'Насичена броня',
	[ItemType.ImbuedImplement]: 'Насичений імплемент',
	[ItemType.ImbuedWeapon]: 'Насичена зброя',
	[ItemType.LeveledArmor]: 'Рівнева броня',
	[ItemType.LeveledImplement]: 'Рівневий імплемент',
	[ItemType.LeveledWeapon]: 'Рівнева зброя',
	[ItemType.Leveled]: 'Рівневий предмет',
	[ItemType.Trinket1st]: 'Дрібничка (1-й ешелон)',
	[ItemType.Trinket2nd]: 'Дрібничка (2-й ешелон)',
	[ItemType.Trinket3rd]: 'Дрібничка (3-й ешелон)',
	[ItemType.Trinket4th]: 'Дрібничка (4-й ешелон)'
};

const itemKindNameMap: Record<string, string> = {
	[ItemType.Artifact]: 'Артефакт',
	[ItemType.ImbuedArmor]: 'Броня',
	[ItemType.ImbuedImplement]: 'Імплемент',
	[ItemType.ImbuedWeapon]: 'Зброя',
	[ItemType.LeveledArmor]: 'Броня',
	[ItemType.LeveledImplement]: 'Імплемент',
	[ItemType.LeveledWeapon]: 'Зброя',
	[ItemType.Leveled]: 'Предмет'
};

const monsterRoleNameMap: Record<string, string> = {
	[MonsterRoleType.NoRole]: 'Без ролі',
	[MonsterRoleType.Ambusher]: 'Засадник',
	[MonsterRoleType.Artillery]: 'Артилерист',
	[MonsterRoleType.Brute]: 'Громила',
	[MonsterRoleType.Controller]: 'Контролер',
	[MonsterRoleType.Defender]: 'Захисник',
	[MonsterRoleType.Harrier]: 'Гонча',
	[MonsterRoleType.Hexer]: 'Проклинач',
	[MonsterRoleType.Mount]: 'Верхова істота',
	[MonsterRoleType.Support]: 'Підтримка'
};

const monsterOrganizationNameMap: Record<string, string> = {
	[MonsterOrganizationType.Minion]: 'Міньйон',
	[MonsterOrganizationType.Horde]: 'Орда',
	[MonsterOrganizationType.Platoon]: 'Взвод',
	[MonsterOrganizationType.Elite]: 'Еліта',
	[MonsterOrganizationType.Leader]: 'Лідер',
	[MonsterOrganizationType.Solo]: 'Соло',
	[MonsterOrganizationType.Retainer]: 'Ретейнер',
	[MonsterOrganizationType.Champion]: 'Чемпіон',
	[MonsterOrganizationType.Companion]: 'Компаньйон',
	[MonsterOrganizationType.NoOrganization]: 'Без організації'
};

const followerClassificationNameMap: Record<string, string> = {
	Follower: 'Прибічник',
	Retainer: 'Ретейнер',
	Companion: 'Компаньйон',
	Artisan: 'Ремісник',
	Sage: 'Мудрець'
};

const movementModeNameMap: Record<string, string> = {
	burrow: 'риття',
	climb: 'лазіння',
	fly: 'політ',
	hover: 'зависання',
	swim: 'плавання',
	teleport: 'телепортація'
};

const encounterDifficultyNameMap: Record<string, string> = {
	[EncounterDifficulty.Empty]: 'Порожньо',
	[EncounterDifficulty.Trivial]: 'Незначна',
	[EncounterDifficulty.Easy]: 'Легка',
	[EncounterDifficulty.Standard]: 'Стандартна',
	[EncounterDifficulty.Hard]: 'Важка',
	[EncounterDifficulty.Extreme]: 'Екстремальна',
	[EncounterDifficulty.SuperExtreme]: 'Надекстремальна',
	[EncounterDifficulty.Silly]: 'Ви вже просто знущаєтесь',
	[EncounterDifficulty.Annihilation]: 'Знищення героїв - це не терапія',
	[EncounterDifficulty.BlackGods]: 'Чорні боги!',
	[EncounterDifficulty.Death]: '💀'
};

export class Format {
	static capitalize = (text: string, separator: string = ' ') => {
		return text
			?.split(separator)
			.filter(token => token.length > 0)
			.map(token => `${token[0].toUpperCase()}${token.substring(1)}`)
			.join(' ');
	};

	static getCharacteristicName = (characteristic: Characteristic | string) => {
		switch (characteristic) {
			case Characteristic.Might:
			case 'M':
				return 'Сила';
			case Characteristic.Agility:
			case 'A':
				return 'Ловкість';
			case Characteristic.Reason:
			case 'R':
				return 'Розум';
			case Characteristic.Intuition:
			case 'I':
				return 'Інтуїція';
			case Characteristic.Presence:
			case 'P':
				return 'Присутність';
			default:
				return characteristic.toString();
		}
	};

	static formatCharacteristicList = (characteristics: (Characteristic | string)[], conjunction: string = 'і') => {
		const names = characteristics.map(characteristic => this.getCharacteristicName(characteristic));

		if (names.length <= 1) {
			return names[0] || '';
		}

		if (names.length === 2) {
			return names.join(` ${conjunction} `);
		}

		return `${names.slice(0, -1).join(', ')} ${conjunction} ${names[names.length - 1]}`;
	};

	static getKeywordName = (keyword: string) => {
		return keywordNameMap[keyword] || keyword.toString();
	};

	static formatKeywordList = (keywords: string[], conjunction: string = 'і') => {
		const names = keywords.map(keyword => this.getKeywordName(keyword));

		if (names.length <= 1) {
			return names[0] || '';
		}

		if (names.length === 2) {
			return names.join(` ${conjunction} `);
		}

		return `${names.slice(0, -1).join(', ')} ${conjunction} ${names[names.length - 1]}`;
	};

	static getDistanceTypeName = (distanceType: AbilityDistanceType | string) => {
		return distanceTypeNameMap[distanceType] || distanceType.toString();
	};

	static getDamageTypeName = (damageType: DamageType | string) => {
		return damageTypeNameMap[damageType] || damageType.toString();
	};

	static getItemTypeName = (itemType: ItemType | string) => {
		return itemTypeNameMap[itemType] || itemType.toString();
	};

	static getItemKindName = (itemType: ItemType | string) => {
		return itemKindNameMap[itemType] || this.getItemTypeName(itemType);
	};

	static getMonsterRoleName = (role: MonsterRoleType | string) => {
		return monsterRoleNameMap[role] || role.toString();
	};

	static getMonsterOrganizationName = (organization: MonsterOrganizationType | string) => {
		return monsterOrganizationNameMap[organization] || organization.toString();
	};

	static getFollowerClassificationName = (classification: string) => {
		return followerClassificationNameMap[classification] || classification;
	};

	static getEncounterDifficultyName = (difficulty: EncounterDifficulty | string) => {
		return encounterDifficultyNameMap[difficulty] || difficulty.toString();
	};

	static getMovementModeName = (mode: string) => {
		return mode
			.split(',')
			.map(part => {
				const trimmed = part.trim();
				const lower = trimmed.toLowerCase();
				return movementModeNameMap[lower] || trimmed;
			})
			.join(', ');
	};

	static formatMovementModes = (modes: string | string[]) => {
		const values = Array.isArray(modes) ? modes : [modes];
		return values
			.filter(mode => mode)
			.map(mode => this.getMovementModeName(mode))
			.join(', ');
	};

	static getCharacteristicAbbreviation = (characteristic: Characteristic | string) => {
		switch (characteristic) {
			case Characteristic.Might:
			case 'M':
				return 'С';
			case Characteristic.Agility:
			case 'A':
				return 'Л';
			case Characteristic.Reason:
			case 'R':
				return 'Р';
			case Characteristic.Intuition:
			case 'I':
				return 'І';
			case Characteristic.Presence:
			case 'P':
				return 'П';
			default:
				return characteristic.toString().slice(0, 1).toUpperCase();
		}
	};

	static startsWithVowel = (text: string) => {
		const vowels = ['a', 'e', 'i', 'o', 'u'];
		return vowels.some(v => text.toLowerCase().startsWith(v));
	};

	static getMonogram = (text: string) => {
		const stopList = ['a', 'an', 'the', 'in', 'on', 'of'];
		return text
			.replace(/[^a-zA-Z0-9 ]/g, '')
			.toLowerCase()
			.split(' ')
			.filter(token => !stopList.includes(token))
			.map(token => token[0])
			.join('')
			.substring(0, 3)
			.toUpperCase();
	};

	static stripEmojis = (str: string) => {
		return str
			.replace(
				/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
				''
			)
			.replace(/\s+/g, ' ')
			.trim();
	};
}
