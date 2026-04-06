// APR 6


// This is a medium level problem at Two Pointer Approach. In this problem the Array is sorted and we have to find the target number and send the two values (a+b=target) index position but we have to calculate the index position from 1 instead of the usual 0.

// This is easy compared to other Medium problems in Two pointer. First we have to initiate the two pointers. One will point to the start of the array and one will point at the end of array. We start traversing in each traversal we check if the sum of two values that the pointers are pointing are equal to the target, If yes we +1 the pointer values and return the array so if the two pointers position is [0] and [1] we add +1 and return the indexes as [1,2].
// If they are not equal we check if the sum of the two values are greater or smaller than the target. If the value is smaller we move the left pointer one position to the right, If the value is greater we move the right pointer one position to the left. we do this untill (j>i). If the index values are not found after the loop we return an empty loop.


// Time Complexity - O(N);
// Space Complexity - O(1)


class Two_Sum_2{

    two_sum_2(numbers,target) {
        
        let i = 0;
        let j = numbers.length-1;

        while (j > i) {
            
            let value = numbers[i] + numbers[j];
            if (value === target) {
                return [i+1, j+1]
            }
            if (value > target) {
                j--;
            }
            else if (value < target) {
                i++
            }
        }
        return []
    }
}

// Test 1
let input1 = [1, 2, 3, 4]
let input2 = 3
let test1 = new Two_Sum_2
let result1 = test1.two_sum_2(input1,input2)

console.log(result1); // [1,2]
