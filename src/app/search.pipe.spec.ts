import { SearchPipe } from './search.pipe';

describe('SearchPipe', () => {
  it('create an instance', () => {
    const pipe = new SearchPipe();
    expect(pipe).toBeTruthy();
  });

  it('should limit values when search is matched', () => {
    const values = [
      { description: 'aaaa' },
      { description: 'bbbb' },
    ];
    const pipe = new SearchPipe();

    const result = pipe.transform(values, 'aa');
    expect(result).toHaveSize(1);
  });

  it('should handle null search value', () => {
    const values = [
      { description: 'aaaa' },
      { description: 'bbbb' },
    ];
    const pipe = new SearchPipe();
    const result = pipe.transform(values, undefined);
    expect(result).toEqual(values);
  });
});
