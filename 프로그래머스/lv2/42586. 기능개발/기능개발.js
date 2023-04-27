function solution(progresses, speeds) {
    const result = [];
    let done = 0;
    while (true){
        let days = Math.ceil((100 - progresses[0])/speeds[0]);
        progresses = progresses.map((v,i) => v + days * speeds[i]);
        let index = progresses.findIndex(v => v < 100);
        if (index === -1) {
            result.push(progresses.length);
            return result;
        } else {
            result.push(index);
            progresses = progresses.slice(index);
            speeds = speeds.slice(index);
        }
    }
}