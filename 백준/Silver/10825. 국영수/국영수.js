const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const arr = input.slice(1).map(v => v.split(" "));

arr.sort((a,b) => +b[1] - +a[1] || +a[2] - +b[2] || +b[3] - +a[3] || (a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0));

let result = arr.reduce((acc,cur) => acc + cur[0] + '\n', '');
console.log(result.slice(0,-1));