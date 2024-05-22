/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
    // 1. 띄어쓰기로 나누기
    // 2. 띄어쓰기로 나눈문자열 하나씩 순회하면서 재정의
    // 3. 문자열로 변환한뒤 리턴
    const copyString = title;
    const result = [];
    const debind = copyString.split(" ");
    
    for (const word of debind) {
        if (word.length < 3) {
            console.log("length2 word", word);
            
            result.push(word.toLowerCase());
            continue;
        }
        const convert = [...word].map((e, index) => {
            if (index === 0) {
                return e.toUpperCase();
            } else {
                return e.toLowerCase();
            }
        });
        
        result.push(convert.join(""));
        console.log("word1", word)
        console.log("word2", convert.join(""))
    }
    
    return result.join(" ");
    console.log("result", result);
    // 1. 한번에 순회하면서 띄어쓰기가 포함되는 경우 그다음 문자열 대문자변환 나머지는 소문자변환
};