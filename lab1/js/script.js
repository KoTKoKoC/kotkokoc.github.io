document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('input');
    const button = document.getElementById('btn');

    const result = document.getElementById('result');

    // АЛГОРИТМ
    
   function PrintSubtraction(text) {
				var textMas = new String(text).split(" ");

				var chetnie =0;
				var nechetnie =0;
				
				for(text of textMas)
				{
					var chislo = parseInt(text);
					if(chislo % 2 == 0)
						chetnie +=chislo;
					else
						nechetnie +=chislo;
				}
				
				return chetnie - nechetnie;
			}

			var text = input;

			var result = PrintSubtraction(text);

			alert(result);
    // 

    button.addEventListener('click', () => {
        const text = input.value.split(' ');

        result.innerHTML = PrintSubtraction(text);
    })
})
