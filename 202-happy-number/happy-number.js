/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    let set = new Set()
    while (n !== 1) {
        if (set.has(n)) {
            return false
        }
        set.add(n)
        let sum = 0
        while (n > 0) {
            let dig = n % 10
            sum += dig* dig
            n = Math.floor(n / 10)
        }
        n = sum
    }
    return true
};