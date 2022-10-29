import { NumberFormatPipe } from './number-format.pipe';

describe('NumberFormatPipe', () => {
  const pipe = new NumberFormatPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transforms "456 890" to "457 tys."', () => {
    expect(pipe.transform('456890')).toBe('457 tys.');
  });

  it('transforms "1 456 890" to "1.5 mln"', () => {
    expect(pipe.transform('1456890')).toBe('1.5 mln');
  });
});
