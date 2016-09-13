/*jslint browser: true*/
/*global $, jQuery*/

$(document).ready(function () {
	
	// Use Strict Mode
	"use strict";
	
	/******************************************************************************************
	***************                            ANIMATIONS                       ***************
	*******************************************************************************************/	
		
	// AJAX LOAD CONTENT
	$(".spinWindow").on("click", function () {
		event.preventDefault();
		
		var fileName = $(this).attr("data-filename");
		$(".htmlcode").load("content/" + fileName + ".html");
		$(".csscode").load("content/" + fileName + "_css.html");

		$(".modal").addClass("active");
	});
	
	$(".modal").on("click", function () {
		$(this).removeClass("active");
		$("htmlcode").empty();
		$("csscode").empty();
	});
	
	
	
}); // end of document.ready