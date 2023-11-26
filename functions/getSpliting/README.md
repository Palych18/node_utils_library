# getSpliting

The function takes two arguments and checks for a match with the __number__ type.  
If the types match, it returns the result of the mathematical operation  
division over two natural numeric arguments, ĸwhich __> 0__.  
If it does not match, __undefined__ is returned.  
The function checks that the number being divided is greater than the divisor.  
The result can be either a _positive integer_ or a _undefined_.

```
getSpliting('5', 5) // undefined
getSpliting(5, true) // undefined
getSpliting(-5, 5) // undefined
getSpliting(5, -5) // undefined
getSpliting(5, 0) // undefined
getSpliting(0, 5) // undefined
getSpliting(3, 5) // undefined
getSpliting(5, 3) // undefined
getSpliting(5, 5) // undefined
getSpliting(5.5, 5) // undefined
getSpliting(15, 5) // 3
```
