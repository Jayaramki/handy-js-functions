var HandyObject = {

	/**
	 * Checks if the object is empty or not i.e. if the object has any properties or not
	 * @param  {object}  obj Object that is to be checked for the emptiness
	 * @return {Boolean}     True if the object is empty i.e. has no properties and false otherwise
	 */
	isEmptyObject : function ( obj ) {
		var name;
		
		for ( name in obj ) {
			return false;
		}

		return true;
	},

	/**
	 * Removes the specific property from an object
	 * @param  {object} obj      Object from which some property is to be deleted
	 * @param  {string} property string representing the property name
	 * @return {object}          returns the object after deleting the property
	 */
	deleteObjProp : function ( obj, property ) {
		delete obj[property];
		return obj;
	}
};