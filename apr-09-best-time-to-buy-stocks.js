// APR 9


// This is an easy problem where we have to use a combination of two pointer and sliding window to solve this problem. First we get the input and then we setup two pointers big & small. the Big pointer  look for selling values. Small pointer look for buying point. so we start the small pointer at the start and the big pointer one step ahead of small pointer and we iterate through the array each time we move the big pointer one step while looking for max_profit. In the while loop we check if the current big value is smaller than the current small value if yes we move the small pointer to the big position and move the big pointer one step ahead. if the if condition is false we subtract the small value from big value and check if the profit is bigger than the already stored profit if yes we store the current profit. If not we did not store the current profit as we are only looking for the highest profit. we run the loop untill the big pointer reaches the end of the array and we return the Max_profit.    


class Best_Time_to_Buy_Stocks{

    best_time_to_buy_stocks(prices) {
        
        let max_profit = 0;
        let big = 1;
        let small = 0;
        let temp = 0;
        while(big < prices.length){
            if(prices[small]>prices[big]){
                small = big;
                big++
            }
            else{
                temp = prices[big]-prices[small];
                if(temp>max_profit){
                    max_profit = temp
                } 
                big++
            }
        }
        return max_profit;
    }
}

// Test 1
let input1 = [7,1,5,3,6,4]
let test1 = new Best_Time_to_Buy_Stocks
let result1 = test1.best_time_to_buy_stocks(input1)

// Test2
let input2 = [7,6,4,3,1]
let test2 = new Best_Time_to_Buy_Stocks
let result2 = test2.best_time_to_buy_stocks(input2)

console.log(result1); // 5
console.log(result2); // 0