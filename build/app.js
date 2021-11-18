const randomWords = ['random', 'school', 'hippopotamus', 'water', 'hangman', 'teacher', 'cryptocurrency', 'bitcoin', 'AlbertHeijn'];
let word;
let charactersInWord;
const guessedcharactersInWord = [];
const lettersInDOM = document.querySelector('#letters');
const attemptInDOM = document.querySelector('#attempt');
let attempts = 5;
function splitWordInCharacters() {
    charactersInWord = word.split('');
    for (let i = 0; i < word.length; i += 1) {
        guessedcharactersInWord.push('-');
    }
}
function addLetterToGuessedWord(indexArray, letter) {
    indexArray.forEach((charIndex) => {
        guessedcharactersInWord[charIndex] = letter;
    });
}
function writeAttemptToTheDOM() {
    attemptInDOM.innerHTML = String(attempts);
}
function findLetters(clickedLetter) {
    const indexOfLetters = [];
    charactersInWord.forEach((letterInArray, index) => {
        if (clickedLetter === letterInArray) {
            indexOfLetters.push(index);
        }
    });
    return indexOfLetters;
}
function setWord(newWord) {
    word = newWord;
}
function checkWinner() {
    console.log(`${word} is ${guessedcharactersInWord.join('')}`);
    if (word === guessedcharactersInWord.join('')) {
        lettersInDOM.classList.add('winner');
    }
    else if (attempts === 0) {
        lettersInDOM.classList.add('lost');
        const keys = document.querySelectorAll('.key');
        keys.forEach((key) => {
            key.classList.add('idle');
        });
    }
}
function writeGuessedWordToTheDOM() {
    lettersInDOM.innerHTML = '';
    guessedcharactersInWord.forEach((letter) => {
        console.log(letter);
        const li = document.createElement('li');
        li.innerText = letter;
        lettersInDOM.append(li);
    });
}
function guessLetter(e) {
    const target = e.target;
    if (target.className === 'key') {
        console.log(target.id);
        const indexes = findLetters(target.id);
        console.log(indexes);
        if (indexes.length !== 0) {
            console.log('found');
            addLetterToGuessedWord(indexes, target.id);
            document.getElementById(target.id).classList.add('idle');
        }
        else {
            console.log('not found');
            attempts -= 1;
            writeAttemptToTheDOM();
        }
        checkWinner();
        writeGuessedWordToTheDOM();
    }
}
function writeAlphabetToTheDom() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const keyboard = document.querySelector('#keyboard');
    keyboard.addEventListener('click', guessLetter);
    alphabet.forEach((element) => {
        const divKey = document.createElement('div');
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
    console.log(word);
    console.log(guessedcharactersInWord);
    writeAttemptToTheDOM();
    writeGuessedWordToTheDOM();
}
window.addEventListener('load', init);
//# sourceMappingURL=app.js.map