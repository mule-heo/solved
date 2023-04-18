function solution(brown, yellow) {
    // 2n + 2m - 4 = brown 테두리 길이
    // (n-2) * (m-2) = yellow 중앙 영역
    let sum = (brown + yellow);
    const potentialNM = [];
    for (let i=1;i<=Math.sqrt(sum);i++){
        if (!(sum%i)){
            potentialNM.push([sum/i, i]);
        }
    }
    for (let nm of potentialNM){
        if (2 * nm[0] + 2 * nm[1] - 4 === brown) return nm;
    }
    // Leo를 믿을 수 없어서 추가 -> 조건을 만족하는 [n, m]이 존재하지 않음
    return false;
}