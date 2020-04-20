export default class ArmstrongNumbers {

    isArmstrongNumber(num: number): boolean {
        let numToString = String(num);

        let squares = Array.from(numToString).map(digit => Math.pow(Number(digit), numToString.length));

        let sum = Number(0);

        squares.forEach(square => sum += square);

        return (Number(sum) === num);
    };
};
