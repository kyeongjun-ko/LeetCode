/**
 * @param {string} s
 * @return {boolean}
 */

var isPalindrome = function(s) {
    const givenString = s;
    
    if (givenString.length === 1) {
        return true;
    }
    
    let reg = /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/ ]/gim;
    
    const alphabet = givenString
        .replace(reg, "")
        .toLowerCase();

    const alphabetArray = [...alphabet];
    
    while (alphabetArray.length > 1) {
        const front = alphabetArray.shift();
        const end = alphabetArray.pop();
        if (front !== end) {
            console.log("여기서", alphabetArray);
            return false;
        }
    }
    
    if (alphabetArray.length <= 1) {
        return true;
    }
    
    console.log("last", alphabetArray);
    return false;
};