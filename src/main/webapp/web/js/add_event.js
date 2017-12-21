
  $(document).ready(function(){
	  var maxnum;
   

	
   
   /*var table_add_button=document.getElementById("add_Item");
		table_add_button.onclick=function(){
			$("#Item_Frame").append(String_html3);
		};*/
   $("#add_Item").click(function(){
	   var numOfItem=$("#numOfItem").val();
	   var numarr=numOfItem.split(",");
	   maxnum=numarr[numarr.length-1];
	   maxnum=maxnum-1+2;
	   numOfItem=numOfItem+","+maxnum;
	   $("#numOfItem").val(numOfItem);
	   
	   
	   
	   var String_html=
		   '<div class="padding_dis_2 border_bottom margin_top white_background" id="del_'+maxnum+'">'
		     +'<div class="row ">'
	            +'<div class="col-md-12">'
	             +'  <div class="col-md-11 padding_left" >'
	                 +' <span class="h4"><strong>维修项目信息</strong></span>'
	              +' </div>'
	              +' <div class="col-md-1 text_align_right">'
	                +'<img src="http://localhost:8080/SocialInsuranceBuilding_Management/web/hire_estate/images/Cancel-button.png" alt="logo" class="sub_Button" id="img_del_'+maxnum+'">'      
	              +' </div>'
	          +'  </div>'
	       +'  </div>'
	     +' </div>';
	   
	   var String_html2=
		  ' <div class="padding_dis_2 white_background" id="dele_'+maxnum+'">'
		   +'<div class="row">'
		   +'  <div class="col-md-8">'
		   +'  <div class="form-group">'
		   +'  <label class="col-md-2 control-label">选择维修项目</label>'
		   +' <div class="col-md-8">'
	                 
		   +' <select  class="form-control" name="Own_Section_'+maxnum+'" id="Own_Section_'+maxnum+'">'
		   +'<option value="">请选择</option>'
		   +'<option value="盛水">盛水</option>'
		   +'<option value="墙面破裂">墙面破裂</option>'
		   +' <option value="电器损坏">电器损坏</option>'
		   +' <option value="家具损坏">家具损坏</option>'
		   +'</select>'
		   +'</div>'
		   +'</div>'
		   +'</div>'


		   +'<div class="col-md-8">'
		   +'<div class="form-group">'
		   +'<label class="col-md-2 control-label">选择维修部位</label>'
		   +'<div class="col-md-8">'
	                 
		   +'<select  class="form-control" name="Piece_Name_'+maxnum+'" id="Piece_Name_'+maxnum+'">'
		   +'<option value="">请选择</option>'
		   +'<option value="灯">灯</option>'
		   +' <option value="空调">空调</option>'
		   +' <option value="电视机">电视机</option>'
		   +'<option value="冰箱">冰箱</option>'
		   +'</select>'
		   +'</div>'
		   +'</div>'
		   +'</div>'

		   +' <div class="col-md-8">'
		   +'<div class="form-group">'
		   +' <label class="col-md-2 control-label">问题描述</label>'
		   +' <div class="col-md-8">'
	                 
		   +' <select  class="form-control" name="Problem_Simple_'+maxnum+'" id="Problem_Simple_'+maxnum+'">'
		   +'<option value="">请选择</option>'
		   +' <option value="家具问题">家具问题</option>'
		   +' <option value="电器问题">电器问题</option>'
		   +'<option value="房屋漏水">房屋漏水</option>'
		   +'<option value="墙面有明显裂痕">墙面有明显裂痕</option>'
		   +' </select>'
		   +'</div>'
		   +'</div>'
		   +'</div>'


		   +'<div class="col-md-8">'
		   +'<div class="form-group">'
		   +' <label class="col-md-2 control-label">问题描述补充</label>'
		   +' <div class="col-md-10">'
	                 
		   +' <textarea cols="30" rows="3" class="form-control"  placeholder="请填写问题补充" name="Problem_Complex_'+maxnum+'" id="Problem_Complex_'+maxnum+'">'
		   +'</textarea>'
	                   
		   +'</div>'
		   +'</div>'
		   +'</div>'

		   +'<div class="col-md-8">'
		   +'<div class="form-group">'
		   +'<label class="col-md-2 control-label">拍照上传</label>'
		   +'<div class="col-md-10">'
		   +' <div class="col-md-3 text_align">'
		   +'  <div class="thumbnail">'
		   +' <img src="images/thumbnail.png" alt="" id="photo_preview0_'+maxnum+'" class="thumbnail_img" style="height:65px;">'

		   +'</div>'
		   +'<div class="origin_position">'
		   +' <input type="file" class="file_position" name="Photo_Scene0_'+maxnum+'" id="Photo_Scene0_'+maxnum+'">'
		   +' <button class="btn btn-primary " >选择照片</button>'
		   +' </div>'
	                    
		   +'</div>'
		   +'<div class="col-md-3 text_align">'
		   +' <div class="thumbnail">'
		   +'  <img src="images/thumbnail.png" alt="" id="photo_preview1_'+maxnum+'" class="thumbnail_img" style="height:65px;">'
		   +' </div>'
		   +'<div class="origin_position">'
		   +' <input type="file" class="file_position" name="Photo_Scene1_'+maxnum+'" id="Photo_Scene1_'+maxnum+'">'
		   +' <button class="btn btn-default " >选择照片</button>'
		   +'</div>'
		   +'</div>'
		   +'<div class="col-md-3 text_align">'
		   +'  <div class="thumbnail">'
		   +' <img src="images/thumbnail.png" alt="" id="photo_preview2_'+maxnum+'" class="thumbnail_img" style="height:65px;">'
		   +'</div>'
		   +' <div class="origin_position">'
		   +'<input type="file" class="file_position" name="Photo_Scene2_'+maxnum+'" id="Photo_Scene2_'+maxnum+'">'
		   +'<button class="btn btn-default " >选择照片</button>'
		   +'</div>'
		   +'</div>'
	                   
		   +' </div>'
		   +'</div>'
		   +'</div>'

	          
	           
		   +'</div>'
	       
		   +'</div> ' ; 
	   
	   var String_html3=String_html+String_html2;
	   
	   $("#Item_Frame").append(String_html3);
	   
	    picture_delegate("Photo_Scene0_"+maxnum,"event_upload_form","photo_preview0_"+maxnum);
		picture_delegate("Photo_Scene1_"+maxnum,"event_upload_form","photo_preview1_"+maxnum);
		picture_delegate("Photo_Scene2_"+maxnum,"event_upload_form","photo_preview2_"+maxnum);
	   
	  /* $("#img_del_"+maxnum).click(function(){
		   $("#del_"+maxnum).remove();
		   $("#dele_"+maxnum).remove();
	   });*/
	   
	  /* $("#img_del_"+maxnum).bind('click', function() {
		   $("#del_"+maxnum).remove();
		   $("#dele_"+maxnum).remove();
		 });*/
	   $("#img_del_2").bind('click', function() {
		   $("#del_2").remove();
		   $("#dele_2").remove();
		   numarr=numOfItem.split(",");
		  /* numarr.splice(1,1);*/
		   for(var i=0;i<numarr.length;i++){
			   if(numarr[i]==2){
				   numarr.splice(i,1);
				   break;
			   }
				   
		   }
		   
		   
		   numOfItem=numarr.join(",");
		   $("#numOfItem").val(numOfItem);
		   
		   
		   
		 });
	   $("#img_del_3").bind('click', function() {
		   $("#del_3").remove();
		   $("#dele_3").remove();
		   numarr=numOfItem.split(",");
		   for(var i=0;i<numarr.length;i++){
			   if(numarr[i]==3){
				   numarr.splice(i,1);
				   break;
			   }
				   
		   }
		   numOfItem=numarr.join(",");
		   $("#numOfItem").val(numOfItem);
		   
		 });
	   $("#img_del_4").bind('click', function() {
		   $("#del_4").remove();
		   $("#dele_4").remove();
		   numarr=numOfItem.split(",");
		   for(var i=0;i<numarr.length;i++){
			   if(numarr[i]==4){
				   numarr.splice(i,1);
				   break;
			   }
				   
		   }
		   numOfItem=numarr.join(",");
		   $("#numOfItem").val(numOfItem);
		   
		 });
	   $("#img_del_5").bind('click', function() {
		   $("#del_5").remove();
		   $("#dele_5").remove();
		   numarr=numOfItem.split(",");
		   for(var i=0;i<numarr.length;i++){
			   if(numarr[i]==5){
				   numarr.splice(i,1);
				   break;
			   }
				   
		   }
		   numOfItem=numarr.join(",");
		   $("#numOfItem").val(numOfItem);
		   
		 });
	   $("#img_del_6").bind('click', function() {
		   $("#del_6").remove();
		   $("#dele_6").remove();
		   numarr=numOfItem.split(",");
		   for(var i=0;i<numarr.length;i++){
			   if(numarr[i]==6){
				   numarr.splice(i,1);
				   break;
			   }
				   
		   }
		   numOfItem=numarr.join(",");
		   $("#numOfItem").val(numOfItem);
		   
		 });
	   
	   $("#img_del_7").bind('click', function() {
		   $("#del_7").remove();
		   $("#dele_7").remove();
		   numarr=numOfItem.split(",");
		   for(var i=0;i<numarr.length;i++){
			   if(numarr[i]==7){
				   numarr.splice(i,1);
				   break;
			   }
				   
		   }
		   numOfItem=numarr.join(",");
		   $("#numOfItem").val(numOfItem);
		   
		 });
	   $("#img_del_8").bind('click', function() {
		   $("#del_8").remove();
		   $("#dele_8").remove();
		   numarr=numOfItem.split(",");
		   for(var i=0;i<numarr.length;i++){
			   if(numarr[i]==8){
				   numarr.splice(i,1);
				   break;
			   }
				   
		   }
		   numOfItem=numarr.join(",");
		   $("#numOfItem").val(numOfItem);
		   
		 });
	   $("#img_del_9").bind('click', function() {
		   $("#del_9").remove();
		   $("#dele_9").remove();
		   numarr=numOfItem.split(",");
		   for(var i=0;i<numarr.length;i++){
			   if(numarr[i]==9){
				   numarr.splice(i,1);
				   break;
			   }
				   
		   }
		   numOfItem=numarr.join(",");
		   $("#numOfItem").val(numOfItem);
		   
		 });
	   $("#img_del_10").bind('click', function() {
		   $("#del_10").remove();
		   $("#dele_10").remove();
		   numarr=numOfItem.split(",");
		   for(var i=0;i<numarr.length;i++){
			   if(numarr[i]==10){
				   numarr.splice(i,1);
				   break;
			   }
				   
		   }
		   numOfItem=numarr.join(",");
		   $("#numOfItem").val(numOfItem);
		   
		 });
	   
	   
	   
   });
   
   
});
 