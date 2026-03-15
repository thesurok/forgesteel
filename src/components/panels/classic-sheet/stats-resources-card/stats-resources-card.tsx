import { HeroSheet } from '@/models/classic-sheets/hero-sheet';
import { LabeledTextField } from '@/components/panels/classic-sheet/components/labeled-field';
import { Options } from '@/models/options';
import { RecoveriesComponent } from '@/components/panels/classic-sheet/components/recoveries-component';
import { StaminaComponent } from '@/components/panels/classic-sheet/components/stamina-component';
import { Utils } from '@/utils/utils';

import './stats-resources-card.scss';

interface Props {
	character: HeroSheet;
	options: Options;
}

export const StatsResourcesCard = (props: Props) => {
	const character = props.character;
	const showState = props.options.includePlayState;

	return (
		<div className='stats-resources card'>
			<div className='characteristics-measurements'>
				<div className='characteristics'>
					<div className='labeled-field label-above fancy'>
						<label><span className='symbol'>С</span>ила</label>
						<div className='labeled-field-content'><span>{Utils.isNullOrEmpty(character.might?.toString()) ? <>&nbsp;</> : character.might}</span></div>
					</div>
					<div className='labeled-field label-above fancy'>
						<label><span className='symbol'>Л</span>овкість</label>
						<div className='labeled-field-content'><span>{Utils.isNullOrEmpty(character.agility?.toString()) ? <>&nbsp;</> : character.agility}</span></div>
					</div>
					<div className='labeled-field label-above fancy'>
						<label><span className='symbol'>Р</span>озум</label>
						<div className='labeled-field-content'><span>{Utils.isNullOrEmpty(character.reason?.toString()) ? <>&nbsp;</> : character.reason}</span></div>
					</div>
					<div className='labeled-field label-above fancy'>
						<label><span className='symbol'>І</span>нтуїція</label>
						<div className='labeled-field-content'><span>{Utils.isNullOrEmpty(character.intuition?.toString()) ? <>&nbsp;</> : character.intuition}</span></div>
					</div>
					<div className='labeled-field label-above fancy'>
						<label><span className='symbol'>П</span>рисутність</label>
						<div className='labeled-field-content'><span>{Utils.isNullOrEmpty(character.presence?.toString()) ? <>&nbsp;</> : character.presence}</span></div>
					</div>
				</div>
				<div className='measurements'>
					<LabeledTextField
						label='Розмір'
						content={character.size}
					/>
					<LabeledTextField
						label='Швидкість'
						content={character.speed}
					/>
					<LabeledTextField
						label='Відступ'
						content={character.disengage}
					/>
					<LabeledTextField
						label='Стійкість'
						content={character.stability}
					/>
				</div>
			</div>
			<StaminaComponent
				stamina={character.stamina}
				options={props.options}
			/>
			<RecoveriesComponent
				recoveries={character.recoveries}
				options={props.options}
			/>
			<div className='heroic-resource'>
				<LabeledTextField
					label='Героїчний ресурс'
					content={(showState && character.heroicResourceCurrent?.toString()) || ''}
					additionalClasses={[ 'label-above', 'fancy' ]}
				/>
				<LabeledTextField
					label='Назва'
					content={character.heroicResourceName}
					additionalClasses={[ 'no-box' ]}
				/>
			</div>
			<div className='surges'>
				<LabeledTextField
					label='Сплески'
					content={(showState && character.surgesCurrent?.toString()) || ''}
					additionalClasses={[ 'label-above', 'fancy' ]}
				/>
				<div className='reference'>
					<div>1 Сплеск = Урон <span className='data'>{character.surgeDamageAmount}</span></div>
					<div>2 Сплески = Потужність + 1</div>
				</div>
			</div>
		</div>
	);
};
