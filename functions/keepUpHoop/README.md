# keepUpHoop

The user enters the number of rotations of the hoop __(n)__.  

The function returns a message to the user:  
- If the user has scrolled less than 10 times, a string will be returned  
__"Keep going until you get it right"__  
- If the user scrolls the hoop 10 or more times, the string will be returned  
__"Great, now on to tricks"__  
- If the user enters something other than a number, a string will be returned  
__"Enter a number"__

```
keepUpHoop(4) // 'Keep going until you get it right';
keepUpHoop(17) // 'Great, now on to tricks';
keepUpHoop('one') // 'Enter a number';
```
