function solution(operations) {
    const queue = [];
    function deleteN(n){
        if (queue.length === 0) return;
        if (n === -1) queue.shift();
        else if (n === 1) queue.pop();
    }
    function insertN(n){
        if (n <= queue[0]){
            queue.unshift(n);
            return;
        }
        if (n >= queue[queue.length-1]) {
            queue.push(n);
            return;
        }
        if (queue.length === 1 || n <= queue[0]){
            queue.unshift(n);
            return;
        }
        queue.splice(queue.length-1, 0, n);
    }
    
    for (let command of operations){
        let [method, num] = command.split(" ");
        num = +num;
        if (isNaN(num)) continue;
        if (method === "I") insertN(num);
        else if (method === "D") deleteN(num);
    }
    return queue.length ? [queue[queue.length-1], queue[0]] : [0, 0];
}