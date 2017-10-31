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