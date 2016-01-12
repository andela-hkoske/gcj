var fs = require('fs');

var creditMe = function(err, data) {
  if (err) {
    return console.log(err);
  }
  data = data.split('\n');
  while (data.indexOf('') !== -1) {
    data.splice(data.indexOf(''), 1);
  }
  var length = Number(data[0]);
  var cases = [];
  var convertNum = function(value) {
    return Number(value);
  };
  for (var i = 1, l = data.length; i < l; i = i + 3) {
    cases.push([Number(data[i]), Number(data[i + 1]), data[i + 2].split(' ').map(convertNum)]);
  }
  var solutions = cases.map(function(value) {
    var sum = 0;
    for (var j = 0, n = value[1]; j < n; j++) {
      for (var k = 0; k < n; k++) {
        if (j !== k) {
          sum = value[2][j] + value[2][k];
          if (sum === value[0]) {
            return [j + 1, k + 1];
          }
        }
      }
    }
  });
  for (var j = 0, n = solutions.length; j < n; j++) {
    solutions[j] = 'Case #' + (j + 1) + ': ' + solutions[j].join(' ');
  }
  solutions = solutions.join('\n');
  fs.writeFile('A-large-practice.out.txt', solutions, function(err) {
    if (err) return console.log(err);
    console.log('Output successfully written to file');
  });
};

fs.readFile('./A-large-practice.in', 'utf8', creditMe);
