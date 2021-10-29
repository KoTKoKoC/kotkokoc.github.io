function phoneNumber(input1) {
 let readyNumber = '('
 let n = 0
    for (let i = 0; i < input1.length; i++) {
      if ((isNaN(parseInt(input1[i])) == false) && 
          (parseInt(input1[i]) < 10) && 
          (parseInt(input1[i]) > -1) &&
          (parseInt(input1.length) == 10)) 
		  {
            if(i < 3) {
                console.log(i);
                readyNumber += input1[i];
            }
            else{
                if (n == 0){
                    readyNumber += ') ';
                    n++;
                }
                if (i < 6){
                    readyNumber += input1[i];
                }
                else{
                    if (n == 1){
                        readyNumber += '-';
                        n++;
                    }
                    if (i > 5){
                        readyNumber += input1[i];
                    }
                }
            }
        }
        else{
            alert("Ошибка, повторите попытку еще раз")
            document.getElementById('input1').value = '';
            return '';
        }
    }
    return readyNumber;
}