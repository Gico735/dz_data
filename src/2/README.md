## Алгоритм ##
```js
function FooBar(c, n) {
  let p = 2 ** n;
  let res = 1;
  while (p > 0) {
    res = res * c;
    p = p - 1;
  }
  return res;
}
```

 1. временная сложность относительно n: O(2^n)
 2. можем временая сложность будет: O(1)
```js
function FooBar2(c, n) {
  return c ** (2 ** n);
}
```
