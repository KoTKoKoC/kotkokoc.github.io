document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('input1');
    const input = document.getElementById('input2');
    const button = document.getElementById('btn');

    const result = document.getElementById('result');

    // АЛГОРИТМ
    function calculate() {
    var e = document.getElementById("user_select"),
        user_operator = e.options[e.selectedIndex].value,
        val1 = +document.getElementById("input1").value,
        val2 = +document.getElementById("input2").value,
       

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
        result.innerHTML = calculate();
    })
})
