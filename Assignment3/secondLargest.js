function findSecondLargest(arr) {
    if (arr.length < 2) {
        throw new Error("Array must contain at least two elements");
    }

    let first = -Infinity;
    let second = -Infinity;

    arr.forEach(num => {
        if (num > first) {
            second = first;
            first = num;
        } else if (num > second && num !== first) {
            second = num;
        }
    });

    if (second === -Infinity) {
        throw new Error("No second largest element found");
    }

    return second;
}


const arr = [12,35,1,10,34,1];
const secondLargest = findSecondLargest(arr);
console.log(secondLargest); 
