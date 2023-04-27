function solution(elements) {
    const set = new Set();
    const circleElements = [...elements, ...elements];

    for (let num=1;num<=elements.length;num++){
        let count = 0;
        for (let start=0;start<elements.length;start++){
            count += circleElements[num + start];
            set.add(count);
        }
    }
    return set.size;
}