function foo() {
	setTimeout(() => {
		console.log('id: ' + this.id);
	}, 200);
}

var id = 21;
//Will show 42 in the browser
foo.call({id: 42});

function bar() {
	setTimeout(function(){
		console.log('id: ' + this.id)
	}, 200);
}
//Will show 21
bar.call({id: 42});

//This is different

function Timer() {
	this.s1 = 0;
	this.s2 = 0;
	setInterval(() => this.s1++, 1000);
	setInterval(function() {
		this.s2++;
	}, 1000);
}

var timer = new Timer();

setTimeout(() => console.log("s1: " + timer.s1), 3100)// 3
setTimeout(() => console.log("s2: " + timer.s2), 3100)// 0

//tail recursion
// function factorial(n) {
// 	if(n === 1) return 1;
// 	return n* factorial(n-1);
// }
// console.log(factorial(5)) //120
function factorial(n, total) {
	if(n === 1) return total;
	return factorial(n-1, n * total)
}
// console.log(factorial(5, 1))

// function Fibonacci(n) {
// 	if(n <= 1) {
// 		return 1;
// 	}
// 	return Fibonacci(n-1) + Fibonacci(n-2)
// }

// console.log(Fibonacci(10))
// console.log(Fibonacci(100))

//very fast by using tail recursion
function Fibonacci2 (n , ac1 = 1 , ac2 = 1) {
  if( n <= 1 ) {return ac2};

  return Fibonacci2 (n - 1, ac2, ac1 + ac2);
}

console.log(Fibonacci2(100)) // 573147844013817200000
console.log(Fibonacci2(1000))