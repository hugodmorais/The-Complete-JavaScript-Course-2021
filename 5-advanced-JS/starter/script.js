/////////////////////////////
// Lecture: Function constructor

// var john = {
//     name: 'John',
//     yearOfBirth: 1990,
//     job: 'teacher'
// };

// var Person = function(name, yearOfBirth, job) {
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
// }

// Person.prototype.calculateAge  = function() {
//   console.log(2016 - this.yearOfBirth);
// };

// Person.prototype.lastName = 'Smith';

// var john = new Person('John', 1990, 'teacher');
// var jane = new Person('Jane', 1969, 'designer');
// var mark = new Person('Mark', 1948, 'retired');

// john.calculateAge();
// jane.calculateAge();
// mark.calculateAge();

// console.log(john.lastName);
// console.log(jane.lastName);
// console.log(mark.lastName);


// Object.create
// var personProto = {
//   calculateAge: function() {
//     console.log(2016 - this.yearOfBirth);
//   }
// };

// var john = Object.create(personProto);
// john.name = 'John';
// john.yearOfBirth = 1985;
// john.job = 'teacher';

// var jane = Object.create(personProto, {
//   name: { value: 'Jane' },
//   yearOfBirth: { value: 1985 },
//   job: { value: 'designer' }
// });

// Primitives vs objects

// Primitives
var a = 23;
var b = a;
a = 46;
console.log(a); // 46
console.log(b); // 23

// Objects
var obj1 = {
  name: 'John',
  age: 26
};
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age); // 30
console.log(obj2.age); // 30

// Functions
var age = 27;
var obj = {
  name: 'Jonas',
  city: 'Lisbon'
};

function change(a, b) {
  a = 30;
  b.city = 'San Francisco';
}

change(age, obj);

console.log(age); // 27
console.log(obj.city); // San Francisco


/////////////////////////////////////////////////////////////
// Lecture: Passing functions as arguments

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  return 2016 - el;
}

function isFullAge(el) {
  return el >= 18;
}

function maxHeartRate(el) {
  if (el >= 18 && el <= 81) {
    return Math.round(206.9 - (0.67 * el));
  } else {
    return -1;
  }
  
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages); // [26, 52, 79, 11, 18]
console.log(fullAges); // [true, true, false, true, true]
console.log(rates); // [189, 173, 154, -1, 195]

//////////////////////////////////////////////////////////////
// Lecture: Functions returning functions

function interviewQuestion(job) {
  if (job === 'designer') {
    return function(name) {
      console.log(name + ', can you please explain what UX design is?');
    }
  } else if (job === 'teacher') {
    return function(name) {
      console.log('What subject do you teach, ' + name + '?');
    }
  } else {
    return function(name) {
      console.log('Hello ' + name + ', what do you do?');
    }
  }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('John');
designerQuestion('John');
designerQuestion('Jane');
designerQuestion('Mark');
designerQuestion('Mike');

interviewQuestion('teacher')('Mark');

///////////////////////////////////////////////////////
// Lecture: IIFE

// function game() {
//   var score = Math.random() * 10;
//   console.log(score >= 5);
// };
// game();

(function (goodLuck) {
  var score = Math.random() * 10;
  console.log(score >= 5 - goodLuck);
})(5);


// console.log(score); // score is not defined


/////////////////////////////////////////////////////////
// Lecture: Closures

function retirement(retirementAge) {
  var a = ' years left until retirement.';
  return function(yearOfBirth) {
    var age_hm = 2016 - yearOfBirth;
    console.log((retirementAge - age) + a);
  }
};

var retirementUS = retirement(66);
console.log(age_hm)

var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementGermany(1990); // 39 years left until retirement.
retirementUS(1990); // 40 years left until retirement.
retirementIceland(1990); // 41 years left until retirement.


/*------------------------------------------------------------*/
function interviewQuestion(job) {
  if (job === 'designer') {
    return function(name) {
      console.log(name + ', can you please explain what UX design is?');
    }
  } else if (job === 'teacher') {
    return function(name) {
      console.log('What subject do you teach, ' + name + '?');
    }
  } else {
    return function(name) {
      console.log('Hello ' + name + ', what do you do?');
    }
  }
}

/* ------------------------->>>>> */

function interviewQuestion(job) {
  return function(name) {
    if (job === 'designer') {
      console.log(name + ', can you please explain what UX design is?');
    } else if (job === 'teacher') {
      console.log('What subject do you teach, ' + name + '?');
    } else {
      console.log('Hello ' + name + ', what do you do?');
    }
  }
};

interviewQuestion('teacher')('John'); // What subject do you teach, John?
