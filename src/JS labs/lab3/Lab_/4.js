function matr(arr1, arr2, arr3) {
    let sum1=0;
    let sum2=0;
    let sum3 =0;
    for (let i=0; i<arr1.length;i++){
        arr1[i]=Number(arr1[i]);
    }
    for(let num of arr1){
        sum1+=num;
    }
    for (let i=0; i<arr2.length;i++){
        arr2[i]=Number(arr2[i]);
    }
    for(let num of arr2){
        sum2+=num;
    }
    for (let i=0; i<arr2.length;i++){
        arr2[i]=Number(arr2[i]);
    }
    for(let num of arr3){
        sum3+=num;
    }
    let areEqual = true;
    if (sum1 === sum2 && sum2 === sum3) {
    areEqual = true;}
    else areEqual= false;

    console.log(areEqual);
    
}
matr([4,5,6], [6,5,4], [5,5,5]);
matr([11,32,45], [21,0,1], [21,1,1]);
matr([1,0,0], [0,0,1], [0,1,0]);
