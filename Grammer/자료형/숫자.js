/*--- 숫자 ---*/

5        // 5
500000   // 500000

//지수 표현법
5e5      // 500000
5e-5     // 0.00005
0b111    // 7 (이진법) 
0111     // 73 (팔진법) 
         // 0111 = 0o111 둘다 팔진법을 표시한다. 
0x1a1    //417 (16진법)
                   
typeof 0x1a1 //'number'


/* NaN : Not a Number */

NaN            // NaN
typeof NaN     // 'number'
'바나나'-'사과'   // NaN


/* 문자열을 숫자로 바꾸기 */

123                   // 123
'123'                 // '123'
123 + 4               // 127
'123' + 4             // '1234'

parseInt('123')       // 123
parseInt('123') + 5   // 128
Number('123')         // 123
typeof parseInt('123')// "number"

parseInt('3.14')      // 3 
                      // parseInt는 문자열을 정수로 변경한다.
parseFloat('3.14')    // 3.14
                      // parseFloat는 문자열을 소수로 바꾼다.
Number('3.14')        // 3.14
                      // Number는 문자열을 그에맞는 타입에 맞춰 바꿔준다.
                      
parseInt('6월')            // 3
                          // parseInt는 문자열을 최대한 해석하여 숫자로 변환한다.
Number('6월')              // NaN 
                          // 주어진 문자열이 숫자가 아니므로 NaN을 반환한다.
typeof parseInt(prompt()) // prompt()는 사용자의 입력을 받는다. 

parseInt(111, 2)      // 7
                      // parseInt()는 다른 기수를 적용하는데도 사용할 수 있다.
                      // parseInt(해석하려는 값, 기수)


/* 산술 연산자 */
3 + 2                 // 5
3 - 2                 // 1
3 * 2                 // 6
3 / 2                 // 1.5
3 % 2                 // 1
3 ** 2                // 9
                      // ** 는 거듭제곱을 나타낸다.  
2 ** 3                // 8                     
                    

/*  무한값  */
Infinity              // Infinity
2 / 0                 // Infinity
-2 / 0                // -Infinity
typeof -Infinity      // number
Infinity -Infinity    // NaN
0 / 0                 // NaN


/*  형 변환  */
'문자열' + 0            // 문자열0
                      // 문자열 + 숫자의 경우 숫자가 문자열로 바뀌게 된다. 
                      // 자료형이 바뀌는것, 또는 자료형을 바꾸는 행위를 형 변환이라고 한다. 
'1' + 0               // 10

'문자열' - 0            // NaN 
                      // 문자열 - 숫자의 경우 문자열이 숫자로 바뀌게 된다. 
                      // Number('문자열') = Nan 이므로, NaN-0 은  NaN
'4' - 1               // 3
                      // Number('4') = 4 이므로, 4-1 = 3
'6월' - 1              // NaN
                      // parseInt('6월') = 6 이지만
                      // Number('6월') = NaN 이므로, NaN - 1 = NaN
