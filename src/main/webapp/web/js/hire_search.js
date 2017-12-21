$("document").ready(function(){
	var basePath="http://localhost:8080/SocialInsuranceBuilding_Management";
	$("#button_search").click(function(){
		
		submit_form();
	});
	
	
	$("#prePage").click(function(){
		var pageNumber=$("#page_Number").val();
		$("#page_Number").val(pageNumber-1);
		submit_form();
		
	});
	$("#nextPage").click(function(){
		var pageNumber=$("#page_Number").val();
		$("#page_Number").val(pageNumber-1+2);
		submit_form();
	});
	$("#firstPage").click(function(){
		
		$("#page_Number").val(1);
		submit_form();
	});
	$("#lastPage").click(function(){
		var pageCount=$("#pageCount").val();
		$("#page_Number").val(pageCount);
		submit_form();
	});
	
	
	$("#event_waiting").click(function(){
		if(document.title=="event_search"){
			window.location.href=basePath+"/web/hire_estate/event_waiting.jsp";
		}else if(document.title=="event_search_employee"){
			window.location.href=basePath+"/web/sun_employee/event_waiting_employee.jsp";
		}
		
	});
	$("#feedback_button").click(function(){
		if(document.title=="event_search"){
			window.location.href=basePath+"/Search_FeedBack";
		}else if(document.title=="event_search_employee"){
			window.location.href=basePath+"/web/sun_employee/special_event_upload.jsp";
		}
		
	});
	
});


function submit_form(){
	var basePath="http://localhost:8080/SocialInsuranceBuilding_Management";
	var form1=$("#form_search");
	form1.attr("action",basePath+"/Search_AllEvents");
	form1.submit();
}