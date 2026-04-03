// Apr 3

// In this medium problem we have to do two things that is To Encode and to decode it.
// we take the array of words and encode it into a single string and send it to the decode and in decode we decode the string to get the original string array.
// first we use a method to encode it which is we take the word and measure the length and prefix the length and a symbol "#" to the word and append to the string. We do this for all the words in the array untill the end. once all the words in the array is encoded and appended into the string we return the string.
// Second we decode the string first we look for the symbol "#" using a single pointer then when found we slice the characters before the "#" then we parseInt that character which is the length of the word. then we use the length to extract the word and store in result array.

// Time complexity is O(n*m)
//Space complexity is O(n*m)

// where n is the length of Array and M is the average letters in the string.


class Encode_Decode{

    encode(string) {
     let strs = ""
        for (let i = 0; i < string.length; i++){
            strs += `${string[i].length}#${string[i]}`       
        }
        
       
        return strs;
    }

    decode(strs) {
        
        let i = 0
        let result = []
        while (i < strs.length) {
            let j = i;
            while (strs[j] !== '#') { j++ }
            
            let len = parseInt(strs.slice(i, j));

            let word = strs.slice(j + 1, j + 1 + len);

            result.push(word);
            i = j + 1 + len;
                
        }
        return result
    }
}
// Test 1
let input1 = ["Hello","World"]
let test1 = new Encode_Decode
let result1 = test1.encode(input1)
let result11 = test1.decode(result1)


let input2 = [""]
let test2 = new Encode_Decode
let result2 = test2.encode(input2)
let result22 = test2.decode(result2)

console.log(result1)//  5#Hello5#World
console.log(result11); //  [ 'Hello', 'World' ]

console.log(result2) // 0#
console.log(result22); // [ '' ]