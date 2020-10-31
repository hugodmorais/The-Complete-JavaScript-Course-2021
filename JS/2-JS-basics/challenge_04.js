var mark = {
  firstName: 'Mark',
  massMark: 85,
  heightMark: 1.85,
  calcBmi: function() {
    this.bmi = this.massMark / (this.heightMark * this.heightMark);
    return this.bmi;
  }
};

var john = {
  firstName: 'John',
  massJohn: 80,
  heightJohn: 1.65,
  calcBmi: function() {
    this.bmi = this.massJohn / (this.heightJohn * this.heightJohn);
    return this.bmi;
  }
};

mark.calcBmi();
john.calcBmi();

console.log(mark.bmi);
console.log(john.bmi);