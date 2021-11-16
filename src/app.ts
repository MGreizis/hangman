const randomWords: string[] = ['random', 'school', 'hippopotamus', 'water', 'hangman', 'teacher', 'cryptocurrency', 'bitcoin', 'Albert Heijn'];
let word: string;
const guessedCharactersInWord: string[] = [];
let charactersInWord: string[];
const charactersInDOM: HTMLDivElement = document.querySelector('#letters');
const attemptInDOM: HTMLDivElement = document.querySelector('#attempt');
const attempts = 5;

/**
 * Add dashes to the guessedCharacters in word.
 */
function splitWordInCharacters() {
  charactersInWord = word.split('');
  console.log(charactersInWord);
  for (let i = 0; i < word.length; i += 1) {
    guessedCharactersInWord.push('-');
  }
}

/**
 * Function that finds the index of characters in array
 *
 * @param target
 * @returns indexLocation
 */
function findCharsInArray(target: HTMLElement) {
  const indexLocation: number[] = [];
  for (let i = 0; i < charactersInWord.length; i += 1) {
    if (target.id === charactersInWord[i]) {
      console.log(charactersInWord[i]);
      indexLocation.push(i);
    }
  }
  // console.log(indexLocation);
  return indexLocation;
}

/**
 * Function to set a new word
 *
 * @param {string} newWord - a newly chosen word
 */
function setWord(newWord: string) {
  word = newWord;
}

/**
 * Function to write the attempts to the DOM
 */
function writeAttemptToTheDOM() {
  attemptInDOM.innerHTML = String(attempts);
}

/**
 * Function to write the guessed letters to the DOM
 */
function writeGuessedWordToTheDOM() {
  charactersInDOM.innerHTML = '';
  guessedCharactersInWord.forEach((letter) => {
    console.log(letter);
    const li: HTMLLIElement = document.createElement('li');
    li.innerText = letter;
    charactersInDOM.append(li);
  });
}

/**
 * Function to handle the click event
 *
 * @param e {event} - click event
 */
function guessLetter(e: Event) {
  // the target element where the user clicked
  const target: HTMLElement = e.target as HTMLElement;
  // the letter where the user clicked on
  const letter: string = target.id;
  console.log(letter);
  findCharsInArray(target);
}

/**
 * Function to write the alphabet keyboard to the DOM
 */
function writeAlphabetToTheDom() {
  const alphabet: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const keyboard: HTMLDivElement = document.querySelector('#keyboard');
  alphabet.forEach((element) => {
    const divKey: HTMLDivElement = document.createElement('div');
    divKey.addEventListener('click', guessLetter);
    divKey.id = element;
    divKey.classList.add('key');
    divKey.innerHTML = element;
    keyboard.append(divKey);
  });
}

/**
 * Returns a random number between min and max
 *
 * @param {number} min - lower boundary
 * @param {number} max - upper boundary
 * @returns {number} returns a random number
 */
function randomNumber(min: number, max: number): number {
  return Math.round(Math.random() * (max - min) + min);
}

/**
 * Function to initialize the programme
 */
function init() {
  // write the alphabet keyboard to the DOM
  writeAlphabetToTheDom();
  // choose a word
  setWord(randomWords[randomNumber(0, randomWords.length)]);
  console.log(word);
  splitWordInCharacters();
  writeAttemptToTheDOM();
  writeGuessedWordToTheDOM();
}

window.addEventListener('load', init);
