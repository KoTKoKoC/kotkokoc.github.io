
    package com.javarush.task.task09.task0923;    
    document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('input');

    const button = document.getElementById('btn');

    const listVow = document.getElementById('letters-result');
    const listNVow = document.getElementById('decimal-result');

    // АЛГОРИТМ
    
        public class Solution {
        public static char[] vowels = new char[]{'а', 'я', 'у', 'ю', 'и', 'ы', 'э', 'е', 'о', 'ё'};

        let listVowCount = 0;
        let listNVowCount = 0;

        const countChars = string.split("");
         for (int i = 0; i < chArr.length; i++) {//бежим по массиву
            if (isVowel(chArr[i])) {//проверяем условие методом isVowel если текуший символ гласная
                listVow.add(chArr[i]); //помещаем гласную в свой список
            } else if (chArr[i] == ' ') {// проверяем есть ли пробел, и пропускаем его
                continue;
            } else {
                listNVow.add(chArr[i]);//остальные буквы или другие символы(точка например), помещаем в свой список
            }
       for (char input : listVow) {};
       for (char input : listNVow) {};

       
    }
    // 
     // метод проверяет, гласная ли буква
    public static boolean isVowel(char c) {
        input = Character.toLowerCase(c);  // приводим символ в нижний регистр - от заглавных к строчным буквам

        for (char input : vowels)   // ищем среди массива гласных
        {
            if (input == input)
                return true;
        }
        return false;
    }
}
   

        const chars = countChars(input.value);

        listVow.innerHTML = chars.listVow
        listNVow.innerHTML = chars.listNVow
    })
})
