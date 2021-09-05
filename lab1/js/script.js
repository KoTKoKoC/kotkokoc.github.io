document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('input');
    const button = document.getElementById('btn');

    const result = document.getElementById('result');

    // АЛГОРИТМ
    
    function subtractingTheSumOfEvenAndOddNumbers (arr){
    let sumEven = 0;
    let sumOdd = 0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 0){
            sumEven += arr[i];
        }else{
            sumOdd += arr[i];
        }
    }

    return parseInt(sumEven) - parseInt(sumOdd);
}
    // 

    button.addEventListener('click', () => {
        const arr = input.value.split(' ');

        result.innerHTML = subtractingTheSumOfEvenAndOddNumbers (arr);
    })
})
