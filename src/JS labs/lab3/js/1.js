function oper(arr) {
    
    for (let i=0; i<arr.length;i++){
        arr[i]=Number(arr[i]);
    }

    let sum =0;
    for(let num of arr){
        sum+=num;
    }
      

    let isum =0;

    for (let i=0; i<arr.length;i++){
        if(num % 2 === 0) {
            arr[i]= arr[i]
        }
        arr[i]=Number(arr[i]);
    }

       for(let num of arr2){
        isum+=num;
    }

       console.log(sum);
      console.log(isum);

}
oper(['5','15','23','56','35']);
