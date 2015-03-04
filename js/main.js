var $form = $('form');
var $input = $('#items');
var $theList = $('.list');
var $theLi = $('<li>');

$form.on('submit', function (eventObject) {
    eventObject.preventDefault();
    
    
    var $theLi = $('<li>');
    $theLi.html($input.val());
    
    var $inputRemove = $('<button class="remove x-button">X</button>');
    
    $inputRemove.on('click', function () {
        $theLi.remove('theLi');
    });
    
    $theLi.click(function(){
        $(this).addClass('done');
    });
    
    $theLi.append($inputRemove);
    $theList.prepend($theLi);
    $input.val('');
});


