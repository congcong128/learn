$(function(){
	var token = $.cookie("token");
	if(token){
		function foo(){
			$.get("http://47.104.244.134:8080/cartlist.do",{token:token},function(data){
				var str = "";
				
				$("#num").html(data.length);
				for(var i = 0; i < data.length; i++){
					var numm=data[i].goods.price/100*data[i].count;
					numm = numm.toFixed(2)
					str += `<li index="${i}"><img src="${data[i].goods.picurl}"><div class="Gname">${data[i].goods.name}</div><div class="Gprice">单价:￥${data[i].goods.price/100}</div><div class="Gcount"><p>数量:${data[i].count}</p><span>-</span><span>+</span></div><div class="Gmoney">金额:<b>￥${numm}</b></div><div class="Gdelete">删 除</div></li>`;
				}
				$("#cartList").html(str);
				//减掉一个数
				$("li span:first-of-type").click(function(){					
					var id=data[$(this).parent().parent().attr("index")].id;
					var gid=data[$(this).parent().parent().attr("index")].gid;
					var count=data[$(this).parent().parent().attr("index")].count;
					if(count==1){alert("商品数不能小于1")}
					else{
						$.get("http://47.104.244.134:8080/cartupdate.do",{id:id,gid:gid,num:-1,token:token},function(data){foo();})
					}
					//console.log(id);
					//console.log($(this).parent().parent().attr("index"));
				});
				//增加一个数
				$("li span:last-of-type").click(function(){
					var id=data[$(this).parent().parent().attr("index")].id;
					var gid=data[$(this).parent().parent().attr("index")].gid;
					var count=data[$(this).parent().parent().attr("index")].count;
					//console.log(data[$(this).parent().parent().attr("index")]);
					//console.log($(this).parent().parent().attr("index"));
					$.get("http://47.104.244.134:8080/cartupdate.do",{id:id,gid:gid,num:1,token:token},function(data){foo();})
				});
				
				$(".Gdelete").click(function(){
					var id=data[$(this).parent().attr("index")].id;
					var gid=data[$(this).parent().attr("index")].gid;
					var count=data[$(this).parent().attr("index")].count;
					//console.log(data[$(this).parent().attr("index")]);
					$.get("http://47.104.244.134:8080/cartupdate.do",{id:id,gid:gid,num:0,token:token},function(data){foo();})
				})
			})
		}
		foo();
		
	}
	else{
		location.href="wode.html";
	};
})