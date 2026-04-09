// APR 9

//


class Longest_Substring_Without_Repeating_Character{

    longest_substring_without_repeating_character(s) {
        

        let L = 0;
        let cur_max = 0;
        let max_sum = 0;

        let  hashSet = new Set();

        for(let i = 0; i<s.length;i++){
            while(hashSet.has(s.charAt(i)))
            { 
                hashSet.delete(s.charAt(L))
                L +=1;
            }
            hashSet.add(s.charAt(i));
            max_sum = Math.max(max_sum,i-L+1);
        }
        return max_sum
    }
}

// Test 1
let input1 = "abcabcbb"
let test1 = new Longest_Substring_Without_Repeating_Character
let result1 = test1.longest_substring_without_repeating_character(input1)

// Test2
let input2 = "bbbbb"
let test2 = new Longest_Substring_Without_Repeating_Character
let result2 = test2.longest_substring_without_repeating_character(input2)

console.log(result1); // 3
console.log(result2); // 1