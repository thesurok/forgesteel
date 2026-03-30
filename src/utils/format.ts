import { Characteristic } from '@/enums/characteristic';

export class Format {
	static capitalize = (text: string, separator: string = ' ') => {
		return text
			?.split(separator)
			.filter(token => token.length > 0)
			.map(token => `${token[0].toUpperCase()}${token.substring(1)}`)
			.join(' ');
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
