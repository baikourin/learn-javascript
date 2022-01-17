
let arr = [10, 9, 8, 7, 6, 5, 3, 4, 2, 1, 1, 3, 2, 3, 2];

function bubbleSortPro2(arr){
    let k = 0;
    let n = arr.length;
    for(let i = 1, len = arr.length; i <= len - 1; i++){
        k = n;     //每一轮 都需重新设置到 上一轮冒泡结束的位置
        n = 0;      
        for(let j = 0; j < k - 1; j++){
            if(arr[j] > arr[j + 1]){
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                n = j + 1;
            }
        }
    }
    return arr;
}

console.log(bubbleSortPro2(arr));
