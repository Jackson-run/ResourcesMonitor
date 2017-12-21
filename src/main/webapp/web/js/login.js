$("document").ready(function(){
	$("#loginButton").click(function(){
		if($("#user_Name").val()==""){
			alert("请输入用户名");
		}else if($("#user_Password").val()==""){
			alert("请输入密码");
		}else{
			submitForm();
		}
	});
});


function submitForm(){
	var form1=$("#login_Form");
	form1.attr("action","../LoginIn");
	form1.submit();
}