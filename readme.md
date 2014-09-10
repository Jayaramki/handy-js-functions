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

**isLeapYear(year)** Checks if year is a Leap year
```sh
isLeapYear(2014); // false
isLeapYear(2000); // true
```
DOM
====
**isPageEndReached()** checks if the end of page is reached. Pass the optional param (numeric value) that will check if that much pixels are left towards the apge end
```sh
isPageEndReached(); // true/false depending upon the scroll position
isPageEndReached(100); // true if there are 100 pixels remaining to reach the page end
```
**fixPlaceholders()** fixes the placeholders in the older browsers which don't support HTML-5 placeholder attribute.
```sh
// For example, let's fix the inputs for IE
var browserName=navigator.appName; 
if (browserName=="Microsoft Internet Explorer") 
{	
	fixPlaceholders();
}
```

Array
====
**isArray(obj)** Checks if object is an array
```sh
isArray([1,2,3]) // returns true
isArray(2) // returns false
```

**arrContains(a, obj)** Checks if a array contains a object
```sh
var arr = [1,2,3]
var str = 2
arrContains(arr, str) // returns true
```

Number
====
**isInt(obj)** Checks if object is an intger 
```sh
var str = 42
isInt(str) // returns true
```
**getDecimals ()** will transform the number to `decimalCount` number of digits after the decimal point.
```sh
getDecimals( 2.523232323, 2) // 2.52
getDecimals( 22323.1, 2) // 22323.10
getDecimals( 12.11, 3) // 12.110
```
**getInt()** returns the integer value of the passed number if the number found and 0 if that's not a number.
```sh
getInt('25') // 25
getInt('asdfsd') // 0
```

String
====
**isString(obj)** Checks if object is a string
```sh
isString( "Hello World" ) // returns true
isString( 23 ) // returns false
```

**toSlug( str )** Generates a URL-friendly "slug" from a provided string.
```sh
var str = "There were eggs on the wall"
toSlug( str ) // returns 'there-were-eggs-on-the-wall'
```

**trim( str )** Removes any white space to the right and left of the string
```sh
var str = "  There were eggs on the wall  "
trim( str ) // returns 'There were eggs on the wall'
```

**ltrim( str )** Removes any white space to the left of the string
```sh
var str = "  There were eggs on the wall  "
ltrim( str ) // returns 'There were eggs on the wall  '
```

**rtrim( str )** Removes any white space to the right of the string
```sh
var str = "  There were eggs on the wall  "
ltrim(str) // returns '  There were eggs on the wall'
```

**truncate( str, charCount )** Truncate a string to a given length
```sh
var str = "There were eggs on the wall"
truncate( str, 3 ) // returns 'the'
```

**onlyLetters( str )** Return a string only containing the letters a to z
```sh
var str = "There were 200 eggs on the wall"
onlyLetters( str ) // returns 'there were eggs on the wall'
```

**onlyLettersNums( str )** Return a string only containing the letters a to z and numbers
```sh
var str = "There were 200 eggs on the wall!!!"
onlyLettersNums( str ) // returns 'There were 200 eggs on the wall'
```

**onlyNums( str )** Return a string only containing the numbers
```sh
var str = "There were 200 eggs on the wall!!!"
onlyNums(str) // returns '200'
```

**isEmail( obj )** Checks if object is a email
```sh
var str = '123@abc.com'
isEmail(str) // returns true
```

**isIP( obj )** Checks if object is a IP Address
```sh
var str = '127.0.0.1'
isIP(str) // returns true
```
Objects
====
**isEmptyObject ( obj )** checks if the object passed is empty or not!
```sh
isEmptyObject ({}) // true
isEmptyObject({ name: 'Kamran' }) // false
```
**deleteObjProp( obj, property )** removes the property and returns the new object
```sh
var student = { name: 'Some Student', rollno: '123' };
student = deleteObjProp( student, property );
console.log( student ); // student => { name: 'Some Student' }
```