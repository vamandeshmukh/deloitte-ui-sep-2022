// node script3.js 

// setTimeout( arg1 ,  arg2);
// setTimeout( () => {},  ms);


// Using callbacks in JS 

// console.log(`One`);

// setTimeout(() => {
//     console.log('Two');
// }, 2000);

// console.log("Three");


// console.log(`One`);

// const fun = (callBack) => {
//     setTimeout(() => {
//         console.log('Two');
//         callBack(`Three`); // function call 
//     }, 2000);
// };

// fun((arg) => {
//     console.log(arg);
// });

// // same as above, but shorter 
// // fun(arg => console.log(arg));



// console.log(this);



let employeeData = {
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



// for (a in employeeData)
//     console.log(a);

// for (a of employeeData)
//     console.log(a);

// const keysArray = Object.keys(employeeData);
// console.log(keysArray);

// const valuesArray = Object.values(employeeData);
// console.log(valuesArray);


// Object.values(employeeData).forEach((e) => {console.log(e)});

// date class 

const today = new Date();

console.log(today);

console.log(today.getMilliseconds());

