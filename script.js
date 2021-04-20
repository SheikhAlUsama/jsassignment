// 1. Write a program to take “city” name as input from user. If 
// user enters “Karachi”, welcome the user like this: 
// “Welcome to city of lights”

// var city = prompt("Enter city name");
// if (city==="karachi"){
//     alert(`Welcome to ${city}`)

// }




// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the 
// user is female, give the message: Good Morning Ma’am.


// var gender = prompt("Enter your gender");
// if (gender === "male"){
//     alert("Good Morning Sir")
// }else {
//     alert("Good Morning Ma'am")
// }


// 3. Write a program to take input color of road traffic signal 
// from the user & show the message according to this table:

// var signal = prompt("input color of road traffic signal ");

// if (signal === "Red"){
//     document.write("Must Stop")
// }
// else if (signal === "Yellow"){
//     document.write("Ready to move")
// }else {
//     document.write("Move now")
// }


// 4. Write a program to take input remaining fuel in car (in 
//     litres) from user. If the current fuel is less than 0.25litres, 
//     show the message “Please refill the fuel in your car”


// var fuel = +prompt("input remaining fuel in car");
// if (fuel => 0.35 ) {
//     document.write("Please refill the fuel in your car")
// }else {
//     document.write("Its Good")
// }

// 5.

// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute 
// grade as per following table:


// var totalMarks = 300;
// var english = +prompt("Enter your English Marks")
// var urdu = +prompt("Enter your Urdu Marks")
// var science = +prompt("Enter your Science Marks")

// var obtainMarks = english + urdu + science;

// var percentage = 100*obtainMarks/(totalMarks);

// document.write("<h1>MARKSHEET <br> </h1>");
// document.write("Total Marks :" + totalMarks + "<br>"  )
// document.write(`Obtain Marks : ${obtainMarks} <br>`)
// document.write (`Percentage : ${percentage} <br>`)

// if (percentage <= 80){
//     document.write("Grade : A <br>")
//     document.write("Remarks : Excellent")

// } else if (percentage <= 70){
//     document.write("Grade : B <br>")
//     document.write("Remarks : Good")
// }else if (percentage <= 60){
//     document.write("Grade : C <br>")
//     document.write("Remarks : You need to Imporve")
// }else {
//     document.write("Grade : Fail <br>")
//     document.write("Remarks : Sorry")
// }

// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

// var secretNumber = 6;
// var guess = +prompt("Guess Secret Number")

// if (guess === secretNumber){
//     document.write("<h1>“Bingo! Correct answer </h1>")
// }else {
//     document.write("<h1>Close enough to the correct answer</h1>")
// }


// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number 
// is divisible by 3.

// var num = +prompt("Enter number which is divisible by 3");

// if(num%3==0)
// 	{
// 		document.write(`${num} is divisible by 3`);
// 	}
// 	else
// 	{
// 		document.write(`${num} is not divisible by 3`);
// 	}



//     9. Write a program that checks whether the given input is an
// even number or an odd number.

// var num = +prompt("Enter number to check if it is even or odd");

// if(num%2==0)
// 	{
// 		document.write(`${num} is Even`);
// 	}
// 	else
// 	{
// 		document.write(`${num} is ODD`);
// 	}


// 10. Write a program that takes temperature as input and 
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

// var temperature = +prompt("Enter Temperature");

// if (temperature > 40){
//     document.write("<h1>“It is too hot outside.</h1>")
// }else if(temperature > 30) {
//     document.write("<h1>“The Weather today is Normal.</h1>")
// }
// else if(temperature > 20) {
//     document.write("<h1>““Today’s Weather is cool.</h1>")
// }else {
//     document.write("<h1>“OMG! Today’s weather is so Cool.</h1>")
// }

// 11. Write a program to create a calculator for +,-,*, / & % 
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.


// var firstNumber = +prompt("Enter First Number")
// var secondNumber = +prompt("Enter Second Number")
// var operator = prompt("Choose Operator")

// if (operator == "+"){
//   var final =  firstNumber + secondNumber;
//   alert(final);
// }

// else if (operator == "-"){
//     var final =  firstNumber - secondNumber;
//     alert(final);
//   }

//   else if (operator == "*"){
//     var final =  firstNumber * secondNumber;
//     alert(final);
//   }

//   else if (operator == "/"){
//     var final =  firstNumber / secondNumber;
//     alert(final);
//   }

//   else {
//       alert(" Choose Corrector Operator")
//   } 
