// Apr 1
// For this program we want to use a Hashset to check the values in the array, We do that by storing the seen values in the hashset while also checking if the new value is already in the set so that we can confirm that we are storing unique value and not duplicate value. With this we can easily find out if the array has any duplicate values or not.
// We use hashset because it uses O(1) time for data retrieval.

// Time complexity - O(N)
// Space complexity - O(N)

class ContainDuplicate{

    contains_duplicate(nums) {
        
        // Use a Hashset
        const hashset = new Set();

        // Using for loop to iterate through the array(nums)
        for (let i = 0; i < nums.length; i++){

            // Checking if the number is already added into the Hashset
            if (hashset.has(nums[i])) {
                // if yes then we return true because there is a Duplicate value in the array.
                return true;
            }
            // Adding number to the Hashset.
            hashset.add(nums[i]);
        }
        
        return false;
    }
}


let test1_nums = [1,2,3,4,5]
let test1 = new ContainDuplicate
let result1 = test1.contains_duplicate(test1_nums)

let test2_nums = [1, 2, 3, 1, 3]
let test2 = new ContainDuplicate
let result2 = test2.contains_duplicate(test2_nums)

console.log("Result 1", result1); // false
console.log("Result 2", result2); // true