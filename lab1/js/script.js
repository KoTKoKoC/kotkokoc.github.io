document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('input');
    const button = document.getElementById('btn');

    const result = document.getElementById('result');

    // АЛГОРИТМ
    
   const func = (array) => {
var chet = 0;
       var nechet = 0;

array.forEach((item) => {
item % 2 === 1 ? chet += item : nechet += item;
})

    return parseInt(chet) - parseInt(nechet);
}
    // 

    button.addEventListener('click', () => {
        const arr = input.value.split(' ');

        result.innerHTML = func(array);
    })
})
