# getSum

The function takes two arguments and checks for a match with the __number__ type.  
If the types match, it returns the result of the mathematical operation  
addition over two natural numeric arguments, ĸwhich __> 0__.  
If it does not match, then __undefined__ is returned.  
The result can be either a _positive integer_ or a _undefined_.

```
getSum('5', 5) // undefined
getSum(5, true) // undefined
getSum(-5, 5) // undefined
getSum(5, -5) // undefined
getSum(5, 0) // undefined
getSum(5, 5) // 10
```
