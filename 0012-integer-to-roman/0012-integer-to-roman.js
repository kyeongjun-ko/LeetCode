/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const romanMap = {
        1: "I",
        4: "IV",
        5: "V",
        9: "IX",
        10: "X",
        40: "XL",
        50: "L",
        90: "XC",
        100: "C",
        400: "CD",
        500: "D",
        900: "CM",
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
            if (number === 1 || number === 4 || number === 5 || number === 9) {
                return a + romanMap[(digit * number)];
            }
            
            if (number > 5) {
                return a + romanMap[(digit * 5)] + romanMap[digit].repeat(number - 5);
            } else {
                return a + romanMap[digit].repeat(number);
            }
        }
        
        return a + romanMap[digit].repeat(number);
    }, "")

    return romanResult;
};