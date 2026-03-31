import { AbilityKeyword } from '@/enums/ability-keyword';
import { Characteristic } from '@/enums/characteristic';
import { DamageModifierType } from '@/enums/damage-modifier-type';
import { DamageType } from '@/enums/damage-type';
import { FactoryLogic } from '@/logic/factory-logic';
import { FeatureField } from '@/enums/feature-field';
import { Item } from '@/models/item';
import { ItemType } from '@/enums/item-type';

export class TrinketData {
	// #region Echelon 1

	static colorCloakBlue: Item = FactoryLogic.createItem({
		id: 'item-color-cloak-blue',
		name: 'Кольоровий плащ (синій)',
		description: 'Цей шовковисто-синій плащ із каптуром оздоблено золотим сигілом Анжалі (Anjali), що означає «крига».',
		type: ItemType.Trinket1st,
		keywords: [AbilityKeyword.Magic, AbilityKeyword.Neck],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Пінта синього іхору, духовна крейда',
			source: 'Ліцензійні угоди мовою Анжалі (Anjali)',
			characteristic: [Characteristic.Reason, Characteristic.Intuition],
			goal: 150
		}),
		featuresByLevel: [
			{
				level: 1,
				features: [
					FactoryLogic.feature.createDamageModifier({
						id: 'item-color-cloak-blue-1',
						modifiers: [
							FactoryLogic.damageModifier.createPerLevel({
								damageType: DamageType.Cold,
								modifierType: DamageModifierType.Immunity,
								value: 1
							})
						]
					}),
					FactoryLogic.feature.createAbility({
						ability: FactoryLogic.createAbility({
							id: 'item-color-cloak-blue-2',
							name: 'Використати плащ',
							type: FactoryLogic.type.createTrigger('Вас націлює будь-який ефект, що завдає крижаної шкоди'),
							sections: [
								FactoryLogic.createAbilitySectionText('Змістіться на кількість клітинок, що дорівнює вашому рівню. Імунітет до крижаної шкоди, який надає плащ, перетворюється на вразливість до крижаної шкоди, що дорівнює вашому рівню, до кінця наступного раунду. Ви не можете знову використати цю тригерну дію, доки ця вразливість не закінчиться.')
							]
						})
					})
				]
			}
		]
	});

	static colorCloakRed: Item = FactoryLogic.createItem({
		id: 'item-color-cloak-red',
		name: 'Кольоровий плащ (червоний)',
		description: 'Цей вовняний червоний плащ із каптуром оздоблено золотим сигілом Анжалі (Anjali), що означає «вогонь».',
		type: ItemType.Trinket1st,
		keywords: [AbilityKeyword.Magic, AbilityKeyword.Neck],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Пінта червоного іхору, духовна крейда',
			source: 'Ліцензійні угоди мовою Анжалі (Anjali)',
			characteristic: [Characteristic.Reason, Characteristic.Intuition],
			goal: 150
		}),
		featuresByLevel: [
			{
				level: 1,
				features: [
					FactoryLogic.feature.createDamageModifier({
						id: 'item-color-cloak-red-1',
						modifiers: [
							FactoryLogic.damageModifier.createPerLevel({
								damageType: DamageType.Fire,
								modifierType: DamageModifierType.Immunity,
								value: 1
							})
						]
					}),
					FactoryLogic.feature.createAbility({
						ability: FactoryLogic.createAbility({
							id: 'item-color-cloak-red-2',
							name: 'Використати плащ',
							type: FactoryLogic.type.createTrigger('Вас націлює будь-який ефект, що завдає вогняної шкоди'),
							sections: [
								FactoryLogic.createAbilitySectionText('Зменште шкоду до 0. Імунітет до вогняної шкоди, який надає плащ, перетворюється на вразливість до вогняної шкоди, що дорівнює вашому рівню, до кінця наступного раунду. Ви не можете знову використати цю тригерну дію, доки ця вразливість не закінчиться.')
							]
						})
					})
				]
			}
		]
	});

	static colorCloakYellow: Item = FactoryLogic.createItem({
		id: 'item-color-cloak-yellow',
		name: 'Кольоровий плащ (жовтий)',
		description: 'Цей пружний жовтий плащ із каптуром оздоблено золотим сигілом Анжалі (Anjali), що означає «блискавка».',
		type: ItemType.Trinket1st,
		keywords: [AbilityKeyword.Magic, AbilityKeyword.Neck],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Пінта жовтого іхору, духовна крейда',
			source: 'Ліцензійні угоди мовою Анжалі (Anjali)',
			characteristic: [Characteristic.Reason, Characteristic.Intuition],
			goal: 150
		}),
		featuresByLevel: [
			{
				level: 1,
				features: [
					FactoryLogic.feature.createDamageModifier({
						id: 'item-color-cloak-yellow-1',
						modifiers: [
							FactoryLogic.damageModifier.createPerLevel({
								damageType: DamageType.Lightning,
								modifierType: DamageModifierType.Immunity,
								value: 1
							})
						]
					}),
					FactoryLogic.feature.createAbility({
						ability: FactoryLogic.createAbility({
							id: 'item-color-cloak-yellow-2',
							name: 'Використати плащ',
							type: FactoryLogic.type.createTrigger('Вас націлює будь-який ефект, що завдає шкоди блискавкою'),
							sections: [
								FactoryLogic.createAbilitySectionText('Наступна здібність, що завдає шкоди, яку ви використаєте, завдає додаткової шкоди блискавкою, що дорівнює вашому рівню. Імунітет до шкоди блискавкою, який надає плащ, перетворюється на вразливість до шкоди блискавкою, що дорівнює вашому рівню, до кінця наступного раунду. Ви не можете знову використати цю тригерну дію, доки ця вразливість не закінчиться.')
							]
						})
					})
				]
			}
		]
	});

	static deadweight: Item = FactoryLogic.createItem({
		id: 'item-deadweight',
		name: 'Мертвий тягар',
		description: 'Хоча цю стегнову кістку гуманоїда вкрито свинцем, для свого розміру вона здається неможливо важкою.',
		type: ItemType.Trinket1st,
		keywords: [AbilityKeyword.Magic],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Одна стегнова кістка гуманоїда, один зливок свинцю з домішкою зоряного металу',
			source: 'Тексти або перекази мовою Келіан (Caelian)',
			characteristic: [Characteristic.Reason, Characteristic.Intuition],
			goal: 150
		}),
		effect: 'Поки ви тримаєте Мертвий тягар, ви падаєте вдвічі швидше, отримуючи додатково 1 шкоди за кожну клітинку падіння, максимум до 75 загальної шкоди від одного падіння.',
		featuresByLevel: [
			{
				level: 1,
				features: [
					FactoryLogic.feature.createAbility({
						ability: FactoryLogic.createAbility({
							id: 'item-deadweight-1',
							name: 'Здібність предмета',
							type: FactoryLogic.type.createManeuver({ free: true, qualifiers: ['Коли ви падаєте на 5 або більше клітинок'] }),
							distance: [FactoryLogic.distance.createMelee()],
							target: 'Один ворог',
							sections: [
								FactoryLogic.createAbilitySectionText('Один раз під час падіння, перш ніж ви вдаритеся об землю, зробіть ближній вільний удар як безкоштовний маневр.')
							]
						})
					})
				]
			}
		]
	});

	static displacingReplacementBracer: Item = FactoryLogic.createItem({
		id: 'item-displacing-replacement-bracer',
		name: 'Браслет зміщувальної заміни',
		description: 'На деревʼяному браслеті вирізьблено амбіграмний сигіл слова мовою Заліак (Zaliac), що означає «перенесення».',
		type: ItemType.Trinket1st,
		keywords: [AbilityKeyword.Arms, AbilityKeyword.Psionic],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Скамʼяніла деревина дерева, яке ніхто не бачив відтоді, як воно впало',
			source: 'Тексти або перекази мовою Заліак (Zaliac)',
			characteristic: [Characteristic.Reason],
			goal: 150
		}),
		featuresByLevel: [
			{
				level: 1,
				features: [
					FactoryLogic.feature.createAbility({
						ability: FactoryLogic.createAbility({
							id: 'item-displacing-replacement-bracer-1',
							name: 'Використати Браслет зміщувальної заміни',
							type: FactoryLogic.type.createManeuver(),
							sections: [
								FactoryLogic.createAbilitySectionText('Ви міняєте місцями предмет розміру 1S або 1T, який тримаєте в одній руці, з іншим предметом того самого розміру в межах 10 клітинок. Предмети миттєво змінюються місцями, не створюючи жодного зорового чи звукового порушення. Якщо інша істота носить або тримає предмет, який ви переносите собі в руку, і має І < 4, вона не помічає заміни.')
							]
						})
					})
				]
			}
		]
	});

	static divineVine: Item = FactoryLogic.createItem({
		id: 'item-divine-vine',
		name: 'Божественна лоза',
		description: 'Клубок смарагдово-зелених лоз увінчано щелепами велетенської венериної мухоловки.',
		type: ItemType.Trinket1st,
		keywords: [AbilityKeyword.Magic],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Три зівʼялі звичайні лози, благословення дерева',
			source: 'Пісні мовою Іллірик (Yllyric)',
			characteristic: [Characteristic.Reason, Characteristic.Presence],
			goal: 100
		}),
		featuresByLevel: [
			{
				level: 1,
				features: [
					FactoryLogic.feature.createAbility({
						ability: FactoryLogic.createAbility({
							id: 'item-divine-vine-1',
							name: 'Здібність предмета',
							type: FactoryLogic.type.createManeuver(),
							distance: [FactoryLogic.distance.createRanged(5)],
							target: 'Одна істота або предмет',
							sections: [
								FactoryLogic.createAbilitySectionText('Ви кличете Божественну лозу мовою Іллірик (Yllyric), змушуючи її простягнутися від вас на відстань до 5 клітинок і впʼятися щелепами в істоту або предмет, дозволяючи вам використовувати маневр «Схопити» на відстані. Якщо ціль захоплено, ви можете обрати залишити божественну лозу витягнутою, притягнути ціль до себе або притягнути себе до цілі. Божественна лоза залишається прикріпленою до цілі, доки не отримає шкоди від удару, ціль не вирветься із захвату або ви не накажете лозі відпустити ціль (не потребує дії).')
							]
						})
					})
				]
			}
		]
	});

	static flameshadeGloves: Item = FactoryLogic.createItem({
		id: 'item-flameshade-gloves',
		name: 'Рукавички вогнетіні',
		description: 'Коли ви вперше берете ці тонко пошиті рукавички до рук, вони ніби мерехтять між реальністю й небуттям.',
		type: ItemType.Trinket1st,
		keywords: [AbilityKeyword.Hands, AbilityKeyword.Psionic],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Тінь гуманоїда, відокремлена від свого джерела',
			source: 'Тексти або перекази мовою Кхелт (Khelt)',
			characteristic: [Characteristic.Reason],
			goal: 150
		}),
		effect: `
Коли ви використовуєте дію руху, носячи ці рукавички, ви можете покласти одну руку на звичайний предмет як частину цієї дії руху. Якщо предмет завтовшки 1 клітинку або менше й по той бік від нього є вільний простір, наприклад двері або стіна, ви протягуєте крізь нього все тіло, ніби предмета не існує.

Якщо предмет надто товстий або по той бік немає вільного простору, ваша рука застрягає всередині предмета. Щоб витягти руку, потрібно успішно пройти складне випробування Сили як основну дію.`
	});

	static geckoGloves: Item = FactoryLogic.createItem({
		id: 'item-gecko-gloves',
		name: 'Рукавички гекона',
		description: 'Долоні й пальці цих лускатих рукавичок вкрито майже невидимими клейкими волосками.',
		type: ItemType.Trinket1st,
		keywords: [AbilityKeyword.Hands, AbilityKeyword.Magic],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Десять хвостів гекона',
			source: 'Тексти або перекази мовою Келіан (Caelian)',
			characteristic: [Characteristic.Reason, Characteristic.Intuition],
			goal: 100
		}),
		effect: 'Поки ви носите ці рукавички, ваш хват майже неможливо зламати. Вас не можна роззброїти, ви не можете втратити хват під час лазіння, хіба що вас примусово перемістять, а будь-яка істота, яку ви захопили, має шкоду на випробування для маневру «Втекти з захвату».'
	});

	static hellchargerHelm: Item = FactoryLogic.createItem({
		id: 'item-hellcharger-helm',
		name: 'Шолом пекельного натиску',
		description: 'Сталевий шолом оздоблено двома вигнутими ебонітовими рогами, між якими тріпоче потріскуючий вогняний гребінь.',
		type: ItemType.Trinket1st,
		keywords: [AbilityKeyword.Head, AbilityKeyword.Magic],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Один розірваний контракт, один сталевий злиток',
			source: 'Тексти або перекази мовами Анжалі (Anjali) та Келіан (Caelian)',
			characteristic: [Characteristic.Might, Characteristic.Reason],
			goal: 150
		}),
		effect: 'Щоразу, коли ви виконуєте дію Charge, носячи цей шолом, ви отримуєте бонус +5 до швидкості до кінця свого поточного ходу.',
		featuresByLevel: [
			{
				level: 1,
				features: [
					FactoryLogic.feature.createAbility({
						ability: FactoryLogic.createAbility({
							id: 'item-hellcharger-helm-1',
							name: 'Здібність предмета',
							type: FactoryLogic.type.createManeuver({ free: true, qualifiers: ['Після атаки з розгону'] }),
							distance: [FactoryLogic.distance.createMelee()],
							target: 'Одна істота',
							sections: [
								FactoryLogic.createAbilitySectionText('Використайте маневр «Відштовхнути» незалежно від розміру цільової істоти.')
							]
						})
					})
				]
			}
		]
	});

	static maskOfTheMany: Item = FactoryLogic.createItem({
		id: 'item-mask-of-the-many',
		name: 'Маска багатьох',
		description: 'Проста біла маска підбита мʼяким чорним оксамитом, що ледь відчутно пахне кровʼю.',
		type: ItemType.Trinket1st,
		keywords: [AbilityKeyword.Head, AbilityKeyword.Magic],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Один уживаний поховальний саван',
			source: 'Тексти або перекази мовою Келіан (Caelian)',
			characteristic: [Characteristic.Reason, Characteristic.Intuition],
			goal: 150
		}),
		featuresByLevel: [
			{
				level: 1,
				features: [
					FactoryLogic.feature.createAbility({
						ability: FactoryLogic.createAbility({
							id: 'item-mask-of-the-many-1',
							name: 'Використати Маску багатьох',
							type: FactoryLogic.type.createManeuver(),
							sections: [
								FactoryLogic.createAbilitySectionText('Ви перетворюєтеся на будь-якого гуманоїда такого самого розміру, якого бачили раніше. Зовнішність гуманоїда відтворює те, яким ви бачили його востаннє, разом із усім, що він тоді носив. Ваш одяг і спорядження перетворюються на одяг і спорядження цієї постаті, поглинаються вашим тілом або зберігають початкову форму, як ви самі вирішите. Якщо під час останньої зустрічі ця постать мала якісь скарби, вони дублюються як немагічні копії на час вашого перетворення.')
							]
						})
					})
				]
			}
		]
	});

	static quantumSatchel: Item = FactoryLogic.createItem({
		id: 'item-quantum-satchel',
		name: 'Квантова торба',
		description: 'Цю на вигляд просту шкіряну торбу затягує плетений металевий шнурок, а до неї прикріплено опалову брошку.',
		type: ItemType.Trinket1st,
		keywords: [AbilityKeyword.Magic],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Один необроблений опал',
			source: 'Тексти або перекази мовою Келіан (Caelian)',
			characteristic: [Characteristic.Reason, Characteristic.Intuition],
			goal: 150
		}),
		effect: 'Коли брошку знімають із цієї торби й кладуть у контейнер або кімнату, вона магічно сплітає це місце з торбою. Будь-який предмет, який можна покласти в Квантову торбу, зʼявляється поруч із брошкою, і його можна дістати, зазирнувши всередину торби й уявивши потрібний предмет. Місткість торби визначається розміром контейнера або кімнати, де лежить звʼязана брошка. Якщо предмет забрати з контейнера або кімнати, де лежить брошка, його більше не можна буде витягнути через торбу.'
	});

	static snakerattleBangle: Item = FactoryLogic.createItem({
		id: 'item-snakerattle-bangle',
		name: 'Брязкітливий зміїний браслет',
		description: 'Цей вільний лускатий браслет ворушиться й звивається на руці. Щоразу, коли він вдаряється об запʼясток власника, лунає моторошне брязкотіння.',
		type: ItemType.Trinket1st,
		keywords: [AbilityKeyword.Arms, AbilityKeyword.Magic],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Хвіст гримучої змії розміру 3 або більшої',
			source: 'Тексти або перекази мовою Анжалі (Anjali)',
			characteristic: [Characteristic.Reason, Characteristic.Intuition],
			goal: 150
		}),
		effect: `
Поки ви носите цей браслет, ваші ближні вільні удари накладають І < [середній] зляканий (до кінця ходу). Потужність зростає на 1, якщо ви маєте перевагу на кидок сили.

**Особливе**: Якщо ви призивач, ви відновлюєте можливість використовувати свій стандартний ближній вільний удар, поки носите цей браслет.`
	});

	static unbinderBoots: Item = FactoryLogic.createItem({
		id: 'item-unbinder-boots',
		name: 'Чоботи визволення',
		description: 'Цю пару шкіряних чобіт із вишуканою вишивкою вкрито зображеннями розірваних ланцюгів.',
		type: ItemType.Trinket1st,
		keywords: [AbilityKeyword.Feet, AbilityKeyword.Magic],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Один побитий золотий ланцюг щонайменше з пʼятдесяти ланок',
			source: 'Тексти або перекази мовою Келіан (Caelian)',
			characteristic: [Characteristic.Reason, Characteristic.Intuition],
			goal: 150
		}),
		effect: 'Ці чоботи можуть тимчасово відвʼязуватися від пут землі, дозволяючи вам рухатися повітрям на висоті до 3 клітинок над точкою, звідки ви почали рух. Якщо наприкінці ходу ви все ще в повітрі, ви падаєте.'
	});

	// #endregion

	// #region Echelon 2

	static abyssalMapInk: Item = FactoryLogic.createItem({
		id: 'item-abyssal-map-ink',
		name: 'Безоднє картографічне чорнило',
		description: 'Калюжа живого чорнила гарчить і клацає, пожираючи пергамент та гладкі поверхні. Вона розтікається по своїй поживі, доки не стане схожою на плаский вигляд місцевості згори, звиваючись і безупинно підлаштовуючись під усе навколо.',
		type: ItemType.Trinket2nd,
		keywords: [AbilityKeyword.Magic],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Ампула плювка пітлінга й банка людської крові',
			source: 'Тексти або перекази мовою Толл (Tholl)',
			characteristic: [Characteristic.Reason, Characteristic.Intuition],
			goal: 300
		}),
		effect: 'Поки чорнило розлите по гладкій поверхні або аркушу пергаменту, воно перетворюється на мапу розміру 1T або 1S. Ця мапа надає вам подвійну перевагу на випробування з навичкою «Навігація». Якщо мапа активна до початку зіткнення, ви можете перемістити до трьох союзників, зокрема себе, на відстань до 3 клітинок від стартової зони.'
	});

	static bastionBelt: Item = FactoryLogic.createItem({
		id: 'item-bastion-belt',
		name: 'Пояс бастіону',
		description: 'Цей товстий шкіряний пояс має кістяну пряжку й здається незвично важким, коли ви берете його до рук.',
		type: ItemType.Trinket2nd,
		keywords: [AbilityKeyword.Waist, AbilityKeyword.Magic],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Зуб велетня',
			source: 'Тексти або перекази мовою Високий Курик (High Kuric)',
			characteristic: [Characteristic.Might, Characteristic.Intuition],
			goal: 300
		}),
		featuresByLevel: [
			{
				level: 1,
				features: [
					FactoryLogic.feature.createBonus({
						id: 'item-bastion-belt-1',
						field: FeatureField.Stamina,
						value: 3
					}),
					FactoryLogic.feature.createBonus({
						id: 'item-bastion-belt-2',
						field: FeatureField.Stability,
						value: 1
					})
				]
			}
		]
	});

	static evilestEye: Item = FactoryLogic.createItem({
		id: 'item-evilest-eye',
		name: 'Найлихіше око',
		description: 'На золотому ланцюжку моторошно погойдується ідеально збережене очне яблуко.',
		type: ItemType.Trinket2nd,
		keywords: [AbilityKeyword.Neck, AbilityKeyword.Psionic],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Очне яблуко піратського капітана, що втопився в морі',
			source: 'Тексти або перекази мовою Келіан (Caelian)',
			characteristic: [Characteristic.Reason, Characteristic.Intuition],
			goal: 300
		}),
		featuresByLevel: [
			{
				level: 1,
				features: [
					FactoryLogic.feature.createAbility({
						ability: FactoryLogic.createAbility({
							id: 'item-evilest-eye-1',
							name: 'Використати Найлихіше око',
							type: FactoryLogic.type.createManeuver(),
							sections: [
								FactoryLogic.createAbilitySectionText('Ви націлюєте одного ворога в межах 10 клітинок. Ви й кожен союзник у межах 2 клітинок від цілі отримуєте по 1 сплеску.')
							]
						})
					})
				]
			}
		]
	});

	static graspOfTheChainedHand: Item = FactoryLogic.createItem({
		id: 'item-grasp-of-the-chained-hand',
		name: 'Хватка закутої руки',
		description: 'Брязкітлива рукавиця з вільних ланцюгів прикута до кожного пальця власника. Ланцюги ляскають щоразу, коли крізь них проходить магія.',
		type: ItemType.Trinket2nd,
		keywords: [AbilityKeyword.Arms, AbilityKeyword.Magic],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Просочені кровʼю ланцюги, які стримували демона щонайменше 30 днів',
			source: 'Тексти або перекази мовою Толл (Tholl)',
			characteristic: [Characteristic.Reason, Characteristic.Presence],
			goal: 300
		}),
		effect: `
Поки ви носите цю рукавицю, ваші дальні вільні удари мають ключове слово Magic, і якщо ціль має П < [середній], вона магічно приковується до вас до кінця свого наступного ходу. Поки вона прикована, ціль не може віддалятися від вас, а ви можете використати маневр, щоб або вертикально притягнути ціль на відстань до 3 клітинок, або зміститися повітрям на відстань до 3 клітинок у її бік.

**Особливе**: Якщо ви призивач, ви відновлюєте можливість використовувати свій стандартний дальній вільний удар, поки носите цю рукавицю.`
	});

	static insightfulCrown: Item = FactoryLogic.createItem({
		id: 'item-insightful-crown',
		name: 'Прониклива корона',
		description: 'Зроблена з полірованого кришталю, ця мерехтлива діадема переливається безліччю кольорів у присутності сильних емоцій.',
		type: ItemType.Trinket2nd,
		keywords: [AbilityKeyword.Head, AbilityKeyword.Psionic],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Одна міра чистого кришталю, законсервований спогад про справжню радість',
			source: 'Тексти або перекази мовою Варіак (Variac)',
			characteristic: [Characteristic.Reason, Characteristic.Intuition],
			goal: 300
		}),
		effect: 'Поки ви носите корону, ви отримуєте перевагу на випробування Інтуїції, щоб зчитувати емоції й розпізнавати щирість інших істот. Якщо ви успішно проходите випробування Інтуїції, щоб зчитати емоції іншої істоти в межах 5 клітинок, ви можете поставити Режисерові одне запитання про те, що знає ця істота, і Режисер має відповісти чесно. На розсуд Режисера, таким способом ви можете не дістатися до найглибших таємниць істоти.'
	});

	static keyOfInquiry: Item = FactoryLogic.createItem({
		id: 'item-key-of-inquiry',
		name: 'Ключ допиту',
		description: 'Платиновий ключ завдовжки у фут інкрустовано трьома опалами.',
		type: ItemType.Trinket2nd,
		keywords: [AbilityKeyword.Psionic],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Кістка пальця істоти з телепатією, три чорні опали',
			source: 'Тексти або перекази мовою Уллорвік (Ullorvic)',
			characteristic: [Characteristic.Reason, Characteristic.Intuition],
			goal: 300
		}),
		featuresByLevel: [
			{
				level: 1,
				features: [
					FactoryLogic.feature.createAbility({
						ability: FactoryLogic.createAbility({
							id: 'item-key-of-inquiry-1',
							name: 'Використати Ключ допиту',
							type: FactoryLogic.type.createManeuver(),
							sections: [
								FactoryLogic.createAbilitySectionText('Ви торкаєтеся ключем сусідньої згодної, захопленої або скутої істоти й повертаєте ключ на 90 градусів за годинниковою стрілкою. Ціль має правдиво й повно відповісти на наступні три запитання, які їй поставлять. Якщо ж повернути ключ на 90 градусів проти годинникової стрілки, ціль забуває останні 30 хвилин пережитого. Істота, на яку подіяв ключ, не може знову зазнати впливу будь-якого Ключа допиту протягом 1 року. Якщо ключ колись буде знищено, усі стерті ним спогади повернуться. Спогади, стерті ключем, неможливо відновити жодним іншим способом.')
							]
						})
					})
				]
			}
		]
	});

	static mediatorsCharm: Item = FactoryLogic.createItem({
		id: 'item-mediators-charm',
		name: 'Шарм посередника',
		description: 'Вишукана золота сережка оздоблена маленьким рубіном.',
		type: ItemType.Trinket2nd,
		keywords: [AbilityKeyword.Head, AbilityKeyword.Psionic],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Золоте перо авторучки, якою підписали великий договір або угоду, рубін, який колись носив диявол',
			source: 'Тексти чи перекази в Гіраллік (Hyrallic)',
			characteristic: [Characteristic.Reason, Characteristic.Presence],
			goal: 300
		}),
		effect: 'Поки ви носите Шарм посередника, терпіння будь-якого NPC, з яким ви ведете переговори, зростає на 1 (до максимуму 5). Крім того, на початку переговорів ви дізнаєтеся один із мотивів або вад NPC за вибором Director.'
	});

	static necklaceOfTheBayou: Item = FactoryLogic.createItem({
		id: 'item-necklack-of-the-bayou',
		name: 'Намисто байу',
		description: 'Потертий шкіряний обруч несе підвіску у формі ящірки з гнилого дерева.',
		type: ItemType.Trinket2nd,
		keywords: [AbilityKeyword.Neck, AbilityKeyword.Magic],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Галон болотяної води, кінцівки чотирьох різних тритонів',
			source: 'Тексти або перекази мовою Іллірик (Yllyric)',
			characteristic: [Characteristic.Reason, Characteristic.Intuition],
			goal: 300
		}),
		effect: 'Поки ви носите це намисто, ви можете дихати під водою, автоматично пливете з повною швидкістю під час руху й ігноруєте складну місцевість, створену водою, болотом і подібним тереном.'
	});

	static scannerstone: Item = FactoryLogic.createItem({
		id: 'item-scannerstone',
		name: 'Сканувальний камінь',
		description: 'Цей плаский трикутний камінь завбільшки з долоню прикрашено зоряним полем із крихітних самоцвітів.',
		type: ItemType.Trinket2nd,
		keywords: [AbilityKeyword.Psionic],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Шматок полірованого обсидіану, сім бездоганних діамантів розміром із горошину',
			source: 'Тексти або перекази мовою Варіак (Variac)',
			characteristic: [Characteristic.Reason, Characteristic.Intuition],
			goal: 300
		}),
		effect: 'Якщо притиснути Сканувальний камінь до стіни або іншої твердої поверхні завтовшки 1 клітинку чи менше, поряд із ним у повітрі зʼявляється зображення, що показує грубе мініатюрне наближення простору по той бік поверхні. Зображення показує підлоги, стіни та інші перешкоди, але не відображає інші предмети. Воно показує будь-яких рухомих істот по той бік, але не тих, що стоять нерухомо.'
	});

	static stopNGoCoin: Item = FactoryLogic.createItem({
		id: 'item-stop-n-go-coin',
		name: 'Монета «Стій-руш»',
		description: 'Ця маленька безлика монета з одного боку суцільно зелена, а з іншого - суцільно червона.',
		type: ItemType.Trinket2nd,
		keywords: [AbilityKeyword.Magic],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Монета, викарбувана під час землетрусу',
			source: 'Тексти або перекази мовою Келіан (Caelian)',
			characteristic: [Characteristic.Reason, Characteristic.Intuition],
			goal: 300
		}),
		featuresByLevel: [
			{
				level: 1,
				features: [
					FactoryLogic.feature.createAbility({
						ability: FactoryLogic.createAbility({
							id: 'item-stop-n-go-coin-1',
							name: 'Використати монету «Стій-руш»',
							type: FactoryLogic.type.createManeuver(),
							sections: [
								FactoryLogic.createAbilitySectionText(`
Ви підкидаєте монету в повітря й даєте їй упасти на землю перед собою. Киньте d3, щоб визначити ефект монети залежно від того, якою стороною вона впаде:

**1 - Червона**: Область у межах 2 клітинок від вас є складною місцевістю для ворогів до кінця вашого наступного ходу.
**2 - Зелена**: Ви й кожен союзник, який починає свій хід у межах 2 клітинок від вас, отримує бонус +1 до швидкості до кінця вашого наступного ходу.
**3 - Монета, що крутиться**: Поки монета безперервно крутиться, діють обидва ефекти - червоний і зелений.

Перш ніж використати монету знову, її потрібно підняти. Якщо будь-яка істота піднімає монету, її ефекти негайно закінчуються.`)
							]
						})
					})
				]
			}
		]
	});

	static thunderChariot: Item = FactoryLogic.createItem({
		id: 'item-thunder-chariot',
		name: 'Громова колісниця',
		description: 'Порцеляновий візок із золотим філігранним оздобленням і колесами, що тріщать від електрики.',
		type: ItemType.Trinket2nd,
		keywords: [AbilityKeyword.Magic],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Двадцять блискавок, застиглих у часі',
			source: 'Тексти або перекази Першою мовою (The First Language)',
			characteristic: [Characteristic.Reason, Characteristic.Intuition],
			goal: 300
		}),
		effect: `
Громову колісницю можна використовувати як верхову істоту розміру 2. Її швидкість дорівнює швидкості вершника + 3.

Поки ви їдете на Громовій колісниці, ви маєте імунітет до шкоди блискавкою 5. Союзник поруч із вами може використати свій маневр, щоб переміститися на відстань до своєї швидкості, тягнучи вас за собою.`
	});

	// #endregion

	// #region Echelon 3

	static bracersOfStrife: Item = FactoryLogic.createItem({
		id: 'item-bracers-of-strife',
		name: 'Наручі чвар',
		description: 'Кожен із цих металево-синіх наручів має збільшений розмір.',
		type: ItemType.Trinket3rd,
		keywords: [AbilityKeyword.Arms, AbilityKeyword.Magic],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Відтята рука велетня',
			source: 'Тексти або перекази мовою Іллірик (Yllyric)',
			characteristic: [Characteristic.Reason, Characteristic.Intuition],
			goal: 450
		}),
		effect: 'Ви отримуєте бонус +1 до дальності, на яку відштовхуєте будь-яку ціль будь-якою збройною здібністю.',
		featuresByLevel: [
			{
				level: 1,
				features: [
					FactoryLogic.feature.createAbilityDamage({
						id: 'item-bracers-of-strife-1',
						name: '',
						keywords: [AbilityKeyword.Weapon],
						value: 2
					})
				]
			}
		]
	});

	static crossOfTheScornedPuppeteer: Item = FactoryLogic.createItem({
		id: 'item-cross-of-the-scorned-puppeteer',
		name: 'Хрест зневаженого ляльковода',
		description: 'Цей блискучий чорний хрест маріонетника показує у відображенні замість власника постать у масці.',
		type: ItemType.Trinket3rd,
		keywords: [AbilityKeyword.Magic, AbilityKeyword.Psionic],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Котушка шовку, дошка сценічного дерева й душа знаменитого виконавця',
			source: 'Запис ритуалу душовʼяза мовою Анжалі (Anjali)',
			characteristic: [Characteristic.Reason, Characteristic.Intuition],
			goal: 450
		}),
		effect: `
Поки ви тримаєте хрест, він випромінює тьмяні нитки світла, якими ви можете керувати силою думки.

Щоразу, коли ворожого міньйона зводять до 0 Витривалості в межах 5 клітинок від вас, ви можете використати безкоштовну тригерну дію, щоб прикріпити нитку світла до його тіла й командувати його ілюзорним двійником до кінця зіткнення. Міньйон входить до загону міньйонів хреста з тією самою назвою під вашим командуванням, максимум до шести міньйонів. У кожен свій хід ви можете наказати загону рухатися й виконати основну дію, доки вони перебувають у межах 5 клітинок від вас.

Ви також можете тягнути за нитки своїх союзників, щоб уберегти їх від небезпеки. Щоразу, коли союзник у межах 5 клітинок від вас отримує шкоду, ви можете використати тригерну дію, щоб вертикально притягнути його на 5 клітинок, ігноруючи Стійкість, і зменшити шкоду наполовину.

**Особливе**: Якщо ви призивач і тримаєте хрест, то можете натомість організувати міньйонів, отриманих через хрест, в один із загонів свого класу.`
	});

	static crystallizedEssence: Item = FactoryLogic.createItem({
		id: 'item-crystallized-essence',
		name: 'Кристалізована есенція',
		description: 'У центрі цього камʼяного уламка, що змінює колір, бушує буря.',
		type: ItemType.Trinket3rd,
		keywords: [AbilityKeyword.Magic],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Рештки елементаля',
			source: 'Записи мовою Rhorvic',
			characteristic: [Characteristic.Reason, Characteristic.Intuition],
			goal: 450
		}),
		effect: `
Поки ви тримаєте Кристалізовану есенцію, дальність ваших далеких магічних здібностей зростає на 5. Будь-які істоти, яких ви створюєте або призиваєте магією, збільшують свою Витривалість на одну третину від свого максимуму Витривалості.

Крім того, ви можете розтрощити й знищити Кристалізовану есенцію маневром, щоб негайно отримати 5 Есенції.`
	});

	static maskOfOversight: Item = FactoryLogic.createItem({
		id: 'item-mask-of-oversight',
		name: 'Маска нагляду',
		description: 'Ця кутаста маска з електруму має надмір очних отворів і жахливу пащу.',
		type: ItemType.Trinket3rd,
		keywords: [AbilityKeyword.Head, AbilityKeyword.Magic],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Яйце надрозуму, шкіра будь-якого перевертня',
			source: 'Тексти або перекази Першою мовою (The First Language)',
			characteristic: [Characteristic.Reason, Characteristic.Intuition],
			goal: 450
		}),
		featuresByLevel: [
			{
				level: 1,
				features: [
					FactoryLogic.feature.createAbility({
						ability: FactoryLogic.createAbility({
							id: 'item-mask-of-oversight-1',
							name: 'Використати Маску нагляду',
							type: FactoryLogic.type.createManeuver(),
							sections: [
								FactoryLogic.createAbilitySectionText('Ви змушуєте свої очі вирватися з орбіт і розмножитися, доки шість очей не почнуть кружляти навколо вашої голови. Це дає вам огляд на 360 градусів і не дозволяє застати вас зненацька. Крім того, ви маєте подвійну перевагу на випробування, щоб виявити прихованих істот, предмети або механізми, але подвійну шкоду на випробування Присутності, які не використовують навичку «Залякування». Маневром ви можете повернути очі назад у голову й прибрати додаткові очі.')
							]
						})
					})
				]
			}
		]
	});

	static mirageBand: Item = FactoryLogic.createItem({
		id: 'item-mirage-band',
		name: 'Міражний обруч',
		description: 'Темно-синій обруч мерехтить тонко вплетеними нитками іскристого білого світла.',
		type: ItemType.Trinket3rd,
		keywords: [AbilityKeyword.Head, AbilityKeyword.Psionic],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Котушка шовку розумопавука, злиток білого золота',
			source: 'Тексти або перекази мовою Хігаран (Higaran)',
			characteristic: [Characteristic.Reason, Characteristic.Intuition],
			goal: 450
		}),
		effect: 'Поки ви носите Міражний обруч, ви автоматично розпізнаєте ілюзії такими, якими вони є, можете бачити невидимих істот, а надприродні ефекти не можуть приховувати від вас істот і предмети.',
		featuresByLevel: [
			{
				level: 1,
				features: [
					FactoryLogic.feature.createAbility({
						ability: FactoryLogic.createAbility({
							id: 'item-mirage-band-1',
							name: 'Поле галюцинацій',
							description: 'Покривало ілюзії огортає вас і ваших союзників, змушуючи виглядати так, ніби ви тут доречні.',
							keywords: [AbilityKeyword.Psionic, AbilityKeyword.Ranged],
							type: FactoryLogic.type.createManeuver(),
							distance: [FactoryLogic.distance.createRanged(10)],
							target: 'Ви й будь-який союзник',
							sections: [
								FactoryLogic.createAbilitySectionText('Кожну ціль вкриває ілюзія, через яку вона виглядає саме як та істота, яку спостерігач найбільше очікує побачити, чи то гуманоїд, тварина, нежить тощо. Ілюзія закінчується для всіх цілей, якщо будь-яка істота під її дією завдає шкоди або фізично взаємодіє з істотою, не охопленою ілюзією, якщо ви знову використовуєте цю здібність або якщо вирішуєте завершити ефект (не потребує дії). Ілюзія також закінчується для будь-якого ураженого союзника, що віддаляється від вас далі, ніж дальність цієї здібності.')
							]
						})
					})
				]
			}
		]
	});

	static nullfieldResonatorRing: Item = FactoryLogic.createItem({
		id: 'item-nullfield-resonator-ring',
		name: 'Перстень-резонатор Нульового поля',
		description: 'Цей простий мідний перстень ледь помітно вібрує, коли ви берете його до рук.',
		type: ItemType.Trinket3rd,
		keywords: [AbilityKeyword.Ring, AbilityKeyword.Psionic],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Пластинка арсеніду галію',
			source: 'Тексти або перекази Мислемовою (Mindspeech)',
			characteristic: [Characteristic.Reason, Characteristic.Intuition],
			goal: 450
		}),
		effect: 'Щоб носити цей перстень, ви маєте бути Нулем. Поки ви його носите, область вашої здібності Нульове Поле збільшується на 1.',
		featuresByLevel: [
			{
				level: 1,
				features: [
					FactoryLogic.feature.createAbility({
						ability: FactoryLogic.createAbility({
							id: 'item-nullfield-resonator-ring-1',
							name: 'Удар нуль-персня',
							description: 'Ваш удар кулаком вивільняє нищівний сплеск псіонічної енергії.',
							type: FactoryLogic.type.createMain(),
							distance: [FactoryLogic.distance.createMelee()],
							target: 'Одна істота або предмет',
							sections: [
								FactoryLogic.createAbilitySectionRoll(
									FactoryLogic.createPowerRoll({
										characteristic: [Characteristic.Might, Characteristic.Agility],
										tier1: '3 психічної шкоди',
										tier2: '5 психічної шкоди; І < [середній], сповільнений (рят. кидок закінчує)',
										tier3: '8 психічної шкоди; І < [сильний], сповільнений (рят. кидок закінчує)'
									})
								),
								FactoryLogic.createAbilitySectionText('Поки ціль сповільнена таким чином, вона має шкоду на магічні або псіонічні здібності.')
							]
						})
					})
				]
			}
		]
	});

	static shiftingRing: Item = FactoryLogic.createItem({
		id: 'item-shifting-ring',
		name: 'Перстень зміщення',
		description: 'Цей сріблястий металевий перстень ніби на мить зникає, якщо дивитися під певним кутом.',
		type: ItemType.Trinket3rd,
		keywords: [AbilityKeyword.Ring, AbilityKeyword.Psionic],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Третина фунта діамантового пилу, один самородок чистого срібла',
			source: 'Тексти або перекази мовою Кхелт (Khelt)',
			characteristic: [Characteristic.Agility, Characteristic.Intuition],
			goal: 450
		}),
		effect: 'Коли будь-який інший ефект змушує вас телепортуватися, ви можете телепортуватися ще на відстань до 3 клітинок.',
		featuresByLevel: [
			{
				level: 1,
				features: [
					FactoryLogic.feature.createAbility({
						ability: FactoryLogic.createAbility({
							id: 'item-shifting-ring-1',
							name: 'Використати телепортацію Персня зміщення',
							type: FactoryLogic.type.createManeuver({ qualifiers: ['Раз за хід'] }),
							sections: [
								FactoryLogic.createAbilitySectionText('Телепортуйтеся на відстань до 3 клітинок. Крім того, коли будь-який інший ефект змушує вас телепортуватися, ви можете телепортуватися ще на відстань до 3 клітинок.')
							]
						})
					})
				]
			}
		]
	});

	static warbannerOfPride: Item = FactoryLogic.createItem({
		id: 'item-warbanner-of-pride',
		name: 'Бойовий стяг гордості',
		description: 'Велике знамено розвівається на цьому високому древку. На гербі зображено триголового лева, вкритого ранами, але все ще незламного.',
		type: ItemType.Trinket3rd,
		keywords: [AbilityKeyword.Magic],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Королівський плащ і суцільне золоте древко',
			source: 'Тексти або перекази мовою Келіан (Caelian)',
			characteristic: [Characteristic.Reason, Characteristic.Intuition],
			goal: 450
		}),
		effect: `
Поки ви тримаєте стяг, ви маєте бонус +1 до рят. кидків і до спротиву потужностям.

Наприкінці кожного вашого ходу кожен союзник у межах 10 клітинок від вас може зробити рят. кидок проти одного ефекту, який на нього діє й завершується рят. кидком.`
	});

	// #endregion

	// #region Echelon 4

	static gravekeepersLantern: Item = FactoryLogic.createItem({
		id: 'item-gravekeepers-lantern',
		name: 'Ліхтар могильника',
		description: 'Цей стародавній деревʼяний ліхтар укрито моторошними рунами й заплямовано темною кровʼю.',
		type: ItemType.Trinket4th,
		keywords: [AbilityKeyword.Magic],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Подрібнена щелепна кістка могутнього чарівника, деревина з дерева, що позначає кілька могил',
			source: 'Тексти або перекази мовою Гіраллік (Hyrallic)',
			characteristic: [Characteristic.Reason, Characteristic.Intuition],
			goal: 600
		}),
		effect: `
Ліхтар могильника може тимчасово увʼязнити недружній до вас дух мертвого - або безтілесну нежить, або блукаючий дух істоти, яка померла протягом останніх 30 днів, - дозволяючи вам допитати його. Щоб увʼязнити духа, ви маєте бути в межах 10 клітинок від нього й успішно пройти складне випробування Інтуїції як основну дію. Коли духа увʼязнено, ви робите випробування Присутності, щоб схилити його до відповідей на ваші запитання:

| Кидок | Ефект |
|:------|:------|
| ≤ 11 | Ви можете поставити духові два запитання, на одне з яких він має відповісти повно й правдиво. |
| 12 - 16 | Ви можете поставити три запитання, на два з яких дух має відповісти повно й правдиво. |
| ≥ 17 | Ви можете поставити пʼять запитань, і на всі них дух має відповісти повно й правдиво. |

Увʼязнений дух лишається в ліхтарі 10 хвилин. Він памʼятає, що його увʼязнили саме ви, і згодом може стати ворожим.`
	});

	static hagbasket: Item = FactoryLogic.createItem({
		id: 'item-hagbasket',
		name: 'Кошик карги',
		description: 'Цей трон, сплетений із дерева, волосся та металу, ширяє на кілька футів над землею. Ніжне гудіння під час польоту нагадує регіт карги.',
		type: ItemType.Trinket4th,
		keywords: [AbilityKeyword.Magic],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Звичайна мітла, хатина карги й поцілунок карги',
			source: 'Тексти або перекази мовою Кхелт (Khelt)',
			characteristic: [Characteristic.Reason, Characteristic.Intuition],
			goal: 600
		}),
		effect: `
Кошик карги можна використовувати як верхову істоту розміру 2. Його швидкість дорівнює швидкості вершника, і він може літати та зависати. Поки ви їдете в Кошику карги, кидки сили проти вас мають подвійну перевагу. Однак, коли кидок сили проти вас дає результат 3-го рівня, ви можете використати безкоштовну тригерну дію, щоб зменшити шкоду наполовину.

**Особливе**: Якщо ви призивач і їдете в Кошику карги, ви можете використати маневр, щоб дозволити згодному союзникові в межах вашої дальності призивача використати Minion Bridge за допомогою ваших міньйонів.`
	});

	static psiBlade: Item = FactoryLogic.createItem({
		id: 'item-psi-blade',
		name: 'Псі-клинок',
		description: 'Цей широкий металевий наруч інкрустовано сяйливим самоцвітом.',
		type: ItemType.Trinket4th,
		keywords: [AbilityKeyword.Arms, AbilityKeyword.Psionic],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Сталевий сплав, один тонко огранений топаз',
			source: 'Тексти або перекази Мислемовою (Mindspeech)',
			characteristic: [Characteristic.Agility, Characteristic.Presence],
			goal: 600
		}),
		effect: '',
		featuresByLevel: [
			{
				level: 1,
				features: [
					FactoryLogic.feature.createAbility({
						ability: FactoryLogic.createAbility({
							id: 'item-psi-blade-1',
							name: 'Активувати Псі-клинок',
							type: FactoryLogic.type.createManeuver(),
							sections: [
								FactoryLogic.createAbilitySectionText('Ви проєктуєте сяйливе лезо з хвилястої психічної енергії, яке простягається вздовж вашої руки.')
							]
						})
					}),
					FactoryLogic.feature.createAbility({
						ability: FactoryLogic.createAbility({
							id: 'item-psi-blade-2',
							name: 'Удар Псі-клинком',
							type: FactoryLogic.type.createManeuver({ qualifiers: ['Клинок активний', 'Раз за хід'] }),
							sections: [
								FactoryLogic.createAbilitySectionText('Зробіть ближній збройний вільний удар, що завдає додатково 3 психічної шкоди.')
							]
						})
					})
				]
			}
		]
	});

	static warbannerOfWrath: Item = FactoryLogic.createItem({
		id: 'item-warbanner-of-wrath',
		name: 'Бойовий стяг гніву',
		description: 'Велике знамено розвівається на цьому високому древку. На його гербі зображено дракона, що дихає вогнем, із розпростертими крилами, подертими й пробитими дірками.',
		type: ItemType.Trinket4th,
		keywords: [AbilityKeyword.Magic],
		crafting: FactoryLogic.createProject({
			prerequisites: 'Королівське смертне покривало й суцільне латунне древко',
			source: 'Тексти або перекази мовою Келіан (Caelian)',
			characteristic: [Characteristic.Reason, Characteristic.Intuition],
			goal: 600
		}),
		effect: `
Поки ви тримаєте стяг, ви можете наприкінці кожного бойового зіткнення за власним вибором відновлювати 1 Відновлення.

Раз за хід, коли ви або союзник у межах 10 клітинок від вас робить ближній удар, цей удар може завдати додаткової шкоди залежно від того, скільки Відновлень лишилося в того, хто бʼє. Удар завдає +1 шкоди, якщо в нього залишилося більше половини Відновлень, +2 шкоди, якщо лишилася половина або менше, але ще принаймні одне Відновлення, і +5 шкоди, якщо Відновлень не лишилося зовсім.`
	});

	// #endregion
}
