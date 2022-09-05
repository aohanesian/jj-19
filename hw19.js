`use strict`;

const arr = [1, 2, 3, -1, -2, -3];
let index = 0;

function foo(inArr) {
    const exampleArr = [];
    if (inArr.length === 0) {
        errorText = `Array is empty`;
        throw errorText;
    }
    for (index = 0; index < inArr.length; ++index) {
        if (inArr[index] > 0) {
            currentPositiveNumber = inArr[index];
            exampleArr.push(currentPositiveNumber);
        }
    }
    if (exampleArr.length > 0) {
        console.log(exampleArr);
    } else {
        console.log(null);
        return null;
    }
}

foo(arr);