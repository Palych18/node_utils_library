# checkPinCode

The function checks whether the ATM and terminal _PIN-code_ is entered correctly.  
If the _PIN-code_ string is passed to the function correctly, __true__ is returned.  
If the _PIN-code_ string is passed to the function incorrectly, __false__ is returned.  
PIN codes cannot contain anything but exactly __4__ or exactly __6__ digits.

```
checkPinCode('1234') // true
checkPinCode('12345') // false
checkPinCode('a23ku4') // false
checkPinCode('000000') // true
```
