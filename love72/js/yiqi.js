// JavaScript Document
var Dianji=0;
window.onload=function(){
	var buhao = document.getElementById("buhao");
	var hao = document.getElementById("hao");
	buhao.onclick=function(){
		Dianji++;
		if(Dianji==1){
	   			alert("小姐姐再考虑一下呗");
	   }else if(Dianji==2){
		   		alert("你是我见过的最美丽可爱的小姐姐了");
		   		
	   }else if(Dianji==3){
		   		alert("一生一世爱你哦");
		   		
	   }else if(Dianji==4){
		   		alert("狼狗奶狗我都可以的哦");
		   		
	  }else if(Dianji==5){
		   		alert("给你买落地窗的大房子");
	  }else if(Dianji==6){
		   		alert("你想带我去哪就去哪，我不反抗的");
	  }else if(Dianji==7){
		   		alert("保证做梦都是你");
		  		Dianji=1;
	  }

	}
	hao.onclick=function(){
		alert("小颜颜终于同意了呢，爱你哦");
	}
	

}