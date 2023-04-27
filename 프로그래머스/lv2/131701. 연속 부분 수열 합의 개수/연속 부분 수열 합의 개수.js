function solution(elements) {
    const set = new Set();
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
            set.add(sum(start, num, circleElements));
        }
    }
    return set.size;
}