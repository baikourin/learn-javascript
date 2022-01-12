let arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function quickSort(arr){
    if(!arr.length){
        return [];
    }
    let leftArr = [];
    let rightArr = [];
    let p = arr[0]; 
    for(let i = 1, len = arr.length; i < len; i++){
        if(p > arr[i]){
            leftArr.push(arr[i]);
        }else{
            rightArr.push(arr[i]);
        }
    }
    return quickSort(leftArr).concat(p, quickSort(rightArr));
}

let res = quickSort(arr)

console.log('res::', res);
