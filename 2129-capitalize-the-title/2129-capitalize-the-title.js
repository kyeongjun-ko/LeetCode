/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
    // 풀이1
    // const wordList = title.split(" ");
    // const result = [];
    
    // for (const word of wordList) {
    //     if (word.length < 3) {
    //         result.push(word.toLowerCase());

    //         continue;
    //     }

    //     const convert = [...word].map((e, index) => {
    //         if (index === 0) {
    //             return e.toUpperCase();
    //         }
    
    //         return e.toLowerCase();
    //     });
        
    //     result.push(convert.join(""));
    // }
    
    // return result.join(" ");


    // 풀이2
    const reverseList = [...title].reverse();

    let length = 0;

    const result = reverseList.map((e, index, list) => {
        length++;

        if (e === " ") {
            length = 0;

            return e;
        }

        if (length > 2) {
            if (index === reverseList.length - 1) {
                return e.toUpperCase();
            }

            if (list[index + 1] === " ") {
                return e.toUpperCase();
            }
        }
        
        return e.toLowerCase();
    });

    return result.reverse().join("");
};