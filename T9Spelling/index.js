var fs = require('fs');

var t9Spelling = function(err, data) {
  if (err) {
    return console.log(err);
  }
  data = data.split('\n');
  while (data.indexOf('') !== -1) {
    data.splice(data.indexOf(''), 1);
  }
  var length = Number(data[0]);
  var regex = [
    new RegExp(' '),
    new RegExp('a', 'i'),
    new RegExp('b', 'i'),
    new RegExp('c', 'i'),
    new RegExp('d', 'i'),
    new RegExp('e', 'i'),
    new RegExp('f', 'i'),
    new RegExp('g', 'i'),
    new RegExp('h', 'i'),
    new RegExp('i', 'i'),
    new RegExp('j', 'i'),
    new RegExp('k', 'i'),
    new RegExp('l', 'i'),
    new RegExp('m', 'i'),
    new RegExp('n', 'i'),
    new RegExp('o', 'i'),
    new RegExp('p', 'i'),
    new RegExp('q', 'i'),
    new RegExp('r', 'i'),
    new RegExp('s', 'i'),
    new RegExp('t', 'i'),
    new RegExp('u', 'i'),
    new RegExp('v', 'i'),
    new RegExp('w', 'i'),
    new RegExp('x', 'i'),
    new RegExp('y', 'i'),
    new RegExp('z', 'i')
  ];
  var solutions = data.map(function(value) {
    value = value.split('').map(function(character) {
      switch (true) {
        case regex[0].test(character):
          character = '0';
          break;
        case regex[1].test(character):
          character = '2';
          break;
        case regex[2].test(character):
          character = '22';
          break;
        case regex[3].test(character):
          character = '222';
          break;
        case regex[4].test(character):
          character = '3';
          break;
        case regex[5].test(character):
          character = '33';
          break;
        case regex[6].test(character):
          character = '333';
          break;
        case regex[7].test(character):
          character = '4';
          break;
        case regex[8].test(character):
          character = '44';
          break;
        case regex[9].test(character):
          character = '444';
          break;
        case regex[10].test(character):
          character = '5';
          break;
        case regex[11].test(character):
          character = '55';
          break;
        case regex[12].test(character):
          character = '555';
          break;
        case regex[13].test(character):
          character = '6';
          break;
        case regex[14].test(character):
          character = '66';
          break;
        case regex[15].test(character):
          character = '666';
          break;
        case regex[16].test(character):
          character = '7';
          break;
        case regex[17].test(character):
          character = '77';
          break;
        case regex[18].test(character):
          character = '777';
          break;
        case regex[19].test(character):
          character = '7777';
          break;
        case regex[20].test(character):
          character = '8';
          break;
        case regex[21].test(character):
          character = '88';
          break;
        case regex[22].test(character):
          character = '888';
          break;
        case regex[23].test(character):
          character = '9';
          break;
        case regex[24].test(character):
          character = '99';
          break;
        case regex[25].test(character):
          character = '999';
          break;
        case regex[26].test(character):
          character = '9999';
          break;
        default:
          character = '';
          break;
      }
      return character;
    });
    while (value.indexOf('') !== -1) {
      value.splice(value.indexOf(''), 1);
    }
    return value;
  });
  for (var a = 0; a < solutions.length; a++) {
    if (solutions[a].length === 0) {
      solutions.splice(a, 1);
      a--;
    }
  }

  for (var i = 0, l = solutions.length; i < l; i++) {
    for (var j = 0, n = solutions[i].length; j < n - 1; j++) {
      if (solutions[i][j][solutions[i][j].length - 1] === solutions[i][j + 1][0]) {
        solutions[i][j] = solutions[i][j] + ' ';
      }
    }
  }

  for (var b = 0; b < solutions.length; b++) {
    solutions[b] = 'Case #' + (b + 1) + ': ' + solutions[b].join('');
  }

  solutions = solutions.join('\n');

  fs.writeFile('C-large-practice.out.txt', solutions, function(err) {
    if (err) return console.log(err);
    console.log('Output successfully written to file');
  });

};

fs.readFile('./C-large-practice.in', 'utf8', t9Spelling);
