// node script3.js 

// setTimeout( arg1 ,  arg2);
// setTimeout( () => {},  ms);


// Using callbacks in JS 

// console.log(`One`);

// setTimeout(() => {
//     console.log('Two');
// }, 2000);

// console.log("Three");


console.log(`One`);

const fun = (callBack) => {
    setTimeout(() => {
        console.log('Two');
        callBack(`Three`); // function call 
    }, 2000);
};

fun((arg) => {
    console.log(arg);
});

// same as above, but shorter 
// fun(arg => console.log(arg));

// console.log("Three");
