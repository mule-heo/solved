function solution(s) {
  const st = [];
  for( let i of s ){
      st.push(i)
      if(st[st.length-1] == st[st.length-2] ){
          st.pop()
          st.pop()
      }
  }
  return (st.length == 0) ? 1 : 0;
}