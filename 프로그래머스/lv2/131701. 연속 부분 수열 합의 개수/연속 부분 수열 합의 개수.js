function solution(elements) {
    const result = [];
    const circleElements = [...elements, ...elements];
    function sum(start, num, arr){
        let count = 0;
        for (let i=start;i<start + num;i++){
            count += arr[i];
        }
        return count;
    }
    for (let num=1;num<=elements.length;num++){
        for (let start=0;start<elements.length;start++){
            result.push(sum(start, num, circleElements));
        }
    }
    return new Set(result).size;
}