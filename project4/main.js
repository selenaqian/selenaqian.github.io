$(function () {
    $('.reset').on('click', function(e) {
       location.reload(); 
    });
});
$(function () {
    $('#b1').on('click', function(e) {
        var $num1 = parseFloat($('#num1').val());
        var $ans1 = 5*$num1 - 3*$num1*$num1 + 13;
        $('#p1').append($ans1);
        console.log($ans1);
    });
});