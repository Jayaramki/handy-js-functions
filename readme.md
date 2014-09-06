What is this
=========
This is just a set of useful functions which are more or less trivial. I continue to update the repository with the functions that I wrote while working on any of my projects, but I hope, they might be useful for others.


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