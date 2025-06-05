function summa(a) {
  var sum=0;
  var string =""+a
  for(var i=0;i<string.length;i++)
  sum+= +string[i]
  console.log(sum)
}

summa(245678);   // 32
summa(97561);   //  28
summa(543);    // 12
