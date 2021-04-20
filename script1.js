// Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

// var inputCheck = prompt("Enter to Check");

// if ((inputCheck >= 65 && inputCheck <= 90)
//         || (inputCheck >= 97 && inputCheck <= 122)) {
//             document.write( " Alphabet ")

//         }

// CHECKING FOR DIGITS
//     else if ($input_char >= 48 &&
//             $input_char <= 57)
//     echo " Digit ";

//     // OTHERWISE SPECIAL CHARACTER
//     else
//     echo " Special Character ";
// }

// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

// var intOne = +prompt("Enter integer 1");
// var SecondOne = +prompt("Enter integer Second");

// if (intOne > SecondOne){
//     document.write("<h1>First Number is Greater</h1>")
// }

// else if (SecondOne > intOne){
//     document.write("<h1>Second Number is Greater</h1>")
// }
// else {
//     document.write("<h1>Both Number is Equal</h1>")
// }

// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.

// var num = +prompt("Enter number to check its positive or negative")
// if (num > 0 ){
//     document.write("<h1>Number is Positive</h1>")
// }

// else if (num < 0 ){
//     document.write("<h1>Number is Negative</h1>")
// }
// else {
//     document.write("<h1>Number is Zero</h1>")
// }

// 4. Write a program that takes a character (i.e. string of
//     length 1) and returns true if it is a vowel, false otherwise

// var letter = prompt("Enter the letter to check it's vovel or not")

// if (letter == 'a' || letter == 'A' ||  letter == 'e' || letter == 'E'|| letter =='i' || letter == 'I'|| letter == 'o' || letter == 'O'||  letter =='u' ||letter == 'U' ) {
//     document.write("<h1>Letter is Vovel</h1>")
// }else{
//     document.write("<h1>Letter is not Vovel</h1>");
// }

// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.

// var correctPassword = "abcd134";
// var userPassword = prompt("Enter Password to validate");

// if (correctPassword == userPassword){
//     document.write("<h1>“Correct! The password you entered matches the original password”</h1>");
// }
// else if (userPassword == ''){
//     document.write("<h1>“ Please enter your password”</h1>")
// }else {
//     document.write("<h1>“Incorrect password”</h1>")
// }

// 6. This if/else statement does not work. Try to fix it:

// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// alert(greeting);}
// else{
// greeting = "Good evening";
// alert(greeting);
// }


// 7. Write a program that takes time as input from user in 24 
// hours clock format like: 1900 = 7pm. Implement the 
// following case using if, else & else if statements

// var time = +prompt("Enter Time in 24 hour format")

// if (time == 13){
//     document.write("<h1>It's 1pm</h1>")
// }
// else if (time == 14){
//     document.write("<h1>It's 2pm</h1>")
// }
// else if (time == 15){
//     document.write("<h1>It's 3pm</h1>")
// }
// else if (time == 16){
//     document.write("<h1>It's 4pm</h1>")
// }

// else if (time == 17){
//     document.write("<h1>It's 5pm</h1>")
// }

// else if (time == 18){
//     document.write("<h1>It's 6pm</h1>")
// }

// else if (time == 19){
//     document.write("<h1>It's 7pm</h1>")
// }
// else if (time == 20){
//     document.write("<h1>It's 8pm</h1>")
// }
// else if (time == 21){
//     document.write("<h1>It's 9pm</h1>")
// }
// else if (time == 22){
//     document.write("<h1>It's 10pm</h1>")
// }

// else if (time == 23){
//     document.write("<h1>It's 11pm</h1>")
// }
// else if (time == 00){
//     document.write("<h1>It's 12am</h1>")
// }
// else {
//     document.write("<h1>Already Formatted</h1>")
// }