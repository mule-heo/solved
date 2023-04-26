function solution(s) {
    s = s.match(/[\d]{1,}/g);
    const map = new Map();
    for (let num of s){
        map.set(num, map.has(num) ? map.get(num) + 1 : 1);
    }
    return Array.from(new Set(s)).sort((a,b)=>map.get(b)-map.get(a)).map(v=>+v);
}