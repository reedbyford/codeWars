// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

function arrayPlusArray(arr1, arr2) {
    let arr1Sum = arr1.reduce((acc,c) => acc + c);
    let arr2Sum = arr2.reduce((acc,c) => acc + c);
    return arr1Sum + arr2Sum;
}

function arrayPlusArray(arr1, arr2) {
    return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
}