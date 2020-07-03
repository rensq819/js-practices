/*****************************
* Variables and data types
*/

/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

// Variable naming rules
var _3years = 3; // var name can start with _ or $, but not number
var johnMark = 'John and MArk'; // var name cannot have '/'
var if = 23; // error: cannot use js reserved as var name
*/


/*****************************
* Variables mutation and type coercion
*/

/*
var firstName = 'John';
var age = 28;

// Type coercion
// age is logged as string together with firstName, becasue of type coercion (js automatically converts one type to another)
console.log(firstName + ' ' + age);

// define multiple vars here and assign values later
var job, isMarried;
job = 'teacher';
isMarried = false;

// boolean is logged as string as well due to type coercion, so does undefined
console.log(`${firstName} is a ${age} year old ${job}. Is he married? ${isMarried}.`)

// Variable Mutation
age = 'twenty eight';
job = 'driver';

alert(`${firstName} is a ${age} year old ${job}. Is he married? ${isMarried}.`)

var lastName = prompt('What is his last name?');

console.log('Last name is: ',lastName);
*/


/*****************************
 * Basic operators
 */

/*
var curYear, ageJohn, ageMark, yearJohn, yearMark;
curYear = 2020;
ageJohn = 28;
ageMark = 33;

// Math operators
yearJohn = curYear - ageJohn;
yearMark = curYear - ageMark;

console.log(yearJohn, yearMark);

console.log(curYear + 2);

// Logical operators
var johnOlder = ageJohn > ageMark;
console.log('is John older than Mark? ' + johnOlder);

// typeof operator
console.log(typeof curYear); // expect number
console.log(typeof johnOlder); // expect boolean

var x;
console.log(typeof x); // expect undefined
*/


/*****************************
 * Operator precedence
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
 */

/*
var now = 2020;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators: both math and logical operator
var isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var avg = (ageJohn + ageMark) / 2;
console.log(avg);

// Multiple assignments
var x, y;
x = y =  (3 + 5) * 4 - 6; // 26
console.log(x, y);

// More operators
x *= 2; // x = x * 2;
console.log(x);

x += 10;
console.log(x);

x++; // increment (add 1 to the original value, different from ++x in loop)
console.log(x);
 */


/*****************************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true").

GOOD LUCK 😀
*/

/*
// BMI = mass / height^2 = mass / (height * height)
var weightMark, weightJohn, heightMark, heightJohn;
weightMark = 78;
weightJohn = 1.69;

heightMark = 92;
heightJohn = 1.95;

var bmiMark = weightMark / (heightMark * heightMark);
var bmiJohn = weightJohn / (heightJohn * heightJohn);
console.log(`Mark's BMI: ${bmiMark}     John's BMI: ${bmiJohn}`);

var markHigher = bmiMark > bmiJohn;

console.log(`Is Mark's BMI higher than John's? ${markHigher}`);
*/


/*****************************
* If else statments
* edit: using if/else shorthand instead
*/

/*
var firstName = 'John';
var civilStatus = 'Single'; // 'Married'

console.log(`John is ${civilStatus === 'Married' ? '': 'not '}married.`)
*/


/*****************************
* Boolean logic
* edit: using switch instead of if/else
*/

/*
var firstName = 'John';
var age = 22;

switch (true) { // use logical operator with switch, NOT THE BEST PRACTISE, suggest sticking with if/else
    case (age < 13):
        console.log(firstName + 'is a boy');
        break;
    case (age >= 13 && age < 20):
        console.log(firstName + 'is a teen');
        break;
    case (age >= 20):
        console.log(firstName + 'is an adult');
        break;
}
*/


/*****************************
* The tenary operator and switch statements
*/

// var firstName = 'John';
// var age = 16;

// // Tenary operator: {condition ? if : else}
// age >= 18 ? console.log(firstName + ' drinks beer') : console.log(firstName + ' drinks juice');

// var drink = age >= 18 ? 'beer' : 'juice';


// // Switch Statement
// var job = 'cop';
// switch (job) {
//     case 'teacher':
//         console.log(firstName + ' teaches kids how to code.');
//         break;
//     case 'driver':
//         console.log(firstName + ' drivers an uber in Lisbon.');
//         break;
//     default:
//         console.log(firstName + ' does something else.')
// }


/*****************************
* Truthy and Falsy values and equality operators
*/
/*
var height;

height = 23; // 0 is false in if

if (height || height === 0) {
    console.log('Variable is defined')
} else {
    console.log('Variable is undefined')
}

// Equality operators
if (height == '23') { // js will convert '23' to number 23
    console.log('The == operator does type coercion')
} else if(height === '23'){
    console.log('The === operator doesnt do type coercion')
}
*/


/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/
/*
var scoreJohn = (189 + 120 + 103) / 3;
var scoreMike = (129 + 94 + 123) / 3;
var scoreMary = (97 + 134 + 105) / 3;
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


if (scoreJohn > scoreMike) {
    console.log('John\'s team wins with ' + scoreJohn + ' points');
} else if (scoreMike > scoreJohn) {
    console.log('Mike\'s team wins with ' + scoreMike + ' points');
} else {
    console.log('There is a draw');
}
*/


/*****************************
* Function, Function Statements and Expressions
*/
/*
// function declaration/statement
function calculateAge(birthYear) {
    return 2020 - birthYear;
}
console.log(calculateAge(1994))

// Function declaration/statement
// DOES NOT RETURN A VALUE IMMEDIATELY 
// function whatDoYouDo(job, firstName) {}

// function expression
// RETURN A VALUE IMMEDIATELY 
var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' drives a cab in Lisbon.'
        case 'designer':
            return firstName + ' designs beautiful websites';
        default:
            return firstName + ' does something else';
    }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));
*/


/*****************************
* Arrays
*/
/*
// Initialize new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
console.log(names.length);

// Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

// Different data types
var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue'); // insert from tail
john.unshift('Mr.'); // insert from head
console.log(john);

john.pop(); // remove from tail 
john.shift(); // remove from head
console.log(john);

console.log(john.indexOf(23));

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);
*/


/*****************************
* CODING CHALLENGE 3
*/

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

*/
/*
function tipCalculator(bill) {
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
var tips = bills.map(bill => tipCalculator(bill));

var finalValues = bills.map((bill, index) => bill + tips[index]);

console.log(tips, finalValues);
*/


/*****************************
* Objects and properties
*/
/*
// Object literal
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};

console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

// new Object syntax
var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);
*/


/*****************************
* Objects and methods
*/
/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1992,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        this.age = new Date().getFullYear() - this.birthYear;
    }
};

john.calcAge();
console.log(john);
*/


/*****************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
*/
/*
var john = {
    fullName: 'John Smith',
    mass: 110,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

var mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

if (john.calcBMI() > mark.calcBMI()) {
    console.log(john.fullName + ' has a higher BMI of ' + john.bmi);
} else if (mark.bmi > john.bmi) {
    console.log(mark.fullName + ' has a higher BMI of ' + mark.bmi);
} else {
    console.log('They have the same BMI');
}
*/


/*****************************
* Loops and iteration
*/

/*
// for loop
for (var i = 1; i <= 20; i += 2) {
    console.log(i);
}

// i = 0, 0 < 10 true, log i to console, i++
// i = 1, 1 < 10 true, log i to the console, i++
//...
// i = 9, 9 < 10 true, log i to the console, i++
// i = 10, 10 < 10 FALSE, exit the loop!


var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for (var i = 0; i < john.length; i++) {
    console.log(john[i]);
}

// While loop
var i = 0;
while(i < john.length) {
    console.log(john[i]);
    i++;
}


// continue and break statements
var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') continue;
    console.log('-----',john[i]);
}

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') break;
    console.log('+++++',john[i]);
}

// Looping backwards
for (var i = john.length - 1; i >= 0; i--) {
    console.log(john[i]);
}
*/





