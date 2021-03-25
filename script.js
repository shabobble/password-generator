/* Possible password characters */

specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", ",", "'", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "~"];
number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
lowercaseAlpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
uppercaseAlpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

/* Defines variables */
let confirmUppercase;
let confirmLowercase;
let confirmNumbers;
let confirmCharacters;
let selections;


function generatePassword() {

/* Asks the user how many characters their password should be */

  passwordLength = parseInt(prompt("How many characters long should your password be? Choose a number between 8 and 128."));

/* Makes sure user enters a number between 8 and 128, else restarts the function */

    if (!passwordLength) {
      alert("You must choose a number.");
      generatePassword(); 
    }
      else if (passwordLength < 8 || passwordLength > 128 ) {
        alert("That number does not meet the requirements.")
        generatePassword(); 
      }
      else {
        alert("Thank you!");
          confirmUppercase = confirm("Should your password include uppercase letters?");
          confirmLowercase = confirm("Should your password include lowercase letters?");
          confirmNumbers = confirm("Should your password include numbers?");
          confirmCharacters = confirm("Should your password include any special characters?");

      }
    

    if (!confirmUppercase && !confirmLowercase && !confirmNumbers && !confirmCharacters) {
      selections = alert("You must choose at least one criteria.");
      generatePassword();

    } else if (confirmUppercase && confirmLowercase && confirmNumbers && confirmCharacters) {
      selections = specialCharacter.concat(number, lowercaseAlpha, uppercaseAlpha);
    
    } else if (confirmCharacters && confirmNumbers && confirmUppercase) {
      selections = specialCharacter.concat(number, uppercaseAlpha);

    } else if (confirmCharacters && confirmLowercase && confirmUppercase) {
      selections = specialCharacter.concat(lowercaseAlpha, uppercaseAlpha);

    } else if (confirmCharacters && confirmNumbers && confirmLowercase) {
      selections = specialCharacter.concat(number, lowercaseAlpha);

    } else if (confirmNumbers && confirmLowercase && confirmUppercase) {
      selections = number.concat(lowercaseAlpha, uppercaseAlpha);

    } else if (confirmUppercase && confirmLowercase) {
      selections = uppercaseAlpha.concat(lowercaseAlpha);

    } else if (confirmUppercase && confirmNumbers) {
      selections = uppercaseAlpha.concat(number);

    } else if (confirmUppercase && confirmCharacters) {
      selections = uppercaseAlpha.concat(specialCharacter);

    } else if (confirmLowercase && confirmNumbers) {
      selections = lowercaseAlpha.concat(number);

    } else if (confirmLowercase && confirmCharacters) {
      selections = lowercaseAlpha.concat(specialCharacter);

    } else if (confirmNumbers && confirmCharacters) {
      selections = number.concat(specialCharacter);

    } else if (confirmUppercase) {
      selections = uppercaseAlpha;

    } else if (confirmLowercase) {
      selections = lowercaseAlpha;

    } else if (confirmNumbers) {
      selections = number;

    } else if (confirmCharacters) {
      selections = specialCharacter;
    }
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
