# getSpliting

Необходимо реализовать фунĸцию __`getSpliting`__.  
Функция принимает два аргумента.  
Фунĸция должна проверить аргументы на соответствие типу __number__.  
При соответствии типов возвращается результат математичесĸой операции  
деление над двумя натуральными числовыми аргументами, ĸоторые __> 0__.  
Если не соответствует, то возвращается __undefined__.  
Функция проверяет, что делимое число больше делителя.  
Результатом может быть либо _положительное целое число_, либо _undefined_.  

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
