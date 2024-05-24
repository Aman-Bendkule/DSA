function intersection(arr1, arr2) {
    const set1 = new Set(arr1);
    const resultSet = new Set();
    
    arr2.forEach(element => {
        if (set1.has(element)) {
            resultSet.add(element);
        }
    });

    return Array.from(resultSet);
}

const array1 = [1, 2, 2,,1];
const array2 = [2, 2];
const result = intersection(array1, array2);
console.log(result); 
