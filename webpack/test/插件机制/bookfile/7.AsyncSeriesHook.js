const { AsyncSeriesHook } = require('tapable');
const hook = new AsyncSeriesHook(['name']);
/* console.time('cost');
hook.tapAsync('1', (name, callback) => {
    setTimeout(() => {
        console.log(1);
        callback();
    }, 1000);
});
hook.tapAsync('2', (name, callback) => {
    setTimeout(() => {
        console.log(2);
        callback();
    }, 2000);
});
hook.tapAsync('3', (name, callback) => {
    setTimeout(() => {
        console.log(3);
        callback();
    }, 3000);
});
hook.callAsync('test', (err) => {
    console.log(err);
    console.timeEnd('cost');
}); */

console.time('cost');
hook.tapPromise('1', (name) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(1);
      resolve();
    }, 1000);
  });
});
hook.tapPromise('2', (name) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(2);
      resolve();
    }, 2000);
  });
});
hook.tapPromise('3', (name) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(3);
      resolve();
    }, 3000);
  });
});
hook.promise('test').then(() => {
  console.log('done');
  console.timeEnd('cost');
});
