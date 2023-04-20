function solution(n){
    let battery = 0;
    // n을 2로 나누다가 홀수가 되면 n에서 1을 빼고 battery에는 1 추가
    while (n > 0){
        while (!(n%2)){
            n >>= 1;
        }
        n -= 1;
        battery++;
    }
    return battery;
}