$(function(){
	$('#reg-btn').click(function(){
		$("#waite").css({"display":"block"});
		$.post("http://47.104.244.134:8080/usersave.do",{
			"username":$('#username_r').val(),
			"password":$('#password_r').val(),
			"email":$('#email_r').val(),
			"sex":$('input[name="sexy"]:checked').val()
		},function(data){
			$("#waite").css({"display":"none"});
			if(data.code==0){
				alert("注册成功");
				location.href="wode.html"
			}
			else{alert("注册失败，请尝试更换用户名")}
		})
	})
})