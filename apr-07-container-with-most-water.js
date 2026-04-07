// APR 7

// This is a medium problem in Two pointer where we have to find the two points that forms a container that holds the most amount of water.

// So for this problem we use two pointer, one pointer at first and another pointer is at last.

// We traverse the array by checking both points. first we find the area so for that we take the least value in the two pointer and multiple that with the length between the two pointer. From this calculation we get the area of that particular points. now we compare that with the global maximum and if the current area is big we change the global maximum and then we check which pointers value is shorter. we increment the i pointer if the i value is short, we decrement the j pointer we the j value is short.

// finally we return the max area.

// Time Complexity - O(N)

//Space Complexity - O(1)


class Container_with_most_water{

    container_with_most_water(heights) {
        
        let i, j, area, max;

        max = 0
        i = 0;
        j = heights.length-1;

        while (j > i) {
            area = Math.min(heights[i], heights[j]) * (j - i);
            max = Math.max(max, area);
            if (heights[i] > heights[j]) j--;
            else i++;
        }
        return max;
    }
}



// Test 1
let input1 = [1,8,6,2,5,4,8,3,7]
let test1 = new Container_with_most_water
let result1 = test1.container_with_most_water(input1)

// Test2
let input2 = [1,1]
let test2 = new Container_with_most_water
let result2 = test2.container_with_most_water(input2)

console.log(result1); // 49
console.log(result2); // 1