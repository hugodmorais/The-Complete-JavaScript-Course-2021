var firstName = 'John';

var lastName = 'Smith';
var age = 28;
console.log(firstName, lastName); // John Smith

var fullAge = true;
console.log(fullAge); // true

var job;
console.log(job); // undefined

/*******************************************************
 * Basic operators
*/
var year, yearJohn, yeahMark;
now = 2018;
ageJohn = 28;
ageMark = 33;
// Math Operators
yearJohn = year - ageJohn; // 1990
yeahMark = year - ageMark; // 1985

console.log(year + 2); // 2020

// Logical operators
var johnOlder = ageJohn > ageMark;
console.log(johnOlder); // false

// typeof operator
console.log(typeof johnOlder); // boolean
console.log(typeof ageJohn); // number
var x;
console.log(typeof x); // undefined

// Operator precedence

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge); // true

var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average); // 32

// Multiple assignments
var x = y = (3 + 5) * 4 - 6; // 26
console.log(x, y); // 26 26

// More operators
x = x * 2; // 52
x *= 2; // 52

/*****************************************************
 * If / else statements
 */

 var firstName = 'John';
 var civilStatus = 'single';

 if (civilStatus === 'married') {
   console.log(firstName + ' is married');
 } else {
  console.log(firstName + ' is single');
 }

 var isMarried = true;
 if (isMarried) {
   console.log(firstName + ' is married');
  } else {
  console.log(firstName + ' is single');
  }

/******************************************************
 * Boolean Logic
*/

var firstName = 'John';
var age = 16;

if (age < 13) {
  console.log(firstName + ' is a boy.')
} else if (13 > age < 20) {
  console.log(firstName + ' is a teenager.')
} else {
  console.log(firstName + ' is a man.')
}

/*****************************************************
 * The ternary operator
 */

 var firstName = 'John';
 var age = 16;

 age >= 18 ? console.log(firstName + ' drinks bear.') : console.log(firstName + ' drinks juice.')

var drink = age >= 18 ? 'bear' : 'juice';

// Switch statement
var job = 'driver';
switch (job) {
  case 'teacher':
    console.log(firstName + ' teaches kids how to code.');
    break;
  case 'driver':
    console.log(firstName + ' drives an uber in Lisbon.');
    break;
  case 'designer':
    console.log(firstName + ' designs beautiful websites.');
    break;
  default:
    console.log(firstName + ' does something else.');
}
