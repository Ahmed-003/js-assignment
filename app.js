//                                    CHAPTER 5

//QUESTION 1
var num1 = 3;
var num2 = 5;
var num3 = num1 + num2
document.write("<center><h1>CHAPTER 5</h1></center>")
document.write("<h1>Q1</h1>The Sum of 3 and 5 is" ," ", num3 ,)

var num1 = 3;
var num2 = 5;
var num3 = num1 - num2
document.write("<br>The sub of 3 and 5 is" ," ", num3)

var num1 = 3;
var num2 = 5;
var num3 = num1 * num2
document.write("<br>The Multiplacation of 3 and 5 is" ," ", num3)

var num1 = 3;
var num2 = 5;
var num3 = num1 / num2
document.write("<br>The division of 3 and 5 is" ," ", num3)

var num1 = 3;
var num2 = 5;
var num3 = num1 % num2
document.write("<br>The modulus of 3 and 5 is" ," ", num3)

//QUESTION 2

var number;
document.write("<h1>Q2</h1><br>Value after variable declaration is: " , number , "<br>");
number = 5;
document.write("Initial value: " , number ,"<br>");
number++;
document.write("Value after increment is: " , number , "<br>");   
number += 7;
document.write("Value after addition is: " , number , "<br>");   
number--;
document.write("Value after decrement is: " ,number , "<br>");
var remainder = number % 3;
document.write("The remainder is: " , remainder , "<br>");


//QUESTION 3

var ticket = 600;
var cost = 600*5;
document.write("<h1>Q3</h1><br>Total cost to buy 5 tickets to a movie is"," ", cost)


//QUESTION 4

var table = 4;
var mul1 = 4*1;
var mul2 = 4*2;
var mul3 = 4*3;
var mul4 = 4*4;
var mul5 = 4*5;
var mul6= 4*6;
var mul7= 4*7;
var mul8 = 4*8;
var mul9 = 4*9;
var mul10 = 4*10;
document.write("<h1>Q4</h1><br>Table of"," ", table);
document.write("<br>4x1=", mul1);
document.write("<br>4x2=", mul2);
document.write("<br>4x3=", mul3);
document.write("<br>4x4=", mul4);
document.write("<br>4x5=", mul5);
document.write("<br>4x6=", mul6);
document.write("<br>4x7=", mul7);
document.write("<br>4x8=", mul8);
document.write("<br>4x9=", mul9);
document.write("<br>4x10=",mul10);

//QUESTION 5

var celsius = 25;
var fahrenheit = (25*9/5)+32;
var celsiusoutput = (70-32)*5/9;
document.write("<h1>Q5</h1><br>25<sup>o</sup>C is"," ",fahrenheit,"<sup>o</sup>F");
document.write("<br>70<sup>o</sup>F is"," ",celsiusoutput,"<sup>o</sup>F");


//QUESTION 6

var itemPrice1 = 650;
var item1Quantity = 3;
var itemPrice2 = 100;
var item2Quantity = 7;
var shippingCharges = 100;
var item1Total = itemPrice1 * item1Quantity;
var item2Total = itemPrice2 * item2Quantity;
var totalCost = item1Total + item2Total + shippingCharges;
document.write("<h1>Q6</h1><h1>Shopping Cart</h1>Price of item 1 is"," ",itemPrice1);
document.write("<br>Quantity of item 1 is"," ",item1Quantity);
document.write("<br>Price of item 2 is"," ",itemPrice2);
document.write("<br>Quantity of item 2 is"," ",item2Quantity);
document.write("<br>Shipping Charges"," ",shippingCharges);
document.write("<br><br>Total cost of your order is"," ",totalCost);

//QUESTION 7

var totalMarks = 980;
var marksObtained = 804;
var percentage = (marksObtained/totalMarks)*100;
document.write("<h1>Q7</h1><h1>Mark Sheet</h1>");
document.write("Total Marks:" , " " , totalMarks);
document.write("<br>Marks Obtained:" , " " , marksObtained);
document.write("<br>Percentage:" , " " , percentage,"%");

//QUESTION 8

var usDollars = 10; 
var saudiRiyals = 25; 
var usdToPkr = 104.80;
var sarToPkr = 28;
var totalInPkr = (usDollars*usdToPkr)+(saudiRiyals*sarToPkr);
document.write("<h1>Q8</h1><br>Total currency in PKR:"," ",totalInPkr);

//QUESTION 9

var number = 10;
var result = number + 5 * 10 / 2;
document.write("<h1>Q9</h1><br>Question 9 answer is:"," ",result);

//QUESTION 10

var currentYear = 2016;
var birthYear = 1992; 
var age = currentYear - birthYear;
document.write("<h1>Q10</h1><br>");
document.write("Current Year:",currentYear,"<br>","Birth Year:",birthYear,"<br>","Your age is:",age);

//QUESTION 11

var radius = 20;
var pi = 3.142;
var circumference = 2 * pi * radius;
var area = pi * radius * radius;
document.write("<h1>Q11</h1><br>");
document.write("Radius of a Circle:", radius);
document.write("<br>The Circumference is:", circumference);
document.write("<br>The area is:", area);

//QUESTION 12
var favSnack = "chocolate Chip"
var currentAge = 15;
var maxAge = 65;
var estimate = 3;
var yearsLeft = maxAge - currentAge;
var totalSnacksNeeded = yearsLeft * 365 * estimate;
document.write("<h1>Q12</h1>Favourite Snack:", favSnack);
document.write("<br>current age:", currentAge);
document.write("<br>Estimate Max Age:" , maxAge);
document.write("<br>amount of snacks per day:", estimate);
document.write("<br>You will need"," ",totalSnacksNeeded," ",favSnack," ","to last you until the ripe old age of"," ",maxAge);



//                                           CHAPTER 6

document.write("<br><br><br><br><center><h1>CHAPTER 6 to 9</h1></center>");

//Question 1
var x = +1;
document.write("<br><h1>Q1</h1>x=x+1");

//Question 2
var q = 100;
--q;
document.write("<br><h1>Q2</h1>",q);

//Question 3
var w = 50;
var y = w++;
document.write("<br><h1>Q3</h1>",y);

//Question 4
var e = 50;
var z = --e
document.write("<br><h1>Q4</h1>",z);

//Question 5
var numb = 2;
var newNum = numb--; 
document.write("<br><h1>Q5</h1>", numb);

//Question 6
var var1 = 10;
var newVar = var1++, originalVar = var1 - 1;
document.write("<br><h1>Q6</h1>Answer in app.js");

//Question 7
var nuM = 10;  
nuM++;          
alert(nuM); 
document.write("<br><h1>Q7</h1>Answer in app.js");

//Question 8
var a = 10;
document.write("<h1>Q8</h1>The value of a is: " , a , "<br><br>");

document.write("The value of ++a is: " , (++a) , "<br>");
document.write("Now the value of a is: " , a , "<br><br>");

document.write("The value of a++ is: " , (a++) , "<br>");
document.write("Now the value of a is: " , a , "<br><br>");

document.write("The value of --a is: " , (--a) , "<br>");
document.write("Now the value of a is: " , a , "<br><br>");

document.write("The value of a-- is: " , (a--) , "<br>");
document.write("Now the value of a is: " , a , "<br>");


//Question 9
var t = 2, u = 1;
var result = --t - --u + ++u + u--;
document.write("<h1>Q9</h1>a is"," ",t);
document.write("<br>b is"," ",u);
document.write("<br>Result is"," ",result);

//Question 10
document.write("<h1>Q10</h1>");
var userName = prompt("Enter your name:");
document.write("<h2>Hello, " + userName + "! Welcome!</h2>");

//Question 11
var number5 = prompt("Enter a number for multiplication table:", "5");
document.write("<h1>Q11,</h1>");
document.write("<h2>Multiplication Table of " + number5 + "</h2>");

//Question 12
var subject1 = prompt("Enter your First subject name:");
var subject2 = prompt("Enter your Second subject name:");
var subject3 = prompt("Enter your Third subject name:");
var totalMarks = 100;
var marks1 = +prompt("Enter your Obtained Marks for " + subject1);
var marks2 = +prompt("Enter your Obtained Marks for " + subject2);
var marks3 = +prompt("Enter your Obtained Marks for " + subject3);
var totalObtained = marks1 + marks2 + marks3
var percentage = (totalObtained/(totalMarks * 3)*100)
document.write("<h1>Q12,</h1>");
document.write("<table  cellspacing='0' cellpadding='8'>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>")
document.write("<tr><td>",subject1,"</td><td>",totalMarks,"</td><td>",marks1,"</td><td>",((marks1 / totalMarks) * 100),"%</td></tr>")
document.write("<tr><td>",subject2,"</td><td>",totalMarks,"</td><td>",marks2,"</td><td>",((marks2 / totalMarks) * 100),"%</td></tr>")
document.write("<tr><td>",subject3,"</td><td>",totalMarks,"</td><td>",marks3,"</td><td>",((marks3 / totalMarks) * 100),"%</td></tr>")
document.write("<tr><th>Total</th><th>",(totalMarks*3),"</th><th>",totalObtained,"</th><th>",percentage,"</th></tr>")
document.write("</table>");

//Question 13
var calculatedNum = 2 + (2 * 6);
document.write("<h1>Q11</h1>",calculatedNum);

//Question 14
var calculatedNum = (2 + 2) * (4 + 2);
document.write("<h1>Q12</h1>",calculatedNum);

//Question 15
var calculatedNum = ((2 + 2) * 4) + 2;
document.write("<h1>Q13</h1>",calculatedNum);

//Question 16
var cost = (2 + 2) * (4 + 10);
document.write("<h1>Q14</h1>", cost);

//Question 17
var unit = 2 + (2 * 4) + 10;
document.write("<h1>Q15</h1>", unit);

//Question 18
var pressure = 4 / (2 * 4) + 4;
document.write("<h1>Q16</h1>", pressure);

//Question 16
var num = "2" + "2";
document.write("<h1>Q17</h1>", num);

//Question 17

var message =("Hello" + "dolly");
document.write("<h1>Q18</h1>", message);

//Question 18

var message = "33" + 3;
alert(message);


//Question 19

var firstName = prompt("Enter your name")
document.write("<h1>Q19</h1>", firstName);

//Question 20 statement corrected

var yourName = prompt("Enter Your Name");
document.write("<h1>Q20</h1>", "check app.js");

//Question 21

var userInput = prompt("Enter your name:", "John Doe");

//Question 22

var message = "What is your favorite color?";
var defaultResponse = "Blue";
var userResponse = prompt(message, defaultResponse);

document.write("<h1>Q21</h1>You chose: " + userResponse);

//Question 23

var userResponse = prompt("What is your favorite food?", "Pizza");
alert("You entered: " + userResponse);












