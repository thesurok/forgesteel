import { FeatureType } from '@/enums/feature-type';
import { Perk } from '@/models/perk';
import { PerkList } from '@/enums/perk-list';

export class CraftingPerkData {
	static areaOfExpertise: Perk = {
		id: 'perk-area-of-expertise',
		name: 'Галузь майстерності',
		description: 'Оберіть одну навичку з групи навичок ремесла, яку ви вже маєте. Кожного разу, коли ви отримуєте результат 1 рівня на легкому або середньому тесті з цією навичкою, вважайте його результатом 2 рівня. Додатково, якщо ви витратите 1 хвилину на огляд предмета, повʼязаного з обраною навичкою, то зможете оцінити його вартість і виявити будь-які вади конструкції.',
		type: FeatureType.Text,
		data: null,
		list: PerkList.Crafting
	};

	static expertArtisan: Perk = {
		id: 'perk-expert-artisan',
		name: 'Майстерний ремісник',
		description: 'Кожного разу, коли ви робите тест як частину ремісничого або дослідницького проєкту, що використовує навичку з групи ремесла, яку ви вже маєте, ви можете зробити кидок сили двічі й використати будь-який із результатів.',
		type: FeatureType.Text,
		data: null,
		list: PerkList.Crafting
	};

	static handy: Perk = {
		id: 'perk-handy',
		name: 'Умілі руки',
		description: 'Кожного разу, коли ви робите тест, щоб щось створити, і не маєте навички, що підходить до цього тесту, ви отримуєте +1 бонус до кидка сили.',
		type: FeatureType.Text,
		data: null,
		list: PerkList.Crafting
	};

	static improvisationCreation: Perk = {
		id: 'perk-improvisation-creation',
		name: 'Імпровізоване творіння',
		description: 'Без жодного тесту і навіть без інструментів ви можете швидко змайструвати або полагодити звичайний предмет чи одиницю спорядження, повʼязані з навичкою з групи ремесла, яку ви маєте. Такий предмет існує 1 годину або витримує одне використання чи активацію, залежно від того, що настане раніше за рішенням Директора, а потім ламається безповоротно. Наприклад, якщо ви маєте навичку Carpentry, то можете полагодити хисткий деревʼяний міст настільки, щоб ним перейшла група істот, або зробити просту деревʼяну лопату, якою можна користуватися 1 годину.',
		type: FeatureType.Text,
		data: null,
		list: PerkList.Crafting
	};

	static inspiredArtisan: Perk = {
		id: 'perk-inspired-artisan',
		name: 'Натхненний ремісник',
		description: 'Коли ви робите кидок проєкту, використовуючи навичку з групи ремесла, ви можете витратити жетон героя, щоб у межах тієї самої дії перепочинку зробити ще один кидок проєкту для того самого проєкту. Ви не можете використати цю перевагу більше одного разу за перепочинок.',
		type: FeatureType.Text,
		data: null,
		list: PerkList.Crafting
	};

	static travellingArtisan: Perk = {
		id: 'perk-travelling-artisan',
		name: 'Мандрівний ремісник',
		description: 'У будь-який день, коли ви не берете перепочинок, ви можете витратити 1 безперервну годину на роботу над ремісничим проєктом, використовуючи навичку з групи ремесла, яку маєте. Якщо зробите це, ви отримаєте 1d10 очок проєкту для цього проєкту.',
		type: FeatureType.Text,
		data: null,
		list: PerkList.Crafting
	};
}
