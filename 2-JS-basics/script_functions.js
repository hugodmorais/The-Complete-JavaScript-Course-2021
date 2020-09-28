/*************************************
 * Functions
 */

 function calculateAge(birthYear) {
    return 2018 - birthYear;
 }

 calculateAge(1990);
 console.log(calculateAge(1990))


 function yearUntilRetirement(year, firstName) {
   var age = calculateAge(year);
   var retirement = 65 - age;
   console.log(firstName + ' retires in ' + retirement + ' years.');
 }

 yearUntilRetirement(1985, 'Hugo');

 /******************************************************
*  Function Statements and Expressions
*/

// Function declaration
// function whawhatDoYouDo {}

var whatDoYouDo = function(job, firstName) {
  switch(job) {
    case 'teacher':
      return firstName + ' teaches kids how to code.';
    case 'driver':
      return firstName + ' drives a cab in Lisbon.';
    case 'designer':
      return firstName + ' designs beautiful websites';
    default:
      return firstName + ' does something else';
  }
}

whatDoYouDo('teacher', 'John');
 