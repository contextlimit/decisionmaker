// Get elements from the DOM
const form = document.getElementById('choices-form');
const input = document.getElementById('choices');
const outputDiv = document.getElementById('output');

// Array to store choices
let choices = [];

// Function to handle form submission
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent page reload

  // Get choices from the input field
  const inputValues = input.value.split(',').map(decision => decision.trim());
  choices = inputValues.filter(decision => decision);

  // Remove duplicates from the choices array
  choices = Array.from(new Set(choices));

  // Check if the choices array is empty or has only one input
  if (choices.length <= 1) {
    outputDiv.textContent = 'You must enter at least two choices';
    outputDiv.style.color = '#fff';
    outputDiv.style.backgroundColor = '#000';
  } else {
    // Generate a random index
    const randomIndex = Math.floor(Math.random() * choices.length);

    // Display the random outcome
    const decision = choices[randomIndex];
    let displayedDecision = decision;
    if (decision.length > 500) {
      displayedDecision = `${decision.substring(0, 500)}...`;
    }
    outputDiv.textContent = displayedDecision;
    outputDiv.style.color = '#4caf50';

    // Add a subtle visual cue for reroll
    outputDiv.style.backgroundColor = '#f2dede';
    setTimeout(() => {
      outputDiv.style.backgroundColor = '';
    }, 500);
  }
});
