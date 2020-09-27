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
 