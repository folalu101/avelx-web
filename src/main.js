

$(document).ready(function(){

    $('#subscribe').on('keyup', function() {
        let input = $(this);
        if(input.val().length === 0) {
            input.addClass('empty');
        } else {
            input.removeClass('empty');
        }
    });
});