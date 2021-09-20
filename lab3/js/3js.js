function calculate() {
    var e = document.getElementById("user_select"),
        user_operator = e.options[e.selectedIndex].value,
        val1 = +document.getElementById("value1").value,
        val2 = +document.getElementById("value2").value,
        result = document.getElementById("answer");
        
    if(typeof val1 != 'number' || typeof val2 != 'number'){
       alert('Ошибка, введи целое число, а не строку')
    return false
    } 
     if(val1%1 != 0 || val2%1 != 0){
        alert('Ошибка, введи целое число, а не строку')
    return false
    }

   
   
    switch (user_operator) {
        case '+':
            result.value = val1 + val2;
            break;
        case '*':
            result.value = val1 * val2;
            break;
        case '/':
            result.value = val1 / val2;
    }
}
