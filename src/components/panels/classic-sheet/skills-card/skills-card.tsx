import { HeroSheet } from '@/models/classic-sheets/hero-sheet';
import { LabeledBooleanField } from '@/components/panels/classic-sheet/components/labeled-field';
import { SheetFormatter } from '@/logic/classic-sheet/sheet-formatter';
import './skills-card.scss';

interface Props {
	character: HeroSheet;
}

export const SkillsCard = (props: Props) => {
	const character = props.character;
	const allSkills = character.allSkills?.entries() || new Map<string, string[]>();
	return (
		<div className='skills card'>
			<h2>Навички</h2>
			<div className='reference'>Маєте 1+ навичок, що застосовуються до тесту? +2 бонус</div>
			<div className='skills-lists'>
				{Array.from(allSkills).map(([list, skills]) =>
					<div className='skill-list' key={`skill-list-${list}`}>
						<h3>{list}</h3>
						<div className='skill-group'>
							{skills.map(s => {
								const key = s.replaceAll(' ', '-');
								return (
									<LabeledBooleanField
										key={`skill-list-${list}-item-${key}`}
										value={character.skills?.includes(s)}
										label={SheetFormatter.getSkillAbbreviation(s)}
									/>
								);
							})}
							{
								skills.length % 2 !== 0 ?
									<div className='spacer'>&nbsp;</div>
									: null
							}
						</div>
					</div>
				)}
			</div>
		</div>
	);
};
