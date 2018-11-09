

	$(document).ready(function(){
		function create(data) {
			let newOption = {
				method: 'POST',
				headers: {
					'Content-Type':'application/json'
				},
				body: JSON.stringify(data)
			}
			return fetch(url,newOption)
				.then((response) =>response.json)
		}
		
		function Admin(username,password){ 
			
			this.username = username;
			this.password = password;
		}

		
		var uniqId = (function(){
			var i = 0;
			return function (){
				return i++;
			}
		})()
		

		function User(username,email,password,comments){
			this.id = uniqId();
			this.username = username;
			this.password = password;
			this.email = email;
			this.comments = comments;
		
		}
		
		$("#submit").click(function(){
			url = 'http://localhost:3000/Users';
			var fName =$("#user-firstname").val();
			var lName = $("#user-lastName").val();
			let username = $("#user-username").val();
			let  password = $("#user-password").val();
			
			let user = new User(fName,lName,username,password);
			create(user);
			
		})
	});


// var xhr = new XMLHttpRequest();




