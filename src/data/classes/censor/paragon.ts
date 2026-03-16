import { AbilityDistanceType } from '@/enums/ability-distance-type';
import { AbilityKeyword } from '@/enums/ability-keyword';
import { Characteristic } from '@/enums/characteristic';
import { FactoryLogic } from '@/logic/factory-logic';
import { SubClass } from '@/models/subclass';

export const paragon: SubClass = {
	id: 'censor-sub-3',
	name: 'Взірець',
	description: 'Без міцного прикладу й твердої руки слабкі будуть розбещені. Ви спеціалізуєтесь на тому, щоб бути прикладом для свого ордену.',
	featuresByLevel: [
		{
			level: 1,
			features: [
				FactoryLogic.feature.createSkillChoice({
					id: 'censor-sub-3-1-1',
					selected: ['Lead']
				}),
				FactoryLogic.feature.createPackageContent({
					id: 'censor-sub-3-1-2',
					name: 'Перевага Наказу Суду',
					description: 'Першого разу в ході, коли ви використовуєте здатність «Суд», щоб засудити істоту, ви можете вертикально притягнути її на кількість клітинок, рівну двомразовому значенню вашої Присутності.',
					tag: 'censor-judgment'
				})
			]
		},
		{
			level: 2,
			features: [
				FactoryLogic.feature.create({
					id: 'censor-sub-3-2-1',
					name: 'Вести власним прикладом',
					description: 'Відданість вашому божеству дозволяє вам узяти керівництво на полі бою, даючи союзникам користь вашої мудрості. Поки ви знаходитеся поруч із істотою, союзники отримують переваги фланкування проти неї. Також союзники отримують перевагу на перевірках, коли допомагають іншим.',
				}),
				FactoryLogic.feature.create({
					id: 'censor-sub-3-2-2',
					name: 'Непохитний приклад',
					description: 'Ви виявляєте іскру сили свого божества, через що істоти довіряють або бояться вас залежно від ситуації. Ви отримуєте перевагу на перевірках залякування та переконання.',
				}),
				FactoryLogic.feature.createChoice({
					id: 'censor-sub-3-2-3',
					name: 'Здібність Взірця (2-го рівня)',
					options: [
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'censor-sub-3-2-3a',
									name: 'Благословення вірних',
									description: 'Боги винагороджують вашу віру.',
									type: FactoryLogic.type.createManeuver(),
									keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
									distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Aura, value: 3 })],
									target: 'На себе і кожного союзника в зоні впливу',
									cost: 5,
									sections: [
										FactoryLogic.createAbilitySectionText('До кінця зустрічі або поки ви не опинитесь у стані вмирання, кожна ціль у аурі отримує 1 сплеск наприкінці кожного вашого ходу.')
									]
								})
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'censor-sub-3-2-3b',
									name: 'Вирок',
									description: 'Шок від вашого вироку паралізує ворога.',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Magic, AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
									distance: [FactoryLogic.distance.createMelee()],
									target: 'Одна істота',
									cost: 5,
									sections: [
										FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
											characteristic: [Characteristic.Presence],
											tier1: '5 + П шкоди; П < [weak], скутий (рят. кидок)',
											tier2: '9 + П шкоди; П < [average], скутий (рят. кидок)',
											tier3: '12 + П шкоди; П < [strong], скутий (рят. кидок)'
										})),
										FactoryLogic.createAbilitySectionText('Поки ціль сковується таким чином, ваші здібності, що накладають примусовий рух, все ще можуть її переміщувати.')
									]
								})
							}),
							value: 1
						}
					]
				})
			]
		},
		{
			level: 3,
			features: []
		},
		{
			level: 4,
			features: []
		},
		{
			level: 5,
			features: [
				FactoryLogic.feature.create({
					id: 'censor-sub-3-3-1',
					name: 'Тримай позицію!',
					description: 'Ваша божественна іскра зростає в силі, дозволяючи вам і вашим союзникам зосередитися й витримувати удари. На початку кожного вашого ходу ви можете витратити 1d6 Витривалості, щоб зняти з себе один ефект, який знімається рят. кидком або який завершується наприкінці вашого ходу. Будь-який союзник, що починає свій хід у межах 5 клітин від вас, також може витратити Витривалість, щоб отримати цю користь.',
				})
			]
		},
		{
			level: 6,
			features: [
				FactoryLogic.feature.createChoice({
					id: 'censor-sub-3-4-1',
					name: 'Здібність Взірця (6-го рівня)',
					options: [
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'censor-sub-3-4-1a',
									name: 'Зібрання',
									description: 'Ви спрямовуєте гнів своїх союзників на обраного ворога.',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
									distance: [FactoryLogic.distance.createMelee()],
									target: 'Одна істота',
									cost: 9,
									sections: [
										FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
											characteristic: [Characteristic.Might],
											tier1: '8 + С шкоди; як вільна тригерна дія, один союзник у межах 10 клітин від цілі може використати сигнатурну здібність удару проти цілі',
											tier2: '12 + С шкоди; як вільна тригерна дія, один союзник у межах 10 клітин від цілі може використати сигнатурну здібність удару, яка отримує перевагу проти цілі',
											tier3: '16 + С шкоди; як вільна тригерна дія, два союзники у межах 10 клітин від цілі можуть кожен використати сигнатурну здібність удару, яка отримує перевагу проти цілі'
										})),
										FactoryLogic.createAbilitySectionText('Кожен союзник може зміститися до 2 клітинок і отримує 2 сплески перед виконанням удару.')
									]
								})
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'censor-sub-3-4-1b',
									name: 'Заступитися',
									description: 'Ви займаєте місце свого союзника.',
									type: FactoryLogic.type.createTrigger('Істота робить удар по цілі.', { free: true }),
									keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged],
									distance: [FactoryLogic.distance.createRanged(10)],
									target: 'Один союзник',
									cost: 9,
									sections: [
										FactoryLogic.createAbilitySectionText('Ціль не зачіпається ударом, і ви стаєте ціллю замість неї, навіть якщо ви не є дійсною ціллю. Ви отримуєте половину шкоди від удару, а ціль отримує 3 сплески.')
									]
								})
							}),
							value: 1
						}
					]
				})
			]
		},
		{
			level: 7,
			features: []
		},
		{
			level: 8,
			features: [
				FactoryLogic.feature.create({
					id: 'censor-sub-3-5-1',
					name: 'Клятва',
					description: 'Ваші слова набувають сили вашого божества й усієї відповідної авторити. Якщо ви переконаєте істоту прийняти клятву, вона не зможе її порушити протягом 7 днів. Якщо ви самі даєте клятву, ви також не зможете її порушити протягом 7 днів.',
				})
			]
		},
		{
			level: 9,
			features: [
				FactoryLogic.feature.createChoice({
					id: 'censor-sub-3-6-1',
					name: 'Здібність Взірця (9-го рівня)',
					options: [
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'censor-sub-3-6-1a',
									name: 'Відступник',
									description: 'Ви спрямовуєте святу енергію, щоб запечатати долю ворога.',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
									distance: [FactoryLogic.distance.createMelee()],
									target: 'Одна істота',
									cost: 11,
									sections: [
										FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
											characteristic: [Characteristic.Might],
											tier1: '13 + С священної шкоди',
											tier2: '19 + С священної шкоди',
											tier3: '26 + С священної шкоди'
										})),
										FactoryLogic.createAbilitySectionText('До кінця зустрічі або поки ви не опинитесь у стані вмирання, ціль має вразливість до шкоди 10.')
									]
								})
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'censor-sub-3-6-1b',
									name: 'Едикт Непохитної Рішучості',
									description: 'Ви і ваші союзники вкриті мерехтливою бронею.',
									type: FactoryLogic.type.createManeuver(),
									keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged],
									distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Aura, value: 2 })],
									target: 'На себе і кожного союзника в зоні впливу',
									cost: 11,
									sections: [
										FactoryLogic.createAbilitySectionText('До кінця зустрічі або поки ви не опинитесь у стані вмирання, кожна ціль, яка починає свій хід у зоні, отримує 10 тимчасової Витривалості.')
									]
								})
							}),
							value: 1
						}
					]
				})
			]
		},
		{
			level: 10,
			features: []
		}
	],
	abilities: [],
	selected: false
};
