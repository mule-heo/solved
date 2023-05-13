function solution(n, t, m, p) {
    let str = ""
    let count = 0;
    let length = t * m - (m - p);
    while (str.length < length){
        str += (count++).toString(n).toUpperCase();
    }
    
    let result = "";
    for (let i=p-1;i<length;i+=m){
        result += str[i];
    }
    return result;
}