/*--- 객체(Object) ---*/


/* 배열 */
const a = 10
const b = 20
const variableArray = [a, b, 30]
variableArray[0]                 // 10 (a의 값)
                                 // 변수도 배열에 넣을 수 있다. 
const everyting = ['한글', 1, undefined, null, true]
                                 // 배열의 내부의 값은 자료형이 일치하지 않거나 값이 중복되어도 된다. 
                                 // 배열 내부에 든 값을 요소라고 한다.
everyting.length                 // 5 
                                 // 배열의 .length함수는 요소의 갯수를 반환한다. 

/* 배열에 요소 추가 */
const target = ['a','b','c'];   
target[3] = 'd';                 // d
console.log(target)              // (4) ["a", "b", "c", "d"]
                                 // 원하는 인덱스에 값을 대입하면 요소가 추가된다. 
target[5] = 'f'                  // f
console.log(target)              // (6) ["a", "b", "c", "d",  empty × 2, 'f']

const target = ['가', '나', '다']
target[target.length] = '라'
console.log(target)              // (4) ["가", "니", "다", "라"]
                                 // 배열.length를 사용해 배열의 맨 마지막 자리에 요소를 추가할 수 있다.
                                 
const target = ['a','b','c']; 
target[0] = 'd';                 // 배열의 맨 앞에 요소를 추가하고 싶은 경우 이 방법을 사용하면 첫번째 요소의 값이 바뀌게 된다. 
console.log(target)              // (3) ["d", "b", "c"]

const target = ['a','b','c']; 
target.unshift('d');
console.log(target)              // (4) ["d", "a", "b", "c"]
                                 // unshift를 사용하면 배열의 맨 앞자리에 요소를 추가할 수 있다. 

const target = ['a','b','c']; 
target.push('d');
console.log(target)              // (4) ["a", "b", "c", "d"]
                                 // push를 사용하면 배열의 맨 뒤에 요소를 추가할 수 있다. 

                                 // 이 때 tartget 변수를 const로 선언했는데, 배열을 수정할 수 있음을 알 수 있다. 
                                 // const는 새로운 값을 대입(=)하는것을 할 수 없다. 재대입, 대할당 불가능. 
                                 // const에 객체가 대입되면, 객체 내부의 속성이나 배열의 요소는 수정할 수 있다. 

/* 배열에 요소 제거하기 */
const target = ['a','b','c'];    // (3) ["a", "b", "c"]
target.pop();                    // c
console.log(target)              // (2) ["a", "b"]
                                 // pop을 사용하면 배열의 마지막 요소를 제거할 수 있다.

const target = ['a','b','c'];    // (3) ["a", "b", "c"]
target.shift();                  // a
console.log(target)              // (2) ["b", "c"]
                                 // shift를 사용하면 배열의 맨 첫번째 요소를 제거할 수 있다.

const target = ['a','b','c'];    // (3) ["a", "b", "c"]
target[target.length-1] = null   // null
console.log(target)              // (3) ["a", "b", null]
                                 // 배열의 마지막 요소를 null로 바꾼다고 사라지지 않는다.
                                 // 해당 요소의 값이 null이 될 뿐이다. 

const target = ['a','b','c'];    // (3) ["a", "b", "c"]
target.splice(1,1)
console.log(target)              // (3) ["a", "c"]
                                 // splice(index, 개수) 를 사용하여 배열의 중간요소를 제거할 수 있다.
    
const target = ['a','b','c','d'];// (4) ["a", "b", "c", "d"]
target.splice(2,2)
console.log(target)              // (2) ["a", "b"]
                                 // splice(2,2) 
                                 // index가 2인'c'부터 2개를 지운다. 

const target = ['a','b','c'];    
target.splice(1)
console.log(target)              // (1) ["a"]
                                 //  splice의 파라미터가 한개일경우, 해당 index부터 마지막까지 모든 요소를 제거한다.

const target = ['a','b','c','d','e']; 
target.splice(1,3,'f','g')
console.log(target)              // (4) ["a", "f", "g", "e"]
                                 // splice(1,3,'f','g')
                                 // 인덱스1부터 3개 요소를 지운 후 그 자리에 'f','g'를 채워넣는다는것을 의미한다. 

const target = ['a','b','c'];  
target.splice(2,0,'d')
console.log(target)              // (4) ["a", "b", "d", "c"]
                                 // splice를 이용해 배열에 요소를 넣을 수 있다.
                                 // target.splice(2,0,'d')
                                 // 인덱스 2 자리에 'd'를 채워넣는다.
                                
/* 배열에서 요소 찾기 */
const target = ['a','b','c'];   
const result1 = target.includes('a')
const result2 = target.includes('d')
console.log(result1)             // target에 'a'요소가 존재하므로 true
console.log(result2)             // target에 'd' 요소는 존재하지 않으므로 false
                                 // indluxe 는 주어진 값이 배열에 존재하면 true, 존재하지 않으면 false를 반환한다. 

const target = ['a','b','c']; 
const result = target.indexOf('b')        // 해당 요소의 index값을 반환한다.
const result1 = target.lastIndexOf('b')   // 요소의 index를 배열의 뒤에서부터 찾는다.
const result3 = target.indexOf('f')       // 해당 요소가 존재하지 않으면 -1 를 반환한다. 
console.log(result)                       // 1
console.log(result1)                      // 1
console.log(result2)                      // -1 
 

