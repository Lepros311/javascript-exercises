const sumAll = function(start, stop) {
    if ((start < 0) || (start < 0)) return 'ERROR';
    if ((!Number.isInteger(start)) || (!Number.isInteger(stop))) return 'ERROR';
    if (start > stop) {
        let temp = stop;
        stop = start;
        start = temp;
    }
    let arr = [start];
    for (let i = 0; i < stop - 1; i++) {
        arr.push(arr[i]+1);
    }    
    let sum = 0;
    arr.forEach(function (num) {
        sum += num;
    })
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
