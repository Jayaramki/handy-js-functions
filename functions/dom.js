// Do something when the page end is reached
// Pass the optional offsetBottom param that will check if that much pixels are left towards the apge end
function isPageEndReached ( offsetBottom ) {
	
	if (typeof offsetBottom == "undefined") {
		offsetBottom = 0;
	}

	return ($(window).scrollTop() + $(window).height() + offsetBottom) >= $(document).height();
}