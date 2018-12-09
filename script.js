var firstName = 'Rick';
console.log(firstName);

var lastName = 'Hubbard';
var age= 26;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'teacher';
console.log(job);

var firstName = 'Rick';
var age = 26;

console.log(firstName + ' ' + age);

var yearJohn= 2018 - 26;
console.log(yearJohn);

var yearRick= 1992 + 26;
console.log(yearRick);

now = 2018;

var massMark = 175;
var heightMark = 63;

var massJohn = 181;
var heightJohn = 66;

var bmiMark = massMark / (heightMark * heightMark);

var bmiJohn = massJohn / (heightJohn * heightJohn);

var markHigherBMI = bmiMark > bmiJohn;
console.log('Is Mark\'s BMI higher than John\'s ' + markHigherBMI);

if (bmiJohn > bmiMark) {
    console.log('Fat boy!');
} else (bmiJohn < bmiMark); {
    console.log('not as fat boy');
}

var firstName = 'John';
var age = 16;

if (age < 13) {
    console.log(firstName + ' is a boy.');
}   else if (age >= 13 && age < 20) { // Between 13 and 20 === age >= 13 AND age < 20
    console.log(firstName + ' is a teenager.');
} else {
    console.log(firstName + ' is a man.');
} //boolean logic!!

age >= 18 ? console.log(firstName + ' drinks beer.')
: console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

/*if (age >= 18) {
    var drink = 'beer';
} else {
    var drink = 'juice';
} */

// Switch statement //
var job = 'teacher';
switch (job) {
    case 'teacher':
    console.log(firstName + ' teaches kids how to code.');
    break;
    case 'driver':
    console.log(firstName + ' drives an uber in New York.');
    break;
    case 'designer': 
    console.log(firstName + ' designs beautiful websites.');
    break;
    default:
    console.log(firstName + ' does something else.');
}

switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a ypoung mane.');
        break;
    default:
        console.log(firstName + ' is a man.');
}

var height = 23;

if (height) {
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
}
// equality operators

if (height == '23') {
    console.log('The == operator does type coercion!');
}

var scoreJohn = (105 + 120 + 103) / 3;
var scoreMike = (129 + 94 + 123) / 3;
var scoreMary = (97 + 155 + 1115) / 3;
console.log(scoreJohn, scoreMike, scoreMary);

if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
    console.log('John\'s team wins with ' + scoreJohn + ' points');
} else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
    console.log('Mike\'s team wins with ' + scoreMike + ' points');
} else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
    console.log('Mary\'s team wins with ' + scoreMary + ' points');
} else {
    console.log('There is a draw');
}

function calculateAge(birthYear) {
    return 2018 - birthYear
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement( year, firstName) {
    var age = calculateAge(year);
    var retirement = 65- age;

    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
    console.log(firstName + ' is already retired.');
    }
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');

/*********
 * Function Statements and Expressions 
 */


//Function declaration
// function whatDoYouDo(job, firstName) {}

 // Function expression
 var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' drives a cab in Dallas.';
        case 'designer':
            return firstName + ' designs beautiful websites.';
        default:
            return firstName + ' does something else.';
    }
 }

 console.log(whatDoYouDo('teacher', 'John'));
 console.log(whatDoYouDo('designer', 'Jane'));
 console.log(whatDoYouDo('retired', 'Mark'));

/***************
 * Arrays
 */


 // Initialize new array
var names = ['John', 'Mark', 'Jane']; //arrays are 0 based; so first name starts as 0,not 1
var years = new Array(1990, 1969, 1948);



console.log(names[2]);
console.log(names.length);

// Mutate array data
names[1] = 'Ben';
names[names.lenght] = 'Mary';
console.log(names);

// Different data types
var john = ['John', 'Smith', 1990, 'teacher', false];

john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(23));

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);

function tipCalc(bill) {
    var percentage;
    if (bill < 50) {
        percentage = .2;
    } else if (bill >= 50 && bill < 200) {
        percentage = .15;
    } else {
        percentage = .1;
    }
    return percentage * bill;
}

var bills = [124, 48, 268];
var tips = [tipCalc(bills[0]),
            tipCalc(bills[1]),
            tipCalc(bills[2])];

var finalValues = [bills[0] + tips[0],
                    bills[1] + tips[1],
                    bills[2] + tips[2]];

console.log(tips, finalValues);