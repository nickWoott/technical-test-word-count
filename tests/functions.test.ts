import { countWordsInFile, countWords } from '../src/functions';
import { readFile } from 'fs/promises';
import { mockData } from './mockData';

jest.mock('fs/promises', () => ({
  readFile: jest.fn(),
}));

describe('countWords', () => {
  mockData.forEach((item) => {
    test('returns a number', () => {
      const result = countWords(item.text);
      expect(typeof result).toBe('number');
    });
    test('returns correct result', () => {
      const result = countWords(item.text);
      expect(result).toBe(item.wordCount);
    });
  });
});

describe('countWordsInFile', () => {
  mockData.forEach((item) => {
    test('counts words in a file', async () => {
      (readFile as jest.Mock).mockResolvedValue(item.text);

      const logSpy = jest.spyOn(console, 'log');

      await countWordsInFile('test-file.txt');

      expect(logSpy).toHaveBeenCalledWith(
        `there are ${item.wordCount} words in this document`
      );
    });
  });

  test('handles file reading error', async () => {
    const errorMessage = 'Error reading file';
    (readFile as jest.Mock).mockRejectedValue(new Error(errorMessage));

    const logSpy = jest.spyOn(console, 'log');

    await countWordsInFile('nonexistent-file.txt');

    expect(logSpy).toHaveBeenCalledWith(new Error(errorMessage));
  });
});
