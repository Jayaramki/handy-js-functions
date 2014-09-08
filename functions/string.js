// Removes any white space to the right and left of the string
function trim(str) {
    return str.replace(/^\s+|\s+$/g, "");
}

// Removes any white space to the left of the string
function ltrim(str) {
    return str.replace(/^\s+/, "");
}

// Removes any white space to the right of the string
function rtrim(str) {
    return str.replace(/\s+$/, "");
}

// Truncate a string to a given length
function truncate(str, len) {
    if (str.length > len) {
        str = str.substring(0, len);
    }
    return str;
};

// Return a string only containing the letters a to z
function onlyLetters(str) {
    return str.toLowerCase().replace(/[^a-z]/g, "");
};

// Return a string only containing the numbers
function onlyNums(str) {
    return str.toLowerCase().replace(/[^0-9]/g, "");
};

// Return a string only containing the letters a to z and numbers
function onlyLettersNums(str) {
    return str.toLowerCase().replace(/[^a-z,0-9,-]/g, "");
};

// Generates a URL-friendly "slug" from a provided string.
function toSlug(str) {
  return str.toLowerCase().replace(/-+/g, '').replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
};

// Is an object a string
function isString(obj) {
    return typeof (obj) == 'string';
};

// Is an object a email address
function isEmail( obj ) {
    return obj.match(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b/ig);
};

// Is an object a IP Address
function isIP( obj ) {
    var regex = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return regex.test( obj );
};