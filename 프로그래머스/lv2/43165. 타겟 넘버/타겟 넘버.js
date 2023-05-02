function solution(numbers, target) {
    function add(idx, acc){
        if (idx === numbers.length) return acc === target;
        else {
            let result = 0;
            result += add(idx+1, acc + numbers[idx]);
            result += add(idx+1, acc - numbers[idx]);
            return result;
        }
    }
    return add(0, 0);
}