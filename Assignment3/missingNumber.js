function findMissingNumber(arr, n) {
    const expectedSum = n * (n + 1) / 2;
    
    const actualSum = arr.reduce((sum, num) => sum + num, 0);
    
    return expectedSum - actualSum;
}

const arr = [1, 2, 4, 6, 3, 7, 8]; 
const n = 8;
const missingNumber = findMissingNumber(arr, n);
console.log(missingNumber); 
