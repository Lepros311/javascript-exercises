const palindromes = function (str) {
    str = str.split('').filter(function(char) {
        return /[A-Za-z0-9]/.test(char);
    });
    str = str.join('').toLowerCase();
    reversed_str = str.split('').reverse().join('');
    return reversed_str === str;
};

// Do not edit below this line
module.exports = palindromes;
