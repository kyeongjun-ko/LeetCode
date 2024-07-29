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


    const splitNumber = num.toString().split("");
    
    const splitNumber1 = splitNumber.map((numberString, index) => {
        const digitNumber = splitNumber.length - 1 - index;
        if (numberString !== "0") {
            return [`1${"0".repeat(digitNumber)}`, numberString];
        }
    })
    
    console.log("new List", splitNumber1)
    
    const addZero = (list) => {
        const result = [];
        let count = list.length - 1;
    
        for (const target of list) {
            if (target !== "0") {
                result.push([`1${"0".repeat(count)}`, target]);
            }
            
            count--;
        }

        return result;
    };

    const targetList = addZero(splitNumber);
    
    /*
    1. 주어진 숫자를 spilt으로 배열로 만든다.
    2. map을 사용하여 수 => [자릿수, 반복] 으로 만든다.
    3. reduce메서드를 사용해서 콜백함수를 실행시킨다.
    첫번째 인자의 길이가 3이하일때
    두번째 인자의 숫자가 0이 아니면서 5보다 낮으면은 5-x 한만큼 첫번째인자반복
    두번째 인자의 숫자가 0이아니면서 5보다 크면은 첫번째인자 *5 한값을 추가하고 그 뒤에 5-x만큼 붙인다.
    */

    const result = targetList.reduce((a, b) => {
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

    return result;
};