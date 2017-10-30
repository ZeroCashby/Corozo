$(function() {
    $("#mousedown").on("click", function() {
        $("body").animate({"scrollTop": window.scrollY+800}, 800);
        return false;
    });
});

$(document).ready(function(){

	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('#toTop a').fadeIn();
		} else {
			$('#toTop a').fadeOut();
		}
	});

	//Click event to scroll to top
	$('#toTop a').click(function(){
		$('html, body').animate({scrollTop : 0},600);
		return false;
	});

});
