

	$(document).ready(function(){
			// $.get("http://localhost:3000/Users",function(data){
			// 	for(i in data){

			// 	}

			// })
	
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
		
		// function Admin(username,password){ 
			
		// 	this.username = username;
		// 	this.password = password;
		// }

		
		var uniqId = (function(){
			var i = 0;
			return function (){
				return i++;
			}
		})()
		
		function AdminPost(title,body,pictureUrl){
			this.id = uniqId();
			this.title = title;
			this.body = body;
			this.pictureUrl = pictureUrl;
		}
		$("#blog-submit").click(function(){
			url ='http://localhost:3000/Admin';
			let title = $("#blog-title").val();
			let body = $("#blog-body").val();
			let pictureUrl = $("#blog-pictureUrl").val();
			let newPost = new AdminPost(title,body,pictureUrl);
			create(newPost);
		})

		function User(firstname,lastname,email,username, password,comments){
			this.id = uniqId();
			this.firstname = firstname;
			this.lastname = lastname;
			this.username = username;
			this.password = password;
			this.email = email;
			this.comments = comments;
		
		}
		function Login(username,password){
			this.username = User.username;
			this.password =User.password;
		}
		$("#signUp-submit").click(function(){
			url = 'http://localhost:3000/Users';
			let fName =$("#user-firstName").val();
			let lName = $("#user-lastName").val();
			let username = $("#user-username").val();
			let  password = $("#user-password").val();
			let email = $("#user-email").val();

			
			let user = new User(fName,lName,email,username,password);
			create(user);
			
		})


		// $("#login-password").click(function(){
		// 	$.get(url, function(username,password){
		// 		if(){

		// 		}
		// 	})
		// })

		// $(document).ready(function(){
		// 	$("button").click(function(){
		// 		$.get(url, function(data, status){
		// 			alert("Data: " + data + "\nStatus: " + status);
		// 		});
		// 	});
		// });
	});


// var xhr = new XMLHttpRequest();




