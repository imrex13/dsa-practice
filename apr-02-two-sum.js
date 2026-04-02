//Apr 2

// First of this program has a  brute force solution where we can use two for loop to find the two pairs of number and get the index of those two values. but it would be O(n^2)
// The optimal solution for this problem is to use a hashmap to skim through the array once to find the two numbers by subtracting the current value with the target and cheking the resultant in the hashmap if the number is already seen in the array if yes, we can return the two index of those number, If not found we just add the current value to the hashmap and move on to next number

// Time Complexity is O(N) 
// Space Complexity is O(N)


class Two_sum {

    two_sum(nums, target) {
        
        let temp, i;
        let hashmap = new Map()


        for (i = 0; i < nums.length; i++){
            // Subtracting the target value by current value 
            temp = target - nums[i];

            // Checking if the resultant value exist in the hashmap
            if (hashmap.has(temp)) {

                return [hashmap.get(temp),i]
            }

            // Store the current value in the Hashmap 
            hashmap.set(nums[i], i);
        }
        return [];

   }

}

// Test 1
input1 = [3, 4, 5, 6]
target1 = 7
var test1 = new Two_sum

// Test 2
input2 = [4,5,6]
target2 = 10
var test2 = new Two_sum

console.log(test1.two_sum(input1, target1)) // [0,1]
console.log(test2.two_sum(input2, target2)) // [0,2]
