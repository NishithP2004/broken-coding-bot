// Generate a random keymap
var keymap = generateKeymap();
console.log("Keymap:", keymap);

// Attach keydown event listener
document.addEventListener("keydown", function(event) {
    console.log("Triggered")
  // Ignore keydown events if Ctrl, Shift, or Alt is pressed
  if (event.ctrlKey || event.shiftKey || event.altKey) return;

  // Check if the pressed key is a letter
  if (event.key.length === 1 && /[a-zA-Z]/.test(event.key)) {
    var charUpperCase = keymap[event.key.toLowerCase()] || event.key;
    event.preventDefault();
    var activeElement = document.activeElement;
    var selectionStart = activeElement.selectionStart;
    var selectionEnd = activeElement.selectionEnd;
    var currentValue = activeElement.value;
    var newValue = currentValue.slice(0, selectionStart) + charUpperCase + currentValue.slice(selectionEnd);
    activeElement.value = newValue;
    activeElement.setSelectionRange(selectionStart + 1, selectionStart + 1);
  }
});

function generateKeymap() {
  var keymap = {};
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  var shuffledAlphabet = shuffle(alphabet.split('')).join('');
  for (var i = 0; i < alphabet.length; i++) {
    keymap[alphabet[i]] = shuffledAlphabet[i];
  }
  return keymap;
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
