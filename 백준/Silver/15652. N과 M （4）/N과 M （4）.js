const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();

const [n, k] = input.split(" ").map(v=>+v);

const result = [];

const arr = new Array(n).fill().map((v,i)=> i+1);

function find(arr, k, order){
    if (k === 0) {
        result.push(order);
        return;
    }
    for (let i=0;i<arr.length;i++){
        find(arr.filter(v => v >= arr[i]), k-1, [...order, arr[i]])
    }
}

find(arr, k, []);

console.log(result.map(v => v.join(" ")).join("\n"));