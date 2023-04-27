function solution(n) {
    const memo = [0n, 1n, 2n];
    for (let i=2;i<n;i++){
        memo[i+1] = (memo[i] + memo[i-1]) % 1000000007n;
    }
    return memo.at(-1);
}