function countFrequencies(arr) {
    const frequencyMap = {};

    // Iterate through each element in the array
    arr.forEach(num => {
        // If the element is already in the map, increment its count
        if (frequencyMap[num]) {
            frequencyMap[num]++;
        } else {
            // Otherwise, add the element to the map with a count of 1
            frequencyMap[num] = 1;
        }
    });

    return frequencyMap;
}

// Example usage:
const arr = [1, 2, 2, 3,3,3 ,4, 4, 4, 4];
const frequencies = countFrequencies(arr);
console.log(frequencies);
// Output: { '1': 1, '2': 2, '3': 1, '4': 3, '5': 1 }
