
// // intro to JS 

// console.log('Hello world!');
// console.log('10' + 1);
// console.log('10' - 1);

// // String literals in JS  

// console.log('Vaman');
// console.log("Vaman");
// console.log(`Vaman`); // this 

// // Datatypes in JS 

// // number, string, boolean 
// // array, object, class-object, function  

// variable declaration in JS 

// java 
// int num = 10;
// JS 

// num = 10; // don't use this 
// var num2 = 20; // don't use this 

// const num4 = 40; // use this for constants (like final in java)
// let num3 = 30;  // use this  for other variables 

// console.log(num);
// console.log(num2);
// console.log(num3);
// console.log(num4);

// JS - check the datatypes 

// let a = 10;
// let b = `abc`;
// let c = false;

// console.log(a);
// console.log(typeof(a));
// console.log(b);
// console.log(typeof(b));
// console.log(c);
// console.log(typeof(c));


// // const vs let 

// let a = 10;
// const b = 20;
// console.log(a);
// console.log(b);
// a = 15;
// b = 25;
// console.log(a);
// console.log(b);

// JS - dynamically typed language 

// let someVariable = 10;
// console.log(someVariable);
// console.log(typeof(someVariable));
// someVariable = 20;
// console.log(someVariable);
// console.log(typeof(someVariable));
// someVariable = `abc`;
// console.log(someVariable);
// console.log(typeof(someVariable));
// someVariable = false;
// console.log(someVariable);
// console.log(typeof(someVariable));

// variables are like containers 

// null and undefined and NaN 


// // 
// let isMarried = true; // false // null

// // let a = null;

// let a;
// let b = 20;

// // console.log(a);
// // console.log(typeof(a));

// console.log(a + b);

// // falsy = false, 0, null, undefined, ``
// // truthy = remaining  

// let someInputValue = 0;

// if (someInputValue) {
//     console.log(`value is entered.`);
// }
// else {
//     console.log("value is not entered.")
// }


// reference datatypes in JS 

// arrays 

let myList = [10, 10.5, `abc`, false, null];
// console.log(myList);

// for (let item of myList) {
//     console.log(item);
// }
// console.log(`access a specific element:`)
// console.log(myList[2]);
// console.log(myList[5]);
// myList[5] = 25;
// console.log(myList[5]);

// objects 

let empData = {
    eid: 101,
    firstName: `Sonu`,
    salary: 10.5,
    isMarried: false,
    spouseName: null,
    phones: [9876543210, 8532178965],
    address: {
        city: `Hyderabad`,
        street: 'Bank street',
        pin: 500001
    }
};

// console.log(`Employee data:`);
// console.log(empData);
// console.log(`specific property`)
// console.log(empData.address.city);
// console.log(empData.phones[1]);


// console.log(`Using object properties:`);
// const data1 = "This employee's name is " + empData.firstName + " and their salarey is " + empData.salary + ".";
// const data2 = `This employee's name is ${empData.firstName} and their salarey is ${empData.salary}.`;
// console.log(data1);
// console.log(data2);
// console.log(typeof(data1));
// console.log(typeof(data2));

// functions in JS 


console.log(`Start`);

function fun() {
    console.log(`fun function invoked.`);
}
fun();

const fun2 = () => {
    console.log(`fun2 function invoked.`);
}

fun2();

console.log(`End`);


// day 2

