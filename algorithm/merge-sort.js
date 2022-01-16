function insertionSort(arr, l, r){
    for(let i = l; i <= r; i++){
        let temp = arr[i],
            j;
        for(j = i; j > l && arr[j - 1] > temp; j--){
            arr[j] = arr[j - 1];
        }
        arr[j] = temp;
    }
}

function merge(arr, l, mid, r){
    let aux = new Array(r - l + 1);

    for(let z = l; z <= r; z++){
        aux[z - l] = arr[z];
    }
    let i = l;
    let j = mid + 1;
    for(k = l; k <= r; k++){
        if(i > mid){
            arr[k] = aux[j - l];
            j++
        }else if(j > r){
            arr[k] = aux[i - l];
            i++;
        }else if(aux[i - l] < aux[j - l]){
            arr[k] = aux[i - l];
            i++;
        }else{
            arr[k] = aux[j - l];
            j++;
        }
    }
}

function sort(arr, l, r){
    // if(l >= r){
    //     return;
    // }
    if(r - l < 15){
        insertionSort(arr, l, r);
    }
    let mid = Math.floor((r - l)/ 2); 
    sort(arr, l, mid);
    sort(arr, mid + 1, r);
    if(arr[mid] > arr[mid + 1]){ 
       merge(arr, l, mid, r);
    }
}

function mergeSort(arr){
    sort(arr, 0, arr.length - 1);
}
