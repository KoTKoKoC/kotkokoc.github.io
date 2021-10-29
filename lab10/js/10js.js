var a = prompt("Введите первое число: 'Результат смотреть в консоле'")
var b = prompt("Введите второе число: 'Результат смотреть в консоле'")
function NumCheck(num) {
    let l = 0
    let k = 1
    if (!!num.includes("-") && num[0]!="-") return false
    	else{
    if (!!num.includes('-')) { k = num.match(/\-/gi).length}
    if ( (! /[^0-9 \-]/g.test(num)) && (typeof(num) == "string")  && (num != '-')  
        && (! /^0^(\-)/g.test(num)) && (k<2) && (num.indexOf('0')!=0) )
        return true
    else 
		return false
}
}
if (!NumCheck(a) || !NumCheck(b)) console.log("Ошибка, Вы ввели некоректные данные, повторите попытку")
else{
function NOD (x, y) {
	x = Math.abs(x)
	y = Math.abs(y)
	if (y > x) return NOD(y, x)
	if (!y) return x
	return NOD(y, x % y)
}
console.log(NOD(a, b))
}

