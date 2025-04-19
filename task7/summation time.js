function myFunc(arr){
    let sum = 0;
    arr.forEach(function(num){
        sum += num;
    });
    return Math.abs(sum);
}

let arr = [-1 , 2 , -3];
console.log(myFunc(arr));