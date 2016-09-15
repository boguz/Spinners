/*jslint browser: true*/
/*global $, jQuery*/

$(document).ready(function () {

	// Use Strict Mode
	"use strict";


	//////////// DINAMICALLY LOAD CODE FOR CLICKED SPINNER //////////////// 

	// click on .spinWindow
	$(".spinWindow").on("click", function () {
		
		event.preventDefault();

		var fileName = $(this).attr("data-filename");
		
		$(".htmlcode").load("content/" + fileName + ".html");
		$(".csscode").load("content/" + fileName + "_css.html");

		$(".modal").addClass("active");
	});

	// click to dismiss modal window
	$(".modal").on("click", function () {
		
		event.preventDefault();

		$(this).removeClass("active");
		$("htmlcode").empty();
		$("csscode").empty();
	});

	///////////////////////// SMOOTH SCROLLING /////////////////////////// 

	$('a[href^="#"]').on('click', function(event) {
		
		var target = $( $(this).attr('href') );
		
		if( target.length ) {
			
			event.preventDefault();
			
			var scrollhere = target.offset().top;
			
			$('html, body').animate({					
				scrollTop: scrollhere
			}, 1000);
		}
	});

}); // end of document.ready