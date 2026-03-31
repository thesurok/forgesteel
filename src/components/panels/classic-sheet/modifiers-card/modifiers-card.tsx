import { LabeledBooleanField, LabeledTextField } from '@/components/panels/classic-sheet/components/labeled-field';
import { FeatureComponent } from '@/components/panels/classic-sheet/components/feature-component';
import { HeroSheet } from '@/models/classic-sheets/hero-sheet';
import { SheetFormatter } from '@/logic/classic-sheet/sheet-formatter';

import './modifiers-card.scss';

import rollT1 from '@/assets/icons/power-roll-t1.svg';
import rollT2 from '@/assets/icons/power-roll-t2.svg';
import rollT3 from '@/assets/icons/power-roll-t3.svg';
import { useMemo } from 'react';

interface Props {
	character: HeroSheet;
}

export const ModifiersCard = (props: Props) => {
	const character = useMemo(
		() => props.character,
		[props.character]
	);

	const getModifierNameLabel = () => {
		let label = 'Назва';

		if (character.modifierTypes.includes('Набір')) {
			label = 'Набір';
			if (character.modifierName?.includes('&')) {
				label = 'Набори';
			}
		} else if (character.modifierTypes.includes('Псі-посилення')) {
			label = 'Псі-посилення';
		} else if (character.modifierTypes.includes('Оберіг')) {
			label = 'Оберіг';
		} else if (character.modifierTypes.includes('Молитва')) {
			label = 'Молитва';
		} else if (character.modifierTypes.includes('Зачарування ')) {
			label = 'Зачарування ';
		}

		return label;
	};

	const getKitDamageModificationSection = () => {
		return (
			<>
				<div className='power-roll-damage-modifiers'>
					<h4>Бонус шкоди ближнього бою</h4>
					<div className='roll-tiers'>
						<div className='tier t1'>
							<div className='effect'>{SheetFormatter.addSign(character.modifierMeleeDamageT1)}</div>
							<img src={rollT1} alt='≤ 11' className='range' />
						</div>
						<div className='tier t2'>
							<div className='effect'>{SheetFormatter.addSign(character.modifierMeleeDamageT2)}</div>
							<img src={rollT2} alt='12 - 16' className='range' />
						</div>
						<div className='tier t3'>
							<div className='effect'>{SheetFormatter.addSign(character.modifierMeleeDamageT3)}</div>
							<img src={rollT3} alt='17 +' className='range' />
						</div>
					</div>
				</div>
				<div className='power-roll-damage-modifiers'>
					<h4>Бонус шкоди дальньої атаки</h4>
					<div className='roll-tiers'>
						<div className='tier t1'>
							<div className='effect'>{SheetFormatter.addSign(character.modifierRangedDamageT1)}</div>
							<img src={rollT1} alt='≤ 11' className='range' />
						</div>
						<div className='tier t2'>
							<div className='effect'>{SheetFormatter.addSign(character.modifierRangedDamageT2)}</div>
							<img src={rollT2} alt='12 - 16' className='range' />
						</div>
						<div className='tier t3'>
							<div className='effect'>{SheetFormatter.addSign(character.modifierRangedDamageT3)}</div>
							<img src={rollT3} alt='17 +' className='range' />
						</div>
					</div>
				</div>
			</>
		);
	};

	let bothWeaponArmor = true;
	let onlyWeaponImplement = false;
	let onlyArmorWard = false;
	if (!character.modifierWeaponImplement?.length || !character.modifierArmorWard?.length) {
		if (character.modifierWeaponImplement?.length) {
			onlyWeaponImplement = true;
			bothWeaponArmor = false;
		}
		if (character.modifierArmorWard?.length) {
			onlyArmorWard = true;
			bothWeaponArmor = false;
		}
	}

	return (
		<div className='modifiers card'>
			<h2>
				<div className='title'>Спорядження та модифікатори</div>
				<LabeledBooleanField
					label='Набір'
					value={character.modifierTypes?.includes('Набір')}
				/>
			</h2>
			<LabeledTextField
				label={getModifierNameLabel()}
				content={character.modifierName}
				additionalClasses={['name', 'label-overlay']}
			/>

			<div className='modifier-augmentations'>
				<div className={`proficiencies ${!bothWeaponArmor ? 'single' : null}`}>
					{
						bothWeaponArmor || onlyWeaponImplement ?
							<LabeledTextField
								label='Зброя / Інструмент'
								content={character.modifierWeaponImplement}
								additionalClasses={['label-overlay']}
							/>
							: null
					}
					{
						bothWeaponArmor || onlyArmorWard ?
							<LabeledTextField
								label='Броня / Щит'
								content={character.modifierArmorWard}
								additionalClasses={['label-overlay']}
							/>
							: null
					}
				</div>

				<div className='stats'>
					<LabeledTextField
						label='Швидк.'
						content={SheetFormatter.addSign(character.modifierSpeed)}
					/>
					<LabeledTextField
						label='Відступ'
						content={SheetFormatter.addSign(character.modifierDisengage)}
					/>
					<LabeledTextField
						label='Витрив.'
						content={SheetFormatter.addSign(character.modifierStamina)}
					/>
					<LabeledTextField
						label='Стійк.'
						content={SheetFormatter.addSign(character.modifierStability)}
					/>
					<LabeledTextField
						label='Дальн. б. бою'
						content={SheetFormatter.addSign(character.modifierMeleeDistance)}
					/>
					<LabeledTextField
						label='Дальн. д. бою'
						content={SheetFormatter.addSign(character.modifierRangedDistance)}
					/>
				</div>
			</div>

			<div className='effects'>
				<div className='damage-modifiers'>
					{getKitDamageModificationSection()}
				</div>

				<div className='benefits'>
					<h3>Ефекти</h3>
					<div className='features'>
						{character.modifierBenefits?.map(f =>
							<FeatureComponent
								key={f.id}
								hero={character.hero}
								feature={f}
							/>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
