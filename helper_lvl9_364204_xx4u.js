false * false

let result = performOperation(getRandomNumber(), getRandomNumber());

let result = performOperation(getRandomNumber(), getRandomNumber());
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
