// APR 10

//


class Longest_Repeating_Character_Replacement{

    longest_repeating_character_replacement(s,k) {
        
         let map = {}
    let longest = 0;
    let topfreq = 0;
    let r = 0;
    let l = 0;

    while(r < s.length){
        let rChar = s[r];
        map[rChar] = map[rChar]+1 || 1;

        topfreq = Math.max(topfreq, map[rChar]);
        while((r-l+1)-topfreq > k){
            let lChar = s[l];
            map[lChar]--;
            l++
        }
        longest = Math.max(longest,(r-l+1));
        r++
    }
return longest;
    }
}



// Test 1
let input1 = "ABAB"
let input11 = 2
let test1 = new Longest_Repeating_Character_Replacement
let result1 = test1.longest_repeating_character_replacement(input1,input11)

// Test2
let input2 = "AABABBA"
let input22 = 1
let test2 = new Longest_Repeating_Character_Replacement
let result2 = test2.longest_repeating_character_replacement(input2,input22)

console.log(result1); // 4
console.log(result2); // 4