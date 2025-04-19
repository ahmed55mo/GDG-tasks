function myFunc(arr , number){
    let res = arr.filter((item)=>{return item <= 100});
    let NewArr =  res.slice(0 , number+1);
    return NewArr;
}
let arr = [5,200,15,300,8,100,55];
console.log(myFunc(arr , 2));