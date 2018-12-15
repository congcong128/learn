

var oBanner = document.getElementById("scrollBanner");
var oImgList = document.getElementById("imgList");
//角标
var oNum = document.getElementById("nums");
var aNumList = oNum.children;
var aLi = oImgList.children;
var perWidth = window.innerWidth;
var i = 0;
$("#imgList li").css("width",perWidth);
$("#imgList img").css("width",perWidth);
var timer = setInterval(function(){move()},3000)

function move(){
	i++;				
	if(i==aLi.length){
		oImgList.style.left = 0;
		i = 1;
	}
	if(i==-1){
		oImgList.style.left = -(aLi.length-1)*perWidth + "px";
		i=aLi.length - 2;
	}
	for(var j = 0; j < aNumList.length; j++){
		aNumList[j].className = "";
	}
	if(i==aLi.length-1){
		aNumList[0].className = "hover";
	}else{
		aNumList[i].className = "hover";
	}
	startMove(oImgList,{left:-perWidth*i});
}


function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}
	return getComputedStyle(obj,null)[attr];
}

function startMove(obj,json,fn){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var flag = true;	
		for(var attr in json){
			if(attr == "opacity"){
				var iCur = parseInt(getStyle(obj,attr)*100);
			}else{
				var iCur = parseInt(getStyle(obj,attr));
			}
			var iTarget = json[attr];
			var iSpeed = (iTarget-iCur)/7;
			iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);			
			if(attr == "opacity"){
				obj.style.opacity = (iCur + iSpeed)/100;
				obj.style.filter = "alpha(opacity="+(iCur+iSpeed)+")";
			}else{
				obj.style[attr] = iCur + iSpeed + "px";
			}
			if(iCur!=iTarget){
				flag = false;
			}
		}
		if(flag){
			clearInterval(obj.timer);
			if(fn){
				fn();
			}
		}	
	},20);
}