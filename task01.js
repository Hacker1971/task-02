function countVowelsAndConsonants(str) {
  const vowels = "aeiouAEIOU";
  let vowelCount = 0;
  let consonantCount = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (vowels.includes(char)) {
      vowelCount++;
    } else if (/[a-zA-Z]/.test(char)) {
      consonantCount++;
    }
  }

  return { vowels: vowelCount, consonants: consonantCount };
}

// Test the function
const inputString = "Hello, World!";
const result = countVowelsAndConsonants(inputString);
console.log("Number of vowels:", result.vowels);
console.log("Number of consonants:", result.consonants);
