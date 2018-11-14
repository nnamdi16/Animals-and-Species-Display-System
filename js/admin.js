$(document).ready(function(){

	let url = new URL(document.location.href);
	let i = url.searchParams.get("i");
	let path = `http://localhost:3000/adminPost/${i}`;


	$.get(
		`http://localhost:3000/adminPost`,

	
		function(data) {
		  for (counter in data) {
				console.log(counter);
			$("#table").append(
			  `<tr><td>
				${data[counter].animalName}</td><td>${data[counter].animalSpecies}</td><td>${data[counter].pictureUrl}</td><td>${data[counter].description}</td><td>
				<a href='./delete.html?id=${data[counter].id}'></a>
				<button type='button'class="btn btn-primary"  onClick = "Delete(counter)">DELETE</button><button type='button' class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">UPDATE</button></td><tr>`
			);
		  }
		},
		"json"
		);


		
		

		

	 
})