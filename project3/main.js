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
var thiscolor = '';
function f3(x, y) {
    if (x > y) {
        var thiscolor = 'yellow';
        return 'bananas';
    } else if (x < y) {
        var thiscolor = 'brown';
        return 'porcupine';
    } else if (x === y && x < 0) {
        var thiscolor = 'red';
        return 'red apples';
    } else {
        var thiscolor = 'red';
        return 'green apples';
    }
}
p3 = f3(3, 2);
var el = document.getElementById('p3');
el.textContent = p3;