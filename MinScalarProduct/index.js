var fs = require('fs');

var minScalar = function(err, data) {
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
    cases.push([Number(data[i]), data[i + 1].split(' ').map(convertNum), data[i + 2].split(' ').map(convertNum)]);
  }
  var solutions = [],
    sums = [], temp =[];

  for (var a = 0, b = cases.length; a < b; a++) {
    for (var c = 0, d = cases[a][0]; c < d; c++) {
      for (var e = 0; e < d; e++) {
        temp.push(cases[a][1][c] * cases[a][2][e]);
      }
    }
    temp.sort();
    sums.push(temp);
    temp = [];
  }

  console.log(sums);


  // console.log(cases);
  // console.log(solutions);

  // fs.writeFile('output.txt', solutions, function(err) {
  //   if (err) return console.log(err);
  //   console.log('Output successfully written to file');
  // });
};

fs.readFile('./input.txt', 'utf8', minScalar);
