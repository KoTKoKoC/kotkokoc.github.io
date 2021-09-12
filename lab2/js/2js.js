document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('input');
    const button = document.getElementById('btn');

    const result = document.getElementById('result');

    // АЛГОРИТМ
    const cutLength = (a,b) => {
	    Math.sqrt( (b.y - a.y)**2 + (b.x - a.x)**2 ); 
        let cut = 0;

        let Length = a,b.split(';').map(a => a.split(','));

        Length.map(array => {
            if (array.length > 1) {
                cut++;
            }
            
            return array;
        })

        return cut;
    }
    // 

    button.addEventListener('click', () => {
        if (!input.value) {
            result.innerHTML = "Неверно заданы координаты!"
            return;
        }

        result.innerHTML = cutLength(input.value);
    })
})