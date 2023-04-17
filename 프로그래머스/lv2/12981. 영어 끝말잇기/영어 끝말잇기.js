function solution(n, words) {
    const wordSet = new Set();
    for (let i=0;i<words.length;i++){
        let player = i%n;
        if (wordSet.has(words[i]) || (words[i-1] && words[i][0] !== words[i-1][words[i-1].length-1])){
            return [player+1, Math.floor(i/n)+1];
        } else {
            wordSet.add(words[i]);        
        }
    }
    return [0, 0];
}