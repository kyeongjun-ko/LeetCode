/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isAnagram = function(s, t) {
    const stringArray = [...s];
    const targetArray = [...t];
    
    if (s.length !== t.length) {
        return false;
    }

    for (let i = 0; i < s.length; i++) {
        const deleteTarget = stringArray.shift();
        
        if (targetArray.includes(deleteTarget)) {            
            const targetIndex = targetArray.indexOf(deleteTarget);
            
            targetArray.splice(targetIndex, 1);
        } else {
            return false;
        }
    }

    if (stringArray.length !== 0 || targetArray.length !== 0) {
        return false;
    }
    
    return true;
};