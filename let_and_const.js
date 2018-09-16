// {
// 	let a = 10;
// 	var b = 1;
// }

// a // a is not defined
// b

// var a = [];
// for(var i=0; i<10; i++){
// 	a[i] = function(){
// 		console.log(i);
// 	};
// }
// a[6](); //10

// var a = [];
// for(let i=0; i<10; i++){
// 	a[i] = function(){
// 		console.log(i);
// 	};
// }
// a[6](); //6

for(let i=0; i<3; i++){
	//i is in different block 
	let i='abc';
	// console.log(i);//abc
}

// var tmp = 123;
// if(true) {
// 	tmp = 'abc'; // ReferenceError
// 	let tmp;
// }

if(true) {
	//TDZ temporal dead zone
	// tmp = 'abc';
	// console.log(tmp); // ReferenceError

	let tmp;
	//console.log(tmp); //Undefined

	tmp = 123;
	//console.log(tmp); //123
}

// function bar(x=y, y=2){
// 	return [x, y];
// }

// bar(); // y is not defined

function bar(x = 2, y=x){
	return [x, y];
}

//console.log(bar()); // [2,2]

//var x=x // undefined

//let x = x //ReferenceError


var tmp = new Date();

// function f(){
// 	console.log(tmp); // inner tmp. undefined
// 	if(false){
// 		var tmp = 'hello world';
// 	}
// }
//f()//undefined

var s= 'hello';
for(var i=0; i<s.length; i++){
	//console.log(s[i]);
}
//console.log(i); //variable leak 5

function f(){
	console.log('I am outside');
}

// (function(){
// 	if(false) {
// 		function f() {
// 			console.log('I am inside');
// 		}
// 	}
// 	f()
// }());  // f is undefined


const foo = {};
foo.prop = 123;
//console.log(foo.prop)//123
//foo = {} //Assignment to constant variable Error

const a = [];
a.push('hello');
//a.length = 0;
//console.log(a)

var constantFreeze = (obj) => {
	Object.freeze(obj);
	Object.keys(obj).forEach((key, i) => {
		if(typeof obj[key] === 'object') {
			constantFreeze(obj[key])
		}
	});
};

var test = {
	d: {}
}
constantFreeze(test)

test.c = 'dd';
test.d.dd = 'ddd';
//console.log(test) //remain the same

// var aa = 1;
// console.log(global.aa)

// (typeof window !== 'undefined'
//    ? window
//    : (typeof process === 'object' &&
//       typeof require === 'function' &&
//       typeof global === 'object')
//      ? global
//      : this);






