import { AbilityDistanceType } from '@/enums/ability-distance-type';
import { AbilityKeyword } from '@/enums/ability-keyword';
import { Characteristic } from '@/enums/characteristic';
import { FactoryLogic } from '@/logic/factory-logic';
import { Imbuement } from '@/models/imbuement';
import { ItemType } from '@/enums/item-type';

export class ImbuedWeaponData {
	static bloodBargain: Imbuement = FactoryLogic.createImbuement({
		type: ItemType.ImbuedWeapon,
		crafting: FactoryLogic.createProject({
			prerequisites: 'Кров диявола',
			source: 'Тексти або знання мовою Анжалі (Anjali)',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 150
		}),
		level: 1,
		feature: FactoryLogic.feature.createAbility({
			ability: FactoryLogic.createAbility({
				id: 'imbuement-blood-bargain',
				name: 'Кривава угода',
				type: FactoryLogic.type.createManeuver(),
				sections: [
					FactoryLogic.createAbilitySectionText('Ви раните себе цією зброєю й отримуєте 1d6 шкоди, яку неможливо зменшити жодним способом. Потім союзник у межах 5 клітинок може витратити Відновлення.')
				]
			})
		})
	});

	static chillingI: Imbuement = FactoryLogic.createImbuement({
		type: ItemType.ImbuedWeapon,
		crafting: FactoryLogic.createProject({
			prerequisites: 'Шматок криги з Квінтесенції, який ніколи не тане',
			source: 'Тексти або знання мовою Іллірик (Yllyric)',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 150
		}),
		level: 1,
		feature: FactoryLogic.feature.create({
			id: 'imbuement-chilling-i',
			name: 'Охолодження I',
			description: 'Щоразу, коли ви завдаєте істоті шкоди здібністю, що використовує цю зброю, і отримуєте результат 3 рівня, ця істота отримує 3 холодної шкоди.'
		})
	});

	static disruptingI: Imbuement = FactoryLogic.createImbuement({
		type: ItemType.ImbuedWeapon,
		crafting: FactoryLogic.createProject({
			prerequisites: 'Флакон крові живого святого',
			source: 'Тексти або знання мовою Анжалі (Anjali)',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 150
		}),
		level: 1,
		feature: FactoryLogic.feature.create({
			id: 'imbuement-disrupting-i',
			name: 'Розсіювання I',
			description: 'Щоразу, коли ви завдаєте нежиті шкоди цією зброєю й залишаєте її з 15 Витривалості або менше, вона зводиться до 0 Витривалості.'
		})
	});

	static hurling: Imbuement = FactoryLogic.createImbuement({
		type: ItemType.ImbuedWeapon,
		crafting: FactoryLogic.createProject({
			prerequisites: 'Магніт із рідкісних металів',
			source: 'Тексти або знання мовою Варіак (Variac)',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 150
		}),
		level: 1,
		feature: FactoryLogic.feature.create({
			id: 'imbuement-hurling',
			name: 'Метальний',
			description: 'Щоразу, коли ви використовуєте ближню здібність цією зброєю, ви можете кинути цю зброю, вважаючи дистанцію здібності натомість дальнім боєм 3. Після розвʼязання здібності зброя повертається вам у руку. Будь-яка здібність, використана, коли ви кидаєте цю зброю, не може накладати стани схоплення чи сковування.'
		})
	});

	static merciful: Imbuement = FactoryLogic.createImbuement({
		type: ItemType.ImbuedWeapon,
		crafting: FactoryLogic.createProject({
			prerequisites: 'Гілочка докварту, рідкісної рослини з природними анестетичними властивостями',
			source: 'Тексти або знання мовою Іллірик (Yllyric)',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 150
		}),
		level: 1,
		feature: FactoryLogic.feature.create({
			id: 'imbuement-merciful',
			name: 'Милосердний',
			description: 'Щоразу, коли ви зводите цією зброєю до 0 Витривалості істоту, яка не є нежиттю, вона непритомніє й прокидається через 1d6 годин. Істота з навичкою Лікування може розбудити непритомну істоту раніше, приділивши їй 1 безперервну хвилину медичної допомоги. Коли істота прокидається, вона відновлює 1 Витривалість.'
		})
	});

	static terrifyingI: Imbuement = FactoryLogic.createImbuement({
		type: ItemType.ImbuedWeapon,
		crafting: FactoryLogic.createProject({
			prerequisites: 'Збережена неушкоджена мигдалина безумовбивці',
			source: 'Тексти або знання мовою Варіак (Variac)',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 150
		}),
		level: 1,
		feature: FactoryLogic.feature.create({
			id: 'imbuement-terrifying-i',
			name: 'Страхітливий I',
			description: 'Щоразу, коли ви завдаєте істоті шкоди здібністю, що використовує цю зброю, і отримуєте результат 3 рівня, ця істота отримує 2 психічної шкоди.'
		})
	});

	static thunderingI: Imbuement = FactoryLogic.createImbuement({
		type: ItemType.ImbuedWeapon,
		crafting: FactoryLogic.createProject({
			prerequisites: 'Серце лева, ведмедя чи іншого великого хижого звіра',
			source: 'Тексти або знання мовою Низький Курик (Low Kuric)',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 150
		}),
		level: 1,
		feature: FactoryLogic.feature.create({
			id: 'imbuement-thundering-i',
			name: 'Громовий I',
			description: 'Щоразу, коли ви завдаєте кидкової шкоди істоті цією зброєю, після розвʼязання інших ефектів здібності ви можете відштовхнути цю істоту на 1 клітинку.'
		})
	});

	static vengeanceI: Imbuement = FactoryLogic.createImbuement({
		type: ItemType.ImbuedWeapon,
		crafting: FactoryLogic.createProject({
			prerequisites: 'Корона узурпатора',
			source: 'Тексти або знання мовою Калліак (Kalliak)',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 150
		}),
		level: 1,
		feature: FactoryLogic.feature.create({
			id: 'imbuement-vengeance-i',
			name: 'Помста I',
			description: 'Щоразу, коли ви використовуєте цією зброєю здібність, що завдає шкоди, проти істоти, яка завдала вам шкоди з кінця вашого попереднього ходу, ця здібність завдає додаткові 2 шкоди.'
		})
	});

	static wingbane: Imbuement = FactoryLogic.createImbuement({
		type: ItemType.ImbuedWeapon,
		crafting: FactoryLogic.createProject({
			prerequisites: 'Махове перо велетенського яструба',
			source: 'Тексти або знання мовою Іллірик (Yllyric)',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 150
		}),
		level: 1,
		feature: FactoryLogic.feature.create({
			id: 'imbuement-wingbane',
			name: 'Крилобій',
			description: 'Щоразу, коли ви завдаєте шкоди летючій істоті цією зброєю, вона також отримує кровотечу (рят. кидок закінчує). Поки кровотеча триває таким чином, істота отримує 1 шкоди за кожну клітинку, яку пролітає. Якщо істота починає й завершує свій хід на тій самій твердій поверхні, стан кровотечі закінчується.'
		})
	});

	static chargebreaker: Imbuement = FactoryLogic.createImbuement({
		type: ItemType.ImbuedWeapon,
		crafting: FactoryLogic.createProject({
			prerequisites: 'Адамантиновий наконечник списа',
			source: 'Тексти або знання мовою Заліак (Zaliac)',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 150
		}),
		level: 5,
		feature: FactoryLogic.feature.createAbility({
			ability: FactoryLogic.createAbility({
				id: 'imbuement-chargebreaker',
				name: 'Ламач натиску',
				type: FactoryLogic.type.createTrigger('Ціль добровільно переміщується поруч із вами', { free: true }),
				keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
				distance: [FactoryLogic.distance.createMelee()],
				target: 'Один ворог',
				sections: [
					FactoryLogic.createAbilitySectionText('Ціль отримує 5 шкоди.')
				]
			})
		})
	});

	static chillingII: Imbuement = FactoryLogic.createImbuement({
		type: ItemType.ImbuedWeapon,
		crafting: FactoryLogic.createProject({
			prerequisites: 'Замерзлі кістки з лігва білого дракона',
			source: 'Тексти або знання мовою Іллірик (Yllyric)',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 150
		}),
		level: 5,
		feature: FactoryLogic.feature.create({
			id: 'imbuement-chilling-ii',
			name: 'Охолодження II',
			description: 'Щоразу, коли ви завдаєте істоті шкоди здібністю, що використовує цю зброю, і отримуєте результат 3 рівня, ця істота отримує 6 холодної шкоди й стає сповільненою (рят. кидок закінчує). Ця перевага замінює Охолодження I.'
		})
	});

	static devastating: Imbuement = FactoryLogic.createImbuement({
		type: ItemType.ImbuedWeapon,
		crafting: FactoryLogic.createProject({
			prerequisites: 'Ріг демона бійні',
			source: 'Тексти або знання мовою Високий Курик (High Kuric)',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 150
		}),
		level: 5,
		feature: FactoryLogic.feature.create({
			id: 'imbuement-devastating',
			name: 'Спустошливий',
			description: 'Щоразу, коли ви робите кидок здібності цією зброєю, число, потрібне для критичного удару, зменшується на 1.'
		})
	});

	static disruptingII: Imbuement = FactoryLogic.createImbuement({
		type: ItemType.ImbuedWeapon,
		crafting: FactoryLogic.createProject({
			prerequisites: 'Живець зі столітнього живого дерева на цвинтарі',
			source: 'Тексти або знання мовою Анжалі (Anjali)',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 150
		}),
		level: 5,
		feature: FactoryLogic.feature.create({
			id: 'imbuement-disrupting-ii',
			name: 'Розсіювання II',
			description: 'Щоразу, коли ви завдаєте нежиті шкоди цією зброєю й залишаєте її з 30 Витривалості або менше, вона зводиться до 0 Витривалості. Ця перевага замінює Розсіювання I.'
		})
	});

	static metamorphic: Imbuement = FactoryLogic.createImbuement({
		type: ItemType.ImbuedWeapon,
		crafting: FactoryLogic.createProject({
			prerequisites: 'Олія з печінки олотека',
			source: 'Тексти або знання мовою Варіак (Variac)',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 150
		}),
		level: 5,
		feature: FactoryLogic.feature.createAbility({
			ability: FactoryLogic.createAbility({
				id: 'imbuement-metamorphic',
				name: 'Метаморфний',
				type: FactoryLogic.type.createManeuver(),
				sections: [
					FactoryLogic.createAbilitySectionText(`
Ви можете змінювати форму цієї зброї, надаючи їй одну з таких переваг на ваш вибір:
* **Прихований**: Зброя зменшується до розміру прикраси й її можна носити як сережку, намисто чи подібний аксесуар. У цій формі її не можна використовувати для збройних здібностей.
* **Великий**: Здібності з цією зброєю отримують бонус +1 до дистанції ближнього бою або +3 до дистанції дальнього бою.
* **Лютий**: Щоразу, коли ви завдаєте істоті шкоди цією зброєю, ви завдаєте додатково 1 шкоди за результату 1 рівня, 2 шкоди за результату 2 рівня і 3 шкоди за результату 3 рівня.`)
				]
			})
		})
	});

	static silencing: Imbuement = FactoryLogic.createImbuement({
		type: ItemType.ImbuedWeapon,
		crafting: FactoryLogic.createProject({
			prerequisites: 'Каптур ката, вдягнений під час страти мага',
			source: 'Тексти або знання мовою Перша мова (The First Language)',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 150
		}),
		level: 5,
		feature: FactoryLogic.feature.create({
			id: 'imbuement-silencing',
			name: 'Заглушення',
			description: 'Щоразу, коли ви завдаєте істоті шкоди здібністю, що використовує цю зброю, і отримуєте результат 3 рівня, ця істота також не може використовувати магічні здібності до кінця свого наступного ходу.'
		})
	});

	static terrifyingII: Imbuement = FactoryLogic.createImbuement({
		type: ItemType.ImbuedWeapon,
		crafting: FactoryLogic.createProject({
			prerequisites: 'Річковий мул, зібраний в Абісальній Пустці',
			source: 'Тексти або знання мовою Варіак (Variac)',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 150
		}),
		level: 5,
		feature: FactoryLogic.feature.create({
			id: 'imbuement-terrifying-ii',
			name: 'Страхітливий II',
			description: 'Щоразу, коли ви завдаєте істоті шкоди здібністю, що використовує цю зброю, і отримуєте результат 3 рівня, ця істота отримує 4 психічної шкоди й стає зляканою (рят. кидок закінчує). Ця перевага замінює Страхітливий I.'
		})
	});

	static thunderingII: Imbuement = FactoryLogic.createImbuement({
		type: ItemType.ImbuedWeapon,
		crafting: FactoryLogic.createProject({
			prerequisites: 'Залізний прут, заряджений агонією вмираючої сутності бурі',
			source: 'Тексти або знання мовою Низький Курик (Low Kuric)',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 150
		}),
		level: 5,
		feature: FactoryLogic.feature.create({
			id: 'imbuement-thundering-ii',
			name: 'Громовий II',
			description: 'Щоразу, коли ви завдаєте кидкової шкоди істоті цією зброєю, після розвʼязання інших ефектів здібності ви можете відштовхнути цю істоту до 3 клітинок. Якщо ви отримали результат 3 рівня, після цього відштовхування істота також падає долілиць. Ця перевага замінює Громовий I.'
		})
	});

	static vengeanceII: Imbuement = FactoryLogic.createImbuement({
		type: ItemType.ImbuedWeapon,
		crafting: FactoryLogic.createProject({
			prerequisites: 'Рештки заклятого ворога того, хто наділяє предмет чарами',
			source: 'Тексти або знання мовою Калліак (Kalliak)',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 150
		}),
		level: 5,
		feature: FactoryLogic.feature.create({
			id: 'imbuement-vengeance-ii',
			name: 'Помста II',
			description: 'Щоразу, коли ви використовуєте цією зброєю здібність, що завдає шкоди, проти істоти, яка завдала вам шкоди з кінця вашого попереднього ходу, ця здібність завдає додаткові 4 шкоди. Ця перевага замінює Помсту I.'
		})
	});

	static chillingIII: Imbuement = FactoryLogic.createImbuement({
		type: ItemType.ImbuedWeapon,
		crafting: FactoryLogic.createProject({
			prerequisites: 'Зброю треба занурити в Льодовикову Кузню в найхолодніших глибинах Пекла',
			source: 'Тексти або знання мовою Іллірик (Yllyric)',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 150
		}),
		level: 9,
		feature: FactoryLogic.feature.create({
			id: 'imbuement-chilling-iii',
			name: 'Охолодження III',
			description: 'Щоразу, коли ви завдаєте істоті шкоди здібністю, що використовує цю зброю, і отримуєте результат 3 рівня, ця істота отримує 9 холодної шкоди й стає сповільненою (рят. кидок закінчує). Ця перевага замінює Охолодження II.'
		})
	});

	static disruptingIII: Imbuement = FactoryLogic.createImbuement({
		type: ItemType.ImbuedWeapon,
		crafting: FactoryLogic.createProject({
			prerequisites: 'Поховальні обгортки мумії, похованої щонайменше століття тому',
			source: 'Тексти або знання мовою Анжалі (Anjali)',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 150
		}),
		level: 9,
		feature: FactoryLogic.feature.create({
			id: 'imbuement-disrupting-iii',
			name: 'Розсіювання III',
			description: 'Щоразу, коли ви завдаєте нежиті шкоди цією зброєю й залишаєте її з 50 Витривалості або менше, вона негайно зводиться до 0 Витривалості. Якщо натомість ви залишаєте її зі 100 Витривалості або менше, вона стає зляканою (рят. кидок закінчує). Ця перевага замінює Розсіювання II.'
		})
	});

	static draining: Imbuement = FactoryLogic.createImbuement({
		type: ItemType.ImbuedWeapon,
		crafting: FactoryLogic.createProject({
			prerequisites: 'Цілий, досі мислячий мозок безголосого балакуна',
			source: 'Тексти або знання мовою Волл (Voll)',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 150
		}),
		level: 9,
		feature: FactoryLogic.feature.create({
			id: 'imbuement-draining',
			name: 'Виснаження',
			description: 'Щоразу, коли ви завдаєте істоті шкоди здібністю, що використовує цю зброю, і отримуєте результат 3 рівня, ця істота також стає ослабленою (рят. кидок закінчує). Щоразу, коли ви ослаблюєте істоту цією зброєю, ви отримуєте 1 сплеск.'
		})
	});

	static imprisioning: Imbuement = FactoryLogic.createImbuement({
		type: ItemType.ImbuedWeapon,
		crafting: FactoryLogic.createProject({
			prerequisites: 'Ланцюг, яким колись стримували ангела',
			source: 'Тексти або знання мовою Анжалі (Anjali)',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 150
		}),
		level: 9,
		feature: FactoryLogic.feature.create({
			id: 'imbuement-imprisioning',
			name: 'Увʼязнення',
			description: 'Щоразу, коли ви завдаєте істоті шкоди здібністю, що використовує цю зброю, і отримуєте результат 3 рівня, ця істота також стає скутою (рят. кидок закінчує). Поки істота скута таким чином, вона не може використовувати магічні чи псіонічні здібності.'
		})
	});

	static nova: Imbuement = FactoryLogic.createImbuement({
		type: ItemType.ImbuedWeapon,
		crafting: FactoryLogic.createProject({
			prerequisites: 'Шматок металу, якого торкнулося сонце',
			source: 'Тексти або знання мовою Уллорвік (Ullorvic)',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 150
		}),
		level: 9,
		feature: FactoryLogic.feature.createAbility({
			ability: FactoryLogic.createAbility({
				id: 'imbuement-nova',
				name: 'Нова',
				description: 'Я вічне полумʼя, крихітко!',
				type: FactoryLogic.type.createMain(),
				keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
				distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 3 })],
				target: 'Кожен ворог у зоні',
				sections: [
					FactoryLogic.createAbilitySectionRoll(
						FactoryLogic.createPowerRoll({
							characteristic: [Characteristic.Might, Characteristic.Agility, Characteristic.Reason, Characteristic.Intuition, Characteristic.Presence],
							tier1: '7 вогняної шкоди',
							tier2: '11 вогняної шкоди',
							tier3: '16 вогняної шкоди'
						})
					)
				]
			})
		})
	});

	static terrifyingIII: Imbuement = FactoryLogic.createImbuement({
		type: ItemType.ImbuedWeapon,
		crafting: FactoryLogic.createProject({
			prerequisites: 'Центральне око надрозуму',
			source: 'Тексти або знання мовою Варіак (Variac)',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 150
		}),
		level: 9,
		feature: FactoryLogic.feature.create({
			id: 'imbuement-terrifying-iii',
			name: 'Страхітливий III',
			description: 'Щоразу, коли ви завдаєте істоті шкоди здібністю, що використовує цю зброю, і отримуєте результат 3 рівня, ця істота отримує 6 психічної шкоди й стає зляканою (рят. кидок закінчує). Ця перевага замінює Страхітливий II.'
		})
	});

	static thunderingIII: Imbuement = FactoryLogic.createImbuement({
		type: ItemType.ImbuedWeapon,
		crafting: FactoryLogic.createProject({
			prerequisites: 'Оракул бурі має добровільно благословити зброю блискавкою, поки її тримають у руках, а її власник має пережити це випробування',
			source: 'Тексти або знання мовою Низький Курик (Low Kuric)',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 150
		}),
		level: 9,
		feature: FactoryLogic.feature.create({
			id: 'imbuement-thundering-iii',
			name: 'Громовий III',
			description: 'Щоразу, коли ви завдаєте кидкової шкоди істоті цією зброєю, після розвʼязання інших ефектів здібності ви можете вертикально відштовхнути її до 5 клітинок і збити долілиць. Якщо внаслідок цього руху істота отримує або завдає шкоди, вона також отримує 5 звукової шкоди. Ця перевага замінює Громовий II.'
		})
	});

	static vengeanceIII: Imbuement = FactoryLogic.createImbuement({
		type: ItemType.ImbuedWeapon,
		crafting: FactoryLogic.createProject({
			prerequisites: 'Справжнє імʼя диявола, що полює на інших дияволів',
			source: 'Тексти або знання мовою Калліак (Kalliak)',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 150
		}),
		level: 9,
		feature: FactoryLogic.feature.create({
			id: 'imbuement-vengeance-iii',
			name: 'Помста III',
			description: 'Щоразу, коли ви використовуєте цією зброєю здібність, що завдає шкоди, проти істоти, яка завдала вам шкоди з кінця вашого попереднього ходу, ця здібність завдає додаткові 6 шкоди. Ця перевага замінює Помсту II.'
		})
	});

	static windcutting: Imbuement = FactoryLogic.createImbuement({
		type: ItemType.ImbuedWeapon,
		crafting: FactoryLogic.createProject({
			prerequisites: 'Перо птаха, якого колись вважали вимерлим і який живе в оці вічно закрученого торнадо',
			source: 'Тексти або знання мовою Іллірик (Yllyric)',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 150
		}),
		level: 9,
		feature: FactoryLogic.feature.create({
			id: 'imbuement-windcutting',
			name: 'Вітроріз',
			description: 'Щоразу, коли ви використовуєте сигнатурну здібність ближнього бою, що зазвичай націлює одну істоту, ви можете використати цю здібність зі шкодою, щоб натомість націлити кожного ворога в кубі 3 у межах дистанції. Якщо ваша сигнатурна здібність зазвичай змушує ціль стати схопленою чи скутою, кожна ціль у зоні натомість стає сповільненою до кінця свого наступного ходу.'
		})
	});
};
