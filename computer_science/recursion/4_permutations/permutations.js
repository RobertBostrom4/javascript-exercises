const permutations = function(arr) {


    let permutations = [];
    let permutation = [];

    if (arr.size == 0) {
        permutations.push(permutation);
        return permutations;
    }

    if (arr.size == 1) {
        permutation.push(arr);
        permutations.push(permutation);
        return permutations;
    }
    const helper = (arr) => {

        let randomItem = selectRandomItem(arr);

        if (permutations.length === factorial(arr.length)) {
            return permutations;
        }

        if (permutation.length === arr.length) {

            let match = false;
            permutations.forEach((element) => {
                if (compareArrays(element, permutation)) {
                    match = true;
                    permutation = [];
                    return helper(arr);
                }
            });

            if (!match) {
                permutations.push(permutation);
            }
        }

        if (!permutation.includes(randomItem)) {
            permutation.push(randomItem);
        }

        return helper(arr);

    }


    return helper(arr);

};

const compareArrays = (arr1, arr2) => {
    return arr1.toString() === arr2.toString();
}

const selectRandomItem = (arr) => {

    return arr[Math.floor(Math.random() * (arr.length - 0) + 0)];
}

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
module.exports = permutations;
