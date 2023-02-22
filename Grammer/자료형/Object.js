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




/*--- 객체 리터럴---*/
const person = {
    name: 'ABC',
    year: 1997,
    month: 6,
    date: 15,
    gender: 'M'
};                             // {}를 사용해 객체를 표헌하는 것을 객체 리터럴이라고 한다. 

const obj = {
    nane: 'hello',
    '1ab': 'hello',            
    'a b': 'hello',
    'a_b': 'hello'
}                              // 속성 이름에 제일 첫글자가 숫자이거나, 공백 또는 틀수문자가 포함되어 있으면 따옴표를 사용한다. 

console.log(person.name)
console.log(person['name'])    // 리터럴 값에 접근하는 방법
console.log(obj["1ab"])        
console.log(obj["a b"])        // 속성 이름을 따옴표로 묶은 경우엔 대괄호만 사용할 수 있다. 
console.log(person.age)        // undefined
                               // 없는값에 접근할 경우 undefined를 반환한다.

person.name = 'BCD'
console.log(person.name)       // BCD
                               
/* 객체 속성 제거하기 */
delete person.name;
console.log(person.name);      // undefined
                               // const로 정의되어있지만, 객체 자체를 수정 못할 뿐 객체 내부는 수정할 수 있다. 

/* 배열과 함수가 객체인 이유 */
function hello() {}
hello.a = "Hello, ";
const array = [];
array.b = "World";
console.log(hello().a);        // Hello, 
console.log(array.b);          // World
                               // 배열과 함수가 객체인 이뉴는 객체의 성질을 모두 다 사용하기 때문이다. 
                               // 함수와 배열에서도 속성을 추가 수정 제거할 수 있다. 

/* 매서드 */
const A = {
   log: function(value) {      // 매서드. 객체의 속성 값으로 함수를 넣었을 때 이 속성을 메서드라고 한다. 
       console.log(value);
   },
};                             
A.log('Hello, World!');        // Hello, World!
