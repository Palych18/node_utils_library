# convertRomanToArabian  

The function converts a Roman numeral to an integer decimal number.  
It accepts a Roman numeral as a string as an argument.  
The function returns the value as an integer decimal number.  
The form of the Roman numeral is not checked.

__Rules for writing Roman numerals.__

Modern Roman numerals are written by separately expressing each decimal digit  
of the encoded number, starting with the leftmost digit and skipping all 0's.


__1990__ year is written as __"MCMXC"__ 1000 = M, 900 = CM, 90 = XC  
__2008__ year is written as __"MMVIII"__ 2000 = MM, 8 = VIII  
In the Roman numeral __1666__ year __"MDCLXVI"__ each letter is used  
in descending order.

__Digit designation:__

I - 1  
V - 5  
X - 10  
L - 50  
C - 100  
D - 500  
M - 1,000  

```
convertRomanToArabian('MCMXC') // 1990
convertRomanToArabian('MMVIII') // 2008
convertRomanToArabian('MDCLXVI') // 1666
```
