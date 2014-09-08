What is this
=========
This is just a set of useful functions which are more or less trivial. **I know it's minimal yet, but I'll continue to update the repository on daily basis with the functions that I write while working on any of my projects**.

I hope, they might be useful for others.


How to use?
===
These functions are divided in multiple categories, and each category has its own file e.g. all the dates related functions are inside date.js, dom related functions are inside dom.js and so on.

Contributing
===
You can contribute to this repository by improving the existing functions or by sharing your set of handy functions

Any docs?
===
All the functions are commented, just look inside

Functions List
===
Below are the functions along with the detail of what they do

Dates
====
**isDate()** checks if the passed parameter is a valid date or not
```sh
isDate('Jun 12 2014') // true
isDate('2014/11/11') // true
isDate('Some Gibbrish') // false
```
**maxDate()** gets an array of dates and returns the max date in that array
```sh
maxDate(['Jun 12, 2014', 'Jun 11, 2014', 'May 10, 2014']) // Jun 12, 2014
maxDate(['2014/06/12', '2014/05/12', '2014/05/10']) // 2014/06/12
```
**minDate()** gets an array of dates and returns the minimum date in that array
```sh
minDate(['Jun 12, 2014', 'Jun 11, 2014', 'May 10, 2014']) // May 10, 2014
maxDate(['2014/06/12', '2014/05/12', '2014/05/10']) // 2014/05/10
```
**isValidRange()** from the two passed dates (any format string), checks if the first date is less than the second one i.e. does they represent a valid range and returns true or false
```sh
isValidRange('10/11/2014', '10/11/2013') // false
isValidRange('10/11/2013', '10/11/2014') // true
```
**getMySqlDateFormat()** returns the passed date in the form of mysql date
```sh
getMySqlDateFormat('Sep 07, 2014'); // 2014/09/07
getMySqlDateFormat('Sep-07-2014'); // 2014/09/07
```
**getCurrentDate()** returns the current date in the form of mysql date
```sh
getCurrentDate(); // 2014/09/07
```
DOM
====
**isPageEndReached()** checks if the end of page is reached. Pass the optional param (numeric value) that will check if that much pixels are left towards the apge end
```sh
isPageEndReached(); // true/false depending upon the scroll position
isPageEndReached(100); // true if there are 100 pixels remaining to reach the page end
```

Tests
====
**isString(obj)** Checks if object is a string
```sh
var str = "Hello World"
isString(str) // returns string
```

**isArray(obj)** Checks if object is a array
```sh
var arr = [1,2,3]
isArray(arr) // returns array
```

**isInt(obj)** Checks if object is a intger 
```sh
var str = 42
isInt(str) // returns true
```

**isEmail(obj)** Checks if object is a email
```sh
var str = '123@abc.com'
isEmail(str) // returns true
```

**arrContains(a, obj)** Checks if a array contains a object
```sh
var arr = [1,2,3]
var str = 2
arrContains(arr, str) // returns true
```

String Manipulation
====

**trim(str)** Removes any white space to the right and left of the string
```sh
var str = "  there was a egg on the wall  "
trim(str) // returns 'there was a egg on the wall'
```

**ltrim(str)** Removes any white space to the left of the string
```sh
var str = "  there was a egg on the wall  "
ltrim(str) // returns 'there was a egg on the wall  '
```

**rtrim(str)** Removes any white space to the right of the string
```sh
var str = "  there was a egg on the wall  "
ltrim(str) // returns '  there was a egg on the wall'
```

**truncate(str)** Truncate a string to a given length
```sh
var str = "there was a egg on the wall"
truncate(str, 3) // returns 'the'
```

**onlyLetters(str)** Return a string only containing the letters a to z
```sh
var str = "there was a 200 eggs on the wall"
onlyLetters(str) // returns 'there was a eggs on the wall'
```

**onlyLettersNums(str)** Return a string only containing the letters a to z and numbers
```sh
var str = "there was a 200 eggs on the wall!!!"
onlyLettersNums(str) // returns 'there was a 200 eggs on the wall'
```


**onlyNums(str)** Return a string only containing the numbers
```sh
var str = "there was a 200 eggs on the wall!!!"
onlyNums(str) // returns '200'
```




