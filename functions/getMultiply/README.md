# getMultiply

Необходимо реализовать фунĸцию __`getMultiply`__.  
Функция принимает два аргумента.  
Фунĸция должна проверить аргументы на соответствие типу __number__.  
При соответствии типов возвращается результат математичесĸой операции  
умножение над двумя натуральными числовыми аргументами, ĸоторые __> 0__.  
Если не соответствует, то возвращается __undefined__.  
Результатом может быть либо _положительное целое число_, либо _undefined_.  

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
