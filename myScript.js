// for generation of the password
// TODO:
// 1. Make it so generated password always contains at least one of every type of character
// per password (just remember if four options are selected and the length is less than four
// you need to be able to handle this)
function generatePassword(){
    let length = parseInt(document.getElementById("generatePassword").value);
    var characterSelections = document.getElementsByName('passwordChar');




    const specialCharacterArray = ['!', '@', '#', '$', '%', '^', '&', '*', '-', '?'];
    const numberArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    const uppercaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P'
        , 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const lowercaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p'
        , 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    let availablePasswordCharacterArray = [];

    if(characterSelections[0].checked){
        for(let i = 0; i < specialCharacterArray.length; i++){
            availablePasswordCharacterArray.push(specialCharacterArray[i]);

        }
    }
    if(characterSelections[1].checked){
        for(let i = 0; i < uppercaseArray.length; i++){
            availablePasswordCharacterArray.push(uppercaseArray[i]);

        }
    }
    if(characterSelections[2].checked){
        for(let i = 0; i < lowercaseArray.length; i++){
            availablePasswordCharacterArray.push(lowercaseArray[i]);

        }
    }
    if(characterSelections[3].checked){
        for(let i = 0; i < numberArray.length; i++){
            availablePasswordCharacterArray.push(numberArray[i]);

        }
    }
    if(availablePasswordCharacterArray.length === 0){
        return 0;
    }
    let newPassword = "";


        for (let i = 0; i < length; i++) {

            newPassword += availablePasswordCharacterArray[Math.floor(Math.random() * availablePasswordCharacterArray.length)];
        }

    document.getElementById("password").innerHTML = newPassword;

}


// For the evaluation of the password

// TODO
//  1. must add something that checks rockyou.txt; possibly use Node.js
//  2. use combinations to return time it would take to crack password

function hasLessThanEight() {
    let password = document.getElementById("myText").value;
    if(password.length < 8) {
        return true;
    }
    return false;
}


function hasSpecialCharacter(){
    let password = document.getElementById("myText").value;
    const array = ['!', '@', '#', '$', '%', '^', '&', '*', '-', '?'];
    for(let i = 0; i < password.length; i++){
        if(array.includes(password[i])){
            return true;
        }
    }
    return false;
}


function hasNumber(){
    let password = document.getElementById("myText").value;
    const array = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    for(let i = 0; i < password.length; i++){
        if(array.includes(password[i])){
            return true;
        }
    }
    return false;
}


function hasUppercase(){
    let password = document.getElementById("myText").value;
    const array = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P'
        , 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    for(let i = 0; i < password.length; i++){
        if(array.includes(password[i])){
            return true;
        }
    }
    return false;
}


function hasLowercase(){
    let password = document.getElementById("myText").value;
    const array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p'
        , 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    for(let i = 0; i < password.length; i++){
        if(array.includes(password[i])){
            return true;
        }
    }
    return false;
}


function checkNumberOfCombinations(){
    let password = document.getElementById("myText").value;
    let totalCharacters = 0;
    if(hasNumber()){
        totalCharacters += 10;
    }
    if(hasUppercase()){
        totalCharacters += 26;
    }
    if(hasLowercase()){
        totalCharacters += 26;
    }
    if(hasSpecialCharacter()){
        totalCharacters += 10;
    }
    // totalCombinations = totalCharacter^length
    let totalCombinations = 1;
    for(let i = 0; i < password.length; i++){
        totalCombinations *= totalCharacters;
    }
    return totalCombinations;
}
function timeToHack(){
    let numberOfCombinations = checkNumberOfCombinations();
    return numberOfCombinations/2;
}


function runAndDocumentCharacterTests(){
    if(hasLessThanEight()){
        document.getElementById("lessThanEight").innerHTML = "hasLessThanEight() true";
    }else{
        document.getElementById("lessThanEight").innerHTML = "hasLessThanEight() false";
    }
    if(hasSpecialCharacter()){
        document.getElementById("hasSpecialCharacter").innerHTML = "hasSpecialCharacter() true";
    }else{
        document.getElementById("hasSpecialCharacter").innerHTML = "hasSpecialCharacter() false";
    }
    if(hasNumber()){
        document.getElementById("hasNumber").innerHTML = "hasNumber() true";
    } else{
        document.getElementById("hasNumber").innerHTML = "hasNumber() false";
    }
    if(hasUppercase()){
        document.getElementById("hasUppercase").innerHTML = "hasUppercase() true";
    }
    else{
        document.getElementById("hasUppercase").innerHTML = "hasUppercase() false";

    }
    if(hasLowercase()){
        document.getElementById("hasLowercase").innerHTML = "hasLowercase() true";
    } else{
        document.getElementById("hasLowercase").innerHTML = "hasLowercase() false";
    }
    document.getElementById("totalCombinations").innerHTML = checkNumberOfCombinations().toString() + " combinations";
    document.getElementById("timeToHack").innerHTML = "The total time to hack this password is: " + timeToHack().toString();
}


function containsInvalidCharacters(){
    let password = document.getElementById("myText").value;

    const array = ['!', '@', '#', '$', '%', '^', '&', '*', '-', '?', '1', '2', '3',
        '4', '5', '6', '7', '8', '9', '0', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P'
        , 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p'
        , 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    for(let i = 0; i < password.length; i++){
        if(!array.includes(password[i])){
            return true;
        }
    }
    return false;
}


function isStrongPass(){
    if(containsInvalidCharacters()){
        document.getElementById("invalidCharacters").innerHTML = "containsInvalidCharacters() true";
    }
    else {
        document.getElementById("invalidCharacters").innerHTML = "containsInvalidCharacters() false";
        runAndDocumentCharacterTests();
    }
}