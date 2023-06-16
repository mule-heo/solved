const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

console.log(input[1].split(" ").map(v=>+v).sort((a,b)=>b-a).reduce((acc,cur, _, arr) => acc + cur/arr[0] * 100, 0)/+input[0]);