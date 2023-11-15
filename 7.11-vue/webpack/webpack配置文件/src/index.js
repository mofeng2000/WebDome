//common.js的模块化开发
const {add,mul}=require('./math.js')
console.log(add(20,30))
console.log(mul(20,30))
//ES6导入
import {name ,age ,height} from "./info";

console.log(name);
console.log(age);
console.log(height);