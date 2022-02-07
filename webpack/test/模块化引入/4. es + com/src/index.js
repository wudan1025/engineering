// es module 引入
import { title } from './title.js';

console.log(title);

setTimeout(() => {
  console.log(title);
}, 5000);


import name, { age } from "./title";
console.log(name);
console.log(age);