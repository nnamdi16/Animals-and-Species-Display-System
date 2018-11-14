
let url = new URL(document.location.href);
let counter  = 6;
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

  $.get(
    `http://localhost:/adminPost`,
    function(data){
      let 
    }
    
  )

function Update(){
  ++counter;
  console.log(counter);
  const animalName = $("#animal-name").val();
	const animalSpecies =$("#animal-species").val();
	const description = $("#animal-description").val();
	const pictureUrl = $("#animal-pictureUrl").val();
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
