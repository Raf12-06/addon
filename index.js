const addon = require('./build/Release/addon');

// function jsSum() {
//     let a = 5, b = 9.5879;
//     for (let i = 0; i < 100000000; i++) {
//         a += b;
//     }
//     return a;
// }
//
// console.time('c++');
// console.log(addon.sum());
// console.timeEnd('c++');
//
// console.time('js');
// console.log(jsSum());
// console.timeEnd('js');

console.log(addon.add(4, 5));