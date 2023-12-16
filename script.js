// Assignment Code
var generateBtn = document.querySelector("#generate");

console.log(generateBtn)

var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var numbers= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 
var specialCharacters = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];


function generatePassword() {

    var passwordLength= +prompt ('Please provide password length')
    var wantsLowercase= +confirm('Click Ok if you want lowercase characters');
    var wantsUppercase= +confirm('Click Ok if you want uppercase characters');
    var wantsNumbers= +confirm('Click Ok if you want numbers included');
    var wantsSpecialChar= +confirm('Click Ok if you want special characters');
    var password = ''
    var characterSet= []


for (var count = 0; count< passwordLength; count++) {
    var ranIndex = Math.floor(Math.random()* characterSet.length)

    if (wantsLowercase) {
        // var ranIndex = Math.floor(Math.random()* lowercase.length)
        characterSet= characterSet.concat(lowercase)
    }
    
    if (wantsUppercase) {
        // var ranIndex = Math.floor(Math.random()* uppercase.length)
        characterSet= characterSet.concat(uppercase)
    }
    
    if (wantsNumbers) {
        // var ranIndex = Math.floor(Math.random()* numbers.length)
        characterSet= characterSet.concat(numbers)
    }
    
    if (wantsSpecialChar) {
        // var ranIndex = Math.floor(Math.random()* specialCharacters.length)
        characterSet= characterSet.concat(specialCharacters)
    }

    password += characterSet[ranIndex]
}

return password;

};

var pass= generatePassword()
console.log(pass);

var textBox = document.querySelector('textarea')

textBox.value = pass;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
