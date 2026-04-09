// APR 9


//


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