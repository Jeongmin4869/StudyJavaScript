/*--- 함수 ---*/
function() {}
() => {}

/* 함수 선언 */
function name1() {}                   // 함수선언문
const name2 = function() {}           // 함수표현식 : 변수에 함수의 이름을 대신함. 
const name3 = () => {}                // 화살표 함수
                                      // 함수 선언에는 세미콜론을 붙이지 않는다. 
/* 함수 호출 */
function a() {}
a();
function() {}                         // 이름이 없는 함수 -> 익명함수.
                                      // 익명함수는 호출할 수 없고, 한번만 사용할 수 있다. 

function a_1(){
    return;
}
function a_2(){
    return undefined;
}                                     // a_1과 a_2의 리턴값은 동일하다.

/* 매개변수(parameter) 와 인수(argument) */
function a(parameter){                // 함수를 선언할때 사용하는것이 parameter 
    console.log(parameter);
}
a(argument)                           // 함수를 호출할때 사용하는것이 argument

function a(w, x, y, z){
    console.log(w, x, y, z)
    console.log(arguments)            // function함수 안에서만 쓸 수 있는 arguments 
}
a("Hello", "World", "!")              // Hello World ! defined -> 매개변수와 짝지어지는 인수가 없으면 기본값(undefined)
                                      // Arguments(3) ['Hello', 'World', '!']

function add(x, y){
    return x+y;
}
add(1,2)                              // 3
add(3)                                // NaN. 3 + undefined

function a(w, x, y){
    console.log(x, y, z)
}
a("Hello", "World", "!", "Cat")       // Hello World !
                                      // 인수가 매개변수보다 많을경우 무시된다. 

const f = (x, y, z) => {
    return x * y * z;
}
f(2, 3, 4)                            // 24
                                      // 화살표변수는 생성할때는 그 기능을 알 수 없고, 호출할때 기능을 알 수 있다. 

const f = (x, y, z) => (x * y * z);   // 화살표함수는 중괄호 바로 뒤에 return이 올 경우 붙여서 사용할 수 있다. 
                                      // 중괄호랑  return 생략
