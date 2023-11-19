# getDifference

The function takes two arguments and checks for a match with the __number__ type.
If the types match, it returns the result of the mathematical operation  
subtraction over two natural numeric arguments, ĸwhich __> 0__.  
If it does not match, __undefined__ is returned.  
The function checks that the number being reduced is greater than the number being subtracted.  
The result can be either a _positive integer_ or _undefined_.

```
getDifference('5', 5) // undefined
getDifference(5, true) // undefined
getDifference(-5, 5) // undefined
getDifference(5, -5) // undefined
getDifference(3, 5) // undefined
getDifference(0, 5) // undefined
getDifference(3, 0) // undefined
getDifference(5, 5) // undefined
getDifference(5, 3) // 2
```
