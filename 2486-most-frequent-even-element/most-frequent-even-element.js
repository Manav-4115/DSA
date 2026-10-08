/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function (nums) {
    let map = new Map()
    for (let num of nums) {
        if (num % 2 == 0) {
            map.set(num, (map.get(num) || 0) + 1)
        }
    }
    let ans = -1
    let freq = 0
    for (let key of map.keys()) {
        if (freq < map.get(key)) {
            freq = map.get(key)
            ans = key
        }
        else if (freq == map.get(key)) {
            ans = Math.min(ans, key)
        }
    }
    return ans
};