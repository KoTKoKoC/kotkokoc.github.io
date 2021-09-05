document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('input');
    const button = document.getElementById('btn');

    const result = document.getElementById('result');

    // АЛГОРИТМ
    
   const func = (array) => {
var sumEven = 0;
var sumOdd = 0;
array.forEach((item) => {
item % 2 === 1 ? sumOdd += item : sumEven += item;
})

    return parseInt(sumEven) - parseInt(sumOdd);
}
    // 

    button.addEventListener('click', () => {
        const arr = input.value.split(' ');

        result.innerHTML = func(array);
    })
})
