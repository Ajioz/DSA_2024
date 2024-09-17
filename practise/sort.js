function findDuplicatesAndSort(arr) {
  // Find duplicates
  const duplicates = [];
  const seen = new Set();

  for (let num of arr) {
    if (seen.has(num)) {
      duplicates.push(num);
    } else {
      seen.add(num);
    }
  }

  // Sort the array
  arr.sort((a, b) => a - b);

  return {
    sortedArray: arr,
    duplicates: duplicates,
    filtered: seen
  };
}

// Example usage:
const numbers = [3, 5, 2, 3, 7, 2, 8, 1, 5];
const result = findDuplicatesAndSort(numbers);

console.log("Sorted Array:", result.sortedArray);
console.log("Duplicates:", result.duplicates);
console.log("Filtered:", result.filtered);
