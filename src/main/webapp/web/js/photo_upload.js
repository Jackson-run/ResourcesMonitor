


$("document").ready(function(){
	if(document.title=="event_waiting"){
		picture_delegate("Photo_Scene0_1","event_upload_form","photo_preview0_1");
		picture_delegate("Photo_Scene1_1","event_upload_form","photo_preview1_1");
		picture_delegate("Photo_Scene2_1","event_upload_form","photo_preview2_1");
		
	}
	
	
	
	
	
});


function picture_delegate(id_picture,id_form,id_preview){
	$(document).delegate("#"+id_picture,"change",function(){
     	// �õ��̼���
    if($(this).val()!=""){
	      	     	     
	 	  var va=$(this).val().split("\\");
 		  $("#"+id_form).ajaxSubmit({  	// ��id
               type:"get",  //�ύ��ʽ  
               dataType:"json", //��������  
               url:"../../Photo_Upload", //����url  
               timeout:30000,
               complete:function(data){ //�ύ�ɹ��Ļص�����  data�Ƿ���ֵ
            	   $("#"+id_preview).attr("src","../../../data/upload4preview/"+va[va.length-1]);
               },  
           }); 
	 	  return false; //��ˢ��ҳ��     
	 	  
    }else{
    	
 		
 	  }
});
}

