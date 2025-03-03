// Array of words for the test
const words = [
  "apple", "banana", "cherry", "date", "elderberry",
  "fig", "grape", "honeydew", "kiwi", "lemon"
];

// Game state variables
let currentTest = 1;
let totalTests = 5;
let correctGuesses = 0;
let totalGuesses = 0;

// DOM elements
const wordDisplay = document.getElementById("word-display");
const guessForm = document.getElementById("guess-form");
const scoreDisplay = document.getElementById("score-display");

// Function to get random words from the array
function getRandomWords() {
  const randomWords = [];
  while (randomWords.length < 2) {
    const word = words[Math.floor(Math.random() * words.length)];
    if (!randomWords.includes(word)) randomWords.push(word);
  }
  return randomWords;
}

// Function to start the test
function startTest() {
  if (currentTest > totalTests) {
    alert("Test complete! Check your final Psychic Score.");
    resetGame();
    return;
  }

  const randomWords = getRandomWords();
  wordDisplay.textContent = "Think of the following words: " + randomWords.join(", ");
  setTimeout(() => {
    wordDisplay.textContent = "What were the words?";
    guessForm.style.display = "block";
  }, 3000);
}

// Function to check user guesses
function checkGuesses(event) {
  event.preventDefault();
  const guess1 = document.getElementById("guess1").value.trim().toLowerCase();
  const guess2 = document.getElementById("guess2").value.trim().toLowerCase();

  const randomWords = getRandomWords();
  if (randomWords.includes(guess1)) correctGuesses++;
  if (randomWords.includes(guess2)) correctGuesses++;
  totalGuesses += 2;

  scoreDisplay.textContent = `Your Psychic Score: ${correctGuesses}/${totalGuesses}`;
  currentTest++;
  guessForm.reset();
  guessForm.style.display = "none";
  startTest();
}

// Function to reset the game
function resetGame() {
  currentTest = 1;
  correctGuesses = 0;
  totalGuesses = 0;
  scoreDisplay.textContent = "Your Psychic Score: 0/0";
  startTest();
}

// Event Listeners
guessForm.addEventListener("submit", checkGuesses);

// Start the first test
startTest();