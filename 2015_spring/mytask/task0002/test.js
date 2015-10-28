/* Standard Type */
var a;                                               //undefined
var b = document.getElementById("no_exist_element"); //null
var c = true;                                        //Boolean
var d = 1;                                           //Number
var e = "str";                                       //String
var f = {name : "Tom"};                              //Object

/* Object Type */
var g = new Boolean(true);          //Boolean Object
var h = new Number(1);              //Number Object
var i = new String("str");          //String Object
var j = new Object({name : "Tom"}); //Object Object
var k = new Array([1, 2, 3, 4]);    //Array Object
var l = new Date();                 //Date Object
var m = new Error();                //Error Object
var n = new Function();             //Function Object
var o = new RegExp("\\d");          //RegEXP Object
/* Self-Defined Object Type */
function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.move = function(x, y) {
  this.x += x;
  this.y += y;
}

var p = new Point(1, 2);



// log(isArray(a) + " undefined");
// log(isArray(b) + " null");
// log(isArray(c) + " Boolean");
// log(isArray(d) + " Number");
// log(isArray(e) + " String");
// log(isArray(f) + " Object");
// log(isArray(k) + " Array");
// log(isArray(l) + " Date");
// log(isArray(m) + " Error");
// log(isArray(n) + " Function");
// log(isArray(o) + " RegEXP");
// log(isArray(p) + " Constructor obj");

log(isFunction(a) + " undefined");
log(isFunction(b) + " null");
log(isFunction(c) + " Boolean");
log(isFunction(d) + " Number");
log(isFunction(e) + " String");
log(isFunction(f) + " Object");
log(isFunction(k) + " Array");
log(isFunction(l) + " Date");
log(isFunction(m) + " Error");
log(isFunction(n) + " Function");
log(isFunction(o) + " RegEXP");
log(isFunction(p) + " Constructor obj");