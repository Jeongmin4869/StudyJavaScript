/*--- 불값 ---*/
true             // true. 문자열이 아니기때문에 따옴표로 감싸지 않는다.
typeof true      // boolean
6 == 1           // false
NaN == NaN       // false
                 // NaN끼리 비교하면 false를 출력한다. 다면 != 연산은 true를 출력한다. 
true > false     // true 
                 // true=1 false=0

'b' > 'a'        // true
'&'.charCodeAt() // 38
                 // 문자의 번호를 알아보기 위해선 charCodeAt()을 사용한다. 
'a'.charCodeAt() // 97
'b'.charCodeAt() // 98


/* 문자열과 숫자 비교 */
'3' < 5          // true
                 // 숫자랑 문자열을 비교할때 문자열이 숫자로 바뀌게 된다. 
                 // 3 < 5 == true
'abc' < 5        // false
                 // 문자열을 숫자로 바꾸면 NaN이된다.
                 // NaN과의 비교는 false이다. 


/* 불값 연산 */
'0' < true       // true
                 // 불값도 비교연산을 할 때 숫자로 형 변환이 된다.
                 // 문자열 0은 숫자 0이되고, true는 숫자 1이된다. 


/* == 와 === 의 차이 */
'1' == 1         // true
                 // ==는 값만 비교하고 자료형은 비교하지 않다. 
1 == true        // true
1 == '1'         // true

'1' === 1        // false
                 // ===는 값 뿐만 아니라 자료형이 같은지까지 비교한다. 
1 === true       // false
1 === '1'        // false

1 != '1'         // false
1 !== '1'        // true
                 // !==는 자료형까지 비교한다. 
