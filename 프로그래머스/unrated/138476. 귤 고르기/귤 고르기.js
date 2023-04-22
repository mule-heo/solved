function solution(k, tangerine) { 
    const map = new Map();
    for (let el of tangerine) map.set(el, (map.get(el)??0) + 1);
    
    tangerine.sort((a,b) => map.get(b)-map.get(a)||a-b);
    
    // slice해서 set 만드는 대신 바로 순회하면서 k개까지만 연산
    // 이전 요소(previous)와 다른 요소인 경우 count++
    let previous = 0;
    let count = 0;
    for (let i=0;i<tangerine.length;i++){
        if (i === k){
            return count;
        }
        if (tangerine[i] !== previous){
            previous = tangerine[i];
            count++;
        }
    }
    return count;
}