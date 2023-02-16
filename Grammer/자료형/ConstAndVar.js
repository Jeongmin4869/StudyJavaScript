/*--- 상수(const)와 var ---*/
const value = "상수"           // undefined
value = "상수아님"              // 에러발생
                              // 상수는 변하지 않는 수. 값을 바꿀 수 없다. 

let value2                    // empty
const value3                  // 에러발생
                              // const 는 값을 바꿀 수 없으므로 처음에 값을 선언하지 않으면 에러가 발생한다. 

var variable = "변수"          // undefined
variable = "바꿀수있다."         // undefined
                              // 값을 변경할 수 있으며 let 과 매우 유사하다. 

var value4 = "선언"            // undefined
var value4 = "다시선언"         // 값을 다시 선언 할 수 있으며 let은 이때 에러가 발생한다.
let value5 = "선언"            // undefined
let value5 = "다시선언"         // 에러발생!
                              // let은 재선언 할 수 없다. 

var undefined = "undefined"   // undefined
var Infinity = "Infinity"     // undefined
var let = "let"               // undefined
                              // var 은 예약어를 변수로 사용할 수 있다. 
                              // var 을 사용하면 직관적으로 알기 어려운 부분이 많기때문에 let을 사용한다. 
