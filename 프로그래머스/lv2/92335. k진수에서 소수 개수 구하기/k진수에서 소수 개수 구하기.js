function solution(n, k) {
    let string = n.toString(k).split("0");
    let count = 0;
    
    findNext:
    for (let i=0;i<string.length;i++){
        if (string[i] !== ""){
            let num = +string[i];
            if (num===1) continue findNext;
            let sqrt = Math.floor(Math.sqrt(num));
            for (let j=2;j<=sqrt;j++){
                if (num % j === 0) continue findNext;
                }
            count++;
        }
    }
    return count;
}