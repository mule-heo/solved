function solution(n) {
    const memo = [0n, 1n, 2n];
    const jump = (n) => {
        if (memo[n]){
            return memo[n];
        } else {
            let result = jump(n-1) + jump(n-2);
            memo[n] = result;
            return memo[n];
        }
    }  
    return jump(n)%1234567n;
}