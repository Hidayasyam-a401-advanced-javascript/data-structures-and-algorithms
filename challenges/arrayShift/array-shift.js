'use straict'

function insertShiftArray(arr, value) {

    let mid = Math.ceil((arr.length - 1) / 2)
    let output = [];
    for (let i = 0; i < arr.length; i++) {
        if (i === mid)
            output[i] = value
        else
            output[i] = arr[i]

    }
    return output;
}

let arr = [1, 2, 3, 8, 9, 7, 2, 8, 9, 11]
console.log(insertShiftArray(arr, 7))

