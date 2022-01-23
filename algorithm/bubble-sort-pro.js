/* 
    Optimization of bubble sort
    The first optimization method is to set a flag bit to mark whether an exchange has occurred, and if there is no exchange, it will end early;
    The second optimization method is to record the position of the "last exchange", which has been sorted as the position where the next comparison ends.
 */

let arr = [10, 9, 8, 7, 6, 5, 3, 4, 2, 1, 1, 3, 2, 3, 2];

function bubbleSortPro(arr){
    let flag;
    let len = arr.length
    for(let i = 1; i <= len - 1; i++){
        flag = false; //The flag must be reset at the beginning of each round
        for(let j = 0; j < len - i; j++){
            if(arr[j] > arr[j + 1]){
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                flag = true;
            }
        }
        if(flag === false){
            break;
        }
    }
    return arr;
}

console.log(bubbleSortPro(arr));
