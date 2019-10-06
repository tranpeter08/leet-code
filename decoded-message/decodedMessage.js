function decodedMessage(message) {
  let str = '';
  let stack = [];
  let num = '';
  let letters = '';

  for (let char of message) {
    if (/[0-9]/.test(char)) {
      if (letters) {
        stack.push(letters);
        letters = '';
      }
      num += char;
    }

    if (char === '[') {
      stack.push(num, '[');
      num = '';
    }

    if (/[a-z]/i.test(char)) {
      letters += char;
    }

    if (char === ']') {
      stack.pop();
      let numb = stack.pop();
      let prevChar = stack.pop();

      if (prevChar && /[a-z]/i.test(prevChar)) {
        letters = prevChar + letters.repeat(numb);
      } else {
        str = str + letters.repeat(numb);
        letters = '';
      }
    }
  }

  return str;
}

module.exports = decodedMessage;