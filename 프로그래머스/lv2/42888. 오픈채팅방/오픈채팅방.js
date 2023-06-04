function solution(record) {
    let result = [];
    const idIndex = {};
    const idNickname = {};
    const idChanged = new Set();
    
    record.forEach(line => {
        let [action, id, nickname] = line.split(" ");
        switch (action){
            case "Enter":
                idNickname[id] = nickname;
                idIndex[id] ? idIndex[id].push(result.length) : idIndex[id] = [result.length];
                result.push([nickname, "님이 들어왔습니다."]);
                if (id in idNickname) idChanged.add(id);
                break;
            case "Leave":
                idIndex[id].push(result.length);
                result.push([nickname, "님이 나갔습니다."]);
                break;
            case "Change":
                idNickname[id] = nickname;
                idChanged.add(id);
                break;
            default: break;   
        }
    });
    
    Array.from(idChanged).forEach(id => {
        idIndex[id].forEach(idx => {
            result[idx][0] = idNickname[id];
            result[idx] = result[idx].join("");
        })
    });
    return result;
}