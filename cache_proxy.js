const getFib = (number) => {
	if(number <= 2) {
		return 1;
	}else{
		return getFib(number - 1) + getFib(number - 2);
	}	
};

const mult = (...args) => args.reduce((a, b) => a * b);

const createCacheProxy = (fn, cache = new Map()) => {
	return new Proxy(fn, {
		apply(target, context, args) {
			const argsProp = args.join(' ');
			if(cache.has(argsProp)) {
				console.log(`${argsProp} used cahce`);
				return cache.get(argsProp);
			}
			const result = fn(...args);
			cache.set(argsProp, result);
			return result;
		}
	})
};


const fibProxy = createCacheProxy(getFib);
const multProxy = createCacheProxy(mult);
fibProxy(40);
fibProxy(40);
multProxy(2, 3, 4);
multProxy(2, 3, 4);