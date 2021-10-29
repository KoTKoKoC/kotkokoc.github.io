function enter() {
    const value1 = prompt("Введите строку 'Результат смотреть в консоле'");
    return value1;
	if (typeof value1 !== "string") {
        throw new Error("Должена быть строка!");
        }
    }
      const reg = /^-?([0-9]+\,[0-9]+)$/g;
      const value1 = enter();
            console.log("Является ли данная строка допустимым числовым символом с плавающей запятой: ");
        if (value1.match(reg)) {
        console.log("Строка является допустимым числовым символом с плавающей запятой");
        } else { console.log("Строка не является допустимым числовым символом с плавающей запятой"); }