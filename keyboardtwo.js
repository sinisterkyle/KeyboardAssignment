const keys = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let startingGuesses = 26;

const guessesEl = document.querySelector('#guesses');
guessesEl.textContent = 26;
const randomWord = keys[Math.floor(Math.random() * 26)];
console.log(randomWord);
let wordToGuess = ''
for(let i = 0; i < randomWord.length; i++) {
  wordToGuess += '_'
}
const wordEl = document.querySelector('#key');
wordEl.textContent = wordToGuess;

document.body.addEventListener('keyup', function(event) {
  const letterIndex = randomWord.indexOf(event.key);
  console.log(letterIndex);
  if(letterIndex === -1) {
    startingGuesses--;
    guessesEl.textContent = startingGuesses;
  } else {
    let wordArray = wordToGuess.split('');
    for(let i = 0; i < wordToGuess.length; i++) {
      if(randomWord[i] === event.key) {
        wordArray[i] = randomWord[i];
      }
    }
    wordToGuess = wordArray.join('');
    wordEl.textContent = 'SECRET KEY "' + wordToGuess + '" PRESSED';
  }
});
function refreshPage(){
    window.location.reload();
};
