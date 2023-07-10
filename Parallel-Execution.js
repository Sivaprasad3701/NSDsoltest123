const async = require('async');

const task1 = (callback) => {
  setTimeout(() => {
    console.log('Task 1 executed');
    callback(null, 'Result 1');
  }, 2000);
};

const task2 = (callback) => {
  setTimeout(() => {
    console.log('Task 2 executed');
    callback(null, 'Result 2');
  }, 1000);
};

async.parallel([task1, task2], (err, results) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log('Results:', results);
});
