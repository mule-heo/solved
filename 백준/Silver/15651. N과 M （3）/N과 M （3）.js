const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();

const [n, k] = input.split(" ").map(v=>+v);

const result = [];

function find(n, k, arr){
    if (k === 0) {
        result.push(arr);
        return;
    }
    for (let i=0;i<n;i++){
        find(n, k-1, [...arr, i+1])
    }
}

find(n, k, []);

console.log(result.map(v => v.join(" ")).join("\n"));