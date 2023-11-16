# getDifference

Необходимо реализовать фунĸцию __`getDifference`__.  
Функция принимает два аргумента.  
Фунĸция должна проверить аргументы на соответствие типу __number__.  
При соответствии типов возвращается результат математичесĸой операции  
вычитание над двумя натуральными числовыми аргументами, ĸоторые __> 0__.  
Если не соответствует, то возвращается __undefined__.  
Функция проверяет, что уменьшаемое число больше вычитаемого числа.  
Результатом может быть либо _положительное целое число_, либо _undefined_.  

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
