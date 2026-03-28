import { Negotiation } from '@/models/negotiation';
import { NegotiationSheet } from '@/models/classic-sheets/negotiation-sheet';
import { COMMON_LANGUAGE_NAME, normalizeLanguageName } from '@/utils/language-names';

export class NegotiationSheetBuilder {
	static buildNegotiationSheet = (negotiation: Negotiation): NegotiationSheet => {
		const sheet: NegotiationSheet = {
			id: negotiation.id,
			name: negotiation.name,
			attitude: negotiation.attitude.toString(),
			impression: negotiation.impression,
			interest: negotiation.interest,
			patience: negotiation.patience,
			outcomes: negotiation.outcomes,
			languages: [],
			motivations: negotiation.motivations.map(m => ({ trait: m.trait.toString(), description: m.description })),
			pitfalls: negotiation.pitfalls.map(m => ({ trait: m.trait.toString(), description: m.description }))
		};

		let nativeFound = false;
		negotiation.languages.forEach(lang => {
			const normalizedLanguage = normalizeLanguageName(lang);
			if (normalizedLanguage !== COMMON_LANGUAGE_NAME && !nativeFound) {
				sheet.languages.push(`${normalizedLanguage} (Native)`);
				nativeFound = true;
			} else {
				sheet.languages.push(normalizedLanguage);
			}
		});

		return sheet;
	};
};
