function myFunc(arr){
    arr.forEach(function(item , index){
        if(item <= 10){
            console.log("A[" + index + "] = " + item +"\n");
        }
    });
}
let arr = [1,2,100,0,30];
console.log(myFunc(arr));