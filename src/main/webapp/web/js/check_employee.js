$("document").ready(function(){
	var basePath="http://localhost:8080/SocialInsuranceBuilding_Management";
	$("#checkResult").change(function(){
		if($("#checkResult").val()=='同意'){
			$("#printButton").show();
		}else{
			$("#printButton").hide();
		}
	});
	
	
	$("#submitButton").click(function(){
		if($("#checkResult").val()==""){
			alert("请填写审核结果");
		}else if($("#checkReason").val()==""){
			alert("请填写审核意见");
		}else{
			var form1=$("#checkForm");
			form1.attr("action",basePath+"/Employee_Verify");
			form1.submit();
		}
		
	});
});