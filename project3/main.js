var p1 = 0;
function f1(x) {
    var output1 = 5*x - 3*x*x +13;
    return output1;
}
p1 = f1(3);
var el = document.getElementById('p1');
el.textContent = 'f(x) = ' + p1;

var p2 = 0;
function f2(x, y, z) {
    var output2 = x + " " + y + " " + z;
    return output2;
}
p2 = f2('John', 'Jacob', 'Smith');
var el = document.getElementById('p2');
el.textContent = 'Hello, ' + p2 + '!';

var p3 = '';
var color1 = '';
function f3(x, y) {
    if (x > y) {
        color1 = 'yellow';
        return 'bananas';
    } else if (x < y) {
        color1 = 'brown';
        return 'porcupine';
    } else if (x === y && x < 0) {
        color1 = 'red';
        return 'red apples';
    } else {
        color1 = 'red';
        return 'green apples';
    }
}
p3 = f3(3, 2);
var el = document.getElementById('p3');
el.textContent = p3;

var p4 = '';
var color2 = '';
function f4(x) {
    x = x.replace(/\D/g,'');
    var firstchar = p4.substring(0,1);
    if (x.length === 10) {
        color2 = 'green';
        return 'valid';
    } else if (x.length === 11 && firstchar === "1") {
        color2 = 'green';
        return 'valid';
    } else {
        color2 = 'red';
        return 'invalid';
    }
}
p4 = f4('(123)-456-7890');
var el = document.getElementById('p4');
el.textContent = p4;

var p5 = '';
function f5(x) {
    var third = x[2];
    return third;
}
p5 = f5(['apples', 'bananas', 'oranges', 'pears', 'peaches', 'pineapple']);
var el = document.getElementById('p5');
el.textContent = p5;