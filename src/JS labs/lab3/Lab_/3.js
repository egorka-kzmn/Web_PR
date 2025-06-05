function masiv(arr, n) {
    
    for (let i=0; i<n;i++){
        arr.push(arr.shift());
    }


    console.log(arr.join(" "));
    
}
masiv([51,47,32,61,21], 2);
masiv([32,21,61,1], 4);
masiv([2,4,15,31], 5);

