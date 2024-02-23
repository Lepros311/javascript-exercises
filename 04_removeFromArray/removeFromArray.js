const removeFromArray = function(arr, ...args) {
    const new_arr = arr.filter(function (value) {
        return !args.includes(value);
    })
    return new_arr;
}

// Do not edit below this line
module.exports = removeFromArray;
