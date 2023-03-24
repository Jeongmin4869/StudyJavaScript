/*--- sort 와 slice ---*/


/*  slice  */
const array = [3, 2, 9, 7, 5, 1, 4, 6, 8];
array.slice()      // [3, 2, 9, 7, 5, 1, 4, 6, 8]
                   // 원본 배열이 그대로 반환된다. 
                   // slice는 참조가 아닌 복사이다. 
array.slice(1,3)   // [2, 9]
array              // [3, 2, 9, 7, 5, 1, 4, 6, 8]
                   // slice 는 원본 배열을 변경하지 않는다. 
                   // splice는 원본 배열을 변경한다.
                   // slice 로는 새로운 배열을 추가할 수 없다.
array.slice(4,-1)  // [5, 1, 4, 6]
                   // 음수는 뒤에서부터 센 인덱스이다. 
array.slice(-5,-1) // [5, 1, 4, 6]
array.slice(4)     // [5, 1, 4, 6, 8]


/*  sort  */
array.sort((a,b)=> {
    return a-b;                  // 오름차순
});                              // [1, 2, 3, 4, 5, 6, 7, 8, 9]
                                 // compareFunction(a,b) 이 0 보다 작은 경우 a를 b보다 낮은 인덱스로 소트한다. 
                                 // compareFunction(a,b) 이 0 보다 큰 경우 b를 a보다 낮은 인덱스로 소트한다. 
                                 // sort 는 원본 배열을 변경한다. 
array.slice().sort((a,b)=>a-b);  // [1, 2, 3, 4, 5, 6, 7, 8, 9]
                                 // slice를 사용하면 원본배열을 변경하지 않고도 정렬할 수 있다. 
array.slice().sort((a,b)=>a-b);  // [9, 8, 7, 6, 5, 4, 3, 2, 1]

arr = ['apple', 'peach', 'banana'];
arr.slice().sort((a,b)=>a-b);                                       // ["apple", "banana", "peach"]
arr.slice().sort((a,b) => a[0].charCodeAt() - b[0].charCodeAt() );  // ["apple", "banana", "peach"]
                                                                    // 각 문자의 첫번째 넘버의 코드를 비교
arr.slice().sort((a,b) => a.localCompare(b));                       // ["apple", "banana", "peach"]
                                                                    //  사전 순 정렬
arr.slice().sort((a,b) => a.localCompare(b));                       // ["peach", "banana", "apple"]