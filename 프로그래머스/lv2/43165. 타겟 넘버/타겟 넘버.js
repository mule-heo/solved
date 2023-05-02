function solution(numbers, target) {
    let count = 0;
    function add(idx, acc){
        if (idx === numbers.length) count += +(acc === target);
        else {
            add(idx+1, acc + numbers[idx]);
            add(idx+1, acc - numbers[idx]);
        }
    }
    add(0,0);
    return count;
}