//JS ASSIGNMENTS " USER INPUT & CONDITIONAL STATEMENT "//

//QUESTION NO 01//
//ANS.
// var cityName = prompt("Write your city name");
// if (cityName === "karachi"){

//   alert("Welcome to city of lights");
// }

//QUESTION NO 02//
// ANS.
// var gender = prompt("write your gender");
// if (gender === "female"){
//    alert("Good Morning! Mam");
// }
// else{ 
//     alert("Good Morning! Sir" );
// }

//QUESTION NON 03//
//ANS.
// var signalsOfColor = prompt(" We are here to help indicating traffic signals color,Enter your color ");
// if(signalsOfColor === "red")
// {
//     alert("Must Stop");
// }
// else if (signalsOfColor === "yellow")
// {
//     alert("Ready to move");
// }
// else(signalsOfColor === "green")
// {
//     alert("Move now");
// }

//QUESTION NO 04
//ANS.
// var remainingFuel = prompt("How much litres fuel remain in your car?");
// if(remainingFuel < 0.25) {
//     alert("Please! refill the fuel in your car");
// }
// else{
//     alert("Enjoy your traveling");
// }

//QUESTION NO 05//
//ANS.
//  var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
//this condition is right//

//  var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
//condition would be true ,if either b=83 or ++b is written//

//  var c = 12;
// if (c++ === 13)
// {
// alert("condition 1 is true");
// }
// this condition is false//

// if (c === 13){
// alert("condition 2 is true");
// }
// this condition is true//

// if (++c < 14){
// alert("condition 3 is true");
// }
//this condition is false//

// if(c === 14){
// alert("condition 4 is true");
// }
//this condition  is true//
 
//condition 2 and 4 are true//

//  var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
//this condition is true//

// if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
//as 1st condition is true so 2nd condition will not display//

// if("car" < "cat"){
//     alert("car is smaller than cat");
// }
//this condition is true//

// QUESTION NN 06//
//ANS.
// var marks_Obtained = +prompt("enter your marks obtained in 3 subjects");
// var  total_Marks = 300;
// var percentage = (marks_Obtained / total_Marks) * 100;
 
// if (percentage > 80) {
//      document.write(" Total marks: " + total_Marks + "<br>" );
//      document.write(" Marks obtained: " + marks_Obtained + "<br>");
//      document.write(" Percentage: " + percentage + "%" + "<br>" );
//      document.write(" Grade: " + " A one " + "<br>" );
//      document.write(" Remarks: " + " Excellent ") ;
// }
 
// else if (percentage > 70) {
//     document.write(" Total marks: " + total_Marks + "<br>" );
//     document.write(" Marks obtained: " + marks_Obtained + "<br>");
//     document.write(" Percentage: " + percentage + "%" + "<br>" );
//     document.write(" Grade: " + " A " + "<br>" );
//     document.write(" Remarks: " + " Good ") ;
// }

// else if (percentage > 60) {
//     document.write(" Total marks: " + total_Marks + "<br>" );
//     document.write(" Marks obtained: " + marks_Obtained + "<br>");
//     document.write(" Percentage: " + percentage + "%" + "<br>" );
//     document.write(" Grade: " + " B " + "<br>" );
//     document.write(" Remarks: " + " You need to improve ") ;
// }
// else {
//     document.write(" Total marks: " + total_Marks + "<br>" );
//     document.write(" Marks obtained: " + marks_Obtained + "<br>");
//     document.write(" Percentage: " + percentage + "%" + "<br>" );
//     document.write(" Grade: " + " Fail " + "<br>" );
//     document.write(" Remarks: " + " Sorry :( ") ;
// } 

//QUESTION NO 07//
//ANS.
// var secret_Number = 4;
// var guess_Number = +prompt ("Guess the secret number");
//  if (guess_Number === secret_Number){
//     document.write(" Bingo! Correct answer ");
//  }
//  else if (guess_Number +1 === secret_Number )
//  {
//     document.write("Close enough to the correct answer");
//  }
// else{ document.write("Sorry! Your answer is wrong")}

//QUESTION NO 08//
//ANS.
// var number = +prompt("enter a number");
// var divide = number % 3
// if (divide === 0){
//     alert("your number is divided by 3")
// }
// else{ 
//     alert("Your reminder is " + divide)
// }

//QUESTION NO 09//
//AMS.
// var number = +prompt(" enter a number ");
// if (number % 2 === 0) {
//    alert(number + " is an even number ");
// }
// else {
//     alert(number + " is an odd number ")
// }

//QUESTION NO 10//
//ANS.
// var temperature = +prompt("enter the today's temperature");
// if(temperature > 40){
//     alert(" It is too hot outside ");
// }
// else if(temperature > 30){
//     alert("The weather today is normal");
// }
// else if(temperature > 20){
//     alert("Today's weather is cool" );
// }
// else if(temperature > 10 ){
//     alert("OMG!Today's weather is so cool");
// }
// else{
//     alert("OMG! Today's weather is sooo freezy");
// }

//QUESTION NO 11//
//ANS.
// var first_number = +prompt("enter your first number");
// var operator = prompt("which operatr you want to perform here?");
// var second_number = +prompt("enter your second number");

// if (operator === "+"){
//     alert(first_number  + second_number);
// }
// else if(operator === "-"){
//     alert(first_number - second_number);
// }
// else if(operator === "*"){
//     alert(first_number * second_number);
// }
// else if(operator === "/"){
//     alert(first_number / second_number); 
// }
// else if(operator === "%"){
//     alert(first_number % second_number);
// }

//======================= completed============================//