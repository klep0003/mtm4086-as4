var key;

$.extend({
  password: function (length, special) {
    var iteration = 0;
    var password = "";
    var randomNumber;
    if(special == undefined){
        var special = false;
    }
    while(iteration < length){
        randomNumber = (Math.floor((Math.random() * 100)) % 94) + 33;
        if(!special){
            if ((randomNumber >=33) && (randomNumber <=47)) { continue; }
            if ((randomNumber >=58) && (randomNumber <=64)) { continue; }
            if ((randomNumber >=91) && (randomNumber <=96)) { continue; }
            if ((randomNumber >=123) && (randomNumber <=126)) { continue; }
        }
        iteration++;
        password += String.fromCharCode(randomNumber);
    }
    return password;
  }
});

$('.key-create').click(function(e){
 
    key = $.password(10);
        
    $('.created-key').val(key)
    
    e.preventDefault();
    
    $('.key-create').hide()
    $('.creation-continue').show();
});

$('.creation-continue').on('click', function() {
    $('.overlay.key-output').hide();
});



$('.input-key').on('focusout', function(e) {

    $('.controller-continue').show();
})

$('.controller-continue').on('click', function() {
    $('.overlay.key-input').hide();
});