var Url = {
	/**
	 * Gets the current url
	 * @return {string}
	 */
	getWindowUrl : function () {
		return window.location.href;
	},

	/**
	 * Gets the specific query string value from the URL
	 * @param  {string} name Parameter name, whose value is to be retrieved from the query string
	 * @return {mixed} 		 null if the parameter is not found in the query string or the value if found.
	 */
	getParamValue : function ( name ) {
	    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
	        results = regex.exec(location.search);
	        
	    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
	}
};