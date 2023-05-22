//JS ASSIGNMENTS CHAP 13-15//
//ARRAYS//

//QUESTION 01//
//ANS.
// var studentsName = [];
//this is literal notation//

//QUESTION 02//
//ANS.
// var studentsName = new array();
//this is object notation//

// //QUESTION 03//
//ANS.
// var string =["Maha","Asma","Bisma","Yamna"];
// document.write(string);

//QUESTION 04//
//ANS
// var numbers =[1,3,5,7,9,11,13,15];
// document.write(numbers);

//QUESTION 05//
//ANS.
// var boolean =[10<5 , false];
// document.write(boolean);

//QUESTION 06//
//ANS
// var mixedArray =["Maha Zaidi",24,true];
// document.write(mixedArray)

//QUESTION 07//
//ANS
// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
// document.write("<h1>" + " QUALIFICATIONS " + "</h1>");
// document.write("<ol>");
// document.write("<li>" + qualifications[0] + "</li>");
// document.write("<li>" + qualifications[1] + "</li>");
// document.write("<li>" + qualifications[2] + "</li>");
// document.write("<li>" + qualifications[3] + "</li>");
// document.write("<li>" + qualifications[4] + "</li>");
// document.write("<li>" + qualifications[5] + "</li>");
// document.write("<li>" + qualifications[6] + "</li>");
// document.write("<li>" + qualifications[7] + "</li>");
// document.write("</ol>");

//QUESTION 08//
//ANS.
// var studentNames =["Asma","Hina","Maha"];
// var scores =[320,230,480];
// var totalMarks = 500;
// document.write(" Score of " + studentNames[0] + " is " + scores[0] + "." + " Percentage: " + scores[0]/totalMarks*100 + " % " + "<br>" ) 
// document.write(" Score of " + studentNames[1] + " is " + scores[1] + "." + " Percentage: " + scores[1]/totalMarks*100 + " % " + "<br>" ) 
// document.write(" Score of " + studentNames[2] + " is " + scores[2] + "." + " Percentage: " + scores[2]/totalMarks*100 + " % " + "<br>" ) 

// QUESTION 09//
//ANS.
// var color_Names = ["red","green","blue","black","maroon"];
// document.write(color_Names + "<br>" + "<br>" + "<br>" + "<br>");

// var userColor = prompt(" which color do you want to add in the beginning?");
// color_Names.unshift(userColor);
// document.write("Updated array : " + color_Names + "<br>");

// var userColor2 = prompt("which color do you want to add at the end?");
// color_Names.push(userColor2);
// document.write("Updated array : " + color_Names + "<br>");

// var addColorfirst = prompt ("add first color in the beginning of the array");
// var addColorSecond = prompt("add second color in the beginning of the array");
// color_Names.unshift(addColorfirst,addColorSecond);
//  document.write("Updated array : " + color_Names + "<br>");

// delete first color//
// color_Names.shift();
// document.write("Updated array : " + color_Names + "<br>")

// delete last color//
// color_Names.pop();
// document.write("Updated array : " + color_Names + "<br>" );

// var index = +prompt(" at which index no you want to add color?");
// var colorName = prompt("which color do you add?");
// color_Names.splice(index,0,colorName);
// document.write("Updated array : " + color_Names + "<br>");

// var index2 = +prompt("at which index you want to delete color?");
// var deleteColorsCount = +prompt("How many colors do you want to delete?");
// color_Names.splice(index2,deleteColorsCount);
// document.write("Updated array : " + color_Names + "<br>");


//QUESTION 10//
//ANS.
// var student_Scores =[320,230,480,120];
// document.write("Scores of Students : " + student_Scores + "<br>");
// var sort_Scores = student_Scores.sort();
// document.write("Ordered Scores of Students : " + sort_Scores );

//QUESTION 11//
//ANS.
// var cityNames =["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
// var selectedCityNames =cityNames.slice(2,4);
// document.write("Cities list:" + "<br>" + cityNames + "<br>" + "<br>");
// document.write("Selected cities list:" + "<br>" + selectedCityNames);

//QUESTION 12//
//ANS//
// var array = ["This","is","my","cat"];
// var joinMethod = array.join(" ");
// document.write("Array: " + array + "<br>");
// document.write("String: " + joinMethod);

//QUESTION 13//
//ANS.
// var array_Devices = ["keyboard","mouse","printer","monitor"];
// var out ;
// document.write("Devices: " + "<br>" + array_Devices + "<br>" + "<br>");
// out = array_Devices.shift()
// document.write("Out: " + "<br>" + out + "<br>");
// out = array_Devices.shift()
// document.write("Out: " + "<br>" + out + "<br>");
// out = array_Devices.shift()
// document.write("Out: " + "<br>" + out + "<br>");
// out = array_Devices.shift()
// document.write("Out: " + "<br>" + out + "<br>" + "<br>");


 
//QUESTION 14//
//ANS.
// var array_Devices = ["keyboard","mouse","printer","monitor"];
// var out ;
// document.write("Devices: " + "<br>" + array_Devices + "<br>" + "<br>");
// out = array_Devices.pop()
// document.write("Out: " + "<br>" + out + "<br>");
// out = array_Devices.pop()
// document.write("Out: " + "<br>" + out + "<br>");
// out = array_Devices.pop()
// document.write("Out: " + "<br>" + out + "<br>");
// out = array_Devices.pop()
// document.write("Out: " + "<br>" + out + "<br>");

//QUESTION 15//
//ANS.
// var phoneManufacturers = ["Apple","Samsung","Motorola","Nokia","Sony","Haier"];
// document.write("<select>");
// document.write("<option>" + phoneManufacturers[0] + "</option>");
// document.write("<option>" + phoneManufacturers[1] + "</option>");
// document.write("<option>" + phoneManufacturers[2] + "</option>");
// document.write("<option>" + phoneManufacturers[3] + "</option>");
// document.write("<option>" + phoneManufacturers[4] + "</option>");
// document.write("<option>" + phoneManufacturers[5] + "</option>");
// document.write("</select>");


//==========================Completed=================================================//






