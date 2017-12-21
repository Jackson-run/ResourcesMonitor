function submit_check(){
	var numOfItem=$("#numOfItem").val();
	var brr=numOfItem.split(",");
	if($("#House_District").val()=="") alert("请选择片区");
    else if($("#House_Group").val()=="") alert("请选择组团");
    else if($("#House_Zhuang").val()=="") alert("请填写房屋幢号");
    else if($("#House_Danyuan").val()=="") alert("请填写单元号");
    else if($("#House_Shi").val()=="") alert("请填写室");
    else if($("#Declare_Repair_Man").val()=="") alert("请填写报修人");
    else if($("#Contact_Phone").val()=="") alert("请填写报修人联系电话");
    else{
			for(var i=0;i<brr.length;i++){
				var num=brr[i];
				if($("#Own_Section_"+num).val()=="") {alert("请选择维修项目名称");break;}
		        else if($("#Piece_Name_"+num).val()=="") {alert("请选择维修部位名称");break;}
		        else if($("#Problem_Simple_"+num).val()=="") {alert("请选择问题描述");break;}
		        else if($("#Problem_Complex_"+num).val()==""){ alert("请填写问题详细描述");break;}        
		        else if($("#Photo_Scene0_"+num).val()==""){ alert("请上传第一张图片");break;}
		        if(i==brr.length-1){
		        	 var form1= $("#event_upload_form");
		             form1.attr("action","../../Hire_Estate");
		             form1.submit();
		        }
		       
			}
    }
	
};