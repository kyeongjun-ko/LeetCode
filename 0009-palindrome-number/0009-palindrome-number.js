/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }
    
    const stringNumber = [...String(x)];
    
    while (stringNumber.length > 1) {
        const front = stringNumber.shift();
        const back = stringNumber.pop();
        
        if (front !== back) {
            return false;
        }
    }
    
    return true;
};