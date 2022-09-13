
let smallLarge = () => {

    let num = 24;
    let evenList = [];
    let oddList = [];

    while (num > 0) {
        let rem = num % 10;
        if (rem % 2 === 0)
            evenList.push(rem);
        else
            oddList.push(rem);
        num--;
    }
    console.log(evenList);
    console.log(oddList);

    let finalEvenList = [...new Set(evenList)];
    let finalOddList = [...new Set(oddList)];
    console.log(finalEvenList);
    console.log(finalOddList);

}

smallLarge();