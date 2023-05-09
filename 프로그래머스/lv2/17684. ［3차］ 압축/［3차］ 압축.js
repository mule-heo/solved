function solution(msg) {
    const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const dict = {};
    for (let i=0;i<alphabets.length;i++){
        dict[alphabets[i]] = i+1;
    }
    
    const index = [];
    for (let i=0;i<msg.length;i++){
        let str = msg[i];
        let idx = dict[str];
        while (dict[str] !== undefined && i < msg.length){
            i++;
            str = str + msg[i];
            idx = dict[str] ?? idx;
        }
        if (dict[str] === undefined){
            i--;
            index.push(idx);
            dict[str] = Object.keys(dict).length+1;
        } else if (i === msg.length-1){
            index.push(idx);
        }
    }
    return index;
}