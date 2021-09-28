    document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('input');

    const button = document.getElementById('btn');

    const listVow = document.getElementById('listVow-result');
    const listNVow = document.getElementById('listNVow-result');

    // АЛГОРИТМ
  const countChars = (string) => {
  if (typeof string !== 'string') {
  throw new Error("Введена не строка!");
        } 
  
  listVow = [],
  listNVow = [];

  for (let char of countChars) {
  if (char.match(/[aeiou]/)) listVow.push(char);
  else listNVow.push(char);
      

}}
      
  button.addEventListener('click', () => {
        if (!input.value) {
            listVow.innerHTML = "Пустая строка"
            listNVow.innerHTML = "Пустая строка"
            return;
        }     
 const chars = countChars(input.value);
 listVow.innerHTML = chars.listVow
 listNVow.innerHTML = chars.listNVow
})

