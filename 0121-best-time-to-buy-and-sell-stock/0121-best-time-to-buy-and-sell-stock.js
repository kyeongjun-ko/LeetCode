/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const highest = Math.max(...prices);
    const lowest = Math.min(...prices);

    
    // if (prices.indexOf(lowest) === prices.length - 1 || highest === lowest) {
    //     return 0;
    // }
    
    const lowerIndex = prices.indexOf(lowest);
    
    const rest = prices.slice(lowerIndex + 1);
    const highestOfRest = Math.max(...rest);
    
    // return highestOfRest - lowest;
    
    const copyPrices = [...prices];
    
    let profit = 0;
    let length = copyPrices.length;
    let principal;
    
    

           
     
    for (let i = 0; i < length - 1; i++) {
        const target = copyPrices[i];
        

        if (principal === undefined || target < principal) {
            principal = target;
            console.log("principal", principal);
            
            if (i + 1 < copyPrices.length) {
                copyPrices.splice(0, i + 1);                
            }       
            
        
            length = copyPrices.length;
            
            console.log("length",length, "i", i)
            console.log("copyPrices", copyPrices);

            const highestValue = Math.max(...copyPrices);
            console.log("highestValue", highestValue);
            
            if (principal < highestValue && highestValue - principal > profit) {
                profit = highestValue - principal;
                console.log("profit", profit, "length", length );
            }
            
            if (length > 1) {
                i = -1;            
            }
        }
    }

    return profit;  
};