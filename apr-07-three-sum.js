// APR 7

// This is a medium problem in Two pointer In this problem we have to find and return all the pairs of three numbers which added the result would be 0 for this we have to use two pointer/three pointer where one pointer is static..
// First we have to sort the array for using two pointer and then we check fix one pointer as static (i) and we traverse the array with j and k pointer. when we found the three values that equals to 0 we store the value in a seperate array and check if the next value of the pointer is same if yes that leads to duplicate so we move the pointer to +1. and we increment the left pointer and decrement the right pointer when the next value of the pointer is not equal to the current value, If the values of three is not equal to 0 we check if the resultant is greater than 0 or less than 0, if the resultant is less than 0 we increment the left pointer and if the resultant is greater than 0 we decrement the right pointer. At the end we return the result array.

// Time Complexity - O(N^2)  - We are using two pointer inside a loop so O(N^2) 

// Space Complexity - O(N)



class Three_sum{

    three_sum(nums) {
        

        if (nums.length == 0) return [];

        let i, j, k;
        nums = nums.sort((a, b) => a - b);

        let result = []
        for (i = 0; i < nums.length - 2; i++){
            if (i >0 && nums[i] === nums[i - 1]) continue;

            j = i + 1;
            k = nums.length - 1;
            while (k > j) {
                let value = nums[i] + nums[j] + nums[k];
                if (value === 0) {
                    result.push([nums[i], nums[j], nums[k]]);
                    while (nums[j] === nums[j + 1]) j++;
                    while (nums[k] === nums[k + 1]) k--;
                    j++;
                    k--
                }
                else if (value > 0) {
                    k--
                }
                else {
                    j++;
                }
            }
        }
        return result
    }
}



// Test 1
let input1 = [-1,0,1,2,-1,-4]
let test1 = new Three_sum
let result1 = test1.three_sum(input1)

// Test2
let input2 = [0,0,0]
let test2 = new Three_sum
let result2 = test2.three_sum(input2)

console.log(result1); // [ [ -1, -1, 2 ], [ -1, 0, 1 ] ]
console.log(result2); // [ [ 0, 0, 0 ] ]