function solution(str1, str2) {
    function toMultiSetMap(str){
        const map = new Map();
        str.toLowerCase().split("").map((v, i, arr)=>v + arr[i+1]).slice(0,-1).filter(el=>/[A-Za-z]{2,2}/.test(el)).forEach(v => {
            if (map.has(v)) map.set(v, map.get(v)+1);
            else map.set(v, 1);
        });
        return map;
    }
    
    const multiSetMap1 = toMultiSetMap(str1);
    const multiSetMap2 = toMultiSetMap(str2);
    if (!(multiSetMap1.size || multiSetMap2.size)) return 65536;
    
    let sizeIntersection = 0;
    let sizeUnion = 0;
    Array.from(multiSetMap1.entries()).forEach((el) => {
        const [key, value1] = el;
        if (multiSetMap2.has(key)) {
            let value2 = multiSetMap2.get(key);
            if (value1 > value2) {
                sizeIntersection += value2;
                sizeUnion += value1;
            } else {
                sizeIntersection += value1;
                sizeUnion += value2;
            }
        } else sizeUnion += value1;
    })
    Array.from(multiSetMap2.entries()).forEach((el) => {
        const [key, value2] = el;
        if (!(multiSetMap1.has(key))) {
            sizeUnion += value2;
        }
    });
    
    let J = sizeIntersection / sizeUnion;
    return ~~(J * 65536);
}