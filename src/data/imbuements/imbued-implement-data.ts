import { AbilityKeyword } from '@/enums/ability-keyword';
import { Characteristic } from '@/enums/characteristic';
import { FactoryLogic } from '@/logic/factory-logic';
import { FeatureField } from '@/enums/feature-field';
import { Imbuement } from '@/models/imbuement';
import { ItemType } from '@/enums/item-type';

export class ImbuedImplementData {
	static berserking: Imbuement = FactoryLogic.createImbuement({
		type: ItemType.ImbuedImplement,
		crafting: FactoryLogic.createProject({
			prerequisites: 'Ікло здичавілого вепра',
			source: 'Тексти або знання мовою Калліак (Kalliak)',
			characteristic: [ Characteristic.Might, Characteristic.Reason, Characteristic.Intuition ],
			goal: 150
		}),
		level: 1,
		feature: FactoryLogic.feature.create({
			id: 'imbuement-berserking',
			name: 'Шаленство',
			description: 'Щоразу, коли ви завдаєте істоті шкоди магічною чи псіонічною здібністю й отримуєте результат 3 рівня, після розвʼязання ефектів здібності ця істота повинна, якщо можливо, здійснити атаку можливості проти свого найближчого союзника. Цей удар завдає додаткової шкоди, рівної найвищому з ваших показників Розуму, Інтуїції або Присутності.'
		})
	});

	static displacingI: Imbuement = FactoryLogic.createImbuement({
		type: ItemType.ImbuedImplement,
		crafting: FactoryLogic.createProject({
			prerequisites: 'Слиз із слизовика',
			source: 'Тексти або знання мовою Кхелт (Khelt)',
			characteristic: [ Characteristic.Might, Characteristic.Reason, Characteristic.Intuition ],
			goal: 150
		}),
		level: 1,
		feature: FactoryLogic.feature.create({
			id: 'imbuement-displacing-i',
			name: 'Телепортація I',
			description: 'Щоразу, коли ви завдаєте істоті шкоди магічною чи псіонічною здібністю й отримуєте результат 3 рівня, після розвʼязання ефектів здібності ви можете телепортувати цю істоту до 2 клітинок. Якщо істота починала на горизонтальній поверхні, вона повинна завершити переміщення на горизонтальній поверхні.'
		})
	});

	static elemental: Imbuement = FactoryLogic.createImbuement({
		type: ItemType.ImbuedImplement,
		crafting: FactoryLogic.createProject({
			prerequisites: 'Попіл або інші сліди природного лиха',
			source: 'Тексти або знання мовою Перша мова (The First Language)',
			characteristic: [ Characteristic.Might, Characteristic.Reason, Characteristic.Intuition ],
			goal: 150
		}),
		level: 1,
		feature: FactoryLogic.feature.create({
			id: 'imbuement-elemental',
			name: 'Стихійний',
			description: 'Щоразу, коли ви використовуєте здібність із ключовим словом «Повітря», «Земля», «Вогонь», «Зелень», «Гниль», «Пустота» або «Вода», ви можете налаштувати цей імплемент на цей елемент до кінця сутички. Поки імплемент налаштований, ви отримуєте перевагу на кидки сили здібностей із цим стихійним ключовим словом. Імплемент може бути налаштований лише на один елемент одночасно.'
		})
	});

	static forcefulI: Imbuement = FactoryLogic.createImbuement({
		type: ItemType.ImbuedImplement,
		crafting: FactoryLogic.createProject({
			prerequisites: 'Свинцева пращова куля, якою вбили велетня',
			source: 'Тексти або знання мовою Високий Курик (High Kuric)',
			characteristic: [ Characteristic.Might, Characteristic.Reason, Characteristic.Intuition ],
			goal: 150
		}),
		level: 1,
		feature: FactoryLogic.feature.create({
			id: 'imbuement-forceful-i',
			name: 'Силовий I',
			description: 'Щоразу, коли ви використовуєте магічну чи псіонічну здібність, щоб штовхнути або притягнути істоту, ви можете перемістити цю істоту ще на 2 клітинки.'
		})
	});

	static ratForm: Imbuement = FactoryLogic.createImbuement({
		type: ItemType.ImbuedImplement,
		crafting: FactoryLogic.createProject({
			prerequisites: 'Сто щурячих шкурок',
			source: 'Тексти або знання мовою Кхаміш (Khamish)',
			characteristic: [ Characteristic.Might, Characteristic.Reason, Characteristic.Intuition ],
			goal: 150
		}),
		level: 1,
		feature: FactoryLogic.feature.createAbility({
			ability: FactoryLogic.createAbility({
				id: 'imbuement-rat-form',
				name: 'Форма щура',
				type: FactoryLogic.type.createManeuver(),
				sections: [
					FactoryLogic.createAbilitySectionText('Ви перетворюєтеся на щура. Ваше спорядження перетворюється разом із вами. У формі щура ви маєте швидкість 5, можете автоматично лазити на повній швидкості під час руху, ваш розмір становить 1T, і ви можете бачити в темряві. Ви можете говорити й зберігаєте свої навички у формі щура, але ваша Сила дорівнює -5, і ви втрачаєте всі свої звичайні здібності, особливості та переваги. Ви можете повернутися до своєї природної форми як маневр і робите це автоматично, якщо отримуєте будь-яку шкоду.')
				]
			})
		})
	});

	static rejuvenatingI: Imbuement = FactoryLogic.createImbuement({
		type: ItemType.ImbuedImplement,
		crafting: FactoryLogic.createProject({
			prerequisites: 'Співочий кварцовий кристал',
			source: 'Тексти або знання мовою Перша мова (The First Language)',
			characteristic: [ Characteristic.Might, Characteristic.Reason, Characteristic.Intuition ],
			goal: 150
		}),
		level: 1,
		feature: FactoryLogic.feature.create({
			id: 'imbuement-rejuvenating-i',
			name: 'Омолодження I',
			description: 'Щоразу, коли ви використовуєте здібність, що коштує 1 або більше вашого героїчного ресурсу, киньте d10. За результату 9 або більше ви отримуєте 1 героїчний ресурс.'
		})
	});

	static seeking: Imbuement = FactoryLogic.createImbuement({
		type: ItemType.ImbuedImplement,
		crafting: FactoryLogic.createProject({
			prerequisites: 'Голка завдовжки в дюйм, вирізьблена з діаманта',
			source: 'Тексти або знання мовою Келіан (Caelian)',
			characteristic: [ Characteristic.Might, Characteristic.Reason, Characteristic.Intuition ],
			goal: 150
		}),
		level: 1,
		feature: FactoryLogic.feature.createMultiple({
			id: 'imbuement-seeking',
			name: 'Навідний',
			description: 'Ваші далекобійні магічні або псіонічні здібності отримують бонус +2 до дистанції.',
			features: [
				FactoryLogic.feature.createAbilityDistance({
					id: 'imbuement-seeking-magic',
					name: 'Навідний (Магія)',
					description: 'Ваші далекобійні магічні здібності отримують бонус +2 до дистанції.',
					keywords: [ AbilityKeyword.Ranged, AbilityKeyword.Magic ],
					value: 2
				}),
				FactoryLogic.feature.createAbilityDistance({
					id: 'imbuement-seeking-psionic',
					name: 'Навідний (Псіоніка)',
					description: 'Ваші далекобійні псіонічні здібності отримують бонус +2 до дистанції.',
					keywords: [ AbilityKeyword.Ranged, AbilityKeyword.Psionic ],
					value: 2
				}),
				FactoryLogic.feature.create({
					id: 'imbuement-seeking-text',
					name: 'Навідний',
					description: 'Якщо ви подумки назвете конкретну істоту, місце або предмет, імплемент указує в бік цієї цілі, якщо ви перебуваєте на тому ж світі.'
				})
			]
		})
	});

	static thoughtSending: Imbuement = FactoryLogic.createImbuement({
		type: ItemType.ImbuedImplement,
		crafting: FactoryLogic.createProject({
			prerequisites: 'Мозок псіонічної істоти',
			source: 'Тексти або знання мовою Варіак (Variac)',
			characteristic: [ Characteristic.Might, Characteristic.Reason, Characteristic.Intuition ],
			goal: 150
		}),
		level: 1,
		feature: FactoryLogic.feature.createMultiple({
			id: 'imbuement-thought-sending',
			name: 'Надсилання думок',
			description: 'Ваші далекобійні магічні та псіонічні здібності отримують бонус +2 до дистанції.',
			features: [
				FactoryLogic.feature.createAbilityDistance({
					id: 'imbuement-thought-sending-magic',
					name: 'Надсилання думок (Магія)',
					description: 'Ваші далекобійні магічні здібності отримують бонус +2 до дистанції.',
					keywords: [ AbilityKeyword.Ranged, AbilityKeyword.Magic ],
					value: 2
				}),
				FactoryLogic.feature.createAbilityDistance({
					id: 'imbuement-thought-sending-psionic',
					name: 'Надсилання думок (Псіоніка)',
					description: 'Ваші далекобійні псіонічні здібності отримують бонус +2 до дистанції.',
					keywords: [ AbilityKeyword.Ranged, AbilityKeyword.Psionic ],
					value: 2
				}),
				FactoryLogic.feature.create({
					id: 'imbuement-thought-sending-text',
					name: 'Надсилання думок',
					description: 'Ви можете телепатично спілкуватися з будь-якою істотою, що бажає цього, знає мову і чиє імʼя вам відоме, якщо вона перебуває на тому ж світі, що й ви. Розмову повинні почати ви, але щойно ви це зробите, істота може відповідати, доки ви не завершите розмову.'
				})
			]
		})
	});

	static wardingI: Imbuement = FactoryLogic.createImbuement({
		type: ItemType.ImbuedImplement,
		crafting: FactoryLogic.createProject({
			prerequisites: 'Три черепи однієї химери',
			source: 'Тексти або знання мовою Варіак (Variac)',
			characteristic: [ Characteristic.Might, Characteristic.Reason, Characteristic.Intuition ],
			goal: 150
		}),
		level: 1,
		feature: FactoryLogic.feature.createBonus({
			id: 'imbuement-warding-i',
			name: 'Оберіг I',
			field: FeatureField.Stamina,
			value: 6
		})
	});

	static celerity: Imbuement = FactoryLogic.createImbuement({
		type: ItemType.ImbuedImplement,
		crafting: FactoryLogic.createProject({
			prerequisites: 'Дзьоб лютого сокола',
			source: 'Тексти або знання мовою Кхелт (Khelt)',
			characteristic: [ Characteristic.Might, Characteristic.Reason, Characteristic.Intuition ],
			goal: 150
		}),
		level: 5,
		feature: FactoryLogic.feature.create({
			id: 'imbuement-celerity',
			name: 'Стрімкість',
			description: 'Одразу після використання магічної чи псіонічної здібності, що вимагає основної дії, ви можете зміститися до 3 клітинок або використати маневр «Вирватися з захоплення» як безкоштовний маневр.'
		})
	});

	static celestine: Imbuement = FactoryLogic.createImbuement({
		type: ItemType.ImbuedImplement,
		crafting: FactoryLogic.createProject({
			prerequisites: 'Ще теплий уламок метеорита',
			source: 'Тексти або знання мовою Уллорвік (Ullorvic)',
			characteristic: [ Characteristic.Might, Characteristic.Reason, Characteristic.Intuition ],
			goal: 150
		}),
		level: 5,
		feature: FactoryLogic.feature.createAbility({
			ability: FactoryLogic.createAbility({
				id: 'imbuement-celestine',
				name: 'Целестина',
				type: FactoryLogic.type.createMain(),
				sections: [
					FactoryLogic.createAbilitySectionText('Ви створюєте до трьох зірок, які зависають у незайнятих клітинках на ваш вибір у межах 5 клітинок від вас. Зірки залишаються на місці й зникають, якщо ви створюєте нові. Коли ворог входить у клітинку будь-якої зірки, зірка детонує й знищується, а ворог отримує 10 вогняної шкоди. Якщо у вас є лінія ефекту до ворога, ви також можете зсунути його на 1 клітинку. Інакше ворог зсувається на 1 клітинку у випадковому напрямку.')
				]
			})
		})
	});

	static displacingII: Imbuement = FactoryLogic.createImbuement({
		type: ItemType.ImbuedImplement,
		crafting: FactoryLogic.createProject({
			prerequisites: 'Крило піксі',
			source: 'Тексти або знання мовою Волл (Voll)',
			characteristic: [ Characteristic.Might, Characteristic.Reason, Characteristic.Intuition ],
			goal: 150
		}),
		level: 5,
		feature: FactoryLogic.feature.create({
			id: 'imbuement-displacing-ii',
			name: 'Телепортація II',
			description: 'Коли ви використовуєте посилення імплементу «Телепортація I», ви можете телепортувати істоту до 4 клітинок. Додатково ця істота отримує перешкоду на свій наступний кидок сили, зроблений до кінця її наступного ходу.'
		})
	});

	static eruptingI: Imbuement = FactoryLogic.createImbuement({
		type: ItemType.ImbuedImplement,
		crafting: FactoryLogic.createProject({
			prerequisites: 'Обсидіан із діючого вулкана',
			source: 'Тексти або знання мовою Вастаріакс (Vastariax)',
			characteristic: [ Characteristic.Might, Characteristic.Reason, Characteristic.Intuition ],
			goal: 150
		}),
		level: 5,
		feature: FactoryLogic.feature.create({
			id: 'imbuement-erupting-i',
			name: 'Виверження I',
			description: 'Щоразу, коли ви завдаєте істоті шкоди магічною чи псіонічною здібністю, яка націлюється лише на одну істоту, й отримуєте результат 3 рівня, після розвʼязання ефектів здібності кожен ворог у межах 2 клітинок від цієї істоти отримує 3 вогняної шкоди.'
		})
	});

	static forcefulII: Imbuement = FactoryLogic.createImbuement({
		type: ItemType.ImbuedImplement,
		crafting: FactoryLogic.createProject({
			prerequisites: 'Ніготь мармурового камʼяного велетня',
			source: 'Тексти або знання мовою Високий Курик (High Kuric)',
			characteristic: [ Characteristic.Might, Characteristic.Reason, Characteristic.Intuition ],
			goal: 150
		}),
		level: 5,
		feature: FactoryLogic.feature.create({
			id: 'imbuement-forceful-ii',
			name: 'Силовий II',
			description: 'Щоразу, коли ви використовуєте магічну чи псіонічну здібність, щоб штовхнути або притягнути істоту, ви можете перемістити цю істоту ще на 3 клітинки. Ця перевага замінює Силовий I.'
		})
	});

	static hallucinatory: Imbuement = FactoryLogic.createImbuement({
		type: ItemType.ImbuedImplement,
		crafting: FactoryLogic.createProject({
			prerequisites: 'Шпилька для волосся нічної карги',
			source: 'Тексти або знання мовою Варіак (Variac)',
			characteristic: [ Characteristic.Might, Characteristic.Reason, Characteristic.Intuition ],
			goal: 150
		}),
		level: 5,
		feature: FactoryLogic.feature.createAbility({
			ability: FactoryLogic.createAbility({
				id: 'imbuement-hallucinatory',
				name: 'Галюцинаторний',
				type: FactoryLogic.type.createManeuver(),
				sections: [
					FactoryLogic.createAbilitySectionText('Ви створюєте зону сенсорної нестабільності у 2 аурі з центром на собі. До кінця сутички ця зона є складною місцевістю для ваших ворогів.')
				]
			})
		})
	});

	static lingeringI: Imbuement = FactoryLogic.createImbuement({
		type: ItemType.ImbuedImplement,
		crafting: FactoryLogic.createProject({
			prerequisites: 'Повільнодійна отрута, очищена з рідкісних грибів',
			source: 'Тексти або знання мовою Сзетч (Szetch)',
			characteristic: [ Characteristic.Might, Characteristic.Reason, Characteristic.Intuition ],
			goal: 150
		}),
		level: 5,
		feature: FactoryLogic.feature.create({
			id: 'imbuement-lingering-i',
			name: 'Затяжний I',
			description: 'Щоразу, коли ви завдаєте істоті шкоди магічною чи псіонічною здібністю й отримуєте результат 3 рівня, ця істота отримує 8 шкоди на початку вашого наступного ходу.'
		})
	});

	static rejuvenatingII: Imbuement = FactoryLogic.createImbuement({
		type: ItemType.ImbuedImplement,
		crafting: FactoryLogic.createProject({
			prerequisites: 'Дерево бонсай, яке досі росте і має щонайменше 30 років',
			source: 'Тексти або знання мовою Перша мова (The First Language)',
			characteristic: [ Characteristic.Might, Characteristic.Reason, Characteristic.Intuition ],
			goal: 150
		}),
		level: 5,
		feature: FactoryLogic.feature.create({
			id: 'imbuement-rejuvenating-ii',
			name: 'Омолодження II',
			description: 'Щоразу, коли ви використовуєте здібність, що коштує 1 або більше вашого героїчного ресурсу, киньте d10. За результату 8 або більше ви отримуєте 1 героїчний ресурс і можете витратити Відновлення. Ця перевага замінює Омолодження I.'
		})
	});

	static wardingII: Imbuement = FactoryLogic.createImbuement({
		type: ItemType.ImbuedImplement,
		crafting: FactoryLogic.createProject({
			prerequisites: 'Ріг металевого дракона',
			source: 'Тексти або знання мовою Заліак (Zaliac)',
			characteristic: [ Characteristic.Might, Characteristic.Reason, Characteristic.Intuition ],
			goal: 150
		}),
		level: 5,
		feature: FactoryLogic.feature.createMultiple({
			id: 'imbuement-warding-ii',
			name: 'Оберіг II',
			features: [
				FactoryLogic.feature.createBonus({
					id: 'warding-ii-a',
					field: FeatureField.Stamina,
					value: 6
				}),
				FactoryLogic.feature.create({
					id: 'warding-ii-b',
					name: 'Оберіг II',
					description: 'Ваші значення характеристик вважаються на 1 вищими для опору потужностям.'
				})
			]
		})
	});

	static anathema: Imbuement = FactoryLogic.createImbuement({
		type: ItemType.ImbuedImplement,
		crafting: FactoryLogic.createProject({
			prerequisites: 'Щупальце олотека',
			source: 'Тексти або знання мовою Варіак (Variac)',
			characteristic: [ Characteristic.Might, Characteristic.Reason, Characteristic.Intuition ],
			goal: 150
		}),
		level: 9,
		feature: FactoryLogic.feature.create({
			id: 'imbuement-anathema',
			name: 'Анафема',
			description: 'Щоразу, коли ви завдаєте істоті шкоди магічною чи псіонічною здібністю й отримуєте результат 3 рівня, ця істота також стає ослабленою (рят. кидок закінчує). Якщо ця істота перебуває в межах 10 клітинок, коли цей ефект ослаблення закінчується, ви можете використати безкоштовну тригерну дію, щоб виконати проти неї безкоштовний удар.'
		})
	});

	static displacingIII: Imbuement = FactoryLogic.createImbuement({
		type: ItemType.ImbuedImplement,
		crafting: FactoryLogic.createProject({
			prerequisites: 'Замковий камінь брами, якою переходили між світами',
			source: 'Тексти або знання мовою Волл (Voll)',
			characteristic: [ Characteristic.Might, Characteristic.Reason, Characteristic.Intuition ],
			goal: 150
		}),
		level: 9,
		feature: FactoryLogic.feature.create({
			id: 'imbuement-displacing-iii',
			name: 'Телепортація III',
			description: 'Коли ви використовуєте посилення імплементу «Телепортація I», ви можете телепортувати істоту до 5 клітинок. Додатково ця істота отримує перешкоду на свій наступний кидок сили, зроблений до кінця її наступного ходу. Ця перевага замінює Телепортацію II.'
		})
	});

	static eruptingII: Imbuement = FactoryLogic.createImbuement({
		type: ItemType.ImbuedImplement,
		crafting: FactoryLogic.createProject({
			prerequisites: 'Запечатана жеода з вибухонебезпечним газом усередині',
			source: 'Тексти або знання мовою Вастаріакс (Vastariax)',
			characteristic: [ Characteristic.Might, Characteristic.Reason, Characteristic.Intuition ],
			goal: 150
		}),
		level: 9,
		feature: FactoryLogic.feature.create({
			id: 'imbuement-erupting-ii',
			name: 'Виверження II',
			description: 'Вогняна шкода, яку завдає посилення імплементу «Виверження I», зростає до 6.'
		})
	});

	static forcefulIII: Imbuement = FactoryLogic.createImbuement({
		type: ItemType.ImbuedImplement,
		crafting: FactoryLogic.createProject({
			prerequisites: 'Луска кракена',
			source: 'Тексти або знання мовою Високий Курик (High Kuric)',
			characteristic: [ Characteristic.Might, Characteristic.Reason, Characteristic.Intuition ],
			goal: 150
		}),
		level: 9,
		feature: FactoryLogic.feature.create({
			id: 'imbuement-forceful-iii',
			name: 'Силовий III',
			description: 'Щоразу, коли ви використовуєте магічну чи псіонічну здібність, щоб штовхнути або притягнути істоту, ви можете перемістити цю істоту ще на 3 клітинки, і це переміщення може бути вертикальним. Ця перевага замінює Силовий II.'
		})
	});

	static lingeringII: Imbuement = FactoryLogic.createImbuement({
		type: ItemType.ImbuedImplement,
		crafting: FactoryLogic.createProject({
			prerequisites: 'Отруйна залоза дорослого дракона',
			source: 'Тексти або знання мовою Сзетч (Szetch)',
			characteristic: [ Characteristic.Might, Characteristic.Reason, Characteristic.Intuition ],
			goal: 150
		}),
		level: 9,
		feature: FactoryLogic.feature.create({
			id: 'imbuement-lingering-ii',
			name: 'Затяжний II',
			description: 'Щоразу, коли ви завдаєте істоті шкоди магічною чи псіонічною здібністю й отримуєте результат 3 рівня, ця істота отримує 15 шкоди на початку вашого наступного ходу. Ця перевага замінює Затяжний I.'
		})
	});

	static piercing: Imbuement = FactoryLogic.createImbuement({
		type: ItemType.ImbuedImplement,
		crafting: FactoryLogic.createProject({
			prerequisites: 'Чорне залізо, здобуте зі вбитого елементаля крові',
			source: 'Тексти або знання мовою Анжалі (Anjali)',
			characteristic: [ Characteristic.Might, Characteristic.Reason, Characteristic.Intuition ],
			goal: 150
		}),
		level: 9,
		feature: FactoryLogic.feature.create({
			id: 'imbuement-piercing',
			name: 'Пробивний',
			description: 'Ваші магічні та псіонічні здібності ігнорують імунітети до шкоди.'
		})
	});

	static psionicSiphon: Imbuement = FactoryLogic.createImbuement({
		type: ItemType.ImbuedImplement,
		crafting: FactoryLogic.createProject({
			prerequisites: 'Лобова частка надрозуму',
			source: 'Тексти або знання мовою Варіак (Variac)',
			characteristic: [ Characteristic.Might, Characteristic.Reason, Characteristic.Intuition ],
			goal: 150
		}),
		level: 9,
		feature: FactoryLogic.feature.create({
			id: 'imbuement-psionic-siphon',
			name: 'Псіонічний сифон',
			description: 'Раз за хід, коли ви завдаєте шкоди одній або кільком істотам магічною чи псіонічною здібністю й отримуєте результат 3 рівня, ви отримуєте Витривалість, рівну вашому найвищому показнику характеристики, а одна істота, якій ви завдали шкоди, додатково отримує 5 шкоди.'
		})
	});

	static rejuvenatingIII: Imbuement = FactoryLogic.createImbuement({
		type: ItemType.ImbuedImplement,
		crafting: FactoryLogic.createProject({
			prerequisites: 'Жива квітка, що розквітає лише раз на десятиліття',
			source: 'Тексти або знання мовою Перша мова (The First Language)',
			characteristic: [ Characteristic.Might, Characteristic.Reason, Characteristic.Intuition ],
			goal: 150
		}),
		level: 9,
		feature: FactoryLogic.feature.create({
			id: 'imbuement-rejuvenating-iii',
			name: 'Омолодження III',
			description: 'Щоразу, коли ви використовуєте здібність, що коштує 1 або більше вашого героїчного ресурсу, киньте d10. За результату 7 або більше ви отримуєте 1 героїчний ресурс, а ви або обрана вами істота в межах 3 клітинок можете витратити Відновлення. Ця перевага замінює Омолодження II.'
		})
	});

	static wardingIII: Imbuement = FactoryLogic.createImbuement({
		type: ItemType.ImbuedImplement,
		crafting: FactoryLogic.createProject({
			prerequisites: 'Серцевина дерева віком у два століття',
			source: 'Тексти або знання мовою Заліак (Zaliac)',
			characteristic: [ Characteristic.Might, Characteristic.Reason, Characteristic.Intuition ],
			goal: 150
		}),
		level: 9,
		feature: FactoryLogic.feature.createMultiple({
			id: 'imbuement-warding-iii',
			name: 'Оберіг III',
			features: [
				FactoryLogic.feature.createBonus({
					id: 'warding-iii-a',
					field: FeatureField.Stamina,
					value: 6
				}),
				FactoryLogic.feature.create({
					id: 'warding-iii-b',
					name: 'Оберіг III',
					description: 'Ви та кожен союзник у межах 3 клітинок від вас вважаєте свої значення характеристик на 1 вищими для опору потужностям. Ця перевага замінює Оберіг II.'
				})
			]
		})
	});
};
