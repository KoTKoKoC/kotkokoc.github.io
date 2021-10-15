
function doScript(input,point)
{
    let masStr = [];
    let k;
    let mas = [];
    let count = 0;
    let check = false;
    document.getElementById('textArea').value = '';

    
    for (let i = 0; i < input.split('\n').length; i++)
    {
        k = input.split('\n')[i];
        for (let j = 0; j < k.split(' ').length; j++)
        {
            masStr.push(parseInt(k.split(' ')[j]));
        }

        mas.push(masStr);
        masStr = [];
    }

    for (let i = 0; i < mas.length; i++)
    {
        if ((isNaN(mas[i][0]) == true) || (isNaN(mas[i][1]) == true)
        || (isNaN(point) == true) || (mas[i][0] > mas[i][1]))
        {
            check = true;   
        }
    }

    if (check == false)
    {
        for (let i = 0; i < mas.length; i++)
        {
            for (let j = mas[i][0]; j <= mas[i][1]; j++)
            {
                if(j == point)
                {
                    count++;
                }
            }
        }
    }
    else
        {
            alert("Неправильный тип данных! Повторите попытку")
            document.getElementById('input').value = '';
            document.getElementById('point').value = '';
            return '';
        }
    return count;

}