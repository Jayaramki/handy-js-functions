var HandyNum = {

	/**
	 * Checks if the passed element is an integer or not
	 * @param  {object}  obj The number that is to be checked if it is a number or not
	 * @return {Boolean}     True if the param is a number and false otherwise
	 */
	isInt : function ( obj ) {
	    var regex = /^\d+$/;
	    return regex.test( obj );
	},

	/**
	 * Returns the number upto the passed number of decimals
	 * @param  {number} number       Number which is to be processed
	 * @param  {integer} decimalCount Integer value representing the number of decimals required
	 * @return {string}              The number with required count of decimals
	 */
	getDecimals : function ( number, decimalCount ) {
		// Making sure, it's a number
		number = parseFloat( number ) || 0;
		return number.toFixed( decimalCount );
	},

	/**
	 * Returns the integer value from a string or float or whatever
	 * @param  {object} number Number that is to be transformed to integer
	 * @return {integer}       Returns the integer value
	 */
	getInt : function ( number ) {
		return parseInt( number, 10 ) || 0;
	},

	/**
	 * Returns the passed number in hexadecimal form
	 * @param  {integer} number Number that is to be transformed to hexadecimal
	 * @return {string}        Hexadecimal value of the passed number
	 */
	decToHex : function ( number ) {
		return number.toString(16);
	},

	/**
	 * Converts the hexadecimal string to number and returns it
	 * @param  {string} hexString Hexadecimal form of some number
	 * @return {integer}           Decimal value of that hexadecimal string
	 */
	hexToDec : function ( hexString ) {
		return parseInt(hexString, 16)
	}
};