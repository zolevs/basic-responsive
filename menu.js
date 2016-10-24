// Menu show-hide
$(document).ready(function() {
	$("#burger-nav").on("click", function(){
		$("header nav ul").toggleClass("open");
	});
});
