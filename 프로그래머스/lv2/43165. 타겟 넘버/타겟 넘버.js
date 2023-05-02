function solution(numbers, target) {
    const num = 2 ** numbers.length - 1;
    let count = 0;
    for (let i=0;i<num;i++){
        let truefalse = i.toString(2).padStart(numbers.length, "0");
        count += +(numbers.reduce((acc, cur, idx) => {
            if (+truefalse[idx]) return acc + cur;
            else return acc - cur;
        }, 0) === target);
    }
    return count;
}