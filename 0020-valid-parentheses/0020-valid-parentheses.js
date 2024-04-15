/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function(s) {
    const openStack = [];
    const pair = {
        "{" : "}",
        "(" : ")",
        "[" : "]"
    }
    const open = ["(","{","["];

    for (const operator of s) {
        if (open.includes(operator)) {
            openStack.push(operator);
        } else {
            const openOperator = openStack.pop();

            if (pair[openOperator] !== operator) {
                return false;
            }
        }
    }

    return openStack.length === 0;
};