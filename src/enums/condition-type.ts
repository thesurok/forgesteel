export enum ConditionType {
	Custom = 'Незвичайний стан',
	Quick = 'Швидкий стан',
	Bleeding = 'Кровотеча',
	Dazed = 'Приголомшений',
	Frightened = 'Зляканий',
	Grabbed = 'Схоплений',
	Prone = 'Розпластаний',
	Restrained = 'Cкутий',
	Slowed = 'Сповільнений',
	Taunted = 'Спровокований',
	Weakened = 'Ослаблений'
}

export enum ConditionEndType {
	EndOfTurn = 'Кінець ходу',
	SaveEnds = 'Рят. кидок закінчує',
	UntilRemoved = 'Поки не буде знято'
}
