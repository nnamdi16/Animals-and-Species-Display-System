
let url = new URL(document.location.href);
let counter  = 0;
let i = url.searchParams.get("id");
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

function fetchData(){
  $.get(
    `http://localhost:/adminPost?id=` + id,
    function(data){
      //Values used to fillout the form
      let animalName = data[counter].animalName;
      let animalSpecies = data[counter].animalSpecies;
      let pictureUrl = data[counter].pictureUrl;
      let description = data[counter].description;
        
      $("#animal-name").val () = animalName;
      $("#animal-species").val() = animalSpecies;
      $("#animal-description").val() = pictureUrl;
      $("#animal-pictureUrl").val()  = description;
      
      $.ajax({
        url:path,
        method: 'PUT',
        success:function(response){
        alert("Update completed");
        document.location.href = "gallery.html";
        },
        error: function(){
          alert("No update")
        }
      })

    }
    
  )

}

  
function Update(){
  ++counter;
  console.log(counter);
  let  animalName = $("#animal-name").val();
	let animalSpecies =$("#animal-species").val();
  let  description = $("#animal-description").val();
  let pictureUrl = $("#animal-pictureUrl").val();
  animalName =data[counter].animalName;
  animalSpecies = data[counter].animal
  const data = {
    animalName:animalName,
    animalSpecies:animalSpecies,
    pictureUrl: description,
    description: pictureUrl,
    
  }
  $.ajax(
    {
      url:path,
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

// $("#update-submit").click(function(){
//   Update();
// })
