// Do something when the page end is reached
// Pass the optional offsetBottom param that will check if that much pixels are left towards the apge end
function isPageEndReached ( offsetBottom ) {
	
	if (typeof offsetBottom == "undefined") {
		offsetBottom = 0;
	}

	return ($(window).scrollTop() + $(window).height() + offsetBottom) >= $(document).height();
}

// To support the older browsers such as <= IE8
// Check the browser, and call this function if required. It'll automatically fix the placeholders
function fixPlaceholders()
{
   var holderInputs = $("input[placeholder]");

   holderInputs.each(function(){
        var name=$(this).attr("name");
        var newInput = $("<input type='text' name='"+name+"' value='"+name+" goes here'>");

        $(this).replaceWith(newInput);
        var defaultValue = name + " goes here";

        newInput.on('focus', function() {
            // If this value of the input equals our sample,
            // hide it when the user clicks on it.

            if(this.value === defaultValue)
               this.value = '';
        });

        newInput.on('blur', function() {
            // When they click off of the input, if
            // the value is blank, bring back the sample.
            if(this.value === '')
                this.value = defaultValue;
        });
   });
}