function myFunc(arr){
    let res = arr.filter((item)=>{return item % 2 == 0}).map((item)=>{return item * 2});

    return res;
}
let arr = [3,4,7,10,9,2];
console.log(myFunc(arr));