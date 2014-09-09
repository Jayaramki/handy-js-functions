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