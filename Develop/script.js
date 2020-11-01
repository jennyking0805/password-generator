var generateBtn = document.querySelector("#generate");

const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const number = "0123456789";
const chars = "~!@#$%^&*()?><";
const pwLength = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  userPassword = "";
  pwChars = "";

    // request length of password
    let pwLength = prompt(
      "Please select a password length between 8 and 128 characters."
    );

    if (pwLength >= 8 && pwLength <= 128) {
      password.length = pwLength;

      // use lowercase letters?
      var lowerCase = confirm("Would you like to use LOWERCASE letters?");
      // use uppercase letters?
      var upperCase = confirm("Would you like to use UPPERCASE letters?");
      // use numerical values?
      var numeric = confirm("Would you like to use NUMERICAL values?");
      // use special characters?
      var specialChar = confirm("Would you like to use SPECIAL CHARACTERS?");
    } else {
      alert("Please select a password between 8 and 128 characters!")
    }

    if (lowerCase === true) {
      pwChars += lowercase;
    }
    if (upperCase === true) {
      pwChars += uppercase;
    }
    if (numeric === true) {
      pwChars += number;
    }
    if (specialChar === true) {
      pwChars += chars;
    } else {
      alert("ERROR! Cannot generate password!")
    }

    for (var i = 0; i < pwLength; i++) {
      userPassword += pwChars[Math.floor(Math.random() * pwChars.length)];
    }
  return userPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
