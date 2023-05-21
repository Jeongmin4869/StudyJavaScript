function aaa(){
  setTimeout(()=>{
    console.log('d');
  }, 0);
  console.log('c');  
}

setTimeout(() => {
  console.log('a');
  aaa();
}, 0);

setTimeout( () => {
  aaa();
  console.log('b');
}, 0);

// 호출스택 : anonymous -> setTimeout(타이머1)
//          anonymous -> setTimeout(타이머2)
//          타이마1-0초 -> console.log('a')
//          타이마1-0초 -> aaa -> setTimeout(타이머3)
//          타이마1-0초 -> aaa -> console.log('c')
//          타이머2-0초 -> aaa -> setTimeout(타이머3)
//          타이머2-0초 -> aaa -> console.log('c')
//          타이머2-0초 -> console.log('b')
//          타이머3-0초 -> console.log('d')
//          타이머3-0초 -> console.log('d')
// 백그라운드 : 타이머1-0초, 타이머2-0초, 타이머3-0초
// 태스크큐  : 타이머1-0초, 타이머2-0초, 타이머3-0초, 타이머3-0초
// 콘솔     : a, c, c, b, d, d