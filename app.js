
/*$(document).ready(function(){ //deje que cargue la pagna
  alert("jQuery esta funcionando !!");
  $("button").click(function(){
      $(this).slideUp();
  });
});*/

$(document).ready(function(){
  $("#button1").on("click", function(){
    $(".miClase").css({"background-color":"red"});
  });
});
