var HandyString = {

  /**
   * Removes any whitespaces to the right and left of the passed string
   * @param  {string} str String which is to be processed
   * @return {string}     Modified string with left and right whitespaces removed
   */
  trim : function ( str ) {
      return str.replace(/^\s+|\s+$/g, "");
  },

  /**
   * Removes any white spaces to the left of the string
   * @param  {string} str String which is to be processed for the whitespaces
   * @return {string}     Updated string with the whitespaces removed from the left
   */
  ltrim : function ( str ) {
      return str.replace(/^\s+/, "");
  },

  /**
   * Removes any white spaces to the right of the string
   * @param  {string} str String which is to be processed for the whitespaces
   * @return {string}     Updated string with the whitespaces removed from the right
   */
  rtrim : function ( str ) {
      return str.replace(/\s+$/, "");
  },

  /**
   * Truncates a string to the given length
   * @param  {string} str String of which the length is to be truncated
   * @param  {integer} len Integer value representing the length of the string which is to be truncated
   * @return {string}     Returns the truncated string with
   */
  truncate : function ( str , len) {
      if (str.length > len) {
          str = str.substring(0, len);
      }
      return str;
  },

  /**
   * Returns a string only containing the letters and nothing else
   * @param  {string} str String from which the characters are to be returned
   * @return {string}     String having only characters
   */
  onlyLetters : function ( str ) {
      return str.replace(/[^a-zA-Z\s]/g, "");
  },

  /**
   * Returns the string consisting of numbers only and nothing else
   * @param  {string} str String from which the  need to be removd
   * @return {string}     String having no numbers in it
   */
  onlyNums : function ( str ) {
      return str.replace(/[^0-9]/g, "");
  },

  /**
   * Returns a string only containing the letters a to z and numbers
   * @param  {string} str String which is to be processed over
   * @return {string}     String containing only the letters and numbers
   */
  onlyLettersNums : function ( str ) {
      return str.replace(/[^a-zA-Z0-9-\s]/g, "");
  },

  /**
   * Generates a URL-friendly "slug" from a provided string.
   * @param  {string} str String which needs to be converted to slug
   * @return {string}     Slug generated from the String
   */
  toSlug : function ( str ) {
    return str.toLowerCase().replace(/-+/g, '').replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  },

  /**
   * Checks if the object passed is a string or not
   * @param  {object}  obj Anything i.e. a number, a string or whatever that is to be checked
   * @return {Boolean}     True if the passed parameter is a string and false otherwise
   */
  isString : function ( obj ) {
      return typeof (obj) == 'string';
  },

  /**
   * Checks if the passed parameter is a valid email address or not
   * @param  {object}  obj Object that is to be checked if it is an email or not
   * @return {Boolean}     True if the object is a valid email and false otherwise
   */
  isEmail : function (  obj  ) {
      return obj.match(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b/ig);
  },

  /**
   * Checks if the passed parameter is a valid IP address or not
   * @param  {object}  obj The object that is to be checked if it is an IP or not
   * @return {Boolean}     True if the object is an IP and false otherwise
   */
  isIP : function (  obj  ) {
      var regex = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
      return regex.test( obj );
  },

  /**
   * Strips HTML tags from the string and returns the resulting string
   * @param  {string} html String containing some HTML tags
   * @return {string}      String having no HTML tags
   */
  strip : function (  html  )
  {
     var tmp = document.createElement("div");
     tmp.innerHTML = html;
     return tmp.textContent || tmp.innerText || "";
  },

  /**
   * Capitalizes the first character of the passed string
   * @param  {string} str String whose first character is to be made uppercase
   * @return {string}     String with the first character changed to uppercase
   */
  capFirstChar : function ( str ) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  },

  /**
   * Checks if the passed number or string is a palindrome or not
   * @param  {string|number}  str String or number that is to be checked
   * @return {Boolean}     True if the passed object is a palindrom and false otherwise
   */
  isPalindrome : function ( str ) {
    str = str + '';

    var length = str.length,
        counter = 0,
        revCounter = str.length - 1,
        isPalindrome = true;

    while ( revCounter >= counter ) {
      if ( str[counter] != str[revCounter] ) {
        isPalindrome = false;
        break;
      };
      counter++;
      revCounter--;
    }

    return isPalindrome;
  },
  
  /**
   * Returns the specific numbers of words from the start of the string
   * @param  {string} string    String which is to be trimmed
   * @param  {integer} wordCount Number representing the number of words that are required
   * @return {string}           The first wordCount number of words of the string
   */
  getStringWords : function ( string, wordCount ) {
    var words = string.split(' ');
    var reqdWords = words.splice( 0, wordCount );

    return reqdWords.join(' ');
  },

  /**
   * Returns the number of words in a string
   * @param  {str} string String whose number of words is to be counted
   * @return {integer}        Number representing the number of words in that string
   */
  getWordsCount : function ( string ) {
    var words = string.split(' ');
    return words.length;
  }
}
