$('#navAdidas').click(function() {
  $('.Nike').hide();
  $('.Puma').hide();
  $('.Adidas').show();
})

$('#navNike').click(function() {
  $('.Adidas').hide();
  $('.Puma').hide();
  $('.Nike').show();
})

$('#navPuma').click(function() {
  $('.Nike').hide();
  $('.Adidas').hide();
  $('.Puma').show();
})
