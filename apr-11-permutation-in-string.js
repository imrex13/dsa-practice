// APR 11

// 

class Permutation_in_String{
    

    permutation_in_string(s1,s2) {
          if(s1.length > s2.length) return false;

    let s1Count = new Array(26).fill(0);
    let windowCount = new Array(26).fill(0);

    for(let i = 0; i<s1.length;i++){
        let index = s1[i].charCodeAt(0) - 'a'.charCodeAt(0);
        s1Count[index] += 1
    }

     for(let i = 0; i < s1.length; i++){
        let index2 = s2[i].charCodeAt(0) - 'a'.charCodeAt(0);
        windowCount[index2] += 1;
    }

    let matches = 0;
    for(let i = 0; i < 26; i++){
        if(s1Count[i] === windowCount[i]) matches++;
    }   
    let L = 0;
    for(let R = s1.length; R < s2.length; R++){
    
        if(matches === 26) return true;
        
       
        let rIndex = s2[R].charCodeAt(0) - 'a'.charCodeAt(0);
        windowCount[rIndex] += 1;
        if(windowCount[rIndex] === s1Count[rIndex]) matches++;
        else if(windowCount[rIndex] === s1Count[rIndex] + 1) matches--;
        

        let lIndex = s2[L].charCodeAt(0) - 'a'.charCodeAt(0);
        windowCount[lIndex] -= 1;
        if(windowCount[lIndex] === s1Count[lIndex]) matches++;
        else if(windowCount[lIndex] === s1Count[lIndex] - 1) matches--;
        
        L++;
}
return matches === 26;
    }
}


// Test 1
let input1 = "ab"
let input11 = "eidbaooo"
let test1 = new Permutation_in_String
let result1 = test1.permutation_in_string(input1,input11)

// Test2
let input2 = "ab"
let input22 = "eidboaoo"
let test2 = new Permutation_in_String
let result2 = test2.permutation_in_string(input2,input22)

console.log(result1); // 4
console.log(result2); // 4