function solution(record) {
    let result = [];
    const idNickname = {};
    
    record.forEach(line => {
        let [action, id, nickname] = line.split(" ");
        if (action === "Enter"){
            idNickname[id] = nickname;
            result.push([id, "님이 들어왔습니다."]);
            
        }
        else if (action === "Leave"){
            result.push([id, "님이 나갔습니다."]);
        } else if (action === "Change"){
            idNickname[id] = nickname;
        }
    })
    
    return result.map(v => {
        v[0] = idNickname[v[0]];
        return v.join("");
    })
}