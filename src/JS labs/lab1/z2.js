function roundNumber(a, n) {

  if (n > 15) {
    n = 15;
  }

  const number = Math.pow(10, n);
  const r = Math.round(a * number) / number;
  const result = parseFloat(r.toFixed(n));

  console.log(result);
}

roundNumber(3.1415926535897932384626433832795, 2); //  3.14
roundNumber(10.5, 3);       // 10.5
