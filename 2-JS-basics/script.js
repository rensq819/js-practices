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










