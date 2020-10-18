module.exports = function reverse(n) {
    let result = "";
    if (n >= 0) {
        let str = String(n);
        for (let i = 0; i < str.length; i++) {
            result = str[i] + result;
        }
    } else {
        let str = String(n);
        for (let i = 1; i < str.length; i++) {
            result = str[i] + result;
        }

    }
    return +result
}
