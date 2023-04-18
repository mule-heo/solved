function solution(brown, yellow) {
    // 2n + 2m - 4 = brown 테두리 길이
    // (n-2) * (m-2) = yellow 중앙 영역
    let sum = (brown + yellow);
    // 개선 - 약수 구하는 과정 생략하고 바로 조건 비교
    for (let i=1;i<=Math.sqrt(sum);i++){
        if (!(sum%i)){
            if (2 * sum/i + 2 * i - 4 === brown){
                return [sum/i, i];
            }
        }
    }
    // Leo를 믿을 수 없어서 추가 -> 조건을 만족하는 [n, m]이 존재하지 않음
    return false;
}