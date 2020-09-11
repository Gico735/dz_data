function FooBar(c, n) {
  let p = 2 ** n;
  console.log(p);
  let res = 1;
  while (p > 0) {
    res = res * c;
    p = p - 1;
  }
  return res;
}

function FooBar2(c, n) {
  return c ** (2 ** n);
}