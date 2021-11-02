function countFridays(year) {
	let result = 0;
	for (let month = 1; month <= 12; month++) {
		let date = new Date(year, month, 13);
		result += date.getDay() == 5 ? 1 : 0;
	if (!Number.isInteger(Number(year))) {
		alert("Ошибка: год должен быть целым и числом!");
		return '';
	}
	}
	return result;
}



