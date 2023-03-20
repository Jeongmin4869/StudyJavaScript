/*--- 배열메소드 ---*/

/* forEach */
const array = [3, 4, 1, 2];
array.forEach((element, index) => {
    // element : 요소
    // index : 인덱스
    // 배열의 요소들을 순서대로 함수를 적용해 실행시킨다. 
})

/* Map */
const array2 = [1, 2, 3, 4];
const result = [];
for (let i = 0; i<array2.length; i++){
    result.push(array2[i] * 2);
}
console.log(result);      // {2, 4, 6, 8}

array2.map( (element, i) => {
    return element * 2; 
})                        // {2, 4, 6, 8}
console.log(array2);      // {1, 2, 3, 4}


/* fill */
Array(3)                  // 길이가 9인 빈 배열 생성
                          // [empty x 3]
Array(3).fill()           // [undefined, undefined, undefined]
Array(3).fill(0)          // [0, 0, 0] 

Array(9).fill(0).map((element, idx) => {
    return idx+1;
})                        // [1, 2, 3, 4, 5, 6, 7, 8, 9] 

