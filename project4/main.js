$(function () {
    $('.reset').on('click', function(e) {
        location.reload();
    });
});
$(function () {
    $('#b1').on('click', function(e) {
        var $num1 = parseFloat($('#num1').val()), $ans1 = 5*$num1 - 3*$num1*$num1 + 13;
        $('#p1').append($ans1);
    });
});
$(function () {
    $('#b2').on('click', function(e) {
        var $name1 = $('#name1').val(), $name2 = $('#name2').val(), $name3 = $('#name3').val(), $ans2 = 'Hello, ' + $name1 + ' ' + $name2 + ' ' + $name3 + '!';
        $('#p2').append($ans2);
    });
});
$(function () {
   $('#b3').on('click', function(e) {
       var $numx = parseFloat($('#numx').val()), $numy = parseFloat($('#numy').val());
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
$(function () {
   $('#b4').on('click', function(e) {
       var $phonenum = $('#phonenum').val();
       $phonenum = $phonenum.replace(/\D/g,'');
       var $firstchar = $phonenum.substring(0,1);
    if ($phonenum.length === 10) {
        $('#p4').append('valid').css('color', 'green');
    } else if ($phonenum.length === 11 && $firstchar === "1") {
        $('#p4').append('valid').css('color', 'green');
    } else {
        $('#p4').append('invalid').css('color', 'red');
    } 
   });
});
$(function () {
    $('#b5').on('click', function(e) {
        var $list = $('#list').val();
        $list = $list.split(', ');
        $('#p5').append($list[2]);
    });
});