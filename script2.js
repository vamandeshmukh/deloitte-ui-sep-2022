
// variable hoisting 


// console.log(num);

// const num = 10;

// console.log(num);

// fun();

// let fun = () => {
//     console.log(`fun function invoked.`);
// }

// fun();

// let a = 5;
// a += 10;
// a = a + 10;



// operators   == and === 

// console.log(1 == true);
// console.log(10 == `10`); // 10 != 10 
// console.log(10 === `10`); // number != string 

// console.log(10 != `10`); // 10 == 10 
// console.log(10 !== `10`); // number == string 

// functions with / without args and return values 


// const fun = (num1, num2) => {
//     console.log(num1 + num2);
// }

// fun(10);
// fun(10, 20);
// fun(10, 20, 30);

// const fun2 = (num1, num2) => {
//     return num1 + num2;
// }

// console.log(fun2(10));
// console.log(fun2(10, 20));
// console.log(fun2(10, 20, 30));

// console.log(fun(10, 20));

// args to functions


// const fun = (arg) => {
//     let a = arg / 10; // needs a number 
//     // let a = `Welcome ${arg}!`; // needs, preferrably a string 
//     console.log(a);
// };

// fun(10); // pass a number 
// fun(`Vaman`); // pass a string 


// const fun = (arg) => {
//     console.log('fun function invoked.');
//     arg();
// };
// fun(???);



const funThatNeedsAnotherFunAsArg = (funPassedAsArgToThisFun) => {
    console.log('funThatNeedsAnotherFunAsArg function invoked.');
    // funPassedAsArgToThisFun();
    funPassedAsArgToThisFun(10);
};

const fun = (abc) => {
    console.log(`fun function invoked. ${abc}`);
}
// someFun(10);
// let num = 11;
// someFun(num);

funThatNeedsAnotherFunAsArg((def) => { console.log(`Anonymous function invoked. ${def} `); });  // like line 85 
funThatNeedsAnotherFunAsArg((a) => console.log(`Anonymous function 2 invoked. ${a}`));  // like line 85 

funThatNeedsAnotherFunAsArg(fun); // like line 87 












