//Write a code to calculate if the string is palindrome ? (Use javascript only)

function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert the string to lowercase
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
    // Compare the original and reversed strings
    return cleanStr === cleanStr.split('').reverse().join('');
  }
  
  // Test the function
  const inputString = "A man, a plan, a canal, Panama!";
  const result = isPalindrome(inputString);
  
  console.log(result ? "It's a palindrome." : "It's not a palindrome.");
  