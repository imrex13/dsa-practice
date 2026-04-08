// APR 8


// This is a Hard problem in Two pointer method. In this problem we need to find out how much water it can trap inbetween the values in the array where each value is a height of the position.
// So for this we have two approach One is by Using an O(N) space and another one is using O(1) space.


// First Approach

// In the first solution we first create a maxLeft and MaxRight array and calculate the maxleft value and maxRight value of (i)th index we do that by using the prefix and suffix method to caluculate the maxLeft and maxRight. The maxLeft and maxRight is nothing but what is the biggest value before this current index is it the current value or the previous value that's all.
// So after calculating that values we traverse the array to find out the total water it can trap in this array. we do that by first finding out which side or value is smaller and subtracting with the current index value we are in. We do that because we take the smaller value because after that value the water is gonna leak out eg: if the left side height is 4 and the right side height is 5 the water can only be filled up till height 4, after that it will spill.
// so after finding the lowest height and subtracting with the current value we add that to the totalwater and move to the next value. we do this untill the end of array and we return the totalWater.

// Time Complexity - O(N)

// Space Complexity - O(N) We are using array for maxLeft and maxRight.



// Second Approach

// In the second approach we are going to calculate the maxLeft and maxRight on the fly and we are going to be using two pointer technique here.

// First we setup the two pointer, One pointer starts from the start and another pointer starts from the end.
// we setup the while loop and inside that while loop we first calculate the maxLeft and maxRight by comparing the current pointer value in the array with the current maxLeft/maxRight value and then we check which side is less than other (maxLeft < maxRight) or (maxRight<maxLeft). If the left side is smaller we deduct the maxLeft with the current pointer value and add it to the count and then we move the start/left pointer to the right (start++). If the right side is smaller we do the same calcualtions on the right side as the left side and we move the end/right pointer to the left(end--). we do this process till (end>start) then we return the count.

// Time Complexity O(N)

// Space complexity O(1) We are calculating the maxLeft and maxRight on the fly so no need for extra space.

class Trapping_Rain_water{

    trapping_rain_water_1(heights) {
        
        let maxLeft = []
        let maxRight = []
        let totalWater = 0;
        maxLeft[0] = heights[0] 
        for (let i = 1; i < heights.length; i++)
        {
            maxLeft[i] = Math.max(maxLeft[i - 1], heights[i]);
        }
        
        maxRight[heights.length - 1] = heights[heights.length - 1];
        for (let i = heights.length - 2; i >= 0; i--){
            maxRight[i] = Math.max(maxRight[i + 1], heights[i]);
        }

        for (let i = 0; i < heights.length; i++){
            let water = Math.min(maxLeft[i], maxRight[i]) - heights[i];
            totalWater += water; 
        }

        return totalWater;

    }

    // O(1) Space Complexity

    trapping_rain_water_2(heights) {
        
        let maxLeft = 0;
        let maxRight = 0;
        let start = 0;
        let end = heights.length - 1;
        let count = 0;

        while (start < end) {
            
            maxLeft = Math.max(maxLeft, heights[start]);
            maxRight = Math.max(maxRight, heights[end]);

            if (maxLeft <= maxRight) {
                count += maxLeft - heights[start];
                start++;
            }
            else {
                count += maxRight - heights[end];
                end--;
            }

        }
        return count;
    }
}



// Test 1
let input1 = [0,1,0,2,1,0,1,3,2,1,2,1]
let test1 = new Trapping_Rain_water
let result1 = test1.trapping_rain_water_1(input1);
let result11 = test1.trapping_rain_water_2(input1);


// Test2
let input2 = [4,2,0,3,2,5]
let test2 = new Trapping_Rain_water
let result2 = test2.trapping_rain_water_1(input2)
let result22 = test2.trapping_rain_water_2(input2)

console.log(result1); // 6
console.log(result11); // 6
console.log(result2); // 9
console.log(result22); // 9
