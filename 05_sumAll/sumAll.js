const sumAll = function (firstNumber, secondNumber) {
    sum = 0;

    if (Number.isInteger(firstNumber) && Number.isInteger(secondNumber)) {

        if (firstNumber < 0 || secondNumber < 0) {
            return "ERROR";
        }

        if (firstNumber < secondNumber) {

            for (i = firstNumber; i <= secondNumber; i++) {
                sum += i;
            }

        }

        if (secondNumber < firstNumber) {

            for (i = secondNumber; i <= firstNumber; i++) {
                sum += i;
            }

        }

        return sum;

    }
    return "ERROR";



};

// Do not edit below this line
module.exports = sumAll;
