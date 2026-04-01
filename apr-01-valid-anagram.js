// Apr 1
// For this program we use hashmap to store the value and their count, First we check the two string to know if they are in the same length if no we can return zero as it is not anagram. In the hashmap we store the character and their count by looping through the "s" string and then we check the "t" string with the Hashmap if the "t" string has values that does not stored in hashmap or if the count of that character goes zero or below zero we return false. If the character is present in the hashmap and the count is not zero we reduce the count by 1 and move to next character and if all the characater/value is checked out we return true
// We use Hashmap to get the value in O(1) time.

// Time Complexity - O(N)  -- as we use to skim through the loop
// Space Complexity - O(N) -- we use a hashmap

// Note  : If the input is a lowercase of English character the hashmap is gonna store only 26 letters, In that case the Space complexity would be  O(1)


class Valid_Anagram{

    valid_anagram(s,t) {
        
        // setup a hashmap
        const hashmap = new Map();

        // check if both the sting has equal length (No equal length directly no anagram)
        if (s.length != t.length) {
            return false
        }

        // loop through the "s" String to store all the values and their count in the hashmap
        for (let i = 0; i < s.length; i++){
            
            if (hashmap.has(s[i])) {
                let value = hashmap.get(s[i]);
                hashmap.set(s[i], ++value);
            }
            else {
                hashmap.set(s[i], 1);
            }
        }

        // loop through the "t" String to check if the values match if not return false if it matches reduce the count and if the count
        for (let i = 0; i < t.length; i++){
            // if the value is not in the hashmap return false
            if (!hashmap.has(t[i])) {
                return false
            }

            let value = hashmap.get(t[i]);
            // if the value goes below zero or at zero it means there is a extra value so return false
            if (value <= 0) {
                return false;
            }

            //reduce the count by 1
            hashmap.set(t[i],--value)
        }

        return true;
    
    }
}

let test1_s = "nagaram"
let test1_t = "anagram"
let test1 = new Valid_Anagram
let result1 = test1.valid_anagram(test1_s, test1_t);


let test2_s = "carrace"
let test2_t = "racecar"
let test2 = new Valid_Anagram
let result2 = test2.valid_anagram(test2_s, test2_t)


let test3_s = "jar"
let test3_t = "jam"
let test3 = new Valid_Anagram
let result3 = test3.valid_anagram(test3_s, test3_t)

console.log("Result1", result1); // true
console.log("Result2", result2); // true
console.log("Reuslt3", result3); // false

