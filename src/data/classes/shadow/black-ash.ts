import { AbilityDistanceType } from '@/enums/ability-distance-type';
import { AbilityKeyword } from '@/enums/ability-keyword';
import { Characteristic } from '@/enums/characteristic';
import { FactoryLogic } from '@/logic/factory-logic';
import { SubClass } from '@/models/subclass';

export const blackAsh: SubClass = {
	id: 'shadow-sub-1',
	name: 'Коледж Чорного Попілу',
	description: 'Коледж Чорного Попілу заснував мистецтво бути тінню. Його випускники використовують чаклунство Чорного Попілу, щоб телепортуватися полем бою в клубах сажі та маніпулювати й створювати темряву. Випускники коледжу не мають собі рівних у мобільності.',
	featuresByLevel: [
		{
			level: 1,
			features: [
				FactoryLogic.feature.createSkillChoice({
					id: 'shadow-sub-1-1-1',
					selected: ['Магія']
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'shadow-sub-1-1-2',
						name: 'Телепорт Чорного Попілу',
						description: 'У вирі чорного попілу ви переступаєте з одного місця на інше.',
						type: FactoryLogic.type.createManeuver(),
						keywords: [AbilityKeyword.Magic],
						distance: [FactoryLogic.distance.createSelf()],
						target: 'Себе',
						sections: [
							FactoryLogic.createAbilitySectionText('Ви телепортуєтеся на відстань до 5 клітин. Якщо на місці приземлення ви маєте затемнення або укриття, ви можете використати маневр Сховатися навіть якщо вас бачать. Якщо ви успішно сховаєтеся, використавши цей маневр, ви отримуєте 1 сплеск.'),
							FactoryLogic.createAbilitySectionSpend({
								repeatable: true,
								effect: 'Ви телепортуєтеся на 1 додаткову клітину за кожну витрачену Прозорливість.'
							})
						]
					})
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'shadow-sub-1-1-3',
						name: 'У всій цій метушні',
						description: 'Ви зникаєте у стовпі чорного диму, щоб уникнути небезпеки.',
						type: FactoryLogic.type.createTrigger('Ви отримуєте шкоду.'),
						keywords: [AbilityKeyword.Magic],
						distance: [FactoryLogic.distance.createSelf()],
						target: 'Себе',
						sections: [
							FactoryLogic.createAbilitySectionText('Ви зменшуєте шкоду наполовину, а потім можете телепортуватися на відстань до 4 клітин після розвʼязання викликаного ефекту.'),
							FactoryLogic.createAbilitySectionSpend({
								repeatable: true,
								effect: 'Ви телепортуєтеся на 1 додаткову клітину за кожну витрачену Прозорливість.'
							})
						]
					})
				})
			]
		},
		{
			level: 2,
			features: [
				FactoryLogic.feature.createChoice({
					id: 'shadow-sub-1-2-1',
					name: 'Здібність коледжу 2-го рівня',
					options: [
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'shadow-sub-1-2-1a',
									name: 'У клубку попелу',
									description: 'Ви зачаровуєте удар своєю телепортаційною магією.',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Magic, AbilityKeyword.Melee, AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon],
									distance: [
										FactoryLogic.distance.createMelee(),
										FactoryLogic.distance.createRanged(5)
									],
									target: 'Одна істота',
									cost: 5,
									sections: [
										FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
											characteristic: [Characteristic.Agility],
											tier1: '6 + Л шкоди; ви можете телепортувати ціль на 1 клітину',
											tier2: '10 + Л шкоди; ви можете телепортувати ціль на відстань до 3 клітин',
											tier3: '14 + Л шкоди; ви можете телепортувати ціль на відстань до 5 клітин'
										}))
									]
								})
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'shadow-sub-1-2-1b',
									name: 'Занадто повільно',
									description: 'Ваш супротивник припустився великої помилки.',
									type: FactoryLogic.type.createTrigger('Ви використовуєте вашу здібність «У всій цій метушні».', { free: true }),
									keywords: [AbilityKeyword.Melee, AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon],
									distance: [FactoryLogic.distance.createSelf()],
									target: 'Себе',
									cost: 5,
									sections: [
										FactoryLogic.createAbilitySectionText('Ви ігноруєте будь-які ефекти, повʼязані зі шкодою, що спричинила вашу здібність «У всій цій метушні». Перед телепортацією ви можете виконати безкоштовний удар по істоті, яка завдала вам шкоду, щоб викликати «У всій цій метушні». Після телепортації ви можете витратити відновлення.')
									]
								})
							}),
							value: 1
						}
					]
				}),
				FactoryLogic.feature.create({
					id: 'shadow-sub-1-2-2',
					name: 'Палаючий Попіл',
					description: 'Попіл, що ви лишаєте по собі, обпалює ворогів. Першого разу за хід, коли ви використовуєте тіньову здібність, щоб телепортуватися від або в простір, прилеглий до ворога, той ворог отримує вогняне ушкодження, рівне вашому показнику Ловкості.'
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
					id: 'shadow-sub-1-5-1',
					name: 'Сліди іскор',
					description: `
Коли ви зменшуєте витривалість немініонної істоти до 0, ви можете негайно використати безкоштовний маневр, щоб застосувати вашу здібність Телепорт Чорного Попілу.

Крім того, тепер ви можете брати з собою суміжну готову істоту щоразу, коли використовуєте тіньову здібність для телепортації. Істота зʼявляється в незайнятому просторі, прилеглому до клітини, у яку ви телепортувалися. Якщо такого простору немає, вона не може телепортуватися разом з вами.`
				})
			]
		},
		{
			level: 6,
			features: [
				FactoryLogic.feature.createChoice({
					id: 'shadow-sub-1-6-1',
					name: 'Здібність коледжу 6-го рівня',
					options: [
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'shadow-sub-1-6-1a',
									name: 'Виверження Чорного Попілу',
									description: 'Ваш удар створює хмару чорного попілу, що підкидає ворога в повітря.',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Magic, AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
									distance: [FactoryLogic.distance.createMelee()],
									target: 'Одна істота',
									cost: 9,
									sections: [
										FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
											characteristic: [Characteristic.Agility],
											tier1: '3 + Л шкоди; вертикальне підкидання на 5 клітин',
											tier2: '6 + Л шкоди; вертикальне підкидання на 10 клітин',
											tier3: '9 + Л шкоди; вертикальне підкидання на 15 клітин'
										})),
										FactoryLogic.createAbilitySectionText('Істота, примусово переміщена цією здібністю, має бути переміщена строго вгору.')

									]
								})
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'shadow-sub-1-6-1b',
									name: 'Попелевий Шторм',
									description: 'Ви телепортуєте своїх союзників у сплеску попелу й вогню.',
									type: FactoryLogic.type.createManeuver(),
									keywords: [AbilityKeyword.Magic],
									distance: [FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 4 })],
									target: 'На себе і кожного союзника в зоні впливу',
									cost: 9,
									sections: [
										FactoryLogic.createAbilitySectionText('Кожна ціль може телепортуватися на відстань до 5 клітин. За кожну ціль, окрім вас, яка телепортується від або в простір, прилеглий до ворога, той ворог отримує вогняне ушкодження, рівне вашому показнику Ловкості. Крім того, ціль, яка завершить цей рух у затемненні або укритті, може використати маневр Сховатися, навіть якщо її помітили.')
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
					id: 'shadow-sub-1-8-1',
					name: 'Крок Попелу',
					description: 'Коли ви добровільно рухаєтеся, ви можете телепортуватися. Телепортація таким чином рахується як використання тіньової здібності для цілей ваших здібностей Палаючий Попіл і Сліди іскор.'
				})
			]
		},
		{
			level: 9,
			features: [
				FactoryLogic.feature.createChoice({
					id: 'shadow-sub-1-9-1',
					name: 'Здібність коледжу 9-го рівня',
					options: [
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'shadow-sub-1-9-1a',
									name: 'Какофонія Попелу',
									description: 'Ви мчитеся полем бою, пронзаючи ворогів і телепортуючи союзників.',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Magic, AbilityKeyword.Melee, AbilityKeyword.Weapon],
									distance: [FactoryLogic.distance.createSelf()],
									target: 'Себе',
									cost: 11,
									sections: [
										FactoryLogic.createAbilitySectionText('Ви зміщуєтеся до двох разів вашої швидкості, виконуючи один кидок сили, що спрямований на кожну істоту, до якої ви підходите під час зміщення.'),
										FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
											characteristic: [Characteristic.Agility],
											tier1: 'Ворог отримує 6 шкоди; союзник може телепортуватися на відстань до 3 клітин.',
											tier2: 'Ворог отримує 10 шкоди; союзник може телепортуватися на відстань до 5 клітин.',
											tier3: 'Ворог отримує 14 шкоди; союзник може телепортуватися на відстань до 7 клітин.'
										}))
									]
								})
							}),
							value: 1
						},
						{
							feature: FactoryLogic.feature.createAbility({
								ability: FactoryLogic.createAbility({
									id: 'shadow-sub-1-9-1b',
									name: 'Двері Демона',
									description: 'Ви створюєте тимчасовий портал, через який може простягнутися величезна демонічна рука.',
									type: FactoryLogic.type.createMain(),
									keywords: [AbilityKeyword.Magic, AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
									distance: [FactoryLogic.distance.createMelee(3)],
									target: 'Одна істота',
									cost: 11,
									sections: [
										FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
											characteristic: [Characteristic.Agility],
											tier1: '13 + Л корупційної шкоди; поштовх на 3 клітини',
											tier2: '18 + Л корупційної шкоди; поштовх на 5 клітин',
											tier3: '25 + Л корупційної шкоди; поштовх на 7 клітин'
										})),
										FactoryLogic.createAbilitySectionText('При критичному влучанні демон хапає ціль і затягує її через портал перед тим, як він закриється — цю істоту більше ніколи не побачать.')
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
