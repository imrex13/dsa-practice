//APR 6

// This is a  Two pointer problem. we have to find if the given string is a valid palindrome. But the catch is in the string there are other things than normal alphaneumarical characters like question mark, exclamation spaces etc..

// Before we start the main solution we have to process the input. We use regex to remove things that are not alphaneumerical characters. we do that by using REGEX and then we trim them so that there will be no space between words and we lowercase the entire string.

// Now for the main solution part. We declare two variables that acts as a two pointer we place one pointer at the start of the string and the other at the end of the string. now we start the traversal, the two string make their way to the centre of the string while checking if the two characters they are pointing are same if yes they move one step closer if not they return false. when the string is palindrome the loop will end at j>i and after the loop we return true stating that the string is palindrome.

// Time Complexity - O(N) 

// Space Complexity - O(N) 



class Valid_Palindrome{

    valid_palindrome(s) {
        
        s = s.replace(/[^a-z0-9]/gi, "").trim().toLowerCase();
        let i = 0;
        let j = s.length-1;

        while (j >= i) {
            
            if (s[i] == s[j]) {
                i++;
                j--;
            }
            else {
                return false;
            }
        }
        return true;
    }
}

// Test 1
let input1 = "Was it a car or a cat I saw?"
let test1 = new Valid_Palindrome
let result1 = test1.valid_palindrome(input1)

// Test2
let input2 = "tab a cat"
let test2 = new Valid_Palindrome
let result2 = test2.valid_palindrome(input2)

console.log(result1); // true
console.log(result2); // false

