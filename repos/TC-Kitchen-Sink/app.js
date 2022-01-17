console.log('Kitchen Sink');

// ### INITIALIZING VARIABLES

let name = 'Nichole';
const numStates = 50;
let hasTerritories = true;

// ### OPERATORS

let num1 = 5;
let num2 = 4;

let sum = num1 + num2;
let isGreater = num1 > num2;
let product = 231 * 4;

// ### COMMENTS
// - Add at least one single line comment

/*
multi
line
comment
*/

// ### FUNCTIONS

function saysHello() {
    alert('Hell0 World!');
}

function checkAge (name, age) {
    if (age < 21) {
        alert(`Sorry ${name}, you aren't old enough to view this page!`);
    }
}

checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);


// ### OBJECTS

let favVegetables = ['Spinach', 'Carrots', 'Potatoes', 'Kale', 'Broccoli'
];
favVegetables.forEach(function (veggie) {
    console.log(veggie);
});

let people = [
    {
        name: "joe",
        age: 27,
    },
    {
        name: "jessica",
        age: 16,
    },
    {
        name: "john",
        age: 33,
    },
    {
        name: "bob",
        age: 24,
    },
    {
        name: "ben",
        age: 47,
    },
];

people.forEach(function (person) {
    checkAge(person.name, person.age);
});

function getLength(phrase) {
    return phrase.length;
}

let result = getLength('Hello World');

if (result % 2 == 0) {
    console.log('The world is nice and even!');
} else {
    console.log('The world is an odd place!');
}