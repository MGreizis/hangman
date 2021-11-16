const randomWords = ['random', 'school', 'hippopotamus', 'water', 'hangman', 'teacher', 'cryptocurrency', 'bitcoin', 'Albert Heijn'];
let word;
const guessedCharactersInWord = [];
let charactersInWord;
const charactersInDOM = document.querySelector('#letters');
const attemptInDOM = document.querySelector('#attempt');
const attempts = 5;
function splitWordInCharacters() {
    charactersInWord = word.split('');
    console.log(charactersInWord);
    for (let i = 0; i < word.length; i += 1) {
        guessedCharactersInWord.push('-');
    }
}
function findCharsInArray(target) {
    const indexLocation = [];
    for (let i = 0; i < charactersInWord.length; i += 1) {
        if (target.id === charactersInWord[i]) {
            console.log(charactersInWord[i]);
            indexLocation.push(i);
        }
    }
    return indexLocation;
}
function setWord(newWord) {
    word = newWord;
}
function writeAttemptToTheDOM() {
    attemptInDOM.innerHTML = String(attempts);
}
function writeGuessedWordToTheDOM() {
    charactersInDOM.innerHTML = '';
    guessedCharactersInWord.forEach((letter) => {
        console.log(letter);
        const li = document.createElement('li');
        li.innerText = letter;
        charactersInDOM.append(li);
    });
}
function guessLetter(e) {
    const target = e.target;
    const letter = target.id;
    console.log(letter);
    findCharsInArray(target);
}
function writeAlphabetToTheDom() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const keyboard = document.querySelector('#keyboard');
    alphabet.forEach((element) => {
        const divKey = document.createElement('div');
        divKey.addEventListener('click', guessLetter);
        divKey.id = element;
        divKey.classList.add('key');
        divKey.innerHTML = element;
        keyboard.append(divKey);
    });
}
function randomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
function init() {
    writeAlphabetToTheDom();
    setWord(randomWords[randomNumber(0, randomWords.length)]);
    console.log(word);
    splitWordInCharacters();
    writeAttemptToTheDOM();
    writeGuessedWordToTheDOM();
}
window.addEventListener('load', init);
//# sourceMappingURL=app.js.map