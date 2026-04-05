// APR  5

// This is a medium problem and its the final problem of Array topic in NEETCODE 150
// So in this problem we have to find the longest Consecutive sequence (n+1). So for that we want O(1) query time and we dont need duplicate values to be taken into calculation so for this we use a Hashset. By using the hashset we first store all the values in the input array without duplicates and then we check the hashset for startvalues (numbers that does not have n-1) and we store it in an  array. Then we use the start value and count the consecutive sequence by searching for (n+1) value in the hashset and then if we find the number we replace the startvalue with the n+1 number and update the sequence count if we cant find the n+1 number we mvoe on to the next startvalue while also updating the globalMax value.

// Time Complexity - O(N)
// Space Complexity - O(N)
// Assuming in worst case that the Input array does not have duplicates and they dont have any n+1 sequence.

class Longest_Consecutive_Sequence{

    longest_consecutive_sequence(nums) {
        
        if (nums.length <= 0) {
            return 0;
        }
        let hashset = new Set();
        let localMax = 1;
        let globalMax = 1;

        for (let i = 0; i < nums.length; i++){
            if (hashset.has(nums[i])) {
                continue;
            }
            hashset.add(nums[i]);
        }

        let startvalues = []
        let count = 0
        for (let i = 0; i < nums.length; i++){
            if (hashset.has(nums[i] - 1)) {
                continue
            }
            startvalues[count] = nums[i];
            count++;
        }
        let j = startvalues.length
        count = 0
        while (j > 0) {
            if (hashset.has(startvalues[count] + 1)) {
                startvalues[count] = startvalues[count]+1
                localMax += 1
            }
            else {
                count++;
                j--
                globalMax = Math.max(localMax, globalMax);
                localMax = 1;
            }
        }
        return globalMax;
    }
}




// Test 1
let input1 = [2,20,4,10,3,4,5]
let test1 = new Longest_Consecutive_Sequence
let result1 = test1.longest_consecutive_sequence(input1)

// Test2
let input2 = [0,3,2,5,4,6,1,1]
let test2 = new Longest_Consecutive_Sequence
let result2 = test2.longest_consecutive_sequence(input2)

console.log(result1); // 4
console.log(result2); // 7