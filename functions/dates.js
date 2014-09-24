var HandyDate = {

	/**
	 * Checks if the argument passed is a valid date or not
	 * @param  {string|Date object}  dateArg Argument that is to be checked
	 * @return {Boolean}         true if the argument is a valid date and false otherwise
	 */
	isDate : function ( dateArg ) {
		var t =  ( dateArg instanceof Date ) ? dateArg : (new Date( dateArg ));
		return !isNaN(t.valueOf());
	},

	/**
	 * Checks if the year passed is a leap year or not
	 * @param  {number}  year Numeric value representing the year that is to be checked
	 * @return {Boolean}      True if the year is a leap year and False otherwise
	 */
	isLeapYear : function (year) {
		return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0); 
	},

	/**
	 * From an array of dates, returns the maximum date
	 * @param  {array} dates Array containing the strings of dates
	 * @return {string}       Returns the element of the array that has the maximum date
	 */
	maxDate : function ( dates ) {

		var maxDate = dates[0],
			maxDateObj = new Date( dates[0] );

		dates.forEach( function ( date, index ) {
			if ( new Date( date ) > maxDateObj ) {
				maxDate = date;
				maxDateObj = new Date( date );
			};
		});

		return maxDate;
	},

	/**
	 * Returns the minimum date of the array of dates
	 * @param  {array} dates Array containing the strings of dates
	 * @return {string}       Returns the array element that has the minimum date
	 */
	minDate : function ( dates ) {

		var minDate = dates[0],
			minDateObj = new Date( dates[0] );

		dates.forEach( function ( date, index ) {
			if ( new Date( date ) < minDateObj ) {
				minDate = date;
				minDateObj = new Date( date );
			};
		});

		return minDate;
	},

	/**
	 * Checks if the date range is valid or not or in other words, checks if the first date is smaller than the second or not
	 * @param  {string}  minDate String representing the starting date of the range
	 * @param  {string}  maxDate String representing the ending date of the range
	 * @return {Boolean}         True if the range is valid and false otherwise
	 */
	isValidRange : function ( minDate, maxDate ) {
		return ( new Date( minDate ) <= new Date( maxDate ) );
	},

	/**
	 * Returns the mysql format of the passed date
	 * @param  {string} dateArg string representing the date which is to be converted to mysql date
	 * @return {string}         String representing the date string in the mysql format
	 */
	getMySqlDateFormat : function ( dateArg ) {	
		
		var date = new Date( dateArg );

		var dd = date.getDate();
		var mm = date.getMonth() + 1; //January is 0!
		var yyyy = date.getFullYear();

		dd = ( dd < 10 ) ? ( '0' + dd ) : dd;
		mm = ( mm < 10 ) ? ( '0' + mm ) : mm;
		
		date = yyyy + '/' + mm + '/' + dd;

		return date;
	},

	/**
	 * Returns the current date in MySQL format
	 * @return {string} String representing the current date in Mysql format
	 */
	getCurrentDate : function () {
		
		var today = new Date();

		var dd = today.getDate();
		var mm = today.getMonth() + 1; //January is 0!
		var yyyy = today.getFullYear();

		dd = ( dd < 10 ) ? ( '0' + dd ) : dd;
		mm = ( mm < 10 ) ? ( '0' + mm ) : mm;

		today = yyyy + '/' + mm + '/' + dd;

		return today;
	},

	/**
	 * Returns the difference between two dates in days
	 * @param  {string} first  A string representing the date
	 * @param  {string} second A string representing the date
	 * @return {integer}        An integer representing the difference between the dates in days
	 */
	daydiff : function ( first, second ) {
	    first = new Date(first);
	    second = new Date(second);
	    return (second-first)/(1000*60*60*24);
	},
	
	/**
	 * Returns the array of all date objects between two dates
	 * @param  {string} first  A string representing the date
	 * @param  {string} second A string representing the date
	 * @return {array}        An Array contains date objects between the dates
	 */
	 getBetweenDates : function(startDt, endDt) {
	     var error = (HandyDate.isDate(endDt)) && (HandyDate.isDate(startDt)) && (HandyDate.isValidRange(startDt, endDt))) ? false : true,
	     	between = [];
		if (error) console.log('error occured!!!... Please Enter Valid Dates');
    		else {
        	var currentDate = new Date(startDt),
            	end = new Date(endDt);
        	while (currentDate <= end) {
            	between.push(new Date(currentDate));
            	currentDate.setDate(currentDate.getDate() + 1);
        	}
    	}
    	return between;
	 }
};
