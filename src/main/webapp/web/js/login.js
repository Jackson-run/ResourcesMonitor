$("document").ready(function(){
	$("#loginButton").click(function(){
		if($("#user_Name").val()==""){
			alert("�������û���");
		}else if($("#user_Password").val()==""){
			alert("����������");
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