//Template literals

function format(strings, ...values){
	console.log(arguments)
	console.log("values: " + values)
	console.log("strings: " + strings)
	return strings.reduce((acc, cur, idx) => {
		console.log("idx: " + idx)
		console.log("acc1: " + acc)
		if(idx > 0){
			const prev = values[idx-1]
			console.log("prev: " + prev)
			if(typeof prev === 'number'){
				acc+=`$${prev.toFixed(2)}`
			}else {
				acc+=prev
			}
		}
		console.log("acc: " + acc)
		console.log("cur: " + cur)
		return acc + cur
	}, '')
}

const item = 'orange'
const price = 3.6554
const store = 'coles'
const text = format`the ${item}'s price is ${price} in ${store} yes it is `
console.log(text)