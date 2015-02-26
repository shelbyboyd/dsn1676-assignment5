var $form = $('form');
var $input = $('#list');


$form.on('submit', function(eventObject) {

    var $theH2 = $('<h2>');
    $theH2.html($input.val());
    $input.prepend($theH2);
    $input.val('');
});