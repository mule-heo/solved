function solution(n) {
    function fact(n){
        if (n<=1) return BigInt(1);
        else return BigInt(n) * fact(n-1);
    }
    
    function combination(n, r){
        return fact(n)/(fact(r) * fact(n-r));
    }
    
    let count = 0n;
    let original = n;
    while(n>original/2){
        count += combination(n, original-n);
        n--;
    }
    if (!(original % 2)) count += 1n;
    return count%1234567n;
}