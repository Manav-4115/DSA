/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
    for (let i = 0; i < image.length; i++) {
        let arr = image[i]
        let k = 0;
        let j = image.length - 1
        while (k < j) {
            let temp = arr[k]
            arr[k] = arr[j]
            arr[j] = temp
            k++
            j--
        }
    }
    for (let i = 0; i < image.length; i++) {
        for (let j = 0; j < image[i].length; j++) {
            if (image[i][j] == 1) {
                image[i][j] = 0
            } else {
                image[i][j] = 1
            }

        }
    }
    return image
};