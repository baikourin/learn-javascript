let arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function swap(array, t1, t2){
    let temp = array[t1];
    array[t1] = array[t2];
    array[t2] = temp;
}

function selectionSort(arr){
    let minIndex;
    let len = arr.length;
    for(let i = 0; i < len; i++){
        minIndex = i;
        for(let j = i + 1; j < len; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }
        swap(arr, i, minIndex);
    }
    return arr;
}

console.log(selectionSort(arr));
