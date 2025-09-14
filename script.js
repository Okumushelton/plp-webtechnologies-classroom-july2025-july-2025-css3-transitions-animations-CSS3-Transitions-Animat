// Global variables
// I'm using an object to track the animation state of multiple boxes
// This demonstrates how to organize related data in a structured way
let animationState = {
    box1: true,    // Box 1 starts with animation enabled
    box2: false,   // Box 2 starts with animation disabled
    box3: false    // Box 3 starts with animation disabled
};

// This is a global variable that I'll use to demonstrate variable scope
// Global variables are accessible anywhere in the code, which can be both useful and risky
let globalVar = "I'm a global variable";

// Wait for DOM to load before adding event listeners
// This is important because we can't interact with HTML elements until they exist
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded, now I can set up event listeners");
    
    // Part 2: JavaScript Functions buttons
    // I'm connecting each button to its corresponding function
    // This shows how JavaScript can respond to user interactions
    document.getElementById('calculateAreaBtn').addEventListener('click', calculateArea);
    document.getElementById('showMessageBtn').addEventListener('click', showMessage);
    document.getElementById('startAnimationBtn').addEventListener('click', startAnimation);
    
    // Part 3: Combined CSS & JavaScript buttons
    // For the toggle button, I'm using an anonymous function that calls toggleAnimation
    // This allows me to pass a parameter ('box1') to the function
    document.getElementById('togglePulseBtn').addEventListener('click', function() {
        toggleAnimation('box1');
    });
    document.getElementById('openModalBtn').addEventListener('click', triggerModal);
    document.getElementById('changeColorBtn').addEventListener('click', changeColor);
    
    // Modal close buttons
    // Both close buttons trigger the same function
    // This is an example of code reuse - one function handles multiple elements
    document.getElementById('closeModalBtn').addEventListener('click', closeModal);
    document.getElementById('closeModalBtn2').addEventListener('click', closeModal);
    
    // Card flip
    // The 'this' keyword refers to the element that was clicked
    // This is a powerful way to make functions work with different elements
    document.getElementById('flipCard').addEventListener('click', function() {
        flipCard(this);
    });
});

// Part 2: JavaScript Functions

// Function with parameters and return value
// This demonstrates how functions can take input and return output
// The parameters (width and height) make this function reusable with different values
function calculateRectangleArea(width, height) {
    // The return statement sends a value back to whoever called this function
    return width * height;
}

// Function demonstrating scope
// This shows the difference between local and global variables
// 'var' creates a function-scoped variable, while 'let' creates a block-scoped variable
function scopeDemo() {
    // This variable is local to this function - it can't be accessed outside
    var localVar = "I'm a local variable";
    
    // This modifies the global variable declared at the top
    // Notice I don't use 'var', 'let', or 'const' here
    globalVar = "I'm a modified global variable";
    
    // Logging to the console is helpful for debugging
    console.log("Inside function: " + localVar);
    console.log("Inside function: " + globalVar);
    
    // Returning the local variable allows external code to access its value
    return localVar;
}

// Function to calculate and display area
// This demonstrates how to call another function and use its return value
function calculateArea() {
    // Constants are values that won't change during execution
    const width = 10;
    const height = 5;
    
    // Calling our reusable function with specific values
    const area = calculateRectangleArea(width, height);
    
    // Updating the page content based on the calculation
    // This shows how JavaScript can dynamically modify the webpage
    document.getElementById('output').textContent = 
        `The area of a rectangle with width ${width} and height ${height} is ${area}`;
}

// Function to show message
// This demonstrates variable scope in action
function showMessage() {
    // Calling scopeDemo() which returns a value and modifies a global variable
    const localResult = scopeDemo();
    
    // Displaying both the local result and the modified global variable
    // Template literals (using backticks) make it easy to combine strings and variables
    document.getElementById('output').textContent = 
        `Local variable inside function: ${localResult}\nGlobal variable: ${globalVar}`;
}

// Function to start animation
// This shows how JavaScript can control CSS animations
function startAnimation() {
    document.getElementById('output').textContent = 
        "Starting animation... Check the boxes in Section 3!";
    
    // Trigger animations on boxes
    // This demonstrates how we can sequence actions
    toggleAnimation('box2');
    
    // setTimeout allows us to delay execution of code
    // Here I'm using an arrow function for the callback
    setTimeout(() => toggleAnimation('box3'), 1000);
}

// Part 3: Combined CSS & JavaScript

// Function to toggle animation
// This demonstrates how JavaScript can control CSS properties directly
function toggleAnimation(boxId) {
    // First, get a reference to the HTML element
    const box = document.getElementById(boxId);
    
    // Check the current animation state for this box
    if (animationState[boxId]) {
        // If animation is running, stop it by setting animation to 'none'
        box.style.animation = 'none';
        animationState[boxId] = false;
        console.log(`Stopped animation on ${boxId}`);
    } else {
        // If animation is stopped, start it by setting a specific animation
        box.style.animation = 'pulse 2s infinite';
        animationState[boxId] = true;
        console.log(`Started animation on ${boxId}`);
    }
}

// Function to flip card
// This demonstrates how to toggle between two states
function flipCard(card) {
    // Check the current transform value
    // If it's rotated 180 degrees, set it back to 0, otherwise set it to 180
    // This ternary operator is a concise way to write an if-else statement
    card.style.transform = card.style.transform === 'rotateY(180deg)' ? 
        'rotateY(0deg)' : 'rotateY(180deg)';
    
    console.log("Card flipped!");
}

// Function to trigger modal
// This shows how JavaScript can change CSS display properties
function triggerModal() {
    document.getElementById('modal').style.display = 'flex';
    console.log("Modal opened");
}

// Function to close modal
function closeModal() {
    document.getElementById('modal').style.display = 'none';
    console.log("Modal closed");
}

// Function to change box color
// This demonstrates how to work with multiple elements and generate random values
function changeColor() {
    // Get all elements with the class 'animation-box'
    const boxes = document.querySelectorAll('.animation-box');
    
    // Generate a random hue value between 0 and 359
    const hue = Math.floor(Math.random() * 360);
    console.log(`Changing colors to hue: ${hue}`);
    
    // Loop through all the boxes and update their background
    // forEach is a modern way to iterate through arrays and NodeLists
    boxes.forEach(box => {
        // Using template literals to create a gradient with the random hue
        // HSL color mode is great for programmatic color generation
        box.style.background = `linear-gradient(45deg, hsl(${hue}, 70%, 60%), hsl(${hue + 40}, 70%, 60%))`;
    });
}