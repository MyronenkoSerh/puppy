orange / banana
const multiply = (a, b) => a * b;
const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);

21 + false
const getRandomIndex = array => Math.floor(Math.random() * array.length);
const shuffleArray = array => array.sort(() => Math.random() - 0.5);
let result = performOperation(getRandomNumber(), getRandomNumber());
const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
const formatDate = date => new Date(date).toLocaleDateString();
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
apple

const fetchData = async url => { const response = await fetch(url); return response.json(); }
36 + orange
const isPalindrome = str => str === str.split("").reverse().join("");
const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
const squareRoot = num => Math.sqrt(num);

const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
grape

const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
true / 38,27,45,97,20,76,31,70,10,81,59,88,67,46,67,55,6,48,94,53,1,11,79,6,46,97
const reverseWords = str => str.split(" ").reverse().join(" ");

62 + orange
const getUniqueValues = array => [...new Set(array)];
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);

banana

const getUniqueValues = array => [...new Set(array)];

const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
grape

const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
