module.exports = function reverse(n) {
    n = Math.abs(n);

    let newArr = [];

    String(n).split('').map(elem => {
        newArr.unshift(elem);
    })

    return newArr.join('');
}

// console.log(module.exports(-123));
