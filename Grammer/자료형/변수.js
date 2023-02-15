/*--- 변수선언(let) ---*/

let string = 123213421;    // undefined
                           // 변수 선언과 함께 초기화
string                     // 123213421

let empty;                 // undefined
empty                      // undefined
                           // 값을 대입하지 않은 변수를 입력하면 undefined를 출력

let $_ = 'hello'           // undefined
                           // 변수명으로 사용가능한 특수문자는 '$','_' 이다.
let 안녕 = 'hi'             // undefined
                           // 한글, 한자로 변수명을 선언할 수 있다. 
let banana3;               // undefined
let 3banana;               // 에러발생
                           // 숫자로 변수를 선언하는것도 가능하나, 숫자가 제일 처음 나오면 안된다. 

let let;                   // 예약어 아님
let class;                 // 예약어


/* 변수 바꾸기 */

let fruit = "apple"        // undefined
fruit = "banana"           // banana
                           // 선언은 undefined이지만 변경은 값을 가진다. 

fruit = undefined          // undefined
fruit = null               // null
                           // 둘다 변수값을 비우는 역할을 한다. 
                           // undefined는 기본값이고, null은 개발자가 임의로 정해주는 값이다.
                           // 개발자가 의도를 가지고 변수를 비울 경우, null로 바꾸는것이 더 명확하다. 

