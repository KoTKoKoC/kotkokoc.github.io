document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('input');
    const button = document.getElementById('btn');

    const result = document.getElementById('result');

    // АЛГОРИТМ
    
   const func = (array) => {
var input = 0;
       var input1 = 0;

array.forEach((item) => {
item % 2 === 1 ? input += item : input1 += item;
})

    return parseInt(input) - parseInt(input1);
}
    // 

    button.addEventListener('click', () => {
        const arr = input.value.split(' ');

        result.innerHTML = func(array);
    })
})
