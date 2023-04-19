function solution(n,a,b){
    function pathToRoot(node){
        if (node === 1){
            return [1];
        } else {
            return [node, ...pathToRoot(Math.floor(node/2))];
        }
    }
    
    const participant = new Array(2*n-1).fill().map((_,i) => i);
    // n - 1 => 1 + 2 + 4 + ... 2의 거듭제곱꼴인 n 이전까지의 모든 2의 거듭제곱의 합
    a = a + n -1;
    b = b + n -1;
    const pathA = pathToRoot(a);
    const pathB = pathToRoot(b);
    return pathA.filter((el,idx) => el !== pathB[idx]).length;
    
}