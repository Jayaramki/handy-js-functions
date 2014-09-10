// Is an object a array
function isArray(obj) {
    return obj && !(obj.propertyIsEnumerable('length'))
        && typeof obj === 'object'
        && typeof obj.length === 'number';
};

// Does a given array contain a item
function arrContains(a, obj) {
    var i = a.length;
    while (i--) {
        if (a[i] === obj) {
            return true;
        }
    }
    return false;
};

// accepts an array and a delimiter and returns a string containing the array elements concatenated by the pased delimiter
function explode( arr, delim ) {

   var lastIndex = arr.length - 1,
       string = '';

   arr.forEach(function(el, index){
      string += el;
      if ( index !== lastIndex ) {
          string += delim;
      }
   });
   return string;
}