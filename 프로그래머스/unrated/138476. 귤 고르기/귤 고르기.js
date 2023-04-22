function solution(k, tangerine) {
    // 가독성을 위해 단계별로 구분하여 재선언 및 재할당하였던 코드를 한 줄로 줄여 작성
    
    // tangerine 순회하며 요소별 개수를 map에 기록
    const map = new Map();
    for (let el of tangerine) map.set(el, (map.get(el)??0) + 1);
    
    // 정렬 1번 기준: 수량 많은 순, 2번 기준: 낮은 품질순
    // set으로 중복 제거
    return new Set(tangerine.sort((a,b) => map.get(b)-map.get(a)||a-b).slice(0,k)).size;
}