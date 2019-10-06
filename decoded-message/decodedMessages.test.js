const decodedMessage = require('./decodedMessage');

describe('decodedMessage()', () => {
  it('decodes a simple message', () => {
    expect(decodedMessage('2[aaa]')).toBe('aaaaaa');
    expect(decodedMessage('5[zc]')).toBe('zczczczczc');
  });

  it('decodeds a nested message', () => {
    expect(decodedMessage('2[a3[c4[d]]]'))
      .toBe('acddddcddddcddddacddddcddddcdddd');

    expect(decodedMessage('2[xx3[z4[l]]]'))
    .toBe('xxzllllzllllzllllxxzllllzllllzllll');
  });

  it('decodes a complex message', () => {
    expect(decodedMessage('2[a3[c]]2[zz4[x]]'))
      .toBe('acccaccczzxxxxzzxxxx');

    expect(decodedMessage('7[a11[c]]2[zz10[x]]'))
    .toBe(
      'acccccccccccacccccccccccacccccccccccacccccccccccacccccccccccaccc' +
      'ccccccccaccccccccccczzxxxxxxxxxxzzxxxxxxxxxx'
    );
  });
});