$(function(){
	
	
		$.get("http://47.104.244.134:8080/goodsbytid.do",{tid:13,page:1,limit:13},function(data){
			data = data.data;
			console.log(data);
			var str = "";
			for(var i = 1; i < data.length; i++){
				var zheng=Math.floor(data[i].price/100);
				var fen=Math.floor(data[i].price%100);
				str += `<li><img src="${data[i].picurl}"><p class="miao"><a href="detail.html?id=${data[i].id}">${data[i].name}</a></p><p class="price">￥${zheng}.${fen}</p></li>`
			}
			$("#list").html(str);
		});
	
})