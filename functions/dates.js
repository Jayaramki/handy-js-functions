// Checks if the argument passed is a valid date
function isDate ( dateArg ) {
	var t =  ( dateArg instanceof Date ) ? dateArg : (new Date( dateArg ));
	return !isNaN(t.valueOf());
}

// Checks if year is a Leap year
function isLeapYear (year) {
	return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0); 
};

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

// Checks if the date range is valid
function isValidRange ( minDate, maxDate ) {
	return ( new Date( minDate ) <= new Date( maxDate ) );
}

// Returns mysql date format e.g. 2014/09/07
function getMySqlDateFormat ( dateArg ) {	
	
	var date = new Date( dateArg );

	var dd = date.getDate();
	var mm = date.getMonth() + 1; //January is 0!
	var yyyy = date.getFullYear();

	dd = ( dd < 10 ) ? ( '0' + dd ) : dd;
	mm = ( mm < 10 ) ? ( '0' + mm ) : mm;
	
	date = yyyy + '/' + mm + '/' + dd;

	return date;
}

// Returns the current date
function getCurrentDate () {
	
	var today = new Date();

	var dd = today.getDate();
	var mm = today.getMonth() + 1; //January is 0!
	var yyyy = today.getFullYear();

	dd = ( dd < 10 ) ? ( '0' + dd ) : dd;
	mm = ( mm < 10 ) ? ( '0' + mm ) : mm;

	today = yyyy + '/' + mm + '/' + dd;

	return today;
}