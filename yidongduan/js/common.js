$(function(){
	var token = $.cookie("token");
	var user=$.cookie("user");
	if(user){$('#user').html(user);$('#user_n').html(user);}
	
	var flag=true;
	
	$("#menu").click(function(){
		if(flag){$("body").css({"left":"4rem"});flag=false;}
		else{$("body").css({"left":0});flag=true;}
	});
	
	$("#fanhui").click(function(){
		history.back(1);
	});
	$("#toCart").click(function(){
		if(user){
			location.href="cart.html";
		}
		else{alert("亲，请登录")
			location.href="wode.html";
		}
	});
	$("#toIndex").click(function(){
		location.href="index.html";
	});
	$("#toWode").click(function(){
		if(user){
			location.href="welcome.html";
		}
		else{
			location.href="wode.html";
		}
	});
	$("#outline").click(function(){
		$.cookie("token",1,{expires:-7});
		$.cookie("user",1,{expires:-7});
		location.href="wode.html";
	})
})
