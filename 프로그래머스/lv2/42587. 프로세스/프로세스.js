function solution(priorities, location) {
    let executed = 0;
    while (location-- >= 0){ 
        let priority = priorities.shift();
        if (priorities.find(process => process > priority)){
            priorities.push(priority);
            if (location === -1){
                location = priorities.length-1;
            }
        }
        else {
            executed++;
        }
    }
    return executed;
}