var HandyArray = {

  // Is an object a array
  isArray : function ( obj ) {
      return obj && !(obj.propertyIsEnumerable('length'))
          && typeof obj === 'object'
          && typeof obj.length === 'number';
  },

  // Does a given array contain a item
  arrContains : function ( arr, obj ) {
      var i = arr.length;
      while (i--) {
          if (arr[i] === obj) {
              return true;
          }
      }
      return false;
  },

  // accepts an array and a delimiter and returns a string containing the array elements concatenated by the pased delimiter
  implode : function ( arr, delim ) {

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

};