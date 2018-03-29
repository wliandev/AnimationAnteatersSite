$(document).ready(function(){
	$("#logo-img").hover(
	    function(){
	        $(this).attr("src", "https://i.imgur.com/ZjaCGqU.png");
	    },
	    function(){
	        $(this).attr("src", "https://i.imgur.com/w7TNLVX.png");
	    }                         
	);
});