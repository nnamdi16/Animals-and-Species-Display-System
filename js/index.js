

	$(document).ready(function(){
		// 	$.ajax({
		// 		type:"GET",
		// 		url:" http://localhost:3000/Users",
		// 		success:function(result){
		// 			console.log(result);
		// 			"<table><thead></thead><tr><th>Name</th><th>User</th><th>username</th></tr></thead><tbody>";
		// 			for(var i in result) {
		// 				output +="<tr><td>" + result[i].firstname + "</td><td> " + result[i].email + "</td><td>" + result[i].username + "</td></tr>"
		// 			}
		// 			output += "</tbody></table>";
		// 			displayResources.html(output);
		// 			$("table").addClass("table");
		// 		}
		// 	});
		// });
	
		// $("#read-database").click(function(){
		// 	var displayResources = $("#display-resources")
		// })
	
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
			$('#read-database').click(function(event){
				$.getJSON('db.json',function(jd){
					$('#show-data').html('<p>Firstname: ' + jd.firstName + '</p>');
					$('#show-data').append('<p>Lastname : ' + jd.lastName + '</p>');
					$('#show-data').append('<p>Username: ' + jd.username + '</p>');
				})
			})
	
			// $('#read-database').click(function(){
			// 	var showData = $('#show-data');
			// 	$.getJSON('db.json',function(data){
			// 		console.log(data);
			// 		var users = data.users.map(function(user){
			// 			return user.key + ' : ' + user.value;
			// 		});
	
			// 		showData.empty();
	
			// 		if(users.length){
			// 			var content = '<li>' + users.join('</li><li>') + '</li>';
			// 			var list = $('</ul>').html(content);
			// 			showData.append(list);
			// 		}
			// 	});
			// 	showData.text('Loading the JSON file.')
			// });
	
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
				url ='http://localhost:3000/adminPost';
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
			// function Login(){
			// 	let  username = $('#login-username').val();
			// 	let password = $('#login-password').val();
			// 	username = JSON.stringify(username);
			// 	password = JSON.stringify(password);
			// 	const url = `http://localhost:3000/users?username=${username}&password=${password}`;
			// 	let newOption = {
			// 		method : 'GET',
			// 		headers:{
			// 			'Content-Type':'application/json'
			// 		}
			// 	}
			// 	fetch(url,newOption)
			// 		.then((response) => {
			// 			const user = response.json;
			// 			if(user.admin){
			// 				location.replace  ("http://127.0.0.1:8007/admin.html");
			// 			}else{
			// 				window.location.href = "index.html"
			// 			}
			// 		})
			// 		.catch((err) =>console.log(err));
			// }
	
			// $("#login-submit").click(function(){
			// 	Login();
			// })
	
			$("#signUp-submit").click(function(){
				url = 'http://localhost:3000/Users';
				let fName =$("#user-firstName").val();
				let lName = $("#user-lastName").val();
				let username = $("#user-username").val();
				let  password = $("#user-password").val();
				let email = $("#user-email").val();
	
				
				let user = new User(fName,lName,email,username,password);
				create(user);
				
			});
	
			$('#login-submit').click(function(){
				let ema = $('#login-username').val();
				let pas = $('#login-password').val();
				console.log(pas);
				$.get("http://localhost:3000/users?username="+ema,function(data){
					let obj = JSON.stringify(data[0].password);
					pas = JSON.stringify(pas);
					if((pas==obj && pas == 12345)){
						location.replace("http://127.0.0.1:8008/admin.html")
					}
					else if(pas=obj){
						location.replace("http://127.0.0.1:8008/blog.html")
					}else{
						alert("Wrong username or password");
					}
				},"json")
			});
	
			//----------------------------------------
			//Load data from the db.json
			$.getJSON("db.json",function(data){
				var items = [];
				$.each(data, function(key,val){
					items.push("<li id='" + key +"'>" + val + "</li>");
				});
				$("<ul/>", {
					"class":"my-new-list",
					html:items.join("")
				}).appendTo("body")
			})
	
		});
	
	
			
	
	
	
	

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




