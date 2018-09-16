function* fibs(){
	let a=0;
	let b=1;
	while(true){
		yield a;
		[a, b] = [b, a+b]
	}
}

let [first, second, third, fourth, fifth, sixth] = fibs();
//console.log(first)//0

let [foo = true] = []
//console.log(foo) // true
let [x, y='b'] = ['a'];
//console.log(x +' '+y)//a b

let [q, w='b'] = ['a', undefined];
//console.log(q + ' ' + w) //a b

let [e = 1] = [undefined];
//console.log(e) //1

let [r = 1] = [null];
//console.log(r)//null

function f(){
	console.log('aaa');
}
let [t = f()] = [1] //function won't run because it can get value from 1
//console.log(t); //1


let { fooo, barr} = {fooo: 'aaa', bar: 'bbb'};

//console.log(fooo);//aaa
//console.log(barr);//undefined

let { foo1: baz } = { foo1: 'aaa', bar1: 'bbb' };
//console.log(baz) //aaa

let obj = { first: 'hello', last: 'world'};
let { first: f1, last: l1} = obj;

//console.log(f1 + ' ' + l1); //hello world

let obj1 = {};
let arr = [];
({foo: obj1.prop, bar: arr[0]} = {foo: 123, bar: true});

//console.log(obj1) // {prop: 123}
//console.log(arr) // [true]

let x1;
({x1} = {x1:1}); //attention ()
//console.log(x1); //1

let arr1 = [1,2,3];
let {0: first1, [arr1.length-1]: last1 } = arr1;
//console.log(first1 + ' ' + last1 ) // 1 3

let {length: len} = 'hello'; //length attribute
//console.log(len)//5

let res = [[1, 2], [3, 4]].map(([a, b]) => a+b)
//console.log(res) // [3, 7]

// function move({x=0, y=0} = {}) {
// 	return [x, y];
// }

function log(...x) {
	console.log(...x)
}

// log(move({x:3, y:8}))
// log(move({x: 3}))
// log(move())

function move({x, y} = {x:0, y:0}) {
	return [x, y];
}

// log(move({x:3, y:8}));
// log(move({x:3}));
// log(move({}));//[undefined, undefined]
// log(move());//[0,0]

// log([1, undefined, 3].map((x = 'yes') => x))

// [1, undefined, 3].map((x = 'yes') => {
// 	console.log(x);
// })
//1 yes 3

let xx = 1;
let yy = 2;

[xx, yy] = [yy, xx]
//log(xx, yy) //change places 2,1


const map = new Map();
map.set('first', 'hello');
map.set('second', 'world');

for(let [key, value] of map) {
	console.log(key + ' is ' + value)
}


