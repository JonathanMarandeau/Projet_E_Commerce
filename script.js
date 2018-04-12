
$(function(){ // DEBUT DE LA FONCTION DOCUMENT READY

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

$('#navAll').click(function(){
  $('.Nike').show();
  $('.Adidas').show();
  $('.Puma').show();
  $('#weAre').show();
})

/*---------------- GESTION DU PANIER ----------------------------*/

//  VAR DES REFERENCES DES SHOES  -------------------------------------
var ref_shoes1 = 'Super chaussure Nike top moumoute'
var ref_shoes2 = 'Super chaussure Puma top confortable'
var ref_shoes3 = 'Super chaussure Adidas top top génialissime'
// VAR DES QUANTITES----------------------------------
var qty_shoes1 = 0;
var qty_shoes2 = 0;
var qty_shoes3 = 0;
// VAR DES PRIX UNITAIRES ---------------------------------
var price_shoes1 = 75;
var price_shoes2 = 75;
var price_shoes3 = 100;
// VAR MEGA SOMME----------------------------------------------------
var total_all = 0
console.log('somme = '+total_all);
// BOUTONS DES IMAGES ------------------------------------------------
$('#btn_shoes1').click(function(){ // bouton shoes1
  qty_shoes1++;
  total_all = (qty_shoes1*price_shoes1) + (qty_shoes2*price_shoes2) + (qty_shoes3*price_shoes3); // fonction provisoire
  $('#ref_shoes1').text(ref_shoes1);
  $('#price_shoes1').text(price_shoes1.toFixed(2)+'€');
  $('#qty_shoes1').val(qty_shoes1);
  $('#total_shoes1').text((qty_shoes1 * price_shoes1).toFixed(2)+'€');
  $('#total_all').text(total_all.toFixed(2)+'€');
  $('#cart_shoes1').show();
});

$('#btn_shoes2').click(function(){ // bouton shoes2
  qty_shoes2++;
  total_all = (qty_shoes1*price_shoes1) + (qty_shoes2*price_shoes2) + (qty_shoes3*price_shoes3); // fonction provisoire
  $('#ref_shoes2').text(ref_shoes2);
  $('#price_shoes2').text(price_shoes2.toFixed(2)+'€');
  $('#qty_shoes2').val(qty_shoes2);
  $('#total_shoes2').text((qty_shoes2 * price_shoes2).toFixed(2)+'€');
  $('#total_all').text(total_all.toFixed(2)+'€');
  $('#cart_shoes2').show();
});

$('#btn_shoes3').click(function(){ // bouton shoes3
  qty_shoes3++;
  total_all = (qty_shoes1*price_shoes1) + (qty_shoes2*price_shoes2) + (qty_shoes3*price_shoes3); // fonction V1
  $('#ref_shoes3').text(ref_shoes3);
  $('#price_shoes3').text(price_shoes3.toFixed(2)+'€');
  $('#qty_shoes3').val(qty_shoes3);
  $('#total_shoes3').text((qty_shoes3 * price_shoes3).toFixed(2)+'€');
  $('#total_all').text(total_all.toFixed(2)+'€');
  $('#cart_shoes3').show();
});
// BOUTON MAJ ----------------------------------------------------------
  $('#btn_update').click(function(){
  // MAJ  de toutes les variables quantité + mega somme
  qty_shoes1 = $('#qty_shoes1').val();
  qty_shoes2 = $('#qty_shoes2').val();
  qty_shoes3 = $('#qty_shoes3').val();
  total_all = (qty_shoes1*price_shoes1) + (qty_shoes2*price_shoes2) + (qty_shoes3*price_shoes3);
  // MAJ de tous les totaux shoes + mega somme
  $('#total_shoes1').text((qty_shoes1 * price_shoes1).toFixed(2)+'€');
  $('#total_shoes2').text((qty_shoes2 * price_shoes2).toFixed(2)+'€');
  $('#total_shoes3').text((qty_shoes3 * price_shoes3).toFixed(2)+'€');
  $('#total_all').text(total_all.toFixed(2)+'€');
  }); // fin de la fonction click
  // BOUTON POURSUIVRE ACHAT ------------------------------------------------------
  $('#btn_continue').click(function(){
  // Pour shoes 1
  if (qty_shoes1 == 0){
  $('#cart_shoes1').hide();
  } else {
  $('#cart_shoes1').show();
  }
  // Pour shoes 2
  if (qty_shoes2 == 0){
  $('#cart_shoes2').hide();
  } else {
  $('#cart_shoes2').show();
  }
  // Pour shoes 3
  if (qty_shoes3 == 0){
  $('#cart_shoes3').hide();
  } else {
  $('#cart_shoes3').show();
  }
  }); // fin de la fonction click

}); // FIN DE LA FONCTION DOCUMENT READY
