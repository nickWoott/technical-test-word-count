#!/usr/bin/env ts-node

import { countWordsInFile } from './functions';

if (process.argv.length < 3) {
  console.error('please provide a filepath');
  process.exit(1);
}

console.log('counting words...');

const filePath = process.argv[2];

countWordsInFile(filePath);
