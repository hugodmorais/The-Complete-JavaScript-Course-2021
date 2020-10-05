///////////////////////////////////////
// Lecture: Hoisting

calculateAge(1999); // work

function calculateAge(year) {
    console.log(2016 - year);
}

calculateAge(1999);

// retirement(1990); // do not work because it is a var

var retirement = function(year) {
    console.log(65 - (2016 - year));
}

retirement(1990);

//variables

function foo() {
    var age = 65;
    console.log(age);
}
foo();

///////////////////////////////////////
// Lecture: Scoping

var a = 'Hello';
first();

function first() {
    var b = 'Hi';
    ScriptProcessorNode();
    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}


// First scoping example


var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}


// Example to show the differece between execution stack and scope chain


var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + d);
}

///////////////////////////////////////
// Lecture: The this keyword

console.log(this)

calculateAge(1985);

function calculateAge(year) {
    console.log(2016 - year);
    console.log(this);
}

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);
        console.log(2020 - this.yearOfBirth);
        // function innerFunction() {
        //     console.log(this);
        // }
        // innerFunction();
    }
}

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};

mike.calculateAge = john.calculateAge;
mike.calculateAge();
