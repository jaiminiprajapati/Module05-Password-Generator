// Array of special characters to be included in password
var specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
  ];
  
  // Array of numeric characters to be included in password
  var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  // Array of lowercase characters to be included in password
  var lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];
  
  // Array of uppercase characters to be included in password
  var upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ];

  let passwordLength = 0;

// Function to prompt user for password options
function getPasswordOptions() {
  const characterTypes = [];
  passwordLength = parseInt(prompt("Enter password length between 8 and 128 characters: "));
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128){
    alert ("Password length should be be between 8 and 128");
    getPasswordOptions();
  } 
  if (confirm("Include lowercase characters?")) characterTypes.push(lowerCasedCharacters);
  if (confirm("Include uppercase characters?")) characterTypes.push(upperCasedCharacters);
  if (confirm("Include numeric characters?")) characterTypes.push(numericCharacters);
  if (confirm("Include special characters?")) characterTypes.push(specialCharacters);
  if(characterTypes.length === 0){
    alert("At least one character type should be selected");
    if (confirm("Try again?")) getPasswordOptions();
  }
  return characterTypes;
}

// Function for getting a random element from an array
function getRandom(arr) {
    let password = '';
    for (let i = 0; i < passwordLength; i++) {
      const randomCharSetIndex = Math.floor(Math.random() * arr.length);
      const randomCharSet = arr[randomCharSetIndex];

      const randomIndex = Math.floor(Math.random() * randomCharSet.length);
      console.log({randomIndex, randomCharSet});
      password += randomCharSet[randomIndex];
    }
    return password;
}

// Function to generate password with user input
function generatePassword() {
    var characterTypes = getPasswordOptions();
    var password = getRandom(characterTypes);
    return password;
  }
  
  // Get references to the #generate element
  var generateBtn = document.querySelector('#generate');
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');
    passwordText.value = password;
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener('click', writePassword);