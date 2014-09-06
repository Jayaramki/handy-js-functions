// Checks if the argument passed is a valid date
function isDate ( dateArg ) {
	var t =  ( dateArg instanceof Date ) ? dateArg : (new Date( dateArg ));
	return !isNaN(t.valueOf());
}

// Returns the maximum date of the passed array of date strings
function maxDate ( dates ) {

	var maxDate = dates[0],
		maxDateObj = new Date( dates[0] );

	dates.forEach( function ( date, index ) {
		if ( new Date( date ) > maxDateObj ) {
			maxDate = date;
			maxDateObj = new Date( date );
		};
	});

	return maxDate;
}

