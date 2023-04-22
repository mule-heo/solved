function solution(s) {
    const open = ["(", "[", "{"];
    const close = [")", "]", "}"];
    let count = 0;
    
    moveLeft:
    for (let i=0;i<s.length;i++){
        const st = [];
        const convertedS = [...s.slice(i), ...s.slice(0,i)];
        
        for (let el of convertedS){
            if (open.includes(el)) st.push(el);
            else {
                if (st.length === 0){
                    continue moveLeft;
                } else {
                    if (open[close.indexOf(el)] === st[st.length-1]){
                        st.pop();
                    } else {
                        continue moveLeft;
                    }
                }
            }
        }
        count += +(st.length===0);
    }
    return count;
}