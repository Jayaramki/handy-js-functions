// Checks if the argument passed is a valid date
function isDate ( dateArg ) {
	var t =  ( dateArg instanceof Date ) ? dateArg : (new Date( dateArg ));
	return !isNaN(t.valueOf());
}

