function solution(n, left, right) {
    right = right > n*n ? n*n : right;
    const result = [];
    for (let i=left;i<=right;i++){
        let idx = Math.floor(i / n);
        result.push(Math.max(idx+1, i%n+1));
    }
    return result;
}