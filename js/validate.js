$(document).ready(function(){
	$('input[name="validate"]').click(function(){
		//clear message div
		$("#msg").html("");

		//get values for all input boxes
		var userName = $('input[name="userName"]').val();
		var email = $('input[name="email"]').val();

		//no empty values permitted
		var hasValue = userName && email && pass1 && pass2;
		if(!hasValue){
			$("#msg").append("All Fields are required ").css("color",red);
			return false;	
		}

		//check that the password matched
		var passwordMatch = false;
		if(pass1 === pass2){
			passwordMatch = true;
		}
		if(!passwordMatch){
			$("#msg").append("<p>Password don't watch </p>").css("color","red");
			return false;
		}
	})
})