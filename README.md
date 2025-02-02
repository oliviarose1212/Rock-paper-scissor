Welcome to the Rock Paper Scissors game built using HTML, CSS, and JavaScript! This simple yet fun project allows users to play the classic game against a computer opponent. The game keeps track of wins, losses, and ties, which are stored locally using localStorage. Additionally, it offers an autoplay mode for continuous gameplay.

Manual Play: Select Rock, Paper, or Scissors by clicking buttons or pressing r, p, or s on the keyboard.
Autoplay Mode: Automatically play rounds against the computer every second until stopped.
Score Tracking: Keeps track of wins, losses, and ties even after page reloads.
Reset Score: Clear the current game score with a confirmation prompt.
Keyboard Shortcuts:
Press a to toggle autoplay mode.
Press Backspace to trigger the score reset prompt.
Clone or download the repository.
Open index.html in any modern web browser.
Choose your move by:
Clicking the Rock, Paper, or Scissors buttons.
Pressing r, p, or s on the keyboard.
Check the results and track your score at the top of the page.
Click Auto Play or press a to start autoplay mode.
index.html: Game layout and interface
style.css: Basic styles for the game
script.js: Main game logic
playGame(playerMove): Handles player moves and determines the winner.
pickComputerMove(): Randomly selects the computer's move.
updateScoreElement(): Updates the score display.
autoPlay(): Starts and stops autoplay mode.
