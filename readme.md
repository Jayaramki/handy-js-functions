What is this?
=========
This is just a set of useful functions which are more or less trivial. **I know it's minimal yet, but I'll continue to update the repository on daily basis with the functions that I write while working on any of my projects**.

I hope, they might be useful for others.

Why I created this?
=========
You don't need to be a <a href="http://www.imdb.com/title/tt1001526/" target="_blank">Mega mind</a> to understand the content of this repository they are just a simple functions which you can grab and use in your projects easily. 
Initially I created this repository just because I was deciding for **my next opensource project** that might show off my skillset as well as help the others out there and I **didn't want that I get my mind off the github**, so I created this repository and decided to **maintain until I start my next opensource project**. But I'm **planning on not to abandon this** repository, I'll **continue to commit to this repository** along with my other project, so I've **set myself up to the challenge** that no matter what, I'll **write a one useful javascript function each day**.
More at <a href="http://kamranahmed.info/contribute-to-evolve/" target="_blank">http://kamranahmed.info/contribute-to-evolve/</a>

How to use?
===
There are different modules in the functions directory. Each module has it's own separate file e.g. string.js has a string module. I have named each module prefixed with `Handy` e.g. HandyString, HandyDate and so on, so that it may not conflict with any existing modules that you might have. To use any of the modules, just include the file on your page e.g.
```sh
<script src="assets/js/functions/string.js"></script>
```
And then simple use `ModuleName.functionName()` to call some specific function e.g.
```sh
HandyDate.isValidRange('10/11/2014', '10/11/2013') // false
```
and so on.

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
**daydiff( firstDate, secondDate )** return the difference between two dates in days
```sh
daydiff('2014/9/16', '2014/9/20') // returns 4
daydiff('2014/9/16', '2015/9/20') // returns 369
```

**getBetweenDates( firstDate, secondDate )** return An Array contains date objects between the dates
```sh
getBetweenDates('2014/9/22', '2014/9/24') // returns  [Date {Mon Sep 22 2014 05:30:00 GMT+0530 (IST)}, Date {Tue Sep 23 2014 05:30:00 GMT+0530 (IST)}, Date {Wed Sep 24 2014 05:30:00 GMT+0530 (IST)}]
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
**imposeLength( cssSelector, length )** imposes the specific length on an input element i.e. it will trim away the extra characters
```sh
imposeLength('.feedBackArea', 400) // trim away the characters that exceed 400 length 
```
**scrollToEl( el, speed )** smoothly scrolls the user to the specific DOM element
```sh
scrollToEl('footer', 1000)
```
**scrollToTop( speed )** smoothly scrolls to the top of the page
```sh
scrollToTop( 2000 );
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

**implode(array, delimiter)** similar to the implode function of PHP, accepts an array and a delimiter and returns a string containing the array elements concatenated by the passed delimiter
```sh
var arr = [12,3,4,23,21,2];
implode(arr, '+'); // "12+3+4+23+21+2"
```
**shuffle( arr )** shuffles the passed array
```sh
var arr = [23,4,53,2,12,90,43,21,12,2,34,5,66,65,32,3,39];
arr = shuffle( arr ); // arr will now be shuffled
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
**getInt( obj )** returns the integer value of the passed number if the number found and 0 if that's not a number.
```sh
getInt('25') // 25
getInt('asdfsd') // 0
```
**decToHex( number )** converts the passed number to hexadecimal form and returns it
```sh
decToHex( 99999 ); //"1869f"
```
**hexToDec( hexString )** converts the passed hexadecimal string to decimal value and returns it
```sh
hexToDec( "1869f" ); //99999
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
**strip( html )** Strips html tags frmo the passed html string
```sh
var html = "<h1>Hello there.</h1><p>I have got some HTML tags</p>";
strip( html ) // returns "Hello there. I have got some HTML tags"
```
**capFirstChar( string )** capitalizes the first character of the passed sring
```sh
capFirstChar( 'hello world' ); // Hello world
```
**isPalindrome( str )** checks if the passed object is a palindrome or not
```sh
isPalindrome('1231'); // false
isPalindrome('123321'); // true
isPalindrome('12321'); // true
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
**getStringWords( string, wordCount )** returns the first n words of the passed string
```sh
var string = "first second third fourth five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen ninteen twenty";
getStringWords ( string, 9 ); // first second third fourth five six seven eight nine
```
**getWordsCount( string )** returns the count of words in the passed string
```sh
getWordsCount( 'This is a simple sentence whose number of words are to be counted.' ); // 13

```
**getCharCount( string )** returns the count of Characters in the passed string
```sh
getCharCount( 'Some sample text' ); // 16
```
URL
====
**getWindowUrl()** returns the current URL
```sh
getWindowUrl(); // "https://github.com/kamranahmedse"
```
**getParamValue( paramName )** returns the value of the `paramName` from the query string if found, and false otherwise.
```sh
// For example URL is : http://someurl.com/play.php?game=tictactoe
getParamValue( 'game' ); // "tictactoe"
```

