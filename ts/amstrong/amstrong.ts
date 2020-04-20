function armstrongNumbers(num){
    let numToString = String(num);

    let squares = Array.from(numToString).map(digit => Math.pow(Number(digit), numToString.length));

    let sum = 0;

    squares.forEach(square => sum+=square);

    Number(sum) === num ? console.log(num, 'is an armstrong Number') : console.log(num, 'is not an armstrong number');
};

armstrongNumbers(9);