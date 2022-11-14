const fibonacci = function (a) {
    let sequence = [];
    let parsedString = parseInt(a);

    if (parsedString > 0) {

        for (i = 0; i < parsedString; i++) {


            for (j = 1; j < parsedString; j++) {


                let firstNumber = sequence[i - 1];
                let secondNumber = sequence[i - 2];

                if (firstNumber == undefined && secondNumber == undefined) {
                    sequence[i] = j;
                    break;
                }
                if (firstNumber == undefined) {
                    firstNumber = 0;
                }

                if (secondNumber == undefined) {
                    secondNumber = 0;
                }


                sequence[i] = (firstNumber + secondNumber);

            }

        }

        if (sequence[parsedString - 1] == undefined) {
            return parsedString;
        }

        return sequence[parsedString - 1];
    }
    return "OOPS";

};

// Do not edit below this line
module.exports = fibonacci;
