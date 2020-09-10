'use straict'

function insertShiftArray(arr, value) {

    let mid = Math.ceil((arr.length) / 2)
    console.log(mid)
    let output = [];
    for (let i = 0; i <= arr.length; i++) {
        if (i < mid)
            output[i] = arr[i]
        else if (i > mid)
            output[i] = arr[i - 1]
        else
            output[i] = value

    }
    return output;
}
let arr = [1, 2, 3, 8, 9, 7, 2, 8, 9, 11]
console.log(insertShiftArray(arr, 7))

