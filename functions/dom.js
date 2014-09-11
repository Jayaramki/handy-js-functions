/**
 * NOTE: This module requires Jquery to work properly.
 */

var HandyDom = {

  /**
   * Checks if the page end is reached or not
   * @param  {number}  offsetBottom Optional numeric value that checks if the bottom is that much pixels away from the current position
   * @return {Boolean}              true if the page end is reached and false otherwise
   */
  isPageEndReached : function ( offsetBottom ) {
  	
  	if (typeof offsetBottom == "undefined") {
  		offsetBottom = 0;
  	}

  	return ($(window).scrollTop() + $(window).height() + offsetBottom) >= $(document).height();
  },

  /**
   * Replaces the placeholder'ed' input elements with a javascript alternative to support older browsers
   */
  fixPlaceholders : function ()
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
  
};