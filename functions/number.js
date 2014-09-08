// Is an object a int
function isInt( obj ) {
    var regex = /^\d+$/;
    return regex.test( obj );
};