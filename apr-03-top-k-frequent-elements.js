// Apr 3

// So this is a medium problem we have to find the Top_K_Frequent_Element first we have to count each element and store it so for that we have to use Hashmap to store and retrieve.
// Then we have to use a Bucket sort like structure to store the values as per their count so we use a two dimentional array for the bucket.
// Now we get the top K elements by iterating through bucket backwords and cheking each two dimentional array element and getting the top K elements
// We store the top k elements in the result array and return them

// Time complexity - O(N)
//Space complexity - O(N) 



class Top_K_Frequent_Element{

    top_k_elements(nums, k){

        let hashmap = new Map();

        // Counting the elements 
        for (let i = 0; i < nums.length; i++){
            hashmap.set(nums[i], (hashmap.get(nums[i]) || 0) + 1);
           
        }

        // Bucket  
        let bucket = Array.from({ length: nums.length + 1 }, () => []);

        for (let [num, freq] of hashmap) {
            bucket[freq].push(num);
        }

        let result = []
        // getting the top K elements
        for (let i = bucket.length - 1; i >= 0 && result.length < k; i--){
            for (let num of bucket[i]) {
                result.push(num);
                if(result.length === k ) return result
            }
        }
        return result
        
    }
}

let input1 = [1, 2, 2, 3, 3, 3]
let k1 = 2
let test1 = new Top_K_Frequent_Element
let result1 = test1.top_k_elements(input1,k1)

let input2 = [7, 7];
let k2 = 1
let test2 = new Top_K_Frequent_Element
let result2 = test2.top_k_elements(input2,k2)

console.log(result1); 
console.log(result2);