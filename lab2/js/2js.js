document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('input');
    const button = document.getElementById('btn');

    const result = document.getElementById('result');

    // АЛГОРИТМ
    const cutLength = (a,b) => Math.sqrt( (b.y - a.y)**2 + (b.x - a.x)**2 );

alert(cutLength(
    {x : 10, y : 15},
    {x : 25, y : 30}
));
    // 

    button.addEventListener('click', () => {
        if (!input.value) {
            result.innerHTML = "Неверно заданы координаты!"
            return;
        }

        result.innerHTML = cutLength(input.value);
    })
})
