function diffOfSquares(number){
    let squareOfSum = 0;
    let sumOfSquare = 0;
    let sum = 0;
    let difference = 0;

    for(let i=1; i<= number; i++){
        sum += i;
        sumOfSquare += Math.pow(i, 2);
    };

    squareOfSum = Math.pow(sum, 2);

    difference = squareOfSum - sumOfSquare;

    console.log('The difference between the square of sum and the sum of squares is ', difference);

};

diffOfSquares(10);

