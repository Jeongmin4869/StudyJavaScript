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

