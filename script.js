$(function(){ // DEBUT DE LA FONCTION DOCUMENT READY

/* -----------------------FONCTION CATEGORIE -------------------*/

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
var ref_shoes1 = 'NK666'
var ref_shoes2 = 'NK690'
var ref_shoes3 = 'NK999'
var ref_shoes4 = 'NK605'
var ref_shoes5 = 'AD421'
var ref_shoes6 = 'AD214'
var ref_shoes7 = 'AD138'
var ref_shoes8 = 'AD404'
var ref_shoes9 = 'PM101'
var ref_shoes10 = 'PM215'
var ref_shoes11 = 'PM100'
var ref_shoes12 = 'PM5291'

// VAR DES QUANTITES----------------------------------
var qty_shoes1 = 0;
var qty_shoes2 = 0;
var qty_shoes3 = 0;
var qty_shoes4 = 0;
var qty_shoes5 = 0;
var qty_shoes6 = 0;
var qty_shoes7 = 0;
var qty_shoes8 = 0;
var qty_shoes9 = 0;
var qty_shoes10 = 0;
var qty_shoes11 = 0;
var qty_shoes12 = 0;

// VAR DES PRIX UNITAIRES ---------------------------------
var price_shoes1 = 75;
var price_shoes2 = 75;
var price_shoes3 = 100;
var price_shoes4 = 85;
var price_shoes5 = 65;
var price_shoes6 = 70;
var price_shoes7 = 80;
var price_shoes8 = 120;
var price_shoes9 = 110;
var price_shoes10 = 115;
var price_shoes11 = 125;
var price_shoes12 = 450;

// VAR MEGA SOMME et MEGA QUANTITY ----------------------------------------------------
var total_all = 0;
var qty_cart = 0;
// BOUTONS DES IMAGES ------------------------------------------------
$('#btn_shoes1').click(function(){ // bouton shoes1
  qty_shoes1++; // incrémente de 1
  qty_cart = +qty_shoes1 + +qty_shoes2 + +qty_shoes3 + +qty_shoes4 + +qty_shoes5 + +qty_shoes6 + +qty_shoes7 + +qty_shoes8 + +qty_shoes9 + +qty_shoes10 + +qty_shoes11 + +qty_shoes12; // on recalcule le qty des articles
  total_all = (qty_shoes1*price_shoes1) + (qty_shoes2*price_shoes2) + (qty_shoes3*price_shoes3) + (qty_shoes4*price_shoes4)+ (qty_shoes5*price_shoes5)+ (qty_shoes6*price_shoes6)+ (qty_shoes7*price_shoes7)+ (qty_shoes8*price_shoes8)+ (qty_shoes9*price_shoes9)+ (qty_shoes10*price_shoes10)+ (qty_shoes11*price_shoes11)+ (qty_shoes12*price_shoes12); // on recalcule la sommes totale
  $('#ref_shoes1').text(ref_shoes1); // on affiche la ref de la chaussure
  $('#price_shoes1').text(price_shoes1.toFixed(2)+'€'); // on affiche le prix unitaire
  $('#qty_shoes1').val(qty_shoes1); // on affiche la val de la qty de l'article
  $('#total_shoes1').text((qty_shoes1 * price_shoes1).toFixed(2)+'€'); // on calcule le prix et on affiche 2 chiffres apres virgule
  $('#total_all').text(total_all.toFixed(2)+'€'); // on affiche la somme total avec 2 chiffres apres la virgule
  $('#qty_cart').text(qty_cart); // maj du qty du cart lors du clic
  $('#cart_shoes1').show(); // la ligne du tableau
});

$('#btn_shoes2').click(function(){ // bouton shoes2
  qty_shoes2++;
  qty_cart = +qty_shoes1 + +qty_shoes2 + +qty_shoes3 + +qty_shoes4 + +qty_shoes5 + +qty_shoes6 + +qty_shoes7 + +qty_shoes8 + +qty_shoes9 + +qty_shoes10 + +qty_shoes11 + +qty_shoes12;
  total_all = (qty_shoes1*price_shoes1) + (qty_shoes2*price_shoes2) + (qty_shoes3*price_shoes3) + (qty_shoes4*price_shoes4)+ (qty_shoes5*price_shoes5)+ (qty_shoes6*price_shoes6)+ (qty_shoes7*price_shoes7)+ (qty_shoes8*price_shoes8)+ (qty_shoes9*price_shoes9)+ (qty_shoes10*price_shoes10)+ (qty_shoes11*price_shoes11)+ (qty_shoes12*price_shoes12); // fonction provisoire
  $('#ref_shoes2').text(ref_shoes2);
  $('#price_shoes2').text(price_shoes2.toFixed(2)+'€');
  $('#qty_shoes2').val(qty_shoes2);
  $('#total_shoes2').text((qty_shoes2 * price_shoes2).toFixed(2)+'€');
  $('#total_all').text(total_all.toFixed(2)+'€');
  $('#qty_cart').text(qty_cart); // maj du qty du cart lors du clic
  $('#cart_shoes2').show();
});

$('#btn_shoes3').click(function(){ // bouton shoes3
  qty_shoes3++;
  qty_cart = +qty_shoes1 + +qty_shoes2 + +qty_shoes3 + +qty_shoes4 + +qty_shoes5 + +qty_shoes6 + +qty_shoes7 + +qty_shoes8 + +qty_shoes9 + +qty_shoes10 + +qty_shoes11 + +qty_shoes12;
  total_all = (qty_shoes1*price_shoes1) + (qty_shoes2*price_shoes2) + (qty_shoes3*price_shoes3) + (qty_shoes4*price_shoes4)+ (qty_shoes5*price_shoes5)+ (qty_shoes6*price_shoes6)+ (qty_shoes7*price_shoes7)+ (qty_shoes8*price_shoes8)+ (qty_shoes9*price_shoes9)+ (qty_shoes10*price_shoes10)+ (qty_shoes11*price_shoes11)+ (qty_shoes12*price_shoes12); // fonction provisoire
  $('#ref_shoes3').text(ref_shoes3);
  $('#price_shoes3').text(price_shoes3.toFixed(2)+'€');
  $('#qty_shoes3').val(qty_shoes3);
  $('#total_shoes3').text((qty_shoes3 * price_shoes3).toFixed(2)+'€');
  $('#total_all').text(total_all.toFixed(2)+'€');
  $('#qty_cart').text(qty_cart); // maj du qty du cart lors du clic
  $('#cart_shoes3').show();
});

$('#btn_shoes4').click(function(){ // bouton shoes4
  qty_shoes4++;
  qty_cart = +qty_shoes1 + +qty_shoes2 + +qty_shoes3 + +qty_shoes4 + +qty_shoes5 + +qty_shoes6 + +qty_shoes7 + +qty_shoes8 + +qty_shoes9 + +qty_shoes10 + +qty_shoes11 + +qty_shoes12;
  total_all = (qty_shoes1*price_shoes1) + (qty_shoes2*price_shoes2) + (qty_shoes3*price_shoes3) + (qty_shoes4*price_shoes4)+ (qty_shoes5*price_shoes5)+ (qty_shoes6*price_shoes6)+ (qty_shoes7*price_shoes7)+ (qty_shoes8*price_shoes8)+ (qty_shoes9*price_shoes9)+ (qty_shoes10*price_shoes10)+ (qty_shoes11*price_shoes11)+ (qty_shoes12*price_shoes12); // fonction provisoire
  $('#ref_shoes4').text(ref_shoes4);
  $('#price_shoes4').text(price_shoes4.toFixed(2)+'€');
  $('#qty_shoes4').val(qty_shoes4);
  $('#total_shoes4').text((qty_shoes4 * price_shoes4).toFixed(2)+'€');
  $('#total_all').text(total_all.toFixed(2)+'€');
  $('#qty_cart').text(qty_cart); // maj du qty du cart lors du clic
  $('#cart_shoes4').show();
});

$('#btn_shoes4').click(function(){ // bouton shoes4
  qty_shoes4++;
  qty_cart = +qty_shoes1 + +qty_shoes2 + +qty_shoes3 + +qty_shoes4 + +qty_shoes5 + +qty_shoes6 + +qty_shoes7 + +qty_shoes8 + +qty_shoes9 + +qty_shoes10 + +qty_shoes11 + +qty_shoes12;
  total_all = (qty_shoes1*price_shoes1) + (qty_shoes2*price_shoes2) + (qty_shoes3*price_shoes3) + (qty_shoes4*price_shoes4)+ (qty_shoes5*price_shoes5)+ (qty_shoes6*price_shoes6)+ (qty_shoes7*price_shoes7)+ (qty_shoes8*price_shoes8)+ (qty_shoes9*price_shoes9)+ (qty_shoes10*price_shoes10)+ (qty_shoes11*price_shoes11)+ (qty_shoes12*price_shoes12); // fonction provisoire
  $('#ref_shoes4').text(ref_shoes4);
  $('#price_shoes4').text(price_shoes4.toFixed(2)+'€');
  $('#qty_shoes4').val(qty_shoes4);
  $('#total_shoes4').text((qty_shoes4 * price_shoes4).toFixed(2)+'€');
  $('#total_all').text(total_all.toFixed(2)+'€');
  $('#qty_cart').text(qty_cart); // maj du qty du cart lors du clic
  $('#cart_shoes4').show();
});

$('#btn_shoes5').click(function(){ // bouton shoes5
  qty_shoes5++;
  qty_cart = +qty_shoes1 + +qty_shoes2 + +qty_shoes3 + +qty_shoes4 + +qty_shoes5 + +qty_shoes6 + +qty_shoes7 + +qty_shoes8 + +qty_shoes9 + +qty_shoes10 + +qty_shoes11 + +qty_shoes12;
  total_all = (qty_shoes1*price_shoes1) + (qty_shoes2*price_shoes2) + (qty_shoes3*price_shoes3) + (qty_shoes4*price_shoes4)+ (qty_shoes5*price_shoes5)+ (qty_shoes6*price_shoes6)+ (qty_shoes7*price_shoes7)+ (qty_shoes8*price_shoes8)+ (qty_shoes9*price_shoes9)+ (qty_shoes10*price_shoes10)+ (qty_shoes11*price_shoes11)+ (qty_shoes12*price_shoes12); // fonction provisoire
  $('#ref_shoes5').text(ref_shoes5);
  $('#price_shoes5').text(price_shoes5.toFixed(2)+'€');
  $('#qty_shoes5').val(qty_shoes5);
  $('#total_shoes5').text((qty_shoes5 * price_shoes5).toFixed(2)+'€');
  $('#total_all').text(total_all.toFixed(2)+'€');
  $('#qty_cart').text(qty_cart); // maj du qty du cart lors du clic
  $('#cart_shoes5').show();
});

$('#btn_shoes6').click(function(){ // bouton shoes6
  qty_shoes4++;
  qty_cart = +qty_shoes1 + +qty_shoes2 + +qty_shoes3 + +qty_shoes4 + +qty_shoes5 + +qty_shoes6 + +qty_shoes7 + +qty_shoes8 + +qty_shoes9 + +qty_shoes10 + +qty_shoes11 + +qty_shoes12;
  total_all = (qty_shoes1*price_shoes1) + (qty_shoes2*price_shoes2) + (qty_shoes3*price_shoes3) + (qty_shoes4*price_shoes4)+ (qty_shoes5*price_shoes5)+ (qty_shoes6*price_shoes6)+ (qty_shoes7*price_shoes7)+ (qty_shoes8*price_shoes8)+ (qty_shoes9*price_shoes9)+ (qty_shoes10*price_shoes10)+ (qty_shoes11*price_shoes11)+ (qty_shoes12*price_shoes12); // fonction provisoire
  $('#ref_shoes6').text(ref_shoes6);
  $('#price_shoes6').text(price_shoes6.toFixed(2)+'€');
  $('#qty_shoes6').val(qty_shoes6);
  $('#total_shoes6').text((qty_shoes6 * price_shoes6).toFixed(2)+'€');
  $('#total_all').text(total_all.toFixed(2)+'€');
  $('#qty_cart').text(qty_cart); // maj du qty du cart lors du clic
  $('#cart_shoes6').show();
});

$('#btn_shoes6').click(function(){ // bouton shoes6
  qty_shoes6++;
  qty_cart = +qty_shoes1 + +qty_shoes2 + +qty_shoes3 + +qty_shoes4 + +qty_shoes5 + +qty_shoes6 + +qty_shoes7 + +qty_shoes8 + +qty_shoes9 + +qty_shoes10 + +qty_shoes11 + +qty_shoes12;
  total_all = (qty_shoes1*price_shoes1) + (qty_shoes2*price_shoes2) + (qty_shoes3*price_shoes3) + (qty_shoes4*price_shoes4)+ (qty_shoes5*price_shoes5)+ (qty_shoes6*price_shoes6)+ (qty_shoes7*price_shoes7)+ (qty_shoes8*price_shoes8)+ (qty_shoes9*price_shoes9)+ (qty_shoes10*price_shoes10)+ (qty_shoes11*price_shoes11)+ (qty_shoes12*price_shoes12); // fonction provisoire
  $('#ref_shoes6').text(ref_shoes6);
  $('#price_shoes6').text(price_shoes6.toFixed(2)+'€');
  $('#qty_shoes6').val(qty_shoes6);
  $('#total_shoes6').text((qty_shoes6 * price_shoes6).toFixed(2)+'€');
  $('#total_all').text(total_all.toFixed(2)+'€');
  $('#qty_cart').text(qty_cart); // maj du qty du cart lors du clic
  $('#cart_shoes6').show();
});

$('#btn_shoes7').click(function(){ // bouton shoes7
  qty_shoes7++;
  qty_cart = +qty_shoes1 + +qty_shoes2 + +qty_shoes3 + +qty_shoes4 + +qty_shoes5 + +qty_shoes6 + +qty_shoes7 + +qty_shoes8 + +qty_shoes9 + +qty_shoes10 + +qty_shoes11 + +qty_shoes12;
  total_all = (qty_shoes1*price_shoes1) + (qty_shoes2*price_shoes2) + (qty_shoes3*price_shoes3) + (qty_shoes4*price_shoes4)+ (qty_shoes5*price_shoes5)+ (qty_shoes6*price_shoes6)+ (qty_shoes7*price_shoes7)+ (qty_shoes8*price_shoes8)+ (qty_shoes9*price_shoes9)+ (qty_shoes10*price_shoes10)+ (qty_shoes11*price_shoes11)+ (qty_shoes12*price_shoes12); // fonction provisoire
  $('#ref_shoes7').text(ref_shoes7);
  $('#price_shoes7').text(price_shoes7.toFixed(2)+'€');
  $('#qty_shoes7').val(qty_shoes7);
  $('#total_shoes7').text((qty_shoes7 * price_shoes7).toFixed(2)+'€');
  $('#total_all').text(total_all.toFixed(2)+'€');
  $('#qty_cart').text(qty_cart); // maj du qty du cart lors du clic
  $('#cart_shoes7').show();
});

$('#btn_shoes8').click(function(){ // bouton shoes8
  qty_shoes8++;
  qty_cart = +qty_shoes1 + +qty_shoes2 + +qty_shoes3 + +qty_shoes4 + +qty_shoes5 + +qty_shoes6 + +qty_shoes7 + +qty_shoes8 + +qty_shoes9 + +qty_shoes10 + +qty_shoes11 + +qty_shoes12;
  total_all = (qty_shoes1*price_shoes1) + (qty_shoes2*price_shoes2) + (qty_shoes3*price_shoes3) + (qty_shoes4*price_shoes4)+ (qty_shoes5*price_shoes5)+ (qty_shoes6*price_shoes6)+ (qty_shoes7*price_shoes7)+ (qty_shoes8*price_shoes8)+ (qty_shoes9*price_shoes9)+ (qty_shoes10*price_shoes10)+ (qty_shoes11*price_shoes11)+ (qty_shoes12*price_shoes12); // fonction provisoire
  $('#ref_shoes8').text(ref_shoes8);
  $('#price_shoes8').text(price_shoes8.toFixed(2)+'€');
  $('#qty_shoes8').val(qty_shoes8);
  $('#total_shoes8').text((qty_shoes8 * price_shoes8).toFixed(2)+'€');
  $('#total_all').text(total_all.toFixed(2)+'€');
  $('#qty_cart').text(qty_cart); // maj du qty du cart lors du clic
  $('#cart_shoes8').show();
});

$('#btn_shoes9').click(function(){ // bouton shoes9
  qty_shoes9++;
  qty_cart = +qty_shoes1 + +qty_shoes2 + +qty_shoes3 + +qty_shoes4 + +qty_shoes5 + +qty_shoes6 + +qty_shoes7 + +qty_shoes8 + +qty_shoes9 + +qty_shoes10 + +qty_shoes11 + +qty_shoes12;
  total_all = (qty_shoes1*price_shoes1) + (qty_shoes2*price_shoes2) + (qty_shoes3*price_shoes3) + (qty_shoes4*price_shoes4)+ (qty_shoes5*price_shoes5)+ (qty_shoes6*price_shoes6)+ (qty_shoes7*price_shoes7)+ (qty_shoes8*price_shoes8)+ (qty_shoes9*price_shoes9)+ (qty_shoes10*price_shoes10)+ (qty_shoes11*price_shoes11)+ (qty_shoes12*price_shoes12); // fonction provisoire
  $('#ref_shoes9').text(ref_shoes9);
  $('#price_shoes9').text(price_shoes9.toFixed(2)+'€');
  $('#qty_shoes9').val(qty_shoes9);
  $('#total_shoes9').text((qty_shoes9 * price_shoes9).toFixed(2)+'€');
  $('#total_all').text(total_all.toFixed(2)+'€');
  $('#qty_cart').text(qty_cart); // maj du qty du cart lors du clic
  $('#cart_shoes9').show();
});

$('#btn_shoes10').click(function(){ // bouton shoes10
  qty_shoes10++;
  qty_cart = +qty_shoes1 + +qty_shoes2 + +qty_shoes3 + +qty_shoes4 + +qty_shoes5 + +qty_shoes6 + +qty_shoes7 + +qty_shoes8 + +qty_shoes9 + +qty_shoes10 + +qty_shoes11 + +qty_shoes12;
  total_all = (qty_shoes1*price_shoes1) + (qty_shoes2*price_shoes2) + (qty_shoes3*price_shoes3) + (qty_shoes4*price_shoes4)+ (qty_shoes5*price_shoes5)+ (qty_shoes6*price_shoes6)+ (qty_shoes7*price_shoes7)+ (qty_shoes8*price_shoes8)+ (qty_shoes9*price_shoes9)+ (qty_shoes10*price_shoes10)+ (qty_shoes11*price_shoes11)+ (qty_shoes12*price_shoes12); // fonction provisoire
  $('#ref_shoes10').text(ref_shoes10);
  $('#price_shoes10').text(price_shoes10.toFixed(2)+'€');
  $('#qty_shoes10').val(qty_shoes10);
  $('#total_shoes10').text((qty_shoes10 * price_shoes10).toFixed(2)+'€');
  $('#total_all').text(total_all.toFixed(2)+'€');
  $('#qty_cart').text(qty_cart); // maj du qty du cart lors du clic
  $('#cart_shoes10').show();
});

$('#btn_shoes11').click(function(){ // bouton shoes11
  qty_shoes11++;
  qty_cart = +qty_shoes1 + +qty_shoes2 + +qty_shoes3 + +qty_shoes4 + +qty_shoes5 + +qty_shoes6 + +qty_shoes7 + +qty_shoes8 + +qty_shoes9 + +qty_shoes10 + +qty_shoes11 + +qty_shoes12;
  total_all = (qty_shoes1*price_shoes1) + (qty_shoes2*price_shoes2) + (qty_shoes3*price_shoes3) + (qty_shoes4*price_shoes4)+ (qty_shoes5*price_shoes5)+ (qty_shoes6*price_shoes6)+ (qty_shoes7*price_shoes7)+ (qty_shoes8*price_shoes8)+ (qty_shoes9*price_shoes9)+ (qty_shoes10*price_shoes10)+ (qty_shoes11*price_shoes11)+ (qty_shoes12*price_shoes12); // fonction provisoire
  $('#ref_shoes11').text(ref_shoes11);
  $('#price_shoes11').text(price_shoes11.toFixed(2)+'€');
  $('#qty_shoes11').val(qty_shoes11);
  $('#total_shoes11').text((qty_shoes11 * price_shoes11).toFixed(2)+'€');
  $('#total_all').text(total_all.toFixed(2)+'€');
  $('#qty_cart').text(qty_cart); // maj du qty du cart lors du clic
  $('#cart_shoes11').show();
});

$('#btn_shoes11').click(function(){ // bouton shoes11
  qty_shoes11++;
  qty_cart = +qty_shoes1 + +qty_shoes2 + +qty_shoes3 + +qty_shoes4 + +qty_shoes5 + +qty_shoes6 + +qty_shoes7 + +qty_shoes8 + +qty_shoes9 + +qty_shoes10 + +qty_shoes11 + +qty_shoes12;
  total_all = (qty_shoes1*price_shoes1) + (qty_shoes2*price_shoes2) + (qty_shoes3*price_shoes3) + (qty_shoes4*price_shoes4)+ (qty_shoes5*price_shoes5)+ (qty_shoes6*price_shoes6)+ (qty_shoes7*price_shoes7)+ (qty_shoes8*price_shoes8)+ (qty_shoes9*price_shoes9)+ (qty_shoes10*price_shoes10)+ (qty_shoes11*price_shoes11)+ (qty_shoes12*price_shoes12); // fonction provisoire
  $('#ref_shoes11').text(ref_shoes11);
  $('#price_shoes11').text(price_shoes11.toFixed(2)+'€');
  $('#qty_shoes11').val(qty_shoes11);
  $('#total_shoes11').text((qty_shoes11 * price_shoes9).toFixed(2)+'€');
  $('#total_all').text(total_all.toFixed(2)+'€');
  $('#qty_cart').text(qty_cart); // maj du qty du cart lors du clic
  $('#cart_shoes11').show();
});

$('#btn_shoes12').click(function(){ // bouton shoes12
  qty_shoes12++;
  qty_cart = +qty_shoes1 + +qty_shoes2 + +qty_shoes3 + +qty_shoes4 + +qty_shoes5 + +qty_shoes6 + +qty_shoes7 + +qty_shoes8 + +qty_shoes9 + +qty_shoes10 + +qty_shoes11 + +qty_shoes12;
  total_all = (qty_shoes1*price_shoes1) + (qty_shoes2*price_shoes2) + (qty_shoes3*price_shoes3) + (qty_shoes4*price_shoes4)+ (qty_shoes5*price_shoes5)+ (qty_shoes6*price_shoes6)+ (qty_shoes7*price_shoes7)+ (qty_shoes8*price_shoes8)+ (qty_shoes9*price_shoes9)+ (qty_shoes10*price_shoes10)+ (qty_shoes11*price_shoes11)+ (qty_shoes12*price_shoes12); // fonction provisoire
  $('#ref_shoes12').text(ref_shoes12);
  $('#price_shoes12').text(price_shoes12.toFixed(2)+'€');
  $('#qty_shoes12').val(qty_shoes12);
  $('#total_shoes12').text((qty_shoes12 * price_shoes12).toFixed(2)+'€');
  $('#total_all').text(total_all.toFixed(2)+'€');
  $('#qty_cart').text(qty_cart); // maj du qty du cart lors du clic
  $('#cart_shoes12').show();
});
// BOUTON MAJ ----------------------------------------------------------
  $('#btn_update').click(function(){
  // RAZ du message d'alerte du panier
    $('#update_message').text('');
  // MAJ  de toutes les variables quantité + mega somme
  qty_shoes1 = $('#qty_shoes1').val(); // on recupere la qty lors du click
  qty_shoes2 = $('#qty_shoes2').val();
  qty_shoes3 = $('#qty_shoes3').val();
  qty_shoes4 = $('#qty_shoes4').val();
  qty_shoes5 = $('#qty_shoes5').val();
  qty_shoes6 = $('#qty_shoes6').val();
  qty_shoes7 = $('#qty_shoes7').val();
  qty_shoes8 = $('#qty_shoes8').val();
  qty_shoes9 = $('#qty_shoes9').val();
  qty_shoes10 = $('#qty_shoes10').val();
  qty_shoes11 = $('#qty_shoes11').val();
  qty_shoes12 = $('#qty_shoes12').val();
  total_all = (qty_shoes1*price_shoes1) + (qty_shoes2*price_shoes2) + (qty_shoes3*price_shoes3) + (qty_shoes4*price_shoes4)+ (qty_shoes5*price_shoes5)+ (qty_shoes6*price_shoes6)+ (qty_shoes7*price_shoes7)+ (qty_shoes8*price_shoes8)+ (qty_shoes9*price_shoes9)+ (qty_shoes10*price_shoes10)+ (qty_shoes11*price_shoes11)+ (qty_shoes12*price_shoes12); // fonction provisoire
  qty_cart = +qty_shoes1 + +qty_shoes2 + +qty_shoes3 + +qty_shoes4 + +qty_shoes5 + +qty_shoes6 + +qty_shoes7 + +qty_shoes8 + +qty_shoes9 + +qty_shoes10 + +qty_shoes11 + +qty_shoes12;
  // MAJ de tous les totaux shoes + mega somme
  $('#total_shoes1').text((qty_shoes1 * price_shoes1).toFixed(2)+'€'); // on affiche le prix lors du clic
  $('#total_shoes2').text((qty_shoes2 * price_shoes2).toFixed(2)+'€');
  $('#total_shoes3').text((qty_shoes3 * price_shoes3).toFixed(2)+'€');
  $('#total_shoes4').text((qty_shoes4 * price_shoes4).toFixed(2)+'€');
  $('#total_shoes5').text((qty_shoes5 * price_shoes5).toFixed(2)+'€');
  $('#total_shoes6').text((qty_shoes6 * price_shoes6).toFixed(2)+'€');
  $('#total_shoes7').text((qty_shoes7 * price_shoes7).toFixed(2)+'€');
  $('#total_shoes8').text((qty_shoes8 * price_shoes8).toFixed(2)+'€');
  $('#total_shoes9').text((qty_shoes9 * price_shoes9).toFixed(2)+'€');
  $('#total_shoes10').text((qty_shoes10 * price_shoes10).toFixed(2)+'€');
  $('#total_shoes11').text((qty_shoes11 * price_shoes11).toFixed(2)+'€');
  $('#total_shoes12').text((qty_shoes12 * price_shoes12).toFixed(2)+'€');
  $('#total_all').text(total_all.toFixed(2)+'€'); // maj lors du clic du total
  $('#qty_cart').text(qty_cart); // maj du qty du cart lors du clic
  }); // fin de la fonction click

  // BOUTON POURSUIVRE ACHAT ------------------------------------------------------
  $('#btn_continue').click(function(){
    // Pour shoes 1
    if (qty_shoes1 == 0){
      $('#cart_shoes1').hide(); // la ligne du tablea disparait si qty == 0
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
    // Pour shoes 4
    if (qty_shoes4 == 0){
      $('#cart_shoes4').hide();
    } else {
      $('#cart_shoes4').show();
    }
    // Pour shoes 5
    if (qty_shoes5 == 0){
      $('#cart_shoes5').hide();
    } else {
      $('#cart_shoes5').show();
    }
    // Pour shoes 6
    if (qty_shoes6 == 0){
      $('#cart_shoes6').hide();
    } else {
      $('#cart_shoes6').show();
    }
    // Pour shoes 7
    if (qty_shoes7 == 0){
      $('#cart_shoes7').hide();
    } else {
      $('#cart_shoes7').show();
    }
    // Pour shoes 8
    if (qty_shoes8 == 0){
      $('#cart_shoes8').hide();
    } else {
      $('#cart_shoes8').show();
    }
    // Pour shoes 9
    if (qty_shoes9 == 0){
      $('#cart_shoes9').hide();
    } else {
      $('#cart_shoes9').show();
    }
    // Pour shoes 10
    if (qty_shoes10 == 0){
      $('#cart_shoes10').hide();
    } else {
      $('#cart_shoes10').show();
    }
    // Pour shoes 11
    if (qty_shoes11 == 0){
      $('#cart_shoes11').hide();
    } else {
      $('#cart_shoes11').show();
    }
    // Pour shoes 12
    if (qty_shoes12 == 0){
      $('#cart_shoes12').hide();
    } else {
      $('#cart_shoes12').show();
    }

  }); // fin de la fonction click

  // UPDATE MESSAGE -------------------------------------- //
  $('.qty').click(function(){
    $('#update_message').text('Attention le panier n\'est pas à jour'); // indication de penser à mettre à jour le panier
  });

  // BOUTONS TRASH ---------------------------------------- //
  $('#trash_shoes1').click(function(){
    $('#qty_shoes1').val(0);
    $('#update_message').text('Attention le panier n\'est pas à jour'); // indication de penser à mettre à jour le panier
  });
  $('#trash_shoes2').click(function(){
    $('#qty_shoes2').val(0);
    $('#update_message').text('Attention le panier n\'est pas à jour');
  });
  $('#trash_shoes3').click(function(){
    $('#qty_shoes3').val(0);
    $('#update_message').text('Attention le panier n\'est pas à jour');
  });
  $('#trash_shoes4').click(function(){
    $('#qty_shoes4').val(0);
    $('#update_message').text('Attention le panier n\'est pas à jour');
  });
  $('#trash_shoes5').click(function(){
    $('#qty_shoes5').val(0);
    $('#update_message').text('Attention le panier n\'est pas à jour');
  });
  $('#trash_shoes6').click(function(){
    $('#qty_shoes6').val(0);
    $('#update_message').text('Attention le panier n\'est pas à jour');
  });
  $('#trash_shoes7').click(function(){
    $('#qty_shoes7').val(0);
    $('#update_message').text('Attention le panier n\'est pas à jour');
  });
  $('#trash_shoes8').click(function(){
    $('#qty_shoes8').val(0);
    $('#update_message').text('Attention le panier n\'est pas à jour');
  });
  $('#trash_shoes9').click(function(){
    $('#qty_shoes9').val(0);
    $('#update_message').text('Attention le panier n\'est pas à jour');
  });
  $('#trash_shoes10').click(function(){
    $('#qty_shoes10').val(0);
    $('#update_message').text('Attention le panier n\'est pas à jour');
  });
  $('#trash_shoes11').click(function(){
    $('#qty_shoes11').val(0);
    $('#update_message').text('Attention le panier n\'est pas à jour');
  });
  $('#trash_shoes12').click(function(){
    $('#qty_shoes12').val(0);
    $('#update_message').text('Attention le panier n\'est pas à jour');
  });

  function addResponsiveClass() {
    if($(window).height() <=1024) {
      $('.table').addClass('table-responsive');
    } else {
      $('.table').removeClass('table-responsive');
    }
  }
  addResponsiveClass;
  $(window).resize(function() {
    addResponsiveClass;
  })
}); // FIN DE LA FONCTION DOCUMENT READY
