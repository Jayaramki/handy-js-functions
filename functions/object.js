// Checks if the object is empty or not
function isEmptyObject ( obj ) {
	var name;
	
	for ( name in obj ) {
		return false;
	}

	return true;
}

// Removes property from an object
function deleteObjProp ( obj, property ) {
	delete obj[property];
	return obj;
}