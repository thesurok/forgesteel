import { FactoryLogic } from '@/logic/factory-logic';
import { Item } from '@/models/item';
import { ItemType } from '@/enums/item-type';

export class ImbuedItemData {
	static imbuedArmor: Item = FactoryLogic.createItem({
		id: 'imbued-armor',
		name: 'Наділений обладунок',
		description: 'Обладунок, наділений покращенням, надає вам особливі переваги, поки ви його носите.',
		type: ItemType.ImbuedArmor
	});

	static imbuedImplement: Item = FactoryLogic.createItem({
		id: 'imbued-implement',
		name: 'Наділений імплемент',
		description: `
Імплементи - це прикраси, окуляри, сфери, посохи, томи, жезли, зброя та інші предмети, які використовують ті, хто спрямовує магічну й псіонічну силу, щоб її зосередити. Коли ви створюєте скарб-імплемент, ви самі вирішуєте, який предмет наділити, але це має бути предмет, який можна носити або тримати при собі. На початку цього проєкту ви повинні мати немагічну версію предмета, який плануєте наділити. 

Імплемент, наділений покращенням, надає вам особливі переваги, поки ви ним орудуєте.`,
		type: ItemType.ImbuedImplement
	});

	static imbuedWeapon: Item = FactoryLogic.createItem({
		id: 'imbued-weapon',
		name: 'Наділена зброя',
		description: 'Зброя, наділена покращенням, надає вам особливі переваги, поки ви нею орудуєте.',
		type: ItemType.ImbuedWeapon
	});
}
