function solution(a, b, c, d) {
    const abcdArr = [a, b, c, d];
    const abcdSet = new Set(abcdArr);
    
    if (abcdSet.size === 1) return a * 1111;
    if (abcdSet.size === 4) return Math.min(...abcdArr);
    
    abcdArr.sort((a,b)=>a-b);
    
    if (abcdSet.size === 3){
        if (abcdArr[0] === abcdArr[1] || abcdArr[1] === abcdArr[2]) abcdSet.delete(abcdArr[1]);
        else abcdSet.delete(abcdArr[2]);
        const arr = Array.from(abcdSet);
        return arr[0] * arr[1];
    }
    if (abcdSet.size === 2){
        if (abcdArr[1] === abcdArr[2]){
            let p = abcdArr[1];
            abcdSet.delete(p);
            return (10 * p + Array.from(abcdSet)[0])**2;
        } else {
            return (abcdArr[1] + abcdArr[2]) * Math.abs(abcdArr[1] - abcdArr[2]);
        }
    }
}