// Global variables
let animationState = {
    box1: true,
    box2: false,
    box3: false
};

let globalVar = "I'm a global variable";

// Wait for DOM to load before adding event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Part 2: JavaScript Functions buttons
    document.getElementById('calculateAreaBtn').addEventListener('click', calculateArea);
    document.getElementById('showMessageBtn').addEventListener('click', showMessage);
    document.getElementById('startAnimationBtn').addEventListener('click', startAnimation);
    
    // Part 3: Combined CSS & JavaScript buttons
    document.getElementById('togglePulseBtn').addEventListener('click', function() {
        toggleAnimation('box1');
    });
    document.getElementById('openModalBtn').addEventListener('click', triggerModal);
    document.getElementById('changeColorBtn').addEventListener('click', changeColor);
    
    // Modal close buttons
    document.getElementById('closeModalBtn').addEventListener('click', closeModal);
    document.getElementById('closeModalBtn2').addEventListener('click', closeModal);
    
    // Card flip
    document.getElementById('flipCard').addEventListener('click', function() {
        flipCard(this);
    });
});

// Part 2: JavaScript Functions

// Function with parameters and return value
function calculateRectangleArea(width, height) {
    return width * height;
}

// Function demonstrating scope
function scopeDemo() {
    var localVar = "I'm a local variable";
    globalVar = "I'm a modified global variable";
    console.log("Inside function: " + localVar);
    console.log("Inside function: " + globalVar);
    return localVar;
}

// Function to calculate and display area
function calculateArea() {
    const width = 10;
    const height = 5;
    const area = calculateRectangleArea(width, height);
    
    document.getElementById('output').textContent = 
        `The area of a rectangle with width ${width} and height ${height} is ${area}`;
}

// Function to show message
function showMessage() {
    const localResult = scopeDemo();
    document.getElementById('output').textContent = 
        `Local variable inside function: ${localResult}\nGlobal variable: ${globalVar}`;
}

// Function to start animation
function startAnimation() {
    document.getElementById('output').textContent = 
        "Starting animation... Check the boxes in Section 3!";
    
    // Trigger animations on boxes
    toggleAnimation('box2');
    setTimeout(() => toggleAnimation('box3'), 1000);
}

// Part 3: Combined CSS & JavaScript

// Function to toggle animation
function toggleAnimation(boxId) {
    const box = document.getElementById(boxId);
    
    if (animationState[boxId]) {
        box.style.animation = 'none';
        animationState[boxId] = false;
    } else {
        box.style.animation = 'pulse 2s infinite';
        animationState[boxId] = true;
    }
}

// Function to flip card
function flipCard(card) {
    card.style.transform = card.style.transform === 'rotateY(180deg)' ? 
        'rotateY(0deg)' : 'rotateY(180deg)';
}

// Function to trigger modal
function triggerModal() {
    document.getElementById('modal').style.display = 'flex';
}

// Function to close modal
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Function to change box color
function changeColor() {
    const boxes = document.querySelectorAll('.animation-box');
    const hue = Math.floor(Math.random() * 360);
    
    boxes.forEach(box => {
        box.style.background = `linear-gradient(45deg, hsl(${hue}, 70%, 60%), hsl(${hue + 40}, 70%, 60%))`;
    });
}