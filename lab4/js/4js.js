  const word = "12qweyo",
  vowel = [],
  consonants = [];

for (let char of word) {
  if (char.match(/[aeiou]/)) vowel.push(char);
  else consonants.push(char);

}

writeln(vowel);
writeln(consonants);
