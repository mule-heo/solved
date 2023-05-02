function solution(want, number, discount) {
    // 두 map이 가진 값 비교하는 함수
    function compareTwoMaps(mapTarget, mapCompare){
        const keys1 = Array.from(mapTarget.keys());
        const keys2 = Array.from(mapCompare.keys());
        if (new Set([...keys1, ...keys2]).size !== keys1.length) return false;
        for (let key of keys1){
            if (mapTarget.get(key) !== mapCompare.get(key)) return false;
        }
        return true;
    }
    // want로부터 targetMap 생성
    const tenDaysMap = new Map();
    const targetMap = new Map();
    want.map((v,i) => {
        targetMap.set(v,number[i]);
    })
    // 초기 10일짜리 배열 생성
    let count = 0;
    const tenDays = [];
    for (let i=0;i<10;i++){
        let item = discount.shift();
        tenDays.push(item);
        tenDaysMap.set(item, (tenDaysMap.get(item)??0)+1);
    }
    
    // 최초 1회 실행 보장. 10일짜리 배열로부터 0번 상품 shift, 다음 상품 push
    do {
        if (compareTwoMaps(targetMap, tenDaysMap)){
            count++;
            while (tenDays[0] === discount[0]){
                count++;
                tenDays.push(tenDays.shift());
                discount.shift();
            }
        }
        let removed = tenDays.shift();
        let decreased = tenDaysMap.get(removed) - 1;
        if (decreased === 0) tenDaysMap.delete(removed);
        else tenDaysMap.set(removed, decreased);

        let added = discount.shift();
        tenDays.push(added);
        tenDaysMap.set(added, (tenDaysMap.get(added)??0)+1);

    } while (discount.length)
        
    return count;
}