
let url = new URL(document.location.href);
let counter  = 0;

let i = url.searchParams.get("id");
console.log(i);
let path = `http://localhost:3000/adminPost/${counter}`;


function Delete(){
  ++counter;
  $.ajax({
    url: path,
    method: 'DELETE',
    success: function(response) {
      alert("deleted");
     document.location.href = "gallery.html";
    },
    error: function(){
        alert('error')
    }
  });
  
}

function fetchData(id){
  
 console.log(id);
  $.get(
    `http://localhost:3000/adminPost/${id}`,
    function(data){
      //Values used to fillout the form
      let id = data.id;
      console.log(data);
      let animalName = data.animalName;
      let animalSpecies = data.animalSpecies;
      let pictureUrl = data.pictureUrl;
      let description = data.description;
      
      $("#animal-id").val(id)
      $("#animal-name").val (animalName);
      $("#animal-species").val(animalSpecies);
      $("#animal-description").val(description);
      $("#animal-pictureUrl").val(pictureUrl);
        
      

    }
    
  )


}
  


function Update(){
  let id = $("#animal-id").val();
  let newPath = `http://localhost:3000/adminPost/${id}`
  // console.log(counter);
  console.log(newPath);
  //  ++counter;
  // console.log(counter);
  let  animalName = $("#animal-name").val();
	let animalSpecies =$("#animal-species").val();
  let  description = $("#animal-description").val();
  let pictureUrl = $("#animal-pictureUrl").val();
  // animalName =data[counter].animalName;
  // animalSpecies = data[counter].animal
  const data = {
    id:id,
    animalName:animalName,
    animalSpecies:animalSpecies,
    pictureUrl: description,
    description: pictureUrl,
    
  }
  $.ajax(
    {
      url:newPath,
      method:'PUT',
      data:data,
      success:function(response){
        alert("Update completed");
        document.location.href = "gallery.html";
      },
      error:function(){
        alert('Update Aborted')
      }
    }
  )
}

