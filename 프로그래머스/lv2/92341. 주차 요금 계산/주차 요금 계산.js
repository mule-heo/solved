function solution(fees, records) {
    const DAY_END = 60 * 23 + 59;
    const [first, base, per, extra] = fees;
    const timeIn = {};
    const timeParked = {};
    const result = [];
    
    records.map(line => {
        let [time, number, inout] = line.split(" ");
        const [hours, minutes] = time.split(":");
        time = +hours * 60 + +minutes;
        
        if (inout === "IN"){
            timeIn[number] = time;
        } else {
            timeParked[number] = (timeParked[number]??0) + time - timeIn[number];
            delete timeIn[number];
        }
    })
    
    Object.keys(timeIn).forEach(number => {
        timeParked[number] = (timeParked[number]??0) + DAY_END - timeIn[number];
    })
    
    Object.keys(timeParked).sort((a, b)=> a - b).forEach(number => {
        const time = timeParked[number]-first;
        result.push(base + (time > 0 && Math.ceil(time/per) * extra));
    })
    
    return result;

}