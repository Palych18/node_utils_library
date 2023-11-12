import { getCountOfVowels } from './getCountOfVowels.js';

const output = document.querySelector('#output');
const button = document.querySelector('#button');

button.addEventListener('click', function () {
  const userInput = document.querySelector('#input').value;
  const countOfVowels = getCountOfVowels(userInput);
  output.textContent = countOfVowels;
});
