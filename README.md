# Technical Test - Word Count - solution

## File Structure

Two files can be found in the src folder. One file containing functions, and another containing the main execution file. Tests are located in the test folder. To read the original task description, please refer to the originalTask file located in the root of the project.

## Running the code

`npm i` to install dependencies.s

There is a script to run the main file using `npm run word-count`. Follow this command with the path to the file you would like to read.
`npm run word-count input.txt` Ensure you do this from the root directory.

## Installing the CLI tool

The CLI tool is not yet published to NPM. It can be installed locally using an npm link.

`npm run install-cli`

This will allow you to run word-count as a command in your terminal.

`word-count ./someFolder/someFile`

## Tests

Unit tests for the function can be run using `npm t`.
