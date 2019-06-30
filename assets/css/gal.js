<!DOCTYPE js>


$( ".galeria img" ).click(function() {
   $("#btn-anterior").prop('disabled', false);
   $("#btn-siguiente").prop('disabled', false);
  imagen = $(this).attr( "src");
  $( ".modal-body" ).html("<img src="+imagen+">");
  if ($('.galeria').has("img[src$='"+imagen+"']").find('img:first').attr( "src") == imagen) {
    $("#btn-anterior").prop('disabled', true);
  }
  if ($('.galeria').has("img[src$='"+imagen+"']").find('img:last').attr( "src") == imagen) {
    $("#btn-siguiente").prop('disabled', true);
  }
  $('#myModal').modal('show');
});


$("#btn-siguiente").click(function() {
  imagen = $("img[src$='"+imagen+"']").next().attr("src");
  $( ".modal-body" ).html("<img src="+imagen+">");
  if ($('.galeria').has("img[src$='"+imagen+"']").find('img:last').attr( "src") == imagen) {
    $("#btn-siguiente").prop('disabled', true);
  }
  if ($('.galeria').has("img[src$='"+imagen+"']").has("img[src$='"+imagen+"']").find('img:first').attr( "src") != imagen) {
    $("#btn-anterior").prop('disabled', false);
  }
});

$("#btn-anterior").click(function() {
  imagen = $("img[src$='"+imagen+"']").prev().attr("src");
  $( ".modal-body" ).html("<img src="+imagen+">");
  if ($('.galeria').has("img[src$='"+imagen+"']").find('img:first').attr( "src") == imagen) {
    $("#btn-anterior").prop('disabled', true);
  }
  if ($('.galeria').has("img[src$='"+imagen+"']").find('img:last').attr( "src") != imagen) {
    $("#btn-siguiente").prop('disabled', false);
  }
});


$("#btn-download").click(function() {
  window.open(imagen);
});
