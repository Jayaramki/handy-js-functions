// Is an object a string
function isString(obj) {
    return typeof (obj) == 'string';
};


// Is an object a array
function isArray(obj) {
    return obj && !(obj.propertyIsEnumerable('length'))
        && typeof obj === 'object'
        && typeof obj.length === 'number';
};


// Is an object a int
function isInt(obj) {
    var re = /^\d+$/;
    return re.test(obj);
};

// Is an object a email address
function isEmail(obj) {
    return obj.match(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b/ig);
};

// Does a given array contain a item
function arrContains(a, obj) {
    var i = a.length;
    while (i--) {
        if (a[i] === obj) {
            return true;
        }
    }
    return false;
};

// Is an object a IP Address
function isIP(obj) {
    var re = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return re.test(obj);
};
