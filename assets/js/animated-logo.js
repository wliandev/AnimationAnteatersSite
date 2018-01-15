$(document).ready(function(){
	$("#logo-img").hover(
	    function(){
	        $(this).attr("src", "https://i.imgur.com/nntM6ka.png");
	    },
	    function(){
	        $(this).attr("src", "https://i.imgur.com/kgjCr6d.png");
	    }                         
	);
});