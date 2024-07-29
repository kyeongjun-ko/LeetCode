/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const romanMap = {
        1: "I",
        5: "V",
        10: "X",
        50: "L",
        100: "C",
        500: "D",
        1000: "M"
    };


    const splitNumber = num.toString().split("").reduce((acc, cur, index, list) => {
        const digitNumber = list.length - 1 - index;
        
        if (cur !== "0") {
            acc.push([`1${"0".repeat(digitNumber)}`, cur]);
        }
        
        return acc;
    }, []);
    
  
    const romanResult = splitNumber.reduce((a, b) => {
        const [digit, number] = b.map(Number);
        
        if (digit.toString().length <= 3) {
            if (number === 4) {
                return a + romanMap[digit] + romanMap[(digit * 5)];
            }

            if (number === 9) {
                return a + romanMap[digit] + romanMap[(digit * 10)];  
            }
            
            if (number === 5) {
                return a + romanMap[(digit * 5)];
            }
            
            if (number > 5) {
                return a + romanMap[(digit * 5)] + romanMap[digit].repeat(number - 5);
            } else {
                return a + romanMap[digit].repeat(number);
            }
        } else {
            return a + romanMap[digit].repeat(number);
        }
    }, "")

    return romanResult;
};