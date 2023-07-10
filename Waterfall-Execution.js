const async = require('async');

const task1 = (callback) => {
  setTimeout(() => {
    console.log('Task 1 executed');
    callback(null, 'Result 1', 'Data 1');
  }, 2000);
};

const task2 = (arg1, arg2, callback) => {
  setTimeout(() => {
    console.log('Task 2 executed');
    console.log('Received arguments:', arg1, arg2);
    callback(null, 'Result 2', 'Data 2');
  }, 1000);
};

async.waterfall([task1, task2], (err, result, data) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log('Final result:', result);
  console.log('Final data:', data);
});
