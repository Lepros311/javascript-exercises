const repeatString = function(str, times) {
    let result_string = '';
    if (times < 0) {
        return 'ERROR';
    }
    else {
        for (let i = 0; i < times; i++) {
            result_string+=str;
        }
    }
    return result_string;
};

// Do not edit below this line
module.exports = repeatString;
