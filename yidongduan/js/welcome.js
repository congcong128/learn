$(function(){
	$("#out").click(function(){
		$.cookie("token",1,{expires:-7});
		$.cookie("user",1,{expires:-7});
		location.href="wode.html";
	})
})