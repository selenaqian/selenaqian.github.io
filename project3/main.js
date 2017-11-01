function f1() {
    var number = parseFloat(document.getElementById("num1").value);
    var p1 = 5*number - 3*number*number +13;
    var el = document.getElementById('p1').innerHTML = 'f(' + number.toString() + ') = ' + p1.toString();
}

function f2() {
    var first = document.getElementById("name1");
    var middle = document.getElementById("name2");
    var last = document.getElementById("name3");
    var p2 = first + " " + middle + " " + last;
    var el = document.getElementById('p2').innerHTML = "Hello, " + p2 + "!";
}

function f3() {
    var p3 = '', color1 = '';
    var x = parseFloat(document.getElementById("numx").value);
    var y = parseFloat(document.getElementById("numy").value);
    if (x > y) {
        color1 = 'yellow';
        p3 = 'bananas';
    } else if (x < y) {
        color1 = 'brown';
        p3 = 'porcupine';
    } else if (x === y && x < 0) {
        color1 = 'red';
        p3 = 'red apples';
    } else {
        color1 = 'red';
        p3 = 'green apples';
    }   document.getElementById('p3').innerHTML = p3;
    document.getElementById('p3').style.color = color1;
}

function f4(x) {
    var p4 = '', color2 = '', output4 = '';
    p4 = document.getElementById("phonenum").value;
    p4 = p4.replace(/\D/g,'');
    var firstchar = p4.substring(0,1);
    if (p4.length === 10) {
        color2 = 'green';
        output4 = 'valid';
    } else if (p4.length === 11 && firstchar === "1") {
        color2 = 'green';
        output4 = 'valid';
    } else {
        color2 = 'red';
        output4 'invalid';
    }
    document.getElementById('p4').innerHTML = output4;
    document.getElementById('p4').style.color = color2;
}

var p5 = '';
function f5(x) {
    var third = x[2];
    return third;
}
p5 = f5(['apples', 'bananas', 'oranges', 'pears', 'peaches', 'pineapple']);
var el = document.getElementById('p5');
el.textContent = p5;

function colorchange(event) {
    
}