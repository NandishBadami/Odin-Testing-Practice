export function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function reverseString(str) {
    return str.split('').reverse().join('');
}

export const calculator = {
    add(a,b) {
        return a+b;
    },
    substract: (a,b) => {
        return a-b;
    },
    divide(a, b) {
        return a/b;
    },
    multiply(a,b) {
        return a*b;
    }
}

export function caesarCipher(str, shift) {
    let list = [];
    for(let i of str) {
        if(i.charCodeAt(0) >= 65 && i.charCodeAt(0) <= 90) {
            let afterShift = i.charCodeAt(0) + shift;
            if(afterShift > 90) afterShift = afterShift- 25 - 1;
            list.push(String.fromCharCode(afterShift));
        }
        else if(i.charCodeAt(0) >= 97 && i.charCodeAt(0) <= 122) {
            let afterShift = i.charCodeAt(0) + shift;
            if(afterShift > 122) afterShift = afterShift - 25 - 1;
            list.push(String.fromCharCode(afterShift));
        }
        else list.push(String.fromCharCode(i.charCodeAt(0)));
    }
    return list.join('');
}

export function analyzeArray(arr) {
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return {
        average: sum/arr.length,
        min: Math.min(...arr),
        max: Math.max(...arr),
        length: arr.length
    }
}