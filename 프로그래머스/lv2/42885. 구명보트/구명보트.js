function solution(people, limit) {
    const list = [...people].sort((a,b)=>a-b);
    let count = 0;
    while (list.length){
        count++;
        let current = list.pop();
        //if (current === -1) continue;           
        if (list[list.length-1] + current <= limit){
            //list[list.length-1] = -1;
            list.splice(list.length-1, 1);
            continue;
        }
        if (list[0] + current <= limit){
            for (let i=0;i<list.length-1;i++){
                if (list[i+1] + current > limit){
                    list.splice(i, 1);
                    //list[i] = -1;
                    break;
                }
            }

        }
    }
    return count;
}