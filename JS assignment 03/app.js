// 1.Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

let city = prompt("write your city name ");
if(city="Karachi"){
    alert("Welcome to the city of lights");
}

//2.Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

let Gender = prompt("what's your Gender");
if(Gender ==  "male"){
    alert("Good Morning Sir !");
}
else if(Gender=="female"){
    alert("Good Morning Ma'am !");
} 

// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:
// Signal color     Message
//         Red      Must Stop
//        Yellow    Ready to move
//        Green     Move now

let color = prompt("Enter the color of road traffic signal (Red, Yellow, Green):")
if(color ==  "Red" || color ==  "red"){
    alert("MUST STOP");
}
else if(color =="Yellow" || color=="yellow"){
    alert("READY TO MOVE");
} 
else if(color =="Green" || color =="green"){
    alert("MOVE NOW");
} 
else{
    alert("Invalid Color")
}

// 4.Write a program to take input remaining fuel in car (in
//     litres) from user. If the current fuel is less than 0.25litres,
//     show the message “Please refill the fuel in your car”

let ramainingFuel = prompt("Enter the remaining fuel (in litres):");
if(ramainingFuel<0.25)
{
    alert("Please refill the fuel in your car");
}

else{
    alert("your current fuel is :"+ ramainingFuel);
}
//5.a. 
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
// User Input & Conditional Statement | JAVASCRIPT
// Page 2 of 4
// b.
 var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
// c.
 var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
// d. 
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
// e. 
if (true){
alert("True");
}
if (false){
alert("False");
}
// User Input & Conditional Statement | JAVASCRIPT
// Page 3 of 4
// f. 
if("car" < "cat"){
alert("car is smaller than cat");
}

// 6.Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:

    // Input marks for three subjects
    let subject1 = parseInt(prompt("Enter marks for Subject 1:"));
    let subject2 = parseInt(prompt("Enter marks for Subject 2:"));
    let subject3 = parseInt(prompt("Enter marks for Subject 3:"));

    // Define total marks 
    let totalMarks = 300;

    // Calculate marks obtained and percentage
    let marksObtained = subject1 + subject2 + subject3;
    let percentage = (marksObtained / totalMarks) * 100;

    let grade, remarks;
    if (percentage >= 80) {
        grade = "A-one";
        remarks = "Excellent";
    } else if (percentage >= 70) {
        grade = "A";
        remarks = "Good";
    } else if (percentage >= 60) {
        grade = "B";
        remarks = "You need to improve";
    } else {
        grade = "Fail";
        remarks = "Sorry";
    }
    document.write("<h3>Marks Sheet</h3>");
    document.write("Total Marks:",totalMarks,"<br>");
    document.write("Marks Obtained:",marksObtained,"<br>");
    document.write("Percentage:",percentage,"<br>");
    document.write("Grade:",grade,"<br>" );
    document.write("Remarks:",remarks,"<br>");

// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

let secretNumber = Math.floor(Math.random() * 10) + 1;
let GuessNumber = parseInt(prompt("Guess the secret number (1-10): "));
if (GuessNumber === secretNumber) {
  alert("Bingo! Correct answer");
} else if (GuessNumber + 1 === secretNumber) {
  alert("Close enough to the correct answer");
} 

// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

let num = prompt("Write a number");
if(num%3==0){
alert("This number is divisble by 3")
}
else{
    alert("This number is not divisble by 3")
}
// 9.Write a program that checks whether the given input is an
// even number or an odd number.
let num = prompt("Write a number");
if(num%2==0){
alert("This number is Even ");
}
else{
    alert("This number is Odd");
}

// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

let temperature = parseFloat(prompt("Enter temperature: "));
if (temperature > 40) {
  alert("It is too hot outside.");
} else if (temperature > 30) {
  alert("The Weather today is Normal.");
} else if (temperature > 20) {
  alert("Today’s Weather is cool.");
} else if (temperature > 10) {
  alert("OMG! Today’s weather is so Cool.");
} else {
  alert("It's freezing!");
}

// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

let num1 = parseFloat(prompt("Enter first number: "));
let operation = prompt("Enter operation (+, -, *, /, %): ");
let num2 = parseFloat(prompt("Enter second number: "));


if (operation === "+") {
  result = num1 + num2;
  alert(result);
} else if (operation === "-") {
  result = num1 - num2;
  alert(result);
} else if (operation === "*") {
  result = num1 * num2;
  alert(result);
} else if (operation === "/") {
  if (num2 !== 0) {
    result = num1 / num2;
    alert(result);
  }
  else if (operation === "%") {
    result = num1 % num2;
    alert(result);
} else {
    alert("Error: Division by zero!");
  }
} 