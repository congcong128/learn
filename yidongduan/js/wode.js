$(function(){
	$('#btn').click(function(){
		
		var data1={
			name:$('#username_1').val(),
			password:$('#password_1').val()
		}
		$.post("http://47.104.244.134:8080/userlogin.do",data1,function(data){
			//console.log(data.code);
			if(data.code==1){alert("用户名或密码错误")}
			else{
				$.cookie("token",data.data.token,{expires:7});
				$.cookie("user",data1.name,{expires:7});
				location.href="welcome.html?user="+data1.name;
			}
		})
	});
	$("#reg-btn").click(function(){
		location.href="reg.html";
	})
})
