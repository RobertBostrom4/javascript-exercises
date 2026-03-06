const contains = function(obj, n) {

    let result = false;

    function helper(obj, n) {
        for (let [key, value] of Object.entries(obj)) {

 if (value === n) {
                result = true;
                break;
            }

            if (typeof value !== 'object' || value === null || Number.isNaN(value)) {

                if (value === n || (Number.isNaN(n) && Number.isNaN(value))) {
                    result = true;
                    break;
                }

            } else {

                // Recursive call: if the value is an object (or array), call the function again
                helper(value, n);
            }

        }
    }

    helper(obj, n);
    return result;

}

  
// Do not edit below this line
module.exports = contains;
