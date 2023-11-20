import { readFile } from 'fs/promises';

export const countWords = (text: string): number => {
  const wordsArray = text.split(/\s+/);

  const wordCount = wordsArray.length;

  return wordCount;
};

export const countWordsInFile = async (filePath: string) => {
  try {
    const fileContentAsString = await readFile(filePath, 'utf8');
    const wordCount = countWords(fileContentAsString);
    console.log(`there are ${wordCount} words in this document`);
  } catch (error) {
    console.log(error);
  }
};
