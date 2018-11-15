
	$(document).ready(function(){
	//--------------------POST REQUEST---------------------------------------------------------------------------------	
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
// --------------------------------------------------------------------------------------------------------------------
			
//--------------------------UNIQUE ID----------------------------------------------------------------------------------			
			var uniqId = (function(){
				var i = 0;
				return function (){
					return i++;
				}
			});
// --------------------------------------------------------------------------------------------------------------------


//---------------------------------Login Form--------------------------------------------------------------------------
// /authentication?username=USERNAME
			$('#login-submit').click(function(){
				let ema = $('#login-username').val();
				let pas = $('#login-password').val();
				console.log(pas);
				$.get("http://localhost:3000/users?username=" + ema,function(data){
					let obj = JSON.stringify(data[0].password);
					pas = JSON.stringify(pas);
					if((pas == obj && pas == 12345)){
						window.location.href = "./admin.html";
					}
					else if(pas == obj && !(pas==12345)){
						window.location.href = "./gallery.html";
					}else{
						alert("Wrong username or password");
					}
					
				},"json")
					
			});

//-----------------------------------------------------------------------------------------------------------------------
			//Load data from the db.json
			$('#letter-b .button').click(function(){
				$.getJSON('db.json',function(data){
					$('#letters').empty();
					$.each(data,function(entryIndex,entry){
						var html = '<div class="entry"></div>'
						html += '<h3 class="animalName">' + entry['animalName'] + '</h3>';
						html += '<div class="animalName">' + entry['animalSpecies'] + '</div>';
						html += '<div class="description">';
						html += entry['description'];
						if(entry['pictureUrl']){
							html += '<div class="pictureUrl">';
							$.each(entry['pictureUrl'], function(lineIndex,line){
								html += '<div class= "quote-author">' + line + '</div>';
							});
							if(entry['animalName']){
								html += '</div>';
							}
							html += '</div>';
							html += '</div>';
							$('#letters').append($(html));
						}

					});	
				});
			});
// --------------------------------------------------------------------------------------------------------------------
	
//----------------------------------Admin Post-------------------------------------------------------------------------
		function AdminPost(animalName,animalSpecies,pictureUrl,description){
			this.id = uniqId();
			this.animalName = animalName;
			this.animalSpecies = animalSpecies;
			this.pictureUrl = pictureUrl;
			this.description = description;
		}
		$("#blog-submit").click(function(){
			url ='http://localhost:3000/adminPost';
			let animalName = $("#animal-name").val();
			let animalSpecies =$("#animal-species").val();
			let description = $("#animal-description").val();
			let pictureUrl = $("#animal-pictureUrl").val();
			let newPost = new AdminPost(animalName,animalSpecies,description,pictureUrl);
			create(newPost);
		})
//----------------------------------------------------------------------------------------------------------------------

//---------------------------------User SignUp--------------------------------------------------------------------------
		function User(firstname,lastname,email,username, password,comments){
			this.id = uniqId();
			this.firstname = firstname;
			this.lastname = lastname;
			this.username = username;
			this.password = password;
			this.email = email;
			this.comments = comments;
		
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
			
		});
//-----------------------------------------------------------------------------------------------------------------------


		});

			

		
	








