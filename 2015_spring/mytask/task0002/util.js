
function log(o) {
	return console.log(o);
}

// 判断arr是否为一个数组，返回一个bool值
function isArray(arr) {
    return typeof arr === "object" && Object.prototype.toString.call(arr) === "[object Array]" ;
}

// 判断fn是否为一个函数，返回一个bool值
function isFunction(fn) {
    return typeof fn == "function" ;
}


