function solution(arr1, arr2) {
    // m x n , n x p => m x p
    const ROWS = arr1.length;
    const COLUMNS = arr2[0].length;
    // 참조 자료형...
    const answer = new Array(ROWS).fill().map(v=> [...new Array(COLUMNS).fill(0)]);
    const process = [];
    for (let m=0;m<ROWS;m++){
        for (let n=0;n<arr1[0].length;n++){
            for (let p=0;p<COLUMNS;p++){
                answer[m][p] += arr1[m][n] * arr2[n][p];
            }
        }
    }  
    return answer;
}