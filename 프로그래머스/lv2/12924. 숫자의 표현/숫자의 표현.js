function solution(n) {
    let count = 0;
    const arrcount = [];
    for (let i=1;i<=n;i++){
        if ((i === n%(2*i))){
            if (i < Math.floor(n/(2*i))) continue;
            else {
                count++;
                continue;
            }
        }
        if (n % (2*i + 1) === 0){
            if (i < n / (2*i+1)) continue;
            else {
                count++;
            }
        }
    }
    return count;
}