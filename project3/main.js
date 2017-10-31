var p1;
p1 = 0;
function f1(x) {
    var output = 5*x - 3*x*x +13;
    return output;
}
p1 = f1(3);
var el = document.getElementById('p1');
el.textContent = 'f(x) = ' + p1;