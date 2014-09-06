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

// Returns the minimum date of the passed array of date strings
function minDate ( dates ) {

	var minDate = dates[0],
		minDateObj = new Date( dates[0] );

	dates.forEach( function ( date, index ) {
		if ( new Date( date ) < minDateObj ) {
			minDate = date;
			minDateObj = new Date( date );
		};
	});

	return minDate;
}