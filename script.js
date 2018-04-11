$('#navAdidas').click(function() {
  $('.Nike').hide();
  $('.Puma').hide();
  $('.Adidas').show();
  $('#weAre').hide();
})

$('#navNike').click(function() {
  $('.Adidas').hide();
  $('.Puma').hide();
  $('.Nike').show();
  $('#weAre').hide();
})

$('#navPuma').click(function() {
  $('.Nike').hide();
  $('.Adidas').hide();
  $('.Puma').show();
  $('#weAre').hide();
})
