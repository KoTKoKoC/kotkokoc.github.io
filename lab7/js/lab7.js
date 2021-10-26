var mas1 = new Array()
var mas2 = new Array()
for (var i = 0; i < 2; i++) {
	mas1[i] = prompt("Введите координату дружественого ферзя от 1 до 8")
	mas2[i] = prompt("Введите координату вражеского ферзя от 1 до 8")
}

function CountingNumCheck(num) {
    if ( (! /[^1-8]/g.test(num)) && (typeof(num) == "string") && (num.indexOf('0')!=0) )
        return true
    else return false
}

var k = 0
for (var i = 0; i < 2; i++) {
	if ( !CountingNumCheck(mas1[i]) || !CountingNumCheck(mas2[i]))
		k = k+1
	else if (!Array.isArray(mas1) || !Array.isArray(mas2))
		k = k+1
	else if (mas1[0]==mas2[0] && mas1[1]==mas2[1])
		k = k+1
}

if (k == 0){
 if( ( (mas1[0]==mas2[0]) && (mas1[1]!=mas2[1]) )|| ((mas1[0]!=mas2[0])&&(mas1[1]==mas2[1])) 
 	|| (Math.abs(mas1[0]-mas2[0])==Math.abs(mas1[1]-mas2[1])) )
        console.log("YES")
 
    else
        console.log("NO")
} else console.log("Вы ввели неверные данные")
