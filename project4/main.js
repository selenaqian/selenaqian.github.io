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
    });
});
$(function () {
    $('#b2').on('click', function(e) {
        var $name1 = $('#name1').val();
        var $name2 = $('#name2').val();
        var $name3 = $('#name3').val();
        var $ans2 = 'Hello, ' + $name1 + ' ' + $name2 + ' ' + $name3 + '!';
        $('#p2').append($ans2);
    });
});
$(function () {
   $('#b3').on('click', function(e) {
       var $numx = parseFloat($('#numx').val());
       var $numy = parseFloat($('#numy').val());
       if ($numx>$numy) {
           $('#p3').append('bananas').css('color', 'yellow');
       } else if ($numy>$numx) {
           $('#p3').append('porcupine').css('color', 'brown');
       } else if ($numx===$numy && $numx<0) {
           $('#p3').append('red apples').css('color', 'red');
       } else {
           $('#p3').append('green apples').css('color', 'green');
       }
   });
});