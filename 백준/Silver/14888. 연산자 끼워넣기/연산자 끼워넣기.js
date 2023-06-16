const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const length = +input[0];
const nums = input[1].split(" ").map(v => +v);
const operators = [];

// 연산자 경우의 수 구하기
const operatorMap = {
    0: "+",
    1: "-",
    2: "*",
    3: "/"
}

input[2].split(" ").forEach((v,i) => operators.push(...operatorMap[i].repeat(+v).split("")))

// 연산 함수
function caculate(num1, num2, operator){
    if (operator === "+"){
        return num1 + num2;
    } else if (operator === "-"){
        return num1 - num2;
    } else if (operator === "*"){
        return num1 * num2;
    } else if (operator === "/"){
        if (num1 * num2 > 0){
            return Math.floor(num1 / num2);
        } else {
            return Math.ceil(num1 / num2);
        }
    } else {
        throw new Error("Invalid operator.")
    }
}

// 숫자 배열, 연산자 배열을 통해 값 계산
function caculateAll(nums, operators){
    if (nums.length !== operators.length+1){
        console.log("cannot be evaluated.");
        return;
    }
    let result = nums[0];
    for (let i=0;i<nums.length-1;i++){
        result = caculate(result, nums[i+1], operators[i]);
    }
    return result;
}

// 각 연산자의 조합 경우의 수마다 계산을 수행한 후 최댓값, 최솟값 비교하여 반영하기
const maxMin = [-Infinity, Infinity];

function search(arr, k=0, order){
    if (k === length-1){
        let result = caculateAll(nums, order);
        if (result > maxMin[0]) maxMin[0] = result;
        if (result < maxMin[1]) maxMin[1] = result;
        return;
    }
    for (let i=0;i<arr.length;i++){
        search(arr.filter((v, idx) => idx !== i), k+1, [...order, arr[i]])
    }
}

search(operators, 0, []);


console.log(maxMin.join("\n"));