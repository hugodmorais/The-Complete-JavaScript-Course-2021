console.log("Challenge");

function bmi(mass, height) {
  return mass / (height * height);
}

var massMark, massJohn, heightMark, heightJohn;
var bmiMark, bmiJohn, bmiResult;

massMark = 85;
massJohn = 80;

heightMark = 1.85;
heightJohn = 1.65;

bmiMark = bmi(massMark, heightMark);
console.log(bmiMark);

bmiJohn = bmi(massJohn, heightJohn);
console.log(bmiJohn);

bmiResult = bmiMark > bmiJohn;

console.log(`Is Mark's BMI higher than John's? ${bmiResult}`);


