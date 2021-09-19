document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('input1');
    const input = document.getElementById('input2');
    const button = document.getElementById('btn');

    const result = document.getElementById('result');

    // АЛГОРИТМ
    const countDeep = (arrayStr) => {
        if (typeof arrayStr !== 'string') {
            throw new Error("Введена не строка!");
        }

        const chars = arrayStr.split("");

        // Проверка на лишние символы
        for (let i = 0; i < chars.length; i++) {
            if (chars[i] !== '' && chars[i] !== '') return "Лишние символы в строке!"
        }

        const plus = arrayStr.split('+');
        const minus = arrayStr.split('-');

    // 

    button.addEventListener('click', () => {
        if (!input.value) {
            result.innerHTML = "Введите строку!"
            return;
        }

        result.innerHTML = countDeep(input.value);
    })
})
