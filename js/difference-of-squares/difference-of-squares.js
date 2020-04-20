export class Squares {
    constructor(number){
        this.number = number;
    }

    get sumOfSquares(){
        return this.calcSumOfSquare();
    };

    get squareOfSum(){
        return this.calcSquareOfSum();
    };

    get difference(){
        return (this.calcSquareOfSum() - this.calcSumOfSquare());
    }

    calcSumOfSquare(){
        let sum = 0;
        for(let i=1; i<= this.number; i++){
            sum += Math.pow(i, 2);
        }
        return sum;
    };

    calcSquareOfSum(){
        let sum = 0;
        for(let i=1; i<= this.number; i++){
            sum += i;
        }
        return Math.pow(sum, 2);
    };
};