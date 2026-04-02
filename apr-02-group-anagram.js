// Apr 2

// In this problem we first have to use the sorting method to commonlise the words and then do the seperation.

// First we iterate through words. Each time we sort the word and check it with the hashmap if the sorted word is in the map if not we add the original word and the sorted word in the hashmap where we add the original word inside an array/ {sorted word : [original_word]} then while iterating through the array if we found the sorted word in the hashmap we push the current original word to that array in the  hashmap. and finally we return all the values in the hashmap

// Time Complexity is O(n*k O k) where n is number of words and k is average letter of each word.
// Space complexity is O(N). 

class Group_Anagram{

    group_anagram(strs) {
        
        let hashmap = new Map()
        
        for (let i = 0; i < strs.length; i++){
            let temp, temp2;

           // Sorting the word by spliting and sorting then joining.
            temp = strs[i].split("").sort().join()
  
            if (hashmap.has(temp)) {
                // Pushing the original word to the respective array in the hashmap
                temp2 = hashmap.get(temp);
                temp2.push(strs[i]);
            }
            else {
                // If the sorted value is not found we set the sorted value and original value.
                hashmap.set(temp,[strs[i]])
            }

        }

        return [...hashmap.values()]
    }
}

// Test 1
let input1 = ["act", "pots", "tops", "cat", "stop", "hat"]
let test1 = new Group_Anagram
let result1 = test1.group_anagram(input1)


let input2 = ["x"]
let test2 = new Group_Anagram
let result2 = test2.group_anagram(input2)

console.log(result1); // [ [ 'act', 'cat' ], [ 'pots', 'tops', 'stop' ], [ 'hat' ] ]
console.log(result2); // [ [ 'x' ] ]