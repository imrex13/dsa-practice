// Apr 4

// This is a medium Problem In this problem We need to get the product of elements of array but the twist is we do not calculate the current element so the brute force method is to use two for loops calculating product while skipping that current index but it would be a O(N^2) solution so we use a solution that is O(N)

// First we calculate Prefix product and then multiply the array while doing Suffix product of the array but the twist is the first value is 1 for both prefix and suffix. this makes the product to go one step ahead than the actual index so when we do the suffix product we will be  multiplying the before and after values of that current index and storing it in the current index which means we can get the product of array without producting the current value.

// Time Complexity : O(N)
// Space Complexity : O(1) because Result array doesnt count.


class Product_Array_without_self{

    product_array_without_self(nums){
        
        let prefix = 1;
        let suffix = 1;
        let result = []
        for (let i = 0; i < nums.length; i++){
            result[i] = prefix;
            prefix = prefix * nums[i]
        }

        for (let i = nums.length - 1; i >= 0; i--){
            result[i] *= suffix
            suffix = suffix * nums[i];
        }

        return result
    }
}

// Test 1
let input1 = [1,2,4,6]
let test1 = new Product_Array_without_self
let result1 = test1.product_array_without_self(input1)


let input2 = [-1,0,1,2,3]
let test2 = new Product_Array_without_self
let result2 = test2.product_array_without_self(input2)

console.log(result1); // [48,24,12,8]
console.log(result2); // [0,-6,0,0,0]