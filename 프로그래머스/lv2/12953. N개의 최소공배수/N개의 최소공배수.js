function solution(arr) {
    const entire = {};
    function factorization(n){
        const factors = {};
        for (let i=2;i<=n;i++){
            let count = 0;
            while (!(n%i)){
                n/=i;
                count++;
            }
            count && (factors[i] = count);
        }
        return factors;
    }
    
    for (let num of arr){
        const factors = factorization(num);
        for (let factor in factors){
            if (entire[factor] === undefined || entire[factor] < factors[factor]){
                entire[factor] = factors[factor];
            }
        }
    }
    return Object.entries(entire).reduce((acc,cur) => acc * Math.pow(+cur[0],cur[1]), 1);
}