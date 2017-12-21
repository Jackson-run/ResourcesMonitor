


$("document").ready(function(){
	if(document.title=="event_waiting"){
		picture_delegate("Photo_Scene0_1","event_upload_form","photo_preview0_1");
		picture_delegate("Photo_Scene1_1","event_upload_form","photo_preview1_1");
		picture_delegate("Photo_Scene2_1","event_upload_form","photo_preview2_1");
		
	}
	
	
	
	
	
});


function picture_delegate(id_picture,id_form,id_preview){
	$(document).delegate("#"+id_picture,"change",function(){
     	// 得到商家名
    if($(this).val()!=""){
	      	     	     
	 	  var va=$(this).val().split("\\");
 		  $("#"+id_form).ajaxSubmit({  	// 表单id
               type:"get",  //提交方式  
               dataType:"json", //数据类型  
               url:"../../Photo_Upload", //请求url  
               timeout:30000,
               complete:function(data){ //提交成功的回调函数  data是返回值
            	   $("#"+id_preview).attr("src","../../../data/upload4preview/"+va[va.length-1]);
               },  
           }); 
	 	  return false; //不刷新页面     
	 	  
    }else{
    	
 		
 	  }
});
}

