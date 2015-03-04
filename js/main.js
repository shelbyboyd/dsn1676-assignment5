var $form = $('form');
var $input = $('#items');
var $theList = $('.list');
var $li = $('<li>');

$form.on('submit', function (eventObject) {
    eventObject.preventDefault();
    
    
    var $li = $('<li>');
    $li.html($input.val());
    
    var $inputRemove = $('<button class="remove x-button">x</button>');
    
    $inputRemove.on('click', function () {
        $li.remove('li');
    });
    
    $li.click(function(){
        $(this).addClass('done');
    });
    
    $li.append($inputRemove);
    $theList.prepend($li);
    $input.val('');
});


