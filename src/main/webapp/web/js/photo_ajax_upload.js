
var basePath="http://localhost:8080/SocialInsuranceBuilding_Management";
$("document").ready(function(){
	$("#photoajaxupload").click(function(){
		var photoisupload=$("#photoisupload").val();
		if(photoisupload=="0"){
			$("#photo_scene").show();
			$("#photoisupload").val("1");
		}else if(photoisupload=="1"){
			$("#photo_scene").hide();
			$("#photoisupload").val("0");
		}
		
	});
	
	$("#photo_delete0").click(function(){
		
		var itemID=$("#itemID1").val();
		$.ajax({
			type:"post",
			url:basePath+"/Photo_Scene_Upload",
		    data:{
		    	itemID:itemID,
		    	num:"Audit_Image0",
		    	operate:"deletePhoto"
		    },
		    /*dataType:"json",*/
		   /* timeout:1000,*/
		   
		    success:function(data){
		    	$("#photo_preview0_1").attr("src","web/sun_employee/images/thumbnail.png");
		    	$("#Photo_Scene0_1").val("");
		    },
		});
		return false;
	});
		
$("#photo_delete1").click(function(){
		
		var itemID=$("#itemID1").val();
		$.ajax({
			type:"post",
			url:basePath+"/Photo_Scene_Upload",
		    data:{
		    	itemID:itemID,
		    	num:"Audit_Image1",
		    	operate:"deletePhoto"
		    },
		    /*dataType:"json",*/
		   /* timeout:1000,*/
		   
		    success:function(data){
		    	$("#photo_preview1_1").attr("src","web/sun_employee/images/thumbnail.png");
		    	$("#Photo_Scene1_1").val("");
		    },
		});
		return false;
	});

$("#photo_delete2").click(function(){
	
	var itemID=$("#itemID1").val();
	$.ajax({
		type:"post",
		url:basePath+"/Photo_Scene_Upload",
	    data:{
	    	itemID:itemID,
	    	num:"Audit_Image2",
	    	operate:"deletePhoto"
	    },
	    /*dataType:"json",*/
	   /* timeout:1000,*/
	   
	    success:function(data){
	    	$("#photo_preview2_1").attr("src","web/sun_employee/images/thumbnail.png");
	    	$("#Photo_Scene2_1").val("");
	    },
	});
	return false;
});
	
	
	
	picture_delegate("Photo_Scene0_1","form_photo_scene","photo_preview0_1");
	picture_delegate("Photo_Scene1_1","form_photo_scene","photo_preview1_1");
	picture_delegate("Photo_Scene2_1","form_photo_scene","photo_preview2_1");
});



function picture_delegate(id_picture,id_form,id_preview){
	var basePath="http://localhost:8080/SocialInsuranceBuilding_Management";
	$(document).delegate("#"+id_picture,"change",function(){
     	// 得到商家名
    if($(this).val()!=""){
	      	     	     
	 	/*  var va=$(this).val().split("\\");*/
 		  $("#"+id_form).ajaxSubmit({  	// 表单id
               type:"post",  //提交方式  
               dataType:"json", //数据类型  
               url:basePath+"/Photo_Scene_Upload", //请求url  
               timeout:30000,
               
 		  
               success:function(data){
            	   var json = eval(data); //数组     
            		console.log(json); 
            		//返回JSONobject
            		var tempfileget = json.tempfileget;
            		console.log(tempfileget);
            		$("#"+id_preview).attr("src",tempfileget);
            		
               }
 		  
           }); 
	 	  return false; //不刷新页面     
	 	  
    }else{
    	
 		
 	  }
});
}



