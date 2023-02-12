module.exports = function reverse (n) {
    
    const arrReverse = n.toString().split('').reverse().join('');
    let rever= parseFloat(arrReverse)
    if (n[0] % 2 === 0) {
        return rever * (-1);
    }
    return rever;
}
