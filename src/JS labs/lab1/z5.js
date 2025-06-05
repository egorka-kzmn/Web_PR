function Year(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("yes");
  } else {
    console.log("no");
  }
}


Year(1984);   // yes
Year(2003);   // no
Year(4);   // yes
