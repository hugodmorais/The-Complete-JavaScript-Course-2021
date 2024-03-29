/*******************************************
* Objects and properties 
*/

var john = {
  firstName: 'John',
  lastName: 'Smith',
  birthYear: 1990,
  family: ['Jane', 'Mark', 'Emily'],
  job: 'teacher',
  isMarried: false
};
console.log(john);

// new Object syntax
var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';

console.log(jane)

/******************************************************/

var john = {
  firstName: 'John',
  lastName: 'Smith',
  birthYear: 1990,
  family: ['Jane', 'Mark', 'Emily'],
  job: 'teacher',
  isMarried: false,
  calcAge: function(birthYear) {
    return 2018 - this.birthYear;
  }
};

console.log(john.calcAge(1990));

