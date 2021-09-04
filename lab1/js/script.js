document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('input');
    const button = document.getElementById('btn');

    const trueResult = document.getElementById('true');
    const falseResult = document.getElementById('false');

    // АЛГОРИТМ
	const func = (array) => {
         var chetnii =0;
         var nechetnii =0;
            array.forEach((item) => {
            item % 2 === 1 ? nechetnii += item : chetnii+= item;
        })
        return nechetnii - chetnii;
    }
// 

    button.addEventListener('click', () => {
        if(isIsogram(input.value)) {
            falseResult.classList.remove('false');
            trueResult.classList.add('true');
        } else {
            trueResult.classList.remove('true');
            falseResult.classList.add('false');
        }
    })
})