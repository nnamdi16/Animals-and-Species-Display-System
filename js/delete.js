
let url = new URL(document.location.href);
let counter  = 5;
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

function Update(){
  $.ajax(
    {
      url:path,
      method:'PUT',
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
