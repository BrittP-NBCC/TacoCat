let $ = function(id){
    return document.getElementById(id);
}

//called on btn press
function getValue(){
    //store user string
    let userString = $("userString").value.toLowerCase().trim();;
    let isPalindrome = false;

    //call function to reverse user string
    let reversedString = `${flipString(userString)}`

    //check if reversedString is the same as userString
    //if the string is the same forwards as backwards return true,
    if (userString == reversedString) {
        isPalindrome = true;
    } else {
        isPalindrome = false;
    } 
    
    //display results
    displayMessage(isPalindrome, reversedString);
}

function flipString(userString){
    //create a new array to store new reversed string in
    let reversedString = [];

    //loop through userstring and create new array
    for (let index = userString.length - 1; index >= 0; index--) {
        reversedString += userString[index];
    }
    return reversedString;
}

function displayMessage(isPalindrome, reversedString){
    if (isPalindrome) {
        $("alert").classList.remove("invisible", "alert-danger");
        $("alert").classList.add("alert-success");
        $("msg").innerHTML = `Your phrase reversed is: ${reversedString}`;
        $("alert-heading").innerHTML = "Well Done! You entered a palindrome!";
    } else {
        $("alert").classList.remove("invisible", "alert-success");
        $("alert").classList.add("alert-danger");
        $("alert-heading").innerHTML = "Please Try Again.";
        $("msg").innerHTML = `Your phrase reversed is: ${reversedString}`;
    }
}