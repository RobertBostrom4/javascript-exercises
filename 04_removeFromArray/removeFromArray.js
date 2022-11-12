const removeFromArray = function (array, ...removedItems) {

    for (const item of removedItems) {

        if (array.includes(item)) {
            array.splice(array.indexOf(item), 1);
        }

    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
