function solution(clothes) {
    const map = new Map();
    for (let cloth of clothes){
        const [item, category] = cloth;
        if (map.has(category)) map.set(category, [...map.get(category), item]);
        else map.set(category, [item]);
    }
    const arrMap = Array.from(map.entries());
    // 0~n개 선택하는 경우 전부 곱해서 구하고 -1 (전부 0인 경우 단 하나)
    const result = arrMap.reduce((acc, cur) =>
        acc = acc * (cur[1].length+1), 1);
    return result - 1;
}