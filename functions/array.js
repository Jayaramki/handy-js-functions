// Is an object a array
function isArray(obj) {
    return obj && !(obj.propertyIsEnumerable('length'))
        && typeof obj === 'object'
        && typeof obj.length === 'number';
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