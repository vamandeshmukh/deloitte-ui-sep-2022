
// let smallLarge = () => {

//     let num = 24;
//     let evenList = [];
//     let oddList = [];

//     while (num > 0) {
//         let rem = num % 10;
//         if (rem % 2 === 0)
//             evenList.push(rem);
//         else
//             oddList.push(rem);
//         num--;
//     }
//     console.log(evenList);
//     console.log(oddList);

//     let finalEvenList = [...new Set(evenList)];
//     let finalOddList = [...new Set(oddList)];
//     console.log(finalEvenList);
//     console.log(finalOddList);

// }

// smallLarge();




// let mylist = ['Sai', `Pri`, `Lee`, `Wang`, `JK`, `Demon`,
//     {
//         ADDRESS: { city: 'Chennai', state: 'Tamil Nadu', outsideTN: false },
//         ADDRESS1: { city: 'Banglore', state: 'Karnataka', outsideTN: true }
//     },
//     "Stefan"];

// let result = mylist.some(function (item, index, array) {
//     console.log(item.ADDRESS);
//     return item.ADDRESS;
// });

// console.log(result);


let myArray = [10, 12, 8, 15, 18, 22, 9, 31, 25];
console.log(myArray);

myArray.sort((a, b) => a - b).reverse();
// myArray.sort();
console.log(myArray);

// myArray.reverse();
console.log(myArray);





