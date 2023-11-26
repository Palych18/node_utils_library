# getMultiply

The function takes two arguments and checks for a match with the __number__ type.  
If the types match, it returns the result of the mathematical operation  
multiplication over two natural numeric arguments that __> 0__.  
If it does not match, then __undefined__ is returned.  
The result can be either a _positive integer_ or a _undefined_.

```
getMultiply('5', 5) // undefined
getMultiply(5, true) // undefined
getMultiply(-5, 5) // undefined
getMultiply(5, -5) // undefined
getMultiply(5, 0) // undefined
getMultiply(0, 5) // undefined
getMultiply(1.5, 5) // undefined
getMultiply(5, 5) // 25
```
