//get
var person = {
	name: "zhangsan"
};

var proxy = new Proxy(person, {
	get: function(target, property) {
		if(property in target) {
			return target[property];
		}else{
			throw new ReferenceError("Property \""+ property + "\" does not exist.");
		}
	}
});

// proxy.name
// proxy.age

let proto = new Proxy({}, {
	get(target, propertyKey, receiver) {
		console.log('GET ' + propertyKey);
		return target[propertyKey];
	}
});

// inherit get function
let obj = Object.create(proto);
//obj.foo

function createArray(...elements) {
	let handler = {
		get(arget, propKey, receiver) {
			let index = Number(propKey);
			if(index < 0){
				propKey = String(target.length + index);
			}
			return Reflect.get(target, propKey, receiver);
		}
	};

	let target = [];
	target.push(...elements);
	return new Proxy(target, handler);
}

let arr = createArray('a', 'b', 'c');
//Will show the last value
//console.log(arr[-1])

var pipe = (function () {
  return function (value) {
    var funcStack = [];
    var oproxy = new Proxy({} , {
     get : function (pipeObject, fnName) {
        if (fnName === 'get') {
          return funcStack.reduce(
          		(val, fn) => fn(val)
          		,value
          	);
        }
        //from global object in the browser
        funcStack.push(window[fnName]);
       return oproxy;
    }
    });
    return oproxy;
  }
}());

var double = n => n * 2;
var pow    = n => n * n;
var reverseInt = n => n.toString().split("").reverse().join("") | 0;
//chain functions
var res = pipe(3).double.pow.reverseInt.get; // 63
//show in broswer
//console.log(res)


