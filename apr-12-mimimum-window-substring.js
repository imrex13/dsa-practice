// APR 12

//

class Minimum_Window_Substring{

    minimum_window_substring(s, t) {
        let map = new Map();

            for(let letter of t){
                if(!map.has(letter)){
                    map.set(letter,1);
                }
                else{
                    map.set(letter,map.get(letter)+1);
                }
            } 

            let right = 0;
            let left = 0;
            let len = Infinity;
            let count = map.size
            let minWindow = "";

            while(right<s.length){
                let rLetter = s[right];
                if(map.has(rLetter)){
                    map.set(rLetter,map.get(rLetter)-1)
                    if(map.get(rLetter)===0) count--
                }
                right++
                while(count === 0){
                    if(right-left<len){
                        len = right-left;
                        minWindow = s.slice(left,right);
                    }
                    let lLetter = s[left];
                    if(map.has(lLetter)){
                        map.set(lLetter,map.get(lLetter)+1);
                        if(map.get(lLetter)>0) count++;
                    }
                    left++;
                }
            }
            return minWindow;
        }
}


// Test 1
let input1 = "ADOBECODEBANC"
let input11 = "ABC"
let test1 = new Minimum_Window_Substring
let result1 = test1.minimum_window_substring(input1,input11)

// Test2
let input2 = "a"
let input22 = "a"
let test2 = new Minimum_Window_Substring
let result2 = test2.minimum_window_substring(input2,input22)

console.log(result1); // BANC
console.log(result2); // a