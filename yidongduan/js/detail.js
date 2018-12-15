$(function(){
	var id = location.search.split("=")[1];
	var user=$.cookie("user");
	if(user){$('#user').html("欢迎 "+user);}
	//console.log(id);
	$.get("http://47.104.244.134:8080/goodsbyid.do",{id:id},function(data){
		var zheng=Math.floor(data.price/100);
		var fen=Math.floor(data.price%100);
		console.log(data);
		$("#midpic").attr({src:data.picurl});
		$("#d-title").html(data.name);
		$("#jiage").html("￥"+zheng+"."+fen);
		$("#d-btn").attr({dataId:data.id});
		
		$("#d-btn").click(function(){
			if(user){
				var id = $(this).attr("dataId");
				var token = $.cookie("token");
				$.get("http://47.104.244.134:8080/cartsave.do",{gid:id,token:token},function(data){
					if(data.code==0){
						alert("添加成功");
					}
				})
			}else{alert("亲，请登录")}
			
		})
		
	});

})