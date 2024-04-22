/**
 * @param {string} s
 * @return {boolean}
 */

var isPalindrome = function(s) {
    const copy = s;
    
    if (copy.length === 1) {
        return true;
    }
    
    let reg = /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/ ]/gim;
    const cleanString = copy
        .replace(reg, "")
        .toLowerCase();

    const stringArray = [...cleanString];
    
    while (stringArray.length > 1) {
        const front = stringArray.shift();
        const end = stringArray.pop();
        if (front !== end) {
            console.log("여기서", stringArray);
            return false;
        }
    }
    
    if (stringArray.length <= 1) {
        return true;
    }
    
    console.log("last", stringArray);
    return false;
};