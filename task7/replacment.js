function myFunc(arr){
    for (let i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            arr[i] = 1;
        }else if(arr[i] < 0){
            arr[i] = 2;
        }else{
            arr[i] = 0;
        }
    }
    return arr;
}
let arr = [1,-2,0,3,4];
console.log(myFunc(arr));