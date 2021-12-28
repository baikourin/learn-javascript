/* 
    Bubble sort
    The first layer of loop controls how many loops of bubbling (n - 1) are required in total. Each round will bubble up a maximum number to the end of the array
     The second layer of loop starts from the leftmost v[0] every time, and compares it with the element to the right of it.
 */

let arr = [10, 10, 9, 9, 8, 7, 6, 5, 3, 4, 2, 1, 1, 3, 2, 3, 2];

function bubbleSort(arr){
    let temp;
    let len = arr.length;
    for(let i = 1; i <= len - 1; i++) {
        for(let j = 0; j < len - i; j++) {
            if(arr[j] > arr[j + 1]){
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort(arr));
