/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const copyPrices = [...prices];
    
    let profit = 0;
    let length = copyPrices.length;
    let principal;
     
    for (let i = 0; i < length - 1; i++) {
        const target = copyPrices[i];

        if (principal === undefined || target < principal) {
            principal = target;
            
            if (i + 1 < copyPrices.length) {
                copyPrices.splice(0, i + 1);                
            }       
            
        
            length = copyPrices.length;
            
            const highestValue = Math.max(...copyPrices);
            
            if (principal < highestValue && highestValue - principal > profit) {
                profit = highestValue - principal;
            }
            
            if (length > 1) {
                i = -1;            
            }
        }
    }

    return profit;  
};