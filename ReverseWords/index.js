var fs = require('fs');

var reverseMe = function(err, data) {
  if (err) {
    return console.log(err);
  }
  data = data.split('\n');
  while (data.indexOf('') !== -1) {
    data.splice(data.indexOf(''), 1);
  }
  var length = Number(data[0]);
  for (var i = 1; i <= length; i++) {
    data[i] = 'Case #'+i+': '+data[i].split(' ').reverse().join(' ');
  }
  data.splice(0, 1);
  data = data.join('\n');
  fs.writeFile('output-large.txt', data, function(err) {
    if (err) return console.log(err);
    console.log('Output successfully written to file');
  });
};


fs.readFile('./B-large-practice.in', 'utf8', reverseMe);
