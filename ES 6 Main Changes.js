//var, let, const
//
// var - never use
//const - always
//let when consts doesn't work


var a = 1;
let b = 2;
const c = 3;

if (true) {
    let foo = 1;
    var bar = 2;
}

//for, while, () => {}, {...}

console.log(bar);

//arrow function
//
//arrows are shorter
//return theresult of expression
//point to "this" from outer scope

const count = [1, 2, 3].map(function (element) {
    return element +1;
});


const count_2 = [1, 2, 3].map(element => {
    return element +1;
});

const count_3 = [1, 2, 3].map(element => element +1);

console.log(count);
console.log(count_2);
console.log(count_3);

///symbols

//Unique and immutable primitive value
//May be used as key for object's property
//Help to expose some of the JS internals

const symbol = Symbol('symbol');
console.log(typeof symbol);
console.log(Symbol('symbol') === Symbol('symbol'));

//template literals 
//
//Multiline strings
//Templating

const single = 'I am a string';
const double = 'I am a string';


const multiline = [
    'one',
    'two',
    'three'
].join('\n');

const template = `one
two
three
`;

console.log(multiline);
console.log(template);

const name = "World";
// const greeting = "Hello, " + name + "!";
const greeting = `Hello, ${name}!`;
console.log(greeting);

