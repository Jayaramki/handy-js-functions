var HandyArray = {

  /**
   * Checks if the passed object is an array or not
   * @param  {object}  obj Any object that is to be checked
   * @return {Boolean}     true if the object is an arry and false otherwise
   */
  isArray : function ( obj ) {
      return obj && !(obj.propertyIsEnumerable('length'))
          && typeof obj === 'object'
          && typeof obj.length === 'number';
  },

  /**
   * Checks if the array contains the passed element
   * @param  {array} arr array of elements
   * @param  {object} obj Any number, string something that is to be checked inside the array
   * @return {Boolean}     true if the passed element is found in the object and false otherwise
   */
  arrContains : function ( arr, obj ) {
      var i = arr.length;
      while (i--) {
          if (arr[i] === obj) {
              return true;
          }
      }
      return false;
  },

  /**
   * Concatenates the elements of the passed array with the delimiter passed
   * @param  {array} arr   Array whose elements need to be joined
   * @param  {string} delim Any string or character which will be used for the concatenation of elements
   * @return {string}       Returns the string containing the elements of the array concatenated with eachother with delimiter
   */
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
  },

  /**
   * Shuffles the provided array in Javascript
   * @param  {array} arr   Array whose elements are to be shuffled
   * @source               http://jsfromhell.com/array/shuffle [v1.0]
   * @author               Jonas Raoni Soares Silva
   * @return {array}       Array in the shuffled form
   */
  function shuffle( arr ){
      for ( var j, x, i = arr.length; i; j = Math.floor(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
      return arr;
  }

};