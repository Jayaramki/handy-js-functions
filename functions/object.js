// Checks if the object is empty or not
function isEmptyObject ( obj ) {
	var name;
	
	for ( name in obj ) {
		return false;
	}

	return true;
}