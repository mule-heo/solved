function solution(s){
    const stack = [];
    for (let alphabet of s){
        if (stack[stack.length-1] === alphabet){
          stack.pop();  
        } else {
          stack.push(alphabet);
        }
    }
    return +!stack.length;
}