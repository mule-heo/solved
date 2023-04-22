function solution(n, s) {
    if (n > s) return [-1];
    if (s%n === 0) return new Array(n).fill(s/n);
    else return [...new Array(n-s%n).fill(Math.floor(s/n)), ...new Array(s%n).fill(Math.ceil(s/n))];
}