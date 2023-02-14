/*--- 논리연산자 ---*/

Boolean('a')      // true
                  // 문자열 또는 숫자의 bool값을 알고싶은경우 Boolean을 사용하여 형변환을 한다.
!!'a'             // true
                  // Boolean대신 !!를 사용하면 같은 결과값을 얻을 수 있다. 
!!''              // false
!!' '             // true
!!0               // false
!!'0'             // true
!!NaN             // false
!!undefined       // false
!!null            // false

!(2<0)            // true
!2 < 0            // false 
                  // ! 연산자의 우선순위가 비교연산자보다 높다. 
                  // !2 = false = 0


/*--- 빈 값 (undefined, null) ---*/

console.log("hello, world!")     // undefined 
                                 // 반환값이 없을때는 undefined를 반환한다.
typeof undefined                 // undefined
!!undefined                      // false

undefined == false               // false
undefined == 0                   // false
undefined == ''                  // false
                                 // undefined와 false는 같지 않으며 
                                 // undefined는 false인 값과 같지 않다. 

undefined == null                // true
undefined === null               // false
                                 // null은 undefined처럼 빈 값을 의미하지만 같지 않다.

!!null                           // true
null == false                    // false
null == 0                        // false
null == ''                       // false
                                 // null은 false와 같지 않다. 다른 거짓인 값들과도 같지 않다. 
 typeof null                     // object
                                 // null이아니라 object가 나온다. JavaScript버그.
                                 // null 값을 확인하기 위해서는 === null 을 사용한다.  
