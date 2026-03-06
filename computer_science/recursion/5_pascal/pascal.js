const pascal = function(n) {


    let result = [];
    const helper = (n, r = 0) => {


        if (r + 1 == n) {
            r = 1;
            result.push(r);
            return result;
        }

        result.push(factorial(n - 1) / (factorial(r) * factorial((n - 1) - r)));
        return helper(n, r + 1);
    }


    return helper(n);
};

const factorial = function(n) {

    if ((Number.isInteger(n) && n >= 0)) {
        if (n == 0) {
            return 1;
        }
        return n * factorial(n - 1);
    }



    return undefined;
};
  
// Do not edit below this line
module.exports = pascal;
