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


