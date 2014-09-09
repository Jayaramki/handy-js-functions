// Is an object a int
function isInt( obj ) {
    var regex = /^\d+$/;
    return regex.test( obj );
};

// Returns the number upto n decimals
function getDecimals ( number, decimalCount ) {
	// Making sure, it's a number
	number = parseFloat( number ) || 0;
	return number.toFixed( decimalCount );
}

// Returns the integer value, if it is an integer and 0 otherwise instead of NaN
function getInt ( number ) {
	return parseInt( number, 10 ) || 0;
}