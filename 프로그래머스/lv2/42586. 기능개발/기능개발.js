function solution(progresses, speeds) {
    const result = [];
    while (progresses.length){
        let days = Math.ceil((100 - progresses[0])/speeds[0]);
        progresses = progresses.map((v,i) => v + days * speeds[i]);
        let done = 0;
        while (progresses[0] >= 100){
            done++;
            progresses.shift();
            speeds.shift();
        }
        result.push(done);
        }
    return result; 
}