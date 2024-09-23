import abc, { sum, PI as PI_Import } from './helpers.js';

const PI = 100;

console.log('Hàm sum được chạy trong file math.js');
console.log(sum(60, 40));
console.log(PI_Import);

console.log('value: ', abc);
